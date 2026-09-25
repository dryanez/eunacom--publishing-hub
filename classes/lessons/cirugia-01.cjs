// Clase 11.1 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisiopatología, semiología clásica, Score de Alvarado, indicación quirúrgica vs imágenes y plastrón apendicular',
      say: 'Bienvenidos al módulo dos de cirugía y especialidades. Hoy enfrentamos la apendicitis aguda, la causa más frecuente de abdomen agudo quirúrgico no traumático en Chile y uno de los temas con mayor rendimiento en el EUNACOM. En esta clase vamos a dominar la cronología de Murphy, los signos físicos cardinales, la aplicación exacta del score de Alvarado y la conducta frente a las formas complicadas como el plastrón y el absceso. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología secuencial',
      title: 'De la obstrucción luminal a la peritonitis',
      nodes: [
        { id: 'obs', col: 0, row: 2, k: 'start', t: 'Obstrucción luminal', s: 'Fecalito en adultos · hiperplasia linfoide en niños' },
        { id: 'dis', col: 1, row: 1, k: 'mech', t: 'Hipertensión intraluminal', s: 'Estasis mucosa y distensión parietal' },
        { id: 'vis', col: 2, row: 0, k: 'alert', t: 'Fase catarral / visceral', s: 'Dolor sordo periumbilical o epigástrico · T8 a T10' },
        { id: 'fle', col: 2, row: 2, k: 'risk', t: 'Fase flegmonosa / somática', s: 'Invasión parietal y contacto con peritoneo parietal' },
        { id: 'fid', col: 3, row: 1, k: 'cause', t: 'Migración a fosa ilíaca derecha', s: 'Cronología de Murphy · dolor somático exquisito' },
        { id: 'nec', col: 3, row: 3, k: 'trap', t: 'Isquemia y necrosis transmural', s: 'Trombosis venosa parietal y sobrecrecimiento bacteriano' },
        { id: 'per', col: 4, row: 2, k: 'alert', t: 'Perforación y complicaciones', s: 'Peritonitis libre vs plastrón vs absceso loculado' },
      ],
      edges: [
        { from: 'obs', to: 'dis', label: 'secreción retenida' },
        { from: 'dis', to: 'vis', label: 'fibras viscerales' },
        { from: 'dis', to: 'fle', label: 'isquemia precoz' },
        { from: 'fle', to: 'fid', label: 'compromiso peritoneal' },
        { from: 'fle', to: 'nec', label: 'infección transmural' },
        { from: 'nec', to: 'per', label: 'rotura parietal' },
      ],
      steps: [
        {
          show: ['obs', 'dis'],
          note: 'Inicio del evento obstructivo',
          say: 'El evento inicial determinante en la apendicitis aguda es la obstrucción de la luz apendicular. En los adultos, la causa predominante es un fecalito calcificado o apendicolito, mientras que en los niños y adolescentes suele deberse a hiperplasia del tejido linfoide submucoso tras una infección viral reciente. Al quedar el lumen ocluido, la secreción mucosa continua incrementa progresivamente la presión intraluminal.',
        },
        {
          show: ['vis'],
          note: 'Dolor visceral reflejo',
          say: 'Esta distensión estimula las fibras aferentes viscerales simpáticas que entran a la médula entre los niveles torácico ocho y torácico diez. Por eso, el paciente experimenta inicialmente un dolor sordo, mal delimitado y opresivo en el epigastrio o la región periumbilical, frecuentemente acompañado de anorexia precoz, náuseas y vómitos reflejos. Esta es la fase catarral o congestiva.',
        },
        {
          show: ['fle', 'fid'],
          note: 'Migración de Murphy',
          say: 'En las siguientes seis a doce horas, la proliferación bacteriana invade la pared apendicular hasta alcanzar la serosa y el peritoneo parietal adyacente. En este momento se activan las fibras somáticas espinales, produciendo la clásica migración del dolor hacia la fosa ilíaca derecha, donde se torna continuo, punzante y bien localizado. Esta secuencia se conoce como cronología de Murphy y está presente en más de dos tercios de los pacientes.',
        },
        {
          show: ['nec', 'per'],
          note: 'Evolución a formas complicadas',
          say: 'Si el proceso no se interrumpe, la presión transmural supera la perfusión venosa y capilar, desencadenando isquemia, trombosis venosa parietal, gangrena y perforación. Más allá de veinticuatro a treinta y seis horas desde el inicio de los síntomas, la tasa de perforación sube drásticamente, pudiendo derivar en peritonitis difusa o bien en una masa inflamatoria contenida por el epiplón llamada plastrón apendicular.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estadios patológicos y bacteriología',
      title: 'Evolución anatomopatológica y flora polimicrobiana',
      cards: [
        {
          title: 'Estadios I y II: Catarral y Flegmonosa',
          kind: 'normal',
          items: [
            {
              text: 'Fase congestiva o catarral: edema submucoso y éstasis intraluminal.',
              say: 'En las primeras cuatro a seis horas observamos la fase catarral. Hay edema submucoso, congestión vascular incipiente y dolor visceral puro sin irritación peritoneal. La flora bacteriana intraluminal todavía es similar a la del colon normal.',
            },
            {
              text: 'Fase supurativa o flegmonosa: infiltración neutrofílica transmural y exudado fibrinoso.',
              say: 'Hacia las doce horas se instaura la fase flegmonosa. Los neutrófilos atraviesan la pared muscular hasta la serosa, produciendo exudado fibrinoso. Aparece la peritonitis localizada con signos físicos positivos en la fosa ilíaca derecha.',
            },
          ],
        },
        {
          title: 'Estadios III y IV: Gangrenosa y Perforada',
          kind: 'alert',
          items: [
            {
              text: 'Fase gangrenosa: microtrombosis venosa parietal e infartos elípticos en borde antimesentérico.',
              say: 'La fase gangrenosa ocurre habitualmente entre las doce y veinticuatro horas. La trombosis de las vénulas intramurales genera infartos isquémicos focales, característicamente en el borde antimesentérico que posee menor flujo sanguíneo colateral.',
            },
            {
              text: 'Fase perforada: rotura transmural con escape purulento libre o contenido.',
              say: 'Al perforarse la pared, habitualmente tras veinticuatro a cuarenta y ocho horas, se libera material purulento y fecal. La infección se torna mixta con alta carga de anaerobios obligados como Bacteroides fragilis y gramnegativos entéricos como Escherichia coli.',
            },
          ],
        },
        {
          title: 'Flora bacteriana y cobertura antibiótica',
          kind: 'pharma',
          items: [
            {
              text: 'Infección sinérgica polimicrobiana: anaerobios y bacilos gramnegativos.',
              say: 'La microbiología en fases avanzadas es sinérgica y altamente destructiva. Por eso, cualquier esquema antibiótico profiláctico o terapéutico debe cubrir simultáneamente bacilos gramnegativos facultativos y anaerobios del tubo digestivo bajo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología física',
      title: 'Signos cardinales de irritación peritoneal en fosa ilíaca derecha',
      cards: [
        {
          title: 'Signo de McBurney',
          kind: 'criteria',
          items: [
            {
              text: 'Unión del tercio externo con los dos tercios internos de la línea espino-umbilical derecha.',
              say: 'El punto de McBurney se localiza exactamente en la unión del tercio lateral externo con los dos tercios mediales de la línea que conecta la espina ilíaca anterosuperior derecha con el ombligo. La palpación en este punto genera un dolor exquisito y focal, constituyendo el hallazgo clínico más sensible de la inflamación del fondo apendicular.',
            },
            {
              text: 'Sensibilidad superior al setenta por ciento en posición anatómica descendente clásica.',
              say: 'En la posición cecal anterior habitual, el signo de McBurney tiene una sensibilidad clínica muy elevada. Sin embargo, su ausencia no descarta la patología si el apéndice tiene una disposición atípica, como retrocecal, pelviana o subhepática.',
            },
          ],
        },
        {
          title: 'Signo de Blumberg y defensa',
          kind: 'alert',
          items: [
            {
              text: 'Dolor provocado por la descompresión brusca de la pared abdominal en fosa ilíaca derecha.',
              say: 'El signo de Blumberg, o signo del rebote, se produce al comprimir suave y profundamente la fosa ilíaca derecha y retirar la mano de forma súbita. Si el peritoneo parietal está inflamado, la descompresión brusca genera un dolor agudo e intolerable. Traduce peritonitis localizada y es uno de los criterios con mayor peso diagnóstico.',
            },
            {
              text: 'Resistencia muscular involuntaria: traduce espasmo reflejo de la pared abdominal.',
              say: 'La contractura o defensa muscular involuntaria en la fosa ilíaca derecha refleja un espasmo de los músculos oblicuos y transversos secundario a la inflamación peritoneal profunda. Es un signo de alarma inequívoco de abdomen agudo quirúrgico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Maniobras complementarias',
      title: 'Signos físicos según la posición anatómica del apéndice',
      cards: [
        {
          title: 'Signo de Rovsing',
          kind: 'key',
          items: [
            {
              text: 'Dolor en fosa ilíaca derecha al comprimir profundamente la fosa ilíaca izquierda.',
              say: 'El signo de Rovsing consiste en palpar profundamente la fosa ilíaca izquierda; el desplazamiento retrógrado de gas a través del colon marco distiende el ciego e inflama el apéndice enfermo, provocando dolor referido en la fosa ilíaca derecha. Confirma irritación peritoneal indirecta.',
            },
          ],
        },
        {
          title: 'Signo del Psoas (apéndice retrocecal)',
          kind: 'criteria',
          items: [
            {
              text: 'Dolor a la hiperextensión pasiva de la cadera derecha en decúbito lateral izquierdo.',
              say: 'El signo del psoas se explora solicitando al paciente que se recueste sobre su lado izquierdo mientras el examinador hiperextiende pasivamente el muslo derecho hacia atrás. Si el apéndice es retrocecal y descansa sobre el músculo psoas mayor, el estiramiento muscular desencadena dolor intenso.',
            },
          ],
        },
        {
          title: 'Signo del Obturador y Signo de Dunphy',
          kind: 'alert',
          items: [
            {
              text: 'Signo del Obturador: dolor a la rotación interna del muslo flexionado en noventa grados.',
              say: 'El signo del obturador se evalúa flexionando la cadera y rodilla derecha en noventa grados y rotando internamente el muslo. El contacto con el músculo obturador interno inflamado causa dolor en pacientes con apéndice de localización pelviana profunda.',
            },
            {
              text: 'Signo de Dunphy: incremento marcado del dolor en fosa ilíaca derecha al toser.',
              say: 'El signo de Dunphy consiste en un dolor punzante en la fosa ilíaca derecha provocado por la tos voluntaria. Es un método gentil y sumamente útil en niños y ancianos para pesquisar peritonitis incipiente sin necesidad de realizar una palpación brusca.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estratificación objetiva',
      title: 'Score de Alvarado MANTRELS y conducta estandarizada',
      head: ['Categoría', 'Parámetro MANTRELS', 'Puntos', 'Conducta clínica recomendada'],
      rows: [
        {
          cells: [
            'Síntomas',
            'Migración del dolor a FID (1) · Anorexia (1) · Náuseas o vómitos (1)',
            '3 puntos',
            'Puntaje cero a tres: muy baja probabilidad de apendicitis; observar o buscar causas alternativas.',
          ],
          say: 'El score de Alvarado clasifica los hallazgos en síntomas, signos y laboratorio. En los síntomas asignamos un punto a la migración del dolor hacia la fosa ilíaca derecha, un punto a la presencia de anorexia y un punto a las náuseas o vómitos. Un puntaje total de cero a tres puntos indica muy baja probabilidad diagnóstica y permite el alta con pautas de alarma o la evaluación de otros diagnósticos.',
        },
        {
          cells: [
            'Signos físicos',
            'Dolor exquisito en FID (2) · Signo de Blumberg rebote (1) · Fiebre ≥ 37.3 °C (1)',
            '4 puntos',
            'Puntaje cuatro a seis: probabilidad intermedia; requiere imágenes obligatorias como tomografía o ecografía.',
          ],
          say: 'En los signos físicos, el dolor exquisito a la palpación en fosa ilíaca derecha suma dos puntos enteros, siendo el parámetro físico con mayor ponderación. El signo de Blumberg aporta un punto y la elevación térmica mayor o igual a treinta y siete coma tres grados aporta un punto adicional. Un puntaje acumulado entre cuatro y seis puntos define una probabilidad intermedia y obliga a solicitar imágenes complementarias.',
        },
        {
          cells: [
            'Laboratorio',
            'Leucocitosis > 10.000/mm³ (2) · Neutrofilia o desviación izquierda ≥ 75% (1)',
            '3 puntos',
            'Puntaje siete a diez: alta probabilidad; apendicectomía directa en varones jóvenes sin retardar con imágenes.',
          ],
          say: 'En el laboratorio, la leucocitosis mayor a diez mil glóbulos blancos por milímetro cúbico suma dos puntos, y la presencia de neutrofilia o desviación izquierda mayor al setenta y cinco por ciento otorga un punto. Un paciente con puntaje de siete o más tiene una alta probabilidad de apendicitis. En hombres jóvenes con cuadro clásico, esta puntuación justifica indicar apendicectomía directa sin necesidad de perder tiempo en exámenes tomográficos.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Toma de decisiones con imágenes',
      title: 'Estudio de imágenes de elección según el perfil del paciente',
      cards: [
        {
          title: 'Hombre adulto joven con clínica clásica',
          kind: 'pharma',
          items: [
            {
              text: 'Alvarado de siete a diez puntos en varón joven: diagnóstico clínico directo a pabellón.',
              say: 'En varones jóvenes previamente sanos con presentación típica y score de Alvarado de siete a diez, el diagnóstico es eminentemente clínico. No se requiere tomografía previa; retrasar la cirugía para obtener una imagen aumenta innecesariamente el riesgo de perforación apendicular.',
            },
            {
              text: 'La ecografía solo se reserva ante dudas razonables o signos atípicos.',
              say: 'Si el cuadro es atípico o el puntaje es intermedio, se solicita estudio por imágenes antes de ingresar a quirófano.',
            },
          ],
        },
        {
          title: 'Estándar de oro en adultos: Tomografía axial computarizada',
          kind: 'key',
          items: [
            {
              text: 'Tomografía de abdomen y pelvis con contraste intravenoso: sensibilidad y especificidad superiores al noventa y cinco por ciento.',
              say: 'La tomografía axial computarizada de abdomen y pelvis con contraste endovenoso es el estándar de oro en adultos con presentación dudosa, en ancianos y cuando se sospechan complicaciones. Presenta una sensibilidad y especificidad que superan el noventa y cinco por ciento.',
            },
            {
              text: 'Criterios tomográficos: diámetro apendicular mayor a seis milímetros y engrosamiento parietal.',
              say: 'Los criterios tomográficos confirmatorios son: diámetro transverso del apéndice mayor a seis milímetros, engrosamiento parietal mayor a dos milímetros con realce anormal tras el medio de contraste, estriación de la grasa periapendicular adyacente y visualización de un apendicolito calcificado.',
            },
          ],
        },
        {
          title: 'Poblaciones especiales: Ecografía abdominal de primera línea',
          kind: 'alert',
          items: [
            {
              text: 'Mujeres en edad fértil: ecografía transabdominal y ginecológica transvaginal mandatoria.',
              say: 'En mujeres en edad reproductiva, la ecografía abdominal y ginecológica es mandatoria para descartar patología ovárica o anexial, como embarazo ectópico, quiste hemorrágico o enfermedad inflamatoria pélvica.',
            },
            {
              text: 'Embarazadas y niños pequeños: ecografía para evitar radiación ionizante.',
              say: 'En embarazadas y en pacientes pediátricos, la ecografía abdominal es siempre la primera elección para evitar la radiación ionizante. Se observa un apéndice no compresible con diámetro aumentado y aspecto en diana. Si la ecografía en una embarazada no es concluyente, el siguiente paso es una resonancia magnética nuclear.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de manejo',
      title: 'Enfrentamiento y conducta en apendicitis aguda',
      say: 'Revisemos el árbol de decisiones ante un paciente que consulta por dolor en fosa ilíaca derecha. Evaluamos el score de Alvarado y la condición del paciente para definir si va directo a pabellón, a estudio por imágenes o a manejo médico conservador.',
    },

    {
      type: 'points',
      kicker: 'Formas complicadas',
      title: 'Plastrón apendicular versus absceso periapendicular',
      cards: [
        {
          title: 'Plastrón apendicular flemoso',
          kind: 'key',
          items: [
            {
              text: 'Masa palpable firme y dolorosa en fosa ilíaca derecha con evolución mayor a cinco días.',
              say: 'El plastrón apendicular se produce cuando una apendicitis que evoluciona por más de cuatro a cinco días se perfora de forma bloqueada, siendo contenida por el epiplón mayor y las asas de intestino delgado contiguas. Al examen físico se palpa una masa firme, sensible y delimitada en la fosa ilíaca derecha.',
            },
            {
              text: 'Tratamiento de elección: manejo médico conservador y apendicectomía de intervalo diferida.',
              say: 'El manejo de elección para el plastrón flemoso sólido es médico conservador: reposo intestinal, hidratación endovenosa y antibióticos de amplio espectro por siete a catorce días. Intentar operar de urgencia en esta etapa conlleva un riesgo altísimo de desgarro ileal y fístula cecal por inflamación friable. Se programa una apendicectomía de intervalo electiva a las ocho a doce semanas.',
            },
          ],
        },
        {
          title: 'Absceso apendicular fluctuante',
          kind: 'alert',
          items: [
            {
              text: 'Colección líquida loculada en la tomografía mayor o igual a tres a cuatro centímetros.',
              say: 'Si la tomografía computarizada demuestra que dentro de la masa existe una colección líquida purulenta organizada de tres a cuatro centímetros o más de diámetro, la conducta de elección es el drenaje percutáneo guiado por tomografía o ecografía, sumado a cobertura antibiótica endovenosa.',
            },
            {
              text: 'La cirugía abierta de urgencia se reserva solo ante peritonitis difusa o falla del drenaje.',
              say: 'Solo se indica laparotomía o laparoscopía exploradora de urgencia ante fracaso del drenaje percutáneo, empeoramiento séptico o si el paciente debuta con signos francos de peritonitis generalizada.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica quirúrgica y hallazgos',
      title: 'Abordaje laparoscópico y conducta ante hallazgo de apéndice sano',
      cards: [
        {
          title: 'Apendicectomía laparoscópica',
          kind: 'key',
          items: [
            {
              text: 'Abordaje estándar recomendado: menor dolor postoperatorio y menor tasa de infección de herida.',
              say: 'La apendicectomía laparoscópica es hoy el abordaje quirúrgico de elección en la gran mayoría de los centros. Ofrece menor dolor postoperatorio, menor estadía hospitalaria, retorno laboral más precoz y una tasa significativamente menor de infección del sitio quirúrgico en la pared.',
            },
            {
              text: 'Permite inspección completa de cavidad abdominal y pelvis en casos de duda diagnóstica.',
              say: 'Otra ventaja decisiva de la laparoscopía es permitir una exploración visual completa de la cavidad peritoneal y los órganos pélvicos, lo cual es invaluable en mujeres jóvenes donde la tasa de diagnóstico diferencial alternativo es muy alta.',
            },
          ],
        },
        {
          title: 'Conducta ante apéndice macroscópicamente sano',
          kind: 'alert',
          items: [
            {
              text: 'Extirpación apendicular sistemática para evitar dudas diagnósticas futuras.',
              say: 'Si durante la exploración quirúrgica el apéndice luce macroscópicamente sano, la conducta formal es extirparlo de todas formas. Esto previene confusión médica futura si el paciente vuelve a consultar por dolor abdominal en la fosa ilíaca derecha.',
            },
            {
              text: 'Inspección obligatoria de los últimos cien centímetros de íleon terminal.',
              say: 'Inmediatamente después, el cirujano tiene la obligación de revisar cuidadosamente los últimos sesenta a cien centímetros de íleon terminal para descartar un divertículo de Meckel complicado, una adenitis mesentérica o una enteritis regional por enfermedad de Crohn.',
            },
          ],
        },
        {
          title: 'Profilaxis antibiótica preoperatoria',
          kind: 'pharma',
          items: [
            {
              text: 'Dosis única en inducción: Cefazolina dos gramos más Metronidazol quinientos miligramos.',
              say: 'En apendicitis no perforada, la profilaxis es en dosis única en la inducción anestésica. No se prolongan antibióticos en el postoperatorio.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estratificación diferencial',
      title: 'Diagnóstico diferencial según grupo etario y sexo del paciente',
      head: ['Grupo de pacientes', 'Diagnósticos diferenciales frecuentes', 'Examen confirmatorio clave', 'Conducta médica'],
      rows: [
        {
          cells: [
            'Mujeres en edad fértil',
            'Embarazo ectópico · quiste ovárico complicado · torsión anexial · enfermedad inflamatoria pélvica',
            'Subunidad beta cuantitativa en sangre y ecografía ginecológica transvaginal',
            'Descartar siempre embarazo; laparoscopía de urgencia si hay sospecha de torsión o hemoperitoneo.',
          ],
          say: 'En mujeres en edad fértil, las patologías ginecológicas compiten directamente con la apendicitis. La subunidad beta de gonadotrofina coriónica y la ecografía transvaginal son indispensables para descartar un embarazo ectópico roto, una torsión de anexo o una enfermedad inflamatoria pélvica.',
        },
        {
          cells: [
            'Población pediátrica',
            'Adenitis mesentérica viral · invaginación intestinal · gastroenteritis aguda bacteriana',
            'Ecografía abdominal con transductor de alta frecuencia',
            'Observación clínica seriada y reposo digestivo si la ecografía muestra adenopatías con apéndice sano.',
          ],
          say: 'En niños pequeños, la causa más común que simula apendicitis es la adenitis mesentérica tras una virosis respiratoria. La ecografía abdominal demuestra múltiples adenopatías inflamatorias en el mesenterio con un apéndice de calibre normal y compresible.',
        },
        {
          cells: [
            'Adultos mayores y ancianos',
            'Adenocarcinoma de ciego o colon ascendente perforado · diverticulitis cecal · isquemia mesentérica',
            'Tomografía axial computarizada de abdomen y pelvis con contraste endovenoso',
            'La clínica puede ser insidiosa y oligocelular; la tomografía es obligatoria para planificar la resección.',
          ],
          say: 'En adultos mayores, la apendicitis suele presentarse sin fiebre ni dolor florido debido a la inmunosenescencia. Siempre debemos sospechar un adenocarcinoma de ciego o colon derecho perforado. La tomografía con contraste es mandatoria antes de cualquier decisión.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial y trampas',
      title: 'Trampas clásicas del EUNACOM en dolor abdominal agudo',
      head: ['Escenario clínico', 'Entidad simuladora', 'Hallazgo diferenciador clave', 'Error frecuente a evitar'],
      rows: [
        {
          cells: [
            'Mujer en edad fértil con dolor en fosa ilíaca derecha',
            'Embarazo ectópico complicado o quiste de ovario roto',
            'Prueba de subunidad beta cuantitativa en sangre o test de orina y ecografía transvaginal',
            'Operar sin realizar previamente una prueba de embarazo en toda mujer en edad fértil.',
          ],
          say: 'En mujeres jóvenes en edad fértil que consultan por dolor en fosa ilíaca derecha, el primer error grave es olvidar solicitar una prueba de embarazo. Un embarazo ectópico roto o un quiste de ovario hemorrágico simulan con exactitud una apendicitis. La subunidad beta de gonadotrofina coriónica y la ecografía transvaginal son indispensables.',
        },
        {
          cells: [
            'Paciente pediátrico con cuadro respiratorio reciente',
            'Adenitis mesentérica viral',
            'Adenopatías múltiples en mesenterio por ecografía y dolor más difuso sin signos peritoneales marcados',
            'Indicar apendicectomía innecesaria sin observar evolución clínica o realizar ecografía abdominal.',
          ],
          say: 'En niños pequeños, la adenitis mesentérica es un gran simulador tras un cuadro respiratorio alto viral. La ecografía demuestra ganglios mesentéricos inflamados y un apéndice sano compresible. El dolor suele ser más móvil y el niño no presenta la resistencia peritoneal focal típica.',
        },
        {
          cells: [
            'Sedimento urinario con leucocituria en dolor en FID',
            'Proximidad anatómica del apéndice al uréter o vejiga',
            'Leucocituria estéril reactiva secundaria a inflamación periapendicular contigua',
            'Confundir el cuadro con infección urinaria baja o pielonefritis y retrasar la cirugía.',
          ],
          say: 'Una trampa predilecta del EUNACOM es presentar un paciente con dolor típico en fosa ilíaca derecha y un sedimento urinario con quince a veinte leucocitos por campo. Esto no es una infección urinaria primaria: la vecindad del apéndice inflamado sobre el uréter derecho o la vejiga provoca leucocituria refleja por contigüidad. Si hay Blumberg y fiebre, el diagnóstico sigue siendo apendicitis aguda.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 68',
      caseText: 'Niña de siete años de edad, quien consulta por cuadro de doce horas de evolución, caracterizada por fiebre y dolor hipogástrico. Al examen físico tiene temperatura de treinta y ocho coma siete grados, frecuencia cardíaca de cien por minuto, presión arterial de cien con sesenta, dolor a la palpación de hipogastrio, con signo de Blumberg positivo y resistencia en la pared abdominal. Exámenes de laboratorio: dieciocho mil glóbulos blancos. Sedimento urinario muestra veinte leucocitos por campo. Proteína C reactiva en quince. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Pielonefritis aguda', isCorrect: false },
        { letter: 'B', text: 'Apendicitis aguda', isCorrect: true },
        { letter: 'C', text: 'Infección del tracto urinario baja', isCorrect: false },
        { letter: 'D', text: 'Torsión ovárica', isCorrect: false },
        { letter: 'E', text: 'Plastrón apendicular', isCorrect: false },
      ],
      correct: 'B',
      say: {
        stem: 'Analicemos esta pregunta real de julio de dos mil dieciséis. Una niña de siete años presenta doce horas de dolor en hipogastrio y fiebre de treinta y ocho coma siete grados, con irritación peritoneal franca dada por Blumberg positivo y contractura parietal. El laboratorio muestra dieciocho mil leucocitos, proteína C reactiva elevada y veinte leucocitos en la orina.',
        question: 'Se nos pregunta por el diagnóstico más probable.',
        options: 'Las alternativas son: opción A, pielonefritis aguda; opción B, apendicitis aguda; opción C, infección del tracto urinario baja; opción D, torsión ovárica; y opción E, plastrón apendicular. Piénsalo.',
        answer: 'La respuesta correcta es la opción B, apendicitis aguda. Esta pregunta evalúa la trampa de la leucocituria en el sedimento de orina, que es refleja por contigüidad anatómica con el apéndice inflamado. La presencia de peritonitis con Blumberg y fiebre descarta una infección urinaria simple. Además, con doce horas de evolución no puede ser un plastrón, que requiere varios días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 62',
      caseText: 'Una mujer de veinticinco años consulta por dolor abdominal intenso, mayor en la fosa ilíaca derecha y en el hipogastrio, con EVA ocho de diez. Al examen físico tiene frecuencia cardíaca de noventa por minuto, presión arterial de ciento diez con setenta y el examen abdominal muestra abdomen blando y depresible, pero doloroso a la palpación de ambas fosas ilíacas. Dos horas después del ingreso a la sala de urgencia, presenta deterioro marcado del estado general, objetivándose frecuencia cardíaca de ciento veinte por minuto y presión arterial de ochenta con cuarenta milímetros de mercurio. ¿Cuál de los siguientes es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Apendicitis aguda', isCorrect: true },
        { letter: 'B', text: 'Perforación intestinal', isCorrect: false },
        { letter: 'C', text: 'Torsión ovárica', isCorrect: false },
        { letter: 'D', text: 'Absceso tubo-ovárico roto', isCorrect: false },
        { letter: 'E', text: 'Embarazo ectópico roto', isCorrect: false },
      ],
      correct: 'A',
      say: {
        stem: 'Esta pregunta de diciembre de dos mil veintidós presenta una mujer joven con dolor abdominal intenso en fosa ilíaca derecha e hipogastrio que presenta un deterioro hemodinámico marcado a las dos horas de evolución hospitalaria, con taquicardia de ciento veinte e hipotensión de ochenta con cuarenta.',
        question: 'Nos preguntan por el diagnóstico más probable entre las alternativas ofrecidas.',
        options: 'Las opciones son: opción A, apendicitis aguda; opción B, perforación intestinal; opción C, torsión ovárica; opción D, absceso tubo-ovárico roto; y opción E, embarazo ectópico roto. Piénsalo.',
        answer: 'La respuesta oficial del examen es la opción A, apendicitis aguda complicada con shock séptico secundario a perforación aguda y peritonitis grave. El dolor que comienza y predomina en la fosa ilíaca derecha con evolución rápida a inestabilidad hemodinámica orienta con fuerza a esta urgencia en adultos jóvenes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 58',
      caseText: 'Una paciente de treinta años consulta por dolor en la fosa ilíaca derecha, que se ha asociado a vómitos alimentarios y que inició hace cuarenta y ocho horas. Al examen físico: temperatura de treinta y seis grados, frecuencia cardíaca de ciento diez por minuto, presión arterial de ciento diez con setenta milímetros de mercurio. El examen abdominal muestra resistencia muscular involuntaria a la palpación de la fosa ilíaca derecha, con ruidos hidroaéreos conservados. Se solicita ecografía ginecológica transvaginal que visualiza un tumor anexial derecho quístico multiloculado, de diez centímetros de diámetro, con ausencia de flujo al Doppler color. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Apendicitis aguda', isCorrect: false },
        { letter: 'B', text: 'Embarazo ectópico', isCorrect: false },
        { letter: 'C', text: 'Proceso inflamatorio pélvico', isCorrect: false },
        { letter: 'D', text: 'Tumor anexial torcido', isCorrect: true },
        { letter: 'E', text: 'Cáncer de ovario no complicado', isCorrect: false },
      ],
      correct: 'D',
      say: {
        stem: 'Revisemos esta excelente pregunta de julio de dos mil veinticuatro. Una mujer joven con dolor en fosa ilíaca derecha y defensa muscular simula clínicamente una apendicitis. Sin embargo, la ecografía transvaginal revela un tumor anexial quístico de diez centímetros con ausencia total de flujo vascular en el estudio Doppler.',
        question: 'Se nos pregunta por el diagnóstico más probable.',
        options: 'Las opciones son: opción A, apendicitis aguda; opción B, embarazo ectópico; opción C, proceso inflamatorio pélvico; opción D, tumor anexial torcido; y opción E, cáncer de ovario no complicado. Piénsalo.',
        answer: 'La respuesta correcta es la opción D, tumor anexial torcido. Aunque la presentación clínica con dolor en fosa ilíaca derecha y defensa simula una apendicitis, el hallazgo de una masa ovárica mayor a cinco centímetros con ausencia de flujo Doppler confirma una torsión anexial. Esto exige laparoscopía urgente para detorsionar el ovario y evitar su necrosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Un hombre de cincuenta y dos años consulta por dolor en fosa ilíaca derecha de siete días de evolución. Ha presentado sensación febril y decaimiento. Al examen físico destaca temperatura de treinta y siete coma seis grados, hemodinámicamente estable. En la fosa ilíaca derecha se palpa una masa firme de seis centímetros, dolorosa, sin signos de peritonitis generalizada. La tomografía axial computarizada de abdomen y pelvis muestra un engrosamiento inflamatorio marcado del ciego y apéndice rodeado de asas de íleon y epiplón, con aspecto de plastrón flemoso, sin colecciones líquidas loculadas ni aire libre. ¿Cuál es la conducta terapéutica más adecuada?',
      question: '¿Cuál es la conducta terapéutica más adecuada?',
      options: [
        { letter: 'A', text: 'Apendicectomía abierta de urgencia de inmediato', isCorrect: false },
        { letter: 'B', text: 'Hemicolectomía derecha de urgencia', isCorrect: false },
        { letter: 'C', text: 'Drenaje percutáneo guiado por tomografía', isCorrect: false },
        { letter: 'D', text: 'Hospitalización, reposo digestivo, antibióticos endovenosos y apendicectomía diferida en ocho a doce semanas', isCorrect: true },
        { letter: 'E', text: 'Alta con analgesia oral y control ambulatorio en una semana', isCorrect: false },
      ],
      correct: 'D',
      say: {
        stem: 'Revisemos un caso representativo típico de las preguntas de plastrón. Un paciente con dolor de siete días de evolución presenta una masa palpable en fosa ilíaca derecha. La tomografía confirma un plastrón flemoso sin absceso coleccionado ni peritonitis difusa.',
        question: 'Se consulta por la conducta terapéutica más adecuada.',
        options: 'Las alternativas son: opción A, apendicectomía abierta de urgencia; opción B, hemicolectomía derecha; opción C, drenaje percutáneo; opción D, hospitalización, reposo digestivo, antibióticos endovenosos y apendicectomía diferida en ocho a doce semanas; y opción E, alta con analgesia oral. Piénsalo.',
        answer: 'La respuesta correcta es la opción D. Ante un plastrón apendicular flemoso no complicado con más de cinco días de evolución, la intervención quirúrgica de urgencia está formalmente desaconsejada por el riesgo de iatrogenia sobre asas friables. Se maneja médicamente con antibióticos endovenosos y se programa la apendicectomía de intervalo a las ocho a doce semanas.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en apendicitis aguda',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'La cronología de Murphy es la secuencia clínica más específica.',
              say: 'Primera regla: el dolor que inicia sordo en el epigastrio o región periumbilical y migra tras seis a doce horas a la fosa ilíaca derecha es la cronología de Murphy, el patrón clínico más característico de la apendicitis aguda.',
            },
            {
              text: 'Alvarado de siete o más en varón joven indica pabellón directo.',
              say: 'Segunda regla: un score de Alvarado de siete a diez puntos en un varón joven con clínica clásica justifica apendicectomía inmediata sin requerir estudios de imagen que retrasen la intervención.',
            },
            {
              text: 'La tomografía con contraste es el estándar en adultos atípicos y ancianos.',
              say: 'Tercera regla: la tomografía computarizada con contraste intravenoso es el examen de elección en ancianos y cuadros dudosos; en embarazadas y niños, la ecografía es la primera línea obligada.',
            },
            {
              text: 'El plastrón flemoso se trata con antibióticos y cirugía diferida.',
              say: 'Cuarta regla: el plastrón apendicular de varios días sin absceso se maneja con tratamiento médico conservador y apendicectomía de intervalo en ocho a doce semanas; si hay un absceso de tres a cuatro centímetros o más, se realiza drenaje percutáneo.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'En apendicitis no perforada, la profilaxis antibiótica es de dosis única preoperatoria.',
              say: 'Si te llevas una sola idea de hoy: en la apendicitis aguda no complicada, la profilaxis antibiótica en la inducción quirúrgica es de dosis única; prolongar antibióticos en el postoperatorio es innecesario y se sanciona en el examen. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Decisión Clínica en Sospecha de Apendicitis Aguda',
    root: N(
      'start',
      'Paciente con dolor abdominal sugestivo de apendicitis',
      'Dolor periumbilical migrado a fosa ilíaca derecha y fiebre',
      'Iniciamos el enfrentamiento clínico evaluando el score de Alvarado y las características demográficas del paciente.',
      [
        'Score 0 a 3',
        N(
          'ok',
          'Baja probabilidad de apendicitis',
          'Score de Alvarado de 0 a 3 puntos',
          'Con un puntaje menor a cuatro puntos, la probabilidad es mínima; observamos evolución o investigamos diagnósticos diferenciales.',
          [
            'Alta o seguimiento',
            N(
              'ok',
              'Observación ambulatoria con pautas de alarma',
              'Reconsultar ante aumento del dolor o fiebre',
              'Indicamos observación y pautas estrictas de alarma médica.',
            ),
          ],
        ),
      ],
      [
        'Score 4 a 6 o dudoso',
        N(
          'q',
          'Probabilidad intermedia o presentación atípica',
          'Score de Alvarado 4 a 6 · mujeres · ancianos',
          'En riesgo intermedio o grupos con alta probabilidad de diagnósticos alternativos, solicitamos estudio por imágenes.',
          [
            'Embarazada o niño o mujer joven',
            N(
              'do',
              'Ecografía abdominal y pelviana',
              'Primera línea sin radiación ionizante',
              'En niños, mujeres en edad fértil y embarazadas, la ecografía abdominal es la primera línea obligatoria.',
              [
                'Apéndice no compresible > 6 mm',
                N(
                  'do',
                  'Apendicectomía laparoscópica',
                  'Hallazgos ecográficos concluyentes de apendicitis',
                  'Si la ecografía es concluyente con apéndice inflamado mayor a seis milímetros, indicamos apendicectomía.',
                ),
              ],
              [
                'Ecografía no concluyente',
                N(
                  'q',
                  'Evaluar resonancia o tomografía',
                  'RNM en embarazadas · TAC con contraste en no gestantes',
                  'Si la ecografía no define el cuadro, realizamos resonancia magnética en gestantes o tomografía con contraste en adultos.',
                ),
              ],
            ),
          ],
          [
            'Adulto general o anciano',
            N(
              'do',
              'Tomografía de abdomen y pelvis con contraste IV',
              'Estándar de oro con alta sensibilidad y especificidad',
              'En el adulto no gestante y el anciano, la tomografía computarizada con contraste es el estándar de oro confirmatorio.',
              [
                'Apendicitis aguda confirmada',
                N(
                  'do',
                  'Apendicectomía quirúrgica',
                  'Profilaxis antibiótica con dosis única en inducción',
                  'Confirmado el diagnóstico tomográfico, el paciente va a pabellón con profilaxis antibiótica preoperatoria.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Score 7 a 10 en varón joven',
        N(
          'do',
          'Apendicectomía inmediata directa',
          'Varón joven con clínica clásica · sin imágenes previas',
          'En un varón joven con score de Alvarado de siete a diez puntos no perdemos tiempo en imágenes e indicamos apendicectomía directa.',
          [
            'Laparoscopía quirúrgica',
            N(
              'ok',
              'Apendicectomía laparoscópica exitosa',
              'Cefazolina 2 g + Metronidazol 500 mg dosis única EV',
              'Se realiza apendicectomía laparoscópica y se suspenden los antibióticos en el postoperatorio si no hubo perforación.',
            ),
          ],
        ),
      ],
      [
        'Masa palpable > 5 días',
        N(
          'alert',
          'Sospecha de plastrón apendicular',
          'Masa firme y dolorosa en FID con varios días de evolución',
          'Si el paciente debuta con una masa palpable de más de cinco días de evolución, sospechamos plastrón y solicitamos tomografía urgente.',
          [
            'Plastrón flemoso sólido',
            N(
              'do',
              'Manejo médico conservador',
              'Reposo digestivo, hidratación y antibióticos EV',
              'En plastrón flemoso el manejo es médico conservador, programando apendicectomía diferida a las ocho a doce semanas.',
            ),
          ],
          [
            'Absceso loculado ≥ 3 a 4 cm',
            N(
              'do',
              'Drenaje percutáneo guiado por imágenes',
              'Drenaje con catéter percutáneo + antibióticos EV',
              'Si existe un absceso fluctuante de tres a cuatro centímetros o más, la conducta de elección es el drenaje percutáneo guiado por imágenes.',
            ),
          ],
        ),
      ],
    ),
  },
};
