// Clase 10.23 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-23).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-23 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Por qué se cae, cómo se mide el riesgo y qué hacer con la cadera rota',
      say: 'Bienvenidos. En la clase anterior vimos que la fragilidad es la pérdida de reserva. Hoy vemos su consecuencia más temida: las caídas y la fractura de cadera. Es un tema que mezcla geriatría y traumatología, y en el examen se pregunta de dos formas: qué hace que un adulto mayor se caiga, y cómo reconocer y manejar la cadera fracturada. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Epidemiología y consecuencias',
      title: 'Una caída a nivel no es un accidente menor',
      nodes: [
        { id: 'cai', col: 0, row: 2, k: 'start', t: 'Caída a nivel', s: 'Más del 90 % en el adulto mayor' },
        { id: 'fx', col: 2, row: 0, k: 'risk', t: 'Lesiones agudas', s: 'Cadera, Colles, húmero, subdural' },
        { id: 'sue', col: 2, row: 2, k: 'effect', t: 'Más de 1 hora en el suelo', s: 'Rabdomiolisis, hipotermia, escaras' },
        { id: 'mie', col: 2, row: 4, k: 'effect', t: 'Síndrome post-caída', s: 'Miedo a volver a caer' },
        { id: 'dep', col: 4, row: 3, k: 'alert', t: 'Dependencia', s: 'Sarcopenia, aislamiento' },
      ],
      edges: [
        { from: 'cai', to: 'fx' }, { from: 'cai', to: 'sue' }, { from: 'cai', to: 'mie' },
        { from: 'mie', to: 'dep', label: 'deja de caminar' },
      ],
      steps: [
        { show: ['cai'], note: '30 % de los mayores de 65 cae al año; 50 % de los mayores de 80',
          say: 'Partamos por las cifras. Cerca de un tercio de los mayores de sesenta y cinco años que viven en la comunidad se cae al menos una vez al año, y en los mayores de ochenta o institucionalizados llega a la mitad. Y más del noventa por ciento son caídas a nivel, desde su propia altura, al caminar o al cambiar de posición.' },
        { show: ['fx'], note: 'Hueso osteoporótico: basta la propia altura',
          say: 'Sobre un hueso osteoporótico, esa caída pequeña basta para fracturar. Las fracturas típicas son la de cadera, la de muñeca, o fractura de Colles, la del húmero proximal y la de pelvis. Y no olvides el hematoma subdural, que conecta con el delirium de hace dos clases.' },
        { show: ['sue'], note: 'La permanencia en el suelo también daña',
          say: 'La segunda consecuencia es menos obvia: quedar en el suelo más de una hora sin poder levantarse. Eso produce rabdomiolisis, deshidratación, hipotermia, úlceras por presión e infecciones respiratorias.' },
        { show: ['mie', 'dep'], note: 'El miedo cierra el círculo de la fragilidad',
          say: 'Y la tercera es el síndrome post-caída: un miedo intenso a volver a caer. El paciente deja de caminar por su cuenta, pierde músculo, se vuelve dependiente y se aísla. Fíjate que esto cierra el círculo con la clase anterior: menos movimiento, más sarcopenia, más caídas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: '¿Por qué se cae? Tres grupos de factores',
      cards: [
        { title: 'Intrínsecos', tag: 'Del paciente', kind: 'key', items: [
          { t: 'Sensoriales y musculares', d: 'Cataratas, neuropatía, sarcopenia, artrosis',
            say: 'Las caídas son multifactoriales. Los factores intrínsecos son del paciente. Hay sensoriales, como las cataratas, la hipoacusia o la pérdida de la propiocepción por neuropatía; y musculoesqueléticos, como la sarcopenia, la artrosis o las deformidades de los pies.' },
          { t: 'Neurológicos', d: 'Secuela de ACV, Parkinson, hidrocefalia, demencia',
            say: 'También neurológicos, como la secuela de un ACV, la enfermedad de Parkinson, la hidrocefalia normotensiva o la demencia.' },
          { t: 'Hipotensión ortostática', d: 'Baja PAS ≥ 20 o PAD ≥ 10 en 3 min de pie',
            say: 'Y cardiovasculares: arritmias, estenosis aórtica, y la hipotensión ortostática, que se define como una caída de veinte milímetros de mercurio o más de la sistólica, o de diez o más de la diastólica, dentro de los tres minutos de ponerse de pie.' },
        ] },
        { title: 'Fármacos', tag: 'El factor modificable más potente', kind: 'pharma', items: [
          { t: 'Psicofármacos', d: 'Benzodiacepinas, antidepresivos, antipsicóticos, hipnóticos Z',
            say: 'Los fármacos son el factor modificable más potente: los que sedan, dan ataxia, confunden o bajan la presión duplican el riesgo. Primero los psicofármacos: benzodiacepinas, antidepresivos, antipsicóticos e hipnóticos Z.' },
          { t: 'Antihipertensivos e hipoglicemiantes', d: 'Atenolol, diuréticos, sulfonilureas',
            say: 'Después, los antihipertensivos, como el atenolol, que da bradicardia, o los diuréticos, que depletan volumen; y las sulfonilureas, por la hipoglicemia. Ojo con el atenolol, que se pregunta.' },
        ] },
        { title: 'Extrínsecos', tag: 'El entorno', kind: 'alert', items: [
          { t: 'La casa', d: 'Alfombras sueltas, cables, poca luz, baño sin barras',
            say: 'Y los factores extrínsecos, del entorno, que explican entre un tercio y la mitad de las caídas: alfombras sueltas, cables en el suelo, poca luz, pisos resbaladizos, baños sin barras de apoyo y escalones sin pasamanos.' },
          { t: 'El calzado', d: 'Chancletas, pantuflas sin talón',
            say: 'Y el calzado: chancletas, pantuflas sin talón o suelas resbaladizas. Aquí interviene la terapia ocupacional, adaptando el hogar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación',
      title: 'Medir la marcha y el equilibrio',
      cards: [
        { title: 'Timed Up and Go', tag: 'Equilibrio dinámico', kind: 'criteria', items: [
          { t: 'Levantarse, caminar 3 m, volver', d: 'Girar 180° y sentarse',
            say: 'Todo adulto mayor que se cae, o que tiene factores de riesgo, se evalúa con dos pruebas del EMPAM. La primera es el Timed Up and Go: se levanta de una silla, camina tres metros, gira, vuelve y se sienta. Se mide el tiempo.' },
          { t: '< 10 s normal · > 12–14 s riesgo', d: '> 20 s: fragilidad marcada',
            say: 'Menos de diez segundos es normal, y de diez a doce es el límite. Más de doce a catorce segundos es alto riesgo de caídas, y obliga a kinesiología y revisión del hogar. Y más de veinte indica fragilidad física marcada.' },
        ] },
        { title: 'Estación unipodal', tag: 'Equilibrio estático', kind: 'criteria', items: [
          { t: 'Un pie, ojos abiertos', d: 'Brazos cruzados sobre el pecho',
            say: 'La segunda es la estación unipodal: mantenerse en un solo pie, con los ojos abiertos y los brazos cruzados.' },
          { t: '< 5 s: anormal', d: 'Triplica el riesgo de fractura por caída',
            say: 'Si no alcanza cinco segundos, tiene un déficit grave del equilibrio estático, y el riesgo de fractura por caída se triplica.' },
        ] },
        { title: 'Si está alterado', tag: 'Intervención', kind: 'key', items: [
          { t: 'Ejercicio de equilibrio y marcha', d: 'Vivifrail, kinesiología',
            say: 'Y la conducta, cuando están alterados, es la misma lógica de la fragilidad: ejercicio multicomponente de equilibrio y marcha, con kinesiología.' },
          { t: 'Revisar fármacos y el hogar', d: 'Evaluar bastón o ayuda técnica',
            say: 'Junto con retirar los fármacos de riesgo, adaptar la casa y evaluar si necesita un bastón u otra ayuda técnica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fractura de cadera',
      title: 'Reconocerla y decidir la cirugía',
      nodes: [
        { id: 'cai', col: 0, row: 2, k: 'start', t: 'Caída a nivel', s: 'Adulto mayor' },
        { id: 'sem', col: 1, row: 2, k: 'effect', t: 'Acortada, rotación externa', s: 'Leve abducción + no puede pararse' },
        { id: 'rx', col: 2, row: 2, k: 'q', t: 'Radiografía de pelvis y cadera', s: '¿Intra o extracapsular?' },
        { id: 'int', col: 3, row: 0, k: 'risk', t: 'Intracapsular desplazada', s: 'Garden III–IV: vasos rotos' },
        { id: 'art', col: 4, row: 0, k: 'good', t: 'Artroplastia', s: 'Parcial si frágil; total si activo' },
        { id: 'ext', col: 3, row: 4, k: 'mech', t: 'Extracapsular', s: 'Pertrocantérica: bien irrigada' },
        { id: 'ost', col: 4, row: 4, k: 'good', t: 'Osteosíntesis', s: 'Clavo cefalomedular o DHS' },
      ],
      edges: [
        { from: 'cai', to: 'sem' }, { from: 'sem', to: 'rx' },
        { from: 'rx', to: 'int', label: 'cuello femoral' }, { from: 'int', to: 'art' },
        { from: 'rx', to: 'ext', label: 'trocantérica' }, { from: 'ext', to: 'ost' },
      ],
      steps: [
        { show: ['cai', 'sem'], note: 'La semiología más preguntada del tema',
          say: 'Ahora la fractura de cadera, la complicación más grave de las caídas. Su semiología es de las más repetidas del examen. Después de una caída a nivel, el paciente no puede ponerse de pie, tiene dolor en la ingle que baja al muslo, y la pierna está acortada, en rotación externa y en leve abducción. El borde lateral del pie queda apoyado en la camilla.' },
        { show: ['rx'], note: 'La radiografía define dónde está el trazo',
          say: '¿Por qué esa posición? Los glúteos y el iliopsoas traccionan hacia arriba y acortan, y la gravedad y los rotadores externos rotan el pie hacia afuera. Con la sospecha, se pide una radiografía de pelvis y cadera, y la pregunta clave es si la fractura está dentro o fuera de la cápsula.' },
        { show: ['int'], note: 'La cápsula lleva los vasos de la cabeza femoral',
          say: 'Si es intracapsular, del cuello femoral, hay un problema vascular. Los vasos que nutren la cabeza femoral suben por dentro de la cápsula, desde la arteria circunfleja femoral medial. Si la fractura se desplaza, en los grados tres y cuatro de Garden, esos vasos se rompen, y el riesgo de necrosis avascular y de pseudoartrosis es muy alto.' },
        { show: ['art'], note: 'Osteosintetizar una cabeza sin irrigación fracasa',
          say: 'Por eso, en el adulto mayor con fractura intracapsular desplazada, fijar el hueso fracasa, y se reemplaza: hemiartroplastia en el paciente frágil de baja demanda, y prótesis total en el paciente activo y sin deterioro cognitivo.' },
        { show: ['ext', 'ost'], note: 'Hueso esponjoso muy vascularizado: consolida bien',
          say: 'En cambio, si es extracapsular, pertrocantérica o subtrocantérica, el hueso está muy bien irrigado por ramas musculares. El riesgo de necrosis es prácticamente nulo y consolida bien. Aquí se fija: osteosíntesis con clavo cefalomedular o con tornillo placa deslizante.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Garantía GES',
      title: 'Fractura de cadera en mayores de 65: el protocolo',
      cards: [
        { title: 'Cirugía precoz', tag: 'Garantía GES', kind: 'alert', items: [
          { t: 'Operar antes de 48 horas', d: 'Desde el ingreso hospitalario',
            say: 'La fractura de cadera en personas de sesenta y cinco años y más tiene garantía GES, y su pilar es operar dentro de las primeras cuarenta y ocho horas desde el ingreso. La cirugía precoz reduce la neumonía, el delirium, la trombosis y las escaras, y baja a la mitad la mortalidad perioperatoria.' },
          { t: 'Sin cirugía: 25–30 % muere al año', d: 'La demora mata',
            say: 'Esto importa porque, sin un manejo adecuado, la mortalidad al año llega a un veinticinco a treinta por ciento. No es una fractura más.' },
        ] },
        { title: 'Manejo perioperatorio', tag: 'Ortogeriatría', kind: 'pharma', items: [
          { t: 'Analgesia multimodal', d: 'Bloqueo de fascia ilíaca + paracetamol',
            say: 'La analgesia es multimodal: un bloqueo de la fascia ilíaca o del nervio femoral en la urgencia, más paracetamol reglado. Así se usan menos opioides, y se previene el delirium postoperatorio.' },
          { t: 'Enoxaparina 40 mg SC al día', d: 'Por 28 a 35 días',
            say: 'La tromboprofilaxis es obligatoria: enoxaparina cuarenta miligramos subcutánea al día desde el ingreso, suspendida doce horas antes de la anestesia raquídea y reiniciada doce horas después. Y se extiende por veintiocho a treinta y cinco días. Ese plazo se pregunta.' },
          { t: 'De pie en 24 a 48 horas', d: 'Kinesiología precoz',
            say: 'Y se levanta de la cama con carga dentro de las veinticuatro a cuarenta y ocho horas después de la cirugía.' },
        ] },
        { title: 'Prevención secundaria', tag: 'Tratar la osteoporosis', kind: 'normal', items: [
          { t: 'Calcio + vitamina D', d: '1000–1200 mg + 800–2000 UI/día',
            say: 'Al alta, hay que tratar la osteoporosis que permitió la fractura: densitometría, calcio de mil a mil doscientos miligramos y vitamina D de ochocientas a dos mil unidades al día.' },
          { t: 'Antirresortivo parenteral', d: 'Zoledrónico 5 mg EV anual o denosumab 60 mg SC c/6 meses',
            say: 'Y un antirresortivo parenteral: ácido zoledrónico cinco miligramos endovenoso una vez al año, o denosumab sesenta miligramos subcutáneo cada seis meses.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol, desde el adulto mayor que se cae hasta el pabellón.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Caída a nivel, pierna acortada y en rotación externa', 'Fractura de cadera', 'Esguince o fractura de pelvis'],
          say: 'Repasemos las trampas. Caída a nivel, pierna acortada y en rotación externa, sin poder pararse: fractura de cadera. No es un esguince.' },
        { cells: ['Intracapsular desplazada en anciano', 'Artroplastia', 'Osteosíntesis'],
          say: 'Fractura intracapsular desplazada en un anciano: artroplastia. Fijarla con tornillos es el error, porque la cabeza ya perdió su irrigación.' },
        { cells: ['Pertrocantérica', 'Osteosíntesis', 'Prótesis'],
          say: 'Fractura pertrocantérica: osteosíntesis. Aquí el hueso está bien irrigado y consolida.' },
        { cells: ['Plazo quirúrgico GES', 'Antes de 48 horas', 'Esperar estabilización prolongada'],
          say: 'El plazo es operar antes de cuarenta y ocho horas. Postergar la cirugía aumenta las complicaciones.' },
        { cells: ['Tromboprofilaxis tras cirugía', 'HBPM por 28 a 35 días', 'Suspender al alta'],
          say: 'La heparina de bajo peso molecular se mantiene veintiocho a treinta y cinco días, no se suspende al alta.' },
        { cells: ['Fármaco antihipertensivo y caídas', 'Atenolol', 'Estatina o aspirina'],
          say: 'Y si preguntan qué fármaco aumenta el riesgo de caídas, piensa en el atenolol, por la bradicardia y la hipotensión, además de los psicofármacos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 82 años, hipertensa y con fibrilación auricular, en tratamiento con atenolol y apixabán. Tropieza con una alfombra y cae desde su propia altura sobre la región glútea derecha. No puede ponerse de pie. Extremidad inferior derecha acortada y en rotación externa marcada, dolor inguinal intenso, sin déficit neurovascular. Radiografía: fractura subcapital de cuello femoral desplazada (Garden IV).',
      question: '¿Cuál es el tratamiento quirúrgico de elección?',
      options: [
        { letter: 'A', text: 'Osteosíntesis con tornillos canulados' },
        { letter: 'B', text: 'Clavo cefalomedular' },
        { letter: 'C', text: 'Artroplastia de cadera (hemiartroplastia o prótesis total)' },
        { letter: 'D', text: 'Tracción esquelética y reposo por 6 semanas' },
        { letter: 'E', text: 'Tornillo placa deslizante (DHS)' },
      ],
      correct: 'C',
      explanation: 'Fractura intracapsular desplazada (Garden IV): los vasos retinaculares están rotos, con alto riesgo de necrosis avascular y fracaso de la osteosíntesis. Se indica artroplastia, dentro de 48 horas (GES), con analgesia multimodal, tromboprofilaxis con HBPM por 28–35 días y rehabilitación precoz. El clavo y el DHS son para fracturas extracapsulares.',
      say: {
        stem: 'Vamos al caso. Mujer de ochenta y dos años, hipertensa, con fibrilación auricular, que toma atenolol y apixabán. Tropieza con una alfombra y cae desde su propia altura. No puede pararse, la pierna derecha está acortada y en rotación externa, y la radiografía muestra una fractura subcapital del cuello femoral desplazada, Garden cuatro.',
        question: '¿Cuál es el tratamiento quirúrgico de elección?',
        options: 'Las opciones son: tornillos canulados, clavo cefalomedular, artroplastia de cadera, tracción y reposo, o tornillo placa deslizante. Piénsalo.',
        answer: 'La respuesta es la C, artroplastia. Es intracapsular y desplazada, así que los vasos de la cabeza femoral están rotos, y fijarla fracasa por necrosis avascular. El clavo y el tornillo placa deslizante son tentadores, pero son para las extracapsulares. Y fíjate en los factores de riesgo del caso: la alfombra y el atenolol.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 50',
      stem: 'Una paciente de 80 años sufrió una caída a nivel, luego de la cual no pudo levantarse, presentando mucho dolor. Al examen físico presenta acortamiento de la extremidad inferior derecha, con ligera abducción y rotación externa, sin equimosis.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Esguince de cadera' },
        { letter: 'B', text: 'Fractura de cadera' },
        { letter: 'C', text: 'Luxación posterior de cadera' },
        { letter: 'D', text: 'Fractura de pelvis' },
        { letter: 'E', text: 'Fractura vertebral con lesión del plexo lumbar' },
      ],
      correct: 'B',
      explanation: 'Caída a nivel en una adulta mayor con impotencia funcional y extremidad acortada, en rotación externa y leve abducción: fractura de cadera clásica.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de diciembre de dos mil dieciocho. Mujer de ochenta años que se cae a nivel y no puede levantarse, con mucho dolor. La pierna derecha está acortada, con ligera abducción y rotación externa, sin equimosis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: esguince de cadera, fractura de cadera, luxación posterior de cadera, fractura de pelvis, o fractura vertebral. Piénsalo.',
        answer: 'Es la B, fractura de cadera. Es la semiología exacta que vimos: caída a nivel, no se puede parar, pierna acortada, en rotación externa y abducción. El distractor es la luxación posterior, que deja la pierna en la posición contraria: rotación interna y aducción.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 5',
      stem: 'Un paciente de 68 años presenta una fractura de cadera, de la que es operado. Al segundo día, presenta un síncope, que se recupera al a los pocos segundos. Su presión arterial es de 100/60 mmHg y su frecuencia cardíaca es 110. Además satura 91% a FiO2 ambiental. Su examen físico muestra murmullo pulmonar presente, sin ruidos agregados y un ritmo regular en 2 tiempos, sin soplos.',
      question: '¿Cuál es el examen más adecuado para proseguir con el estudio?',
      options: [
        { letter: 'A', text: 'Ecocardiograma' },
        { letter: 'B', text: 'Radiografía de tórax' },
        { letter: 'C', text: 'AngioTAC de tórax' },
        { letter: 'D', text: 'TILT test' },
        { letter: 'E', text: 'Monitorización electrocardiográfica de 24 horas' },
      ],
      correct: 'C',
      explanation: 'Postoperatorio de fractura de cadera con síncope, taquicardia e hipoxemia y examen pulmonar normal: sospecha de TEP. Con PA sistólica ≥ 90 mmHg puede ir al angioTAC de tórax. Por este riesgo la tromboprofilaxis con HBPM es obligatoria y se extiende 28–35 días.',
      say: {
        stem: 'Segunda pregunta, del EUNACOM de diciembre de dos mil diecisiete. Hombre de sesenta y ocho años operado de una fractura de cadera. Al segundo día hace un síncope. Tiene presión de cien sesenta, frecuencia cardíaca de ciento diez, satura noventa y uno por ciento, y el examen pulmonar es normal.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las opciones son: ecocardiograma, radiografía de tórax, angioTAC de tórax, tilt test, o un Holter de veinticuatro horas. Piénsalo.',
        answer: 'Es la C, angioTAC de tórax. Un postoperado de cadera con síncope, taquicardia, hipoxemia y pulmón limpio tiene un tromboembolismo pulmonar hasta demostrar lo contrario. Como la presión se mantiene, puede ir al angioTAC. Esta pregunta te recuerda por qué la tromboprofilaxis es obligatoria. El tilt test y el Holter son la trampa: piensan en un síncope cardíaco, no en el contexto.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Caídas', tag: 'Multifactoriales', kind: 'key', items: [
          { t: 'Fármacos: factor modificable clave', d: 'Psicofármacos, atenolol, diuréticos',
            say: 'Cerremos. Las caídas son multifactoriales, y el factor modificable más potente son los fármacos.' },
          { t: 'TUG > 12–14 s · unipodal < 5 s', d: 'Alto riesgo: ejercicio y hogar',
            say: 'Un Timed Up and Go de más de doce a catorce segundos, o una estación unipodal de menos de cinco, marcan alto riesgo.' },
        ] },
        { title: 'Fractura de cadera', tag: 'Semiología y cirugía', kind: 'alert', items: [
          { t: 'Acortada + rotación externa', d: 'Tras caída a nivel',
            say: 'La fractura de cadera es la pierna acortada y en rotación externa después de una caída a nivel.' },
          { t: 'Intracapsular: prótesis', d: 'Extracapsular: osteosíntesis',
            say: 'Si es intracapsular desplazada, prótesis; si es extracapsular, osteosíntesis.' },
        ] },
        { title: 'GES', tag: '65 años y más', kind: 'pharma', items: [
          { t: 'Cirugía antes de 48 h', d: 'HBPM 28–35 días, de pie precoz',
            say: 'Si te llevas una sola idea de hoy: la fractura de cadera se opera antes de cuarenta y ocho horas, con tromboprofilaxis por un mes. En la próxima clase cerramos geriatría con polifarmacia e incontinencia urinaria. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adulto mayor que se cae',
    root: N('start', 'Adulto mayor con caída', 'Casi siempre a nivel',
      'Adulto mayor que se cayó. Lo primero es saber si quedó con una fractura de cadera.',
      ['', N('q', '¿Puede pararse? ¿Pierna acortada y rotada?', 'Semiología de fractura de cadera',
        '¿Puede ponerse de pie, o tiene la pierna acortada y en rotación externa?',
        ['SÍ', N('do', 'Radiografía de pelvis y cadera', 'Analgesia multimodal',
          'Si no puede pararse y la pierna está acortada y rotada, analgesia con bloqueo regional y radiografía de pelvis y cadera.',
          ['', N('q', '¿Dónde está el trazo?', 'Intra o extracapsular',
            '¿La fractura está dentro o fuera de la cápsula?',
            ['Intracapsular desplazada', N('alert', 'Artroplastia antes de 48 h', 'Parcial si frágil, total si activo',
              'Intracapsular desplazada: artroplastia, parcial si es frágil y total si es activo, antes de cuarenta y ocho horas.')],
            ['Extracapsular', N('alert', 'Osteosíntesis antes de 48 h', 'Clavo cefalomedular o DHS',
              'Extracapsular: osteosíntesis con clavo o tornillo placa, también antes de cuarenta y ocho horas. En ambos casos, enoxaparina por veintiocho a treinta y cinco días y tratar la osteoporosis.')])])],
        ['NO', N('q', '¿TUG o unipodal alterados?', 'Evaluar riesgo de nuevas caídas',
          'Si no hay fractura, evalúa el riesgo de volver a caer con el Timed Up and Go y la estación unipodal.',
          ['SÍ', N('do', 'Intervención multifactorial', 'Ejercicio, fármacos, hogar',
            'Si están alterados, intervención multifactorial: ejercicio de equilibrio y marcha, retirar fármacos de riesgo y adaptar el hogar.')],
          ['NO', N('ok', 'Prevención y control', 'Mantener actividad física',
            'Si son normales, prevención con actividad física y control en el EMPAM.')])])]),
  },
};
