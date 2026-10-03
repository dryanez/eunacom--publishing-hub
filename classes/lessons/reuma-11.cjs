// Clase 1.11 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_3.cjs (reuma-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-11",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Criterios de Sydney, la paradoja del anticoagulante lúpico y la protección obstétrica con heparina y aspirina",
      say: "Bienvenidos. Hoy abordamos el síndrome antifosfolípido, la trombofilia autoinmune adquirida de mayor relevancia clínica y obstétrica en el EUNACOM. Revisaremos la paradoja biológica del anticoagulante lúpico, los criterios diagnósticos clasificatorios de Sydney con su regla obligatoria de confirmación serológica a las doce semanas, el manejo anticoagulante indefinido con cumarínicos y la contraindicación absoluta de los anticoagulantes orales directos, finalizando con el protocolo obstétrico con aspirina y heparina. Empecemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia y laboratorio",
      title: "La paradoja biológica del anticoagulante lúpico",
      nodes: [
        { id: "ant", col: 0, row: 1, k: "start", t: "Autoanticuerpos patogénicos", s: "Contra beta dos glicoproteína uno y cardiolipina" },
        { id: "pro", col: 1, row: 0, k: "alert", t: "Efecto protrombótico in vivo", s: "Activación endotelial, plaquetaria y trombosis" },
        { id: "lab", col: 1, row: 2, k: "trap", t: "Paradoja del laboratorio in vitro", s: "Alargamiento aparente del tiempo de tromboplastina" },
        { id: "mez", col: 2, row: 2, k: "mech", t: "Prueba de mezclas con plasma", s: "No corrige con plasma normal, sí con fosfolípidos" },
        { id: "con", col: 3, row: 1, k: "good", t: "Confirmación de anticoagulante lúpico", s: "Marcador de mayor riesgo trombótico relativo" },
      ],
      edges: [
        { from: "ant", to: "pro" },
        { from: "ant", to: "lab" },
        { from: "lab", to: "mez" },
        { from: "pro", to: "con" },
        { from: "mez", to: "con" },
      ],
      steps: [
        { show: ["ant", "pro"], note: "El mecanismo trombogénico real en el endotelio",
          say: "En el síndrome antifosfolípido se generan autoanticuerpos dirigidos contra fosfolípidos aniónicos de membrana y proteínas cofactoras plasmáticas, principalmente la beta dos glicoproteína uno y la protrombina. En el organismo vivo inducen la activación del endotelio vascular, reclutan plaquetas e inhiben la proteína C activada, provocando trombosis arteriales y venosas graves." },
        { show: ["lab", "mez"], note: "La gran paradoja del laboratorio in vitro",
          say: "Sin embargo, en el tubo de ensayo el anticoagulante lúpico interfiere físicamente con los reactivos de fosfolípidos, causando un falso alargamiento del tiempo de tromboplastina parcial activada. La prueba de mezclas con plasma normal no lo corrige, pero se normaliza de inmediato al agregar un exceso de fosfolípidos exógenos a la muestra." },
        { show: ["con"], note: "Interpretación clínica ineludible",
          say: "Esta es la paradoja clásica que se pregunta siempre: parece un anticoagulante en el laboratorio porque alarga el tiempo de coagulación, pero en el paciente vivo es un potente agente procoagulante que produce infartos, trombosis venosa profunda y pérdida gestacional." },
      ],
    },

    {
      type: "points",
      kicker: "Criterios de Sydney",
      title: "Criterios clínicos de trombosis y morbilidad obstétrica",
      cards: [
        { title: "Criterio de trombosis vascular", tag: "Arterial, venosa o de pequeño vaso", kind: "criteria", items: [
          { t: "Al menos un episodio objetivo confirmado", d: "Trombosis venosa profunda, TEP, ACV o infarto",
            say: "Se exige al menos un episodio comprobado de trombosis venosa profunda, tromboembolismo pulmonar, accidente cerebrovascular isquémico o trombosis microvascular confirmado objetivamente por ecografía Doppler, angiografía o histopatología sin vasculitis." },
          { t: "En cualquier territorio tisular", d: "Presentación típica en jóvenes sin factores de riesgo",
            say: "Debe sospecharse fuertemente en personas jóvenes que debutan con eventos trombóticos inexplicables sin factores de riesgo cardiovascular o con episodios recurrentes en sitios atípicos." },
        ] },
        { title: "Criterios de morbilidad obstétrica", tag: "Tres escenarios clínicos formales", kind: "alert", items: [
          { t: "Muerte fetal tardía sobre diez semanas", d: "Feto morfológicamente normal por ecografía",
            say: "Primer escenario obstétrico: una o más muertes inexplicables de fetos morfológicamente normales a partir de las diez semanas de gestación evidenciadas por ecografía o autopsia." },
          { t: "Parto prematuro antes de treinta y cuatro semanas", d: "Por preeclampsia severa o insuficiencia placentaria",
            say: "Segundo escenario: uno o más partos prematuros antes de la semana treinta y cuatro debidos a preeclampsia severa, eclampsia o retraso de crecimiento intrauterino severo con insuficiencia placentaria." },
          { t: "Tres o más abortos antes de diez semanas", d: "Consecutivos e inexplicados",
            say: "Tercer escenario: tres o más abortos espontáneos consecutivos e inexplicados antes de las diez semanas de gestación, habiendo descartado formalmente alteraciones cromosómicas parentales o malformaciones anatómicas uterinas." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Criterios de laboratorio",
      title: "La regla de oro de la confirmación a las doce semanas",
      cards: [
        { title: "Tres autoanticuerpos diagnósticos", tag: "Determinación estandarizada", kind: "criteria", items: [
          { t: "Anticoagulante lúpico en plasma", d: "Pruebas funcionales según guías ISTH",
            say: "El anticoagulante lúpico es el marcador serológico que confiere el mayor riesgo relativo de eventos trombóticos entre todos los anticuerpos antifosfolípidos estudiados." },
          { t: "Anticardiolipinas IgG e IgM", d: "Títulos moderados o altos mayores a 40 unidades",
            say: "Los anticuerpos anticardiolipina deben estar presentes en títulos moderados o altos, habitualmente superiores a cuarenta unidades o sobre el percentil noventa y nueve en al menos una clase." },
          { t: "Anti-beta dos glicoproteína uno", d: "Títulos elevados en isotipos IgG o IgM",
            say: "Los anticuerpos anti-beta dos glicoproteína uno reconocen la proteína cofactor diana y confirman la naturaleza autoinmune específica del síndrome en el paciente." },
        ] },
        { title: "Intervalo mínimo de doce semanas", tag: "Regla obligatoria ineludible", kind: "alert", items: [
          { t: "Confirmación en al menos dos tomas separadas", d: "Con doce o más semanas de diferencia",
            say: "Esta es una regla de oro inquebrantable del examen: los anticuerpos deben confirmarse positivos en al menos dos determinaciones separadas por un intervalo mínimo de doce semanas completas." },
          { t: "Descarte de anticuerpos transitorios", d: "Frecuentes tras infecciones virales agudas",
            say: "Este intervalo de tres meses es obligatorio para descartar anticuerpos transitorios inofensivos que aparecen habitualmente tras infecciones virales agudas y luego desaparecen por completo sin conferir riesgo trombótico crónico." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Manifestaciones no de criterio",
      title: "Livedo reticularis, valvulopatías y citopenias",
      cards: [
        { title: "Livedo reticularis cutánea", tag: "Microtrombosis capilar persistente", kind: "normal", items: [
          { t: "Patrón violáceo en malla o encaje", d: "En extremidades inferiores y tronco",
            say: "La livedo reticularis es un hallazgo dermatológico muy común en el síndrome antifosfolípido. Se observa como una red violácea en forma de malla en piernas y brazos que no desaparece con el calor ambiental." },
          { t: "Marcador de compromiso microvascular", d: "Asociado a accidentes isquémicos transitorios",
            say: "Refleja la estasis y microtrombosis en las vénulas dérmicas, y su presencia suele asociarse a mayor carga trombótica y riesgo de compromiso neurológico." },
        ] },
        { title: "Endocarditis de Libman-Sacks", tag: "Valvulopatía no bacteriana", kind: "alert", items: [
          { t: "Vegetaciones verrugosas estériles", d: "Predominio en válvula mitral y aórtica",
            say: "Los pacientes con síndrome antifosfolípido pueden desarrollar engrosamiento valvular o vegetaciones verrugosas asépticas en las válvulas mitral y aórtica, conocidas como endocarditis de Libman-Sacks." },
          { t: "Riesgo de embolias sistémicas", d: "Fuente cardiogénica de ACV isquémico",
            say: "Estas vegetaciones aumentan el riesgo de regurgitación valvular y pueden fragmentarse originando embolias cerebrales paradójicas o periféricas." },
        ] },
        { title: "Trombocitopenia leve a moderada", tag: "Destrucción plaquetaria periférica", kind: "criteria", items: [
          { t: "Recuentos entre 50.000 y 100.000", d: "Mediada por anticuerpos contra fosfolípidos",
            say: "Es muy frecuente observar trombocitopenia leve a moderada por consumo periférico. Paradójicamente, a pesar de tener plaquetas bajas, el paciente tiene alto riesgo de trombosis y no de hemorragia." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Manejo antitrombótico",
      title: "Anticoagulación indefinida con cumarínicos y la alerta DOACs",
      nodes: [
        { id: "tro", col: 0, row: 1, k: "start", t: "Trombosis vascular confirmada", s: "Evento venoso o arterial agudo" },
        { id: "hep", col: 1, row: 1, k: "good", t: "Heparina de fase aguda", s: "Traslape a cumarínicos orales" },
        { id: "cum", col: 2, row: 0, k: "good", t: "Acenocumarol o Warfarina de por vida", s: "Meta estricta de INR de dos a tres" },
        { id: "doa", col: 2, row: 2, k: "alert", t: "DOACs contraindicados (TRAPS)", s: "Rivaroxabán y apixabán provocan fallas arteriales" },
        { id: "rem", col: 3, row: 0, k: "good", t: "Prevención secundaria permanente", s: "Riesgo de retrombosis sobre el cincuenta por ciento" },
      ],
      edges: [
        { from: "tro", to: "hep" },
        { from: "hep", to: "cum" },
        { from: "hep", to: "doa" },
        { from: "cum", to: "rem" },
      ],
      steps: [
        { show: ["tro", "hep", "cum"], note: "Antagonistas de vitamina K de por vida",
          say: "Ante una trombosis venosa por síndrome antifosfolípido, se inicia tratamiento agudo con heparina y se traslapa a anticoagulantes orales cumarínicos como acenocumarol o warfarina, manteniendo una meta estricta de INR entre dos coma cero y tres coma cero de por vida." },
        { show: ["rem"], note: "Duración indefinida innegociable",
          say: "La anticoagulación debe mantenerse de forma indefinida. Si se suspende el fármaco, más del cincuenta por ciento de los pacientes presenta una nueva trombosis potencialmente mortal dentro de los primeros dos años." },
        { show: ["doa"], note: "Alerta crítica: DOACs contraindicados",
          say: "Alerta roja en el examen: los nuevos anticoagulantes orales directos como rivaroxabán o apixabán están formalmente contraindicados en pacientes con triple positividad serológica. El ensayo clínico TRAPS demostró que provocan un aumento inaceptable de accidentes cerebrovasculares e infartos." },
      ],
    },

    {
      type: "points",
      kicker: "Manejo obstétrico",
      title: "Protocolo de protección gestacional con heparina y aspirina",
      cards: [
        { title: "SAF obstétrico sin trombosis previa", tag: "Pérdidas gestacionales exclusivas", kind: "criteria", items: [
          { t: "Aspirina cien miligramos al día preconcepcional", d: "Mejora la implantación y perfusión trofoblástica",
            say: "En pacientes con criterios obstétricos puros, se inicia ácido acetilsalicílico a dosis bajas de cien miligramos al día desde el período preconcepcional o ante la primera prueba de embarazo positiva." },
          { t: "Heparina de bajo peso molecular profiláctica", d: "Enoxaparina cuarenta miligramos subcutáneos al día",
            say: "Apenas se confirma saco gestacional intrauterino viable por ecografía, se añade enoxaparina cuarenta miligramos al día subcutánea, manteniéndola durante todo el embarazo y hasta seis semanas postparto." },
        ] },
        { title: "SAF con antecedentes de trombosis", tag: "Alto riesgo materno y fetal", kind: "alert", items: [
          { t: "Heparina de bajo peso molecular a dosis plena", d: "Enoxaparina un miligramo por kilo cada doce horas",
            say: "Si la paciente embarazada tiene antecedentes de trombosis venosa o arterial previa, la heparina de bajo peso molecular debe administrarse a dosis terapéuticas plenas durante toda la gestación." },
          { t: "Contraindicación absoluta de cumarínicos", d: "Embriopatía por warfarina",
            say: "La warfarina y el acenocumarol están absolutamente contraindicados en el embarazo por causar hipoplasia nasal, condrodisplasia y malformaciones fetales severas entre las semanas seis y doce." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Emergencia vital",
      title: "Síndrome antifosfolípido catastrófico o síndrome de Asherson",
      cards: [
        { title: "Criterios diagnósticos del cuadro", tag: "Menos del uno por ciento de casos", kind: "alert", items: [
          { t: "Compromiso de tres o más órganos", d: "En menos de una semana de evolución",
            say: "El síndrome de Asherson es una tormenta trombótica microvascular fulminante caracterizada por la oclusión simultánea de tres o más órganos vitales en menos de una semana." },
          { t: "Falla renal y distrés respiratorio", d: "Microangiopatía trombótica masiva",
            say: "Cursa con insuficiencia renal aguda, dificultad respiratoria por microtrombosis alveolar, encefalopatía isquémica y necrosis cutánea, requiriendo ingreso inmediato a cuidados intensivos." },
        ] },
        { title: "Tratamiento combinado agresivo en UCI", tag: "Terapia de rescate triple", kind: "pharma", items: [
          { t: "Heparina no fraccionada endovenosa", d: "A dosis anticoagulantes plenas",
            say: "Se administra heparina no fraccionada en infusión continua endovenosa para frenar la coagulación intravascular descontrolada en todos los lechos vasculares." },
          { t: "Pulsos de corticoides y plasmaféresis", d: "Metilprednisolona un gramo al día más plasmaféresis o IGEV",
            say: "Se asocian pulsos de metilprednisolona un gramo al día por tres días junto con sesiones de plasmaféresis o inmunoglobulina endovenosa para remover y neutralizar los autoanticuerpos patogénicos." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Portadores asintomáticos",
      title: "Conducta preventiva ante anticuerpos positivos sin trombosis",
      cards: [
        { title: "Estilo de vida y anticoncepción", tag: "Eliminar factores procoagulantes", kind: "alert", items: [
          { t: "Prohibición absoluta de estrógenos", d: "Anticonceptivos combinados orales contraindicados",
            say: "En personas con anticuerpos antifosfolípidos positivos asintomáticos están formalmente contraindicados los anticonceptivos hormonales combinados con estrógenos por alto riesgo de desencadenar una trombosis." },
          { t: "Control de factores de riesgo cardiovascular", d: "Cese del tabaquismo y control de presión",
            say: "Es prioritario suspender el consumo de tabaco, tratar la hipertensión y optimizar los niveles de colesterol para evitar sumar factores trombogénicos." },
        ] },
        { title: "Tromboprofilaxis en situaciones de riesgo", tag: "Cirugías e inmovilización", kind: "criteria", items: [
          { t: "Heparina profiláctica perioperatoria", d: "En cirugías mayores y reposo prolongado",
            say: "Ante situaciones de alto riesgo trombótico como cirugías ortopédicas o abdominales, fracturas, inmovilización o puerperio, se debe indicar heparina de bajo peso molecular profiláctica transitoria." },
          { t: "Aspirina en dosis bajas", d: "Cien miligramos al día en casos seleccionados",
            say: "En pacientes con perfil de alto riesgo o triple positividad serológica asintomática, muchos expertos indican aspirina cien miligramos al día como prevención primaria." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Resumen de escenarios clínicos y decisiones en SAF",
      head: ["Escenario Clínico", "Objetivo Primario", "Tratamiento de Elección", "Regla de oro EUNACOM"],
      rows: [
        { cells: ["Trombosis venosa por SAF", "Prevención secundaria de TVP o TEP", "Acenocumarol o Warfarina (meta INR 2.0 a 3.0)", "Anticoagulación INDEFINIDA de por vida · DOACs formalmente contraindicados"],
          say: "Repasemos la tabla clínica. Trombosis venosa: cumarínicos de por vida con INR dos a tres. Los anticoagulantes directos están contraindicados por el estudio TRAPS." },
        { cells: ["Trombosis arterial (ej. ACV)", "Prevención de nuevos infartos", "Cumarínicos (INR 2-3) más Aspirina 100 mg/día", "Control agresivo de factores de riesgo cardiovascular y seguimiento hematológico"],
          say: "Trombosis arterial: cumarínicos con aspirina. Se exige control riguroso de presión y perfil lipídico." },
        { cells: ["SAF Obstétrico sin trombosis", "Prevenir muerte fetal y preeclampsia", "Aspirina 100 mg/día más Enoxaparina 40 mg/día SC", "Iniciar aspirina preconcepcional y heparina con saco intrauterino hasta 6 semanas postparto"],
          say: "SAF obstétrico sin trombosis: aspirina preconcepcional más heparina profiláctica desde el saco gestacional hasta seis semanas postparto." },
        { cells: ["SAF Obstétrico con trombosis", "Prevenir trombosis materna y pérdida fetal", "Aspirina 100 mg/día más Enoxaparina a dosis terapéutica plena", "Cumarínicos prohibidos en embarazo por teratogenia · Retomar warfarina en puerperio"],
          say: "SAF con trombosis previa en embarazo: heparina a dosis terapéuticas plenas. Warfarina prohibida por malformaciones fetales." },
        { cells: ["SAF Catastrófico (Asherson)", "Rescate vital de falla multiorgánica aguda", "Heparina EV más Pulsos Metilprednisolona más Plasmaféresis", "Manejo en UCI · Oclusión de 3 o más órganos en menos de 1 semana"],
          say: "SAF catastrófico: urgencia en UCI con heparina, pulsos de corticoides y recambio plasmático por trombosis multiorgánica aguda." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 29 años, cursando embarazo de 8 semanas confirmado por ecografía con embrión vivo y latidos cardiofetales presentes. Sus antecedentes revelan 3 abortos espontáneos consecutivos del primer trimestre (a las 7, 8 y 9 semanas) en los últimos 3 años, sin antecedentes de trombosis vascular. El estudio inmunológico solicitado hace 3 meses mostró Anticoagulante Lúpico positivo y anticuerpos anticardiolipina IgG en 58 GPL (positivo alto). Se repitieron los exámenes a las 14 semanas de intervalo, confirmándose la positividad persistente de ambos marcadores.",
      question: "¿Cuál es el esquema farmacológico indicado para asegurar la viabilidad gestacional y prevenir la pérdida fetal?",
      options: [
        { letter: "A", text: "Ácido acetilsalicílico 100 mg al día más Enoxaparina 40 mg al día subcutánea" },
        { letter: "B", text: "Warfarina oral ajustada a INR entre 2.0 y 3.0 durante todo el embarazo" },
        { letter: "C", text: "Rivaroxabán 20 mg al día oral en monoterapia" },
        { letter: "D", text: "Prednisona 40 mg al día vía oral sin heparina" },
        { letter: "E", text: "Reposo absoluto en cama sin fármacos antitrombóticos" },
      ],
      correct: "A",
      explanation: "La paciente cumple los criterios clasificatorios de Sydney para Síndrome Antifosfolípido Obstétrico: criterio clínico (≥ 3 abortos consecutivos < 10 semanas) más criterio serológico confirmado en dos ocasiones con intervalo > 12 semanas (anticoagulante lúpico y anticardiolipinas IgG a títulos altos). El esquema estándar de elección consiste en la asociación de Ácido Acetilsalicílico a dosis bajas (100 mg/día) más Heparina de Bajo Peso Molecular a dosis profiláctica (Enoxaparina 40 mg/día SC), manteniéndose la HBPM hasta 6 semanas postparto. La warfarina está contraindicada por teratogenicidad.",
      say: {
        stem: "Caso clínico obstétrico. Mujer de veintinueve años con ocho semanas de embarazo y antecedente de tres abortos tempranos previos, en quien se confirma síndrome antifosfolípido con anticoagulante lúpico y anticardiolipinas positivos en dos tomas separadas por catorce semanas.",
        question: "¿Cuál es el esquema farmacológico indicado para asegurar la viabilidad gestacional y prevenir la pérdida fetal?",
        options: "Las alternativas: aspirina con enoxaparina profiláctica, warfarina oral con INR dos a tres, rivaroxabán solo, prednisona oral sin heparina, o reposo absoluto sin fármacos. Piénsalo.",
        answer: "La respuesta correcta es la A. En el síndrome antifosfolípido obstétrico puro sin trombosis previa, el tratamiento estándar es aspirina cien miligramos al día combinada con enoxaparina profiláctica cuarenta miligramos subcutáneos diarios hasta seis semanas después del parto. La warfarina es teratogénica y está prohibida.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2017 · Pregunta 41",
      stem: "Mujer de 31 años con antecedente de trombosis venosa profunda iliofemoral derecha hace 2 años y dos pérdidas reproductivas previas es diagnosticada de Síndrome Antifosfolípido con triple positividad serológica (anticoagulante lúpico, anticardiolipinas y anti-beta-2-glicoproteína I positivos confirmados). Actualmente consulta a control hematológico. ¿Cuál es el tratamiento antitrombótico a largo plazo recomendado?",
      options: [
        { letter: "A", text: "Rivaroxabán 20 mg al día oral en monoterapia" },
        { letter: "B", text: "Antagonistas de vitamina K (Acenocumarol o Warfarina) con meta de INR entre 2.0 y 3.0 indefinido" },
        { letter: "C", text: "Ácido acetilsalicílico 100 mg al día en monoterapia" },
        { letter: "D", text: "Apixabán 5 mg cada 12 horas por 6 meses y suspender" },
        { letter: "E", text: "Dabigatrán 150 mg cada 12 horas asociado a clopidogrel" },
      ],
      correct: "B",
      explanation: "En pacientes con Síndrome Antifosfolípido trombótico (y en especial con triple positividad serológica), el tratamiento estándar de oro a largo plazo es la anticoagulación oral indefinida con antagonistas de vitamina K (Acenocumarol o Warfarina) con meta de INR entre 2.0 y 3.0. Los anticoagulantes orales directos (DOACs como rivaroxabán o apixabán) están formalmente contraindicados debido al ensayo TRAPS, que demostró un incremento inaceptable de trombosis arteriales recurrentes.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil diecisiete, pregunta cuarenta y uno. Mujer de treinta y un años con antecedentes de trombosis venosa profunda y pérdidas reproductivas con triple positividad serológica confirmada.",
        question: "¿Cuál es el tratamiento antitrombótico a largo plazo recomendado?",
        options: "Las opciones: rivaroxabán en monoterapia, antagonistas de vitamina K como acenocumarol o warfarina con meta de INR dos a tres indefinido, aspirina sola, apixabán por seis meses, o dabigatrán con clopidogrel. Piénsalo.",
        answer: "La respuesta correcta es la B. Los antagonistas de vitamina K con meta de INR dos a tres de forma indefinida son el estándar de oro innegociable. Fíjate en la trampa: los anticoagulantes orales directos como rivaroxabán están formalmente contraindicados por alto riesgo de falla trombótica arterial.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2019 · Pregunta 27",
      stem: "Mujer de 30 años con antecedente de dos abortos espontáneos tempranos y una muerte fetal intrauterina a las 24 semanas presenta confirmación de Síndrome Antifosfolípido mediante anticardiolipinas IgG positivas a títulos altos en dos determinaciones separadas por 14 semanas. Actualmente consulta con 6 semanas de gestación confirmada. No tiene antecedentes de trombosis venosa ni arterial. ¿Cuál es el esquema farmacológico indicado para el manejo de su embarazo?",
      options: [
        { letter: "A", text: "Warfarina ajustada a INR 2.0 – 3.0 durante todo el embarazo" },
        { letter: "B", text: "Ácido acetilsalicílico 100 mg al día más Enoxaparina 40 mg al día subcutánea" },
        { letter: "C", text: "Prednisona 40 mg al día vía oral sin anticoagulantes" },
        { letter: "D", text: "Reposo absoluto en cama sin fármacos antitrombóticos" },
        { letter: "E", text: "Inmunoglobulina endovenosa mensual exclusiva" },
      ],
      correct: "B",
      explanation: "En el Síndrome Antifosfolípido obstétrico (sin antecedente de trombosis vascular previa), el esquema terapéutico estándar para asegurar la viabilidad gestacional y prevenir la pérdida fetal es la combinación sinérgica de Ácido Acetilsalicílico a dosis bajas (100 mg/día) asociado a Heparina de Bajo Peso Molecular a dosis profiláctica (Enoxaparina 40 mg/día SC), manteniéndose la heparina hasta 6 semanas postparto. La warfarina está contraindicada en la gestación por teratogenia.",
      say: {
        stem: "EUNACOM dos mil diecinueve, pregunta veintisiete. Mujer de treinta años con antecedentes de abortos tempranos y muerte fetal intrauterina con confirmación de anticardiolipinas a las catorce semanas de intervalo, que cursa embarazo de seis semanas.",
        question: "¿Cuál es el esquema farmacológico indicado para el manejo de su embarazo?",
        options: "Las opciones: warfarina con INR dos a tres, ácido acetilsalicílico más enoxaparina subcutánea profiláctica, prednisona oral sola, reposo absoluto en cama, o inmunoglobulina endovenosa mensual. Piénsalo.",
        answer: "Es la B. La combinación de aspirina cien miligramos al día con enoxaparina profiláctica cuarenta miligramos subcutáneos diarios es la terapia demostrada para evitar muertes fetales en el síndrome antifosfolípido obstétrico, debiendo mantenerse la heparina hasta seis semanas tras el parto.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2022 · Pregunta 11",
      stem: "Hombre de 35 años sin antecedentes mórbidos ingresa por tromboembolismo pulmonar segmentario agudo no masivo. En sus exámenes preoperatorios de hemostasia destaca un tiempo de protrombina (TP) normal y un tiempo de tromboplastina parcial activada (TTPK) prolongado (68 segundos, control 30 s). La prueba de mezclas con plasma normal no corrige el TTPK, pero este se normaliza completamente al agregar exceso de fosfolípidos a la muestra. ¿Cuál es la explicación biológica de este hallazgo de laboratorio?",
      options: [
        { letter: "A", text: "Déficit congénito severo de Factor VIII (Hemofilia A)" },
        { letter: "B", text: "Presencia de Anticoagulante Lúpico circulante" },
        { letter: "C", text: "Contaminación inadvertida de la muestra con heparina no fraccionada" },
        { letter: "D", text: "Presencia de anticuerpos inhibidores específicos del Factor IX" },
        { letter: "E", text: "Déficit severo de Factor de von Willebrand tipo 3" },
      ],
      correct: "B",
      explanation: "La prolongación del TTPK que no corrige con plasma normal (descartando déficit de factores de la vía intrínseca) pero que corrige al añadir un exceso de fosfolípidos exógenos demuestra la presencia de un inhibidor dependiente de fosfolípidos, fenómeno patognomónico del Anticoagulante Lúpico. Representa la paradoja del SAF: alarga los tiempos de coagulación in vitro en el laboratorio pero produce trombosis in vivo.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintidós, pregunta once. Paciente joven con tromboembolismo pulmonar que presenta tiempo de tromboplastina prolongado que no corrige al mezclar con plasma normal pero sí normaliza al agregar exceso de fosfolípidos.",
        question: "¿Cuál es la explicación biológica de este hallazgo de laboratorio?",
        options: "Las alternativas: déficit de factor ocho, presencia de anticoagulante lúpico circulante, contaminación con heparina, anticuerpos contra factor nueve, o déficit de factor de von Willebrand. Piénsalo.",
        answer: "La respuesta correcta es la B. Es la clásica prueba funcional del anticoagulante lúpico: alarga el tiempo de tromboplastina in vitro porque compite con los reactivos de fosfolípidos del tubo, pero al saturar la muestra con fosfolípidos el tiempo se normaliza, evidenciando el inhibidor lúpico.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2024 · Pregunta 36",
      stem: "¿Cuál de los siguientes criterios obstétricos clasifica formalmente como criterio clínico para Síndrome Antifosfolípido según los criterios internacionales de Sydney?",
      options: [
        { letter: "A", text: "Un único aborto espontáneo a las 6 semanas de gestación" },
        { letter: "B", text: "Una muerte fetal inexplicable de feto morfológicamente normal a las 22 semanas" },
        { letter: "C", text: "Parto prematuro a las 36 semanas secundario a rotura prematura de membranas" },
        { letter: "D", text: "Dos pérdidas gestacionales del primer trimestre no consecutivas" },
        { letter: "E", text: "Embarazo ectópico tubario intervenido quirúrgicamente" },
      ],
      correct: "B",
      explanation: "Los criterios de Sydney definen tres escenarios de morbilidad obstétrica en SAF: 1) Una o más muertes inexplicables de fetos morfológicamente normales a partir de las 10 semanas de gestación; 2) Uno o más partos prematuros de neonatos normales antes de las 34 semanas debido a preeclampsia severa, eclampsia o insuficiencia placentaria; y 3) Tres o más abortos espontáneos consecutivos inexplicados antes de las 10 semanas.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veinticuatro, pregunta treinta y seis. Se evalúan los criterios obstétricos diagnósticos según el consenso de Sydney.",
        question: "¿Cuál de los siguientes criterios clasifica formalmente como criterio clínico para síndrome antifosfolípido?",
        options: "Las alternativas: un único aborto a las seis semanas, una muerte fetal inexplicable de feto normal a las veintidós semanas, parto prematuro a las treinta y seis semanas, dos pérdidas no consecutivas, o embarazo ectópico. Piénsalo.",
        answer: "Es la B. Una muerte fetal inexplicable a partir de las diez semanas de gestación en un feto morfológicamente normal es criterio clínico suficiente para clasificar síndrome antifosfolípido obstétrico.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Paradoja del laboratorio y doce semanas", tag: "Criterios diagnósticos", kind: "alert", items: [
          { t: "Alarga el TTPK in vitro pero causa trombosis in vivo", d: "No corrige con plasma, sí con fosfolípidos",
            say: "Cerramos con las tres reglas de oro. Primero: el anticoagulante lúpico alarga el tiempo de tromboplastina in vitro pero es el mayor inductor de trombosis in vivo. Todo anticuerpo debe confirmarse a las doce semanas de intervalo." },
          { t: "Criterios clínicos de Sydney", d: "Trombosis vascular o pérdida gestacional",
            say: "Se exige al menos un criterio clínico de trombosis o morbilidad obstétrica junto a un criterio de laboratorio persistente para clasificar formalmente la enfermedad." },
        ] },
        { title: "Cumarínicos de por vida y alerta DOACs", tag: "Prevención secundaria", kind: "pharma", items: [
          { t: "Acenocumarol o Warfarina con INR 2.0 a 3.0", d: "Anticoagulación indefinida de por vida",
            say: "Segundo: en trombosis vascular el tratamiento de elección es acenocumarol o warfarina de por vida. Los anticoagulantes orales directos como rivaroxabán están terminantemente prohibidos por riesgo demostrado de trombosis arterial." },
          { t: "SAF Catastrófico de Asherson", d: "Heparina EV más pulsos y plasmaféresis",
            say: "El síndrome antifosfolípido catastrófico afecta a tres o más órganos en menos de una semana y exige manejo inmediato en UCI con heparina endovenosa, pulsos de corticoides y plasmaféresis." },
        ] },
        { title: "Manejo obstétrico protegido", tag: "Heparina y aspirina", kind: "criteria", items: [
          { t: "Aspirina 100 mg más Enoxaparina 40 mg SC", d: "Hasta seis semanas postparto",
            say: "Tercero: el síndrome antifosfolípido obstétrico sin trombosis previa se maneja con aspirina cien miligramos al día preconcepcional y enoxaparina profiláctica cuarenta miligramos subcutáneos diarios hasta seis semanas postparto." },
          { t: "Warfarina prohibida en el embarazo", d: "Teratogenicidad fetal demostrada",
            say: "Recuerda que los cumarínicos están prohibidos durante el embarazo por teratogenia. Si te llevas una sola idea de hoy: el anticoagulante lúpico alarga el tiempo in vitro pero tromba in vivo, la trombosis se trata con warfarina de por vida y jamás con rivaroxabán, y el embarazo se protege con aspirina y heparina. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo diagnóstico y terapéutico: Síndrome Antifosfolípido",
    root: N("start", "Sospecha de Síndrome Antifosfolípido", "Trombosis venosa o arterial en joven o morbilidad obstétrica",
      "Paciente con sospecha de síndrome antifosfolípido por evento trombótico inexplicable o complicaciones reproductivas.",
      ["", N("q", "¿Presencia de trombosis vascular o criterio obstétrico formal de Sydney?", "Verificación de criterio clínico",
        "Se evalúa el cumplimiento de al menos un criterio clínico objetivo.",
        ["NO: Sin eventos trombóticos ni pérdidas", N("alert", "No cumple criterios de SAF", "No requiere anticoagulación profiláctica",
          "Sin criterio clínico formal. La presencia de anticuerpos aislados sin clínica no constituye síndrome antifosfolípido ni justifica anticoagulación.")],
        ["SÍ: Criterio clínico presente", N("do", "Solicitar perfil antifosfolípido y repetir a las 12 semanas", "Anticoagulante lúpico, anticardiolipina y anti-beta dos glicoproteína uno",
          "Se solicita estudio de laboratorio completo y se repite obligatoriamente a las doce semanas para confirmar persistencia.",
          ["", N("q", "¿Persistencia serológica confirmada a las 12 semanas?", "Criterio de laboratorio estricto",
            "Se revisa la segunda determinación serológica.",
            ["NO: Anticuerpos transitorios", N("alert", "SAF descartado", "Anticuerpos transitorios reactivos a infección",
              "Los anticuerpos se negativizaron a las doce semanas. Se descarta síndrome antifosfolípido crónico.")],
            ["SÍ: Positividad persistente confirmada", N("ok", "Diagnóstico de Síndrome Antifosfolípido confirmado", "Estratificación terapéutica según escenario clínico",
              "Diagnóstico de síndrome antifosfolípido confirmado por criterios internacionales de Sydney.",
              ["", N("q", "¿Paciente cursando embarazo activo?", "Evaluación obstétrica versus vascular pura",
                "Se determina si el escenario actual es una gestación activa.",
                ["SÍ: Embarazo activo", N("do", "Aspirina 100 mg/día más Enoxaparina profiláctica o plena", "PROHIBIDO usar acenocumarol o warfarina por teratogenia",
                  "Prescribir ácido acetilsalicílico cien miligramos al día asociado a enoxaparina subcutánea profiláctica o terapéutica según antecedentes, manteniéndola hasta seis semanas postparto. Cumarínicos estrictamente contraindicados.")],
                ["NO: Paciente no gestante con trombosis", N("ok", "Acenocumarol o Warfarina indefinida (meta INR 2.0 a 3.0)", "CONTRAINDICADOS los nuevos anticoagulantes orales directos",
                  "Anticoagulación oral indefinida con antagonistas de vitamina K ajustados a INR entre dos y tres de por vida. Los anticoagulantes orales directos están formalmente contraindicados.")])])])])])]),
  },
};
