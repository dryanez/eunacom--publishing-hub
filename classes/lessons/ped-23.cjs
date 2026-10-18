// Clase 18.23 (Pediatría) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_pediatria_bloque_2.cjs (ped-23). Códigos (books/data/v3_topic_codes.json y v3_codemap.json):
// 2.01.1.054 Soplos (Dx específico · Tx inicial · Seg derivar), 2.01.1.052 Insuficiencia cardíaca (idem), 2.01.2.012 IC. Edema pulmonar
// (urgencia · Tx completo), 2.01.1.049 Arritmias (Dx sospecha · Tx inicial), 2.01.1.051 Endocarditis (Dx sospecha · Tx inicial),
// 2.01.4.012 Electrocardiograma (interpreta y emplea).
// Preguntas reales (rq por códigos + class_questions.cjs --search "soplo|supraventricular|endocarditis|wolff|ductus|cardiopat"):
// Julio 2015 P154 (soplo inocente), Julio 2013 P173 (IC del lactante: furosemida), Diciembre 2018 P3 (CIA: S2 desdoblado),
// Julio 2024 P89 (soplo continuo: ductus), Enero 2023 P33 (CIV, código 2.01.1.050 de la clase vecina de cardiopatías congénitas) y
// Julio 2025 P44 (TSV estable: adenosina; paciente de 22 años, mismo manejo de la TSV estable). Enunciados y alternativas copiados tal cual.
// No usadas: Diciembre 2022 P79 (clave "soplo funcional" para un lactante con soplo holosistólico III-IV, hepatomegalia y crepitaciones:
// el cuadro es de CIV con insuficiencia cardíaca; ver REVISION_CONTENIDO); Diciembre 2024 P29 (lactante con FC 280 soporoso: clave
// cardioversión, pero la alternativa C y la explicación están contaminadas con texto de otra pregunta); Julio 2024 P88 (duplicado de P89);
// Diciembre 2018 P76 (Marfán: va en genética); las de ECG y arritmias del adulto.
// Fotos (18-10-2026): ECG normales de Nelson (ya en la biblioteca), vegetaciones en la ecografía (Nelson Fig. 486.2), vegetaciones en la
// válvula mitral (Harrison Fig. 128-1) y manchas de Roth (Harrison Fig. 32-4), esta última de adulto.
// En movimiento: scenes/ped_nuevas.html (?v=civ) sobre Blausen "Ventricular Septal Defect", CC BY 3.0.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Soplos, insuficiencia cardíaca, arritmias, endocarditis y ECG: lo que el médico general debe resolver y derivar',
      say: 'Bienvenido. Hoy vemos la cardiología pediátrica que llega a tu control de salud. Casi todos los soplos son inocentes, pero hay cuatro situaciones que no se pueden pasar: la insuficiencia cardíaca del lactante, que se confunde con bronquiolitis, la taquicardia supraventricular, la fiebre prolongada en un niño con cardiopatía y el electrocardiograma que avisa de una muerte súbita. Partamos por la pregunta de siempre: este soplo, ¿es inocente?',
    },

    {
      type: 'points',
      kicker: 'Soplos',
      title: 'Soplo inocente o patológico',
      cards: [
        { title: 'Soplo inocente', tag: 'Hasta 7 de cada 10 niños', kind: 'normal', items: [
          { t: 'Sistólico, ≤ II/VI, vibratorio', d: 'Sin frémito, S2 normal, niño sano',
            say: 'Entre la mitad y siete de cada diez niños tienen un soplo inocente en algún momento. Es sistólico, de baja intensidad, de dos sobre seis o menos, de timbre vibratorio o musical, sin frémito, con segundo ruido normal, y en un niño asintomático que crece bien. No requiere electrocardiograma, radiografía ni ecocardiograma: se tranquiliza a la familia.' },
          { t: 'Cambia con la posición', d: 'O con fiebre o ejercicio',
            say: 'Y tiene un rasgo que te sirve: cambia con la posición, la fiebre o el ejercicio. El soplo patológico, en cambio, es fijo.' },
          { t: 'Still, flujo pulmonar, zumbido venoso', d: 'Estenosis pulmonar periférica del lactante',
            say: 'Los cuatro inocentes clásicos son el soplo de Still, vibratorio, el más frecuente en escolares de tres a siete años, que disminuye al sentarse; el soplo pulmonar de flujo, eyectivo y suave, en niños delgados y adolescentes; el zumbido venoso, continuo y supraclavicular, que desaparece al acostar al niño; y la estenosis pulmonar periférica fisiológica del lactante, en axilas y espalda, que se pierde a los seis meses.' },
        ] },
        { title: 'Señales de alarma', tag: 'Soplo patológico', kind: 'alert', items: [
          { t: 'Diastólico u holosistólico', d: '≥ III/VI, frémito o click',
            say: 'Ahora el soplo patológico. Lo delata un soplo diastólico u holosistólico, de intensidad tres sobre seis o más, con frémito o con chasquido.' },
          { t: 'S2 único o con desdoblamiento fijo', d: 'Cianosis, pulsos femorales débiles',
            say: 'También un segundo ruido único o con desdoblamiento fijo, cianosis, pulsos femorales débiles o diferencia de presión entre brazos y piernas.' },
          { t: 'Síntomas: mal incremento, síncope', d: 'Cansancio al comer, hepatomegalia',
            say: 'Y los síntomas: mal incremento de peso, cansancio al alimentarse, hepatomegalia, síncope o dolor torácico con el esfuerzo. Un soplo del recién nacido o del lactante con síntomas se estudia siempre.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Cardiopatías con soplo',
      title: 'El soplo según la cardiopatía',
      head: ['Cardiopatía', 'Cómo suena y qué más hay', 'Pista que se pregunta'],
      rows: [
        { cells: ['Comunicación interventricular', 'Holosistólico en borde esternal izquierdo bajo, a veces con frémito', 'Si es grande, insuficiencia cardíaca a las 4 a 8 semanas'],
          say: 'La comunicación interventricular es la más frecuente. Da un soplo holosistólico en el borde esternal izquierdo bajo, a veces con frémito. Si el defecto es grande, produce insuficiencia cardíaca entre las cuatro y las ocho semanas de vida.' },
        { cells: ['Comunicación interauricular', 'Eyectivo pulmonar, S2 con desdoblamiento fijo', 'Suele ser asintomática'],
          say: 'La comunicación interauricular da un soplo eyectivo en el foco pulmonar y el segundo ruido con desdoblamiento fijo. Suele ser asintomática, y esa es su trampa.' },
        { cells: ['Ductus arterioso persistente', 'Continuo «en maquinaria», pulsos saltones', 'Soplo infraclavicular izquierdo'],
          say: 'El ductus arterioso persistente da un soplo continuo, en maquinaria, con pulsos saltones.' },
        { cells: ['Estenosis pulmonar o aórtica', 'Eyectivo con frémito y click', 'Derivar a cardiología'],
          say: 'Las estenosis pulmonar y aórtica dan soplos eyectivos con frémito y chasquido.' },
        { cells: ['Coartación de la aorta', 'Pulsos femorales débiles, hipertensión en los brazos', 'Medir presión en las cuatro extremidades'],
          say: 'La coartación de la aorta no se oye tanto como se palpa: pulsos femorales disminuidos e hipertensión en los brazos. Por eso en el niño con sospecha de cardiopatía se mide la presión en las cuatro extremidades.' },
        { cells: ['Tetralogía de Fallot', 'Eyectivo pulmonar con cianosis', 'Saturación pre y postductal'],
          say: 'Y la tetralogía de Fallot: soplo eyectivo pulmonar y cianosis. En todas, la conducta es la misma: electrocardiograma, radiografía de tórax, saturación en la mano derecha y en el pie, ecocardiograma y derivación a cardiología pediátrica. La cardiopatía congénita operable está cubierta por GES.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Insuficiencia cardíaca del lactante',
      title: 'Por qué aparece a las cuatro a ocho semanas',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'Cortocircuito grande', s: 'CIV, canal AV, ductus' },
        { id: 'r', col: 1, row: 3, k: 'mech', t: 'Cae la resistencia pulmonar', s: 'A las 4 a 8 semanas' },
        { id: 'f', col: 2, row: 1, k: 'mech', t: 'Más flujo al pulmón', s: 'Izquierda a derecha' },
        { id: 'v', col: 3, row: 3, k: 'effect', t: 'Sobrecarga de volumen', s: 'Congestión pulmonar y hepática' },
        { id: 'k', col: 4, row: 1, k: 'alert', t: 'Insuficiencia cardíaca', s: 'Se confunde con bronquiolitis' },
      ],
      edges: [
        { from: 'c', to: 'f' }, { from: 'r', to: 'f' }, { from: 'f', to: 'v' }, { from: 'v', to: 'k' },
      ],
      steps: [
        { show: ['c'], note: 'Un defecto que desvía sangre',
          say: 'Veamos por qué la insuficiencia cardíaca del lactante aparece cuando aparece. Parte de un cortocircuito grande, como una comunicación interventricular, un canal auriculoventricular o un ductus, que desvía sangre de la izquierda hacia la derecha.' },
        { show: ['r', 'f'], note: 'Al nacer la resistencia pulmonar es alta',
          say: 'Al nacer, la resistencia vascular pulmonar es alta y el cortocircuito casi no se nota. Pero entre las cuatro y las ocho semanas esa resistencia cae, y entonces la sangre se va masivamente al pulmón. El soplo se oye, y los síntomas recién empiezan.' },
        { show: ['v', 'k'], note: 'Congestión y falla de bomba',
          say: 'El pulmón y el hígado se congestionan y el corazón no da abasto. Es la insuficiencia cardíaca, y se confunde con una bronquiolitis. Lo que la delata es la hepatomegalia, el galope, la cardiomegalia en la radiografía y el soplo con frémito.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La comunicación interventricular',
      images: [
        { src: 'animaciones/ped-23/A1_cortocircuito_civ.mp4', label: 'CIV: el cortocircuito y la insuficiencia cardíaca', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'De la izquierda a la derecha',
          say: 'Mira el corazón. Hay un agujero en el tabique entre los ventrículos. Como la presión del ventrículo izquierdo es mayor, la sangre ya oxigenada pasa a la derecha y vuelve al pulmón. Mientras la resistencia pulmonar es alta, pasa poco. Cuando cae, el flujo pulmonar se multiplica, el pulmón se congestiona, el hígado crece y el lactante se cansa al mamar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Insuficiencia cardíaca',
      title: 'Cómo se ve y cómo se parte',
      cards: [
        { title: 'Clínica según la edad', tag: 'Quién la produce', kind: 'criteria', items: [
          { t: 'Recién nacido: shock a los 7-14 días', d: 'Coartación crítica, corazón izquierdo hipoplásico',
            say: 'En el recién nacido, la insuficiencia cardíaca viene de cardiopatías obstructivas izquierdas que dependen del ductus, como la coartación crítica o el corazón izquierdo hipoplásico, y se presenta como un shock entre los siete y los catorce días de vida.' },
          { t: 'Lactante: cansancio y sudor al mamar', d: 'Taquipnea, galope, hepatomegalia',
            say: 'En el lactante, cansancio y sudoración al mamar, tomas largas, mal incremento de peso, taquipnea, taquicardia, galope, crepitaciones y hepatomegalia. Los edemas son tardíos.' },
          { t: 'Escolar: miocarditis o miocardiopatía', d: 'Disnea, ortopnea, dolor abdominal',
            say: 'En el escolar y el adolescente predominan la miocarditis, las miocardiopatías y la cardiopatía reumática. Aparecen disnea, ortopnea, edemas, ingurgitación yugular y dolor abdominal por congestión del hígado.' },
        ] },
        { title: 'Manejo inicial', tag: 'Lo haces tú', kind: 'pharma', items: [
          { t: 'Semisentado, oxígeno si hay hipoxemia', d: 'Alimentación fraccionada hipercalórica',
            say: 'El manejo inicial es posición semisentada, oxígeno si hay hipoxemia y alimentación fraccionada e hipercalórica.' },
          { t: 'Furosemida 1 mg/kg EV', d: 'Repetible; tratar infección, anemia, arritmia',
            say: 'El fármaco inicial es la furosemida, un miligramo por kilo endovenoso, que se puede repetir, y se trata la causa que descompensa: infección, anemia o arritmia. Después el especialista agrega inhibidores de la enzima convertidora, espironolactona y, según el caso, digoxina.' },
          { t: 'Sin vasodilatadores ni betabloqueo', d: 'Ecocardiograma y derivar',
            say: 'Los vasodilatadores y los betabloqueadores no son para este cuadro agudo del lactante. Pides ecocardiograma y derivas a cardiología pediátrica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Edema pulmonar y miocarditis',
      title: 'Cuando se descompensa',
      cards: [
        { title: 'Edema pulmonar agudo', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Disnea, ortopnea, espuma rosada', d: 'Crepitaciones difusas',
            say: 'El edema pulmonar agudo se reconoce por disnea, ortopnea, crepitaciones difusas y, en lo más grave, espuma rosada.' },
          { t: 'Oxígeno alto flujo o VNI, furosemida EV', d: 'Dobutamina si hay bajo gasto',
            say: 'Se da oxígeno a alto flujo o ventilación no invasiva y furosemida endovenosa. Si hay bajo gasto, se agregan vasodilatadores o un inotrópico como la dobutamina. El shock cardiogénico se maneja en la unidad de cuidados intensivos.' },
        ] },
        { title: 'Miocarditis aguda', tag: 'Niño sano tras un virus', kind: 'key', items: [
          { t: 'Insuficiencia cardíaca tras cuadro viral', d: 'Galope, cardiomegalia, hepatomegalia',
            say: 'La miocarditis es la insuficiencia cardíaca de un niño previamente sano, días después de un cuadro viral. Tiene taquicardia, galope, congestión pulmonar y hepatomegalia.' },
          { t: 'Troponina, ECG y ecocardiograma', d: 'Evitar los bolos de volumen',
            say: 'Se confirma con troponina, electrocardiograma y ecocardiograma. Y un detalle que se pregunta: se evitan los bolos de volumen, porque un corazón inflamado no los tolera.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Arritmias',
      title: 'Taquicardia supraventricular',
      cards: [
        { title: 'Cómo reconocerla', tag: 'No es una sinusal', kind: 'key', items: [
          { t: 'FC fija > 220 en el lactante', d: '> 180 en el mayor; inicio y fin bruscos',
            say: 'La taquicardia supraventricular es la arritmia sintomática más frecuente del lactante. Su frecuencia es fija, sobre doscientos veinte por minuto en el lactante y sobre ciento ochenta en el niño mayor, y empieza y termina de golpe.' },
          { t: 'QRS estrecho, sin ondas P visibles', d: 'Regular',
            say: 'El trazado es regular, con QRS estrecho y sin ondas P visibles. Se diferencia de la taquicardia sinusal, la de la fiebre, el dolor o la hipovolemia, porque esa tiene menos de doscientos veinte, es variable y sí muestra ondas P. Mira este trazado: complejos angostos, todos iguales y muy seguidos, sin ondas P que se vean.',
            photo: { src: 'biblioteca/15_pediatria/ped-23/03_ecg-taquicardia-supraventricular__knoop_p809.jpg', label: 'Taquicardia supraventricular', at: 'Mira este trazado', credit: 'The Atlas of Emergency Medicine (Knoop), p. 809' } },
          { t: 'Rechazo alimentario, palidez, sudor', d: 'Puede progresar a IC',
            say: 'En el lactante se ve como rechazo de la alimentación, palidez y sudoración, y si dura, progresa a insuficiencia cardíaca.' },
        ] },
        { title: 'Se trata según la estabilidad', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Estable: maniobras vagales', d: 'Hielo sobre la cara 15 a 30 segundos',
            say: 'Primero, la estabilidad. Si el paciente está estable, parten las maniobras vagales: en el lactante, una bolsa con hielo y agua sobre la cara por quince a treinta segundos, y en el niño mayor, un Valsalva modificado. Nunca se presionan los globos oculares.' },
          { t: 'Si no cede: adenosina 0,1 mg/kg', d: 'Bolo rápido, máx. 6 mg; luego 0,2 mg/kg',
            say: 'Si no ceden, adenosina, cero coma uno miligramos por kilo en bolo rápido por una vía proximal, seguida de suero, con un máximo de seis miligramos. La segunda dosis es de cero coma dos miligramos por kilo.' },
          { t: 'Inestable: cardioversión 0,5-1 J/kg', d: 'Sincronizada; sin retrasarla por la vía',
            say: 'Si está inestable, con shock, compromiso de conciencia o hipotensión, es cardioversión eléctrica sincronizada, de cero coma cinco a un joule por kilo, y luego dos joules por kilo si falla. Y no la retrasas por conseguir una vía venosa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras alteraciones del ritmo',
      title: 'Las que predisponen a muerte súbita',
      cards: [
        { title: 'Preexcitación y QT', tag: 'Derivar', kind: 'alert', items: [
          { t: 'Wolff-Parkinson-White', d: 'PR corto y onda delta; evitar verapamilo y digoxina',
            say: 'El síndrome de Wolff-Parkinson-White es una vía accesoria. El electrocardiograma basal muestra el PR corto y la onda delta; mira este trazado. Causa taquicardia supraventricular y, si se asocia a fibrilación auricular, muerte súbita. Se evitan el verapamilo y la digoxina, y se deriva para ablación.',
            photo: { src: 'biblioteca/15_pediatria/ped-23/04_ecg-wolff-parkinson-white__knoop_p809.jpg', label: 'ECG con preexcitación', at: 'mira este trazado', credit: 'The Atlas of Emergency Medicine (Knoop), p. 809' } },
          { t: 'QT largo: síncope con ejercicio o susto', d: 'A veces sordera o muerte súbita familiar',
            say: 'El síndrome de QT largo se sospecha en un síncope con el ejercicio, el susto o un ruido intenso, a veces con sordera o antecedente familiar de muerte súbita.' },
        ] },
        { title: 'Bloqueo y ventriculares', tag: 'Otras', kind: 'criteria', items: [
          { t: 'Bloqueo AV completo congénito', d: 'FC < 60; lupus materno, anti-Ro/La',
            say: 'El bloqueo auriculoventricular completo congénito da una bradicardia bajo sesenta por minuto y se asocia a lupus materno, con anticuerpos anti-Ro y anti-La.' },
          { t: 'TV y FV: raras', d: 'Sin pulso, desfibrilar a 4 J/kg',
            say: 'La taquicardia y la fibrilación ventricular son raras. Sin pulso se manejan como paro, con desfibrilación de cuatro joules por kilo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Endocarditis infecciosa',
      title: 'Fiebre prolongada y cardiopatía',
      cards: [
        { title: 'Sospecha y clínica', tag: 'Qué buscar', kind: 'alert', items: [
          { t: 'Fiebre + cardiopatía o catéter', d: 'Cirugía cardíaca previa',
            say: 'Sospecha endocarditis en todo niño con fiebre prolongada y una cardiopatía congénita, sobre todo con cortocircuitos, válvulas o material protésico, con cirugía cardíaca previa o con un catéter venoso central.' },
          { t: 'Viridans: subaguda; S. aureus: aguda', d: 'Dental; catéter o corazón sano',
            say: 'Los estreptococos del grupo viridans causan el curso subagudo, tras procedimientos dentales. El Staphylococcus aureus produce el curso agudo, en recién nacidos, con catéteres o en corazón sano.' },
          { t: 'Soplo nuevo, esplenomegalia', d: 'Petequias, hemorragias en astilla',
            say: 'La clínica: fiebre, un soplo nuevo o que cambia, esplenomegalia y baja de peso. Con fenómenos vasculares, como petequias y hemorragias en astilla bajo las uñas, y fenómenos inmunológicos, como los nódulos de Osler, las manchas de Roth, que se ven en el fondo de ojo, y la glomerulonefritis. Mira esta ecografía del corazón, con las vegetaciones adheridas a las valvas. Y aquí, en la pieza, las vegetaciones sobre la válvula mitral.',
            photos: [
              { src: 'biblioteca/15_pediatria/ped-23/03_endocarditis-vegetaciones-eco__nelson_p3642.jpg', label: 'Vegetaciones en la ecografía', at: 'Mira esta ecografía', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 486.2' },
              { src: 'biblioteca/15_pediatria/ped-23/04_vegetaciones-valvula-mitral__harrison_p1064.jpg', label: 'Vegetaciones en la mitral', at: 'en la pieza', credit: 'Harrison 21.ª ed., Fig. 128-1' },
            ] },
        ] },
        { title: 'Diagnóstico, tratamiento y profilaxis', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: '3 hemocultivos antes del antibiótico', d: 'Sitios y momentos distintos; luego ecocardiograma',
            say: 'El diagnóstico usa los criterios de Duke modificados. Lo fundamental: al menos tres hemocultivos de sitios y momentos distintos antes de dar antibióticos, y después un ecocardiograma que busca vegetaciones, abscesos o regurgitación.' },
          { t: 'Antibiótico EV 4 a 6 semanas', d: 'Penicilina o ceftriaxona + gentamicina; cloxacilina',
            say: 'El tratamiento es antibiótico endovenoso por cuatro a seis semanas: penicilina o ceftriaxona con gentamicina para el viridans, cloxacilina para el Staphylococcus aureus sensible, y vancomicina si es resistente. Se opera ante insuficiencia cardíaca refractaria, abscesos, embolias repetidas o vegetaciones grandes.' },
          { t: 'Profilaxis solo en alto riesgo', d: 'Amoxicilina 50 mg/kg antes del procedimiento dental',
            say: 'La profilaxis es solo para alto riesgo: válvula protésica, endocarditis previa, cardiopatía cianótica no reparada y trasplante cardíaco con valvulopatía, antes de un procedimiento dental que manipule la encía. Se da amoxicilina, cincuenta miligramos por kilo, de treinta a sesenta minutos antes. No se indica en soplos inocentes ni en comunicaciones simples.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Electrocardiograma pediátrico',
      title: 'El trazado del niño no es el del adulto',
      cards: [
        { title: 'Cómo se lee', tag: 'Interpreta y emplea', kind: 'criteria', items: [
          { t: 'Ritmo, FC, eje, intervalos, hipertrofia', d: 'Y repolarización, en ese orden',
            say: 'El electrocardiograma se lee en orden: ritmo, frecuencia, eje, intervalos, hipertrofia y repolarización. La frecuencia normal baja con la edad: ciento veinte a ciento sesenta en el recién nacido, y sesenta a cien en el adolescente.' },
          { t: 'QTc normal < 0,44 s', d: '≥ 0,46 s es prolongado',
            say: 'El QRS es estrecho y el intervalo QT corregido normal es menor de cero coma cuarenta y cuatro segundos. Desde cero coma cuarenta y seis ya es prolongado.' },
        ] },
        { title: 'Lo normal que parece anormal', tag: 'Particularidades', kind: 'normal', items: [
          { t: 'Recién nacido: eje a la derecha', d: 'R alta en V1',
            say: 'Mira este trazado de un lactante de cinco días: el eje está desviado a la derecha y la onda R en las derivaciones derechas es alta. Es normal, porque el ventrículo derecho domina al nacer.',
            photo: { src: 'biblioteca/15_pediatria/ped-23/01_ecg-normal-lactante-5-dias__nelson_p3483.jpg', label: 'ECG normal, lactante 5 días', at: 'Mira este trazado', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 472.2' } },
          { t: 'Patrón juvenil: T negativa V1-V3', d: 'Hasta la adolescencia',
            say: 'El patrón juvenil, con ondas T negativas de V uno a V tres, es normal hasta la adolescencia, igual que la arritmia sinusal respiratoria. Compara con este trazado de un niño de tres años: el eje ya es de sesenta grados y la relación R sobre S en V uno es menor de uno.',
            photo: { src: 'biblioteca/15_pediatria/ped-23/02_ecg-normal-3-anos__nelson_p3484.jpg', label: 'ECG normal, niño de 3 años', at: 'Compara con este trazado', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 472.4' } },
        ] },
        { title: 'Cuándo pedirlo', tag: 'Anormal o urgente', kind: 'alert', items: [
          { t: 'Síncope, palpitaciones, dolor de esfuerzo', d: 'Soplo patológico, muerte súbita familiar',
            say: 'Pides electrocardiograma en síncope, palpitaciones, dolor torácico de esfuerzo, soplo patológico, antecedente familiar de muerte súbita, Kawasaki, miocarditis, pericarditis, intoxicaciones y alteraciones hidroelectrolíticas.' },
          { t: 'Anormal: PR corto, QT largo, T picudas', d: 'WPW, bloqueos, hiperkalemia, pericarditis',
            say: 'Son anormales el PR corto con onda delta, los bloqueos, el QT largo, el QRS ancho, las ondas T picudas de la hiperkalemia y el supradesnivel difuso del ST de la pericarditis.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del soplo o la sospecha de cardiopatía a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Soplo inocente contra patológico',
      head: ['Dato', 'Inocente', 'Patológico', 'Conducta'],
      rows: [
        { cells: ['Intensidad y momento', '≤ II/VI, sistólico corto', '≥ III/VI, holosistólico o diastólico', 'Tranquilizar o ecocardiograma'],
          say: 'Intensidad y momento: inocente es sistólico, corto, de dos sobre seis o menos; patológico es de tres sobre seis o más, holosistólico o diastólico. Uno se tranquiliza y el otro va a ecocardiograma.' },
        { cells: ['Frémito o click', 'Ausente', 'Presente', 'Derivar a cardiología'],
          say: 'El frémito y el chasquido nunca están en un soplo inocente. Con ellos, derivas a cardiología.' },
        { cells: ['Segundo ruido', 'Normal, con desdoblamiento fisiológico', 'Único, fuerte o desdoblamiento fijo', 'ECG y ecocardiograma'],
          say: 'El segundo ruido normal se desdobla con la respiración. Si está único, fuerte o con desdoblamiento fijo, piensa en una comunicación interauricular, y pides electrocardiograma y ecocardiograma.' },
        { cells: ['Variación', 'Cambia con posición, fiebre o ejercicio', 'Fijo', 'Registrar y controlar'],
          say: 'El soplo inocente cambia con la posición, la fiebre o el ejercicio. El patológico es fijo.' },
        { cells: ['Síntomas y examen', 'Asintomático, pulsos normales', 'Cianosis, hepatomegalia, pulsos femorales débiles', 'Estudio y derivación'],
          say: 'El niño del soplo inocente está sano. Cianosis, hepatomegalia, mal incremento o pulsos femorales débiles obligan a estudiar y derivar.' },
        { cells: ['Lactante con cansancio al mamar, hepatomegalia', 'No es bronquiolitis', 'Insuficiencia cardíaca', 'Furosemida y ecocardiograma'],
          say: 'Y la trampa más repetida: un lactante con cansancio al mamar, hepatomegalia y soplo no tiene una bronquiolitis. Es una insuficiencia cardíaca, y se parte con furosemida y ecocardiograma.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 3 meses, alimentado con lactancia materna, es traído a control porque se cansa y suda al mamar, con tomas prolongadas y bajo incremento ponderal (peso cayó dos canales). Al examen: FR 62 por minuto con tiraje subcostal, FC 170 por minuto, saturación 94%, soplo holosistólico III/VI en el borde esternal izquierdo bajo con frémito, galope, crepitaciones basales escasas y hepatomegalia de 4 cm bajo el reborde costal. La radiografía muestra cardiomegalia y plétora pulmonar.',
      question: '¿Cuál es el diagnóstico y el manejo inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Bronquiolitis: oxígeno y kinesiterapia respiratoria' },
        { letter: 'B', text: 'Soplo inocente: tranquilizar y controlar en un año' },
        { letter: 'C', text: 'Insuficiencia cardíaca por CIV: furosemida, alimentación fraccionada y derivación con ecocardiograma' },
        { letter: 'D', text: 'Taquicardia supraventricular: adenosina en bolo' },
        { letter: 'E', text: 'Neumonía: amoxicilina oral y control en 48 horas' },
      ],
      correct: 'C',
      explanation: 'Insuficiencia cardíaca del lactante por un cortocircuito izquierda-derecha grande (comunicación interventricular), que se manifiesta cuando cae la resistencia vascular pulmonar. Lo distinguen de una bronquiolitis la hepatomegalia, el galope, la cardiomegalia y el soplo con frémito. Manejo inicial: oxígeno si hay hipoxemia, furosemida EV y alimentación fraccionada hipercalórica; ecocardiograma y derivación a cardiología pediátrica (GES de cardiopatía congénita operable).',
      say: {
        stem: 'Un lactante de tres meses se cansa y suda al mamar, con tomas largas y bajo incremento de peso: cayó dos canales. Respira sesenta y dos veces por minuto con tiraje, tiene la frecuencia en ciento setenta y la saturación en noventa y cuatro por ciento. Hay un soplo holosistólico en el borde esternal izquierdo bajo con frémito, galope, pocas crepitaciones y el hígado cuatro centímetros bajo el reborde. La radiografía muestra cardiomegalia y plétora pulmonar.',
        question: '¿Cuál es el diagnóstico y el manejo inicial?',
        options: 'Las opciones: bronquiolitis con oxígeno y kinesiterapia; soplo inocente; insuficiencia cardíaca por comunicación interventricular con furosemida y derivación; taquicardia supraventricular con adenosina; o neumonía con amoxicilina. Piénsalo.',
        answer: 'Es la C. Hepatomegalia, galope, cardiomegalia y un soplo con frémito en un lactante de tres meses son una insuficiencia cardíaca por una comunicación interventricular. Se parte con furosemida, alimentación fraccionada y oxígeno si hay hipoxemia, y se deriva con ecocardiograma. La A tienta porque el lactante respira rápido, pero la bronquiolitis no explica el hígado grande, el galope ni la cardiomegalia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 154',
      stem: 'Un niño de 13 años acude a control médico, por una infección respiratoria alta. En su examen físico se ausculta un soplo paraesternal izquierdo, sistólico, de intensidad II/VI, sin otras alteraciones.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Soplo inocente' },
        { letter: 'B', text: 'Ductus arterioso persistente' },
        { letter: 'C', text: 'Miocardiopatía hipertrófica obstructiva' },
        { letter: 'D', text: 'Estenosis aórtica' },
        { letter: 'E', text: 'Coartación aórtica' },
      ],
      correct: 'A',
      explanation: 'Un soplo sistólico suave (II/VI), paraesternal, en un niño asintomático y sin otros hallazgos es un soplo inocente (de flujo o de Still); no requiere estudio. El ductus produce un soplo continuo; la miocardiopatía obstructiva se acompaña de disnea, síncope o muerte súbita familiar; la estenosis aórtica da un soplo más intenso con frémito y click; la coartación se sospecha por pulsos femorales débiles e hipertensión en los brazos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un niño de trece años acude a control por una infección respiratoria alta. Se ausculta un soplo paraesternal izquierdo, sistólico, de intensidad dos sobre seis, sin otras alteraciones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: soplo inocente; ductus arterioso persistente; miocardiopatía hipertrófica obstructiva; estenosis aórtica; o coartación aórtica. Piénsalo.',
        answer: 'Es la A. Un soplo sistólico suave, de dos sobre seis, en un niño sin síntomas y sin otros hallazgos, es un soplo inocente, y no requiere estudio. La D tienta, pero la estenosis aórtica suena más fuerte, con frémito y chasquido. El ductus daría un soplo continuo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 173',
      stem: 'Lactante de 4 meses de edad, sin antecedentes conocidos, alimentado con lactancia materna de forma exclusiva, es traído por presentar bajo incremento ponderal, asociado a cansancio al alimentarse y decaimiento. Se aprecia decaído, saturación arterial de 90%, examen cardiaco con ritmo regular en dos tiempos, con presencia de soplo sistólico, y pulmonar que muestra murmullo pulmonar disminuido en bases, asociado a crepitaciones finas bilaterales.',
      question: 'El manejo inicial más adecuado en este caso es:',
      options: [
        { letter: 'A', text: 'Administrar furosemida endovenosa' },
        { letter: 'B', text: 'Administrar vasodilatadores endovenosos' },
        { letter: 'C', text: 'Administrar epinefrina endovenosa' },
        { letter: 'D', text: 'Realizar intubación endotraqueal y ventilación mecánica' },
        { letter: 'E', text: 'Administrar betabloqueadores endovenosos' },
      ],
      correct: 'A',
      explanation: 'Insuficiencia cardíaca congestiva del lactante (cansancio al comer, soplo, crepitaciones y mal incremento): el manejo inicial es el diurético de asa EV, más oxígeno si hay hipoxemia. En el lactante con cortocircuito izquierda-derecha los vasodilatadores empeoran el flujo pulmonar al bajar la resistencia vascular pulmonar; la epinefrina es para shock o paro; no hay falla respiratoria que obligue a intubar; los betabloqueadores están contraindicados en la insuficiencia descompensada.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un lactante de cuatro meses, con lactancia exclusiva, tiene bajo incremento de peso, cansancio al alimentarse y decaimiento. Está decaído, con saturación de noventa por ciento, soplo sistólico, murmullo disminuido en las bases y crepitaciones finas bilaterales.',
        question: '¿Cuál es el manejo inicial más adecuado?',
        options: 'Las opciones: furosemida endovenosa; vasodilatadores endovenosos; epinefrina; intubación y ventilación mecánica; o betabloqueadores endovenosos. Piénsalo.',
        answer: 'Es la A. Cansancio al comer, soplo y crepitaciones en un lactante con mal incremento son una insuficiencia cardíaca, y se parte con el diurético de asa. La B tienta, pero en un cortocircuito de izquierda a derecha los vasodilatadores bajan la resistencia pulmonar y aumentan el flujo al pulmón, empeorando la congestión. Además hay que hacer un ecocardiograma por la probable cardiopatía congénita.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 3',
      stem: 'Un niño de 8 meses es traído, por su madre, al control de niño sano. En el examen físico se ausculta un segundo ruido desdoblado, asociado a un soplo sistólico eyectivo.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Comunicación auricular' },
        { letter: 'B', text: 'Comunicación interventricular' },
        { letter: 'C', text: 'Ductus arterioso persistente' },
        { letter: 'D', text: 'Estenosis aórtica' },
        { letter: 'E', text: 'Coartación aórtica supravalvular' },
      ],
      correct: 'A',
      explanation: 'Un segundo ruido desdoblado, fijo, con un soplo sistólico eyectivo pulmonar es la comunicación interauricular clásica, que suele ser asintomática. La comunicación interventricular da un soplo holosistólico; el ductus, un soplo continuo; la estenosis aórtica, un soplo eyectivo con frémito y click; la coartación, pulsos femorales débiles.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un niño de ocho meses va a control sano. Se ausculta un segundo ruido desdoblado, asociado a un soplo sistólico eyectivo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: comunicación auricular; comunicación interventricular; ductus arterioso persistente; estenosis aórtica; o coartación aórtica supravalvular. Piénsalo.',
        answer: 'Es la A. Un segundo ruido desdoblado con soplo eyectivo en el foco pulmonar es la comunicación interauricular. La B tienta, pero la comunicación interventricular da un soplo holosistólico y no un desdoblamiento. Y el ductus es un soplo continuo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 89',
      stem: 'Un niño de 8 años acude a consulta por dificultad para seguir el ritmo en actividades físicas en la escuela. No tiene antecedentes médicos relevantes, salvo infecciones respiratorias recurrentes en los últimos años. Sus signos vitales son normales, al igual que su auscultación pulmonar. A la auscultación cardiaca, se detecta un soplo continuo de intensidad III/VI en la región paraesternal e infraclavicular izquierda. El niño presenta una talla de -1 desviaciones estándar para su edad y un peso adecuado para su talla.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Miocardiopatía hipertrófica' },
        { letter: 'B', text: 'Comunicación interventricular' },
        { letter: 'C', text: 'Comunicación interauricular' },
        { letter: 'D', text: 'Ductus arterioso persistente' },
        { letter: 'E', text: 'Soplo funcional' },
      ],
      correct: 'D',
      explanation: 'El soplo continuo, «en maquinaria», paraesternal e infraclavicular izquierdo es característico del ductus arterioso persistente. La comunicación interventricular da un soplo holosistólico y la interauricular, un eyectivo con desdoblamiento fijo; el soplo funcional no es continuo ni de intensidad III/VI con síntomas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un niño de ocho años se cansa para seguir el ritmo en la escuela, con infecciones respiratorias recurrentes. Los signos vitales y el examen pulmonar son normales. En el corazón se detecta un soplo continuo, de tres sobre seis, paraesternal e infraclavicular izquierdo. Su talla es menos una desviación estándar y el peso es adecuado para la talla.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: miocardiopatía hipertrófica; comunicación interventricular; comunicación interauricular; ductus arterioso persistente; o soplo funcional. Piénsalo.',
        answer: 'Es la D. Un soplo continuo, en maquinaria, en la región infraclavicular izquierda es el ductus arterioso persistente. La B tienta, porque también es un cortocircuito de izquierda a derecha, pero su soplo es holosistólico, no continuo. Y un soplo funcional no se acompaña de síntomas ni de esa intensidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 33',
      stem: 'Niño con mal incremento pondoestatural, se cansa al alimentarse y presenta soplo holosistólico III en mesocardio.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Estenosis pulmonar' },
        { letter: 'B', text: 'Comunicación interauricular' },
        { letter: 'C', text: 'Tetralogía de Fallot' },
        { letter: 'D', text: 'Comunicación interventricular' },
        { letter: 'E', text: 'Coartación de aorta' },
      ],
      correct: 'D',
      explanation: 'Mal incremento, cansancio al alimentarse y soplo holosistólico en el borde esternal izquierdo bajo corresponden a una comunicación interventricular con repercusión hemodinámica. La estenosis pulmonar y la tetralogía dan un soplo eyectivo; la interauricular suele ser asintomática; la coartación se manifiesta con pulsos femorales débiles.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un niño con mal incremento de peso y talla se cansa al alimentarse y tiene un soplo holosistólico de tres sobre seis en el mesocardio.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: estenosis pulmonar; comunicación interauricular; tetralogía de Fallot; comunicación interventricular; o coartación de aorta. Piénsalo.',
        answer: 'Es la D. Soplo holosistólico, mal incremento y cansancio al comer: una comunicación interventricular con repercusión. La B tienta, pero la interauricular suele ser asintomática y su soplo es eyectivo, con el segundo ruido desdoblado fijo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 44',
      stem: 'Joven de 22 años con palpitaciones súbitas de inicio y término brusco. ECG en crisis: taquicardia regular de QRS estrecho a 180 lpm. Cede con maniobra de Valsalva.',
      question: '¿Cuál es el tratamiento farmacológico de elección si reaparece?',
      options: [
        { letter: 'A', text: 'Adenosina IV en bolo rápido' },
        { letter: 'B', text: 'Amiodarona EV' },
        { letter: 'C', text: 'Metoprolol oral' },
        { letter: 'D', text: 'Digoxina IV' },
        { letter: 'E', text: 'Cardioversión eléctrica sincronizada' },
      ],
      correct: 'A',
      explanation: 'Taquicardia regular de QRS estrecho, de inicio y término bruscos, que cede con maniobras vagales: taquicardia supraventricular por reentrada. Si recurre en un paciente estable, el fármaco de elección es la adenosina en bolo rápido (en el niño, 0,1 mg/kg, máximo 6 mg). La cardioversión se reserva para el paciente inestable.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un joven de veintidós años tiene palpitaciones súbitas, de inicio y término bruscos. En la crisis, el electrocardiograma muestra una taquicardia regular de QRS estrecho a ciento ochenta por minuto, que cede con la maniobra de Valsalva.',
        question: '¿Cuál es el tratamiento farmacológico de elección si reaparece?',
        options: 'Las opciones: adenosina en bolo rápido; amiodarona; metoprolol oral; digoxina; o cardioversión eléctrica sincronizada. Piénsalo.',
        answer: 'Es la A. Una taquicardia regular de QRS estrecho que parte y termina de golpe y cede con maniobras vagales es una taquicardia supraventricular, y el fármaco de elección es la adenosina en bolo rápido. Es la misma lógica que en el niño estable, con la dosis por kilo. La E tienta, pero la cardioversión es para el paciente inestable.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cardiología pediátrica',
      cards: [
        { title: 'Reconocer', tag: 'Soplo e insuficiencia cardíaca', kind: 'key', items: [
          { t: 'Inocente: sistólico, ≤ II/VI, sin frémito', d: 'Niño sano: sin estudio',
            say: 'Cerremos con las reglas de oro. Un soplo inocente es sistólico, de dos sobre seis o menos, sin frémito, con segundo ruido normal en un niño sano, y no se estudia.' },
          { t: 'Patológico: diastólico, frémito, S2 fijo', d: 'ECG, Rx, eco y derivar',
            say: 'Un soplo diastólico, holosistólico, con frémito, con segundo ruido fijo, cianosis o pulsos femorales débiles se estudia con electrocardiograma, radiografía y ecocardiograma, y se deriva.' },
          { t: 'Lactante con hepatomegalia: IC', d: 'Furosemida; no es bronquiolitis',
            say: 'Un lactante que se cansa al mamar, con hepatomegalia, galope y soplo, tiene una insuficiencia cardíaca, y se parte con furosemida.' },
        ] },
        { title: 'Actuar', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'TSV estable: vagal y adenosina', d: 'Inestable: cardioversión 0,5-1 J/kg',
            say: 'En la taquicardia supraventricular, estable es maniobra vagal y adenosina; inestable es cardioversión sincronizada, sin esperar una vía.' },
          { t: '3 hemocultivos antes del antibiótico', d: 'Profilaxis solo en alto riesgo',
            say: 'Ante la sospecha de endocarditis, tres hemocultivos antes del antibiótico y luego ecocardiograma. La profilaxis dental es solo para cardiopatías de alto riesgo.' },
          { t: 'ECG: recién nacido con eje a la derecha', d: 'QTc ≥ 0,46 s es prolongado',
            say: 'Y el electrocardiograma del niño no es el del adulto: eje a la derecha en el recién nacido y T negativas de V uno a V tres son normales, y un QT corregido desde cero coma cuarenta y seis es prolongado. Si te llevas una sola idea de hoy: un lactante con hepatomegalia y soplo tiene el corazón enfermo, no los bronquios. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Soplo o sospecha de cardiopatía en el niño',
    root: N('start', 'Soplo o sospecha de cardiopatía', 'Síntomas, saturación, pulsos femorales, presión en 4 extremidades',
      'Un niño llega con un soplo, o con una sospecha de cardiopatía. Preguntas por cansancio al mamar, sudoración, peso y síncope, tomas la saturación y los pulsos femorales, y te preguntas: ¿hay signos de gravedad?',
      ['Shock, FC fija sobre 220', N('alert', 'Taquicardia supraventricular', 'QRS estrecho, sin ondas P',
        'Si el lactante tiene una frecuencia fija sobre doscientos veinte y un QRS estrecho, es una taquicardia supraventricular.',
        ['Inestable', N('do', 'Cardioversión sincronizada', '0,5 a 1 J/kg; luego 2 J/kg',
          'Si está inestable, con shock o compromiso de conciencia, cardioversión sincronizada de cero coma cinco a un joule por kilo, sin retrasarla por la vía.')],
        ['Estable', N('do', 'Maniobras vagales y adenosina', '0,1 mg/kg en bolo rápido',
          'Si está estable, maniobras vagales y, si no ceden, adenosina cero coma uno miligramos por kilo en bolo rápido con suero.')],
      )],
      ['Lactante con hepatomegalia y mal peso', N('do', 'Insuficiencia cardíaca', 'Furosemida 1 mg/kg EV y oxígeno',
        'Si el lactante tiene hepatomegalia, galope, taquipnea y mal incremento, es una insuficiencia cardíaca. Furosemida endovenosa, alimentación fraccionada y oxígeno si hay hipoxemia.',
        ['Siempre', N('refer', 'Ecocardiograma y cardiología', 'GES si es operable',
          'Pides ecocardiograma y derivas a cardiología pediátrica. La cardiopatía congénita operable tiene garantía GES.')],
      )],
      ['Fiebre prolongada con cardiopatía', N('alert', 'Sospecha de endocarditis', '3 hemocultivos antes del antibiótico',
        'Si hay fiebre prolongada en un niño con cardiopatía o catéter, sospecha endocarditis. Tres hemocultivos antes del antibiótico y ecocardiograma, y hospitalizas.')],
      ['Niño asintomático', N('q', '¿Soplo inocente?', 'Sistólico, ≤ II/VI, sin frémito',
        'Si el niño está asintomático, defines si el soplo es inocente.',
        ['Criterios de inocente', N('ok', 'Tranquilizar', 'Sin exámenes',
          'Si es sistólico, suave, sin frémito, con segundo ruido normal y pulsos normales, es un soplo inocente. Tranquilizas, sin exámenes.')],
        ['Diastólico, ≥ III/VI, S2 fijo, cianosis', N('refer', 'ECG, Rx y ecocardiograma', 'Derivar a cardiología',
          'Si es diastólico, intenso, con frémito, con segundo ruido fijo o cianosis, pides electrocardiograma, radiografía y ecocardiograma, y derivas.')],
      )],
    ),
  },
};
