// Clase 18.11 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Diarrea aguda infantil, evaluación de deshidratación según la OMS, planes de rehidratación A, B y C, gastroclisis, síndrome hemolítico urémico y contraindicaciones farmacológicas',
      say: 'Bienvenidos a la clase sobre diarrea aguda infantil y planes de rehidratación de la Organización Mundial de la Salud, uno de los temas con mayor presencia histórica en el examen EUNACOM. En esta sesión dominaremos la semiología precisa del grado de deshidratación, ejecutaremos con exactitud los planes A, B y C, revisaremos el manejo del síndrome hemolítico urémico y analizaremos cinco preguntas reales del banco oficial. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo enteropatogénico',
      title: 'Infección por Rotavirus, Atrofia Vellosa y Diarrea Osmótica',
      nodes: [
        { id: 'vir', col: 0, row: 1, k: 'start', t: 'Infección del enterocito maduro', s: 'Invasión viral de las vellosidades del intestino delgado proximal' },
        { id: 'des', col: 1, row: 1, k: 'mech', t: 'Descamación y atrofia vellosa', s: 'Destrucción epitelial con pérdida transitoria de disacaridasas apicales' },
        { id: 'lac', col: 2, row: 1, k: 'effect', t: 'Déficit secundario de lactasa', s: 'Lactosa no absorbida arrastra agua al lumen y se fermenta en colon' },
        { id: 'osm', col: 3, row: 1, k: 'alert', t: 'Diarrea ácida y deshidratación', s: 'Deposiciones líquidas explosivas, ácidas, con eritema perianal y pérdida de agua' },
      ],
      edges: [
        { from: 'vir', to: 'des', label: 'citolisis' },
        { from: 'des', to: 'lac', label: 'déficit enzimático' },
        { from: 'lac', to: 'osm', label: 'fermentación' },
      ],
      steps: [
        {
          show: ['vir', 'des'],
          note: 'Destrucción del epitelio maduro de las vellosidades intestinales',
          say: 'El rotavirus infecta y destruye selectivamente a los enterocitos maduros de las puntas de las vellosidades intestinales, provocando atrofia vellosa con pérdida transitoria de las enzimas disacaridasas del ribete en cepillo.',
        },
        {
          show: ['lac', 'osm'],
          note: 'Arrastre osmótico de agua y fermentación colónica ácida',
          say: 'La lactosa no hidrolizada permanece en el lumen intestinal ejerciendo una gran fuerza osmótica que retiene agua y electrolitos, para luego fermentarse por bacterias colónicas produciendo gas, deposiciones ácidas y eritema perianal severo.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología y fisiopatología',
      title: 'Agentes Causales: Diarrea Acuosa Viral versus Disentería Invasiva',
      cards: [
        {
          title: 'Diarrea Acuosa Viral (Rotavirus y Norovirus)',
          tag: 'Causa predominante en lactantes y preescolares',
          kind: 'key',
          items: [
            {
              t: 'Rotavirus como agente clásico de diarrea severa',
              d: 'Pico de incidencia entre los 6 y 24 meses; vómitos iniciales seguidos de diarrea acuosa profusa',
              say: 'El rotavirus es el principal responsable de gastroenteritis aguda deshidratante en menores de dos años, debutando típicamente con vómitos alimentarios y fiebre moderada, seguidos de diarrea líquida abundante.',
            },
            {
              t: 'Norovirus y adenovirus entéricos serotipos 40 y 41',
              d: 'Norovirus causa brotes epidémicos con predominio de emesis; adenovirus causa diarrea prolongada',
              say: 'El norovirus genera brotes comunitarios rápidos con vómitos incoercibles en guarderías, mientras que los adenovirus entéricos producen cuadros diarreicos más insidiosos y prolongados.',
            },
          ],
        },
        {
          title: 'Diarrea Invasiva o Disentería Bacteriana',
          tag: 'Presencia de sangre macroscópica, mucus y pujo',
          kind: 'alert',
          items: [
            {
              t: 'Shigella, Salmonella y Campylobacter jejuni',
              d: 'Invasión de la mucosa colónica con ulceraciones, leucocitos fecales abundantes y fiebre elevada',
              say: 'La disentería bacteriana se caracteriza por deposiciones mucosanguinolentas escasas acompañadas de pujo, tenesmo rectal y fiebre muy alta, producto de la invasión y necrosis de la mucosa del colon.',
            },
            {
              t: 'Escherichia coli enterohemorrágica O157:H7',
              d: 'Produce diarrea sanguinolenta por toxina Shiga sin fiebre alta; riesgo inminente de daño renal',
              say: 'Escherichia coli enterohemorrágica productora de toxina Shiga desencadena colitis hemorrágica con dolor abdominal intenso y deposiciones con sangre fresca, precediendo al síndrome hemolítico urémico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de deshidratación',
      title: 'Evaluación Clínica del Grado de Deshidratación según la OMS',
      cards: [
        {
          title: 'Signos Cardinales de la Escala OMS',
          tag: 'Estado de conciencia, ojos, sed y signo del pliegue',
          kind: 'criteria',
          items: [
            {
              t: 'Estado de conciencia y respuesta a estímulos',
              d: 'Alerta en leve; inquieto e irritable en moderada; somnoliento, comatoso o hipotónico en severa',
              say: 'El estado neurológico es el marcador más sensible: el niño sin deshidratación está alerta, el niño con deshidratación moderada se muestra irritable, y en la deshidratación severa se torna letárgico o comatoso.',
            },
            {
              t: 'Comportamiento frente a los líquidos y sed',
              d: 'Bebe normal en leve; sediento y bebe con avidez en moderada; incapaz de beber en severa',
              say: 'Al ofrecer agua o sales orales, el paciente moderado bebe con avidez desesperada, mientras que el niño con deshidratación grave es incapaz de deglutir debido a la depresión de conciencia.',
            },
          ],
        },
        {
          title: 'Signo del Pliegue Cutáneo y Mucosas',
          tag: 'Elasticidad tisular y perfusión periférica',
          kind: 'key',
          items: [
            {
              t: 'Signo del pliegue en la pared abdominal',
              d: 'Desaparece de inmediato (normal); tarda menos de dos segundos (moderada); tarda más de dos segundos (severa)',
              say: 'El pliegue cutáneo abdominal se recupera al instante en condiciones normales, tarda menos de dos segundos en la deshidratación moderada, y permanece retraído más de dos segundos en la deshidratación grave.',
            },
            {
              t: 'Presencia de lágrimas, saliva y enoftalmo',
              d: 'Ojos hundidos y mucosas secas definen moderada; sequedad extrema sin lágrimas define severa',
              say: 'La ausencia de lágrimas al llorar, el enoftalmo con ojos hundidos y la saliva espesa filante confirman un déficit volumétrico de agua corporal superior al cinco por ciento del peso.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención ambulatoria',
      title: 'Plan A de la OMS: Manejo en Domicilio y Prevención de Deshidratación',
      cards: [
        {
          title: 'Pilares del Plan A en Atención Primaria',
          tag: 'Mayor ingesta de líquidos y alimentación ininterrumpida',
          kind: 'key',
          items: [
            {
              t: 'Aporte de sales de rehidratación oral post pérdida',
              d: '10 mL/kg (o 50 a 100 mL en menores de 2 años; 100 a 200 mL en mayores) después de cada deposición líquida',
              say: 'El Plan A se aplica en el niño sin signos de deshidratación clínica, indicando administrar diez mililitros por kilo de sales de rehidratación oral después de cada deposición líquida o vómito para reponer pérdidas.',
            },
            {
              t: 'Continuar lactancia materna y dieta habitual sin diluir',
              d: 'Jamás suspender el pecho; mantener la comida habitual sin dietas restrictivas ni fórmulas diluidas',
              say: 'La alimentación debe mantenerse sin interrupciones ni diluciones de la leche: la lactancia materna debe ofrecerse con mayor frecuencia para aportar inmunoglobulinas y favorecer la regeneración epitelial.',
            },
          ],
        },
        {
          title: 'Suplementación con Zinc y Señales de Alarma',
          tag: 'Acortamiento de la diarrea y educación a cuidadores',
          kind: 'criteria',
          items: [
            {
              t: 'Suplementación de sulfato de zinc por diez a catorce días',
              d: '10 mg/día en menores de 6 meses y 20 mg/día en mayores; regenera mucosa y previene nuevos episodios',
              say: 'La suplementación con zinc por catorce días acelera la cicatrización de las vellosidades intestinales, reduce la duración de la diarrea y previene recurrencias en los meses venideros.',
            },
            {
              t: 'Instrucción formal en signos de alarma para reconsultar',
              d: 'Vómitos frecuentes que impiden hidratar, sed excesiva, ojos hundidos, sangre en heces o fiebre alta',
              say: 'Se educa a los padres para consultar de inmediato si el niño vomita todo lo que ingiere, si aparecen ojos hundidos, sed insaciable o presencia de sangre macroscópica en las heces.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Rehidratación oral supervisada',
      title: 'Plan B de la OMS: Rehidratación Oral en Deshidratación Moderada',
      cards: [
        {
          title: 'Dosificación y Fraccionamiento de Sales Orales',
          tag: 'Cincuenta a cien mililitros por kilo en cuatro horas',
          kind: 'criteria',
          items: [
            {
              t: 'Cálculo de volumen total a administrar en 4 horas',
              d: '50 a 100 mL/kg de sales de rehidratación oral de baja osmolaridad repartidos en un período de cuatro horas',
              say: 'El Plan B se realiza en el centro de salud administrando cincuenta a cien mililitros por kilo de sales de rehidratación oral durante un período estricto de cuatro horas de supervisión.',
            },
            {
              t: 'Técnica de administración fraccionada con cuchara',
              d: 'Ofrecer pequeños volúmenes con cuchara o jeringa: 5 a 10 mL cada 2 a 3 minutos para evitar distensión gástrica',
              say: 'La solución se entrega fraccionada lentamente con cuchara o jeringa, a razón de cinco a diez mililitros cada dos a tres minutos, evitando dar volúmenes grandes de golpe que desencadenen vómitos.',
            },
          ],
        },
        {
          title: 'Manejo del Vómito durante la Rehidratación',
          tag: 'Pausa gástrica breve y reinicio más lento',
          kind: 'key',
          items: [
            {
              t: 'Si el paciente vomita: Esperar diez minutos y reiniciar',
              d: 'Pausa gástrica de diez minutos para calmar el peristaltismo retrógrado y reanudar con volúmenes más pequeños',
              say: 'Si el niño vomita durante el procedimiento, se suspende la administración por diez minutos y luego se reinicia ofreciendo volúmenes menores a velocidad más pausada.',
            },
            {
              t: 'Reevaluación a las cuatro horas para definir destino',
              d: 'Si desaparecen signos de deshidratación: pasa a Plan A y alta; si persiste moderado: repetir 4 horas; si empeora: Plan C',
              say: 'A las cuatro horas se reevalúa al paciente: si está hidratado pasa a Plan A y se va a casa; si persiste con deshidratación moderada se repite el ciclo; y si empeora se pasa a rehidratación parenteral.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo de la intolerancia oral',
      title: 'Fracaso del Plan B y Rol de la Gastroclisis por Sonda Nasogástrica',
      cards: [
        {
          title: 'Causas de Fracaso de la Rehidratación Oral',
          tag: 'Vómitos incoercibles o flujo diarreico alto',
          kind: 'alert',
          items: [
            {
              t: 'Vómitos repetidos e incoercibles a pesar de fraccionar',
              d: 'Más de tres a cuatro vómitos por hora que impiden balance hídrico positivo durante la terapia oral',
              say: 'Hablamos de fracaso de la vía oral cuando los vómitos persisten de forma incoercible a pesar del fraccionamiento adecuado, o ante un flujo de diarrea masivo superior a diez mililitros por kilo por hora.',
            },
            {
              t: 'Rechazo voluntario pertinaz de las sales de rehidratación',
              d: 'Lactante exhausto o irritable que rechaza sistemáticamente la ingesta de fluidos orales',
              say: 'El rechazo persistente a beber la solución por fatiga extrema o sabor salino también constituye un criterio de falla para la administración oral espontánea.',
            },
          ],
        },
        {
          title: 'Gastroclisis por Sonda Nasogástrica',
          tag: 'Rescate enteral continuo antes de invadir la vía venosa',
          kind: 'pharma',
          items: [
            {
              t: 'Instalación de sonda nasogástrica fina e infusión continua',
              d: 'Administrar sales de rehidratación a 20 mL/kg/hora mediante goteo continuo por sonda nasogástrica',
              say: 'Antes de recurrir a la vía endovenosa, la mejor estrategia es instalar una sonda nasogástrica e iniciar gastroclisis continua a veinte mililitros por kilo por hora, logrando excelente tolerancia gástrica.',
            },
            {
              t: 'Éxito comprobado de la infusión gástrica continua',
              d: 'El flujo continuo lento no distiende el antro gástrico y evita el reflejo emético en más del 80% de los casos',
              say: 'La infusión gástrica continua evita la sobredistensión del estómago y suprime el reflejo del vómito, permitiendo rehidratar con éxito por vía digestiva sin someter al niño a punciones venosas dolorosas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia hemodinámica',
      title: 'Plan C de la OMS: Rehidratación Parenteral y Manejo del Shock',
      cards: [
        {
          title: 'Indicaciones del Plan C Endovenoso',
          tag: 'Deshidratación severa mayor al diez por ciento o shock',
          kind: 'alert',
          items: [
            {
              t: 'Pérdida de conciencia, coma o signos de shock hipovolémico',
              d: 'Llenado capilar lento mayor a 3 segundos, pulso filiforme, frialdad distal e incapacidad absoluta para beber',
              say: 'El Plan C está reservado para la deshidratación severa con pérdida mayor al diez por ciento del peso, presencia de letargia o coma, o signos clínicos de choque circulatorio hipovolémico.',
            },
            {
              t: 'Solución cristaloide de elección: Ringer Lactato o Suero Fisiológico',
              d: 'Ringer Lactato aporta electrolitos y lactato metabolizable a bicarbonato; Suero Fisiológico al 0.9% es alternativa',
              say: 'La solución cristaloide de elección es el Ringer Lactato por su balance electrolítico fisiológico y aporte de buffer, utilizándose suero fisiológico al cero coma nueve por ciento como alternativa universal.',
            },
          ],
        },
        {
          title: 'Esquema de Infusión Parenteral Rápida de la OMS',
          tag: 'Cien mililitros por kilo divididos en fases',
          kind: 'criteria',
          items: [
            {
              t: 'Bolo inicial si hay choque descompensado',
              d: 'Suero fisiológico a 20 mL/kg en bolo endovenoso rápido en diez a veinte minutos; repetir si persiste mala perfusión',
              say: 'Si el paciente ingresa en shock descompensado se administra de inmediato un bolo rápido de suero fisiológico a veinte mililitros por kilo en diez a quince minutos antes de calcular el resto del plan.',
            },
            {
              t: 'Pauta de infusión según edad cronológica',
              d: 'Lactantes menores de un año: 30 mL/kg en 1 hora, luego 70 mL/kg en 5 horas. Mayores: 30 mL/kg en 30 min, luego 70 mL/kg en 2.5 h',
              say: 'La pauta total de cien mililitros por kilo se entrega en seis horas en menores de un año, y en tres horas en niños mayores, pasando a vía oral tan pronto el paciente recupere la conciencia.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Evaluación y tratamiento',
      title: 'Matriz de Evaluación de Deshidratación y Planes Terapéuticos OMS',
      head: ['Signo Evaluado', 'Sin Deshidratación', 'Deshidratación Moderada', 'Deshidratación Severa'],
      rows: [
        {
          cells: ['Estado Neurológico', 'Alerta, activo, reactivo', 'Inquieto o irritable', 'Letárgico, comatoso o hipotónico'],
          say: 'El estado neurológico varía desde alerta en el niño normal, pasando por irritabilidad en el moderado, hasta letargia o coma en el severo.',
        },
        {
          cells: ['Ojos y Lágrimas', 'Ojos normales, lágrimas presentes', 'Ojos hundidos, lágrimas escasas', 'Ojos muy hundidos y secos sin lágrimas'],
          say: 'Los ojos y lágrimas muestran sequedad progresiva, con enoftalmo marcado y ausencia total de secreción lagrimal en el cuadro grave.',
        },
        {
          cells: ['Sed al Ofrecer Líquidos', 'Bebe normal sin avidez', 'Sediento, bebe con avidez', 'Bebe muy mal o es incapaz de beber'],
          say: 'Al ofrecer agua, el niño con deshidratación moderada bebe con desesperada avidez, mientras que el severo no logra tragar.',
        },
        {
          cells: ['Signo del Pliegue Cutáneo', 'Se recupera instantáneamente', 'Se recupera en menos de dos segundos', 'Se recupera muy lentamente en más de dos segundos'],
          say: 'El pliegue cutáneo abdominal se recupera de inmediato en el niño sano, y tarda más de dos segundos en desaparecer en el paciente grave.',
        },
        {
          cells: ['Conducta Terapéutica', 'PLAN A en domicilio', 'PLAN B con sales orales en 4 horas', 'PLAN C parenteral endovenoso urgente'],
          say: 'La conducta es el Plan A ambulatorio para prevenir, Plan B con sales orales supervisadas por cuatro horas, y Plan C endovenoso urgente.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Farmacovigilancia y prohibiciones',
      title: 'Errores Peligrosos y Fármacos Prohibidos en Diarrea Pediátrica',
      cards: [
        {
          title: 'Contraindicación de Loperamida y Antidiarreicos',
          tag: 'Riesgo inminente de íleo paralítico y megacolon tóxico',
          kind: 'alert',
          items: [
            {
              t: 'Loperamida y opiáceos estrictamente prohibidos en niños',
              d: 'Paralizan la motilidad intestinal impidiendo la expulsión de toxinas y causando distensión masiva letal',
              say: 'La loperamida y los fármacos modificadores del tránsito intestinal están terminantemente contraindicados en pediatría por provocar íleo paralítico, perforación intestinal y megacolon tóxico.',
            },
            {
              t: 'Antiespasmódicos y adsorbentes sin evidencia',
              d: 'Fármacos como carbón activado o colestiramina son inútiles y alteran la absorción de nutrientes esenciales',
              say: 'Los antiespasmódicos y adsorbentes carecen de utilidad clínica demostrada y aumentan los efectos adversos sin acortar la duración del cuadro diarreico.',
            },
          ],
        },
        {
          title: 'Peligro de Líquidos Caseros Hiperosmolares',
          tag: 'Bebidas isotónicas deportivas y jugos azucarados',
          kind: 'alert',
          items: [
            {
              t: 'Bebidas deportivas y gaseosas agravan la diarrea',
              d: 'Contienen exceso de glucosa (alta osmolaridad) y déficit extremo de sodio, provocando diarrea osmótica severa',
              say: 'Las bebidas de fantasía, jugos industriales y bebidas deportivas para adultos están contraindicadas porque su elevada concentración de azúcar y escaso sodio empeoran el arrastre osmótico de agua.',
            },
            {
              t: 'Composición obligatoria de las SRO de baja osmolaridad',
              d: 'Glucosa 75 mmol/L y sodio 75 mEq/L; relación estequiométrica óptima para el cotransportador SGLT-1',
              say: 'Las sales de rehidratación oral de baja osmolaridad presentan concentraciones balanceadas de sodio y glucosa que aprovechan el cotransporte epitelial de solutos para arrastrar agua al torrente sanguíneo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicación hematológica y renal',
      title: 'Síndrome Hemolítico Urémico (SHU): Tríada y Peligro de Antibióticos',
      cards: [
        {
          title: 'Tríada Fisiopatológica del SHU Típico',
          tag: 'Toxina Shiga de Escherichia coli enterohemorrágica',
          kind: 'alert',
          items: [
            {
              t: 'Anemia hemolítica microangiopática con esquistocitos',
              d: 'Destrucción mecánica de eritrocitos al chocar contra mallas de fibrina en capilares glomerulares dañados',
              say: 'El síndrome hemolítico urémico debuta con anemia hemolítica microangiopática con abundantes esquistocitos en frotis por fragmentación eritrocitaria en el endotelio capilar inflamado.',
            },
            {
              t: 'Trombocitopenia por consumo e injuria renal aguda',
              d: 'Consumo periférico masivo de plaquetas en microtrombos y daño glomerular agudo con oliguria y uremia',
              say: 'La tríada se completa con trombocitopenia por agregación de plaquetas en el lecho vascular renal y falla renal aguda con oliguria, edema facial e hipertensión arterial severa.',
            },
          ],
        },
        {
          title: '¡Contraindicación Absoluta de Antibióticos en Sospecha de SHU!',
          tag: 'La lisis bacteriana multiplica la liberación de toxina Shiga',
          kind: 'alert',
          items: [
            {
              t: 'Los antibióticos empeoran la evolución y aumentan la mortalidad',
              d: 'La muerte bacteriana por betalactámicos o quinolonas libera masivamente toxina Shiga al torrente circulatorio',
              say: 'En el EUNACOM es una regla de oro: ante una diarrea sanguinolenta con sospecha de Escherichia coli enterohemorrágica está estrictamente contraindicado prescribir antibióticos, ya que multiplican la liberación de toxina Shiga.',
            },
            {
              t: 'Puntualización sobre transfusiones: No transfundir plaquetas de rutina',
              d: 'Las transfusiones de plaquetas aumentan la formación de microtrombos; solo transfundir glóbulos rojos desleucocitados si anemia grave',
              say: 'El tratamiento es exclusivamente de soporte: no se deben transfundir plaquetas de rutina porque avivan la microtrombosis, reservando la transfusión de glóbulos rojos empacados solo para anemia sintomática profunda.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Indicaciones antimicrobianas precisas',
      title: 'Disentería Bacteriana: Cuándo Están Realmente Indicados los Antibióticos',
      cards: [
        {
          title: 'Criterios Estrictos de Tratamiento Antibiótico',
          tag: 'Disentería por Shigella confirmada o sospecha fundada',
          kind: 'pharma',
          items: [
            {
              t: 'Disentería con fiebre elevada y compromiso del estado general',
              d: 'Cuadro séptico sugerente de Shigella sonnei o flexneri con toxicidad sistémica y deposiciones mucosanguinolentas',
              say: 'Los antibióticos en gastroenteritis pediátrica se restringen a cuadros de disentería con fiebre muy alta y afectación sistémica severa por Shigella, o en sepsis neonatal comprobada.',
            },
            {
              t: 'Antibióticos de elección según antibiograma local',
              d: 'Azitromicina oral o Ciprofloxacino en casos seleccionados; ceftriaxona endovenosa si hay bacteriemia invasiva',
              say: 'En disentería por Shigella el tratamiento de elección es azitromicina oral por tres a cinco días o cefalosporinas de tercera generación en niños hospitalizados con intolerancia a la vía digestiva.',
            },
          ],
        },
        {
          title: 'Portación Asintomática de Clostridium Difficile',
          tag: 'Hallazgo frecuente sin indicación de tratamiento',
          kind: 'key',
          items: [
            {
              t: 'Colonización asintomática habitual en menores de dos años',
              d: 'Hasta un 30% a 50% de los lactantes sanos son portadores de Clostridioides difficile sin presentar enfermedad',
              say: 'La detección de Clostridioides difficile en heces de lactantes menores de dos años representa casi siempre una colonización asintomática inocua que no requiere metronidazol ni vancomicina.',
            },
            {
              t: 'Manejo centrado en el patógeno viral primario',
              d: 'Si el niño tiene diarrea por rotavirus y test positivo para C. difficile, solo se trata la deshidratación viral',
              say: 'Si un niño con diarrea acuosa por rotavirus presenta detección positiva para Clostridium difficile, la conducta médica correcta es mantener la hidratación oral sin indicar antibióticos específicos.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de rehidratación',
      title: 'Algoritmo de Manejo de la Deshidratación por Diarrea Aguda (OMS)',
      say: 'Examinemos el algoritmo paso a paso para categorizar el grado de deshidratación e instaurar de inmediato el plan de rehidratación adecuado.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2025 · Pregunta 74',
      title: 'Manejo Inicial de Gastroenteritis Aguda sin Deshidratación',
      stem: 'Niño de 2 años con gastroenteritis aguda de 24 horas de evolución, con vómitos y diarrea. Sin fiebre alta, sin sangre en deposiciones, mucosas hidratadas, llenado capilar normal y diuresis conservada.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Hospitalización y suero endovenoso de mantención' },
        { letter: 'B', text: 'Sales de rehidratación oral fraccionada en domicilio (Plan A)' },
        { letter: 'C', text: 'Ayuno digestivo absoluto durante 6 horas' },
        { letter: 'D', text: 'Antibióticos orales empíricos de amplio espectro' },
        { letter: 'E', text: 'Antidiarreico con loperamida oral' },
      ],
      correct: 'B',
      explanation: 'En un niño de 2 años con gastroenteritis aguda que se encuentra clínicamente hidratado (mucosas húmedas, buen llanto, diuresis presente y llenado capilar normal) y sin signos de disentería ni alarma, el diagnóstico es diarrea aguda sin deshidratación (< 5% de pérdida ponderal). La conducta correcta según la OMS y el MINSAL es el PLAN A: administración domiciliaria de Sales de Rehidratación Oral (SRO) de baja osmolaridad fraccionadas (10 mL/kg tras cada deposición líquida o vómito), continuar la alimentación habitual y la lactancia sin diluciones, e instruir en signos de alarma. La loperamida está formalmente contraindicada en niños por riesgo de íleo paralítico, y los antibióticos no están indicados en diarreas acuosas.',
      say: {
        stem: 'Niño de dos años con gastroenteritis de veinticuatro horas vómitos y diarrea sin sangre mucosas hidratadas llenado capilar normal y diuresis conservada.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'La opción A hospitalización y suero endovenoso. La B sales de rehidratación oral fraccionada en domicilio. La C ayuno digestivo absoluto. La D antibióticos empíricos. La E loperamida oral. Reconoce el estado de hidratación. Piénsalo.',
        answer: 'La respuesta correcta es la B. Por encontrarse clínicamente hidratado corresponde el Plan A con sales de rehidratación oral fraccionadas en casa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2024 · Pregunta 76',
      title: 'Diarrea por Rotavirus y Portación Asintomática de C. Difficile',
      stem: 'Un niño de 18 meses, desde hace 24 horas presenta fiebre hasta 38.7°C, asociado a episodios de vómitos alimentarios y seguido de diarrea acuosa abundante. Al examen físico se aprecia en buen estado, hidratado y con abdomen blando. Se realiza examen de deposiciones que resulta positivo para Rotavirus y Clostridioides difficile.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Probar tolerancia y rehidratación por vía oral' },
        { letter: 'B', text: 'Administrar suero fisiológico por vía endovenosa' },
        { letter: 'C', text: 'Iniciar metronidazol oral por 10 días' },
        { letter: 'D', text: 'Iniciar ceftriaxona endovenosa' },
        { letter: 'E', text: 'Iniciar vancomicina endovenosa' },
      ],
      correct: 'A',
      explanation: 'En lactantes y niños pequeños menores de dos años, la portación intestinal asintomática de Clostridioides difficile es un fenómeno extraordinariamente común y fisiológico (colonización presente hasta en un tercio de la población pediátrica sana), debido a la inmadurez de los receptores colónicos para sus enterotoxinas. Por tanto, ante un cuadro clásico de gastroenteritis acuosa viral con detección confirmada de Rotavirus, el hallazgo concomitante de C. difficile representa una mera colonización que no requiere tratamiento antibiótico. La conducta médica correcta es el manejo de la diarrea viral mediante prueba de tolerancia y rehidratación por vía oral.',
      say: {
        stem: 'Niño de dieciocho meses con gastroenteritis acuosa febril hidratado en buen estado con deposiciones positivas para Rotavirus y Clostridioides difficile.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'La opción A probar tolerancia y rehidratación por vía oral. La B suero endovenoso. La C metronidazol oral. La D ceftriaxona. La E vancomicina endovenosa. Distingue infección de colonización. Piénsalo.',
        answer: 'La respuesta correcta es la A. En lactantes Clostridium suele ser una colonización asintomática y el cuadro se explica por Rotavirus requiriendo solo hidratación oral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2015 · Pregunta 134',
      title: 'Diarrea Nosocomial Acuosa Ácida en Lactante Hospitalizado',
      stem: 'Un niño de 7 meses de edad es hospitalizado por una bronquiolitis aguda. Al quinto día de la hospitalización, presenta fiebre y diarrea acuosa abundante, de olor ácido, sin sangre, con cerca de 6 deposiciones líquidas al día.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Escherichia coli enteroinvasora' },
        { letter: 'B', text: 'Shigella sonnei' },
        { letter: 'C', text: 'Clostridioides difficile' },
        { letter: 'D', text: 'Rotavirus' },
        { letter: 'E', text: 'Enterovirus' },
      ],
      correct: 'D',
      explanation: 'Las diarreas nosocomiales en lactantes hospitalizados son abrumadoramente de etiología viral, siendo el Rotavirus el patógeno causante en la gran mayoría de los casos de brotes intrahospitalarios en salas pediátricas. La clínica de deposiciones acuosas muy abundantes, de pH ácido y olor agrio secundario a la fermentación colónica de disacáridos no absorbidos, sin sangre macroscópica, es patognomónica de gastroenteritis viral por Rotavirus. Clostridioides difficile suele requerir antecedente de antibioticoterapia previa de amplio espectro prolongada.',
      say: {
        stem: 'Lactante de siete meses hospitalizado por bronquiolitis que al quinto día presenta fiebre y diarrea acuosa abundante de olor ácido sin sangre.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'La opción A Escherichia coli. La B Shigella. La C Clostridioides difficile. La D Rotavirus. La E Enterovirus. Identifica el virus nosocomial clásico. Piénsalo.',
        answer: 'La respuesta correcta es la D. El rotavirus es la principal causa de diarrea aguda nosocomial acuosa y ácida en salas pediátricas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2025 · Pregunta 146',
      title: 'Etiología de Diarrea Acuosa en Lactante de 10 Meses',
      stem: 'Lactante de 10 meses con diarrea acuosa de 3 días de evolución, que mejora tras rehidratación oral. Hemograma y electrolitos plasmáticos normales.',
      question: '¿Cuál es el diagnóstico etiológico más probable de la gastroenteritis?',
      options: [
        { letter: 'A', text: 'Gastroenteritis bacteriana por Salmonella enteritidis' },
        { letter: 'B', text: 'Gastroenteritis por Rotavirus' },
        { letter: 'C', text: 'Infección urinaria febril' },
        { letter: 'D', text: 'Enfermedad celíaca de debut' },
        { letter: 'E', text: 'Fibrosis quística descompensada' },
      ],
      correct: 'B',
      explanation: 'En un lactante de 10 meses previamente sano que presenta un cuadro autolimitado de diarrea acuosa profusa de 3 días de duración, sin sangre, con electrolitos normales y excelente respuesta a la rehidratación oral, el agente etiológico indiscutido más frecuente es el Rotavirus (o norovirus). Las gastroenteritis bacterianas invasivas (como Salmonella o Shigella) suelen cursar con fiebre alta tóxica, dolor abdominal cólico intenso y disentería con sangre y leucocitos fecales.',
      say: {
        stem: 'Lactante de diez meses con diarrea acuosa de tres días que mejora tras rehidratación oral con electrolitos y hemograma normales.',
        question: '¿Cuál es el diagnóstico etiológico más probable?',
        options: 'La opción A gastroenteritis por Salmonella. La B gastroenteritis por Rotavirus. La C infección urinaria. La D enfermedad celíaca. La E fibrosis quística. Reconoce la causa viral más común. Piénsalo.',
        answer: 'La respuesta correcta es la B. Rotavirus es la causa más frecuente de diarrea acuosa benigna autolimitada en lactantes pequeños.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.039',
      title: 'Diarrea Sanguinolenta y Riesgo de Síndrome Hemolítico Urémico',
      stem: 'Un niño de 3 años presenta diarrea acuosa que a las 48 horas se vuelve francamente sanguinolenta, con cólicos abdominales intensos y febrícula de 37.9°C. Se sospecha infección por Escherichia coli enterohemorrágica productora de toxina Shiga.',
      question: '¿Cuál es la conducta médica respecto al uso de antibióticos en este paciente?',
      options: [
        { letter: 'A', text: 'Iniciar Ciprofloxacino oral inmediato para reducir la bacteriemia' },
        { letter: 'B', text: 'Contraindicar formalmente los antibióticos por riesgo de inducir Síndrome Hemolítico Urémico (SHU)' },
        { letter: 'C', text: 'Indicar Metronidazol oral para cubrir anaerobios' },
        { letter: 'D', text: 'Administrar Ceftriaxona intramuscular en dosis única preventiva' },
        { letter: 'E', text: 'Indicar ampicilina oral asociada a loperamida' },
      ],
      correct: 'B',
      explanation: 'En pacientes pediátricos con diarrea sanguinolenta por sospecha de Escherichia coli productora de toxina Shiga (STEC, como el serotipo O157:H7), está TERMINANTEMENTE CONTRAINDICADO el uso de antibióticos bactericidas. La exposición a antibióticos daña la membrana bacteriana y activa los fagos líticos de la bacteria, desencadenando una liberación masiva de toxina Shiga libre hacia el torrente circulatorio. Esto multiplica exponencialmente el riesgo de que el niño desarrolle un Síndrome Hemolítico Urémico (SHU) completo con anemia hemolítica microangiopática, trombocitopenia y falla renal anúrica.',
      say: {
        stem: 'Niño de tres años con diarrea francamente sanguinolenta dolor abdominal intenso y sospecha de Escherichia coli productora de toxina Shiga.',
        question: '¿Cuál es la conducta médica respecto al uso de antibióticos en este paciente?',
        options: 'La opción A ciprofloxacino oral. La B contraindicar formalmente los antibióticos por riesgo de inducir síndrome hemolítico urémico. La C metronidazol. La D ceftriaxona intramuscular. La E ampicilina con loperamida. Recuerda la liberación de toxina. Piénsalo.',
        answer: 'La respuesta correcta es la B. Los antibióticos están estrictamente contraindicados porque lisan la bacteria y liberan toxina Shiga desatando síndrome hemolítico urémico.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Diarrea y Rehidratación Pediátrica',
      cards: [
        {
          title: 'Planes OMS y Algoritmo Terapéutico',
          tag: 'Elección del plan según la severidad clínica',
          kind: 'criteria',
          items: [
            {
              t: 'Plan A en domicilio; Plan B 50 a 100 mL/kg en 4 horas; Plan C endovenoso',
              d: 'SRO fraccionada con cuchara; si hay vómitos usar gastroclisis por SNG antes de invadir vía venosa',
              say: 'Recuerden la escala de la OMS: Plan A en casa para reponer pérdidas; Plan B con cincuenta a cien mililitros por kilo de sales en cuatro horas; y Plan C parenteral si hay choque o deshidratación grave.',
            },
            {
              t: 'Gastroclisis a 20 mL/kg/hora ante intolerancia gástrica',
              d: 'La infusión lenta continua por sonda nasogástrica rescata la vía enteral evitando la venopunción',
              say: 'Si el niño vomita reiteradamente en Plan B recurran a la gastroclisis por sonda nasogástrica a veinte mililitros por kilo por hora antes de canalizar una vía venosa.',
            },
          ],
        },
        {
          title: 'Contraindicaciones de Máxima Severidad',
          tag: 'Prohibiciones letales en el examen',
          kind: 'alert',
          items: [
            {
              t: '¡Cero loperamida en niños por riesgo de íleo paralítico!',
              d: 'Provoca megacolon tóxico y muerte; contraindicada en diarrea aguda infantil en todas las edades',
              say: 'Nunca prescriban loperamida en niños por el peligro mortal de íleo paralítico y megacolon tóxico.',
            },
            {
              t: '¡Cero antibióticos en diarrea disentérica con sospecha de SHU!',
              d: 'Lisan la bacteria aumentando la toxina Shiga circulante; el manejo del SHU es puramente de soporte',
              say: 'Los antibióticos están prohibidos ante sospecha de Escherichia coli enterohemorrágica. Si te llevas una sola idea de hoy: la rehidratación oral con sales de baja osmolaridad es el pilar absoluto, y los antibióticos en disentería aumentan el riesgo de síndrome hemolítico urémico. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de la Deshidratación en Diarrea Aguda (OMS)',
    root: N(
      'start',
      'Paciente Pediátrico con Diarrea Aguda Líquida y/o Vómitos',
      'Evaluación de signos cardinales: estado neurológico, lágrimas, enoftalmo, sed y signo del pliegue cutáneo',
      'Iniciamos la evaluación clasificando al paciente en uno de los tres estados de hidratación según la escala de la OMS.',
      [
        'Sin signos de deshidratación: Alerta, ojos normales, lágrimas presentes y pliegue inmediato (< 5% pérdida)',
        N(
          'ok',
          'PLAN A: Prevención de Deshidratación en Domicilio',
          'SRO 10 mL/kg tras cada pérdida líquida · Continuar lactancia y dieta habitual · Zinc oral por 14 días · Signos de alarma a cuidadores',
          'Con paciente hidratado indicamos Plan A en casa reponiendo pérdidas con sales orales y manteniendo la comida habitual.',
        ),
      ],
      [
        'Deshidratación moderada o algún grado: Inquieto/irritable, ojos hundidos, sediento bebe con avidez, pliegue < 2s (5-10%)',
        N(
          'do',
          'PLAN B: Rehidratación Oral Supervisada en Centro de Salud',
          'SRO de baja osmolaridad 50 a 100 mL/kg en 4 horas fraccionadas con cuchara · Pausa de 10 minutos si vomita y reiniciar lento',
          'En deshidratación moderada aplicamos Plan B en sala con cincuenta a cien mililitros por kilo de sales en cuatro horas.',
          [
            'Tolerancia adecuada y desaparición de los signos de deshidratación a las 4 horas',
            N(
              'ok',
              'Éxito de Plan B: Transición a Plan A y Alta',
              'Completar rehidratación · Alta a domicilio con pautas de Plan A y control médico de seguimiento en 24 horas',
              'Si el niño se recupera pasa a Plan A y se da de alta con control médico ambulatorio.',
            ),
          ],
          [
            'Vómitos incoercibles o rechazo sistemático que impiden el balance positivo',
            N(
              'do',
              'Gastroclisis Continua por Sonda Nasogástrica',
              'Instalación de SNG fina · Infusión continua de SRO a 20 mL/kg/hora · Reevaluar tolerancia y diuresis en 2 horas',
              'Ante vómitos repetidos instalamos sonda nasogástrica para gastroclisis continua a veinte mililitros por kilo por hora.',
            ),
          ],
        ),
      ],
      [
        'Deshidratación grave o shock hipovolémico: Letárgico o comatoso, no bebe, pliegue muy lento > 2s (> 10% pérdida)',
        N(
          'alert',
          'PLAN C: Rehidratación Parenteral Endovenosa Inmediata',
          'Bolo de SF 0.9% 20 mL/kg si hay shock · Ringer Lactato EV 100 mL/kg (30 mL/kg iniciales luego 70 mL/kg) · Monitorización en UCI',
          'En deshidratación severa se canaliza vía venosa urgente con Ringer Lactato o bolo de suero fisiológico si hay choque.',
        ),
      ],
    ),
  },
};
