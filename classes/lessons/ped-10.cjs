// Clase 18.10 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Exantemas infantiles, diagnóstico diferencial, eritema infeccioso, exantema súbito, escarlatina, varicela, síndrome de Reye y enfermedad de Kawasaki',
      say: 'Bienvenidos a la clase sobre exantemas infantiles, un tema de altísimo rendimiento en el examen EUNACOM que exige una semiología dermatológica rigurosa. Hoy aprenderemos a diferenciar con precisión el eritema infeccioso, el exantema súbito, la escarlatina bacteriana, la varicela y sus riesgos farmacológicos, junto a la identificación y tratamiento urgente de la enfermedad de Kawasaki para prevenir aneurismas coronarios. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología cutánea',
      title: 'Inoculación Patogénica, Respuesta Inmune y Expresión Exantemática',
      nodes: [
        { id: 'ino', col: 0, row: 1, k: 'start', t: 'Puerta de entrada mucosa', s: 'Transmisión respiratoria de virus o colonización faríngea por estreptococo' },
        { id: 'dis', col: 1, row: 1, k: 'mech', t: 'Viremia o toxina pirogénica', s: 'Diseminación hematógena viral o secreción de exotoxina eritrogénica circulante' },
        { id: 'end', col: 2, row: 1, k: 'effect', t: 'Inflamación endotelial dérmica', s: 'Vasodilatación capilar, extravasación de hematíes o microtrombosis perivascular' },
        { id: 'mor', col: 3, row: 1, k: 'alert', t: 'Morfología lesional característica', s: 'Aparición de máculas, pápulas, vesículas pruriginosas o descamación distal' },
      ],
      edges: [
        { from: 'ino', to: 'dis', label: 'replicación' },
        { from: 'dis', to: 'end', label: 'tropismo cutáneo' },
        { from: 'end', to: 'mor', label: 'patrón dérmico' },
      ],
      steps: [
        {
          show: ['ino', 'dis'],
          note: 'Replicación mucosa y diseminación sistémica hematógena',
          say: 'El microorganismo ingresa por vía respiratoria o digestiva y se replica localmente, pasando a la circulación como una viremia transitoria o liberando exotoxinas pirogénicas a distancia como ocurre en la escarlatina.',
        },
        {
          show: ['end', 'mor'],
          note: 'Inflamación del plexo vascular dérmico y eflorescencia cutánea',
          say: 'La interacción de las toxinas o de los complejos inmunes con el endotelio capilar de la dermis desencadena vasodilatación e infiltración leucocitaria, generando el patrón morfológico distintivo de cada enfermedad exantemática.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología dermatológica',
      title: 'Patrones Morfológicos Cardinales: Maculopapular, Micropapular y Vesicular',
      cards: [
        {
          title: 'Patrón Maculopapular y Micropapular',
          tag: 'Máculas eritematosas versus piel de lija',
          kind: 'key',
          items: [
            {
              t: 'Exantema morbiliforme y maculopapular rosado',
              d: 'Lesiones maculares eritematosas planas y pápulas palpables que respetan zonas sanas; típico de virus',
              say: 'El patrón maculopapular consiste en lesiones planas y sobreelevadas rosadas que blanquean a la presión, característico de agentes virales como el exantema súbito o el sarampión.',
            },
            {
              t: 'Exantema micropapular con textura de papel de lija',
              d: 'Pápulas puntiformes rojas diminutas y confluentes que confieren una rugosidad táctil áspera',
              say: 'El patrón micropapular en papel de lija se palpa áspero como piel de gallina sobre una base eritematosa difusa, hallazgo clásico y patognomónico de la escarlatina estreptocócica.',
            },
          ],
        },
        {
          title: 'Patrón Vesicular y Polimorfo',
          tag: 'Lesiones líquidas y cielo estrellado',
          kind: 'alert',
          items: [
            {
              t: 'Vesículas sobre base eritematosa en gota de rocío',
              d: 'Contenido líquido transparente que se umbilica y evoluciona a pústula y costra con prurito intenso',
              say: 'El patrón vesicular se manifiesta por vesículas transparentes con halo eritematoso similar a una gota de rocío sobre un pétalo de rosa, las cuales se rompen formando costras fuertemente pruriginosas.',
            },
            {
              t: 'Convivencia simultánea de todos los estadios evolutivos',
              d: 'Patrón polimórfico en cielo estrellado: máculas, pápulas, vesículas y costras presentes a la vez',
              say: 'La presencia simultánea de lesiones en todos los estadios de evolución temporal, desde máculas hasta costras secas en un mismo segmento corporal, define a la varicela.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Quinta enfermedad',
      title: 'Eritema Infeccioso (Megaloeritema por Parvovirus B19)',
      cards: [
        {
          title: 'Secuencia Clínica en Tres Fases',
          tag: 'Mejilla abofeteada y exantema en encaje',
          kind: 'key',
          items: [
            {
              t: 'Fase uno: Signo de la mejilla abofeteada',
              d: 'Eritema rojo intenso brillante en ambas mejillas con palidez peribucal de uno a cuatro días de duración',
              say: 'El eritema infeccioso debuta con la clásica mejilla abofeteada, un enrojecimiento facial intenso en ambas mejillas que respeta la zona alrededor de la boca, con estado general conservado.',
            },
            {
              t: 'Fase dos y tres: Exantema reticular y recidivante',
              d: 'Exantema eritematoso en red o encaje en extremidades que puede reactivarse con calor, ejercicio o sol',
              say: 'Posteriormente aparece un exantema máculopapular en tronco y extremidades que se aclara centralmente adoptando un aspecto reticular en encaje, el cual puede reaparecer durante semanas con el sol o el baño caliente.',
            },
          ],
        },
        {
          title: 'Complicaciones Graves por Tropismo Eritroide',
          tag: 'Crisis aplásica e hidrops fetal intrauterino',
          kind: 'alert',
          items: [
            {
              t: 'Crisis aplásica transitoria en anemias hemolíticas',
              d: 'El Parvovirus B19 destruye precursores eritroides medulares, causando anemia fulminante en drepanocitosis o esferocitosis',
              say: 'El Parvovirus be diecinueve infecta y destruye los precursores de la serie roja en médula ósea, provocando crisis aplásicas graves con reticulocitopenia en pacientes con esferocitosis o anemia falciforme.',
            },
            {
              t: 'Riesgo de hidrops fetal en embarazadas susceptibles',
              d: 'La infección materna transplacentaria causa anemia fetal severa, insuficiencia cardíaca y muerte fetal in útero',
              say: 'En la mujer embarazada no inmunizada la infección puede cruzar la placenta y provocar anemia fetal severa con hidrops e insuficiencia cardíaca, exigiendo monitorización ecográfica fetal estrecha.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Sexta enfermedad',
      title: 'Exantema Súbito (Roséola Infantil por Herpesvirus Humano 6)',
      cards: [
        {
          title: 'Cronología Patognomónica de la Fiebre y Exantema',
          tag: 'Lisis febril brusca con brote cutáneo inmediato',
          kind: 'key',
          items: [
            {
              t: 'Fiebre alta aislada durante tres a cuatro días',
              d: 'Temperatura de 39 a 40 grados en un lactante de 6 a 15 meses en excelente estado general',
              say: 'El exantema súbito afecta característicamente a lactantes entre seis y quince meses, manifestándose por tres a cuatro días de fiebre alta aislada sin foco aparente y con excelente estado de ánimo.',
            },
            {
              t: 'Desaparición brusca de la fiebre y aparición del exantema',
              d: 'La fiebre cae en lisis y en ese mismo instante brota un exantema maculopapular rosado en tronco y cuello',
              say: 'La clave diagnóstica de examen es su cronología única: la fiebre desaparece de forma súbita y en ese mismo momento brota un exantema maculopapular rosado que predomina en tronco y cuello.',
            },
          ],
        },
        {
          title: 'Complicaciones y Enantema Característico',
          tag: 'Convulsiones febriles y manchas de Nagayama',
          kind: 'alert',
          items: [
            {
              t: 'Alta frecuencia de convulsiones febriles simples',
              d: 'El ascenso térmico brusco gatilla crisis convulsivas febriles en lactantes predispuestos',
              say: 'Debido a la rápida elevación térmica inicial, el exantema súbito es una de las causas más frecuentes de convulsión febril en lactantes pequeños en los servicios de urgencia.',
            },
            {
              t: 'Manchas de Nagayama en el paladar blando',
              d: 'Pápulas eritematosas diminutas en la úvula y paladar blando presentes antes del brote cutáneo',
              say: 'En el examen orofaríngeo se pueden visualizar las manchas de Nagayama, consistentes en pequeñas pápulas eritematosas en el paladar blando y la úvula que orientan precozmente al diagnóstico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Infección estreptocócica',
      title: 'Escarlatina: Faringitis, Textura de Lija y Signo de Pastia',
      cards: [
        {
          title: 'Tríada Clínica de la Escarlatina',
          tag: 'Faringoamigdalitis más exantema por Streptococcus pyogenes',
          kind: 'key',
          items: [
            {
              t: 'Faringitis febril exudativa con adenopatías cervicales',
              d: 'Fiebre alta, odinofagia intensa, amígdalas eritematosas con placas purulentas y dolor submandibular',
              say: 'La escarlatina es producida por cepas de Streptococcus pyogenes productoras de exotoxina pirogénica, debutando con faringoamigdalitis febril exudativa y adenopatías dolorosas.',
            },
            {
              t: 'Exantema micropapular que respeta el triángulo de Filatov',
              d: 'Piel roja áspera como papel de lija con palidez perioral marcada conocida como máscara de Filatov',
              say: 'El exantema micropapular eritematoso áspero al tacto confluye en tronco y extremidades respetando la región peribucal, configurando la clásica palidez perioral o máscara de Filatov.',
            },
          ],
        },
        {
          title: 'Signos Cardinales y Descamación Tardía',
          tag: 'Signo de Pastia y lengua en frambuesa',
          kind: 'criteria',
          items: [
            {
              t: 'Líneas hiperpigmentadas de Pastia en pliegues flexores',
              d: 'Líneas rojas transversales en pliegues del codo y axilas por fragilidad capilar que no blanquean a la presión',
              say: 'En los pliegues articulares de flexión, como la fosa antecubital, el exantema se acentúa formando líneas transversales rojo violáceas que no desaparecen a la digitopresión, conocidas como signo de Pastia.',
            },
            {
              t: 'Lengua en frambuesa y descamación laminar fina',
              d: 'Lengua blanca saburral que se desprende dejando papilas hipertróficas rojas; descamación a los 7 a 10 días',
              say: 'La lengua inicialmente cubierta por un exudado blanquecino se descama hacia el cuarto día dejando al descubierto papilas rojas prominentes en frambuesa, seguida de descamación laminar en palmas y plantas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapéutica antimicrobiana',
      title: 'Tratamiento de la Escarlatina y Prevención de Fiebre Reumática',
      cards: [
        {
          title: 'Antibioticoterapia de Primera Elección',
          tag: 'Amoxicilina oral por diez días completos',
          kind: 'pharma',
          items: [
            {
              t: 'Amoxicilina oral a 50 mg/kg/día por 10 días',
              d: 'Fraccionada cada 12 o 24 horas durante diez días completos; excelente absorción y tolerancia infantil',
              say: 'El tratamiento de elección es la amoxicilina oral a cincuenta miligramos por kilo al día durante diez días completos, o penicilina benzatina intramuscular en dosis única si se duda del cumplimiento.',
            },
            {
              t: 'Alternativas en pacientes alérgicos a la penicilina',
              d: 'Cefadroxilo en alergias no anafilácticas o azitromicina y claritromicina en alergia inmediata tipo uno',
              say: 'En alérgicos a betalactámicos se indica azitromicina oral por cinco días o claritromicina durante diez días para garantizar la erradicación bacteriana faríngea.',
            },
          ],
        },
        {
          title: 'Objetivo Primordial: Prevención Reumática',
          tag: 'Prevención de carditis reumática versus glomerulonefritis',
          kind: 'alert',
          items: [
            {
              t: 'El tratamiento antibiótico previene la Fiebre Reumática Aguda',
              d: 'Erradicar Streptococcus pyogenes antes del noveno día evita el desarrollo de carditis y secuela valvular',
              say: 'El objetivo fundamental de tratar con antibióticos la escarlatina es prevenir la fiebre reumática aguda y la temible valvulopatía cardíaca secundaria, siendo eficaz si se inicia dentro de los primeros nueve días.',
            },
            {
              t: 'Los antibióticos NO previenen la Glomerulonefritis Postestreptocócica',
              d: 'La glomerulonefritis es un daño por inmunocomplejos circulantes no prevenible con antibioterapia oportuna',
              say: 'Es una clásica pregunta de examen: el tratamiento antibiótico no previene la glomerulonefritis aguda postestreptocócica, la cual depende del depósito renal de inmunocomplejos formados previamente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Infección herpética vesicular',
      title: 'Varicela: Exantema Polimorfo en Cielo Estrellado y Contagio',
      cards: [
        {
          title: 'Transmisión y Cuadro Clínico de la Varicela',
          tag: 'Altísima tasa de ataque en contactos no vacunados',
          kind: 'alert',
          items: [
            {
              t: 'Transmisión respiratoria aérea y por líquido de vesículas',
              d: 'Período de incubación de 10 a 21 días; contagio desde dos días antes del exantema hasta la fase de costras',
              say: 'El virus varicela zóster se transmite por aerosoles respiratorios y contacto directo con las vesículas, siendo contagioso desde dos días antes de que brote la primera lesión hasta que todas están en fase de costra.',
            },
            {
              t: 'Distribución centrípeta con compromiso del cuero cabelludo',
              d: 'Comienza en cara y cuero cabelludo extendiéndose hacia el tronco, afectando mucosas oral y genital',
              say: 'El brote inicia característicamente en el cuero cabelludo y el tronco con una progresión centrípeta, asociando lesiones vesiculares dolorosas en mucosa bucal y genital con prurito desesperante.',
            },
          ],
        },
        {
          title: 'El Patrón en Cielo Estrellado Patognomónico',
          tag: 'Múltiples brotes sucesivos en distintas etapas evolutivas',
          kind: 'key',
          items: [
            {
              t: 'Brote en oleadas cada tres a cuatro días',
              d: 'Aparición simultánea de máculas, vesículas en gota de rocío, pústulas y costras en la misma zona anatómica',
              say: 'La característica diagnóstica definitiva es el patrón en cielo estrellado: la presencia simultánea de máculas nuevas, vesículas transparentes, pústulas y costras secas en un mismo segmento corporal.',
            },
            {
              t: 'Criterio de alta y cese del aislamiento',
              d: 'El paciente deja de ser contagioso únicamente cuando la totalidad de las lesiones están en etapa de costra seca',
              say: 'El niño puede reintegrarse a sus actividades habituales únicamente cuando todas las lesiones se encuentran secas en fase de costra, habitualmente tras siete a diez días desde el inicio del brote.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad y complicaciones vitales',
      title: 'Complicaciones de Varicela: Síndrome de Reye, AINEs y Sobreinfección',
      cards: [
        {
          title: 'Contraindicación Absoluta de la Aspirina (Síndrome de Reye)',
          tag: 'Falla hepática aguda y edema cerebral fulminante',
          kind: 'alert',
          items: [
            {
              t: 'Ácido acetilsalicílico formalmente prohibido en varicela',
              d: 'La aspirina en niños con varicela o influenza desencadena encefalopatía hepática aguda letal por daño mitocondrial',
              say: 'La aspirina está terminantemente prohibida en pacientes pediátricos con varicela por el riesgo de síndrome de Reye, un cuadro catastrófico de degeneración grasa hepática con hipertensión endocraneana y coma.',
            },
            {
              t: 'El paracetamol es el antipirético seguro de elección',
              d: 'Dosis de 15 mg/kg cada 6 a 8 horas vía oral para el control térmico sin riesgo de toxicidad hepatoencefálica',
              say: 'El paracetamol oral a quince miligramos por kilo es el único antipirético de elección seguro para controlar la fiebre y el malestar durante la varicela.',
            },
          ],
        },
        {
          title: 'Peligro del Ibuprofeno y Sobreinfección Bacteriana',
          tag: 'Sobreinfección estafilocócica y fascitis necrotizante',
          kind: 'criteria',
          items: [
            {
              t: 'Impétigo secundario por rascado de lesiones',
              d: 'Sobreinfección superficial por Staphylococcus aureus o Streptococcus pyogenes que genera costras melicéricas',
              say: 'La complicación más común es la sobreinfección bacteriana por el rascado de las lesiones, manifestándose como impétigo con costras melicéricas que responde a flucloxacilina o cefadroxilo oral.',
            },
            {
              t: 'Evitar ibuprofeno por riesgo de fascitis necrotizante',
              d: 'Los antiinflamatorios no esteroidales atenúan la respuesta inmune local facilitando infecciones dérmicas invasivas',
              say: 'Se aconseja evitar el uso de ibuprofeno durante la varicela activa debido a su asociación con cuadros graves de celulitis invasiva, abscesos profundos y fascitis necrotizante por estreptococo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo antiviral y profilaxis',
      title: 'Indicaciones de Aciclovir y Profilaxis Post-Exposición en Varicela',
      cards: [
        {
          title: 'Indicaciones Específicas de Aciclovir Oral',
          tag: 'No indicado de rutina en el niño sano menor de doce años',
          kind: 'pharma',
          items: [
            {
              t: 'Niños mayores de doce años y segundo caso intrafamiliar',
              d: 'Aciclovir oral dentro de las primeras 24 horas en adolescentes, casos intradomiciliarios y enfermedad cutánea crónica',
              say: 'El aciclovir oral no se administra de rutina en niños sanos, reservándose para mayores de doce años, segundos casos dentro del hogar, pacientes con dermatitis atópica extensa o tratamiento crónico con corticoides.',
            },
            {
              t: 'Aciclovir endovenoso en inmunodeprimidos o varicela complicada',
              d: 'Vía endovenosa obligatoria en pacientes oncológicos, neumonía varicelosa o encefalitis cerebelosa grave',
              say: 'La vía endovenosa es mandataria en inmunocomprometidos y ante complicaciones mayores como neumonía varicelosa o encefalitis, administrando diez a quince miligramos por kilo cada ocho horas.',
            },
          ],
        },
        {
          title: 'Profilaxis Post-Exposición en Contactos Susceptibles',
          tag: 'Vacuna oportuna versus inmunoglobulina hiperinmune',
          kind: 'key',
          items: [
            {
              t: 'Vacuna antivaricela en las primeras 72 a 96 horas',
              d: 'Inmunización activa en contactos sanos susceptibles mayores de 12 meses administrada precozmente tras el contacto',
              say: 'En contactos sanos no vacunados mayores de doce meses se indica la vacuna antivaricela dentro de las primeras setenta y dos a noventa y seis horas de la exposición para prevenir o atenuar la enfermedad.',
            },
            {
              t: 'Inmunoglobulina hiperinmune antivaricela en alto riesgo',
              d: 'Neonato cuya madre inició varicela 5 días antes a 2 días postparto, prematuros y embarazadas seronegativas',
              say: 'La inmunoglobulina hiperinmune específica está indicada de urgencia en recién nacidos de madres con varicela entre cinco días antes y dos días después del parto para evitar la letal varicela neonatal.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Matriz Comparativa de los Principales Exantemas Infantiles',
      head: ['Enfermedad', 'Agente Causal', 'Clínica Cardinal', 'Tratamiento Principal'],
      rows: [
        {
          cells: ['Eritema Infeccioso (5ta)', 'Parvovirus B19', 'Mejilla abofeteada y exantema en encaje en tronco', 'Manejo sintomático y reposo ambulatorio'],
          say: 'El eritema infeccioso se caracteriza por mejillas rojas y aspecto reticular en encaje, requiriendo únicamente manejo de soporte.',
        },
        {
          cells: ['Exantema Súbito (6ta)', 'Herpesvirus humano 6', 'Fiebre alta que cae bruscamente brotando en tronco', 'Manejo sintomático con paracetamol en lisis'],
          say: 'El exantema súbito presenta caída brusca de la fiebre alta y brote maculopapular inmediato en tronco, siendo autolimitado.',
        },
        {
          cells: ['Escarlatina Bacteriana', 'Streptococcus pyogenes', 'Piel de lija, signo de Pastia, lengua aframbuesada', 'Amoxicilina oral 10 días para prevenir fiebre reumática'],
          say: 'La escarlatina combina faringitis con piel de lija y signo de Pastia, tratándose con amoxicilina oral por diez días para evitar secuelas cardíacas.',
        },
        {
          cells: ['Varicela Clásica', 'Virus Varicela Zóster', 'Vesículas en gota de rocío en cielo estrellado', 'Paracetamol y antihistamínicos, prohibida la aspirina'],
          say: 'La varicela evoluciona con vesículas polimorfas y costras simultáneas, debiendo prohibirse formalmente la aspirina por riesgo de síndrome de Reye.',
        },
        {
          cells: ['Enfermedad de Kawasaki', 'Vasculitis idiopática', 'Fiebre mayor a cinco días más criterios oculares y orales', 'Inmunoglobulina endovenosa más aspirina inmediata'],
          say: 'La enfermedad de Kawasaki es una vasculitis febril prolongada tratada con inmunoglobulina endovenosa y aspirina para proteger las coronarias.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Vasculitis pediátrica mayor',
      title: 'Enfermedad de Kawasaki: Vasculitis Coronaria y Criterios Diagnósticos',
      cards: [
        {
          title: 'Criterio Obligatorio y Criterios Cardinales',
          tag: 'Fiebre de cinco días o más más cuatro de cinco criterios',
          kind: 'alert',
          items: [
            {
              t: 'Fiebre de cinco días o más sin foco aparente (criterio mandatorio)',
              d: 'Fiebre alta remitente persistente que no cede a antibióticos habituales en lactantes y niños menores de 5 años',
              say: 'El diagnóstico de Kawasaki clásico exige como requisito indispensable la presencia de fiebre de al menos cinco días de duración que no cede a antipiréticos ni antibióticos comunes.',
            },
            {
              t: 'Presencia de al menos cuatro de los cinco criterios cardinales',
              d: 'Conjuntivitis, cambios orofaríngeos, cambios periféricos, exantema polimorfo y adenopatía cervical unilateral',
              say: 'Se requiere además cumplir cuatro de cinco criterios: conjuntivitis bilateral sin secreción, labios rojos agrietados con lengua en fresa, edema palmoplantar, exantema polimorfo y adenopatía cervical mayor a un centímetro y medio.',
            },
          ],
        },
        {
          title: 'Detalle de los Criterios Cardinales',
          tag: 'Expresiones inflamatorias microvasculares',
          kind: 'criteria',
          items: [
            {
              t: 'Inyección conjuntival bilateral bulbar no supurativa',
              d: 'Ojos rojos intensos sin secreción purulenta ni costras, respetando el limbo corneal',
              say: 'La inyección conjuntival es bilateral, bulbar y llamativamente limpia, sin secreción purulenta ni lagañas, respetando el halo periquerático.',
            },
            {
              t: 'Cambios en labios, lengua y extremidades distales',
              d: 'Queilitis fisurada sangrante, eritema palmar doloroso en fase aguda y descamación periungueal subaguda',
              say: 'Destacan labios tumefactos con fisuras hemorrágicas, lengua aframbuesada, edema indurado y eritema en palmas y plantas, seguido en la segunda semana por una descamación característica alrededor de las uñas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de emergencia',
      title: 'Manejo de Kawasaki: Inmunoglobulina EV, Aspirina y Ecocardiograma',
      cards: [
        {
          title: 'Terapia de Elección de Máxima Urgencia',
          tag: 'Inmunoglobulina endovenosa en los primeros diez días',
          kind: 'pharma',
          items: [
            {
              t: 'Inmunoglobulina endovenosa a 2 g/kg en infusión única',
              d: 'Administrada en infusión continua de 10 a 12 horas; reduce los aneurismas coronarios del 25% a menos del 4%',
              say: 'El tratamiento de oro es la inmunoglobulina endovenosa a dos gramos por kilo en infusión única de diez horas administrada idealmente antes del décimo día de fiebre para prevenir los aneurismas de arterias coronarias.',
            },
            {
              t: 'Ácido acetilsalicílico a dosis antiinflamatorias y antiagregantes',
              d: 'Dosis alta de 30 a 50 mg/kg/día hasta 48 horas afebril, pasando a dosis antiagregante de 3 a 5 mg/kg por 6 a 8 semanas',
              say: 'Se asocia aspirina a dosis antiinflamatoria de treinta a cincuenta miligramos por kilo al día hasta dos días afebril, continuándola a dosis antiagregante durante seis a ocho semanas.',
            },
          ],
        },
        {
          title: 'Monitorización Cardíaca con Ecocardiograma',
          tag: 'Pesquisa precoz de ectasia y aneurismas coronarios',
          kind: 'key',
          items: [
            {
              t: 'Ecocardiograma bidimensional al diagnóstico y en fase subaguda',
              d: 'Evaluar dimensiones luminales de las arterias coronarias principales, función ventricular y derrame pericárdico',
              say: 'Es imperativo realizar un ecocardiograma Doppler al ingreso y repetirlo a las seis semanas para monitorizar el calibre de las arterias coronarias y descartar dilataciones o aneurismas.',
            },
            {
              t: 'Kawasaki refractario a la primera dosis de inmunoglobulina',
              d: 'Un 10% a 15% presenta fiebre persistente tras 36 horas; requiere segunda dosis de IgEV o pulsos de metilprednisolona',
              say: 'Si la fiebre persiste tras treinta y seis horas de terminada la infusión se diagnostica resistencia a inmunoglobulina, indicándose una segunda dosis o pulsos de corticoides endovenosos.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Enfrentamiento del Exantema Febril en Pediatría',
      say: 'Examinemos el algoritmo paso a paso para orientar el diagnóstico etiológico del exantema febril pediátrico según sus características semiológicas cardinales.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.018',
      title: 'Cronología Patognomónica del Exantema Súbito',
      stem: 'Un lactante de 10 meses presentó fiebre de hasta 39.5°C durante 3 días con buen estado general. Al cuarto día la fiebre desaparece por completo y simultáneamente aparece un exantema maculopapular rosado localizado en el tronco y cuello, que no compromete la cara. El niño se observa activo y alimentándose normalmente.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Sarampión clásico' },
        { letter: 'B', text: 'Escarlatina bacteriana' },
        { letter: 'C', text: 'Exantema súbito (Roséola infantil por HHV-6)' },
        { letter: 'D', text: 'Enfermedad de Kawasaki' },
        { letter: 'E', text: 'Eritema infeccioso por Parvovirus B19' },
      ],
      correct: 'C',
      explanation: 'La historia clínica de un lactante previamente sano que presenta fiebre alta durante 3 a 4 días con buen estado general, la cual remite de forma súbita (en lisis) y coincide exactamente con el brote de un exantema maculopapular rosado no confluente de predominio en tronco y cuello, es patognomónica del Exantema Súbito (también llamado Roséola infantil o Sexta Enfermedad, producido por el Herpesvirus Humano 6). En el sarampión el exantema coincide con el pico de la fiebre y catarro intenso; en la escarlatina la piel es áspera como lija; en el eritema infeccioso predomina el eritema en bofetada sin fiebre alta; y Kawasaki requiere al menos 5 días de fiebre continua.',
      say: {
        stem: 'Lactante de diez meses con tres días de fiebre alta que desaparece por completo brotando simultáneamente un exantema maculopapular rosado en tronco.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'La opción A sarampión clásico. La B escarlatina bacteriana. La C exantema súbito o roséola infantil. La D enfermedad de Kawasaki. La E eritema infeccioso. Fíjate en la lisis de la fiebre.',
        answer: 'La respuesta correcta es la C. La caída brusca de la fiebre que coincide con la aparición del exantema en tronco es la firma clínica patognomónica del exantema súbito.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.018',
      title: 'Diagnóstico y Tratamiento Oportuno de la Enfermedad de Kawasaki',
      stem: 'Un niño de 3 años es traído a consulta por presentar fiebre de 39°C desde hace 6 días. Al examen físico destaca inyección conjuntival bilateral sin secreción purulenta, labios intensamente eritematosos, secos y con fisuras sangrantes, lengua aframbuesada, edema indurado y eritema en palmas y plantas, y un ganglio linfático cervical anterior derecho de 2 cm de diámetro, doloroso.',
      question: '¿Cuál es el tratamiento de elección inmediato?',
      options: [
        { letter: 'A', text: 'Amoxicilina con ácido clavulánico oral por 10 días' },
        { letter: 'B', text: 'Ceftriaxona endovenosa más Vancomicina por sospecha de choque séptico' },
        { letter: 'C', text: 'Inmunoglobulina endovenosa (2 g/kg en infusión única) más Ácido Acetilsalicílico a dosis antiinflamatorias' },
        { letter: 'D', text: 'Corticoides sistémicos a dosis altas en pulsos como monoterapia de inicio' },
        { letter: 'E', text: 'Paracetamol oral exclusivo y control con hemograma en 48 horas' },
      ],
      correct: 'C',
      explanation: 'El paciente cumple estrictamente con los criterios de Enfermedad de Kawasaki clásica: fiebre prolongada de 6 días (criterio mandatorio >= 5 días) más 4 criterios cardinales (inyección conjuntival bilateral no purulenta, queilitis eritematosa fisurada con lengua aframbuesada, edema y eritema palmoplantar, y adenopatía cervical unilateral > 1.5 cm). El tratamiento de primera línea de máxima urgencia es la Inmunoglobulina Endovenosa (IgEV) a dosis de 2 g/kg en infusión única administrada dentro de los primeros 10 días, combinada con Ácido Acetilsalicílico (Aspirina) a dosis antiinflamatorias (30-50 mg/kg/día). Esta intervención reduce drásticamente el desarrollo de aneurismas coronarios del 25% a menos del 4%.',
      say: {
        stem: 'Niño de tres años con fiebre de seis días inyección conjuntival sin pus labios fisurados lengua aframbuesada edema en manos y pies y ganglio cervical.',
        question: '¿Cuál es el tratamiento de elección inmediato?',
        options: 'La opción A amoxicilina clavulánico oral. La B ceftriaxona más vancomicina. La C inmunoglobulina endovenosa a dos gramos por kilo más aspirina. La D corticoides en pulsos. La E paracetamol. Reconoce la vasculitis coronaria.',
        answer: 'La respuesta correcta es la C. Es una enfermedad de Kawasaki y requiere inmunoglobulina endovenosa con aspirina urgente para prevenir aneurismas coronarios.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.018',
      title: 'Escarlatina: Exantema en Lija y Prevención de Fiebre Reumática',
      stem: 'Un preescolar de 4 años presenta fiebre de 38.5°C, odinofagia y un exantema eritematoso micropapular difuso que "raspa al tacto como lija". En los pliegues del codo se observan líneas hiperpigmentadas transversales que no desaparecen a la digitopresión (Signo de Pastia). La lengua tiene aspecto de frutilla roja.',
      question: '¿Cuál es el tratamiento de elección y su objetivo principal?',
      options: [
        { letter: 'A', text: 'Paracetamol exclusivo; el cuadro es viral autolimitado' },
        { letter: 'B', text: 'Amoxicilina oral por 10 días para prevenir la Fiebre Reumática Aguda' },
        { letter: 'C', text: 'Aciclovir oral por 5 días para acortar la excreción viral' },
        { letter: 'D', text: 'Ciprofloxacino oral por 7 días para erradicar el estado de portador' },
        { letter: 'E', text: 'Inmunoglobulina endovenosa para prevenir la glomerulonefritis postestreptocócica' },
      ],
      correct: 'B',
      explanation: 'La presencia de faringoamigdalitis febril asociada al exantema eritematoso micropapular en papel de lija, el signo de Pastia en pliegues de flexión y la lengua aframbuesada es diagnóstica de Escarlatina producida por Streptococcus pyogenes productor de toxina eritrogénica. El tratamiento de elección es Amoxicilina oral durante 10 días completos (o Penicilina Benzatina IM en dosis única). El objetivo biológico y epidemiológico fundamental de la antibioterapia es la erradicación bacteriana faríngea para prevenir el desarrollo posterior de Fiebre Reumática Aguda. Es una regla de oro recordar que el tratamiento antibiótico no previene la glomerulonefritis aguda postestreptocócica.',
      say: {
        stem: 'Preescolar de cuatro años con faringitis febril exantema micropapular áspero como lija líneas de Pastia en el codo y lengua en frutilla roja.',
        question: '¿Cuál es el tratamiento de elección y su objetivo principal?',
        options: 'La opción A paracetamol exclusivo. La B amoxicilina oral por diez días para prevenir la fiebre reumática aguda. La C aciclovir oral. La D ciprofloxacino. La E inmunoglobulina endovenosa. Recuerda la secuela que se previene.',
        answer: 'La respuesta correcta es la B. La escarlatina se trata con amoxicilina por diez días con el fin primario de evitar la fiebre reumática aguda.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.018',
      title: 'Varicela y Contraindicación Absoluta de la Aspirina',
      stem: 'Un niño de 5 años con varicela activa presenta fiebre y prurito intenso. La madre consulta qué medicamento puede administrarle para la fiebre.',
      question: '¿Cuál de los siguientes fármacos antipiréticos está FORMALMENTE CONTRAINDICADO en este paciente por riesgo de complicaciones letales?',
      options: [
        { letter: 'A', text: 'Paracetamol' },
        { letter: 'B', text: 'Ácido Acetilsalicílico (Aspirina)' },
        { letter: 'C', text: 'Ibuprofeno' },
        { letter: 'D', text: 'Clorfenamina' },
        { letter: 'E', text: 'Metamizol' },
      ],
      correct: 'B',
      explanation: 'El Ácido Acetilsalicílico (Aspirina) está estrictamente contraindicado en niños y adolescentes que cursan infecciones virales agudas, muy especialmente Varicela e Influenza, debido a su demostrada asociación etiopatogénica con el Síndrome de Reye. Esta entidad potencialmente letal se caracteriza por daño mitocondrial con esteatosis microvesicular hepática masiva, insuficiencia hepática aguda, hipoglicemia severa y edema cerebral progresivo con encefalopatía fulminante. El antipirético seguro de elección en varicela es el Paracetamol (15 mg/kg/dosis). El ibuprofeno, aunque no produce síndrome de Reye, se desaconseja por asociarse a infecciones cutáneas bacterianas invasivas.',
      say: {
        stem: 'Niño de cinco años con varicela activa febril cuya madre consulta por fármacos antipiréticos para el control de la temperatura.',
        question: '¿Cuál de los siguientes fármacos está formalmente contraindicado por riesgo de complicaciones potencialmente mortales?',
        options: 'La opción A paracetamol. La B ácido acetilsalicílico o aspirina. La C ibuprofeno. La D clorfenamina. La E metamizol. Recuerda la toxicidad hepatoencefálica.',
        answer: 'La respuesta correcta es la B. La aspirina está terminantemente prohibida en varicela por el riesgo de desencadenar un síndrome de Reye fulminante.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Exantemas Infantiles',
      cards: [
        {
          title: 'Signos Patognomónicos de Examen',
          tag: 'Asociaciones clínicas inmediatas',
          kind: 'key',
          items: [
            {
              t: 'Exantema súbito: La fiebre cae y aparece el exantema en tronco',
              d: 'Lactante de 6 a 15 meses; HHV-6; fiebre alta de 3 a 4 días que desaparece brotando en tronco',
              say: 'Recuerden la regla del exantema súbito: tres días de fiebre alta aislada que cae bruscamente y en ese momento brota el exantema en tronco.',
            },
            {
              t: 'Escarlatina: Piel de lija, Pastia y amoxicilina por 10 días',
              d: 'Streptococcus pyogenes; el antibiótico previene la fiebre reumática pero no la glomerulonefritis',
              say: 'En escarlatina asocien siempre piel de lija y líneas de Pastia, recordando que los diez días de amoxicilina previenen la fiebre reumática.',
            },
          ],
        },
        {
          title: 'Alertas de Tratamiento y Farmacovigilancia',
          tag: 'Varicela y Kawasaki',
          kind: 'alert',
          items: [
            {
              t: '¡Cero aspirina en varicela por Síndrome de Reye!',
              d: 'Falla hepática aguda y encefalopatía mortal; usar paracetamol; evitar AINEs por infecciones invasivas',
              say: 'Jamás indiquen aspirina en un niño con varicela por el riesgo letal de síndrome de Reye, utilizando paracetamol como antipirético seguro.',
            },
            {
              t: 'Kawasaki: Fiebre mayor a 5 días exige IgEV y aspirina',
              d: 'Administrar antes del día diez para reducir aneurismas coronarios; ecocardiograma al ingreso y a las seis semanas',
              say: 'Ante fiebre de más de cinco días con conjuntivitis y labios fisurados sospechen Kawasaki e indiquen inmunoglobulina y aspirina para salvar las coronarias. Nos vemos en la próxima clase para revisar diarrea aguda y deshidratación.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico Diferencial del Exantema Febril Pediátrico',
    root: N(
      'start',
      'Paciente Pediátrico con Fiebre y Exantema Cutáneo Agudo',
      'Evaluación de morfología lesional (vesicular vs micropapular vs maculopapular), días de fiebre y compromiso mucoso',
      'Iniciamos la evaluación clasificando la morfología lesional primaria del exantema para guiar el diagnóstico diferencial.',
      [
        'Exantema vesicular o polimorfo con lesiones en distintos estadios (mácula, vesícula y costra)',
        N(
          'alert',
          'Sospecha de Varicela Clásica (Virus Varicela Zóster)',
          'Aislamiento respiratorio y de contacto hasta costras · Paracetamol oral SOS · ¡Prohibida aspirina por Reye! · Evaluar aciclovir si > 12 años',
          'El patrón polimórfico en cielo estrellado confirma varicela, indicándose paracetamol y prohibiendo tajantemente la aspirina.',
        ),
      ],
      [
        'Exantema eritematoso micropapular difuso que raspa al tacto en "papel de lija" con faringitis febril',
        N(
          'do',
          'Diagnóstico de Escarlatina (Streptococcus pyogenes)',
          'Amoxicilina oral 50 mg/kg/día por 10 días completos (o Penicilina Benzatina IM única) · Prevención de Fiebre Reumática Aguda',
          'La piel de lija con signo de Pastia confirma escarlatina, tratándose con amoxicilina durante diez días completos.',
        ),
      ],
      [
        'Fiebre prolongada mayor o igual a 5 días con inyección conjuntival, labios rojos fisurados y edema distal',
        N(
          'refer',
          'Sospecha de Enfermedad de Kawasaki (Vasculitis Coronaria)',
          'Hospitalización inmediata · Inmunoglobulina endovenosa 2 g/kg en infusión única más Aspirina · Ecocardiograma precoz',
          'Con cinco días de fiebre y compromiso mucocutáneo hospitalizamos de urgencia para inmunoglobulina endovenosa y aspirina.',
        ),
      ],
      [
        'Exantema maculopapular no confluente que brota bruscamente tras ceder 3 a 4 días de fiebre alta',
        N(
          'ok',
          'Diagnóstico de Exantema Súbito (Roséola Infantil por HHV-6)',
          'Lactante de 6 a 15 meses · Cuadro benigno autolimitado · Hidratación, observación ambulatoria y educación a los padres',
          'La lisis de la fiebre que coincide con el brote en tronco confirma exantema súbito requiriendo solo manejo de soporte.',
        ),
      ],
    ),
  },
};
