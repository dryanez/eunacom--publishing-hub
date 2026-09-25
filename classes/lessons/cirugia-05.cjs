// Clase 11.5 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Clasificación etiológica primaria vs secundaria, abdomen perforativo, Signo de Jobert, neumoperitoneo y Parche de Graham',
      say: 'Bienvenidos a la quinta clase de cirugía general. Hoy estudiamos la peritonitis generalizada y el abdomen perforativo. La distinción cardinal para el EUNACOM es separar la peritonitis primaria del paciente cirrótico, cuyo tratamiento es exclusivamente médico, de la peritonitis secundaria por perforación de víscera hueca, que constituye una emergencia quirúrgica impostergable. Al terminar sabrás reconocer el vientre en tabla, el signo de Jobert y la técnica quirúrgica de rescate con parche de epiplón. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Etiología y patogenia',
      title: 'Las tres formas biológicas de peritonitis',
      nodes: [
        { id: 'per', col: 0, row: 2, k: 'start', t: 'Peritonitis generalizada', s: 'Inflamación difusa del peritoneo parietal y visceral' },
        { id: 'pri', col: 1, row: 0, k: 'good', t: 'Peritonitis Primaria PBE', s: 'Cirrosis hepática · monomicrobiana · tratamiento médico' },
        { id: 'sec', col: 1, row: 2, k: 'alert', t: 'Peritonitis Secundaria', s: 'Perforación de víscera hueca · polimicrobiana · quirúrgica' },
        { id: 'ter', col: 1, row: 4, k: 'trap', t: 'Peritonitis Terciaria', s: 'Persistente tras 48h de cirugía · flora nosocomial y hongos' },
        { id: 'ulc', col: 2, row: 1, k: 'cause', t: 'Úlcera péptica perforada', s: 'Dolor en puñalada · peritonitis química a bacteriana' },
        { id: 'neu', col: 3, row: 2, k: 'alert', t: 'Neumoperitoneo masivo', s: 'Aire libre subdiafragmático y Signo de Jobert' },
        { id: 'lap', col: 4, row: 2, k: 'good', t: 'Laparotomía y Parche de Graham', s: 'Lavado profuso y cierre con parche de epiplón' },
      ],
      edges: [
        { from: 'per', to: 'pri', label: 'sin solución de continuidad' },
        { from: 'per', to: 'sec', label: 'rotura visceral > 90%' },
        { from: 'per', to: 'ter', label: 'falla terapéutica en UCI' },
        { from: 'sec', to: 'ulc', label: 'ácido y bilis libre' },
        { from: 'ulc', to: 'neu', label: 'escape gaseoso' },
        { from: 'neu', to: 'lap', label: 'resolución urgente' },
      ],
      steps: [
        {
          show: ['per', 'pri'],
          note: 'Peritonitis primaria o espontánea',
          say: 'La peritonitis primaria o bacteriana espontánea se produce en pacientes con ascitis por cirrosis hepática o síndrome nefrótico, sin existir una perforación de víscera abdominal. Ocurre por traslocación bacteriana hematógena, típicamente monomicrobiana por Escherichia coli o neumococo. Su diagnóstico se confirma con más de doscientos cincuenta polimorfonucleares por milímetro cúbico en el líquido ascítico y su tratamiento es exclusivamente médico con cefotaxima o ceftriaxona endovenosa.',
        },
        {
          show: ['sec', 'ulc'],
          note: 'Peritonitis secundaria por perforación',
          say: 'La peritonitis secundaria representa más del noventa por ciento de los cuadros quirúrgicos y se debe a la rotura o necrosis de un órgano intraabdominal, como una úlcera péptica gastroduodenal, apendicitis gangrenosa o diverticulitis perforada. La flora es polimicrobiana mixta entérica con bacilos aerobios y anaerobios como Bacteroides fragilis.',
        },
        {
          show: ['neu', 'lap'],
          note: 'Neumoperitoneo y conducta quirúrgica',
          say: 'Al perforarse un órgano con gas, este escapa hacia la cavidad peritoneal alojándose bajo el diafragma. El contacto de jugo gástrico y bacterias produce peritonitis química y bacteriana inmediata. La presencia de neumoperitoneo con peritonismo obliga a reanimación y laparotomía de urgencia inmediata para lavado profuso y rafia con parche de Graham.',
        },
        {
          show: ['ter'],
          note: 'Peritonitis terciaria nosocomial',
          say: 'La peritonitis terciaria es una complicación tardía en pacientes críticos que persiste tras más de cuarenta y ocho horas de una cirugía previa adecuada. Es causada por patógenos nosocomiales oportunistas multirresistentes como Pseudomonas aeruginosa, Enterococcus faecium y levaduras como Candida albicans, con altísima mortalidad.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de urgencia',
      title: 'El síndrome de abdomen perforativo y sus signos cardinales',
      cards: [
        {
          title: 'Dolor en puñalada hiperagudo',
          kind: 'criteria',
          items: [
            {
              text: 'Inicio brusco en segundos, descrito como un dolor en puñalada en epigastrio.',
              say: 'El cuadro de úlcera péptica perforada debuta de forma instantánea, en segundos. El paciente puede precisar el minuto exacto en que sintió una puñalada desgarradora en el epigastrio, provocada por el contacto súbito del ácido clorhídrico y pepsina sobre el peritoneo ricamente inervado.',
            },
            {
              text: 'Inmovilidad absoluta: cualquier movimiento, respiración profunda o tos agrava el dolor.',
              say: 'El paciente permanece completamente inmóvil en decúbito dorsal con las piernas flectadas. La respiración se vuelve superficial y puramente torácica para evitar el roce del diafragma con la cavidad abdominal inflamada.',
            },
          ],
        },
        {
          title: 'Vientre en tabla y Signo de Jobert',
          kind: 'alert',
          items: [
            {
              text: 'Vientre en tabla: contractura muscular refleja involuntaria rígida en los cuatro cuadrantes.',
              say: 'A la palpación destaca el vientre en tabla, una contractura muscular refleja involuntaria y tónica de toda la pared anterior del abdomen que es invencible a la palpación y rígida como una madera. Traduce peritonitis química o purulenta difusa.',
            },
            {
              text: 'Signo de Jobert: desaparición de la matidez hepática a la percusión en el hemitórax derecho.',
              say: 'A la percusión, el hallazgo patognomónico es el signo de Jobert positivo: la desaparición de la matidez hepática normal sobre el reborde costal derecho, sustituida por timpanismo debido a la interposición de aire libre subdiafragmático. Además, existe silencio auscultatorio por íleo paralítico secundario.',
            },
          ],
        },
        {
          title: 'Contraindicación formal: Endoscopía digestiva',
          kind: 'key',
          items: [
            {
              text: 'La endoscopía digestiva alta está formalmente contraindicada ante sospecha de perforación.',
              say: 'Nunca se debe realizar una endoscopía alta si se sospecha úlcera perforada. La insuflación neumática endoscópica aumentaría drásticamente la fuga de aire y contenido gástrico hacia el peritoneo libre, agravando el shock.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Peritonitis Primaria versus Peritonitis Secundaria',
      head: ['Parámetro clínico', 'Peritonitis Primaria PBE', 'Peritonitis Secundaria', 'Implicancia médica directa'],
      rows: [
        {
          cells: [
            'Población y causa de base',
            'Cirrosis hepática avanzada con ascitis o síndrome nefrótico severo',
            'Cualquier paciente con perforación de víscera hueca: úlcera, apéndice o divertículo',
            'La PBE no tiene una perforación orgánica macroscópica de la pared digestiva.',
          ],
          say: 'La peritonitis primaria ocurre casi exclusivamente en pacientes cirróticos con ascitis preexistente por traslocación bacteriana. La peritonitis secundaria aparece en cualquier paciente como complicación de una perforación mecánica visceral.',
        },
        {
          cells: [
            'Microbiología del líquido peritoneal',
            'Monomicrobiana en más del noventa por ciento: Escherichia coli, Klebsiella o Neumococo',
            'Polimicrobiana mixta: flora entérica con aerobios gramnegativos y anaerobios Bacteroides',
            'El aislamiento de flora mixta con anaerobios en un cirrótico obliga a sospechar perforación secundaria.',
          ],
          say: 'La microbiología es determinante: la peritonitis bacteriana espontánea es monomicrobiana, mientras que la peritonitis secundaria es típicamente polimicrobiana con flora mixta fecal y anaerobios estrictos.',
        },
        {
          cells: [
            'Neumoperitoneo y conducta terapéutica',
            'Neumoperitoneo ausente · Tratamiento médico con Cefotaxima endovenosa',
            'Neumoperitoneo presente en más del ochenta por ciento · Laparotomía de urgencia',
            'Operar una PBE incrementa la mortalidad sobre el ochenta por ciento; no operar una peritonitis secundaria es fatal.',
          ],
          say: 'En la peritonitis primaria no hay neumoperitoneo y la laparotomía está formalmente desaconsejada porque precipita la falla hepática; se trata con cefotaxima endovenosa. Por el contrario, la peritonitis secundaria con neumoperitoneo exige cirugía de urgencia inmediata.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de urgencias',
      title: 'Enfrentamiento y conducta en peritonitis generalizada',
      say: 'Revisemos el árbol de decisión ante un paciente con signos de peritonitis aguda generalizada para definir el manejo médico o quirúrgico inmediato.',
    },

    {
      type: 'points',
      kicker: 'Tratamiento quirúrgico definitivo',
      title: 'Técnica de Parche de Graham y reanimación perioperatoria',
      cards: [
        {
          title: 'Medidas médicas iniciales inmediatas',
          kind: 'pharma',
          items: [
            {
              text: 'Instalación de sonda nasogástrica a caída libre para vaciar el estómago.',
              say: 'La primera medida en urgencias es instalar una sonda nasogástrica gruesa a caída libre con aspiración suave para evacuar el ácido y jugo gástrico residual, interrumpiendo la fuga continua hacia el peritoneo.',
            },
            {
              text: 'Reanimación con cristaloides isotónicos y cobertura antibiótica endovenosa de amplio espectro.',
              say: 'Se inicia reposición hidroelectrolítica agresiva con suero ringer lactato o fisiológico por dos vías venosas gruesas y se administran antibióticos endovenosos de amplio espectro como Ceftriaxona dos gramos al día más Metronidazol quinientos miligramos cada ocho horas.',
            },
          ],
        },
        {
          title: 'Técnica quirúrgica: Parche de Graham',
          kind: 'key',
          items: [
            {
              text: 'Lavado profuso de toda la cavidad peritoneal con seis a diez litros de suero fisiológico tibio.',
              say: 'El pilar fundamental de la cirugía es el lavado exhaustivo de los cuatro cuadrantes, correderas parietocólicas y fondo de saco de Douglas con varios litros de suero fisiológico tibio para eliminar todo residuo alimentario y purulento.',
            },
            {
              text: 'Sutura de la perforación con parche de epiplón mayor pediculado vascularizado.',
              say: 'La úlcera duodenal o gástrica perforada no se reseca en agudo: se realiza la técnica de Graham o parche de epiplón, pasando puntos de sutura a través de los bordes sanos y anudándolos sobre una lengüeta de epiplón mayor vascularizado que sella biológicamente la perforación.',
            },
          ],
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 169',
      caseText: 'Una paciente de cuarenta y tres años, multípara, presenta dolor abdominal difuso, intenso y vómitos, con marcado meteorismo. Al examen físico tiene frecuencia cardíaca de ciento diez por minuto, presión arterial de cien con sesenta milímetros de mercurio y al examen abdominal se observa cicatriz de cesárea antigua. Se palpa abdomen muy doloroso tanto a la palpación superficial como profunda, con distensión de la pared abdominal, pérdida de la matidez hepática a la percusión y abolición de los ruidos hidroaéreos a la auscultación. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Obstrucción intestinal', isCorrect: false },
        { letter: 'B', text: 'Pancreatitis aguda', isCorrect: false },
        { letter: 'C', text: 'Perforación intestinal', isCorrect: true },
        { letter: 'D', text: 'Megacolon tóxico', isCorrect: false },
        { letter: 'E', text: 'Embolia mesentérica', isCorrect: false },
      ],
      correct: 'C',
      say: {
        stem: 'Analicemos esta pregunta oficial de agosto de dos mil veintiuno. Una mujer de cuarenta y tres años presenta dolor abdominal difuso muy intenso, vómitos, distensión, taquicardia y dos signos semiológicos patognomónicos: pérdida de la matidez hepática a la percusión y abolición de los ruidos hidroaéreos.',
        question: 'Se pregunta cuál es el diagnóstico más probable.',
        options: 'Las alternativas son: opción A, obstrucción intestinal; opción B, pancreatitis aguda; opción C, perforación intestinal; opción D, megacolon tóxico; y opción E, embolia mesentérica.',
        answer: 'La respuesta correcta es la opción C, perforación intestinal. La desaparición de la matidez hepática a la percusión es el signo de Jobert positivo, que traduce la presencia de neumoperitoneo masivo por escape de aire desde una víscera perforada. Sumado al dolor peritoneal difuso y el silencio auscultatorio, confirma una peritonitis secundaria por perforación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Un hombre de cincuenta y cuatro años con antecedentes de consumo crónico de antiinflamatorios no esteroidales por lumbago, consulta por un cuadro de inicio súbito hace tres horas de dolor epigástrico de intensidad diez de diez, que describe como una puñalada y que rápidamente se generalizó a todo el abdomen. Al examen físico destaca paciente pálido, sudoroso, con presión arterial de cien con sesenta, frecuencia cardíaca de ciento quince por minuto. El abdomen se encuentra plano, inmóvil con la respiración y presenta vientre en tabla con resistencia muscular invencible y dolor a la descompresión en los cuatro cuadrantes. Se solicita radiografía de tórax de pie que evidencia una semiluna radiolúcida de gas bajo el hemidiafragma derecho. ¿Cuál es la conducta terapéutica de elección?',
      question: '¿Cuál es la conducta terapéutica de elección?',
      options: [
        { letter: 'A', text: 'Endoscopía digestiva alta de urgencia para hemostasia con clip', isCorrect: false },
        { letter: 'B', text: 'Instalación de sonda nasogástrica, reanimación con fluidos endovenosos y laparotomía de urgencia con parche de Graham', isCorrect: true },
        { letter: 'C', text: 'Tratamiento médico conservador con inhibidores de bomba de protones a altas dosis en infusión continua', isCorrect: false },
        { letter: 'D', text: 'Paracentesis diagnóstica y evacuadora urgente', isCorrect: false },
        { letter: 'E', text: 'Tomografía computarizada de control en veinticuatro horas y analgesia con opioides', isCorrect: false },
      ],
      correct: 'B',
      say: {
        stem: 'Revisemos este caso representativo de úlcera péptica perforada en un paciente consumidor de antiinflamatorios. Presenta dolor en puñalada de inicio hiperagudo, vientre en tabla y una radiografía de tórax con neumoperitoneo subdiafragmático indiscutible.',
        question: 'Nos consultan por la conducta terapéutica de elección.',
        options: 'Las opciones son: opción A, endoscopía alta de urgencia; opción B, sonda nasogástrica, fluidos endovenosos y laparotomía de urgencia con parche de Graham; opción C, tratamiento médico conservador con omeprazol; opción D, paracentesis; y opción E, tomografía en veinticuatro horas.',
        answer: 'La respuesta correcta es la opción B. El cuadro de úlcera péptica perforada con neumoperitoneo y peritonitis química y bacteriana generalizada es una indicación formal de cirugía de urgencia. Se descomprime el estómago con sonda nasogástrica, se inicia hidratación y antibióticos, y se realiza laparotomía con lavado peritoneal profuso y sutura con parche de epiplón de Graham.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en peritonitis generalizada',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'Peritonitis primaria es médica y peritonitis secundaria es quirúrgica.',
              say: 'Primera regla: la peritonitis bacteriana espontánea en el cirrótico es monomicrobiana y se trata médicamente con cefotaxima; la peritonitis secundaria por perforación es polimicrobiana y exige cirugía de urgencia.',
            },
            {
              text: 'El dolor en puñalada y el vientre en tabla traducen perforación.',
              say: 'Segunda regla: el inicio instantáneo del dolor en puñalada seguido de vientre en tabla rígido como madera es el cuadro cardinal de la úlcera péptica perforada a cavidad libre.',
            },
            {
              text: 'El Signo de Jobert es el timpanismo sobre el área hepática.',
              say: 'Tercera regla: el signo de Jobert traduce neumoperitoneo por interposición de aire libre entre el hígado y la pared torácica; la radiografía de tórax de pie es el estudio inicial más rápido.',
            },
            {
              text: 'El tratamiento de la úlcera perforada es el Parche de Graham.',
              say: 'Cuarta regla: el tratamiento quirúrgico estándar consiste en lavado peritoneal profuso y rafia de la perforación protegida con un parche de epiplón pediculado vascularizado.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'Nunca solicitar endoscopía digestiva ante sospecha de perforación.',
              say: 'Si te llevas una sola idea de hoy: la endoscopía digestiva alta está terminantemente contraindicada ante la sospecha de úlcera perforada, porque la insuflación de aire agrava drásticamente la peritonitis y el neumoperitoneo. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Enfrentamiento de la Peritonitis Generalizada',
    root: N(
      'start',
      'Sospecha de peritonitis generalizada',
      'Dolor abdominal difuso · defensa involuntaria · vientre en tabla',
      'Iniciamos el enfrentamiento determinando si existe antecedente de cirrosis o si el cuadro corresponde a una perforación visceral.',
      [
        'Paciente cirrótico con ascitis conocida (Sospecha PBE)',
        N(
          'do',
          'Paracentesis diagnóstica urgente',
          'Recuento celular y cultivo monomicrobiano',
          'En el cirrótico realizamos paracentesis diagnóstica inmediata para descartar peritonitis primaria.',
          [
            'PMN ≥ 250 por mm³ y sin aire libre',
            N(
              'ok',
              'Peritonitis Bacteriana Espontánea confirmada',
              'Tratamiento médico con Cefotaxima 2 g c/8h EV · NO operar',
              'Confirmada la peritonitis bacteriana espontánea, el tratamiento es exclusivamente médico con antibióticos; la cirugía está contraindicada.',
            ),
          ],
          [
            'Flora polimicrobiana o neumoperitoneo en TAC',
            N(
              'alert',
              'Perforación visceral secundaria en paciente cirrótico',
              'Sospecha de rotura de víscera sobreagregada',
              'Si el líquido ascítico muestra flora mixta o hay aire libre en la tomografía, asumimos peritonitis secundaria e indicamos cirugía.',
            ),
          ],
        ),
      ],
      [
        'Inicio hiperagudo con vientre en tabla (Sospecha perforativa)',
        N(
          'do',
          'Radiografía de tórax de pie o TAC con contraste',
          'Pesquisa de aire libre subdiafragmático o líquido libre',
          'En sospecha de perforación solicitamos radiografía de tórax de pie para constatar neumoperitoneo subdiafragmático.',
          [
            'Neumoperitoneo confirmado + peritonismo',
            N(
              'alert',
              'Abdomen perforativo agudo confirmado',
              'Sonda nasogástrica + hidratación vigorosa + antibióticos EV',
              'Confirmado el neumoperitoneo con peritonitis, instalamos sonda nasogástrica, hidratación endovenosa y antibióticos.',
              [
                'Cirugía de urgencia inmediata',
                N(
                  'ok',
                  'Laparotomía con lavado y Parche de Graham',
                  'Lavado profuso de 4 cuadrantes y cierre con epiplón',
                  'Realizamos laparotomía de urgencia con lavado peritoneal exhaustivo y rafia con parche de epiplón de Graham.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
