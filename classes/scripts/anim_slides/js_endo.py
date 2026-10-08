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
}
