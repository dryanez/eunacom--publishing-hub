// Clase 15.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El examen que decide todo en un minuto: el agujero estenopeico, y la ventana que se cierra a los ocho años',
      say: 'Bienvenidos. Hoy vemos los vicios de refracción, la presbicia y la ambliopía en niños. Es de los temas más rentables del examen, porque casi todo se resuelve con una sola pregunta: si el paciente mira a través de un agujero estenopeico, ¿mejora o no mejora? Y en pediatría, hay una fecha límite que no puedes olvidar. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Óptica fisiológica',
      title: '¿Por qué el ojo no enfoca en la retina?',
      nodes: [
        { id: 'mcau', col: 0, row: 0, k: 'cause', t: 'Ojo demasiado largo', s: 'O córnea con exceso de potencia' },
        { id: 'mmec', col: 1, row: 0, k: 'mech', t: 'El foco cae antes de la retina', s: 'Delante de la fóvea' },
        { id: 'mefe', col: 2, row: 0, k: 'effect', t: 'Mala visión de lejos', s: 'Visión de cerca excelente' },
        { id: 'mcor', col: 3, row: 0, k: 'good', t: 'Lentes divergentes (-)', s: 'Cóncavos, negativos' },
        { id: 'hcau', col: 0, row: 1, k: 'cause', t: 'Ojo demasiado corto', s: 'O córnea demasiado plana' },
        { id: 'hmec', col: 1, row: 1, k: 'mech', t: 'El foco cae detrás de la retina', s: 'El joven lo compensa acomodando' },
        { id: 'hefe', col: 2, row: 1, k: 'effect', t: 'Astenopía acomodativa', s: 'Cefalea frontal y fatiga vespertina' },
        { id: 'hcor', col: 3, row: 1, k: 'good', t: 'Lentes convergentes (+)', s: 'Convexos, positivos' },
        { id: 'acau', col: 0, row: 2, k: 'cause', t: 'Córnea irregular', s: 'Como un balón de rugby, no una esfera' },
        { id: 'aefe', col: 2, row: 2, k: 'effect', t: 'Visión distorsionada', s: 'Borrosa de lejos y de cerca' },
        { id: 'acor', col: 3, row: 2, k: 'good', t: 'Lentes cilíndricos', s: 'O tóricos' },
      ],
      edges: [
        { from: 'mcau', to: 'mmec' }, { from: 'mmec', to: 'mefe' }, { from: 'mefe', to: 'mcor' },
        { from: 'hcau', to: 'hmec' }, { from: 'hmec', to: 'hefe' }, { from: 'hefe', to: 'hcor' },
        { from: 'acau', to: 'aefe' }, { from: 'aefe', to: 'acor' },
      ],
      steps: [
        { show: ['mcau', 'mmec'], note: 'El ojo emétrope normal enfoca justo en la retina, sin esfuerzo',
          say: 'Empecemos por el mecanismo, porque de ahí sale todo lo demás. En el ojo normal, los rayos de luz convergen exactamente sobre la retina. Mira este esquema: arriba el ojo normal, y debajo, dónde cae el foco en la miopía y en la hipermetropía. En la miopía, el globo ocular es anatómicamente demasiado largo, o la córnea tiene demasiada potencia, y el foco cae por delante de la retina, antes de llegar a ella.',
          photo: { src: 'biblioteca/12_oftalmologia/oftal-09/S1_vicios-refraccion__propio.svg', label: 'Vicios de refracción', at: 'Mira este esquema', credit: 'Dibujo propio (esquema)' } },
        { show: ['mefe', 'mcor'], note: 'El patrón clásico: pizarrón borroso, libro nítido',
          say: 'Y eso explica la clínica que se pregunta siempre: mala visión de lejos, con visión de cerca excelente. El paciente entrecierra los ojos para ver el pizarrón, pero lee perfecto un libro. Como el foco cae antes de la retina, la corrección necesita alejar ese foco: lentes divergentes, cóncavos, de poder negativo.' },
        { show: ['hcau', 'hmec'], note: 'El joven compensa acomodando; el présbita, no',
          say: 'En la hipermetropía pasa lo contrario: el ojo es demasiado corto, y el foco cae, en teoría, por detrás de la retina. Un paciente joven puede compensar esto acomodando activamente con el músculo ciliar.' },
        { show: ['hefe', 'hcor'], note: 'Ojo, con esto: la hipermetropía predispone a glaucoma agudo',
          say: 'Pero acomodar todo el día cansa, y eso da la astenopía acomodativa: cefalea frontal, fatiga ocular, ardor al final del día. La corrección son lentes convergentes, convexos, de poder positivo. Y guarda este dato, porque conecta con una clase anterior: la hipermetropía predispone a un ángulo camerular estrecho, y por lo tanto, a un glaucoma agudo.' },
        { show: ['acau', 'aefe', 'acor'], note: 'Dos focos distintos, ninguno nítido',
          say: 'Y el astigmatismo es distinto a los dos anteriores: no es un problema de largo del ojo, sino de forma. La córnea tiene una curvatura irregular, como un balón de rugby en vez de una pelota, y eso forma dos focos distintos en vez de uno. Por eso la visión sale distorsionada, tanto de lejos como de cerca, y se corrige con lentes cilíndricos o tóricos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Presbicia y el examen de bolsillo',
      title: 'Presbicia y la prueba del agujero estenopeico',
      cards: [
        { title: 'Presbicia', tag: 'Desde los cuarenta a cuarenta y cinco años', kind: 'key', items: [
          { t: 'Pérdida de elasticidad del cristalino', d: 'Proceso fisiológico, inevitable',
            say: 'Ahora un cambio distinto, que no es un vicio de refracción sino el envejecimiento normal del ojo: la presbicia. A partir de los cuarenta a cuarenta y cinco años, el cristalino pierde elasticidad y el núcleo se esclerosa, y pierde la capacidad de cambiar de forma para enfocar de cerca.' },
          { t: 'Síndrome de los brazos cortos', d: 'Aleja el libro o el celular para enfocar',
            say: 'La clínica es reconocible: el paciente aleja los brazos para leer letras pequeñas, el clásico síndrome de los brazos cortos. Se corrige con lentes positivos, convexos, graduados exclusivamente para la visión cercana.' },
        ] },
        { title: 'Agujero estenopeico', tag: 'El examen que responde casi todo', kind: 'criteria', items: [
          { t: 'Un disco con un orificio central', d: 'De uno a uno coma cinco milímetros',
            say: 'Y aquí está la herramienta más poderosa y más barata del médico general: el agujero estenopeico. Es un disco opaco con un pequeño orificio central, de un milímetro a un milímetro y medio.' },
          { t: 'Solo dejan pasar los rayos centrales', d: 'Eliminan la aberración periférica',
            say: 'Al mirar por ese orificio, solo pasan los rayos de luz paralelos al eje óptico, y se elimina la aberración que producen los rayos periféricos.' },
          { t: 'Mejora: vicio de refracción', d: 'No mejora: lesión orgánica o ambliopía',
            say: 'Y esa es la pregunta que decide todo: si la agudeza visual mejora al mirar por el agujero, el problema es puramente refractivo, un vicio de refracción. Si no mejora, el defecto no es óptico: es una lesión orgánica, como una catarata, una degeneración macular o una neuritis óptica, o en un niño, una ambliopía. Este examen te va a ahorrar exámenes de alto costo en la consulta de atención primaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Procedimiento',
      title: 'Toma de visión: la agudeza visual paso a paso',
      cards: [
        { title: 'Cómo se mide', tag: 'Snellen a 6 metros', kind: 'key', items: [
          { t: 'Un ojo a la vez, sin presionar', d: 'Primero sin corrección, luego con ella',
            say: 'Antes de cualquier otra cosa, hay que saber medir la visión. Se usa el optotipo de Snellen a seis metros, o a tres con espejo, con buena iluminación. Se explora cada ojo por separado, ocluyendo el otro con la palma o un oclusor, sin presionar el globo. Primero sin corrección y luego con sus anteojos o lentes de contacto habituales.' },
          { t: 'La línea más pequeña que lee', d: 'Con al menos la mitad de las letras; 20/20 = 1,0',
            say: 'Se registra la línea más pequeña que lee con al menos la mitad de las letras. Veinte veinte equivale a uno coma cero.' },
        ] },
        { title: 'Si no ve la línea mayor', tag: 'Escala descendente', kind: 'criteria', items: [
          { t: 'Acercar, luego contar dedos', d: 'Movimiento de mano, luz, sin percepción de luz',
            say: 'Si no ve ni la línea mayor, se acerca al paciente, y la agudeza es la distancia dividida por doscientos. Después se baja en la escala: cuenta dedos, movimiento de mano, percepción de luz, y finalmente no percepción de luz.' },
        ] },
        { title: 'Estenopeico y niños', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Menos de 20/20: estenopeico', d: 'Si mejora, es refractivo',
            say: 'Si la visión es menor a veinte veinte, usas el estenopeico: si mejora, el defecto es refractivo.' },
          { t: 'Niños: fijación, seguimiento, figuras', d: 'Dos líneas de diferencia sugiere ambliopía',
            say: 'En niños preverbales mides la fijación y el seguimiento; desde los tres años, optotipos de figuras o la E de Snellen. Y una diferencia de dos líneas entre ambos ojos sugiere ambliopía.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Pediatría, GES número cuarenta y uno',
      title: 'Ambliopía: la ventana que se cierra a los ocho años',
      nodes: [
        { id: 'est', col: 0, row: 0, k: 'cause', t: 'Estrabismo', s: 'La corteza suprime la imagen desviada' },
        { id: 'ani', col: 0, row: 1, k: 'cause', t: 'Anisometropía', s: 'Diferencia de refracción entre ambos ojos' },
        { id: 'priv', col: 0, row: 2, k: 'cause', t: 'Privación sensorial', s: 'Catarata congénita, ptosis palpebral completa' },
        { id: 'sup', col: 1, row: 1, k: 'mech', t: 'Supresión cortical', s: 'El cerebro apaga la vía del ojo peor' },
        { id: 'amb', col: 2, row: 1, k: 'risk', t: 'Ambliopía: ojo flojo', s: 'Baja visual sin lesión orgánica en el ojo' },
        { id: 'ven', col: 3, row: 0, k: 'alert', t: 'Ventana hasta los siete u ocho años', s: 'Es cuando madura la plasticidad cortical' },
        { id: 'irr', col: 3, row: 2, k: 'trap', t: 'Después de esa edad', s: 'Ceguera funcional permanente' },
        { id: 'par', col: 4, row: 1, k: 'good', t: 'Parche en el ojo sano', s: 'Fuerza a usar la vía del ojo ambliope' },
      ],
      edges: [
        { from: 'est', to: 'sup' }, { from: 'ani', to: 'sup' }, { from: 'priv', to: 'sup' },
        { from: 'sup', to: 'amb' }, { from: 'amb', to: 'ven', label: 'a tiempo' }, { from: 'amb', to: 'irr', label: 'tarde' },
        { from: 'ven', to: 'par' },
      ],
      steps: [
        { show: ['est', 'ani'], note: 'Dos caminos frecuentes al mismo resultado',
          say: 'Y ahora lo más importante de la clase, porque es donde el examen es más despiadado: la ambliopía, el ojo flojo. Tiene tres causas. Primero, el estrabismo: si un ojo se desvía, el cerebro recibe dos imágenes distintas y, para evitar la visión doble, suprime activamente la que viene del ojo desviado. Segundo, la anisometropía: si hay una diferencia grande de refracción entre ambos ojos, el cerebro procesa solo el ojo claro y apaga el borroso.' },
        { show: ['priv'], note: 'La forma más grave: bloquea la luz desde el nacimiento',
          say: 'Y tercero, la privación sensorial: una catarata congénita, o una ptosis palpebral que tapa completamente la pupila, y que bloquea la llegada de luz desde el nacimiento. Es la forma más grave de todas, porque el estímulo visual falta por completo.' },
        { show: ['sup', 'amb'], note: 'No hay lesión en el ojo: el problema está en la corteza',
          say: 'Y fíjate en algo clave para el examen: en los tres casos, el ojo en sí mismo está sano. Lo que falla es la maduración de la corteza visual, porque nunca recibió el estímulo que necesitaba. Eso es la ambliopía: una disminución de la agudeza visual, unilateral o bilateral, sin ninguna lesión orgánica que la explique.' },
        { show: ['ven'], note: 'El dato que más se pregunta',
          say: 'Y aquí está el dato que más se pregunta de todo el tema: la plasticidad neuronal visual madura hasta los siete a ocho años de edad. Esa es la ventana terapéutica.' },
        { show: ['irr'], note: 'Irreversible de por vida',
          say: 'Si la ambliopía no se corrige antes de esa edad, la ceguera funcional de ese ojo queda permanente e irreversible de por vida, aunque el ojo esté anatómicamente perfecto.' },
        { show: ['par'], note: 'Parche en el ojo bueno, no en el malo',
          say: 'El tratamiento de elección tiene una trampa clásica de nombre: se corrige el vicio con lentes, y se pone el parche oclusivo sobre el ojo sano, no sobre el ojo ambliope. Al tapar el ojo bueno, se obliga a la corteza cerebral a usar y conectar las vías del ojo flojo, durante varias horas al día. Esta es la garantía GES número cuarenta y uno, para el estrabismo en menores de nueve años.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tamizaje',
      title: 'Control visual del niño: qué se mira en cada edad',
      nodes: [
        { id: 'rn', col: 0, row: 1, k: 'start', t: 'Recién nacido y primer año', s: 'Inspección, seguimiento, reflejo rojo' },
        { id: 'm6', col: 1, row: 1, k: 'mech', t: '6 meses a 3 años', s: 'Hirschberg y cover test' },
        { id: 'a3', col: 2, row: 1, k: 'mech', t: '3 a 4 años en adelante', s: 'Agudeza con optotipos' },
        { id: 'der', col: 3, row: 1, k: 'alert', t: 'Derivar', s: 'Menor a 20/30 o 2 líneas de diferencia' },
      ],
      edges: [
        { from: 'rn', to: 'm6' }, { from: 'm6', to: 'a3' }, { from: 'a3', to: 'der' },
      ],
      steps: [
        { show: ['rn'], note: 'Reflejo rojo bilateral y simetría del reflejo corneal',
          say: 'El objetivo del tamizaje en niños es detectar ambliopía, estrabismo, vicios de refracción y patología grave, como catarata congénita, retinoblastoma o glaucoma, dentro del período crítico, antes de los siete a ocho años. En el recién nacido y el primer año se hace inspección ocular, seguimiento de la luz o de la cara, reflejo rojo bilateral y simetría del reflejo corneal.' },
        { show: ['m6'], note: 'Un estrabismo después de 4 a 6 meses nunca es normal',
          say: 'Entre los seis meses y los tres años se agregan el test de Hirschberg y el cover test. Y ojo con esto: un estrabismo que persiste después de los cuatro a seis meses de vida nunca es normal.' },
        { show: ['a3'], note: 'Cada ojo por separado; refuerzo en primero básico',
          say: 'Desde los tres a cuatro años se mide la agudeza visual con optotipos, la E de Snellen o figuras, cada ojo por separado. Se refuerza con la pesquisa en el primer año básico.' },
        { show: ['der'], note: 'Leucocoria, asimetría, estrabismo, nistagmo, ptosis',
          say: 'Se deriva si la agudeza es menor a veinte treinta en cualquiera de los ojos, o si hay diferencia de dos o más líneas entre ambos. Y se deriva siempre ante leucocoria, asimetría del reflejo rojo, estrabismo, nistagmo, fotofobia, lagrimeo persistente, ptosis o antecedentes familiares de retinoblastoma o ambliopía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje',
      title: 'Control visual del adulto',
      cards: [
        { title: 'Según la edad', tag: 'Glaucoma y presbicia', kind: 'key', items: [
          { t: 'Desde los 40 a 45 años', d: 'Presbicia, presión intraocular y papila',
            say: 'En el adulto, el control de salud debe preguntar por dificultad visual y medir la agudeza visual cada vez que hay una queja. Desde los cuarenta a cuarenta y cinco años se consulta para evaluar presbicia y se mide la presión intraocular y la papila, por el glaucoma silencioso.' },
          { t: 'Desde los 60 años', d: 'Control oftalmológico cada 1 a 2 años',
            say: 'Desde los sesenta años, control oftalmológico cada uno a dos años, buscando catarata, glaucoma y degeneración macular.' },
        ] },
        { title: 'Grupos con examen periódico', tag: 'Riesgo', kind: 'criteria', items: [
          { t: 'Diabéticos e hipertensos', d: 'Fondo de ojo al diagnóstico',
            say: 'Tienen examen oftalmológico periódico los diabéticos, con fondo de ojo al diagnóstico en el tipo dos y a los cinco años en el tipo uno, luego anual; los hipertensos, al diagnóstico y ante crisis; quienes tienen familiares con glaucoma, los miopes altos, los usuarios crónicos de corticoides o de hidroxicloroquina y los trabajadores expuestos.' },
        ] },
        { title: 'Cuándo derivar', tag: 'Alarma', kind: 'alert', items: [
          { t: 'Agudeza corregida peor que 20/40', d: 'O diferencia entre ojos, campo o pupila alterados',
            say: 'Se deriva si la agudeza corregida es peor que veinte cuarenta, si hay diferencia entre ambos ojos, defectos de campo, cambios pupilares o hallazgos en el fondo de ojo.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Dónde enfoca el ojo',
      images: [
        { src: 'animaciones/oftal-09/A1_emetrope.mp4', label: 'Normal', credit: 'Animación propia' },
        { src: 'animaciones/oftal-09/A2_miopia.mp4', label: 'Miopía', credit: 'Animación propia' },
        { src: 'animaciones/oftal-09/A3_hipermetropia.mp4', label: 'Hipermetropía', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Enfoca en la retina',
          say: 'En el ojo normal, los rayos se juntan exactamente en la retina.' },
        { note: 'Delante de la retina',
          say: 'En la miopía se juntan delante de la retina, y el paciente ve mal de lejos. Una lente divergente los separa y el foco vuelve a la retina.' },
        { note: 'Detrás de la retina',
          say: 'En la hipermetropía se juntan detrás de la retina. Una lente convergente adelanta el foco.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estrabismo',
      title: 'Estrabismo: cuando los ojos no van paralelos',
      cards: [
        { title: 'Tipos', tag: '3 a 4% de los niños', kind: 'criteria', items: [
          { t: 'Esotropía: hacia adentro', d: 'Congénita antes de 6 meses; acomodativa a los 2 o 3 años',
            say: 'El estrabismo es la pérdida del paralelismo ocular, afecta a tres a cuatro por ciento de los niños, y es el principal factor de riesgo de ambliopía. La esotropía, desviación hacia adentro, puede ser congénita, antes de los seis meses, con ángulo grande; o acomodativa, a los dos o tres años, ligada a hipermetropía, y se corrige con lentes.' },
          { t: 'Exotropía: hacia afuera', d: 'Suele ser intermitente, con la distancia o el cansancio',
            say: 'La exotropía, hacia afuera, suele ser intermitente: se nota al mirar de lejos o cuando el niño está cansado.' },
          { t: 'Pseudoestrabismo', d: 'Puente nasal ancho o epicanto; reflejo simétrico',
            say: 'Y no todo lo que parece estrabismo lo es: el pseudoestrabismo, por puente nasal ancho o epicanto, tiene un reflejo corneal simétrico en el Hirschberg.' },
        ] },
        { title: 'Banderas rojas', tag: 'Estudio urgente', kind: 'alert', items: [
          { t: 'Aparición brusca o paralítico', d: 'Parálisis del VI, ptosis, leucocoria',
            say: 'Un estrabismo de aparición brusca, paralítico, como una parálisis del sexto nervio, con limitación de la mirada, ptosis o leucocoria, requiere estudio urgente, por un tumor intracraneano o un retinoblastoma.' },
        ] },
        { title: 'Conducta inicial', tag: 'GES número 41', kind: 'pharma', items: [
          { t: 'Agudeza, refracción y lentes', d: 'Oclusión del ojo sano si hay ambliopía',
            say: 'La conducta: medir agudeza visual, buscar el vicio de refracción y corregirlo con lentes, ocluyendo el ojo sano si hay ambliopía. Todo estrabismo se deriva a oftalmología, con GES número cuarenta y uno en menores de nueve años, para decidir una cirugía de los músculos extraoculares.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen',
      title: 'Test de Hirschberg y cover test',
      cards: [
        { title: 'Hirschberg', tag: 'Reflejo de una linterna', kind: 'key', items: [
          { t: 'Linterna a 33 cm: ¿dónde cae el reflejo?', d: 'Normal: simétrico, apenas nasal al centro',
            say: 'El test de Hirschberg usa el reflejo de una linterna en la córnea. Se enfoca la luz a unos treinta y tres centímetros del rostro y el niño la mira. Lo normal es un reflejo simétrico en ambos ojos, ligeramente nasal al centro de la pupila. Mira esta foto: el reflejo del ojo derecho se desplazó hacia el borde temporal de la pupila.',
            photos: [
              { src: 'biblioteca/12_oftalmologia/oftal-09/54_test-hirschberg__kanski_p759.jpg', label: 'Hirschberg: reflejo temporal', at: 'Mira esta foto', credit: "Kanski's Clinical Ophthalmology, 8.ª ed., p. 759" },
              { src: 'biblioteca/12_oftalmologia/oftal-09/01_estrabismo-hirschberg_alt1__cto-oftalmo_p80.jpg', label: 'Reflejo descentrado', credit: 'Manual CTO Oftalmología 14.ª ed., p. 80' },
            ] },
          { t: 'Temporal: esotropía. Nasal: exotropía', d: '1 mm ≈ 7°; borde pupilar 15°, limbo 45°',
            say: 'Si el reflejo se desplaza hacia temporal, el ojo está desviado hacia adentro: esotropía. Si va hacia nasal, es una exotropía. Cada milímetro equivale a unos siete grados: en el borde de la pupila, quince grados; a mitad del iris, treinta; en el limbo, cuarenta y cinco. Es una prueba objetiva y aproximada, útil en niños pequeños, y distingue un estrabismo verdadero de un pseudoestrabismo.' },
        ] },
        { title: 'Cover test', tag: 'Procedimiento «Realizar»', kind: 'criteria', items: [
          { t: 'Cover: tapas el ojo fijador', d: 'Si el otro ojo se mueve, había una tropia',
            say: 'El cover test se hace con el paciente fijando un objeto, de lejos y luego de cerca; en niños, un juguete luminoso. Cubres un ojo y miras el ojo descubierto. Si al tapar el ojo fijador el otro se mueve para tomar la fijación, había una tropia, un estrabismo manifiesto: si se mueve de afuera hacia adentro era una exotropía; de adentro hacia afuera, una esotropía.' },
          { t: 'Uncover: foria si se desvía y se alinea', d: 'Desviación latente, sin importancia',
            say: 'En el uncover, al retirar el oclusor, si el ojo destapado se desvía y luego se alinea, hay una foria, una desviación latente que casi siempre no importa. Y una tropia constante en un niño obliga a derivar y a descartar ambliopía y patología de la retina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen',
      title: 'El reflejo rojo: mirar dentro del ojo del lactante',
      cards: [
        { title: 'Cómo se hace', tag: 'Prueba de Brückner', kind: 'key', items: [
          { t: 'Penumbra, a 50 a 80 cm, ambos ojos a la vez', d: 'Oftalmoscopio con el disco en 0',
            say: 'El reflejo rojo, o prueba de Brückner, es la forma más simple de pesquisar patología de los medios transparentes en un lactante que no coopera. Sala en penumbra, el oftalmoscopio directo con el disco en cero, a cincuenta a ochenta centímetros, iluminando ambos ojos a la vez, con el niño mirando la luz.' },
          { t: 'Normal: rojo anaranjado, simétrico', d: 'Anormal: blanco, oscuro, ausente o asimétrico',
            say: 'Lo normal es un reflejo rojo anaranjado brillante y simétrico. Anormal es un reflejo blanco, que es la leucocoria, oscuro, ausente o asimétrico.' },
        ] },
        { title: 'Si está alterado', tag: 'Derivación urgente', kind: 'alert', items: [
          { t: 'Leucocoria: cinco diagnósticos', d: 'Retinoblastoma, catarata congénita, vítreo primario, Coats, ROP',
            say: 'Ante una leucocoria descarta siempre retinoblastoma, catarata congénita, persistencia del vítreo primario, enfermedad de Coats y retinopatía del prematuro. Un reflejo más brillante o de otro color en un solo ojo orienta a anisometropía o estrabismo, con riesgo de ambliopía.' },
          { t: 'En cada control del primer año', d: 'Cualquier alteración: oftalmología urgente',
            say: 'Se hace en el recién nacido, en cada control de salud del primer año y ante cualquier sospecha familiar. Cualquier alteración implica derivación urgente a oftalmología.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumor ocular infantil',
      title: 'Retinoblastoma: toda leucocoria es sospechosa',
      cards: [
        { title: 'Qué es', tag: 'Gen RB1', kind: 'criteria', items: [
          { t: 'El tumor ocular maligno más frecuente del niño', d: '1 en 15 a 20 mil; 1 de cada 3 es hereditario y bilateral',
            say: 'El retinoblastoma es el tumor ocular maligno más frecuente de la infancia, uno en quince a veinte mil nacidos vivos, por mutación del gen RB uno. Un tercio a cuarenta por ciento son hereditarios y bilaterales. Aparece antes de los cinco años, en promedio a los dieciocho meses.' },
          { t: 'Leucocoria en más del 60%', d: 'Estrabismo en 20%; después, ojo rojo, glaucoma, proptosis',
            say: 'Se presenta con leucocoria en más del sesenta por ciento, a veces vista en fotos con flash; con estrabismo en un veinte por ciento; y, en etapas avanzadas, con ojo rojo doloroso, glaucoma y proptosis.' },
        ] },
        { title: 'Conducta', tag: 'Sospecha, inicial y derivar', kind: 'alert', items: [
          { t: 'Retinoblastoma hasta demostrar lo contrario', d: 'Sin biopsia ni espera: oftalmología y oncología',
            say: 'Toda leucocoria o reflejo rojo anormal es retinoblastoma hasta demostrar lo contrario. No se hace biopsia ni se espera: derivación urgente a oftalmología y oncología pediátrica, con GES de cáncer en menores de quince años.' },
          { t: 'Sobrevida mayor al 95% si es precoz', d: 'Consejo genético y control de familiares',
            say: 'El estudio incluye fondo de ojo bajo anestesia, ecografía y resonancia. La sobrevida supera el noventa y cinco por ciento si el diagnóstico es precoz, y se requiere consejo genético y control de los familiares. En adultos, el equivalente endocular es el melanoma de coroides, o una metástasis de mama o pulmón.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lesión vascular',
      title: 'Hemangioma periorbitario del lactante',
      cards: [
        { title: 'Historia natural', tag: 'Tumor benigno más frecuente', kind: 'criteria', items: [
          { t: 'Crece rápido los primeros meses', d: 'Luego involuciona: 50% a los 5 años',
            say: 'El hemangioma infantil es el tumor benigno más frecuente de la infancia. No está al nacer, o es una marca pálida, crece rápido durante los primeros meses, la fase proliferativa, y luego involuciona de forma gradual, con regresión de cerca de la mitad a los cinco años.' },
          { t: 'Palpebral: riesgo de ambliopía', d: 'Tapa el eje visual o induce astigmatismo',
            say: 'Los periorbitarios son peligrosos por ambliopía, ya sea porque tapan el eje visual o porque comprimen y inducen astigmatismo, y por proptosis. Mira este lactante: el hemangioma capilar del párpado superior cubre parte del ojo. Si cubre la pupila, es una urgencia por riesgo visual.',
            photo: { src: 'biblioteca/12_oftalmologia/oftal-09/55_hemangioma-capilar-palpebral__kanski_p113.jpg', label: 'Hemangioma palpebral', at: 'Mira este lactante', credit: "Kanski's Clinical Ophthalmology, 8.ª ed., p. 113" } },
        ] },
        { title: 'Tratamiento', tag: 'Propranolol', kind: 'pharma', items: [
          { t: 'Observar lo pequeño; propranolol lo de riesgo', d: 'Uno a tres mg/kg al día, inicio supervisado',
            say: 'Las lesiones pequeñas y sin compromiso funcional se observan. El fármaco de elección en las periorbitarias y de riesgo es el propranolol oral, de uno a tres miligramos por kilo al día, con inicio supervisado. El timolol tópico sirve en lesiones superficiales pequeñas, y los corticoides sistémicos no son primera línea. Se deriva a oftalmología y dermatología.' },
          { t: 'Mancha en vino de Oporto en V1', d: 'Sturge-Weber: glaucoma y epilepsia',
            say: 'Y una mancha en vino de Oporto en la región del primer ramo del trigémino o en el párpado superior sugiere síndrome de Sturge-Weber, con glaucoma y epilepsia: se deriva.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Adulto mayor, GES número 40',
      title: 'Visión borrosa a los 65 años o más',
      cards: [
        { title: 'Qué esperar', tag: 'Dos vicios frecuentes', kind: 'criteria', items: [
          { t: 'Presbicia casi universal e hipermetropía', d: 'Más miopización por esclerosis nuclear',
            say: 'En el adulto mayor de sesenta y cinco años, la visión borrosa tiene dos vicios de refracción frecuentes: la presbicia, casi universal, y la hipermetropía. A eso se suma la miopización por esclerosis nuclear del cristalino, el inicio de una catarata, que obliga a cambiar la graduación cada pocos años y puede mejorar la visión de cerca.' },
        ] },
        { title: 'Diagnóstico y GES', tag: 'Específico y tratamiento inicial', kind: 'pharma', items: [
          { t: 'Visión con y sin corrección, estenopeico', d: 'Reflejo rojo y fondo de ojo para descartar organicidad',
            say: 'Se toma la visión con y sin corrección, se hace el estenopeico, y se examina el reflejo rojo y el fondo de ojo para descartar una causa orgánica. Se solicita la refracción y se entrega la receta.' },
          { t: 'GES 40: confirmación y entrega de lentes', d: 'Si no mejora con lentes: oftalmología',
            say: 'Con la garantía GES número cuarenta, el paciente de sesenta y cinco años o más con sospecha de vicio de refracción accede a la confirmación diagnóstica y a la entrega de lentes, de lejos, de cerca o bifocales. Si no mejora con estenopeico o lentes, se deriva por catarata, glaucoma, degeneración macular o retinopatía. Y recuerda que la mala visión aumenta el riesgo de caídas y fracturas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Un cuadro, cinco entidades, una sola pregunta cada vez',
      head: ['Trastorno', 'Mecanismo', 'Corrección', 'La trampa que se pregunta'],
      rows: [
        { cells: ['Miopía', 'Ojo largo; foco delante de la retina', 'Lentes divergentes (-)', 'Riesgo de desprendimiento de retina'],
          say: 'Repasemos rápido. La miopía tiene el ojo largo, el foco cae delante de la retina, se corrige con lentes divergentes, y la trampa es su asociación con el desprendimiento de retina y el glaucoma crónico.' },
        { cells: ['Hipermetropía', 'Ojo corto; foco detrás de la retina', 'Lentes convergentes (+)', 'Riesgo de glaucoma agudo por ángulo estrecho'],
          say: 'La hipermetropía tiene el ojo corto, foco detrás de la retina, se corrige con lentes convergentes, y la trampa es que predispone al glaucoma agudo de ángulo cerrado.' },
        { cells: ['Astigmatismo', 'Córnea con curvatura irregular', 'Lentes cilíndricos o tóricos', 'No es un problema de largo del ojo'],
          say: 'El astigmatismo no depende del largo del ojo, sino de una córnea irregular, y se corrige con lentes cilíndricos. Si el examen te habla de dos focos distintos, es astigmatismo, no miopía ni hipermetropía.' },
        { cells: ['Presbicia', 'Cristalino pierde elasticidad después de los cuarenta', 'Lentes positivos solo para cerca', 'No es hipermetropía ni requiere fondo de ojo'],
          say: 'La presbicia es la pérdida fisiológica de elasticidad del cristalino después de los cuarenta años, se corrige con lentes positivos solo para cerca, y la trampa es confundirla con una hipermetropía o pedir estudios que no hacen falta: es un diagnóstico clínico, por la edad.' },
        { cells: ['Ambliopía', 'Supresión cortical antes de los ocho años', 'Parche en el ojo sano más lentes', 'Irreversible si se trata después de esa edad'],
          say: 'Y la ambliopía es la supresión cortical antes de los ocho años, se trata con parche en el ojo sano, y la trampa más grave de todas: si no se trata a tiempo, es irreversible de por vida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Madre consulta en control infantil con su hijo de 4 años porque nota que en las fotografías familiares el ojo izquierdo del niño parece desviarse levemente hacia la nariz. Al examen: agudeza visual en ojo derecho 20/20 y en ojo izquierdo 20/80, que no mejora al mirar por el agujero estenopeico. Medios transparentes y fondo de ojo normal. La prueba de Hirschberg revela asimetría en el reflejo corneal del ojo izquierdo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar a la madre: es normal que un niño de esa edad desvíe levemente un ojo' },
        { letter: 'B', text: 'Prescribir lentes ópticos y controlar la agudeza visual en un año' },
        { letter: 'C', text: 'Derivar de urgencia a oftalmología pediátrica para corrección óptica y terapia con parche en el ojo derecho' },
        { letter: 'D', text: 'Solicitar resonancia magnética de órbita antes de decidir cualquier tratamiento' },
        { letter: 'E', text: 'Indicar parche en el ojo izquierdo, que es el ojo con menor agudeza visual' },
      ],
      correct: 'C',
      explanation: 'Estrabismo con endotropia y agudeza visual 20/80 en el ojo desviado, que no mejora con agujero estenopeico y con fondo de ojo normal: ambliopía estrábica. Es GES 41 (estrabismo en menores de 9 años); la conducta es corrección óptica y parche en el ojo sano, el derecho, antes de que se cierre la ventana de plasticidad a los 7-8 años.',
      say: {
        stem: 'Vamos al caso. Una madre consulta en control infantil con su hijo de cuatro años, porque en las fotos familiares nota que el ojo izquierdo se desvía levemente hacia la nariz. La agudeza visual del ojo derecho es normal, pero la del ojo izquierdo está muy disminuida, y no mejora con el agujero estenopeico. El fondo de ojo es normal, y la prueba de Hirschberg muestra el reflejo corneal asimétrico en ese ojo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar a la madre porque es normal a esa edad, prescribir lentes y controlar en un año, derivar de urgencia para corrección óptica y parche en el ojo derecho, pedir una resonancia de órbita antes de decidir, o poner el parche en el ojo izquierdo, que es el que ve peor. Piénsalo.',
        answer: 'Es la C. Hay estrabismo hacia la nariz y baja visual en ese mismo ojo, que no mejora con el agujero estenopeico, con fondo de ojo normal: ambliopía estrábica. El niño tiene cuatro años, dentro de la ventana de los siete a ocho, así que se actúa ahora, con lentes y parche en el ojo sano, el derecho. La opción E es la trampa: el parche va en el ojo que ve bien.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 125',
      stem: 'Un paciente de 18 años presenta agudeza visual de 1 en el ojo izquierdo y de 0,6 en el ojo derecho, que mejora a 0,8 al mirar por un agujero estenopeico. No presenta dolor.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glaucoma' },
        { letter: 'B', text: 'Estrabismo' },
        { letter: 'C', text: 'Vicio de refracción' },
        { letter: 'D', text: 'Catarata' },
        { letter: 'E', text: 'Coriorretinitis' },
      ],
      correct: 'C',
      explanation: 'La mejoría de la agudeza visual al mirar por un agujero estenopeico es característica de los vicios de refracción: el defecto es puramente óptico, no orgánico.',
      say: {
        stem: 'Vamos con una pregunta real, del EUNACOM de julio de dos mil diecisiete. Un paciente de dieciocho años tiene una visión perfecta en el ojo izquierdo, pero en el ojo derecho está reducida, y mejora al mirar por un agujero estenopeico. No tiene dolor.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: glaucoma, estrabismo, vicio de refracción, catarata, o coriorretinitis. Piénsalo.',
        answer: 'Es la C, vicio de refracción. Este es el caso más directo de todo el tema: la agudeza visual mejora con el agujero estenopeico, así que el problema es puramente óptico. Ni el glaucoma, ni la catarata, ni una coriorretinitis mejoran con ese examen, porque son lesiones orgánicas, no ópticas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 95',
      stem: 'Un niño de 5 años, nacido a las 32 semanas por parto vaginal, es llevado a control porque se acerca mucho a la pantalla cuando ve televisión. La inspección ocular es normal. La agudeza visual es 20/25 en el ojo derecho y 20/80 en el ojo izquierdo, la cual mejora a 20/25 al usar un agujero estenopeico.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Ambliopía' },
        { letter: 'B', text: 'Microftalmia' },
        { letter: 'C', text: 'Ametropía' },
        { letter: 'D', text: 'Glaucoma congénito' },
        { letter: 'E', text: 'Retinopatía del prematuro' },
      ],
      correct: 'C',
      explanation: 'La mejora de la agudeza visual al mirar a través de un agujero estenopeico es característica de los vicios de refracción, o ametropías. Aquí la agudeza visual se corrige por completo, así que no hay ambliopía; si solo hubiese mejorado en forma parcial, el diagnóstico habría incluido ambliopía anisometrópica.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Un niño de cinco años, nacido a las treinta y dos semanas, es llevado a control porque se acerca mucho a la pantalla del televisor. La inspección ocular es normal. La agudeza visual del ojo izquierdo está reducida, pero mejora casi por completo al usar el agujero estenopeico.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: ambliopía, microftalmia, ametropía, glaucoma congénito, o retinopatía del prematuro. Piénsalo.',
        answer: 'Es la C, ametropía, es decir, un vicio de refracción. Este caso enseña la diferencia más fina del tema: la agudeza visual mejoró casi por completo con el agujero estenopeico, así que no es ambliopía. Si hubiera mejorado solo a medias, ahí sí tendrías que pensar en una ambliopía anisometrópica encima del vicio de refracción. El antecedente de prematurez es un distractor: la inspección y el resto del examen son normales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 38',
      stem: 'Un niño de 2 meses presenta estrabismo bilateral, fluctuante y que aparece con bastante frecuencia. Ha incrementado bien de peso y no tiene otros síntomas. Se realiza examen ocular, que muestra rojo pupilar presente bilateral, sin defectos, y movilidad ocular sin alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar fondo de ojo' },
        { letter: 'B', text: 'Derivar a oftalmólogo pediátrico' },
        { letter: 'C', text: 'Indicar parches oculares intermitentes' },
        { letter: 'D', text: 'Solicitar tomografía computada de órbitas' },
        { letter: 'E', text: 'Mantener el control habitual del niño sano' },
      ],
      correct: 'E',
      explanation: 'En los primeros meses de vida, un estrabismo intermitente, fluctuante y con reflejo rojo y motilidad normales suele ser fisiológico, porque la fijación binocular aún no ha madurado. No exige derivación ni exámenes de urgencia; sí lo haría si fuera fijo, constante, o si alterara el reflejo rojo.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de agosto de dos mil veintiuno, y que es la contracara de todo lo que hemos visto. Un niño de dos meses tiene un estrabismo bilateral, que aparece y desaparece, es decir, es fluctuante. Sube bien de peso y no tiene otros síntomas. El reflejo rojo pupilar está presente en ambos ojos, sin defectos, y la movilidad ocular es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hacer un fondo de ojo, derivar a oftalmólogo pediátrico, indicar parches intermitentes, pedir una tomografía de órbitas, o simplemente mantener el control habitual del niño sano. Piénsalo.',
        answer: 'Es la E. No todo estrabismo en un lactante es patológico: en los primeros meses de vida, la fijación binocular todavía no madura, y es normal que el ojo se desvíe de forma intermitente y fluctuante. La alarma se enciende si el estrabismo es fijo y constante, o si el reflejo rojo está alterado, que es justo lo que este niño no tiene. Sobrederivar aquí no es lo correcto: se mantiene el control habitual del niño sano.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.1.031 · Vicios de refracción en personas de 65 años o más",
      "stem": "Hombre de 68 años, beneficiario de FONASA, consulta en su CESFAM porque desde hace 2 años debe alejar el diario para leer y ve borroso de cerca, sin dolor ni ojo rojo. La agudeza visual de lejos es 20/30 bilateral y mejora con agujero estenopeico. El rojo pupilar es normal.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Indicar colirio lubricante y control en 1 año"
        },
        {
          "letter": "B",
          "text": "Derivar de urgencia por sospecha de glaucoma agudo"
        },
        {
          "letter": "C",
          "text": "Derivar con sospecha GES de vicio de refracción en mayores de 65 años para evaluación y entrega de lentes ópticos"
        },
        {
          "letter": "D",
          "text": "Solicitar resonancia magnética de cerebro"
        },
        {
          "letter": "E",
          "text": "Derivar a cirugía de catarata"
        }
      ],
      "correct": "C",
      "explanation": "Dificultad para la visión cercana que se corrige alejando el texto es presbicia, y la mejoría con estenopeico confirma un vicio de refracción. Las personas de 65 años o más tienen garantía GES para el diagnóstico y la entrega de lentes ópticos. El rojo pupilar normal hace improbable una catarata significativa.",
      "say": {
        "stem": "Hombre de sesenta y ocho años, de FONASA, que hace dos años tiene que alejar el diario para leer y ve borroso de cerca, sin dolor ni ojo rojo. Su visión de lejos mejora con el agujero estenopeico y el rojo pupilar es normal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: lubricante, derivar de urgencia por glaucoma agudo, derivar por GES de vicio de refracción para lentes, resonancia de cerebro o cirugía de catarata. Piénsalo.",
        "answer": "Es la C. Es una presbicia con vicio de refracción que mejora con el estenopeico, y desde los sesenta y cinco años tiene garantía GES para recibir lentes. La catarata tienta por la edad, pero el rojo pupilar normal y la mejoría con el estenopeico apuntan a un problema refractivo, no del cristalino."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.3.004 · Examen visual preventivo en niños",
      "stem": "En el control de salud de un niño de 4 años, sano, se realiza tamizaje de agudeza visual con cartilla adecuada a su edad. Obtiene 20/40 en el ojo derecho y 20/20 en el izquierdo. El rojo pupilar es simétrico y el test de Hirschberg es normal.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Tranquilizar: a esta edad es normal una diferencia de dos líneas entre ambos ojos"
        },
        {
          "letter": "B",
          "text": "Repetir el tamizaje en 2 años, al ingreso escolar"
        },
        {
          "letter": "C",
          "text": "Solicitar resonancia magnética de órbitas"
        },
        {
          "letter": "D",
          "text": "Indicar parche en el ojo izquierdo sin evaluación previa"
        },
        {
          "letter": "E",
          "text": "Derivar a oftalmología para evaluación de ambliopía y vicio de refracción"
        }
      ],
      "correct": "E",
      "explanation": "En el tamizaje preescolar se deriva si la agudeza es peor de lo esperado para la edad o si hay una diferencia de 2 líneas o más entre ambos ojos, porque sugiere ambliopía por anisometropía. La ambliopía solo es tratable en la ventana de plasticidad visual, por lo que no se debe esperar.",
      "say": {
        "stem": "En el control de salud de un niño sano de cuatro años, el tamizaje visual muestra veinte cuarenta en el ojo derecho y veinte veinte en el izquierdo. El rojo pupilar es simétrico y el reflejo corneal de Hirschberg es normal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: tranquilizar porque la diferencia es normal, repetir en dos años, resonancia de órbitas, parche sin evaluación o derivar a oftalmología por posible ambliopía. Piénsalo.",
        "answer": "Es la E. Una diferencia de dos líneas o más entre ambos ojos sugiere ambliopía, y eso se trata solo mientras el sistema visual es plástico, en la primera infancia. Esperar al ingreso escolar tienta, pero cada año perdido reduce la posibilidad de recuperar visión en ese ojo."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2022 · Pregunta 115",
      "stem": "Un lactante de 1 mes acude a control. Al examen físico presenta estrabismo intermitente y asimétrico de ambos ojos. El resto de la inspección ocular es normal, incluido el rojo pupilar. Su crecimiento, desarrollo psicomotor y el resto de su examen físico son normales.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Derivar a oftalmólogo"
        },
        {
          "letter": "B",
          "text": "Mantener los controles habituales del lactante"
        },
        {
          "letter": "C",
          "text": "Solicitar RM de cerebro"
        },
        {
          "letter": "D",
          "text": "Realizar fondo de ojo"
        },
        {
          "letter": "E",
          "text": "Indicar parche ocular alternante"
        }
      ],
      "correct": "B",
      "explanation": "En los primeros meses la fijación y la coordinación binocular son inmaduras, por lo que un estrabismo intermitente es fisiológico hasta los 4 a 6 meses. Si el resto del examen es normal, se mantienen los controles. Debe derivarse si el estrabismo es constante, persiste después de los 6 meses o hay rojo pupilar alterado.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un lactante de un mes tiene un estrabismo intermitente de ambos ojos, con rojo pupilar y resto del examen normales.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: derivar a oftalmólogo, controles habituales, resonancia de cerebro, fondo de ojo o parche alternante. Piénsalo.",
        "answer": "Es la B. Un estrabismo intermitente en el primer mes es fisiológico por inmadurez de la visión binocular. Derivar al oftalmólogo tienta, pero corresponde si es constante o persiste después de los seis meses."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.098 · Vicios de refracción",
      "stem": "Un escolar de 9 años refiere que no ve bien la pizarra desde hace meses y entrecierra los ojos para mirar de lejos. Lee bien de cerca. La agudeza visual es 20/80 en ambos ojos y mejora a 20/25 con el agujero estenopeico. El resto del examen ocular es normal.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Miopía"
        },
        {
          "letter": "B",
          "text": "Hipermetropía"
        },
        {
          "letter": "C",
          "text": "Presbicia"
        },
        {
          "letter": "D",
          "text": "Ambliopía"
        },
        {
          "letter": "E",
          "text": "Catarata congénita"
        }
      ],
      "correct": "A",
      "explanation": "Mala visión de lejos con buena visión de cerca, que mejora con el agujero estenopeico (indica un defecto refractivo), es miopía, el vicio de refracción más frecuente en escolares. Se corrige con lentes divergentes indicados por oftalmólogo. La hipermetropía afecta más la visión cercana y da astenopia; la ambliopía no mejora con el estenopeico; la presbicia es del adulto.",
      "say": {
        "stem": "Un escolar de nueve años no ve bien la pizarra y entrecierra los ojos, pero lee bien de cerca. Su visión mejora mucho con el agujero estenopeico.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: miopía, hipermetropía, presbicia, ambliopía o catarata congénita. Piénsalo.",
        "answer": "Es la A. Mala visión de lejos con buena visión de cerca que mejora con el estenopeico es una miopía. La ambliopía tienta en un niño, pero no mejora con el agujero estenopeico."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.01.2.006 · Hemangiomas y malformaciones vasculares del recién nacido",
      "stem": "Lactante de 6 semanas con un hemangioma infantil en el párpado superior derecho que apareció a los pocos días de vida y ha crecido rápidamente. Hoy cubre parcialmente la pupila e impide la apertura completa del ojo.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Observación, ya que todos los hemangiomas involucionan"
        },
        {
          "letter": "B",
          "text": "Láser ablativo inmediato en atención primaria"
        },
        {
          "letter": "C",
          "text": "Derivar con urgencia para inicio de propranolol oral y evaluación oftalmológica por riesgo de ambliopía"
        },
        {
          "letter": "D",
          "text": "Cirugía de exéresis electiva a los 5 años"
        },
        {
          "letter": "E",
          "text": "Corticoide tópico de alta potencia"
        }
      ],
      "correct": "C",
      "explanation": "Los hemangiomas infantiles crecen sobre todo en los primeros meses. Los periorbitarios que ocluyen el eje visual o deforman la córnea causan ambliopía (deprivación o astigmatismo) y requieren tratamiento precoz: propranolol oral, primera línea, iniciado por especialista. La observación solo es adecuada para hemangiomas pequeños sin riesgo funcional ni estético.",
      "say": {
        "stem": "Lactante de seis semanas con un hemangioma de párpado superior que crece rápido y ya tapa parcialmente la pupila.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: observar, láser en atención primaria, derivar urgente para propranolol y evaluación oftalmológica, cirugía a los cinco años o corticoide tópico. Piénsalo.",
        "answer": "Es la C. Un hemangioma que tapa el eje visual arriesga una ambliopía, así que se deriva con urgencia para propranolol oral. Observar tienta porque muchos hemangiomas involucionan, pero el daño visual se produce antes de que eso ocurra."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 83",
      "stem": "Niño de 8 meses presenta leucocoria del ojo derecho. Como antecedente, su madre usa una prótesis ocular por una pérdida ocular en su infancia, de causa no precisada.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Retinopatía del prematuro"
        },
        {
          "letter": "B",
          "text": "Catarata congénita"
        },
        {
          "letter": "C",
          "text": "Retinoblastoma"
        },
        {
          "letter": "D",
          "text": "Glaucoma congénito"
        },
        {
          "letter": "E",
          "text": "Infección por Chlamydia trachomatis"
        }
      ],
      "correct": "C",
      "explanation": "Leucocoria en un lactante, con antecedente materno de enucleación en la infancia, sugiere retinoblastoma hereditario (mutación germinal de RB1, autosómica dominante). Es el tumor intraocular maligno más frecuente en niños; se presenta con leucocoria o estrabismo. Requiere derivación urgente a oftalmología y consejo genético.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Lactante de ocho meses con pupila blanca en el ojo derecho, cuya madre usa prótesis ocular por perder un ojo en la infancia.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: retinopatía del prematuro, catarata congénita, retinoblastoma, glaucoma congénito o clamidia. Piénsalo.",
        "answer": "Es la C. La leucocoria con una madre que perdió un ojo en la infancia apunta a retinoblastoma hereditario. La catarata congénita tienta porque también da pupila blanca, pero no explica el antecedente familiar de enucleación."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.3.003 · Examen visual en adulto",
      "stem": "Mujer de 45 años, sin antecedentes, consulta porque desde hace unos meses debe alejar el celular y los textos para poder leer, especialmente con poca luz. La agudeza visual de lejos es 20/20 en ambos ojos, el segmento anterior es normal y la presión intraocular es normal.",
      "question": "¿Cuál es el diagnóstico más probable y la conducta?",
      "options": [
        {
          "letter": "A",
          "text": "Catarata; cirugía"
        },
        {
          "letter": "B",
          "text": "Degeneración macular; antiangiogénicos"
        },
        {
          "letter": "C",
          "text": "Miopía; lentes negativos"
        },
        {
          "letter": "D",
          "text": "Glaucoma crónico; colirios hipotensores"
        },
        {
          "letter": "E",
          "text": "Presbicia; corrección con lentes positivos (convergentes) para visión cercana"
        }
      ],
      "correct": "E",
      "explanation": "La presbicia es la pérdida de acomodación del cristalino con la edad; desde los 40 a 45 años dificulta la visión cercana y obliga a alejar el texto. Se corrige con lentes positivos para lectura. El examen visual del adulto incluye agudeza visual lejana y cercana y, desde los 40 años, presión intraocular y fondo de ojo.",
      "say": {
        "stem": "Mujer de cuarenta y cinco años que debe alejar el celular para leer, con visión de lejos normal y examen ocular normal.",
        "question": "¿Cuál es el diagnóstico y la conducta?",
        "options": "Las opciones: catarata, degeneración macular, miopía con lentes negativos, glaucoma o presbicia con lentes positivos para cerca. Piénsalo.",
        "answer": "Es la E. Es presbicia, la pérdida de acomodación con la edad, y se corrige con lentes positivos para cerca. La miopía tienta, pero la miopía afecta la visión de lejos, que aquí es normal."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.5.004 · Cover test",
      "stem": "Niño de 3 años; los padres notan que a veces \"se le va un ojo\". El reflejo corneal es simétrico. Al realizar el cover test, al tapar el ojo izquierdo, el ojo derecho no se mueve; al tapar el ojo derecho, el ojo izquierdo hace un movimiento de afuera hacia adentro para fijar.",
      "question": "¿Cuál es la interpretación del examen?",
      "options": [
        {
          "letter": "A",
          "text": "Examen normal"
        },
        {
          "letter": "B",
          "text": "Exotropia del ojo izquierdo (estrabismo divergente); derivar a oftalmología"
        },
        {
          "letter": "C",
          "text": "Endotropia del ojo izquierdo"
        },
        {
          "letter": "D",
          "text": "Pseudoestrabismo por epicanto"
        },
        {
          "letter": "E",
          "text": "Exotropia del ojo derecho"
        }
      ],
      "correct": "B",
      "explanation": "En el cover test (oclusión unilateral) se tapa un ojo y se observa el otro: si el ojo descubierto se mueve para tomar la fijación, estaba desviado. Un movimiento de afuera hacia adentro indica que estaba desviado hacia afuera (exotropia); de adentro hacia afuera, endotropia. Todo estrabismo en un niño se deriva por riesgo de ambliopía.",
      "say": {
        "stem": "Niño de tres años al que a veces se le desvía un ojo. En el cover test, al tapar el ojo derecho, el izquierdo se mueve de afuera hacia adentro para fijar.",
        "question": "¿Cuál es la interpretación?",
        "options": "Las opciones: normal, exotropia del ojo izquierdo, endotropia del ojo izquierdo, pseudoestrabismo o exotropia del ojo derecho. Piénsalo.",
        "answer": "Es la B. Si el ojo izquierdo debe moverse hacia adentro para fijar, estaba desviado hacia afuera: es una exotropia izquierda y se deriva. La endotropia tienta, pero en ella el ojo se mueve de adentro hacia afuera."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.5.006 · Examen de rojo pupilar con oftalmoscopio",
      "stem": "En el control de un lactante de 2 meses se realiza el examen del rojo pupilar con oftalmoscopio directo a 50 cm, en penumbra, iluminando ambos ojos simultáneamente (test de Brückner). El ojo derecho muestra rojo pupilar normal y el izquierdo un reflejo blanco.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Repetir el examen en el próximo control a los 6 meses"
        },
        {
          "letter": "B",
          "text": "Tranquilizar, porque es normal en lactantes"
        },
        {
          "letter": "C",
          "text": "Indicar colirio antibiótico"
        },
        {
          "letter": "D",
          "text": "Derivación urgente a oftalmología por leucocoria (descartar catarata congénita y retinoblastoma)"
        },
        {
          "letter": "E",
          "text": "Solicitar ecografía cerebral"
        }
      ],
      "correct": "D",
      "explanation": "El rojo pupilar se examina en todo recién nacido y en los controles de salud. Un reflejo ausente, blanco (leucocoria) o asimétrico obliga a derivación urgente a oftalmología para descartar catarata congénita (que debe operarse precozmente para evitar ambliopía profunda), retinoblastoma, retinopatía del prematuro u otras causas.",
      "say": {
        "stem": "En el control de un lactante de dos meses se examina el rojo pupilar con oftalmoscopio. El ojo derecho es normal y el izquierdo muestra un reflejo blanco.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: repetir a los seis meses, tranquilizar, colirio antibiótico, derivar urgente a oftalmología por leucocoria o ecografía cerebral. Piénsalo.",
        "answer": "Es la D. Un reflejo blanco es leucocoria y se deriva con urgencia para descartar catarata congénita y retinoblastoma. Repetir en el próximo control tienta, pero la demora arriesga ambliopía irreversible o progresión de un tumor."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.5.013 · Test de Hirschberg (imagen especular de la córnea)",
      "stem": "Niño de 2 años en control sano. Se ilumina con una linterna desde 30 cm frente a su cara mientras fija la luz. En el ojo derecho el reflejo luminoso corneal está centrado en la pupila; en el ojo izquierdo está desplazado hacia el borde temporal de la pupila.",
      "question": "¿Cuál es la interpretación?",
      "options": [
        {
          "letter": "A",
          "text": "Endotropia (estrabismo convergente) del ojo izquierdo"
        },
        {
          "letter": "B",
          "text": "Normal"
        },
        {
          "letter": "C",
          "text": "Exotropia del ojo izquierdo"
        },
        {
          "letter": "D",
          "text": "Hipertropia del ojo derecho"
        },
        {
          "letter": "E",
          "text": "Ambliopía sin estrabismo"
        }
      ],
      "correct": "A",
      "explanation": "En el test de Hirschberg el reflejo corneal debe estar centrado y simétrico. Si en un ojo el reflejo está desplazado hacia temporal, la córnea apunta hacia nasal: endotropia; si está desplazado hacia nasal, exotropia. Cada milímetro de desplazamiento equivale a unos 7 grados de desviación. Ante asimetría se deriva a oftalmología por riesgo de ambliopía.",
      "say": {
        "stem": "Niño de dos años: al iluminar con una linterna, el reflejo corneal está centrado en el ojo derecho y desplazado hacia el lado temporal en el ojo izquierdo.",
        "question": "¿Cuál es la interpretación?",
        "options": "Las opciones: endotropia del ojo izquierdo, normal, exotropia del ojo izquierdo, hipertropia del ojo derecho o ambliopía sin estrabismo. Piénsalo.",
        "answer": "Es la A. Un reflejo desplazado hacia temporal significa que el ojo está girado hacia la nariz: es una endotropia izquierda. La exotropia tienta, pero en ella el reflejo se corre hacia el lado nasal."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.5.014 · Toma de visión",
      "stem": "Niño de 5 años en control de salud escolar. Se toma la agudeza visual con tabla de Snellen (optotipos) a 6 metros, con buena iluminación, cada ojo por separado. Resultado: ojo derecho 20/20 y ojo izquierdo 20/50; con agujero estenopeico el ojo izquierdo mejora a 20/25.",
      "question": "¿Cuál es la interpretación y conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Normal para la edad; control en 2 años"
        },
        {
          "letter": "B",
          "text": "Disminución de agudeza visual del ojo izquierdo probablemente por vicio de refracción, con diferencia de 2 o más líneas entre ojos; derivar a oftalmología para refracción por riesgo de ambliopía"
        },
        {
          "letter": "C",
          "text": "Ambliopía irreversible; no requiere estudio"
        },
        {
          "letter": "D",
          "text": "Catarata; derivar para cirugía"
        },
        {
          "letter": "E",
          "text": "Repetir la toma con ambos ojos abiertos"
        }
      ],
      "correct": "B",
      "explanation": "La agudeza visual se toma monocularmente a la distancia indicada. A los 5 años se espera 20/30 a 20/20; una diferencia de 2 o más líneas entre ojos es anormal. La mejoría con agujero estenopeico indica un vicio de refracción corregible. Por el riesgo de ambliopía (anisometropía), se deriva para refracción y corrección óptica.",
      "say": {
        "stem": "Niño de cinco años con visión de veinte veinte en el ojo derecho y veinte cincuenta en el izquierdo, que mejora con agujero estenopeico.",
        "question": "¿Cuál es la interpretación y la conducta?",
        "options": "Las opciones: normal, vicio de refracción con riesgo de ambliopía y derivación, ambliopía irreversible, catarata o repetir con ambos ojos abiertos. Piénsalo.",
        "answer": "Es la B. La diferencia entre ojos que mejora con estenopeico es un vicio de refracción, y se deriva para lentes antes de que cause ambliopía. Considerarla normal para la edad tienta, pero la asimetría de dos o más líneas nunca lo es."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El examen que responde casi todo', tag: 'Agujero estenopeico', kind: 'key', items: [
          { t: 'Mejora: vicio de refracción', d: 'No mejora: lesión orgánica o ambliopía',
            say: 'Cerremos con las reglas de oro. Si la agudeza visual mejora con el agujero estenopeico, es un vicio de refracción. Si no mejora, busca una lesión orgánica o, en un niño, una ambliopía.' },
        ] },
        { title: 'Los tres vicios', tag: 'Mecanismo y lente', kind: 'criteria', items: [
          { t: 'Miopía: ojo largo, lentes negativos', d: 'Hipermetropía: ojo corto, lentes positivos',
            say: 'La miopía tiene el ojo largo y se corrige con lentes negativos. La hipermetropía tiene el ojo corto, se corrige con lentes positivos, y predispone al glaucoma agudo. El astigmatismo es la córnea irregular, con lentes cilíndricos.' },
        ] },
        { title: 'Ambliopía', tag: 'La ventana se cierra a los ocho años', kind: 'alert', items: [
          { t: 'Parche en el ojo sano', d: 'No en el ojo enfermo',
            say: 'Y si te llevas una sola idea de hoy: en la ambliopía, el parche va en el ojo sano, y hay que tratarla antes de los siete a ocho años, porque después es irreversible de por vida. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Baja visual sin dolor ni ojo rojo: la pregunta es el agujero estenopeico',
    root: (() => {
      const parche = N('ok', 'Corrección óptica más parche en el ojo sano', 'Antes de los siete u ocho años',
        'Corrige el vicio con lentes y coloca el parche oclusivo sobre el ojo sano, para forzar la vía del ojo ambliope, dentro de la ventana de los siete a ocho años.');
      const buscarCausaAmbliopia = N('q', '¿Hay estrabismo, anisometropía o privación sensorial?', 'Estrabismo, catarata congénita o ptosis completa',
        'Busca la causa: estrabismo, una diferencia de refracción marcada entre ambos ojos, o una privación sensorial como una catarata congénita o una ptosis palpebral completa.',
        ['sí, se confirma la causa', parche]);
      const noMejoraNino = N('alert', 'Sospecha de ambliopía', 'Sin lesión orgánica visible en el fondo de ojo',
        'En un niño, si no mejora con el agujero y el fondo de ojo es normal, sospecha ambliopía y busca su causa de inmediato.',
        ['', buscarCausaAmbliopia]);
      const otraLesion = N('refer', 'Buscar lesión orgánica', 'Catarata, degeneración macular, neuritis óptica',
        'En un adulto, si no mejora con el agujero estenopeico, el problema no es óptico: busca una lesión orgánica del ojo o la vía visual.');
      const lentes = N('ok', 'Prescribir lentes ópticos', 'Divergentes, convergentes o cilíndricos según el defecto',
        'El problema es puramente óptico: prescribe el lente que corresponda, divergente para miopía, convergente para hipermetropía, o cilíndrico para astigmatismo.');
      const preguntaEsten = N('q', '¿La agudeza visual mejora con el agujero estenopeico?', 'Disco opaco con un orificio central',
        'Haz mirar al paciente a través del agujero estenopeico y compara la agudeza visual antes y después.',
        ['sí, mejora', lentes],
        ['no mejora, y es adulto', otraLesion],
        ['no mejora, y es un niño', noMejoraNino]);
      return N('start', 'Baja de agudeza visual, sin dolor ni ojo rojo', 'En cualquier edad',
        'Paciente con disminución de la agudeza visual, sin dolor ni ojo rojo.',
        ['', preguntaEsten]);
    })(),
  },
};
