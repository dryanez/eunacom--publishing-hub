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
            say: 'Empecemos por la bacteriana común, causada sobre todo por estafilococo dorado, neumococo y haemófilus. Su sello es la secreción mucopurulenta espesa y abundante: el paciente despierta con los párpados y las pestañas pegados.' },
          { t: 'Sin dolor profundo ni baja de visión', d: 'Inyección conjuntival difusa',
            say: 'La inyección es conjuntival difusa, sin dolor profundo y sin alteración visual. Recuerda la clase pasada: eso es justamente lo que la mantiene del lado superficial.' },
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
          say: 'La secreción no es solo abundante: sale a presión, en chorro, purulenta, con quemosis severa, la conjuntiva hinchada como gelatina. No la confundas con una bacteriana común: aquí la cantidad es desproporcionada.' },
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
            say: 'La conjuntivitis viral, casi siempre por adenovirus, da secreción acuosa o serosa, sensación de arenilla, e hiperemia con folículos en la conjuntiva tarsal inferior.' },
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
            say: 'Se acompaña de lagrimeo, edema palpebral y quemosis, ese edema gelatinoso de la conjuntiva, con papilas en empedrado en el párpado superior.' },
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
        options: 'Las opciones: alergia al cloranfenicol, celulitis orbitaria, obstrucción lacrimal, chalazión, o absceso tarsal.',
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
        options: 'Las opciones: Neisseria meningitidis, Neisseria gonorrhoeae, Streptococcus pneumoniae, Streptococcus agalactiae, o Chlamydia trachomatis.',
        answer: 'Es Chlamydia trachomatis. Vimos que el gonococo da un cuadro violento en los primeros dos a cinco días, con secreción en chorro. Aquí el bebé tiene veinte días, y la secreción es escasa, no purulenta en chorro. Ese tiempo más largo y esa menor intensidad son justamente lo que distingue a la clamidia del gonococo en el recién nacido, y por eso se trata distinto: con azitromicina o eritromicina, en vez de ceftriaxona.',
      },
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
