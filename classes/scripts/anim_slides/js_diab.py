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
}
