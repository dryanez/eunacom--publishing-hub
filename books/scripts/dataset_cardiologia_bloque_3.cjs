/**
 * Tomo 01 · Cardiología — Bloque 3: Insuficiencia Cardíaca y Enfermedades del Miocardio
 * Formato estándar (igual que dataset_endocrinologia_bloque_*.cjs). Migrado desde los 25 temas antiguos
 * (books/scripts/_old_cardio/) por _old_cardio/migrar_a_38_temas.cjs; `_origen` indica de dónde viene cada sección.
 * `_estado`: 'migrado' (contenido antiguo sin reescribir) · 'borrador' (tema nuevo, contenido mínimo) · 'estandar' (reescrito al estándar).
 */
const bloque3 = [
  {
    "id": "cardio-16",
    "classId": "cardio-16",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Insuficiencia Cardíaca y Enfermedades del Miocardio",
    "topicLabel": "3.1",
    "title": "Insuficiencia Cardíaca Crónica: Diagnóstico, Fenotipos y Péptidos Natriuréticos",
    "perfilCode": "1.01.1.018, 1.01.4.006",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "No es problema GES (sí lo son la hipertensión arterial y el infarto agudo del miocardio)",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Criterios de Framingham, fenotipos según FEVI, péptidos natriuréticos como prueba de descarte, ecocardiograma como examen de elección y clase funcional NYHA",
    "svg": null,
    "algoTitle": "Algoritmo diagnóstico de la insuficiencia cardíaca y fenotipos según FEVI",
    "diagram": {
      "title": "Algoritmo Diagnóstico de la Insuficiencia Cardíaca Crónica y Fenotipos por Fracción de Eyección",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar31\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar31)}\n  </style>\n  <rect class=\"b\" x=\"100\" y=\"8\" width=\"420\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de IC: disnea, ortopnea, fatiga, edema</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Framingham: 2 criterios mayores, o 1 mayor + 2 menores</text>\n  <path class=\"ln\" d=\"M310,48 V66\"/>\n  <rect class=\"dec\" x=\"90\" y=\"66\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"80\" text-anchor=\"middle\" font-weight=\"700\">ECG + radiografía de tórax + péptido natriurético (BNP / NT-proBNP)</text>\n  <text class=\"sub\" x=\"310\" y=\"92\" text-anchor=\"middle\">Ambulatorio: BNP &lt; 35 o NT-proBNP &lt; 125 pg/mL descarta · en urgencia: &lt; 100 / &lt; 300</text>\n  <text class=\"lbl\" x=\"20\" y=\"124\">Normal → buscar otra causa de la disnea (EPOC, anemia, obesidad, TEP)</text>\n  <text class=\"lbl\" x=\"318\" y=\"124\">Elevado o alta sospecha</text>\n  <path class=\"ln\" d=\"M310,106 V132\"/>\n  <rect class=\"acc\" x=\"70\" y=\"132\" width=\"480\" height=\"40\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"146\" text-anchor=\"middle\" font-weight=\"700\">Ecocardiograma Doppler transtorácico</text>\n  <text class=\"accS\" x=\"310\" y=\"158\" text-anchor=\"middle\">FEVI · volúmenes · hipertrofia · válvulas · función diastólica · presión pulmonar</text>\n  <path class=\"ln\" d=\"M310,172 V184 H108 V200\"/>\n  <path class=\"ln\" d=\"M310,172 V200\"/>\n  <path class=\"ln\" d=\"M310,172 V184 H512 V200\"/>\n  <rect class=\"b\" x=\"15\" y=\"200\" width=\"185\" height=\"56\" rx=\"3\"/>\n  <text class=\"t\" x=\"107.5\" y=\"214\" text-anchor=\"middle\" font-weight=\"700\">IC-FEr · FEVI ≤ 40%</text>\n  <text class=\"sub\" x=\"107.5\" y=\"226\" text-anchor=\"middle\">Disfunción sistólica, ventrículo dilatado</text>\n  <text class=\"sub\" x=\"107.5\" y=\"236\" text-anchor=\"middle\">Tema 3.2: cuádruple terapia</text>\n  <rect class=\"b\" x=\"217\" y=\"200\" width=\"185\" height=\"56\" rx=\"3\"/>\n  <text class=\"t\" x=\"309.5\" y=\"214\" text-anchor=\"middle\" font-weight=\"700\">IC-FEmr · FEVI 41-49%</text>\n  <text class=\"sub\" x=\"309.5\" y=\"226\" text-anchor=\"middle\">Zona intermedia</text>\n  <text class=\"sub\" x=\"309.5\" y=\"236\" text-anchor=\"middle\">Tratar como FEr si baja de 40%</text>\n  <rect class=\"b\" x=\"419\" y=\"200\" width=\"185\" height=\"56\" rx=\"3\"/>\n  <text class=\"t\" x=\"511.5\" y=\"214\" text-anchor=\"middle\" font-weight=\"700\">IC-FEp · FEVI ≥ 50%</text>\n  <text class=\"sub\" x=\"511.5\" y=\"226\" text-anchor=\"middle\">Rigidez, hipertrofia, aurícula grande</text>\n  <text class=\"sub\" x=\"511.5\" y=\"236\" text-anchor=\"middle\">Con BNP alto y alteración estructural</text>\n  <path class=\"ln\" d=\"M310,256 V276\"/>\n  <rect class=\"dec\" x=\"60\" y=\"276\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"290\" text-anchor=\"middle\" font-weight=\"700\">Etiología + estadio ACC/AHA (A-D) + clase funcional NYHA (I-IV)</text>\n  <text class=\"sub\" x=\"310\" y=\"302\" text-anchor=\"middle\">Isquémica · hipertensiva · valvular · miocardiopatía · arritmia · tóxica · tiroides</text>\n  <path class=\"ln\" d=\"M310,320 V336\"/>\n  <rect class=\"warn\" x=\"60\" y=\"336\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"310\" y=\"350\" text-anchor=\"middle\" font-weight=\"700\">Buscar el descompensante antes de culpar a la bomba</text>\n  <text class=\"sub warnT\" x=\"310\" y=\"362\" text-anchor=\"middle\">Fibrilación auricular · isquemia · infección · anemia · AINE · exceso de sal · abandono de fármacos</text>\n</svg>"
    },
    "contexto": "La insuficiencia cardíaca es la vía final común de casi todas las cardiopatías y una de las razones más frecuentes de consulta por disnea en el policlínico, en el SAPU y en la hospitalización del adulto mayor. El médico general es quien la sospecha en un paciente hipertenso, diabético o con un infarto antiguo que «se ahoga más que antes», quien pide los exámenes correctos y quien decide qué tratamiento parte ese mismo día. El EUNACOM pregunta lo mismo en cada versión: reconocer los criterios clínicos, saber que el ecocardiograma es el examen de elección, clasificar el fenotipo por la fracción de eyección y no confundir una insuficiencia cardíaca con sus imitadores.",
    "contentSections": [
      {
        "subhead": "1. Concepto, Causas y Fisiopatología: Por Qué el Corazón «Falla»",
        "paragraphs": [
          "La <strong>insuficiencia cardíaca (IC)</strong> es un síndrome clínico: síntomas típicos (disnea, ortopnea, fatiga, intolerancia al ejercicio) con o sin signos de congestión (ingurgitación yugular, crépitos pulmonares, edema de extremidades inferiores), causado por una <strong>alteración estructural o funcional del corazón</strong> que reduce el gasto cardíaco o eleva las presiones de llenado, en reposo o durante el esfuerzo. No es un diagnóstico final: siempre hay una <strong>causa de base</strong> y, con frecuencia, un <strong>factor descompensante</strong>, y ambos hay que buscarlos.",
          "El corazón que pierde fuerza o se vuelve rígido activa defensas que al principio ayudan y después dañan. Cae el volumen que sale, el riñón retiene sodio y agua, y se activan el <strong>sistema renina-angiotensina-aldosterona</strong> y el <strong>sistema simpático</strong>: aumentan la precarga y la poscarga, la frecuencia y el consumo de oxígeno, y el ventrículo se <strong>remodela</strong> (se dilata, se hipertrofia, se fibrosa). Ese círculo vicioso explica por qué los fármacos que más alargan la vida en IC con fracción reducida bloquean precisamente esos sistemas (Tema 3.2) y por qué la congestión mejora con diuréticos pero la sobrevida no.",
          "<strong>Causas más frecuentes:</strong> 1) <strong>cardiopatía isquémica</strong> (infarto previo), la principal causa de IC con fracción reducida; 2) <strong>hipertensión arterial</strong> de larga data (hipertrofia y rigidez, base de la IC con fracción preservada); 3) <strong>valvulopatías</strong> (estenosis aórtica, insuficiencia mitral o aórtica, estenosis mitral); 4) <strong>miocardiopatías</strong> (dilatada, hipertrófica, restrictiva; Temas 3.5 y 3.6) y la <strong>enfermedad de Chagas</strong> en zonas endémicas; 5) <strong>arritmias</strong> sostenidas (fibrilación auricular rápida, taquicardiomiopatía); 6) <strong>tóxicos y fármacos</strong>: alcohol, cocaína, antraciclinas; 7) <strong>hipo e hipertiroidismo</strong>, anemia grave y estados de gasto alto.",
          "<strong>Factores descompensantes</strong> en un paciente ya conocido: mala adherencia a los fármacos o a la restricción de sal, fibrilación auricular con respuesta rápida, isquemia, infección (sobre todo respiratoria), anemia, crisis hipertensiva, embolia pulmonar y fármacos que retienen sodio o deprimen la contractilidad (<strong>AINE, corticoides, nifedipino y otras dihidropiridinas de acción corta, verapamilo y diltiazem, antiarrítmicos clase I, pioglitazona</strong>). Dos preguntas reales del banco piden «qué fármaco debe suspenderse» en un insuficiente cardíaco que recibe nifedipino."
        ]
      },
      {
        "subhead": "2. Fenotipos Según la Fracción de Eyección (FEVI), Estadios y Clase Funcional",
        "paragraphs": [
          "La <strong>fracción de eyección del ventrículo izquierdo (FEVI)</strong> es el porcentaje de la sangre del ventrículo que sale en cada sístole (normal 55-70%). Con ella se clasifica a todo paciente con IC, porque de ella depende el tratamiento:",
          "• <strong>IC con fracción de eyección reducida (IC-FEr): FEVI ≤ 40%.</strong> Falla la contracción: ventrículo dilatado, remodelado excéntrico, causa principal isquémica o miocardiopatía dilatada. Es el único fenotipo con tratamiento que reduce la mortalidad de forma comprobada (Tema 3.2).",
          "• <strong>IC con fracción de eyección levemente reducida (IC-FEmr): FEVI 41-49%.</strong> Zona intermedia; muchos pacientes vienen de una FEr que mejoró o van hacia ella.",
          "• <strong>IC con fracción de eyección preservada (IC-FEp): FEVI ≥ 50%</strong>, con péptidos natriuréticos elevados y alteración estructural (aurícula izquierda grande, hipertrofia ventricular) o de la relajación (disfunción diastólica). El ventrículo es rígido y de tamaño normal; es típica de la <strong>mujer añosa, hipertensa, diabética, obesa o con fibrilación auricular</strong> y hoy representa la mitad de los casos.",
          "<strong>Una IC con FEVI normal existe:</strong> el paciente que se ahoga, con edema y con un ecocardiograma de fracción 60% puede tener una IC. Lo que no se puede es llamarla «descartada» solo porque la eyección es normal; lo definen los síntomas, los péptidos natriuréticos y la alteración estructural.",
          "<strong>Clase funcional de la NYHA</strong> (síntomas actuales, cambia con el tratamiento): <strong>I</strong> sin limitación; <strong>II</strong> limitación leve (la actividad ordinaria, como subir cuestas o caminar rápido varias cuadras, produce disnea o fatiga); <strong>III</strong> limitación marcada (síntomas con esfuerzos mínimos, como vestirse o caminar una cuadra plana); <strong>IV</strong> síntomas en reposo. <strong>Estadios ACC/AHA</strong> (progresivos, no retroceden): <strong>A</strong> en riesgo (hipertensión, diabetes, cardiopatía coronaria) sin enfermedad estructural; <strong>B</strong> cardiopatía estructural sin síntomas (por ejemplo un infarto antiguo con FEVI baja); <strong>C</strong> estructural con síntomas actuales o previos; <strong>D</strong> IC refractaria que requiere terapias avanzadas (trasplante, asistencia ventricular, cuidados paliativos)."
        ]
      },
      {
        "subhead": "3. Diagnóstico Clínico: Síntomas, Signos y Criterios de Framingham",
        "paragraphs": [
          "La IC se sospecha en el policlínico ante <strong>disnea de esfuerzo progresiva, ortopnea (necesidad de varias almohadas), disnea paroxística nocturna, fatiga, tos nocturna y edema de las piernas</strong> que aumenta en la tarde. El examen busca la congestión: <strong>ingurgitación yugular</strong> a 45°, <strong>reflujo hepatoyugular</strong>, <strong>crépitos</strong> bibasales, <strong>tercer ruido (R3, galope)</strong>, choque de la punta desplazado hacia lateral y abajo (cardiomegalia), hepatomegalia congestiva, ascitis y edema con fóvea. La ausencia de crépitos no la descarta: en la IC crónica el sistema linfático pulmonar drena el líquido y la congestión se ve en el cuello y en las piernas.",
          "Los <strong>criterios de Framingham</strong> permiten el diagnóstico clínico cuando se cumplen <strong>2 criterios mayores, o 1 mayor y 2 menores</strong> (Tabla 3.1). Los <strong>mayores</strong> son: disnea paroxística nocturna u ortopnea, ingurgitación yugular, crépitos, cardiomegalia (índice cardiotorácico > 0,50 en la radiografía), edema agudo de pulmón, tercer ruido, presión venosa central elevada, reflujo hepatoyugular positivo y pérdida de peso mayor de 4,5 kg en 5 días con el tratamiento diurético. Los <strong>menores</strong>: edema bilateral de tobillos, tos nocturna, disnea de esfuerzos habituales, hepatomegalia, derrame pleural, capacidad vital disminuida a un tercio y taquicardia sobre 120 latidos por minuto.",
          "<strong>Qué la imita y cómo separarla:</strong> la <strong>EPOC</strong> y el <strong>cor pulmonale</strong> dan edema y yugulares ingurgitadas con un ventrículo izquierdo normal y un ventrículo derecho dilatado (la pregunta de diciembre 2025 sobre un EPOC con ecocardiograma de FEVI 58% y presión pulmonar de 68 mmHg es cor pulmonale, no IC izquierda); la <strong>cirrosis</strong>, el <strong>síndrome nefrótico</strong> y la <strong>insuficiencia venosa</strong> dan edema sin elevación de las yugulares; la <strong>anemia</strong> y la <strong>obesidad</strong> dan disnea sin congestión. Para decidir se piden los exámenes de la sección siguiente."
        ]
      },
      {
        "subhead": "4. Exámenes Iniciales: ECG, Radiografía, Laboratorio y Péptidos Natriuréticos",
        "paragraphs": [
          "A todo paciente con sospecha de IC se le piden <strong>electrocardiograma</strong> (un ECG completamente normal hace poco probable una IC con fracción reducida; busca infarto antiguo con ondas Q, hipertrofia ventricular, fibrilación auricular, bloqueo de rama izquierda, que además marca el tipo de dispositivo del Tema 3.2), <strong>radiografía de tórax</strong> (cardiomegalia, cefalización de la trama vascular, líneas B de Kerley, derrame pleural bilateral y, en la IC aguda, edema alveolar) y <strong>exámenes de laboratorio</strong>: hemograma, creatinina y electrolitos plasmáticos (necesarios antes de iniciar IECA, ARM o diuréticos), glicemia, perfil lipídico, perfil hepático, orina completa, <strong>TSH</strong> y, en la IC con FEr, ferritina y saturación de transferrina (el déficit de hierro es frecuente y tratable con hierro endovenoso).",
          "<strong>Péptidos natriuréticos (BNP y NT-proBNP).</strong> Los cardiomiocitos los liberan cuando la pared se estira por sobrecarga de presión o volumen. Su principal valor es de <strong>descarte</strong> por su alto valor predictivo negativo: <strong>en el paciente ambulatorio, BNP < 35 pg/mL o NT-proBNP < 125 pg/mL hacen muy improbable una IC; en urgencia, BNP < 100 pg/mL o NT-proBNP < 300 pg/mL</strong>. Si están sobre esos valores, no confirman: solo obligan a pedir el ecocardiograma. Se elevan también con la edad, la insuficiencia renal, la <strong>fibrilación auricular</strong>, el TEP y la hipertensión pulmonar; y bajan con la <strong>obesidad</strong> (un obeso con IC puede tener un valor «falsamente bajo»). El sacubitrilo (Tema 3.2) eleva el BNP pero no el NT-proBNP, por lo que en un paciente con ese fármaco se prefiere NT-proBNP.",
          "La <strong>troponina</strong> se pide si hay sospecha de isquemia o descompensación, y tiene valor pronóstico. Una IC recién diagnosticada exige además buscar su causa: <strong>coronariografía o prueba de isquemia</strong> si hay dolor torácico o factores de riesgo coronario, <strong>resonancia magnética cardíaca</strong> ante sospecha de miocarditis o miocardiopatía infiltrativa (Tema 3.6), y serología de Chagas en quien vive o vivió en una zona endémica."
        ]
      },
      {
        "subhead": "5. Ecocardiografía Doppler: el Examen de Elección y Cómo Leer su Informe",
        "paragraphs": [
          "El <strong>ecocardiograma transtorácico con Doppler</strong> es el <strong>examen de elección para confirmar la IC</strong>, medir la FEVI y definir la causa estructural. La pregunta de julio de 2013 lo pide con un paciente con infarto previo, ortopnea y crépitos: «examen de elección para iniciar el estudio diagnóstico», y la respuesta es el ecocardiograma, no el ECG, la coronariografía ni el test de esfuerzo. Es inocuo, rápido y se hace en el policlínico o por derivación.",
          "El médico general debe saber <strong>emplear el informe</strong>. Revisar siempre: 1) <strong>FEVI</strong> (≤ 40, 41-49, ≥ 50%); 2) <strong>diámetros y volúmenes</strong> del ventrículo izquierdo (dilatación en la miocardiopatía dilatada); 3) <strong>grosor</strong> de las paredes (hipertrofia en la hipertensión, en la miocardiopatía hipertrófica o infiltración si el grosor es mayor y el voltaje del ECG es bajo); 4) <strong>alteraciones segmentarias</strong> de la motilidad (infarto previo); 5) <strong>válvulas</strong> (estenosis aórtica o mitral, insuficiencia mitral, que puede ser causa o consecuencia); 6) <strong>función diastólica</strong> y tamaño de la aurícula izquierda (clave en la IC-FEp); 7) <strong>presión sistólica de la arteria pulmonar</strong> y función del ventrículo derecho; 8) <strong>derrame pericárdico</strong> y trombos.",
          "Se repite el ecocardiograma cuando cambia la situación clínica y a los 3 meses de tratamiento óptimo para decidir el <strong>desfibrilador</strong> (FEVI ≤ 35%; Tema 3.2); no se repite «de rutina» en el paciente estable. Un <strong>ecocardiograma de estrés</strong> o una resonancia se piden para buscar isquemia o viabilidad, y un <strong>BCRI</strong> hace inútil la prueba de esfuerzo convencional."
        ]
      },
      {
        "subhead": "6. Conducta Inicial en el Policlínico, Educación y Seguimiento",
        "paragraphs": [
          "Una IC recién diagnosticada se <strong>deriva al cardiólogo</strong> para estudiar su causa y optimizar el tratamiento, pero el médico general inicia ese mismo día lo que corresponde: 1) <strong>diurético de asa</strong> (furosemida 20-40 mg al día) si hay congestión, ajustado al <strong>peso seco</strong>; 2) tratamiento de la causa y de los factores de riesgo (hipertensión, diabetes, dislipidemia, fibrilación auricular); 3) inicio de los fármacos que prolongan la vida si la FEVI es ≤ 40% (Tema 3.2); 4) suspensión de los fármacos que empeoran la IC (AINE, nifedipino, verapamilo, diltiazem, pioglitazona).",
          "<strong>Educación del paciente</strong>, parte del tratamiento: pesarse todos los días en ayunas y consultar si sube más de 2 kg en 3 días; restricción moderada de sal (evitar alimentos procesados); restricción de líquidos solo en la IC avanzada con hiponatremia; actividad física regular y programa de rehabilitación cardíaca; abstinencia de alcohol y tabaco; <strong>vacunas contra influenza y neumococo</strong>; reconocimiento de los signos de alarma. En los controles se vigilan peso, presión, frecuencia, creatinina y potasio.",
          "<strong>Deriva a urgencia</strong> al paciente con disnea de reposo, hipoxemia, hipotensión, síncope, dolor torácico, arritmia mal tolerada o congestión que no responde al tratamiento oral (Tema 3.3). El pronóstico depende de la causa y del tratamiento: una IC con fracción reducida tratada con los cuatro pilares reduce de forma importante hospitalizaciones y mortalidad."
        ]
      }
    ],
    "table": {
      "title": "Criterios Diagnósticos de Framingham para Insuficiencia Cardíaca (2 Mayores, o 1 Mayor + 2 Menores)",
      "headers": [
        "Criterios mayores",
        "Criterios menores"
      ],
      "rows": [
        [
          "Disnea paroxística nocturna u ortopnea",
          "Edema bilateral de tobillos o piernas"
        ],
        [
          "Ingurgitación yugular a 45°",
          "Tos nocturna"
        ],
        [
          "Crépitos pulmonares",
          "Disnea de esfuerzos habituales"
        ],
        [
          "Cardiomegalia (índice cardiotorácico > 0,50)",
          "Hepatomegalia"
        ],
        [
          "Edema agudo de pulmón",
          "Derrame pleural"
        ],
        [
          "Tercer ruido (galope por R3)",
          "Capacidad vital disminuida a un tercio"
        ],
        [
          "Reflujo hepatoyugular positivo; presión venosa central elevada",
          "Taquicardia (frecuencia > 120 lpm)"
        ],
        [
          "Pérdida de peso > 4,5 kg en 5 días con diuréticos",
          "—"
        ]
      ]
    },
    "vignette": "Mujer de 72 años, hipertensa de larga data y diabética, consulta por disnea progresiva de 3 meses, que ahora aparece al caminar dentro de su casa, y por ortopnea: duerme con 3 almohadas. PA 145/88 mmHg, FC 88 lpm. Presenta ingurgitación yugular a 45° con reflujo hepatoyugular positivo, crépitos bibasales y edema con fóvea hasta la mitad de las piernas. Su ECG muestra signos de hipertrofia ventricular izquierda y la radiografía, cardiomegalia leve con redistribución vascular.",
    "explicacion": "La paciente cumple los criterios de Framingham para IC (cuatro mayores: ortopnea, ingurgitación yugular, crépitos y reflujo hepatoyugular; y un menor: edema de las piernas) y está en clase funcional NYHA III. La conducta es: furosemida 40 mg al día para descongestionar, ecocardiograma Doppler transtorácico para medir la FEVI y definir el fenotipo (en una hipertensa añosa con hipertrofia, lo esperable es una IC-FEp), exámenes de laboratorio (creatinina, electrolitos, hemograma, TSH, glicemia, NT-proBNP), control estricto de la presión arterial y derivación al cardiólogo; si la FEVI resultara ≤ 40% se agregan los fármacos del Tema 3.2.",
    "keyPoints": [
      "Framingham: 2 criterios mayores, o 1 mayor y 2 menores; el diagnóstico es clínico y se confirma con ecocardiograma.",
      "FEVI ≤ 40% = IC-FEr; 41-49% = IC-FEmr; ≥ 50% con BNP alto y alteración estructural o diastólica = IC-FEp (mujer añosa, hipertensa, diabética, obesa).",
      "Péptidos natriuréticos: valor de descarte (ambulatorio BNP < 35 o NT-proBNP < 125; urgencia < 100 o < 300); suben con FA y falla renal, bajan con obesidad.",
      "El ecocardiograma Doppler es el examen de elección ante una IC sospechada: mide FEVI, grosor, válvulas, función diastólica y presión pulmonar.",
      "NYHA describe los síntomas de hoy (I a IV) y ACC/AHA el estadio evolutivo (A a D); la FEVI define el tratamiento.",
      "Toda IC tiene una causa de base (isquémica, hipertensiva, valvular, miocardiopatía, Chagas, tóxica, tiroidea) y a menudo un descompensante: búscalos.",
      "Suspende lo que empeora la IC: nifedipino y otras dihidropiridinas, verapamilo, diltiazem, AINE, pioglitazona.",
      "En el edema con yugulares ingurgitadas y ventrículo izquierdo normal piensa en cor pulmonale; sin ingurgitación yugular, en cirrosis, nefrosis o insuficiencia venosa."
    ],
    "questions": [
      {
        "stem": "Paciente de 67 años, con antecedentes de infarto agudo al miocardio hace 6 meses tratado con stent, hipertensión arterial tratada con enalapril e hidroclorotiazida, y diabetes mellitus tratada con insulina horaria, consulta por cuadro de dos meses de disnea de medianos esfuerzos, asociado a ortopnea y edema de extremidades inferiores que aumenta en las tardes. Al examen cardiopulmonar destaca ritmo regular en dos tiempos sin soplos y murmullo pulmonar presente con crepitaciones bibasales. ¿Cuál de los siguientes es el examen de elección para iniciar el estudio diagnóstico?",
        "options": [
          {
            "id": "A",
            "text": "Electrocardiograma"
          },
          {
            "id": "B",
            "text": "Coronariografía"
          },
          {
            "id": "C",
            "text": "Test de esfuerzo"
          },
          {
            "id": "D",
            "text": "Radiografía de torax"
          },
          {
            "id": "E",
            "text": "Ecocardiograma"
          }
        ],
        "correcta": "E",
        "explicacion": "Es una insuficiencia cardíaca (ortopnea, edema, crépitos bibasales) en un paciente con infarto previo. El examen de elección para iniciar el estudio es el ecocardiograma Doppler: mide la fracción de eyección, el tamaño y el grosor del ventrículo, las válvulas y la presión pulmonar. El ECG y la radiografía se piden, pero no definen el fenotipo; la coronariografía y el test de esfuerzo buscan la causa isquémica después.",
        "recTag": "EUNACOM Julio 2013 · Pregunta 53"
      },
      {
        "stem": "Hombre de 68 años con hipertensión arterial de 20 años de evolución consulta por disnea de esfuerzos progresiva y ortopnea de 2 semanas. Al examen físico destaca ingurgitación yugular, ritmo de galope con tercer ruido en el ápex y crépitos basales bilaterales. ¿Cuál es el diagnóstico clínico más probable según los criterios de Framingham?",
        "options": [
          {
            "id": "A",
            "text": "Insuficiencia cardíaca congestiva descompensada"
          },
          {
            "id": "B",
            "text": "Crisis de asma bronquial del adulto"
          },
          {
            "id": "C",
            "text": "Tromboembolismo pulmonar crónico"
          },
          {
            "id": "D",
            "text": "Neumonía bacteriana multilobar"
          },
          {
            "id": "E",
            "text": "Estenosis traqueal extrínseca"
          }
        ],
        "correcta": "A",
        "explicacion": "Cumple cuatro criterios mayores de Framingham (ortopnea, ingurgitación yugular, galope por tercer ruido y crépitos bilaterales): el diagnóstico clínico de insuficiencia cardíaca no necesita más criterios. El ecocardiograma viene después para medir la FEVI.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "En un paciente de 75 años que consulta en el servicio de urgencia por disnea de inicio reciente, ¿cuál de los siguientes exámenes de laboratorio tiene el mayor valor predictivo negativo para descartar un origen cardiogénico?",
        "options": [
          {
            "id": "A",
            "text": "Péptido natriurético tipo B (BNP o NT-proBNP)"
          },
          {
            "id": "B",
            "text": "Troponina ultrasensible en muestra única"
          },
          {
            "id": "C",
            "text": "Dímero D plasmático"
          },
          {
            "id": "D",
            "text": "Gases arteriales basales"
          },
          {
            "id": "E",
            "text": "Proteína C reactiva ultrasensible"
          }
        ],
        "correcta": "A",
        "explicacion": "Un BNP < 100 pg/mL o un NT-proBNP < 300 pg/mL en urgencia (o < 35 y < 125 en el paciente ambulatorio) hace muy improbable la insuficiencia cardíaca como causa de la disnea. Si están elevados no confirman: se pide el ecocardiograma. El dímero D descarta TEP en riesgo bajo, no una IC.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "3.1§0 · 3.1§1 · 3.1§2 · 3.1§3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-17",
    "classId": "cardio-17",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Insuficiencia Cardíaca y Enfermedades del Miocardio",
    "topicLabel": "3.2",
    "title": "Insuficiencia Cardíaca Crónica: Tratamiento con los Cuatro Pilares (GDMT) y Dispositivos",
    "perfilCode": "1.01.1.018",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "No es problema GES",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Los fármacos que prolongan la vida (IECA/ARA II/ARNI, betabloqueador, espironolactona, iSGLT2), lo que se debe suspender (nifedipino, AINE), el papel del diurético y las indicaciones de DAI y resincronizador",
    "svg": null,
    "algoTitle": "Algoritmo de tratamiento de la IC con fracción reducida: cuatro pilares y dispositivos",
    "diagram": {
      "title": "Algoritmo de Tratamiento de la Insuficiencia Cardíaca con Fracción Reducida (Cuatro Pilares y Dispositivos)",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar32\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar32)}\n  </style>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">IC con fracción reducida (FEVI ≤ 40%) estable o recién estabilizada</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Congestión: primero diurético de asa · sin shock ni hipotensión sintomática</text>\n  <path class=\"ln\" d=\"M310,48 V58 H82 V70\"/>\n  <path class=\"ln\" d=\"M310,48 V58 H237 V70\"/>\n  <path class=\"ln\" d=\"M310,48 V58 H392 V70\"/>\n  <path class=\"ln\" d=\"M310,48 V58 H547 V70\"/>\n  <rect class=\"acc\" x=\"10\" y=\"70\" width=\"145\" height=\"70\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"82.5\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Pilar 1</text>\n  <text class=\"accS\" x=\"82.5\" y=\"96\" text-anchor=\"middle\">ARNI (sacubitrilo/valsartán)</text>\n  <text class=\"accS\" x=\"82.5\" y=\"106\" text-anchor=\"middle\">o IECA / ARA II</text>\n  <text class=\"accS\" x=\"82.5\" y=\"116\" text-anchor=\"middle\">IECA → ARNI: 36 h de lavado</text>\n  <rect class=\"acc\" x=\"165\" y=\"70\" width=\"145\" height=\"70\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"237.5\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Pilar 2</text>\n  <text class=\"accS\" x=\"237.5\" y=\"96\" text-anchor=\"middle\">Betabloqueador con evidencia</text>\n  <text class=\"accS\" x=\"237.5\" y=\"106\" text-anchor=\"middle\">bisoprolol · carvedilol</text>\n  <text class=\"accS\" x=\"237.5\" y=\"116\" text-anchor=\"middle\">metoprolol succinato</text>\n  <rect class=\"acc\" x=\"320\" y=\"70\" width=\"145\" height=\"70\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"392.5\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Pilar 3</text>\n  <text class=\"accS\" x=\"392.5\" y=\"96\" text-anchor=\"middle\">Espironolactona o eplerenona</text>\n  <text class=\"accS\" x=\"392.5\" y=\"106\" text-anchor=\"middle\">K &lt; 5,0 · VFG &gt; 30</text>\n  <text class=\"accS\" x=\"392.5\" y=\"116\" text-anchor=\"middle\">Control de K y creatinina</text>\n  <rect class=\"acc\" x=\"475\" y=\"70\" width=\"135\" height=\"70\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"542.5\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Pilar 4</text>\n  <text class=\"accS\" x=\"542.5\" y=\"96\" text-anchor=\"middle\">iSGLT2</text>\n  <text class=\"accS\" x=\"542.5\" y=\"106\" text-anchor=\"middle\">dapagliflozina o</text>\n  <text class=\"accS\" x=\"542.5\" y=\"116\" text-anchor=\"middle\">empagliflozina 10 mg</text>\n  <path class=\"ln\" d=\"M82,140 V160 H310\"/>\n  <path class=\"ln\" d=\"M237,140 V160 H310\"/>\n  <path class=\"ln\" d=\"M392,140 V160 H310\"/>\n  <path class=\"ln\" d=\"M542,140 V160 H310\"/>\n  <path class=\"ln\" d=\"M310,160 V172\"/>\n  <rect class=\"b\" x=\"60\" y=\"172\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"186\" text-anchor=\"middle\" font-weight=\"700\">Iniciar los cuatro en pocas semanas; titular cada 1-2 semanas a la dosis meta</text>\n  <text class=\"sub\" x=\"310\" y=\"198\" text-anchor=\"middle\">Controlar PA, FC, peso, creatinina y potasio · diurético de asa solo para la congestión</text>\n  <path class=\"ln\" d=\"M310,216 V234\"/>\n  <rect class=\"dec\" x=\"60\" y=\"234\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"248\" text-anchor=\"middle\" font-weight=\"700\">A los 3 meses con tratamiento óptimo: ¿sigue sintomático y con FEVI ≤ 35%?</text>\n  <text class=\"sub\" x=\"310\" y=\"260\" text-anchor=\"middle\">Reevaluar clase NYHA, ritmo, ancho del QRS y ecocardiograma</text>\n  <text class=\"lbl\" x=\"20\" y=\"296\">No → continuar la terapia médica y controlar</text>\n  <text class=\"lbl\" x=\"318\" y=\"296\">Sí → terapias adicionales</text>\n  <path class=\"ln\" d=\"M310,278 V306 H108 V322\"/>\n  <path class=\"ln\" d=\"M310,278 V322\"/>\n  <path class=\"ln\" d=\"M310,278 V306 H512 V322\"/>\n  <rect class=\"warn\" x=\"15\" y=\"322\" width=\"185\" height=\"64\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"107.5\" y=\"336\" text-anchor=\"middle\" font-weight=\"700\">DAI</text>\n  <text class=\"sub warnT\" x=\"107.5\" y=\"348\" text-anchor=\"middle\">Prevención primaria de muerte súbita</text>\n  <text class=\"sub warnT\" x=\"107.5\" y=\"358\" text-anchor=\"middle\">FEVI ≤ 35%, NYHA II-III</text>\n  <text class=\"sub warnT\" x=\"107.5\" y=\"368\" text-anchor=\"middle\">expectativa de vida &gt; 1 año</text>\n  <rect class=\"acc\" x=\"217\" y=\"322\" width=\"185\" height=\"64\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"309.5\" y=\"336\" text-anchor=\"middle\" font-weight=\"700\">Resincronizador (TRC)</text>\n  <text class=\"accS\" x=\"309.5\" y=\"348\" text-anchor=\"middle\">Ritmo sinusal, FEVI ≤ 35%</text>\n  <text class=\"accS\" x=\"309.5\" y=\"358\" text-anchor=\"middle\">BCRI con QRS ≥ 150 ms</text>\n  <text class=\"accS\" x=\"309.5\" y=\"368\" text-anchor=\"middle\">(130-149 ms: considerar)</text>\n  <rect class=\"b\" x=\"419\" y=\"322\" width=\"185\" height=\"64\" rx=\"3\"/>\n  <text class=\"t\" x=\"511.5\" y=\"336\" text-anchor=\"middle\" font-weight=\"700\">Fármacos adicionales</text>\n  <text class=\"sub\" x=\"511.5\" y=\"348\" text-anchor=\"middle\">Ivabradina: sinusal, FC ≥ 70</text>\n  <text class=\"sub\" x=\"511.5\" y=\"358\" text-anchor=\"middle\">Hidralazina + isosorbide</text>\n  <text class=\"sub\" x=\"511.5\" y=\"368\" text-anchor=\"middle\">Hierro EV si hay déficit</text>\n  <path class=\"ln\" d=\"M310,386 V404\"/>\n  <rect class=\"warn\" x=\"60\" y=\"404\" width=\"500\" height=\"50\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"310\" y=\"418\" text-anchor=\"middle\" font-weight=\"700\">Evitar: AINE, nifedipino, verapamilo, diltiazem, pioglitazona, antiarrítmicos clase I</text>\n  <text class=\"sub warnT\" x=\"310\" y=\"430\" text-anchor=\"middle\">Los diuréticos de asa alivian los síntomas, pero no reducen la mortalidad</text>\n</svg>"
    },
    "contexto": "La insuficiencia cardíaca con fracción reducida es una de las pocas enfermedades crónicas en que los fármacos correctos cambian de verdad la sobrevida, y también una de las que más se trata mal: el paciente llega con furosemida y un solo fármaco, sin betabloqueador ni espironolactona. En el EUNACOM, todos los años, hay una pregunta del tipo «¿qué fármaco agregaría?» o «¿cuál debe suspenderse?», y la respuesta sale siempre de la misma lógica: bloquear la neurohormona, no solo sacar agua. Saber qué mejora la sobrevida, qué solo alivia síntomas y qué empeora la enfermedad te permite resolver esas preguntas y tratar bien a tus pacientes del policlínico.",
    "contentSections": [
      {
        "subhead": "1. Principio del Tratamiento: Bloquear la Neurohormona, no Solo Eliminar Agua",
        "paragraphs": [
          "En la IC con fracción reducida (FEVI ≤ 40%) el corazón activa el sistema renina-angiotensina-aldosterona y el sistema simpático para sostener la presión; al principio compensan, pero con los meses producen fibrosis, dilatación y arritmias (remodelado). El tratamiento moderno consiste en <strong>bloquear esos sistemas</strong>. Los fármacos que lo hacen y <strong>reducen la mortalidad y las hospitalizaciones</strong> son cuatro «pilares» (<em>terapia médica óptima guiada por las guías, GDMT</em>): 1) <strong>ARNI</strong> (sacubitrilo/valsartán), o en su defecto <strong>IECA o ARA II</strong>; 2) <strong>betabloqueador</strong> con evidencia; 3) <strong>antagonista del receptor de mineralocorticoides (espironolactona o eplerenona)</strong>; 4) <strong>inhibidor del cotransportador sodio-glucosa 2 (iSGLT2)</strong>.",
          "<strong>Qué se enseña y qué se pregunta:</strong> las preguntas reales del banco (2017 a 2025) tratan sobre el tronco clásico: IECA o ARA II + betabloqueador + espironolactona. El ARNI y los iSGLT2 son los pilares nuevos de las guías vigentes (ESC y AHA); aunque lleguen más tarde a las preguntas, un médico actual debe prescribirlos. En una pregunta que ofrezca solo fármacos clásicos, la respuesta correcta sigue siendo la que completa el trío (por ejemplo «agregar espironolactona» a un paciente con enalapril y carvedilol).",
          "El beneficio es máximo cuando los cuatro se <strong>inician precozmente, en dosis bajas y se titulan</strong> hasta la dosis meta o la máxima tolerada, sin esperar a «optimizar uno antes de agregar el otro». Cada pilar reduce la mortalidad de forma independiente y el efecto se suma. Los <strong>diuréticos de asa</strong> y la digoxina no están en la lista porque no reducen la mortalidad."
        ]
      },
      {
        "subhead": "2. Pilar 1: ARNI, IECA o ARA II",
        "paragraphs": [
          "Los <strong>IECA</strong> (enalapril, captopril, lisinopril) fueron los primeros fármacos que mostraron mejor sobrevida en IC; reducen la poscarga, el remodelado y la activación de aldosterona. Dosis: <strong>enalapril 2,5 mg cada 12 horas hasta 10-20 mg cada 12 horas</strong>. Efectos adversos: <strong>tos seca</strong> (por bradicinina; si molesta se cambia a un ARA II), hipotensión, alza de creatinina, hiperkalemia y, raro, <strong>angioedema</strong>. Los <strong>ARA II</strong> (losartán, candesartán, valsartán) son la alternativa cuando hay tos; <strong>nunca se combinan IECA con ARA II</strong> en IC. Contraindicaciones: embarazo, estenosis bilateral de arterias renales, hiperkalemia grave, angioedema previo (con IECA).",
          "El <strong>ARNI (sacubitrilo/valsartán)</strong> combina un ARA II con un inhibidor de la neprilisina, la enzima que degrada los péptidos natriuréticos: se suman la vasodilatación y la natriuresis de esos péptidos con el bloqueo de la angiotensina. Superó al enalapril en reducir la muerte cardiovascular y las hospitalizaciones. Se inicia <strong>24/26 mg o 49/51 mg cada 12 horas</strong> y se titula hasta <strong>97/103 mg cada 12 horas</strong>. <strong>Regla de seguridad: suspender el IECA al menos 36 horas antes de la primera dosis</strong> (IECA y neprilisina inhibidos juntos acumulan bradicinina y causan <strong>angioedema</strong> grave); no se combina con IECA, y está contraindicado si hubo angioedema previo. El ARNI eleva el BNP (usa NT-proBNP para el seguimiento)."
        ]
      },
      {
        "subhead": "3. Pilar 2: Betabloqueadores con Evidencia",
        "paragraphs": [
          "Solo tres betabloqueadores reducen la mortalidad en la IC con fracción reducida: <strong>bisoprolol, carvedilol y metoprolol succinato</strong> (de liberación prolongada; el tartrato no). Atenolol y propranolol no tienen esa evidencia: la pregunta que ofrece «reemplazar el carvedilol por atenolol» está mal. Reducen la muerte súbita y la progresión, y mejoran la FEVI con los meses. <strong>Dosis:</strong> bisoprolol 1,25 mg al día hasta 10 mg; carvedilol 3,125 mg cada 12 horas hasta 25 mg cada 12 horas (50 mg si pesa más de 85 kg); metoprolol succinato 12,5-25 mg al día hasta 200 mg.",
          "<strong>Regla de inicio:</strong> se parte con dosis mínima en el paciente <strong>euvolémico y estable</strong> (sin congestión grave ni shock, FC > 60 lpm, sin bloqueo AV avanzado) y se <strong>duplica la dosis cada 2 semanas</strong> si la presión y la frecuencia lo permiten. Al comienzo puede empeorar la congestión leve: se sube el diurético y no se suspende el betabloqueador. En la <strong>IC aguda descompensada</strong> no se inicia, pero tampoco se suspende el que el paciente ya usaba, salvo shock o bradicardia grave. En el paciente con EPOC o asma el bisoprolol (cardioselectivo) se tolera mejor."
        ]
      },
      {
        "subhead": "4. Pilar 3: Antagonistas del Receptor de Mineralocorticoides (Espironolactona)",
        "paragraphs": [
          "La aldosterona produce retención de sodio, fibrosis miocárdica y pérdida de potasio y magnesio, y sus niveles siguen elevados aunque se use un IECA. La <strong>espironolactona</strong> (12,5-25 mg al día, hasta 50 mg) o la <strong>eplerenona</strong> (25 a 50 mg) <strong>reducen la mortalidad</strong> en pacientes con FEVI ≤ 35-40% sintomáticos (estudios RALES y EMPHASIS). Es la respuesta de las preguntas reales del banco: «¿Qué fármaco es más importante agregar?», «¿Cuál es el diurético que se debe agregar para mejorar el pronóstico?» (espironolactona, no hidroclorotiazida, indapamida, clortalidona ni torasemida).",
          "<strong>Seguridad:</strong> iniciar solo con <strong>potasio < 5,0 mEq/L y VFG > 30 mL/min</strong>; controlar <strong>potasio y creatinina a los 3 días, a la semana y luego mensualmente por 3 meses</strong>. Se reduce o suspende si el potasio supera 5,5 mEq/L o la creatinina sube de forma marcada. No se asocia con suplementos de potasio ni AINE. La <strong>ginecomastia</strong> se resuelve cambiando a eplerenona. En una paciente con IC y creatinina 1,8 mg/dL y potasio 3,8 mEq/L, la espironolactona se puede usar con control estricto."
        ]
      },
      {
        "subhead": "5. Pilar 4: Inhibidores de SGLT2 (Dapagliflozina y Empagliflozina)",
        "paragraphs": [
          "Los iSGLT2 nacieron como hipoglicemiantes, pero en IC reducen la <strong>hospitalización por IC y la muerte cardiovascular tanto en diabéticos como en no diabéticos</strong>, con un efecto diurético y nefroprotector. <strong>Dapagliflozina 10 mg o empagliflozina 10 mg una vez al día</strong>, sin titulación y con poco efecto en la presión arterial. Se pueden iniciar con VFG ≥ 20-25 mL/min y en IC-FEr, FEmr y FEp (en esta última son el único grupo con beneficio demostrado).",
          "<strong>Precauciones:</strong> infecciones genitales micóticas (educar en higiene), hipotensión o depleción de volumen en quien ya recibe dosis altas de diurético, y <strong>cetoacidosis euglicémica</strong> (rara; suspender 3 días antes de una cirugía o en ayuno prolongado y en enfermedad aguda con mala ingesta). En la diabetes tipo 1 no se usan."
        ]
      },
      {
        "subhead": "6. Diuréticos de Asa y Otros Fármacos: Qué Alivia, Qué Suma y Qué Daña",
        "paragraphs": [
          "La <strong>furosemida</strong> (20-40 mg al día, hasta 80-120 mg o más en la IC avanzada) alivia la congestión y los edemas y se ajusta al <strong>peso seco</strong>. <strong>No reduce la mortalidad ni modifica la historia natural</strong>; se usa la dosis mínima suficiente porque el exceso produce hipovolemia, falla renal e hipokalemia. En la falla renal moderada el diurético de elección es el de asa, no la tiazida. La <strong>hidroclorotiazida</strong> sola no mejora el pronóstico (varias preguntas del banco incluyen enalapril + hidroclorotiazida como esquema «incompleto»).",
          "<strong>Fármacos adicionales</strong> con indicación precisa: <strong>ivabradina</strong> (5 mg cada 12 horas hasta 7,5 mg) en ritmo sinusal con FC ≥ 70 lpm y FEVI ≤ 35% a pesar de dosis máxima tolerada de betabloqueador; <strong>hidralazina + dinitrato de isosorbide</strong> en quien no tolera IECA/ARA II/ARNI o en pacientes afroamericanos con clase III-IV; <strong>hierro endovenoso</strong> (carboximaltosa férrica) con déficit de hierro (ferritina < 100 ng/mL o 100-299 con saturación < 20%) para mejorar síntomas; <strong>digoxina</strong> para síntomas persistentes o control de frecuencia en FA, <strong>sin efecto en mortalidad</strong>, con riesgo en la falla renal (se elimina por el riñón y se acumula: la pregunta real de diciembre de 2017 la señala como la menos adecuada con creatinina de 1,8 mg/dL).",
          "<strong>Fármacos que empeoran la IC y deben evitarse</strong> (Tabla 3.2.B): las dihidropiridinas de acción corta como el <strong>nifedipino</strong> (las preguntas de agosto de 2021 y diciembre de 2019 preguntan «qué fármaco debe suspenderse» y la respuesta es el nifedipino), el <strong>verapamilo y el diltiazem</strong> (inotropos negativos), los <strong>AINE</strong> (retienen sodio y bloquean el IECA), la <strong>pioglitazona</strong> y los antiarrítmicos clase I. El <strong>amlodipino</strong> es neutro, pero produce edema de las piernas que se confunde con congestión (pregunta de agosto de 2021 de hipertensión)."
        ]
      },
      {
        "subhead": "7. Cómo Iniciar y Titular, y Qué Hacer con la IC con Fracción Preservada",
        "paragraphs": [
          "<strong>Secuencia práctica:</strong> 1) descongestionar con diurético hasta el peso seco; 2) iniciar un <strong>iSGLT2 y un betabloqueador</strong> a dosis bajas (casi no afectan la presión arterial con el primero y se toleran antes que los otros); 3) agregar <strong>IECA, ARA II o ARNI</strong> y <strong>espironolactona</strong> en las semanas siguientes, con control de creatinina y potasio a la semana; 4) titular un fármaco cada 1-2 semanas, de modo que en 6-8 semanas el paciente esté con los cuatro; 5) controlar el ecocardiograma a los 3 meses. La <strong>hipotensión asintomática</strong> (PAS 90-100) no obliga a suspender; la sintomática se maneja primero reduciendo el diurético y espaciando los fármacos.",
          "<strong>IC con fracción levemente reducida (41-49%):</strong> iSGLT2 y, según el caso, los otros pilares. <strong>IC con fracción preservada (≥ 50%):</strong> iSGLT2 (empagliflozina o dapagliflozina), diurético para la congestión y <strong>tratar las comorbilidades</strong> (hipertensión, fibrilación auricular, obesidad, diabetes, apnea del sueño, coronariopatía); los fármacos de los otros pilares tienen un beneficio pequeño y solo se consideran de apoyo."
        ]
      },
      {
        "subhead": "8. Dispositivos: Desfibrilador Implantable (DAI) y Resincronización (TRC)",
        "paragraphs": [
          "<strong>Desfibrilador automático implantable (DAI):</strong> <strong>prevención primaria</strong> de muerte súbita en IC con <strong>FEVI ≤ 35% a pesar de al menos 3 meses de terapia médica óptima</strong>, clase NYHA II-III (en cardiopatía isquémica, ≥ 40 días después de un infarto y ≥ 90 días de una revascularización) y expectativa de vida mayor de un año. <strong>Prevención secundaria</strong> en quien sobrevivió a una taquicardia o fibrilación ventricular fuera de una causa reversible. No se implanta en un paciente con la FEVI recién medida tras un infarto ni en clase IV sin opción de trasplante.",
          "<strong>Terapia de resincronización cardíaca (TRC, marcapaso biventricular):</strong> en <strong>ritmo sinusal, FEVI ≤ 35%, NYHA II-IV a pesar del tratamiento óptimo y bloqueo completo de rama izquierda con QRS ≥ 150 ms</strong> (indicación más fuerte); con QRS de 130-149 ms es de menor nivel de evidencia. Mejora síntomas, reduce hospitalizaciones y mortalidad. Se usa de forma combinada con DAI (TRC-D) en la mayoría. En IC <strong>avanzada (estadio D)</strong>: derivación a trasplante cardíaco, asistencia ventricular o cuidados paliativos."
        ]
      },
      {
        "subhead": "9. Situaciones Especiales, Seguimiento y Pronóstico",
        "paragraphs": [
          "<strong>Fibrilación auricular asociada:</strong> es muy frecuente en la IC y empeora los síntomas. Se controla la frecuencia con betabloqueador (el verapamilo y el diltiazem están contraindicados en la fracción reducida; la digoxina es una opción adicional) y se anticoagula según el puntaje CHA₂DS₂-VASc: la IC suma un punto, de modo que casi todo paciente con IC y FA requiere anticoagulación (Tema 1.5). La amiodarona es el antiarrítmico de elección si hay que intentar ritmo sinusal.",
          "<strong>Diabetes:</strong> los iSGLT2 son el fármaco de elección en el diabético con IC; la metformina es segura mientras la VFG sea adecuada; se evitan la pioglitazona y las sulfonilureas de larga acción por el riesgo de retención de líquido e hipoglicemia. <strong>Insuficiencia renal:</strong> el IECA o ARA II no están contraindicados con VFG baja; se inician en dosis bajas con controles cercanos y se acepta un alza de creatinina de hasta 30%. <strong>Adulto mayor:</strong> los mismos fármacos, con dosis iniciales más bajas, titulación lenta y vigilancia de caídas por hipotensión; la fragilidad no es motivo para omitir los pilares. <strong>Embarazo:</strong> IECA, ARA II, ARNI y espironolactona están contraindicados; se usan betabloqueador (metoprolol), hidralazina con nitrato y diuréticos con cautela.",
          "<strong>Seguimiento:</strong> control a los 7-14 días del alta de una descompensación y luego cada 1-3 meses hasta alcanzar las dosis meta, con peso, presión, frecuencia, creatinina, potasio y revisión del cumplimiento. La <strong>mala adherencia</strong> (a los fármacos y a la sal) es la causa más frecuente de reingreso, por lo que se simplifica el esquema, se entrega por escrito y se educa al paciente y su familia. El <strong>pronóstico</strong> de la IC con fracción reducida depende del grado de síntomas, la FEVI, la función renal, la hiponatremia y la causa; con los cuatro pilares y los dispositivos bien indicados, la mortalidad a un año de un paciente estable es hoy de un solo dígito. En el estadio D, la conversación sobre cuidados paliativos y límites del esfuerzo terapéutico es parte del manejo."
        ]
      }
    ],
    "table": {
      "title": "Los Cuatro Pilares de la IC con Fracción Reducida: Fármaco, Dosis Inicial y Dosis Meta",
      "headers": [
        "Pilar",
        "Fármaco",
        "Dosis inicial",
        "Dosis meta"
      ],
      "rows": [
        [
          "1. ARNI",
          "Sacubitrilo / valsartán",
          "24/26 o 49/51 mg cada 12 h (lavado de 36 h tras IECA)",
          "97/103 mg cada 12 h"
        ],
        [
          "1. IECA (alternativa)",
          "Enalapril (o captopril, lisinopril)",
          "2,5 mg cada 12 h",
          "10-20 mg cada 12 h"
        ],
        [
          "1. ARA II (si hay tos)",
          "Losartán o candesartán",
          "25-50 mg/día · 4-8 mg/día",
          "150 mg/día · 32 mg/día"
        ],
        [
          "2. Betabloqueador",
          "Bisoprolol · carvedilol · metoprolol succinato",
          "1,25 mg/día · 3,125 mg c/12 h · 12,5-25 mg/día",
          "10 mg/día · 25 mg c/12 h (50 si > 85 kg) · 200 mg/día"
        ],
        [
          "3. Antagonista mineralocorticoide",
          "Espironolactona (o eplerenona)",
          "12,5-25 mg/día (K < 5,0; VFG > 30)",
          "25-50 mg/día"
        ],
        [
          "4. iSGLT2",
          "Dapagliflozina o empagliflozina",
          "10 mg/día",
          "10 mg/día (sin titulación)"
        ],
        [
          "Diurético (síntomas)",
          "Furosemida",
          "20-40 mg/día",
          "La mínima que mantenga el peso seco"
        ]
      ]
    },
    "severityTable": {
      "title": "Fármacos que Empeoran la IC con Fracción Reducida: Qué Evitar y Por Qué",
      "headers": [
        "Fármaco",
        "Efecto sobre la IC",
        "Conducta"
      ],
      "rows": [
        [
          "Nifedipino y otras dihidropiridinas de acción corta",
          "Inotropismo negativo y activación simpática",
          "Suspender (preguntas Ago 2021 P135 y Dic 2019 P123)"
        ],
        [
          "Verapamilo y diltiazem",
          "Deprimen la contractilidad y la conducción",
          "Evitar en FEr"
        ],
        [
          "AINE y COXIB",
          "Retienen sodio y agua; antagonizan IECA/ARA II; dañan el riñón",
          "Evitar; usar paracetamol"
        ],
        [
          "Pioglitazona",
          "Retención de líquido",
          "Evitar"
        ],
        [
          "Antiarrítmicos clase I, dronedarona",
          "Proarritmia y mortalidad",
          "Evitar; amiodarona si hace falta"
        ],
        [
          "Digoxina",
          "No mejora la sobrevida; se acumula en la falla renal",
          "Solo síntomas o FA; cuidado con creatinina elevada"
        ],
        [
          "Betabloqueador en IC aguda con shock",
          "Deprime el gasto",
          "No iniciar; suspender solo si hay shock o bradicardia grave"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Seguridad y Controles de Cada Pilar",
      "headers": [
        "Pilar",
        "Antes de iniciar",
        "Controles",
        "Reducir o suspender si…"
      ],
      "rows": [
        [
          "IECA / ARA II / ARNI",
          "PAS ≥ 100; K < 5,0-5,5; creatinina estable; sin embarazo",
          "Creatinina y K a los 7-14 días y en cada alza de dosis",
          "Angioedema; K > 5,5; alza de creatinina > 30% o > 50%; no combinar IECA con ARNI (lavado 36 h)"
        ],
        [
          "Betabloqueador",
          "Euvolemia; FC > 60; sin shock ni bloqueo AV de alto grado",
          "FC, PA, peso, síntomas en cada alza (cada 2 semanas)",
          "Bradicardia sintomática, bloqueo AV, shock; si hay congestión leve: subir diurético, no suspender"
        ],
        [
          "Espironolactona",
          "K < 5,0; VFG > 30",
          "K y creatinina a los 3 días, a la semana y mensual por 3 meses",
          "K > 5,5 (reducir) o > 6,0 (suspender); ginecomastia: cambiar a eplerenona"
        ],
        [
          "iSGLT2",
          "VFG ≥ 20-25; sin diabetes tipo 1",
          "Volumen, función renal, infecciones genitales",
          "Cetoacidosis; cirugía o ayuno (suspender 3 días); infección genital recurrente"
        ]
      ]
    },
    "vignette": "Hombre de 59 años con miocardiopatía dilatada posinfarto y FEVI de 28%, en clase funcional II de la NYHA, recibe solo enalapril 10 mg cada 12 horas y furosemida 40 mg al día. Está euvolémico: PA 118/75 mmHg, FC 74 lpm, sin crépitos ni edema. Creatinina 1,0 mg/dL (VFG 82 mL/min), potasio 4,3 mEq/L, ECG con QRS de 110 ms. Se decide optimizar el tratamiento.",
    "explicacion": "El paciente tiene IC con fracción reducida (FEVI 28%) subtratada: solo recibe un pilar. Se agregan, en pocas semanas y a dosis bajas: un betabloqueador con evidencia (bisoprolol 1,25 mg al día, que se duplica cada 2 semanas), espironolactona 12,5-25 mg al día (potasio 4,3 y VFG 82, con control a los 3 y 7 días) y dapagliflozina 10 mg al día. Se cambia el enalapril por sacubitrilo/valsartán dejando 36 horas sin IECA (o se mantiene el enalapril titulado hasta 10-20 mg cada 12 horas si no se dispone). La furosemida se deja en la mínima dosis necesaria. A los 3 meses se repite el ecocardiograma: si la FEVI sigue ≤ 35% con síntomas, se evalúa un DAI (el QRS de 110 ms no indica resincronizador).",
    "keyPoints": [
      "Los cuatro pilares que reducen la mortalidad en IC-FEr: ARNI (o IECA/ARA II), betabloqueador con evidencia, espironolactona e iSGLT2; se inician precozmente y se titulan.",
      "IECA → ARNI: dejar 36 horas sin IECA para evitar el angioedema; nunca juntos.",
      "Betabloqueadores con evidencia: bisoprolol, carvedilol y metoprolol succinato (no atenolol); se inician euvolémico y se duplica la dosis cada 2 semanas.",
      "Espironolactona con K < 5,0 y VFG > 30; controlar K y creatinina a los 3 días, a la semana y luego mensual; ginecomastia: eplerenona.",
      "Dapagliflozina o empagliflozina 10 mg reducen hospitalizaciones y muerte cardiovascular con o sin diabetes; sin titulación.",
      "La furosemida alivia síntomas, no reduce la mortalidad: se usa la mínima dosis que mantenga el peso seco.",
      "Suspender nifedipino, verapamilo, diltiazem, AINE y pioglitazona en la IC con fracción reducida; la digoxina es la menos adecuada si hay falla renal.",
      "DAI: FEVI ≤ 35% tras 3 meses de terapia óptima, NYHA II-III. TRC: ritmo sinusal, FEVI ≤ 35%, BCRI con QRS ≥ 150 ms."
    ],
    "questions": [
      {
        "stem": "Mujer de 68 años con diagnóstico de insuficiencia cardíaca con fracción de eyección reducida (FEVI 35%), clase funcional NYHA III. En tratamiento con furosemida y enalapril. ¿Cuál es el diurético que se debe agregar para mejorar el pronóstico?",
        "options": [
          {
            "id": "A",
            "text": "Hidroclorotiazida"
          },
          {
            "id": "B",
            "text": "Indapamida"
          },
          {
            "id": "C",
            "text": "Clortalidona"
          },
          {
            "id": "D",
            "text": "Espironolactona"
          },
          {
            "id": "E",
            "text": "Torasemida"
          }
        ],
        "correcta": "D",
        "explicacion": "La espironolactona es el antagonista de la aldosterona que reduce la mortalidad en IC con fracción reducida y clase III-IV (estudio RALES), y se agrega a la furosemida y al IECA, controlando potasio y creatinina. Hidroclorotiazida, indapamida, clortalidona y torasemida aumentan la diuresis pero no mejoran el pronóstico.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 1"
      },
      {
        "stem": "Un hombre de 66 años, hipertenso e insuficiente cardíaco, en tratamiento con enalapril e hidroclorotiazida, consulta por disnea de grandes esfuerzos, asociada a ortopnea de 2 almohadas y escaso edema de extremidades inferiores. Su electrocardiograma tiene signos de hipertrofia del ventrículo izquierdo. ¿Cuál fármaco es más importante agregar?",
        "options": [
          {
            "id": "A",
            "text": "Isosorbide"
          },
          {
            "id": "B",
            "text": "Carvedilol"
          },
          {
            "id": "C",
            "text": "Losartán"
          },
          {
            "id": "D",
            "text": "Furosemida"
          },
          {
            "id": "E",
            "text": "Hidroclorotiazida"
          }
        ],
        "correcta": "B",
        "explicacion": "Es un insuficiente cardíaco con IECA y diurético, pero sin betabloqueador: el carvedilol reduce la mortalidad y la muerte súbita. El losartán no se agrega porque el paciente ya recibe un IECA y los dos no se combinan; el isosorbide y más diurético solo alivian síntomas.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 10"
      },
      {
        "stem": "Un paciente de 71 años, con antecedente de hipertensión arterial, diabetes e insuficiencia cardíaca, en tratamiento con losartán, metformina, aspirina, nifedipino e hidroclorotiazida consulta por progresión de su disnea de esfuerzos, que aparece al caminar 1 cuadra. Al examen físico, tiene edema de extremidades inferiores, se palpa el choque de la punta en la línea axilar media y se ausculta ritmo cardíaco regular, sin soplos, con crépitos bilaterales en la auscultación pulmonar. Se realiza ecocardiografía que muestra disfunción ventricular, con fracción de eyección de 23%. ¿Qué fármaco debe suspenderse?",
        "options": [
          {
            "id": "A",
            "text": "Losartán"
          },
          {
            "id": "B",
            "text": "Metformina"
          },
          {
            "id": "C",
            "text": "Aspirina"
          },
          {
            "id": "D",
            "text": "Nifedipino"
          },
          {
            "id": "E",
            "text": "Hidroclorotiazida"
          }
        ],
        "correcta": "D",
        "explicacion": "Con FEVI 23% y disnea progresiva, el fármaco que agrava la insuficiencia cardíaca es el nifedipino, por su efecto inotrópico negativo; se suspende y se agregan betabloqueador (con cuidado, dosis baja) y espironolactona. El losartán, la aspirina y la metformina no están contraindicados (se vigila la función renal con la metformina).",
        "recTag": "EUNACOM Agosto 2021 · Pregunta 135"
      },
      {
        "stem": "Un paciente de 71 años, con antecedente de hipertensión arterial y diabetes, en tratamiento con enalapril, metformina, aspirina, nifedipino e hidroclorotiazida consulta por disnea de esfuerzos, que aparece al caminar 2 cuadras. Al examen físico, se palpa el choque de la punta desplazado 2 cm hacia lateral y se ausculta ritmo cardíaco regular, en tres tiempos, con presencia de un tercer ruido y de un soplo de insuficiencia mitral III/VI, con escasos crépitos en la auscultación pulmonar. ¿Qué fármaco debe suspenderse?",
        "options": [
          {
            "id": "A",
            "text": "Enalapril"
          },
          {
            "id": "B",
            "text": "Metformina"
          },
          {
            "id": "C",
            "text": "Aspirina"
          },
          {
            "id": "D",
            "text": "Nifedipino"
          },
          {
            "id": "E",
            "text": "Hidroclorotiazida"
          }
        ],
        "correcta": "D",
        "explicacion": "Un paciente con R3, soplo de insuficiencia mitral por dilatación, choque de la punta desplazado y crépitos tiene una IC con disfunción sistólica: el nifedipino debe suspenderse. El enalapril es un pilar del tratamiento y no se suspende, y la metformina, la aspirina y la hidroclorotiazida no son la causa del deterioro.",
        "recTag": "EUNACOM Diciembre 2019 · Pregunta 123"
      },
      {
        "stem": "Un paciente de 50 años, con antecedente de miocardiopatía dilatada, en tratamiento con enalapril, carvedilol y furosemida, presenta disnea que aparece al realizar esfuerzos moderados, asociado a ortopnea. Su examen físico demuestra desplazamiento del choque de la punta, con crepitaciones de ambas bases pulmonares. Además se solicita una ecocardiografía que muestra una fracción de eyección de 24%. ¿Qué cambio recomendaría a este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Reemplazar la furosemida por hidroclorotiazida"
          },
          {
            "id": "B",
            "text": "Reemplazar el enalapril por losartán"
          },
          {
            "id": "C",
            "text": "Reemplazar el carvedilol por atenolol"
          },
          {
            "id": "D",
            "text": "Agregar hidralazina"
          },
          {
            "id": "E",
            "text": "Agregar espironolactona"
          }
        ],
        "correcta": "E",
        "explicacion": "Con una fracción de eyección de 24% y síntomas pese a enalapril, carvedilol y furosemida, falta el tercer pilar: agregar espironolactona. Reemplazar el diurético de asa por hidroclorotiazida, el enalapril por losartán (equivalentes) o el carvedilol por atenolol (sin evidencia) no mejora el pronóstico, y la hidralazina es un recurso para quien no tolera IECA/ARA II.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 8"
      },
      {
        "stem": "Una paciente de 40 años, con antecedente de asma e insuficiencia cardíaca, consulta por aumento de su disnea basal, por lo que se realizan algunos exámenes. Se solicita una ecocardiografía, que muestra cardiomegalia, con paredes finas y una fracción de eyección ventricular de 28%. Además se solicitan exámenes de laboratorio que muestran creatinina: 1,8 mg/dl, Na: 140 mEq/L, K: 3,8 mEq/L, Cl: 106 mEq/L. ¿Qué fármaco está contraindicado en esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Enalapril"
          },
          {
            "id": "B",
            "text": "Losartán"
          },
          {
            "id": "C",
            "text": "Furosemida"
          },
          {
            "id": "D",
            "text": "Espironolactona"
          },
          {
            "id": "E",
            "text": "Digoxina"
          }
        ],
        "correcta": "E",
        "explicacion": "Con fracción de eyección de 28% los pilares son IECA o ARA II, betabloqueador, espironolactona y diurético de asa, con control estricto si hay creatinina de 1,8 mg/dL y potasio de 3,8. La digoxina es la menos adecuada: se elimina por el riñón, se acumula en la insuficiencia renal con riesgo de intoxicación y no mejora la mortalidad (clave a revisar: ver dudas).",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 13"
      },
      {
        "stem": "Un paciente de 68 años con antecedentes de infarto de miocardio, hipertensión arterial y tabaquismo se encuentra en tratamiento con aspirina, atorvastatina, enalapril 20 mg cada 12 horas, carvedilol 12,5 mg al día, furosemida 40 mg cada 12 horas. Actualmente presenta disnea de pequeños esfuerzos. Al examen físico, tiene frecuencia cardíaca: 65x’, presión arterial: 110/70 mmHg, saturación de oxígeno del 96%; en el examen cardiopulmonar se auscultan crépitos pulmonares bibasales y ritmo cardíaco regular en dos tiempos, con un soplo sistólico III/VI. El choque de la punta es palpable en la línea axilar media y presenta edema en los miembros inferiores. ¿Cuál de las siguientes medidas es la más adecuada para este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Agregar losartán"
          },
          {
            "id": "B",
            "text": "Agregar hidralazina"
          },
          {
            "id": "C",
            "text": "Agregar isosorbide"
          },
          {
            "id": "D",
            "text": "Agregar espironolactona"
          },
          {
            "id": "E",
            "text": "Agregar amiodarona"
          }
        ],
        "correcta": "D",
        "explicacion": "Paciente isquémico con enalapril, carvedilol y furosemida que persiste sintomático, con crépitos y edema: falta la espironolactona. El losartán no se suma al enalapril (mismo mecanismo); la hidralazina, el isosorbide y la amiodarona no mejoran la sobrevida en este contexto.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 153"
      },
      {
        "stem": "Un paciente masculino, de 69 años, con antecedente de diabetes e hipertensión arterial, con cardiopatía hipertensiva, en tratamiento con enalapril, hidroclorotiazida y metformina consulta por mayor disnea de la habitual, la que limita sus actividades de la vida diaria, asociada a ortopnea y disnea paroxística nocturna. Al examen físico su PA: 130/80 mmHg, FC: 70x’, se observa edema de extremidades inferiores y se auscultan crepitaciones pulmonares escasas, en ambas bases. El examen cardiaco demuestra un choque de la punta en el 5° espacio intercostal, con auscultación normal. Se inicia tratamiento con carvedilol y furosemida, sin mayor respuesta. ¿Qué fármaco es más importante agregar al tratamiento de este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Isosorbide"
          },
          {
            "id": "B",
            "text": "Hidralazina"
          },
          {
            "id": "C",
            "text": "Atorvastatina"
          },
          {
            "id": "D",
            "text": "Espironolactona"
          },
          {
            "id": "E",
            "text": "Digoxina"
          }
        ],
        "correcta": "D",
        "explicacion": "Con IECA, tiazida y carvedilol, sin respuesta, el fármaco más importante que falta es la espironolactona, que aumenta la sobrevida; el isosorbide, la hidralazina y la digoxina alivian síntomas o sirven de recurso, pero no son el siguiente paso, y la atorvastatina no trata la IC.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 93"
      },
      {
        "stem": "Hombre de 62 años con IC con fracción reducida (FEVI 32%) en tratamiento con enalapril 20 mg al día y carvedilol 25 mg cada 12 horas. Se decide cambiar el IECA por sacubitrilo/valsartán. ¿Cuál es la indicación crítica que debe darse?",
        "options": [
          {
            "id": "A",
            "text": "Suspender el enalapril y esperar al menos 36 horas antes de la primera dosis de sacubitrilo/valsartán"
          },
          {
            "id": "B",
            "text": "Tomar ambos fármacos simultáneamente durante la primera semana"
          },
          {
            "id": "C",
            "text": "Suspender el carvedilol de forma permanente"
          },
          {
            "id": "D",
            "text": "Asociar espironolactona 100 mg antes de hacer el cambio"
          },
          {
            "id": "E",
            "text": "Realizar el cambio directo sin período de espera"
          }
        ],
        "correcta": "A",
        "explicacion": "Inhibir a la vez la enzima convertidora y la neprilisina acumula bradicinina y puede causar un angioedema orofaríngeo grave; por eso se exige un lavado de al menos 36 horas tras el último IECA. El cambio inverso (ARNI a IECA) también requiere las 36 horas.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Mujer de 66 años con IC con FEVI de 30%, en ritmo sinusal, NYHA III, con enalapril, bisoprolol 10 mg, espironolactona y dapagliflozina a dosis meta desde hace 4 meses. El ECG muestra BCRI con QRS de 160 ms. ¿Qué terapia adicional mejora su pronóstico?",
        "options": [
          {
            "id": "A",
            "text": "Terapia de resincronización cardíaca con desfibrilador"
          },
          {
            "id": "B",
            "text": "Amiodarona oral permanente"
          },
          {
            "id": "C",
            "text": "Nifedipino de liberación lenta"
          },
          {
            "id": "D",
            "text": "Diltiazem para control de frecuencia"
          },
          {
            "id": "E",
            "text": "Aumentar la furosemida a 120 mg al día"
          }
        ],
        "correcta": "A",
        "explicacion": "FEVI ≤ 35%, ritmo sinusal, síntomas pese al tratamiento óptimo y BCRI con QRS ≥ 150 ms son la indicación más sólida de resincronización (TRC-D). Los otros fármacos no mejoran la sobrevida y los calcioantagonistas empeoran la IC.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "3.2§0 · 3.2§1 · 3.2§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-18",
    "classId": "cardio-18",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Insuficiencia Cardíaca y Enfermedades del Miocardio",
    "topicLabel": "3.3",
    "title": "Insuficiencia Cardíaca Aguda y Edema Agudo de Pulmón",
    "perfilCode": "1.01.2.005",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No es problema GES (la atención de urgencia vital está cubierta por la Ley de Urgencia)",
    "reconstrucciones": "",
    "frecuencia": "Alta · Reconocimiento del edema agudo de pulmón, perfiles de Forrester, tríada VNI + nitroglicerina + furosemida, morfina y los desencadenantes que hay que tratar",
    "svg": null,
    "algoTitle": "Algoritmo de manejo del edema agudo de pulmón cardiogénico en urgencia",
    "diagram": {
      "title": "Algoritmo de Manejo de la Insuficiencia Cardíaca Aguda y el Edema Agudo de Pulmón según la Presión Arterial",
      "svg": "<svg viewBox=\"0 0 620 462\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar33\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar33)}\n  </style>\n  <rect class=\"b\" x=\"80\" y=\"8\" width=\"460\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Disnea súbita, ortopnea, crépitos, espuma rosada; SatO₂ &lt; 90%</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Edema agudo de pulmón / IC aguda: emergencia</text>\n  <path class=\"ln\" d=\"M310,48 V62\"/>\n  <rect class=\"acc\" x=\"60\" y=\"62\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"76\" text-anchor=\"middle\" font-weight=\"700\">Primeros 10 minutos, todo a la vez</text>\n  <text class=\"accS\" x=\"310\" y=\"88\" text-anchor=\"middle\">Sentado con piernas colgando · O₂ si SatO₂ &lt; 90% · monitor y vía venosa · ECG, troponina, BNP, gases</text>\n  <path class=\"ln\" d=\"M310,106 V120\"/>\n  <rect class=\"dec\" x=\"90\" y=\"120\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"134\" text-anchor=\"middle\" font-weight=\"700\">¿Cuál es la presión arterial sistólica?</text>\n  <text class=\"sub\" x=\"310\" y=\"146\" text-anchor=\"middle\">La PA decide el vasodilatador y si hay shock</text>\n  <path class=\"ln\" d=\"M310,160 V172 H108 V184\"/>\n  <path class=\"ln\" d=\"M310,160 V184\"/>\n  <path class=\"ln\" d=\"M310,160 V172 H512 V184\"/>\n  <rect class=\"b\" x=\"15\" y=\"184\" width=\"185\" height=\"70\" rx=\"3\"/>\n  <text class=\"t\" x=\"107.5\" y=\"198\" text-anchor=\"middle\" font-weight=\"700\">PAS ≥ 110: EAP hipertensivo</text>\n  <text class=\"sub\" x=\"107.5\" y=\"210\" text-anchor=\"middle\">VNI (CPAP 5-10 cmH₂O)</text>\n  <text class=\"sub\" x=\"107.5\" y=\"220\" text-anchor=\"middle\">Nitroglicerina EV 10-20 mcg/min</text>\n  <text class=\"sub\" x=\"107.5\" y=\"230\" text-anchor=\"middle\">Furosemida EV 20-80 mg</text>\n  <rect class=\"b\" x=\"217\" y=\"184\" width=\"185\" height=\"70\" rx=\"3\"/>\n  <text class=\"t\" x=\"309.5\" y=\"198\" text-anchor=\"middle\" font-weight=\"700\">PAS 90-110</text>\n  <text class=\"sub\" x=\"309.5\" y=\"210\" text-anchor=\"middle\">VNI + furosemida EV</text>\n  <text class=\"sub\" x=\"309.5\" y=\"220\" text-anchor=\"middle\">Nitrato con cautela o ninguno</text>\n  <text class=\"sub\" x=\"309.5\" y=\"230\" text-anchor=\"middle\">Buscar la causa y la perfusión</text>\n  <rect class=\"warn\" x=\"419\" y=\"184\" width=\"185\" height=\"70\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"511.5\" y=\"198\" text-anchor=\"middle\" font-weight=\"700\">PAS &lt; 90 o hipoperfusión</text>\n  <text class=\"sub warnT\" x=\"511.5\" y=\"210\" text-anchor=\"middle\">Shock cardiogénico (Tema 3.4)</text>\n  <text class=\"sub warnT\" x=\"511.5\" y=\"220\" text-anchor=\"middle\">Noradrenalina ± dobutamina</text>\n  <text class=\"sub warnT\" x=\"511.5\" y=\"230\" text-anchor=\"middle\">UCI y reperfusión si es IAM</text>\n  <path class=\"ln\" d=\"M310,254 V270\"/>\n  <rect class=\"dec\" x=\"60\" y=\"270\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"284\" text-anchor=\"middle\" font-weight=\"700\">Reevaluar a los 30-60 minutos</text>\n  <text class=\"sub\" x=\"310\" y=\"296\" text-anchor=\"middle\">SatO₂, frecuencia respiratoria, diuresis (&gt; 100 mL/h), PA, estado de conciencia</text>\n  <path class=\"ln\" d=\"M310,314 V326 H180 V336\"/>\n  <path class=\"ln\" d=\"M310,314 V326 H440 V336\"/>\n  <rect class=\"acc\" x=\"60\" y=\"336\" width=\"240\" height=\"52\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"180\" y=\"350\" text-anchor=\"middle\" font-weight=\"700\">Mejora</text>\n  <text class=\"accS\" x=\"180\" y=\"362\" text-anchor=\"middle\">Seguir diurético, pasar a vía oral</text>\n  <text class=\"accS\" x=\"180\" y=\"372\" text-anchor=\"middle\">Iniciar los pilares antes del alta</text>\n  <rect class=\"warn\" x=\"320\" y=\"336\" width=\"240\" height=\"52\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"440\" y=\"350\" text-anchor=\"middle\" font-weight=\"700\">No mejora</text>\n  <text class=\"sub warnT\" x=\"440\" y=\"362\" text-anchor=\"middle\">Intubación y ventilación mecánica</text>\n  <text class=\"sub warnT\" x=\"440\" y=\"372\" text-anchor=\"middle\">UCI · ultrafiltración · inótropo</text>\n  <path class=\"ln\" d=\"M310,388 V406\"/>\n  <rect class=\"b\" x=\"60\" y=\"406\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"420\" text-anchor=\"middle\" font-weight=\"700\">Tratar la causa desencadenante</text>\n  <text class=\"sub\" x=\"310\" y=\"432\" text-anchor=\"middle\">SCA (reperfusión) · arritmia (cardioversión) · crisis hipertensiva · válvula aguda · TEP · infección</text>\n</svg>"
    },
    "contexto": "El edema agudo de pulmón es la emergencia cardiológica que más se ve de madrugada en el SAPU: un paciente sentado, sudoroso, con labios azulados, que no puede hablar de corrido y escupe espuma rosada. Se muere si el médico se demora, y se salva en minutos si hace las tres cosas correctas: presión positiva, nitroglicerina y furosemida. El EUNACOM pregunta si reconoces la insuficiencia cardíaca aguda, cuál es la medida respiratoria que más evita la intubación, qué fármaco vasodilata más rápido y qué no se debe dar (morfina de rutina, betabloqueador intravenoso). Y por detrás, la pregunta de fondo: ¿qué la desencadenó?",
    "contentSections": [
      {
        "subhead": "1. Qué Es, Cómo se Presenta y Cómo se Clasifica",
        "paragraphs": [
          "La <strong>insuficiencia cardíaca aguda (ICA)</strong> es el inicio rápido, o el empeoramiento brusco, de los síntomas y signos de IC, que exige tratamiento urgente. Puede ser <strong>de novo</strong> (primer episodio, típico de un infarto, una miocarditis o una valvulopatía aguda) o una <strong>descompensación aguda de una IC crónica</strong> (lo más frecuente, en adultos mayores). El <strong>edema agudo de pulmón (EAP) cardiogénico</strong> es su forma más dramática: la presión capilar pulmonar sube de forma brusca (sobre 18-20 mmHg y, en el edema alveolar, sobre 25 mmHg), el líquido pasa del capilar al intersticio y a los alvéolos, y el paciente desarrolla hipoxemia grave.",
          "<strong>Cuadro clínico del EAP:</strong> disnea de reposo e inicio brusco (a menudo nocturno), <strong>ortopnea</strong>, taquipnea 30-40/min, sudoración fría, cianosis, <strong>ansiedad</strong>, tos con <strong>expectoración rosada espumosa</strong>, taquicardia, <strong>crépitos hasta los ápices</strong>, a veces sibilancias («asma cardíaca»), tercer ruido e ingurgitación yugular. La presión arterial dice mucho: una PA alta (a veces > 200 mmHg) sugiere un EAP hipertensivo, que es el más frecuente y el que mejor responde a los vasodilatadores; una PA baja con frialdad indica shock cardiogénico (Tema 3.4).",
          "Clasificaciones que se preguntan: la <strong>clasificación de Forrester</strong> o «perfil clínico» combina la <strong>perfusión</strong> (caliente = bien perfundido, frío = mala perfusión) con la <strong>congestión</strong> (húmedo o seco): <strong>perfil A «caliente y seco»</strong> (normal); <strong>perfil B «caliente y húmedo»</strong> (congestión sin hipoperfusión: el EAP clásico, la mayoría de las ICA, se trata con vasodilatador y diurético); <strong>perfil L «frío y seco»</strong> (hipoperfusión sin congestión: hipovolemia o gasto bajo, requiere volumen cuidadoso e inótropo); <strong>perfil C «frío y húmedo»</strong> (hipoperfusión con congestión: <strong>shock cardiogénico</strong>, el de peor pronóstico). La <strong>escala de Killip-Kimball</strong> (I sin IC; II crépitos o R3; III edema pulmonar; IV shock) clasifica la IC en el infarto."
        ]
      },
      {
        "subhead": "2. Fisiopatología del Edema Pulmonar: la Ley de Starling en el Pulmón",
        "paragraphs": [
          "El líquido sale del capilar pulmonar según el balance de Starling: lo empuja la <strong>presión hidrostática capilar</strong> y lo retiene la <strong>presión oncótica</strong> de las proteínas del plasma. Cuando el ventrículo izquierdo falla (o la aurícula izquierda no puede vaciarse, como en la estenosis mitral), la presión de la aurícula y de las venas pulmonares sube y se transmite hacia atrás al capilar: con una presión capilar pulmonar sobre 18-20 mmHg el líquido llena primero el <strong>intersticio</strong> (líneas B de Kerley, engrosamiento de los septos) y, sobre 25 mmHg, rompe la barrera alveolocapilar e inunda los <strong>alvéolos</strong> (edema alveolar «en alas de mariposa»). Los alvéolos llenos de líquido no intercambian gases: aparecen la hipoxemia, la taquipnea y la fatiga ventilatoria.",
          "Esa secuencia explica el tratamiento: la <strong>presión positiva</strong> empuja el líquido de vuelta al capilar y abre alvéolos colapsados; los <strong>vasodilatadores</strong> bajan la presión de llenado del ventrículo y la poscarga; el <strong>diurético</strong> reduce el volumen circulante y, antes de la diuresis, venodilata. La diferencia con el <strong>edema pulmonar no cardiogénico</strong> (SDRA, sepsis, trauma, aspiración, edema de altura, neurogénico) es que en este último la presión capilar es normal y la causa es el aumento de la permeabilidad de la membrana: no mejora con diuréticos, la silueta cardíaca es normal y el BNP es bajo."
        ]
      },
      {
        "subhead": "3. Desencadenantes: la Pregunta que Sigue a «¿Qué Hago?»",
        "paragraphs": [
          "En el EAP siempre se pregunta <strong>por qué ahora</strong>. Los desencadenantes se recuerdan con la regla <strong>«CHAMP»</strong>: <strong>C</strong>oronario (síndrome coronario agudo, que exige reperfusión), <strong>H</strong>ipertensiva (crisis hipertensiva, estenosis de la arteria renal), <strong>A</strong>rritmia (fibrilación auricular con respuesta rápida, taquicardia ventricular, bradicardia o bloqueo AV avanzado), <strong>M</strong>ecánica/miocardio (rotura de músculo papilar, comunicación interventricular posinfarto, insuficiencia aórtica aguda por endocarditis o disección, miocarditis), <strong>P</strong>ulmonar (embolia pulmonar), más <strong>infección</strong>, <strong>anemia</strong>, <strong>insuficiencia renal</strong>, <strong>hipertiroidismo</strong>, sobrecarga de volumen o sal, abandono del tratamiento y fármacos (<strong>AINE, corticoides, antiarrítmicos, calcioantagonistas no dihidropiridínicos</strong>).",
          "Tratarlos cambia la evolución: <strong>SCA</strong> con supradesnivel o shock → reperfusión inmediata (Tema 2.5); <strong>fibrilación auricular rápida inestable</strong> → cardioversión eléctrica; <strong>crisis hipertensiva</strong> → vasodilatadores; <strong>rotura valvular o septal</strong> → cirugía urgente y estabilización con vasodilatadores; <strong>TEP</strong> → anticoagulación y, si hay shock, reperfusión (Tema 5.9). Sin tratar la causa, la descongestión es solo un parche."
        ]
      },
      {
        "subhead": "4. Diagnóstico: Clínica, ECG, Radiografía, Laboratorio y Ecografía",
        "paragraphs": [
          "El diagnóstico es <strong>clínico</strong> y se apoya en pruebas que no deben retrasar el tratamiento. <strong>ECG de 12 derivaciones</strong> inmediato: isquemia, arritmia, hipertrofia, bloqueos. <strong>Radiografía de tórax</strong>: cardiomegalia, cefalización de los vasos del vértice, <strong>líneas B de Kerley</strong>, <strong>infiltrado alveolar bilateral perihiliar «en alas de mariposa»</strong> y derrame pleural, habitualmente bilateral (si es unilateral, más a menudo derecho). <strong>Péptidos natriuréticos:</strong> BNP < 100 pg/mL o NT-proBNP < 300 pg/mL descartan IC aguda; valores sobre 400-450 pg/mL y sobre 900-1.800 para NT-proBNP ajustados por edad la hacen muy probable. <strong>Troponina</strong> (¿IAM?), creatinina y electrolitos, glicemia, hemograma, gases arteriales (hipoxemia, hipercapnia y acidosis en el paciente agotado) y <strong>lactato</strong> (hipoperfusión).",
          "La <strong>ecografía a la cabecera del enfermo</strong> (POCUS) muestra <strong>líneas B pulmonares difusas</strong>, vena cava inferior dilatada sin variación respiratoria, derrame pleural y la función del ventrículo; el <strong>ecocardiograma</strong> se pide de urgencia en los pacientes inestables, con un primer episodio, soplo nuevo o sospecha de complicación mecánica, y en las primeras 48 horas en el resto.",
          "<strong>Diagnóstico diferencial de la disnea aguda:</strong> <strong>EPOC y asma</strong> (sibilancias, antecedentes, sin congestión sistémica), <strong>neumonía</strong> (fiebre, esputo, consolidación unilateral), <strong>embolia pulmonar</strong> (disnea súbita, campos limpios, taquicardia, factores de riesgo), <strong>neumotórax</strong>, <strong>crisis de pánico</strong> y <strong>SDRA</strong> o edema no cardiogénico (sepsis, neumonía, trauma; la presión capilar es normal y el corazón normal). Un paciente con EPOC puede además tener una IC: se trata ambas. La pregunta de diciembre de 2024 (paciente de 82 años con 2 semanas de disnea progresiva, PA 200/100, saturación 90%, ingurgitación yugular, R3, crépitos bibasales y signos de sobrecarga del ventrículo izquierdo) tiene como respuesta «IC aguda», no SCA, disección ni neumonía."
        ]
      },
      {
        "subhead": "5. Tratamiento en los Primeros 10 Minutos: Posición, Oxígeno, Presión Positiva, Nitroglicerina y Furosemida",
        "paragraphs": [
          "<strong>1) Posición y monitorización:</strong> sentado, con las piernas colgando (reduce el retorno venoso), monitor continuo, pulsioximetría y vía venosa. <strong>2) Oxígeno</strong> solo si la SatO₂ es < 90% (meta 94-98%); el exceso no ayuda y puede empeorar la vasoconstricción. <strong>3) Ventilación no invasiva con presión positiva (CPAP de 5-10 cmH₂O o BiPAP):</strong> es la <strong>intervención de primera línea</strong> que más reduce la necesidad de intubación y la mortalidad cuando se instala precozmente: recluta alvéolos inundados, reduce el trabajo respiratorio y disminuye la precarga y poscarga del ventrículo izquierdo. Se comienza con una mascarilla bien ajustada y se mantiene mientras haya hipoxemia.",
          "<strong>4) Nitroglicerina endovenosa</strong> (iniciar 10-20 mcg/min y subir 5-10 mcg/min cada 5 minutos hasta 100-200 mcg/min o control de la PA) en el paciente con <strong>PAS ≥ 110 mmHg</strong>: a dosis baja venodilata (baja la precarga) y a dosis mayor dilata las arterias (baja la poscarga); alivia en pocos minutos. Mientras se instala la vía se da <strong>0,4 mg sublingual cada 5 minutos</strong>. <strong>Contraindicaciones:</strong> PAS < 90-100 mmHg, infarto del ventrículo derecho, estenosis aórtica grave, uso de inhibidores de fosfodiesterasa (sildenafil, tadalafil) en las últimas 24-48 horas. En la crisis hipertensiva con EAP, se puede usar nitroprusiato en UCI.",
          "<strong>5) Furosemida endovenosa en bolo:</strong> <strong>20-40 mg</strong> en quien no la usa y <strong>1 a 2,5 veces la dosis oral diaria</strong> en quien ya la recibe (la dosis habitual de 40 a 80 mg sirve para el EAP inicial). Produce venodilatación en 5-15 minutos (antes de la diuresis) y diuresis profusa en 30-60 minutos. Se evalúa la respuesta a las 2 horas (diuresis mayor de 100-150 mL/h, o sodio urinario mayor de 50-70 mEq/L): si no hay respuesta se duplica la dosis o se agrega un segundo diurético (tiazida, acetazolamida). <strong>No se da diurético en el paciente hipovolémico</strong> (perfil frío y seco).",
          "<strong>Morfina:</strong> la práctica antigua de dar morfina por «aliviar la ansiedad» se asoció a mayor ventilación mecánica, ingreso a UCI y mortalidad; <strong>no se recomienda de rutina</strong>. <strong>Betabloqueadores intravenosos, calcioantagonistas y digoxina de rutina</strong> están contraindicados o no indicados. El paciente que ya tomaba betabloqueador lo continúa, salvo shock o bradicardia grave."
        ]
      },
      {
        "subhead": "6. Según el Perfil Hemodinámico: Hipertensivo, Normotenso y Shock",
        "paragraphs": [
          "<strong>EAP hipertensivo (PAS ≥ 110-140):</strong> el corazón no está muy debilitado, sino que se enfrentó a una poscarga súbita y a una redistribución de volumen hacia el pulmón: el protagonista es el <strong>vasodilatador</strong> (nitroglicerina) con VNI; el diurético es secundario porque el paciente puede no estar sobrecargado de volumen total. <strong>EAP con PA normal y sobrecarga de volumen (descompensación de IC crónica):</strong> mayor peso del diurético, con vasodilatador en dosis bajas si la presión lo permite.",
          "<strong>Hipoperfusión o PAS < 90 mmHg (perfil frío y húmedo = shock cardiogénico, Tema 3.4):</strong> no se dan vasodilatadores ni diuréticos como primera medida. Se inicia <strong>noradrenalina</strong> para llevar la presión arterial media a ≥ 65 mmHg y <strong>dobutamina</strong> si persiste el gasto bajo, con traslado urgente a UCI y reperfusión si hay un infarto. <strong>Perfil frío y seco:</strong> volumen en bolos de 250 mL con reevaluación, y búsqueda de la causa del bajo gasto.",
          "<strong>Soporte avanzado:</strong> se <strong>intuba</strong> si la VNI falla o hay agotamiento, alteración de conciencia, acidosis respiratoria (pH < 7,25), hipoxemia refractaria o imposibilidad de proteger la vía aérea. En el paciente con diuréticos resistentes e insuficiencia renal, la <strong>ultrafiltración</strong> o diálisis en UCI. Se evita el uso de aminas simpaticomiméticas en el EAP hipertensivo."
        ]
      },
      {
        "subhead": "7. Situaciones Especiales y Criterios de Hospitalización",
        "paragraphs": [
          "<strong>EAP en el infarto:</strong> el edema es la manifestación de falla de bomba (Killip III) o de una complicación mecánica; la prioridad es la reperfusión; la nitroglicerina se usa si hay PAS suficiente, y nunca en el infarto del ventrículo derecho. <strong>Estenosis mitral:</strong> la taquicardia acorta el llenado ventricular y eleva la presión de la aurícula; además del diurético, se controla la frecuencia con betabloqueador (o verapamilo/diltiazem, porque la función ventricular es normal) y se cardiovierte la FA inestable. <strong>Estenosis aórtica grave:</strong> los vasodilatadores potentes pueden provocar hipotensión grave: se prefiere diurético y VNI con cautela, y cirugía o valvuloplastía. <strong>Insuficiencia aórtica aguda:</strong> está contraindicado el betabloqueador (impide la taquicardia compensadora); se estabiliza con nitroprusiato o inótropo y se opera.",
          "<strong>Embarazo y puerperio:</strong> el edema agudo puede deberse a miocardiopatía periparto, preeclampsia grave o estenosis mitral previa; se trata con diuréticos, nitratos e hidralazina, y se evitan IECA, ARA II y espironolactona durante la gestación (Tema 3.6). <strong>Insuficiencia renal:</strong> la furosemida requiere dosis mayores y puede requerirse ultrafiltración. <strong>EPOC con IC:</strong> VNI y diurético, con cuidado de no suspender los betabloqueadores cardioselectivos.",
          "<strong>Criterios de hospitalización:</strong> toda ICA con disnea de reposo, hipoxemia (SatO₂ < 90%), frecuencia respiratoria sobre 25-30/min, PA sistólica < 90 o hipoperfusión, arritmia con inestabilidad, troponina elevada, creatinina en alza o falta de respuesta al tratamiento oral. <strong>UCI:</strong> necesidad de VNI o ventilación mecánica, aminas vasoactivas, shock, SCA con IC grave o falla renal que requiere ultrafiltración. Sólo el paciente con congestión leve, sin hipoxemia, buen contexto social y respuesta clara al diurético puede manejarse de forma ambulatoria, con control en 48-72 horas."
        ]
      },
      {
        "subhead": "8. Después de la Urgencia: Estabilización, Alta y Prevención de Reingresos",
        "paragraphs": [
          "Con el paciente estable (sin hipoxemia, sin soporte, con diuresis eficaz) se pasa el diurético a vía oral, se <strong>reanudan o inician los fármacos de la IC con fracción reducida antes del alta</strong> (IECA/ARA II/ARNI, betabloqueador, espironolactona e iSGLT2; Tema 3.2), se corrige el factor desencadenante y se fija el <strong>peso seco</strong>. Se espera ver una pérdida de peso de 0,5-1 kg al día hasta lograrlo; la hiponatremia, la creatinina creciente y la persistencia de congestión al alta predicen reingreso.",
          "<strong>Controles:</strong> primera visita a los <strong>7-14 días</strong> del alta (el período de mayor riesgo es el primer mes), con peso, presión, frecuencia, creatinina y potasio, y refuerzo de la educación en adherencia, restricción de sal y reconocimiento de los signos de alarma. <strong>Todo paciente con ICA se deriva a un servicio de urgencia o a un hospital de mayor complejidad</strong>; en el SAPU el médico general inicia las medidas de los primeros 10 minutos mientras se coordina el traslado en ambulancia con oxígeno y monitor."
        ]
      }
    ],
    "table": {
      "title": "Perfiles Hemodinámicos de Forrester (Clínicos) en la IC Aguda y su Tratamiento",
      "headers": [
        "Perfil",
        "Perfusión",
        "Congestión",
        "Tratamiento inicial"
      ],
      "rows": [
        [
          "A · caliente y seco",
          "Adecuada (extremidades tibias)",
          "Ausente (campos limpios)",
          "Mantener el tratamiento de base"
        ],
        [
          "B · caliente y húmedo (EAP clásico)",
          "Adecuada (PA normal o alta)",
          "Presente (crépitos, ortopnea, yugulares)",
          "VNI (CPAP) + nitroglicerina EV + furosemida EV"
        ],
        [
          "L · frío y seco",
          "Mala (extremidades frías)",
          "Ausente (sin crépitos)",
          "Volumen con cautela y causa del bajo gasto"
        ],
        [
          "C · frío y húmedo (shock cardiogénico)",
          "Mala (hipotensión, oliguria)",
          "Presente (congestión marcada)",
          "Noradrenalina ± dobutamina; UCI; reperfusión si IAM"
        ]
      ]
    },
    "severityTable": {
      "title": "Desencadenantes de la IC Aguda y Qué Cambia en el Tratamiento",
      "headers": [
        "Desencadenante",
        "Pista clínica",
        "Conducta específica"
      ],
      "rows": [
        [
          "Síndrome coronario agudo",
          "Dolor torácico, ECG con supradesnivel o infradesnivel, troponina",
          "Reperfusión inmediata (Tema 2.5); angioplastía si hay shock"
        ],
        [
          "Crisis hipertensiva",
          "PA > 180/110, EAP «relámpago»",
          "Nitroglicerina EV (o nitroprusiato en UCI) + VNI"
        ],
        [
          "Fibrilación auricular rápida u otra arritmia",
          "Pulso irregular > 130 lpm o taquicardia de QRS ancho",
          "Cardioversión eléctrica si hay inestabilidad (Tema 1.7)"
        ],
        [
          "Complicación mecánica del IAM",
          "Soplo sistólico nuevo intenso a los 3-7 días",
          "Ecocardiograma; cirugía urgente y vasodilatadores"
        ],
        [
          "Insuficiencia aórtica o mitral aguda",
          "Endocarditis, disección, soplo nuevo",
          "Ecocardiograma; cirugía; evitar betabloqueador en la IAo"
        ],
        [
          "Embolia pulmonar",
          "Campos limpios, disnea súbita, factores de riesgo",
          "Anticoagulación; reperfusión si hay shock (Tema 5.9)"
        ],
        [
          "Mala adherencia, infección, anemia, AINE",
          "Aumento de peso, fiebre, palidez",
          "Tratar el factor; suspender el fármaco; educar"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Fármacos de la IC Aguda: Dosis, Indicación y Contraindicaciones",
      "headers": [
        "Fármaco",
        "Dosis",
        "Cuándo",
        "No usar si…"
      ],
      "rows": [
        [
          "Nitroglicerina EV",
          "10-20 mcg/min, subir 5-10 mcg/min cada 5 min (hasta 200); 0,4 mg SL c/5 min mientras se instala la vía",
          "EAP con PAS ≥ 110 mmHg",
          "PAS < 90-100, infarto de VD, estenosis aórtica grave, sildenafil reciente"
        ],
        [
          "Furosemida EV",
          "20-40 mg (sin uso previo) o 1-2,5 veces la dosis oral diaria; repetir si diuresis < 100 mL/h a las 2 h",
          "Congestión por sobrecarga",
          "Hipovolemia o perfil frío y seco"
        ],
        [
          "CPAP / BiPAP",
          "PEEP 5-10 cmH₂O; FiO₂ para SatO₂ 94-98%",
          "Todo EAP con hipoxemia o trabajo respiratorio",
          "Shock grave, agotamiento, vómitos, sin protección de la vía aérea"
        ],
        [
          "Nitroprusiato",
          "0,3-5 mcg/kg/min, en UCI con monitoreo invasivo",
          "Crisis hipertensiva con EAP",
          "Insuficiencia renal o hepática grave (toxicidad por cianuro)"
        ],
        [
          "Noradrenalina + dobutamina",
          "Noradrenalina 0,05-1 mcg/kg/min; dobutamina 2-20 mcg/kg/min",
          "Shock cardiogénico (PAS < 90, hipoperfusión)",
          "Sospecha de hipovolemia sin corregir"
        ],
        [
          "Morfina",
          "No de rutina",
          "Solo dolor refractario (SCA)",
          "EAP: mayor tasa de intubación y mortalidad"
        ]
      ]
    },
    "vignette": "Mujer de 74 años, hipertensa, llega al SAPU en insuficiencia respiratoria: sentada, taquipneica a 36/min, cianótica, sudorosa, con esputo espumoso rosado. PA 210/115 mmHg, FC 125 lpm, SatO₂ 78% al aire ambiente, ingurgitación yugular, tercer ruido y crépitos húmedos hasta los ápices. El ECG muestra taquicardia sinusal con signos de hipertrofia ventricular izquierda y sin supradesnivel del ST. Pesa 70 kg y no usa diuréticos.",
    "explicacion": "Es un EAP hipertensivo (perfil «caliente y húmedo» de Forrester). En los primeros 10 minutos: sentarla con las piernas colgando, monitor y vía venosa; CPAP de 8-10 cmH₂O con FiO₂ para llegar a SatO₂ > 94%; nitroglicerina 0,4 mg sublingual mientras se instala la infusión endovenosa (10-20 mcg/min, titulando cada 5 minutos según PA); furosemida 40 mg EV en bolo. Se piden troponina, BNP, creatinina, electrolitos, gases y radiografía de tórax, y se busca el desencadenante (crisis hipertensiva, SCA, arritmia). No se da morfina ni betabloqueador intravenoso. Se coordina el traslado a UCI; si no mejora a los 30-60 minutos o se agota, se intuba.",
    "keyPoints": [
      "La ICA y el EAP son emergencias: sentar al paciente, oxígeno si SatO₂ < 90%, monitor, vía y exámenes en paralelo, sin esperar los resultados.",
      "La VNI (CPAP 5-10 cmH₂O) es la medida de primera línea que más reduce la intubación en el EAP cardiogénico.",
      "Nitroglicerina EV es el vasodilatador de elección con PAS ≥ 110 mmHg; está contraindicada con PAS < 90-100, infarto del VD, estenosis aórtica grave o sildenafil reciente.",
      "Furosemida EV 20-40 mg (o 1-2,5 veces la dosis oral habitual); evaluar diuresis a las 2 horas y duplicar si no responde; no usarla en el perfil frío y seco.",
      "Morfina de rutina, betabloqueador intravenoso y calcioantagonista no se indican en el EAP; el betabloqueador crónico se continúa salvo shock.",
      "Forrester: A caliente-seco, B caliente-húmedo (EAP), L frío-seco (volumen), C frío-húmedo (shock cardiogénico: noradrenalina ± dobutamina).",
      "Siempre buscar el desencadenante con CHAMP: coronario, hipertensivo, arritmia, mecánico, pulmonar (TEP), más infección, anemia y fármacos.",
      "Antes del alta: iniciar los cuatro pilares (Tema 3.2), fijar el peso seco y controlar a los 7-14 días."
    ],
    "questions": [
      {
        "stem": "(88) Paciente de 82 años con historia de 2 semanas de disnea progresiva FC 92 lpm PA 200/100 SatO2 90%. Al examen físico ingurgitación yugular, ritmo regular en tres tiempos por R3 al examen pulmonar créditos bibasales. ECG: ritmo sinusal con signos de sobrecarga del VI. Diagnóstico más probable:",
        "options": [
          {
            "id": "A",
            "text": "SCA"
          },
          {
            "id": "B",
            "text": "Disección aórtica"
          },
          {
            "id": "C",
            "text": "NAC"
          },
          {
            "id": "D",
            "text": "IC aguda"
          },
          {
            "id": "E",
            "text": "TEP"
          }
        ],
        "correcta": "D",
        "explicacion": "Disnea progresiva en un adulto mayor con ingurgitación yugular, tercer ruido, crépitos bibasales y signos de sobrecarga del ventrículo izquierdo en el ECG es una insuficiencia cardíaca aguda. El SCA daría dolor y cambios isquémicos; la disección, dolor transfixiante y soplo diastólico; la neumonía, fiebre y esputo; el TEP, campos limpios y disnea súbita.",
        "recTag": "EUNACOM Diciembre 2024 · Pregunta 88"
      },
      {
        "stem": "Hombre de 70 años con edema agudo de pulmón hipertensivo (PA 200/110 mmHg, SatO₂ 82%). ¿Cuál es la terapia respiratoria de primera línea más efectiva para evitar la intubación orotraqueal?",
        "options": [
          {
            "id": "A",
            "text": "Ventilación no invasiva con presión positiva continua (CPAP)"
          },
          {
            "id": "B",
            "text": "Oxigenoterapia por cánula nasal a 2 litros por minuto"
          },
          {
            "id": "C",
            "text": "Intubación orotraqueal y ventilación mecánica inmediata"
          },
          {
            "id": "D",
            "text": "Nebulización continua con salbutamol"
          },
          {
            "id": "E",
            "text": "Aspiración traqueal a circuito abierto"
          }
        ],
        "correcta": "A",
        "explicacion": "La ventilación no invasiva con presión positiva (CPAP o BiPAP) recluta los alvéolos inundados, mejora la oxigenación, disminuye el trabajo respiratorio y reduce la precarga y poscarga: baja de forma importante la intubación. La cánula nasal no basta; la intubación se reserva para la falla de la VNI.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Paciente de 66 años con edema agudo de pulmón y presión arterial de 190/100 mmHg que ya está con CPAP. ¿Cuál es el vasodilatador endovenoso de elección?",
        "options": [
          {
            "id": "A",
            "text": "Nitroglicerina en infusión continua"
          },
          {
            "id": "B",
            "text": "Nifedipino sublingual"
          },
          {
            "id": "C",
            "text": "Atenolol endovenoso en bolo"
          },
          {
            "id": "D",
            "text": "Hidralazina intramuscular"
          },
          {
            "id": "E",
            "text": "Morfina en bolo"
          }
        ],
        "correcta": "A",
        "explicacion": "La nitroglicerina en infusión es el vasodilatador de primera línea: a dosis bajas venodilata (baja la precarga) y a dosis altas dilata las arterias (baja la poscarga), con alivio casi inmediato del edema. El nifedipino es inotropo negativo y causa taquicardia refleja; el atenolol empeora la congestión; la morfina de rutina aumenta la intubación.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Mujer de 78 años con IC crónica llega con disnea de reposo, crépitos hasta los campos medios, PA 80/50 mmHg, extremidades frías y livedo, y diuresis escasa. Tiene troponina elevada y un infarto anterior reciente. ¿Cuál es el perfil hemodinámico y la conducta inicial?",
        "options": [
          {
            "id": "A",
            "text": "Frío y húmedo (shock cardiogénico): noradrenalina ± dobutamina y reperfusión urgente"
          },
          {
            "id": "B",
            "text": "Caliente y húmedo: nitroglicerina en infusión y furosemida en dosis alta"
          },
          {
            "id": "C",
            "text": "Frío y seco: bolo de 1.000 mL de suero fisiológico rápido"
          },
          {
            "id": "D",
            "text": "Caliente y seco: control ambulatorio"
          },
          {
            "id": "E",
            "text": "Frío y húmedo: morfina en bolo y betabloqueador endovenoso"
          }
        ],
        "correcta": "A",
        "explicacion": "Hipoperfusión (frialdad, oliguria, PA 80/50) con congestión es un perfil frío y húmedo: shock cardiogénico por infarto. No se dan vasodilatadores ni diuréticos como primera medida: se sostiene la presión con noradrenalina, se agrega dobutamina si el gasto es bajo y se revasculariza la arteria culpable (Tema 3.4).",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "3.3§0 · 3.3§1 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-19",
    "classId": "cardio-19",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Insuficiencia Cardíaca y Enfermedades del Miocardio",
    "topicLabel": "3.4",
    "title": "Shock Cardiogénico y Diagnóstico Diferencial de los Cuatro Shocks",
    "perfilCode": "1.01.2.007, 1.01.2.005",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No es problema GES (la atención de urgencia vital está cubierta por la Ley de Urgencia)",
    "reconstrucciones": "",
    "frecuencia": "Alta · Reconocer y clasificar el shock a la cabecera, perfil hemodinámico de los cuatro tipos, noradrenalina como vasopresor y reperfusión del infarto como tratamiento del shock cardiogénico",
    "svg": null,
    "algoTitle": "Algoritmo del shock: cuatro tipos, cuatro tratamientos",
    "diagram": {
      "title": "Algoritmo del Paciente en Shock: Diagnóstico Diferencial y Tratamiento de los Cuatro Tipos",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar34\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar34)}\n  </style>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Hipotensión (PAS &lt; 90 o PAM &lt; 65) con hipoperfusión</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Oliguria · confusión · piel moteada o fría · lactato &gt; 2 mmol/L · taquicardia</text>\n  <path class=\"ln\" d=\"M310,52 V66\"/>\n  <rect class=\"dec\" x=\"90\" y=\"66\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"80\" text-anchor=\"middle\" font-weight=\"700\">A la cabecera: ¿piel caliente o fría? ¿yugulares? ¿pulmones?</text>\n  <text class=\"sub\" x=\"310\" y=\"92\" text-anchor=\"middle\">Y una ecografía de corazón, vena cava y pulmón (POCUS)</text>\n  <path class=\"ln\" d=\"M310,106 V118 H81 V130\"/>\n  <path class=\"ln\" d=\"M310,106 V118 H236 V130\"/>\n  <path class=\"ln\" d=\"M310,106 V118 H391 V130\"/>\n  <path class=\"ln\" d=\"M310,106 V118 H545 V130\"/>\n  <rect class=\"b\" x=\"8\" y=\"130\" width=\"147\" height=\"92\" rx=\"3\"/>\n  <text class=\"t\" x=\"81.5\" y=\"144\" text-anchor=\"middle\" font-weight=\"700\">Hipovolémico</text>\n  <text class=\"sub\" x=\"81.5\" y=\"156\" text-anchor=\"middle\">Yugulares planas, piel fría</text>\n  <text class=\"sub\" x=\"81.5\" y=\"166\" text-anchor=\"middle\">Hemorragia, deshidratación,</text>\n  <text class=\"sub\" x=\"81.5\" y=\"176\" text-anchor=\"middle\">quemaduras, tercer espacio</text>\n  <rect class=\"warn\" x=\"163\" y=\"130\" width=\"147\" height=\"92\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"236.5\" y=\"144\" text-anchor=\"middle\" font-weight=\"700\">Cardiogénico</text>\n  <text class=\"sub warnT\" x=\"236.5\" y=\"156\" text-anchor=\"middle\">Yugulares altas, crépitos,</text>\n  <text class=\"sub warnT\" x=\"236.5\" y=\"166\" text-anchor=\"middle\">piel fría</text>\n  <text class=\"sub warnT\" x=\"236.5\" y=\"176\" text-anchor=\"middle\">Infarto, miocardiopatía,</text>\n  <text class=\"sub warnT\" x=\"236.5\" y=\"186\" text-anchor=\"middle\">arritmia, válvula aguda</text>\n  <rect class=\"b\" x=\"318\" y=\"130\" width=\"147\" height=\"92\" rx=\"3\"/>\n  <text class=\"t\" x=\"391.5\" y=\"144\" text-anchor=\"middle\" font-weight=\"700\">Obstructivo</text>\n  <text class=\"sub\" x=\"391.5\" y=\"156\" text-anchor=\"middle\">Yugulares altas, campos</text>\n  <text class=\"sub\" x=\"391.5\" y=\"166\" text-anchor=\"middle\">limpios</text>\n  <text class=\"sub\" x=\"391.5\" y=\"176\" text-anchor=\"middle\">TEP masivo, taponamiento,</text>\n  <text class=\"sub\" x=\"391.5\" y=\"186\" text-anchor=\"middle\">neumotórax a tensión</text>\n  <rect class=\"b\" x=\"473\" y=\"130\" width=\"139\" height=\"92\" rx=\"3\"/>\n  <text class=\"t\" x=\"542.5\" y=\"144\" text-anchor=\"middle\" font-weight=\"700\">Distributivo</text>\n  <text class=\"sub\" x=\"542.5\" y=\"156\" text-anchor=\"middle\">Piel caliente (inicial)</text>\n  <text class=\"sub\" x=\"542.5\" y=\"166\" text-anchor=\"middle\">yugulares bajas</text>\n  <text class=\"sub\" x=\"542.5\" y=\"176\" text-anchor=\"middle\">Sepsis, anafilaxia,</text>\n  <text class=\"sub\" x=\"542.5\" y=\"186\" text-anchor=\"middle\">neurogénico</text>\n  <path class=\"ln\" d=\"M81,222 V240\"/>\n  <path class=\"ln\" d=\"M236,222 V240\"/>\n  <path class=\"ln\" d=\"M391,222 V240\"/>\n  <path class=\"ln\" d=\"M542,222 V240\"/>\n  <rect class=\"acc\" x=\"8\" y=\"240\" width=\"147\" height=\"74\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"81.5\" y=\"254\" text-anchor=\"middle\" font-weight=\"700\">Volumen y causa</text>\n  <text class=\"accS\" x=\"81.5\" y=\"266\" text-anchor=\"middle\">Cristaloides o sangre</text>\n  <text class=\"accS\" x=\"81.5\" y=\"276\" text-anchor=\"middle\">Controlar la fuente</text>\n  <text class=\"accS\" x=\"81.5\" y=\"286\" text-anchor=\"middle\">del sangrado</text>\n  <rect class=\"acc\" x=\"163\" y=\"240\" width=\"147\" height=\"74\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"236.5\" y=\"254\" text-anchor=\"middle\" font-weight=\"700\">Noradrenalina</text>\n  <text class=\"accS\" x=\"236.5\" y=\"266\" text-anchor=\"middle\">± dobutamina</text>\n  <text class=\"accS\" x=\"236.5\" y=\"276\" text-anchor=\"middle\">Reperfusión si es IAM</text>\n  <text class=\"accS\" x=\"236.5\" y=\"286\" text-anchor=\"middle\">Evitar volumen en exceso</text>\n  <rect class=\"acc\" x=\"318\" y=\"240\" width=\"147\" height=\"74\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"391.5\" y=\"254\" text-anchor=\"middle\" font-weight=\"700\">Quitar la obstrucción</text>\n  <text class=\"accS\" x=\"391.5\" y=\"266\" text-anchor=\"middle\">Trombolisis (TEP)</text>\n  <text class=\"accS\" x=\"391.5\" y=\"276\" text-anchor=\"middle\">Pericardiocentesis</text>\n  <text class=\"accS\" x=\"391.5\" y=\"286\" text-anchor=\"middle\">Descompresión torácica</text>\n  <rect class=\"acc\" x=\"473\" y=\"240\" width=\"139\" height=\"74\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"542.5\" y=\"254\" text-anchor=\"middle\" font-weight=\"700\">Volumen + vasopresor</text>\n  <text class=\"accS\" x=\"542.5\" y=\"266\" text-anchor=\"middle\">Antibiótico en sepsis</text>\n  <text class=\"accS\" x=\"542.5\" y=\"276\" text-anchor=\"middle\">Adrenalina IM en</text>\n  <text class=\"accS\" x=\"542.5\" y=\"286\" text-anchor=\"middle\">anafilaxia</text>\n  <path class=\"ln\" d=\"M310,314 V334\"/>\n  <rect class=\"dec\" x=\"60\" y=\"334\" width=\"500\" height=\"50\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"348\" text-anchor=\"middle\" font-weight=\"700\">En todos: PAM ≥ 65 mmHg, lactato seriado, diuresis &gt; 0,5 mL/kg/h</text>\n  <text class=\"sub\" x=\"310\" y=\"360\" text-anchor=\"middle\">Oxígeno, dos vías, monitor, ECG, ecografía, UCI y tratamiento de la causa</text>\n</svg>"
    },
    "contexto": "Un paciente con la presión baja, la piel fría y confuso es una emergencia en la que el médico general tiene minutos para decidir qué tipo de shock es, porque el tratamiento de uno es el veneno del otro: el hipovolémico necesita volumen, el cardiogénico se ahoga con el volumen, el obstructivo necesita que alguien quite el obstáculo y el séptico necesita antibiótico y vasopresor. El EUNACOM pregunta el perfil hemodinámico de cada uno (gasto, presión de llenado, resistencia), el vasopresor de primera línea en el shock cardiogénico y la medida que realmente cambia el pronóstico después de un infarto: abrir la arteria.",
    "contentSections": [
      {
        "subhead": "1. Qué es el Shock y Cómo se Reconoce a la Cabecera",
        "paragraphs": [
          "El <strong>shock</strong> es un estado de <strong>hipoperfusión tisular aguda</strong>: la sangre que llega a los órganos no alcanza para cubrir sus necesidades de oxígeno, las células pasan a metabolismo anaerobio y se acumulan <strong>lactato</strong> y acidosis. La presión arterial media (PAM) es el producto del <strong>gasto cardíaco (GC) por la resistencia vascular sistémica (RVS)</strong>, y el gasto depende de la frecuencia, la precarga, la contractilidad y la poscarga: el shock aparece cuando falla alguno de esos eslabones. La hipotensión puede faltar al principio (la taquicardia y la vasoconstricción la compensan); lo que define el shock es la <strong>hipoperfusión</strong>.",
          "<strong>Signos de hipoperfusión</strong> (los que debes buscar sin esperar exámenes): alteración del estado de conciencia (confusión, somnolencia), <strong>oliguria</strong> (< 0,5 mL/kg/h), piel fría, pálida o moteada con <strong>llenado capilar lento</strong> (> 3 segundos, salvo en el shock distributivo inicial, que es «caliente»), taquicardia, taquipnea y <strong>lactato mayor de 2 mmol/L</strong>. La definición práctica: <strong>PAS < 90 mmHg, PAM < 65 mmHg o caída de 40 mmHg de la basal</strong>, con esos signos.",
          "La pregunta a la cabecera del enfermo es <strong>¿es un problema de volumen, de bomba, de tubería o de obstáculo?</strong> Tres datos lo orientan: la <strong>temperatura de la piel</strong> (fría en hipovolémico, cardiogénico y obstructivo; caliente al inicio del distributivo), las <strong>venas yugulares</strong> (planas en el hipovolémico y distributivo; ingurgitadas en el cardiogénico y obstructivo) y los <strong>pulmones</strong> (crépitos en el cardiogénico; limpios en el obstructivo). La <strong>ecografía a la cabecera</strong> (corazón, vena cava y pulmones) confirma la sospecha en pocos minutos."
        ]
      },
      {
        "subhead": "2. Los Cuatro Tipos de Shock y su Perfil Hemodinámico",
        "paragraphs": [
          "La monitorización con <strong>catéter de arteria pulmonar (Swan-Ganz)</strong> o los parámetros clínicos definen cuatro patrones, que el EUNACOM pregunta como «gasto, presión capilar pulmonar y resistencias» (Tabla 3.4):",
          "1) <strong>Shock cardiogénico:</strong> falla de bomba. <strong>Gasto cardíaco bajo (índice < 2,2 L/min/m²), presión capilar pulmonar alta (> 15-18 mmHg) y resistencia sistémica alta</strong> (vasoconstricción compensadora). Piel fría y sudorosa, yugulares ingurgitadas, crépitos.",
          "2) <strong>Shock hipovolémico</strong> (hemorragia, vómitos y diarrea, quemaduras, tercer espacio): <strong>gasto bajo, presión capilar pulmonar baja, resistencia alta</strong>; piel fría, mucosas secas, yugulares planas.",
          "3) <strong>Shock distributivo</strong> (sepsis, anafilaxia, neurogénico, insuficiencia suprarrenal): vasodilatación y fuga capilar; <strong>gasto cardíaco alto o normal, presión capilar pulmonar baja o normal, resistencia sistémica baja</strong>; piel caliente y enrojecida, llenado capilar rápido en la fase inicial (más tarde se enfría y el gasto cae).",
          "4) <strong>Shock obstructivo</strong> (<strong>embolia pulmonar masiva</strong>, <strong>taponamiento cardíaco</strong>, <strong>neumotórax a tensión</strong>): una barrera mecánica impide el llenado o el vaciamiento del corazón; <strong>gasto bajo, presión venosa central alta con presión capilar pulmonar variable (baja en la embolia pulmonar, alta e igualada con las presiones derechas en el taponamiento) y resistencia alta</strong>; yugulares ingurgitadas con pulmones limpios.",
          "Una forma útil de recordarlo: el <strong>gasto está bajo en tres de los cuatro</strong> (cardiogénico, hipovolémico, obstructivo) y solo alto en el distributivo; la <strong>resistencia está alta en tres</strong> (todos menos el distributivo); la <strong>presión de llenado distingue</strong> al cardiogénico (alta) del hipovolémico (baja), y las yugulares separan los de tubo vacío de los de bomba u obstáculo."
        ]
      },
      {
        "subhead": "3. Shock Cardiogénico: Definición, Causas y Diagnóstico",
        "paragraphs": [
          "El <strong>shock cardiogénico</strong> es la hipoperfusión por <strong>falla de la bomba</strong> con volumen intravascular adecuado: <strong>PAS < 90 mmHg (o PAM < 65) sostenida más de 30 minutos, o necesidad de vasopresores, con signos de hipoperfusión</strong> (oliguria, extremidades frías, alteración de conciencia, lactato > 2 mmol/L) y <strong>congestión pulmonar o presiones de llenado elevadas</strong>. En el infarto es el <strong>Killip IV</strong>; corresponde al perfil «frío y húmedo» de Forrester (Tema 3.3).",
          "<strong>Causas:</strong> el <strong>infarto agudo del miocardio</strong> es la principal (alrededor de 80%): por pérdida extensa de músculo (infarto anterior grande o infartos repetidos) o por <strong>complicaciones mecánicas</strong> (rotura del músculo papilar con insuficiencia mitral aguda, comunicación interventricular, rotura de pared libre con taponamiento). Otras causas: <strong>miocarditis fulminante</strong>, miocardiopatía dilatada descompensada, <strong>valvulopatía aguda</strong> (endocarditis, disfunción protésica), <strong>taquiarritmias o bradiarritmias</strong> graves, <strong>miocardiopatía de Takotsubo</strong>, <strong>intoxicaciones</strong> (betabloqueadores, calcioantagonistas), <strong>miocardiopatía periparto</strong> y el infarto del ventrículo derecho.",
          "<strong>Diagnóstico:</strong> ECG de 12 derivaciones inmediato (isquemia, arritmia, bloqueo), <strong>troponina</strong>, lactato, creatinina, gases arteriales, <strong>ecocardiograma urgente</strong> (función de ambos ventrículos, válvulas, derrame pericárdico, comunicaciones) y radiografía de tórax. La <strong>coronariografía</strong> es parte del manejo en todo shock con sospecha de origen isquémico. Se vigilan lactato (marcador de respuesta), diuresis y función renal y hepática (shock hepático y renal)."
        ]
      },
      {
        "subhead": "4. Tratamiento del Shock Cardiogénico: Abrir la Arteria, Sostener la Presión y el Gasto",
        "paragraphs": [
          "<strong>Tratamiento etiológico (lo que más cambia la sobrevida): reperfusión.</strong> En el infarto con shock se indica <strong>angioplastía primaria inmediata</strong> de la arteria culpable, <strong>sin importar el tiempo de evolución</strong> y aun cuando pasen más de 120 minutos; la fibrinólisis solo si no hay hemodinamia disponible. Las <strong>complicaciones mecánicas</strong> requieren cirugía de urgencia. Las <strong>arritmias</strong> se tratan según su tipo (cardioversión eléctrica de la taquiarritmia inestable, marcapaso en la bradicardia) y el <strong>taponamiento</strong> con pericardiocentesis.",
          "<strong>Soporte hemodinámico:</strong> 1) <strong>Vasopresor de primera línea: noradrenalina</strong> (0,05-1 mcg/kg/min en infusión continua) para llevar la PAM a ≥ 65 mmHg: tiene menos arritmias y menor mortalidad que la dopamina. 2) <strong>Inótropo: dobutamina</strong> (2,5-20 mcg/kg/min), que aumenta la contractilidad por el receptor beta-1; si hay hipotensión, se asocia a noradrenalina. Alternativas: milrinona o levosimendán. 3) <strong>Volumen:</strong> el shock cardiogénico está congestionado y no se rellena con líquidos; solo un bolo de 250 mL si hay claros signos de hipovolemia (ventrículo derecho como en el infarto del VD, sangrado, vómitos). 4) <strong>Oxígeno y ventilación:</strong> VNI o intubación si hay hipoxemia grave; cuidado con la presión positiva alta en el infarto del VD.",
          "<strong>Soporte circulatorio mecánico</strong> (en centros con UCI cardiológica): balón de contrapulsación intraaórtico (ya no de rutina), dispositivos de asistencia ventricular percutáneos (Impella) y <strong>ECMO venoarterial</strong> como puente a la recuperación, al trasplante o a la asistencia ventricular definitiva. La <strong>mortalidad</strong> del shock cardiogénico sigue siendo de 40-50%, por lo que la derivación precoz a un centro con hemodinamia y UCI es parte de la conducta del médico general.",
          "<strong>En los otros shocks</strong> (breve recordatorio para el diagnóstico diferencial): hipovolémico → volumen o sangre y control de la fuente; <strong>séptico</strong> → antibiótico en la primera hora, 30 mL/kg de cristaloide y noradrenalina para PAM ≥ 65; <strong>anafiláctico</strong> → <strong>adrenalina intramuscular</strong> 0,3-0,5 mg; <strong>neurogénico</strong> → volumen y vasopresor; <strong>obstructivo</strong> → tratar la causa (trombolisis en el TEP con shock, pericardiocentesis en el taponamiento, descompresión en el neumotórax a tensión)."
        ]
      },
      {
        "subhead": "5. Los Otros Tres Shocks en Detalle: Cómo se Distinguen del Cardiogénico",
        "paragraphs": [
          "<strong>Shock hipovolémico.</strong> La causa más frecuente es la hemorragia (digestiva, traumática, obstétrica, aneurisma roto) y la pérdida de líquidos (vómitos, diarrea, quemaduras, poliuria). Según el porcentaje de volemia perdido: con 15% (hasta 750 mL) casi no hay signos; con 15-30% aparece taquicardia y la presión de pulso disminuye; con 30-40% hay hipotensión, oliguria y confusión; sobre 40% hay shock grave y riesgo vital inmediato. Se trata con <strong>volumen</strong> (cristaloide tibio y, en la hemorragia, sangre) y <strong>control de la fuente</strong> (compresión, cirugía, endoscopía); los vasopresores solo como puente. Las <strong>yugulares planas</strong> y la respuesta al volumen lo distinguen del cardiogénico.",
          "<strong>Shock distributivo.</strong> En la <strong>sepsis</strong>, los mediadores inflamatorios causan vasodilatación y fuga capilar; el gasto es alto con resistencia baja (piel caliente) y luego puede caer (piel fría) por la depresión miocárdica. Se inicia en la <strong>primera hora</strong> el <strong>antibiótico</strong> de amplio espectro, <strong>cristaloide 30 mL/kg</strong> y <strong>noradrenalina</strong> si no se logra PAM ≥ 65, con búsqueda del foco. La <strong>anafilaxia</strong> (urticaria, angioedema, broncoespasmo, hipotensión tras un alérgeno) se trata con <strong>adrenalina intramuscular 0,3-0,5 mg</strong> en el muslo, repetible cada 5-15 minutos, más volumen. El <strong>shock neurogénico</strong> (lesión medular alta) se reconoce por la hipotensión con <strong>bradicardia</strong> y piel caliente y seca. El shock por <strong>insuficiencia suprarrenal</strong> (corticoides suspendidos bruscamente, hemorragia suprarrenal) responde a hidrocortisona.",
          "<strong>Shock obstructivo.</strong> El <strong>taponamiento cardíaco</strong> se sospecha con la tríada de Beck (hipotensión, yugulares ingurgitadas y ruidos cardíacos apagados) y pulso paradójico, y se confirma con ecocardiograma; el tratamiento es la pericardiocentesis (Tema 5.6). La <strong>embolia pulmonar masiva</strong> cursa con disnea súbita, hipoxemia, dilatación del ventrículo derecho en la ecografía y campos limpios; se trata con anticoagulación y <strong>trombolisis</strong> (Tema 5.9). El <strong>neumotórax a tensión</strong> es un diagnóstico clínico (ausencia de murmullo, desviación traqueal, timpanismo) que se resuelve con descompresión con aguja y drenaje, sin esperar la radiografía."
        ]
      },
      {
        "subhead": "6. Enfoque Práctico en Urgencia: Qué Hacer en los Primeros Minutos y Errores Frecuentes",
        "paragraphs": [
          "<strong>Primeros pasos para todo shock:</strong> asegurar la vía aérea y la oxigenación (oxígeno, VNI o intubación según el caso), dos vías venosas gruesas, monitor continuo (ECG, presión, saturación), <strong>ECG de 12 derivaciones</strong>, gases arteriales y <strong>lactato</strong>, hemograma, creatinina, electrolitos, troponina, pruebas de coagulación y grupo sanguíneo; sonda urinaria para medir la diuresis. La <strong>ecografía a la cabecera</strong> (protocolo RUSH) busca derrame pericárdico, dilatación del ventrículo derecho, función del ventrículo izquierdo, colapso de la vena cava inferior, líneas B pulmonares y neumotórax. Meta: PAM ≥ 65 mmHg, lactato en descenso, diuresis > 0,5 mL/kg/h y mejoría de la conciencia y de la piel.",
          "<strong>Errores clásicos que se castigan en el examen y en la práctica:</strong> 1) <strong>dar litros de suero</strong> al shock cardiogénico (empeora el edema pulmonar); 2) dar <strong>nitroglicerina o diuréticos</strong> al paciente hipotenso con shock; 3) usar <strong>dopamina</strong> como primera elección (más arritmias y mortalidad que la noradrenalina); 4) <strong>esperar los resultados</strong> de laboratorio antes de iniciar el tratamiento; 5) olvidar la <strong>complicación mecánica</strong> del infarto (soplo nuevo) o el infarto del ventrículo derecho (yugulares altas con pulmones limpios, donde sí se da volumen); 6) <strong>betabloqueador intravenoso</strong> por la taquicardia, que es compensadora; 7) trasladar sin estabilizar ni coordinar con el centro de destino.",
          "Un último concepto: el <strong>índice de shock</strong> (frecuencia cardíaca dividida por la PAS) mayor de 0,9-1,0 anticipa el deterioro aun con presión «aceptable», y las <strong>etapas SCAI</strong> del shock cardiogénico (A «en riesgo», B «inicial», C «clásico», D «deterioro» y E «extremo») sirven para decidir cuánto escalar el soporte. El paciente en shock cardiogénico se deriva siempre a un centro con UCI cardiológica y hemodinamia, con médico en la ambulancia y las infusiones de noradrenalina ya iniciadas."
        ]
      }
    ],
    "table": {
      "title": "Patrón Hemodinámico de los Cuatro Tipos de Shock",
      "headers": [
        "Tipo de shock",
        "Gasto cardíaco",
        "Presión de llenado (PCP / PVC)",
        "Resistencia vascular",
        "Piel y yugulares"
      ],
      "rows": [
        [
          "Cardiogénico",
          "Muy bajo ↓",
          "PCP alta ↑",
          "Alta ↑",
          "Piel fría y sudorosa; yugulares altas; crépitos"
        ],
        [
          "Hipovolémico",
          "Bajo ↓",
          "PCP y PVC bajas ↓↓",
          "Alta ↑",
          "Piel fría; mucosas secas; yugulares planas"
        ],
        [
          "Distributivo (séptico, anafiláctico)",
          "Alto o normal ↑",
          "Baja o normal",
          "Baja ↓↓",
          "Piel caliente y enrojecida (al inicio); yugulares bajas"
        ],
        [
          "Obstructivo (TEP, taponamiento, neumotórax)",
          "Muy bajo ↓",
          "PVC alta; PCP baja en TEP, alta en taponamiento",
          "Alta ↑",
          "Piel fría; yugulares muy altas; pulmones limpios"
        ]
      ]
    },
    "vignette": "Hombre de 65 años, con infarto anterior hace 3 días tratado de forma tardía, llega confuso, con PA 70/40 mmHg, FC 115 lpm, extremidades frías y cianóticas, diuresis de 100 mL en 8 horas y yugulares ingurgitadas. Presenta crépitos hasta los campos medios. El lactato es de 5 mmol/L. El ecocardiograma muestra aquinesia anterior extensa, FEVI de 20% y ausencia de derrame pericárdico ni soplo nuevo.",
    "explicacion": "Es un shock cardiogénico por infarto anterior extenso (perfil frío y húmedo, Killip IV). La conducta es: monitorización continua y traslado a UCI cardiológica con hemodinamia; noradrenalina en infusión para PAM ≥ 65 mmHg y, si el gasto sigue bajo, dobutamina; oxígeno o ventilación no invasiva según la hipoxemia; no se dan bolos de volumen (está congestionado); coronariografía urgente con angioplastía de la arteria culpable aunque hayan pasado más de 12 horas (el shock es la excepción en que se reperfunde tarde); y soporte circulatorio mecánico si no responde. Es esencial descartar una complicación mecánica (el ecocardiograma no muestra soplo ni derrame).",
    "keyPoints": [
      "Shock = hipoperfusión: oliguria, confusión, piel fría o moteada, lactato > 2 mmol/L; la hipotensión (PAS < 90 o PAM < 65) puede faltar al inicio.",
      "Cuatro tipos: cardiogénico (gasto bajo, PCP alta, RVS alta), hipovolémico (gasto bajo, PCP baja, RVS alta), distributivo (gasto alto, RVS baja, piel caliente) y obstructivo (gasto bajo, PVC alta, yugulares ingurgitadas con pulmones limpios).",
      "Causa principal del shock cardiogénico: infarto agudo del miocardio (Killip IV); descartar una complicación mecánica con ecocardiograma.",
      "El tratamiento que cambia la sobrevida es la reperfusión: angioplastía primaria sin importar el tiempo de evolución.",
      "Vasopresor de primera línea: noradrenalina (menos arritmias y menor mortalidad que la dopamina); inótropo: dobutamina.",
      "En el shock cardiogénico no se rellena con volumen: el paciente está congestionado, salvo infarto del ventrículo derecho o hipovolemia clara.",
      "Soporte mecánico (balón de contrapulsación, Impella, ECMO venoarterial) en UCI cardiológica; mortalidad 40-50%.",
      "Anafilaxia: adrenalina intramuscular; sepsis: antibiótico en la primera hora y noradrenalina; TEP masivo: trombolisis; taponamiento: pericardiocentesis."
    ],
    "questions": [
      {
        "stem": "Hombre de 58 años en shock cardiogénico refractario a volumen tras un infarto agudo del miocardio. Presenta PA 75/45 mmHg y signos de hipoperfusión. ¿Cuál es el vasopresor de primera línea recomendado para restaurar la presión arterial media?",
        "options": [
          {
            "id": "A",
            "text": "Noradrenalina en infusión continua"
          },
          {
            "id": "B",
            "text": "Dopamina en dosis altas"
          },
          {
            "id": "C",
            "text": "Fenilefrina en bolo"
          },
          {
            "id": "D",
            "text": "Isoproterenol endovenoso"
          },
          {
            "id": "E",
            "text": "Epinefrina subcutánea"
          }
        ],
        "correcta": "A",
        "explicacion": "La noradrenalina es el vasopresor de primera línea en el shock cardiogénico: su efecto alfa-1 eleva la presión arterial media con un moderado efecto beta-1, y produce menos arritmias y menor mortalidad que la dopamina.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un paciente en shock presenta en el monitoreo hemodinámico: gasto cardíaco aumentado, resistencia vascular sistémica disminuida y presión capilar pulmonar baja. La piel está caliente y enrojecida. ¿Cuál es el tipo de shock?",
        "options": [
          {
            "id": "A",
            "text": "Shock distributivo (séptico)"
          },
          {
            "id": "B",
            "text": "Shock cardiogénico"
          },
          {
            "id": "C",
            "text": "Shock hipovolémico"
          },
          {
            "id": "D",
            "text": "Shock obstructivo por taponamiento"
          },
          {
            "id": "E",
            "text": "Shock obstructivo por embolia pulmonar masiva"
          }
        ],
        "correcta": "A",
        "explicacion": "Gasto alto con resistencia baja y presión de llenado baja o normal es el patrón del shock distributivo (sepsis, anafilaxia, neurogénico): vasodilatación periférica con piel caliente. Los otros tres tipos cursan con gasto bajo y resistencia alta.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un paciente con infarto anterior de 3 días presenta hipotensión de 70/40 mmHg, extremidades frías, oliguria, yugulares ingurgitadas y crépitos hasta los campos medios. ¿Cuál es la conducta inicial más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Noradrenalina y dobutamina, y traslado urgente para coronariografía y angioplastía"
          },
          {
            "id": "B",
            "text": "Bolo de 1.000 mL de suero fisiológico y reevaluar"
          },
          {
            "id": "C",
            "text": "Nitroglicerina en infusión y furosemida endovenosa"
          },
          {
            "id": "D",
            "text": "Betabloqueador endovenoso para controlar la taquicardia"
          },
          {
            "id": "E",
            "text": "Fibrinólisis con estreptoquinasa y alta si mejora"
          }
        ],
        "correcta": "A",
        "explicacion": "Es un shock cardiogénico con congestión: se sostiene la presión con noradrenalina y el gasto con dobutamina, y se revasculariza la arteria culpable con angioplastía aunque hayan pasado más de 12 horas. El volumen empeora la congestión; los vasodilatadores y diuréticos bajan una presión que ya está baja; el betabloqueador deprime el gasto.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "3.4§0 · 3.4§1 · 3.4§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-20",
    "classId": "cardio-20",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Insuficiencia Cardíaca y Enfermedades del Miocardio",
    "topicLabel": "3.5",
    "title": "Miocardiopatía Hipertrófica y Muerte Súbita del Joven",
    "perfilCode": "1.01.1.020",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No es problema GES",
    "reconstrucciones": "",
    "frecuencia": "Alta · Síncope de esfuerzo y muerte súbita en el joven, soplo que aumenta con Valsalva y de pie, fármacos prohibidos (nitratos, digoxina, diuréticos en exceso) y estudio familiar",
    "svg": null,
    "algoTitle": "Algoritmo de sospecha, confirmación y manejo de la miocardiopatía hipertrófica",
    "diagram": {
      "title": "Algoritmo de Sospecha, Confirmación y Manejo de la Miocardiopatía Hipertrófica",
      "svg": "<svg viewBox=\"0 0 620 420\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar35\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar35)}\n  </style>\n  <rect class=\"b\" x=\"50\" y=\"8\" width=\"520\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Joven con síncope o disnea de esfuerzo, soplo eyectivo o familiar con muerte súbita</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Dolor torácico, palpitaciones, deportista con mareos · ECG anormal en un chequeo</text>\n  <path class=\"ln\" d=\"M310,48 V62\"/>\n  <rect class=\"dec\" x=\"50\" y=\"62\" width=\"520\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"76\" text-anchor=\"middle\" font-weight=\"700\">ECG + ecocardiograma (± resonancia magnética)</text>\n  <text class=\"sub\" x=\"310\" y=\"88\" text-anchor=\"middle\">ECG: HVI, ondas Q profundas, T invertidas · Eco: septo ≥ 15 mm (≥ 13 con familiar afectado) sin otra causa</text>\n  <path class=\"ln\" d=\"M310,102 V116\"/>\n  <rect class=\"acc\" x=\"120\" y=\"116\" width=\"380\" height=\"36\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"130\" text-anchor=\"middle\" font-weight=\"700\">Miocardiopatía hipertrófica</text>\n  <text class=\"accS\" x=\"310\" y=\"142\" text-anchor=\"middle\">Sarcómero, autosómica dominante · 1 de cada 500</text>\n  <path class=\"ln\" d=\"M310,152 V166\"/>\n  <rect class=\"dec\" x=\"90\" y=\"166\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"180\" text-anchor=\"middle\" font-weight=\"700\">¿Gradiente en el tracto de salida ≥ 30 mmHg (reposo o con Valsalva)?</text>\n  <text class=\"sub\" x=\"310\" y=\"192\" text-anchor=\"middle\">Movimiento sistólico anterior de la mitral (SAM) contra el septo</text>\n  <path class=\"ln\" d=\"M310,206 V218 H157 V232\"/>\n  <path class=\"ln\" d=\"M310,206 V218 H463 V232\"/>\n  <text class=\"lbl\" x=\"92\" y=\"228\">Sí</text>\n  <text class=\"lbl\" x=\"425\" y=\"228\">No</text>\n  <rect class=\"b\" x=\"20\" y=\"232\" width=\"275\" height=\"66\" rx=\"3\"/>\n  <text class=\"t\" x=\"157.5\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Obstructiva</text>\n  <text class=\"sub\" x=\"157.5\" y=\"258\" text-anchor=\"middle\">Betabloqueador (o verapamilo) · disopiramida</text>\n  <text class=\"sub\" x=\"157.5\" y=\"268\" text-anchor=\"middle\">Mavacamten · miectomía septal o ablación</text>\n  <text class=\"sub\" x=\"157.5\" y=\"278\" text-anchor=\"middle\">Evitar nitratos, diuréticos altos, digoxina</text>\n  <rect class=\"b\" x=\"325\" y=\"232\" width=\"275\" height=\"66\" rx=\"3\"/>\n  <text class=\"t\" x=\"462.5\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">No obstructiva</text>\n  <text class=\"sub\" x=\"462.5\" y=\"258\" text-anchor=\"middle\">Betabloqueador o verapamilo para la disnea</text>\n  <text class=\"sub\" x=\"462.5\" y=\"268\" text-anchor=\"middle\">Diurético en dosis baja si hay congestión</text>\n  <text class=\"sub\" x=\"462.5\" y=\"278\" text-anchor=\"middle\">Tratar fibrilación auricular y anticoagular</text>\n  <path class=\"ln\" d=\"M157,298 V316 H310 V326\"/>\n  <path class=\"ln\" d=\"M463,298 V316 H310\"/>\n  <rect class=\"warn\" x=\"60\" y=\"326\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"310\" y=\"340\" text-anchor=\"middle\" font-weight=\"700\">Estratificar el riesgo de muerte súbita (HCM Risk-SCD)</text>\n  <text class=\"sub warnT\" x=\"310\" y=\"352\" text-anchor=\"middle\">Síncope, TV no sostenida, septo ≥ 30 mm, familiar con muerte súbita, aneurisma apical → DAI</text>\n  <path class=\"ln\" d=\"M310,370 V382\"/>\n  <rect class=\"b\" x=\"60\" y=\"382\" width=\"500\" height=\"32\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"401.5\" text-anchor=\"middle\" font-weight=\"700\">Estudio a los familiares de primer grado · no deporte competitivo intenso</text>\n</svg>"
    },
    "contexto": "Un futbolista de 19 años que se desmaya en plena cancha, o un hermano que murió de súbito a los 22 años, son las historias que hacen pensar en la miocardiopatía hipertrófica, la cardiopatía hereditaria más frecuente y una de las causas principales de muerte súbita del deportista joven. El médico general es quien oye el soplo en el control deportivo, quien pregunta por los antecedentes familiares y quien, sin saberlo, puede empeorarla con un diurético o un nitrato. El EUNACOM pregunta el cuadro clínico clásico, el comportamiento del soplo con las maniobras (que es lo que la diferencia de la estenosis aórtica) y lo que está prohibido hacer.",
    "contentSections": [
      {
        "subhead": "1. Qué es y Por Qué se Hereda: Genética y Fisiopatología",
        "paragraphs": [
          "La <strong>miocardiopatía hipertrófica (MCH)</strong> es una enfermedad del músculo cardíaco caracterizada por una <strong>hipertrofia ventricular izquierda inexplicada</strong>, habitualmente <strong>asimétrica (septal)</strong>, que no se debe a hipertensión, estenosis aórtica ni a otra sobrecarga. La definición ecocardiográfica es un grosor de pared de <strong>≥ 15 mm</strong> en un adulto (≥ 13 mm si hay un familiar afectado). Afecta a <strong>1 de cada 500 personas</strong> y se hereda de forma <strong>autosómica dominante</strong>: mutaciones en genes de las proteínas del sarcómero (cadena pesada de la beta-miosina, <em>MYH7</em>, y proteína C de unión a la miosina, <em>MYBPC3</em>, son las más frecuentes). Cada hijo de un afectado tiene 50% de probabilidad de heredarla, y la expresión es muy variable: algunos nunca tienen síntomas y otros mueren jóvenes.",
          "Los miocitos están hipertrofiados y <strong>desorganizados</strong> («arremolinados», <em>disarray</em>) con fibrosis intersticial. Esto produce cuatro alteraciones: 1) <strong>disfunción diastólica</strong> (el ventrículo rígido se llena mal y eleva la presión de la aurícula; causa de la disnea); 2) <strong>obstrucción dinámica del tracto de salida del ventrículo izquierdo</strong> en cerca de dos tercios de los pacientes; 3) <strong>isquemia</strong> por desbalance entre la masa hipertrófica y la microcirculación (angina con coronarias normales); y 4) un <strong>sustrato arritmogénico</strong> (fibrosis y desorganización) que genera taquicardia ventricular y fibrilación auricular.",
          "<strong>Mecanismo de la obstrucción:</strong> durante la sístole el flujo rápido por el tracto de salida angosto, junto al septo engrosado, «succiona» la valva anterior de la mitral hacia el septo (efecto Venturi): es el <strong>movimiento sistólico anterior (SAM)</strong>. Esto cierra el tracto de salida a mitad de la sístole (soplo eyectivo) y, además, impide el cierre completo de la mitral (<strong>insuficiencia mitral</strong> asociada, con soplo holosistólico en el ápex). Todo lo que <strong>reduce el volumen del ventrículo</strong> (menos precarga o menos poscarga, mayor contractilidad, taquicardia) acerca las estructuras y aumenta la obstrucción; todo lo que lo llena la disminuye. De ahí salen las maniobras y los fármacos prohibidos."
        ]
      },
      {
        "subhead": "2. Cuadro Clínico y Examen Físico: el Soplo que Cambia con las Maniobras",
        "paragraphs": [
          "Muchos pacientes son <strong>asintomáticos</strong> y se diagnostican por un soplo, un ECG anormal o el estudio de un familiar. Los síntomas son <strong>disnea de esfuerzo</strong> (la más frecuente), <strong>angina</strong>, <strong>palpitaciones</strong> (fibrilación auricular o extrasístoles), <strong>presíncope y síncope de esfuerzo</strong> (obstrucción o arritmia ventricular) y, en la forma más temida, la <strong>muerte súbita</strong>, que a veces es la primera manifestación en un atleta joven. El síncope durante el ejercicio, no al pararse ni con la micción o la tos, orienta a causa cardíaca: la pregunta real de julio de 2019 con una adolescente de 14 años pide justamente el antecedente que sugiere origen cardiogénico, y la respuesta es «relación con el ejercicio».",
          "<strong>Examen físico:</strong> pulso carotídeo de ascenso rápido y a veces bífido (<em>bisferiens</em>), <strong>choque de la punta sostenido</strong> y doble («impulso apical doble» por la contracción auricular sobre un ventrículo rígido), cuarto ruido, y un <strong>soplo sistólico eyectivo (en rombo) en el borde esternal izquierdo y el ápex</strong>, que no se irradia a las carótidas como el de la estenosis aórtica y que se acompaña de un soplo holosistólico en el ápex cuando hay insuficiencia mitral por SAM.",
          "<strong>El soplo cambia con la precarga (la pregunta clave del examen):</strong> <strong>AUMENTA</strong> con las maniobras que <strong>reducen el volumen ventricular</strong>: <strong>Valsalva (fase de esfuerzo), ponerse de pie desde cuclillas o desde la posición supina, extrasístole y nitratos</strong>. <strong>DISMINUYE</strong> con las que <strong>aumentan el volumen o la poscarga</strong>: <strong>cuclillas (squatting), elevar las piernas y el apretón de manos isométrico (handgrip)</strong>. Es lo opuesto a la mayoría de los soplos: en la <strong>estenosis aórtica</strong> el soplo disminuye con Valsalva y de pie y aumenta en cuclillas; el de la <strong>insuficiencia mitral</strong> sube con el handgrip y casi no cambia con Valsalva; el <strong>prolapso mitral</strong> es el otro soplo que aumenta de pie y con Valsalva (Tabla 3.5)."
        ]
      },
      {
        "subhead": "3. Diagnóstico: ECG, Ecocardiograma, Resonancia y Estudio Familiar",
        "paragraphs": [
          "<strong>Electrocardiograma:</strong> casi siempre anormal. <strong>Hipertrofia ventricular izquierda</strong> con S profundas en V1-V2 y R altas en V5-V6, <strong>ondas Q profundas y angostas en las derivaciones inferiores y laterales</strong> (de la hipertrofia septal, que no son un infarto), ondas T invertidas gigantes en las precordiales (típico de la variante apical), desviación del eje y, a veces, fibrilación auricular. La pregunta de 2013 describe una Q en DII, DIII y aVF y una S profunda de V1 a V3 en un joven que se desmaya haciendo ejercicio, con soplo que aumenta con Valsalva: es una MCH.",
          "<strong>Ecocardiograma Doppler transtorácico:</strong> es el <strong>examen diagnóstico</strong>. Muestra la hipertrofia asimétrica del septo (≥ 15 mm; razón septo/pared posterior > 1,3), el <strong>SAM</strong>, el gradiente en el tracto de salida (con reposo y con Valsalva o ejercicio: un gradiente <strong>≥ 30 mmHg define la obstrucción</strong>, y ≥ 50 mmHg es el umbral para tratamiento invasivo), la insuficiencia mitral, la función diastólica y el tamaño de la aurícula izquierda. La <strong>resonancia magnética cardíaca</strong> mide el grosor, detecta la forma apical y cuantifica la <strong>fibrosis (realce tardío con gadolinio)</strong>, que predice arritmias. El <strong>Holter de 24-48 horas</strong> busca taquicardia ventricular no sostenida y fibrilación auricular; la <strong>prueba de esfuerzo</strong> evalúa la capacidad y la respuesta de la presión arterial.",
          "<strong>Diagnóstico diferencial:</strong> la <strong>hipertrofia del atleta</strong> (septo habitualmente < 13-15 mm, cavidad dilatada, regresa con el desentrenamiento, sin fibrosis), la <strong>cardiopatía hipertensiva</strong> (hipertrofia simétrica en un hipertenso), la <strong>estenosis aórtica</strong>, la <strong>amiloidosis</strong> y otras enfermedades infiltrativas o de depósito (Fabry, Danon) y los síndromes genéticos (Noonan, ataxia de Friedreich). <strong>Estudio familiar:</strong> a todo familiar de primer grado se le hace ECG y ecocardiograma, y se ofrece estudio genético; los niños se controlan desde la adolescencia (cada 1-2 años)."
        ]
      },
      {
        "subhead": "4. Tratamiento: Qué Dar, Qué Prohibir y Cuándo Operar",
        "paragraphs": [
          "<strong>Medidas generales:</strong> evitar la <strong>deshidratación</strong> y el alcohol (reducen el volumen ventricular y aumentan la obstrucción), tratar la hipertensión y la obesidad, y <strong>restringir el ejercicio competitivo y los esfuerzos isométricos intensos</strong> (las guías recientes permiten ejercicio recreativo moderado con decisión compartida). Los pacientes asintomáticos sin obstrucción no necesitan fármacos.",
          "<strong>Fármacos de primera línea para los síntomas:</strong> <strong>betabloqueadores</strong> (propranolol, metoprolol, bisoprolol): reducen la frecuencia, alargan la diástole, mejoran el llenado y disminuyen el gradiente. Si no se toleran, <strong>verapamilo o diltiazem</strong> (solo si no hay obstrucción grave ni hipotensión). Segunda línea en la forma obstructiva: <strong>disopiramida</strong> (con un nodal bloqueador por el riesgo de aceleración de la conducción) y, en pacientes sintomáticos con obstrucción (NYHA II-III), <strong>mavacamten</strong> (inhibidor de la miosina cardíaca que reduce la contractilidad y el gradiente, con control ecocardiográfico por la posibilidad de caída de la FEVI).",
          "<strong>Fármacos CONTRAINDICADOS o que deben evitarse en la forma obstructiva:</strong> <strong>nitratos y otros vasodilatadores</strong> (nifedipino, amlodipino en dosis altas, hidralazina, IECA/ARA II con cuidado), <strong>digoxina</strong> y otros inótropos positivos (dobutamina, dopamina, milrinona) y <strong>diuréticos en dosis altas</strong>: todos reducen el volumen ventricular o aumentan la contractilidad y agravan la obstrucción. Por la misma razón, el paciente con MCH y shock se trata con volumen y fenilefrina, no con inótropos. La <strong>fibrilación auricular</strong> se maneja con anticoagulación aunque el puntaje CHA₂DS₂-VASc sea bajo, y con control de frecuencia o ritmo (amiodarona).",
          "<strong>Terapia de reducción septal</strong> para pacientes con síntomas refractarios y gradiente ≥ 50 mmHg: <strong>miectomía septal quirúrgica</strong> (de elección en jóvenes, con mortalidad baja en centros con experiencia) o <strong>ablación septal con alcohol</strong>. En la evolución a la fase dilatada («burnt-out») con FEVI baja se trata como IC con fracción reducida y se evalúa un trasplante."
        ]
      },
      {
        "subhead": "5. Muerte Súbita del Joven y Estratificación de Riesgo: Quién Necesita un Desfibrilador",
        "paragraphs": [
          "La <strong>muerte súbita cardíaca del deportista joven</strong> (menores de 35 años) ocurre con mayor frecuencia por <strong>miocardiopatía hipertrófica</strong>; siguen las <strong>anomalías congénitas de las arterias coronarias</strong>, la <strong>miocardiopatía arritmogénica del ventrículo derecho</strong>, las <strong>canalopatías</strong> (síndrome de QT largo, síndrome de Brugada, taquicardia ventricular catecolaminérgica), el <strong>síndrome de Wolff-Parkinson-White</strong>, la <strong>miocarditis</strong>, la disección aórtica del síndrome de Marfan y la <strong>conmoción cardíaca</strong> (<em>commotio cordis</em>: golpe en el tórax en una fase vulnerable de la repolarización). Las señales de alarma son el <strong>síncope durante el ejercicio</strong>, el dolor torácico con el esfuerzo, la palpitación súbita, la disnea inexplicada y el <strong>antecedente familiar de muerte súbita antes de los 50 años</strong>.",
          "En la MCH se estima el riesgo con el puntaje <strong>HCM Risk-SCD</strong>, que considera la edad, el grosor máximo de la pared, el gradiente, el tamaño de la aurícula izquierda, el antecedente familiar de muerte súbita, la taquicardia ventricular no sostenida y el síncope inexplicado. Los <strong>factores de mayor riesgo</strong> son: <strong>paro cardíaco previo o taquicardia ventricular sostenida (prevención secundaria: DAI siempre)</strong>, <strong>familiar con muerte súbita</strong> por MCH, <strong>síncope inexplicado reciente</strong>, <strong>grosor ≥ 30 mm</strong>, <strong>aneurisma apical</strong> y fibrosis extensa en la resonancia, y caída de la presión arterial con el ejercicio. Con riesgo a 5 años ≥ 6% se recomienda considerar el <strong>desfibrilador automático implantable (DAI)</strong> en <strong>prevención primaria</strong>; entre 4% y 6%, individualizar.",
          "<strong>Conducta del médico general:</strong> ante un joven con síncope de esfuerzo o soplo que aumenta con Valsalva, <strong>suspende la actividad deportiva competitiva</strong>, <strong>no inicia diuréticos, nitratos ni digoxina</strong>, solicita ECG y ecocardiograma y <strong>deriva a cardiología</strong> con estudio familiar. La pregunta de julio de 2016 (síncope jugando fútbol, disnea de esfuerzo, hermano fallecido a los 25 años, soplo eyectivo) tiene como respuesta la miocardiopatía hipertrófica, no el síndrome de Brugada ni el QT largo."
        ]
      }
    ],
    "table": {
      "title": "Efecto de las Maniobras sobre el Soplo Sistólico: Miocardiopatía Hipertrófica, Estenosis Aórtica, Insuficiencia Mitral y Prolapso Mitral",
      "headers": [
        "Maniobra (efecto sobre el retorno venoso)",
        "Miocardiopatía hipertrófica",
        "Estenosis aórtica",
        "Insuficiencia mitral",
        "Prolapso mitral"
      ],
      "rows": [
        [
          "Valsalva (disminuye la precarga)",
          "AUMENTA",
          "Disminuye",
          "Casi no cambia",
          "Aumenta (el clic se adelanta)"
        ],
        [
          "De pie (disminuye la precarga)",
          "AUMENTA",
          "Disminuye",
          "Disminuye levemente",
          "Aumenta"
        ],
        [
          "Cuclillas (aumenta la precarga y la poscarga)",
          "DISMINUYE",
          "Aumenta",
          "Aumenta",
          "Disminuye"
        ],
        [
          "Elevar las piernas (aumenta la precarga)",
          "DISMINUYE",
          "Aumenta",
          "Casi no cambia",
          "Disminuye"
        ],
        [
          "Handgrip isométrico (aumenta la poscarga)",
          "DISMINUYE",
          "Disminuye",
          "AUMENTA",
          "Disminuye"
        ],
        [
          "Nitrito de amilo o nitratos (disminuyen la precarga)",
          "AUMENTA",
          "Disminuye",
          "Disminuye",
          "Aumenta"
        ]
      ]
    },
    "vignette": "Hombre de 19 años, futbolista aficionado, consulta por disnea de esfuerzo y dos episodios de mareo con pérdida de conciencia breve durante los partidos. Un hermano murió de muerte súbita a los 22 años. PA 118/70 mmHg, FC 68 lpm. El choque de la punta es sostenido y en el borde esternal izquierdo se ausculta un soplo sistólico eyectivo III/VI que aumenta de forma marcada al hacer la maniobra de Valsalva y al ponerse de pie, y disminuye en cuclillas. El ECG muestra hipertrofia ventricular izquierda con ondas Q profundas en DII, DIII y aVF.",
    "explicacion": "El cuadro es una miocardiopatía hipertrófica obstructiva: síncope de esfuerzo, antecedente familiar de muerte súbita, soplo eyectivo que aumenta con las maniobras que reducen el volumen ventricular (Valsalva, bipedestación) y disminuye en cuclillas, y un ECG con hipertrofia y ondas Q septales. Conducta: suspender el deporte competitivo, solicitar ecocardiograma (grosor septal, SAM y gradiente), Holter y resonancia, iniciar un betabloqueador (bisoprolol o propranolol), no dar nitratos, diuréticos ni digoxina, estimar el riesgo de muerte súbita (síncope inexplicado y familiar fallecido son factores mayores: se evalúa un DAI) y estudiar con ECG y ecocardiograma a los familiares de primer grado.",
    "keyPoints": [
      "MCH: hipertrofia ventricular asimétrica inexplicada (septo ≥ 15 mm), enfermedad autosómica dominante del sarcómero (1 de cada 500); primera causa de muerte súbita del deportista joven.",
      "Clínica: disnea de esfuerzo, angina, palpitaciones, síncope de esfuerzo y antecedente familiar de muerte súbita; muchos son asintomáticos.",
      "El soplo eyectivo de la MCH AUMENTA con Valsalva, de pie y nitratos (menor volumen) y DISMINUYE en cuclillas, al elevar las piernas y con handgrip; en la estenosis aórtica ocurre lo contrario.",
      "ECG: HVI, ondas Q profundas inferolaterales, T invertidas gigantes; el ecocardiograma confirma (septo, SAM, gradiente ≥ 30 mmHg).",
      "Tratamiento: betabloqueador (o verapamilo) de primera línea; mavacamten o disopiramida en la obstructiva; miectomía septal si el gradiente es ≥ 50 mmHg y persisten los síntomas.",
      "Prohibidos en la forma obstructiva: nitratos y vasodilatadores, digoxina e inótropos, diuréticos en dosis altas y la deshidratación.",
      "DAI en prevención secundaria y en primaria según el riesgo (síncope inexplicado, familiar con muerte súbita, septo ≥ 30 mm, TV no sostenida, aneurisma apical).",
      "Suspender el deporte competitivo y estudiar con ECG y ecocardiograma a los familiares de primer grado."
    ],
    "questions": [
      {
        "stem": "Un paciente de 40 años consulta por un síncope, mientras jugaba fútbol, con recuperación completa. Además refiere disnea de esfuerzos que inició hace 3 meses y que ha aumentado lentamente. Su hermano murió súbitamente a los 25 años. Al examen físico se constata un soplo sistólico eyectivo, sin otras alteraciones. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "B",
            "text": "Síndrome de Brugada"
          },
          {
            "id": "C",
            "text": "Miocardiopatía hipertrófica"
          },
          {
            "id": "D",
            "text": "Síncome disautonómico"
          },
          {
            "id": "E",
            "text": "Síndrome de QT largo"
          }
        ],
        "correcta": "C",
        "explicacion": "Síncope durante el ejercicio, disnea de esfuerzo progresiva, un hermano fallecido de forma súbita a los 25 años y un soplo sistólico eyectivo: es una miocardiopatía hipertrófica clásica. El TEP no tiene antecedente familiar; el síndrome de Brugada y el QT largo producen síncope arrítmico pero sin soplo; el síncope disautonómico no ocurre durante el esfuerzo.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 41"
      },
      {
        "stem": "Paciente de 17 años, sin antecedentes, es traído a la urgencia por presentar síncope mientras realizaba ejercicio, no asociado a otros síntomas. Al examen físico se aprecia soplo sistólico que aumenta con maniobras de vansalva, sin otros hallazgos. Se estudia con electrocardiograma que muestra onda Q presente en DII, DIII y AVF, además S profunda de V1 a V3. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Miocardiopatía dilatada"
          },
          {
            "id": "B",
            "text": "Lipotimia"
          },
          {
            "id": "C",
            "text": "Soplo fisiológico"
          },
          {
            "id": "D",
            "text": "Miocardiopatía hipertrófica"
          },
          {
            "id": "E",
            "text": "Estenosis mitral"
          }
        ],
        "correcta": "D",
        "explicacion": "Síncope de esfuerzo en un adolescente, soplo sistólico que aumenta con Valsalva y un ECG con hipertrofia ventricular (S profunda en V1-V3) y ondas Q inferiores: miocardiopatía hipertrófica. El soplo fisiológico no cambia el ECG; la miocardiopatía dilatada y la estenosis mitral no producen un soplo que aumente con Valsalva.",
        "recTag": "EUNACOM Julio 2013 · Pregunta 179"
      },
      {
        "stem": "Una paciente de 14 años presenta caída al suelo, con inconsciencia de 30 segundos, recuperándose luego por completo. ¿Cuál de los siguientes antecedentes orientan a una causa cardiogénica del cuadro?",
        "options": [
          {
            "id": "A",
            "text": "Ausencia de episodios anteriores"
          },
          {
            "id": "B",
            "text": "Relación con la micción"
          },
          {
            "id": "C",
            "text": "Relación con el ejercicio"
          },
          {
            "id": "D",
            "text": "Relación con la tos"
          },
          {
            "id": "E",
            "text": "Ocurrencia al incorporarse desde la posición acostada"
          }
        ],
        "correcta": "C",
        "explicacion": "El síncope que ocurre durante el ejercicio, o en reposo sin pródromos, sugiere causa cardiogénica (miocardiopatía hipertrófica, canalopatías, anomalías coronarias). Los síncopes con la micción o la tos son situacionales, y al incorporarse desde la posición acostada son ortostáticos; ambos disautonómicos. Un primer episodio no excluye el origen cardíaco.",
        "recTag": "EUNACOM Julio 2019 · Pregunta 28"
      },
      {
        "stem": "Atleta de 20 años asintomático, evaluado en un control deportivo, tiene un soplo sistólico eyectivo en el borde esternal izquierdo que aumenta de intensidad al ponerse de pie y con la maniobra de Valsalva, y disminuye al ponerse en cuclillas. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Miocardiopatía hipertrófica obstructiva"
          },
          {
            "id": "B",
            "text": "Estenosis aórtica degenerativa"
          },
          {
            "id": "C",
            "text": "Insuficiencia mitral reumática"
          },
          {
            "id": "D",
            "text": "Comunicación interauricular"
          },
          {
            "id": "E",
            "text": "Estenosis pulmonar congénita"
          }
        ],
        "correcta": "A",
        "explicacion": "Un soplo eyectivo que aumenta con las maniobras que reducen el volumen ventricular (Valsalva, bipedestación) y disminuye al aumentarlo (cuclillas) es la firma de la miocardiopatía hipertrófica obstructiva. En la estenosis aórtica, el soplo se comporta al revés.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "3.5§0 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-21",
    "classId": "cardio-21",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Insuficiencia Cardíaca y Enfermedades del Miocardio",
    "topicLabel": "3.6",
    "title": "Miocardiopatía Dilatada, Miocardiopatía Restrictiva y Miocarditis",
    "perfilCode": "1.01.1.020",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No es problema GES",
    "reconstrucciones": "",
    "frecuencia": "Media-alta · Diagnóstico de la miocardiopatía dilatada, causas (alcohol, Chagas, antraciclinas, periparto), amiloidosis como causa de la restrictiva y la resonancia magnética en la miocarditis",
    "svg": null,
    "algoTitle": "Algoritmo de enfoque de las miocardiopatías dilatada, restrictiva y miocarditis",
    "diagram": {
      "title": "Enfoque de la Insuficiencia Cardíaca sin Causa Evidente: Miocardiopatía Dilatada, Restrictiva y Miocarditis",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar36\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar36)}\n  </style>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Insuficiencia cardíaca, arritmia o troponina elevada sin causa evidente</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Descartados infarto, valvulopatía grave e hipertensión · adulto joven o mediana edad</text>\n  <path class=\"ln\" d=\"M310,48 V62\"/>\n  <rect class=\"dec\" x=\"90\" y=\"62\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"76\" text-anchor=\"middle\" font-weight=\"700\">ECG + ecocardiograma + troponina + coronariografía o angio-TAC</text>\n  <text class=\"sub\" x=\"310\" y=\"88\" text-anchor=\"middle\">Coronarias sanas → buscar miocardiopatía o miocarditis</text>\n  <path class=\"ln\" d=\"M310,102 V114 H108 V128\"/>\n  <path class=\"ln\" d=\"M310,102 V128\"/>\n  <path class=\"ln\" d=\"M310,102 V114 H512 V128\"/>\n  <rect class=\"b\" x=\"15\" y=\"128\" width=\"185\" height=\"92\" rx=\"3\"/>\n  <text class=\"t\" x=\"107.5\" y=\"142\" text-anchor=\"middle\" font-weight=\"700\">Dilatada</text>\n  <text class=\"sub\" x=\"107.5\" y=\"154\" text-anchor=\"middle\">Ventrículo dilatado, FEVI &lt; 40%</text>\n  <text class=\"sub\" x=\"107.5\" y=\"164\" text-anchor=\"middle\">Alcohol, Chagas, antraciclinas,</text>\n  <text class=\"sub\" x=\"107.5\" y=\"174\" text-anchor=\"middle\">periparto, viral, familiar</text>\n  <text class=\"sub\" x=\"107.5\" y=\"184\" text-anchor=\"middle\">Tratamiento: 4 pilares + causa</text>\n  <rect class=\"b\" x=\"217\" y=\"128\" width=\"185\" height=\"92\" rx=\"3\"/>\n  <text class=\"t\" x=\"309.5\" y=\"142\" text-anchor=\"middle\" font-weight=\"700\">Restrictiva</text>\n  <text class=\"sub\" x=\"309.5\" y=\"154\" text-anchor=\"middle\">Paredes gruesas, aurículas grandes</text>\n  <text class=\"sub\" x=\"309.5\" y=\"164\" text-anchor=\"middle\">FEVI normal, ECG de bajo voltaje</text>\n  <text class=\"sub\" x=\"309.5\" y=\"174\" text-anchor=\"middle\">Amiloidosis, hemocromatosis,</text>\n  <text class=\"sub\" x=\"309.5\" y=\"184\" text-anchor=\"middle\">sarcoidosis · IC derecha</text>\n  <rect class=\"warn\" x=\"419\" y=\"128\" width=\"185\" height=\"92\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"511.5\" y=\"142\" text-anchor=\"middle\" font-weight=\"700\">Miocarditis</text>\n  <text class=\"sub warnT\" x=\"511.5\" y=\"154\" text-anchor=\"middle\">Pródromo viral, dolor, troponina ↑</text>\n  <text class=\"sub warnT\" x=\"511.5\" y=\"164\" text-anchor=\"middle\">Coronarias normales</text>\n  <text class=\"sub warnT\" x=\"511.5\" y=\"174\" text-anchor=\"middle\">Resonancia: realce tardío</text>\n  <text class=\"sub warnT\" x=\"511.5\" y=\"184\" text-anchor=\"middle\">Soporte y reposo 3-6 meses</text>\n  <path class=\"ln\" d=\"M108,220 V238\"/>\n  <path class=\"ln\" d=\"M310,220 V238\"/>\n  <path class=\"ln\" d=\"M512,220 V238\"/>\n  <rect class=\"acc\" x=\"15\" y=\"238\" width=\"185\" height=\"64\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"107.5\" y=\"252\" text-anchor=\"middle\" font-weight=\"700\">Estudio etiológico</text>\n  <text class=\"accS\" x=\"107.5\" y=\"264\" text-anchor=\"middle\">Alcohol, tiroides, Chagas, hierro,</text>\n  <text class=\"accS\" x=\"107.5\" y=\"274\" text-anchor=\"middle\">quimioterapia, familiares</text>\n  <text class=\"accS\" x=\"107.5\" y=\"284\" text-anchor=\"middle\">Resonancia, genética</text>\n  <rect class=\"acc\" x=\"217\" y=\"238\" width=\"185\" height=\"64\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"309.5\" y=\"252\" text-anchor=\"middle\" font-weight=\"700\">Diferenciar de constrictiva</text>\n  <text class=\"accS\" x=\"309.5\" y=\"264\" text-anchor=\"middle\">Pericardio calcificado, golpe</text>\n  <text class=\"accS\" x=\"309.5\" y=\"274\" text-anchor=\"middle\">pericárdico, interdependencia</text>\n  <text class=\"accS\" x=\"309.5\" y=\"284\" text-anchor=\"middle\">Pirofosfato, electroforesis</text>\n  <rect class=\"acc\" x=\"419\" y=\"238\" width=\"185\" height=\"64\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"511.5\" y=\"252\" text-anchor=\"middle\" font-weight=\"700\">Biopsia endomiocárdica</text>\n  <text class=\"accS\" x=\"511.5\" y=\"264\" text-anchor=\"middle\">IC fulminante, bloqueo AV de alto</text>\n  <text class=\"accS\" x=\"511.5\" y=\"274\" text-anchor=\"middle\">grado o TV, sospecha de células</text>\n  <text class=\"accS\" x=\"511.5\" y=\"284\" text-anchor=\"middle\">gigantes o eosinofílica</text>\n  <path class=\"ln\" d=\"M310,302 V322\"/>\n  <rect class=\"dec\" x=\"60\" y=\"322\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"336\" text-anchor=\"middle\" font-weight=\"700\">Derivar a cardiología; DAI si FEVI ≤ 35% a los 3 meses; estudio de familiares</text>\n  <text class=\"sub\" x=\"310\" y=\"348\" text-anchor=\"middle\">Anticoagular si hay fibrilación auricular o trombo; trasplante en la forma terminal</text>\n  <path class=\"ln\" d=\"M310,366 V382\"/>\n  <rect class=\"warn\" x=\"60\" y=\"382\" width=\"500\" height=\"52\" rx=\"3\"/>\n  <text class=\"t warnT\" x=\"310\" y=\"396\" text-anchor=\"middle\" font-weight=\"700\">En el puerperio, disnea con tercer ruido y crépitos: miocardiopatía periparto</text>\n  <text class=\"sub warnT\" x=\"310\" y=\"408\" text-anchor=\"middle\">Último mes de embarazo a 5 meses del parto · no IECA/ARA II/espironolactona si está embarazada</text>\n</svg>"
    },
    "contexto": "Cuando un paciente joven o de mediana edad llega con insuficiencia cardíaca y las coronarias están sanas, sin hipertensión ni valvulopatía que lo explique, estamos ante una miocardiopatía, una miocarditis o un tóxico. La respuesta correcta en el EUNACOM casi siempre es una pista de la historia: el alcohol, el viaje a una zona de Chagas, la quimioterapia con antraciclinas, el puerperio, la infección viral de hace dos semanas. El médico general debe sospechar la entidad, pedir el examen de elección (ecocardiograma primero, resonancia después), evitar el error de la coronariografía como único estudio y derivar con el tratamiento de la insuficiencia cardíaca ya iniciado.",
    "contentSections": [
      {
        "subhead": "1. Qué es una Miocardiopatía y Cómo se Ordena el Grupo",
        "paragraphs": [
          "Una <strong>miocardiopatía</strong> es una enfermedad del músculo cardíaco, con alteración estructural y funcional, <strong>que no se explica por una enfermedad coronaria, una valvulopatía, una hipertensión ni una cardiopatía congénita</strong>. Se clasifican por el <strong>fenotipo</strong> que muestra el ecocardiograma: <strong>dilatada</strong> (ventrículo grande y contracción deprimida), <strong>hipertrófica</strong> (pared engrosada; Tema 3.5), <strong>restrictiva</strong> (ventrículo rígido de tamaño normal, llenado restringido) y <strong>arritmogénica del ventrículo derecho</strong> (reemplazo fibroadiposo y taquicardia ventricular en el joven). La <strong>miocarditis</strong> es la inflamación aguda del miocardio y puede evolucionar a una miocardiopatía dilatada. El orden práctico: sospechar, confirmar con el <strong>ecocardiograma</strong>, buscar la causa y tratar la insuficiencia cardíaca con los fármacos del Tema 3.2.",
          "Pistas que obligan a pensar en miocardiopatía: IC en un <strong>menor de 50 años</strong> sin factores de riesgo, antecedentes familiares de IC, muerte súbita o marcapaso, disnea con una cardiomegalia en la radiografía y <strong>coronarias sanas</strong>, arritmias ventriculares sin causa, síncope de esfuerzo y la combinación de IC con bloqueos de la conducción. El <strong>electrocardiograma</strong> suele ser anormal (bloqueo de rama, arritmias, bajo voltaje) y el <strong>estudio genético y familiar</strong> es parte del manejo porque una proporción significativa tiene origen hereditario."
        ]
      },
      {
        "subhead": "2. Miocardiopatía Dilatada: Causas, Clínica y Diagnóstico",
        "paragraphs": [
          "La <strong>miocardiopatía dilatada (MCD)</strong> es la dilatación progresiva de uno o ambos ventrículos con <strong>disfunción sistólica (FEVI habitualmente < 40%)</strong>, sin sobrecarga de presión o volumen ni enfermedad coronaria que la expliquen. Es la causa más frecuente de IC en el adulto joven y la primera indicación de trasplante cardíaco. Las causas se agrupan así: <strong>idiopática o familiar</strong> (30-50% son hereditarias, sobre todo por mutaciones de la titina), <strong>alcohol</strong>, <strong>miocarditis viral previa</strong>, <strong>enfermedad de Chagas</strong>, <strong>quimioterapia</strong> (antraciclinas y trastuzumab), <strong>miocardiopatía periparto</strong>, taquicardiomiopatía, <strong>enfermedades endocrinas y nutricionales</strong> (hipo e hipertiroidismo, déficit de tiamina, acromegalia), <strong>drogas</strong> (cocaína, metanfetaminas), enfermedades autoinmunes, hemocromatosis, y la <strong>miocardiopatía de Takotsubo</strong> (abombamiento apical por estrés, mujer posmenopáusica, supradesnivel del ST con coronarias normales, recuperación espontánea en semanas).",
          "<strong>Alcohol:</strong> consumo mayor de 80 g diarios por más de 5 años; es <strong>potencialmente reversible con la abstinencia</strong>. <strong>Antraciclinas</strong> (doxorrubicina): daño acumulativo dependiente de la dosis (riesgo sobre 450-550 mg/m²), puede aparecer años después, y se previene con vigilancia ecocardiográfica y cardioprotección; el trastuzumab causa disfunción en general reversible. <strong>Enfermedad de Chagas</strong> (<em>Trypanosoma cruzi</em>, zona rural endémica de Chile y América Latina, vector la vinchuca, transmisión también por transfusión y congénita): la miocardiopatía chagásica crónica aparece 10-30 años después del contagio y se caracteriza por <strong>bloqueo de rama derecha y hemibloqueo anterior izquierdo, arritmias ventriculares, aneurisma apical, tromboembolia, IC predominantemente derecha y megaesófago o megacolon asociados</strong>; el diagnóstico es serológico (dos pruebas), y se estudia por infectología (código 1.04.4.016).",
          "<strong>Clínica:</strong> síntomas de IC (disnea de esfuerzo, ortopnea, edema, fatiga), palpitaciones y síncope por arritmias, embolias sistémicas (por trombos intraventriculares) y a veces muerte súbita. Al examen: <strong>choque de la punta desplazado hacia lateral y abajo, tercer ruido (galope) y soplo de insuficiencia mitral</strong> por dilatación del anillo valvular (la pregunta real de julio de 2015 lo describe en un joven de 31 años con disnea, ortopnea y edema y la respuesta es «miocardiopatía dilatada»; el soplo del ápex no hace pensar en estenosis aórtica ni en miocardiopatía hipertrófica).",
          "<strong>Diagnóstico:</strong> el <strong>ecocardiograma</strong> muestra ventrículo dilatado de forma esférica, FEVI baja, paredes delgadas o de grosor normal, insuficiencia mitral funcional y trombos; el ECG, taquicardia sinusal, fibrilación auricular, bloqueo de rama izquierda y arritmias ventriculares. Se pide además una <strong>coronariografía o angio-TAC</strong> para descartar enfermedad coronaria, la <strong>resonancia magnética cardíaca</strong> (fibrosis con realce tardío mesocárdico, que predice el riesgo arrítmico), TSH, ferritina y saturación de transferrina, serología de Chagas y VIH, y la historia de alcohol, drogas y quimioterapia."
        ]
      },
      {
        "subhead": "3. Tratamiento de la Miocardiopatía Dilatada y de las Formas Especiales",
        "paragraphs": [
          "<strong>Terapia de la IC con fracción reducida (Tema 3.2):</strong> ARNI o IECA, betabloqueador, espironolactona e iSGLT2, con diurético para la congestión; <strong>abstinencia total de alcohol</strong>, tratamiento de la causa (hormonas tiroideas, hierro, control de la taquiarritmia) y de la <strong>fibrilación auricular</strong> (con anticoagulación). <strong>Anticoagulación</strong> también si hay trombo intraventricular. <strong>DAI</strong> en prevención primaria si, tras 3 meses de tratamiento óptimo, la FEVI es ≤ 35%, y <strong>resincronizador</strong> si hay BCRI con QRS ancho (en la miocardiopatía no isquémica el beneficio del DAI es menor que en la isquémica; se decide caso a caso). En la forma terminal: asistencia ventricular o <strong>trasplante cardíaco</strong>. Parte de las MCD <strong>mejoran o se normalizan</strong> con el tratamiento (FEVI «recuperada»), pero el tratamiento no se suspende.",
          "<strong>Miocardiopatía periparto (MCPP):</strong> falla ventricular sistólica (FEVI < 45%) que aparece <strong>en el último mes del embarazo o hasta 5 meses después del parto</strong>, sin otra causa, en una mujer que antes estaba sana. Factores: preeclampsia, edad materna avanzada, multiparidad, embarazo múltiple, raza negra, hipertensión. La pregunta de julio de 2024: puérpera de 35 años al cuarto día, con disnea progresiva de reposo, taquicardia, <strong>tercer ruido, crépitos bibasales y edema</strong>: miocardiopatía periparto; el TEP debuta de forma súbita y no da galope ni crépitos, la embolia de líquido amniótico ocurre en el trabajo de parto y el edema no cardiogénico no tiene R3. Tratamiento: el de la IC (con <strong>IECA, ARA II, ARNI y espironolactona solo después del parto</strong>; en el embarazo, hidralazina con nitrato, betabloqueador y diurético), anticoagulación si la FEVI es < 30%, y consideración de <strong>bromocriptina</strong> (inhibe la prolactina). Si la FEVI no se recupera, un nuevo embarazo es de alto riesgo y se desaconseja.",
          "<strong>Chagas crónico:</strong> además del tratamiento de la IC y las arritmias, se discute el tratamiento antiparasitario con benznidazol o nifurtimox, con indicación mayor en la fase aguda, en niños y en la forma indeterminada; el marcapaso y el DAI son más frecuentes. <strong>Takotsubo:</strong> tratamiento de soporte de la IC, betabloqueador/IECA, recuperación en 1-4 semanas."
        ]
      },
      {
        "subhead": "4. Miocardiopatía Restrictiva: Cuando el Ventrículo no Puede Llenarse",
        "paragraphs": [
          "La <strong>miocardiopatía restrictiva (MCR)</strong> es la rigidez del miocardio (por infiltración o fibrosis) con <strong>ventrículos de tamaño normal o pequeño, función sistólica normal o casi normal y llenado diastólico muy restringido</strong>: la presión sube bruscamente con un pequeño aumento de volumen. Las <strong>aurículas están marcadamente dilatadas</strong> (el volumen se queda atrás de un ventrículo que no se llena) y el cuadro clínico es el de una <strong>IC con predominio derecho</strong>: ingurgitación yugular con signo de Kussmaul, edema, hepatomegalia, ascitis, disnea y <strong>presión arterial baja o normal</strong>; el pulso es pequeño por el bajo volumen eyectado.",
          "<strong>Causas:</strong> <strong>amiloidosis cardíaca</strong> (la más frecuente): de cadenas livianas (AL), asociada a mieloma y gammapatía monoclonal (macroglosia, equimosis periorbitarias «en antifaz», síndrome nefrótico, neuropatía; la pregunta real de diciembre de 2017 describe a un adulto mayor con equimosis periorbitaria, proteinuria masiva e hipoalbuminemia con VHS elevada, y la respuesta es amiloidosis primaria) y de transtiretina (ATTR) del adulto mayor (síndrome del túnel carpiano, estenosis del canal lumbar, hombres sobre 65 años) o hereditaria; <strong>hemocromatosis</strong> (hierro: bronceado, diabetes, hepatopatía, ferritina y saturación altas); <strong>sarcoidosis</strong> (bloqueo AV, arritmias ventriculares, adenopatías hiliares); <strong>fibrosis endomiocárdica</strong> y endocarditis de Löffler (eosinofilia), <strong>radioterapia</strong> mediastínica, esclerodermia y fármacos.",
          "<strong>Diagnóstico:</strong> el <strong>ecocardiograma</strong> muestra paredes engrosadas con aspecto «brillante y granular» en la amiloidosis, <strong>dilatación biauricular</strong>, FEVI normal o levemente baja, patrón restrictivo del llenado diastólico, derrame pericárdico y reducción del <em>strain</em> longitudinal con preservación del ápex. El <strong>ECG</strong> muestra <strong>bajo voltaje de los QRS a pesar de paredes gruesas</strong> (la discordancia es la clave de la amiloidosis), pseudoinfarto, bloqueos y fibrilación auricular. La <strong>resonancia magnética</strong> muestra realce tardío difuso. Para el tipo de amiloide: <strong>inmunofijación de suero y orina y cadenas livianas libres</strong> (si hay componente monoclonal se biopsia: grasa abdominal, médula ósea o corazón) y, si no lo hay, <strong>centellograma con pirofosfato (Tc-99m PYP)</strong> positivo confirma la ATTR sin biopsia.",
          "<strong>Diagnóstico diferencial con la pericarditis constrictiva</strong> (que también da IC derecha con ventrículos pequeños y es curable): la constrictiva muestra <strong>calcificación o engrosamiento pericárdico, golpe pericárdico, interdependencia ventricular y variación respiratoria marcada del flujo mitral</strong>, y el antecedente de pericarditis, tuberculosis, radioterapia o cirugía cardíaca. Se confirma con ecocardiograma, tomografía o resonancia, y cateterismo; el tratamiento es la <strong>pericardiectomía</strong>.",
          "<strong>Tratamiento:</strong> el de la causa (en la <strong>amiloidosis AL</strong>: quimioterapia dirigida por hematología; en la <strong>ATTR</strong>: <strong>tafamidis</strong>; en la hemocromatosis: flebotomías o quelantes; en la sarcoidosis: corticoides) y soporte de la congestión con <strong>diuréticos con mucho cuidado</strong> (la precarga es indispensable: no sobrediuresar). Los fármacos habituales de IC se toleran mal: los <strong>betabloqueadores y calcioantagonistas no dihidropiridínicos</strong> empeoran el gasto (que depende de la frecuencia) y la <strong>digoxina se une al amiloide y es tóxica</strong>. Anticoagulación en fibrilación auricular, marcapaso si hay bloqueo, y trasplante en casos seleccionados. El pronóstico es reservado."
        ]
      },
      {
        "subhead": "5. Miocarditis Aguda: Diagnóstico, Resonancia, Tratamiento y Reposo Deportivo",
        "paragraphs": [
          "La <strong>miocarditis</strong> es la inflamación del miocardio. Es más frecuente en <strong>jóvenes y varones</strong>. La causa más común es <strong>viral</strong>: <strong>Coxsackie B</strong>, <strong>parvovirus B19</strong>, adenovirus, virus herpes tipo 6, influenza, VIH y <strong>SARS-CoV-2</strong>; otras causas son la <strong>enfermedad de Chagas</strong> (aguda), bacterias (difteria, borrelia), reacciones autoinmunes (lupus, sarcoidosis, miocarditis de células gigantes), toxicidad por <strong>fármacos y inmunoterapia</strong> (inhibidores de puntos de control inmune, clozapina), hipersensibilidad y la rara miocarditis asociada a vacunas de ARNm (varones jóvenes, tras la segunda dosis, casi siempre leve y de buena evolución).",
          "<strong>Clínica:</strong> un cuadro de <strong>pródromo viral</strong> (fiebre, malestar, síntomas respiratorios o digestivos) <strong>1 a 2 semanas antes</strong>, seguido de <strong>dolor torácico</strong> (tipo pericárdico o isquémico, por miopericarditis), disnea, palpitaciones, fatiga o síncope; las formas graves se presentan como <strong>IC aguda, shock cardiogénico (miocarditis fulminante), bloqueo AV de alto grado o arritmias ventriculares</strong> y pueden causar muerte súbita. <strong>Exámenes:</strong> <strong>troponina elevada</strong> (a veces con valores de infarto), PCR y VHS altas; ECG con <strong>supradesnivel del ST cóncavo difuso, depresión del PR, ondas T invertidas, bloqueos o taquiarritmias</strong>; ecocardiograma con disfunción segmentaria o global, derrame pericárdico; <strong>coronariografía normal</strong> (obligatoria o angio-TAC en mayores de 40 años o con factores de riesgo para descartar un infarto).",
          "<strong>Examen confirmatorio de elección no invasivo: resonancia magnética cardíaca</strong>, que muestra <strong>edema miocárdico (T2) y realce tardío con gadolinio de patrón no isquémico</strong> (subepicárdico o mesocárdico: criterios de Lake Louise). La <strong>biopsia endomiocárdica</strong> no es rutinaria: se reserva para la IC fulminante o con inestabilidad hemodinámica, el bloqueo AV de alto grado, la taquicardia ventricular, la falta de respuesta al tratamiento o la sospecha de miocarditis de células gigantes, eosinofílica o sarcoidea, donde el diagnóstico histológico cambia el tratamiento. La pregunta de 2015 de un deportista de 30 años con dolor opresivo, disnea al recostarse y ECG con descenso del PR es una pericarditis (Tema 5.5): si la troponina también está elevada con disfunción ventricular, se trata de una miopericarditis.",
          "<strong>Tratamiento:</strong> <strong>soporte</strong> y manejo de la IC y de las arritmias con los fármacos habituales (IECA, betabloqueador y diuréticos una vez estable); <strong>no hay antiviral específico</strong> y los <strong>corticoides no se usan de rutina</strong> (sí en la miocarditis de células gigantes, eosinofílica, sarcoidea o autoinmune, y en la asociada a inmunoterapia); los <strong>AINE</strong> se evitan en la fase aguda con disfunción ventricular (empeoran la IC) y se reservan para la miopericarditis con función preservada; en la miocarditis fulminante, UCI con soporte mecánico, trasplante como rescate. <strong>Reposo de ejercicio competitivo e intenso por 3 a 6 meses</strong> (hasta normalizar la función ventricular, los marcadores y el Holter) por el riesgo de muerte súbita. El <strong>pronóstico</strong> es bueno en la mayoría (recuperación en semanas o meses), pero una parte evoluciona a una miocardiopatía dilatada."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de las Miocardiopatías y la Miocarditis",
      "headers": [
        "Entidad",
        "Morfología y función",
        "Pista clínica y examen de elección",
        "Tratamiento o advertencia"
      ],
      "rows": [
        [
          "Hipertrófica (Tema 3.5)",
          "Hipertrofia asimétrica del septo ≥ 15 mm; FEVI normal o alta",
          "Síncope de esfuerzo, soplo que aumenta con Valsalva · ecocardiograma",
          "Betabloqueador; prohibidos nitratos, digoxina y diuréticos altos"
        ],
        [
          "Dilatada",
          "Dilatación esférica de las cavidades; FEVI < 40%",
          "IC en joven, alcohol, Chagas, antraciclinas · ecocardiograma + coronarias",
          "Cuatro pilares de la IC-FEr; abstinencia de alcohol; DAI si FEVI ≤ 35%"
        ],
        [
          "Restrictiva",
          "Paredes gruesas, aurículas gigantes, ventrículos normales; FEVI conservada",
          "IC derecha, ECG de bajo voltaje · ecocardiograma, resonancia, pirofosfato",
          "Tratar la causa (tafamidis en ATTR); diuréticos con cuidado; evitar digoxina"
        ],
        [
          "Miocarditis aguda",
          "Edema miocárdico; función normal a muy deprimida",
          "Pródromo viral, dolor, troponina ↑, coronarias normales · resonancia con realce tardío",
          "Soporte; sin corticoides de rutina; reposo deportivo 3-6 meses"
        ],
        [
          "Periparto",
          "Dilatación con FEVI < 45%",
          "Último mes del embarazo a 5 meses del parto, R3 y crépitos · ecocardiograma",
          "Tratamiento de la IC compatible con la gestación; bromocriptina; anticoagular si FEVI < 30%"
        ],
        [
          "Chagas crónica",
          "Dilatación con aneurisma apical",
          "Zona endémica, BRD + HFAI, serología · ecocardiograma",
          "IC, antiarrítmicos, marcapaso o DAI; evaluar antiparasitario"
        ]
      ]
    },
    "severityTable": {
      "title": "Causas de la Miocardiopatía Dilatada: Qué Buscar y Qué Cambia",
      "headers": [
        "Causa",
        "Dato de la historia",
        "Examen o hallazgo",
        "Conducta específica"
      ],
      "rows": [
        [
          "Alcohol",
          "> 80 g/día por > 5 años",
          "Macrocitosis, GGT elevada; VI dilatado",
          "Abstinencia total; puede recuperar la FEVI"
        ],
        [
          "Chagas",
          "Zona rural endémica, vinchuca, transfusión",
          "Serología positiva; BRD + hemibloqueo; aneurisma apical",
          "IC, antiarrítmicos, anticoagulación; estudio por infectología"
        ],
        [
          "Antraciclinas, trastuzumab",
          "Quimioterapia previa (dosis acumulada)",
          "Caída de la FEVI > 10 puntos; troponina",
          "Suspender o modificar la quimioterapia, cardioprotección, pilares de IC"
        ],
        [
          "Periparto",
          "Último mes de embarazo o puerperio",
          "FEVI < 45%; BNP elevado",
          "IC según la lactancia; bromocriptina; evitar nuevo embarazo"
        ],
        [
          "Taquicardiomiopatía",
          "FA o taquicardia sostenida",
          "Mejora al controlar la frecuencia",
          "Control de ritmo o frecuencia, ablación"
        ],
        [
          "Tiroides, hierro, déficit de tiamina",
          "Síntomas endocrinos, bronceado, malnutrición",
          "TSH, ferritina y saturación, tiamina",
          "Tratar la enfermedad de base"
        ],
        [
          "Familiar o idiopática",
          "Familiar con IC, muerte súbita o marcapaso",
          "Resonancia con fibrosis; genética",
          "Estudio de familiares; DAI según riesgo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Tratamiento y Controles por Entidad",
      "headers": [
        "Entidad",
        "Tratamiento",
        "Controles",
        "Deriva o complica si…"
      ],
      "rows": [
        [
          "Dilatada",
          "IECA/ARNI + betabloqueador + espironolactona + iSGLT2; diurético mínimo",
          "Ecocardiograma a los 3 meses; creatinina y potasio",
          "FEVI ≤ 35%: DAI; BCRI con QRS ≥ 150: TRC; terminal: trasplante"
        ],
        [
          "Restrictiva (amiloidosis)",
          "Tafamidis (ATTR) o quimioterapia (AL); diuréticos con cuidado",
          "Péptidos natriuréticos, troponina, función renal",
          "Sin digoxina ni betabloqueador; bloqueo AV: marcapaso"
        ],
        [
          "Miocarditis",
          "Soporte, IC, antiarrítmicos; corticoides solo en formas específicas",
          "ECG, Holter, ecocardiograma y resonancia a los 3-6 meses",
          "Shock, bloqueo AV de alto grado o TV: UCI, biopsia y soporte mecánico"
        ],
        [
          "Periparto",
          "Pilares de la IC adecuados a gestación y lactancia; bromocriptina",
          "Ecocardiograma seriado hasta 12 meses",
          "FEVI < 30%: anticoagular; sin recuperación: evitar nuevo embarazo"
        ]
      ]
    },
    "vignette": "Hombre de 28 años, sano, consulta por dolor precordial de 2 días que aumenta con la inspiración y se alivia al inclinarse hacia adelante, precedido por un cuadro respiratorio alto hace 10 días. PA 118/72 mmHg, FC 98 lpm, afebril. El ECG muestra supradesnivel cóncavo difuso del ST con descenso del PR, la troponina ultrasensible está 30 veces sobre el límite y el ecocardiograma muestra una FEVI de 48% con hipocinesia lateral. La coronariografía es normal.",
    "explicacion": "Es una miocarditis aguda (miopericarditis): pródromo viral, dolor pericárdico, troponina muy elevada, disfunción ventricular leve y coronarias normales. El examen no invasivo confirmatorio es la resonancia magnética cardíaca (edema y realce tardío subepicárdico/mesocárdico); la biopsia endomiocárdica no se hace en una forma estable. El tratamiento es de soporte: reposo, monitorización (por riesgo de arritmias), control de la IC con IECA y betabloqueador una vez estable, sin AINE en dosis altas por la disfunción ventricular ni corticoides de rutina, y reposo de ejercicio intenso y competitivo por 3 a 6 meses. Se repite el ecocardiograma y la resonancia a los 3-6 meses.",
    "keyPoints": [
      "Miocardiopatía = enfermedad del músculo no explicada por coronarias, válvulas ni hipertensión; se clasifica por el fenotipo del ecocardiograma (dilatada, hipertrófica, restrictiva, arritmogénica).",
      "Dilatada: IC en joven con ventrículo esférico y FEVI < 40%; causas: idiopática/familiar, alcohol (reversible), Chagas, antraciclinas, periparto, viral y taquicardiomiopatía; tratar con los cuatro pilares.",
      "Chagas crónico: BRD + hemibloqueo anterior izquierdo, aneurisma apical, arritmias, tromboembolia y megaórganos; serología en zona endémica.",
      "Periparto: último mes de embarazo hasta 5 meses posparto; disnea con R3 y crépitos; IECA, ARA II y espironolactona solo después del parto; bromocriptina.",
      "Restrictiva: paredes gruesas, aurículas gigantes, FEVI normal, IC derecha y bajo voltaje en el ECG; amiloidosis es la causa más frecuente (tafamidis en ATTR); evitar digoxina y betabloqueador.",
      "Restrictiva vs constrictiva: pericardio calcificado, golpe pericárdico e interdependencia ventricular orientan a la constrictiva (se cura con pericardiectomía).",
      "Miocarditis: pródromo viral + dolor + troponina elevada + coronarias normales; la resonancia con realce tardío confirma; la biopsia solo en las formas graves.",
      "Miocarditis: tratamiento de soporte, sin corticoides de rutina ni AINE con disfunción; reposo del deporte competitivo 3 a 6 meses."
    ],
    "questions": [
      {
        "stem": "Un paciente de 31 años presenta un cuadro de disnea de esfuerzos, ortopnea y astenia. Su presión arterial es 120/70 mmHg y su pulso es de 80x’, además presenta edema en las EEII. Presenta desplazamiento del choque de la punta, a dos centímetros de la línea medio-clavicular y se ausculta galope cardiaco, con un soplo sistólico en el ápex, que no varía con la inspiración. Al examen pulmonar tiene crepitos basales. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Miocardiopatía hipertrófica"
          },
          {
            "id": "B",
            "text": "Miocardiopatía dilatada"
          },
          {
            "id": "C",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "D",
            "text": "Estenosis aórtica"
          },
          {
            "id": "E",
            "text": "Estenosis mitral"
          }
        ],
        "correcta": "B",
        "explicacion": "Un adulto joven con disnea, ortopnea y edema, choque de la punta desplazado, galope por tercer ruido y un soplo sistólico apical que no cambia con la inspiración (insuficiencia mitral funcional por dilatación del anillo) tiene una miocardiopatía dilatada clásica. La miocardiopatía hipertrófica y la estenosis aórtica dan un soplo eyectivo y un choque sostenido; la insuficiencia aórtica, un soplo diastólico; la estenosis mitral, retumbo diastólico.",
        "recTag": "EUNACOM Julio 2015 · Pregunta 54"
      },
      {
        "stem": "Una paciente de 35 años, primípara, está en su cuarto día postparto vaginal. Su embarazo fue adecuadamente controlado, siendo normal durante toda la gestación. Consulta por un cuadro de disnea que ha aumentado significativamente en los últimos días, siendo actualmente de reposo. Al examen físico presenta frecuencia cardíaca de 102 latidos por minuto y presión arterial de 110/60 mmHg, con auscultación cardíaca que muestra un ritmo de galope por presencia de R3 y examen pulmonar que demuestra la presencia de crépitos basales bilaterales. Satura 94% a FiO2 ambiental y se observa edema de extremidades inferiores fóvea ++. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Edema pulmonar no cardiogénico"
          },
          {
            "id": "B",
            "text": "Miocardiopatía periparto"
          },
          {
            "id": "C",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "D",
            "text": "Embolia de líquido amniótico"
          },
          {
            "id": "E",
            "text": "Neumonía"
          }
        ],
        "correcta": "B",
        "explicacion": "Una puérpera con disnea creciente, taquicardia, tercer ruido, crépitos bibasales y edema tiene una insuficiencia cardíaca con disfunción sistólica: miocardiopatía periparto (último mes del embarazo a 5 meses del parto). El TEP sería de inicio súbito, la embolia de líquido amniótico ocurre durante el parto y el edema no cardiogénico no produce galope.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 3"
      },
      {
        "stem": "Un paciente de 80 años consulta por equimosis periorbitaria, sin antecedente traumático, asociado a astenia y edema de extremidades inferiores. Se solicitan exámenes, entre los que destacan creatinina: 2,6 mg/dl, proteinuria de 24 horas: 8,4 gramos/día, albuminemia: 1,4 g/dl. Su hemograma es normal y su VHS: 96 mmHg. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Nefrosis lipoidea"
          },
          {
            "id": "B",
            "text": "Nefropatía diabética"
          },
          {
            "id": "C",
            "text": "Amiloidosis primaria"
          },
          {
            "id": "D",
            "text": "Enfermedad de Berger"
          },
          {
            "id": "E",
            "text": "Arteritis de la temporal"
          }
        ],
        "correcta": "C",
        "explicacion": "Un adulto mayor con equimosis periorbitaria espontánea, proteinuria en rango nefrótico, hipoalbuminemia y VHS muy elevada tiene una amiloidosis primaria (AL): causa de síndrome nefrótico y de miocardiopatía restrictiva, con macroglosia y neuropatía. La nefrosis lipoidea y la nefropatía diabética no dan VHS alta ni equimosis, la enfermedad de Berger es hematúrica y la arteritis de la temporal no produce nefrosis.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 64"
      },
      {
        "stem": "Hombre de 28 años consulta por dolor precordial de 2 días que aumenta con la inspiración, precedido por un cuadro respiratorio alto hace 10 días. El ECG muestra supradesnivel del ST difuso y cóncavo y las troponinas están muy elevadas. La coronariografía es normal. ¿Cuál es el examen confirmatorio no invasivo de elección?",
        "options": [
          {
            "id": "A",
            "text": "Resonancia magnética cardíaca con realce tardío de gadolinio"
          },
          {
            "id": "B",
            "text": "Biopsia endomiocárdica de rutina"
          },
          {
            "id": "C",
            "text": "Test de esfuerzo convencional"
          },
          {
            "id": "D",
            "text": "Ecocardiograma transesofágico"
          },
          {
            "id": "E",
            "text": "Centellograma miocárdico con talio"
          }
        ],
        "correcta": "A",
        "explicacion": "El cuadro es una miocarditis aguda (dolor, troponina elevada tras una infección viral, coronarias sanas). La resonancia magnética muestra el edema y el realce tardío subepicárdico o mesocárdico y es el examen no invasivo de elección. La biopsia se reserva para formas graves, y la prueba de esfuerzo está contraindicada en la miocarditis aguda.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "3.5§1 · 3.5§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  }
];

module.exports = { bloque3 };
