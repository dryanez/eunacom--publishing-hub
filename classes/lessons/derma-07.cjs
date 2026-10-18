// Clase 16.7 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_2.cjs (derma-07).
// Preguntas reales EUNACOM: node classes/scripts/class_questions.cjs --search "dermatitis de contacto|dermatitis seborreica|níquel|patch test|prueba del parche|cromo"
// -> EUNACOM Julio 2016 · Pregunta 144 (código 6.01.1.007, confianza 0.7)
// -> EUNACOM Julio 2016 · Pregunta 12 (código 2.01.1.107, confianza 0.3)

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Una causa endógena, dos mecanismos de contacto y una prueba que confirma cuál',
      say: 'Bienvenidos. Hoy toca el tema clásico de diferencial en dermatología: la dermatitis seborreica frente a la dermatitis de contacto. Y dentro del contacto, dos mecanismos completamente distintos, la irritativa y la alérgica, que se distinguen con una sola pregunta y se confirman con una sola prueba. Vamos por partes, empezando por la seborreica.',
    },

    {
      type: 'points',
      kicker: 'Dermatitis seborreica',
      title: 'Escamas grasosas donde hay más sebo',
      cards: [
        { title: 'Mecanismo y clínica', tag: 'Malassezia', kind: 'key', items: [
          { t: 'Respuesta anormal a la levadura Malassezia', d: 'Coloniza el sebo cutáneo',
            say: 'La dermatitis seborreica es una dermatosis eritematoescamosa crónica, muy prevalente, que se produce por una respuesta inflamatoria anormal frente a la levadura Malassezia, que coloniza el sebo de la piel.' },
          { t: 'Escamas grasosas, untuosas y amarillentas', d: 'En zonas de alta densidad sebácea',
            say: 'La clínica en el adulto son placas eritematosas cubiertas por escamas grasosas, untuosas y amarillentas, en zonas de alta densidad sebácea: cuero cabelludo, con la caspa o pitiriasis capitis, surcos nasogenianos, entrecejo, conducto auditivo externo, pestañas, y la región esternal media. El prurito es leve o moderado. Mira esta cara: enrojecimiento y escamas finas en los surcos nasogenianos y las cejas.',
            photo: { src: 'biblioteca/11_dermatologia/derma-07/01_seborreica_cara__fitzpatrick_p260.jpg', label: 'Dermatitis seborreica', at: 'Mira esta cara', credit: 'Fitzpatrick 7.ª ed., p. 260' } },
        ] },
        { title: 'Poblaciones de alerta', tag: 'Cuándo sospechar algo más', kind: 'alert', items: [
          { t: 'Lactante: costra láctea, benigna', d: 'Autolimitada, en cuero cabelludo y pliegues',
            say: 'En el lactante se llama costra láctea, y es un cuadro completamente benigno y autolimitado, que en general se maneja solo con observación o vaselina, sin necesidad de antimicóticos. En este lactante ves placas rojas cubiertas de escamas amarillentas y untuosas.',
            photo: { src: 'biblioteca/19_dermatologia/derma-07/atlas_377_costra_lactea_escamas_amarille.jpg', label: 'Seborreica del lactante', at: 'En este lactante', credit: 'Atlas EUNACOM 2026' } },
          { t: 'VIH o Parkinson: forma severa y refractaria', d: 'Un brote atípico y explosivo obliga a pedir VIH',
            say: 'En pacientes con VIH o con enfermedad de Parkinson, la dermatitis seborreica es extraordinariamente severa, extensa y refractaria al tratamiento convencional. Un brote explosivo y atípico en un adulto joven obliga a solicitar el test de VIH. Esto se pregunta con frecuencia.' },
        ] },
        { title: 'Tratamiento', tag: 'Antifúngico tópico', kind: 'pharma', items: [
          { t: 'Champú con ketoconazol al 2 por ciento', d: 'O sulfuro de selenio, dos a tres veces por semana',
            say: 'El tratamiento es un champú antifúngico con ketoconazol al dos por ciento, o sulfuro de selenio, dos a tres veces por semana, más un corticoide tópico de baja potencia en ciclos muy cortos para el eritema agudo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dermatitis de contacto irritativa',
      title: 'El ochenta por ciento de los contactos, sin base inmune',
      cards: [
        { title: 'Mecanismo', tag: 'Daño tóxico directo', kind: 'criteria', items: [
          { t: 'Sin sensibilización previa', d: 'Le puede ocurrir a cualquier persona',
            say: 'La dermatitis de contacto irritativa representa el ochenta por ciento de todas las dermatitis de contacto. Es un daño citotóxico físico o químico directo sobre la barrera epidérmica, sin base inmunológica: no requiere sensibilización previa, y le puede ocurrir a cualquier persona si la sustancia es suficientemente concentrada.' },
          { t: 'Detergentes, agua y jabón constantes', d: 'El eccema clásico de las dueñas de casa',
            say: 'Los agentes más comunes son detergentes, lejía, disolventes, ácidos, álcalis, y el contacto constante con agua y jabón: el clásico eccema de las dueñas de casa.' },
        ] },
        { title: 'Clínica y confirmación', tag: 'Confinada al contacto', kind: 'normal', items: [
          { t: 'Ardor y quemazón, en la zona exacta del contacto', d: 'Bordes netos, piel agrietada y fisurada',
            say: 'La clínica está confinada estrictamente a la zona de contacto con el irritante, casi siempre las manos, con bordes netos. Predomina el ardor, la tirantez y la quemazón, más que el prurito. Mira estas manos: piel seca, agrietada y engrosada, solo en los dedos que estuvieron en contacto constante con el irritante.',
            photo: { src: '_web/284_derma_Dermatitis_de_contacto_irrit__Commons_1.jpg', label: 'Irritativa de manos', at: 'Mira estas manos', credit: 'Wikimedia Commons, CC BY-SA 4.0' } },
          { t: 'Pruebas del parche negativas', d: 'Porque no hay mecanismo inmune',
            say: 'Y las pruebas epicutáneas del parche salen negativas, porque no hay ningún mecanismo inmunológico involucrado. El tratamiento es retirar el irritante, usar guantes con forro de algodón, y cremas barrera.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dermatitis de contacto alérgica',
      title: 'El veinte por ciento restante, con hipersensibilidad tipo cuatro',
      cards: [
        { title: 'Mecanismo y alérgenos', tag: 'Hipersensibilidad retardada', kind: 'key', items: [
          { t: 'Reacción celular tipo cuatro', d: 'Linfocitos T sensibilizados, requiere exposición previa',
            say: 'La dermatitis de contacto alérgica es una reacción de hipersensibilidad retardada celular tipo cuatro, mediada por linfocitos T sensibilizados. A diferencia de la irritativa, aquí sí se necesita un período de sensibilización previo, de días a años, y solo afecta a quien ya está sensibilizado.' },
          { t: 'Níquel, el alérgeno más frecuente del mundo', d: 'Bisutería, hebillas, botones de jeans',
            say: 'El alérgeno clásico de examen es el níquel, el sensibilizante cutáneo más frecuente del mundo: joyas de fantasía, hebillas de cinturón, y botones metálicos de jeans.' },
          { t: 'Cromo, en el cemento húmedo', d: 'Típico en trabajadores de la construcción',
            say: 'El otro alérgeno clásico es el dicromato de potasio, o cromo, presente en el cemento húmedo, y típico en trabajadores de la construcción.' },
        ] },
        { title: 'Clínica y confirmación', tag: 'Sobrepasa el contacto', kind: 'alert', items: [
          { t: 'Prurito intenso, cardinal', d: 'Vesículas que sobrepasan el área de contacto',
            say: 'La clínica es un prurito intenso, cardinal, con lesiones eccematosas exudativas y vesículas agudas que tienden a extenderse más allá de los límites físicos del contacto. Esa es justamente la diferencia clave con la irritativa. Mira este dorso de mano: placas rojas con descamación y costras, que se extienden más allá del sitio exacto del contacto. Y en esta palma, el mismo eccema con fisuras y escamas.',
            photos: [{ src: 'biblioteca/11_dermatologia/derma-07/01_eccema-de-contacto__cto-derma_p43.jpg', label: 'Eccema de contacto', at: 'Mira este dorso', credit: 'Manual CTO Dermatología 14.ª ed., p. 43' }, { src: 'biblioteca/11_dermatologia/derma-07/01_eccema-de-contacto_alt1__amir-derma_p93.jpg', label: 'Eccema palmar', at: 'Y en esta palma', credit: 'Manual AMIR Dermatología, p. 93' }] },
          { t: 'Pruebas del parche, lectura a las 48 y a las 96 horas', d: 'Positivas en la alérgica',
            say: 'El diagnóstico de certeza son las pruebas epicutáneas del parche, con dos lecturas: una a las cuarenta y ocho horas, al retirar los parches, y otra a las noventa y seis horas, donde la reacción alérgica persiste o aumenta, mientras que la irritativa se desvanece. El tratamiento es evitar el alérgeno más corticoide tópico de mediana o alta potencia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'El eccema del lactante',
      title: 'Dermatitis del pañal',
      cards: [
        { title: 'Irritativa, la más frecuente', tag: 'Pico a los 9 a 12 meses', kind: 'key', items: [
          { t: 'Orina, deposiciones y oclusión', d: 'Daño del estrato córneo y fricción',
            say: 'La dermatitis del pañal es la dermatosis más frecuente del lactante, con un pico entre los nueve y los doce meses. Es una dermatitis de contacto irritativa: la oclusión, la humedad, la orina y las deposiciones dañan el estrato córneo.' },
          { t: 'Convexidades sí, fondo del pliegue no', d: 'Nalgas, muslos internos y bajo vientre',
            say: 'La clave clínica es que el eritema, las pápulas y las erosiones se ubican en las zonas convexas, nalgas, muslos internos y bajo vientre, y respetan el fondo de los pliegues.' },
        ] },
        { title: 'Cuando hay Candida', tag: 'Cambia el tratamiento', kind: 'alert', items: [
          { t: 'Eritema intenso en los pliegues', d: 'Pápulas y pústulas satélites, collarete',
            say: 'Si el cuadro dura más de tres días, hay uso de antibióticos o diarrea, piensa en Candida albicans: eritema rojo intenso que compromete los pliegues, con pápulas y pústulas satélites y un collarete descamativo.' },
          { t: 'Diferenciales: seborreica, psoriasis, zinc', d: 'Histiocitosis, sarna y sífilis congénita',
            say: 'Los diferenciales son la dermatitis seborreica, la psoriasis del pañal, la acrodermatitis enteropática por déficit de zinc, la histiocitosis, el impétigo ampolloso, la escabiosis y la sífilis congénita.' },
        ] },
        { title: 'Tratamiento y prevención', tag: 'Barrera y aire', kind: 'pharma', items: [
          { t: 'Cambio frecuente y barrera de zinc', d: 'Cada 2 a 3 horas; óxido de zinc o vaselina',
            say: 'Cambia el pañal cada dos a tres horas, limpia con agua tibia sin frotar, deja la zona al aire y aplica una barrera de óxido de zinc o vaselina en cada cambio. Sin talco, por el riesgo de aspiración.' },
          { t: 'Hidrocortisona 1% corta; antifúngico si hay Candida', d: 'Nunca corticoides potentes ni asociaciones',
            say: 'Si el eritema es intenso, hidrocortisona al uno por ciento por tres a cinco días. Si hay candidiasis, nistatina, clotrimazol o miconazol por siete a catorce días. Nunca corticoides potentes ni asociaciones de corticoide, antifúngico y antibiótico. Y se deriva si no mejora en una a dos semanas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Piel y luz',
      title: 'Fotodermatosis: cuando la causa es el sol',
      cards: [
        { title: 'La pista clave', tag: 'Zonas expuestas', kind: 'key', items: [
          { t: 'Cara, escote en V, dorso de manos', d: 'Respeta párpados superiores y zonas sombreadas',
            say: 'Las fotodermatosis las dispara la radiación ultravioleta y visible. El signo clave es la distribución en zonas expuestas: cara, escote en V, dorso de manos y antebrazos, respetando las zonas sombreadas, como los párpados superiores, el área bajo el mentón y los pliegues.' },
        ] },
        { title: 'Fototoxicidad versus fotoalergia', tag: 'Dos mecanismos', kind: 'alert', items: [
          { t: 'Fototóxica: quemadura exagerada', d: 'Dosis dependiente, desde la primera exposición',
            say: 'La fototoxicidad no es inmunológica, depende de la dosis y puede aparecer en la primera exposición: parece una quemadura solar exagerada, con eritema, edema y ampollas. Mira esta cara: eritema y edema en la piel expuesta, con el labio superior sombreado y respetado. La causan doxiciclina, amiodarona, tiazidas, quinolonas y AINE, y las plantas con furocumarinas, como el limón o el higo.',
            photo: { src: 'biblioteca/19_dermatologia/derma-07/10_fototoxicidad-facial__fitzpatrick_p869.jpg', label: 'Fototoxicidad facial', at: 'Mira esta cara', credit: "Fitzpatrick's Dermatology in General Medicine, p. 869" } },
          { t: 'Fotoalérgica: eccema que desborda', d: 'Hipersensibilidad tipo IV, requiere sensibilización',
            say: 'La fotoalergia es una hipersensibilidad tipo cuatro que exige sensibilización previa. Es eccematosa y puede desbordar a zonas cubiertas. Los clásicos son los filtros solares y el ketoprofeno tópico.' },
        ] },
        { title: 'Idiopáticas y agravadas por el sol', tag: 'No olvidar', kind: 'criteria', items: [
          { t: 'Erupción polimorfa lumínica', d: 'La más frecuente: mujeres jóvenes en primavera',
            say: 'La erupción polimorfa lumínica es la idiopática más frecuente: pápulas pruriginosas en áreas expuestas, en mujeres jóvenes, tras las primeras exposiciones intensas de primavera o verano, y remite sin cicatriz en una a dos semanas.' },
          { t: 'Lupus, porfiria cutánea tarda, pelagra', d: 'Anti-Ro y porfirinas en orina',
            say: 'Y el sol agrava el lupus, la dermatomiositis, la rosácea, la porfiria cutánea tarda y la pelagra. Si el cuadro sugiere enfermedad de fondo, pides anticuerpos antinucleares, anti-Ro o porfirinas en orina.' },
          { t: 'Suspender, fotoproteger, corticoide tópico', d: 'FPS 50 o más; derivar si no cede en 2 a 4 semanas',
            say: 'La conducta es suspender el fármaco o agente sospechoso, indicar fotoprotección con factor cincuenta o más, ropa y sombrero, evitar el sol entre las diez y las dieciséis horas, y usar corticoide tópico y antihistamínico. Si no cede en dos a cuatro semanas, derivas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol de decisión: de la zona afectada al diagnóstico y su confirmación.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Contacto irritativa vs contacto alérgica vs seborreica',
      head: ['Criterio', 'Contacto irritativa', 'Contacto alérgica', 'Seborreica'],
      rows: [
        { cells: ['Mecanismo', 'Daño tóxico directo, no inmune', 'Hipersensibilidad tipo cuatro', 'Respuesta a la Malassezia'],
          say: 'Repasemos con la tabla. La irritativa es un daño tóxico directo sin mecanismo inmune; la alérgica es una hipersensibilidad celular tipo cuatro; la seborreica es una respuesta anormal a la Malassezia.' },
        { cells: ['Síntoma cardinal', 'Ardor y quemazón', 'Prurito intenso', 'Prurito leve'],
          say: 'El síntoma cardinal: ardor y quemazón en la irritativa, prurito intenso en la alérgica, y prurito solo leve en la seborreica.' },
        { cells: ['Límites de la lesión', 'Confinada al contacto', 'Sobrepasa el contacto', 'Zonas seborreicas'],
          say: 'Los límites de la lesión: la irritativa queda confinada exactamente a la zona de contacto; la alérgica sobrepasa esos límites; y la seborreica se ubica en las zonas seborreicas típicas, como los surcos nasogenianos.' },
        { cells: ['Prueba del parche', 'Negativa', 'Positiva a las 48 y 96 horas', 'No indicada'],
          say: 'Y la prueba del parche: negativa en la irritativa, positiva a las cuarenta y ocho y noventa y seis horas en la alérgica, y no indicada en la seborreica. El error clásico es pedir un patch test en la seborreica, que no lo necesita.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años consulta por lesiones eccematosas muy pruriginosas en el abdomen inferior de 3 semanas de evolución. Al examen se aprecia una placa eritematosa con pequeñas vesículas y excoriaciones por rascado, localizada en la línea media periumbilical inferior, que coincide exactamente con el roce de la hebilla metálica de sus pantalones de mezclilla. Además, refiere que cuando usa aretes de fantasía se le inflaman los lóbulos de las orejas.',
      question: '¿Cuál es la conducta diagnóstica de confirmación?',
      options: [
        { letter: 'A', text: 'Biopsia cutánea urgente' },
        { letter: 'B', text: 'Pruebas epicutáneas del parche con lectura a 48 y 96 horas' },
        { letter: 'C', text: 'Cultivo de secreción cutánea' },
        { letter: 'D', text: 'Examen directo con hidróxido de potasio' },
        { letter: 'E', text: 'Determinación de inmunoglobulina E sérica total' },
      ],
      correct: 'B',
      explanation: 'Placa pruriginosa que sobrepasa la zona de contacto con una hebilla metálica, más el antecedente de reacción a bisutería: dermatitis de contacto alérgica por níquel. La confirmación etiológica es la prueba epicutánea del parche con lectura a las 48 y 96 horas.',
      say: {
        stem: 'Vamos al caso. Mujer de veintiséis años que consulta por lesiones eccematosas muy pruriginosas en el abdomen inferior, de tres semanas de evolución. Al examen hay una placa eritematosa con pequeñas vesículas y excoriaciones, en la línea media periumbilical, coincidiendo exactamente con el roce de la hebilla metálica de sus pantalones. Además, cuenta que se le inflaman los lóbulos de las orejas cuando usa aretes de fantasía.',
        question: '¿Cuál es la conducta diagnóstica de confirmación?',
        options: 'Las opciones: biopsia cutánea urgente, pruebas epicutáneas del parche con lectura a cuarenta y ocho y noventa y seis horas, cultivo de secreción, examen directo con hidróxido de potasio, o inmunoglobulina E sérica total. Piénsalo.',
        answer: 'Es la B. Una placa pruriginosa que sobrepasa la zona exacta de contacto con la hebilla, más el antecedente de reacción a la bisutería, es una dermatitis de contacto alérgica por níquel, el sensibilizante más frecuente del mundo. Como es una hipersensibilidad tipo cuatro, la confirmación de certeza es la prueba epicutánea del parche, con dos lecturas, a las cuarenta y ocho y a las noventa y seis horas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 144',
      stem: 'Una adolescente de 15 años presenta lesiones en ambas orejas, que se extienden hasta el cuello. Tiene antecedente de hacerse piercings hace una semana.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Celulitis' },
        { letter: 'B', text: 'Erisipela' },
        { letter: 'C', text: 'Dermatitis de contacto alérgica' },
        { letter: 'D', text: 'Dermatitis de contacto irritativa' },
        { letter: 'E', text: 'Piodermitis superficial' },
      ],
      correct: 'C',
      explanation: 'Lesión que aparece tras un piercing y se extiende más allá de la zona del aro, hacia el cuello, orienta a una dermatitis de contacto alérgica al níquel del piercing, que sobrepasa el área de contacto. La celulitis no se explica sin tejido celular subcutáneo en la oreja.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Una adolescente de quince años presenta lesiones en ambas orejas, que se extienden hasta el cuello. Tiene el antecedente de haberse hecho piercings hace una semana.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: celulitis, erisipela, dermatitis de contacto alérgica, dermatitis de contacto irritativa, o piodermitis superficial. Piénsalo.',
        answer: 'Es la C, dermatitis de contacto alérgica. La lesión aparece justo después de colocarse un piercing, y se extiende más allá del sitio del aro hacia el cuello, que es exactamente el signo que distingue a la alérgica de la irritativa: sobrepasar la zona de contacto. El alérgeno más probable es el níquel del piercing. La celulitis es poco probable, porque el pabellón auricular casi no tiene tejido celular subcutáneo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 12',
      stem: 'Un niño de 20 días de edad presenta lesiones eritematosas, con descamación en la cabeza y la zona interciliar, con descamación amarilla, de aspecto oleoso. Se ve de buen aspecto y ha subido de peso.',
      question: '¿Cuál es la indicación más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar fórmula con proteína hidrolizada' },
        { letter: 'B', text: 'Crema de betametasona tópica' },
        { letter: 'C', text: 'Crema de clotrimazol tópico' },
        { letter: 'D', text: 'Vaselina tópica' },
        { letter: 'E', text: 'Antibióticos tópicos' },
      ],
      correct: 'D',
      explanation: 'Descamación amarilla y oleosa en cuero cabelludo y zona interciliar en un recién nacido de buen aspecto y con buena curva de peso es dermatitis seborreica del lactante, un cuadro benigno. En niños se prefiere no hacer nada o aplicar vaselina, a diferencia del adulto, donde sí se usan antimicóticos tópicos.',
      say: {
        stem: 'Y una tercera pregunta real, también de julio de dos mil dieciséis. Un recién nacido de veinte días presenta lesiones eritematosas, con descamación en la cabeza y la zona interciliar, de aspecto amarillo y oleoso. Está de buen aspecto y ha subido de peso normalmente.',
        question: '¿Cuál es la indicación más adecuada?',
        options: 'Las opciones: fórmula con proteína hidrolizada, crema de betametasona tópica, crema de clotrimazol tópico, vaselina tópica, o antibióticos tópicos. Piénsalo.',
        answer: 'Es la D, vaselina tópica. Es una dermatitis seborreica del lactante, la costra láctea, un cuadro benigno y autolimitado en un niño que además está sano y sube de peso. En los adultos, por ser causada por un hongo, se usan antimicóticos tópicos e incluso corticoides como segunda línea, pero en los niños se prefiere no hacer nada, o solo aplicar vaselina para ayudar a remover la descamación.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.1.006 · Dermatitis seborreica infantil y del adulto",
      "stem": "Hombre de 40 años consulta por descamación y enrojecimiento facial de 1 año, que empeora en invierno y en períodos de estrés. Al examen hay placas eritematosas mal delimitadas cubiertas por escamas amarillentas de aspecto oleoso en los surcos nasogenianos, las cejas y la región retroauricular, además de caspa en el cuero cabelludo.",
      "question": "¿Cuál es el tratamiento de primera línea más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Terbinafina oral por 6 semanas"
        },
        {
          "letter": "B",
          "text": "Isotretinoína oral"
        },
        {
          "letter": "C",
          "text": "Ketoconazol al 2% tópico en crema y champú"
        },
        {
          "letter": "D",
          "text": "Prednisona oral en dosis bajas por 1 mes"
        },
        {
          "letter": "E",
          "text": "Peróxido de benzoílo en gel"
        }
      ],
      "correct": "C",
      "explanation": "Escamas amarillentas oleosas en zonas seborreicas, como surcos nasogenianos, cejas, retroauricular y cuero cabelludo, con brotes por frío y estrés, son una dermatitis seborreica del adulto. La base del tratamiento son los antifúngicos tópicos contra Malassezia, como ketoconazol en crema y champú; los corticoides tópicos de baja potencia solo en ciclos cortos.",
      "say": {
        "stem": "Hombre de cuarenta años con un año de descamación y enrojecimiento de la cara, que empeora en invierno y con estrés. Tiene placas rojas mal delimitadas, con escamas amarillentas y grasosas, en los surcos nasogenianos, las cejas y detrás de las orejas, además de caspa.",
        "question": "¿Cuál es el tratamiento de primera línea más adecuado?",
        "options": "Las opciones: terbinafina oral, isotretinoína oral, ketoconazol tópico en crema y champú, prednisona oral o peróxido de benzoílo. Piénsalo.",
        "answer": "Es la C. Es una dermatitis seborreica, ligada a la levadura Malassezia, y se controla con antifúngicos tópicos como el ketoconazol. La terbinafina oral tienta por ser antifúngico, pero no hay ninguna indicación de tratamiento sistémico en un cuadro crónico y superficial como este."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.1.005 · Dermatitis del pañal",
      "stem": "Lactante de 7 meses con eritema en la zona del pañal de 10 días que no mejoró con pasta de óxido de zinc. Al examen hay eritema rojo intenso, brillante, que compromete los pliegues inguinales, con pápulas y pústulas satélites en la periferia.",
      "question": "¿Cuál es el diagnóstico y tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Dermatitis irritativa del pañal; corticoide de alta potencia"
        },
        {
          "letter": "B",
          "text": "Psoriasis del pañal; calcipotriol"
        },
        {
          "letter": "C",
          "text": "Dermatitis del pañal sobreinfectada por Candida; antifúngico tópico (clotrimazol o nistatina) y medidas de cuidado del pañal"
        },
        {
          "letter": "D",
          "text": "Impétigo; cefadroxilo oral"
        },
        {
          "letter": "E",
          "text": "Dermatitis seborreica; ketoconazol oral"
        }
      ],
      "correct": "C",
      "explanation": "La dermatitis irritativa del pañal respeta los pliegues. El compromiso de pliegues con eritema intenso y lesiones satélites indica sobreinfección por Candida, frecuente tras más de 3 días de evolución. Se trata con antifúngico tópico, cambios frecuentes, aseo suave y pasta barrera. Los corticoides potentes están contraindicados en esta zona.",
      "say": {
        "stem": "Lactante de siete meses con dermatitis del pañal de diez días que no mejora con pasta de zinc, con eritema intenso que toma los pliegues y lesiones satélites.",
        "question": "¿Cuál es el diagnóstico y tratamiento?",
        "options": "Las opciones: dermatitis irritativa con corticoide potente, psoriasis, candidiasis del pañal con antifúngico tópico, impétigo o dermatitis seborreica con ketoconazol oral. Piénsalo.",
        "answer": "Es la C. El compromiso de pliegues con lesiones satélites indica cándida y se trata con antifúngico tópico. La dermatitis irritativa tienta por ser la más común, pero respeta los pliegues, y el corticoide potente no se usa en el pañal."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 115",
      "stem": "Paciente de 25 años consulta por lesiones en las extremidades inferiores. Refiere que ayer estuvo jugando fútbol al aire libre y que las lesiones empezaron a aparecer después. Hace 1 año le pasó algo similar luego de andar en moto por los cerros. Al examen físico se observan, en ambos muslos y piernas, múltiples lesiones eritemato-violáceas, muchas con disposición lineal.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Fitodermatitis"
        },
        {
          "letter": "B",
          "text": "Enfermedad ampollar"
        },
        {
          "letter": "C",
          "text": "Urticaria solar"
        },
        {
          "letter": "D",
          "text": "Lupus discoide"
        },
        {
          "letter": "E",
          "text": "Vasculitis leucocitoclástica"
        }
      ],
      "correct": "A",
      "explanation": "Lesiones eritematosas o hiperpigmentadas de disposición lineal o caprichosa en zonas expuestas, tras contacto con plantas al aire libre y exposición solar, son una fitofotodermatitis (furocumarinas más luz UV). Se maneja con evitar el contacto, fotoprotección y corticoide tópico. La urticaria solar da habones fugaces minutos después del sol.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Joven de veinticinco años con lesiones eritemato-violáceas lineales en las piernas tras jugar fútbol al aire libre, y un episodio similar después de andar en moto por los cerros.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: fitodermatitis, enfermedad ampollar, urticaria solar, lupus discoide o vasculitis leucocitoclástica. Piénsalo.",
        "answer": "Es la A. Las lesiones lineales tras el contacto con plantas y sol son una fitofotodermatitis. La urticaria solar tienta por la relación con el sol, pero da ronchas que duran minutos, no lesiones lineales persistentes."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta que ordena todo', tag: 'Endógena o de contacto', kind: 'key', items: [
          { t: 'Zonas seborreicas: piensa en Malassezia', d: 'Zona de contacto: piensa en irritante o alérgeno',
            say: 'Cerremos con las reglas de oro. Si la lesión está en zonas seborreicas, piensa en la Malassezia. Si está donde hubo contacto con algo, piensa en irritante o en alérgeno.' },
          { t: 'Pañal: convexidades; pliegues y satélites, Candida', d: 'Fotodermatosis: zonas expuestas, respeta lo sombreado',
            say: 'En el lactante, el eritema del pañal respeta el fondo del pliegue; si lo compromete y hay pústulas satélites, es Candida. Y si la lesión está solo en zonas expuestas al sol y respeta lo sombreado, piensa en una fotodermatosis.' },
        ] },
        { title: 'La diferencia entre las dos de contacto', tag: 'Ardor vs prurito', kind: 'criteria', items: [
          { t: 'Confinada y con ardor: irritativa', d: 'Sobrepasa el contacto y pica mucho: alérgica',
            say: 'Entre las dos dermatitis de contacto, la irritativa queda confinada a la zona exacta y arde; la alérgica sobrepasa esa zona y pica intensamente, y se confirma con el patch test.' },
        ] },
        { title: 'La bandera roja que no se olvida', tag: 'Seborreica severa en adulto joven', kind: 'alert', items: [
          { t: 'Refractaria y explosiva: pedir VIH', d: 'Marcador clínico centinela',
            say: 'Y si ves una dermatitis seborreica severa, extensa y refractaria en un adulto joven, es una bandera roja para pedir el test de VIH. Si te llevas una sola idea de hoy: mira dónde está la lesión, y si sobrepasa el contacto, es alérgica. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Eccemas: de la localización al diagnóstico confirmado',
    root: N(
      'start', 'Placas eritematoescamosas o eccematosas', 'Primero, ¿dónde están las lesiones?',
      'Frente a un eccema, la primera pregunta es dónde están las lesiones: en zonas seborreicas, o en una zona de contacto con algo externo.',
      ['', N(
        'q', '¿Zonas seborreicas o zona de contacto?', 'Surcos, cejas y cuero cabelludo vs área expuesta',
        'Las zonas seborreicas orientan a la Malassezia; una zona de contacto exacto orienta a un irritante o un alérgeno.',
        ['Surcos nasogenianos, cejas, cuero cabelludo', N(
          'do', 'Dermatitis seborreica', 'Champú con ketoconazol más corticoide suave',
          'Escamas grasosas y amarillentas en zonas seborreicas: champú antifúngico con ketoconazol, más corticoide tópico de baja potencia en ciclos cortos.',
        )],
        ['Zona de contacto con una sustancia', N(
          'q', '¿La lesión sobrepasa el área de contacto?', 'No, queda confinada vs sí, se extiende',
          'Con una lesión en zona de contacto, hay que preguntar si se queda exactamente donde tocó la sustancia, o si se extiende más allá.',
          ['No, confinada, con ardor', N(
            'do', 'Dermatitis de contacto irritativa', 'Evitar el irritante, cremas barrera',
            'Lesión confinada al área de contacto, con ardor más que prurito, y patch test negativo: dermatitis de contacto irritativa. Se evita el irritante y se usan cremas barrera.',
          )],
          ['Sí, sobrepasa, con prurito intenso', N(
            'do', 'Dermatitis de contacto alérgica', 'Patch test, evitar el alérgeno, corticoide tópico',
            'Lesión que sobrepasa el área de contacto, con prurito intenso: dermatitis de contacto alérgica. Se confirma con la prueba del parche, con lectura a las cuarenta y ocho y a las noventa y seis horas, y se trata evitando el alérgeno más corticoide tópico.',
          )],
        )],
      )],
    ),
  },
};
