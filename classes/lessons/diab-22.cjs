// Clase 5.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-22',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Monofilamento, Wagner y estilete óseo: qué se maneja en APS y qué se hospitaliza',
      say: 'Bienvenidos. Después de la retina bajamos al pie. El pie diabético es una de las complicaciones más costosas y discapacitantes de toda la medicina, y en el examen es de frecuencia máxima. Se pregunta con cuatro herramientas: el monofilamento de diez gramos, la clasificación de Wagner, la prueba del estilete óseo, y los criterios para hospitalizar. Al final de la clase vas a poder mirar una úlcera y decidir dónde se trata.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Tres componentes y un traumatismo',
      nodes: [
        { id: 'neu', col: 0, row: 0, k: 'cause', t: 'Neuropatía', s: 'Más del 80 % de los casos' },
        { id: 'isq', col: 0, row: 2, k: 'cause', t: 'Enfermedad arterial periférica', s: 'Isquemia infragenicular' },
        { id: 'tra', col: 1, row: 1, k: 'mech', t: 'Traumatismo desencadenante', s: 'Calzado, roce, cuerpo extraño' },
        { id: 'ulc', col: 2, row: 1, k: 'effect', t: 'Úlcera', s: 'Que no se siente y cicatriza mal' },
        { id: 'inf', col: 3, row: 1, k: 'risk', t: 'Infección', s: 'Absceso, osteomielitis' },
        { id: 'amp', col: 4, row: 1, k: 'alert', t: 'Gangrena y amputación', s: 'El desenlace que se quiere evitar' },
      ],
      edges: [
        { from: 'neu', to: 'tra', label: 'no lo siente' }, { from: 'isq', to: 'ulc', label: 'no cicatriza' },
        { from: 'tra', to: 'ulc' }, { from: 'ulc', to: 'inf' }, { from: 'inf', to: 'amp' },
      ],
      steps: [
        { show: ['neu'], note: 'El componente principal',
          say: 'Partamos por entender por qué se ulcera un pie diabético. El componente principal, en más del ochenta por ciento de los casos, es la neuropatía. El paciente pierde la sensibilidad protectora: ya no siente el roce, el calor ni la piedra en el zapato.' },
        { show: ['tra', 'ulc'], note: 'Sin dolor, el daño sigue',
          say: 'Entonces aparece el gatillo: un calzado inadecuado, un roce repetido o un cuerpo extraño. En una persona sana, el dolor obliga a sacarse el zapato. En este paciente, el daño sigue sin aviso, y se forma una ampolla, un callo fisurado o una úlcera.' },
        { show: ['isq'], note: 'La isquemia impide cicatrizar',
          say: 'El segundo componente es la enfermedad arterial periférica. La diabetes acelera la ateroesclerosis, sobre todo bajo la rodilla, en las tibiales y la peronea. Un pie mal irrigado no cicatriza.' },
        { show: ['inf', 'amp'], note: 'La úlcera se infecta y progresa',
          say: 'Y sobre una úlcera que no se siente y no cicatriza, llega la infección: absceso, osteomielitis, y finalmente gangrena. Esa es la cadena que termina en amputación, y todo lo que veremos hoy busca cortarla lo antes posible.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Los componentes',
      title: 'Qué hace cada componente en el pie',
      cards: [
        { title: 'Neuropatía', tag: 'Tres tipos de fibra', kind: 'key', items: [
          { t: 'Sensitiva', d: 'Pierde sensibilidad térmica, dolorosa y táctil protectora',
            say: 'La neuropatía afecta tres tipos de fibra, y cada una deja su huella. La sensitiva quita la sensibilidad térmica, dolorosa y táctil protectora frente a roces y cuerpos extraños.' },
          { t: 'Motora', d: 'Dedos en garra o martillo, cabezas metatarsianas prominentes',
            say: 'La motora atrofia la musculatura intrínseca del pie. El arco anterior colapsa, aparecen los dedos en garra o en martillo, y las cabezas de los metatarsianos quedan prominentes: nuevos puntos de apoyo y presión. Mira este pie: los dedos en garra y las cabezas de los metatarsianos prominentes crean puntos de presión nuevos.',
          photos: [{ src: 'biblioteca/04_diabetes/diab-22/06_pie-neuropatico__openi.jpg', label: 'Pie neuropático en garra', at: 'Mira este pie', credit: 'Open-i (NLM), CC BY' }] },
          { t: 'Autonómica', d: 'Anhidrosis: piel seca e hiperqueratósica',
            say: 'Y la autonómica quita el sudor. La piel queda seca, escamosa y con hiperqueratosis, y se fisura con facilidad: otra puerta de entrada.' },
        ] },
        { title: 'Isquemia', tag: 'Arteriopatía distal', kind: 'alert', items: [
          { t: 'Pulsos distales ausentes', d: 'Palidez al elevar, rubor al declive',
            say: 'La isquemia se reconoce al examen: pulsos distales ausentes, palidez al elevar la pierna y rubor cuando cuelga. Y una cicatrización que se retrasa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje anual en APS',
      title: 'El examen del pie en el control cardiovascular',
      cards: [
        { title: 'Monofilamento de 10 g', tag: 'Estándar', kind: 'criteria', items: [
          { t: 'Semmes-Weinstein 5.07', d: '10 gramos de fuerza',
            say: 'Como la neuropatía es silenciosa, se busca una vez al año en el control de salud cardiovascular. El examen estándar es el monofilamento de Semmes-Weinstein cinco coma cero siete, que ejerce diez gramos de fuerza. Ese dato se pregunta tal cual.' },
          { t: 'Pulpejos 1.º, 3.º y 5.º y cabezas metatarsianas', d: 'Perpendicular, hasta curvarlo, 1 a 2 segundos',
            say: 'Se apoya perpendicular a la piel, en el pulpejo del primer, tercer y quinto dedo y en las cabezas de los metatarsianos, hasta que el filamento se curve, durante uno a dos segundos.' },
          { t: 'Un punto no percibido', d: 'Pie de alto riesgo de ulceración',
            say: 'Y basta con que no perciba uno solo de esos puntos para que el pie sea de alto riesgo de ulceración. Así se aplica: el monofilamento de diez gramos se apoya en la planta hasta que se dobla.',
          photos: [{ src: 'biblioteca/04_diabetes/diab-22/07_monofilamento.jpg', label: 'Monofilamento de 10 g', at: 'Así se aplica', credit: 'Atlas EUNACOM 2026' }] },
        ] },
        { title: 'Complementos', tag: 'Vibración y pulsos', kind: 'normal', items: [
          { t: 'Diapasón de 128 Hz', d: 'Sensibilidad vibratoria en el hallux',
            say: 'Se complementa con el diapasón de ciento veintiocho hertz en el ortejo mayor, que mide la sensibilidad vibratoria.' },
          { t: 'Pulsos pedio y tibial posterior', d: 'Si faltan: índice tobillo-brazo',
            say: 'Y se palpan los pulsos pedio y tibial posterior. Si están ausentes o disminuidos, se calcula el índice tobillo-brazo. Lo normal es entre cero coma nueve y uno coma tres; bajo cero coma nueve confirma enfermedad arterial periférica.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Úlcera neuropática vs úlcera isquémica',
      head: ['Característica', 'Neuropática', 'Isquémica'],
      rows: [
        { cells: ['Ubicación', 'Zonas de apoyo: cabeza del 1.er metatarsiano, talón', 'Zonas distales: pulpejos, bordes de los dedos'],
          say: 'Con esos componentes puedes separar las dos úlceras clásicas. La neuropática aparece donde se apoya el pie: la cabeza del primer metatarsiano o el talón. La isquémica, en lo más distal, donde llega menos sangre: pulpejos y bordes de los dedos. Mira esta úlcera neuropática: está justo en la zona de apoyo, bajo los metatarsianos.',
          photos: [{ src: 'biblioteca/04_diabetes/diab-22/01_ulcera-necrosis-pie-diabetico_2__cto-endocrino_p114.jpg', label: 'Úlcera neuropática', at: 'Mira esta úlcera neuropática', credit: 'Manual CTO Endocrinología 14.ª ed., p. 114' }] },
        { cells: ['Aspecto', 'Rodete grueso de hiperqueratosis', 'Bordes excavados, pálidos, lecho necrótico'],
          say: 'La neuropática está rodeada de un rodete grueso de callo. La isquémica tiene bordes excavados y pálidos, con un lecho necrótico o cianótico. En cambio, esta úlcera isquémica está en la punta del dedo, con el lecho pálido y sin callo.',
          photos: [{ src: 'biblioteca/04_diabetes/diab-22/04_ulcera-isquemica__talley_p142.jpg', label: 'Úlcera isquémica distal', at: 'En cambio, esta úlcera isquémica', credit: 'Talley and O\'Connor, Clinical Examination, p. 142' }] },
        { cells: ['Dolor', 'Indolora', 'Muy dolorosa, peor al elevar'],
          say: 'La diferencia más útil es el dolor. La neuropática es indolora, porque el pie está denervado. La isquémica duele mucho, y más al elevar la pierna.' },
        { cells: ['Temperatura y pulsos', 'Pie tibio, pulsos presentes', 'Pie frío, pulsos ausentes'],
          say: 'La neuropática tiene el pie tibio y los pulsos presentes. La isquémica, un pie frío, pálido al elevar, y pulsos ausentes o muy disminuidos.' },
        { cells: ['Reflejo aquiliano', 'Abolido', 'Conservado si no hay neuropatía'],
          say: 'Y el reflejo aquiliano está abolido en la neuropática, y conservado en la isquémica pura. Por eso a esta úlcera indolora en la planta se le llama mal perforante plantar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Isquemia crónica',
      title: 'El pie isquémico: clínica y manejo inicial',
      cards: [
        { title: 'Clínica', tag: 'Arterias infrapoplíteas', kind: 'key', items: [
          { t: 'Claudicación y dolor de reposo nocturno', d: 'Alivia con la pierna colgando',
            say: 'Profundicemos en el pie isquémico. En el diabético se compromete sobre todo las arterias bajo la rodilla, las tibiales y peroneas, con calcificación de la capa media. Clínicamente hay claudicación intermitente de pantorrilla y dolor de reposo nocturno, que alivia al dejar la pierna colgando.' },
          { t: 'Pulsos ausentes, piel fría y atrófica', d: 'Relleno capilar > 3 segundos',
            say: 'Los pulsos pedio y tibial posterior están disminuidos o ausentes, la piel está fría, pálida y atrófica, sin vello, y el relleno capilar se demora más de tres segundos.' },
          { t: 'Fontaine III y IV: isquemia crítica', d: 'Dolor de reposo, lesiones tróficas, gangrena',
            say: 'La clasificación de Fontaine va de uno, asintomático, a cuatro, con lesiones tróficas o gangrena. Los estadios tres y cuatro son isquemia crítica.' },
        ] },
        { title: 'Manejo inicial', tag: 'Nivel inicial', kind: 'criteria', items: [
          { t: 'Tabaco, estatina alta, aspirina 100 mg', d: 'PA, glicemia y ejercicio supervisado',
            say: 'El manejo inicial: suspender el tabaco, estatina de alta intensidad, aspirina de cien miligramos, control de presión y de glicemia, y ejercicio supervisado.' },
          { t: 'Isquemia crítica o sin cicatrizar: cirugía vascular', d: 'Urgente; revascularizar',
            say: 'Ante isquemia crítica, o una úlcera que no cicatriza, se deriva de urgencia a cirugía vascular para revascularizar, con angioplastia o bypass.' },
        ] },
        { title: 'La trampa', tag: 'Ojo', kind: 'alert', items: [
          { t: 'No desbridar agresivo ni amputar a ciegas', d: 'Primero evaluar la perfusión',
            say: 'Una úlcera isquémica no se desbrida agresivamente ni se amputa sin evaluar la perfusión. Y la combinación de isquemia con infección es una urgencia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Exámenes',
      title: 'Índice tobillo-brazo y estudio vascular',
      cards: [
        { title: 'Índice tobillo-brazo', tag: 'Doppler manual', kind: 'key', items: [
          { t: 'Presión del tobillo ÷ presión braquial', d: 'La sistólica más alta de cada sitio',
            say: 'El índice tobillo-brazo se mide con Doppler manual. Es la presión sistólica más alta del tobillo, en la pedia o la tibial posterior, dividida por la presión sistólica más alta del brazo. Mira cómo se mide: un manguito y un Doppler manual sobre la arteria del tobillo.',
          photos: [{ src: 'biblioteca/04_diabetes/diab-22/03_indice-tobillo-brazo-doppler__bailey_p966.jpg', label: 'Índice tobillo-brazo', at: 'Mira cómo se mide', credit: 'Bailey & Love\'s Short Practice of Surgery, 27.ª ed., p. 966' }] },
          { t: 'Normal 0,9 a 1,3', d: '< 0,9 EAP · < 0,4–0,5 isquemia severa',
            say: 'Normal es de cero coma nueve a uno coma tres. Bajo cero coma nueve indica enfermedad arterial periférica, y bajo cero coma cuatro a cero coma cinco, isquemia severa.' },
          { t: 'ITB > 1,3 es falsamente normal', d: 'Calcificación: usar índice dedo-brazo',
            say: 'La trampa del diabético: un índice sobre uno coma tres es falsamente normal, porque la calcificación vuelve incompresibles las arterias. Ahí se recurre al índice dedo-brazo.' },
        ] },
        { title: 'Imágenes', tag: 'Informe', kind: 'criteria', items: [
          { t: 'Eco-Doppler: localiza la estenosis', d: 'Onda trifásica normal, monofásica si estenosis',
            say: 'El eco-Doppler vascular informa dónde está la estenosis u oclusión y el tipo de onda: trifásica es normal, monofásica indica una estenosis significativa.' },
          { t: 'Arteriografía la pide el cirujano', d: 'Contraste: hidratar, VFG, suspender metformina 48 h',
            say: 'La arteriografía, sea por sustracción digital, angio-TAC o angio-resonancia, la solicita el cirujano vascular cuando planifica revascularizar. Tú debes entender el informe: nivel de la oclusión, flujo distal y si es candidato a angioplastia o bypass. Y recordar que el contraste exige hidratación, revisar la filtración y suspender la metformina cuarenta y ocho horas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación de Wagner',
      title: 'Wagner: la profundidad decide la conducta',
      nodes: [
        { id: 'w0', col: 0, row: 0, k: 'good', t: 'Grado 0', s: 'Pie de riesgo, sin úlcera' },
        { id: 'w1', col: 1, row: 0, k: 'effect', t: 'Grado 1', s: 'Úlcera superficial' },
        { id: 'w2', col: 2, row: 0, k: 'effect', t: 'Grado 2', s: 'Expone tendón o cápsula' },
        { id: 'w3', col: 2, row: 2, k: 'alert', t: 'Grado 3', s: 'Absceso u osteomielitis' },
        { id: 'w4', col: 3, row: 2, k: 'alert', t: 'Grado 4', s: 'Gangrena localizada' },
        { id: 'w5', col: 4, row: 2, k: 'alert', t: 'Grado 5', s: 'Gangrena de todo el pie' },
        { id: 'amb', col: 4, row: 0, k: 'start', t: 'Grados 0 a 2', s: 'Manejo ambulatorio' },
        { id: 'hos', col: 4, row: 4, k: 'refer', t: 'Grados 3 a 5', s: 'Hospitalizar' },
      ],
      edges: [
        { from: 'w0', to: 'w1' }, { from: 'w1', to: 'w2' }, { from: 'w2', to: 'w3', label: 'se infecta a fondo' },
        { from: 'w3', to: 'w4' }, { from: 'w4', to: 'w5' },
        { from: 'w2', to: 'amb' }, { from: 'w5', to: 'hos' },
      ],
      steps: [
        { show: ['w0'], note: 'Aún no hay úlcera',
          say: 'Ahora la escala que el examen pide de memoria: Wagner, del cero al cinco. El grado cero es el pie de riesgo, sin úlcera activa: callos gruesos, dedos en garra o un pie de Charcot. La conducta es educación, calzado terapéutico amplio y podología.' },
        { show: ['w1'], note: 'Todo el espesor de la piel, nada más',
          say: 'El grado uno es la úlcera superficial: compromete todo el espesor de la piel, pero no llega a tendón, cápsula ni hueso. Es el mal perforante plantar típico. Se maneja con curación avanzada y descarga estricta. Esta lámina muestra los grados de Wagner, de la úlcera superficial a la gangrena.',
          photos: [{ src: 'biblioteca/04_diabetes/diab-22/02_clasificacion-de-wagner__cto-endocrino_p113.jpg', label: 'Clasificación de Wagner', at: 'Esta lámina', credit: 'Manual CTO Endocrinología 14.ª ed., p. 113' }] },
        { show: ['w2'], note: 'Se ve tendón, ligamento o cápsula',
          say: 'El grado dos es más profundo: expone tendón, ligamento o cápsula articular, pero sin absceso y sin hueso. Desbridamiento en curación avanzada y evaluación por un equipo multiprofesional.' },
        { show: ['amb'], note: 'Hasta aquí, ambulatorio',
          say: 'Fíjate en el corte: del cero al dos, el manejo es ambulatorio, en atención primaria o con especialidad.' },
        { show: ['w3'], note: 'El salto: infección profunda',
          say: 'El grado tres es el que más se pregunta: úlcera profunda con absceso, osteomielitis o artritis séptica. La conducta es hospitalización obligatoria, aseo quirúrgico amplio y antibióticos endovenosos prolongados.' },
        { show: ['w4', 'w5'], note: 'Gangrena: localizada o extensa',
          say: 'El grado cuatro es la gangrena localizada, en un dedo, el talón o el antepié: hospitalización urgente, antibióticos, estudio vascular y revascularización o amputación menor. El grado cinco es la gangrena de todo el pie con repercusión sistémica: amputación mayor, bajo o sobre la rodilla.' },
        { show: ['hos'], note: 'Del tres al cinco, hospital',
          say: 'Y el otro corte: del tres al cinco, siempre se hospitaliza. Si recuerdas solo esa frontera, ya respondes la mitad de las preguntas del tema.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Osteomielitis',
      title: 'La prueba del estilete óseo',
      nodes: [
        { id: 'ulc', col: 0, row: 1, k: 'start', t: 'Úlcera profunda o tórpida', s: 'Que no mejora' },
        { id: 'est', col: 1, row: 1, k: 'q', t: 'Estilete estéril de punta roma', s: '¿Toca hueso?' },
        { id: 'pos', col: 2, row: 0, k: 'alert', t: 'Superficie dura y rugosa', s: 'Probe-to-bone positivo' },
        { id: 'ost', col: 3, row: 0, k: 'risk', t: 'Osteomielitis', s: 'VPP mayor al 90 %' },
        { id: 'img', col: 3, row: 2, k: 'good', t: 'Radiografía o resonancia', s: 'RM en casos precoces' },
        { id: 'w3', col: 4, row: 1, k: 'refer', t: 'Wagner 3: hospitalizar', s: 'Aseo quirúrgico + antibióticos EV' },
      ],
      edges: [
        { from: 'ulc', to: 'est' }, { from: 'est', to: 'pos', label: 'sí' }, { from: 'pos', to: 'ost' },
        { from: 'ost', to: 'img' }, { from: 'ost', to: 'w3' },
      ],
      steps: [
        { show: ['ulc', 'est'], note: 'Un examen de consulta, sin tecnología',
          say: '¿Y cómo sabes si una úlcera ya llegó al hueso? Con un examen que se hace en la misma consulta. En toda úlcera profunda o de evolución tórpida, introduces suavemente un estilete metálico estéril, de punta roma, hasta el fondo de la lesión.' },
        { show: ['pos', 'ost'], note: 'Tocar hueso es tener osteomielitis',
          say: 'Si el estilete choca con una superficie dura, rugosa, como piedra, la prueba es positiva, y confirma una osteomielitis con un valor predictivo positivo mayor al noventa por ciento.' },
        { show: ['img'], note: 'La radiografía llega tarde',
          say: 'Luego se pide una radiografía simple del pie. Pero ojo, la resorción cortical y la lisis ósea son tardías; en los casos precoces, la resonancia magnética es más útil. En esta resonancia el hueso bajo la úlcera cambia de señal: es la osteomielitis.',
          photos: [{ src: 'biblioteca/04_diabetes/diab-22/05_osteomielitis__ctmri_p522.jpg', label: 'Osteomielitis en resonancia', at: 'En esta resonancia', credit: 'CT & MRI Pathology: A Pocket Atlas, p. 522' }] },
        { show: ['w3'], note: 'El estilete sube el grado',
          say: 'Y lo más importante: una úlcera que parecía superficial, con estilete positivo, pasa automáticamente a Wagner tres. Eso significa hospitalizar, aseo quirúrgico y antibióticos endovenosos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Los pilares del manejo local',
      cards: [
        { title: 'Descarga', tag: 'Off-loading', kind: 'key', items: [
          { t: 'Sin descarga, ninguna úlcera cicatriza', d: 'Reposo, férula de contacto total, calzado especial',
            say: 'Pasemos al tratamiento. El pilar número uno no es un fármaco: es la descarga de presión. Si el paciente sigue apoyando sobre la úlcera, ninguna curación ni antibiótico la va a cerrar. Se logra con reposo, férula de contacto total o calzado terapéutico.' },
        ] },
        { title: 'Curación avanzada', tag: 'Ambiente húmedo', kind: 'normal', items: [
          { t: 'Retirar esfacelo y necrosis', d: 'Mantener un ambiente húmedo fisiológico',
            say: 'El segundo pilar es la curación avanzada: retirar el tejido esfacelado o necrótico, y mantener un ambiente húmedo fisiológico que permita cicatrizar.' },
        ] },
        { title: 'Lo que el examen castiga', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Cultivo de tejido profundo', d: 'Nunca hisopado superficial',
            say: 'Dos detalles que el examen castiga. El cultivo no se toma con hisopado de la superficie, que solo recoge colonizantes: se toma de tejido profundo o de biopsia ósea en pabellón.' },
          { t: 'Gangrena: estudiar la irrigación', d: 'Eco-Doppler o AngioTAC antes de resecar',
            say: 'Y en la gangrena localizada, antes de cualquier resección, hay que estudiar la irrigación distal con eco-Doppler o angioTAC. Si amputas sin saber si llega sangre, el muñón no va a cicatrizar. Este pie perdió el primer dedo por una necrosis isquémica, y por eso antes de amputar se estudia la irrigación.',
          photos: [{ src: 'biblioteca/04_diabetes/diab-22/01_ulcera-necrosis-pie-diabetico_1__cto-endocrino_p114.jpg', label: 'Necrosis isquémica', at: 'Este pie perdió', credit: 'Manual CTO Endocrinología 14.ª ed., p. 114' }] },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Antibióticos',
      title: 'Esquema escalonado según la gravedad',
      cards: [
        { title: 'Leve', tag: 'Oral, ambulatorio', kind: 'pharma', items: [
          { t: 'Celulitis menor de 2 cm, superficial', d: 'S. aureus y estreptococo',
            say: 'El antibiótico se escala según la gravedad, y la lógica es la flora. En la infección leve, superficial, con celulitis de menos de dos centímetros, los gérmenes son Staphylococcus aureus y estreptococo.' },
          { t: 'Cefadroxilo o cloxacilina VO', d: '7 a 14 días',
            say: 'Se tratan por vía oral, en forma ambulatoria, con cefadroxilo o cloxacilina, por siete a catorce días. El libro menciona también clindamicina o amoxicilina con ácido clavulánico.' },
        ] },
        { title: 'Moderada', tag: 'Oral', kind: 'pharma', items: [
          { t: 'Celulitis mayor de 2 cm o absceso local', d: 'Polimicrobiana',
            say: 'En la moderada, con celulitis de más de dos centímetros o un absceso local, la flora ya es polimicrobiana: grampositivos, gramnegativos y anaerobios.' },
          { t: 'Amoxicilina-clavulánico o ciprofloxacino + clindamicina', d: '14 a 21 días',
            say: 'Se usa amoxicilina con ácido clavulánico, o ciprofloxacino más clindamicina, por catorce a veintiún días.' },
        ] },
        { title: 'Severa y osteomielitis', tag: 'EV, hospitalizado', kind: 'alert', items: [
          { t: 'Wagner 3 a 5 o compromiso sistémico', d: 'Ceftriaxona + metronidazol EV',
            say: 'En la severa, con compromiso sistémico o Wagner tres a cinco, el paciente se hospitaliza y recibe tratamiento endovenoso: ceftriaxona más metronidazol, o piperacilina con tazobactam.' },
          { t: 'Osteomielitis: según cultivo de biopsia ósea', d: 'Total 4 a 6 semanas',
            say: 'Y si hay osteomielitis comprobada, el esquema se ajusta al cultivo de la biopsia ósea, parte por vía parenteral y dura en total cuatro a seis semanas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Procedimiento',
      title: 'Curación básica del pie diabético',
      nodes: [
        { id: 'lav', col: 0, row: 1, k: 'start', t: '1. Lavar con suero tibio', s: 'Baja presión; sin povidona ni alcohol' },
        { id: 'des', col: 1, row: 1, k: 'alert', t: '2. Retirar tejido no viable', s: 'Y el callo; isquémica: escara seca' },
        { id: 'med', col: 2, row: 1, k: 'mech', t: '3. Secar bordes y medir', s: 'Registrar la úlcera' },
        { id: 'cub', col: 3, row: 1, k: 'good', t: '4. Apósito húmedo', s: 'Vendaje no compresivo' },
        { id: 'rep', col: 4, row: 1, k: 'effect', t: '5. Repetir con descarga', s: 'Diario o cada 48–72 horas' },
      ],
      edges: [
        { from: 'lav', to: 'des' }, { from: 'des', to: 'med' }, { from: 'med', to: 'cub' }, { from: 'cub', to: 'rep' },
      ],
      steps: [
        { show: ['lav'], note: 'Suero fisiológico, nada citotóxico',
          say: 'Ahora el procedimiento que el médico general realiza: la curación básica. Primero se retira el apósito previo y se lava con suero fisiológico tibio, a baja presión. Sin antisépticos citotóxicos como povidona, agua oxigenada o alcohol, que dañan el tejido que quieres cicatrizar.' },
        { show: ['des', 'med'], note: 'Aséptico; la isquémica no se desbrida',
          say: 'Segundo, con técnica aséptica se retira el tejido no viable y los callos que rodean la úlcera neuropática. En una úlcera isquémica sin revascularizar, en cambio, se mantiene la escara seca. Tercero, se secan los bordes y se mide y registra la úlcera.' },
        { show: ['cub', 'rep'], note: 'Húmedo, sin comprimir, con descarga',
          say: 'Cuarto, se cubre con un apósito que mantenga un ambiente húmedo: gasa con vaselina, hidrogel, espuma, o alginato si hay mucho exudado, con vendaje no compresivo. Quinto, se repite a diario o cada cuarenta y ocho a setenta y dos horas según el exudado, siempre con descarga. El cultivo de tejido profundo se toma solo si hay signos clínicos de infección.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Por qué se ulcera un pie diabético',
      images: [
        { src: 'animaciones/diab-22/A1_pie_diabetico.mp4', label: 'Pie diabético', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Neuropatía, isquemia y trauma',
          say: 'El paciente no siente el monofilamento: es la neuropatía, el componente principal. Si además faltan los pulsos, hay isquemia. Un roce o una piedra en el zapato que no se siente basta para formar una úlcera. Y si el estilete toca hueso, es una osteomielitis.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, tal como lo razonas frente a un pie diabético.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Tamizaje anual de neuropatía', 'Monofilamento de 10 g', 'Electromiografía anual'],
          say: 'Repasemos las trampas. El tamizaje anual de la neuropatía es con el monofilamento de diez gramos, en la consulta. No se pide una electromiografía cada año.' },
        { cells: ['Pie de riesgo sin úlcera (Wagner 0)', 'Educación, calzado, podología', 'Derivar a urgencia'],
          say: 'Un pie de riesgo, sin úlcera, es Wagner cero: educación, calzado adecuado y podología. No es una urgencia.' },
        { cells: ['Úlcera superficial (Wagner 1)', 'Descarga + curación avanzada', 'Pomadas o antisépticos'],
          say: 'La úlcera superficial se cierra con descarga y curación avanzada. Las pomadas con antibióticos o los baños antisépticos no reemplazan la descarga.' },
        { cells: ['Estilete toca hueso', 'Wagner 3: hospitalizar', 'Curación ambulatoria'],
          say: 'Si el estilete toca hueso, es Wagner tres aunque la úlcera se vea pequeña: se hospitaliza. Seguir con curaciones ambulatorias es el error clásico.' },
        { cells: ['Gangrena seca de dedos', 'Wagner 4: estudio vascular + amputación menor', 'Amputación mayor de entrada'],
          say: 'Gangrena de uno o dos dedos es Wagner cuatro: estudio vascular, revascularización o amputación menor. La amputación mayor queda para la gangrena de todo el pie, el Wagner cinco.' },
        { cells: ['Cultivo de la úlcera', 'Tejido profundo o biopsia ósea', 'Hisopado superficial'],
          say: 'El cultivo es de tejido profundo o de hueso, nunca de un hisopado superficial.' },
        { cells: ['Pulsos pedios ausentes', 'Índice tobillo-brazo', 'Asumir úlcera neuropática pura'],
          say: 'Y si faltan los pulsos, se mide el índice tobillo-brazo antes de asumir que la úlcera es solo neuropática.' },
        { cells: ['Diabético con ITB de 1,4 y pulsos ausentes', 'Índice dedo-brazo o eco-Doppler', 'Concluir que la perfusión es normal'],
          say: 'Y el índice tobillo-brazo sobre uno coma tres en un diabético con pulsos ausentes no es normal: son arterias calcificadas. Se pide índice dedo-brazo o eco-Doppler.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años, DM2 de 16 años mal controlada, tabáquico. Úlcera plantar de 3 semanas, de 2,5 cm, sobre la cabeza del 1.er metatarsiano, con hiperqueratosis alrededor e indolora. Al explorar el fondo con un estilete estéril, choca con una superficie dura y rugosa. Pie tibio, pulsos pedio y tibial posterior presentes.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Curación avanzada ambulatoria y descarga; control en 1 semana' },
        { letter: 'B', text: 'Cefadroxilo oral por 10 días y curación en APS' },
        { letter: 'C', text: 'Hospitalizar: imagen, desbridamiento con biopsia ósea, descarga y antibióticos EV' },
        { letter: 'D', text: 'Amputación supracondílea de urgencia' },
        { letter: 'E', text: 'Derivar a cirugía vascular para bypass ambulatorio' },
      ],
      correct: 'C',
      explanation: 'Mal perforante plantar neuropático (indoloro, hiperqueratosis, pulsos presentes) con estilete óseo positivo: osteomielitis, Wagner 3. Se hospitaliza para radiografía o resonancia, desbridamiento quirúrgico con biopsia ósea para cultivo, descarga absoluta y antibióticos parenterales prolongados.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y cuatro años, diabético tipo dos hace dieciséis años, mal controlado y fumador. Tiene una úlcera plantar de tres semanas, de dos centímetros y medio, sobre la cabeza del primer metatarsiano, rodeada de callo y sin dolor. Al explorar el fondo con un estilete estéril, choca con algo duro y rugoso. El pie está tibio y los pulsos están presentes.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: curación ambulatoria con descarga, cefadroxilo oral y curación en atención primaria, hospitalizar con imagen, desbridamiento, biopsia ósea y antibióticos endovenosos, amputación supracondílea, o bypass ambulatorio. Piénsalo.',
        answer: 'La respuesta es la C. Todo te dice úlcera neuropática: plantar, con callo, indolora, pie tibio con pulsos. Pero el estilete tocó hueso, y eso es osteomielitis: Wagner tres. Se hospitaliza para imagen, desbridamiento con biopsia ósea para cultivo, descarga absoluta y antibióticos endovenosos prolongados. La A es la trampa, porque sería correcta sin el estilete positivo. Y el bypass no tiene sentido si los pulsos están presentes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 93',
      stem: 'DM con polineuropatía, dedos en garra, hiperqueratosis, con test de monofilamento alterado, pulsos disminuidos, conducta:',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Mejorar calzado' },
        { letter: 'B', text: 'Electromiografia, realizar test de nuevo en unos meses' },
        { letter: 'C', text: 'Observación clínica' },
        { letter: 'D', text: 'Derivar a urgencia' },
        { letter: 'E', text: 'Control ambulatorio' },
      ],
      correct: 'A',
      explanation: 'Pie de riesgo sin úlcera (dedos en garra, hiperqueratosis, monofilamento alterado): Wagner 0. La conducta es preventiva: calzado adecuado, educación y podología. No es una urgencia y no requiere electromiografía.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil veinticuatro, y es muy breve. Diabético con polineuropatía, dedos en garra, hiperqueratosis, monofilamento alterado y pulsos disminuidos.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones son: mejorar el calzado, electromiografía y repetir el test en unos meses, observación clínica, derivar a urgencia, o control ambulatorio. Piénsalo.',
        answer: 'Es la A, mejorar el calzado. No hay úlcera: es un pie de riesgo, Wagner cero, y la conducta es preventiva: calzado adecuado, educación y podología. Derivar a urgencia es exagerar, y la electromiografía no cambia nada, porque el monofilamento ya mostró la pérdida de sensibilidad. Y como los pulsos están disminuidos, en la práctica sumas un índice tobillo-brazo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 56',
      stem: 'Un paciente de 58 años, diabético tipo 2 de larga data, mal controlado, consulta por dolor en las extremidades inferiores, de tipo urente y que es más intenso en la noche. Al examen físico se aprecia ausencia de la sensibilidad de las extremidades con el uso de monofilamento e importante disminución de los pulsos pedios.',
      question: '¿Cuál es el examen más adecuado para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Estudio Doppler vascular de extremidades inferiores' },
        { letter: 'B', text: 'Electromiografía' },
        { letter: 'C', text: 'Resonancia magnética nuclear de columna lumbosacra' },
        { letter: 'D', text: 'Angiografía aortofemoral' },
        { letter: 'E', text: 'Pletismografía de volumen del pulso de extremidades inferiores' },
      ],
      correct: 'B',
      explanation: 'Dolor urente, de predominio nocturno, con monofilamento alterado: polineuropatía diabética. Su diagnóstico es clínico, pero el examen que la objetiva es la electromiografía. Los pulsos disminuidos son un distractor que lleva a los estudios vasculares.',
      say: {
        stem: 'Otra del EUNACOM de diciembre de dos mil diecinueve. Paciente de cincuenta y ocho años, diabético tipo dos de larga data y mal controlado, con dolor urente en las piernas, que empeora en la noche. El monofilamento no se percibe, y los pulsos pedios están muy disminuidos.',
        question: '¿Cuál es el examen más adecuado para confirmar el diagnóstico?',
        options: 'Las opciones son: Doppler vascular, electromiografía, resonancia de columna, angiografía aortofemoral, o pletismografía. Piénsalo.',
        answer: 'Es la B, electromiografía. La pregunta es qué explica el síntoma: un dolor urente y nocturno, con pérdida de sensibilidad, es neuropático. La polineuropatía se diagnostica con la clínica, y si hay que objetivarla, se usa la electromiografía. Los pulsos disminuidos son el distractor que te lleva al Doppler, pero el dolor de la isquemia aparece al caminar o al elevar la pierna, no es urente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 146',
      stem: 'Diabético fumador con dolor en pantorrillas al caminar 120 metros, ausencia de reflejos patelares, hipoestesia y pulsos pedios débiles. ¿Cuál es el examen de elección?',
      question: '¿Cuál es el examen de elección?',
      options: [
        { letter: 'A', text: 'Electromiografía y velocidad de conducción nerviosa' },
        { letter: 'B', text: 'AngioTAC de extremidades inferiores' },
        { letter: 'C', text: 'Arteriografía de extremidades inferiores' },
        { letter: 'D', text: 'Doppler venoso de extremidades inferiores' },
        { letter: 'E', text: 'Índice tobillo-brazo (ITB)' },
      ],
      correct: 'E',
      explanation: 'Dolor de pantorrillas al caminar una distancia fija (claudicación intermitente) con pulsos débiles: enfermedad arterial periférica. El examen inicial es el índice tobillo-brazo; bajo 0,9 la confirma. Los signos de neuropatía son el distractor.',
      say: {
        stem: 'Y la pregunta espejo, del EUNACOM de enero de dos mil veintitrés. Diabético fumador con dolor en las pantorrillas al caminar ciento veinte metros, reflejos patelares ausentes, hipoestesia y pulsos pedios débiles.',
        question: '¿Cuál es el examen de elección?',
        options: 'Las opciones son: electromiografía, angioTAC, arteriografía, Doppler venoso, o índice tobillo-brazo. Piénsalo.',
        answer: 'Es la E, índice tobillo-brazo. Ahora el síntoma es otro: dolor en la pantorrilla que aparece al caminar una distancia fija, eso es claudicación intermitente, y con pulsos débiles apunta a la arteria. El primer examen es el índice tobillo-brazo; bajo cero coma nueve confirma la enfermedad arterial. Compárala con la anterior: los dos pacientes tienen neuropatía y pulsos bajos, y lo que decide el examen es qué explica el dolor.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.1.011 · Neuropatía diabética",
      "stem": "Hombre de 59 años con DM2 de 12 años de evolución, HbA1c 8,1 %. Asintomático. En su control anual en el CESFAM se examinan los pies: piel íntegra, sin deformidades, pulsos pedios presentes. No percibe el monofilamento de 10 g en 4 de 10 puntos plantares de cada pie y tiene la sensibilidad vibratoria disminuida con diapasón de 128 Hz.",
      "question": "¿Cuál es la interpretación y conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Polineuropatía diabética con pérdida de sensibilidad protectora: pie de alto riesgo, educación, calzado adecuado y controles frecuentes"
        },
        {
          "letter": "B",
          "text": "Examen normal; repetir en un año"
        },
        {
          "letter": "C",
          "text": "Enfermedad arterial periférica; solicitar índice tobillo-brazo urgente"
        },
        {
          "letter": "D",
          "text": "Iniciar pregabalina para prevenir úlceras"
        },
        {
          "letter": "E",
          "text": "Derivar a neurología para electromiografía antes de clasificar el riesgo"
        }
      ],
      "correct": "A",
      "explanation": "La pérdida de sensibilidad al monofilamento de 10 g demuestra polineuropatía con pérdida de la sensibilidad protectora, el principal factor de riesgo de úlcera. Se clasifica como pie de riesgo: educación en autocuidado, calzado adecuado, podología y control más frecuente. La electromiografía no es necesaria y la pregabalina es solo para el dolor neuropático.",
      "say": {
        "stem": "Hombre de cincuenta y nueve años, diabético hace doce años, asintomático. En su control anual tiene pulsos presentes, pero no siente el monofilamento en cuatro de diez puntos de cada pie y tiene la vibración disminuida.",
        "question": "¿Cuál es la interpretación y conducta más adecuada?",
        "options": "Las opciones: neuropatía con pie de alto riesgo y educación, examen normal, enfermedad arterial, iniciar pregabalina o electromiografía antes de clasificar. Piénsalo.",
        "answer": "Es la A. No sentir el monofilamento es pérdida de la sensibilidad protectora por polineuropatía, y ese pie tiene alto riesgo de ulcerarse, así que se educa y se controla más seguido. La pregabalina tienta, pero trata el dolor neuropático; este paciente no tiene dolor y no previene úlceras."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.5.001 · Curaciones básicas del pie diabético",
      "stem": "Mujer de 66 años con DM2 y polineuropatía. Úlcera plantar de 1,5 cm bajo la cabeza del 2.º metatarsiano, superficial, con bordes de hiperqueratosis y fondo con algo de tejido esfacelado. Sin eritema, calor ni secreción purulenta; estilete óseo negativo. Pulsos pedios presentes.",
      "question": "¿Cuál es el manejo local más adecuado de la úlcera?",
      "options": [
        {
          "letter": "A",
          "text": "Lavado con povidona yodada y agua oxigenada, y gasa seca"
        },
        {
          "letter": "B",
          "text": "Antibiótico tópico y dejar la úlcera expuesta al aire"
        },
        {
          "letter": "C",
          "text": "Lavado con suero fisiológico, desbridamiento del esfacelo y la hiperqueratosis, apósito que mantenga un ambiente húmedo y descarga de la zona"
        },
        {
          "letter": "D",
          "text": "Cefadroxilo oral por 14 días y reposo"
        },
        {
          "letter": "E",
          "text": "Hospitalizar para desbridamiento quirúrgico"
        }
      ],
      "correct": "C",
      "explanation": "Úlcera neuropática Wagner 1 sin infección: manejo ambulatorio con curación avanzada. Se lava con suero fisiológico, se retira el tejido desvitalizado y la callosidad, se usa un apósito que mantenga un ambiente húmedo fisiológico y se descarga la zona. Los antisépticos dañan el tejido de granulación y sin infección no se indican antibióticos.",
      "say": {
        "stem": "Mujer de sesenta y seis años, diabética con neuropatía, con una úlcera plantar superficial de uno coma cinco centímetros, con callo en los bordes y algo de esfacelo. No hay signos de infección y el estilete óseo es negativo.",
        "question": "¿Cuál es el manejo local más adecuado?",
        "options": "Las opciones: povidona yodada con gasa seca, antibiótico tópico al aire, suero fisiológico con desbridamiento, apósito húmedo y descarga, cefadroxilo oral, u hospitalizar. Piénsalo.",
        "answer": "Es la C. Una úlcera superficial no infectada se cierra con curación avanzada: lavado con suero, retiro del tejido muerto y del callo, ambiente húmedo y, sobre todo, descarga. La povidona tienta por limpiar, pero los antisépticos dañan el tejido que está cicatrizando."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Enero 2023 · Pregunta 146",
      "stem": "Paciente diabético y fumador presenta dolor en las pantorrillas al caminar 120 metros. Al examen tiene reflejos patelares ausentes, hipoestesia y pulsos pedios débiles.",
      "question": "¿Cuál es el examen de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Electromiografía y velocidad de conducción nerviosa"
        },
        {
          "letter": "B",
          "text": "AngioTAC de extremidades inferiores"
        },
        {
          "letter": "C",
          "text": "Arteriografía de extremidades inferiores"
        },
        {
          "letter": "D",
          "text": "Doppler venoso de extremidades inferiores"
        },
        {
          "letter": "E",
          "text": "Índice tobillo-brazo (ITB)"
        }
      ],
      "correct": "E",
      "explanation": "La claudicación intermitente con pulsos pedios débiles sugiere enfermedad arterial periférica. El examen inicial de elección es el índice tobillo-brazo: un valor menor de 0,9 confirma el diagnóstico (en diabéticos puede estar falsamente elevado por calcificación arterial). La angioTAC o la arteriografía se reservan para planificar una revascularización.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de enero de dos mil veintitrés. Paciente diabético y fumador, con dolor en las pantorrillas al caminar ciento veinte metros. Tiene reflejos patelares ausentes, hipoestesia y pulsos pedios débiles.",
        "question": "¿Cuál es el examen de elección?",
        "options": "Las opciones: electromiografía, angioTAC, arteriografía, Doppler venoso, o índice tobillo brazo. Piénsalo.",
        "answer": "Es la E. Dolor de pantorrillas al caminar con pulsos débiles es claudicación por enfermedad arterial, y el primer examen es el índice tobillo brazo, simple y barato. La electromiografía tienta por la hipoestesia y la arreflexia, que son de la neuropatía diabética, pero no explican la claudicación."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.1.019 · Vasculopatía periférica",
      "stem": "Un hombre de 64 años, diabético y fumador, refiere dolor en ambas pantorrillas al caminar 200 metros, que cede a los pocos minutos de reposo. Los pulsos pedios están disminuidos y el índice tobillo-brazo es 0,7.",
      "question": "¿Cuál es el manejo inicial más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Cesación tabáquica, ejercicio supervisado, estatina y antiagregante plaquetario"
        },
        {
          "letter": "B",
          "text": "Revascularización quirúrgica inmediata"
        },
        {
          "letter": "C",
          "text": "Anticoagulación oral"
        },
        {
          "letter": "D",
          "text": "Amputación infracondílea"
        },
        {
          "letter": "E",
          "text": "Reposo absoluto en cama"
        }
      ],
      "correct": "A",
      "explanation": "Claudicación intermitente con ITB bajo 0,9 confirma enfermedad arterial periférica. El manejo inicial es reducir el riesgo cardiovascular (dejar de fumar, estatina de alta intensidad, antiagregante, control de diabetes y PA) más ejercicio supervisado, que aumenta la distancia de marcha. La revascularización se reserva para isquemia crítica o claudicación invalidante.",
      "say": {
        "stem": "Un diabético fumador de sesenta y cuatro años tiene dolor en las pantorrillas al caminar doscientos metros que cede con el reposo. Los pulsos pedios están disminuidos y el índice tobillo brazo es cero coma siete.",
        "question": "¿Cuál es el manejo inicial más adecuado?",
        "options": "Las opciones: control de factores de riesgo con ejercicio supervisado, revascularización inmediata, anticoagulación, amputación o reposo en cama. Piénsalo.",
        "answer": "Es la A. La claudicación con índice bajo cero coma nueve se maneja primero con control del riesgo cardiovascular y ejercicio supervisado. La revascularización tienta, pero se reserva para isquemia crítica o claudicación invalidante."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.009 · Prevención de pié diabético",
      "stem": "En el control de una mujer de 60 años con DM2 de 12 años de evolución, el examen con monofilamento de 10 g muestra pérdida de sensibilidad en ambos pies. No tiene úlceras ni deformidades y los pulsos son normales.",
      "question": "¿Cuál es la medida preventiva más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Indicar caminar descalza para fortalecer los pies"
        },
        {
          "letter": "B",
          "text": "Educación en autocuidado con inspección diaria de los pies, calzado adecuado y control podológico periódico"
        },
        {
          "letter": "C",
          "text": "Remojar los pies en agua caliente diariamente"
        },
        {
          "letter": "D",
          "text": "Amputación profiláctica de ortejos"
        },
        {
          "letter": "E",
          "text": "Controlar los pies solo si aparece una úlcera"
        }
      ],
      "correct": "B",
      "explanation": "La pérdida de sensibilidad protectora al monofilamento aumenta el riesgo de ulceración. Se indica educación (inspección diaria, secado entre ortejos, no andar descalza, no remojar en agua caliente), calzado adecuado, podología y controles periódicos. Todo diabético debe tener evaluación de riesgo de pie al menos una vez al año.",
      "say": {
        "stem": "Una mujer diabética de sesenta años tiene pérdida de sensibilidad en ambos pies al monofilamento, sin úlceras, deformidades ni alteración de pulsos.",
        "question": "¿Cuál es la medida preventiva más adecuada?",
        "options": "Las opciones: caminar descalza, educación en autocuidado con inspección diaria, calzado y podología, remojar los pies en agua caliente, amputación profiláctica, o controlar solo si aparece una úlcera. Piénsalo.",
        "answer": "Es la B. Con pérdida de sensibilidad protectora, la prevención es autocuidado, inspección diaria, buen calzado y podología. Remojar los pies tienta como cuidado, pero con neuropatía arriesga quemaduras y maceración."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.001 · Arteriografia extremidades inferiores",
      "stem": "Un hombre de 70 años, diabético, presenta dolor en reposo en el pie derecho que lo despierta en la noche y una úlcera en el primer ortejo que no cicatriza hace 6 semanas. No tiene pulsos poplíteo ni pedio derechos y el índice tobillo-brazo es 0,3.",
      "question": "¿Cuál es el examen más adecuado para planificar el tratamiento?",
      "options": [
        {
          "letter": "A",
          "text": "Arteriografía (o angioTAC) de extremidades inferiores"
        },
        {
          "letter": "B",
          "text": "Radiografía de pie"
        },
        {
          "letter": "C",
          "text": "Electromiografía"
        },
        {
          "letter": "D",
          "text": "Cintigrama óseo"
        },
        {
          "letter": "E",
          "text": "Repetir el índice tobillo-brazo en 6 meses"
        }
      ],
      "correct": "A",
      "explanation": "Dolor de reposo y úlcera que no cicatriza con ITB muy bajo es isquemia crítica de la extremidad, con alto riesgo de amputación. Requiere estudio anatómico arterial (arteriografía o angioTAC) para planificar la revascularización endovascular o quirúrgica; la arteriografía además puede ser terapéutica (angioplastía). Esperar implica perder la extremidad.",
      "say": {
        "stem": "Un diabético de setenta años tiene dolor de reposo nocturno en el pie derecho, una úlcera del primer ortejo que no cicatriza, sin pulsos distales y con índice tobillo brazo de cero coma tres.",
        "question": "¿Qué examen es el más adecuado para planificar el tratamiento?",
        "options": "Las opciones: arteriografía o angioTAC de extremidades inferiores, radiografía de pie, electromiografía, cintigrama óseo o repetir el índice en seis meses. Piénsalo.",
        "answer": "Es la A. Es una isquemia crítica y se necesita ver la anatomía arterial para revascularizar. La radiografía de pie tienta por la úlcera, pero no muestra las arterias ni guía la revascularización."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.008 · Doppler vascular periférico",
      "stem": "Un hombre de 72 años, con DM2 de 20 años y enfermedad renal crónica, refiere claudicación de pantorrillas. Sus pulsos pedios son débiles, pero el índice tobillo-brazo resulta 1,5.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Descartar enfermedad arterial, porque el índice es normal"
        },
        {
          "letter": "B",
          "text": "Solicitar electromiografía"
        },
        {
          "letter": "C",
          "text": "Indicar amputación"
        },
        {
          "letter": "D",
          "text": "Considerar el índice no confiable por calcificación arterial y realizar ecografía Doppler arterial o índice dedo-brazo"
        },
        {
          "letter": "E",
          "text": "Repetir el mismo índice en 1 año"
        }
      ],
      "correct": "D",
      "explanation": "Un ITB sobre 1,3-1,4 indica arterias no compresibles por calcificación de la media, frecuente en diabéticos y en enfermedad renal, y no es confiable. Con claudicación y pulsos débiles se estudia con ecografía Doppler arterial (morfología de onda, estenosis) o índice dedo-brazo, porque las arterias digitales suelen respetarse.",
      "say": {
        "stem": "Un diabético de setenta y dos años con enfermedad renal crónica tiene claudicación y pulsos pedios débiles, pero su índice tobillo brazo resulta uno coma cinco.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: descartar enfermedad arterial, electromiografía, amputar, considerar el índice falso por calcificación y hacer doppler arterial o índice dedo brazo o repetir el índice en un año. Piénsalo.",
        "answer": "Es la D. Un índice sobre uno coma tres indica arterias calcificadas que no se comprimen, así que no sirve y se estudia con doppler. Descartar la enfermedad tienta, pero sus pulsos débiles y la claudicación dicen lo contrario."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tamizaje', tag: 'APS, cada año', kind: 'criteria', items: [
          { t: 'Monofilamento de 10 g', d: 'Un punto no percibido: pie de alto riesgo',
            say: 'Cerremos con las reglas de oro. El tamizaje anual es con el monofilamento de diez gramos, y un solo punto no percibido define un pie de alto riesgo.' },
          { t: 'Neuropática: indolora, pulsos presentes', d: 'Isquémica: dolorosa, pulsos ausentes',
            say: 'La úlcera neuropática es indolora, en zona de apoyo, con pulsos presentes. La isquémica duele, es distal y no tiene pulsos.' },
        ] },
        { title: 'Wagner', tag: 'El corte', kind: 'alert', items: [
          { t: '0 a 2: ambulatorio', d: 'Descarga + curación avanzada',
            say: 'Del Wagner cero al dos, manejo ambulatorio, con descarga y curación avanzada.' },
          { t: '3 a 5: hospitalizar', d: 'Cirugía + antibióticos EV',
            say: 'Del tres al cinco, se hospitaliza, con cirugía y antibióticos endovenosos.' },
          { t: 'Estilete toca hueso', d: 'Osteomielitis: Wagner 3',
            say: 'Y si el estilete toca hueso, es osteomielitis y es Wagner tres.' },
        ] },
        { title: 'Tratamiento', tag: 'Lo que más cierra úlceras', kind: 'key', items: [
          { t: 'Descarga de presión', d: 'La medida no quirúrgica más importante',
            say: 'Si te llevas una sola idea de hoy: el pie diabético es un pie que no siente, así que el médico tiene que mirar por él; y la úlcera que no se descarga no cierra, y la que toca hueso se hospitaliza. En la próxima clase pasamos a las dislipidemias y al riesgo cardiovascular. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Pie diabético: del tamizaje a la hospitalización',
    root: N('start', 'Paciente diabético', 'Examen anual del pie',
      'Todo diabético tiene su examen anual del pie: monofilamento, diapasón y pulsos.',
      ['', N('q', '¿Hay úlcera?', 'Inspección del pie',
        'La primera pregunta es si hay una úlcera activa.',
        ['NO', N('ok', 'Wagner 0: pie de riesgo', 'Educación, calzado, podología',
          'Sin úlcera, pero con monofilamento alterado, callos o deformidades, es un pie de riesgo, Wagner cero: educación, calzado adecuado y podología. Si faltan los pulsos, índice tobillo-brazo.')],
        ['SÍ', N('q', '¿Qué tan profunda?', 'Examen con estilete óseo',
          'Si hay úlcera, define su profundidad y pasa el estilete estéril hasta el fondo.',
          ['Piel o tendón', N('do', 'Wagner 1 a 2: ambulatorio', 'Descarga + curación avanzada',
            'Si compromete la piel, o llega a tendón o cápsula sin absceso ni hueso, es Wagner uno o dos: descarga y curación avanzada ambulatoria, con desbridamiento en el grado dos. Antibiótico oral si hay celulitis.')],
          ['Absceso o hueso', N('alert', 'Wagner 3: hospitalizar', 'Aseo quirúrgico + ATB EV',
            'Si hay absceso, o el estilete toca hueso, es Wagner tres: hospitalizar, aseo quirúrgico, biopsia ósea para cultivo y antibióticos endovenosos por cuatro a seis semanas.')],
          ['Gangrena', N('refer', 'Wagner 4 a 5: urgencia', 'Estudio vascular y amputación',
            'Si hay gangrena, se hospitaliza de urgencia. Localizada, es Wagner cuatro: estudio vascular, revascularización o amputación menor. Extensa, en todo el pie, es Wagner cinco: amputación mayor.')])])]),
  },
};
