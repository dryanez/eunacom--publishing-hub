// Clase 3.10 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Formas clínicas, criterios ecográficos de no viabilidad, etiologías genéticas y anatómicas, AMEU vs legrado, aborto séptico y Ley 21.030',
      say: 'Bienvenidos a la clase sobre aborto espontáneo, sus formas clínicas, la urgencia del aborto séptico y el marco regulatorio de la ley de interrupción voluntaria del embarazo en tres causales. En esta sesión aprenderemos a distinguir con precisión la amenaza, el aborto inevitable, incompleto y retenido, conoceremos los criterios ecográficos de no viabilidad, dominaremos el manejo médico y quirúrgico con aspiración manual, el protocolo intensivo del aborto séptico y los requisitos médicos de la ley veintiún mil treinta. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Clasificación clínica cardinal',
      title: 'Espectro de las formas clínicas del aborto espontáneo',
      nodes: [
        { id: 'ame', col: 0, row: 1, k: 'good', t: 'Amenaza de aborto', s: 'Metrorragia y dolor pelviano con orificio cervical interno cerrado y embrión vital' },
        { id: 'ine', col: 1, row: 0, k: 'alert', t: 'Aborto en evolución o inevitable', s: 'Metrorragia dolorosa progresiva con orificio cervical interno abierto y permeable' },
        { id: 'inc', col: 2, row: 0, k: 'trap', t: 'Aborto incompleto', s: 'Expulsión parcial con orificio abierto y restos ovulares endometriales mayores a 15 mm' },
        { id: 'com', col: 2, row: 2, k: 'good', t: 'Aborto completo', s: 'Expulsión total espontánea con orificio cerrado, útero involucionado y cavidad vacía' },
        { id: 'ret', col: 1, row: 2, k: 'risk', t: 'Aborto retenido', s: 'Embrión o huevo anembrionado sin vitalidad con orificio cervical interno cerrado' },
      ],
      edges: [
        { from: 'ame', to: 'ine', label: 'dilatación cervical' },
        { from: 'ine', to: 'inc', label: 'expulsión parcial' },
        { from: 'ine', to: 'com', label: 'expulsión total' },
        { from: 'ame', to: 'ret', label: 'muerte embrionaria' },
      ],
      steps: [
        {
          show: ['ame'],
          note: 'Amenaza de aborto: embrión vital y cuello cerrado',
          say: 'La amenaza de aborto se define por la presencia de metrorragia escasa o moderada y contracciones uterinas dolorosas antes de las veintidós semanas de gestación. El rasgo semiológico cardinal es que el orificio cervical interno se encuentra rigurosamente cerrado al examen físico y la ecografía transvaginal confirma latidos cardiofetales presentes.',
        },
        {
          show: ['ine', 'inc', 'com'],
          note: 'Permeabilidad cervical y expulsión de restos',
          say: 'Cuando el orificio cervical interno se dilata y se vuelve permeable al dedo del examinador, el cuadro se clasifica como aborto en evolución o inevitable. Si tras la salida de tejidos persisten restos ovulares en la cavidad uterina con endometrio mayor a quince milímetros, es incompleto; si la cavidad queda completamente vacía y el cuello se cierra, es completo.',
        },
        {
          show: ['ret'],
          note: 'Aborto retenido o huevo anembrionado',
          say: 'En el aborto retenido la gestación ha detenido su desarrollo de forma silenciosa. El embrión carece de latidos cardíacos o existe un saco gestacional mayor a veinticinco milímetros sin polo embrionario visible, manteniéndose el cuello uterino cerrado y sin sangrado activo, lo que exige una confirmación ecográfica rigurosa.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología y factores de riesgo',
      title: 'Causas genéticas, inmunológicas y anatómicas de pérdida gestacional',
      cards: [
        {
          title: 'Causas cromosómicas tempranas',
          tag: 'Más del 50 por ciento',
          kind: 'criteria',
          items: [
            {
              t: 'Aneuploidías embrionarias numéricas',
              d: 'Trisomías autosómicas (trisomía 16 la más frecuente), monosomía X y poliploidías',
              say: 'Más de la mitad de las pérdidas del primer trimestre se originan en anomalías cromosómicas numéricas esporádicas no hereditarias. La trisomía dieciséis es la más común en el tejido abortado, seguida de la monosomía X y las triploidías, explicando la mayoría de los abortos retenidos y anembrionados.',
            },
            {
              t: 'Edad materna avanzada',
              d: 'Aumento exponencial de no disyunción meiótica ovocitaria sobre los 35 años',
              say: 'La edad materna sobre los treinta y cinco años constituye el principal factor predisponente independiente para la no disyunción cromosómica meiótica, duplicando el riesgo basal de aborto espontáneo y alcanzando cifras superiores al cincuenta por ciento en mujeres mayores de cuarenta años.',
            },
          ],
        },
        {
          title: 'Causas maternas y sistémicas',
          tag: 'Aborto recurrente',
          kind: 'alert',
          items: [
            {
              t: 'Síndrome antifosfolípido (SAF)',
              d: 'Trombosis microvascular placentaria por anticoagulante lúpico o anticardiolipinas',
              say: 'El síndrome antifosfolípido es la causa autoinmune tratable más importante de pérdida gestacional recurrente. Induce trombosis en los vasos de la decidua y se trata eficazmente con ácido acetilsalicílico en dosis bajas combinado con heparina de bajo peso molecular subcutánea.',
            },
            {
              t: 'Malformaciones anatómicas uterinas',
              d: 'Útero tabicado como anomalía mülleriana de mayor tasa de pérdida',
              say: 'Entre las anomalías congénitas müllerianas, el útero tabicado o septado presenta la mayor asociación con abortos espontáneos de repetición debido a que el tabique es una estructura fibrosa hipovascular que impide la adecuada nutrición trofoblástica.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial de pérdidas tardías',
      title: 'Contraste clínico: Aborto Espontáneo habitual versus Incompetencia Cervical',
      head: ['Parámetro clínico', 'Aborto espontáneo común', 'Incompetencia cervical (debilidad del cérvix)'],
      rows: [
        {
          cells: ['Edad gestacional habitual', 'Primer trimestre (semana seis a diez)', 'Segundo trimestre temprano (semana dieciséis a veintidós)'],
          say: 'El aborto espontáneo habitual se concentra en las primeras diez semanas, mientras que la incompetencia cervical produce pérdidas típicamente entre las semanas dieciséis y veintidós de gestación.',
        },
        {
          cells: ['Dolor y dinámica uterina', 'Cólicos hipogástricos intensos previos', 'Dilatación silente e indolora sin contracciones'],
          say: 'El aborto común cursa con intensos dolores cólicos uterinos provocados por la contractilidad miometrial, a diferencia de la incompetencia cervical que cursa con dilatación silente completamente indolora.',
        },
        {
          cells: ['Presentación clínica', 'Sangrado abundante con coágulos', 'Sensación de peso pélvico, prolapso de membranas o amniorrexis'],
          say: 'En la incompetencia cervical la paciente consulta por sensación de peso vaginal o rotura de membranas con salida de líquido amniótico, sin sangrado abundante previo.',
        },
        {
          cells: ['Tratamiento profiláctico', 'Manejo según causa específica', 'Cerclaje cervical electivo a las doce a catorce semanas'],
          say: 'La debilidad cervical confirmada por antecedentes de pérdidas indoloras previas se previene realizando un cerclaje cervical profiláctico electivo entre las semanas doce y catorce del siguiente embarazo.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios ecográficos de corte',
      title: 'Diagnóstico ecográfico de certeza de aborto retenido y no viabilidad',
      cards: [
        {
          title: 'Criterios diagnósticos absolutos',
          tag: 'Ecografía transvaginal',
          kind: 'criteria',
          items: [
            {
              t: 'Longitud céfalo nalgas mayor o igual a 7 mm',
              d: 'Ausencia de actividad cardíaca embrionaria detectable',
              say: 'La visualización de un polo embrionario con longitud céfalo nalgas mayor o igual a siete milímetros sin latidos cardíacos en la ecografía transvaginal es el criterio de certeza más sólido e irreversible de aborto retenido y muerte embrionaria.',
            },
            {
              t: 'Saco gestacional mayor o igual a 25 mm',
              d: 'Diámetro medio del saco sin polo embrionario visible en su interior',
              say: 'Un saco gestacional con un diámetro medio mayor o igual a veinticinco milímetros en el que no se observa saco vitelino ni botón embrionario establece formalmente el diagnóstico de huevo anembrionado definitivo.',
            },
          ],
        },
        {
          title: 'Criterios de duda o control diferido',
          tag: 'Conducta prudente',
          kind: 'normal',
          items: [
            {
              t: 'Embrión menor a 7 mm sin latidos',
              d: 'Repetir ecografía transvaginal en siete a diez días',
              say: 'Si el embrión mide menos de siete milímetros y no se aprecian latidos, jamás debe apresurarse una conducta invasiva. La norma técnica obliga a repetir la ecografía transvaginal en siete a diez días para confirmar viabilidad.',
            },
            {
              t: 'Saco menor a 25 mm sin embrión',
              d: 'Control ecográfico en diez a catorce días',
              say: 'Un saco gestacional menor a veinticinco milímetros sin estructuras embrionarias visibles amerita control ecográfico en dos semanas para descartar un embarazo inicial normal con fecha de última regla desfasada.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Evacuación uterina',
      title: 'Comparación terapéutica: Tratamiento Médico versus Quirúrgico',
      head: ['Método de evacuación', 'Indicación clínica y protocolo', 'Ventajas principales', 'Riesgos o complicaciones'],
      rows: [
        {
          cells: ['Tratamiento médico con Misoprostol', 'Ochocientos microgramos vía vaginal o sublingual en menores de 12 sem', 'Evita pabellón y anestesia general', 'Cólicos intensos y sangrado prolongado'],
          say: 'El misoprostol es muy eficaz en gestaciones menores a doce semanas con estabilidad hemodinámica. Puede repetirse a las veinticuatro horas si no hay expulsión completa, logrando vaciamiento en la gran mayoría.',
        },
        {
          cells: ['Aspiración Manual Endouterina (AMEU)', 'Evacuación instrumental bajo anestesia local en menores de 12 sem', 'Menor riesgo de perforación y sinequias', 'Requiere cánula adecuada y pericia'],
          say: 'La aspiración manual endouterina es el método quirúrgico de primera elección antes de las doce semanas. Es mucho más segura, ambulatoria y genera menor trauma endometrial que el legrado tradicional.',
        },
        {
          cells: ['Legrado Uterino Instrumental (LUI)', 'Legrado con cureta cortante en pabellón central', 'Indicado ante hemorragia cataclísmica', 'Mayor riesgo de perforación y síndrome de Asherman'],
          say: 'El legrado cortante tradicional se reserva para situaciones de sangrado incoercible con compromiso hemodinámico donde no se disponga de cánulas, debido al riesgo de adherencias endometriales.',
        },
        {
          cells: ['Manejo expectante vigilado', 'Aborto incompleto o retenido temprano con control estrecho', 'Evita toda intervención médica', 'Mayor tasa de fracaso y conversión'],
          say: 'El manejo expectante solo se ofrece a pacientes altamente motivadas y estables con acceso rápido a urgencias si arrecia la hemorragia, requiriendo seguimiento clínico y ecográfico estricto.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia infecciosa mayor',
      title: 'Fisiopatología del aborto séptico: de la endometritis al shock tóxico',
      nodes: [
        { id: 'foc', col: 0, row: 1, k: 'start', t: 'Infección intrauterina', s: 'Colonización polimicrobiana de restos ovulares necróticos' },
        { id: 'tri', col: 1, row: 1, k: 'mech', t: 'Tríada infecciosa clásica', s: 'Fiebre alta, dolor pelviano difuso y metrorragia fétida purulenta' },
        { id: 'inv', col: 2, row: 1, k: 'risk', t: 'Invasión miometrial y pélvica', s: 'Microtrombos sépticos pelvianos y abscesos tuboováricos' },
        { id: 'per', col: 3, row: 0, k: 'alert', t: 'Peritonitis y perforación', s: 'Sospecha de maniobras abortivas traumáticas con irritación peritoneal' },
        { id: 'sho', col: 3, row: 2, k: 'trap', t: 'Shock séptico refractario', s: 'Síndrome de choque tóxico por Clostridium o enterobacterias con CID' },
      ],
      edges: [
        { from: 'foc', to: 'tri', label: 'necrosis tisular' },
        { from: 'tri', to: 'inv', label: 'diseminación venosa' },
        { from: 'inv', to: 'per', label: 'rotura o perforación' },
        { from: 'inv', to: 'sho', label: 'endotoxemia masiva' },
      ],
      steps: [
        {
          show: ['foc', 'tri'],
          note: 'Colonización polimicrobiana y tríada clínica',
          say: 'El aborto séptico ocurre cuando bacterias del tracto genital inferior o patógenos introducidos por maniobras invasivas colonizan los restos ovulares en descomposición. Clínicamente se manifiesta por la tríada clásica de fiebre alta, dolor hipogástrico intenso y flujo vaginal purulento maloliente.',
        },
        {
          show: ['inv', 'per'],
          note: 'Progresión miometrial y riesgo de perforación',
          say: 'Los gérmenes invaden el espesor del miometrio y los plexos venosos uterinos causando tromboflebitis séptica pelviana. Ante el antecedente de maniobras abortivas instrumentales, es mandatorio buscar signos de perforación uterina con pelviperitonitis aguda o neumoperitoneo.',
        },
        {
          show: ['sho'],
          note: 'Shock séptico por gramnegativos o anaerobios',
          say: 'La liberación masiva de lipopolisacáridos o exotoxinas de Clostridium perfringens desata coagulación intravascular diseminada, hemólisis intravascular masiva y shock séptico distributivo refractario, configurando una emergencia que amenaza directamente la supervivencia materna.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia infectológica',
      title: 'Pilares del tratamiento intensivo en el aborto séptico',
      cards: [
        {
          title: 'Antibioticoterapia parenteral triple',
          tag: 'Cobertura polimicrobiana amplia',
          kind: 'alert',
          items: [
            {
              t: 'Esquema clásico de primera línea',
              d: 'Clindamicina seiscientos miligramos cada ocho horas más Gentamicina tres a cinco miligramos por kilo al día más Ampicilina dos gramos cada seis horas',
              say: 'El esquema parenteral de elección en Chile combina clindamicina para anaerobios y flora genital, gentamicina para bacilos gramnegativos entéricos y ampicilina para enterococos y estreptococos del grupo B, logrando una cobertura bactericida de máxima potencia.',
            },
            {
              t: 'Alternativa con cefalosporinas',
              d: 'Ceftriaxona dos gramos al día más Metronidazol quinientos miligramos cada ocho horas más Ampicilina',
              say: 'En situaciones con sospecha de insuficiencia renal aguda secundaria a sepsis o hipovolemia, se sustituye el aminoglucósido por ceftriaxona endovenosa combinada con metronidazol y ampicilina para proteger el filtrado glomerular.',
            },
          ],
        },
        {
          title: 'Evacuación y cirugía de control de foco',
          tag: 'Descontaminación quirúrgica',
          kind: 'pharma',
          items: [
            {
              t: 'Ventana de evacuación uterina',
              d: 'Realizar legrado o aspiración dos a cuatro horas tras iniciar antibióticos',
              say: 'El foco séptico necrótico debe vaciarse con celeridad. Se inicia de inmediato la infusión de antibióticos endovenosos y, entre dos y cuatro horas después con niveles tisulares adecuados, se procede al legrado o aspiración bajo cobertura.',
            },
            {
              t: 'Histerectomía de rescate vital',
              d: 'Indicada ante shock refractario, perforación o gangrena por Clostridium',
              say: 'Si tras el legrado persiste el shock séptico refractario, si se evidencia miometritis necrotizante por Clostridium perfringens con gas intrauterino o si existe una perforación uterina extensa con peritonitis, la indicación inaplazable es la histerectomía total de urgencia.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Marco normativo en Chile',
      title: 'Ley 21.030: Interrupción Voluntaria del Embarazo en Tres Causales',
      cards: [
        {
          title: 'Causal uno y dos: sin límite gestacional',
          tag: 'Riesgo vital e inviabilidad',
          kind: 'criteria',
          items: [
            {
              t: 'Causal uno: Riesgo vital de la madre',
              d: 'La mujer se encuentra en riesgo vital de modo que la interrupción evita un peligro para su vida',
              say: 'La primera causal aplica cuando la continuación de la gestación representa un riesgo vital inminente para la mujer. No tiene ningún límite de edad gestacional y requiere el diagnóstico fundado de un equipo médico tratante.',
            },
            {
              t: 'Causal dos: Inviabilidad fetal letal',
              d: 'Patología congénita incompatible con la vida extrauterina independiente',
              say: 'La causal dos cubre anomalías congénitas letales incompatibles con la sobrevida extrauterina independiente, como la anencefalia o la trisomía trece confirmada. Tampoco contempla restricción en la edad gestacional.',
            },
          ],
        },
        {
          title: 'Causal tres: agresión sexual',
          tag: 'Plazos estrictos por edad',
          kind: 'alert',
          items: [
            {
              t: 'Mujeres mayores de catorce años',
              d: 'Embarazo resultante de violación hasta las doce semanas de gestación',
              say: 'En mujeres mayores de catorce años, la ley chilena permite la interrupción voluntaria por causal de agresión sexual hasta cumplir las doce semanas completas de gestación.',
            },
            {
              t: 'Niñas menores de catorce años',
              d: 'Plazo extendido legalmente hasta las catorce semanas de gestación',
              say: 'En niñas menores de catorce años de edad, el legislador reconoció la mayor vulnerabilidad y extendió formalmente el plazo legal de interrupción por violación hasta las catorce semanas de gestación.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Inmunoprofilaxis obligatoria',
      title: 'Prevención de la aloinmunización Rh en metrorragias del primer trimestre',
      head: ['Condición serológica materna', 'Indicación de Inmunoglobulina Anti-D', 'Dosis farmacológica', 'Plazo máximo de administración'],
      rows: [
        {
          cells: ['Madre Rh negativa no sensibilizada (Coombs negativo)', 'Obligatoria en todo aborto o sangrado genital', 'Ciento cincuenta a trescientos microgramos intramuscular', 'Dentro de las primeras setenta y dos horas'],
          say: 'Toda mujer con grupo Rh negativo no sensibilizada que experimenta una metrorragia o aborto debe recibir inmunoglobulina anti-D antes de cumplidas setenta y dos horas para prevenir la formación de anticuerpos.',
        },
        {
          cells: ['Madre Rh negativa ya sensibilizada (Coombs positivo)', 'Contraindicada o inútil', 'No administrar inmunoglobulina', 'Derivación directa a unidad de ARO'],
          say: 'Si la gestante ya se encuentra aloinmunizada con anticuerpos anti-D circulantes demostrados por un Coombs indirecto positivo, la gammaglobulina no aporta beneficio y la paciente se deriva a alto riesgo obstétrico.',
        },
        {
          cells: ['Madre Rh positiva conocida', 'No requiere profilaxis', 'Sin indicación farmacológica', 'Manejo obstétrico habitual'],
          say: 'Las pacientes con grupo Rh positivo no poseen riesgo de inmunización frente al antígeno D y por tanto no requieren ninguna formulación de inmunoglobulina profiláctica.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Manejo de la Metrorragia Temprana y Formas de Aborto',
      say: 'Revisemos el algoritmo estructurado para el diagnóstico y abordaje de las distintas formas clínicas de aborto espontáneo.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de aborto espontáneo',
      head: ['Situación presentada en la pregunta', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Embrión de 5 mm sin latidos cardíacos en primera ecografía', 'Indicar misoprostol o legrado por aborto retenido', 'Repetir ecografía transvaginal en siete a diez días para confirmar viabilidad'],
          say: 'Nunca se diagnostica aborto retenido si el embrión mide menos de siete milímetros. Se debe esperar una semana y reevaluar para evitar evacuar un embarazo normal viable.',
        },
        {
          cells: ['Aborto séptico grave con shock e hipotensión', 'Realizar legrado inmediato sin antibióticos previos', 'Iniciar triple esquema antibiótico parenteral y evacuar a las 2 a 4 horas'],
          say: 'Intervenir quirúrgicamente un útero infectado sin cobertura antibiótica desencadena una bacteriemia masiva fulminante. Se deben infundir antibióticos parenterales y evacuar entre dos y cuatro horas después.',
        },
        {
          cells: ['Adolescente de 13 años embarazada por violación a las 13 semanas', 'Rechazar la solicitud alegando límite de 12 semanas', 'Aceptar el procedimiento amparado en el plazo especial de 14 semanas'],
          say: 'En niñas menores de catorce años el plazo legal para la causal de violación se amplía hasta las catorce semanas de gestación según la normativa chilena vigente.',
        },
        {
          cells: ['Aborto incompleto no complicado menor a 12 semanas', 'Indicar legrado uterino con cureta cortante como primera elección', 'Preferir Aspiración Manual Endouterina (AMEU) o tratamiento médico'],
          say: 'La aspiración manual endouterina supera al legrado tradicional por tener menor tasa de complicaciones mecánicas como perforación uterina y síndrome adherencial de Asherman.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Diagnóstico ecográfico de certeza en sospecha de aborto retenido',
      stem: 'Una mujer de 29 años, cursando un embarazo de 8 semanas por fecha de última regla, acude a control por cese de sus síntomas nauseosos habituales, sin referir dolor ni sangrado genital. Al examen ginecológico se palpa útero aumentado de tamaño acorde y el orificio cervical interno se encuentra cerrado. Se realiza ecografía transvaginal que visualiza un saco gestacional intrauterino con un embrión cuya longitud céfalo-nalgas mide 8 milímetros, sin actividad cardíaca detectable tras dos minutos de observación continua.',
      question: '¿Cuál es el diagnóstico definitivo y la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Gestación incipiente normal; solicitar nueva ecografía de control en dos semanas' },
        { letter: 'B', text: 'Amenaza de aborto; indicar reposo en cama y progesterona oral' },
        { letter: 'C', text: 'Aborto retenido confirmado; ofrecer tratamiento médico con misoprostol o evacuación mediante AMEU' },
        { letter: 'D', text: 'Embarazo ectópico no complicado; solicitar niveles de gonadotropina coriónica' },
        { letter: 'E', text: 'Huevo anembrionado; programar legrado uterino cortante de urgencia' },
      ],
      correct: 'C',
      explanation: 'La presencia de un embrión con Longitud Céfalo-Nalgas (LCN) mayor o igual a 7 mm sin actividad cardíaca embrionaria en la ecografía transvaginal cumple el criterio ecográfico absoluto e irreversible de Aborto Retenido (no viabilidad). Al estar la paciente clínicamente estable y con cuello cerrado, las opciones terapéuticas de primera línea son el manejo farmacológico con misoprostol o la aspiración manual endouterina (AMEU).',
      say: {
        stem: 'Una paciente de ocho semanas asintomática con orificio cervical cerrado presenta ecografía transvaginal con embrión de ocho milímetros de longitud céfalo nalgas sin actividad cardíaca.',
        question: '¿Cuál es el diagnóstico definitivo y la conducta médica indicada?',
        options: 'La opción A plantea gestación incipiente y control en dos semanas. La B amenaza de aborto con reposo y progesterona. La C aborto retenido con misoprostol o AMEU. La D embarazo ectópico. La E huevo anembrionado con legrado. Piénsalo.',
        answer: 'La respuesta correcta es la C. Un embrión con longitud céfalo nalgas mayor o igual a siete milímetros sin latidos cardíacos define con certeza un aborto retenido, estando indicado el manejo médico con misoprostol o quirúrgico con AMEU.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2025',
      title: 'EUNACOM Diciembre 2025 · Pregunta 82',
      stem: 'Una paciente de 25 años acude al servicio de urgencia por metrorragia abundante de 2 días de evolución, acompañada de dolor en hipogastrio de tipo cólico. Al examen ginecológico se constata sangrado activo de origen uterino con coágulos y cuello uterino permeable con orificio cervical interno abierto. En la ecografía transvaginal se observan restos ovulares intrauterinos abundantes con un grosor endometrial heterogéneo de 24 mm.',
      question: '¿Cuál es el diagnóstico más adecuado?',
      options: [
        { letter: 'A', text: 'Amenaza de aborto' },
        { letter: 'B', text: 'Aborto completo' },
        { letter: 'C', text: 'Aborto incompleto' },
        { letter: 'D', text: 'Enfermedad trofoblástica gestacional' },
        { letter: 'E', text: 'Hemorragia uterina disfuncional' },
      ],
      correct: 'C',
      explanation: 'La presencia de metrorragia activa con cólicos hipogástricos, orificio cervical interno abierto y evidencia ecográfica de restos ovulares heterogéneos intrauterinos con grosor endometrial superior a 15 mm define formalmente un Aborto Incompleto. La conducta estándar consiste en la evacuación uterina mediante Aspiración Manual Endouterina (AMEU) o tratamiento médico.',
      say: {
        stem: 'Una paciente de veinticinco años consulta por metrorragia abundante, dolor cólico, cuello uterino permeable con orificio cervical abierto y restos ovulares ecográficos con grosor de veinticuatro milímetros.',
        question: '¿Cuál es el diagnóstico más adecuado?',
        options: 'La opción A propone amenaza de aborto. La B aborto completo. La C aborto incompleto. La D enfermedad trofoblástica. La E hemorragia disfuncional. Piénsalo.',
        answer: 'La respuesta correcta es la C. La combinación de cuello abierto con restos ovulares intrauterinos engrosados configura el cuadro clásico de aborto incompleto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Manejo protocolizado del aborto séptico',
      stem: 'Una mujer de 26 años acude al servicio de urgencia con fiebre de 39.2°C, compromiso del estado general, dolor pelviano difuso intenso y metrorragia con salida de secreción purulenta de olor fétido por el orificio cervical. Al examen físico destaca taquicardia de 118 latidos por minuto, presión arterial de 95/60 mmHg, útero subinvolucionado muy sensible a la palpación y movilización cervical dolorosa.',
      question: '¿Cuál es la conducta médica inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar tratamiento ambulatorio con ciprofloxacino oral y citar a control' },
        { letter: 'B', text: 'Realizar legrado uterino instrumental inmediato en urgencia sin esperar antibióticos' },
        { letter: 'C', text: 'Hospitalizar de inmediato, iniciar triple esquema antibiótico parenteral y programar evacuación uterina a las 2 a 4 horas' },
        { letter: 'D', text: 'Administrar antipiréticos y esperar hemocultivos antes de iniciar tratamiento' },
        { letter: 'E', text: 'Programar histerectomía total de urgencia como primera medida' },
      ],
      correct: 'C',
      explanation: 'La paciente presenta un Aborto Séptico caracterizado por la tríada clásica de fiebre, dolor uterino exquisito y secreción fétida purulenta con taquicardia. El manejo mandatorio inmediato consiste en hospitalización urgente, toma de hemocultivos y urocultivo, inicio inmediato de antibioticoterapia triple parenteral (Clindamicina + Gentamicina + Ampicilina) y posterior evacuación uterina (mediante AMEU o legrado) tras 2 a 4 horas de iniciados los antibióticos para controlar el foco séptico sin provocar bacteriemia cataclísmica.',
      say: {
        stem: 'Una mujer de veintiséis años presenta fiebre de treinta y nueve grados, taquicardia, dolor pelviano intenso y metrorragia purulenta fétida con útero subinvolucionado y sensible.',
        question: '¿Cuál es la conducta médica inmediata más adecuada?',
        options: 'La opción A propone ciprofloxacino oral ambulatorio. La B legrado inmediato sin antibióticos. La C hospitalizar, iniciar triple esquema antibiótico parenteral y evacuar a las dos a cuatro horas. La D esperar hemocultivos. La E histerectomía inmediata. Piénsalo.',
        answer: 'La respuesta correcta es la C. Frente al aborto séptico se debe hospitalizar de inmediato, iniciar triple cobertura antibiótica parenteral para estabilizar a la paciente y evacuar la cavidad uterina entre dos y cuatro horas después.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Aplicación de la Ley 21.030 de interrupción voluntaria del embarazo',
      stem: 'Una adolescente de 13 años acude a un centro de salud acompañada por su madre solicitando la interrupción del embarazo bajo el marco de la Ley 21.030 por haber sido víctima de una agresión sexual. La ecografía obstétrica confirma un embarazo intrauterino viable de 13 semanas y 2 días de edad gestacional.',
      question: '¿Cuál es la situación legal y la conducta correspondiente según la normativa vigente en Chile?',
      options: [
        { letter: 'A', text: 'No procede la interrupción porque la causal de violación tiene un límite estricto de 12 semanas para todas las edades' },
        { letter: 'B', text: 'Procede la interrupción voluntaria porque en niñas menores de 14 años el plazo legal para la causal de violación se extiende hasta las 14 semanas' },
        { letter: 'C', text: 'Solo procede si se demuestra riesgo vital materno concomitante' },
        { letter: 'D', text: 'Requiere autorización judicial de un tribunal de familia antes de evaluar el procedimiento' },
        { letter: 'E', text: 'La ley prohíbe la interrupción en menores de edad sin una denuncia penal formal previa' },
      ],
      correct: 'B',
      explanation: 'Bajo la Ley 21.030 en Chile, la causal 3 (violación) contempla un límite de 12 semanas de gestación para mujeres mayores de 14 años, pero extiende expresamente el plazo hasta las 14 semanas de gestación cuando se trata de niñas menores de 14 años. Dado que la paciente tiene 13 años y cursa 13 semanas y 2 días, se encuentra plenamente dentro del plazo legal establecido.',
      say: {
        stem: 'Una niña de trece años víctima de agresión sexual solicita interrupción voluntaria del embarazo amparada en la Ley veintiún mil treinta, constatándose una edad gestacional de trece semanas y dos días.',
        question: '¿Cuál es la situación legal y la conducta correspondiente?',
        options: 'La opción A sostiene que no procede por superar doce semanas. La B confirma que procede porque en menores de catorce años el plazo se extiende hasta las catorce semanas. La C exige riesgo vital. La D orden judicial. La E denuncia penal previa obligatoria. Piénsalo.',
        answer: 'La respuesta correcta es la B. La ley chilena establece una extensión explícita del plazo hasta las catorce semanas de gestación para la causal de violación cuando la víctima es menor de catorce años.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en aborto y Ley 21.030 para el EUNACOM',
      cards: [
        {
          title: 'Clínica y ecografía',
          tag: 'Diagnóstico de certeza',
          kind: 'key',
          items: [
            {
              t: 'Amenaza versus aborto inevitable',
              d: 'El orificio cervical interno cerrado define la amenaza; abierto es inevitable',
              say: 'La clave semiológica que separa la amenaza de aborto de un aborto inevitable o incompleto es la apertura del orificio cervical interno.',
            },
            {
              t: 'Corte de longitud céfalo nalgas',
              d: 'LCN mayor o igual a 7 mm sin latidos sella aborto retenido',
              say: 'Un embrión de siete o más milímetros sin latidos cardíacos es aborto retenido irrefutable; bajo siete milímetros se repite la ecografía en una semana.',
            },
          ],
        },
        {
          title: 'Manejo de urgencia y ley',
          tag: 'Terapéutica oficial',
          kind: 'alert',
          items: [
            {
              t: 'Evacuación en aborto séptico a las 2 a 4 horas',
              d: 'Triple esquema antibiótico EV previo para evitar bacteriemia mortal',
              say: 'En aborto séptico nunca se realiza legrado sin antibióticos previos; se infunde el triple esquema y se evacua entre dos y cuatro horas después.',
            },
            {
              t: 'Inmunoglobulina Anti-D en Rh negativas',
              d: 'Administrar dentro de 72 horas en no sensibilizadas',
              say: 'Si te llevas una sola idea de hoy: toda mujer Rh negativa no sensibilizada con un aborto debe recibir inmunoglobulina anti-D antes de las setenta y dos horas para prevenir la aloinmunización en futuros embarazos. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Abordaje de la Metrorragia en la Primera Mitad del Embarazo',
    root: N(
      'start',
      'Metrorragia del Primer Trimestre de Gestación',
      'Evaluación de estabilidad hemodinámica · examen ginecológico con especuloscopía',
      'Iniciamos el abordaje evaluando la estabilidad hemodinámica y el estado del orificio cervical interno en el examen con espéculo.',
      [
        'Inestabilidad hemodinámica o sangrado masivo',
        N(
          'alert',
          'Reanimación Hemodinámica Inmediata',
          'Vías venosas gruesas, cristaloides, solicitud de glóbulos rojos y pabellón urgente',
          'Si la paciente presenta inestabilidad o hemorragia masiva, reanimamos con fluidos e ingresamos a pabellón de inmediato.',
        ),
      ],
      [
        'Paciente estable con Orificio Cervical Interno Cerrado',
        N(
          'q',
          'Ecografía Transvaginal Diagnóstica',
          'Evaluar saco intrauterino, presencia de polo embrionario y latidos cardíacos',
          'Si está estable y con cuello cerrado, la ecografía transvaginal define si hay vitalidad o muerte embrionaria.',
          [
            'Embrión con latidos cardiofetales presentes',
            N(
              'ok',
              'Amenaza de Aborto',
              'Reposo relativo, abstinencia sexual y reevaluación si aumenta el sangrado',
              'Si el embrión tiene latidos conservados, diagnosticamos amenaza de aborto e indicamos reposo y observación.',
            ),
          ],
          [
            'Embrión mayor o igual a 7 mm sin LCF o saco mayor a 25 mm sin embrión',
            N(
              'do',
              'Aborto Retenido',
              'Manejo farmacológico con Misoprostol o evacuación instrumental con AMEU',
              'Si confirma ausencia de latidos con embrión de siete milímetros o más, indicamos evacuación médica o quirúrgica.',
            ),
          ],
        ),
      ],
      [
        'Orificio Cervical Interno Abierto y Permeable',
        N(
          'q',
          'Aborto Inevitable o Incompleto',
          'Inspección de restos y evaluación ecográfica del grosor endometrial',
          'Si el cuello está abierto, evaluamos la presencia de restos ovulares intrauterinos para guiar la evacuación.',
          [
            'Restos heterogéneos intrauterinos mayores a 15 mm',
            N(
              'do',
              'Aborto Incompleto: Evacuación Uterina',
              'Aspiración Manual Endouterina (AMEU) o legrado instrumental según disponibilidad',
              'Si persisten restos abundantes, realizamos evacuación mediante aspiración manual o legrado instrumental.',
            ),
          ],
        ),
      ],
      [
        'Fiebre, dolor uterino intenso y flujo purulento fétido',
        N(
          'alert',
          'Aborto Séptico',
          'Triple antibiótico EV (Clindamicina + Gentamicina + Ampicilina) y evacuación en 2 a 4 horas',
          'Ante signos de infección intrauterina, hospitalizamos de inmediato con triple cobertura antibiótica y evacuamos el foco.',
        ),
      ],
    ),
  },
};
