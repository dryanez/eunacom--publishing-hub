// Clase 3.11 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Localizaciones anatómicas, zona discriminatoria de gonadotropina coriónica, criterios de metotrexato y salpingectomía de urgencia',
      say: 'Bienvenidos a la clase sobre embarazo ectópico, la principal causa de muerte materna por hemorragia durante el primer trimestre de la gestación. En esta sesión dominaremos las localizaciones tubáricas más frecuentes y más peligrosas, el uso de la zona discriminatoria de gonadotropina coriónica humana junto con la ecografía transvaginal, los criterios rigurosos para indicar tratamiento médico con metotrexato y las indicaciones quirúrgicas inaplazables de salpingectomía por laparoscopía. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Anatomía y puntos críticos',
      title: 'Localizaciones anatómicas del embarazo ectópico',
      nodes: [
        { id: 'tub', col: 0, row: 1, k: 'start', t: 'Embarazo tubárico (95%)', s: 'Implantación en la trompa de Falopio por alteración del transporte ciliar' },
        { id: 'amp', col: 2, row: 0, k: 'good', t: 'Porción ampular (75 a 80%)', s: 'Localización más frecuente de todas; mayor distensibilidad luminal' },
        { id: 'ist', col: 2, row: 1, k: 'risk', t: 'Porción ístmica (12%)', s: 'Luz estrecha; rotura precoz entre las semanas seis y ocho' },
        { id: 'cor', col: 2, row: 2, k: 'trap', t: 'Porción intersticial o cornual (2 a 3%)', s: 'Rodeada de miometrio vascularizado; rotura tardía con sangrado masivo cataclísmico' },
        { id: 'rar', col: 4, row: 1, k: 'alert', t: 'Localizaciones raras (5%)', s: 'Ovárico, cicatriz de cesárea previa, cervical y peritoneal abdominal' },
      ],
      edges: [
        { from: 'tub', to: 'amp', label: 'más frecuente' },
        { from: 'tub', to: 'ist', label: 'rotura precoz' },
        { from: 'tub', to: 'cor', label: 'más letal' },
        { from: 'tub', to: 'rar', label: 'extratubáricas' },
      ],
      steps: [
        {
          show: ['tub', 'amp'],
          note: 'Localización ampular más frecuente',
          say: 'Más del noventa y cinco por ciento de los embarazos ectópicos se implantan en la trompa de Falopio. La porción ampular es la localización más frecuente de todas, concentrando casi el ochenta por ciento de los casos gracias a su mayor diámetro y distensibilidad luminal relativa.',
        },
        {
          show: ['ist', 'cor'],
          note: 'Porción ístmica e intersticial cornual',
          say: 'La porción ístmica tiene una pared poco elástica y se rompe tempranamente entre la semana seis y ocho. En contraste, la porción intersticial o cornual está rodeada por miometrio y se distiende hasta la semana doce a dieciséis, pero al romperse erosiona la arteria uterina desatando un sangrado cataclísmico mortal.',
        },
        {
          show: ['rar'],
          note: 'Localizaciones extratubáricas de alto riesgo',
          say: 'Un cinco por ciento corresponde a implantaciones atípicas en ovario, canal cervical, cavidad peritoneal o en la cicatriz de una cesárea previa, esta última de incidencia creciente y con elevado riesgo de acretismo placentario precoz y rotura uterina.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Epidemiología y riesgo',
      title: 'Factores de riesgo mayores y menores para embarazo ectópico',
      cards: [
        {
          title: 'Factores de alto riesgo',
          tag: 'Daño tubárico documentado',
          kind: 'alert',
          items: [
            {
              t: 'Antecedente de embarazo ectópico previo',
              d: 'Factor de riesgo independiente más potente (riesgo relativo mayor a diez)',
              say: 'Haber tenido un embarazo ectópico previo es el factor de riesgo más potente de todos, elevando más de diez veces la probabilidad de recurrencia en futuros embarazos por secuelas anatómicas en el aparato tubárico.',
            },
            {
              t: 'Cirugía tubárica previa o salpingoplastía',
              d: 'Recanalización, ligadura fallida o cirugía reconstructiva previa',
              say: 'Cualquier antecedente quirúrgico sobre las trompas, incluyendo intentos de recanalización o fallas de esterilización tubárica, altera la arquitectura muscular y la motilidad ciliar endotubárica.',
            },
            {
              t: 'Enfermedad pélvica inflamatoria previa',
              d: 'Salpingitis por Chlamydia trachomatis o Neisseria gonorrhoeae',
              say: 'La salpingitis crónica destruye los cilios del endosálpinx y forma sinequias intratubáricas que atrapan mecánicamente al blastocisto en su tránsito hacia la cavidad uterina.',
            },
          ],
        },
        {
          title: 'Factores de riesgo moderado',
          tag: 'Métodos y fertilización',
          kind: 'criteria',
          items: [
            {
              t: 'Falla de dispositivo intrauterino (DIU)',
              d: 'El DIU no causa ectópico pero si falla el embarazo suele ser ectópico',
              say: 'El dispositivo intrauterino previene eficazmente la gestación intrauterina; por ende, si una mujer usuaria de DIU queda embarazada, la probabilidad de que sea ectópico alcanza hasta un cincuenta por ciento.',
            },
            {
              t: 'Técnicas de reproducción asistida',
              d: 'Inducción de ovulación y transferencia embrionaria con riesgo de embarazo heterotópico',
              say: 'La fertilización asistida eleva el riesgo de implantación tubárica por hiperestimulación y reflujo tubárico, aumentando la incidencia de embarazo heterotópico con un feto intrauterino y otro ectópico simultáneos.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Formas de presentación clínica',
      title: 'Contraste semiológico: Ectópico No Roto versus Ectópico Roto Complicado',
      head: ['Signo o parámetro', 'Embarazo ectópico no roto', 'Embarazo ectópico roto (abdomen agudo)'],
      rows: [
        {
          cells: ['Estado hemodinámico', 'Estable; presión arterial y pulso normales', 'Inestabilidad hemodinámica; hipotensión, taquicardia y shock'],
          say: 'El ectópico no roto mantiene signos vitales rigurosamente normales, mientras que la rotura tubárica desata colapso hemodinámico con shock hipovolémico por hemoperitoneo masivo.',
        },
        {
          cells: ['Dolor abdominal y pelviano', 'Dolor sordo leve a moderado localizado en fosa ilíaca', 'Dolor lacerante súbito e intenso generalizado con defensa'],
          say: 'El dolor del ectópico no roto es localizado y tolerable, mientras que el roto debuta con un dolor lancinante brusco que se extiende a todo el abdomen con signos de irritación peritoneal.',
        },
        {
          cells: ['Examen ginecológico y pelvis', 'Útero blando; anexos sensibles sin gran masa', 'Dolor exquisito al movilizar cuello y Douglas abombado'],
          say: 'En el ectópico roto la movilización del cuello uterino provoca un dolor insoportable conocido como signo de Frenkel, con fondo de saco posterior doloroso y ocupado por sangre.',
        },
        {
          cells: ['Conducta terapéutica inmediata', 'Evaluación médica para Metotrexato o laparoscopía', 'Laparoscopía o laparotomía exploradora urgente inmediata'],
          say: 'El no roto permite completar el estudio para evaluar metotrexato, mientras que el roto es una emergencia quirúrgica vital que no admite esperas de exámenes.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Algoritmo de diagnóstico integrado',
      title: 'Zona discriminatoria de gonadotropina coriónica y ecografía transvaginal',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Amenorrea y dolor pélvico', s: 'Test de embarazo positivo con metrorragia escasa oscura en primer trimestre' },
        { id: 'eco', col: 1, row: 1, k: 'mech', t: 'Ecografía transvaginal', s: 'Búsqueda sistemática de saco gestacional intrauterino y masas anexiales' },
        { id: 'hcg', col: 2, row: 1, k: 'q', t: 'Determinación de beta hCG', s: 'Punto de corte de zona discriminatoria: 1.500 a 2.000 UI por litro' },
        { id: 'alt', col: 3, row: 0, k: 'trap', t: 'Beta mayor a 1.500 con útero vacío', s: 'Diagnóstico de embarazo ectópico casi de certeza; explorar anexos' },
        { id: 'baj', col: 3, row: 2, k: 'risk', t: 'Beta menor a 1.500 con útero vacío', s: 'Embarazo de localización incierta; curva seriada de beta hCG a las 48 horas' },
        { id: 'cur', col: 4, row: 2, k: 'alert', t: 'Curva subóptima en 48 horas', s: 'Aumento menor al cincuenta por ciento o meseta confirma patología' },
      ],
      edges: [
        { from: 'sos', to: 'eco', label: 'evaluación inicial' },
        { from: 'eco', to: 'hcg', label: 'cuantificación hormonal' },
        { from: 'hcg', to: 'alt', label: 'mayor a 1.500' },
        { from: 'hcg', to: 'baj', label: 'menor a 1.500' },
        { from: 'baj', to: 'cur', label: 'control 48 horas' },
      ],
      steps: [
        {
          show: ['sos', 'eco'],
          note: 'Evaluación inicial con ecografía transvaginal',
          say: 'Toda mujer en edad fértil con amenorrea, dolor hipogástrico y sangrado vaginal oscuro debe ser evaluada de inmediato con ecografía transvaginal para determinar la presencia de un saco gestacional dentro de la cavidad endometrial.',
        },
        {
          show: ['hcg', 'alt'],
          note: 'Zona discriminatoria ecográfica de beta hCG',
          say: 'La zona discriminatoria de la gonadotropina coriónica humana por vía transvaginal se sitúa entre mil quinientas y dos mil unidades internacionales por litro. Si el valor supera las mil quinientas unidades y el útero se encuentra completamente vacío, el diagnóstico es un embarazo ectópico hasta demostrar lo contrario.',
        },
        {
          show: ['baj', 'cur'],
          note: 'Manejo del embarazo de localización incierta',
          say: 'Si el valor es menor a mil quinientas unidades y no se visualiza saco intrauterino, se clasifica como embarazo de localización indeterminada. En una gestación intrauterina viable la hormona aumenta más del cincuenta por ciento cada cuarenta y ocho horas; un ascenso subóptimo o en meseta orienta fuertemente a ectópico o aborto retenido.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento farmacológico de elección',
      title: 'Criterios indispensables para tratamiento médico con Metotrexato',
      cards: [
        {
          title: 'Criterios de inclusión estrictos',
          tag: 'Cumplimiento simultáneo',
          kind: 'criteria',
          items: [
            {
              t: 'Estabilidad hemodinámica absoluta',
              d: 'Paciente asintomática o con dolor leve sin sospecha de rotura',
              say: 'La paciente debe encontrarse en perfectas condiciones hemodinámicas, sin signos de peritonismo ni hemoperitoneo significativo en el fondo de saco de Douglas.',
            },
            {
              t: 'Nivel basal de beta hCG bajo 5.000',
              d: 'Nivel plasmático de gonadotropina coriónica menor a cinco mil UI/L',
              say: 'El éxito del metotrexato decae notablemente con valores elevados. El punto de corte clásico para indicar manejo médico es una concentración menor a cinco mil unidades internacionales por litro.',
            },
            {
              t: 'Masa anexial menor a 3.5 centímetros',
              d: 'Diámetro ecográfico máximo de la masa ectópica inferior a 3.5 cm',
              say: 'La masa anexial no debe sobrepasar los tres coma cinco centímetros de diámetro mayor en la ecografía para minimizar el riesgo de rotura durante la lisis trofoblástica.',
            },
            {
              t: 'Ausencia de actividad cardíaca embrionaria',
              d: 'Latidos cardiofetales negativos en el doppler de la masa ectópica',
              say: 'La presencia de latidos cardíacos embrionarios en la masa ectópica es una contraindicación formal para metotrexato debido a la altísima tasa de fracaso farmacológico y hemorragia.',
            },
          ],
        },
        {
          title: 'Laboratorio previo obligatorio',
          tag: 'Seguridad hematológica y hepática',
          kind: 'alert',
          items: [
            {
              t: 'Hemograma y recuento plaquetario',
              d: 'Descartar anemia severa, leucopenia o trombocitopenia',
              say: 'El metotrexato es un antagonista del ácido fólico que inhibe la dihidrofolato reductasa. Requiere función medular ósea preservada para evitar aplasia medular grave.',
            },
            {
              t: 'Pruebas hepáticas y función renal normales',
              d: 'Creatinina y transaminasas en rangos normales de referencia',
              say: 'Se exige función hepática y renal normales, ya que el fármaco se excreta íntegramente por filtración renal y puede inducir toxicidad hepática aguda.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo de seguimiento médico',
      title: 'Seguimiento del tratamiento con Metotrexato en dosis única',
      head: ['Momento del protocolo', 'Acción médica requerida', 'Resultado esperado', 'Conducta según respuesta'],
      rows: [
        {
          cells: ['Día cero (inicio)', 'Administración intramuscular de Metotrexato', 'Dosis de 50 mg por metro cuadrado', 'Evitar ingesta de ácido fólico y antiinflamatorios'],
          say: 'El día cero se inyecta la dosis única intramuscular de cincuenta miligramos por metro cuadrado de superficie corporal, suspendiendo todo suplemento vitamínico con ácido fólico.',
        },
        {
          cells: ['Día cuatro', 'Control de gonadotropina coriónica humana', 'Frecuente aumento inicial de la hormona', 'Fenómeno normal por lisis trofoblástica celular'],
          say: 'En el día cuatro es habitual que la gonadotropina coriónica aumente ligeramente debido a la lisis celular trofoblástica; este aumento transitorio no significa fracaso terapéutico.',
        },
        {
          cells: ['Día siete', 'Control de gonadotropina coriónica humana', 'Descenso mayor o igual al quince por ciento', 'Comparar valor del día siete con el día cuatro'],
          say: 'El hito decisivo es el día siete: se exige una caída mayor o igual al quince por ciento respecto al valor del día cuatro para confirmar que el tratamiento ha sido exitoso.',
        },
        {
          cells: ['Seguimiento semanal posterior', 'Control semanal hasta negativización', 'Valores menores a cinco unidades por litro', 'Alta definitiva con indicación anticonceptiva'],
          say: 'Confirmada la respuesta, se mide la hormona semanalmente hasta alcanzar niveles indetectables menores a cinco unidades, garantizando la resolución completa del tejido ectópico.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Implantaciones atípicas complejas',
      title: 'Embarazo ectópico en cicatriz de cesárea y ectópico cervical',
      cards: [
        {
          title: 'Ectópico en cicatriz de cesárea',
          tag: 'Incidencia en aumento',
          kind: 'alert',
          items: [
            {
              t: 'Nidación en el defecto miometrial',
              d: 'Implantación del blastocisto sobre la histerorrafia previa',
              say: 'El saco gestacional se aloja dentro del nicho fibroso de la cicatriz de cesárea anterior. Si progresa hacia la serosa uterina, genera rotura catastrófica en el primer trimestre con hemoperitoneo fulminante.',
            },
            {
              t: 'Manejo en centros especializados',
              d: 'Resección laparoscópica o histeroscópica con embolización arterial previa',
              say: 'El legrado a ciegas está estrictamente contraindicado por el riesgo de perforación y hemorragia incoercible. Se maneja con inyección local de metotrexato o resección quirúrgica guiada.',
            },
          ],
        },
        {
          title: 'Ectópico cervical',
          tag: 'Sangrado exanguinante',
          kind: 'criteria',
          items: [
            {
              t: 'Implantación endocervical subístmica',
              d: 'Saco por debajo del orificio cervical interno en canal cervical hipervascular',
              say: 'El trofoblasto invade el estroma cervical, que carece de miometrio contráctil para hemostasia. La metrorragia suele ser abundante e indolora, simulando un aborto en curso.',
            },
            {
              t: 'Tamponamiento y hemostasia',
              d: 'Sonda de Foley intracervical con balón insuflado o metotrexato',
              say: 'Para controlar el sangrado se insufla una sonda con balón intracervical para compresión mecánica, asociando quimioterapia o ligadura de arterias hipogástricas.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Abordaje quirúrgico de urgencia',
      title: 'Técnicas quirúrgicas: Salpingectomía versus Salpingostomía',
      nodes: [
        { id: 'ind', col: 0, row: 1, k: 'start', t: 'Indicación quirúrgica', s: 'Inestabilidad hemodinámica, rotura, masa grande o fracaso de metotrexato' },
        { id: 'lap', col: 1, row: 1, k: 'mech', t: 'Vía de abordaje', s: 'Laparoscopía de elección en paciente compensada; laparotomía si shock extremo' },
        { id: 'ect', col: 2, row: 0, k: 'alert', t: 'Salpingectomía total', s: 'Extirpación completa de la trompa afectada; técnica estándar de elección' },
        { id: 'ost', col: 2, row: 2, k: 'good', t: 'Salpingostomía lineal conservadora', s: 'Incisión longitudinal en borde antimesentérico con aspiración del saco' },
        { id: 'tro', col: 4, row: 2, k: 'trap', t: 'Riesgo de trofoblasto persistente', s: 'Hasta 15 por ciento de tejido remanente activo; control semanal obligatorio' },
      ],
      edges: [
        { from: 'ind', to: 'lap', label: 'evaluación quirúrgica' },
        { from: 'lap', to: 'ect', label: 'paridad cumplida o trompa rota' },
        { from: 'lap', to: 'ost', label: 'trompa contralateral dañada' },
        { from: 'ost', to: 'tro', label: 'seguimiento hormonal' },
      ],
      steps: [
        {
          show: ['ind', 'lap'],
          note: 'Abordaje laparoscópico mínimamente invasivo',
          say: 'La cirugía está indicada de urgencia ante inestabilidad hemodinámica, dolor intratable, hemoperitoneo significativo, masa mayor a tres coma cinco centímetros o contraindicación de metotrexato. La vía laparoscópica es el estándar de oro por su menor dolor y pronta recuperación.',
        },
        {
          show: ['ect'],
          note: 'Salpingectomía total como técnica estándar',
          say: 'La salpingectomía total, consistente en la remoción completa de la trompa dañada, es la técnica más segura y definitiva. Está indicada ante rotura tubárica evidente, hemorragia activa o paridad cumplida.',
        },
        {
          show: ['ost', 'tro'],
          note: 'Salpingostomía conservadora y trofoblasto persistente',
          say: 'La salpingostomía lineal preserva la trompa abriendo una incisión antimesentérica para extraer el saco. Se reserva para mujeres que desean fertilidad futura cuya trompa contralateral está ausente o dañada, exigiendo monitoreo estricto de beta hCG semanal para pesquisar trofoblasto persistente.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Profilaxis y recomendaciones',
      title: 'Medidas complementarias en el postoperatorio del embarazo ectópico',
      head: ['Medida clínica', 'Población objetivo', 'Indicación farmacológica', 'Objetivo terapéutico'],
      rows: [
        {
          cells: ['Inmunoglobulina Anti-D', 'Mujeres con grupo Rh negativo no sensibilizadas', 'Trescientos microgramos intramuscular antes de 72 horas', 'Prevenir aloinmunización eritrocitaria futura'],
          say: 'Toda mujer con factor Rh negativo no sensibilizada debe recibir trescientos microgramos de inmunoglobulina anti-D dentro de las setenta y dos horas del procedimiento.',
        },
        {
          cells: ['Anticoncepción segura', 'Todas las pacientes tratadas con Metotrexato', 'Anticonceptivos orales o de barrera por al menos tres meses', 'Evitar teratogénesis por acumulación de antifolato'],
          say: 'Las pacientes que recibieron metotrexato deben posponer un nuevo embarazo durante al menos tres meses para evitar defectos congénitos graves por depleción de folato.',
        },
        {
          cells: ['Consejería de recurrencia', 'Toda paciente con antecedente de ectópico', 'Ecografía precoz a las cinco a seis semanas en nuevo embarazo', 'Pesquisar precozmente una nueva implantación ectópica'],
          say: 'En cualquier nuevo embarazo futuro se debe realizar una ecografía transvaginal precoz a las cinco semanas para confirmar de inmediato la ubicación intrauterina del saco.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Diagnóstico y Conducta ante Sospecha de Embarazo Ectópico',
      say: 'Revisemos el algoritmo estructurado para clasificar y manejar a la paciente con sospecha de embarazo ectópico.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de embarazo ectópico',
      head: ['Situación presentada en la pregunta', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Paciente con dolor pélvico, test de embarazo positivo e hipotensión severa', 'Solicitar ecografía transvaginal y cuantificación de beta hCG', 'Llevar a pabellón de inmediato para laparoscopía o laparotomía de urgencia'],
          say: 'En una paciente inestable con sospecha de ectópico roto no se pierde tiempo esperando exámenes de laboratorio. Se traslada a pabellón para control quirúrgico del sangrado.',
        },
        {
          cells: ['Ectópico de 3 cm con beta hCG de 2.800 UI/L y latidos embrionarios presentes', 'Indicar metotrexato intramuscular por tener masa pequeña y beta baja', 'Indicar manejo quirúrgico por presencia de latidos cardíacos fetales'],
          say: 'La presencia de actividad cardíaca embrionaria detectable contraindica el uso de metotrexato por su alta tasa de falla farmacológica y rotura.',
        },
        {
          cells: ['Aumento leve de beta hCG al día cuatro tras metotrexato', 'Considerar fracaso terapéutico e indicar cirugía inmediata', 'Explicar que es esperable y esperar el control obligatorio del día siete'],
          say: 'El alza hormonal en el día cuatro refleja lisis del sincitiotrofoblasto. El éxito se evalúa recién en el día siete exigiendo una caída mayor al quince por ciento.',
        },
        {
          cells: ['Beta hCG de 2.500 UI/L con ecografía que muestra endometrio grueso sin saco', 'Diagnosticar gestación intrauterina incipiente y citar en 2 semanas', 'Diagnosticar embarazo ectópico por superar la zona discriminatoria'],
          say: 'Con valores superiores a mil quinientas unidades y cavidad uterina vacía, el diagnóstico es ectópico hasta que se demuestre lo contrario.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2024',
      title: 'EUNACOM Julio 2024 · Pregunta 130',
      stem: 'Una paciente de 35 años con antecedente de enfermedad inflamatoria pélvica previa tratada, consulta por un cuadro de 24 horas de evolución de sangrado genital escaso y dolor abdominal bajo asociado a un test de embarazo en orina positivo. Refiere 6 semanas de amenorrea. Al examen físico sus signos vitales muestran frecuencia cardíaca de 82 latidos por minuto, presión arterial de 110/74 mmHg y se encuentra en buenas condiciones generales, sin signos peritoneales. La especuloscopía muestra escaso sangrado oscuro de origen uterino.',
      question: '¿Cuál es la conducta diagnóstica inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar ecografía transvaginal y niveles plasmáticos de gonadotropina coriónica humana cuantitativa' },
        { letter: 'B', text: 'Indicar reposo y control con ecografía en 7 días' },
        { letter: 'C', text: 'Realizar una laparoscopía exploradora inmediata' },
        { letter: 'D', text: 'Realizar legrado uterino instrumental de urgencia' },
        { letter: 'E', text: 'Solicitar una resonancia magnética nuclear de pelvis' },
      ],
      correct: 'A',
      explanation: 'En una paciente con metrorragia y dolor en el primer trimestre con prueba de embarazo positiva y antecedente de daño tubárico (EIP), el enfoque prioritario consiste en evaluar la ubicación de la gestación. La combinación de ecografía transvaginal con cuantificación de beta-hCG plasmática permite aplicar el concepto de zona discriminatoria y diferenciar entre embarazo intrauterino viable, aborto o embarazo ectópico no roto.',
      say: {
        stem: 'Una paciente de treinta y cinco años con antecedente de salpingitis consulta por sangrado genital escaso y dolor hipogástrico con amenorrea de seis semanas y prueba de embarazo positiva, encontrándose hemodinámicamente estable.',
        question: '¿Cuál es la conducta diagnóstica inicial más adecuada?',
        options: 'La opción A propone ecografía transvaginal y niveles de gonadotropina coriónica cuantitativa. La B control ecográfico en siete días. La C laparoscopía inmediata. La D legrado de urgencia. La E resonancia magnética. Piénsalo.',
        answer: 'La respuesta correcta es la A. En una paciente estable con sospecha de ectópico la conducta inicial indispensable es la asociación de ecografía transvaginal con niveles plasmáticos de beta hCG.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2024',
      title: 'EUNACOM Julio 2024 · Pregunta 55',
      stem: 'Una paciente de 27 años presenta amenorrea de 7 semanas y test de embarazo positivo. Consulta por dolor en fosa ilíaca derecha y escasa metrorragia oscura. Se encuentra estable hemodinámicamente. La ecografía transvaginal revela un útero con endometrio engrosado sin saco gestacional intrauterino y una masa anexial derecha de 28 mm sin latidos cardíacos. El nivel de beta-hCG cuantitativa es de 2.800 UI/L.',
      question: '¿Cuál es el diagnóstico más probable y la conducta correspondiente?',
      options: [
        { letter: 'A', text: 'Embarazo incipiente normal; control con beta-hCG en 48 horas' },
        { letter: 'B', text: 'Embarazo ectópico tubárico no roto; candidata a tratamiento médico con metotrexato' },
        { letter: 'C', text: 'Aborto completo; dar de alta con control ginecológico' },
        { letter: 'D', text: 'Embarazo ectópico roto; indicar laparotomía exploradora de urgencia' },
        { letter: 'E', text: 'Cuerpo lúteo hemorrágico; reposo y analgésicos orales' },
      ],
      correct: 'B',
      explanation: 'La paciente presenta un nivel de beta-hCG de 2.800 UI/L, superando ampliamente la zona discriminatoria de 1.500-2.000 UI/L sin evidencia de saco intrauterino, visualizándose una masa anexial compatible. Esto confirma un Embarazo Ectópico Tubárico. Al cumplir todos los criterios de metotrexato (hemodinámicamente estable, beta-hCG < 5.000 UI/L, masa < 3.5 cm y sin latidos cardíacos), califica como candidata ideal para manejo médico conservador con Metotrexato.',
      say: {
        stem: 'Una paciente de veintisiete años presenta beta hCG de dos mil ochocientas unidades, útero vacío en la ecografía y masa anexial derecha de veintiocho milímetros sin latidos, hemodinámicamente estable.',
        question: '¿Cuál es el diagnóstico más probable y la conducta correspondiente?',
        options: 'La opción A propone embarazo incipiente con control en cuarenta y ocho horas. La B embarazo ectópico tubárico candidato a metotrexato. La C aborto completo. La D ectópico roto con laparotomía. La E cuerpo lúteo hemorrágico. Piénsalo.',
        answer: 'La respuesta correcta es la B. La beta hCG supera la zona discriminatoria y el útero está vacío, confirmando ectópico. Al tener beta menor a cinco mil, masa menor a tres coma cinco centímetros y ausencia de latidos, cumple los criterios para metotrexato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Manejo del embarazo ectópico roto con shock hipovolémico',
      stem: 'Una mujer de 31 años es traída en ambulancia por dolor abdominal súbito de gran intensidad de inicio hace dos horas, acompañado de mareos y lipotimia. Presenta amenorrea de 6 semanas y prueba de orina positiva. Al ingreso se constata marcada palidez mucocutánea, sudoración fría, presión arterial de 80/40 mmHg y frecuencia cardíaca de 125 latidos por minuto. El abdomen se encuentra distendido con resistencia muscular involuntaria y signo de Blumberg francamente positivo. La movilización del cuello uterino desencadena un dolor insoportable.',
      question: '¿Cuál es la conducta médica inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar niveles de beta-hCG cuantitativa y esperar el resultado en sala' },
        { letter: 'B', text: 'Administrar dosis única de Metotrexato 50 mg/m² intramuscular de inmediato' },
        { letter: 'C', text: 'Reanimación agresiva con fluidos endovenosos y traslado inmediato a pabellón para laparoscopía o laparotomía de urgencia' },
        { letter: 'D', text: 'Realizar aspiración manual endouterina en box de urgencia' },
        { letter: 'E', text: 'Solicitar tomografía computarizada de abdomen y pelvis con contraste' },
      ],
      correct: 'C',
      explanation: 'El cuadro de dolor pelviano lacerante súbito con signos de irritación peritoneal, hipotensión arterial severa, taquicardia y shock hipovolémico en una paciente con amenorrea y prueba positiva es patognomónico de Embarazo Ectópico Roto con hemoperitoneo masivo. Constituye una emergencia quirúrgica vital extrema. La conducta mandatoria es la resucitación hemodinámica con fluidos y glóbulos rojos, y el traslado inmediato a pabellón para hemostasia quirúrgica mediante salpingectomía.',
      say: {
        stem: 'Una mujer de treinta y un años con amenorrea de seis semanas llega en shock hipovolémico con presión de ochenta con cuarenta, taquicardia y abdomen agudo peritoneal con dolor exquisito al movilizar el cérvix.',
        question: '¿Cuál es la conducta médica inmediata más adecuada?',
        options: 'La opción A propone esperar niveles de beta hCG. La B administrar metotrexato intramuscular. La C reanimación hemodinámica agresiva y traslado inmediato a pabellón para cirugía de urgencia. La D aspiración manual endouterina. La E tomografía con contraste. Piénsalo.',
        answer: 'La respuesta correcta es la C. Frente a un ectópico roto con shock hipovolémico la prioridad absoluta es la reanimación hemodinámica e intervención quirúrgica inmediata en pabellón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Evaluación de la respuesta al Metotrexato en el día siete',
      stem: 'Una paciente de 28 años con embarazo ectópico no roto recibió tratamiento con dosis única de Metotrexato intramuscular. Su nivel de beta-hCG basal el día de la administración (día cero) fue de 3.200 UI/L. El control del día cuatro mostró un nivel de 3.600 UI/L. Al control obligatorio del día siete, el nivel de beta-hCG plasmática resulta en 2.900 UI/L. La paciente se encuentra totalmente asintomática y con signos vitales normales.',
      question: '¿Cuál es la interpretación del resultado y la conducta a seguir?',
      options: [
        { letter: 'A', text: 'Tratamiento exitoso; indicar controles semanales de beta-hCG hasta su negativización' },
        { letter: 'B', text: 'Falla del tratamiento médico por descenso menor al 15% entre el día cuatro y el día siete; evaluar segunda dosis de metotrexato o cirugía' },
        { letter: 'C', text: 'Fracaso por elevación entre el día cero y cuatro; indicar salpingectomía de urgencia' },
        { letter: 'D', text: 'Curación completa; dar de alta definitiva sin nuevos exámenes de sangre' },
        { letter: 'E', text: 'Suspender controles porque el valor ya está descendiendo adecuadamente' },
      ],
      correct: 'A',
      explanation: 'El protocolo de Metotrexato en dosis única evalúa la respuesta comparando el nivel del día 7 con el del día 4. Se exige un descenso igual o superior al 15% entre ambos controles. En este caso, la caída de 3.600 a 2.900 UI/L representa un descenso de 700 unidades (19.4%), lo que supera con creces el 15% requerido. Por tanto, el tratamiento ha sido exitoso y la conducta es continuar con determinaciones semanales de beta-hCG hasta alcanzar niveles indetectables menores a 5 UI/L.',
      say: {
        stem: 'Una paciente tratada con metotrexato presenta tres mil seiscientas unidades el día cuatro y dos mil novecientas unidades el día siete, asintomática.',
        question: '¿Cuál es la interpretación del resultado y la conducta a seguir?',
        options: 'La opción A propone tratamiento exitoso con controles semanales hasta negativizar. La B falla por descenso insuficiente. La C fracaso temprano por alza en día cuatro. La D alta definitiva. La E suspender controles. Piénsalo.',
        answer: 'La respuesta correcta es la A. El descenso entre el día cuatro y el día siete supera el quince por ciento requerido por el protocolo, confirmando respuesta exitosa al metotrexato y requiriendo seguimiento semanal hasta negativizar.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en embarazo ectópico para el EUNACOM',
      cards: [
        {
          title: 'Localización y diagnóstico',
          tag: 'Conceptos vitales',
          kind: 'key',
          items: [
            {
              t: 'Ampular más común; cornual más letal',
              d: 'Ampular 80% de casos; cornual rompe con sangrado cataclísmico',
              say: 'La porción ampular es la localización más frecuente; la porción intersticial cornual es la más peligrosa por riesgo de hemorragia masiva.',
            },
            {
              t: 'Zona discriminatoria de 1.500 UI/L',
              d: 'Beta sobre 1.500 con útero vacío en eco transvaginal es ectópico',
              say: 'Con gonadotropina coriónica sobre mil quinientas unidades y cavidad uterina vacía, el diagnóstico es ectópico hasta demostrar lo contrario.',
            },
          ],
        },
        {
          title: 'Terapéutica oficial',
          tag: 'Criterios de elección',
          kind: 'alert',
          items: [
            {
              t: 'Criterios de metotrexato',
              d: 'Estable, beta menor a 5.000, masa menor a 3.5 cm y sin latidos',
              say: 'El metotrexato exige estabilidad hemodinámica, hormona bajo cinco mil, masa menor a tres coma cinco centímetros y ausencia de latidos.',
            },
            {
              t: 'Shock hipovolémico va directo a pabellón',
              d: 'Salpingectomía urgente sin perder tiempo en exámenes',
              say: 'Si te llevas una sola idea de hoy: la paciente inestable con abdomen agudo y sospecha de ectópico roto va directo a pabellón para salpingectomía sin esperar exámenes de laboratorio. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico y Manejo del Embarazo Ectópico',
    root: N(
      'start',
      'Sospecha de Embarazo Ectópico',
      'Amenorrea, dolor hipogástrico o metrorragia con prueba de embarazo positiva',
      'Iniciamos el abordaje evaluando inmediatamente los signos vitales para descartar shock hipovolémico.',
      [
        'Inestabilidad hemodinámica o abdomen agudo peritoneal',
        N(
          'alert',
          'Embarazo Ectópico Roto con Hemoperitoneo',
          'Reanimación con cristaloides y glóbulos rojos · traslado inmediato a pabellón',
          'Si la paciente presenta inestabilidad o peritonismo, ingresamos de urgencia a pabellón para hemostasia quirúrgica.',
          [
            'Resolución quirúrgica de emergencia',
            N(
              'do',
              'Salpingectomía por Laparoscopía o Laparotomía',
              'Control de hemostasia y aspiración del hemoperitoneo · profilaxis con Anti-D si Rh negativa',
              'Realizamos salpingectomía de urgencia y administramos inmunoglobulina anti-D si la madre es Rh negativa.',
            ),
          ],
        ),
      ],
      [
        'Paciente hemodinámicamente estable',
        N(
          'q',
          'Ecografía Transvaginal + beta hCG Cuantitativa',
          'Evaluar cavidad uterina, anexos y aplicar zona discriminatoria de 1.500 UI/L',
          'Si está estable, realizamos ecografía transvaginal y medimos beta hCG para definir la ubicación.',
          [
            'Beta mayor a 1.500 con útero vacío',
            N(
              'alert',
              'Ectópico Confirmado: Evaluar Criterios de Metotrexato',
              'Beta menor a 5.000, masa menor a 3.5 cm, asintomática y latidos embrionarios negativos',
              'Confirmado el ectópico, verificamos si cumple los criterios para manejo médico conservador con metotrexato.',
              [
                'Cumple todos los criterios de inclusión',
                N(
                  'do',
                  'Metotrexato 50 mg/m2 IM dosis única',
                  'Control de beta hCG en días 4 y 7 · exigir caída mayor o igual al 15% entre día 4 y 7',
                  'Administramos metotrexato intramuscular y controlamos la caída hormonal entre los días cuatro y siete.',
                ),
              ],
              [
                'Contraindicación de metotrexato (beta mayor a 5.000, masa mayor o LCF presentes)',
                N(
                  'do',
                  'Tratamiento Quirúrgico Electivo',
                  'Salpingectomía laparoscópica (o salpingostomía si trompa contralateral dañada)',
                  'Si no cumple criterios de metotrexato, programamos resolución quirúrgica por vía laparoscópica.',
                ),
              ],
            ),
          ],
          [
            'Beta menor a 1.500 con útero vacío',
            N(
              'ok',
              'Embarazo de Localización Incierta',
              'Curva seriada de beta hCG a las 48 horas · duplicación indica gestación normal',
              'Con valores bajo mil quinientas unidades repetimos la medición en cuarenta y ocho horas para evaluar la curva.',
            ),
          ],
        ),
      ],
    ),
  },
};
