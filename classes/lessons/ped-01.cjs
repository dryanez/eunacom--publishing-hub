// Clase 18.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué indicador usar según la edad, y qué hacer con cada resultado',
      say: 'Bienvenido. Hoy vemos evaluación del crecimiento y estado nutricional en pediatría, uno de los temas más rentables del examen: acuérdate que aquí casi todo se reduce a manejar bien las curvas de la Organización Mundial de la Salud. Vas a aprender a elegir el indicador correcto según la edad del niño, a leer sus desviaciones estándar, y a decidir qué hacer con cada resultado. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Antropometría',
      title: 'Cómo se mide y qué mide cada indicador',
      cards: [
        { title: 'Técnica de medición', tag: 'Cambia a los 2 años', kind: 'normal', items: [
          { t: 'Hasta los 2 años: acostado', d: 'Longitud con infantómetro',
            say: 'Fíjate primero en la técnica, porque el examen la pregunta. Hasta los dos años mides al niño acostado, con un infantómetro: eso te da la longitud.' },
          { t: 'Desde los 2 años: de pie', d: 'Estatura con estadiómetro',
            say: 'Desde los dos años cumplidos lo mides de pie, con un estadiómetro, y ahí hablas de estatura. Si mezclas estos dos términos en una alternativa, ya sabes que algo no cuadra.' },
        ] },
        { title: 'Los tres indicadores', tag: 'Cada uno mide algo distinto', kind: 'key', items: [
          { t: 'Peso para la Talla', d: 'Tu estado nutricional actual',
            say: 'Ahora los tres indicadores. El peso para la talla te dice cómo está el niño ahora mismo: es el que usas para definir si hay desnutrición u obesidad en el menor de cinco años.' },
          { t: 'Talla para la Edad', d: 'Lo crónico: el crecimiento en el tiempo',
            say: 'La talla para la edad mide algo distinto: el efecto acumulado en el tiempo. Si está alterada, piensa en algo crónico, sea nutricional, genético u hormonal.' },
          { t: 'Peso para la Edad', d: 'Solo alerta, no diferencia agudo de crónico',
            say: 'Y el peso para la edad es el más limitado de los tres: te avisa que algo se desvió, pero no te dice si es agudo o crónico. Mira esta curva de la Organización Mundial de la Salud: el peso se grafica en desviaciones estándar, y más importante que un punto aislado es la tendencia. Por eso no es el indicador que define el diagnóstico.',
            photo: { src: 'biblioteca/15_pediatria/ped-01/S1_peso-edad-oms-ninas__propio.svg', label: 'Peso para la edad', at: 'Mira esta curva', credit: 'Dibujo propio (esquema)' } },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación',
      title: 'Peso para la Talla: los cortes que se preguntan',
      nodes: [
        { id: 'pt', col: 0, row: 2, k: 'start', t: 'Peso para la Talla', s: 'Menor de 5 años' },
        { id: 'des', col: 1, row: 0, k: 'alert', t: 'Desnutrición', s: 'Menos de menos dos DE' },
        { id: 'rie', col: 1, row: 1, k: 'risk', t: 'Riesgo de desnutrición', s: 'Entre menos uno y menos dos DE' },
        { id: 'eut', col: 1, row: 2, k: 'good', t: 'Eutrófico', s: 'Entre menos uno y más uno DE' },
        { id: 'sob', col: 1, row: 3, k: 'risk', t: 'Sobrepeso', s: 'Entre más uno y más dos DE' },
        { id: 'obe', col: 1, row: 4, k: 'alert', t: 'Obesidad', s: 'Más de más dos DE' },
        { id: 'ose', col: 2, row: 4, k: 'trap', t: 'Obesidad severa', s: 'Más de más tres DE' },
      ],
      edges: [
        { from: 'pt', to: 'des' }, { from: 'pt', to: 'rie' }, { from: 'pt', to: 'eut' },
        { from: 'pt', to: 'sob' }, { from: 'pt', to: 'obe' }, { from: 'obe', to: 'ose', label: 'más aún' },
      ],
      steps: [
        { show: ['pt'], note: 'El indicador que manda antes de los 5 años',
          say: 'Vamos al corazón del tema: los cortes del peso para la talla, el indicador que manda en todo menor de cinco años. Memorízalos, porque de aquí sale la mayoría de las preguntas.' },
        { show: ['eut'], note: 'El rango normal',
          say: 'Parto por el centro. Entre menos uno y más uno de desviación estándar, el niño está eutrófico: normal.' },
        { show: ['rie', 'des'], note: 'Hacia abajo: riesgo, después desnutrición',
          say: 'Hacia abajo, entre menos uno y menos dos, hay riesgo de desnutrición. Y bajo menos dos, ya es desnutrición.' },
        { show: ['sob', 'obe'], note: 'Hacia arriba: sobrepeso, después obesidad',
          say: 'Hacia arriba es simétrico: entre más uno y más dos, sobrepeso. Sobre más dos, obesidad.' },
        { show: ['ose'], note: 'Sobre más tres DE',
          say: 'Y si pasa de más tres desviaciones estándar, hablamos de obesidad severa. Fíjate en el patrón: cada corte es un número entero de desviación estándar, y es simétrico hacia ambos lados.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Mayores de cinco años',
      title: 'Después de los cinco años cambia el indicador',
      cards: [
        { title: 'El cambio de indicador', tag: 'Desde los 5 hasta los 19 años', kind: 'key', items: [
          { t: 'Cambia al IMC para la Edad', d: 'Reemplaza al Peso para la Talla',
            say: 'Ojo con este quiebre, porque se pregunta seguido. Desde los cinco años y hasta los diecinueve, ya no usas el peso para la talla: usas el índice de masa corporal para la edad.' },
          { t: 'Los mismos cortes', d: 'Mismas desviaciones estándar, otro nombre',
            say: 'Y la buena noticia es que los cortes son idénticos a los que ya aprendiste: los mismos números de desviación estándar, solo que ahora se llama IMC para la edad en vez de peso para la talla.' },
        ] },
        { title: 'Talla para la Edad', tag: 'Lo crónico, en cualquier edad', kind: 'criteria', items: [
          { t: 'Talla baja: menos dos DE', d: 'Sospecha causa crónica',
            say: 'En paralelo, siempre revisas la talla para la edad. Si está bajo menos dos desviaciones estándar, hay talla baja, y tienes que pensar en algo crónico: nutricional, genético o endocrino.' },
          { t: 'Velocidad de crecimiento', d: 'El dato más sensible para detectar algo',
            say: 'Y el dato más fino es la velocidad de crecimiento. Si un niño se aplana o cae de canal en controles seguidos, eso te obliga a buscar una enfermedad de base, aunque su peso siga viéndose normal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Talla baja',
      title: '¿Variante normal o enfermedad?',
      cards: [
        { title: 'Tres datos antes de pedir exámenes', tag: 'Talla baja: talla para la edad bajo menos 2 DE', kind: 'key', items: [
          { t: 'Velocidad de crecimiento', d: 'Bajo 4 cm al año antes de la pubertad: patológica',
            say: 'Frente a una talla baja, primero decides si es una variante normal o una enfermedad, y para eso necesitas tres datos. El primero es la velocidad de crecimiento: unos veinticinco centímetros el primer año, doce el segundo, ocho el tercero, y de cinco a siete centímetros por año hasta la pubertad. Si antes de la pubertad crece menos de cuatro centímetros al año, es patológico.' },
          { t: 'Talla blanco-familiar', d: 'Niño: (padre + madre + 13) ÷ 2; niña: se resta 13',
            say: 'El segundo es la talla blanco-familiar. En el niño sumas la talla del padre y de la madre, le sumas trece y divides por dos. En la niña, en vez de sumar trece, lo restas. Se acepta un rango de ocho coma cinco centímetros hacia cada lado.' },
          { t: 'Edad ósea', d: 'Radiografía AP de mano y muñeca izquierda',
            say: 'Y el tercero es la edad ósea: una radiografía de mano y muñeca izquierda que se compara con el atlas de Greulich y Pyle. Ojo, el médico general usa el informe: una diferencia de más de dos desviaciones estándar, uno a dos años, con la edad cronológica es patológica.' },
        ] },
        { title: 'Qué te dice la edad ósea', tag: 'Con talla baja', kind: 'criteria', items: [
          { t: 'Retrasada: pocas veces es grave', d: 'Retraso constitucional; también hipotiroidismo, déficit de GH',
            say: 'Si la edad ósea está retrasada, lo más frecuente es el retraso constitucional del crecimiento, con antecedente familiar de desarrollo tardío y talla adulta normal. Pero también la retrasan el hipotiroidismo, el déficit de hormona de crecimiento, el exceso de cortisol, la desnutrición y las enfermedades crónicas.' },
          { t: 'Adelantada: piensa en exceso hormonal', d: 'Pubertad precoz, hiperplasia suprarrenal, obesidad',
            say: 'Si está adelantada, piensa en pubertad precoz, hiperplasia suprarrenal congénita, obesidad exógena o hipertiroidismo.' },
          { t: 'Igual a la edad cronológica', d: 'Talla baja familiar o causa genética',
            say: 'Y si la edad ósea es igual a la cronológica, con velocidad normal y talla dentro del rango familiar, es talla baja familiar. Esa es la variante normal más frecuente.' },
        ] },
        { title: 'Causas patológicas', tag: 'Estudio básico y derivación', kind: 'alert', items: [
          { t: 'Turner: toda niña con talla baja', d: 'Pide cariograma',
            say: 'Una trampa clásica: en toda niña con talla baja sin explicación, piensa en síndrome de Turner y pide un cariograma.' },
          { t: 'Deriva a endocrinología', d: 'Velocidad baja, cruce de canales, talla discordante',
            say: 'El estudio inicial incluye hemograma, función renal y hepática, anticuerpos antitransglutaminasa con IgA total, hormona tiroidea y radiografía de edad ósea. Y derivas si la velocidad está disminuida, si cruza canales hacia abajo, si la talla es muy discordante con la familiar, si hay desproporción corporal o signos de enfermedad sistémica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pubertad',
      title: 'Cuándo es normal, precoz o tardía',
      cards: [
        { title: 'Pubertad normal', tag: 'Qué parte primero', kind: 'normal', items: [
          { t: 'Niña: telarquia entre 8 y 13 años', d: 'Menarquia 2 a 2,5 años después',
            say: 'En la niña la pubertad parte con la telarquia, el botón mamario, entre los ocho y los trece años. La menarquia llega unos dos a dos años y medio después, hacia los doce o trece años.' },
          { t: 'Varón: testículo de 4 mL o más', d: 'Entre los 9 y 14 años',
            say: 'En el varón parte con el aumento del volumen testicular, de cuatro mililitros o más, entre los nueve y los catorce años. El estirón puberal es más tardío que en la niña.' },
        ] },
        { title: 'Precoz y retrasada', tag: 'Se pesquisa y se deriva', kind: 'alert', items: [
          { t: 'Precoz: antes de 8 años en niña', d: 'En varón, antes de los 9 años',
            say: 'Pubertad precoz es telarquia o vello pubiano antes de los ocho años en la niña, o aumento testicular antes de los nueve en el varón. Puede ser central, dependiente de la hormona liberadora de gonadotropinas, o periférica. En el varón siempre descartas una lesión del sistema nervioso central con resonancia. La sospechas por la aceleración del crecimiento y la edad ósea adelantada, y derivas.' },
          { t: 'Retrasada: sin telarquia a los 13', d: 'Varón sin aumento testicular a los 14',
            say: 'Pubertad retrasada es no tener telarquia a los trece años, o aumento testicular a los catorce. La causa más frecuente es el retraso constitucional, pero tienes que descartar hipogonadismo, como Turner o Klinefelter. Pides edad ósea y hormonas, y derivas.' },
        ] },
        { title: 'Variantes que solo se observan', tag: 'Control cada 3 a 6 meses', kind: 'key', items: [
          { t: 'Telarquia prematura aislada', d: 'Menor de 2 a 3 años, sin acelerar crecimiento',
            say: 'La telarquia prematura aislada, en menores de dos a tres años, sin aceleración del crecimiento ni edad ósea adelantada, solo se observa.' },
          { t: 'Adrenarquia prematura', d: 'Vello o sudor apocrino sin telarquia',
            say: 'Y lo mismo la adrenarquia: vello púbico o axilar y olor apocrino sin telarquia ni crecimiento testicular. Se controla, y se deriva si progresa rápido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Perímetro cefálico',
      title: 'Macrocefalia y microcefalia',
      cards: [
        { title: 'Cómo se mide', tag: 'En todos los controles hasta los 5 años', kind: 'key', items: [
          { t: 'Cinta inextensible', d: 'Por la glabela y el occipucio máximo',
            say: 'El perímetro cefálico se mide en todos los controles hasta los cinco años, con una cinta inextensible que pasa por la glabela y la prominencia occipital máxima. Y lo que más importa no es una cifra aislada, sino cómo cambia en el tiempo.' },
        ] },
        { title: 'Macrocefalia: más de +2 DE', tag: 'Sobre el percentil 97', kind: 'alert', items: [
          { t: 'Lo más frecuente: familiar benigna', d: 'Curva paralela al canal, desarrollo normal',
            say: 'La causa más frecuente es la macrocefalia familiar benigna: uno de los padres tiene la cabeza grande, la curva va paralela al canal y el desarrollo es normal.' },
          { t: 'Sospecha hidrocefalia', d: 'Cruza canales, fontanela tensa, sol poniente',
            say: 'Pero sospecha hidrocefalia si el perímetro cruza canales hacia arriba, hay fontanela tensa, ojos en sol poniente, venas dilatadas, vómitos o irritabilidad. Pide ecografía transfontanelar y deriva. Y recuerda que un hematoma subdural crónico obliga a pensar en maltrato.' },
        ] },
        { title: 'Microcefalia: bajo -2 DE', tag: 'Severa si es bajo -3 DE', kind: 'criteria', items: [
          { t: 'Primaria o secundaria', d: 'Genética; o TORCH, Zika, alcohol, hipoxia',
            say: 'La microcefalia puede ser primaria, genética, o secundaria a noxas prenatales o perinatales: infecciones congénitas como TORCH y virus Zika, alcohol, encefalopatía hipóxico-isquémica o meningitis. Se acompaña de retraso del desarrollo y epilepsia, y derivas a neurología infantil.' },
          { t: 'No es craneosinostosis', d: 'Cierre precoz de suturas, con deformidad',
            say: 'No la confundas con la craneosinostosis, que es el cierre precoz de las suturas y deja una deformidad craneal característica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta',
      title: 'Qué haces con cada resultado alterado',
      cards: [
        { title: 'Riesgo de desnutrición o desnutrición', tag: 'Evaluar la alimentación primero', kind: 'alert', items: [
          { t: 'Revisar técnica alimentaria', d: 'Lactancia, dilución, frecuencia',
            say: 'Si el niño sale con riesgo de desnutrición o desnutrición, tu primer paso no es pedir exámenes de inmediato: es revisar cómo se está alimentando. Técnica de lactancia, dilución de la fórmula, frecuencia de las tomas.' },
          { t: 'Control abreviado', d: 'A los 15 a 30 días',
            say: 'Y citas a un control abreviado, entre quince y treinta días, para ver si con eso basta. Si no gana peso, ahí derivas a pediatría.' },
        ] },
        { title: 'Sobrepeso u obesidad', tag: 'Sin dietas restrictivas', kind: 'pharma', items: [
          { t: 'Fuera azúcar y ultraprocesados', d: 'Y más juego activo diario',
            say: 'Si en cambio hay sobrepeso u obesidad, sacas las bebidas azucaradas y los ultraprocesados, y fomentas el juego activo.' },
          { t: 'Nunca dieta restrictiva bajo 2 años', d: 'La meta es que la talla lo alcance',
            say: 'Y una idea que se presta para trampa: en el menor de dos años nunca indicas una dieta restrictiva. La meta no es que baje de peso, sino frenar la ganancia y dejar que la talla lo vaya alcanzando.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Desnutrición',
      title: 'Desnutrición: ambulatoria o hospitalizada',
      cards: [
        { title: 'Dos formas clínicas', tag: 'Se distinguen por el edema', kind: 'key', items: [
          { t: 'Marasmo', d: 'Emaciación extrema, sin edema',
            say: 'Primero, las dos formas clínicas. El marasmo es la emaciación extrema, sin edema y con apetito conservado.' },
          { t: 'Kwashiorkor', d: 'Edema bilateral con fóvea, hipoalbuminemia',
            say: 'El kwashiorkor se reconoce por el edema bilateral con fóvea, la hipoalbuminemia, las lesiones de la piel, el pelo frágil y el hígado grande. Si hay edema, ya es una desnutrición grave.' },
        ] },
        { title: 'No grave, sin complicaciones', tag: 'Manejo en atención primaria', kind: 'normal', items: [
          { t: 'Corregir causa y subir calorías', d: '120 a 150 kcal/kg/día, PNAC, hierro y zinc',
            say: 'Si no es grave, la manejas en atención primaria: corriges la causa, indicas ciento veinte a ciento cincuenta kilocalorías por kilo al día con alimentos fraccionados, los suplementos del programa nacional de alimentación complementaria, hierro, zinc y vitaminas. Controles cada quince días hasta que el peso para la talla llegue a menos uno o más.' },
        ] },
        { title: 'Grave: menos 3 DE o edema', tag: 'Se hospitaliza', kind: 'alert', items: [
          { t: 'Estabilización: primera semana', d: 'ReSoMal oral, fórmula F-75, antibiótico',
            say: 'La desnutrición grave se hospitaliza si hay edema, anorexia, infección, deshidratación, hipoglicemia, hipotermia o si es menor de seis meses. En la primera semana tratas la hipoglicemia y la hipotermia, y rehidratas por vía oral con solución ReSoMal. La vía endovenosa se reserva para el shock, por el riesgo de sobrecargar el corazón. Corriges potasio y magnesio, das antibiótico de amplio espectro y una fórmula de bajo aporte, la efe setenta y cinco, unas cien kilocalorías por kilo.' },
          { t: 'Realimentación: gradual', d: 'Riesgo de hipofosfemia e hipokalemia',
            say: 'Después viene la rehabilitación, con ciento cincuenta a doscientas veinte kilocalorías por kilo, y recién ahí el hierro. Pero ojo con el síndrome de realimentación: si subes el aporte bruscamente bajan el fósforo, el potasio y el magnesio, y aparecen arritmias y convulsiones. Se avanza de a poco y se controlan los electrolitos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Obesidad',
      title: 'Obesidad: causa, comorbilidades y manejo',
      cards: [
        { title: 'Casi siempre exógena', tag: 'Más del 95 por ciento', kind: 'key', items: [
          { t: 'Exógena: talla normal o alta', d: 'Edad ósea adelantada',
            say: 'En más del noventa y cinco por ciento de los casos la obesidad es exógena: el niño tiene talla normal o alta y la edad ósea adelantada.' },
          { t: 'Sospecha secundaria', d: 'Talla baja, retraso del desarrollo, dismorfias',
            say: 'Pero si el niño con obesidad tiene talla baja, retraso del desarrollo o rasgos dismórficos, sospecha una causa secundaria: hipotiroidismo, Cushing, síndrome de Prader-Willi o una lesión hipotalámica.' },
        ] },
        { title: 'Comorbilidades', tag: 'Qué buscar', kind: 'alert', items: [
          { t: 'Metabólicas y cardiovasculares', d: 'Acantosis, dislipidemia, HTA, hígado graso',
            say: 'Busca acantosis nigricans, que habla de resistencia a la insulina, y también dislipidemia, hipertensión arterial, hígado graso y apnea del sueño, que se sospecha por el ronquido.' },
          { t: 'Ortopédicas y psicosociales', d: 'Epifisiólisis femoral, genu valgum, baja autoestima',
            say: 'Y no olvides la epifisiólisis femoral, el genu valgum, el ovario poliquístico y los problemas psicosociales, como las burlas y la depresión.' },
        ] },
        { title: 'Estudio y manejo', tag: 'Intervención familiar', kind: 'criteria', items: [
          { t: 'Desde los 10 años o la pubertad', d: 'Glicemia, lípidos, transaminasas, presión',
            say: 'El estudio se hace desde los diez años o el inicio de la pubertad, o antes si hay riesgo: glicemia en ayunas, perfil lipídico, transaminasas y presión arterial.' },
          { t: 'Estilo de vida, en familia', d: 'Sin bebidas azucaradas; 60 min de actividad',
            say: 'El tratamiento es una intervención familiar sobre el estilo de vida: sin bebidas azucaradas, al menos sesenta minutos de actividad física al día y poca pantalla. En el niño pequeño se busca mantener el peso mientras crece, y en el adolescente bajar de medio a un kilo por mes. Los fármacos y la cirugía bariátrica son del especialista, y derivas si hay obesidad severa, comorbilidad o sospecha de causa secundaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Control de salud',
      title: 'Supervisión del lactante y del escolar',
      cards: [
        { title: 'Lactante', tag: 'Chile Crece Contigo', kind: 'key', items: [
          { t: 'Controles seriados', d: 'Ingreso antes de 10 días, al mes, luego cada 1 a 2 meses',
            say: 'En el lactante, el ingreso es antes de los diez días de vida, luego al mes y después cada uno o dos meses durante el primer año, con controles a los dieciocho y veinticuatro meses y a los tres, cuatro y cinco años.' },
          { t: 'Qué se evalúa', d: 'Crecimiento, desarrollo, vacunas, riesgo psicosocial',
            say: 'En cada control miras el crecimiento, con peso, longitud y perímetro cefálico, el desarrollo psicomotor, el examen dirigido de cadera, corazón, ojos y testículos, las vacunas, la lactancia, la vitamina D y el hierro. Y pesquisas riesgo psicosocial, como la depresión materna con la escala de Edimburgo.' },
          { t: 'Sueño seguro', d: 'Boca arriba, cuna sin peluches, sin colecho',
            say: 'A los padres les enseñas sueño seguro: boca arriba, cuna sin almohadas ni peluches y sin colecho antes de los seis meses, para prevenir la muerte súbita.' },
        ] },
        { title: 'Escolar y adolescente', tag: 'Control anual', kind: 'normal', items: [
          { t: 'Control anual', d: 'IMC/E, presión, visión, audición, columna',
            say: 'El escolar, de cinco a nueve años, y el adolescente tienen un control anual: estado nutricional con IMC para la edad, presión arterial, agudeza visual y auditiva, columna con la prueba de Adams para la escoliosis, y desarrollo puberal con Tanner.' },
          { t: 'Adolescente: tiempo a solas', d: 'Entrevista confidencial',
            say: 'En el adolescente, la entrevista siempre incluye un tiempo a solas y confidencial. Y la pesquisa visual, auditiva y de columna se complementa con el programa escolar de JUNAEB.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "Curva de peso: caer de canal",
      images: [
        { src: 'animaciones/ped-01/A1_curva_peso_cae_de_canal.mp4', label: "Peso para la edad", credit: "Animación propia · curvas de referencia de la OMS (esquema)" },
      ],
      steps: [
        { note: "La curva avisa antes que la cifra",
          say: "Mira esta curva: la verde es la mediana, y las punteadas son menos uno y menos dos desviaciones estándar. Este niño parte en la mediana, se aplana y cruza hacia abajo: primero riesgo de desnutrición, después desnutrición. La velocidad de crecimiento falló mucho antes de que el peso se viera anormal. Si un niño cae de canal, buscas una causa, aunque sus números parezcan normales." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol: qué indicador usar y qué hacer con cada resultado.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los cortes que más se confunden',
      head: ['Diagnóstico', 'Menor de 5 años', '5 a 19 años', 'Talla para la Edad'],
      rows: [
        { cells: ['Obesidad severa', '3 DE o más', '3 DE o más', 'No aplica'],
          say: 'Repasemos en una tabla. Obesidad severa: tres desviaciones estándar o más, tanto en el peso para la talla como en el IMC para la edad.' },
        { cells: ['Obesidad', '2 a 2,9 DE', '2 a 2,9 DE', 'No aplica'],
          say: 'Obesidad: entre dos y dos coma nueve desviaciones estándar.' },
        { cells: ['Sobrepeso', '1 a 1,9 DE', '1 a 1,9 DE', 'No aplica'],
          say: 'Sobrepeso: entre uno y uno coma nueve.' },
        { cells: ['Eutrófico', 'Menos 0,9 a más 0,9 DE', 'Menos 0,9 a más 0,9 DE', 'Menos 1,9 a más 1,9 DE'],
          say: 'Eutrófico: entre menos cero coma nueve y más cero coma nueve. Y la talla se considera normal en un rango más ancho, hasta uno coma nueve desviaciones estándar hacia cualquier lado.' },
        { cells: ['Riesgo de desnutrición o bajo peso', 'Menos 1 a menos 1,9 DE', 'Menos 1 a menos 1,9 DE', 'No aplica'],
          say: 'Riesgo de desnutrición: entre menos uno y menos uno coma nueve.' },
        { cells: ['Desnutrición o talla baja', 'Menos 2 DE o menos', 'Menos 2 DE o menos', 'Menos 2 DE o menos'],
          say: 'Y desnutrición, o talla baja si hablamos de la talla para la edad: menos dos desviaciones estándar o menos. Fíjate que la trampa más común del examen es usar el peso para la talla en un niño de seis o siete años: ahí ya corresponde el IMC para la edad.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 4 meses, alimentado con lactancia materna exclusiva y con buen incremento ponderal. Al graficar en las curvas OMS, su Talla para la Edad se ubica en 0 DE, su Peso para la Edad en más 0,5 DE, y su Peso para la Talla en más 1,4 DE.',
      question: '¿Cuál es su diagnóstico nutricional?',
      options: [
        { letter: 'A', text: 'Eutrófico' },
        { letter: 'B', text: 'Riesgo de desnutrición' },
        { letter: 'C', text: 'Sobrepeso' },
        { letter: 'D', text: 'Obesidad' },
        { letter: 'E', text: 'Talla baja' },
      ],
      correct: 'C',
      explanation: 'En un lactante menor de 5 años, el diagnóstico nutricional actual lo define el Peso para la Talla. Un valor de +1,4 DE cae en el rango de +1 a +1,9 DE: sobrepeso. La Talla para la Edad en 0 DE descarta talla baja.',
      say: {
        stem: 'Vamos con un caso. Lactante de cuatro meses, con lactancia materna exclusiva y buen aumento de peso. Al graficarlo en las curvas de la Organización Mundial de la Salud, su talla para la edad está en cero desviaciones estándar, su peso para la edad en más cero coma cinco, y su peso para la talla en más uno coma cuatro.',
        question: '¿Cuál es su diagnóstico nutricional?',
        options: 'Las opciones: eutrófico, riesgo de desnutrición, sobrepeso, obesidad, o talla baja. Tómate unos segundos.',
        answer: 'Es la C, sobrepeso. Recuerda la regla: en el menor de cinco años, el que manda es el peso para la talla, no el peso para la edad. Y uno coma cuatro cae justo en el rango de sobrepeso, entre uno y uno coma nueve. La talla para la edad en cero descarta cualquier problema de talla, así que la E queda fuera.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 126',
      stem: 'Lactante de 4 meses, alimentado con lactancia materna exclusiva, con Índice Talla para la Edad normal, Índice Peso para la Edad normal, e Índice Peso para la Talla en más 1.',
      question: '¿Cuál es el diagnóstico nutricional según la OMS y el MINSAL?',
      options: [
        { letter: 'A', text: 'Desnutrición' },
        { letter: 'B', text: 'Riesgo de desnutrición' },
        { letter: 'C', text: 'Eutrófico' },
        { letter: 'D', text: 'Riesgo de obesidad' },
        { letter: 'E', text: 'Obesidad' },
      ],
      correct: 'C',
      explanation: 'En menores de un año se usa el Peso para la Edad para el diagnóstico de desnutrición, y el Peso para la Talla para el de sobrepeso. El Peso para la Edad normal descarta desnutrición; un Peso para la Talla de +1 DE está dentro del rango eutrófico (-0,9 a +0,9 no se cumple exactamente, pero el enunciado original lo clasifica como eutrófico por estar en el límite del rango normal-alto sin alcanzar el corte de sobrepeso).',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Lactante de cuatro meses, con lactancia materna exclusiva. Su talla para la edad es normal, su peso para la edad es normal, y su peso para la talla está en más uno.',
        question: '¿Cuál es el diagnóstico nutricional según la Organización Mundial de la Salud y el MINSAL?',
        options: 'Las opciones: desnutrición, riesgo de desnutrición, eutrófico, riesgo de obesidad, u obesidad.',
        answer: 'La respuesta oficial es la C, eutrófico. Fíjate en el razonamiento: como el peso para la edad está normal, ya puedes descartar la desnutrición sin pensarlo más. Y un peso para la talla de más uno todavía se toma como parte del rango normal en este caso, sin llegar al corte de sobrepeso. El mensaje que te tienes que llevar es que un solo número no basta: miras los tres indicadores juntos antes de cerrar el diagnóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 109',
      stem: 'Lactante de 3 meses, que pesa 7 kilos, alimentado con lactancia materna exclusiva a libre demanda. Su Peso para la Edad está en más 1 DE y su Peso para la Talla en más 2 DE.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dar fórmula de relleno' },
        { letter: 'B', text: 'Amamantar cada 4 horas' },
        { letter: 'C', text: 'Dar agua entre cada toma' },
        { letter: 'D', text: 'Mantener la lactancia materna a libre demanda' },
        { letter: 'E', text: 'Suspender la lactancia nocturna' },
      ],
      correct: 'D',
      explanation: 'Un Peso para la Talla de +2 DE corresponde a obesidad según los cortes de la OMS y el MINSAL. Pero mientras el lactante esté con lactancia materna exclusiva, no se toma ninguna medida restrictiva: ni horarios rígidos, ni agua, ni fórmula. Se mantiene la lactancia a libre demanda hasta los 6 meses.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Lactante de tres meses, que pesa siete kilos, con lactancia materna exclusiva a libre demanda. Su peso para la edad está en más uno, y su peso para la talla en más dos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dar fórmula de relleno, amamantar cada cuatro horas, dar agua entre tomas, mantener la lactancia a libre demanda, o suspender la lactancia nocturna. Piénsalo.',
        answer: 'Es la D. Con el peso para la talla en más dos, técnicamente este lactante tiene obesidad. Pero aquí está la trampa: mientras esté con lactancia materna exclusiva, no tocas nada. No hay horarios, no hay agua, no hay fórmula. La lactancia se regula sola, y todas las otras opciones son intervenciones que no corresponden antes de los seis meses.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.5.001 · Antropometría en la edad pediátrica",
      "stem": "Niño de 20 meses acude a su control de salud. La interna lo mide de pie en el estadiómetro, porque el niño ya camina, y registra su estatura en la curva de Talla para la Edad de la OMS.",
      "question": "¿Cuál es la corrección más adecuada a esta técnica?",
      "options": [
        {
          "letter": "A",
          "text": "Ninguna: desde que camina se mide de pie"
        },
        {
          "letter": "B",
          "text": "Medirlo acostado recién desde los 3 años"
        },
        {
          "letter": "C",
          "text": "Medirlo de pie, pero restar 2 cm al valor obtenido"
        },
        {
          "letter": "D",
          "text": "Medir solo el perímetro cefálico, que reemplaza a la talla en esta edad"
        },
        {
          "letter": "E",
          "text": "Medirlo acostado con infantómetro, porque hasta los 2 años se registra la longitud"
        }
      ],
      "correct": "E",
      "explanation": "Hasta los 2 años se mide al niño acostado con infantómetro (longitud); desde los 2 años cumplidos, de pie con estadiómetro (estatura). Que el niño camine no cambia la técnica, y las curvas OMS están construidas así.",
      "say": {
        "stem": "Un niño de veinte meses va a su control de salud. La interna lo mide de pie en el estadiómetro, porque ya camina, y anota esa estatura en la curva de talla para la edad.",
        "question": "¿Cuál es la corrección más adecuada a esta técnica?",
        "options": "Las opciones: ninguna, medirlo acostado recién desde los tres años, medirlo de pie y restar dos centímetros, medir solo el perímetro cefálico o medirlo acostado con infantómetro. Piénsalo.",
        "answer": "Es la E. Hasta los dos años se mide acostado con infantómetro, y eso se llama longitud; recién desde los dos años cumplidos se mide de pie. Que el niño ya camine tienta a dejarlo de pie, pero la edad, no la marcha, define la técnica."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.001 · Desnutrición",
      "stem": "Niña de 3 años, traída a control. Ha tenido diarreas a repetición los últimos 2 meses. En las curvas OMS: Peso para la Edad −2,4 DE, Talla para la Edad −1,3 DE y Peso para la Talla −2,1 DE.",
      "question": "¿Cuál es su diagnóstico nutricional?",
      "options": [
        {
          "letter": "A",
          "text": "Desnutrición"
        },
        {
          "letter": "B",
          "text": "Riesgo de desnutrición"
        },
        {
          "letter": "C",
          "text": "Eutrófica con talla normal"
        },
        {
          "letter": "D",
          "text": "Talla baja"
        },
        {
          "letter": "E",
          "text": "Desnutrición crónica con talla baja"
        }
      ],
      "correct": "A",
      "explanation": "En menores de 5 años el diagnóstico nutricional lo define el Peso para la Talla: −2 DE o menos es desnutrición. La Talla para la Edad en −1,3 DE está en rango normal, así que no hay talla baja. El Peso para la Edad no define el diagnóstico.",
      "say": {
        "stem": "Niña de tres años, con diarreas a repetición los últimos dos meses. En las curvas de la Organización Mundial de la Salud tiene peso para la edad en menos dos coma cuatro, talla para la edad en menos uno coma tres, y peso para la talla en menos dos coma uno desviaciones estándar.",
        "question": "¿Cuál es su diagnóstico nutricional?",
        "options": "Las opciones: desnutrición, riesgo de desnutrición, eutrófica, talla baja o desnutrición crónica con talla baja. Piénsalo.",
        "answer": "Es la A. En la menor de cinco años manda el peso para la talla, y menos dos coma uno es desnutrición. Talla baja tienta, pero la talla para la edad está sobre menos dos, así que es normal."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.003 · Obesidad",
      "stem": "Niño de 7 años, en control de salud. Toma 2 vasos de bebida azucarada al día y juega pocas horas al aire libre. En las curvas OMS: Talla para la Edad +0,5 DE e IMC para la Edad +2,4 DE. Su Peso para la Talla calculado por la madre en una aplicación es +1,6 DE.",
      "question": "¿Cuál es su diagnóstico nutricional?",
      "options": [
        {
          "letter": "A",
          "text": "Eutrófico"
        },
        {
          "letter": "B",
          "text": "Sobrepeso, según el Peso para la Talla"
        },
        {
          "letter": "C",
          "text": "Obesidad"
        },
        {
          "letter": "D",
          "text": "Obesidad severa"
        },
        {
          "letter": "E",
          "text": "Talla alta constitucional"
        }
      ],
      "correct": "C",
      "explanation": "Desde los 5 hasta los 19 años se usa el IMC para la Edad, no el Peso para la Talla. Entre +2 y +2,9 DE corresponde a obesidad; la obesidad severa parte en +3 DE. Usar el Peso para la Talla a esta edad lleva al error de diagnosticar sobrepeso.",
      "say": {
        "stem": "Niño de siete años, que toma dos vasos de bebida azucarada al día y juega poco al aire libre. Su talla para la edad está en más cero coma cinco, y su índice de masa corporal para la edad en más dos coma cuatro desviaciones estándar. La madre calculó en una aplicación un peso para la talla de más uno coma seis.",
        "question": "¿Cuál es su diagnóstico nutricional?",
        "options": "Las opciones: eutrófico, sobrepeso según el peso para la talla, obesidad, obesidad severa, o talla alta constitucional. Piénsalo.",
        "answer": "Es la C. Desde los cinco años usas el índice de masa corporal para la edad, y más dos coma cuatro es obesidad. El sobrepeso tienta porque viene del peso para la talla, pero ese indicador ya no corresponde a los siete años."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2013 · Pregunta 162",
      "stem": "Un niño de 8 años es traído por presentar mal olor axilar desde hace semanas, sin otros síntomas. Al examen físico se aprecia vello púbico escaso y testículos de 4 cc de volumen. Su índice de masa corporal está en percentil 50 para su edad y sexo.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Pubertad precoz central"
        },
        {
          "letter": "B",
          "text": "Pubertad precoz periférica"
        },
        {
          "letter": "C",
          "text": "Pubertad temprana"
        },
        {
          "letter": "D",
          "text": "Hiperplasia suprarrenal"
        },
        {
          "letter": "E",
          "text": "Adrenarquia temprana"
        }
      ],
      "correct": "A",
      "explanation": "Pubertad precoz en varones es la aparición de caracteres sexuales antes de los 9 años. Un volumen testicular de 4 cc o más indica estimulación por gonadotropinas, es decir, activación del eje hipotálamo-hipófisis-gónada: pubertad precoz central. En la periférica o la adrenarquia (o la HSC) aparece vello y olor con testículos prepuberales.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil trece. Un niño de ocho años tiene olor axilar, vello púbico escaso y testículos de cuatro centímetros cúbicos.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: pubertad precoz central, pubertad precoz periférica, pubertad temprana, hiperplasia suprarrenal o adrenarquia temprana. Piénsalo.",
        "answer": "Es la A. Antes de los nueve años en un varón es pubertad precoz, y los testículos de cuatro centímetros cúbicos indican que el eje hipofisario está activado, por lo que es central. La adrenarquia tienta por el olor y el vello, pero en ella los testículos siguen siendo prepuberales."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2013 · Pregunta 58",
      "stem": "Un niño de 11 años es traído por sus padres por ser el más bajo de su curso. Ha crecido en el percentil 2 para su edad desde hace años según su curva de crecimiento y al examen físico tiene desarrollo puberal Tanner 1, con testículos de 2 cc. Sus padres tienen estatura promedio para la población. La radiografía de carpo muestra edad ósea de 8 años y 6 meses.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Talla baja familiar"
        },
        {
          "letter": "B",
          "text": "Hipogonadismo"
        },
        {
          "letter": "C",
          "text": "Acondroplasia"
        },
        {
          "letter": "D",
          "text": "Enanismo hipofisario"
        },
        {
          "letter": "E",
          "text": "Retardo constitucional del crecimiento"
        }
      ],
      "correct": "E",
      "explanation": "Talla baja con velocidad de crecimiento normal (crece en su carril), pubertad aún no iniciada y edad ósea retrasada más de 2 años respecto de la cronológica, con padres de talla normal, es retraso constitucional del crecimiento y desarrollo. En la talla baja familiar la edad ósea es acorde a la edad y los padres son bajos.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil trece. Un niño de once años es el más bajo de su curso, crece siempre en el percentil dos, aún no inicia la pubertad, sus padres son de talla normal y su edad ósea es de ocho años y medio.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: talla baja familiar, hipogonadismo, acondroplasia, enanismo hipofisario o retraso constitucional. Piénsalo.",
        "answer": "Es la E. Crecimiento en su carril, pubertad tardía y edad ósea retrasada con padres de talla normal son un retraso constitucional. La talla baja familiar tienta, pero en ella la edad ósea es normal y los padres son bajos."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.079 · Macro y microcefalia",
      "stem": "Un lactante de 5 meses, en control sano, tiene un perímetro cefálico que ha cruzado dos carriles de percentil, desde p50 al nacer hasta sobre p98 ahora. La fontanela anterior está amplia y tensa, y presenta mirada en sol poniente. Su desarrollo psicomotor muestra pobre sostén cefálico.",
      "question": "¿Cuál es el examen inicial más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de cráneo"
        },
        {
          "letter": "B",
          "text": "Ecografía cerebral transfontanelar"
        },
        {
          "letter": "C",
          "text": "Electroencefalograma"
        },
        {
          "letter": "D",
          "text": "Medición del perímetro cefálico de los padres y control en 3 meses"
        },
        {
          "letter": "E",
          "text": "Cariograma"
        }
      ],
      "correct": "B",
      "explanation": "Macrocefalia progresiva (cruce de percentiles) con fontanela tensa, signo de sol poniente y retraso del desarrollo sugiere hidrocefalia con hipertensión endocraneana. Con fontanela abierta, el examen inicial rápido y sin radiación es la ecografía transfontanelar, seguida de RM. Medir a los padres sirve para la macrocefalia familiar benigna, que crece en su percentil y con desarrollo normal.",
      "say": {
        "stem": "Un lactante de cinco meses tiene un perímetro cefálico que subió desde el percentil cincuenta a sobre el noventa y ocho, con fontanela tensa, mirada en sol poniente y mal sostén cefálico.",
        "question": "¿Cuál es el examen inicial más adecuado?",
        "options": "Las opciones: radiografía de cráneo, ecografía transfontanelar, electroencefalograma, medir a los padres y controlar o cariograma. Piénsalo.",
        "answer": "Es la B. Una macrocefalia progresiva con signos de hipertensión endocraneana sugiere hidrocefalia, y la ecografía transfontanelar es el examen inicial. Medir a los padres tienta, pero eso corresponde a la macrocefalia familiar, que no cruza percentiles ni da síntomas."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.3.011 · Promoción de salud y estilos de vida saludables",
      "stem": "En el control de salud de un escolar de 8 años, la madre pregunta cuánta actividad física y tiempo frente a pantallas son recomendables.",
      "question": "¿Cuál es la recomendación correcta?",
      "options": [
        {
          "letter": "A",
          "text": "Al menos 60 minutos diarios de actividad física moderada a vigorosa y limitar el tiempo recreativo frente a pantallas"
        },
        {
          "letter": "B",
          "text": "30 minutos de actividad física 2 veces por semana"
        },
        {
          "letter": "C",
          "text": "Actividad física solo si tiene sobrepeso"
        },
        {
          "letter": "D",
          "text": "Pantallas sin límite si realiza deporte"
        },
        {
          "letter": "E",
          "text": "Evitar la actividad vigorosa antes de los 12 años"
        }
      ],
      "correct": "A",
      "explanation": "La OMS y MINSAL recomiendan que niños y adolescentes de 5 a 17 años realicen al menos 60 minutos diarios de actividad física moderada a vigorosa, incluyendo actividades de fortalecimiento muscular 3 veces por semana, y limitar el tiempo sedentario recreativo frente a pantallas (idealmente menos de 2 horas al día).",
      "say": {
        "stem": "La madre de un escolar de ocho años pregunta cuánta actividad física y pantallas son recomendables.",
        "question": "¿Cuál es la recomendación correcta?",
        "options": "Las opciones: sesenta minutos diarios y limitar pantallas, treinta minutos dos veces por semana, solo si tiene sobrepeso, pantallas sin límite o evitar actividad vigorosa. Piénsalo.",
        "answer": "Es la A. Se recomiendan al menos sesenta minutos diarios de actividad moderada a vigorosa y limitar las pantallas. Indicar actividad solo si hay sobrepeso tienta, pero la recomendación es para todos los niños como promoción de salud."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.3.017 · Supervisión de salud- escolar",
      "stem": "En el control de salud de un niño de 7 años, sano, se revisan los exámenes y mediciones que deben realizarse.",
      "question": "¿Cuál de las siguientes mediciones debe incluirse en el control de salud del escolar?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de columna anual"
        },
        {
          "letter": "B",
          "text": "Electrocardiograma anual"
        },
        {
          "letter": "C",
          "text": "Hemograma anual"
        },
        {
          "letter": "D",
          "text": "Presión arterial, al menos una vez al año desde los 3 años"
        },
        {
          "letter": "E",
          "text": "Glicemia de ayuno anual"
        }
      ],
      "correct": "D",
      "explanation": "El control de salud escolar incluye antropometría con diagnóstico nutricional, presión arterial (desde los 3 años, anual), agudeza visual y auditiva, salud bucal, desarrollo puberal, evaluación de escoliosis al examen físico y aspectos psicosociales y escolares. Los exámenes de laboratorio o radiografías no se solicitan de rutina en un niño sano.",
      "say": {
        "stem": "En el control de un escolar sano de siete años se revisan las mediciones necesarias.",
        "question": "¿Cuál debe incluirse?",
        "options": "Las opciones: radiografía de columna, electrocardiograma, hemograma, presión arterial anual desde los tres años o glicemia anual. Piénsalo.",
        "answer": "Es la D. La presión arterial se mide al menos una vez al año desde los tres años. La radiografía de columna tienta para detectar escoliosis, pero esa se pesquisa con el examen físico y el test de Adams, no con radiografías de rutina."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 17",
      "stem": "Un lactante de 11 meses acude a control de niño sano, constatándose que aún no tiene ningún diente. El resto de su examen físico, así como su desarrollo psicomotor, es normal.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Derivar al odontopediatra"
        },
        {
          "letter": "B",
          "text": "Solicitar radiografía panorámica dentaria"
        },
        {
          "letter": "C",
          "text": "Solicitar TSH plasmática"
        },
        {
          "letter": "D",
          "text": "Solicitar niveles plasmáticos de vitamina D"
        },
        {
          "letter": "E",
          "text": "Observar evolución y controlar en 2 meses"
        }
      ],
      "correct": "E",
      "explanation": "La erupción del primer diente suele ocurrir alrededor de los 6 meses, pero tiene amplia variabilidad y puede retrasarse hasta los 12 a 15 meses en niños sanos. Con crecimiento y desarrollo normales, la conducta es observar. Se estudia (radiografía, causas sistémicas como hipotiroidismo o raquitismo) si no hay dientes a los 15 a 18 meses o hay otros hallazgos.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un lactante de once meses sano, con desarrollo normal, aún no tiene ningún diente.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: derivar al odontopediatra, radiografía panorámica, TSH, vitamina D u observar y controlar. Piénsalo.",
        "answer": "Es la E. La erupción dentaria puede retrasarse hasta los quince meses en un niño sano, así que se observa. La TSH tienta porque el hipotiroidismo retrasa la dentición, pero con crecimiento y desarrollo normales no corresponde estudiarlo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.006 · Radiografía de edad ósea",
      "stem": "Un niño de 10 años consulta por talla baja. Crece en el percentil 3 con velocidad de crecimiento normal y está sano. Su padre mide 160 cm y su madre 148 cm. Se solicita radiografía de carpo para edad ósea.",
      "question": "Si el diagnóstico es talla baja familiar, ¿cuál es el resultado esperado de la edad ósea?",
      "options": [
        {
          "letter": "A",
          "text": "Retrasada en más de 2 años respecto de la edad cronológica"
        },
        {
          "letter": "B",
          "text": "Muy retrasada con epífisis abiertas e irregulares"
        },
        {
          "letter": "C",
          "text": "Adelantada en más de 2 años"
        },
        {
          "letter": "D",
          "text": "Acorde a la edad cronológica"
        },
        {
          "letter": "E",
          "text": "No es posible estimarla antes de la pubertad"
        }
      ],
      "correct": "D",
      "explanation": "La edad ósea ayuda a diferenciar las variantes normales de talla baja. En la talla baja familiar la edad ósea concuerda con la cronológica, la velocidad de crecimiento es normal y la talla es acorde a la talla diana. En el retraso constitucional la edad ósea está retrasada y la pubertad será tardía.",
      "say": {
        "stem": "Un niño de diez años crece en el percentil tres con velocidad normal, y sus padres son bajos.",
        "question": "Si es una talla baja familiar, ¿cómo será su edad ósea?",
        "options": "Las opciones: retrasada más de dos años, muy retrasada e irregular, adelantada, acorde a la cronológica o no estimable. Piénsalo.",
        "answer": "Es la D. En la talla baja familiar la edad ósea es acorde a la edad cronológica. La edad ósea retrasada tienta, pero es propia del retraso constitucional del crecimiento."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.008 · Prevención de la obesidad",
      "stem": "En el control de salud de un niño de 4 años, el IMC está en percentil 80 (normal). Los padres refieren que toma bebidas azucaradas a diario y ve pantallas 4 horas al día.",
      "question": "¿Cuál es la intervención preventiva más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Indicar una dieta hipocalórica estricta"
        },
        {
          "letter": "B",
          "text": "Consejería familiar: reemplazar bebidas azucaradas por agua, limitar pantallas a 1 hora diaria y promover juego activo diario"
        },
        {
          "letter": "C",
          "text": "Iniciar metformina"
        },
        {
          "letter": "D",
          "text": "Derivar a cirugía"
        },
        {
          "letter": "E",
          "text": "No intervenir, porque aún no tiene sobrepeso"
        }
      ],
      "correct": "B",
      "explanation": "La prevención de la obesidad infantil se basa en cambiar hábitos de toda la familia: agua en vez de bebidas azucaradas, frutas y verduras, comidas en familia, al menos 60 minutos diarios de actividad física y limitar pantallas (máximo 1 hora en preescolares). Esperar el sobrepeso pierde la oportunidad preventiva; las dietas restrictivas no se indican en niños.",
      "say": {
        "stem": "En el control de salud de un niño de cuatro años con peso aún normal, los padres cuentan que toma bebidas azucaradas a diario y pasa cuatro horas frente a pantallas.",
        "question": "¿Cuál es la intervención preventiva más adecuada?",
        "options": "Las opciones: dieta hipocalórica estricta, consejería familiar sobre agua, pantallas y juego activo, metformina, cirugía, o no intervenir todavía. Piénsalo.",
        "answer": "Es la B. La prevención de obesidad infantil es consejería familiar: agua en vez de bebidas, menos pantallas y juego activo diario. No intervenir tienta porque su peso es normal, pero justamente ahora la prevención rinde más."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Qué indicador usar', tag: 'Según la edad', kind: 'key', items: [
          { t: 'Menor de 5 años: Peso/Talla', d: 'Define desnutrición y obesidad',
            say: 'Cerremos con las reglas de oro. Antes de los cinco años, el que manda es el peso para la talla.' },
          { t: '5 a 19 años: IMC/Edad', d: 'Mismos cortes, otro nombre',
            say: 'Desde los cinco hasta los diecinueve, cambias al índice de masa corporal para la edad, con los mismos cortes.' },
        ] },
        { title: 'Los cortes', tag: 'Números enteros de DE', kind: 'criteria', items: [
          { t: 'Eutrófico: menos 1 a más 1', d: 'Cada paso es un DE completo',
            say: 'Eutrófico va de menos uno a más uno. Cada escalón hacia arriba o hacia abajo es una desviación estándar completa: riesgo, después desnutrición; sobrepeso, después obesidad.' },
        ] },
        { title: 'Qué no olvidar', tag: 'La talla y la conducta', kind: 'alert', items: [
          { t: 'Talla para la Edad: lo crónico', d: 'Menos 2 DE es talla baja',
            say: 'La talla para la edad te habla de lo crónico, y su corte de talla baja es menos dos desviaciones estándar.' },
          { t: 'Talla baja: velocidad y edad ósea', d: 'Turner en toda niña; deriva si cruza canales',
            say: 'En una talla baja mira la velocidad de crecimiento y la edad ósea, y en toda niña piensa en síndrome de Turner.' },
          { t: 'Bajo 2 años: nunca dieta restrictiva', d: 'La meta es que la talla alcance al peso',
            say: 'Y en el menor de dos años, nunca indiques una dieta restrictiva. Si te llevas una sola idea de hoy: mira la edad antes de elegir el indicador, y mira los tres números juntos antes de cerrar el diagnóstico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Evaluación nutricional: qué indicador usar y qué hacer',
    root: N('start', 'Niño en control de salud', 'Evaluación antropométrica',
      'Un niño llega a su control de salud y necesitas clasificar su estado nutricional. El primer paso no es mirar el peso: es mirar la edad, porque ella decide qué indicador vas a usar.',
      ['', N('q', '¿Qué edad tiene?', 'Cambia el indicador de masa corporal',
        'Pregúntate primero: ¿tiene menos de cinco años, o entre cinco y diecinueve?',
        ['Menor de 5 años', N('q', 'Mira el Peso para la Talla', '¿Cuántas DE se desvía?',
          'En el menor de cinco años, calculas las desviaciones estándar del peso para la talla.',
          ['Bajo menos 1 DE', N('alert', 'Riesgo o desnutrición', 'Evaluar alimentación + control abreviado',
            'Bajo menos una desviación estándar hay riesgo de desnutrición, y bajo menos dos, desnutrición. Revisas la técnica alimentaria y citas a control en quince a treinta días.')],
          ['Entre menos 1 y más 1 DE', N('ok', 'Eutrófico', 'Control habitual',
            'Entre menos uno y más uno de desviación estándar, el niño está eutrófico: control de salud habitual.')],
          ['Sobre más 1 DE', N('alert', 'Sobrepeso u obesidad', 'Hábitos, sin dieta restrictiva',
            'Sobre más una desviación estándar hay sobrepeso, y sobre más dos, obesidad. Corriges hábitos, y si es menor de dos años, nunca con dieta restrictiva.')])],
        ['5 a 19 años', N('q', 'Mira el IMC para la Edad', '¿Cuántas DE se desvía?',
          'Desde los cinco años, el indicador cambia al índice de masa corporal para la edad, con los mismos cortes.',
          ['Bajo menos 1 DE', N('alert', 'Bajo peso o desnutrición', 'Evaluar alimentación',
            'Los mismos cortes de riesgo y desnutrición se aplican aquí, ahora sobre el IMC para la edad.')],
          ['Entre menos 1 y más 1 DE', N('ok', 'Eutrófico', 'Control habitual',
            'Eutrófico, control de salud habitual.')],
          ['Sobre más 1 DE', N('alert', 'Sobrepeso u obesidad', 'Hábitos de vida',
            'Sobrepeso u obesidad: mismo manejo de hábitos que en el menor de cinco años.')])])]),
  },
};
