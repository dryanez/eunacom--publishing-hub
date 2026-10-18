// Clase 5.25 (Diabetes y nutrición) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_diabetes_bloque_5.cjs (diab-25, tema 5.6, tier 3). Códigos 1.02.1.012, 1.02.1.013, 1.02.1.016,
// 1.02.1.018, 1.02.3.001, 1.02.3.002, 1.02.3.006, 1.02.3.012, 1.02.3.014, 1.02.4.012, 1.02.4.020, 1.01.1.023, 1.01.3.001, 1.01.3.004
// (Dx específico · Tx completo · Seguimiento completo, según books/data/v3_codemap.json).
// Preguntas reales (class_questions.cjs diab-25 no trae códigos; búsqueda en el banco por tema y verificación de cada recTag):
// Julio 2015 P20 (obeso con glicemia normal), Julio 2013 P33 (obeso con acantosis y glicemia en rango diabético), Diciembre 2017 P42
// (acantosis y acrocordones), Julio 2025 P30 (prediabetes) y Julio 2017 P4 (anorexia: kilocalorías de inicio). Enunciados y alternativas
// tomados del banco real (books/data/real_questions_by_code.json), no de las fechas del libro.
// No usadas: Diciembre 2022 P162 (diabetes tipo 2 con acantosis: ya es clase de tratamiento de la diabetes), anorexia y bulimia de
// Julio 2025 P4, Diciembre 2025 P145, Julio 2019 P168 y Julio 2015 P80 (diagnóstico psiquiátrico, clase de psiquiatría) y las de
// obstrucción por bridas o déficit de B12 en cirugía bariátrica (pertenecen a cirugía y hematología).
// Fotos: acantosis nigricans (High-Yield p. 774, ya en diab-01) y manga gástrica (Harrison 21.ª ed., Fig. 402-3). Falta el esquema del
// bypass en Y de Roux: Harrison trae el panel C pero la extracción local no lo separó; se anota como faltante.
// En movimiento: scenes/diabetes_nuevas.html (?v=imc), gráfico solo código con los cortes del libro.
// Revisión de contenido (para REVISION_CONTENIDO.md): ver informe final.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-25',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Obesidad, síndrome metabólico, evaluación nutricional y trastornos de la conducta alimentaria: qué se estudia, qué se trata y qué se deriva',
      say: 'Bienvenido. Cerramos el bloque de complicaciones crónicas con una clase de nutrición clínica, que reúne tres escenarios muy preguntados. El primero es el exceso de peso, con la obesidad y el síndrome metabólico. El segundo es la prevención de la diabetes tipo dos. Y el tercero es el déficit: la anorexia nerviosa y el peligro de realimentar demasiado rápido. Partamos por entender por qué la grasa abdominal se vuelve un problema metabólico.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'De la grasa visceral al síndrome metabólico',
      nodes: [
        { id: 'e', col: 0, row: 1, k: 'cause', t: 'Exceso calórico y sedentarismo', s: 'Balance energético positivo' },
        { id: 'g', col: 0, row: 3, k: 'cause', t: 'Base genética', s: 'Predisposición familiar' },
        { id: 'a', col: 1, row: 2, k: 'mech', t: 'Adiposidad visceral', s: 'Cintura aumentada' },
        { id: 'r', col: 2, row: 2, k: 'mech', t: 'Resistencia a la insulina', s: 'Hiperinsulinemia compensadora' },
        { id: 'p', col: 4, row: 0, k: 'effect', t: 'Presión ≥ 130/85', s: 'Hipertensión' },
        { id: 'l', col: 4, row: 2, k: 'effect', t: 'Triglicéridos altos, HDL bajo', s: 'Dislipidemia aterogénica' },
        { id: 'h', col: 4, row: 4, k: 'effect', t: 'Glicemia ≥ 100', s: 'Prediabetes y diabetes' },
        { id: 'n', col: 3, row: 3, k: 'alert', t: 'Acantosis nigricans', s: 'Marcador cutáneo' },
      ],
      edges: [
        { from: 'e', to: 'a' }, { from: 'g', to: 'a' }, { from: 'a', to: 'r' },
        { from: 'r', to: 'p' }, { from: 'r', to: 'l' }, { from: 'r', to: 'h' }, { from: 'r', to: 'n' },
      ],
      steps: [
        { show: ['e', 'g'], note: 'Más calorías de las que se gastan',
          say: 'La obesidad es una enfermedad crónica y multifactorial: un balance de energía positivo, sobre una base genética, con sedentarismo y una alimentación hipercalórica. En Chile cerca de tres de cada cuatro adultos tienen exceso de peso, y alrededor de tres de cada diez tienen obesidad.' },
        { show: ['a'], note: 'La grasa que más pesa es la abdominal',
          say: 'No toda la grasa es igual. La que se acumula en el abdomen, la visceral, es metabólicamente activa, y por eso la cintura predice el riesgo mejor que el peso solo.' },
        { show: ['r'], note: 'La insulina deja de funcionar bien',
          say: 'Esa grasa visceral hace que los tejidos respondan peor a la insulina. Es la resistencia a la insulina: el páncreas compensa fabricando más, y esa hiperinsulinemia es la base de todo lo que viene.' },
        { show: ['p', 'l', 'h'], note: 'Cada componente es un factor de riesgo',
          say: 'De ahí salen los componentes del síndrome metabólico: presión elevada, triglicéridos altos con HDL bajo, y glicemia de ayuno alterada. Cada uno suma riesgo cardiovascular y de diabetes.' },
        { show: ['n'], note: 'La piel lo delata',
          say: 'Y hay un marcador que se ve a simple vista: la acantosis nigricans. Es la huella cutánea de la hiperinsulinemia, y la vas a reconocer en preguntas del examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación nutricional',
      title: 'IMC y cintura: la clasificación base',
      cards: [
        { title: 'Índice de masa corporal', tag: 'Peso en kg ÷ talla² en m', kind: 'key', items: [
          { t: 'Bajo < 18,5 · normal 18,5-24,9', d: 'Sobrepeso 25-29,9 · obesidad ≥ 30',
            say: 'Partimos por lo básico, porque se pregunta. El índice de masa corporal es el peso en kilos dividido por la talla en metros al cuadrado. Bajo peso es menos de dieciocho coma cinco, normal hasta veinticuatro coma nueve, sobrepeso de veinticinco a veintinueve coma nueve, y obesidad desde treinta.' },
          { t: 'Obesidad grado I, II y III', d: '30-34,9 · 35-39,9 · ≥ 40 es mórbida',
            say: 'La obesidad se divide en tres grados. El grado uno va de treinta a treinta y cuatro coma nueve; el dos, de treinta y cinco a treinta y nueve coma nueve; y el grado tres, desde cuarenta, es la obesidad mórbida.' },
          { t: 'Adulto mayor: otros cortes', d: 'MINSAL: bajo < 23, obesidad ≥ 32',
            say: 'En el mayor de sesenta y cinco años el MINSAL usa otros cortes: bajo peso bajo veintitrés, normal de veintitrés a veintisiete coma nueve, sobrepeso de veintiocho a treinta y uno coma nueve, y obesidad desde treinta y dos.' },
        ] },
        { title: 'Cintura', tag: 'Riesgo cardiometabólico', kind: 'alert', items: [
          { t: 'Punto medio costilla-cresta ilíaca', d: '≥ 102 cm hombre · ≥ 88 cm mujer',
            say: 'La circunferencia de cintura se mide en el punto medio entre la última costilla y la cresta ilíaca. Desde ciento dos centímetros en el hombre y ochenta y ocho en la mujer hay obesidad abdominal, y eso predice mejor el riesgo cardiometabólico que el IMC.' },
          { t: 'El IMC no separa grasa de músculo', d: 'Se equivoca en deportistas y en edema',
            say: 'Ojo con el límite del IMC: no distingue masa grasa de masa magra, así que se equivoca en deportistas y en pacientes con edema. En niños y adolescentes se usa según puntaje z o percentil.' },
          { t: 'Pliegues, bioimpedancia, DEXA', d: 'No son de uso rutinario en APS',
            say: 'Los pliegues cutáneos, la bioimpedancia y la densitometría miden la composición corporal, pero no son de rutina en atención primaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación nutricional',
      title: 'Desnutrición y balance nitrogenado',
      cards: [
        { title: 'Sospechar desnutrición', tag: 'Anamnesis y examen', kind: 'alert', items: [
          { t: 'Pérdida involuntaria de peso', d: '> 5% en 1 mes o > 10% en 6 meses',
            say: 'La anamnesis nutricional busca la pérdida involuntaria de peso. Más de cinco por ciento en un mes, o más de diez por ciento en seis meses, indica desnutrición. Al examen buscas pérdida de masa muscular, de grasa subcutánea y edema.' },
        ] },
        { title: 'Laboratorio', tag: 'Ninguno es específico', kind: 'criteria', items: [
          { t: 'Albúmina: vida media 20 días', d: 'Baja también con inflamación',
            say: 'En el laboratorio, la albúmina tiene una vida media de veinte días, así que es un marcador lento. Y ojo: la hipoalbuminemia refleja con frecuencia inflamación y no solo mala ingesta.' },
          { t: 'Prealbúmina: 2 a 3 días', d: 'La más sensible a cambios agudos',
            say: 'La prealbúmina, en cambio, dura dos a tres días, y es el marcador más sensible a cambios agudos. Se suman la transferrina y el recuento de linfocitos: menos de mil quinientos por milímetro cúbico sugiere desnutrición.' },
        ] },
        { title: 'Balance nitrogenado', tag: 'Anabolismo o catabolismo', kind: 'key', items: [
          { t: 'BN = proteínas ÷ 6,25 − (NUU + 4 g)', d: 'NUU: nitrógeno ureico urinario de 24 h',
            say: 'El balance nitrogenado dice si el paciente está en anabolismo o en catabolismo. Se calcula con las proteínas ingeridas divididas por seis coma veinticinco, menos el nitrógeno ureico urinario de veinticuatro horas más cuatro gramos, que son las pérdidas por heces y piel. Positivo es anabolismo, que es la meta; negativo es catabolismo.' },
          { t: 'NUU > 10 g/día: estrés severo', d: '< 5 leve · 5-10 moderado',
            say: 'El mismo valor gradúa el estrés metabólico: menos de cinco gramos al día es leve, de cinco a diez moderado, y más de diez es severo, como en la sepsis, el politrauma o el gran quemado. Requiere recolección completa de orina, aporte proteico conocido y función renal conservada; en enfermedad renal crónica subestima el catabolismo.' },
          { t: 'Balance negativo persistente', d: '1,5-2 g/kg/día de proteínas en el crítico',
            say: 'Si el balance sigue negativo, aumentas el aporte de proteínas y calorías, hasta uno coma cinco a dos gramos por kilo al día en el paciente crítico, tratas la causa y lo repites cada semana.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Obesidad',
      title: 'Estudio y manejo inicial',
      cards: [
        { title: 'Estudio', tag: 'Descartar causas secundarias', kind: 'criteria', items: [
          { t: 'Hipotiroidismo, Cushing, ovario poliquístico', d: 'Pedir TSH según la clínica',
            say: 'Ante una obesidad se descartan las causas secundarias: hipotiroidismo, con una TSH, síndrome de Cushing y síndrome de ovario poliquístico.' },
          { t: 'Fármacos que engordan', d: 'Corticoides, antipsicóticos, valproato, insulina',
            say: 'Y se revisan los fármacos que aumentan el peso: corticoides, antipsicóticos, antidepresivos tricíclicos, valproato, insulina, sulfonilureas y glitazonas.' },
          { t: 'Comorbilidades', d: 'DM2, HTA, dislipidemia, esteatosis, apnea',
            say: 'Se buscan las comorbilidades: diabetes tipo dos, hipertensión, dislipidemia, esteatosis hepática, apnea del sueño, artrosis, reflujo y cánceres asociados. El estudio básico es glicemia, perfil lipídico, transaminasas y presión arterial.' },
        ] },
        { title: 'Conducta', tag: 'La regla que se pregunta', kind: 'key', items: [
          { t: 'Obeso con glicemia normal', d: 'Resistencia a la insulina: solo dieta y ejercicio',
            say: 'Esta es la regla de examen. El obeso con glicemia normal y resistencia a la insulina, con un HOMA mayor de dos coma seis, no tiene diabetes ni prediabetes. Solo requiere dieta y ejercicio. No se indica metformina ni insulina.' },
          { t: 'Meta: bajar 5-10% en 6 meses', d: 'Ya mejora presión, glicemia y lípidos',
            say: 'La meta es bajar entre cinco y diez por ciento del peso en seis meses, algo que ya mejora la presión, la glicemia y los lípidos. El pilar es el estilo de vida: dieta hipocalórica, ejercicio y terapia conductual por tres a seis meses, con control mensual al inicio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Obesidad',
      title: 'Fármacos y cirugía bariátrica',
      cards: [
        { title: 'Farmacoterapia', tag: 'Complementaria', kind: 'pharma', items: [
          { t: 'IMC ≥ 30 o ≥ 27 con comorbilidad', d: 'Y fracaso del estilo de vida',
            say: 'El fármaco es un complemento, no un reemplazo. Se considera con IMC desde treinta, o desde veintisiete con comorbilidad, cuando fracasó el estilo de vida.' },
          { t: 'Orlistat', d: 'Inhibe lipasas · esteatorrea y déficit de vitaminas',
            say: 'El orlistat inhibe las lipasas intestinales. Su costo es la esteatorrea y el déficit de vitaminas liposolubles.' },
          { t: 'Agonistas GLP-1', d: 'Liraglutida 3 mg, semaglutida 2,4 mg',
            say: 'Los agonistas de GLP uno, liraglutida y semaglutida en dosis de obesidad, dan náuseas y riesgo de pancreatitis, y están contraindicados si hay antecedente de carcinoma medular de tiroides o de neoplasia endocrina múltiple tipo dos.' },
        ] },
        { title: 'Obesidad mórbida', tag: 'El médico general deriva', kind: 'alert', items: [
          { t: 'IMC ≥ 40, o ≥ 35 con comorbilidad', d: 'DM2, HTA o apnea del sueño',
            say: 'La obesidad mórbida es un IMC desde cuarenta, o desde treinta y cinco con una comorbilidad mayor, como diabetes, hipertensión o apnea del sueño. Tu rol es sospecharla, iniciar el tratamiento de las comorbilidades y derivar a un equipo con nutricionista, psicólogo y cirujano bariátrico.' },
          { t: 'Cirugía: 18 a 65 años', d: 'Tras ≥ 6 meses de manejo médico fallido',
            say: 'La cirugía bariátrica se considera entre los dieciocho y los sesenta y cinco años, cuando fracasó un manejo médico bien llevado de al menos seis meses y no hay contraindicaciones, como un trastorno alimentario grave activo, abuso de sustancias o psicosis.' },
          { t: 'Manga gástrica y bypass en Y de Roux', d: 'DM2 remite en 60-80%',
            say: 'Las técnicas más usadas son la manga gástrica, que es restrictiva, y el bypass gástrico en Y de Roux, restrictivo y malabsortivo, con mayor efecto metabólico y mejor en reflujo. Mira este esquema: en la manga se reseca gran parte del estómago y queda un tubo angosto. La diabetes remite en sesenta a ochenta por ciento de los casos.',
            photo: { src: 'biblioteca/04_diabetes/diab-25/02_manga-gastrica__harrison_p3134.jpg', label: 'Manga gástrica', at: 'Mira este esquema', credit: 'Harrison 21.ª ed., Fig. 402-3 (esquema)' } },
          { t: 'Suplementos de por vida', d: 'B12, hierro, calcio con vitamina D',
            say: 'Después de la cirugía se suplementa de por vida con vitamina B doce, hierro, calcio con vitamina D y un polivitamínico, por el riesgo de déficit nutricional y de síndrome de dumping.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Alimentación',
      title: 'Alimentación saludable',
      cards: [
        { title: 'Qué se come', tag: 'Guías MINSAL y dieta mediterránea', kind: 'key', items: [
          { t: 'Frutas y verduras ≥ 400 g/día', d: 'Cereales integrales, lácteos descremados',
            say: 'Las guías alimentarias del MINSAL y la dieta mediterránea definen la alimentación saludable: al menos cuatrocientos gramos al día de frutas y verduras, cereales integrales, lácteos descremados y frutos secos.' },
          { t: 'Legumbres y pescado 2 veces por semana', d: 'Aceite de oliva o canola',
            say: 'Legumbres dos veces por semana, pescado dos veces por semana por los omega tres, y aceite de oliva o canola como grasa principal. La dieta mediterránea reduce cerca de treinta por ciento los eventos cardiovasculares, según el estudio PREDIMED.' },
        ] },
        { title: 'Qué se limita', tag: 'Y cómo se reparte', kind: 'alert', items: [
          { t: 'Sal < 5 g/día · azúcar libre < 10%', d: 'Grasas saturadas < 10%, sin trans',
            say: 'Se limita la sal a menos de cinco gramos al día, el azúcar libre a menos de diez por ciento de las calorías y las grasas saturadas también a menos de diez por ciento. Se evitan las grasas trans, las carnes procesadas y el alcohol.' },
          { t: '50-60% carbohidratos, 15-20% proteínas', d: '25-30% grasas · fibra 25-30 g · 4 comidas',
            say: 'La distribución habitual es cincuenta a sesenta por ciento de carbohidratos complejos, quince a veinte de proteínas y veinticinco a treinta de grasas, con veinticinco a treinta gramos de fibra y cuatro comidas al día.' },
          { t: 'Ley 20.606: sellos «ALTO EN»', d: 'Calorías, azúcares, sodio, grasas saturadas',
            say: 'Y la ley veinte mil seiscientos seis obliga a rotular con sellos de alto en calorías, azúcares, sodio y grasas saturadas, y restringe la venta y la publicidad dirigida a menores de catorce años.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Regímenes',
      title: 'Qué dieta para bajar de peso',
      cards: [
        { title: 'De elección', tag: 'Hipocalórica balanceada', kind: 'key', items: [
          { t: 'Déficit de 500-750 kcal/día', d: 'Baja ~0,5 kg por semana',
            say: 'El régimen de elección es la dieta hipocalórica balanceada, con un déficit de quinientas a setecientas cincuenta kilocalorías al día respecto del gasto. Eso baja cerca de medio kilo por semana.' },
          { t: 'No bajar de 1.200 o 1.500 kcal', d: 'Mujer y hombre, sin supervisión',
            say: 'En la práctica son mil doscientas a mil quinientas kilocalorías en la mujer y mil quinientas a mil ochocientas en el hombre, sin bajar de mil doscientas ni de mil quinientas sin supervisión.' },
          { t: 'Actividad 150-300 min/semana', d: 'Aeróbica y de resistencia · terapia conductual',
            say: 'Se asocia actividad física de ciento cincuenta a trescientos minutos por semana, aeróbica y de resistencia, que conserva la masa magra, y terapia conductual, con automonitoreo y control de estímulos.' },
        ] },
        { title: 'Lo que no se recomienda', tag: 'Ojo con las modas', kind: 'alert', items: [
          { t: 'Todas rinden igual a 12 meses', d: 'Baja en carbohidratos, mediterránea, ayuno',
            say: 'Las dietas bajas en carbohidratos, bajas en grasa, mediterránea o el ayuno intermitente logran pérdidas similares a doce meses. El mejor régimen es el que el paciente puede sostener.' },
          { t: 'Muy bajo valor calórico', d: '600-800 kcal/día: breve y supervisado',
            say: 'Las dietas de muy bajo valor calórico, de seiscientas a ochocientas kilocalorías, solo se usan por periodos breves y con supervisión, por ejemplo antes de una cirugía bariátrica, por el riesgo de litiasis biliar.' },
          { t: 'Ayunos largos, «detox», cetogénica estricta', d: 'Bajar > 1 kg/semana: colelitiasis',
            say: 'Los ayunos prolongados, las dietas detox y la cetogénica estricta no se recomiendan. Y una baja sostenida de más de un kilo por semana predispone a colelitiasis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome metabólico',
      title: '3 de 5 criterios',
      cards: [
        { title: 'Criterios', tag: 'Basta con tres', kind: 'criteria', items: [
          { t: 'Cintura ≥ 102 cm (H) o ≥ 88 cm (M)', d: 'Triglicéridos ≥ 150 mg/dL',
            say: 'El síndrome metabólico se diagnostica con tres o más de cinco criterios. Uno: cintura de ciento dos centímetros o más en el hombre, u ochenta y ocho o más en la mujer. Dos: triglicéridos desde ciento cincuenta.' },
          { t: 'HDL < 40 (H) o < 50 mg/dL (M)', d: 'PA ≥ 130/85 o tratamiento',
            say: 'Tres: HDL bajo cuarenta en el hombre o bajo cincuenta en la mujer. Cuatro: presión desde ciento treinta sobre ochenta y cinco, o tratamiento antihipertensivo.' },
          { t: 'Glicemia de ayunas ≥ 100 mg/dL', d: 'O tratamiento hipoglicemiante',
            say: 'Y cinco: glicemia de ayunas desde cien, o tratamiento. El síndrome multiplica por cinco el riesgo de diabetes tipo dos y por dos el de enfermedad cardiovascular.' },
        ] },
        { title: 'Marcador cutáneo', tag: 'Resistencia a la insulina', kind: 'alert', items: [
          { t: 'Acantosis nigricans', d: 'Cuello, axilas y pliegues, con acrocordones',
            say: 'El marcador de la piel es la acantosis nigricans: hiperpigmentación aterciopelada del cuello, las axilas y los pliegues, muchas veces con acrocordones. Mira cómo se ve en el cuello, con esa piel oscura y engrosada. Se asocia además a esteatosis hepática y a ovario poliquístico.',
            photo: { src: 'biblioteca/04_diabetes/diab-25/01_acantosis-nigricans-cuello__hy_p774.jpg', label: 'Acantosis nigricans', at: 'Mira cómo se ve', credit: 'High-Yield review, p. 774' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome metabólico y prevención',
      title: 'Tratar el componente, prevenir la diabetes',
      cards: [
        { title: 'Síndrome metabólico', tag: 'No hay un fármaco para «el síndrome»', kind: 'key', items: [
          { t: 'Base: estilo de vida', d: 'Bajar 7-10%, ejercicio, dieta mediterránea',
            say: 'No existe un fármaco para el síndrome: se tratan todos sus componentes. La base es el estilo de vida, con una baja de siete a diez por ciento del peso, ejercicio y dieta mediterránea.' },
          { t: 'Cada componente con su meta', d: 'PA < 130/80 · estatina según riesgo',
            say: 'Se agrega la meta de presión bajo ciento treinta sobre ochenta, una estatina según el riesgo cardiovascular global y, si coexiste una prediabetes de alto riesgo, metformina. Se controla al menos una vez al año con glicemia, perfil lipídico y presión.' },
        ] },
        { title: 'Prevención de la DM2', tag: 'Prediabetes y alto riesgo', kind: 'alert', items: [
          { t: 'Prediabetes: 100-125 mg/dL o HbA1c 5,7-6,4%', d: 'O intolerancia a la glucosa',
            say: 'La prevención se dirige a quienes tienen prediabetes: glicemia de ayunas de cien a ciento veinticinco, intolerancia a la glucosa o hemoglobina glicosilada de cinco coma siete a seis coma cuatro. También al sobrepeso con factores de riesgo, a la diabetes gestacional previa, al ovario poliquístico y al familiar de primer grado con diabetes.' },
          { t: 'DPP: estilo de vida baja 58%', d: 'Metformina solo 31%',
            say: 'En el estudio Diabetes Prevention Program, bajar entre cinco y siete por ciento del peso con ciento cincuenta minutos semanales de actividad física redujo en cincuenta y ocho por ciento la progresión a diabetes. La metformina logró treinta y uno. Por eso la intervención más importante es el estilo de vida.' },
          { t: 'Metformina: reservada', d: 'IMC ≥ 35, < 60 años, DMG previa, glicemia en ascenso',
            say: 'La metformina se reserva para la prediabetes con IMC desde treinta y cinco, edad menor de sesenta años, diabetes gestacional previa o glicemia que sigue subiendo. En atención primaria se implementa con el programa Elige Vida Sana.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastornos de la conducta alimentaria',
      title: 'Anorexia y bulimia: cómo se distinguen',
      cards: [
        { title: 'Anorexia nerviosa', tag: 'Peso bajo', kind: 'alert', items: [
          { t: 'IMC < 18,5 y miedo a engordar', d: 'Distorsión de la imagen corporal',
            say: 'Ahora el déficit. Los trastornos de la conducta alimentaria afectan sobre todo a mujeres jóvenes y adolescentes. En la anorexia nerviosa hay restricción de la ingesta que lleva a un peso significativamente bajo, con IMC bajo dieciocho coma cinco en el adulto, miedo intenso a engordar y distorsión de la imagen corporal.' },
          { t: 'Amenorrea, lanugo, bradicardia', d: 'Hipotensión, hipotermia, acrocianosis, edema',
            say: 'El examen muestra amenorrea, lanugo, bradicardia, hipotensión, hipotermia, acrocianosis, edema y osteopenia. Puede ser restrictiva, o con atracones y purgas.' },
        ] },
        { title: 'Bulimia nerviosa', tag: 'Peso normal o alto', kind: 'criteria', items: [
          { t: 'Atracones + conducta compensatoria', d: 'Al menos 1 vez por semana por 3 meses',
            say: 'La bulimia, en cambio, son atracones recurrentes seguidos de conductas compensatorias: vómitos, laxantes, diuréticos o ejercicio excesivo, al menos una vez por semana durante tres meses, con peso normal o elevado.' },
          { t: 'Signo de Russell, parótidas, esmalte', d: 'Hipokalemia con alcalosis hipoclorémica',
            say: 'Los hallazgos son el signo de Russell, que son callosidades en el dorso de la mano, la hipertrofia parotídea indolora, la erosión del esmalte dental, y la hipokalemia con alcalosis metabólica hipoclorémica, además de hiperamilasemia. El trastorno por atracón tiene atracones sin conducta compensatoria y se asocia a obesidad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastornos de la conducta alimentaria',
      title: 'Sospechar, estabilizar y derivar',
      cards: [
        { title: 'Evaluación', tag: 'Se pide en la urgencia', kind: 'criteria', items: [
          { t: 'ECG y electrolitos', d: 'K, Mg, P, Ca · QTc largo, bradicardia',
            say: 'La conducta inicial es sospechar, estabilizar y derivar. Pides un electrocardiograma, buscando bradicardia y QTc largo, y electrolitos: potasio, magnesio, fósforo y calcio. Se suman glicemia, función renal, hemograma, TSH y test de embarazo.' },
        ] },
        { title: 'Hospitalizar si', tag: 'Criterios de gravedad', kind: 'alert', items: [
          { t: 'IMC < 15 o < 75% del peso esperado', d: 'FC < 40-50 · PA < 90/60 · hipotermia',
            say: 'Se hospitaliza con IMC bajo quince, o bajo setenta y cinco por ciento del peso esperado; frecuencia cardíaca bajo cuarenta a cincuenta; presión bajo noventa sobre sesenta; o hipotermia.' },
          { t: 'K < 3, hipofosfemia, QTc largo', d: 'Síncope, rechazo alimentario, riesgo suicida',
            say: 'También con potasio bajo tres, hipofosfemia, QTc prolongado, síncope, rechazo de la alimentación, pérdida rápida de peso, riesgo suicida o fracaso del manejo ambulatorio.' },
        ] },
        { title: 'Tratamiento', tag: 'Equipo multidisciplinario', kind: 'pharma', items: [
          { t: 'Psiquiatría, nutrición, psicología', d: 'Terapia familiar en AN adolescente',
            say: 'El tratamiento es de un equipo multidisciplinario: psiquiatría, nutrición, psicología y medicina. En adolescentes con anorexia se usa terapia familiar, y en todos terapia cognitivo-conductual.' },
          { t: 'Bulimia: fluoxetina 60 mg/día', d: 'Bupropión contraindicado: convulsiones',
            say: 'En la bulimia se agrega fluoxetina sesenta miligramos al día. El bupropión está contraindicado por el riesgo de convulsiones. Y para ganar peso en la anorexia no hay un fármaco de eficacia probada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Realimentación',
      title: 'Síndrome de realimentación',
      nodes: [
        { id: 'd', col: 0, row: 1, k: 'start', t: 'Desnutrición grave', s: 'IMC < 16, ayuno prolongado' },
        { id: 'c', col: 1, row: 1, k: 'trap', t: 'Calorías de golpe', s: 'Realimentación brusca' },
        { id: 'i', col: 2, row: 1, k: 'mech', t: 'Sube la insulina', s: 'Arrastra P, K y Mg a la célula' },
        { id: 'h', col: 3, row: 0, k: 'effect', t: 'Hipofosfemia', s: 'El hallazgo central' },
        { id: 't', col: 3, row: 2, k: 'effect', t: 'Falta tiamina', s: 'Y retención de líquidos' },
        { id: 'k', col: 4, row: 0, k: 'risk', t: 'Arritmias, insuficiencia cardíaca', s: 'Edema, convulsiones' },
        { id: 'w', col: 4, row: 2, k: 'risk', t: 'Encefalopatía de Wernicke', s: 'Confusión, ataxia, oftalmoplejía' },
        { id: 'p', col: 1, row: 3, k: 'good', t: '10-15 kcal/kg/día', s: 'Subir cada 1-2 días a 30-40' },
        { id: 'v', col: 3, row: 4, k: 'good', t: 'Tiamina 100 mg y electrolitos', s: 'K, P y Mg a diario, monitor cardíaco' },
      ],
      edges: [
        { from: 'd', to: 'c' }, { from: 'c', to: 'i' }, { from: 'i', to: 'h' }, { from: 'i', to: 't' },
        { from: 'h', to: 'k' }, { from: 't', to: 'w' }, { from: 'd', to: 'p' }, { from: 'p', to: 'v' },
      ],
      steps: [
        { show: ['d', 'c'], note: 'Alimentar mucho y rápido es peligroso',
          say: 'Este es el concepto que más se pregunta del déficit. En una desnutrición grave, introducir calorías de golpe es peligroso.' },
        { show: ['i'], note: 'La insulina arrastra electrolitos',
          say: 'Los carbohidratos suben la insulina, y la insulina arrastra fósforo, potasio y magnesio al interior de la célula. Desde afuera, el plasma queda sin esos electrolitos.' },
        { show: ['h', 't'], note: 'Hipofosfemia y déficit de tiamina',
          say: 'El hallazgo central es la hipofosfemia, y se suman retención de líquidos y un déficit de tiamina.' },
        { show: ['k', 'w'], note: 'Corazón y cerebro',
          say: 'Las consecuencias son arritmias, insuficiencia cardíaca, edema y convulsiones, y la encefalopatía de Wernicke, con oftalmoplejía, ataxia y confusión.' },
        { show: ['p'], note: 'Se previene empezando bajo',
          say: 'Se previene identificando el riesgo: IMC bajo dieciséis, ayuno prolongado, pérdida de más de quince por ciento del peso en tres a seis meses o hipokalemia previa. Y se inicia con diez a quince kilocalorías por kilo al día, que en una paciente de veintinueve kilos son unas trescientas kilocalorías, subiendo cada uno o dos días hasta treinta a cuarenta.' },
        { show: ['v'], note: 'Tiamina antes, electrolitos a diario',
          say: 'Se administra tiamina cien miligramos antes y durante, se corrigen potasio, fósforo y magnesio, y se controlan los electrolitos a diario las primeras semanas, con monitoreo cardíaco.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El IMC y qué hacer en cada tramo',
      images: [
        { src: 'animaciones/diab-25/A1_imc_conducta.mp4', label: 'IMC: del bajo peso a la obesidad mórbida', credit: 'Gráfico propio con los cortes del libro (MINSAL y OMS)' },
      ],
      steps: [
        { note: 'Un mismo número, cinco conductas',
          say: 'Mira cómo se ordena el IMC. Bajo dieciocho coma cinco, con miedo a engordar, piensa en anorexia. Hasta veinticuatro coma nueve, alimentación saludable. Desde veinticinco, estilo de vida y tamizaje de glicemia y lípidos. Desde treinta, déficit calórico y tratamiento de comorbilidades. Y desde cuarenta, o desde treinta y cinco con comorbilidad, es obesidad mórbida: derivas para evaluar la cirugía. Un solo número, y la conducta cambia por tramos.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la evaluación nutricional a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Estado nutricional: IMC, riesgo y conducta',
      head: ['IMC', 'Riesgo principal', 'Conducta inicial'],
      rows: [
        { cells: ['< 18,5 · Bajo peso', 'Desnutrición, TCA, enfermedad consuntiva', 'Estudiar la causa; con miedo a engordar, anorexia: derivar'],
          say: 'IMC bajo dieciocho coma cinco: bajo peso. Estudias la causa, y si hay miedo a engordar, sospechas anorexia nerviosa, estabilizas y derivas. Y si vas a realimentar, hazlo de a poco.' },
        { cells: ['18,5-24,9 · Normal', 'Riesgo habitual', 'Alimentación saludable y ejercicio'],
          say: 'Normal: riesgo habitual, y se mantiene la alimentación saludable y el ejercicio.' },
        { cells: ['25-29,9 · Sobrepeso', 'Riesgo cardiometabólico aumentado', 'Estilo de vida; tamizar glicemia y lípidos'],
          say: 'Sobrepeso: estilo de vida, y se tamizan la glicemia y el perfil lipídico.' },
        { cells: ['30-39,9 · Obesidad I y II', 'DM2, HTA, dislipidemia, apnea', 'Déficit calórico y ejercicio; fármacos si fracasa'],
          say: 'Obesidad grado uno y dos: déficit calórico y ejercicio, fármacos si hay fracaso, y tratamiento de las comorbilidades. Si la glicemia es normal, no se da metformina.' },
        { cells: ['≥ 40 (o ≥ 35 con comorbilidad)', 'Mortalidad cardiovascular y metabólica', 'Derivar a equipo: cirugía bariátrica'],
          say: 'Obesidad mórbida: mortalidad cardiovascular y metabólica elevada. Derivas a un equipo para evaluar cirugía bariátrica.' },
        { cells: ['Prediabetes en riesgo de DM2', 'Progresión a diabetes', 'Ejercicio 150 min/semana y bajar peso'],
          say: 'Prediabetes: la intervención más importante es el estilo de vida, con ciento cincuenta minutos de ejercicio por semana y baja de peso. La metformina es de segunda línea.' },
        { cells: ['Acantosis nigricans', 'Resistencia a la insulina', 'Buscar prediabetes, dislipidemia e HTA'],
          say: 'Acantosis nigricans: es resistencia a la insulina. Obliga a buscar prediabetes, dislipidemia e hipertensión.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 38 años consulta por aumento de peso. Mide 1,60 m y pesa 87 kg (IMC 34). Su circunferencia de cintura es de 104 cm y su PA de 138/88 mmHg. Presenta hiperpigmentación aterciopelada en cuello y axilas. Los exámenes muestran glicemia de ayunas 108 mg/dL, triglicéridos 210 mg/dL y HDL 41 mg/dL. No tiene síntomas de hipotiroidismo ni antecedentes de consumo de corticoides.',
      question: '¿Cuál es el manejo inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Estilo de vida intensivo con déficit calórico, ejercicio y tratamiento de cada componente' },
        { letter: 'B', text: 'Iniciar insulina basal por la glicemia de 108 mg/dL' },
        { letter: 'C', text: 'Derivar de inmediato a cirugía bariátrica' },
        { letter: 'D', text: 'Iniciar solo orlistat y controlar en un año' },
        { letter: 'E', text: 'Dieta de 600 kcal/día durante tres meses' },
      ],
      correct: 'A',
      explanation: 'Cumple los 5 criterios de síndrome metabólico (cintura 104 cm, triglicéridos 210, HDL 41, PA 138/88 y glicemia 108) y tiene acantosis nigricans, marcador de resistencia a la insulina, con obesidad grado I. La conducta base es el estilo de vida intensivo: dieta hipocalórica balanceada con déficit de 500 a 750 kcal/día, al menos 150 minutos semanales de actividad física y meta de bajar 5 a 10% del peso en 6 meses, más el tratamiento de cada componente. La cirugía exige IMC ≥ 40 (o ≥ 35 con comorbilidad mayor) y fracaso del manejo médico; la dieta de 600 kcal es solo para periodos breves y supervisados.',
      say: {
        stem: 'Una mujer de treinta y ocho años consulta por aumento de peso, con un IMC de treinta y cuatro. Su cintura es de ciento cuatro centímetros y su presión, de ciento treinta y ocho sobre ochenta y ocho. Tiene piel aterciopelada y oscura en cuello y axilas. La glicemia de ayunas es de ciento ocho, los triglicéridos de doscientos diez y el HDL de cuarenta y uno. No hay síntomas de hipotiroidismo ni uso de corticoides.',
        question: '¿Cuál es el manejo inicial más adecuado?',
        options: 'Las opciones: estilo de vida intensivo con déficit calórico, ejercicio y tratamiento de cada componente; insulina basal; derivar de inmediato a cirugía bariátrica; solo orlistat y controlar en un año; o una dieta de seiscientas kilocalorías por tres meses. Piénsalo.',
        answer: 'Es la A. Cumple los cinco criterios de síndrome metabólico y tiene acantosis nigricans: resistencia a la insulina con obesidad grado uno. La base es el estilo de vida intensivo, con déficit calórico, ciento cincuenta minutos de ejercicio por semana y la meta de bajar entre cinco y diez por ciento en seis meses, más el tratamiento de cada componente. La C tienta, pero la cirugía exige IMC desde cuarenta, o desde treinta y cinco con comorbilidad mayor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 20',
      stem: 'Un adolescente de 16 años, con IMC de 33, se realiza una glicemia de ayuno, que resulta 96 mg/dL, más una insulina basal que resulta 23 UI/L.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar insulina' },
        { letter: 'B', text: 'Iniciar dieta y ejercicio' },
        { letter: 'C', text: 'Iniciar metformina' },
        { letter: 'D', text: 'Solicitar un test de tolerancia a la glucosa' },
        { letter: 'E', text: 'Iniciar metformina más glibenclamida' },
      ],
      correct: 'B',
      explanation: 'Tiene obesidad y resistencia a la insulina (HOMA = 96 × 23 / 405 = 5,5), pero la glicemia de ayunas es normal: no tiene diabetes, ni intolerancia a la glucosa, ni glicemia alterada de ayunas. En esta situación solo se indican dieta y ejercicio.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un adolescente de dieciséis años, con IMC de treinta y tres, tiene una glicemia de ayuno de noventa y seis y una insulina basal de veintitrés.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar insulina; dieta y ejercicio; metformina; un test de tolerancia a la glucosa; o metformina más glibenclamida. Piénsalo.',
        answer: 'Es la B. Con esa insulina basal el HOMA da cerca de cinco coma cinco: hay resistencia a la insulina, pero la glicemia es normal. No tiene diabetes, ni intolerancia a la glucosa, ni glicemia alterada de ayunas. Solo dieta y ejercicio. La C tienta, porque suena razonable, pero sin alteración de la glicemia no se indica ningún hipoglicemiante.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 33',
      stem: 'Un paciente de 17 años, obeso, se realiza chequeo con glicemia de ayuno que resulta en 130, por lo que se repite este examen obteniendo 137, no ha presentado síntomas. En el examen físico destaca presencia de acantosis nigricans en pliegue cervical y acrocordones.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Diabetes mellitus tipo 1' },
        { letter: 'B', text: 'Diabetes mellitus tipo 2' },
        { letter: 'C', text: 'Diabetes mellitus autoinmune' },
        { letter: 'D', text: 'Intolerancia a la glucosa' },
        { letter: 'E', text: 'Glicemia de ayuno alterada' },
      ],
      correct: 'B',
      explanation: 'Si bien es un adolescente, la acantosis nigricans es muy sugerente de resistencia a la insulina y, por lo tanto, de diabetes tipo 2. Dos glicemias de ayunas ≥ 126 mg/dL confirman la diabetes. La diabetes tipo 1 suele debutar bastante descompensada, y no con glicemias levemente elevadas y asintomáticas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de diecisiete años, obeso y asintomático, tiene dos glicemias de ayuno, de ciento treinta y de ciento treinta y siete. Al examen tiene acantosis nigricans en el pliegue del cuello y acrocordones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: diabetes tipo uno; diabetes tipo dos; diabetes autoinmune; intolerancia a la glucosa; o glicemia de ayuno alterada. Piénsalo.',
        answer: 'Es la B. Dos glicemias de ayuno desde ciento veintiséis confirman diabetes, y la acantosis con acrocordones apunta a resistencia a la insulina: es una diabetes tipo dos, aunque sea un adolescente. La A tienta por la edad, pero la diabetes tipo uno suele debutar bastante descompensada, no asintomática y con glicemias apenas elevadas. Compáralo con la pregunta anterior: allí la glicemia era normal, y aquí ya cruzó el umbral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 42',
      stem: 'Un paciente de 30 años, con IMC: 30 kg/m², consulta por hiperpigmentación de la piel de las axilas y el cuello, asociado a aparición de acrocordones en pliegues inguinales, cervicales y axilares.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Cushing' },
        { letter: 'B', text: 'Hipotiroidismo' },
        { letter: 'C', text: 'Síndrome paraneoplásico' },
        { letter: 'D', text: 'Insuficiencia suprarrenal' },
        { letter: 'E', text: 'Resistencia a la insulina' },
      ],
      correct: 'E',
      explanation: 'La hiperpigmentación aterciopelada de cuello y axilas con acrocordones es acantosis nigricans, signo cutáneo clásico de la resistencia a la insulina en un paciente con obesidad. Obliga a buscar prediabetes, dislipidemia e hipertensión. Puede ser paraneoplásica, pero es rara y se piensa solo si aparece de forma brusca y extensa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente de treinta años, con IMC de treinta, consulta por oscurecimiento de la piel de las axilas y del cuello, con acrocordones en los pliegues inguinales, del cuello y de las axilas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: enfermedad de Cushing; hipotiroidismo; síndrome paraneoplásico; insuficiencia suprarrenal; o resistencia a la insulina. Piénsalo.',
        answer: 'Es la E. Piel aterciopelada y oscura en cuello y axilas, con acrocordones, es acantosis nigricans: la huella de la resistencia a la insulina. La C tienta porque la acantosis también puede ser paraneoplásica, pero eso es raro y se piensa si aparece de forma brusca y extensa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 30',
      stem: 'Hombre de 48 años con glicemia de ayuno de 115 mg/dL en dos ocasiones. IMC 28. Sin otros factores de riesgo.',
      question: '¿Cuál es la intervención más importante para reducir la progresión a diabetes?',
      options: [
        { letter: 'A', text: 'Dieta estricta baja en carbohidratos' },
        { letter: 'B', text: 'Metformina 500 mg dos veces al día' },
        { letter: 'C', text: 'Ejercicio aeróbico 150 minutos por semana' },
        { letter: 'D', text: 'Orlistat' },
        { letter: 'E', text: 'Insulina basal' },
      ],
      correct: 'C',
      explanation: 'Prediabetes (glicemia de ayunas 100-125 mg/dL): la intervención más efectiva para prevenir la progresión es el cambio de estilo de vida, con ejercicio ≥ 150 min/semana de intensidad moderada y alimentación saludable con baja de peso. Reduce 58% el riesgo de diabetes (estudio DPP). La metformina es de segunda línea, para pacientes de alto riesgo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de cuarenta y ocho años tiene glicemia de ayuno de ciento quince en dos ocasiones, un IMC de veintiocho y ningún otro factor de riesgo.',
        question: '¿Cuál es la intervención más importante para reducir la progresión a diabetes?',
        options: 'Las opciones: dieta estricta baja en carbohidratos; metformina; ejercicio aeróbico, ciento cincuenta minutos por semana; orlistat; o insulina basal. Piénsalo.',
        answer: 'Es la C. Con una glicemia de ayuno entre cien y ciento veinticinco tiene prediabetes, y lo que más reduce la progresión es el estilo de vida: ejercicio, alimentación saludable y baja de peso, que en el estudio DPP redujo cincuenta y ocho por ciento el riesgo. La B tienta, pero la metformina es de segunda línea y se reserva para pacientes de alto riesgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 4',
      stem: 'Una paciente de 25 años, con antecedente de anorexia nerviosa desde hace 5 años. Actualmente pesa 29 kilos y mide 1,68 metros, con IMC de 10,3.',
      question: '¿Con cuántas kilocalorías diarias se debe iniciar su alimentación?',
      options: [
        { letter: 'A', text: '300' },
        { letter: 'B', text: '600' },
        { letter: 'C', text: '1.200' },
        { letter: 'D', text: '1.500' },
        { letter: 'E', text: '2.400' },
      ],
      correct: 'A',
      explanation: 'Para prevenir el síndrome de realimentación se inicia con 10 a 15 kcal/kg/día: en 29 kg son unas 300 a 430 kcal/día, que se aumentan de forma gradual con tiamina y control de fósforo, potasio y magnesio. Partir con 1.200 kcal o más expone a hipofosfemia, arritmias e insuficiencia cardíaca.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Una paciente de veinticinco años, con anorexia nerviosa desde hace cinco años, pesa veintinueve kilos y mide uno sesenta y ocho, con un IMC de diez coma tres.',
        question: '¿Con cuántas kilocalorías diarias se debe iniciar su alimentación?',
        options: 'Las opciones: trescientas; seiscientas; mil doscientas; mil quinientas; o dos mil cuatrocientas. Piénsalo.',
        answer: 'Es la A. Para prevenir el síndrome de realimentación se parte con diez a quince kilocalorías por kilo al día, y en veintinueve kilos eso son unas trescientas. La B tienta porque trescientas parece muy poco, pero empezar con mil doscientas o más expone a hipofosfemia, arritmias e insuficiencia cardíaca. Después se sube de forma gradual, con tiamina y control de electrolitos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: nutrición clínica',
      cards: [
        { title: 'Evaluar y clasificar', tag: 'IMC, cintura y balance', kind: 'key', items: [
          { t: 'IMC por tramos, cintura aparte', d: 'Mórbida: ≥ 40, o ≥ 35 con comorbilidad',
            say: 'Cerremos con las reglas de oro. El IMC clasifica por tramos, y la cintura de ciento dos centímetros en el hombre o de ochenta y ocho en la mujer define la obesidad abdominal. Desde cuarenta, o desde treinta y cinco con comorbilidad, la obesidad es mórbida y se deriva.' },
          { t: 'NUU > 10 g/día: estrés severo', d: 'Balance negativo: subir el aporte',
            say: 'El balance nitrogenado se calcula con el nitrógeno ureico urinario de veinticuatro horas: sobre diez gramos al día es estrés severo, y un balance negativo obliga a aumentar el aporte de proteínas y calorías.' },
        ] },
        { title: 'Tratar y prevenir', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Obeso con glicemia normal: estilo de vida', d: 'Sin metformina ni insulina · bajar 5-10%',
            say: 'El obeso con glicemia normal y resistencia a la insulina solo requiere dieta y ejercicio, con la meta de bajar entre cinco y diez por ciento en seis meses.' },
          { t: 'Síndrome metabólico: 3 de 5', d: 'Acantosis = resistencia a la insulina',
            say: 'El síndrome metabólico necesita tres de cinco criterios y se trata en cada componente. La acantosis nigricans es el marcador de la resistencia a la insulina. Y para prevenir la diabetes en la prediabetes, el estilo de vida supera a la metformina.' },
          { t: 'Anorexia: partir con 10-15 kcal/kg/día', d: 'Tiamina, vigilar P, K y Mg · derivar',
            say: 'En la anorexia nerviosa se realimenta con diez a quince kilocalorías por kilo al día, con tiamina y vigilando fósforo, potasio y magnesio, y se hospitaliza y deriva según los criterios de gravedad. Si te llevas una sola idea de hoy: el mismo exceso de peso o de déficit se maneja distinto según el tramo de IMC y la glicemia, y a un desnutrido grave jamás se le realimenta de golpe. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Evaluación nutricional: obesidad, síndrome metabólico y TCA',
    root: N('start', 'Evaluación nutricional del adulto', 'IMC, cintura, PA y perfil metabólico',
      'Parte por la evaluación: IMC, circunferencia de cintura, presión arterial, glicemia y perfil lipídico. Y te haces la primera pregunta: ¿el IMC es bajo con miedo intenso a engordar, o es de treinta o más?',
      ['IMC bajo con miedo a engordar', N('alert', 'Sospecha de anorexia nerviosa', 'ECG y electrolitos; derivar',
        'Un IMC bajo con miedo intenso a engordar es una anorexia nerviosa mientras no se demuestre lo contrario. Pides electrocardiograma y electrolitos, estabilizas y derivas. Si hay que realimentar, se parte con diez a quince kilocalorías por kilo al día, con tiamina, vigilando el fósforo.',
        ['Criterios de gravedad', N('refer', 'Hospitalizar', 'IMC < 15, FC baja, K bajo, QTc largo',
          'Con IMC bajo quince, bradicardia, hipotensión, hipokalemia, hipofosfemia, QTc prolongado o síncope, hospitalizas y derivas a un equipo especializado.')],
      )],
      ['IMC de 30 o más', N('q', '¿Cuál es la glicemia?', 'Y los criterios de síndrome metabólico',
        'Si el IMC es de treinta o más, miras la glicemia y cuentas los criterios de síndrome metabólico.',
        ['Glicemia normal', N('ok', 'Obesidad con resistencia a la insulina', 'Dieta y ejercicio; bajar 5-10%',
          'Con glicemia normal no hay diabetes ni prediabetes. Solo estilo de vida, con déficit de quinientas a setecientas cincuenta kilocalorías, ejercicio, y la meta de bajar entre cinco y diez por ciento en seis meses. No se indica metformina ni insulina.')],
        ['Prediabetes o síndrome metabólico', N('do', 'Estilo de vida más cada componente', '150 min/semana de ejercicio; metformina solo si alto riesgo',
          'Con prediabetes o tres de cinco criterios, el pilar sigue siendo el estilo de vida, con ciento cincuenta minutos de ejercicio por semana, y se trata cada componente: presión, lípidos y glicemia. La metformina queda para el de alto riesgo.')],
        ['IMC ≥ 40, o ≥ 35 con comorbilidad', N('refer', 'Obesidad mórbida', 'Derivar a equipo: cirugía bariátrica',
          'Si el IMC es de cuarenta o más, o de treinta y cinco con comorbilidad, y fracasó un manejo médico bien llevado, derivas al equipo para evaluar la cirugía bariátrica, con manga gástrica o bypass en Y de Roux.')],
      )],
    ),
  },
};
