// Clase 1.7 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_2.cjs (reuma-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-07",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Tratamiento por objetivos, el uso correcto del metotrexato y la regla de oro en biológicos",
      say: "Bienvenidos. Hoy revisamos la farmacoterapia de la artritis reumatoide, uno de los temas más evaluados en el EUNACOM. Aprenderemos la estrategia de tratamiento por objetivos dentro de la ventana de oportunidad, las reglas estrictas para indicar metotrexato con su ácido fólico de protección, las alternativas durante la edad fértil y el embarazo, y la regla de oro de seguridad antes de comenzar cualquier terapia biológica. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Estrategia terapéutica",
      title: "Ventana de oportunidad y terapia puente",
      nodes: [
        { id: "dx", col: 0, row: 1, k: "start", t: "Diagnóstico confirmado de AR", s: "Primeras doce semanas de síntomas" },
        { id: "far", col: 1, row: 0, k: "good", t: "FARME convencional inmediato", s: "Metotrexato como fármaco ancla" },
        { id: "cor", col: 1, row: 2, k: "mech", t: "Corticoides como terapia puente", s: "Prednisona en dosis bajas transitorias" },
        { id: "lat", col: 2, row: 0, k: "alert", t: "Latencia de seis a doce semanas", s: "Tiempo que tarda en actuar el FARME" },
        { id: "ret", col: 2, row: 2, k: "good", t: "Retiro progresivo del corticoide", s: "Apenas el metotrexato hace efecto" },
        { id: "rem", col: 3, row: 1, k: "good", t: "Meta: remisión clínica estricta", s: "Monitoreo estricto cada tres meses" },
      ],
      edges: [
        { from: "dx", to: "far" },
        { from: "dx", to: "cor" },
        { from: "far", to: "lat" },
        { from: "cor", to: "ret" },
        { from: "lat", to: "rem" },
        { from: "ret", to: "rem" },
      ],
      steps: [
        { show: ["dx", "far"], note: "Ventana de oportunidad crítica",
          say: "Existe una ventana de oportunidad crítica durante las primeras doce semanas de evolución. Si iniciamos fármacos modificadores de la enfermedad en este período, frenamos el daño articular antes de que aparezcan las primeras erosiones irreversibles en el cartílago y el hueso subcondral." },
        { show: ["cor", "lat"], note: "El rol del corticoide como puente",
          say: "Los fármacos modificadores como el metotrexato tardan entre seis y doce semanas en alcanzar su pleno efecto terapéutico. Por eso indicamos corticoides orales en dosis bajas, como prednisona menor a diez miligramos al día, exclusivamente como terapia puente para calmar el dolor agudo y la rigidez." },
        { show: ["ret"], note: "Nunca corticoides en monoterapia",
          say: "Regla de oro: los corticoides o antiinflamatorios jamás deben usarse como tratamiento único en artritis reumatoide. Apenas el metotrexato hace efecto, el corticoide debe retirarse gradualmente para evitar complicaciones metabólicas y óseas." },
        { show: ["rem"], note: "Tratamiento por objetivos",
          say: "La meta es alcanzar la remisión clínica completa o un estado de baja actividad inflamatoria, ajustando la terapia cada tres meses si no se logran los objetivos según los puntajes clínicos estandarizados." },
      ],
    },

    {
      type: "points",
      kicker: "Estándar de oro",
      title: "Metotrexato: dosificación y reglas de seguridad",
      cards: [
        { title: "Dosis semanal obligatoria", tag: "Jamás administrar diario", kind: "alert", items: [
          { t: "15 a 25 mg una vez por semana", d: "Vía oral o subcutánea",
            say: "El metotrexato se prescribe en dosis de quince a veinticinco miligramos una sola vez a la semana, por vía oral o subcutánea. La vía subcutánea mejora la biodisponibilidad y reduce los síntomas digestivos." },
          { t: "Peligro mortal si se toma diario", d: "Provoca aplasia medular fulminante",
            say: "Atención con este error fatal: el metotrexato jamás se toma a diario. Tomarlo diariamente causa pancitopenia severa, mucositis destructiva y muerte por toxicidad medular." },
        ] },
        { title: "Ácido fólico obligatorio", tag: "Prevención de toxicidad", kind: "pharma", items: [
          { t: "Ácido fólico 5 mg semanales", d: "Administrado 24 a 48 horas post MTX",
            say: "Todo paciente que toma metotrexato debe recibir obligatoriamente ácido fólico, habitualmente cinco miligramos una vez a la semana, administrado veinticuatro a cuarenta y ocho horas después del metotrexato." },
          { t: "Reduce úlceras y toxicidad hepática", d: "Sin restar eficacia terapéutica",
            say: "El ácido fólico previene la estomatitis aftosa, las náuseas, la alopecia, la elevación de transaminasas y la toxicidad hematológica sin restarle potencia inmunosupresora al fármaco." },
        ] },
        { title: "Contraindicaciones absolutas", tag: "No prescribir", kind: "key", items: [
          { t: "Embarazo y lactancia materna", d: "Teratógeno mayor demostrado",
            say: "El embarazo es una contraindicación absoluta por su alto poder teratogénico y abortivo. Debe suspenderse al menos tres a seis meses antes de la concepción en ambos progenitores." },
          { t: "Daño hepático o renal severo", d: "Con filtración menor a treinta",
            say: "También está contraindicado en cirrosis hepática activa, consumo excesivo de alcohol y en insuficiencia renal con filtración glomerular menor a treinta mililitros por minuto." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Alternativas terapéuticas",
      title: "Otros fármacos modificadores convencionales",
      nodes: [
        { id: "far", col: 0, row: 1, k: "start", t: "FARME sintéticos convencionales", s: "Alternativas y combinaciones" },
        { id: "lef", col: 1, row: 0, k: "mech", t: "Leflunomida 20 mg al día", s: "Inhibe síntesis de pirimidinas" },
        { id: "sul", col: 1, row: 1, k: "good", t: "Sulfasalazina 2 a 3 g al día", s: "Segura en el embarazo" },
        { id: "hid", col: 1, row: 2, k: "mech", t: "Hidroxicloroquina 200 a 400 mg", s: "Antipalúdico inmunomodulador" },
        { id: "ret", col: 2, row: 2, k: "alert", t: "Toxicidad retiniana en ojo de buey", s: "Tamizaje oftalmológico anual" },
      ],
      edges: [
        { from: "far", to: "lef" },
        { from: "far", to: "sul" },
        { from: "far", to: "hid" },
        { from: "hid", to: "ret" },
      ],
      steps: [
        { show: ["far", "lef"], note: "Leflunomida como alternativa",
          say: "La leflunomida es la alternativa de primera línea ante intolerancia o fracaso al metotrexato. Actúa inhibiendo la síntesis de pirimidinas en dosis de veinte miligramos diarios. Al igual que el metotrexato, es altamente teratogénica." },
        { show: ["sul"], note: "Sulfasalazina y embarazo",
          say: "La sulfasalazina es el fármaco modificador de elección en mujeres en edad fértil con deseo de embarazo o durante la gestación y lactancia, administrada en dosis de dos a tres gramos al día con comprobada seguridad fetal." },
        { show: ["hid", "ret"], note: "Hidroxicloroquina y toxicidad ocular",
          say: "La hidroxicloroquina se utiliza en casos leves o en terapia combinada triple. Su efecto adverso más temido es la retinopatía en ojo de buey por depósito pigmentario, exigiendo control oftalmológico anual con campo visual tras cinco años de uso." },
      ],
    },

    {
      type: "points",
      kicker: "Monitoreo de seguridad",
      title: "Vigilancia de toxicidad en el tratamiento farmacológico",
      cards: [
        { title: "Controles periódicos de laboratorio", tag: "Cada 1 a 3 meses", kind: "criteria", items: [
          { t: "Hemograma y recuento de plaquetas", d: "Pesquisar leucopenia o anemia aplásica",
            say: "Debemos solicitar hemograma completo periódicamente para detectar leucopenia, anemia macrocítica o trombocitopenia inducidas por los fármacos citotóxicos." },
          { t: "Perfil hepático y transaminasas", d: "Suspender si suben sobre tres veces",
            say: "El perfil hepático se monitoriza periódicamente. Si las transaminasas superan tres veces el límite superior normal, el metotrexato o la leflunomida deben suspenderse transitoriamente." },
        ] },
        { title: "Toxicidad pulmonar aguda", tag: "Neumonitis por metotrexato", kind: "alert", items: [
          { t: "Tos seca disnea y fiebre subaguda", d: "Reacción de hipersensibilidad pulmonar",
            say: "Si un paciente en tratamiento con metotrexato consulta por tos seca, disnea progresiva y fiebre, sospecha neumonitis por metotrexato. Requiere suspensión inmediata del fármaco y estudio con tomografía de tórax." },
          { t: "Diferenciar de infección oportunista", d: "Descartar neumonía por Pneumocystis",
            say: "Es crucial diferenciar la neumonitis medicamentosa de una infección pulmonar bacteriana o por Pneumocystis jirovecii, dada la inmunosupresión de base." },
        ] },
        { title: "Lavado con colestiramina", tag: "Urgencia reproductiva", kind: "pharma", items: [
          { t: "Circulación enterohepática prolongada", d: "Leflunomida persiste hasta dos años",
            say: "La leflunomida tiene un metabolito activo con recirculación enterohepática prolongada que puede permanecer en el organismo hasta por dos años tras suspenderla." },
          { t: "Colestiramina 8 g tres veces al día", d: "Lavado durante once días consecutivos",
            say: "Si una paciente que toma leflunomida desea embarazarse de imprevisto, se debe realizar un protocolo de lavado acelerado con colestiramina ocho gramos tres veces al día durante once días." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Terapia biológica",
      title: "Fármacos biológicos y la regla de oro de la tuberculosis",
      cards: [
        { title: "Indicación de biológicos", tag: "Casos refractarios", kind: "criteria", items: [
          { t: "Fallo a dos FARME convencionales", d: "Incluyendo metotrexato en dosis plenas",
            say: "La terapia biológica se indica cuando el paciente persiste con actividad inflamatoria moderada a alta tras el uso de al menos dos fármacos convencionales, incluyendo metotrexato a dosis plenas de veinte a veinticinco miligramos semanales." },
          { t: "Familias de biológicos", d: "Anti-TNF, anti-IL-6 y anti-CD veinte",
            say: "Incluye inhibidores del factor de necrosis tumoral como infliximab, adalimumab y etanercept, anti-interleuquina seis como tocilizumab, y anti-CD veinte como rituximab." },
        ] },
        { title: "La regla de oro: Tuberculosis", tag: "Seguridad biológica mandatoria", kind: "alert", items: [
          { t: "Descartar TBC latente obligatorio", d: "PPD o IGRA más radiografía de tórax",
            say: "Esta es la regla de oro que siempre se pregunta en el examen: antes de iniciar cualquier biológico anti-TNF es mandatorio descartar tuberculosis latente con radiografía de tórax y prueba de tuberculina o IGRA." },
          { t: "Riesgo de TBC miliar fulminante", d: "Los anti-TNF rompen los granulomas",
            say: "El factor de necrosis tumoral sostiene la estructura del granuloma inmune. Bloquearlo libera los bacilos y causa tuberculosis miliar o extrapulmonar grave. Si la prueba es positiva, se realiza quimioprofilaxis con isoniazida por nueve meses." },
        ] },
        { title: "Tamizaje viral previo", tag: "Hepatitis virales crónicas", kind: "key", items: [
          { t: "Descartar Hepatitis B y C", d: "Riesgo de reactivación viral fulminante",
            say: "También es obligatorio realizar serología para virus de hepatitis B y hepatitis C, ya que los biológicos pueden provocar hepatitis fulminante por reactivación viral incontrolada." },
          { t: "Conducta ante foco infeccioso activo", d: "Contraindicación temporal de biológico",
            say: "Cualquier foco infeccioso bacteriano activo contraindica temporalmente el inicio o mantención del biológico hasta su completa curación." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Garantías en Chile",
      title: "Canasta GES de Artritis Reumatoide",
      nodes: [
        { id: "sos", col: 0, row: 1, k: "start", t: "Sospecha en atención primaria", s: "Poliartritis de manos mayor a 6 semanas" },
        { id: "der", col: 1, row: 1, k: "good", t: "Derivación expedita GES", s: "Confirmación por especialista" },
        { id: "far", col: 2, row: 0, k: "good", t: "Canasta de FARME convencionales", s: "Metotrexato con ácido fólico garantizados" },
        { id: "bio", col: 2, row: 2, k: "alert", t: "Comité de terapias biológicas", s: "Para pacientes refractarios" },
        { id: "rem", col: 3, row: 1, k: "good", t: "Frenar la progresión del daño", s: "Preservación de la capacidad laboral" },
      ],
      edges: [
        { from: "sos", to: "der" },
        { from: "der", to: "far" },
        { from: "far", to: "bio", label: "si persiste activa" },
        { from: "far", to: "rem" },
        { from: "bio", to: "rem" },
      ],
      steps: [
        { show: ["sos", "der"], note: "Confirmación diagnóstica expedita",
          say: "En Chile la artritis reumatoide cuenta con garantía explícita en salud. Ante la sospecha clínica de poliartritis simétrica en atención primaria, el paciente debe ser derivado a reumatología para confirmación diagnóstica con plazos garantizados." },
        { show: ["far"], note: "Fármacos garantizados",
          say: "El GES garantiza la entrega continua de fármacos modificadores sintéticos como metotrexato, sulfasalazina, leflunomida e hidroxicloroquina, junto con ácido fólico y controles analíticos periódicos." },
        { show: ["bio", "rem"], note: "Acceso a biológicos en refractarios",
          say: "Y para aquellos pacientes que no logran la remisión tras el tratamiento convencional optimizado, el sistema garantiza el acceso a fármacos biológicos de alto costo para evitar la discapacidad motora permanente." },
      ],
    },

    {
      type: "points",
      kicker: "Inmunizaciones y seguridad",
      title: "Vacunación en pacientes con terapias inmunosupresoras",
      cards: [
        { title: "Vacunas recomendadas", tag: "Microorganismos inactivados", kind: "normal", items: [
          { t: "Vacuna antineumocócica y antiinfluenza", d: "Administrar antes o durante el tratamiento",
            say: "Todo paciente reumático candidato a inmunosupresión debe recibir la vacuna anual contra la influenza y el esquema completo contra neumococo para prevenir infecciones respiratorias graves." },
          { t: "Vacuna contra hepatitis B y tétanos", d: "Conforme a calendario y serología basal",
            say: "También se recomienda completar el esquema contra hepatitis B en pacientes seronegativos antes de iniciar agentes biológicos o inmunosupresores mayores." },
        ] },
        { title: "Vacunas vivas atenuadas contraindicadas", tag: "Peligro de infección vacunal", kind: "alert", items: [
          { t: "Fiebre amarilla tres vírica y varicela", d: "Prohibidas bajo biológicos o FARME plenos",
            say: "Atención: las vacunas a virus vivos atenuados, como fiebre amarilla, tres vírica y varicela zóster atenuada, están formalmente contraindicadas en pacientes bajo inmunosupresión activa." },
          { t: "Intervalo mínimo de seguridad", d: "Administrar cuatro semanas antes del inicio",
            say: "Si el paciente requiere imperiosamente una vacuna de virus vivos, debe administrarse al menos cuatro semanas antes de iniciar la terapia biológica o los fármacos modificadores." },
        ] },
      ],
    },

    {
      type: "pathway",
      intro: "Veamos el algoritmo terapéutico escalonado completo de la artritis reumatoide.",
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Perfil comparativo de fármacos en Artritis Reumatoide",
      head: ["Fármaco", "Dosis y vía habitual", "Efecto adverso cardinal", "Regla de oro EUNACOM"],
      rows: [
        { cells: ["Metotrexato", "15 a 25 mg una vez a la semana", "Mielotoxicidad, hepatotoxicidad, náuseas", "Ácido fólico obligatorio · Jamás dar diario · Prohibido en embarazo"],
          say: "Repasemos la tabla de fármacos. Metotrexato: quince a veinticinco miligramos semanales. Produce toxicidad hepática y hematológica. Siempre asociar ácido fólico, jamás dar a diario y prohibido en embarazo." },
        { cells: ["Leflunomida", "20 mg una vez al día vía oral", "Diarrea, hipertensión, daño hepático", "Altamente teratogénica · requiere lavado con colestiramina si se planea gestación"],
          say: "Leflunomida: veinte miligramos diarios. Alternativa al metotrexato; muy teratogénica, requiere lavado con colestiramina si se planea embarazo." },
        { cells: ["Sulfasalazina", "2 a 3 g al día en tomas fraccionadas", "Intolerancia gástrica, neutropenia", "FARME de elección durante el embarazo y lactancia"],
          say: "Sulfasalazina: dos a tres gramos diarios. Es el fármaco modificador de elección durante el embarazo y la lactancia materna." },
        { cells: ["Hidroxicloroquina", "200 a 400 mg al día vía oral", "Retinopatía en ojo de buey", "Tamizaje oftalmológico anual obligado · Segura en embarazo"],
          say: "Hidroxicloroquina: doscientos a cuatrocientos miligramos diarios. Provoca maculopatía en ojo de buey, exigiendo tamizaje oftalmológico anual." },
        { cells: ["Terapia Biológica (Anti-TNF)", "Subcutánea o endovenosa periódica", "Reactivación de infecciones latentes", "Descartar siempre Tuberculosis con PPD o IGRA y radiografía antes de iniciar"],
          say: "Y los biológicos anti-TNF: antes de iniciar es mandatorio descartar tuberculosis latente y hepatitis virales para evitar infecciones fulminantes." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 48 años con diagnóstico reciente de artritis reumatoide seropositiva (anti-CCP fuertemente positivo) consulta para iniciar tratamiento. Presenta sinovitis activa en manos y pies con rigidez matinal de 2 horas. No tiene antecedentes de hepatopatía ni consumo de alcohol, y su hemograma y creatinina son normales. Prueba de embarazo negativa.",
      question: "¿Cuál es el esquema farmacológico de primera línea más adecuado para iniciar hoy?",
      options: [
        { letter: "A", text: "Prednisona 20 mg al día en monoterapia permanente" },
        { letter: "B", text: "Metotrexato 15 mg semanal + Ácido fólico 5 mg semanal + Prednisona 5 mg/día en pauta descendente" },
        { letter: "C", text: "Infliximab endovenoso cada 8 semanas en monoterapia" },
        { letter: "D", text: "Celecoxib 200 mg al día como único tratamiento" },
        { letter: "E", text: "Metotrexato 15 mg al día vía oral + Ácido fólico diario" },
      ],
      correct: "B",
      explanation: "El tratamiento de primera línea de la artritis reumatoide recién diagnosticada se basa en el inicio precoz de Metotrexato a dosis de 15 a 25 mg una vez por semana (fármaco ancla), asociado obligatoriamente a Ácido fólico (5 mg semanal) para prevenir toxicidad. Se añade un corticoide a dosis bajas (prednisona ≤ 5-7.5 mg/día) como terapia puente durante las primeras semanas mientras el metotrexato alcanza su efecto pleno. El metotrexato diario (opción E) es un error letal por riesgo de aplasia medular.",
      say: {
        stem: "Vamos al caso clínico. Mujer de cuarenta y ocho años con artritis reumatoide seropositiva recién confirmada con sinovitis activa y rigidez matinal prolongada. Tiene función hepática y renal normales y prueba de embarazo negativa.",
        question: "¿Cuál es el esquema farmacológico de primera línea más adecuado para iniciar hoy?",
        options: "Las opciones: prednisona permanente en monoterapia, metotrexato semanal con ácido fólico semanal más corticoide puente en dosis baja, infliximab en monoterapia, celecoxib exclusivo, o metotrexato diario con ácido fólico. Piénsalo.",
        answer: "La respuesta correcta es la B. El estándar de oro es el metotrexato administrado una vez a la semana, con ácido fólico semanal como protector y prednisona en dosis bajas transitoria como puente para calmar la inflamación durante las semanas de latencia. Fíjate en la trampa mortal de la E: dar metotrexato diario provoca aplasia medular fulminante. Y los antiinflamatorios o corticoides solos jamás frenan las erosiones.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2017 · Pregunta 21",
      stem: "Mujer de 40 años diagnosticada de artritis reumatoide activa inicia tratamiento con Metotrexato a dosis de 15 mg por semana. ¿Qué fármaco coadyuvante es indispensable prescribir conjuntamente de forma semanal para prevenir toxicidad hematológica, hepática y mucocutánea?",
      options: [
        { letter: "A", text: "Ácido fólico 5 mg semanal administrado 24 a 48 horas post-metotrexato" },
        { letter: "B", text: "Vitamina B12 1.000 mcg intramuscular mensual" },
        { letter: "C", text: "Hierro sacarato 200 mg endovenoso trisemanal" },
        { letter: "D", text: "Carbonato de calcio 1.500 mg diario más colecalciferol" },
        { letter: "E", text: "Omeprazol 40 mg diario en ayunas de por vida" },
      ],
      correct: "A",
      explanation: "El Metotrexato es un antagonista competitivo de la dihidrofolato reductasa. La administración complementaria de Ácido Fólico a dosis de 5 a 10 mg semanales (administrado 24 a 48 horas después del día de toma de metotrexato) es obligatoria, ya que reduce drásticamente los efectos adversos de intolerancia gastrointestinal, estomatitis aftosa, citopenias medulares y elevación de transaminasas sin mermar la eficacia clínica.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil diecisiete, pregunta veintiuno. Mujer de cuarenta años diagnosticada de artritis reumatoide activa que inicia tratamiento con metotrexato quince miligramos por semana.",
        question: "¿Qué fármaco coadyuvante es indispensable prescribir conjuntamente de forma semanal para prevenir toxicidad hematológica hepática y mucocutánea?",
        options: "Las alternativas: ácido fólico semanal a las veinticuatro o cuarenta y ocho horas del metotrexato, vitamina B doce mensual, hierro sacarato, calcio con vitamina D, u omeprazol diario. Piénsalo.",
        answer: "Es la A. La suplementación con ácido fólico es obligatoria en todo paciente bajo metotrexato. Administrar cinco a diez miligramos semanales previene úlceras orales, náuseas, citopenias y elevación de transaminasas sin quitarle eficacia inmunosupresora al fármaco.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2019 · Pregunta 08",
      stem: "Hombre de 50 años con artritis reumatoide severa mantiene actividad inflamatoria alta (DAS28 de 5.4) tras 6 meses de tratamiento optimizado con Metotrexato 25 mg/semana más Leflunomida 20 mg/día. Se decide iniciar terapia biológica con Adalimumab (anticuerpo monoclonal anti-TNF alfa). ¿Qué conducta médica es OBLIGATORIA e ineludible antes de administrar la primera dosis del biológico?",
      options: [
        { letter: "A", text: "Realizar artroscopía diagnóstica de rodilla con biopsia sinovial" },
        { letter: "B", text: "Descartar infección tuberculosa latente mediante PPD o IGRA y radiografía de tórax" },
        { letter: "C", text: "Administrar vacuna con virus vivos atenuados contra fiebre amarilla" },
        { letter: "D", text: "Suspender permanentemente el metotrexato 3 meses antes" },
        { letter: "E", text: "Indicar pulsos de metilprednisolona 1 g EV por 3 días consecutivos" },
      ],
      correct: "B",
      explanation: "Los fármacos bloqueadores del TNF-alfa interfieren de forma crítica con la formación y mantenimiento de los granulomas de defensa frente a Mycobacterium tuberculosis. Por ello, antes de iniciar cualquier anti-TNF es estrictamente obligatorio descartar tuberculosis latente mediante PPD (o IGRA) y radiografía de tórax. Si el tamizaje es positivo, debe iniciarse quimioprofilaxis con isoniazida al menos 1 mes antes del biológico.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil diecinueve, pregunta ocho. Hombre de cincuenta años con artritis reumatoide severa refractaria a dosis plenas de metotrexato y leflunomida en quien se decide iniciar terapia biológica con un inhibidor del factor de necrosis tumoral adalimumab.",
        question: "¿Qué conducta médica es obligatoria e ineludible antes de administrar la primera dosis del biológico?",
        options: "Las opciones: artroscopía con biopsia sinovial, descartar tuberculosis latente con PPD o IGRA y radiografía de tórax, vacunar con virus vivos, suspender el metotrexato, o pulsos de metilprednisolona. Piénsalo.",
        answer: "La respuesta correcta es la B. Los inhibidores del factor de necrosis tumoral rompen los granulomas inmunes. Si el paciente tiene tuberculosis latente, se desatará una tuberculosis miliar o extrapulmonar mortal. Por eso el tamizaje con PPD o IGRA y radiografía de tórax es mandatorio antes de iniciar.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2021 · Pregunta 44",
      stem: "¿Cuál de las siguientes es una CONTRAINDICACIÓN absoluta para el uso de Metotrexato en un paciente con artritis reumatoide recién diagnosticada?",
      options: [
        { letter: "A", text: "Hipertensión arterial controlada con enalapril" },
        { letter: "B", text: "Embarazo activo o deseo inminente de gestación" },
        { letter: "C", text: "Osteopenia en densitometría ósea de cadera" },
        { letter: "D", text: "Presencia de nódulos reumatoideos en olécranon" },
        { letter: "E", text: "Edad mayor a 55 años" },
      ],
      correct: "B",
      explanation: "El Metotrexato es un fármaco con potencial teratogénico y abortivo demostrado (categoría X), por lo que el embarazo activo o el deseo de embarazo en el corto plazo constituyen una contraindicación absoluta para su prescripción en mujeres y hombres en edad reproductiva. Debe suspenderse al menos 3 a 6 meses antes de planificar la concepción, pudiendo utilizarse Sulfasalazina como alternativa segura.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil veintiuno, pregunta cuarenta y cuatro. Se evalúa el perfil de seguridad del metotrexato.",
        question: "¿Cuál de las siguientes es una contraindicación absoluta para el uso de metotrexato en un paciente con artritis reumatoide recién diagnosticada?",
        options: "Las alternativas: hipertensión arterial controlada, embarazo activo o deseo inminente de gestación, osteopenia densitométrica, presencia de nódulos reumatoideos, o edad mayor a cincuenta y cinco años. Piénsalo.",
        answer: "Es la B. El metotrexato es altamente teratogénico y abortivo. El embarazo o la búsqueda activa de gestación es una contraindicación formal absoluta. Debe suspenderse al menos tres a seis meses antes de concebir.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 37",
      stem: "Una paciente de 52 años con artritis reumatoide en tratamiento con Metotrexato oral a dosis de 15 mg/semana desde hace 2 meses consulta a control. El examen físico muestra persistencia de 8 articulaciones tumefactas y rigidez matinal de 1 hora. Las transaminasas y el hemograma son estrictamente normales. ¿Cuál es la conducta terapéutica indicada según la estrategia Treat-to-Target?",
      options: [
        { letter: "A", text: "Suspender de inmediato el metotrexato y derivar a cirugía protésica" },
        { letter: "B", text: "Optimizar la dosis de metotrexato aumentándola a 20 – 25 mg por semana" },
        { letter: "C", text: "Cambiar el tratamiento a prednisona 60 mg al día en monoterapia" },
        { letter: "D", text: "Mantener la misma dosis por 2 años antes de evaluar cambios" },
        { letter: "E", text: "Suspender todo tratamiento inmunosupresor e indicar reposo absoluto" },
      ],
      correct: "B",
      explanation: "En la estrategia Treat-to-Target, si a los 2-3 meses de tratamiento inicial con metotrexato el paciente mantiene actividad inflamatoria clínica y los controles de laboratorio (hemograma y transaminasas) demuestran excelente tolerancia biológica, la conducta indicada es optimizar el fármaco escalando la dosis semanal hacia el rango pleno eficaz de 20 a 25 mg/semana (o cambiar a vía subcutánea).",
      say: {
        stem: "EUNACOM dos mil veintitrés, pregunta treinta y siete. Paciente de cincuenta y dos años con artritis reumatoide en metotrexato oral quince miligramos semanales desde hace dos meses. Mantiene articulaciones inflamadas con exámenes de laboratorio y transaminasas normales.",
        question: "¿Cuál es la conducta terapéutica indicada según la estrategia de tratamiento por objetivos?",
        options: "Las opciones: suspender metotrexato y derivar a prótesis, optimizar la dosis aumentándola a veinte o veinticinco miligramos por semana, cambiar a prednisona alta sola, mantener la misma dosis dos años, o suspender todo y reposo. Piénsalo.",
        answer: "La respuesta correcta es la B. Si el paciente tolera bien el fármaco pero persiste con inflamación clínica activa a los dos o tres meses, la conducta correcta es titular y optimizar la dosis de metotrexato hacia veinte o veinticinco miligramos semanales antes de considerar que fracasó.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Metotrexato semanal y fólico", tag: "Prescripción segura", kind: "key", items: [
          { t: "15 a 25 mg una vez por semana", d: "Con ácido fólico 5 mg semanal obligatorio",
            say: "Cerremos con las tres reglas de oro. El metotrexato se toma una vez por semana, nunca a diario, siempre acompañado de ácido fólico y prohibido en el embarazo." },
          { t: "Terapia puente con corticoides", d: "Dosis bajas mientras actúa el metotrexato",
            say: "Los corticoides a dosis bajas solo son una terapia puente durante las primeras semanas y jamás deben usarse como tratamiento único definitivo." },
        ] },
        { title: "Embarazo y alternativas", tag: "Seguridad reproductiva", kind: "alert", items: [
          { t: "Suspender MTX y leflunomida", d: "Al menos 3 a 6 meses antes de gestar",
            say: "Ante deseos de embarazo suspende metotrexato y leflunomida con meses de anticipación por su alta teratogenicidad." },
          { t: "Sulfasalazina y anti-TNF seguros", d: "Compatible con la gestación",
            say: "La sulfasalazina y ciertos biológicos anti-TNF son las opciones seguras para mantener controlada la artritis durante el embarazo." },
        ] },
        { title: "Seguridad en biológicos y GES", tag: "TBC y coberturas", kind: "criteria", items: [
          { t: "Descartar TBC latente obligatorio", d: "PPD o IGRA más radiografía de tórax",
            say: "Antes de cualquier biológico anti-TNF es mandatorio descartar tuberculosis latente y hepatitis virales para evitar infecciones fulminantes." },
          { t: "Garantía GES en Chile", d: "Acceso a FARME y biológicos refractarios",
            say: "Y en Chile la artritis reumatoide está garantizada por el GES desde la sospecha en atención primaria hasta los biológicos. Si te llevas una sola idea de hoy: el metotrexato es semanal con ácido fólico de escudo, y los biológicos exigen descartar tuberculosis antes de partir. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo terapéutico: Artritis Reumatoide",
    root: N("start", "Artritis Reumatoide confirmada", "Ventana de oportunidad < 12 semanas",
      "Paciente con diagnóstico de artritis reumatoide dentro de la ventana de oportunidad terapéutica.",
      ["", N("q", "¿Existe deseo de embarazo o gestación activa?", "Evaluación reproductiva inmediata",
        "Se evalúa si la paciente está embarazada o planea gestación a corto plazo.",
        ["SÍ: Deseo de embarazo o gestación", N("ok", "Sulfasalazina oral o Anti-TNF compatible", "PROHIBIDO metotrexato y leflunomida",
          "Metotrexato y leflunomida están estrictamente contraindicados por teratogenicidad. Iniciar sulfasalazina en dosis de dos a tres gramos diarios o terapia biológica anti-TNF compatible como certolizumab.")],
        ["NO: Sin planes de embarazo", N("do", "Metotrexato 15 mg/semana + Ácido fólico 5 mg/semana", "Más prednisona puente en dosis bajas",
          "Iniciar metotrexato en dosis de quince miligramos semanales vía oral o subcutánea, asociando ácido fólico semanal y prednisona puente a dosis bajas por seis a doce semanas.",
          ["", N("q", "¿Respuesta clínica a las 12 semanas?", "Evaluación por puntaje DAS28",
            "Se evalúa la respuesta clínica y reactantes de fase aguda tras tres meses de tratamiento.",
            ["Remisión o baja actividad inflamatoria", N("ok", "Mantener metotrexato + retirar corticoide", "Control clínico cada 3 a 6 meses",
              "Se alcanzó el objetivo terapéutico. Retirar progresivamente el corticoide y mantener metotrexato como terapia de mantención indefinida.")],
            ["Actividad moderada a alta persistente", N("do", "Optimizar dosis o combinar FARME sintéticos", "Subir MTX a 25 mg/semana o agregar Leflunomida",
              "Aumentar la dosis de metotrexato a veinticinco miligramos semanales o asociar un segundo fármaco convencional como leflunomida o sulfasalazina.",
              ["", N("q", "¿Fallo a dos esquemas convencionales?", "Evaluación de refractariedad",
                "Persistencia de inflamación severa a pesar de dos fármacos convencionales a dosis máximas.",
                ["Fallo a dos FARME convencionales", N("alert", "Descartar TBC latente e iniciar Terapia Biológica", "PPD o IGRA + Radiografía de tórax",
                  "Cumple criterio de falla terapéutica para escalar a biológicos bajo cobertura GES. Es mandatorio solicitar radiografía de tórax y PPD o IGRA para descartar tuberculosis latente antes de prescribir el inhibidor de TNF alfa.")])])])])])]),
  },
};
