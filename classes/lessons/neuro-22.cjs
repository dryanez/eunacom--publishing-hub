// Clase 10.22 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-22).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-22 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Medir la reserva antes de que se agote: Fried, fuerza muscular y las cuatro esferas',
      say: 'Bienvenidos. En la clase anterior vimos que el delirium aparece sobre un cerebro vulnerable. Hoy vamos a medir esa vulnerabilidad en todo el cuerpo: fragilidad, sarcopenia y valoración geriátrica integral. Son temas de puntajes y cortes, pero con una idea de fondo muy simple: la fragilidad es reversible, y el tratamiento más potente es el ejercicio. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Concepto',
      title: '¿Qué es ser frágil?',
      nodes: [
        { id: 'env', col: 0, row: 1, k: 'cause', t: 'Declive de varios sistemas', s: 'Inflammaging, estrés oxidativo' },
        { id: 'res', col: 1, row: 1, k: 'mech', t: 'Se agota la reserva', s: 'Pierde capacidad de adaptarse' },
        { id: 'est', col: 2, row: 0, k: 'cause', t: 'Estresor menor', s: 'ITU, cambio de fármaco, 48 h en cama' },
        { id: 'cai', col: 2, row: 2, k: 'risk', t: 'Caída funcional desproporcionada', s: 'Caídas, discapacidad, muerte' },
        { id: 'rev', col: 3, row: 1, k: 'good', t: 'Estado dinámico', s: 'Prevenible y reversible' },
      ],
      edges: [
        { from: 'env', to: 'res' }, { from: 'res', to: 'cai' }, { from: 'est', to: 'cai', label: 'gatilla' },
        { from: 'res', to: 'rev', label: 'si se interviene' },
      ],
      steps: [
        { show: ['env'], note: 'Varios sistemas pierden reserva a la vez',
          say: 'La fragilidad es un síndrome biológico. Varios sistemas, el inmune, el neuroendocrino, el muscular y el cardiovascular, van perdiendo capacidad a la vez, por una inflamación crónica de bajo grado que se llama inflammaging, por estrés oxidativo y por falla mitocondrial.' },
        { show: ['res'], note: 'Sin reserva, no hay margen para adaptarse',
          say: 'El resultado es que se agota la reserva. El paciente funciona bien en reposo, pero no tiene margen para adaptarse cuando algo lo desafía.' },
        { show: ['est', 'cai'], note: 'Un estresor pequeño, una caída enorme',
          say: 'Entonces basta un estresor menor, una infección urinaria simple, un cambio de fármaco o dos días en cama, para que se venga abajo de forma desproporcionada: caídas, discapacidad, hospitalización y muerte. Es la misma lógica de vulnerabilidad que vimos en el delirium.' },
        { show: ['rev'], note: 'No es la edad ni la discapacidad',
          say: 'Y lo más importante: la fragilidad no es lo mismo que tener muchos años, ni que ser discapacitado. Es un estado dinámico, prevenible y reversible. Por eso vale la pena buscarla.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Fenotipo de Fried: cinco criterios',
      cards: [
        { title: 'Los cinco criterios', tag: 'Linda Fried', kind: 'criteria', items: [
          { t: 'Baja de peso involuntaria', d: '≥ 4,5 kg o ≥ 5 % en un año',
            say: 'El modelo más validado es el fenotipo de Linda Fried, con cinco criterios objetivos. El primero es la baja de peso involuntaria: cuatro kilos y medio, o el cinco por ciento del peso, en el último año.' },
          { t: 'Agotamiento', d: 'Todo le cuesta un esfuerzo inmenso',
            say: 'El segundo es el agotamiento autorreportado: la sensación de que todo lo que hace le exige un esfuerzo inmenso.' },
          { t: 'Debilidad: prensión baja', d: '< 27 kg hombres, < 16 kg mujeres',
            say: 'El tercero es la debilidad, medida con un dinamómetro de mano. Los cortes habituales son menos de veintisiete kilos en hombres y menos de dieciséis en mujeres.' },
          { t: 'Marcha lenta', d: '< 0,8 m/s: más de 5 s en 4 metros',
            say: 'El cuarto es la marcha lenta: menos de cero coma ocho metros por segundo, es decir, más de cinco a seis segundos para recorrer cuatro metros a paso habitual.' },
          { t: 'Baja actividad física', d: 'Poco gasto calórico semanal',
            say: 'Y el quinto es la baja actividad física, estimada por el gasto calórico semanal.' },
        ] },
        { title: 'Clasificación', tag: 'Se pregunta', kind: 'key', items: [
          { t: '0 criterios: robusto', d: 'Sin fragilidad',
            say: 'La clasificación es fácil. Cero criterios, robusto.' },
          { t: '1 a 2: prefrágil', d: 'La mejor fase para prevenir',
            say: 'Uno o dos criterios, prefrágil. Fíjate que esta es la fase donde la prevención rinde más.' },
          { t: '3 o más: frágil', d: 'Síndrome de fragilidad',
            say: 'Y tres o más criterios, síndrome de fragilidad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Sarcopenia',
      title: 'EWGSOP2: la fuerza manda, no la masa',
      nodes: [
        { id: 'sar', col: 0, row: 1, k: 'start', t: 'SARC-F ≥ 4', s: 'Sospecha clínica' },
        { id: 'fue', col: 1, row: 1, k: 'q', t: '¿Fuerza baja?', s: 'Dinamometría o silla > 15 s' },
        { id: 'pro', col: 2, row: 0, k: 'good', t: 'Sarcopenia probable', s: 'Basta para tratar' },
        { id: 'mas', col: 2, row: 2, k: 'mech', t: 'Masa baja', s: 'DEXA o bioimpedancia' },
        { id: 'con', col: 3, row: 2, k: 'effect', t: 'Sarcopenia confirmada', s: 'Fuerza + masa' },
        { id: 'sev', col: 4, row: 2, k: 'alert', t: 'Sarcopenia severa', s: '+ marcha < 0,8 m/s, TUG ≥ 20 s' },
      ],
      edges: [
        { from: 'sar', to: 'fue' }, { from: 'fue', to: 'pro', label: 'sí' },
        { from: 'pro', to: 'mas' }, { from: 'mas', to: 'con' }, { from: 'con', to: 'sev', label: 'rendimiento bajo' },
      ],
      steps: [
        { show: ['sar'], note: 'Cuestionario de cinco preguntas',
          say: 'Ahora la sarcopenia: la pérdida de masa, fuerza y función del músculo. Se sigue el consenso europeo, el EWGSOP dos. Parte con una sospecha: el cuestionario SARC-F, que pregunta por fuerza, ayuda para caminar, levantarse de una silla, subir escaleras y caídas. Cuatro puntos o más obliga a medir.' },
        { show: ['fue'], note: 'Menos de 27 kg en hombres y 16 kg en mujeres',
          say: 'Y aquí está el cambio conceptual que se pregunta: el parámetro principal es la fuerza, no la masa. Se mide con el dinamómetro, o con la prueba de la silla: si demora más de quince segundos en levantarse cinco veces sin usar los brazos, la fuerza es baja.' },
        { show: ['pro'], note: 'No hay que esperar la imagen para tratar',
          say: 'La fuerza baja, por sí sola, ya define una sarcopenia probable. Y eso basta para empezar el tratamiento de inmediato. No necesitas esperar ningún examen de imagen.' },
        { show: ['mas', 'con'], note: 'DEXA de cuerpo entero o bioimpedancia',
          say: 'Para confirmarla, se demuestra masa muscular baja con una densitometría de cuerpo entero, que mide la masa muscular apendicular, o con bioimpedanciometría. Fuerza baja más masa baja es sarcopenia confirmada.' },
        { show: ['sev'], note: 'Velocidad de marcha, TUG o SPPB',
          say: 'Y si además el rendimiento físico es bajo, con una marcha de menos de cero coma ocho metros por segundo, un Timed Up and Go de veinte segundos o más, o una batería SPPB de ocho puntos o menos, es sarcopenia severa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Valoración Geriátrica Integral',
      title: 'VGI: esfera funcional y mental',
      cards: [
        { title: 'Funcional', tag: 'Lo que el paciente hace', kind: 'criteria', items: [
          { t: 'Básicas: Barthel o Katz', d: 'Comer, bañarse, vestirse, continencia',
            say: 'La valoración geriátrica integral es la herramienta central de la geriatría: un proceso interdisciplinario que evalúa cuatro esferas para armar un plan. La primera es la funcional. Las actividades básicas, como comer, bañarse, vestirse, la continencia o trasladarse, se miden con el índice de Barthel, de cero a cien, o con el de Katz.' },
          { t: 'Barthel: 100 independiente', d: '< 20 dependencia total',
            say: 'En el Barthel, cien es independiente, de sesenta a noventa y cinco es dependencia leve a moderada, de veinte a cincuenta y cinco es grave, y menos de veinte es dependencia total.' },
          { t: 'Instrumentales: Lawton y Brody', d: 'Teléfono, dinero, remedios, transporte',
            say: 'Las actividades instrumentales, como usar el teléfono, manejar el dinero, los remedios o el transporte, se miden con la escala de Lawton y Brody, de cero a ocho. Ojo con este dato: es la primera esfera que falla cuando empieza un deterioro cognitivo.' },
        ] },
        { title: 'Mental', tag: 'Cognición y ánimo', kind: 'key', items: [
          { t: 'Pfeiffer: ≥ 3 errores', d: 'Deterioro que requiere estudio',
            say: 'La segunda esfera es la mental. Para el cribado cognitivo está el cuestionario de Pfeiffer, de diez preguntas: tres errores o más indican un deterioro que hay que estudiar. También se usan el Mini-Mental y el MoCA.' },
          { t: 'Yesavage GDS-15: ≥ 5', d: 'Sugiere depresión',
            say: 'Y el ánimo se evalúa con la escala de depresión geriátrica de Yesavage, de quince preguntas: cinco puntos o más sugiere depresión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Valoración Geriátrica Integral',
      title: 'VGI: esfera clínica, social y el EMPAM',
      cards: [
        { title: 'Clínica y nutricional', tag: 'MNA', kind: 'normal', items: [
          { t: 'Comorbilidad y polifarmacia', d: 'Registro completo',
            say: 'La tercera esfera es la clínica y nutricional: registrar comorbilidades y fármacos, y hacer un cribado nutricional.' },
          { t: 'MNA: < 17 desnutrición', d: '17 a 23,5: riesgo',
            say: 'Para eso está el Mini Nutritional Assessment: menos de diecisiete puntos es desnutrición establecida, y de diecisiete a veintitrés y medio, riesgo de desnutrición.' },
        ] },
        { title: 'Social', tag: 'Gijón', kind: 'normal', items: [
          { t: 'Red de apoyo y cuidador', d: 'Escala sociofamiliar de Gijón',
            say: 'La cuarta es la social: el apoyo familiar, quién es el cuidador principal, y los recursos. Se mide con la escala sociofamiliar de Gijón.' },
        ] },
        { title: 'EMPAM en APS', tag: '65 años y más', kind: 'alert', items: [
          { t: 'EFAM-Chile anual', d: 'Examen preventivo del adulto mayor',
            say: 'En Chile, en atención primaria, esto se aterriza en el examen de medicina preventiva del adulto mayor, el EMPAM, que aplica cada año el instrumento EFAM-Chile a las personas de sesenta y cinco años o más.' },
          { t: 'Tres categorías', d: 'Sin riesgo · con riesgo · riesgo de dependencia',
            say: 'Clasifica en tres grupos. Autovalente sin riesgo. Autovalente con riesgo, que se deriva a talleres de prevención y actividad física. Y en riesgo de dependencia, que se deriva al médico para una valoración geriátrica completa.' },
        ] },
      ],
    },
    {
      type: 'table',
      kicker: 'Cómo aplicar las escalas',
      title: 'Valoración funcional y afectiva en la consulta',
      head: ['Escala', 'Qué mide', 'Cómo se usa'],
      rows: [
        { cells: ['Barthel', '10 actividades básicas: 0 a 100 puntos', 'Una caída respecto del control obliga a buscar causa aguda'],
          say: 'La valoración funcional la haces tú. La regla: preguntas lo que el paciente efectivamente hace, no lo que podría hacer, idealmente con el cuidador, y registras el puntaje y la fecha para comparar. El índice de Barthel mide diez actividades básicas, como comer, bañarse, vestirse, el control de esfínteres, el traslado y caminar, de cero a cien puntos. Si cae respecto del control anterior, aunque el puntaje siga alto, busca una causa aguda: infección, fármaco, depresión o fractura.' },
        { cells: ['Katz', '6 funciones básicas: baño, vestido, retrete, traslado, continencia, alimentación', 'De A, independiente en todas, a G, dependiente en todas'],
          say: 'El índice de Katz evalúa seis funciones básicas como independiente o dependiente, y las clasifica de A, independiente en todas, a G, dependiente en todas.' },
        { cells: ['Lawton y Brody', '8 actividades instrumentales: teléfono, compras, comida, casa, ropa, transporte, medicación, dinero', 'Se pierden antes: primer signo de demencia incipiente'],
          say: 'La escala de Lawton y Brody mide ocho actividades instrumentales: teléfono, compras, cocinar, cuidar la casa, lavar la ropa, transporte, manejar la medicación y el dinero. Las instrumentales se pierden antes que las básicas, y por eso son el primer indicador de deterioro.' },
        { cells: ['Yesavage GDS-15', 'Depresión geriátrica: preguntas sí o no del último mes', '5 o más sugiere depresión; preguntar siempre por suicidio'],
          say: 'Para la esfera afectiva, la escala de Yesavage de quince preguntas, sobre el último mes. Cinco o más sugiere depresión, y exige una evaluación clínica. En el anciano se presenta con quejas somáticas, apatía, irritabilidad, insomnio, baja de peso o deterioro cognitivo, la pseudodemencia. Los varones mayores tienen las tasas de suicidio más altas: siempre se pregunta por ideación suicida.' },
        { cells: ['Cuándo derivar', 'Suicidio, psicosis, depresión grave o resistente, duda con demencia o delirium', 'Leve a moderada en APS: psicoterapia + sertralina o escitalopram'],
          say: 'Se deriva ante ideación o intento suicida, de forma urgente, depresión con síntomas psicóticos, depresión grave o resistente a dos tratamientos, duda con demencia o delirium, y comorbilidad compleja. La leve a moderada se maneja en atención primaria con psicoterapia y un inhibidor de la recaptación de serotonina, sertralina o escitalopram, vigilando la natremia. Se evitan los tricíclicos y las benzodiacepinas.' },
      ],
    },


    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cómo se revierte la fragilidad',
      cards: [
        { title: 'Ejercicio multicomponente', tag: 'Pilar principal', kind: 'key', items: [
          { t: 'Fuerza contra resistencia', d: 'Cuádriceps, glúteos, prensión',
            say: 'Vamos al tratamiento. La intervención con mayor impacto es el ejercicio físico multicomponente, como el programa Vivifrail. Su base es el ejercicio de fuerza contra resistencia progresiva, en cuádriceps, glúteos y prensión.' },
          { t: 'Equilibrio, marcha y flexibilidad', d: '3 a 5 días por semana',
            say: 'Se suma entrenamiento de equilibrio, que previene caídas, marcha funcional y flexibilidad, al menos tres a cinco días por semana. No hay fármaco que lo reemplace.' },
        ] },
        { title: 'Nutrición', tag: 'Más proteína', kind: 'pharma', items: [
          { t: 'Proteínas 1,2–1,5 g/kg/día', d: 'Repartidas en las tres comidas',
            say: 'El segundo pilar es la nutrición. El músculo del adulto mayor responde menos al estímulo anabólico, así que necesita más proteína que un joven: uno coma dos a uno coma cinco gramos por kilo al día, repartidos en las tres comidas, salvo insuficiencia renal avanzada.' },
          { t: 'Vitamina D si está baja', d: 'Colecalciferol 800–2000 UI/día',
            say: 'Y si la vitamina D está baja, colecalciferol de ochocientas a dos mil unidades al día, que mejora la fuerza y reduce las caídas.' },
        ] },
        { title: 'Revisión de fármacos', tag: 'Desprescribir', kind: 'alert', items: [
          { t: 'Sedantes y anticolinérgicos', d: 'Perpetúan inmovilidad y anorexia',
            say: 'Y el tercero, revisar los fármacos y retirar sedantes, anticolinérgicos y todo lo que quite el apetito o inmovilice. De eso hablamos en detalle en la clase de polifarmacia.' },
        ] },
      ],
    },
    {
      type: 'points',
      kicker: 'Nutrición',
      title: 'Desnutrición en la persona mayor',
      cards: [
        { title: 'Cómo se diagnostica', tag: 'En Chile', kind: 'criteria', items: [
          { t: 'IMC < 23 es bajo peso', d: 'Normal 23,1–27,9 · sobrepeso 28–31,9 · obesidad ≥ 32',
            say: 'La desnutrición proteico-calórica afecta a cerca de la mitad de los ancianos hospitalizados. En Chile, en el adulto mayor, bajo peso es un IMC menor de veintitrés; normal de veintitrés a veintiocho; sobrepeso hasta treinta y uno; obesidad desde treinta y dos.' },
          { t: 'Pérdida de peso, pantorrilla, MNA', d: '≥ 5 % en 1 mes o 10 % en 6 meses · pantorrilla < 31 cm · MNA < 17',
            say: 'Otros criterios: pérdida involuntaria de cinco por ciento en un mes o diez en seis meses, pantorrilla menor de treinta y un centímetros y un MNA completo bajo diecisiete. La albúmina refleja inflamación: no sirve sola como marcador nutricional.' },
        ] },
        { title: 'Buscar la causa', tag: 'Casi siempre tratable', kind: 'key', items: [
          { t: 'Disfagia, dentición, depresión, fármacos', d: 'Digoxina, metformina, ISRS, opioides · cáncer, ICC, EPOC, ERC',
            say: 'Busca una causa tratable: disfagia, mala dentición, depresión, demencia, fármacos que dan anorexia, enfermedades crónicas, hipertiroidismo, malabsorción, alcoholismo, pobreza y soledad. El estudio incluye peso, talla, MNA, deglución, hemograma, glicemia, función renal, TSH, B doce y folato.' },
        ] },
        { title: 'Tratamiento', tag: 'Escalonado', kind: 'pharma', items: [
          { t: 'Fortificar, fraccionar, suplementar', d: '25–30 kcal/kg/día · proteínas 1–1,2 g/kg (hasta 1,5)',
            say: 'Se trata la causa, se fortifica la dieta, se fracciona en cinco a seis comidas, con compañía y corrección dental. Metas: veinticinco a treinta kilocalorías por kilo y uno a uno coma dos gramos de proteína por kilo, hasta uno coma cinco en enfermedad aguda o úlceras. Suplementos si no se alcanzan, en la red pública el PACAM, más vitamina D y calcio.' },
          { t: 'Sonda solo con buen pronóstico', d: 'Realimentar lento: riesgo de hipofosfemia; tiamina previa',
            say: 'La sonda enteral, solo si hay buen pronóstico: en la demencia avanzada la gastrostomía no mejora la supervivencia ni previene la aspiración. En la desnutrición grave se realimenta lento, por el síndrome de realimentación, con hipofosfemia, hipopotasemia e hipomagnesemia, y con tiamina previa.' },
        ] },
      ],
    },
    {
      type: 'points',
      kicker: 'Piel e inmovilidad',
      title: 'Úlceras por presión e inmovilidad',
      cards: [
        { title: 'Úlcera por presión', tag: 'Presión, fricción, cizallamiento', kind: 'alert', items: [
          { t: 'Sobre prominencias óseas', d: 'Sacro, trocánteres, talones, isquiones, maléolos, occipucio',
            say: 'Las úlceras por presión se forman por presión mantenida, fricción y cizallamiento, sobre las prominencias óseas. Mira este esquema con los sitios más frecuentes: sacro, trocánteres, talones, isquiones, maléolos y occipucio.',
            photo: { src: 'biblioteca/09_neurologia/neuro-22/02_sitios_ulceras_por_presion__fitzpatrick_p918.jpg', label: 'Sitios frecuentes', at: 'Mira este esquema', credit: "Fitzpatrick's Dermatology, p. 918 (Fig. 99-4)" } },
          { t: 'Estadios I a IV', d: 'I eritema que no blanquea · II ampolla · III grasa · IV músculo o hueso',
            say: 'El estadio uno es un eritema que no blanquea con piel íntegra; el dos, una ampolla o úlcera superficial; el tres, pérdida total de la piel con grasa visible; y el cuatro, músculo, tendón o hueso expuesto. Hay además las no clasificables y la lesión de tejido profundo. Mira esta escara sacra con tejido necrótico. La escala de Braden prioriza la prevención: dieciocho o menos es riesgo.',
            photo: { src: 'biblioteca/09_neurologia/neuro-22/01_ulcera_por_presion_sacra__bailey_p50.jpg', label: 'Escara sacra necrótica', at: 'Mira esta escara sacra', credit: 'Bailey & Love 27.ª ed., p. 50 (Fig. 3.9)' } },
        ] },
        { title: 'Prevención y tratamiento', tag: 'Eliminar la presión', kind: 'key', items: [
          { t: 'Cambio de posición cada 2 horas', d: 'Colchón de alivio, talones libres, piel seca, proteínas',
            say: 'Prevención: inspección diaria de la piel, cambios de posición cada dos horas, lateralización a treinta grados, superficies de alivio de presión, talones libres, piel limpia y seca y proteínas en la dieta.' },
          { t: 'Limpiar con suero, cura húmeda, desbridar', d: 'Sin povidona; antibióticos solo si celulitis, sepsis u osteomielitis',
            say: 'Tratamiento: eliminar la presión, limpiar con suero fisiológico sin antisépticos citotóxicos, cura en ambiente húmedo con apósitos y desbridar el tejido necrótico. La escara seca y estable del talón sin perfusión no se desbrida. Antibióticos solo ante celulitis, sepsis u osteomielitis. Los estadios tres y cuatro extensos se derivan a cirugía.' },
        ] },
        { title: 'Inmovilidad', tag: 'Síndrome geriátrico', kind: 'criteria', items: [
          { t: 'Complicaciones en todos los sistemas', d: 'Escaras, atrofia, TVP, neumonía, fecaloma, ITU, delirium',
            say: 'La inmovilidad es un síndrome geriátrico con causas múltiples: dolor, ACV, Parkinson, demencia, miedo a caer, sedantes y reposo o contenciones iatrogénicas. Sus complicaciones abarcan todo: escaras, pérdida de músculo y contracturas, hipotensión ortostática, trombosis y embolia, neumonía por aspiración, fecaloma, infección urinaria y delirium.' },
          { t: 'Movilizar y kinesioterapia', d: 'Tratar la causa; evitar sondas y contenciones',
            say: 'El manejo es tratar la causa, movilizar precozmente, kinesioterapia diaria incluso en cama, sentar fuera de la cama, ayudas técnicas, analgesia antes del ejercicio, profilaxis de trombosis y apoyo al cuidador.' },
        ] },
      ],
    },
    {
      type: 'points',
      kicker: 'Maltrato',
      title: 'Maltrato en el adulto mayor',
      cards: [
        { title: 'Qué es', tag: 'Subdiagnosticado', kind: 'key', items: [
          { t: 'Acto o falta de acción que daña', d: 'En una relación de confianza · 1 de cada 6',
            say: 'Para la Organización Mundial de la Salud, el maltrato es un acto único o repetido, o la falta de una acción apropiada, en una relación de confianza, que causa daño o angustia. Afecta a cerca de uno de cada seis adultos mayores y está subdiagnosticado.' },
          { t: 'Psicológico, físico, económico, sexual, negligencia', d: 'El psicológico es el más frecuente',
            say: 'Los tipos son psicológico, el más frecuente, físico, económico, sexual, negligencia o abandono, y autonegligencia. El agresor suele ser un familiar cercano. Riesgo: dependencia, demencia y aislamiento de la víctima, y en el cuidador, sobrecarga, alcohol, depresión y dependencia económica.' },
        ] },
        { title: 'Sospecha y conducta', tag: 'Entrevistar a solas', kind: 'alert', items: [
          { t: 'Lesiones inexplicadas o discordantes', d: 'Consulta tardía, versiones distintas, descuido, miedo',
            say: 'Sospecha ante lesiones inexplicadas, en distintos estadios o con un mecanismo que no calza, consulta tardía, versiones distintas del paciente y del cuidador, deshidratación, desnutrición o escaras por descuido, miedo ante el cuidador, o un acompañante que no deja hablar a solas.' },
          { t: 'Hablar a solas, examinar, registrar', d: 'Hospitalizar como protección si el riesgo es inmediato',
            say: 'Entrevista al paciente a solas, examina toda la piel, registra las lesiones y los dichos textuales, evalúa el riesgo, la cognición y la red, y si el riesgo es inmediato, hospitaliza como medida de protección.' },
        ] },
        { title: 'Deber legal', tag: 'Denunciar en 24 horas', kind: 'criteria', items: [
          { t: 'Denuncia obligatoria del personal de salud', d: 'Carabineros, PDI o Ministerio Público',
            say: 'El personal de salud está obligado a denunciar los hechos que constituyan delito, dentro de las veinticuatro horas, ante Carabineros, la Policía de Investigaciones o el Ministerio Público. Se aplica además la ley de violencia intrafamiliar.' },
          { t: 'Activar la red y apoyar al cuidador', d: 'Trabajador social, SENAMA, programas municipales',
            say: 'Se activa la red local: trabajador social, SENAMA y programas municipales. La prevención incluye capacitar y apoyar al cuidador, con respiro, y tratar su sobrecarga y su depresión.' },
        ] },
      ],
    },




    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Cinco criterios',
      images: [
        { src: 'animaciones/neuro-22/A1_fried.mp4', label: 'Fragilidad', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Tres o más: frágil',
          say: 'El fenotipo de Fried tiene cinco criterios: baja de peso, agotamiento, poca fuerza de prensión, marcha lenta y poca actividad. Con tres o más es frágil; con uno o dos, prefrágil, que es donde más rinde la prevención.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ordenemos todo en un árbol, desde el control preventivo hasta la intervención.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['1 o 2 criterios de Fried', 'Prefrágil', 'Frágil o robusto'],
          say: 'Repasemos las trampas. Uno o dos criterios de Fried es prefrágil. Frágil exige tres o más.' },
        { cells: ['Fuerza de prensión baja, sin imagen', 'Sarcopenia probable: tratar ya', 'Esperar DEXA para tratar'],
          say: 'Fuerza baja sin imagen es sarcopenia probable, y ya se trata. El error es esperar la densitometría para empezar.' },
        { cells: ['Parámetro principal de sarcopenia', 'Fuerza muscular', 'Masa muscular'],
          say: 'En el consenso actual, el parámetro principal es la fuerza, no la masa.' },
        { cells: ['Primera función que cae en deterioro cognitivo', 'Instrumentales (Lawton)', 'Básicas (Barthel)'],
          say: 'Si el deterioro cognitivo recién empieza, lo primero que se pierde son las actividades instrumentales, como el dinero o los remedios. Las básicas caen después.' },
        { cells: ['Tratamiento de fragilidad y sarcopenia', 'Ejercicio de fuerza + proteínas', 'Suplementos solos o fármacos'],
          say: 'Y el tratamiento es ejercicio de fuerza con aporte de proteínas. Los suplementos solos, o buscar un fármaco, son la respuesta incorrecta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 78 años, autovalente, en control en APS. En el último año bajó de 58 a 52 kg sin dieta, camina más lento y ya no sale a comprar porque "se cansa enseguida". Dinamometría: 13 kg en la mano dominante. Recorre 4 metros en 7,2 s (0,55 m/s). Pfeiffer: 1 error. Barthel 95/100, Lawton 6/8.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Prefragilidad; control anual en EMPAM' },
        { letter: 'B', text: 'Fragilidad; ejercicio multicomponente y aporte proteico de 1,2–1,5 g/kg/día' },
        { letter: 'C', text: 'Demencia leve; derivar a neurología' },
        { letter: 'D', text: 'Fragilidad; solicitar DEXA de cuerpo entero antes de iniciar tratamiento' },
        { letter: 'E', text: 'Envejecimiento normal; no requiere intervención' },
      ],
      correct: 'B',
      explanation: 'Cumple 4 criterios de Fried (baja de peso > 10 %, agotamiento, prensión < 16 kg, marcha < 0,8 m/s): fragilidad. La prensión baja define además sarcopenia probable, que basta para tratar. Conducta: ejercicio multicomponente (Vivifrail), proteínas 1,2–1,5 g/kg/día, medir vitamina D y descartar causas orgánicas de la baja de peso.',
      say: {
        stem: 'Vamos a un caso. Mujer de setenta y ocho años, autovalente, en control en el consultorio. En un año bajó de cincuenta y ocho a cincuenta y dos kilos sin hacer dieta, camina más lento, y dejó de salir a comprar porque se cansa. Su prensión es de trece kilos, y demora siete segundos en caminar cuatro metros. El Pfeiffer es normal y su Barthel es noventa y cinco.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones son: prefragilidad con control anual; fragilidad con ejercicio y proteínas; demencia leve; fragilidad pidiendo una densitometría antes de tratar; o envejecimiento normal. Piénsalo.',
        answer: 'La respuesta es la B. Cuenta los criterios de Fried: baja de peso, agotamiento, prensión menor de dieciséis y marcha lenta. Son cuatro, así que es frágil, no prefrágil. La prensión baja además es sarcopenia probable, y eso basta para tratar: ejercicio multicomponente y proteínas. La D es la trampa: no hay que esperar la imagen. Y el Pfeiffer normal descarta que el problema sea cognitivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 143',
      stem: 'Hombre de 78 años con pérdida de masa muscular, fuerza de prensión <16 kg y velocidad de marcha 0.7 m/s.',
      question: '¿Cuál es el diagnóstico y la intervención más eficaz?',
      options: [
        { letter: 'A', text: 'Sarcopenia: ejercicio de resistencia progresivo + aporte proteico adecuado (1.2-1.5 g/kg/día)' },
        { letter: 'B', text: 'Desnutrición: solo suplementos nutricionales orales' },
        { letter: 'C', text: 'Depresión en adulto mayor: antidepresivos' },
        { letter: 'D', text: 'Osteoporosis: bifosfonatos' },
        { letter: 'E', text: 'Hipotiroidismo: levotiroxina' },
      ],
      correct: 'A',
      explanation: 'Masa baja + fuerza baja + marcha < 0,8 m/s: sarcopenia (severa según EWGSOP2). La intervención más eficaz es el ejercicio de resistencia progresivo con aporte proteico de 1,2–1,5 g/kg/día; no hay fármaco de primera línea.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Hombre de setenta y ocho años con pérdida de masa muscular, prensión menor de dieciséis kilos y una marcha de cero coma siete metros por segundo.',
        question: '¿Cuál es el diagnóstico y la intervención más eficaz?',
        options: 'Las opciones son: sarcopenia con ejercicio de resistencia y proteínas; desnutrición con suplementos solos; depresión con antidepresivos; osteoporosis con bifosfonatos; o hipotiroidismo con levotiroxina. Piénsalo.',
        answer: 'Es la A. Tiene masa baja, fuerza baja y rendimiento bajo: es una sarcopenia, y además severa. La intervención más eficaz es el ejercicio de resistencia progresivo con uno coma dos a uno coma cinco gramos de proteína por kilo. El distractor es la B: los suplementos solos, sin ejercicio, no recuperan el músculo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 25',
      stem: 'Una paciente de 84 años es traída por su hija debido a que presenta olvidos frecuentes. Su acompañante refiere que la paciente ha olvidado recetas, ya no cocina como antes y tiene dificultades crecientes en el manejo del dinero. Recientemente se desorientó en la calle, por lo que requirió ayuda para volver a casa. Tiene escolaridad incompleta hasta sexto básico. Al examen se observa orientada, cooperadora y sin alteraciones neurológicas.',
      question: '¿Cuál es el examen más adecuado para la evaluación inicial de esta paciente?',
      options: [
        { letter: 'A', text: 'Test de Montreal Cognitive Assessment (MOCA)' },
        { letter: 'B', text: 'Mini-Mental State Examination (MMSE)' },
        { letter: 'C', text: 'Prueba de Confusion Assessment Method (CAM)' },
        { letter: 'D', text: 'Test del reloj' },
        { letter: 'E', text: 'Prueba de memorización de tres palabras' },
      ],
      correct: 'B',
      explanation: 'Pérdida de actividades instrumentales (cocinar, manejar dinero) con olvidos, de curso progresivo y sin compromiso de conciencia: sospecha de demencia. El cribado cognitivo inicial es el MMSE. El CAM es para el delirium (cuadro agudo); el MoCA es más exigente y se reserva para buscar deterioro inicial con MMSE normal.',
      say: {
        stem: 'Segunda pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Mujer de ochenta y cuatro años, con escolaridad hasta sexto básico, que olvida recetas, ya no cocina como antes, le cuesta manejar el dinero y se desorientó en la calle. Al examen está orientada, cooperadora y sin focalidad.',
        question: '¿Cuál es el examen más adecuado para la evaluación inicial?',
        options: 'Las opciones son: el MoCA, el Mini-Mental, el CAM, el test del reloj, o memorizar tres palabras. Piénsalo.',
        answer: 'Es la B, el Mini-Mental. Fíjate en lo que conecta con la clase: lo primero que perdió son actividades instrumentales, cocinar y el dinero, que es justo lo que cae primero en el deterioro cognitivo. El cuadro es progresivo, así que se sospecha una demencia y se parte con el Mini-Mental. El CAM es la trampa: sirve para el delirium, que es agudo, y esta paciente está lúcida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 138',
      stem: 'Si aumenta la velocidad de envejecimiento en la población que pasara en temas de salud publica:',
      question: '¿Qué ocurre?',
      options: [
        { letter: 'A', text: 'Aumento de cobertura de adultos mayores en APS' },
        { letter: 'B', text: 'Aumento de personas con fragilidad' },
        { letter: 'C', text: 'Aumento en la variabilidad de morbilidad o mortalidad' },
        { letter: 'D', text: 'Ninguna de las anteriores es correcta' },
        { letter: 'E', text: 'Todas las anteriores son correctas' },
      ],
      correct: 'B',
      explanation: 'Un envejecimiento poblacional más rápido aumenta el número de personas mayores con pérdida de reserva funcional, es decir, con fragilidad. Por eso el EMPAM busca pesquisarla de forma sistemática en APS.',
      say: {
        stem: 'Y una pregunta de salud pública, del EUNACOM de diciembre de dos mil veinticuatro. Si aumenta la velocidad de envejecimiento de la población, ¿qué pasa en salud pública?',
        question: '¿Qué ocurre?',
        options: 'Las opciones son: aumenta la cobertura de adultos mayores en atención primaria; aumentan las personas con fragilidad; aumenta la variabilidad de la morbilidad o mortalidad; ninguna; o todas. Piénsalo.',
        answer: 'Es la B: aumentan las personas con fragilidad. Más adultos mayores significa más personas con la reserva agotada. Y eso explica por qué el EMPAM la busca cada año en atención primaria: es un problema poblacional, no solo individual. La cobertura, en cambio, no crece por sí sola.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.07.5.004 · Valoración funcional",
      "stem": "Mujer de 81 años, viuda, vive sola. Su hija relata que en los últimos 6 meses olvida pagar las cuentas, se equivoca al tomar sus medicamentos y ya no usa el transporte público sola. Se baña, se viste, come y va al baño sin ayuda, y es continente.",
      "question": "¿Qué instrumento es el más adecuado para cuantificar el compromiso funcional descrito?",
      "options": [
        {
          "letter": "A",
          "text": "Índice de Barthel"
        },
        {
          "letter": "B",
          "text": "Test de Pfeiffer"
        },
        {
          "letter": "C",
          "text": "Índice de Katz"
        },
        {
          "letter": "D",
          "text": "Escala de depresión geriátrica de Yesavage"
        },
        {
          "letter": "E",
          "text": "Escala de Lawton y Brody"
        }
      ],
      "correct": "E",
      "explanation": "Manejar dinero, medicamentos, transporte, teléfono y compras son actividades instrumentales de la vida diaria, que se evalúan con la escala de Lawton y Brody; suelen ser las primeras en perderse. Barthel y Katz miden actividades básicas (baño, vestido, alimentación, continencia), que aquí están conservadas. Yesavage tamiza depresión y Pfeiffer, deterioro cognitivo.",
      "say": {
        "stem": "Una mujer de ochenta y un años que vive sola ya no maneja bien su dinero, se equivoca con sus remedios y no sale sola en transporte público, pero se baña, se viste y come sin ayuda.",
        "question": "¿Qué instrumento cuantifica mejor este compromiso funcional?",
        "options": "Las opciones: índice de Barthel, test de Pfeiffer, índice de Katz, escala de Yesavage o escala de Lawton y Brody. Piénsalo.",
        "answer": "Es la E. Dinero, remedios y transporte son actividades instrumentales, y se miden con la escala de Lawton y Brody. El Barthel tienta porque es la escala funcional más conocida, pero mide actividades básicas, que esta paciente conserva."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.07.3.009 · Prevención del deterioro funcional",
      "stem": "Hombre de 84 años, autovalente, camina sin ayuda y vive con su esposa. Se hospitaliza en sala por una neumonía; al segundo día está estable, afebril, lúcido y tolera la vía oral. El equipo de enfermería propone medidas para la estadía.",
      "question": "¿Cuál de las siguientes medidas previene mejor el deterioro funcional asociado a la hospitalización?",
      "options": [
        {
          "letter": "A",
          "text": "Movilización precoz, sentarlo fuera de la cama y caminar diariamente, con nutrición adecuada"
        },
        {
          "letter": "B",
          "text": "Instalar sonda Foley para evitar que se levante de noche"
        },
        {
          "letter": "C",
          "text": "Reposo absoluto en cama hasta completar los antibióticos"
        },
        {
          "letter": "D",
          "text": "Sujeción mecánica nocturna para prevenir caídas"
        },
        {
          "letter": "E",
          "text": "Benzodiacepina nocturna para asegurar el sueño"
        }
      ],
      "correct": "A",
      "explanation": "En la persona mayor hospitalizada el reposo en cama produce pérdida rápida de masa muscular y funcionalidad, incluso en pocos días. Se previene con movilización precoz y diaria, aporte proteico, uso de lentes y audífonos, y orientación. Sondas, sujeciones y benzodiacepinas favorecen inmovilidad, delirium y caídas, y deben evitarse.",
      "say": {
        "stem": "Un hombre de ochenta y cuatro años, autovalente, está hospitalizado por neumonía y al segundo día ya está estable y lúcido.",
        "question": "¿Qué medida previene mejor el deterioro funcional durante la hospitalización?",
        "options": "Las opciones: movilización precoz con caminata diaria y buena nutrición, sonda Foley para que no se levante, reposo absoluto, sujeción nocturna o benzodiacepina para dormir. Piénsalo.",
        "answer": "Es la A. El reposo en cama hace perder músculo y funcionalidad en pocos días, y la movilización precoz lo previene. La sujeción tienta para evitar caídas, pero aumenta el delirium, la inmovilidad y, paradójicamente, las lesiones."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.07.3.004 · Ejercicio en personas mayores",
      "stem": "Hombre de 70 años, autovalente, con hipertensión controlada y sin cardiopatía, consulta en APS porque desea mantenerse activo. Hoy solo camina 15 minutos 2 veces por semana. Examen físico y EFAM normales.",
      "question": "¿Cuál es la recomendación de actividad física más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Caminar 20 minutos 3 veces por semana como única actividad"
        },
        {
          "letter": "B",
          "text": "Al menos 150 minutos semanales de actividad aeróbica moderada, ejercicios de fuerza 2 o más días y de equilibrio 3 o más días por semana"
        },
        {
          "letter": "C",
          "text": "Evitar los ejercicios de fuerza por el riesgo de lesión"
        },
        {
          "letter": "D",
          "text": "Solo actividad aeróbica intensa, sin fuerza ni equilibrio"
        },
        {
          "letter": "E",
          "text": "Mantener su nivel actual, ya que a esta edad el ejercicio no modifica el riesgo"
        }
      ],
      "correct": "B",
      "explanation": "En las personas mayores se recomienda al menos 150 a 300 minutos semanales de actividad aeróbica moderada, ejercicios de fortalecimiento muscular 2 o más días y actividad multicomponente con énfasis en equilibrio 3 o más días por semana, para prevenir caídas, sarcopenia y dependencia. El entrenamiento de fuerza es seguro y especialmente útil a esta edad.",
      "say": {
        "stem": "Un hombre de setenta años, autovalente y con hipertensión controlada, quiere mantenerse activo. Hoy solo camina quince minutos dos veces por semana.",
        "question": "¿Cuál es la recomendación de actividad física más adecuada?",
        "options": "Las opciones: caminar veinte minutos tres veces por semana, ciento cincuenta minutos semanales de aeróbico moderado más fuerza y equilibrio, evitar la fuerza, solo aeróbico intenso, o seguir igual. Piénsalo.",
        "answer": "Es la B. La persona mayor necesita al menos ciento cincuenta minutos semanales de aeróbico moderado, más fuerza dos días y equilibrio tres días. Evitar la fuerza tienta por miedo a lesiones, pero es justamente lo que previene la sarcopenia y las caídas."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 5.01.3.007 · Maltrato en el adulto mayor",
      "stem": "Mujer de 82 años, con demencia moderada, vive con su hijo, que es su único cuidador. Consulta por una caída. Al examen tiene hematomas en distintas etapas de evolución en ambos brazos, baja de peso y mala higiene. El hijo responde todas las preguntas por ella y se niega a dejarla sola con el equipo.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Entrevistarla a solas, registrar detalladamente las lesiones, activar la red de protección y realizar la denuncia"
        },
        {
          "letter": "B",
          "text": "Atribuir los hematomas a fragilidad capilar propia de la edad"
        },
        {
          "letter": "C",
          "text": "Indicar control en 3 meses"
        },
        {
          "letter": "D",
          "text": "Pedir explicaciones al hijo y dar el alta si son coherentes"
        },
        {
          "letter": "E",
          "text": "Solicitar pruebas de coagulación y no tomar otras medidas"
        }
      ],
      "correct": "A",
      "explanation": "Hematomas en distintas etapas, desnutrición, mala higiene y un cuidador controlador son señales de maltrato y negligencia. Se debe entrevistar a la persona mayor a solas, documentar en la ficha, evaluar riesgo y activar la red de protección, con denuncia, ya que el maltrato a personas mayores es violencia intrafamiliar según la ley chilena.",
      "say": {
        "stem": "Mujer de ochenta y dos años con demencia, que vive con su hijo cuidador, con hematomas de distintas edades, baja de peso, mala higiene y un hijo que no la deja sola.",
        "question": "¿Cuál es la conducta?",
        "options": "Las opciones: entrevistarla a solas, registrar, activar red y denunciar; fragilidad capilar; control en tres meses; pedir explicaciones al hijo; o solo pruebas de coagulación. Piénsalo.",
        "answer": "Es la A. Hay señales de maltrato y negligencia, así que se entrevista a solas, se registra y se activa la protección con denuncia. Atribuirlo a fragilidad capilar tienta, pero no explica la baja de peso, la mala higiene ni los hematomas de distintas edades."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.052 · Escaras",
      "stem": "Mujer de 84 años, postrada tras un accidente cerebrovascular, con incontinencia urinaria y desnutrición, vive con su hija. En la visita domiciliaria se observa eritema que no blanquea a la presión en la zona sacra, con piel indemne.",
      "question": "¿Cuál es la medida más importante para evitar la progresión de la lesión?",
      "options": [
        {
          "letter": "A",
          "text": "Masaje enérgico de la zona enrojecida"
        },
        {
          "letter": "B",
          "text": "Curación con apósito y decúbito supino permanente"
        },
        {
          "letter": "C",
          "text": "Antibiótico tópico en la zona"
        },
        {
          "letter": "D",
          "text": "Flotador o rosca bajo el sacro"
        },
        {
          "letter": "E",
          "text": "Cambios de posición programados cada 2 horas y superficie que redistribuya la presión"
        }
      ],
      "correct": "E",
      "explanation": "Eritema no blanqueable con piel intacta corresponde a una úlcera por presión categoría 1. La medida clave es aliviar la presión: cambios posturales programados, colchón antiescaras, manejo de la humedad y apoyo nutricional. El masaje de la zona y los flotadores o roscas están contraindicados porque aumentan el daño tisular.",
      "say": {
        "stem": "Mujer de ochenta y cuatro años, postrada tras un accidente cerebrovascular, con incontinencia y desnutrición. En la visita domiciliaria tiene un eritema en el sacro que no blanquea al presionar, con la piel intacta.",
        "question": "¿Qué es lo más importante para evitar que progrese?",
        "options": "Las opciones: masaje enérgico de la zona, curación con reposo de espalda permanente, antibiótico tópico, flotador bajo el sacro o cambios de posición programados con colchón antiescaras. Piénsalo.",
        "answer": "Es la E. Es una úlcera por presión inicial, y lo que la frena es sacar la presión, con cambios de posición cada dos horas y una superficie que la redistribuya. El masaje tienta porque parece activar la circulación, pero en realidad daña más el tejido."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.1.001 · Desnutrición",
      "stem": "Un hombre de 80 años, que vive solo, ha bajado 8 kg en 4 meses (de 64 a 56 kg). Come una vez al día, tiene la prótesis dental en mal estado y menor fuerza de prensión. Su IMC actual es 19 kg/m² y la albúmina es 3,1 g/dL. La evaluación inicial no muestra signos de cáncer.",
      "question": "¿Cuál es el diagnóstico nutricional más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Estado nutricional normal, porque el IMC es mayor de 18,5"
        },
        {
          "letter": "B",
          "text": "Sobrepeso"
        },
        {
          "letter": "C",
          "text": "Obesidad sarcopénica"
        },
        {
          "letter": "D",
          "text": "Desnutrición proteico-calórica, por pérdida de peso significativa"
        },
        {
          "letter": "E",
          "text": "Caquexia neoplásica confirmada"
        }
      ],
      "correct": "D",
      "explanation": "Una pérdida mayor al 5% en 3 meses o al 10% en 6 meses es significativa: él perdió 12,5% en 4 meses. En el adulto mayor un IMC bajo 23 ya se considera enflaquecido. Se suman baja ingesta, problemas dentales, aislamiento y menor fuerza: desnutrición, con manejo multidimensional y social.",
      "say": {
        "stem": "Un hombre de ochenta años que vive solo bajó ocho kilos en cuatro meses, come una vez al día, tiene la prótesis dental en mal estado y menos fuerza. Su índice de masa corporal es diecinueve y la albúmina es tres coma uno.",
        "question": "¿Cuál es el diagnóstico nutricional más adecuado?",
        "options": "Las opciones: normal porque el índice supera dieciocho coma cinco, sobrepeso, obesidad sarcopénica, desnutrición proteico calórica o caquexia neoplásica confirmada. Piénsalo.",
        "answer": "Es la D. Perdió más del diez por ciento de su peso en pocos meses y come poco, eso es desnutrición. La opción normal tienta, pero en el adulto mayor un índice bajo veintitrés ya es enflaquecido."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 82",
      "stem": "Un paciente de 86 años, con antecedente de un accidente vascular encefálico hace un año, secuelado con un síndrome de inmovilidad y marcada dependencia, presenta una lesión en la zona sacra. Al examen físico se observa eritema en la zona sacra, sin solución de continuidad de la piel.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Aseo con hidrogel"
        },
        {
          "letter": "B",
          "text": "Colchón antiescaras"
        },
        {
          "letter": "C",
          "text": "Antibióticos"
        },
        {
          "letter": "D",
          "text": "Resolución quirúrgica"
        },
        {
          "letter": "E",
          "text": "Cambios de posición frecuentes"
        }
      ],
      "correct": "E",
      "explanation": "Eritema sacro sin pérdida de continuidad de la piel es una úlcera por presión grado I. Lo fundamental es aliviar la presión con cambios de posición cada 2 horas, además de proteger e hidratar la piel y asegurar una nutrición adecuada. El colchón antiescaras complementa pero no reemplaza los cambios de posición; antibióticos y cirugía no corresponden.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Hombre de ochenta y seis años, postrado tras un ACV, con eritema sacro sin herida.",
        "question": "¿Cuál es el tratamiento?",
        "options": "Las opciones: hidrogel, colchón antiescaras, antibióticos, cirugía, o cambios de posición frecuentes. Piénsalo.",
        "answer": "Es la E. Cambios de posición frecuentes, porque es una úlcera grado uno. El colchón antiescaras ayuda, pero no reemplaza los cambios de posición."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.07.1.013 · Inmovilidad",
      "stem": "Hombre de 81 años, autovalente, se hospitaliza por neumonía. Al tercer día está estable y afebril, pero permanece todo el día en cama, con sonda Foley instalada \"por comodidad\".",
      "question": "¿Cuál es la medida más eficaz para prevenir el síndrome de inmovilidad?",
      "options": [
        {
          "letter": "A",
          "text": "Movilización precoz, con sedestación en sillón y marcha asistida diaria, retirando la sonda innecesaria"
        },
        {
          "letter": "B",
          "text": "Reposo absoluto hasta el alta para evitar caídas"
        },
        {
          "letter": "C",
          "text": "Colchón antiescaras como única medida"
        },
        {
          "letter": "D",
          "text": "Suplemento de vitamina D en dosis altas"
        },
        {
          "letter": "E",
          "text": "Contención física nocturna"
        }
      ],
      "correct": "A",
      "explanation": "La inmovilidad del adulto mayor hospitalizado produce pérdida rápida de fuerza muscular, úlceras por presión, trombosis, delirium y deterioro funcional. Lo más eficaz es la movilización precoz con sedestación y marcha asistida, y retirar dispositivos innecesarios como sondas, que atan al paciente a la cama. Las contenciones y el reposo prolongado agravan la inmovilidad.",
      "say": {
        "stem": "Hombre de ochenta y un años, autovalente, hospitalizado por neumonía, ya estable, pero todo el día en cama y con sonda Foley sin indicación.",
        "question": "¿Cómo previenes el síndrome de inmovilidad?",
        "options": "Las opciones: movilización precoz retirando la sonda, reposo absoluto, solo colchón antiescaras, vitamina D o contención nocturna. Piénsalo.",
        "answer": "Es la A. Movilización precoz y retirar la sonda innecesaria. El reposo para evitar caídas suena prudente, pero acelera la pérdida de fuerza y funcionalidad."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.07.1.014 · Malnutrición",
      "stem": "Mujer de 80 años que vive sola, viuda reciente, es evaluada en el examen de medicina preventiva del adulto mayor. Refiere menor apetito y ha bajado 4 kg en 3 meses.",
      "question": "¿Cuál es el instrumento validado más adecuado para tamizar malnutrición en esta paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Índice de Barthel"
        },
        {
          "letter": "B",
          "text": "Escala de Tinetti"
        },
        {
          "letter": "C",
          "text": "Escala de Yesavage"
        },
        {
          "letter": "D",
          "text": "Test de Pfeiffer"
        },
        {
          "letter": "E",
          "text": "Mini Nutritional Assessment (MNA)"
        }
      ],
      "correct": "E",
      "explanation": "El Mini Nutritional Assessment es el instrumento validado para tamizar malnutrición o riesgo nutricional en adultos mayores: considera ingesta, pérdida de peso, movilidad, estrés, estado neuropsicológico e IMC. Barthel mide funcionalidad, Yesavage depresión, Pfeiffer cognición y Tinetti marcha y equilibrio. Su baja de peso obliga además a descartar depresión y causas orgánicas.",
      "say": {
        "stem": "Mujer de ochenta años, viuda reciente, con menos apetito y cuatro kilos menos en tres meses.",
        "question": "¿Qué instrumento usas para tamizar malnutrición?",
        "options": "Las opciones: Barthel, Tinetti, Yesavage, Pfeiffer o Mini Nutritional Assessment. Piénsalo.",
        "answer": "Es la E. El Mini Nutritional Assessment. Yesavage tienta por el duelo, pero tamiza depresión, no el estado nutricional."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.07.3.008 · Nutrición en las personas mayores",
      "stem": "Hombre de 78 años, autovalente y sin enfermedad renal, presenta sarcopenia leve en la valoración geriátrica. Su dieta es pobre en carnes y lácteos.",
      "question": "¿Cuál es el aporte proteico diario recomendado para este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "1,0 a 1,2 g/kg/día"
        },
        {
          "letter": "B",
          "text": "0,6 g/kg/día"
        },
        {
          "letter": "C",
          "text": "0,4 g/kg/día"
        },
        {
          "letter": "D",
          "text": "2,5 a 3 g/kg/día"
        },
        {
          "letter": "E",
          "text": "No requiere proteínas adicionales, solo vitaminas"
        }
      ],
      "correct": "A",
      "explanation": "Las personas mayores necesitan más proteínas que los adultos jóvenes para mantener la masa muscular, por resistencia anabólica: se recomienda 1,0 a 1,2 g/kg/día, y hasta 1,5 en enfermedad aguda o sarcopenia, salvo enfermedad renal avanzada. Debe combinarse con ejercicio de resistencia. Un aporte de 0,6 corresponde a restricción en enfermedad renal crónica.",
      "say": {
        "stem": "Hombre de setenta y ocho años con sarcopenia leve, sin enfermedad renal y con dieta pobre en proteínas.",
        "question": "¿Cuánta proteína diaria le recomiendas?",
        "options": "Las opciones: uno a uno coma dos gramos por kilo, cero coma seis, cero coma cuatro, dos coma cinco a tres o nada extra. Piénsalo.",
        "answer": "Es la A. De uno a uno coma dos gramos por kilo al día, más que un adulto joven. Cero coma seis es la restricción de la enfermedad renal y aquí agravaría la sarcopenia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.07.5.001 · Valoración afectiva",
      "stem": "Mujer de 77 años es evaluada en el examen de medicina preventiva del adulto mayor (EMPAM). Su hija refiere que la nota más aislada y desganada desde hace meses.",
      "question": "¿Cuál es el instrumento más adecuado para la valoración afectiva?",
      "options": [
        {
          "letter": "A",
          "text": "Mini-Mental State Examination"
        },
        {
          "letter": "B",
          "text": "Escala de depresión geriátrica de Yesavage"
        },
        {
          "letter": "C",
          "text": "Índice de Katz"
        },
        {
          "letter": "D",
          "text": "Escala de Lawton y Brody"
        },
        {
          "letter": "E",
          "text": "Timed Up and Go"
        }
      ],
      "correct": "B",
      "explanation": "La escala de depresión geriátrica de Yesavage, en su versión de 15 preguntas (más de 5 puntos sugiere depresión), es el instrumento de tamizaje afectivo recomendado en la valoración geriátrica integral. El MMSE evalúa cognición, Katz y Lawton miden actividades básicas e instrumentales, y el Timed Up and Go evalúa marcha y riesgo de caídas.",
      "say": {
        "stem": "Mujer de setenta y siete años en su examen preventivo, que su hija nota aislada y desganada.",
        "question": "¿Qué instrumento usas para la valoración afectiva?",
        "options": "Las opciones: Mini Mental, Yesavage, Katz, Lawton y Brody o Timed Up and Go. Piénsalo.",
        "answer": "Es la B. La escala de Yesavage, que tamiza depresión en el adulto mayor. El Mini Mental tienta por el desgano, pero evalúa cognición, no ánimo."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Fragilidad', tag: 'Fried', kind: 'criteria', items: [
          { t: 'Pérdida de reserva, reversible', d: 'No es edad ni discapacidad',
            say: 'Cerremos. La fragilidad es la pérdida de reserva frente a estresores menores, y es reversible.' },
          { t: '3 o más criterios de Fried', d: '1 a 2: prefrágil',
            say: 'Con tres o más criterios de Fried es frágil; con uno o dos, prefrágil.' },
        ] },
        { title: 'Sarcopenia y VGI', tag: 'Lo que se mide', kind: 'key', items: [
          { t: 'La fuerza manda', d: 'Fuerza baja: probable y se trata',
            say: 'En la sarcopenia manda la fuerza: la fuerza baja ya es sarcopenia probable, y ya se trata.' },
          { t: 'Cuatro esferas de la VGI', d: 'Lawton cae primero en lo cognitivo',
            say: 'La valoración geriátrica tiene cuatro esferas, funcional, mental, clínica y social, y las actividades instrumentales son las primeras en caer.' },
        ] },
        { title: 'Tratamiento', tag: 'Sin fármacos', kind: 'pharma', items: [
          { t: 'Ejercicio + proteínas', d: 'Fuerza, equilibrio, marcha; 1,2–1,5 g/kg/día',
            say: 'Si te llevas una sola idea de hoy: la fragilidad se revierte con ejercicio de fuerza y proteínas, no con fármacos. En la próxima clase vemos la consecuencia más temida de la fragilidad: las caídas y la fractura de cadera. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adulto mayor en control preventivo',
    root: N('start', 'Adulto mayor de 65 años', 'EMPAM anual con EFAM-Chile',
      'Adulto mayor de sesenta y cinco años en su control preventivo anual. El EFAM-Chile lo clasifica.',
      ['', N('q', '¿Resultado del EFAM?', 'Tres categorías',
        '¿Cómo sale en el EFAM?',
        ['Sin riesgo', N('ok', 'Autovalente sin riesgo', 'Control anual',
          'Autovalente sin riesgo: sigue con su control anual y actividad física.')],
        ['Con riesgo', N('do', 'Talleres de prevención', 'Actividad física',
          'Autovalente con riesgo: se deriva a talleres de prevención y actividad física.')],
        ['Riesgo de dependencia', N('refer', 'VGI completa', 'Cuatro esferas + Fried',
          'En riesgo de dependencia: al médico para una valoración geriátrica integral completa, y ahí se aplican los criterios de Fried.',
          ['', N('q', '¿Cuántos criterios de Fried?', 'Peso, agotamiento, fuerza, marcha, actividad',
            '¿Cuántos criterios de Fried cumple?',
            ['0', N('ok', 'Robusto', 'Mantener actividad',
              'Ninguno: robusto.')],
            ['1–2', N('do', 'Prefrágil', 'Ejercicio preventivo',
              'Uno o dos: prefrágil, la fase de mayor rendimiento para prevenir con ejercicio.')],
            ['≥ 3', N('alert', 'Frágil', 'Ejercicio multicomponente + proteínas',
              'Tres o más: frágil. Ejercicio multicomponente, proteínas de uno coma dos a uno coma cinco gramos por kilo, vitamina D si está baja, y revisar los fármacos.')])])])]),
  },
};
