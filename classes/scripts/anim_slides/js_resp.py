# Animaciones JS (classes/scripts/jsvideo) · Respiratorio. Aplicar con insert_anim.py.
OWN = 'Animación propia'
SV = 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios'
def one(title, src, label, credit, note, say): return {'title': title, 'images': [{'src': src, 'label': label, 'credit': credit}], 'steps': [{'note': note, 'say': say}]}
S = {
    'resp-13': one('Un bleb que se rompe', 'animaciones/resp-13/A1_bleb_neumotorax.mp4', 'Neumotórax', SV, 'Joven, alto, delgado y fumador',
        'En el vértice del pulmón hay pequeñas bullas bajo la pleura, los blebs. Un día, sin trauma, una se rompe: el aire pasa a la pleura y el pulmón colapsa. El murmullo disminuye de ese lado. Si es grande o da síntomas, se aspira o se pone un tubo con sello de agua.'),
    'resp-05': one('El oxígeno tiene techo', 'animaciones/resp-05/A1_oxigeno_techo.mp4', 'EPOC retenedor', SV, 'Meta de ochenta y ocho a noventa y dos',
        'En el EPOC, los vasos de los alvéolos que ventilan mal se cierran: es una protección. Con demasiado oxígeno se abren, la sangre pasa por donde no hay aire, y el CO dos sube. Por eso la meta es una saturación de ochenta y ocho a noventa y dos, con Venturi o cánula.'),
    'resp-10': one('Bacilo, granuloma y caverna', 'animaciones/resp-10/A1_granuloma_caverna.mp4', 'Tuberculosis', SV, 'Dos baciloscopías',
        'El bacilo llega al pulmón y el cuerpo lo encierra en un granuloma con necrosis caseosa. Si se reactiva, el centro se vacía y queda una caverna en el vértice, llena de bacilos: el paciente contagia. Ante tos de más de dos semanas, dos baciloscopías, prueba molecular y cultivo.'),
    'resp-12': one('Tres fases', 'animaciones/resp-12/A1_tres_fases.mp4', 'Derrame paraneumónico', SV, 'pH bajo siete coma veinte: drenar',
        'Primero el derrame es exudativo y estéril, y basta el antibiótico. Después las bacterias invaden: el pH baja de siete coma veinte, la glucosa cae y aparecen tabiques, y hay que drenarlo con tubo. Al final se forma una cáscara que atrapa el pulmón, y se necesita cirugía.'),
    'resp-17': one('Central o periférico', 'animaciones/resp-17/A1_central_periferico.mp4', 'Cáncer pulmonar', SV, 'Vena cava superior',
        'Los tumores se ordenan por dónde crecen. El adenocarcinoma, el más frecuente, es periférico. El epidermoide y el de células pequeñas son centrales, y un tumor central puede comprimir la vena cava superior: edema de la cara y los brazos.'),
    'resp-18': one('Desde las bases', 'animaciones/resp-18/A1_fibrosis_bases.mp4', 'Fibrosis pulmonar', SV, 'Panal de abejas',
        'La fibrosis pulmonar idiopática parte en las bases y bajo la pleura, y avanza con quistes en panal de abejas. Es un hombre mayor de sesenta, con disnea progresiva y crépitos tipo velcro. Con un patrón NIU definitivo no se necesita biopsia.'),
    'resp-24': one('Ocupa la hemoglobina', 'animaciones/resp-24/A1_carboxihemoglobina.mp4', 'Monóxido de carbono', SV, 'El saturómetro engaña',
        'El monóxido se une a la hemoglobina doscientas veces más que el oxígeno y la ocupa. El saturómetro de dedo no lo distingue y marca noventa y nueve. Se trata con oxígeno al cien por ciento con mascarilla de reservorio.'),
    'resp-09': one('Una cavidad de pus', 'animaciones/resp-09/A1_absceso_nivel.mp4', 'Absceso pulmonar', SV, 'Nivel hidroaéreo',
        'Una boca sucia y una vía aérea mal protegida llevan a aspirar flora oral. Si esa neumonitis no se trata, el pulmón se necrosa y queda una cavidad con nivel hidroaéreo, con esputo fétido. Casi siempre cura con antibióticos, sin drenaje.'),
    'resp-20': one('La sangre inunda la vía aérea', 'animaciones/resp-20/A1_hemoptisis_masiva.mp4', 'Hemoptisis masiva', SV, 'El lado que sangra hacia abajo',
        'En la hemoptisis masiva el riesgo es la asfixia. Casi siempre sangran las arterias bronquiales. Primero se acuesta al paciente con el lado que sangra hacia abajo, para proteger el pulmón sano, y se intuba con un tubo grueso para la broncoscopía.'),
    'resp-03': one('Los escalones', 'animaciones/resp-03/A1_escalones_gina.mp4', 'GINA', OWN, 'Corticoide inhalado desde el inicio',
        'Todo asmático lleva corticoide inhalado. En los escalones uno y dos, corticoide con formoterol a demanda; en el tres, diario y de rescate; en el cuatro, en dosis media; y en el cinco, se deriva para tiotropio o un biológico. Antes de subir, se revisa la técnica y la adherencia.'),
    'resp-06': one('Sumando puntos', 'animaciones/resp-06/A1_curb65.mp4', 'CURB sesenta y cinco', OWN, 'Dos puntos: hospitalizar',
        'Cada criterio suma un punto: confusión, urea alta, frecuencia respiratoria de treinta o más, presión baja y edad de sesenta y cinco o más. Con cero o uno, ambulatorio; con dos, se hospitaliza; con tres o más, es grave.'),
    'resp-16': one('Tamaño y bordes', 'animaciones/resp-16/A1_nodulo_tamano.mp4', 'Nódulo pulmonar', OWN, 'Bajo seis milímetros: sin control',
        'Bajo seis milímetros, en un paciente de bajo riesgo, no requiere control. Entre seis y ocho se controla con tomografía. Sobre ocho se estima la probabilidad de cáncer. Los bordes espiculados y el crecimiento sugieren cáncer.'),
}
