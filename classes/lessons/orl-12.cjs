// Clase 14.12 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-12). Preguntas: banco real EUNACOM (class_questions.cjs --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hematoma septal tras un golpe en la nariz, poliposis con tríada de Samter y desviación del tabique',
      say: 'Bienvenido. Tres problemas de la nariz que parecen distintos, pero comparten un síntoma, la obstrucción nasal, y un hilo para el examen. Un golpe en la nariz siempre obliga a descartar un hematoma septal, porque es una urgencia quirúrgica. Un pólipo bilateral en un asmático obliga a pensar en la tríada de Samter. Y un pólipo de un solo lado en un adulto obliga a descartar un tumor.',
    },

    {
      type: 'flow',
      kicker: 'Trauma nasal',
      title: 'Del golpe a la nariz en silla de montar',
      nodes: [
        { id: 'tr', col: 0, row: 1, k: 'cause', t: 'Golpe en la nariz', s: 'Fractura nasal: la más frecuente de la cara' },
        { id: 'he', col: 1, row: 1, k: 'mech', t: 'Sangre bajo el pericondrio', s: 'Entre el cartílago y su cubierta' },
        { id: 'is', col: 2, row: 1, k: 'effect', t: 'Cartílago sin irrigación', s: 'Se nutre por difusión desde el pericondrio' },
        { id: 'ne', col: 3, row: 0, k: 'alert', t: 'Necrosis en 24 a 48 horas', s: 'Nariz en silla de montar' },
        { id: 'ab', col: 3, row: 2, k: 'alert', t: 'Absceso septal', s: 'Sobreinfección del hematoma' },
        { id: 'dr', col: 2, row: 2, k: 'good', t: 'Drenaje quirúrgico urgente', s: 'Y taponamiento bilateral compresivo' },
      ],
      edges: [
        { from: 'tr', to: 'he' },
        { from: 'he', to: 'is' },
        { from: 'is', to: 'ne' },
        { from: 'is', to: 'ab' },
        { from: 'dr', to: 'is', label: 'evita' },
      ],
      steps: [
        { show: ['tr'], note: 'Epistaxis, edema, laterorrinia, crepitación',
          say: 'La fractura nasal es la fractura facial más frecuente. Se manifiesta con epistaxis inicial, dolor, edema, desviación del dorso hacia un lado, que se llama laterorrinia, y crepitación ósea al palpar con cuidado. Ojo con esto: el diagnóstico y la indicación de cirugía son clínicos. La radiografía de huesos propios tiene valor médico-legal, pero no decide la conducta. Mira esta fractura de los huesos propios: el dorso nasal desplazado hacia la derecha, la laterorrinia.',
          photo: { src: 'biblioteca/17_otorrino/orl-12/01_fractura-huesos-nasales-desviacion__bailey-love_p738.jpg', label: 'Laterorrinia tras un golpe', at: 'Mira esta fractura', credit: 'Bailey & Love 27.ª ed., Fig. 46.37' } },
        { show: ['he', 'is'], note: 'El cartílago septal no tiene vasos propios',
          say: 'Pero lo que se pregunta no es la fractura, es lo que se esconde detrás. Si el golpe rompe vasos submucosos, la sangre se acumula entre el cartílago cuadrangular y el pericondrio. Y el cartílago septal no tiene irrigación propia: se nutre por difusión desde ese pericondrio. Si la sangre lo despega, lo deja sin alimento.' },
        { show: ['ne', 'ab'], note: 'Dos desenlaces malos',
          say: 'En veinticuatro a cuarenta y ocho horas el cartílago se necrosa. Eso deja una deformidad definitiva, la nariz en silla de montar, o se infecta y forma un absceso septal. Por eso es una urgencia.' },
        { show: ['dr'], note: 'Se drena, no se observa',
          say: 'La conducta no admite demora: drenaje quirúrgico urgente, con incisión y aspiración de los coágulos, seguido de taponamiento nasal bilateral compresivo y cobertura antibiótica.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El hematoma que mata al cartílago',
      images: [
        { src: 'animaciones/orl-12/A1_hematoma_septal_a_silla_de_montar.mp4', label: 'Hematoma septal: del golpe a la nariz en silla de montar', credit: 'Ilustración: Servier Medical Art (smart.servier.com), CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'La sangre bajo el pericondrio deja sin alimento al cartílago',
          say: 'Mira el tabique. Después del golpe, la sangre se acumula entre el cartílago y su pericondrio, y abulta las dos fosas. El cartílago septal no tiene vasos propios: se nutre por difusión desde ese pericondrio, y si la sangre lo despega, en veinticuatro a cuarenta y ocho horas se necrosa. Queda la nariz en silla de montar, o un absceso. Por eso se drena de urgencia, no se observa ni se punciona.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hematoma septal',
      title: 'Cómo se reconoce',
      cards: [
        { title: 'Rinoscopía anterior', tag: 'Obligatoria en todo trauma', kind: 'key', items: [
          { t: 'Abombamiento fluctuante y violáceo', d: 'Blando al tacto, ocluye ambas fosas',
            say: 'En todo paciente con trauma nasal tienes que hacer una rinoscopía anterior. Lo que buscas es un abombamiento del tabique, fluctuante, rojo violáceo o azulado, blando al tacto, habitualmente bilateral, que tapa las fosas nasales. Mira esta nariz desde abajo: el tabique abultado, rojo violáceo, ocupa las dos fosas.',
            photo: { src: 'biblioteca/17_otorrino/orl-12/02_hematoma-septal-bilateral__commons.jpg', label: 'Hematoma septal bilateral', at: 'Mira esta nariz desde abajo', credit: 'Wikimedia Commons, CC BY-SA 4.0' } },
          { t: 'Tras el golpe: obstrucción y dolor', d: 'Si tarda, aparece fiebre',
            say: 'El paciente cuenta un golpe, y después obstrucción nasal y dolor. Si pasan los días sin drenarlo, aparece la fiebre, y ahí ya es un absceso.' },
        ] },
        { title: 'Trampas', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'No observar ni puncionar', d: 'Se drena con bisturí',
            say: 'Dos distractores clásicos: observar y controlar en dos semanas, o drenar con punción de aguja fina. Ninguno sirve, porque el coágulo no sale por una aguja.' },
          { t: 'El taponamiento solo no basta', d: 'Se tapona después de drenar',
            say: 'Y el taponamiento solo, sin drenar, tampoco. El tapón compresivo se pone después del drenaje, para que no se vuelva a formar el hematoma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hematoma nasoseptal',
      title: 'Hematoma nasoseptal: qué haces tú y qué hace el especialista',
      cards: [
        { title: 'Cuándo lo sospechas', tag: 'Trauma nasal', kind: 'alert', items: [
          { t: 'Obstrucción bilateral y tabique abultado', d: 'Rojo-azulado, blando; no se retrae con descongestionante',
            say: 'El drenaje del hematoma nasoseptal no lo haces tú: se deriva, y con urgencia. Lo que haces es sospecharlo ante un trauma nasal con obstrucción en las dos fosas y un abultamiento rojo azulado y blando del tabique que no se retrae con descongestionante.' },
        ] },
        { title: 'Mientras se traslada', tag: 'Tu conducta', kind: 'key', items: [
          { t: 'Analgesia, hielo, cabecera elevada', d: 'Y antibiótico profiláctico: amoxicilina con clavulánico',
            say: 'Mientras lo trasladas, indicas analgesia, hielo local, cabecera elevada y un antibiótico profiláctico, amoxicilina con ácido clavulánico.' },
        ] },
        { title: 'El especialista', tag: 'Idealmente en 24 horas', kind: 'pharma', items: [
          { t: 'Incide el mucopericondrio y evacúa la sangre', d: 'Taponamiento bilateral o lámina de silicona',
            say: 'El especialista incide el mucopericondrio, evacúa la sangre y deja un taponamiento bilateral o una lámina de silicona. Debe ser idealmente en las primeras veinticuatro horas, porque el cartílago depende del pericondrio para su irrigación.' },
          { t: 'Si se demora', d: 'Absceso septal, silla de montar, perforación y complicaciones intracraneales',
            say: 'Si se demora, aparecen el absceso septal, la nariz en silla de montar, la perforación del tabique y complicaciones intracraneales, como meningitis y trombosis del seno cavernoso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Poliposis nasal',
      title: 'Pólipos y tríada de Samter',
      cards: [
        { title: 'Pólipo benigno', tag: 'Bilateral', kind: 'criteria', items: [
          { t: 'Masa translúcida, blanco grisácea', d: 'Aspecto de uva pelada, indolora',
            say: 'Los pólipos nasales son formaciones benignas y edematosas de la mucosa de los senos, sobre todo etmoidales, que prolapsan hacia la nariz. A la rinoscopía se ven lisos, brillantes, translúcidos, de color blanco grisáceo, como una uva pelada. Son indoloros e insensibles al tacto, a diferencia del cornete inferior, que es rojizo y muy sensible. Mira este: un pólipo grande, liso y amarillento, que desciende hasta la orofaringe.',
            photo: { src: 'biblioteca/17_otorrino/orl-12/03_poliposis-nasal-orofaringe__bull_p158.jpg', label: 'Pólipo hasta la orofaringe', at: 'Mira este', credit: 'Color Atlas of ENT Diagnosis (Bull), p. 158' } },
          { t: 'Tratamiento: corticoide intranasal', d: 'Más prednisona breve; cirugía si no cede',
            say: 'El tratamiento de primera línea es corticoide intranasal en dosis altas, continuo, con mometasona o fluticasona, asociado a ciclos breves de prednisona. Si es refractario o la obstrucción es total, cirugía endoscópica funcional de senos, o terapia biológica con dupilumab.' },
        ] },
        { title: 'Tríada de Samter', tag: 'También Widal o EREA', kind: 'alert', items: [
          { t: 'Poliposis bilateral y asma', d: 'Asma de difícil control',
            say: 'La tríada de Samter, o de Widal, que hoy se llama enfermedad respiratoria exacerbada por aspirina, tiene tres componentes. Uno, poliposis nasal bilateral extensa. Dos, asma bronquial de difícil control.' },
          { t: 'Broncoespasmo con aspirina y AINE', d: 'Estrictamente prohibidos',
            say: 'Y tres, intolerancia a la aspirina y a los antiinflamatorios no esteroidales, con broncoespasmo grave. En estos pacientes la aspirina y los AINE están estrictamente prohibidos, por el riesgo de broncoespasmo fatal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Alerta',
      title: 'Pólipo unilateral: sospecha tumor',
      cards: [
        { title: 'Un solo lado', tag: 'Adulto', kind: 'alert', items: [
          { t: 'Papiloma invertido o neoplasia', d: 'Biopsia y TAC siempre',
            say: 'Aquí el hilo del examen es la lateralidad. Todo pólipo nasal unilateral en un adulto se considera sospechoso de papiloma invertido o de adenocarcinoma, y exige biopsia y TAC. No se trata como una poliposis inflamatoria.' },
          { t: 'Masa unilateral que sangra', d: 'Destruye hueso; riesgo de carcinoma del 10%',
            say: 'El papiloma invertido es un tumor epitelial benigno, pero localmente invasivo. Se ve como una masa unilateral, vegetante o cerebriforme, que sangra con facilidad y destruye hueso, y tiene un diez por ciento de degeneración a carcinoma espinocelular. Se trata con biopsia y resección quirúrgica amplia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Desviación septal',
      title: 'Obstrucción fija de un lado',
      cards: [
        { title: 'Fisiopatología', tag: 'Congénita o postraumática', kind: 'key', items: [
          { t: 'Obstrucción mecánica unilateral', d: 'Constante, no fluctúa',
            say: 'La desviación del tabique, congénita o postraumática, produce una obstrucción mecánica fija y constante, sobre todo de un lado. La fosa contralateral, que queda más ancha, desarrolla una hipertrofia compensatoria del cornete inferior, para regular la resistencia nasal.' },
          { t: 'Septoplastia electiva', d: 'Con turbinoplastia si hay cornete hipertrófico',
            say: 'El tratamiento sintomático inicial son los corticoides intranasales. La corrección definitiva es quirúrgica, una septoplastia electiva, habitualmente asociada a turbinoplastia, cuando la obstrucción es invalidante o se acompaña de rinosinusitis recurrente o de síndrome de apnea hipopnea obstructiva del sueño.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué se ve en la rinoscopía',
      head: ['Lesión', 'Aspecto', 'Al tocarla', 'Conducta'],
      rows: [
        { cells: ['Pólipo benigno', 'Translúcido, uva pelada', 'Indoloro, no sangra', 'Corticoide intranasal; cirugía si es refractario'],
          say: 'Esta tabla te ordena lo que ves con el espéculo. El pólipo benigno es translúcido, como una uva pelada, indoloro y no sangra. Se trata con corticoide intranasal, y con cirugía endoscópica si es refractario.' },
        { cells: ['Cornete hipertrófico', 'Rosado, firme y elástico', 'Muy doloroso', 'Corticoide, descongestionante o turbinoplastia'],
          say: 'El cornete inferior hipertrófico es rosado o rojizo, firme, y muy doloroso al tocarlo con el estilete. Esa sensibilidad es lo que lo separa del pólipo.' },
        { cells: ['Hematoma septal', 'Abombamiento violáceo fluctuante', 'Doloroso, tras un golpe', 'Urgencia: drenaje y taponamiento bilateral'],
          say: 'El hematoma septal es un abombamiento violáceo y blando del tabique tras un golpe, y es una urgencia: drenaje inmediato y taponamiento bilateral compresivo.' },
        { cells: ['Papiloma invertido', 'Masa unilateral vegetante', 'Sangra, destruye hueso', 'Biopsia y resección amplia'],
          say: 'Y el papiloma invertido es una masa unilateral que sangra con facilidad, y exige biopsia y resección amplia por el riesgo de carcinoma.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol para el paciente con obstrucción nasal: primero el golpe, después el pólipo.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una mujer de 38 años con asma de difícil control y obstrucción nasal bilateral crónica con hiposmia consulta por una crisis de disnea y sibilancias a los 30 minutos de tomar ibuprofeno por una cefalea. En la rinoscopía anterior tiene masas bilaterales, translúcidas, blanco grisáceas e indoloras al tacto, que ocupan ambas fosas.',
      question: '¿Cuál es el diagnóstico y la medida fundamental?',
      options: [
        { letter: 'A', text: 'Cornetes hipertróficos; turbinoplastia inmediata' },
        { letter: 'B', text: 'Tríada de Samter; evitar aspirina y AINE y tratar la poliposis con corticoide intranasal' },
        { letter: 'C', text: 'Papiloma invertido; resección amplia urgente' },
        { letter: 'D', text: 'Hematoma septal; drenaje quirúrgico inmediato' },
        { letter: 'E', text: 'Alergia a ibuprofeno solamente; cambiar a otro AINE' },
      ],
      correct: 'B',
      explanation: 'Poliposis bilateral, asma de difícil control y broncoespasmo por un AINE forman la tríada de Samter. Se evita la aspirina y todos los AINE y se trata la poliposis con corticoide intranasal en dosis altas, con ciclos breves de prednisona; si es refractaria, cirugía endoscópica funcional.',
      say: {
        stem: 'Veamos un caso. Mujer de treinta y ocho años con asma de difícil control y obstrucción nasal bilateral crónica con hiposmia. A los treinta minutos de tomar ibuprofeno por una cefalea, hace una crisis de disnea y sibilancias. En la rinoscopía tiene masas bilaterales, translúcidas, blanco grisáceas e indoloras, que ocupan ambas fosas.',
        question: '¿Cuál es el diagnóstico y la medida fundamental?',
        options: 'Las opciones: cornetes hipertróficos con turbinoplastia; tríada de Samter con evitar aspirina y AINE y corticoide intranasal; papiloma invertido con resección; hematoma septal con drenaje; o alergia al ibuprofeno solamente, cambiando de AINE. Piénsalo.',
        answer: 'Es la B. Pólipos bilaterales, asma y broncoespasmo con un antiinflamatorio son la tríada de Samter. La medida clave es evitar la aspirina y todos los AINE, y tratar la poliposis con corticoide intranasal. La E es la trampa: aquí no se trata de cambiar de AINE, porque la reacción es con los AINE en general. Y el cornete y el papiloma no se ven translúcidos, bilaterales e indoloros.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 171',
      stem: 'Un paciente de 34 años, sin antecedentes, sufre caída mientras subía una escalera, resultando con golpe en su rostro, al ingreso se en buenas condiciones generales, pero con epistaxis. Se realiza especuloscopía nasal donde se aprecia engrosamiento septal bilateral y epistaxis anterior.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Drenaje por punción' },
        { letter: 'B', text: 'Observar y controlar en 2 semanas' },
        { letter: 'C', text: 'Drenaje quirúrgico urgente' },
        { letter: 'D', text: 'Antibióticos endovenosos' },
        { letter: 'E', text: 'Taponamiento nasal bilateral' },
      ],
      correct: 'C',
      explanation: 'El engrosamiento septal bilateral tras un golpe es un hematoma del tabique. Requiere drenaje quirúrgico urgente, seguido de taponamiento y antibiótico.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil trece. Un paciente de treinta y cuatro años cae mientras sube una escalera y se golpea la cara. Está en buenas condiciones, pero con epistaxis. En la especuloscopía nasal hay engrosamiento septal bilateral.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: drenaje por punción, observar y controlar en dos semanas, drenaje quirúrgico urgente, antibióticos endovenosos, o taponamiento nasal bilateral. Piénsalo.',
        answer: 'Es la C. Engrosamiento septal bilateral después de un golpe es un hematoma del tabique, y se drena quirúrgicamente de forma urgente. La E es la tentación: el taponamiento se pone después de drenar, no en lugar de drenar. Y la punción no vacía un coágulo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 168',
      stem: 'Un paciente de 28 años presenta un pelotazo en la cara, hace 5 días, con golpe en la nariz. Evoluciona con dolor, edema, obstrucción nasal y luego sensación febril. Al examen físico se observa aumento de volumen bilateral, en relación al tabique nasal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Drenaje por punción con aguja fina' },
        { letter: 'B', text: 'Drenaje quirúrgico con bisturí' },
        { letter: 'C', text: 'Taponamiento anterior' },
        { letter: 'D', text: 'Administrar analgésicos' },
        { letter: 'E', text: 'Reducción en pabellón' },
      ],
      correct: 'B',
      explanation: 'Un hematoma septal que lleva días y ya produce fiebre se ha sobreinfectado: es un absceso septal. Se drena con bisturí; la punción con aguja no basta.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Un paciente de veintiocho años recibe un pelotazo en la nariz hace cinco días. Evoluciona con dolor, edema, obstrucción nasal y después sensación febril. Tiene aumento de volumen bilateral en el tabique.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: drenaje con aguja fina, drenaje quirúrgico con bisturí, taponamiento anterior, analgésicos, o reducción en pabellón. Piénsalo.',
        answer: 'Es la B. Es el mismo hematoma de la pregunta anterior, pero cinco días después y con fiebre: ya se sobreinfectó y es un absceso septal. Se drena con bisturí. Con una aguja fina no sale el pus ni el coágulo, y el taponamiento o los analgésicos dejan el problema sin resolver.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 58',
      stem: 'Un paciente, con antecedente de rinitis alérgica, presenta obstrucción nasal marcada, asociada varios episodios de sinusitis en el último tiempo. Respira por la boca, por la obstrucción nasal. En la rinoscopía anterior, se visualizan numerosos pólipos en la mucosa, de aspecto pálido y brillante, que obstruyen completamente las fosas nasales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar fluticasona tópica c/12 horas' },
        { letter: 'B', text: 'Iniciar prednisona oral 1 mg/Kg/día por 7 días' },
        { letter: 'C', text: 'Solicitar TAC de cavidades paranasales' },
        { letter: 'D', text: 'Realizar cirugía endoscópica nasal' },
        { letter: 'E', text: 'Solicitar niveles plasmáticos de inmunoglobulinas' },
      ],
      correct: 'B',
      explanation: 'En una poliposis bilateral con obstrucción completa se parte con un ciclo breve de corticoide oral. El corticoide intranasal se asocia después; la cirugía queda para los casos refractarios.',
      say: {
        stem: 'Y una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Un paciente con rinitis alérgica y varios episodios de sinusitis, con obstrucción nasal marcada y respiración bucal. En la rinoscopía hay numerosos pólipos pálidos y brillantes que obstruyen completamente las fosas nasales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: fluticasona tópica cada doce horas, prednisona oral por siete días, TAC de cavidades paranasales, cirugía endoscópica nasal, o niveles de inmunoglobulinas. Piénsalo.',
        answer: 'Es la B. La poliposis es bilateral, inflamatoria y con obstrucción completa, así que se parte con un ciclo breve de prednisona oral, que es justo lo que asocia el tratamiento de primera línea al corticoide intranasal. La fluticasona sola no penetra si la nariz está totalmente tapada, y la cirugía queda para los casos refractarios.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.1.016 · Obstrucción nasal crónica",
      "stem": "Un hombre de 32 años consulta por obstrucción nasal derecha constante de varios años, que no fluctúa, sin estornudos, prurito ni rinorrea. En la adolescencia tuvo un golpe en la nariz. A la rinoscopía anterior, el tabique está desviado hacia la derecha y contacta el cornete inferior; en la fosa izquierda hay hipertrofia del cornete inferior. No hay pólipos.",
      "question": "¿Cuál es el tratamiento definitivo?",
      "options": [
        {
          "letter": "A",
          "text": "Oximetazolina nasal diaria"
        },
        {
          "letter": "B",
          "text": "Septoplastia electiva, con turbinoplastia del cornete hipertrófico"
        },
        {
          "letter": "C",
          "text": "Polipectomía endoscópica"
        },
        {
          "letter": "D",
          "text": "Antihistamínicos orales por 3 meses"
        },
        {
          "letter": "E",
          "text": "Amoxicilina con ácido clavulánico por 14 días"
        }
      ],
      "correct": "B",
      "explanation": "Obstrucción unilateral, fija y constante tras un trauma, con tabique desviado, es una desviación septal. Los corticoides intranasales alivian el componente mucoso, pero la corrección definitiva es la septoplastia electiva, asociando turbinoplastia del cornete compensatorio. Los descongestionantes de uso crónico producen rinitis medicamentosa.",
      "say": {
        "stem": "Hombre de treinta y dos años con años de obstrucción nasal derecha, fija y constante, sin estornudos ni rinorrea, que tuvo un golpe en la nariz en la adolescencia. El tabique está desviado a la derecha y el cornete izquierdo está hipertrófico.",
        "question": "¿Cuál es el tratamiento definitivo?",
        "options": "Las opciones: oximetazolina diaria, septoplastia con turbinoplastia, polipectomía endoscópica, antihistamínicos orales, o amoxicilina con clavulánico. Piénsalo.",
        "answer": "Es la B. Una obstrucción de un solo lado, fija, después de un golpe, es mecánica, y solo la septoplastia la corrige. La oximetazolina tienta porque destapa rápido, pero usada a diario produce rinitis medicamentosa y empeora la obstrucción."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.2.012 · Fractura nasal reciente",
      "stem": "Un hombre de 22 años recibió un puñetazo en la nariz hace 2 horas. Tuvo epistaxis que ya cedió. Al examen hay edema y dolor del dorso nasal, laterorrinia hacia la izquierda y crepitación ósea. En la rinoscopía anterior el tabique no está abombado, la mucosa es normal y no hay hematoma septal. Respira bien por ambas fosas.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de huesos propios para decidir la cirugía"
        },
        {
          "letter": "B",
          "text": "Reducción abierta urgente hoy en pabellón"
        },
        {
          "letter": "C",
          "text": "Esperar 3 meses y realizar rinoseptoplastia"
        },
        {
          "letter": "D",
          "text": "Drenaje del tabique nasal"
        },
        {
          "letter": "E",
          "text": "Frío local, analgesia y reevaluación por otorrinolaringología a los 5 a 7 días, para reducción cerrada si persiste la deformidad"
        }
      ],
      "correct": "E",
      "explanation": "En la fractura nasal lo urgente es descartar un hematoma septal, ya hecho. Si no hay hematoma, se indica frío y analgesia, y se reevalúa cuando baja el edema, a los 5 a 7 días, para reducción cerrada antes de las 2 semanas. El diagnóstico es clínico; la radiografía solo tiene valor médico-legal.",
      "say": {
        "stem": "Hombre de veintidós años que recibió un puñetazo en la nariz hace dos horas. La epistaxis cedió; tiene edema, desviación del dorso hacia la izquierda y crepitación. El tabique no está abombado y no hay hematoma septal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: radiografía de huesos propios, reducción abierta urgente, rinoseptoplastia en tres meses, drenaje del tabique o frío con analgesia y reevaluación a los cinco a siete días. Piénsalo.",
        "answer": "Es la E. Ya descartaste el hematoma septal, que era lo urgente, así que esperas que baje el edema y reevalúas la deformidad para reducirla antes de las dos semanas. La radiografía tienta, pero solo tiene valor médico legal: la indicación de reducción es clínica."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.5.004 · Drenaje de hematoma nasoseptal",
      "stem": "Adolescente de 15 años recibe un golpe nasal jugando fútbol hace 24 horas. Presenta obstrucción nasal bilateral completa y dolor. La rinoscopía anterior muestra un abombamiento violáceo, blando y fluctuante a ambos lados del tabique.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Reducción de la fractura nasal en 7 días y antiinflamatorios"
        },
        {
          "letter": "B",
          "text": "Corticoide oral"
        },
        {
          "letter": "C",
          "text": "Descongestionante nasal y control en 48 horas"
        },
        {
          "letter": "D",
          "text": "Drenaje urgente del hematoma septal, taponamiento nasal anterior bilateral y antibiótico"
        },
        {
          "letter": "E",
          "text": "Esperar reabsorción espontánea"
        }
      ],
      "correct": "D",
      "explanation": "El hematoma septal separa el mucopericondrio del cartílago, que depende de él para su nutrición. Sin drenaje urgente se produce necrosis del cartílago, absceso septal y deformidad en silla de montar. Se drena mediante incisión, se coloca taponamiento anterior para evitar la recolección y se indica antibiótico antiestafilocócico. Toda fractura nasal requiere examinar el tabique.",
      "say": {
        "stem": "Adolescente de quince años con un golpe nasal hace un día, obstrucción completa y un abombamiento violáceo y fluctuante a ambos lados del tabique.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: reducir la fractura en siete días, corticoide oral, descongestionante y control, drenaje urgente con taponamiento y antibiótico o esperar reabsorción. Piénsalo.",
        "answer": "Es la D. Es un hematoma septal y se drena con urgencia, con taponamiento y antibiótico, para que el cartílago no se necrose. La reducción de la fractura a los siete días tienta, pero el hematoma no puede esperar."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: nariz obstruida',
      cards: [
        { title: 'Trauma nasal', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Todo trauma: rinoscopía', d: 'Descarta hematoma septal',
            say: 'Cerremos con las reglas de oro. Todo traumatismo nasal exige una rinoscopía anterior para descartar un hematoma del tabique.' },
          { t: 'Hematoma septal: drenaje urgente', d: 'Evita necrosis y silla de montar',
            say: 'Si hay un abombamiento violáceo y fluctuante, se drena quirúrgicamente de inmediato y después se tapona. Si no, el cartílago se necrosa en veinticuatro a cuarenta y ocho horas.' },
        ] },
        { title: 'Pólipos', tag: 'Lateralidad', kind: 'key', items: [
          { t: 'Bilateral: corticoide; Samter sin AINE', d: 'Poliposis, asma y aspirina',
            say: 'El pólipo bilateral es inflamatorio: corticoide intranasal, con prednisona breve si la obstrucción es marcada. Si además hay asma y broncoespasmo con aspirina, es Samter, y se evitan todos los AINE.' },
          { t: 'Unilateral en adulto: biopsia', d: 'Papiloma invertido o cáncer',
            say: 'Y el pólipo unilateral en un adulto se biopsia. Si te llevas una sola idea de hoy: tras un golpe, el tabique se mira; el hematoma se drena. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo diagnóstico en patología estructural y obstructiva nasal',
    root: N('start', 'Paciente con obstrucción nasal', '¿Hay antecedente de trauma?',
      'Un paciente con la nariz obstruida. La primera pregunta es si hubo un golpe.',
      ['Sí: trauma nasal', N('q', 'Rinoscopía anterior', '¿Abombamiento fluctuante del tabique?',
        'Tras un golpe, siempre se hace la rinoscopía anterior para descartar el hematoma del tabique.',
        ['Sí: hematoma septal', N('alert', 'Drenaje quirúrgico urgente', 'Taponamiento bilateral y antibiótico',
          'Es un hematoma septal, y es una urgencia: drenaje quirúrgico inmediato, taponamiento bilateral compresivo y antibiótico. Si ya hay fiebre, es un absceso y se drena igual.')],
        ['No', N('ok', 'Fractura nasal: diagnóstico clínico', 'Radiografía solo médico-legal',
          'Sin hematoma, es una fractura nasal. El diagnóstico y la decisión de cirugía son clínicos; la radiografía es médico-legal.')],
      )],
      ['No', N('q', 'Rinoscopía o nasofibroscopía', '¿Qué se ve en la fosa nasal?',
        'Sin trauma, miras la fosa nasal para ver qué tapa el paso del aire.',
        ['Pólipos bilaterales translúcidos', N('do', 'Corticoide intranasal más prednisona breve', 'Samter: sin aspirina ni AINE',
          'Poliposis bilateral: corticoide intranasal en dosis altas, ciclo breve de prednisona y cirugía endoscópica si es refractaria. Si hay asma y broncoespasmo con aspirina, es la tríada de Samter y se evitan los AINE.')],
        ['Pólipo unilateral en adulto', N('refer', 'Biopsia y TAC', 'Papiloma invertido o neoplasia',
          'Un pólipo unilateral en un adulto se biopsia y se pide un TAC, para descartar papiloma invertido o cáncer.')],
        ['Tabique desviado', N('do', 'Corticoide intranasal; septoplastia si es invalidante', 'Con turbinoplastia si hay cornete hipertrófico',
          'Una desviación septal se trata primero con corticoides intranasales, y con septoplastia electiva, asociada a turbinoplastia, si la obstrucción es invalidante.')],
      )],
    ),
  },
};
