# Animaciones JS (classes/scripts/jsvideo) · Diabetes. Aplicar: python3 classes/scripts/insert_anim.py classes/scripts/anim_slides/js_diab.py
OWN = 'Animación propia'
SV = 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios'
S = {
    'diab-15': {
        'title': 'Falta total o parcial de insulina',
        'images': [
            {'src': 'animaciones/diab-15/A1_cad_real.mp4', 'label': 'Cetoacidosis', 'credit': SV},
            {'src': 'animaciones/diab-15/A2_hiperosmolar_real.mp4', 'label': 'Hiperosmolar', 'credit': SV},
        ],
        'steps': [
            {'note': 'Cetonas y acidosis',
             'say': 'Sin nada de insulina, y con las hormonas contrarreguladoras al máximo, la grasa se quema sin freno y los ácidos grasos llegan al hígado. El hígado fabrica glucosa y cetonas: la glicemia sube, pero sobre todo cae el pH. Es un problema de ácido.'},
            {'note': 'Sin cetosis, osmolaridad altísima',
             'say': 'En el hiperosmolar queda algo de insulina, que llega al hígado por la porta y alcanza para frenar la lipólisis y las cetonas. Pero la glicemia sube sin control, arrastra agua por la orina y la osmolaridad pasa de trescientos veinte. Es un problema de agua.'},
        ],
    },
    'diab-02': {
        'title': 'La curva de tolerancia',
        'images': [{'src': 'animaciones/diab-02/A1_ptgo.mp4', 'label': 'PTGO', 'credit': OWN}],
        'steps': [{'note': 'A las dos horas: bajo 140, 140 a 199, 200 o más',
                   'say': 'Se dan setenta y cinco gramos de glucosa y se mide a las dos horas. Bajo ciento cuarenta es normal; entre ciento cuarenta y ciento noventa y nueve, intolerancia a la glucosa; y doscientos o más, diabetes. En ayunas, entre cien y ciento veinticinco es glicemia alterada, y ciento veintiséis o más, diabetes.'}],
    },
    'diab-14': {
        'title': 'Primero la alarma, después el cerebro',
        'images': [{'src': 'animaciones/diab-14/A1_alarma.mp4', 'label': 'Hipoglicemia', 'credit': OWN},
                   {'src': 'animaciones/diab-14/A2_betabloqueador.mp4', 'label': 'Con betabloqueador', 'credit': OWN}],
        'steps': [{'note': 'Bajo setenta, adrenérgicos; bajo cincuenta y cuatro, neuroglucopénicos',
                   'say': 'Mientras cae la glicemia, bajo setenta aparece la alarma adrenérgica: sudor, temblor, taquicardia y hambre. Bajo cincuenta y cuatro el cerebro se queda sin glucosa: confusión, conducta extraña, convulsión y coma.'},
                  {'note': 'El propranolol borra la alarma; queda el sudor',
                   'say': 'Con un betabloqueador no cardioselectivo se pierden el temblor y la taquicardia. Quedan el sudor y el hambre, y el paciente pasa casi directo a la confusión. El sudor es la pista.'}],
    },
    'diab-16': {
        'title': 'Glucosado a los doscientos',
        'images': [{'src': 'animaciones/diab-16/A1_glucosado_sodio.mp4', 'label': 'Cetoacidosis', 'credit': OWN}],
        'steps': [{'note': 'Glucosado al cinco por ciento e insulina a la mitad',
                   'say': 'La glicemia baja cincuenta a setenta y cinco por hora. Al llegar a doscientos se agrega glucosado al cinco por ciento y la insulina baja a la mitad, porque el anion gap sigue abierto. Sin glucosa terminarías en hipoglicemia. Y mientras baja la glicemia, el sodio medido sube: el real es el corregido. En el hiperosmolar, lo mismo, pero a los trescientos.'}],
    },
    'diab-03': {
        'title': 'La placenta resiste a la insulina',
        'images': [{'src': 'animaciones/diab-03/A1_resistencia_embarazo.mp4', 'label': 'Embarazo', 'credit': OWN}],
        'steps': [{'note': 'Sube desde las veinte semanas; PTGO a las veinticuatro a veintiocho',
                   'say': 'Desde las veinte a veinticuatro semanas, el lactógeno placentario, la progesterona, el cortisol y la prolactina suben la resistencia a la insulina. Por eso la tolerancia a la glucosa se hace entre las veinticuatro y veintiocho semanas. Al salir la placenta, la resistencia cae.'}],
    },
    'diab-05': {
        'title': 'El ejercicio sigue actuando de noche',
        'images': [{'src': 'animaciones/diab-05/A1_ejercicio_hipoglicemia.mp4', 'label': 'Ejercicio', 'credit': OWN}],
        'steps': [{'note': 'Sensibilidad alta por veinticuatro a cuarenta y ocho horas',
                   'say': 'Después del ejercicio, la sensibilidad a la insulina queda alta uno a dos días. Con insulina o una sulfonilurea aparece la hipoglicemia tardía, típicamente nocturna. Por eso se mide la glicemia antes de salir, y se reparten los ciento cincuenta minutos en al menos tres días.'}],
    },
    'diab-17': {
        'title': 'La insulina mete el potasio a la célula',
        'images': [{'src': 'animaciones/diab-17/A1_insulina_potasio_real.mp4', 'label': 'La insulina mete potasio', 'credit': SV},
                   {'src': 'animaciones/diab-17/A2_umbral_potasio_real.mp4', 'label': 'Por qué esperar', 'credit': SV}],
        'steps': [{'note': 'El potasio del plasma cae',
                   'say': 'La insulina activa la bomba sodio potasio de la membrana y mete el potasio dentro de la célula. Mira cómo baja el potasio de la sangre: el tanque estaba vacío y el número era engañoso.'},
                  {'note': 'Bajo tres coma tres, no hay insulina',
                   'say': 'Si el paciente ya parte con el potasio bajo y le das insulina, el potasio cae todavía más, y aparece la arritmia. Por eso, bajo tres coma tres, primero potasio, y recién sobre tres coma tres, la insulina.'}],
    },
    'diab-07': {
        'title': 'Una frena al hígado, la otra exprime al páncreas',
        'images': [{'src': 'animaciones/diab-07/A1_metformina_glibenclamida.mp4', 'label': 'Metformina y glibenclamida', 'credit': SV}],
        'steps': [{'note': 'Metformina sin hipoglicemia; glibenclamida con hipoglicemia',
                   'say': 'La metformina actúa en el hígado: frena la gluconeogénesis y cae la glucosa que sale del hígado. No toca el páncreas, así que sola no da hipoglicemia. La glibenclamida, en cambio, obliga a la célula beta a liberar insulina aunque la glicemia ya esté normal, y por eso puede llevar a la hipoglicemia, sobre todo en el adulto mayor y en el enfermo renal.'}],
    },
    'diab-08': {
        'title': 'Dónde actúa cada familia nueva',
        'images': [{'src': 'animaciones/diab-08/A1_gliflozina.mp4', 'label': 'Gliflozinas', 'credit': SV},
                   {'src': 'animaciones/diab-08/A2_glp1.mp4', 'label': 'Agonistas de GLP uno', 'credit': SV}],
        'steps': [{'note': 'La glucosa y el sodio se van por la orina',
                   'say': 'En el túbulo proximal, el SGLT dos recupera toda la glucosa filtrada. La gliflozina lo bloquea, y la glucosa y el sodio se van por la orina. Baja de peso y la presión, protege el corazón y el riñón, y no da hipoglicemia. Pero ojo con las micosis genitales y con la cetoacidosis euglicémica.'},
                  {'note': 'Insulina solo si hay glucosa, y saciedad',
                   'say': 'Los agonistas de GLP uno imitan a la incretina: liberan insulina solo si hay glucosa, bajan el glucagón, enlentecen el vaciamiento del estómago y dan saciedad en el hipotálamo. Con un infarto o un accidente cerebrovascular previo, piensa en ellos.'}],
    },
    'diab-19': {
        'title': 'El agua vuelve demasiado rápido',
        'images': [{'src': 'animaciones/diab-19/A1_edema_cerebral.mp4', 'label': 'Edema cerebral', 'credit': SV}],
        'steps': [{'note': 'Gradiente osmótico al revés',
                   'say': 'En la cetoacidosis el plasma concentrado le saca agua al cerebro, y sus células fabrican osmoles propios. Si la glicemia cae más de cien por hora, afuera se diluye pero adentro sigue alto, y el agua entra: edema cerebral, con cefalea, vómitos y la tríada de Cushing. Se trata de inmediato con manitol o salino hipertónico.'}],
    },
    'diab-20': {
        'title': 'El glomérulo bajo presión',
        'images': [{'src': 'animaciones/diab-20/A1_glomerulo_albuminuria.mp4', 'label': 'Nefropatía diabética', 'credit': SV}],
        'steps': [{'note': 'Primero la albuminuria; IECA o ARA dos',
                   'say': 'La hiperglicemia hace hiperfiltrar al glomérulo, con la presión alta, y se escapa albúmina a la orina. Ese es el primer signo, mucho antes que la creatinina. Sin intervenir, termina en diálisis. Los IECA y los ARA dos dilatan la arteriola eferente, baja la presión y baja la albuminuria.'}],
    },
    'diab-21': {
        'title': 'Del capilar dañado al neovaso',
        'images': [{'src': 'animaciones/diab-21/A1_retinopatia.mp4', 'label': 'Retinopatía diabética', 'credit': SV}],
        'steps': [{'note': 'Láser para el neovaso, anti VEGF para el edema macular',
                   'say': 'Primero aparecen los microaneurismas, después las hemorragias, los exudados y los algodonosos de la isquemia. La retina isquémica libera VEGF, y crecen neovasos frágiles que sangran: es la proliferativa. El láser destruye la retina isquémica y los neovasos regresan. El edema macular, que es lo que más baja la visión, se trata con anti VEGF.'}],
    },
    'diab-22': {
        'title': 'Por qué se ulcera un pie diabético',
        'images': [{'src': 'animaciones/diab-22/A1_pie_diabetico.mp4', 'label': 'Pie diabético', 'credit': SV}],
        'steps': [{'note': 'Neuropatía, isquemia y trauma',
                   'say': 'El paciente no siente el monofilamento: es la neuropatía, el componente principal. Si además faltan los pulsos, hay isquemia. Un roce o una piedra en el zapato que no se siente basta para formar una úlcera. Y si el estilete toca hueso, es una osteomielitis.'}],
    },
    'diab-23': {
        'title': 'La placa crece; la estatina la estabiliza',
        'images': [{'src': 'animaciones/diab-23/A1_ateroma_estatina.mp4', 'label': 'Ateroma', 'credit': SV}],
        'steps': [{'note': 'La meta es el LDL según el riesgo',
                   'say': 'El LDL entra a la pared de la arteria y la placa crece; si su cápsula es delgada, puede romperse y causar un infarto. La estatina baja el LDL y engruesa la cápsula. La meta depende del riesgo: mientras más alto, más bajo el LDL. Y si no se llega con la dosis máxima, se agrega ezetimiba.'}],
    },
}
