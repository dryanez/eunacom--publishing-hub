/**
 * TOMO 20: GINECOLOGÍA & ONCOLOGÍA GINECOLÓGICA · BLOQUE 3
 * Infecciones Ginecológicas, Patología Vulvar & Climaterio (20.9 a 20.12)
 */

const { flowGinecologia } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "gin-09",
    "classId": "gin-09",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Infecciones Ginecológicas, Patología Vulvar & Climaterio",
    "topicLabel": "20.9",
    "title": "Infecciones del Tracto Genital Inferior: Vulvovaginitis (Amsel) y Cervicitis",
    "perfilCode": "3.02.1.009",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Protocolo de Diagnóstico y Tratamiento de ITS y Vulvovaginitis MINSAL.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#51) · EUNACOM Julio 2023 (Q#29) · EUNACOM Diciembre 2022 (Q#18)",
    "frecuencia": "Máxima rentabilidad · Criterios de Amsel en vaginosis bacteriana, tratamiento en pareja en tricomoniasis y leucorrea en leche cortada",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de las Vulvovaginitis",
    "diagramRows": [
      {
        "t": "Mujer en Edad Fértil con Leucorrea Patológica y Prurito / Mal Olor Vaginal",
        "s": "Examen con espéculo sin lubricante + Medición de pH vaginal + Test de Aminas (KOH 10%) + Frotis en fresco",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Diagnóstico Diferencial Clínico y Microscópico",
        "al": "Vaginosis vs Candidiasis vs Tricomoniasis",
        "ll": "Vaginosis Bacteriana (Disbiosis)",
        "left": {
          "t": "Flujo blanco-grisáceo + Olor a pescado",
          "s": "Criterios de Amsel (3 de 4) · pH > 4.5 · Test de aminas (+) · Clue cells > 20% · Tratamiento: Metronidazol oral 500 mg c/12h x 7d",
          "type": "acc"
        },
        "rl": "Candidiasis Vulvovaginal",
        "right": {
          "t": "Prurito intenso + Flujo grumoso blanco",
          "s": "Leucorrea en 'leche cortada' o requesón adherente · Eritema vulvar severo · pH normal < 4.5 · Tratamiento: Clotrimazol vaginal o Fluconazol oral",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Tricomoniasis Vaginal (Infección de Transmisión Sexual)",
        "al": "Parásito Flagelado Móvil",
        "ll": "Tricomoniasis Confirmada",
        "left": {
          "t": "Flujo espumoso amarillo-verdoso + Cuello en Fresa",
          "s": "Trichomonas vaginalis móvil en fresco · pH > 5.0 · Tratamiento OBLIGATORIO DE LA PACIENTE Y SU PAREJA: Metronidazol 2g oral",
          "type": "crit"
        },
        "rl": "Cervicitis Mucopurulenta (Chlamydia / Gonococo)",
        "right": {
          "t": "Secreción purulenta endocervical + Friabilidad",
          "s": "Ceftriaxona 500 mg IM (gonococo) + Doxiciclina 100 mg c/12h x 7d (Chlamydia) · Notificación ENO y pareja",
          "type": "crit"
        }
      }
    ],
    "contexto": "Las infecciones del tracto genital inferior (vulvovaginitis y cervicitis) representan el motivo de consulta ginecológica más prevalente en la atención médica ambulatoria. El médico general debe saber diferenciar con absoluta certeza las tres entidades clásicas de vulvovaginitis mediante la clínica, el pH vaginal, el test de aminas (KOH al 10%) y el frotis al microscopio: 1) Vaginosis Bacteriana (disbiosis con pérdida de lactobacilos y proliferación de Gardnerella/anaerobios; diagnosticada por Criterios de Amsel); 2) Candidiasis Vulvovaginal (infección fúngica con prurito severo y leucorrea en leche cortada con pH ácido normal < 4.5); y 3) Tricomoniasis (infección de transmisión sexual por protozoo flagelado, con flujo espumoso verdoso, cuello en fresa y donde es ESTRICTAMENTE OBLIGATORIO tratar a la pareja sexual simultáneamente).",
    "contentSections": [
      {
        "subhead": "1. Vaginosis Bacteriana y Criterios de Amsel",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> No es una infección inflamatoria clásica, sino una <strong>disbiosis de la microbiota vaginal</strong>. Ocurre una drástica reducción o desaparición de los <em>Lactobacillus</em> productores de peróxido de hidrógeno y ácido láctico, con sobrecrecimiento masivo de bacterias anaerobias estrictas y facultativas: <strong>Gardnerella vaginalis</strong>, <em>Atopobium vaginae</em>, <em>Mobiluncus</em>, <em>Prevotella</em> y <em>Mycoplasma hominis</em>.",
          "• <strong>CRITERIOS DE AMSEL (Estándar Clínico, se requieren al menos 3 de los 4):</strong>",
          "  - <strong>1. Flujo vaginal homogéneo, fino, blanco-grisáceo</strong> que baña uniformemente las paredes vaginales.",
          "  - <strong>2. pH vaginal alcalino > 4.5</strong> (generalmente 5.0 a 5.5).",
          "  - <strong>3. Test de Aminas (Whiff Test) POSITIVO:</strong> Al añadir una gota de hidróxido de potasio (KOH al 10%) a la secreción vaginal, se volatilizan aminas aromáticas (cadaverina, putrescina) desprendiendo un fuerte y característico <strong>olor a pescado descompuesto</strong>.",
          "  - <strong>4. Presencia de 'Células Clave' o 'Células Guía' (Clue Cells) en el examen microscópico en fresco:</strong> Células epiteliales descamadas cubiertas por una gran cantidad de cocobacilos adheridos que <strong>borran totalmente sus bordes citoplasmáticos celulares (en más del 20% de las células)</strong>.",
          "• <strong>Tratamiento de Elección:</strong> <strong>METRONIDAZOL oral: 500 mg cada 12 horas durante 7 días</strong> (o gel vaginal al 0.75% por 5 días). Alternativa: Clindamicina 300 mg c/12h oral por 7 días. <em>Nota fundamental:</em> <strong>NO se requiere tratamiento de la pareja sexual masculina de rutina</strong> (no reduce recurrencias). Se debe advertir evitar el consumo de alcohol por efecto disulfiram."
        ]
      },
      {
        "subhead": "2. Candidiasis Vulvovaginal",
        "paragraphs": [
          "• <strong>Etiología:</strong> Infección oportunista causada en el 85-90% por <strong>Candida albicans</strong> (y 10% por <em>Candida glabrata</em> o <em>krusei</em>).",
          "• <strong>Factores Desencadenantes Típicos:</strong> Uso previo de antibióticos de amplio espectro (destruyen lactobacilos protectores), embarazo (altos niveles de estrógenos y glucógeno), diabetes mellitus mal compensada, inmunosupresión y corticoides.",
          "• <strong>Cuadro Clínico Clásico:</strong>",
          "  - <strong>Prurito vulvar intenso, continuo y desesperante</strong> (el síntoma cardinal).",
          "  - Disuria externa y ardor vulvar.",
          "  - <strong>Leucorrea blanca, espesa, grumosa, adherente, descrita clásicamente como 'en leche cortada' o 'en requesón'</strong>, habitualmente sin olor.",
          "  - Al examen: vulva y vagina intensamente eritematosas, edematosas, con escoriaciones por rascado y placas blanquecinas adheridas a la mucosa.",
          "• <strong>Diagnóstico:</strong>",
          "  - <strong>pH vaginal NORMAL y ácido: < 4.5</strong> (el único cuadro de los tres con pH ácido normal).",
          "  - <strong>Test de Aminas NEGATIVO.</strong>",
          "  - Examen directo al microscopio con KOH al 10%: visualización de <strong>pseudohifas y esporas (levaduras)</strong>.",
          "• <strong>Tratamiento de Elección:</strong>",
          "  - <strong>Tópico:</strong> <strong>Clotrimazol óvulos vaginales de 100 mg cada noche por 6 días</strong> (o 500 mg dosis única).",
          "  - <strong>Oral:</strong> <strong>Fluconazol 150 mg vía oral en dosis única</strong> (contraindicado en el embarazo; en gestantes solo se usan azoles tópicos como clotrimazol por 7 días)."
        ]
      },
      {
        "subhead": "3. Tricomoniasis Vaginal y Cervicitis Infecciosa",
        "paragraphs": [
          "• <strong>Tricomoniasis Vaginal:</strong>",
          "  - Infección de Transmisión Sexual (ITS) causada por el protozoo flagelado <strong>Trichomonas vaginalis</strong>.",
          "  - <strong>Clínica:</strong> Leucorrea abundante, <strong>amarillo-verdosa, espumosa, aireada y de mal olor</strong>, asociada a prurito, disuria y dispareunia.",
          "  - Examen físico: Marcado eritema vaginal y <strong>colpitis en fresa / cuello en fresa</strong> (petequias y punteado hemorrágico sobre el exocérvix en el 20-30% de los casos).",
          "  - Diagnóstico: pH > 5.0; microscopía en fresco inmediata que muestra <strong>protozoos piriformes flagelados móviles con movimientos oscilatorios rápidos</strong> y abundantes polimorfonucleares.",
          "  - <strong>Tratamiento OBLIGATORIO (Pregunta Crítica EUNACOM):</strong> <strong>METRONIDAZOL a dosis única de 2 gramos por vía oral</strong> (o 500 mg c/12h por 7 días). <strong>ES MANDATORIO EL TRATAMIENTO SIMULTÁNEO DE TODAS LAS PAREJAS SEXUALES</strong>, con abstinencia sexual hasta completar la terapia.",
          "• <strong>Cervicitis Mucopurulenta (Chlamydia y Gonococo):</strong>",
          "  - Secreción purulenta o mucopurulenta que fluye por el orificio cervical externo (canal endocervical), friabilidad del cuello al roce con el hisopo y ectropion sangrante.",
          "  - Tratamiento empírico inmediato de cobertura dual: <strong>CEFTRIAXONA 500 mg intramuscular en dosis única</strong> (para <em>Neisseria gonorrhoeae</em>) + <strong>DOXICICLINA 100 mg cada 12 horas por vía oral durante 7 días</strong> (para <em>Chlamydia trachomatis</em>) (o Azitromicina 1g oral dosis única en embarazadas). Tratamiento obligatorio a la pareja sexual y notificación ENO."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial Microbiológico y Clínico de las Vulvovaginitis",
      "headers": [
        "Característica",
        "Vaginosis Bacteriana",
        "Candidiasis Vulvovaginal",
        "Tricomoniasis Vaginal"
      ],
      "rows": [
        [
          "Etiología",
          "Disbiosis (Gardnerella + anaerobios)",
          "Candida albicans (hongo levaduriforme)",
          "Trichomonas vaginalis (protozoo flagelado)"
        ],
        [
          "Aspecto del Flujo",
          "Homogéneo, blanco-grisáceo, fluido",
          "Blanco, espeso, grumoso ('leche cortada')",
          "Abundante, amarillo-verdoso, espumoso"
        ],
        [
          "Síntoma Dominante",
          "Mal olor penetrante ('olor a pescado')",
          "Prurito vulvar intenso y ardor",
          "Flujo abundante, prurito y dispareunia"
        ],
        [
          "Eritema / Inflamación",
          "Mínimo o ausente (no inflamatoria)",
          "Eritema vulvovaginal severo + fisuras",
          "Eritema vaginal + 'cuello en fresa'"
        ],
        [
          "pH Vaginal",
          "ELEVADO (> 4.5, habitualmente 5.0)",
          "NORMAL / ÁCIDO (< 4.5)",
          "MUY ELEVADO (> 5.0 a 6.0)"
        ],
        [
          "Test de Aminas (KOH)",
          "POSITIVO (+)",
          "NEGATIVO (-)",
          "Habitualmente POSITIVO (+)"
        ],
        [
          "Microscopía en Fresco",
          "Clue cells (> 20%), ausencia lactobacilos",
          "Esporas y pseudohifas filamentosas",
          "Parásito flagelado móvil ovalado"
        ],
        [
          "Tratamiento Pareja",
          "NO indicado de rutina",
          "NO indicado (no es ITS)",
          "OBLIGATORIO SIMULTÁNEO (Es ITS)"
        ],
        [
          "Tratamiento de Elección",
          "Metronidazol oral 500 mg c/12h x 7d",
          "Clotrimazol óvulos o Fluconazol 150 mg",
          "Metronidazol 2g oral dosis única (ambos)"
        ]
      ]
    },
    "severityTable": {
      "title": "Complicaciones Asociadas a Infecciones Genitales No Tratadas",
      "headers": [
        "Infección Genital",
        "Población Afectada",
        "Complicaciones Mayores Demostradas"
      ],
      "rows": [
        [
          "Vaginosis Bacteriana en Embarazadas",
          "Gestantes en 2° y 3° trimestre",
          "Aumento significativo de Rotura Prematura de Membranas (RPM), parto prematuro y corioamnionitis."
        ],
        [
          "Tricomoniasis Vaginal",
          "Mujeres sexualmente activas",
          "Facilita la transmisión y adquisición del Virus de la Inmunodeficiencia Humana (VIH) y otras ITS."
        ],
        [
          "Cervicitis por Chlamydia o Gonococo",
          "Mujeres jóvenes en edad fértil",
          "Infección ascendente -> Enfermedad Pélvica Inflamatoria (EIP), hidrosálpinx, embarazo ectópico e infertilidad tubárica."
        ],
        [
          "Candidiasis Recurrente",
          "≥ 4 episodios confirmados al año",
          "Descartar Diabetes Mellitus tipo 2 no diagnosticada o infección por VIH oculta."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolos Farmacológicos Oficiales de Tratamiento en ITS y Vaginitis (MINSAL)",
      "headers": [
        "Cuadro Clínico",
        "Fármaco de Elección",
        "Posología Oficial",
        "Consideraciones Especiales"
      ],
      "rows": [
        [
          "Vaginosis Bacteriana",
          "Metronidazol oral",
          "500 mg cada 12 horas por 7 días",
          "Evitar alcohol durante y hasta 48h post-tratamiento (Efecto Antabuse)."
        ],
        [
          "Candidiasis No Complicada",
          "Fluconazol oral (o Clotrimazol vaginal)",
          "150 mg oral dosis única (o óvulos 100 mg/noche x 6 días)",
          "En embarazadas: ¡SOLO TRATAMIENTO TÓPICO (Clotrimazol)! No usar fluconazol oral."
        ],
        [
          "Tricomoniasis Vaginal",
          "Metronidazol oral",
          "2 g por vía oral en dosis única (o 500 mg c/12h x 7d)",
          "TRATAR A LA PAREJA OBLIGATORIAMENTE con el mismo esquema y abstinencia."
        ],
        [
          "Cervicitis Mucopurulenta",
          "Ceftriaxona IM + Doxiciclina oral",
          "Ceftriaxona 500 mg IM única + Doxiciclina 100 mg c/12h x 7d",
          "Cubrir siempre Gonococo + Chlamydia. Notificación obligatoria ENO."
        ]
      ]
    },
    "vignette": "Paciente de 23 años, sexualmente activa con nueva pareja desde hace un mes, consulta en el CESFAM por presentar flujo vaginal abundante de color amarillo-verdoso, con burbujas de aire ('espumoso') y de mal olor, asociado a prurito y ardor al orinar. A la especuloscopía se confirma abundante leucorrea espumosa en fondo de saco vaginal y a nivel del exocérvix se evidencian múltiples petequias eritematosas dispersas que confieren un aspecto característico de 'cuello en fresa'. El pH vaginal medido con tirita reactiva es de 5.8 y al frotis directo en fresco con suero fisiológico se aprecian numerosos leucocitos y múltiples microorganismos ovales dotados de flagelos que se desplazan activamente con movimientos rápidos y ondulantes.",
    "explicacion": "El cuadro clínico caracterizado por leucorrea abundante espumosa amarillo-verdosa, presencia semiológica patognomónica de 'cuello en fresa' (colpitis macular o en frambuesa), pH marcadamente alcalino (> 5.0) y la visualización directa microscópica de protozoos flagelados móviles con movimientos oscilatorios rápidos es diagnóstico indudable de Tricomoniasis Vaginal producida por Trichomonas vaginalis. Por tratarse de una Infección de Transmisión Sexual (ITS) con elevada tasa de reinfección, la conducta médica obligatoria estipulada por el MINSAL consiste en: 1) Prescribir Metronidazol a dosis de 2 gramos por vía oral en monodosis (o 500 mg cada 12 horas por 7 días); 2) Indicar el MISMO tratamiento antimicrobiano obligatorio a su pareja sexual simultáneamente; 3) Recomendar abstinencia sexual hasta completar la terapia; y 4) Solicitar tamizaje serológico para otras ITS (VIH, VDRL/RPR y VHB).",
    "keyPoints": [
      "Vaginosis bacteriana: Criterios de Amsel (flujo blanco-grisáceo, pH > 4.5, aminas +, clue cells > 20%).",
      "Tratamiento de Vaginosis: Metronidazol oral 500 mg c/12h x 7 días. NO requiere tratar a la pareja.",
      "Candidiasis: Prurito intenso + leucorrea en 'leche cortada' adherente + pH ÁCIDO NORMAL (< 4.5).",
      "Tratamiento de Candidiasis: Fluconazol 150 mg oral dosis única o Clotrimazol óvulos (único en embarazo).",
      "Tricomoniasis: ITS con flujo espumoso amarillo-verdoso, cuello en fresa y protozoo flagelado móvil.",
      "Tratamiento de Tricomoniasis: Metronidazol 2g oral dosis única A LA PACIENTE Y A SU PAREJA OBLIGATORIA.",
      "Cervicitis mucopurulenta: Secreción cervical purulenta. Tratamiento dual: Ceftriaxona 500 mg IM + Doxiciclina 7 días.",
      "Efecto antabuse / disulfiram: Prohibido ingerir alcohol durante el tratamiento con Metronidazol."
    ],
    "questions": [
      {
        "stem": "Una paciente de 25 años acude por flujo vaginal abundante con olor fétido a pescado, que se acentúa después de las relaciones sexuales y de la menstruación. No refiere prurito ni dolor. Al examen con espéculo se observa una secreción homogénea, fluida, de color blanco-grisáceo que recubre la vagina. El pH vaginal es de 5.2. Al agregar una gota de KOH al 10% a la muestra de flujo se desprende un intenso olor a aminas (Whiff test positivo). Al examen microscópico en fresco se aprecian células epiteliales con bordes citoplasmáticos borrosos cubiertos de bacterias ('clue cells'). ¿Cuál es el tratamiento de primera línea de elección?",
        "options": [
          {
            "id": "A",
            "text": "Fluconazol 150 mg oral en dosis única a la paciente y a su pareja"
          },
          {
            "id": "B",
            "text": "Metronidazol 500 mg cada 12 horas por vía oral durante 7 días a la paciente"
          },
          {
            "id": "C",
            "text": "Ceftriaxona 500 mg intramuscular en dosis única"
          },
          {
            "id": "D",
            "text": "Nistatina en crema tópica vulvar por 14 días"
          },
          {
            "id": "E",
            "text": "Doxiciclina 100 mg cada 12 horas por 14 días a ambos cónyuges"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El fluconazol es antifúngico para candidiasis.\nB) Correcta. La paciente cumple con los 4 Criterios de Amsel para Vaginosis Bacteriana (flujo fino homogéneo blanco-grisáceo, pH > 4.5, test de aminas positivo con KOH y presencia de más de un 20% de células clave o 'clue cells' en el frotis). El tratamiento de primera línea respaldado por el MINSAL y la OMS es el Metronidazol oral a dosis de 500 mg cada 12 horas durante 7 días (o gel de metronidazol tópico). Es un hecho clínico comprobado que la vaginosis bacteriana NO requiere tratamiento de la pareja sexual masculina de rutina, a diferencia de la tricomoniasis.\nC) Incorrecta. La ceftriaxona es para cervicitis gonocócica.\nD) Incorrecta. La nistatina es para hongos.\nE) Incorrecta. La doxiciclina es para clamidia.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.009"
      },
      {
        "stem": "Una mujer de 29 años en tratamiento con amoxicilina por una sinusitis acude a consulta por prurito vulvar desesperante y sensación de ardor al orinar de 3 días de evolución. Al examen físico se evidencia marcado eritema y edema vulvar con fisuras por rascado, y al colocar el espéculo se aprecia una leucorrea blanca espesa en grumos, similar a 'leche cortada', intensamente adherida a las paredes vaginales. El pH vaginal es de 4.0 y el test de aminas con KOH al 10% resulta negativo. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Vaginosis bacteriana por Gardnerella vaginalis"
          },
          {
            "id": "B",
            "text": "Candidiasis vulvovaginal"
          },
          {
            "id": "C",
            "text": "Tricomoniasis vaginal sintomática"
          },
          {
            "id": "D",
            "text": "Cervicitis mucopurulenta por Chlamydia trachomatis"
          },
          {
            "id": "E",
            "text": "Vaginitis atrófica senil"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La vaginosis cursa con pH elevado > 4.5 y test de aminas positivo, sin prurito intenso ni eritema.\nB) Correcta. La combinación de prurito vulvar severo, antecedente reciente de tratamiento antibiótico, leucorrea espesa grumosa en 'leche cortada' con placas adherentes a una mucosa intensamente eritematosa, asociado a un pH vaginal NORMAL ÁCIDO (< 4.5) y test de aminas negativo es la manifestación clásica e inequívoca de una Candidiasis Vulvovaginal. Se trata con Fluconazol 150 mg oral dosis única o Clotrimazol vaginal.\nC) Incorrecta. La tricomoniasis cursa con flujo espumoso verdoso, pH alcalino > 5.0 y colpitis en fresa.\nD) Incorrecta. La cervicitis cursa con secreción endocervical purulenta sin afectación vulvar primaria.\nE) Incorrecta. La vaginitis atrófica ocurre en la postmenopausia con mucosa pálida y pH alcalino.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.009"
      },
      {
        "stem": "¿En cuál de las siguientes infecciones ginecológicas del tracto genital inferior es ESTRICTAMENTE OBLIGATORIO prescribir tratamiento farmacológico simultáneo a todas las parejas sexuales de la paciente para evitar la reinfección y cortar la cadena de transmisión epidemiológica?",
        "options": [
          {
            "id": "A",
            "text": "Vaginosis bacteriana recurrente"
          },
          {
            "id": "B",
            "text": "Candidiasis vulvovaginal esporádica"
          },
          {
            "id": "C",
            "text": "Tricomoniasis vaginal"
          },
          {
            "id": "D",
            "text": "Vaginitis inflamatoria descamativa"
          },
          {
            "id": "E",
            "text": "Infección urinaria baja por Escherichia coli"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Múltiples ensayos clínicos han demostrado que tratar a la pareja masculina en la vaginosis bacteriana no previene las recurrencias.\nB) Incorrecta. La candidiasis no se clasifica como una ITS; el tratamiento de la pareja asintomática no está indicado.\nC) Correcta. La Tricomoniasis es una Infección de Transmisión Sexual (ITS) clásica en la que el varón suele actuar como portador asintomático del protozoo en la uretra y próstata. Por esta razón, el tratamiento simultáneo de la pareja sexual (con Metronidazol 2g oral en dosis única o 500 mg cada 12 horas por 7 días) junto con la indicación de abstinencia coital es ESTRICTAMENTE OBLIGATORIO en todos los casos para prevenir la reinfección inmediata de la mujer y detener la transmisión comunitaria.\nD) Incorrecta. Es un cuadro no infeccioso idiopático mediado por inmunidad.\nE) Incorrecta. La cistitis por E. coli no es una ITS y no requiere tratamiento de la pareja.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.009"
      },
      {
        "stem": "Una paciente de 21 años consulta por leucorrea purulenta y sangrado postcoital ocasional. A la especuloscopía se observa salida de secreción mucopurulenta espesa por el orificio cervical externo y cuello uterino marcadamente friable que sangra con facilidad al pasar la tórula. La paciente se encuentra afebril y sin dolor a la palpación uterina ni anexial. ¿Cuál es el tratamiento antimicrobiano empírico recomendado por las guías del MINSAL mientras se esperan los resultados microbiológicos?",
        "options": [
          {
            "id": "A",
            "text": "Metronidazol 500 mg cada 12 horas por 7 días oral exclusivamente"
          },
          {
            "id": "B",
            "text": "Ceftriaxona 500 mg intramuscular en dosis única MÁS Doxiciclina 100 mg cada 12 horas por vía oral durante 7 días"
          },
          {
            "id": "C",
            "text": "Amoxicilina 500 mg cada 8 horas oral por 10 días"
          },
          {
            "id": "D",
            "text": "Fluconazol 150 mg oral en dosis única"
          },
          {
            "id": "E",
            "text": "Clotrimazol en crema vaginal por 3 noches"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El metronidazol no cubre Neisseria gonorrhoeae ni Chlamydia trachomatis.\nB) Correcta. El cuadro de secreción purulenta endocervical con cuello friable corresponde a una Cervicitis Mucopurulenta aguda. Dado que los dos agentes causales más frecuentes y graves son Neisseria gonorrhoeae y Chlamydia trachomatis y que la coinfección es muy habitual, la norma ministerial y los CDC recomiendan el tratamiento empírico inmediato combinado de amplio espectro: Ceftriaxona 500 mg intramuscular dosis única (para gonococo) MÁS Doxiciclina 100 mg cada 12 horas vía oral por 7 días (para Chlamydia). Se debe citar a la pareja para tratamiento simultáneo.\nC) Incorrecta. El gonococo tiene altísima resistencia a aminopenicilinas y no cubre Chlamydia.\nD) Incorrecta. Es un antifúngico ineficaz contra bacterias.\nE) Incorrecta. El clotrimazol es un antifúngico tópico.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.009"
      }
    ]
  },
  {
    "id": "gin-10",
    "classId": "gin-10",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Infecciones Ginecológicas, Patología Vulvar & Climaterio",
    "topicLabel": "20.10",
    "title": "Patología Vulvar y Glándula de Bartolino: Quiste vs Absceso de Bartolino y Liquen Escleroso",
    "perfilCode": "3.02.1.010",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Procedimientos de drenaje y biopsia vulvar en APS y red ambulatoria.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#53) · EUNACOM Diciembre 2022 (Q#20) · EUNACOM Julio 2021 (Q#19)",
    "frecuencia": "Alta rentabilidad · Drenaje quirúrgico con marsupialización de Bartolino y Clobetasol en Liquen Escleroso vulvar",
    "svg": null,
    "algoTitle": "Algoritmo Terapéutico de la Patología de la Glándula de Bartolino y Dermatosis Vulvares",
    "diagramRows": [
      {
        "t": "Masa o Lesión Vulvar: Evaluar Sintomatología y Localización",
        "s": "¿Tumefacción dolorosa en tercio posterior del labio mayor vs Placa blanquecina pruriginosa?",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Patología de la Glándula de Bartolino (a las 4 u 8 del introito)",
        "al": "Quiste Asintomático vs Absceso Agudo Infeccioso",
        "ll": "Quiste de Bartolino (Asintomático / Indoloro)",
        "left": {
          "t": "Obstrucción Mecánica Aséptica del Conducto",
          "s": "Masa redondeada indolora sin eritema · Manejo expectante si es pequeño; marsupialización si produce molestias mecánicas",
          "type": "acc"
        },
        "rl": "Absceso de Bartolino (Infección Aguda)",
        "right": {
          "t": "Drenaje Quirúrgico + Marsupialización",
          "s": "Masa fluctuante, eritematosa, intensamente dolorosa que impide la deambulación · Incisión, drenaje y marsupialización o catéter de Word",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Placa Blanquecina Vulvar con Prurito Crónico",
        "al": "Liquen Escleroso Vulvar vs Carcinoma",
        "ll": "Liquen Escleroso Vulvar (Atrofia en cerradura)",
        "left": {
          "t": "Corticoides Tópicos Ultrapotentes: CLOBETASOL 0.05%",
          "s": "Reversión de la atrofia y alivio del prurito · Control estricto por riesgo de 3-5% de Cáncer Epidermoide Vulvar",
          "type": "warn"
        },
        "rl": "Sospecha de Malignidad (Lesión ulcerada o verrucosa)",
        "right": {
          "t": "Biopsia de Vulva con sacabocados (Punch)",
          "s": "Descartar Neoplasia Intraepitelial Vulvar (VIN) o Cáncer Epidermoide invasor de vulva",
          "type": "crit"
        }
      }
    ],
    "contexto": "Las glándulas vestibulares mayores o de Bartolino se ubican en el tercio posterior de los labios mayores (a las 4 y 8 horas del introito vaginal) y secretan moco lubricante. Su patología es sumamente frecuente: el Quiste de Bartolino (retención estéril por oclusión del conducto excretor, habitualmente indoloro) y el Absceso de la Glándula de Bartolino (sobreinfección polimicrobiana aguda que provoca dolor exquisito, tumefacción fluctuante e impotencia funcional para sentarse o caminar). En el EUNACOM se evalúa de forma recurrente que el tratamiento curativo del absceso es el drenaje con MARSUPIALIZACIÓN (o catéter de Word) para crear un nuevo orificio permanente, y NO la simple punción. Por su parte, el Liquen Escleroso Vulvar es una dermatosis atrófica autoinmune que causa prurito intratable y se trata con corticoides ultrapotentes (Clobetasol).",
    "contentSections": [
      {
        "subhead": "1. Glándula de Bartolino: Quiste vs Absceso Agudo",
        "paragraphs": [
          "• <strong>Anatomía:</strong> Las glándulas de Bartolino están situadas a ambos lados del introito vaginal, en la unión del tercio medio con el tercio posterior de los labios mayores (posiciones horarias de las <strong>4 y 8 del reloj</strong>). Sus conductos excretores de 2 cm drenan en el vestíbulo vulvar por fuera del himen.",
          "• <strong>Quiste de la Glándula de Bartolino:</strong>",
          "  - Ocurre por la oclusión mecánica aséptica del conducto excretor (por traumatismo, cirugía previa o moco denso), acumulándose secreción mucosa estéril.",
          "  - <strong>Clínica:</strong> Masa redondeada, lisa, móvil, <strong>COMPLETAMENTE INDOLORA y sin signos de eritema ni inflamación</strong>. Si es pequeño es un hallazgo casual; si es grande puede causar molestia mecánica al caminar o durante el coito.",
          "  - <strong>Manejo:</strong> Si es asintomático: <strong>observación</strong>. Si es sintomático o recurrente: <strong>Marsupialización</strong>.",
          "• <strong>Absceso de la Glándula de Bartolino (Bartonolitis Aguda):</strong>",
          "  - Sobreinfección bacteriana aguda del quiste o de la glándula por flora polimicrobiana mixta (aerobios y anaerobios como <em>E. coli</em>, <em>Bacteroides</em>, <em>Staphylococcus</em> y ocasionalmente gonococo o clamidia).",
          "  - <strong>Clínica:</strong> Dolor vulvar paroxístico intensísimo, pulsátil, que <strong>impide sentarse o deambular con normalidad</strong>. Al examen: <strong>masa tumefacta, muy eritematosa, caliente y exquisitamente sensible, con FLUCTUACIÓN CENTRAL</strong> evidente en el introito posterior.",
          "  - <strong>Tratamiento de Elección (Pregunta Fija EUNACOM):</strong>",
          "    • <strong>DRENAJE QUIRÚRGICO CON MARSUPIALIZACIÓN:</strong> Consiste en incidir el absceso sobre la mucosa vestibular, lavar la cavidad y <strong>eversar y suturar los bordes de la pared de la glándula a la mucosa vestibular</strong> con puntos reabsorbibles, creando un nuevo ostium permanente de drenaje para evitar que se cierre y recidive.",
          "    • <strong>Alternativa Moderna:</strong> Colocación de un <strong>Catéter de Word</strong> (sonda con balón que se insufla con 2-3 mL de suero y se deja 4 semanas para epitelización del tracto fistuloso).",
          "    • <em>Antibioticoterapia complementaria:</em> Indicada si existe celulitis circundante extensa, fiebre o en pacientes inmunodeprimidas (Cefadroxilo o Amoxicilina/Clavulánico oral). ¡La simple punción con aguja está contraindicada por tasa de recidiva > 80%!"
        ]
      },
      {
        "subhead": "2. Liquen Escleroso Vulvar y Dermatosis Vulvares",
        "paragraphs": [
          "• <strong>Liquen Escleroso Vulvar:</strong>",
          "  - Dermatosis inflamatoria crónica autoinmune que afecta predominantemente a mujeres postmenopáusicas.",
          "  - <strong>Clínica Cardinal:</strong> <strong>PRURITO VULVAR CRÓNICO INTRACTABLE</strong> de meses o años de evolución, disuria y dispareunia severa.",
          "  - <strong>Morfología Clásica:</strong> Placas atróficas blanquecinas nacaradas ('en papel de cigarrillo' o parcheado blanco) que rodean la vulva y el ano en un patrón característico <strong>'en figura de ocho' o 'en cerradura'</strong>. Con el tiempo produce borramiento anatómico de los labios menores, enterramiento del clítoris y estenosis progresiva del introito.",
          "  - <strong>Riesgo Oncológico Crítico (Pregunta EUNACOM):</strong> Las pacientes con Liquen Escleroso tienen un <strong>riesgo de un 3 a 5% de desarrollar Carcinoma Epidermoide de Vulva</strong> a lo largo de su vida. Ante cualquier área engrosada, queratósica, ulcerada o sobreelevada se debe realizar una <strong>Biopsia con sacabocados (Punch)</strong>.",
          "  - <strong>Tratamiento de Elección:</strong> <strong>CORTICOIDES TÓPICOS ULTRAPOTENTES: PROPIONATO DE CLOBETASOL AL 0.05% en ungüento</strong>, aplicado cada noche durante 4 semanas, luego espaciado a noches alternas por 4 semanas y mantenimiento 1-2 veces por semana. Revierte los cambios cutáneos y erradica el prurito."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico y Manejo Comparativo de las Principales Patologías Vulvares",
      "headers": [
        "Entidad",
        "Fisiopatología",
        "Manifestaciones Clínicas",
        "Tratamiento de Elección"
      ],
      "rows": [
        [
          "Quiste de Bartolino",
          "Oclusión mecánica aséptica del conducto",
          "Masa redondeada indolora a las 4 u 8 horas del reloj",
          "Observación (si asintomático) o Marsupialización"
        ],
        [
          "Absceso de Bartolino",
          "Sobreinfección bacteriana aguda purulenta",
          "Tumefacción fluctuante, eritematosa y exquisitamente dolorosa",
          "Drenaje quirúrgico con MARSUPIALIZACIÓN (o Catéter de Word)"
        ],
        [
          "Liquen Escleroso",
          "Dermatosis inflamatoria autoinmune atrófica",
          "Prurito crónico severo + placas blancas nacaradas en 'cerradura'",
          "Corticoides ultrapotentes tópicos: Clobetasol 0.05%"
        ],
        [
          "Cáncer de Vulva",
          "Carcinoma epidermoide (asociado a VPH o liquen)",
          "Úlcera vulvar crónica que no cicatriza o masa nodular sangrante",
          "Biopsia punch obligatoria -> Vulvectomía radical + ganglio centinela"
        ]
      ]
    },
    "vignette": "Mujer de 28 años consulta en el servicio de urgencia ginecológica por dolor vulvar unilateral agudo y de inicio brusco en los últimos 2 días, que ha alcanzado una intensidad insoportable que le impide caminar y sentarse. Al examen físico en posición ginecológica se aprecia en el labio mayor derecho, en posición horaria de las 7 a 8 horas, una masa redondeada de 4.5 cm de diámetro, marcadamente eritematosa, caliente, con aumento de volumen fluctuante en su cúspide y extraordinariamente dolorosa a la menor palpación superficial. No se observan úlceras exocervicales y el resto de la vulva es normal.",
    "explicacion": "La presencia de una masa unilateral fluctuante, eritematosa y exquisitamente dolorosa ubicada en el tercio posterior del labio mayor (posición horaria de las 7-8 horas) que causa impotencia funcional para la deambulación es diagnóstica de un Absceso de la Glándula de Bartolino agudo. El tratamiento médico-quirúrgico definitivo de primera línea recomendado por las guías del MINSAL es el drenaje quirúrgico con MARSUPIALIZACIÓN (o la inserción de un Catéter de Word bajo anestesia local), técnica que permite evacuar el contenido purulento y abocar los bordes de la cápsula glandular a la piel para crear una nueva fístula permanente de drenaje que previene la recidiva casi segura que ocurre tras una simple incisión y drenaje o punción aspirativa.",
    "keyPoints": [
      "Localización de glándulas de Bartolino: Tercio posterior de labios mayores (posiciones de las 4 y 8 horas).",
      "Quiste de Bartolino: Retención de moco aséptica e indolora. Observar si es asintomático.",
      "Absceso de Bartolino: Infección bacteriana con dolor agudo intenso, masa fluctuante y eritema.",
      "Tratamiento curativo de elección en Absceso de Bartolino: Drenaje quirúrgico con MARSUPIALIZACIÓN (o Catéter de Word).",
      "¡La simple punción con aguja o incisión aislada tiene más del 80% de recidiva y está desaconsejada!",
      "Liquen escleroso vulvar: Prurito crónico intratable + placas nacaradas en 'figura de ocho' o 'cerradura'.",
      "Tratamiento de elección en Liquen Escleroso: Propionato de Clobetasol al 0.05% en ungüento tópico.",
      "Riesgo oncológico del liquen escleroso: 3 a 5% de riesgo de Carcinoma Epidermoide de Vulva (requiere biopsia si lesión sospechosa)."
    ],
    "questions": [
      {
        "stem": "Una paciente de 31 años consulta por dolor vulvar progresivo e invalidante que le impide sentarse. Al examen ginecológico se aprecia una masa de 5 cm de diámetro en el labio mayor izquierdo, en posición de las 4 horas del reloj, caliente, fluctuante, muy eritematosa y de extrema sensibilidad al tacto. Se diagnostica un absceso de la glándula de Bartolino. ¿Cuál es el procedimiento quirúrgico de elección para resolver el cuadro y prevenir la recidiva?",
        "options": [
          {
            "id": "A",
            "text": "Punción evacuadora con aguja fina bajo anestesia local"
          },
          {
            "id": "B",
            "text": "Incisión, drenaje y marsupialización de la glándula (o colocación de catéter de Word)"
          },
          {
            "id": "C",
            "text": "Vulvectomía simple izquierda"
          },
          {
            "id": "D",
            "text": "Prescripción exclusiva de antibióticos orales sin drenar el absceso"
          },
          {
            "id": "E",
            "text": "Cauterización química con nitrato de plata de la mucosa vestibular"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La punción con aguja tiene una tasa de recidiva superior al 80-90% y está proscrita.\nB) Correcta. El tratamiento de elección para el absceso agudo de la glándula de Bartolino es la incisión y drenaje amplio seguido de MARSUPIALIZACIÓN (sutura de los bordes de la pared de la cápsula a la mucosa vestibular para formar un ostium permanente permeable), o alternativamente la colocación de un Catéter de Word. Estos procedimientos permiten la evacuación del pus y garantizan la formación de una nueva apertura fistulosa definitiva que previene la reobstrucción y recidiva.\nC) Incorrecta. La vulvectomía es una cirugía mutilante exclusiva de neoplasias malignas invasoras.\nD) Incorrecta. Los antibióticos no penetran adecuadamente una colección purulenta cerrada a tensión; el drenaje es imperativo.\nE) Incorrecta. El nitrato de plata quema la superficie sin resolver la cavidad abscedada profunda.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.010"
      },
      {
        "stem": "Una mujer de 64 años consulta por prurito vulvar intenso y constante de más de 8 meses de evolución que le interrumpe el sueño. Al examen físico se aprecia atrofia severa de los labios menores con enterramiento parcial del clítoris y placas blanquecinas nacaradas adelgazadas de aspecto en papel apergaminado distribuidas en la vulva y región perianal en 'figura de ocho', sin úlceras activas. ¿Cuál es el diagnóstico clínico y el fármaco tópico de primera línea de elección?",
        "options": [
          {
            "id": "A",
            "text": "Candidiasis vulvovaginal crónica; Clotrimazol en crema al 1%"
          },
          {
            "id": "B",
            "text": "Liquen Escleroso Vulvar; Propionato de Clobetasol al 0.05% en ungüento tópico"
          },
          {
            "id": "C",
            "text": "Condilomas acuminados gigantes; Imiquimod al 5% en crema"
          },
          {
            "id": "D",
            "text": "Herpes genital recurrente; Aciclovir tópico en crema"
          },
          {
            "id": "E",
            "text": "Psoriasis invertida; Ácido salicílico al 10%"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La candidiasis produce eritema inflamatorio agudo y leucorrea en requesón, no atrofia blanquecina esclerosante.\nB) Correcta. La combinación de prurito vulvar crónico intratable en una mujer postmenopáusica con placas atróficas blanquecinas apergaminadas en forma de cerradura o en ocho, con reabsorción de labios menores y encapuchamiento del clítoris, es la descripción patognomónica del Liquen Escleroso Vulvar. El tratamiento de primera línea respaldado por todas las guías dermatológicas y ginecológicas consiste en la aplicación tópica de Corticoides Ultrapotentes, siendo el ungüento de Propionato de Clobetasol al 0.05% el fármaco de elección para frenar la inflamación autoinmune y aliviar el prurito.\nC) Incorrecta. Los condilomas son vegetaciones verrugosas exofíticas por VPH.\nD) Incorrecta. El herpes causa vesículas dolorosas agrupadas que se ulceran.\nE) Incorrecta. La psoriasis vulvar se manifiesta como placas eritematosas brillantes no atróficas.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.010"
      }
    ]
  },
  {
    "id": "gin-11",
    "classId": "gin-11",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Infecciones Ginecológicas, Patología Vulvar & Climaterio",
    "topicLabel": "20.11",
    "title": "Enfermedad Pélvica Inflamatoria (EIP / PIP): Criterios de Hager, Clasificación de Monif y Esquemas Terapéuticos",
    "perfilCode": "3.02.1.011",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Urgencia Ginecológica Infecciosa de Notificación Obligatoria.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#54) · EUNACOM Julio 2023 (Q#30) · EUNACOM Diciembre 2021 (Q#24)",
    "frecuencia": "Máxima rentabilidad · Tríada de Hager (dolor hipogástrico, anexial y cervical), criterios de hospitalización y secuelas de infertilidad",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Enfermedad Inflamatoria Pélvica (EIP)",
    "diagramRows": [
      {
        "t": "Mujer Joven Sexualmente Activa con Dolor Pélvico Agudo en Hipogastrio",
        "s": "Evaluar Criterios Diagnósticos Clínicos de Hager (CDC / MINSAL)",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Criterios Clínicos de Hager",
        "al": "Presencia de los 3 Criterios Mayores Obligatorios",
        "ll": "Criterios Mayores OBLIGATORIOS (Los 3 presentes)",
        "left": {
          "t": "1) Dolor a la palpación abdominal inferior",
          "s": "2) Dolor a la movilización cervical (Signo de Frenkel +) + 3) Dolor a la palpación de los anexos en tacto bimanual",
          "type": "crit"
        },
        "rl": "Criterios Menores Auxiliares (≥ 1 apoya el diagnóstico)",
        "right": {
          "t": "Fiebre > 38.3°C · Leucorrea patológica",
          "s": "Leucocitosis > 10.500 · PCR o VSG elevada · Tinción de Gram o cultivo positivo para Gonococo o Chlamydia",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Criterios de Hospitalización Inmediata (Manejo EV)",
        "al": "¿Cumple Criterios de Hospitalización?",
        "ll": "SÍ: Absceso tubo-ovárico (ATO), embarazo, peritonitis, intolerancia oral o falta de respuesta en 72h",
        "left": {
          "t": "HOSPITALIZACIÓN OBLIGATORIA (Vía EV)",
          "s": "Ceftriaxona 1-2g EV/d + Doxiciclina 100 mg c/12h oral/EV + Metronidazol 500 mg c/12h EV (o Clindamicina + Gentamicina)",
          "type": "crit"
        },
        "rl": "NO: EIP leve a moderada (Monif I o II) estable sin masas ni signos peritoneales",
        "right": {
          "t": "Tratamiento Ambulatorio Escalonado",
          "s": "Ceftriaxona 500 mg IM (dosis única) + Doxiciclina 100 mg c/12h oral x 14d + Metronidazol 500 mg c/12h oral x 14d · Control 48-72h",
          "type": "acc"
        }
      }
    ],
    "contexto": "La Enfermedad Pélvica Inflamatoria (EIP o Proceso Inflamatorio Pélvico - PIP) comprende el espectro de infecciones del tracto genital superior femenino (endometritis, salpingitis, peritonitis pélvica y absceso tubo-ovárico). Ocurre por ascenso de microorganismos desde la vagina y cuello uterino hacia el endometrio y las trompas. Su etiología es clásicamente polimicrobiana, iniciada por Neisseria gonorrhoeae y Chlamydia trachomatis, sobreagregándose bacilos Gram negativos entéricos y anaerobios del tracto genital. Es una causa mayor de dolor pélvico crónico, embarazo ectópico futuro (el riesgo se multiplica por 6 a 10) e infertilidad tubárica irreversible (hasta un 20% tras el primer episodio y más del 50% tras tres episodios). En el EUNACOM se evalúan los Criterios de Hager, la clasificación de Monif y la estricta diferenciación entre tratamiento ambulatorio y hospitalizado.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, Etiología y Factores de Riesgo",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> Infección canalicular ascendente que progresa desde el canal endocervical hacia el endometrio (endometritis), trompas de Falopio (salpingitis aguda), ovarios (ooforitis / absceso tubo-ovárico) y peritoneo pélvico.",
          "• <strong>Etiología Polimicrobiana Mixta:</strong>",
          "  - <strong>Iniciadores Primarios (ITS):</strong> <strong>Neisseria gonorrhoeae</strong> (20-30%) y <strong>Chlamydia trachomatis</strong> (30-40%). Producen daño ciliar y necrosis del epitelio tubárico endotubárico.",
          "  - <strong>Microorganismos Secundarios Oportunistas:</strong> Anaerobios estrictos (<em>Bacteroides fragilis</em>, <em>Peptostreptococcus</em>), enterobacterias Gram negativas (<em>E. coli</em>) y <em>Streptococcus agalactiae</em>.",
          "  - <strong>Actinomyces israelii:</strong> En usuarias de DIU de larga duración (forma abscesos pélvicos en 'gránulos de azufre').",
          "• <strong>Factores de Riesgo Mayores:</strong> Múltiples parejas sexuales, no uso de métodos de barrera (preservativo), edad joven (< 25 años), antecedente de EIP previa e <strong>inserción reciente de DIU en las últimas 3 a 6 semanas</strong> (el DIU aumenta el riesgo de EIP solo durante el primer mes post-colocación por arrastre bacteriano; posteriormente no aumenta el riesgo de EIP)."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos de Hager y Clasificación de Monif",
        "paragraphs": [
          "• <strong>CRITERIOS DIAGNÓSTICOS DE HAGER (CDC / MINSAL):</strong>",
          "  - <strong>Criterios Mayores (MANDATORIOS, DEBEN ESTAR LOS TRES PRESENTES):</strong>",
          "    • <strong>1) Dolor a la palpación del abdomen inferior / hipogastrio</strong> (con o sin rebote).",
          "    • <strong>2) Dolor a la movilización del cuello uterino</strong> (Signo de Frenkel positivo).",
          "    • <strong>3) Dolor a la palpación anexial bimanual</strong> (unilateral o bilateral).",
          "  - <strong>Criterios Menores (Refuerzan el diagnóstico; al menos UNO presente):</strong>",
          "    • Temperatura axilar > 38.3°C.",
          "    • Leucorrea vaginal o secreción endocervical purulenta anormal.",
          "    • Proteína C Reactiva (PCR) o Velocidad de Sedimentación (VSG) elevadas.",
          "    • Leucocitosis > 10.500 /mm³ con desviación izquierda.",
          "    • Evidencia microbiológica de infección endocervical por <em>N. gonorrhoeae</em> o <em>C. trachomatis</em>.",
          "• <strong>CLASIFICACIÓN CLÍNICA DE MONIF:</strong>",
          "  - <strong>Estadio I (EIP Leve):</strong> Salpingitis aguda <strong>sin peritonitis</strong> ni masas pelvianas.",
          "  - <strong>Estadio II (EIP Moderada):</strong> Salpingitis aguda <strong>con peritonitis pélvica</strong> localizada (reacción peritoneal pélvica).",
          "  - <strong>Estadio III (EIP Severa):</strong> Salpingitis aguda con formación de <strong>Absceso Tubo-Ovárico (ATO)</strong> palpable o visualizado por ecografía.",
          "  - <strong>Estadio IV (EIP Crítica / Quirúrgica):</strong> <strong>Absceso Tubo-Ovárico ROTO</strong> con peritonitis generalizada y shock séptico."
        ]
      },
      {
        "subhead": "3. Criterios de Hospitalización y Esquemas Terapéuticos",
        "paragraphs": [
          "• <strong>Criterios Mandatorios de HOSPITALIZACIÓN OBLIGATORIA (Pregunta Fija EUNACOM):</strong>",
          "  - <strong>1) Sospecha o confirmación ecográfica de Absceso Tubo-Ovárico (ATO) (Monif III).</strong>",
          "  - <strong>2) Paciente Embarazada</strong> (la EIP en el embarazo conlleva altísima morbimortalidad materna y fetal).",
          "  - <strong>3) Emergencia quirúrgica que no puede descartarse</strong> (imposibilidad de descartar Apendicitis Aguda).",
          "  - <strong>4) Cuadro clínico severo</strong> (fiebre alta persistente, vómitos incoercibles, signos de peritonitis difusa o sepsis).",
          "  - <strong>5) Falta de respuesta clínica o empeoramiento tras 48 a 72 horas</strong> de tratamiento ambulatorio.",
          "  - <strong>6) Intolerancia a la vía oral o falta de adherencia</strong> previsible al tratamiento.",
          "• <strong>Esquema de Tratamiento AMBULATORIO (Monif I y II seleccionados):</strong>",
          "  - <strong>CEFTRIAXONA 500 mg intramuscular en dosis única</strong> (cubre gonococo).",
          "  - <strong>MÁS DOXICICLINA 100 mg cada 12 horas por vía oral durante 14 DÍAS COMPLETOS</strong> (cubre Chlamydia).",
          "  - <strong>MÁS METRONIDAZOL 500 mg cada 12 horas por vía oral durante 14 DÍAS COMPLETOS</strong> (cubre anaerobios pélvicos).",
          "  - <em>Control obligatorio en 48 a 72 horas</em> para evaluar respuesta clínica.",
          "• <strong>Esquema de Tratamiento HOSPITALIZADO ENDOVENOSO (Monif II, III y IV):</strong>",
          "  - <strong>Régimen A:</strong> <strong>Ceftriaxona 1 a 2 g EV al día + Doxiciclina 100 mg oral/EV c/12h + Metronidazol 500 mg EV c/12h</strong>.",
          "  - <strong>Régimen B:</strong> <strong>Clindamicina 900 mg EV c/8h + Gentamicina 5 mg/kg/día EV en dosis única</strong> (esquema clásico para anaerobios y bacilos Gram negativos ante ATO).",
          "  - Tras 24 a 48 horas afebril y en franca mejoría, se puede pasar a vía oral completando 14 días con Doxiciclina.",
          "• <strong>Manejo del Absceso Tubo-Ovárico (ATO):</strong> Se inicia tratamiento médico con antibióticos EV de amplio espectro durante 48 a 72 horas (el 70% responde favorablemente). Si no hay mejoría en 48-72h, el absceso mide > 8-10 cm o existe sospecha de <strong>ROTURA DE ATO (Monif IV): LAPAROTOMÍA / LAPAROSCOPÍA QUIRÚRGICA DE URGENCIA</strong> para lavado pélvico, drenaje y salpingooforectomía de rescate."
        ]
      }
    ],
    "table": {
      "title": "Criterios Diagnósticos de Hager y Manejo de la EIP según Estadio de Monif",
      "headers": [
        "Estadio Monif",
        "Definición Clínica y Hallazgos",
        "Lugar de Tratamiento",
        "Esquema Antibiótico Indicado"
      ],
      "rows": [
        [
          "Estadio I",
          "Salpingitis aguda sin pelviperitonitis ni masas",
          "Ambulatorio (con control en 72h)",
          "Ceftriaxona 500 mg IM + Doxiciclina 100 mg c/12h x 14d + Metronidazol x 14d"
        ],
        [
          "Estadio II",
          "Salpingitis aguda con pelviperitonitis localizada",
          "Ambulatorio estricto o Hospitalizado",
          "Ceftriaxona IM/EV + Doxiciclina oral + Metronidazol oral x 14 días"
        ],
        [
          "Estadio III",
          "Absceso Tubo-Ovárico (ATO) íntegro palpable / eco",
          "HOSPITALIZACIÓN OBLIGATORIA",
          "Ceftriaxona 2g EV + Doxiciclina + Metronidazol (o Clindamicina + Gentamicina EV)"
        ],
        [
          "Estadio IV",
          "Absceso Tubo-Ovárico ROTO con shock séptico",
          "HOSPITALIZACIÓN UCI / Pabellón",
          "LAPAROTOMÍA EXPLORADORA DE URGENCIA + Antibióticos EV triples de rescate"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios Mandatorios de Hospitalización Inmediata en EIP (CDC / MINSAL)",
      "headers": [
        "Criterio de Hospitalización",
        "Riesgo Fisiopatológico Mayor",
        "Conducta Terapéutica Inmediata"
      ],
      "rows": [
        [
          "Presencia de Absceso Tubo-Ovárico (ATO)",
          "Riesgo inminente de rotura con peritonitis purulenta y shock séptico",
          "Hospitalización en ARO/Cirugía para antibioterapia parenteral triple EV y monitorización estrecha."
        ],
        [
          "Embarazo Coexistente",
          "Pérdida gestacional, bacteriemia masiva materna y corioamnionitis séptica",
          "Hospitalización en UTI/UCI obstétrica con antibióticos EV de amplio espectro seguros."
        ],
        [
          "Imposibilidad de Descartar Apendicitis Aguda",
          "Perforación apendicular y peritonitis fecal difusa",
          "Hospitalización e interconsulta quirúrgica para laparoscopía exploradora diagnóstica."
        ],
        [
          "Falla Terapéutica Ambulatoria a las 72h",
          "Resistencia antimicrobiana, progresión a colección o falta de adherencia",
          "Ingreso hospitalario inmediato para cambio a antibióticos endovenosos y ecografía pélvica."
        ],
        [
          "Síndrome de Fitz-Hugh-Curtis (Perihepatitis)",
          "Dolor en hipocondrio derecho por adherencias en 'cuerdas de violín' entre cápsula hepática y peritoneo",
          "Mantener antibioticoterapia completa para Chlamydia/Gonococo (cura la inflamación capsular)."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Regímenes Antimicrobianos Oficiales en Enfermedad Pélvica Inflamatoria (MINSAL)",
      "headers": [
        "Modalidad",
        "Fármacos y Vía",
        "Duración Total",
        "Microorganismos Cubiertos"
      ],
      "rows": [
        [
          "Ambulatoria (Oral/IM)",
          "Ceftriaxona 500 mg IM única + Doxiciclina 100 mg c/12h VO + Metronidazol 500 mg c/12h VO",
          "14 días completos",
          "Gonococo (Ceftriaxona) + Chlamydia (Doxiciclina) + Anaerobios (Metronidazol)."
        ],
        [
          "Hospitalizada Régimen A",
          "Ceftriaxona 1-2 g EV c/24h + Doxiciclina 100 mg c/12h VO/EV + Metronidazol 500 mg c/12h EV",
          "14 días (pasar a oral tras 48h afebril)",
          "Cobertura polimicrobiana completa parenteral."
        ],
        [
          "Hospitalizada Régimen B",
          "Clindamicina 900 mg EV c/8h + Gentamicina 5 mg/kg/día EV dosis única diaria",
          "14 días (esquema clásico para ATO)",
          "Excelente contra anaerobios (Clindamicina) y enterobacterias Gram (-) (Gentamicina)."
        ],
        [
          "Tratamiento a la Pareja",
          "Ceftriaxona 500 mg IM + Doxiciclina 100 mg c/12h x 7 días",
          "7 días",
          "Tratamiento OBLIGATORIO a contactos sexuales de los últimos 60 días."
        ]
      ]
    },
    "vignette": "Mujer de 21 años, nulípara, usuaria de anticonceptivos orales, consulta en el servicio de urgencia por dolor abdominal bajo en hipogastrio de 4 días de evolución que se ha intensificado progresivamente, asociando sensación febril y flujo vaginal mucopurulento. Al examen físico: T° 38.4°C, PA 115/70 mmHg, FC 92 lpm. Abdomen doloroso a la palpación profunda en ambas fosas ilíacas, sin irritación peritoneal franca. Al examen ginecológico se observa secreción purulenta saliendo por el orificio cervical externo. Al tacto bimanual se constata dolor exquisito a la lateralización del cuello uterino (signo de Frenkel positivo) y gran sensibilidad a la palpación de ambos anexos, sin palparse masas anexiales ni colecciones. La ecografía transvaginal muestra trompas discretamente engrosadas con líquido libre escaso en el Douglas, sin abscesos tubo-ováricos. El test rápido de embarazo es negativo.",
    "explicacion": "La paciente cumple con todos los Criterios Mayores de Hager (dolor hipogástrico, dolor a la movilización cervical [Frenkel +] y dolor a la palpación anexial bilateral) asociados a criterios menores (fiebre > 38.3°C y leucorrea purulenta cervical), configurando el diagnóstico certero de Enfermedad Pélvica Inflamatoria (EIP) Estadio I de Monif (salpingitis aguda no complicada sin peritonitis difusa ni absceso tubo-ovárico). Al encontrarse hemodinámicamente estable, tolerando la vía oral, sin signos peritoneales ni masas ecográficas y habiendo descartado embarazo, la paciente es tributaria de manejo AMBULATORIO. El esquema estándar oficial del MINSAL consiste en: Ceftriaxona 500 mg intramuscular en dosis única (para cubrir Neisseria gonorrhoeae), asociada a Doxiciclina 100 mg cada 12 horas vía oral durante 14 días (para cubrir Chlamydia trachomatis) y Metronidazol 500 mg cada 12 horas vía oral durante 14 días (para cobertura de anaerobios), con control clínico obligatorio a las 48-72 horas y tratamiento empírico simultáneo a sus parejas sexuales.",
    "keyPoints": [
      "Etiología de EIP: Polimicrobiana mixta iniciada por Chlamydia trachomatis y Neisseria gonorrhoeae + anaerobios.",
      "Criterios mayores de Hager (los 3 obligatorios): Dolor hipogástrico + Dolor a movilización cervical + Dolor anexial.",
      "Secuelas mayores a largo plazo: Dolor pélvico crónico, infertilidad tubárica y embarazo ectópico.",
      "Inserción de DIU: Solo aumenta el riesgo de EIP durante las primeras 3 a 6 semanas post-inserción.",
      "Síndrome de Fitz-Hugh-Curtis: Perihepatitis con adherencias en 'cuerdas de violín' entre hígado y diafragma.",
      "Criterios de hospitalización: Absceso tubo-ovárico (Monif III), embarazo, peritonitis, duda con apendicitis o falla oral.",
      "Tratamiento ambulatorio: Ceftriaxona 500 mg IM (dosis única) + Doxiciclina 100 mg c/12h x 14d + Metronidazol x 14d.",
      "Tratamiento de Absceso Tubo-Ovárico roto (Monif IV): LAPAROTOMÍA / CIRUGÍA DE URGENCIA INMEDIATA.",
      "Tratamiento obligatorio a contactos sexuales de los últimos 60 días para evitar reinfecciones."
    ],
    "questions": [
      {
        "stem": "Una joven de 20 años acude por dolor en hipogastrio de 3 días de evolución y secreción vaginal amarillenta. Al examen ginecológico se constata dolor intenso al movilizar el cuello uterino hacia ambos lados (signo de Frenkel positivo) y a la palpación profunda de ambos anexos. La temperatura axilar es de 38.5°C. El test de embarazo en orina es negativo. No se palpan masas pélvicas y no hay signos de irritación peritoneal difusa. La paciente tolera adecuadamente los líquidos orales. ¿Cuál es el tratamiento antimicrobiano ambulatorio completo más adecuado según las guías clínicas del MINSAL?",
        "options": [
          {
            "id": "A",
            "text": "Ciprofloxacino oral 500 mg cada 12 horas por 7 días como monoterapia"
          },
          {
            "id": "B",
            "text": "Ceftriaxona 500 mg intramuscular en dosis única MÁS Doxiciclina 100 mg cada 12 horas oral por 14 días MÁS Metronidazol 500 mg cada 12 horas oral por 14 días"
          },
          {
            "id": "C",
            "text": "Amoxicilina con ácido clavulánico oral 875/125 mg cada 12 horas por 7 días"
          },
          {
            "id": "D",
            "text": "Metronidazol 2 g oral en dosis única exclusivamente"
          },
          {
            "id": "E",
            "text": "Gentamicina intramuscular 160 mg dosis única y reposo"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Las fluoroquinolonas tienen elevadísima resistencia para Neisseria gonorrhoeae en Chile y no se recomiendan como monoterapia.\nB) Correcta. La paciente presenta una Enfermedad Pélvica Inflamatoria (EIP) Estadio I de Monif diagnosticada por los Criterios de Hager (dolor hipogástrico, dolor cervical a la movilización, dolor anexial y fiebre). Al ser de manejo ambulatorio, el esquema oficial ministerial y de los CDC es la triple terapia durante 14 DÍAS: 1) Ceftriaxona 500 mg IM en dosis única (cobertura de gonococo); 2) Doxiciclina 100 mg cada 12 horas por vía oral por 14 días (cobertura de Chlamydia trachomatis); y 3) Metronidazol 500 mg cada 12 horas por vía oral por 14 días (cobertura indispensable para anaerobios pélvicos). Requiere control clínico en 48-72 horas.\nC) Incorrecta. No cubre adecuadamente Chlamydia ni alcanza niveles tubáricos óptimos.\nD) Incorrecta. No cubre gonococo ni clamidia.\nE) Incorrecta. No cubre clamidia y una dosis única es inútil para EIP.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.011"
      },
      {
        "stem": "¿En cuál de las siguientes situaciones clínicas una paciente con diagnóstico clínico de Enfermedad Pélvica Inflamatoria DEBE ser OBLIGATORIAMENTE HOSPITALIZADA para recibir tratamiento antibiótico parenteral por vía endovenosa?",
        "options": [
          {
            "id": "A",
            "text": "Paciente de 24 años con EIP leve (Monif I) y buena tolerancia oral"
          },
          {
            "id": "B",
            "text": "Presencia de un Absceso Tubo-Ovárico (ATO) evidenciado en la ecografía transvaginal"
          },
          {
            "id": "C",
            "text": "Paciente con antecedentes de un episodio de EIP hace dos años ya resuelto"
          },
          {
            "id": "D",
            "text": "Paciente con cultivo positivo para Ureaplasma urealyticum en cuello uterino"
          },
          {
            "id": "E",
            "text": "Paciente con pareja sexual que se niega a recibir tratamiento preventivo"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Monif I tolera vía oral y es de manejo ambulatorio.\nB) Correcta. La presencia de un Absceso Tubo-Ovárico (ATO) (Monif Estadio III) es un criterio absoluto e indiscutido de HOSPITALIZACIÓN OBLIGATORIA. El ATO conlleva un alto riesgo de rotura intraperitoneal catastrófica con sepsis grave y peritonitis fecal/purulenta, y requiere antibioticoterapia endovenosa continua de amplio espectro a dosis máximas (ej. Ceftriaxona + Doxiciclina + Metronidazol o Clindamicina + Gentamicina) y monitorización intrahospitalaria estricta para definir si responde o requiere drenaje quirúrgico.\nC) Incorrecta. El antecedente previo no obliga a hospitalizar si el episodio actual es leve.\nD) Incorrecta. Se trata ambulatoriamente.\nE) Incorrecta. Se debe insistir en el contacto, pero no es criterio médico de ingreso.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.011"
      },
      {
        "stem": "Una paciente de 25 años en tratamiento ambulatorio por una EIP consulta en la urgencia por persistencia del dolor pélvico al que se agrega dolor agudo en hipocondrio derecho que empeora con la inspiración profunda, semejante a una pleuresía. La ecografía hepática y biliar descarta colelitiasis y muestra líquido fino perihepático. En la laparoscopía se observan adherencias finas 'en cuerdas de violín' entre la cápsula de Glisson hepática y la pared abdominal anterior. ¿Cuál es el diagnóstico de esta complicación?",
        "options": [
          {
            "id": "A",
            "text": "Síndrome de Fitz-Hugh-Curtis (Perihepatitis por Chlamydia o Gonococo)"
          },
          {
            "id": "B",
            "text": "Hepatitis autoinmune tipo 2"
          },
          {
            "id": "C",
            "text": "Síndrome de Budd-Chiari agudo"
          },
          {
            "id": "D",
            "text": "Absceso hepático amebiano roto"
          },
          {
            "id": "E",
            "text": "Tromboflebitis séptica de la vena porta (Pileflebitis)"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El Síndrome de Fitz-Hugh-Curtis o Perihepatitis asociada a EIP es una complicación clásica provocada por la diseminación ascendente transperitoneal de Chlamydia trachomatis o Neisseria gonorrhoeae desde la pelvis a lo largo de las correderas parietocólicas hacia el espacio perihepático. Cursa con dolor agudo en hipocondrio derecho (que simula colecistitis o pleuritis) y formación característica de adherencias peritoneales translúcidas en 'cuerdas de violín' entre la cápsula hepática y el diafragma/pared anterior. El tratamiento consiste en completar el esquema antibiótico para EIP, el cual es altamente curativo.\nB) Incorrecta. No produce adherencias en cuerdas de violín.\nC) Incorrecta. Es la trombosis de suprahepáticas con hepatomegalia y ascitis masiva.\nD) Incorrecta. Lesión ocupante de espacio piógena hepática.\nE) Incorrecta. Infección supurativa con trombosis portal.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.011"
      },
      {
        "stem": "Una paciente hospitalizada hace 48 horas por un Absceso Tubo-Ovárico de 8 cm en tratamiento con Clindamicina más Gentamicina endovenosa presenta súbitamente dolor abdominal difuso hiperagudo de intensidad 10/10, palidez profusa, taquicardia de 130 lpm, presión arterial de 80/40 mmHg y abdomen difusamente en tabla con signos de Blumberg y Guéneau de Mussy generalizados. ¿Cuál es el diagnóstico y la conducta médica inmediata que salva la vida de la paciente?",
        "options": [
          {
            "id": "A",
            "text": "Apendicitis perforada; colonoscopía de urgencia"
          },
          {
            "id": "B",
            "text": "Rotura de Absceso Tubo-Ovárico (Monif IV) con shock séptico; traslado inmediato a pabellón para laparotomía exploradora de urgencia"
          },
          {
            "id": "C",
            "text": "Embolia pulmonar; inicio inmediato de anticoagulación con heparina"
          },
          {
            "id": "D",
            "text": "Evolución esperable del ATO; aumentar la dosis de gentamicina y esperar 24 horas"
          },
          {
            "id": "E",
            "text": "Hemorragia digestiva alta; endoscopía digestiva alta"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La colonoscopía está absolutamente contraindicada ante peritonitis perforada.\nB) Correcta. El deterioro clínico catastrófico repentino con dolor peritoneal difuso, contractura abdominal en tabla (vientre peritoneal) e inestabilidad hemodinámica severa (shock séptico/hipovolémico) en una paciente hospitalizada por un ATO representa una Rotura de Absceso Tubo-Ovárico (Estadio IV de Monif). Es una emergencia quirúrgica de extrema gravedad con altísima mortalidad materna. La conducta mandatoria es la resucitación hemodinámica con fluidos y traslado inmediato a pabellón para LAPAROTOMÍA EXPLORADORA DE URGENCIA con lavado profuso de la cavidad abdominal, desbridamiento y salpingooforectomía del anexo comprometido.\nC) Incorrecta. La heparina no trata la peritonitis purulenta.\nD) Incorrecta. Esperar ante un shock séptico por rotura de ATO conduce a la muerte de la paciente en pocas horas.\nE) Incorrecta. El cuadro es estrictamente peritoneal pélvico.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.011"
      }
    ]
  },
  {
    "id": "gin-12",
    "classId": "gin-12",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Infecciones Ginecológicas, Patología Vulvar & Climaterio",
    "topicLabel": "20.12",
    "title": "Climaterio, Menopausia y Terapia de Reemplazo Hormonal (TRH): Ventana de Oportunidad y Riesgos",
    "perfilCode": "3.02.1.012",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Manejo Integral de la Mujer Climatérica en Atención Primaria de Salud (MINSAL).",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#53) · EUNACOM Julio 2023 (Q#31) · EUNACOM Diciembre 2022 (Q#22)",
    "frecuencia": "Alta rentabilidad · Ventana de oportunidad (< 60 años / < 10 años menopausia), estrógenos solos vs combinados y contraindicaciones de TRH",
    "svg": null,
    "algoTitle": "Algoritmo de Indicación de Terapia de Reemplazo Hormonal (TRH)",
    "diagramRows": [
      {
        "t": "Mujer en Perimenopausia o Postmenopausia con Síntomas Climatéricos Severos (Bochornos, Atrofia)",
        "s": "Evaluar Criterios de Elegibilidad: 'Ventana de Oportunidad' (< 60 años o < 10 años de menopausia)",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Descarte de Contraindicaciones Absolutas de TRH",
        "al": "¿Tiene Contraindicaciones Formales?",
        "ll": "SÍ: Cáncer de mama, cáncer endometrial, TVP/TEP activo, hepatopatía severa o SUA no filiado",
        "left": {
          "t": "¡CONTRAINDICADA LA TRH SISTÉMICA!",
          "s": "Opciones no hormonales para bochornos: ISRS/IRSN (Paroxetina, Venlafaxina) o Gabapentina · Para atrofia: Estriol tópico",
          "type": "crit"
        },
        "rl": "NO: Paciente sana dentro de la ventana de oportunidad",
        "right": {
          "t": "Selección del Esquema según Presencia de Útero",
          "s": "Evaluar antecedente quirúrgico de histerectomía previa",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Presencia del Útero en la Paciente",
        "al": "Con Útero vs Sin Útero (Histerectomizada)",
        "ll": "Paciente CON ÚTERO (Útero Intacto)",
        "left": {
          "t": "ESTRÓGENOS + PROGESTÁGENO OBLIGATORIO",
          "s": "El progestágeno es INDISPENSABLE para proteger al endometrio contra hiperplasia y cáncer",
          "type": "acc"
        },
        "rl": "Paciente SIN ÚTERO (Histerectomizada)",
        "right": {
          "t": "ESTRÓGENOS SOLOS (Monoterapia)",
          "s": "No requiere progestágeno (evita el riesgo mamario añadido del progestágeno) · Estrógenos orales o transdérmicos",
          "type": "acc"
        }
      }
    ],
    "contexto": "La Menopausia se define como el cese permanente de la menstruación diagnosticado retrospectivamente tras doce (12) meses consecutivos de amenorrea no explicada por otra causa médica, marcando el fin de la etapa reproductiva ovárica (edad promedio en Chile: 48 a 50 años). El Climaterio abarca el período de transición perimenopáusico y postmenopáusico caracterizado por el hipoestrogenismo progresivo (elevación de FSH > 30-40 UI/L por pérdida de retroalimentación de inhibina y estradiol). La Terapia de Reemplazo Hormonal (TRH) es el tratamiento más eficaz para los síntomas vasomotores (bochornos) y el síndrome genitourinario de la menopausia. Para el EUNACOM es crucial dominar la 'ventana de oportunidad' de inicio seguro, la regla de protección endometrial con progestágenos si tiene útero, y las contraindicaciones absolutas de la TRH.",
    "contentSections": [
      {
        "subhead": "1. Fisiología, Diagnóstico y Manifestaciones del Hipoestrogenismo",
        "paragraphs": [
          "• <strong>Diagnóstico:</strong> El diagnóstico de menopausia es <strong>EMINENTEMENTE CLÍNICO</strong>: cese de las menstruaciones durante <strong>12 meses consecutivos</strong> en una mujer mayor de 45 años sin otra causa evidente. <em>¡En mujeres en edad habitual NO se requieren exámenes de laboratorio hormonales de rutina para confirmar la menopausia!</em> (Solo se solicita <strong>FSH y Estradiol</strong> en mujeres menores de 40-45 años para diagnosticar Insuficiencia Ovárica Prematura: <strong>FSH > 30-40 UI/L con Estradiol < 20 pg/mL</strong>).",
          "• <strong>Manifestaciones Clínicas según Fases del Climaterio:</strong>",
          "  - <strong>Corto Plazo:</strong> <strong>Síntomas vasomotores (Bochornos / Sofocos y sudoración nocturna profusa en 75% de las mujeres)</strong>, insomnio, irritabilidad y labilidad emocional.",
          "  - <strong>Mediano Plazo (Síndrome Genitourinario de la Menopausia):</strong> Atrofia vulvovaginal por pérdida del epitelio escamoso estratificado dependiente de estrógenos (sequedad vaginal, prurito, dispareunia severa), polaquiuria, disuria e infecciones urinarias bajas recurrentes por elevación del pH vaginal (> 5.0) al desaparecer los lactobacilos.",
          "  - <strong>Largo Plazo:</strong> <strong>Osteoporosis</strong> (acelerada pérdida ósea trabecular) con alto riesgo de fracturas por fragilidad (cadera, vértebras, Colles) y <strong>aumento del riesgo cardiovascular</strong> (cambio adverso en el perfil lipídico con aumento de LDL y caída de HDL)."
        ]
      },
      {
        "subhead": "2. Terapia de Reemplazo Hormonal (TRH): Ventana de Oportunidad",
        "paragraphs": [
          "• <strong>Indicaciones Formales de TRH Sistémica:</strong> Síntomas vasomotores moderados a severos (bochornos que alteran la calidad de vida), prevención de osteoporosis en mujeres de alto riesgo con síntomas asociados e hipoestrogenismo antes de los 50 años (Insuficiencia Ovárica Prematura).",
          "• <strong>El Concepto de la 'Ventana de Oportunidad' (Concepto Central EUNACOM):</strong>",
          "  - La TRH tiene una relación beneficio/riesgo claramente favorable cuando se inicia en mujeres <strong>menores de 60 años de edad o dentro de los primeros 10 años desde la menopausia</strong>.",
          "  - Iniciar TRH en esta ventana otorga beneficio cardiovascular y óseo con mínimo riesgo.",
          "  - Por el contrario, iniciar TRH en mujeres <strong>mayores de 60 años o con más de 10 años postmenopáusicas</strong> está desaconsejado, ya que aumenta el riesgo de eventos coronarios, ACV y demencia.",
          "• <strong>Regla de Prescripción según Presencia de Útero (Pregunta Garantizada):</strong>",
          "  - <strong>Mujer CON ÚTERO INTACTO:</strong> <strong>OBLIGATORIO: ESTRÓGENOS + PROGESTÁGENO</strong>. Los estrógenos solos inducen hiperplasia y cáncer de endometrio. El progestágeno (ej. Progesterona micronizada oral 100-200 mg/d o Didrogesterona) se agrega exclusivamente para <strong>proteger el endometrio</strong>.",
          "  - <strong>Mujer HISTERECTOMIZADA (Sin Útero):</strong> <strong>ESTRÓGENOS SOLOS (Monoterapia)</strong>. No requiere progestágeno; de hecho, evitar el progestágeno elimina el leve aumento de riesgo de cáncer de mama asociado a la terapia combinada."
        ]
      },
      {
        "subhead": "3. Contraindicaciones Absolutas de la TRH y Alternativas No Hormonales",
        "paragraphs": [
          "• <strong>CONTRAINDICACIONES ABSOLUTAS FORMALES DE LA TRH SISTÉMICA:</strong>",
          "  - <strong>1. Antecedente personal o sospecha de Cáncer de Mama.</strong>",
          "  - <strong>2. Antecedente de neoplasia maligna estrógeno-dependiente (Cáncer de Endometrio).</strong>",
          "  - <strong>3. Tromboembolismo Venoso Activo o Antecedente Personal de TVP / TEP.</strong>",
          "  - <strong>4. Enfermedad Coronaria o Cardiovascular Activa (Infarto previo, ACV o AIT).</strong>",
          "  - <strong>5. Sangrado Uterino Anormal no diagnosticado / no filiado.</strong>",
          "  - <strong>6. Enfermedad Hepática Aguda Severa o Insuficiencia Hepática descompensada.</strong>",
          "• <strong>Alternativas para Pacientes con Contraindicación de TRH:</strong>",
          "  - Para síntomas vasomotores (bochornos): <strong>Inhibidores de recaptura de serotonina/noradrenalina (ISRS/IRSN)</strong> como <strong>Paroxetina</strong> (dosis baja 7.5 mg/d), <strong>Venlafaxina</strong> (37.5 a 75 mg/d) o <strong>Gabapentina</strong>. <em>¡Precaución!: La Paroxetina está contraindicada en pacientes tratadas con Tamoxifeno (inhibe el citocromo CYP2D6 bloqueando la activación del tamoxifeno; en ellas se usa Venlafaxina)</em>.",
          "  - Para Atrofia Vulvovaginal exclusiva: <strong>Estrógenos Tópicos Locales a bajas dosis (Estriol en crema o promestrieno vaginal)</strong>. Tienen mínima absorción sistémica y son seguros incluso en muchas pacientes con cáncer previo tras pase del oncólogo."
        ]
      }
    ],
    "table": {
      "title": "Esquemas de Terapia de Reemplazo Hormonal según Anatomía Uterina",
      "headers": [
        "Situación Anatómica",
        "Composición de la TRH",
        "Vía Preferente",
        "Razón Fisiopatológica"
      ],
      "rows": [
        [
          "Mujer con Útero Intacto",
          "Estrógenos + Progestágeno (Continuo o Cíclico)",
          "Oral o Transdérmica (parche/gel)",
          "El progestágeno es OBLIGATORIO para prevenir hiperplasia y cáncer de endometrio."
        ],
        [
          "Mujer Histerectomizada",
          "Estrógenos SOLOS (Monoterapia estrogénica)",
          "Oral o Transdérmica",
          "No hay endometrio que proteger; evita el riesgo mamario añadido del progestágeno."
        ],
        [
          "Atrofia Vaginal Exclusiva",
          "Estrógenos Tópicos Locales (Estriol / Promestrieno)",
          "Crema u óvulos vaginales",
          "Alivio directo urogenital sin efectos secundarios sistémicos ni necesidad de progestágeno."
        ],
        [
          "Riesgo Trombótico Leve / HTA",
          "Estrógenos Transdérmicos (Gel o Parche)",
          "Vía Transdérmica estricta",
          "Evita el primer paso hepático, no estimula factores de coagulación ni triglicéridos."
        ]
      ]
    },
    "vignette": "Paciente de 52 años, menopáusica desde hace 2 años, sin antecedentes médicos relevantes, acude a control ginecológico por bochornos intensos y súbitos unas 10 a 12 veces al día que se acompañan de sudoración nocturna profusa e insomnio, deteriorando severamente su rendimiento laboral y calidad de vida. No tiene antecedentes de trombosis, su mamografía bilateral realizada hace 2 meses es normal (BI-RADS 1) y no tiene factores de riesgo cardiovascular. La paciente fue sometida a una histerectomía total con conservación de ambos anexos hace 5 años por una miomatosis sintomática. Solicita tratamiento para aliviar sus sofocos.",
    "explicacion": "La paciente se encuentra en la 'ventana de oportunidad' ideal para el inicio de Terapia de Reemplazo Hormonal (52 años, menos de 10 años desde la menopausia, sin contraindicaciones cardiovasculares ni mamarias) para tratar sus síntomas vasomotores moderados a severos. Dado que la paciente tiene el antecedente quirúrgico de HISTERECTOMÍA TOTAL (no tiene útero), el esquema terapéutico de elección es la MONOTERAPIA CON ESTRÓGENOS SOLOS (vía oral o transdérmica, como estradiol 1-2 mg/día o gel transdérmico). En mujeres histerectomizadas está formalmente desaconsejado y proscrito añadir un progestágeno a la terapia, debido a que no existe endometrio que proteger de hiperplasia, y la evidencia científica ha demostrado de forma concluyente que es el componente progestágeno el principal responsable del incremento en el riesgo de cáncer de mama.",
    "keyPoints": [
      "Diagnóstico de menopausia: Clínico (12 meses continuos de amenorrea en > 45 años). No requiere exámenes de rutina.",
      "Ventana de oportunidad de TRH: Iniciar en < 60 años o < 10 años postmenopausia para máximo beneficio y mínimo riesgo.",
      "Mujer CON útero: OBLIGATORIO asociar Progestágeno al Estrógeno para proteger contra Cáncer de Endometrio.",
      "Mujer SIN útero (histerectomizada): Estrógenos SOLOS en monoterapia (¡NO agregar progestágeno!).",
      "Atrofia urogenital aislada: Estrógenos tópicos locales (Estriol vaginal) de mínima absorción sistémica.",
      "Contraindicaciones absolutas de TRH: Cáncer de mama, cáncer de endometrio, TVP/TEP, cardiopatía isquémica, SUA no filiado.",
      "Alternativa no hormonal a los bochornos en pacientes con cáncer de mama: Venlafaxina o Paroxetina (evitar paroxetina con tamoxifeno).",
      "Vía transdérmica de estrógenos: De elección en mujeres con hipertensión, hipertrigliceridemia o sobrepeso por evitar paso hepático."
    ],
    "questions": [
      {
        "stem": "Una paciente de 51 años con antecedentes de histerectomía total por miomatosis hace 3 años consulta por bochornos intensos e insomnio que afectan severamente su calidad de vida tras cesar sus síntomas ováricos hace 1 año. No tiene antecedentes oncológicos personales ni familiares, y su mamografía reciente es normal (BI-RADS 2). ¿Cuál es el esquema de Terapia de Reemplazo Hormonal de elección para esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Estrógenos solos en monoterapia (vía oral o transdérmica)"
          },
          {
            "id": "B",
            "text": "Estrógenos combinados con progesterona micronizada continua"
          },
          {
            "id": "C",
            "text": "Progestágenos solos a altas dosis"
          },
          {
            "id": "D",
            "text": "Moduladores selectivos de receptores androgénicos exclusivamente"
          },
          {
            "id": "E",
            "text": "Está formalmente contraindicada cualquier hormona por el antecedente de histerectomía"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. En una mujer menopáusica sintomática histerectomizada (sin útero) que no tiene contraindicaciones, el tratamiento hormonal de elección indiscutido es la Monoterapia con Estrógenos Solos (ej. 17-beta estradiol oral o transdérmico). Dado que la paciente no tiene útero, no existe riesgo de hiperplasia ni adenocarcinoma de endometrio, por lo que NO se debe prescribir progestágeno; la adición innecesaria de progestágenos aumenta el riesgo de cáncer de mama y eventos adversos sin aportar ningún beneficio clínico adicional.\nB) Incorrecta. El progestágeno solo se añade para proteger el endometrio en pacientes con útero intacto.\nC) Incorrecta. Los progestágenos solos son inferiores para sofocos y no aportan protección ósea ni vascular.\nD) Incorrecta. No es la indicación para síntomas vasomotores del climaterio.\nE) Incorrecta. La histerectomía previa no es contraindicación; al contrario, simplifica la TRH a estrógenos puros.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.012"
      },
      {
        "stem": "¿Cuál de las siguientes condiciones clínicas constituye una CONTRAINDICACIÓN FORMAL ABSOLUTA para la prescripción de Terapia de Reemplazo Hormonal sistémica en una mujer con síntomas climatéricos?",
        "options": [
          {
            "id": "A",
            "text": "Antecedente personal tratado de Cáncer de Mama ductal infiltrante"
          },
          {
            "id": "B",
            "text": "Osteoporosis densitométrica con T-score de -2.8"
          },
          {
            "id": "C",
            "text": "Atrofia vulvovaginal sintomática con dispareunia"
          },
          {
            "id": "D",
            "text": "Edad menor a 45 años con menopausia quirúrgica"
          },
          {
            "id": "E",
            "text": "Sofocos moderados en una mujer de 50 años sana"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El antecedente personal o la sospecha de Cáncer de Mama es una CONTRAINDICACIÓN FORMAL ABSOLUTA para cualquier formulación de Terapia de Reemplazo Hormonal sistémica, debido a que los estrógenos estimulan la proliferación de células mamarias residuales y aumentan drásticamente el riesgo de recidiva o progresión tumoral. En estas pacientes, los bochornos deben manejarse con alternativas no hormonales (como venlafaxina, paroxetina o gabapentina).\nB) Incorrecta. La osteoporosis es una indicación aprobada de TRH en mujeres dentro de la ventana de oportunidad.\nC) Incorrecta. La atrofia es una indicación directa de tratamiento.\nD) Incorrecta. La menopausia precoz es una indicación prioritaria de TRH para proteger corazón y hueso hasta los 50 años.\nE) Incorrecta. Es la indicación clásica y óptima de TRH.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.012"
      }
    ]
  }
];

const bloque3Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowGinecologia(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque3Classes };
