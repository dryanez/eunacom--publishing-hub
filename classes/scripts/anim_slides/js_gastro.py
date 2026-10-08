# Animaciones JS (classes/scripts/jsvideo) · Gastroenterología. Aplicar con insert_anim.py.
OWN = 'Animación propia'
SV = 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios'
def one(title, src, label, credit, note, say): return {'title': title, 'images': [{'src': src, 'label': label, 'credit': credit}], 'steps': [{'note': note, 'say': say}]}
S = {
    'gastro-10': {'title': 'Dónde ataca cada enfermedad', 'images': [
        {'src': 'animaciones/gastro-10/A1_colitis_ulcerosa.mp4', 'label': 'Colitis ulcerosa', 'credit': SV},
        {'src': 'animaciones/gastro-10/A2_crohn.mp4', 'label': 'Crohn', 'credit': SV}],
        'steps': [
        {'note': 'Continua desde el recto',
         'say': 'La colitis ulcerosa parte siempre en el recto y sube de forma continua, sin zonas sanas, y solo daña la mucosa. Por eso trae pujo y tenesmo.'},
        {'note': 'Salteada y transmural',
         'say': 'El Crohn puede aparecer de la boca al ano, sobre todo en el íleon distal, con zonas sanas entre medio. Y daña toda la pared, por eso da fístulas y abscesos.'}]},
    'gastro-25': one('La invaginación', 'animaciones/gastro-25/A1_invaginacion.mp4', 'Invaginación', SV, 'Un segmento entra en el otro',
        'El íleon se mete dentro del colon, como un telescopio, y se palpa una masa en salchicha. El lactante tiene llanto en crisis, con un ritmo intermitente, y deposiciones en mermelada de grosella. Si hay neumoperitoneo o necrosis, se opera.'),
    'gastro-13': one('El camino de la bilirrubina', 'animaciones/gastro-13/A1_camino_bilirrubina.mp4', 'Dónde se corta', SV, 'Tres tipos de ictericia',
        'La bilirrubina viaja del glóbulo rojo a la sangre, el hígado la conjuga y sale por la bilis al intestino. Si el problema es antes del hígado, como la hemólisis o el Gilbert, sube la indirecta; si es en el hígado, suben ambas; y si se obstruye la vía biliar, sube la directa, con coluria y acolia.'),
    'gastro-01': one('Falla la barrera', 'animaciones/gastro-01/A1_reflujo_barrett.mp4', 'Reflujo', SV, 'El esfínter se abre sin tragar',
        'En el reflujo el problema no es que sobre ácido: el esfínter esofágico inferior se abre sin tragar y el ácido sube. Da pirosis y regurgitación, peor al acostarse y tras comer. Con los años puede aparecer Barrett, con riesgo de adenocarcinoma. El inhibidor de la bomba se toma de treinta a sesenta minutos antes del desayuno.'),
    'gastro-02': one('La bacteria y la úlcera', 'animaciones/gastro-02/A1_pylori_ulcera.mp4', 'Helicobacter pylori', SV, 'Test de ureasa',
        'Helicobacter pylori sobrevive al ácido gracias a la ureasa, y daña la barrera de la mucosa hasta formar una úlcera. Da epigastralgia urente, peor en ayunas y que alivia al comer. Con signos de alarma se hace endoscopía, y en la biopsia se busca con el test de ureasa.'),
    'gastro-06': one('Qué sube por el hiato', 'animaciones/gastro-06/A1_hernia_hiatal.mp4', 'Hernia hiatal', SV, 'Más del noventa y cinco por ciento: deslizamiento',
        'En la hernia por deslizamiento, más del noventa y cinco por ciento, sube la unión gastroesofágica, y solo se trata el reflujo si lo hay. En la paraesofágica la unión queda en su lugar y sube el fondo, con riesgo de vólvulo, incarceración y estrangulación: esa se opera.'),
    'gastro-09': one('La vellosidad se aplana', 'animaciones/gastro-09/A1_vellosidad_gluten.mp4', 'Enfermedad celíaca', SV, 'Anti transglutaminasa con IgA total',
        'El gluten del trigo, la cebada y el centeno daña el intestino delgado, y la vellosidad se aplana. Se pide anti transglutaminasa IgA con IgA total, y se confirma con biopsia del duodeno. El tratamiento es uno solo: dieta sin gluten, estricta y de por vida.'),
    'gastro-16': one('Realce arterial y lavado', 'animaciones/gastro-16/A1_realce_hcc.mp4', 'Hepatocarcinoma', SV, 'En un cirrótico',
        'En la fase arterial, el hepatocarcinoma brilla, y en la fase portal se lava. El hemangioma, en cambio, se llena desde la periferia hacia el centro. En un cirrótico, el realce arterial con lavado basta para el diagnóstico.'),
    'gastro-18': one('La glándula se digiere', 'animaciones/gastro-18/A1_autodigestion.mp4', 'Pancreatitis aguda', SV, 'Dos de tres criterios',
        'Un cálculo biliar o el alcohol activan la tripsina dentro del páncreas, y la glándula se digiere a sí misma. Se diagnostica con dos de tres criterios: dolor epigástrico en faja al dorso, lipasa o amilasa sobre tres veces lo normal, e imagen compatible. Se prefiere la lipasa, porque dura más días elevada.'),
    'gastro-20': one('Un émbolo en la mesentérica', 'animaciones/gastro-20/A1_embolo_mesenterico.mp4', 'Isquemia mesentérica', SV, 'Dolor desproporcionado',
        'Un paciente con fibrilación auricular hace un émbolo a la arteria mesentérica superior. El dolor es súbito y desproporcionado al examen, con un abdomen blando. El lactato sube, y después aparecen hipotensión y hematoquecia. Se pide angio TAC.'),
    'gastro-24': one('El píloro que no deja pasar', 'animaciones/gastro-24/A1_oliva_pilorica.mp4', 'Estenosis hipertrófica del píloro', SV, 'Oliva pilórica en la ecografía',
        'El músculo del píloro se engruesa y cierra la salida del estómago. Entre la segunda y la sexta semana de vida, el lactante hambriento hace vómitos explosivos y proyectivos, con alcalosis hipoclorémica y deshidratación. La ecografía muestra la oliva pilórica.'),
    'gastro-04': one('Aire bajo el diafragma', 'animaciones/gastro-04/A1_neumoperitoneo.mp4', 'Úlcera perforada', SV, 'Endoscopía contraindicada',
        'La úlcera perforada da un dolor en puñalada y el abdomen en tabla. La radiografía de tórax de pie muestra neumoperitoneo bajo el diafragma. La endoscopía está contraindicada, porque insufla aire, y el tratamiento es quirúrgico.'),
    'gastro-08': one('Planes A, B y C', 'animaciones/gastro-08/A1_planes_abc.mp4', 'Deshidratación', OWN, 'Según cuánto peso perdió',
        'Con pérdida de peso menor al cinco por ciento, plan A: sales orales en casa, de cien a doscientos mililitros tras cada deposición. Entre cinco y diez por ciento, plan B: de cincuenta a cien mililitros por kilo en cuatro a seis horas. Sobre diez por ciento o en shock, plan C: cristaloides endovenosos.'),
    'gastro-21': one('Arriba o abajo del Treitz', 'animaciones/gastro-21/A1_angulo_treitz.mp4', 'Hemorragia digestiva', SV, 'Alta o baja',
        'El ángulo de Treitz divide la hemorragia digestiva. Sobre él, en el esófago, el estómago o el duodeno, la hemorragia es alta: hematemesis y melena, que es sangre digerida y negra. Bajo él, es baja: hematoquecia, sangre roja.'),
}
