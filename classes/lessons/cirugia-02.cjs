// Clase 11.2 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisiopatología, Guías de Tokio 2018, signos ecográficos cardinales, colecistectomía laparoscópica precoz y colecistostomía percutánea',
      say: 'Bienvenidos a la segunda clase de cirugía general. Hoy abordamos la colecistitis aguda, la segunda causa más frecuente de abdomen agudo quirúrgico y una patología de altísima prevalencia en Chile debido a nuestras elevadas tasas de colelitiasis. Al terminar esta clase vas a dominar la diferenciación con el cólico biliar, los criterios diagnósticos y de severidad de las Guías de Tokio dos mil dieciocho, los signos ecográficos cardinales y la indicación precisa entre colecistectomía precoz y colecistostomía percutánea. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cascada fisiopatológica',
      title: 'De la impactación litiásica a la sobreinfección bacteriana',
      nodes: [
        { id: 'imp', col: 0, row: 2, k: 'start', t: 'Impactación litiásica', s: 'Cálculo en bacinete o conducto cístico · 95% litiásica' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Estasis e hipertensión biliar', s: 'Distensión vesicular y dolor continuo mayor a 6 horas' },
        { id: 'qui', col: 2, row: 0, k: 'risk', t: 'Inflamación química parietal', s: 'Liberación de fosfolipasa A2 y prostaglandinas' },
        { id: 'isq', col: 2, row: 2, k: 'alert', t: 'Compromiso vascular e isquemia', s: 'Edema de pared, trombosis venosa y necrosis focal' },
        { id: 'bac', col: 3, row: 1, k: 'mech', t: 'Sobreinfección bacteriana secundaria', s: 'Enterobacterias: Escherichia coli, Klebsiella y Enterococo' },
        { id: 'com', col: 4, row: 2, k: 'trap', t: 'Complicaciones graves', s: 'Gangrena, enfisema parietal, perforación y peritonitis' },
      ],
      edges: [
        { from: 'imp', to: 'est', label: 'obstrucción mecánica' },
        { from: 'est', to: 'qui', label: 'activación enzimática' },
        { from: 'est', to: 'isq', label: 'isquemia mural' },
        { from: 'qui', to: 'bac', label: 'proliferación' },
        { from: 'isq', to: 'bac', label: 'traslocación' },
        { from: 'bac', to: 'com', label: 'progresión séptica' },
      ],
      steps: [
        {
          show: ['imp', 'est'],
          note: 'Impactación y estasis biliar',
          say: 'En más del noventa y cinco por ciento de los casos, la colecistitis aguda se desencadena por la impactación mecánica de un cálculo biliar en el cuello vesicular o en el conducto cístico. A diferencia del cólico biliar simple, donde el cálculo se desimpacta espontáneamente antes de cuatro a seis horas, en la colecistitis aguda la obstrucción persiste en el tiempo, provocando estasis de bilis y distensión progresiva de la vesícula.',
        },
        {
          show: ['qui'],
          note: 'Inflamación química aséptica inicial',
          say: 'La distensión y el contacto de la mucosa con sales biliares concentradas liberan fosfolipasa A dos y factores proinflamatorios locales. Esto genera una inflamación química aguda inicial de la pared vesicular, mediada por prostaglandinas, que explica el dolor continuo e intenso en el hipocondrio derecho que se prolonga más allá de seis horas.',
        },
        {
          show: ['isq', 'bac'],
          note: 'Isquemia parietal y colonización bacteriana',
          say: 'A medida que la presión intraluminal vesicular supera la presión capilar, se produce edema mural marcado, estasis venosa e isquemia parietal. En este tejido hipóxico proliferan secundariamente bacterias provenientes del duodeno o por vía portal. Los microorganismos más frecuentemente aislados son bacilos gramnegativos entéricos, liderados por Escherichia coli y Klebsiella pneumoniae, seguidos por Enterococcus faecalis.',
        },
        {
          show: ['com'],
          note: 'Progresión a necrosis y perforación',
          say: 'Si no se instaura tratamiento oportuno, la isquemia progresa a necrosis transmural, originando colecistitis gangrenosa. Esto puede evolucionar a perforación vesicular contenida con absceso pericolecístico, fístula colecistoentérica o perforación libre con peritonitis biliar difusa y shock séptico.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones anatomopatológicas',
      title: 'Evolución a formas complicadas y necrosis vesicular',
      cards: [
        {
          title: 'Colecistitis gangrenosa y empiema',
          kind: 'alert',
          items: [
            {
              text: 'Colecistitis gangrenosa: necrosis transmural parchada por trombosis vascular mural.',
              say: 'La colecistitis gangrenosa ocurre en hasta un treinta por ciento de los pacientes no operados a tiempo. La trombosis de las ramas de la arteria cística origina áreas de infarto y necrosis en la pared vesicular, perdiéndose el signo de Murphy por denervación de las fibras sensitivas locales.',
            },
            {
              text: 'Empiema vesicular: acumulación de exudado francamente purulento a tensión.',
              say: 'El empiema de vesícula biliar representa la transformación de la bilis estancada en pus espeso a gran presión intraluminal. Cursa con fiebre en agujas, escalofríos y alto riesgo de perforación inminente.',
            },
          ],
        },
        {
          title: 'Colecistitis enfisematosa en diabéticos',
          kind: 'alert',
          items: [
            {
              text: 'Infección fulminante por anaerobios productores de gas como Clostridium perfringens.',
              say: 'La colecistitis enfisematosa es una emergencia quirúrgica catastrófica que afecta predominantemente a varones adultos mayores con diabetes mellitus. Bacterias anaerobias como Clostridium perfringens proliferan rápidamente y producen gas intraluminal y mural.',
            },
            {
              text: 'Tomografía computarizada urgente y colecistectomía de urgencia sin demora.',
              say: 'La tomografía demuestra gas en la pared o en la luz vesicular sin fístula digestiva previa. Tiene una tasa de perforación y mortalidad cinco veces superior a la colecistitis litiásica estándar y exige cirugía urgente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología y presentación clínica',
      title: 'Cuadro cardinal: dolor continuo, Murphy clínico y masas palpables',
      cards: [
        {
          title: 'Dolor y localización típica',
          kind: 'criteria',
          items: [
            {
              text: 'Dolor continuo en hipocondrio derecho o epigastrio mayor a seis horas de evolución.',
              say: 'La manifestación clínica fundamental es el dolor en hipocondrio derecho o epigastrio continuo, sordo y progresivo que dura más de seis horas, típicamente desencadenado tras una ingesta copiosa rica en grasas. Con frecuencia se irradia hacia la región subescapular derecha o al dorso, y se acompaña de náuseas, vómitos y fiebre mantenida.',
            },
            {
              text: 'Diferencia crucial con cólico biliar: duración mayor a seis horas y síndrome inflamatorio.',
              say: 'La regla temporal es tajante para el EUNACOM: si el dolor cede antes de seis horas y no hay fiebre ni leucocitosis, estamos ante un cólico biliar simple. Si el dolor persiste por más de seis horas asociado a fiebre y dolor exquisito al examen, el diagnóstico es colecistitis aguda.',
            },
          ],
        },
        {
          title: 'Signo de Murphy clínico y masa palpable',
          kind: 'alert',
          items: [
            {
              text: 'Signo de Murphy: detención súbita de la inspiración profunda al palpar el punto cístico.',
              say: 'El signo de Murphy clínico es el sello del examen físico. El médico coloca sus dedos bajo el reborde costal derecho a nivel de la línea medioclavicular y pide al paciente que realice una inspiración profunda. Al descender el diafragma, la vesícula inflamada choca contra la mano del examinador, produciendo un dolor punzante intolerable que detiene bruscamente la respiración.',
            },
            {
              text: 'Vesícula palpable o empastamiento en hipocondrio derecho en un tercio de los pacientes.',
              say: 'En un tercio de los casos puede palparse una masa firme y dolorosa en el hipocondrio derecho. Esta masa no siempre es solo la vesícula distendida, sino un plastrón vesicular constituido por el epiplón mayor que acude a bloquear el proceso inflamatorio agudo.',
            },
          ],
        },
        {
          title: 'Alerta clínica: Ictericia en patología biliar',
          kind: 'key',
          items: [
            {
              text: 'La colecistitis aguda simple habitualmente no produce ictericia marcada.',
              say: 'Un concepto clave evaluado repetidamente en el examen: la colecistitis aguda aislada no complicada cursa con bilirrubina normal o levemente elevada menor a dos miligramos por decilitro. La presencia de ictericia franca con bilirrubina total sobre cuatro miligramos por decilitro obliga a sospechar coledocolitiasis concomitante.',
            },
            {
              text: 'Síndrome de Mirizzi: compresión extrínseca del colédoco por un cálculo gigante en el cístico.',
              say: 'Otra causa de ictericia en colecistitis es el síndrome de Mirizzi, en el cual un cálculo de gran tamaño impactado en el bacinete o cístico comprime extrínsecamente el conducto hepático común o fistuliza hacia él, generando colestasia obstructiva sin necesidad de que el cálculo haya migrado al colédoco.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Consenso internacional',
      title: 'Guías de Tokio 2018: Criterios diagnósticos de colecistitis aguda',
      head: ['Categoría Tokio', 'Criterios clínicos y de laboratorio', 'Parámetros objetivos', 'Interpretación diagnóstica'],
      rows: [
        {
          cells: [
            'A. Signos locales de inflamación',
            'Signo de Murphy positivo · dolor o hipersensibilidad en hipocondrio derecho · masa palpable',
            'Murphy clínico o masa en HCD a la palpación profunda',
            'La presencia de al menos un parámetro local define la categoría A.',
          ],
          say: 'El primer pilar de Tokio dos mil dieciocho es la inflamación local en hipocondrio derecho, representada por el signo de Murphy positivo, dolor focal o la palpación de una masa o empastamiento en dicha zona.',
        },
        {
          cells: [
            'B. Signos sistémicos de inflamación',
            'Fiebre mayor a treinta y ocho grados · leucocitosis periférica · elevación de PCR',
            'Leucocitos < 4.000 o > 10.000/mm³ · PCR ≥ 3 mg/dL',
            'Sospecha diagnóstica: al menos un criterio de A sumado a un criterio de B.',
          ],
          say: 'El segundo pilar son los signos de respuesta inflamatoria sistémica, definidos por fiebre mayor a treinta y ocho grados, leucocitosis sobre diez mil o proteína C reactiva elevada. Con un criterio local y uno sistémico tenemos una sospecha diagnóstica formal.',
        },
        {
          cells: [
            'C. Hallazgos imagenológicos',
            'Signos confirmatorios en ecografía abdominal o tomografía computarizada',
            'Cálculo impactado · engrosamiento parietal ≥ 4 mm · Murphy ecográfico · líquido perivesicular',
            'Diagnóstico definitivo: presencia de un criterio de A más uno de B más confirmación en C.',
          ],
          say: 'El tercer pilar es la confirmación por imágenes, habitualmente ecografía. Para el diagnóstico definitivo confirmado se requiere estrictamente un criterio de la categoría A, un criterio de la categoría B y la confirmación por imagen de la categoría C.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico por imágenes',
      title: 'Signos ecográficos cardinales en colecistitis aguda',
      cards: [
        {
          title: 'Ecografía abdominal: examen de primera línea',
          kind: 'key',
          items: [
            {
              text: 'Litiasis vesicular impactada en el cuello o conducto cístico.',
              say: 'La ecografía abdominal es el método de elección absoluto por su sensibilidad superior al noventa por ciento y bajo costo. El primer hallazgo es la visualización directa del cálculo biliar que no se moviliza con los cambios de decúbito del paciente, alojado fijamente en el bacinete.',
            },
            {
              text: 'Signo de Murphy ecográfico positivo: dolor exquisito al presionar la vesícula con el transductor.',
              say: 'El signo de Murphy ecográfico es el hallazgo con mayor especificidad diagnóstica de todos. Consiste en reproducir exactamente el dolor del paciente al ejercer presión focal directa sobre la vesícula visualizada en tiempo real con el transductor ecográfico.',
            },
          ],
        },
        {
          title: 'Signos parietales y perivesiculares',
          kind: 'criteria',
          items: [
            {
              text: 'Engrosamiento de la pared vesicular mayor o igual a cuatro milímetros.',
              say: 'El engrosamiento mural mayor o igual a cuatro milímetros, a menudo con aspecto en doble contorno o halo hipoecogénico submucoso por edema, es un criterio ecográfico fundamental. Debe interpretarse con cautela si coexiste ascitis, cirrosis hepática o insuficiencia cardíaca.',
            },
            {
              text: 'Líquido libre perivesicular y distensión vesicular mayor a ocho por cuatro centímetros.',
              say: 'La presencia de una lámina anecoica de líquido libre en el lecho vesicular y la sobredistensión con diámetro mayor a ocho centímetros longitudinal o cuatro transversal apoyan fuertemente el diagnóstico agudo.',
            },
          ],
        },
        {
          title: 'Tomografía computarizada y centelleografía HIDA',
          kind: 'alert',
          items: [
            {
              text: 'Tomografía axial computarizada: indicada ante sospecha de complicaciones graves.',
              say: 'La tomografía computarizada de abdomen se solicita si se sospecha colecistitis gangrenosa, perforación, pancreatitis aguda biliar concomitante o colecistitis enfisematosa con gas en la pared vesicular.',
            },
            {
              text: 'Centelleografía con HIDA marcado con tecnecio noventa y nueve: máxima sensibilidad.',
              say: 'La centelleografía biliar con derivados del ácido iminodiacético marcados con tecnecio noventa y nueve es el examen con mayor sensibilidad y especificidad, superior al noventa y siete por ciento. Si el radiotrazador llena el colédoco y duodeno pero no entra a la vesícula tras cuatro horas, confirma la obstrucción cística aguda.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estratificación de severidad',
      title: 'Clasificación de severidad Tokio 2018 y disfunción orgánica',
      head: ['Grado de severidad', 'Criterios clínicos y de laboratorio', 'Marcadores de gravedad', 'Conducta terapéutica principal'],
      rows: [
        {
          cells: [
            'Grado I: Leve',
            'Colecistitis aguda confinada a la vesícula sin criterios de moderada ni severa',
            'Sin disfunción orgánica · paciente joven o sin comorbilidad relevante',
            'Colecistectomía laparoscópica precoz dentro de las setenta y dos horas.',
          ],
          say: 'El Grado uno o leve corresponde a una inflamación aguda confinada a la vesícula sin disfunción orgánica en un paciente sin comorbilidades graves. La conducta de elección es la colecistectomía laparoscópica precoz.',
        },
        {
          cells: [
            'Grado II: Moderada',
            'Inflamación local avanzada o evolución prolongada sin falla orgánica',
            'Leucocitos > 18.000 · masa dolorosa en HCD · síntomas > 72 h · gangrena o enfisema',
            'Colecistectomía laparoscópica precoz por equipo quirúrgico experimentado.',
          ],
          say: 'El Grado dos o moderada se define por leucocitosis mayor a dieciocho mil, masa dolorosa palpable, duración del cuadro superior a setenta y dos horas o marcada inflamación local como gangrena o enfisema. También se indica colecistectomía laparoscópica precoz por cirujanos experimentados.',
        },
        {
          cells: [
            'Grado III: Severa',
            'Disfunción de al menos un órgano o sistema vital',
            'Cardiovascular con vasopresores · neurológica · PaFi < 300 · creatinina > 2.0 · plaquetas < 100.000',
            'Manejo intensivo en UPC y colecistostomía percutánea si hay riesgo quirúrgico prohibitivo.',
          ],
          say: 'El Grado tres o grave se caracteriza por la falla de al menos un órgano vital: hipotensión refractaria a volumen que requiere vasopresores, compromiso de conciencia, insuficiencia respiratoria, creatinina mayor a dos o trombocitopenia bajo cien mil. Requiere soporte intensivo y descompresión percutánea si el riesgo de pabellón es prohibitivo.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo terapéutico',
      title: 'Toma de decisiones y momento quirúrgico en colecistitis aguda',
      say: 'Revisemos el algoritmo terapéutico para la colecistitis aguda según la severidad clínica y el riesgo quirúrgico del paciente.',
    },

    {
      type: 'points',
      kicker: 'Técnica quirúrgica y oportunidad',
      title: 'Colecistectomía laparoscópica precoz versus diferida',
      cards: [
        {
          title: 'Momento óptimo: dentro de setenta y dos horas',
          kind: 'key',
          items: [
            {
              text: 'Colecistectomía laparoscópica precoz en la misma hospitalización de urgencia.',
              say: 'La recomendación clínica indiscutible es realizar la colecistectomía laparoscópica precoz, idealmente dentro de las primeras setenta y dos horas del inicio de los síntomas o durante el mismo ingreso hospitalario. En esta fase inicial predomina el edema tisular, lo que facilita los planos de disección entre la vesícula y el lecho hepático.',
            },
            {
              text: 'Menor tiempo de hospitalización total y menor costo para el sistema sanitario.',
              say: 'La evidencia demuestra que la cirugía precoz disminuye significativamente la estadía hospitalaria total, los costos asociados y el ausentismo laboral, con tasas de complicaciones equivalentes o menores que la cirugía diferida.',
            },
          ],
        },
        {
          title: 'El mito de enfriar el cuadro con antibióticos',
          kind: 'alert',
          items: [
            {
              text: 'Diferir la cirugía a seis semanas triplica el riesgo de reingresos de urgencia.',
              say: 'Una de las trampas conceptuales más comunes del EUNACOM es sugerir dar antibióticos por vía oral y programar la cirugía en seis a ocho semanas. Esta conducta provoca que hasta un veinte por ciento de los pacientes reingrese antes de tiempo por dolor intratable, pancreatitis aguda litiásica o perforación vesicular.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad quirúrgica',
      title: 'Visión Crítica de Seguridad de Strasberg',
      cards: [
        {
          title: 'Requisitos anatómicos obligatorios',
          kind: 'criteria',
          items: [
            {
              text: 'Tres criterios de seguridad antes de colocar clips o cortar cualquier estructura tubular.',
              say: 'Para erradicar la temida lesión iatrogénica de la vía biliar principal, el cirujano debe documentar formalmente la visión crítica de seguridad de Strasberg antes de cortar o engrapar el conducto cístico o la arteria cística.',
            },
            {
              text: 'Liberar el triángulo hepatocístico de grasa y tejido fibroso inflamatorio.',
              say: 'El primer paso es vaciar completamente el triángulo hepatocístico de Calot, resecando toda la grasa y adherencias peritoneales para visualizar con total nitidez el conducto y la arteria.',
            },
          ],
        },
        {
          title: 'Disección del tercio inferior y visualización dual',
          kind: 'key',
          items: [
            {
              text: 'Separar el tercio inferior de la vesícula de la placa cística del lecho hepático.',
              say: 'El segundo paso es separar al menos el tercio inferior del cuerpo vesicular de la placa hepática, exponiendo la superficie inferior de la vesícula.',
            },
            {
              text: 'Confirmar que única y exclusivamente dos estructuras tubulares entran a la vesícula.',
              say: 'El tercer paso consiste en verificar sin ninguna sombra de duda que solo dos estructuras tubulares ingresan a la vesícula: el conducto cístico y la arteria cística. Si hay dudas anatómicas, la conducta es realizar colangiografía intraoperatoria o convertir a cirugía abierta.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo en situaciones críticas',
      title: 'Colecistitis alitiásica y Colecistostomía percutánea',
      cards: [
        {
          title: 'Colecistitis aguda alitiásica en UPC',
          kind: 'alert',
          items: [
            {
              text: 'Afecta a pacientes críticos: politraumatizados, grandes quemados o con sepsis severa.',
              say: 'La colecistitis alitiásica representa el cinco por ciento de las colecistitis pero causa la mayor mortalidad. Ocurre en pacientes graves en unidades de cuidados intensivos, sometidos a ventilación mecánica prolongada, nutrición parenteral total o shock con drogas vasoactivas.',
            },
            {
              text: 'Fisiopatología: isquemia microvascular por bajo flujo y éstasis biliar espesa.',
              say: 'Se produce por una combinación destructiva de isquemia parietal por hipoperfusión tisular y acumulación de bilis espesa no estimulada por vía enteral. Progresa con gran rapidez a gangrena y perforación.',
            },
          ],
        },
        {
          title: 'Colecistostomía percutánea de salvataje',
          kind: 'pharma',
          items: [
            {
              text: 'Punción y drenaje vesicular guiado por ecografía bajo anestesia local.',
              say: 'En pacientes con colecistitis Grado tres en shock séptico o con riesgo anestésico prohibitivo por cardiopatía descompensada reciente, la colecistostomía percutánea transhepática guiada por ecografía o tomografía es el procedimiento salvador de elección.',
            },
            {
              text: 'Descomprime la bilis purulenta a tensión permitiendo estabilizar al paciente.',
              say: 'El catéter drena la infección a tensión de inmediato. Esto yugula la bacteriemia y permite diferir la colecistectomía para cuando el paciente recupere su estabilidad médica general.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Fístulas biliodigestivas',
      title: 'Fístula colecistoduodenal e Íleo Biliar',
      cards: [
        {
          title: 'Patogenia de la fístula y migración litiásica',
          kind: 'criteria',
          items: [
            {
              text: 'Erosión transmural crónica por cálculo de gran tamaño hacia el bulbo duodenal.',
              say: 'Cuando un cálculo vesicular de gran tamaño, mayor a dos centímetros y medio, inflama crónicamente la pared adyacente al duodeno, puede erosionarla y crear una fístula colecistoduodenal. El cálculo cae a la luz intestinal y viaja por el intestino delgado.',
            },
            {
              text: 'Impactación en la válvula ileocecal produciendo obstrucción mecánica intestinal.',
              say: 'Al llegar al íleon terminal, el segmento más estrecho y con menor distensibilidad, el cálculo se impacta en la válvula ileocecal, produciendo un cuadro de obstrucción mecánica de intestino delgado denominado íleo biliar.',
            },
          ],
        },
        {
          title: 'Tríada de Rigler y resolución quirúrgica',
          kind: 'alert',
          items: [
            {
              text: 'Tríada radiológica de Rigler: neumobilia, niveles hidroaéreos y cálculo ectópico.',
              say: 'La radiografía o tomografía revela la clásica tríada de Rigler: primero, neumobilia o gas en la vía biliar por la fístula; segundo, dilatación de asas delgadas con niveles hidroaéreos; y tercero, un cálculo radiopaco calcificado ectópico alojado en la fosa ilíaca derecha.',
            },
            {
              text: 'Tratamiento de urgencia: enterolitotomía proximal a la obstrucción.',
              say: 'El tratamiento de urgencia no es operar la vesícula en ese momento. Consiste en realizar una laparotomía o laparoscopía con enterolitotomía: se incide el intestino inmediatamente proximal al cálculo, se extrae la piedra y se sutura el asa.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas del EUNACOM en patología vesicular y biliar',
      head: ['Patología simuladora', 'Contexto clínico típico', 'Mecanismo o hallazgo clave', 'Conducta diagnóstica o terapéutica'],
      rows: [
        {
          cells: [
            'Cólico biliar simple',
            'Mujer de mediana edad tras ingesta de grasas con dolor epigástrico o en hipocondrio derecho',
            'Dolor de menos de cuatro a seis horas de duración, sin fiebre, sin leucocitosis y sin engrosamiento parietal',
            'Analgesia con antiinflamatorios no esteroidales o antiespasmódicos y colecistectomía electiva ambulatoria.',
          ],
          say: 'El cólico biliar simple es autolimitado a menos de seis horas de duración. No presenta fiebre, ni taquicardia ni leucocitosis, y la ecografía muestra litiasis móvil sin engrosamiento de pared ni líquido perivesicular. Se trata con analgesia y colecistectomía electiva programada.',
        },
        {
          cells: [
            'Coledocolitiasis sintomática',
            'Dolor cólico persistente asociado a ictericia franca, coluria y acolia sin signos de peritonitis',
            'Bilirrubina total elevada a predominio directo y fosfatasas alcalinas aumentadas con dilatación de vía biliar',
            'Colangiorresonancia confirmatoria seguida de colangiopancreatografía retrógrada endoscópica terapéutica.',
          ],
          say: 'Si un paciente con litiasis presenta ictericia marcada con bilirrubina sobre cuatro miligramos y patrón colestásico, la causa no es colecistitis simple sino coledocolitiasis. Se confirma con colangiorresonancia y se resuelve con colangiopancreatografía retrógrada endoscópica.',
        },
        {
          cells: [
            'Colangitis aguda ascendente',
            'Paciente con fiebre alta con calofríos en agujas, ictericia y dolor en hipocondrio derecho',
            'Tríada de Charcot o péntada de Reynolds con shock hemodinámico y alteración mental',
            'Emergencia médica absoluta: hidratación, antibióticos endovenosos y descompresión biliar urgente con CPRE.',
          ],
          say: 'La colangitis aguda comparte el dolor en hipocondrio derecho pero agrega la tríada de Charcot con fiebre en agujas e ictericia franca. Si se suma shock o letargo conforma la péntada de Reynolds. Requiere antibióticos endovenosos y descompresión biliar endoscópica urgente.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 151',
      caseText: 'Mujer de cincuenta y cinco años con colecistitis aguda de cuarenta y ocho horas de evolución. Se encuentra estable hemodinámicamente, con fiebre de treinta y ocho grados Celsius y catorce mil leucocitos por milímetro cúbico. ¿Cuál es el manejo quirúrgico más adecuado?',
      question: '¿Cuál es el manejo quirúrgico más adecuado?',
      options: [
        { letter: 'A', text: 'Colecistectomía laparoscópica precoz dentro de las setenta y dos horas', isCorrect: true },
        { letter: 'B', text: 'Cirugía electiva diferida en seis semanas tras tratamiento antibiótico', isCorrect: false },
        { letter: 'C', text: 'Drenaje percutáneo y cirugía diferida', isCorrect: false },
        { letter: 'D', text: 'Solo antibióticos endovenosos y observación ambulatoria', isCorrect: false },
        { letter: 'E', text: 'Colecistostomía abierta de urgencia', isCorrect: false },
      ],
      correct: 'A',
      say: {
        stem: 'Revisemos esta pregunta oficial del examen de julio de dos mil veinticinco. Una paciente de cincuenta y cinco años presenta colecistitis aguda de cuarenta y ocho horas de evolución. Está hemodinámicamente estable, con fiebre de treinta y ocho grados y catorce mil leucocitos.',
        question: 'Nos consultan por el manejo quirúrgico más adecuado.',
        options: 'Las alternativas son: opción A, colecistectomía laparoscópica precoz dentro de setenta y dos horas; opción B, cirugía electiva en seis semanas; opción C, drenaje percutáneo y cirugía diferida; opción D, solo antibióticos endovenosos y observación; y opción E, colecistostomía abierta de urgencia. Piénsalo.',
        answer: 'La respuesta correcta es la opción A. En un paciente con colecistitis aguda Grado uno o dos sin disfunción de órganos y con menos de setenta y dos horas de evolución, la colecistectomía laparoscópica precoz es la conducta de elección categórica. Enfriar el cuadro con antibióticos para operar en seis semanas aumenta complicaciones y estadía hospitalaria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Un hombre de setenta y ocho años con antecedentes de infarto miocárdico reciente hace tres semanas y enfermedad pulmonar obstructiva crónica severa oxigenodependiente, consulta por fiebre de treinta y ocho coma cinco grados y dolor en hipocondrio derecho de cuatro días de evolución. Al examen físico destaca presión arterial de ochenta con cincuenta milímetros de mercurio que requiere noradrenalina por vía central, taquicardia de ciento diez por minuto y signo de Murphy intensamente positivo. La ecografía confirma colecistitis aguda litiásica Grado tres con pared engrosada y líquido perivesicular. El equipo de anestesiología califica el riesgo quirúrgico como prohibitivo. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Colecistectomía abierta de urgencia de inmediato', isCorrect: false },
        { letter: 'B', text: 'Colecistostomía percutánea transhepática guiada por imágenes más antibióticos endovenosos', isCorrect: true },
        { letter: 'C', text: 'Tratamiento exclusivamente médico con antibióticos sin descompresión biliar', isCorrect: false },
        { letter: 'D', text: 'Colangiopancreatografía retrógrada endoscópica con esfinterotomía', isCorrect: false },
        { letter: 'E', text: 'Observación en sala básica con hidratación endovenosa', isCorrect: false },
      ],
      correct: 'B',
      say: {
        stem: 'Analicemos este caso clásico de paciente de alto riesgo. Un hombre de setenta y ocho años con infarto reciente y daño pulmonar severo cursa con colecistitis aguda Grado tres en shock séptico que requiere noradrenalina y con riesgo anestésico prohibitivo.',
        question: 'Se pregunta por la conducta más adecuada en este escenario.',
        options: 'Las alternativas son: opción A, colecistectomía abierta de urgencia; opción B, colecistostomía percutánea transhepática guiada por imágenes más antibióticos endovenosos; opción C, antibióticos exclusivos sin descompresión; opción D, colangiopancreatografía retrógrada endoscópica; y opción E, observación en sala básica. Piénsalo.',
        answer: 'La respuesta correcta es la opción B. Ante un paciente con colecistitis aguda Grado tres con inestabilidad hemodinámica y comorbilidades prohibitivas para someterse a anestesia general, la colecistostomía percutánea descompresiva bajo anestesia local es el procedimiento salvador de elección.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en colecistitis aguda',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'Dolor en hipocondrio derecho mayor a seis horas y Murphy orientan a colecistitis.',
              say: 'Primera regla: la persistencia del dolor en hipocondrio derecho por más de seis horas asociado a signo de Murphy positivo y síndrome inflamatorio separa categóricamente la colecistitis del cólico biliar simple.',
            },
            {
              text: 'La ecografía abdominal es la primera línea diagnóstica obligada.',
              say: 'Segunda regla: la ecografía abdominal es el método de elección inicial; el signo de Murphy ecográfico es el hallazgo más específico y el engrosamiento parietal mayor a cuatro milímetros es el criterio morfológico cardinal.',
            },
            {
              text: 'Colecistectomía laparoscópica precoz dentro de las setenta y dos horas.',
              say: 'Tercera regla: en pacientes Grado uno y Grado dos operables, el tratamiento estándar es la colecistectomía laparoscópica precoz dentro de setenta y dos horas; nunca diferir innecesariamente para enfriar el cuadro.',
            },
            {
              text: 'Colecistostomía percutánea en pacientes en shock o con riesgo prohibitivo.',
              say: 'Cuarta regla: en pacientes con falla orgánica Grado tres o riesgo anestésico prohibitivo, la colecistostomía percutánea bajo anestesia local es el procedimiento salvador de urgencia.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'La ictericia marcada en colecistitis obliga a descartar coledocolitiasis o Mirizzi.',
              say: 'Si te llevas una sola idea de hoy: la colecistitis aguda no complicada cursa sin ictericia; si hay bilirrubina elevada sobre cuatro miligramos por decilitro, debes buscar activamente una coledocolitiasis o un síndrome de Mirizzi. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico y Manejo de Colecistitis Aguda',
    root: N(
      'start',
      'Sospecha de colecistitis aguda',
      'Dolor continuo en HCD > 6 horas · fiebre · Murphy (+)',
      'Iniciamos el enfrentamiento confirmando el diagnóstico mediante ecografía abdominal urgente.',
      [
        'Ecografía confirma colecistitis',
        N(
          'q',
          'Evaluar estratificación de Tokio y riesgo quirúrgico',
          'Cálculo impactado · engrosamiento parietal ≥ 4 mm · Murphy ecográfico (+)',
          'Confirmada la colecistitis aguda, estratificamos la gravedad según las Guías de Tokio dos mil dieciocho.',
          [
            'Grado I o Grado II en paciente operable',
            N(
              'do',
              'Colecistectomía laparoscópica precoz',
              'Realizar dentro de las 72 horas desde el inicio de síntomas',
              'En pacientes Grado uno o dos candidatos a cirugía, indicamos colecistectomía laparoscópica precoz dentro de setenta y dos horas.',
              [
                'Cirugía laparoscópica con visión crítica',
                N(
                  'ok',
                  'Obtener Visión Crítica de Seguridad de Strasberg',
                  'Triángulo despejado · tercio inferior liberado · 2 estructuras',
                  'Antes de clipear o cortar aseguramos la visión crítica de Strasberg para proteger la vía biliar.',
                ),
              ],
              [
                'Triángulo congelado o anatomía distorsionada',
                N(
                  'alert',
                  'Cirugía de rescate: colecistectomía subtotal o conversión',
                  'Evitar a toda costa la lesión iatrogénica de la vía biliar',
                  'Si la inflamación extrema impide identificar con certeza las estructuras, convertimos a cirugía abierta o realizamos colecistectomía subtotal.',
                ),
              ],
            ),
          ],
          [
            'Grado III o riesgo quirúrgico prohibitivo',
            N(
              'alert',
              'Inestabilidad hemodinámica o comorbilidad crítica',
              'Falla orgánica (vasopresores, creatinina > 2, etc.) · riesgo anestésico extremo',
              'Si el paciente está en shock séptico o tiene contraindicación para anestesia general, desaconsejamos la colecistectomía inmediata.',
              [
                'Procedimiento descompresivo de urgencia',
                N(
                  'do',
                  'Colecistostomía percutánea transhepática',
                  'Drenaje guiado por ecografía o TAC bajo anestesia local + ATB EV',
                  'Efectuamos colecistostomía percutánea transhepática descompresiva de urgencia asociada a antibióticos endovenosos.',
                  [
                    'Evolución tras descompresión',
                    N(
                      'ok',
                      'Resolución de sepsis y colecistectomía diferida',
                      'Cirugía electiva una vez recuperada la estabilidad clínica',
                      'Tras superar la sepsis y estabilizar las comorbilidades, se programa colecistectomía electiva diferida.',
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Ictericia franca concomitante',
        N(
          'alert',
          'Bilirrubina total elevada > 4 mg/dL',
          'Sospecha de coledocolitiasis o Síndrome de Mirizzi',
          'Si el paciente presenta ictericia franca concomitante, sospechamos coledocolitiasis asociada o síndrome de Mirizzi.',
          [
            'Estudio de vía biliar',
            N(
              'do',
              'Colangiorresonancia o ERCP según probabilidad',
              'Descartar cálculo en colédoco o colangitis aguda',
              'Solicitamos colangiorresonancia magnética o indicamos colangiopancreatografía retrógrada endoscópica terapéutica.',
            ),
          ],
        ),
      ],
    ),
  },
};
