# Animaciones JS (classes/scripts/jsvideo) · Endocrinología. Aplicar con insert_anim.py.
OWN = 'Animación propia'
SV = 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios'
S = {
    'endo-12': {
        'title': 'Falla la suprarrenal o falla la hipófisis',
        'images': [{'src': 'animaciones/endo-12/A1_addison_real.mp4', 'label': 'Addison', 'credit': SV},
                   {'src': 'animaciones/endo-12/A2_secundaria_real.mp4', 'label': 'Secundaria', 'credit': SV}],
        'steps': [{'note': 'ACTH alta, potasio alto',
                   'say': 'En el Addison se destruye la corteza suprarrenal: cae el cortisol y también la aldosterona. Sin el freno del cortisol, la ACTH sube muchísimo y oscurece la piel; y sin aldosterona, el potasio sube.'},
                  {'note': 'ACTH baja, sin hiperkalemia',
                   'say': 'En la secundaria falla la hipófisis: la ACTH está baja y el cortisol cae, pero no hay pigmento. La glomerulosa sigue funcionando porque depende de la renina, así que la aldosterona se conserva y no hay hiperkalemia.'}],
    },
    'endo-15': {
        'title': 'Primero alfa, después beta',
        'images': [{'src': 'animaciones/endo-15/A1_alfa_beta_real.mp4', 'label': 'Bloqueo', 'credit': SV}],
        'steps': [{'note': 'Alfa primero',
                   'say': 'El tumor de la médula suprarrenal descarga catecolaminas: por los receptores alfa uno contrae las arteriolas, y por los beta uno acelera el corazón. Si das un betabloqueador solo, se pierde la vasodilatación beta dos, el alfa queda sin oposición y la presión se dispara. Por eso primero se bloquea alfa, con fenoxibenzamina o doxazosina, y recién después beta.'}],
    },
    'endo-07': {
        'title': 'Tres caminos para el hipertiroidismo',
        'images': [{'src': 'animaciones/endo-07/A1_tiamazol_radioyodo.mp4', 'label': 'Tiamazol y radioyodo', 'credit': SV}],
        'steps': [{'note': 'Tiamazol bloquea la síntesis; radioyodo destruye',
                   'say': 'El yodo entra a la tiroides y la peroxidasa lo usa para fabricar hormona. El tiamazol bloquea esa enzima, y la hormona que sale cae; es la primera elección, pero la mitad recae. El propiltiouracilo queda para el primer trimestre y la tormenta. Y el radioyodo destruye la glándula: es la opción tras la recaída, y deja hipotiroidismo.'}],
    },
    'endo-08': {
        'title': 'Tormenta tiroidea: el orden importa',
        'images': [{'src': 'animaciones/endo-08/A1_tormenta_orden.mp4', 'label': 'Tormenta tiroidea', 'credit': SV}],
        'steps': [{'note': 'PTU primero, Lugol una hora después',
                   'say': 'Primero el propiltiouracilo, que frena la síntesis y la conversión de T cuatro a T tres. Al menos una hora después, el Lugol, que cierra la salida de la hormona ya fabricada; si das el yodo antes, es combustible. Después el propranolol para el corazón, la hidrocortisona, y tratar el gatillo.'}],
    },
    'endo-02': {
        'title': 'Levotiroxina: cuánto y cómo',
        'images': [{'src': 'animaciones/endo-02/A1_levotiroxina_dosis.mp4', 'label': 'Dosis', 'credit': OWN}],
        'steps': [{'note': 'Dosis plena en el joven; bajo y lento en el mayor',
                   'say': 'El adulto joven sin cardiopatía parte con la dosis plena, uno coma seis microgramos por kilo. El mayor de sesenta a sesenta y cinco años, o el coronario, parte con veinticinco a cincuenta y sube de a poco cada seis a ocho semanas. Y siempre en ayunas, con agua, lejos del calcio y del hierro.'}],
    },
    'endo-04': {
        'title': 'La tiroides del embarazo y del recién nacido',
        'images': [{'src': 'animaciones/endo-04/A1_tsh_embarazo_talon.mp4', 'label': 'Metas y tamizaje', 'credit': OWN}],
        'steps': [{'note': 'Bajo dos coma cinco, bajo tres; talón a las cuarenta y ocho horas',
                   'say': 'En el primer trimestre la TSH debe estar bajo dos coma cinco, y bajo tres después. La que ya toma levotiroxina sube su dosis un veinte a treinta por ciento apenas sabe que está embarazada. En el recién nacido, la TSH de talón se toma a las cuarenta a cuarenta y ocho horas, y si sale alta, se confirma y se trata antes de los quince días.'}],
    },
    'endo-09': {
        'title': 'El algoritmo del nódulo',
        'images': [{'src': 'animaciones/endo-09/A1_algoritmo_nodulo.mp4', 'label': 'Nódulo tiroideo', 'credit': OWN}],
        'steps': [{'note': 'TSH primero; TI-RADS y tamaño',
                   'say': 'El primer examen es la TSH. Si está baja, cintigrama: el nódulo caliente no se punciona, se trata el hipertiroidismo. Si es normal, ecografía con TI-RADS: mientras más sospechoso, más chico el tamaño que obliga a puncionar. Y con la TSH normal, nunca cintigrama.'}],
    },
    'endo-21': {
        'title': 'La prolactina vive frenada',
        'images': [{'src': 'animaciones/endo-21/A1_dopamina_prolactina.mp4', 'label': 'Dopamina y prolactina', 'credit': SV}],
        'steps': [{'note': 'Fármacos, efecto tallo e hipotiroidismo',
                   'say': 'La dopamina baja por el tallo y frena a la prolactina. Si un antipsicótico o la metoclopramida bloquean el receptor, si una masa comprime el tallo, o si el hipotiroidismo sube la TRH, la prolactina sube. Y el prolactinoma es el único adenoma que se trata con pastillas, con cabergolina.'}],
    },
    'endo-22': {
        'title': 'La glucosa no frena la GH',
        'images': [{'src': 'animaciones/endo-22/A1_acromegalia_gh.mp4', 'label': 'Acromegalia', 'credit': SV}],
        'steps': [{'note': 'IGF uno primero; GH que no baja de uno',
                   'say': 'El adenoma somatotropo libera hormona de crecimiento, y el hígado fabrica IGF uno, que hace crecer huesos y partes blandas. Se pide primero la IGF uno; si está alta, se confirma con la prueba de glucosa: en el sano la hormona de crecimiento baja, en el tumor no baja de uno.'}],
    },
    'endo-23': {
        'title': 'La hipófisis que se infarta en el parto',
        'images': [{'src': 'animaciones/endo-23/A1_sheehan.mp4', 'label': 'Sheehan', 'credit': SV}],
        'steps': [{'note': 'Primero falla la leche',
                   'say': 'En el embarazo la hipófisis crece. Con una hemorragia grave del parto cae la presión, y la adenohipófisis se necrosa. Lo primero que falla es la prolactina: no hay leche. Después la amenorrea, el hipotiroidismo y la insuficiencia suprarrenal. Se trata primero con cortisol y recién después con levotiroxina.'}],
    },
}
