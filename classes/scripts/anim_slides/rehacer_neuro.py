Z = 'Modelo 3D: Z-Anatomy (CC BY-SA 4.0) · BodyParts3D (DBCLS, CC BY 4.0)'
S = {
    'neuro-11': {
        'title': 'La vía nigroestriada',
        'images': [{'src': 'animaciones/neuro-11/A1_nigroestriada_3d.mp4', 'label': 'Sustancia nigra y estriado', 'credit': Z}],
        'steps': [{'note': 'Se pierde y se repone',
                   'say': 'Las neuronas de la sustancia nigra, en el mesencéfalo, envían dopamina al estriado: el caudado y el putamen. En el Parkinson esas neuronas mueren y la nigra se despigmenta. Los síntomas aparecen cuando ya falta más de la mitad. La levodopa repone la dopamina y el movimiento mejora.'}],
    },
}

BP = 'Modelo 3D: BodyParts3D (DBCLS, CC BY 4.0)'
BL = 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios'
S.update({
    'gastro-03': {
        'title': 'La deglución en movimiento',
        'images': [{'src': 'animaciones/gastro-03/A1_deglucion_normal_3d.mp4', 'label': 'Normal', 'credit': BP},
                   {'src': 'animaciones/gastro-03/A1_acalasia_3d.mp4', 'label': 'Acalasia', 'credit': BP}],
        'steps': [{'note': 'Onda que baja, esfínter que se abre',
                   'say': 'En la deglución normal, una onda peristáltica empuja el bolo hacia abajo, y justo cuando llega, el esfínter esofágico inferior se relaja y lo deja pasar al estómago.'},
                  {'note': 'Sin onda, esfínter cerrado',
                   'say': 'En la acalasia no hay peristalsis y el esfínter no se relaja: su presión se mantiene alta. El bolo se estanca y, con el tiempo, el esófago se dilata por encima. Abajo queda la imagen en pico de pájaro.'}],
    },
    'nefro-08': {
        'title': 'Sueros y diuréticos',
        'images': [{'src': 'animaciones/nefro-08/A1_sueros.mp4', 'label': 'Sueros', 'credit': 'Animación propia'},
                   {'src': 'animaciones/nefro-08/A2_diureticos_real.mp4', 'label': 'Diuréticos', 'credit': BL}],
        'steps': [{'note': 'Dónde se queda cada uno',
                   'say': 'Del suero fisiológico, un cuarto queda en el vaso y el resto va al intersticio, sin entrar a la célula. El suero glucosado es agua libre: dos tercios entran a las células.'},
                  {'note': 'Un segmento cada uno',
                   'say': 'Sigamos el filtrado por la nefrona. La acetazolamida actúa en el túbulo proximal, la furosemida en la rama gruesa del asa de Henle, las tiazidas en el túbulo distal, y la espironolactona en el colector.'}],
    },
    'diab-10': {
        'title': 'La arteriola eferente',
        'images': [{'src': 'animaciones/diab-10/A1_eferente_real.mp4', 'label': 'IECA', 'credit': BL}],
        'steps': [{'note': 'Baja la presión del glomérulo',
                   'say': 'En la diabetes, la angiotensina dos contrae la arteriola de salida del glomérulo: sube la presión adentro y se escapa albúmina. El IECA o el ARA dos dilatan esa arteriola, baja la presión y se escapa menos albúmina. Por eso protegen el riñón aunque la presión arterial sea normal.'}],
    },
})
S2 = {
    'resp-04': {
        'title': 'Enfisema en movimiento',
        'images': [{'src': 'animaciones/resp-04/A1_enfisema_real.mp4', 'label': 'Enfisema', 'credit': BL}],
        'steps': [{'note': 'Tabiques rotos, aire atrapado',
                   'say': 'En el enfisema se rompen los tabiques entre los alvéolos: quedan espacios grandes, con menos superficie de intercambio. En cada espiración una parte del aire no alcanza a salir, y el pulmón queda hiperinsuflado.'}],
    },
}
