// Clase 15.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Secreción, prurito y adenopatía: tres datos que separan las cuatro conjuntivitis',
      say: 'Bienvenidos de vuelta. En la clase pasada separamos el ojo rojo superficial del profundo. Hoy vamos a la causa más frecuente de lo superficial: la conjuntivitis. Con tres datos, el tipo de secreción, si hay prurito y si hay adenopatía preauricular, distingues la bacteriana, la viral y la alérgica. Y cerramos con la forma que no puedes pasar por alto: la gonocócica, que perfora la córnea en horas.',
    },

    {
      type: 'points',
      kicker: 'Bacteriana',
      title: 'Conjuntivitis bacteriana común',
      cards: [
        { title: 'Clínica', tag: 'Pestañas pegadas', kind: 'criteria', items: [
          { t: 'Secreción mucopurulenta espesa', d: 'Aglutina pestañas y párpados al despertar',
            say: 'Empecemos por la bacteriana común, causada sobre todo por estafilococo dorado, neumococo y haemófilus. Su sello es la secreción mucopurulenta espesa y abundante: el paciente despierta con los párpados y las pestañas pegados. Mira este ojo: la secreción amarillenta se acumula en el borde y en los fondos de saco.',
            photo: { src: 'biblioteca/12_oftalmologia/oftal-02/02_conjuntivitis_bacteriana__kanski_p147.jpg', label: 'Conjuntivitis bacteriana: hiperemia y secreción mucopurulenta', at: 'Mira este ojo', credit: "Kanski's Clinical Ophthalmology, 8.ª ed., p. 150" } },
          { t: 'Sin dolor profundo ni baja de visión', d: 'Inyección conjuntival difusa',
            say: 'La inyección es conjuntival difusa, sin dolor profundo y sin alteración visual. Recuerda la clase pasada: eso es justamente lo que la mantiene del lado superficial. En esta otra foto el ojo está rojo y con secreción, pero la córnea y la pupila se ven normales.',
            photo: { src: 'biblioteca/12_oftalmologia/oftal-02/01_conjuntivitis-aguda__cto-oftalmo_p33.jpg', label: 'Conjuntivitis aguda', at: 'En esta otra foto', credit: 'Manual CTO Oftalmología 14.ª ed., p. 33' } },
        ] },
        { title: 'Tratamiento', tag: 'Cloranfenicol tópico', kind: 'pharma', items: [
          { t: 'Aseo más colirio cada 4 horas', d: 'Cloranfenicol o ciprofloxacino, por 7 días',
            say: 'El tratamiento es aseo de secreciones con suero fisiológico, más colirio de cloranfenicol al cero coma cinco por ciento, o ciprofloxacino, cada cuatro horas por siete días.' },
          { t: 'Si no responde en 48 a 72 horas', d: 'Derivar a oftalmología',
            say: 'Si no responde en cuarenta y ocho a setenta y dos horas, se deriva. No te quedes insistiendo con el mismo colirio si el cuadro empeora.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La forma que no puedes perder',
      title: 'Conjuntivitis hiperaguda gonocócica',
      nodes: [
        { id: 'ngo', col: 0, row: 1, k: 'cause', t: 'Neisseria gonorrhoeae', s: 'Recién nacido o adulto joven sexualmente activo' },
        { id: 'sec', col: 1, row: 1, k: 'mech', t: 'Secreción en chorro', s: 'Purulenta hiperabundante y quemosis severa' },
        { id: 'per', col: 2, row: 0, k: 'risk', t: 'Penetra la córnea intacta', s: 'A diferencia de otras bacterias' },
        { id: 'urg', col: 3, row: 1, k: 'alert', t: 'Ceftriaxona urgente', s: 'Un gramo intramuscular o endovenoso' },
        { id: 'neo', col: 2, row: 2, k: 'risk', t: 'En el recién nacido', s: 'Veinticinco a cincuenta miligramos por kilo' },
      ],
      edges: [
        { from: 'ngo', to: 'sec' }, { from: 'sec', to: 'per' }, { from: 'per', to: 'urg' }, { from: 'sec', to: 'neo' },
      ],
      steps: [
        { show: ['ngo'], note: 'Recién nacido a los 2 a 5 días, o adulto joven',
          say: 'Ahora la forma que decide esta clase: la conjuntivitis hiperaguda por gonococo. Aparece típicamente en el recién nacido, a los dos a cinco días de vida por contagio en el parto, o en el adulto joven sexualmente activo.' },
        { show: ['sec'], note: 'No confundir con una bacteriana común',
          say: 'La secreción no es solo abundante: sale a presión, en chorro, purulenta, con quemosis severa, la conjuntiva hinchada como gelatina. No la confundas con una bacteriana común: aquí la cantidad es desproporcionada. Mira a este recién nacido: los párpados hinchados y la secreción purulenta que brota apenas se abren.',
          photo: { src: '_verificadas/77_conjuntivitis_neonatal__KanskisClini_p152_1.jpg', label: 'Oftalmía neonatal gonocócica', at: 'Mira a este recién nacido', credit: "Kanski's Clinical Ophthalmology, 8.ª ed., p. 152" } },
        { show: ['per'], note: 'El riesgo crítico de este germen',
          say: 'Y aquí está el riesgo crítico: el gonococo, a diferencia de casi cualquier otra bacteria, puede atravesar y perforar el epitelio corneal intacto. Eso convierte esta conjuntivitis en una urgencia real, no en una variante más grave de lo mismo.' },
        { show: ['urg'], note: 'Monodosis, más lavados continuos',
          say: 'El tratamiento es ceftriaxona, un gramo intramuscular o endovenoso en monodosis, más lavados oculares continuos. Un colirio antibiótico tópico, por sí solo, no basta.' },
        { show: ['neo'], note: 'Ajustada al peso en el recién nacido',
          say: 'En el recién nacido, la dosis se ajusta al peso: veinticinco a cincuenta miligramos por kilo. Y en todos los casos, se hospitaliza.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Viral',
      title: 'Adenovirus: la más contagiosa',
      cards: [
        { title: 'Clínica', tag: 'El dato que decide', kind: 'criteria', items: [
          { t: 'Secreción acuosa, arenilla', d: 'Folículos en la conjuntiva tarsal inferior',
            say: 'La conjuntivitis viral, casi siempre por adenovirus, da secreción acuosa o serosa, sensación de arenilla, e hiperemia con folículos en la conjuntiva tarsal inferior. Mira esta conjuntiva: rosada y brillante, con pequeñas elevaciones translúcidas, los folículos.',
            photo: { src: 'biblioteca/12_oftalmologia/oftal-02/01_conjuntivitis_viral__kanski_p155.jpg', label: 'Folículos virales', at: 'Mira esta conjuntiva', credit: "Kanski's Clinical Ophthalmology, 8.ª ed., p. 155" } },
          { t: 'Adenopatía preauricular dolorosa', d: 'El hallazgo que confirma el diagnóstico',
            say: 'Pero el dato que confirma el diagnóstico es la adenopatía preauricular dolorosa, ese ganglio que se palpa justo delante de la oreja. Suele empezar en un ojo y pasar al otro en dos a tres días, y puede venir con fiebre y molestias al tragar, la fiebre faringoconjuntival.' },
        ] },
        { title: 'Tratamiento', tag: 'Solo soporte', kind: 'normal', items: [
          { t: 'Compresas frías y lágrimas artificiales', d: 'Sin antibióticos ni corticoides',
            say: 'El tratamiento es puramente de soporte: compresas frías y lágrimas artificiales sin preservantes.' },
          { t: 'Reposo laboral o escolar', d: 'Siete a diez días, por el contagio',
            say: 'Y algo que se pregunta mucho: por su altísimo contagio por contacto de mano a ojo, se indica reposo laboral o escolar, y lavado frecuente de manos, por siete a diez días.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Alérgica',
      title: 'El prurito manda',
      cards: [
        { title: 'Clínica', tag: 'Signo cardinal', kind: 'criteria', items: [
          { t: 'Prurito intenso y bilateral', d: 'Sin prurito, casi nunca es alergia',
            say: 'La conjuntivitis alérgica es una hipersensibilidad tipo uno por polen, ácaros o pelo de animales. Su signo cardinal, indiscutible, es el prurito intenso y bilateral. Si no hay picazón, el diagnóstico de alergia es muy poco probable.' },
          { t: 'Quemosis y papilas en empedrado', d: 'Edema conjuntival, reacción papilar superior',
            say: 'Se acompaña de lagrimeo, edema palpebral y quemosis, ese edema gelatinoso de la conjuntiva, con papilas en empedrado en el párpado superior. Mira este párpado evertido: las papilas se ven como un empedrado. Y en esta otra, la forma vernal, con papilas gigantes.',
            photos: [
              { src: 'biblioteca/12_oftalmologia/oftal-02/02_conjuntivitis-alergica-vernal-papilar-gi_alt1__amir-oftalmo_p49.jpg', label: 'Papilas en empedrado', at: 'Mira este párpado evertido', credit: 'Manual AMIR Oftalmología, p. 49' },
              { src: 'biblioteca/12_oftalmologia/oftal-02/02_conjuntivitis-alergica-vernal-papilar-gi__cto-oftalmo_p35.jpg', label: 'Papilas gigantes (vernal)', at: 'Y en esta otra', credit: 'Manual CTO Oftalmología 14.ª ed., p. 35' },
            ] },
        ] },
        { title: 'Tratamiento', tag: 'Antihistamínico tópico', kind: 'pharma', items: [
          { t: 'Olopatadina cada 12 horas', d: 'O ketotifeno, más compresas frías',
            say: 'Se trata evitando el alérgeno, con compresas frías y antihistamínicos tópicos que además estabilizan el mastocito, como la olopatadina cada doce horas, o ketotifeno.' },
          { t: 'Corticoides: solo con oftalmólogo', d: 'Nunca de primera línea en atención primaria',
            say: 'Los corticoides tópicos se reservan para casos graves, y solo bajo supervisión del oftalmólogo. Nunca son la primera línea que tú indicas en atención primaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando no se va',
      title: 'Conjuntivitis bacteriana crónica',
      cards: [
        { title: 'Cómo se sospecha', tag: 'Más de cuatro semanas', kind: 'criteria', items: [
          { t: 'Dura más de 4 semanas o recurre', d: 'Casi siempre blefaroconjuntivitis',
            say: 'Cuando la inflamación dura más de cuatro semanas o vuelve una y otra vez, hablamos de conjuntivitis bacteriana crónica. Casi siempre es una blefaroconjuntivitis por estafilococo dorado, con la blefaritis asociada. Otra es la Moraxella, que da una conjuntivitis angular con maceración del canto externo. Y en zonas endémicas, la Chlamydia trachomatis, el tracoma, una causa de ceguera evitable.' },
          { t: 'Costras matinales, ardor, poca secreción', d: 'Visión normal',
            say: 'Clínicamente es un ojo rojo leve, con ardor, costras en las pestañas por la mañana y secreción escasa mucopurulenta. La agudeza visual suele ser normal.' },
        ] },
        { title: 'Manejo', tag: 'Higiene y ungüento', kind: 'pharma', items: [
          { t: 'Higiene palpebral y eritromicina', d: 'Ungüento nocturno por 2 a 3 semanas',
            say: 'El tratamiento inicial es higiene palpebral diaria, con compresas tibias y limpieza del borde ciliar, más ungüento de eritromicina en el borde del párpado por la noche, durante dos a tres semanas, y lágrimas artificiales. Y busca lo que la perpetúa: rosácea, ojo seco o lentes de contacto.' },
        ] },
        { title: 'Derivar si', tag: 'Sospecha de tracoma', kind: 'alert', items: [
          { t: 'No mejora en 2 semanas', d: 'Cicatrización, pannus, triquiasis o córnea',
            say: 'Se deriva si no mejora en dos semanas, si hay folículos con cicatrización conjuntival, pannus o triquiasis, que sugieren tracoma, o si hay compromiso corneal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Procedimientos',
      title: 'Cultivo conjuntival y ungüento oftálmico',
      cards: [
        { title: 'Cuándo cultivar', tag: 'No en toda conjuntivitis', kind: 'key', items: [
          { t: 'Neonatal, hiperaguda, crónica', d: 'Recurrente, refractaria o con lentes de contacto',
            say: 'El cultivo no se pide en la conjuntivitis aguda leve del adulto: esa se trata de forma empírica. Se pide en la neonatal, en la hiperaguda con sospecha de gonococo, en la crónica, en la recurrente, si no responde a tres a cinco días de tratamiento, o en usuarios de lentes de contacto.' },
        ] },
        { title: 'Cómo tomar la muestra', tag: 'Antes del antibiótico', kind: 'criteria', items: [
          { t: 'Sin anestésico y antes del antibiótico', d: 'Tórula húmeda en el fondo de saco inferior',
            say: 'La muestra se toma antes de instilar el antibiótico y sin anestésico, porque los conservantes inhiben el crecimiento. Con una tórula estéril humedecida en suero, se frota la conjuntiva tarsal inferior y el fondo de saco, sin tocar las pestañas ni el borde del párpado. Se siembra de inmediato en agar sangre y agar chocolate, y se hace un Gram.' },
          { t: 'Diplococos gramnegativos: gonococo', d: 'Ceftriaxona y derivación urgente',
            say: 'Si el Gram muestra diplococos gramnegativos intracelulares en un cuadro hiperagudo, es gonococo: ceftriaxona sistémica y derivación urgente. En el neonato con inclusiones piensa en Chlamydia, que no crece en medios habituales y se diagnostica por PCR. Y una flora mixta de piel sin patógeno claro suele ser contaminación.' },
        ] },
        { title: 'Poner el ungüento', tag: 'Procedimiento «Realizar»', kind: 'pharma', items: [
          { t: 'Cinta de 1 cm en el fondo de saco', d: 'Sin que el tubo toque ojo ni pestañas',
            say: 'Para el ungüento: lávate las manos, paciente con la cabeza hacia atrás mirando arriba, limpia las costras con suero, tira suavemente del párpado inferior para formar un bolsillo, y aplica una cinta de un centímetro en el fondo de saco, sin que la punta del tubo toque el ojo, las pestañas ni el párpado.' },
          { t: 'Colirios primero, ungüento después', d: 'Espera 5 minutos; mejor al acostarse',
            say: 'Pide que cierre el ojo y lo mueva, sin frotar. La visión borrosa es esperable, así que conviene aplicarlo al acostarse. Si usa colirios y ungüento, primero los colirios, cinco minutos de espera, y recién entonces el ungüento.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Cuatro conjuntivitis',
      images: [
        { src: 'animaciones/oftal-02/A1_conjuntivitis.mp4', label: 'Las cuatro conjuntivitis', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · capas y rótulos propios' },
      ],
      steps: [
        { note: 'Un dato para cada una',
          say: 'Cuatro conjuntivitis, un dato para cada una. La bacteriana da secreción mucopurulenta que pega las pestañas. La viral es acuosa, con folículos y un ganglio preauricular doloroso. La alérgica es el prurito intenso, con quemosis. Y la gonocócica es un chorro de pus con quemosis severa: ceftriaxona sistémica, nunca solo un colirio.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos el árbol con los tres datos que separan las cuatro conjuntivitis.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El dato que decide cada conjuntivitis',
      head: ['Dato clínico', 'Diagnóstico', 'Trampa frecuente'],
      rows: [
        { cells: ['Secreción mucopurulenta, pestañas pegadas', 'Bacteriana común', 'Indicar corticoides para acelerar'],
          say: 'Repasemos las trampas. Secreción mucopurulenta con pestañas pegadas: bacteriana común, con cloranfenicol. La trampa es sumar un corticoide pensando que acelera la mejoría.' },
        { cells: ['Secreción acuosa, adenopatía preauricular', 'Viral por adenovirus', 'Indicar antibiótico tópico'],
          say: 'Secreción acuosa con adenopatía preauricular dolorosa: viral por adenovirus. La trampa es darle un antibiótico, que no hace nada contra un virus.' },
        { cells: ['Prurito bilateral intenso', 'Alérgica', 'Partir con un colirio de corticoide'],
          say: 'Prurito bilateral intenso: alérgica, con antihistamínico tópico. La trampa es partir directo con un corticoide, en vez de con olopatadina.' },
        { cells: ['Más de 4 semanas, costras matinales', 'Blefaroconjuntivitis crónica', 'Repetir el colirio sin higiene palpebral'],
          say: 'Más de cuatro semanas con costras matinales: blefaroconjuntivitis crónica. La trampa es repetir el mismo colirio, cuando lo que corrige es la higiene del párpado y el ungüento nocturno.' },
        { cells: ['Secreción purulenta en chorro, quemosis severa', 'Gonocócica hiperaguda', 'Tratar solo con colirio antibiótico'],
          say: 'Y secreción purulenta en chorro con quemosis severa: gonocócica hiperaguda, con ceftriaxona sistémica. La trampa, la más peligrosa de esta clase, es pensar que un colirio antibiótico solo es suficiente. El gonococo perfora la córnea antes de que el colirio alcance a actuar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Joven de 19 años consulta por ojo derecho rojo de 48 horas de evolución, que hoy comenzó en el ojo izquierdo. Refiere sensación de arenilla, lagrimeo abundante y párpados hinchados, además de tos y odinofagia leve. Al examen: inyección conjuntival bilateral difusa, secreción serosa, y se palpa un nódulo doloroso de 1 centímetro por delante del trago auricular derecho. Agudeza visual normal en ambos ojos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar colirio de cloranfenicol cada 4 horas por 7 días' },
        { letter: 'B', text: 'Compresas frías, lágrimas artificiales y reposo con aislamiento por contagio' },
        { letter: 'C', text: 'Ceftriaxona intramuscular en monodosis' },
        { letter: 'D', text: 'Colirio de dexametasona cada 6 horas' },
        { letter: 'E', text: 'Derivar de urgencia a oftalmología en menos de 2 horas' },
      ],
      correct: 'B',
      explanation: 'Secreción acuosa, inicio en un ojo con contagio al otro, pródromo respiratorio y adenopatía preauricular dolorosa son el cuadro típico de conjuntivitis viral por adenovirus. El manejo es de soporte, con aislamiento por el alto contagio; no lleva antibióticos, ceftriaxona ni corticoides, y no hay signos de alarma que justifiquen la derivación urgente.',
      say: {
        stem: 'Vamos al caso. Joven de diecinueve años, con ojo derecho rojo de cuarenta y ocho horas, que hoy también comenzó en el izquierdo. Sensación de arenilla, lagrimeo abundante, párpados hinchados, tos y molestias leves al tragar. Al examen: inyección conjuntival bilateral difusa, secreción serosa, y un nódulo doloroso justo delante de la oreja derecha. La visión es normal en ambos ojos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: colirio de cloranfenicol, compresas frías con lágrimas artificiales y aislamiento, ceftriaxona intramuscular, colirio de dexametasona, o derivar de urgencia. Piénsalo.',
        answer: 'Es la B. Secreción acuosa, contagio de un ojo al otro, pródromo respiratorio y esa adenopatía preauricular dolorosa son la firma del adenovirus. No hay ningún signo de alarma, así que no se deriva de urgencia, y no lleva antibiótico ni corticoide, porque es un virus. Lo único activo aquí es el aislamiento, por lo contagiosa que es.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 44',
      stem: 'Un paciente de 35 años, con cuadro de ojo rojo asociado a secreción mucopurulenta desde hace un día, por lo cual se le indicó colirio de cloranfenicol cada 8 horas, sin embargo evoluciona posteriormente con aumento del enrojecimiento, edema palpebral y quemosis.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Alergia al cloranfenicol' },
        { letter: 'B', text: 'Celulitis orbitaria' },
        { letter: 'C', text: 'Obstrucción lacrimal' },
        { letter: 'D', text: 'Chalazión' },
        { letter: 'E', text: 'Absceso tarsal' },
      ],
      correct: 'B',
      explanation: 'Una conjuntivitis bacteriana que, en vez de mejorar con el colirio, progresa con más edema palpebral y quemosis, dejó de ser una conjuntivitis simple: son signos de que la infección pasó al tejido orbitario, una celulitis orbitaria. La alergia al cloranfenicol es infrecuente y no explica la quemosis.',
      say: {
        stem: 'Pregunta real, del EUNACOM de julio de dos mil trece. Paciente de treinta y cinco años, con ojo rojo y secreción mucopurulenta de un día, al que se le indicó colirio de cloranfenicol cada ocho horas. Pero en vez de mejorar, evoluciona con más enrojecimiento, párpado hinchado y quemosis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: alergia al cloranfenicol, celulitis orbitaria, obstrucción lacrimal, chalazión, o absceso tarsal. Piénsalo.',
        answer: 'Es celulitis orbitaria. La clave de esta pregunta no es el diagnóstico inicial, que sí era una conjuntivitis bacteriana común, sino saber reconocer cuándo un cuadro que parecía simple se complicó. El párpado que se hincha y la quemosis que empeora con tratamiento correcto son la bandera roja de que la infección avanzó más allá de la conjuntiva. Guarda esta idea, porque la próxima clase de este bloque profundiza justo en esa diferencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 32',
      stem: 'Un recién nacido de 20 días de vida, cuyo embarazo no fue controlado y que nació por parto vaginal en su casa, es traído por presentar secreción ocular bilateral desde hace 5 días. Al examen físico se aprecia eritema conjuntival y escasa secreción bilateral.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Neisseria meningitidis' },
        { letter: 'B', text: 'Neisseria gonorrhoeae' },
        { letter: 'C', text: 'Streptococcus pneumoniae' },
        { letter: 'D', text: 'Streptococcus agalactiae' },
        { letter: 'E', text: 'Chlamydia trachomatis' },
      ],
      correct: 'E',
      explanation: 'El gonococo y la clamidia son las dos causas clásicas de conjuntivitis neonatal, pero se distinguen por el tiempo de aparición y la intensidad: el gonococo es muy purulento y aparece en la primera semana; la clamidia demora más, entre una y tres semanas, y es menos purulenta. Con 20 días de vida y secreción escasa, la clamidia es más probable que el gonococo.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Un recién nacido de veinte días, de un embarazo no controlado y parto en casa, es traído por secreción ocular bilateral de cinco días. Al examen: eritema conjuntival y secreción escasa en ambos ojos.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: Neisseria meningitidis, Neisseria gonorrhoeae, Streptococcus pneumoniae, Streptococcus agalactiae, o Chlamydia trachomatis. Piénsalo.',
        answer: 'Es Chlamydia trachomatis. Vimos que el gonococo da un cuadro violento en los primeros dos a cinco días, con secreción en chorro. Aquí el bebé tiene veinte días, y la secreción es escasa, no purulenta en chorro. Ese tiempo más largo y esa menor intensidad son justamente lo que distingue a la clamidia del gonococo en el recién nacido, y por eso se trata distinto: con azitromicina o eritromicina, en vez de ceftriaxona.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.1.007 · Conjuntivitis no infecciosa",
      "stem": "Mujer de 24 años, con rinitis alérgica, consulta en primavera por ojo rojo bilateral de 1 semana, con prurito intenso, lagrimeo y secreción mucosa filante. Al examen hay hiperemia conjuntival leve, quemosis y papilas en la conjuntiva tarsal, con agudeza visual normal y sin adenopatía preauricular.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Colirio de cloranfenicol cada 6 horas"
        },
        {
          "letter": "B",
          "text": "Colirio antihistamínico estabilizador de mastocitos, como olopatadina, y compresas frías"
        },
        {
          "letter": "C",
          "text": "Colirio de corticoide de alta potencia por 1 mes"
        },
        {
          "letter": "D",
          "text": "Colirio de aciclovir"
        },
        {
          "letter": "E",
          "text": "Oclusión ocular por 48 horas"
        }
      ],
      "correct": "B",
      "explanation": "Prurito intenso, bilateral, estacional, con secreción mucosa y antecedente atópico es una conjuntivitis alérgica. Se trata con evitar el alérgeno, compresas frías, lágrimas artificiales y antihistamínicos tópicos de acción dual, como olopatadina. Los corticoides tópicos se reservan al especialista por el riesgo de glaucoma, catarata y queratitis herpética.",
      "say": {
        "stem": "Mujer de veinticuatro años con rinitis alérgica que en primavera tiene una semana de ojo rojo en ambos ojos, con picazón intensa, lagrimeo y secreción mucosa como hilos. Tiene quemosis y papilas en el párpado, visión normal y sin ganglio preauricular.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: cloranfenicol en colirio, antihistamínico tópico como olopatadina con compresas frías, corticoide tópico potente por un mes, aciclovir en colirio, u oclusión ocular. Piénsalo.",
        "answer": "Es la B. La picazón es la clave de la alergia, y se trata con antihistamínico tópico de doble acción y frío local. El corticoide tópico tienta porque alivia rápido, pero en atención primaria es peligroso: puede subir la presión ocular, dar catarata o empeorar un herpes corneal."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2019 · Pregunta 32",
      "stem": "Un recién nacido de 20 días, cuyo embarazo no fue controlado y que nació por parto vaginal en su casa, es traído por secreción ocular bilateral desde hace 5 días. Al examen físico se aprecia eritema conjuntival y escasa secreción bilateral.",
      "question": "¿Cuál es el agente etiológico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Neisseria meningitidis"
        },
        {
          "letter": "B",
          "text": "Neisseria gonorrhoeae"
        },
        {
          "letter": "C",
          "text": "Streptococcus pneumoniae"
        },
        {
          "letter": "D",
          "text": "Streptococcus agalactiae"
        },
        {
          "letter": "E",
          "text": "Chlamydia trachomatis"
        }
      ],
      "correct": "E",
      "explanation": "La conjuntivitis neonatal por Chlamydia trachomatis aparece entre los 5 y 14 días de vida o después, con secreción escasa o moderada, y puede asociarse a neumonía afebril. La gonocócica aparece antes (2 a 5 días) con secreción purulenta abundante y riesgo de perforación corneal. Se trata con azitromicina o eritromicina oral, y deben tratarse los padres.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un recién nacido de veinte días, nacido en casa sin control del embarazo, tiene ojos rojos con secreción escasa bilateral hace cinco días.",
        "question": "¿Cuál es el agente etiológico más probable?",
        "options": "Las opciones: meningococo, gonococo, neumococo, estreptococo agalactiae o clamidia. Piénsalo.",
        "answer": "Es la E. Una conjuntivitis neonatal de inicio tardío y secreción escasa es por clamidia. El gonococo tienta por el parto sin control, pero aparece en los primeros días con secreción purulenta abundante."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 75",
      "stem": "Paciente de 32 años, con antecedentes de asma y rosácea, usuaria de corticoides inhalados, presenta un cuadro de algunos meses de evolución de ojo rojo bilateral, asociado a ardor, epífora y secreción mucosa que a veces se vuelve purulenta.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Glaucoma agudo"
        },
        {
          "letter": "B",
          "text": "Blefaritis"
        },
        {
          "letter": "C",
          "text": "Uveítis"
        },
        {
          "letter": "D",
          "text": "Dacriocistitis"
        },
        {
          "letter": "E",
          "text": "Conjuntivitis bacteriana crónica"
        }
      ],
      "correct": "E",
      "explanation": "Ojo rojo superficial bilateral de más de 4 semanas, con secreción mucopurulenta intermitente, ardor y epífora, es una conjuntivitis bacteriana crónica, habitualmente asociada a blefaritis estafilocócica o rosácea. Se trata con higiene palpebral y antibiótico tópico, y se toma cultivo si no responde. El glaucoma agudo y la uveítis son ojos rojos profundos, sin secreción.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Mujer de treinta y dos años con rosácea, con meses de ojo rojo bilateral, ardor, lagrimeo y secreción mucosa que a veces es purulenta.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: glaucoma agudo, blefaritis, uveítis, dacriocistitis o conjuntivitis bacteriana crónica. Piénsalo.",
        "answer": "Es la E. Meses de ojo rojo con secreción mucopurulenta es una conjuntivitis bacteriana crónica. La blefaritis tienta porque la acompaña con frecuencia, pero por sí sola da ardor y costras en el borde palpebral, no secreción purulenta."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.4.002 · Cultivo de secreción conjuntival",
      "stem": "Recién nacido de 3 días con secreción conjuntival purulenta abundante, bilateral, con edema palpebral marcado y quemosis. La madre no tuvo control prenatal.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Lavado con suero y control en 1 semana"
        },
        {
          "letter": "B",
          "text": "Masaje del saco lagrimal"
        },
        {
          "letter": "C",
          "text": "Colirio de cloranfenicol y alta"
        },
        {
          "letter": "D",
          "text": "Tomar Gram y cultivo de secreción conjuntival (incluyendo medios para gonococo y estudio de Chlamydia) e iniciar ceftriaxona sistémica"
        },
        {
          "letter": "E",
          "text": "Corticoide tópico"
        }
      ],
      "correct": "D",
      "explanation": "La conjuntivitis neonatal hiperaguda en los primeros días sugiere Neisseria gonorrhoeae, que puede perforar la córnea. Se toma Gram y cultivo de la secreción (y estudio de Chlamydia, más típica entre los 5 y 14 días) antes de tratar, y se inicia ceftriaxona sistémica con lavados frecuentes. Se estudia y trata a la madre y su pareja.",
      "say": {
        "stem": "Recién nacido de tres días con secreción purulenta abundante en ambos ojos y párpados muy hinchados, de madre sin control prenatal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: lavado y control, masaje lagrimal, cloranfenicol tópico y alta, Gram y cultivo de la secreción e inicio de ceftriaxona sistémica o corticoide tópico. Piénsalo.",
        "answer": "Es la D. Una conjuntivitis purulenta intensa a los tres días de vida sugiere gonococo: se toma Gram y cultivo e inicia ceftriaxona sistémica. El colirio y alta tienta, pero el gonococo puede perforar la córnea y requiere tratamiento sistémico."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.5.001 · Aplicación de ungüentos",
      "stem": "Se indica ungüento oftálmico de cloranfenicol a un paciente con conjuntivitis bacteriana y se le enseña cómo aplicarlo.",
      "question": "¿Cuál es la técnica correcta?",
      "options": [
        {
          "letter": "A",
          "text": "Aplicar el ungüento directamente sobre la córnea con la punta del tubo apoyada en el ojo"
        },
        {
          "letter": "B",
          "text": "Aplicar sobre la piel del párpado superior"
        },
        {
          "letter": "C",
          "text": "Lavarse las manos, traccionar suavemente el párpado inferior hacia abajo, depositar una franja de 1 cm de ungüento en el fondo de saco conjuntival inferior sin tocar el ojo con el tubo, y cerrar suavemente los párpados"
        },
        {
          "letter": "D",
          "text": "Frotar el ojo después de aplicarlo para distribuirlo"
        },
        {
          "letter": "E",
          "text": "Aplicar antes de los colirios para que actúen mejor"
        }
      ],
      "correct": "C",
      "explanation": "El ungüento se aplica con manos limpias en el fondo de saco conjuntival inferior, traccionando el párpado inferior, en una franja de 1 cm, sin que la punta toque el ojo ni las pestañas. Luego se cierra el ojo suavemente, sin frotar. Si se usan colirios, el ungüento va al final, porque impide su absorción.",
      "say": {
        "stem": "Se le enseña a un paciente con conjuntivitis bacteriana a aplicarse un ungüento oftálmico.",
        "question": "¿Cuál es la técnica correcta?",
        "options": "Las opciones: sobre la córnea con el tubo apoyado, sobre la piel del párpado, en el fondo de saco inferior traccionando el párpado sin tocar el ojo, frotando después o antes de los colirios. Piénsalo.",
        "answer": "Es la C. Se tracciona el párpado inferior y se deja una franja en el fondo de saco sin tocar el ojo con el tubo. Aplicarlo antes de los colirios tienta, pero el ungüento forma una barrera y los colirios ya no se absorben."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tres preguntas, tres respuestas', tag: 'El atajo del examen', kind: 'key', items: [
          { t: 'Mucopurulenta y pegajosa: bacteriana', d: 'Acuosa con adenopatía: viral',
            say: 'Cerremos con las reglas de oro. Tres preguntas te bastan: secreción mucopurulenta que pega las pestañas es bacteriana; secreción acuosa con adenopatía preauricular es viral.' },
          { t: 'Prurito intenso bilateral: alérgica', d: 'En chorro y purulenta masiva: gonocócica',
            say: 'Prurito intenso y bilateral es alérgica. Y secreción purulenta en chorro, con quemosis severa, es gonocócica hiperaguda.' },
        ] },
        { title: 'La emergencia del bloque', tag: 'Gonococo', kind: 'alert', items: [
          { t: 'Perfora córnea intacta', d: 'Ceftriaxona sistémica, nunca solo colirio',
            say: 'La gonocócica es la única de las cuatro que perfora la córnea intacta, y la única que exige ceftriaxona sistémica, nunca solo un colirio.' },
        ] },
        { title: 'La regla que no cambia', tag: 'Corticoides', kind: 'pharma', items: [
          { t: 'Ninguna conjuntivitis se trata con corticoides', d: 'Ni siquiera la alérgica, en atención primaria',
            say: 'Y si te llevas una sola idea de hoy: ninguna conjuntivitis, de ninguno de los cuatro tipos, se trata con corticoides en atención primaria. Nos vemos en la próxima clase, donde vamos a los párpados y al saco lagrimal.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Las cuatro conjuntivitis: tres preguntas',
    root: N('start', 'Ojo rojo con secreción', 'Sin dolor real ni baja de visión',
      'Paciente con ojo rojo superficial, secreción y sin ningún signo de alarma de la clase pasada. Ahora hay que tipificar la conjuntivitis con tres preguntas.',
      ['', N('q', '¿Cómo es la secreción?', 'Y hay prurito o adenopatía',
        'Mira el tipo de secreción, si hay prurito y si hay una adenopatía preauricular.',
        ['Mucopurulenta, pestañas pegadas', N('ok', 'Bacteriana común', 'Cloranfenicol tópico 7 días',
          'Secreción mucopurulenta espesa, pestañas pegadas al despertar: bacteriana común. Aseo más colirio de cloranfenicol cada cuatro horas por siete días.')],
        ['Acuosa, adenopatía dolorosa', N('ok', 'Viral por adenovirus', 'Soporte y aislamiento 7 a 10 días',
          'Secreción acuosa con adenopatía preauricular dolorosa: viral por adenovirus. Compresas frías, lágrimas artificiales y reposo con aislamiento por el contagio.')],
        ['Prurito intenso bilateral', N('ok', 'Alérgica', 'Antihistamínico tópico',
          'Prurito intenso y bilateral, con papilas en empedrado: alérgica. Evitar el alérgeno y olopatadina o ketotifeno tópico.')],
        ['En chorro, quemosis severa', N('alert', 'Gonocócica hiperaguda', 'Ceftriaxona sistémica urgente',
          'Secreción purulenta en chorro con quemosis severa, en recién nacido o adulto joven sexualmente activo: gonocócica. Ceftriaxona sistémica y lavados continuos, de urgencia, por el riesgo de perforación corneal.')])]),
  },
};
