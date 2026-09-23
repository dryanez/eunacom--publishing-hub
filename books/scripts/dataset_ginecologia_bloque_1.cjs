/**
 * TOMO 20: GINECOLOGÍA & ONCOLOGÍA GINECOLÓGICA · BLOQUE 1
 * Endocrinología Ginecológica, Ciclo Menstrual & SUA (20.1 a 20.4)
 */

const { flowGinecologia } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "gin-01",
    "classId": "gin-01",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Endocrinología Ginecológica, Ciclo Menstrual & SUA",
    "topicLabel": "20.1",
    "title": "Fisiología del Ciclo Menstrual, Eje Hipotálamo-Hipófisis-Ovario y Estudio de la Amenorrea",
    "perfilCode": "3.02.1.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Protocolo de Estudio Endocrinológico de la Mujer en APS y Red Secundaria.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#45) · EUNACOM Julio 2023 (Q#22) · EUNACOM Diciembre 2022 (Q#15)",
    "frecuencia": "Máxima rentabilidad · Descartar embarazo como 1.ª causa, Test de Progesterona y algoritmo de amenorrea primaria",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico Escalonado de la Amenorrea Secundaria",
    "diagramRows": [
      {
        "t": "Paciente en Edad Fértil con Amenorrea Secundaria (Ausencia de Menstruación ≥ 3-6 meses)",
        "s": "¡PASO 1 OBLIGATORIO Y FUNDAMENTAL!: Descartar EMBARAZO con β-hCG en orina o suero",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "Paso 1: ¿Resultado de la β-hCG?",
        "al": "Positiva vs Negativa",
        "ll": "β-hCG Positiva",
        "left": {
          "t": "EMBARAZO CONFIRMADO",
          "s": "Causa fisiológica más común de amenorrea secundaria en el mundo · Iniciar Control Prenatal Integral",
          "type": "acc"
        },
        "rl": "β-hCG Negativa",
        "right": {
          "t": "Paso 2: TSH + Prolactina + Test de Progesterona",
          "s": "Descartar hipotiroidismo y prolactinoma · Medroxiprogesterona 10 mg/d x 5-10 días (o Progesterona 200 mg)",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Paso 3: Respuesta al Test de Progesterona",
        "al": "¿Regla (+) vs Sin Regla (-)?",
        "ll": "Test de Progesterona (+) (Regla)",
        "left": {
          "t": "ANOVULACIÓN / ESTRÓGENOS PRESENTES",
          "s": "Endometrio proliferado con estrógenos pero sin ovulación · Causa clásica: SOP o disfunción ovulatoria",
          "type": "acc"
        },
        "rl": "Test de Progesterona (-) (No regla)",
        "right": {
          "t": "Paso 4: Test de Estrógenos + Progesterona",
          "s": "Si NO sangra: Alteración anatómica (Sd. Asherman / Sinequias). Si SANGRA: Solicitar FSH y LH",
          "type": "crit"
        }
      }
    ],
    "contexto": "El ciclo menstrual femenino es regulado por la secreción pulsátil de GnRH hipotalámica, que induce la liberación de FSH y LH por la adenohipófisis para orquestar la foliculogénesis ovárica y la preparación endometrial. La amenorrea es uno de los motivos de consulta más frecuentes en ginecología y una pregunta clásica garantizada en el examen EUNACOM. El alumno debe dominar con absoluta precisión dos algoritmos indispensables: el estudio sistemático de la amenorrea secundaria (donde el primer paso obligatorio es SIEMPRE descartar embarazo con β-hCG, seguido del test de progesterona) y la diferenciación diagnóstica de las amenorreas primarias basada en la presencia o ausencia de caracteres sexuales secundarios y útero.",
    "contentSections": [
      {
        "subhead": "1. Fisiología del Ciclo Menstrual Femenino",
        "paragraphs": [
          "• <strong>Fase Folicular (Días 1 a 14):</strong> La secreción pulsátil de GnRH estimula la síntesis de <strong>FSH</strong>. La FSH recluta una cohorte de folículos y selecciona el <strong>folículo dominante</strong> (de De Graaf), el cual secreta cantidades crecientes de <strong>Estradiol</strong> gracias a la aromatización de andrógenos en las células de la granulosa mediada por FSH (teoría de las dos células: Teca produce andrógenos bajo LH; Granulosa los aromatiza a estrógenos bajo FSH). El estradiol induce la fase proliferativa del endometrio.",
          "• <strong>Pico Ovulatorio (Día 14):</strong> Cuando el estradiol sérico supera un umbral crítico (> 200 pg/mL durante más de 48 horas), ejerce una <strong>retroalimentación positiva sobre la hipófisis</strong>, desencadenando el <strong>pico masivo de LH</strong> (y menor de FSH). La ovulación ocurre entre <strong>36 horas después del inicio del pico de LH</strong> (o 10 a 12 horas tras el pico máximo).",
          "• <strong>Fase Lútea o Secretora (Días 15 a 28):</strong> El folículo colapsado se transforma en el <strong>Cuerpo Lúteo</strong> bajo influencia de la LH, secretando grandes cantidades de <strong>Progesterona</strong> (y estradiol). La progesterona transforma el endometrio en fase secretora apto para la implantación. Si no hay fecundación, el cuerpo lúteo degenera a los 14 días (cuerpo albicans), caen bruscamente los niveles de estrógeno y progesterona, desencadenando la descamación endometrial por isquemia de las arteriolas espirales (<strong>Menstruación</strong>)."
        ]
      },
      {
        "subhead": "2. Amenorrea Primaria: Algoritmo y Síndromes Clásicos",
        "paragraphs": [
          "• <strong>Definición:</strong> Ausencia de menarquia a los <strong>13 años en ausencia de caracteres sexuales secundarios</strong> (ausencia de telarquia/pubarquia), o a los <strong>15 años si existen caracteres sexuales secundarios normales</strong>.",
          "• <strong>Clasificación Semiológica Inicial (Pregunta Fija EUNACOM):</strong>",
          "  - <strong>1) Con Caracteres Sexuales (+) y Útero AUSENTE:</strong>",
          "    • <strong>Síndrome de Mayer-Rokitansky-Küster-Hauser (Agenesia Mülleriána):</strong> Cariotipo <strong>46,XX</strong>. Ovarios normales y funcionantes, niveles normales de estrógenos, mamas y vello púbico normales. Existe agenesia congénita de los 2/3 superiores de vagina y útero. No menstrúan nunca.",
          "    • <strong>Síndrome de Insensibilidad a los Andrógenos (Morris / Feminización Testicular):</strong> Cariotipo <strong>46,XY</strong>. Mutación del receptor de andrógenos. Fenotipo femenino con mamas desarrolladas (por aromatización de testosterona) pero <strong>ausencia total de vello axilar y púbico</strong>. Testículos intraabdominales o inguinales (riesgo de gonadoblastoma/seminoma; deben extirparse postpubertad).",
          "  - <strong>2) Con Caracteres Sexuales (-) y FSH Elevada (Hipogonadismo Hipergonadotropo):</strong>",
          "    • <strong>Síndrome de Turner (45,X0):</strong> Talla baja, cuello alado (pterygium colli), tórax en escudo, coartación aórtica y disgenesia gonadal con 'cintillas ováricas'. Ovarios afuncionales -> FSH y LH marcadamente elevadas.",
          "    • <strong>Disgenesia Gonadal Pura (Sd. Swyer, 46,XY):</strong> Fenotipo femenino sin desarrollo puberal, con estrías gonadales fibrosas y riesgo tumoral alto.",
          "  - <strong>3) Con Caracteres Sexuales (-) y FSH Baja (Hipogonadismo Hipogonadotropo):</strong>",
          "    • <strong>Síndrome de Kallmann:</strong> Falla en la migración de neuronas GnRH y axones olfatorios. Cursa con <strong>amenorrea primaria + ANOSMIA / HIPOSMIA</strong> con FSH y LH muy bajas."
        ]
      },
      {
        "subhead": "3. Amenorrea Secundaria: Algoritmo Diagnóstico Escalonado",
        "paragraphs": [
          "• <strong>Definición:</strong> Cese de las menstruaciones durante <strong>≥ 3 meses</strong> en mujeres con ciclos regulares previos, o durante <strong>≥ 6 meses</strong> en mujeres oligomenorreicas.",
          "• <strong>Secuencia Diagnóstica Escalonada Oficial:</strong>",
          "  - <strong>Paso 1: Descartar Embarazo:</strong> Solicitar <strong>β-hCG</strong>. Es la causa más común de amenorrea secundaria.",
          "  - <strong>Paso 2: TSH y Prolactina (PRL):</strong> Descartar Hipotiroidismo primario (la elevación de TRH estimula la prolactina) e <strong>Hiperprolactinemia / Prolactinoma</strong> (produce galactorrea y frena los pulsos de GnRH). Si la prolactina está elevada: solicitar RMN de hipófisis.",
          "  - <strong>Paso 3: Test de Progesterona (Medroxiprogesterona 10 mg/día VO por 5-10 días):</strong>",
          "    • <strong>Test (+) (Regla presente / hemorragia por deprivación):</strong> Indica que el eje produce estrógenos suficientes para proliferar el endometrio, pero la paciente <strong>NO OVULA (Anovulación)</strong>. Diagnóstico más frecuente: <strong>Síndrome de Ovario Poliquístico (SOP)</strong>.",
          "    • <strong>Test (-) (No sangra):</strong> Indica que el endometrio no proliferó (falta de estrógenos) o existe una obstrucción anatómica en el tracto de salida.",
          "  - <strong>Paso 4: Test Combinado de Estrógenos + Progesterona (Estradiol 2 mg/día x 21 días + Progesterona los últimos 10 días):</strong>",
          "    • <strong>Si NO sangra:</strong> Problema anatómico en el canal uterino o vaginal -> <strong>Síndrome de Asherman (sinequias uterinas post-legrados)</strong> o estenosis cervical. Diagnóstico con histeroscopía.",
          "    • <strong>Si SANGRA:</strong> El tracto de salida es permeable y el endometrio responde. El problema es una deficiencia hormonal ovárica o hipofisaria/hipotalámica.",
          "  - <strong>Paso 5: Medición de Gonadotrofinas (FSH y LH séricas):</strong>",
          "    • <strong>FSH ELEVADA (> 30-40 UI/L):</strong> Falla ovárica primaria -> <strong>Insuficiencia Ovárica Prematura (Menopausia precoz)</strong> en mujeres menores de 40 años.",
          "    • <strong>FSH BAJA o Normal (< 5 UI/L):</strong> Falla central -> <strong>Amenorrea Hipotalámica Funcional</strong> (estrés crónico, pérdida severa de peso, anorexia nerviosa, ejercicio físico extenuante como maratonistas o bailarinas) o Síndrome de Sheehan (necrosis isquémica hipofisaria postparto)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de las Principales Causas de Amenorrea Primaria",
      "headers": [
        "Síndrome",
        "Cariotipo",
        "Fenotipo",
        "Mamas / Vello",
        "Útero / Vagina",
        "Gonadotrofinas (FSH/LH)"
      ],
      "rows": [
        [
          "Rokitansky-Küster (Agenesia)",
          "46, XX",
          "Femenino normal",
          "Mamas normales / Vello normal",
          "AUSENTE (fondo ciego)",
          "NORMALES (Ovarios funcionan)"
        ],
        [
          "Morris (Insensibilidad Andrógenos)",
          "46, XY",
          "Femenino alto",
          "Mamas desarrolladas / SIN VELLO",
          "AUSENTE (fondo ciego)",
          "LH y Testosterona elevadas"
        ],
        [
          "Turner (Disgenesia gonadal)",
          "45, X0",
          "Talla baja, cuello alado",
          "Mamas infantiles / Vello escaso",
          "PRESENTE (pequeño)",
          "ELEVADAS (Falla ovárica)"
        ],
        [
          "Kallmann (Hipogonadotropo)",
          "46, XX o XY",
          "Femenino o masculino",
          "Infantilismo sexual",
          "PRESENTE",
          "MUY BAJAS (+ Anosmia)"
        ],
        [
          "Himen Imperforado",
          "46, XX",
          "Femenino normal",
          "Normales",
          "PRESENTE (Criptomenorrea)",
          "NORMALES"
        ]
      ]
    },
    "severityTable": {
      "title": "Complicaciones Críticas y Hallazgos de Alarma en Amenorrea",
      "headers": [
        "Entidad Clínica",
        "Riesgos y Signos de Gravedad",
        "Conducta Diagnóstica y Terapéutica Inmediata"
      ],
      "rows": [
        [
          "Macroprolactinoma Hipofisario",
          "Tumor > 10 mm con compromiso quiasmático: hemianopsia bitemporal, cefalea hipertensiva y amaurosis",
          "RMN cerebral de urgencia + Cabergolina oral a dosis crecientes (o descompresión neuroquirúrgica transesfenoidal)"
        ],
        [
          "Gónadas Disgenéticas con Cromosoma Y",
          "Presencia de línea celular Y (46,XY en Morris o Swyer) -> Riesgo de 30% de Gonadoblastoma y Disgerminoma maligno",
          "Gonadectomía profiláctica laparoscópica una vez completado el desarrollo puberal en Morris, o inmediata en Swyer"
        ],
        [
          "Insuficiencia Ovárica Prematura (FOP)",
          "Pérdida de función folicular en < 40 años -> Osteoporosis acelerada severa y riesgo cardiovascular temprano",
          "Terapia de Reemplazo Hormonal (TRH) sustitutiva obligatoria hasta los 50 años para proteger hueso y endotelio"
        ],
        [
          "Hematocolpos por Himen Imperforado",
          "Dolor pélvico cíclico progresivo intenso sin sangrado visible + Masa abombada azulada en introito",
          "Himenotomía quirúrgica en cruz para evacuación inmediata de sangre acumulada"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Abordaje Farmacológico Escalonado en Trastornos del Ciclo y Amenorrea",
      "headers": [
        "Causa Subyacente",
        "Fármaco / Intervención",
        "Mecanismo y Dosis",
        "Meta Terapéutica Principal"
      ],
      "rows": [
        [
          "Anovulación por SOP",
          "Medroxiprogesterona o Progesterona micronizada",
          "10 mg/d o 200 mg/d por 10-12 días al mes (o ACOs)",
          "Prevenir hiperplasia y adenocarcinoma de endometrio por estímulo estrogénico no balanceado."
        ],
        [
          "Hiperprolactinemia / Prolactinoma",
          "Cabergolina (o Bromocriptina)",
          "Agonista dopaminérgico D2: 0.5 mg 1 a 2 veces por semana",
          "Normalizar prolactina, inducir regresión tumoral y restablecer fertilidad."
        ],
        [
          "Amenorrea Hipotalámica Funcional",
          "Manejo nutricional + Apoyo psicológico",
          "Aumento ponderal, reducción del gasto energético, IMC > 19",
          "Reactivar la secreción pulsátil fisiológica de GnRH en hipotálamo."
        ],
        [
          "Síndrome de Asherman",
          "Lisis histeroscópica de sinequias + Sonda Foley",
          "Resección de bridas intrauterinas guiada + estrógenos a altas dosis",
          "Restaurar la arquitectura y permeabilidad de la cavidad endometrial."
        ]
      ]
    },
    "vignette": "Adolescente de 16 años acude a la consulta ginecológica acompañada de su madre por no haber presentado nunca una menstruación. Al examen físico: desarrollo mamario Tanner IV y vello pubiano Tanner IV normales y acordes a la edad. Presión arterial de 115/70 mmHg, talla de 1.62 m. Al examen ginecológico: genitales externos femeninos normales, pero al intentar introducir el hisopo o explorador se constata una vagina corta que termina en fondo de saco ciego de aproximadamente 2 cm. Se solicita ecografía pelviana que informa ausencia de útero, con ambos ovarios presentes de aspecto y volumen normales. El cariotipo solicitado resulta 46,XX.",
    "explicacion": "Nos encontramos ante una paciente con Amenorrea Primaria que presenta desarrollo de caracteres sexuales secundarios normales (mamas y vello púbico Tanner IV), cariotipo femenino normal 46,XX, presencia de ovarios normales funcionantes pero con AUSENCIA congénita de útero y de los dos tercios superiores de la vagina. Esta constelación clínica y genética es diagnóstica y patognomónica del Síndrome de Mayer-Rokitansky-Küster-Hauser (Agenesia Mülleriána). A diferencia del Síndrome de Morris (Insensibilidad completa a los andrógenos), las pacientes con Rokitansky tienen cariotipo 46,XX, vello pubiano normal y niveles de testosterona normales femeninos. El manejo consiste en apoyo psicológico multidisciplinario y la creación de una neovagina mediante dilatadores progresivos de Frank o vaginoplastía quirúrgica para permitir una vida sexual normal; la paciente es biológicamente fértil a través de sus propios ovocitos mediante fertilización in vitro y maternidad subrogada.",
    "keyPoints": [
      "Fase folicular: La FSH recluta el folículo dominante que produce Estradiol.",
      "Pico de LH: Gatillado por feedback positivo de estradiol > 200 pg/mL por 48h; induce la ovulación a las 36 horas.",
      "Primer paso ante amenorrea secundaria: SIEMPRE solicitar β-hCG para descartar EMBARAZO.",
      "Test de progesterona positivo (sangra): Indica anovulación con estrógenos presentes (clásico de SOP).",
      "Test de estrógeno + progestágeno negativo (no sangra): Causa anatómica en tracto de salida (Sd. de Asherman).",
      "FSH marcadamente elevada en amenorrea: Falla ovárica primaria (Insuficiencia ovárica precoz o Sd. Turner).",
      "FSH baja en amenorrea: Causa central hipotalámica funcional (estrés, anorexia, pérdida de peso) o hipofisaria.",
      "Síndrome de Rokitansky (46,XX): Amenorrea primaria con mamas y vello normales, ovarios normales pero SIN útero.",
      "Síndrome de Morris (46,XY): Fenotipo femenino con mamas, pero SIN vello púbico/axilar, testículos intraabdominales y sin útero.",
      "Síndrome de Kallmann: Amenorrea primaria por hipogonadismo hipogonadotropo asociada a ANOSMIA."
    ],
    "questions": [
      {
        "stem": "Una paciente de 25 años, con antecedentes de menstruaciones regulares, consulta por amenorrea de 5 meses. No utiliza métodos anticonceptivos hormonales. La prueba de β-hCG en orina resulta negativa. El médico administra Medroxiprogesterona 10 mg al día por vía oral durante 10 días, presentando la paciente un sangrado genital abundante de características menstruales 3 días después de suspender el fármaco (Test de Progesterona positivo). ¿Cuál es la interpretación fisiopatológica de este resultado?",
        "options": [
          {
            "id": "A",
            "text": "Falla ovárica prematura con agotamiento folicular irreversible"
          },
          {
            "id": "B",
            "text": "Presencia de un endometrio adecuadamente proliferado por estrógenos endógenos pero con anovulación"
          },
          {
            "id": "C",
            "text": "Estenosis cervical obstructiva secundaria con retención hemática intrauterina"
          },
          {
            "id": "D",
            "text": "Síndrome de Asherman con sinequias uterinas completas"
          },
          {
            "id": "E",
            "text": "Hipogonadismo hipogonadotropo por tumor selar destructor"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En la falla ovárica prematura no hay estrógenos para proliferar el endometrio, por lo que el test de progesterona resulta negativo.\nB) Correcta. El Test de Progesterona consiste en administrar un progestágeno durante 5 a 10 días para inducir la maduración secretora del endometrio y posterior descamación por deprivación. Si la paciente sangra (Test Positivo), significa con absoluta certeza que su organismo produce cantidades suficientes de Estrógenos endógenos para preparar y proliferar el endometrio, pero no produce progesterona propia debido a la ausencia de cuerpo lúteo, lo que define un estado de Anovulación crónica (la causa más frecuente en mujeres jóvenes es el Síndrome de Ovario Poliquístico).\nC) Incorrecta. Si hubiera estenosis cervical la sangre no podría exteriorizarse por la vagina.\nD) Incorrecta. En el síndrome de Asherman no hay endometrio funcionante y el test de progesterona es estrictamente negativo.\nE) Incorrecta. En el hipogonadismo hipogonadotropo no hay estímulo ovárico ni estrógenos.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.001"
      },
      {
        "stem": "Una joven de 17 años es evaluada por amenorrea primaria. Al examen físico presenta una talla de 1.70 m, excelente desarrollo mamario Tanner V, pero llama la atención la ausencia casi completa de vello axilar y pubiano (Tanner I). Al examen ginecológico se constata una vagina ciega de 3 cm de profundidad, sin palparse cuello uterino ni útero en la ecografía pelviana. En ambos conductos inguinales se palpan masas móviles no dolorosas. El estudio citogenético informa un cariotipo 46,XY. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Síndrome de Mayer-Rokitansky-Küster-Hauser"
          },
          {
            "id": "B",
            "text": "Síndrome de Turner"
          },
          {
            "id": "C",
            "text": "Síndrome de Insensibilidad Completa a los Andrógenos (Síndrome de Morris)"
          },
          {
            "id": "D",
            "text": "Disgenesia gonadal pura (Síndrome de Swyer)"
          },
          {
            "id": "E",
            "text": "Hiperplasia suprarrenal congénita clásica"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. En el síndrome de Rokitansky el cariotipo es 46,XX y el vello pubiano y axilar es completamente normal.\nB) Incorrecta. El Turner tiene cariotipo 45,X0, talla baja y mamas no desarrolladas.\nC) Correcta. El Síndrome de Morris (Feminización Testicular o Insensibilidad a los Andrógenos) es una entidad con cariotipo 46,XY caracterizada por la mutación del receptor de andrógenos. Los testículos fetales producen testosterona y hormona antimülleriana (AMH); la AMH produce regresión de los conductos de Müller (por lo que NO hay útero ni tercio superior de vagina). Debido a la insensibilidad androgénica periférica completa, los genitales externos se desarrollan con fenotipo femenino y NO se desarrolla vello púbico ni axilar (signo patognomónico). La testosterona circulante se aromatiza periféricamente a estrógenos, generando un excelente desarrollo de mamas. Las masas inguinales corresponden a los testículos ectópicos, los cuales deben extirparse tras completar la pubertad por riesgo de neoplasia (gonadoblastoma/seminoma).\nD) Incorrecta. En Swyer no hay desarrollo mamario (mamas infantiles por falta de estrógenos) y sí tienen útero.\nE) Incorrecta. Provoca virilización de genitales en fetos 46,XX.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.001"
      },
      {
        "stem": "Una paciente de 33 años, con antecedente de legrado uterino instrumental por aborto incompleto hace 6 meses, consulta por ausencia de menstruación desde el procedimiento. La β-hCG es negativa, TSH y prolactina normales. Se realiza un test de progesterona que resulta negativo. Posteriormente se administra una prueba combinada de estrógenos más progesterona por 21 días, no presentándose sangrado de deprivación. ¿Cuál es el examen de elección para confirmar el diagnóstico sospechado?",
        "options": [
          {
            "id": "A",
            "text": "Resonancia magnética de hipófisis"
          },
          {
            "id": "B",
            "text": "Histeroscopía diagnóstica"
          },
          {
            "id": "C",
            "text": "Cariotipo en sangre periférica"
          },
          {
            "id": "D",
            "text": "Tomografía axial computada de abdomen y pelvis"
          },
          {
            "id": "E",
            "text": "Medición seriada de hormona antimülleriana"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La RMN sella se solicita ante hiperprolactinemia, pero aquí el problema es endometrial.\nB) Correcta. El fracaso en presentar sangrado por deprivación tras el ciclo combinado de estrógenos más progesterona demuestra que el endometrio no responde o existe una obliteración mecánica del canal uterino. En una paciente con antecedente reciente de legrado uterino, este hallazgo es patognomónico del Síndrome de Asherman (sinequias o adherencias intrauterinas cicatriciales que obliteran la cavidad endometrial). El estándar de oro diagnóstico y terapéutico indiscutido es la Histeroscopía, la cual permite visualizar directamente las bridas y realizar la lisis quirúrgica de las mismas.\nC) Incorrecta. El cariotipo es para amenorreas primarias.\nD) Incorrecta. La TAC no tiene resolución para sinequias endometriales.\nE) Incorrecta. La AMH evalúa reserva ovárica, no la cavidad uterina.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.001"
      },
      {
        "stem": "Una mujer de 19 años es evaluada por amenorrea primaria y ausencia total de desarrollo puberal (Tanner mamario I). Durante la anamnesis refiere que desde niña no es capaz de percibir los olores (anosmia). Al laboratorio se encuentra FSH de 0.8 mUI/mL y LH de 0.5 mUI/mL (ambas muy disminuidas). ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Síndrome de Turner"
          },
          {
            "id": "B",
            "text": "Síndrome de Kallmann"
          },
          {
            "id": "C",
            "text": "Craneofaringioma"
          },
          {
            "id": "D",
            "text": "Insuficiencia ovárica prematura"
          },
          {
            "id": "E",
            "text": "Síndrome de Mayer-Rokitansky-Küster-Hauser"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El Turner tiene FSH marcadamente elevada por falla ovárica gonadal, no baja, y no tiene anosmia.\nB) Correcta. La asociación patognomónica de hipogonadismo hipogonadotropo (FSH y LH muy disminuidas con falta de desarrollo puberal) y Anosmia o Hiposmia congénita define el Síndrome de Kallmann. Se debe a un defecto genético en la migración embrionaria de las neuronas secretoras de GnRH y de las neuronas del bulbo olfatorio desde la placoda olfatoria hacia el hipotálamo.\nC) Incorrecta. El craneofaringioma produce cefalea, alteraciones del campo visual (hemianopsia) y diabetes insípida, no anosmia congénita aislada.\nD) Incorrecta. La falla ovárica cursa con FSH elevada.\nE) Incorrecta. En Rokitansky el eje gonadotropo es normal y las pacientes tienen excelente desarrollo mamario.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.001"
      }
    ]
  },
  {
    "id": "gin-02",
    "classId": "gin-02",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Endocrinología Ginecológica, Ciclo Menstrual & SUA",
    "topicLabel": "20.2",
    "title": "Síndrome de Ovario Poliquístico (SOP): Criterios de Rotterdam, Resistencia a la Insulina y Manejo",
    "perfilCode": "3.02.1.002",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Manejo en Atención Primaria de Salud y Ginecología / Endocrinología.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#46) · EUNACOM Diciembre 2023 (Q#23) · EUNACOM Julio 2022 (Q#20)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico con Criterios de Rotterdam (2 de 3), ACOs antiandrogénicos y prevención de hiperplasia endometrial",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico del Síndrome de Ovario Poliquístico",
    "diagramRows": [
      {
        "t": "Sospecha de SOP: Mujer en Edad Fértil con Trastornos Menstruales (Oligomenorrea) e Hiperandrogenismo",
        "s": "Evaluar Criterios de Rotterdam (se requiere el cumplimiento de al menos 2 de los 3 criterios)",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Criterios de Rotterdam (2 de 3)",
        "al": "1) Oligo/anovulación · 2) Hiperandrogenismo · 3) Ecografía ovárica característica",
        "ll": "Criterios Clínicos / Bioquímicos",
        "left": {
          "t": "1. Oligo/Anovulación + 2. Hiperandrogenismo",
          "s": "Oligomenorrea (ciclos > 35 días) o amenorrea · Hirsutismo (Ferriman-Gallwey ≥ 8), acné, alopecia o elevación de testosterona",
          "type": "warn"
        },
        "rl": "Criterio Ecográfico Transvaginal",
        "right": {
          "t": "3. Morfología de Ovario Poliquístico",
          "s": "≥ 20 folículos de 2-9 mm por ovario o volumen ovárico aumentado > 10 mL en al menos un ovario",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "Objetivo Terapéutico Primario",
        "al": "¿Deseo de Embarazo Actual?",
        "ll": "NO desea embarazo actual",
        "left": {
          "t": "ACOs Combinados + Estilo de Vida",
          "s": "Anticonceptivos con progestágeno antiandrogénico (Ciproterona, Dienogest, Drospirenona) + Metformina si hay RI",
          "type": "acc"
        },
        "rl": "SÍ desea embarazo actual",
        "right": {
          "t": "Inducción de Ovulación",
          "s": "Letrozol (Inhibidor de aromatasa, 1.ª línea) o Citrato de Clomifeno + Optimización de peso y Metformina",
          "type": "crit"
        }
      }
    ],
    "contexto": "El Síndrome de Ovario Poliquístico (SOP) o Síndrome de Stein-Leventhal es la endocrinopatía más prevalente en mujeres en edad reproductiva (afecta al 8-13% de la población femenina) y la principal causa de anovulación crónica e infertilidad anovulatoria. Se caracteriza por un desbalance neuroendocrino y metabólico donde la resistencia a la insulina y la hiperinsulinemia compensatoria estimulan la síntesis de andrógenos ováricos por las células de la teca y suprimen la proteína transportadora SHBG, disparando la testosterona libre. En el EUNACOM se evalúa con rigor el diagnóstico mediante los Criterios de Rotterdam, el descarte de diagnósticos diferenciales (hiperplasia suprarrenal no clásica) y la elección terapéutica según el deseo de fertilidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Resistencia a la Insulina en SOP",
        "paragraphs": [
          "• <strong>Pilar Neuroendocrino:</strong> Aumento de la frecuencia de los pulsos de GnRH hipotalámica, lo que favorece la síntesis preferencial de <strong>LH por sobre FSH</strong> (relación LH/FSH > 2:1 clásica). La LH estimula excesivamente a las células de la teca ovárica para sintetizar andrógenos (androstenediona y testosterona). El relativo déficit de FSH impide la aromatización completa a estrógenos, produciendo detención del desarrollo folicular en etapa antral y anovulación crónica.",
          "• <strong>Pilar Metabólico (Resistencia a la Insulina e Hiperinsulinemia):</strong> Presente en el 70-80% de las pacientes con SOP (incluso en mujeres no obesas). La hiperinsulinemia actúa sinérgicamente con la LH sobre el ovario para aumentar la producción androgénica, y en el hígado <strong>inhibe la síntesis de SHBG (globulina transportadora de hormonas sexuales)</strong>, lo que dispara drásticamente la fracción de <strong>Testosterona Libre</strong> biológicamente activa.",
          "• <strong>Riesgos Oncológicos a Largo Plazo:</strong> La anovulación crónica genera un estado de <strong>estímulo estrogénico continuo sin oposición de progesterona</strong> (por ausencia de cuerpo lúteo), lo que condiciona un riesgo 3 a 4 veces mayor de desarrollar <strong>Hiperplasia Endometrial y Adenocarcinoma de Endometrio</strong>."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos de Rotterdam (Consenso Internacional)",
        "paragraphs": [
          "• Se requiere la presencia de al menos <strong>DOS de los siguientes TRES criterios</strong>, tras la exclusión obligatoria de otras patologías (hiperprolactinemia, disfunción tiroidea, hiperplasia suprarrenal congénita no clásica y tumores secretores):",
          "  - <strong>1) Oligo-ovulación o Anovulación:</strong> Ciclos menstruales infrecuentes (oligomenorrea con intervalos > 35 días o < 8 ciclos al año) o amenorrea.",
          "  - <strong>2) Signos Clínicos y/o Bioquímicos de Hiperandrogenismo:</strong>",
          "    • Clínico: <strong>Hirsutismo</strong> evaluado mediante Escala de Ferriman-Gallwey (puntaje ≥ 8 en población latina/caucásica), acné vulgar severo/refractario o alopecia androgénica.",
          "    • Bioquímico: Elevación de la testosterona total, testosterona libre o índice de andrógenos libres.",
          "  - <strong>3) Morfología de Ovario Poliquístico en Ecografía Transvaginal:</strong> Presencia de <strong>≥ 20 folículos</strong> (de 2 a 9 mm de diámetro distribuidos en la periferia en 'collar de perlas') o un <strong>volumen ovárico aumentado > 10 mL</strong> en al menos uno de los ovarios (sin quistes dominantes ni cuerpo lúteo).",
          "• <strong>Descarte de Diagnósticos Diferenciales (Pregunta EUNACOM):</strong>",
          "  - Solicitar <strong>17-hidroxiprogesterona (17-OHP) matinal</strong>: si es > 2 ng/mL (o > 200 ng/dL), sospechar <strong>Hiperplasia Suprarrenal Congénita No Clásica</strong> (déficit de 21-hidroxilasa).",
          "  - Solicitar TSH (hipotiroidismo) y Prolactina (prolactinoma)."
        ]
      },
      {
        "subhead": "3. Manejo Terapéutico Integral según Deseo Reproductivo",
        "paragraphs": [
          "• <strong>1. Medidas Generales y Estilo de Vida (Pilar Universal de Primera Línea):</strong> Dieta hipocalórica, ejercicio aeróbico regular y reducción del 5 al 10% del peso corporal. Esta sola intervención disminuye la resistencia a la insulina, reduce los andrógenos libres y restablece la ovulación espontánea en más del 50% de las pacientes.",
          "• <strong>2. Paciente que NO DESEA Embarazo:</strong>",
          "  - <strong>Anticonceptivos Orales Combinados (ACOs):</strong> Tratamiento de elección. Mecanismo: suprimen la LH hipofisaria (frenan la síntesis androgénica ovárica), estimulan la SHBG hepática por su componente estrogénico (reducen la testosterona libre) y protegen al endometrio con el progestágeno regular. Se prefieren ACOs con progestágenos antiandrogénicos: <strong>Acetato de Ciproterona, Dienogest o Drospirenona</strong>.",
          "  - <strong>Espironolactona (50 a 100 mg/d):</strong> Antagonista del receptor de andrógenos, útil como coadyuvante en hirsutismo severo si persiste tras 6 meses de ACOs.",
          "  - <strong>Metformina (850 a 1.500 mg/d):</strong> Indicada ante intolerancia a la glucosa, diabetes gestacional previa o resistencia a la insulina comprobada.",
          "• <strong>3. Paciente que SÍ DESEA Embarazo (Infertilidad Anovulatoria):</strong>",
          "  - Fármaco inductor de ovulación de primera línea actual: <strong>LETROZOL</strong> (Inhibidor de la aromatasa; 2.5 a 5 mg/día en días 3 a 7 del ciclo). Mayor tasa de ovulación, embarazo y nacidos vivos en SOP comparado con el Citrato de Clomifeno.",
          "  - Alternativa clásica: <strong>Citrato de Clomifeno</strong> (modulador selectivo de receptores estrogénicos que aumenta la FSH hipofisaria)."
        ]
      }
    ],
    "table": {
      "title": "Criterios de Rotterdam para el Diagnóstico del Síndrome de Ovario Poliquístico",
      "headers": [
        "Criterio Diagnóstico",
        "Definición Operativa EUNACOM",
        "Método de Evaluación"
      ],
      "rows": [
        [
          "1. Disfunción Ovulatoria",
          "Oligomenorrea (ciclos > 35 días) o Amenorrea (ausencia > 3 meses)",
          "Anamnesis ginecológica y calendario menstrual"
        ],
        [
          "2. Hiperandrogenismo",
          "Hirsutismo clínico, acné severo, alopecia o testosterona elevada",
          "Score de Ferriman-Gallwey ≥ 8 / Testosterona libre"
        ],
        [
          "3. Ovario Poliquístico",
          "≥ 20 folículos (2-9 mm) por ovario o volumen ovárico > 10 mL",
          "Ecografía transvaginal ginecológica (fase folicular)"
        ],
        [
          "Exclusión Obligatoria",
          "Descartar hiperplasia suprarrenal no clásica, hipotiroidismo, hiperprolactinemia",
          "17-OH Progesterona, TSH, Prolactina séricas"
        ]
      ]
    },
    "vignette": "Mujer de 24 años, con sobrepeso (IMC 28.5 kg/m²), consulta por acné facial persistente y reglas irregulares que se presentan cada 45 a 60 días desde la menarquia. Al examen físico: presencia de vello grueso terminal en bozo, mentón, línea alba y cara interna de muslos, con un puntaje de Ferriman-Gallwey de 12 puntos. En el cuello se observa una placa hiperpigmentada aterciopelada compatible con acantosis nigricans. La paciente refiere no estar buscando embarazo y solicita tratamiento para regularizar sus reglas y mejorar su piel.",
    "explicacion": "La paciente presenta la tríada clásica del Síndrome de Ovario Poliquístico: disfunción ovulatoria (oligomenorrea), hiperandrogenismo clínico (hirsutismo severo con Ferriman-Gallwey de 12 y acné) y estigmas marcados de resistencia a la insulina (acantosis nigricans e IMC aumentado), cumpliendo con los Criterios de Rotterdam. Dado que la paciente no desea fertilidad inmediata, el tratamiento médico de elección consiste en cambios terapéuticos del estilo de vida (dieta y ejercicio) combinados con Anticonceptivos Orales Combinados (ACOs) con progestágeno de perfil antiandrogénico (como Dienogest, Drospirenona o Acetato de Ciproterona) para suprimir los andrógenos ováricos, regularizar las menstruaciones y otorgar protección endometrial indispensable frente al riesgo de hiperplasia o cáncer de endometrio.",
    "keyPoints": [
      "Criterios de Rotterdam (se requieren 2 de 3): Oligo/anovulación + Hiperandrogenismo + Ecografía ovárica característica.",
      "Criterio ecográfico actual: ≥ 20 folículos de 2-9 mm en al menos un ovario o volumen ovárico > 10 mL.",
      "Descarte obligatorio de hiperplasia suprarrenal no clásica: Medir 17-OH Progesterona matinal.",
      "Fisiopatología central: Hiperinsulinemia suprime la SHBG hepática, aumentando la testosterona libre.",
      "Riesgo oncológico principal del SOP no tratado: Hiperplasia y Cáncer de Endometrio por estrógenos sin oposición.",
      "Tratamiento de elección si no desea embarazo: Estilo de vida + ACOs con progestágeno antiandrogénico.",
      "Tratamiento de elección si desea fertilidad: Letrozol (inhibidor de aromatasa) como inductor de ovulación."
    ],
    "questions": [
      {
        "stem": "Una mujer de 22 años consulta por ciclos menstruales que se presentan cada 50 a 70 días, asociados a aumento de vello facial en mentón y patillas. En la ecografía ginecológica transvaginal se aprecian ambos ovarios con 24 microfolículos periféricos de 3 a 7 mm y un volumen ovárico de 13 mL cada uno. La paciente no desea embarazo en este momento. Además de recomendar cambios en el estilo de vida y baja de peso, ¿cuál es el tratamiento farmacológico de primera línea más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Inducción de ovulación con Citrato de Clomifeno"
          },
          {
            "id": "B",
            "text": "Anticonceptivos orales combinados con progestágeno antiandrogénico (ej. Etinilestradiol con Dienogest o Ciproterona)"
          },
          {
            "id": "C",
            "text": "Dexametasona oral a altas dosis de por vida"
          },
          {
            "id": "D",
            "text": "Resección ovárica en cuña por laparoscopía"
          },
          {
            "id": "E",
            "text": "Danazol oral continuo"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El clomifeno se utiliza para inducir ovulación en mujeres que desean embarazarse activamente.\nB) Correcta. La paciente cumple con los tres criterios de Rotterdam para SOP (oligomenorrea, hiperandrogenismo clínico y morfología ovárica ecográfica policística). En mujeres que no buscan fertilidad, la primera línea farmacológica según las guías internacionales y del MINSAL son los Anticonceptivos Orales Combinados (ACOs) con progestágeno antiandrogénico (Dienogest, Drospirenona o Acetato de Ciproterona). Los ACOs reducen la secreción de LH, elevan la SHBG plasmática (disminuyendo la testosterona libre circulante, lo que mejora el acné y el hirsutismo) y regularizan las descamaciones endometriales, previniendo el desarrollo de hiperplasia endometrial.\nC) Incorrecta. Los corticoides no son el tratamiento del SOP.\nD) Incorrecta. La cirugía de resección ovárica está en desuso por riesgo de adherencias pelvianas e insuficiencia ovárica.\nE) Incorrecta. El danazol es androgénico y empeoraría el hirsutismo.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.002"
      },
      {
        "stem": "¿Cuál es la complicación neoplásica ginecológica a largo plazo cuya incidencia se encuentra significativamente aumentada en mujeres jóvenes con Síndrome de Ovario Poliquístico y anovulación crónica que no reciben tratamiento hormonal progestativo periódico?",
        "options": [
          {
            "id": "A",
            "text": "Cáncer de cuello uterino por virus del papiloma humano"
          },
          {
            "id": "B",
            "text": "Carcinoma de endometrio tipo I (endometrioide)"
          },
          {
            "id": "C",
            "text": "Cáncer epitelial seroso de ovario de alto grado"
          },
          {
            "id": "D",
            "text": "Coriocarcinoma gestacional persistente"
          },
          {
            "id": "E",
            "text": "Sarcoma del estroma endometrial"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El CCU depende de la infección persistente por VPH, no de la anovulación.\nB) Correcta. En el SOP, la anovulación crónica persistente provoca una ausencia prolongada de cuerpo lúteo y, por ende, de progesterona. Esto genera un ambiente hormonal caracterizado por la presencia continua de estrógenos libres que estimulan de forma ininterrumpida la proliferación celular del endometrio sin la acción maduradora y antiproliferativa de la progesterona ('estrógenos sin oposición'). Con los años, esta hiperproliferación conduce sucesivamente a hiperplasia endometrial simple, hiperplasia endometrial con atipias y finalmente a Adenocarcinoma de Endometrio de tipo I (endometrioide), con un riesgo de 3 a 5 veces superior al de mujeres ovuladoras.\nC) Incorrecta. El cáncer epitelial de ovario se relaciona con mayor número de ovulaciones incesantes (el SOP es anovulatorio).\nD) Incorrecta. Es un tumor trofoblástico postgestacional.\nE) Incorrecta. Neoplasia mesenquimatosa no vinculada al SOP.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.002"
      }
    ]
  },
  {
    "id": "gin-03",
    "classId": "gin-03",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Endocrinología Ginecológica, Ciclo Menstrual & SUA",
    "topicLabel": "20.3",
    "title": "Sangrado Uterino Anormal (SUA): Clasificación FIGO PALM-COEIN, Estudio con Biopsia Endometrial y Manejo",
    "perfilCode": "3.02.1.003",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Estudio ambulatorio y derivación según Guía de SUA MINSAL.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#47) · EUNACOM Julio 2023 (Q#24) · EUNACOM Julio 2022 (Q#21)",
    "frecuencia": "Máxima rentabilidad · Sistema PALM-COEIN, indicación estricta de biopsia endometrial en ≥ 45 años o postmenopausia",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico del Sangrado Uterino Anormal (PALM-COEIN)",
    "diagramRows": [
      {
        "t": "Mujer en Edad Reproductiva o Perimenopausia con Sangrado Uterino Anormal (SUA)",
        "s": "Descartar embarazo (β-hCG) + Especuloscopía para descartar sangrado cervical/vaginal",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Clasificación Etiológica FIGO (PALM-COEIN)",
        "al": "Estructurales (PALM) vs No Estructurales (COEIN)",
        "ll": "PALM (Causas Estructurales Anatómicas)",
        "left": {
          "t": "Pólipo · Adenomiosis · Leiomioma · Malignidad",
          "s": "Evaluables por imágenes e histología · Ecografía TV e histeroscopía · Resección o tratamiento quirúrgico",
          "type": "warn"
        },
        "rl": "COEIN (Causas No Estructurales Funcionales)",
        "right": {
          "t": "Coagulopatía · Ovulatoria · Endometrial · Iatrogénica",
          "s": "Manejo médico de 1.ª línea: DIU-Levonorgestrel, Ácido Tranexámico, ACOs combinados o Progestágenos",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "Criterios para Biopsia Endometrial (Pipelle)",
        "al": "¿Paciente ≥ 45 años o con Factores de Riesgo de Cáncer?",
        "ll": "SÍ: Edad ≥ 45 años, obesidad, SOP, tamoxifeno o SUA postmenopáusica",
        "left": {
          "t": "BIOPSIA ENDOMETRIAL OBLIGATORIA",
          "s": "Toma de muestra ambulatoria con cánula de Pipelle · Descartar hiperplasia con atipias o adenocarcinoma",
          "type": "crit"
        },
        "rl": "NO: Joven < 45 años sin factores de riesgo y ecografía normal",
        "right": {
          "t": "Tratamiento Médico y Seguimiento",
          "s": "Prueba terapéutica con DIU-Levonorgestrel o terapia hormonal combinada",
          "type": "acc"
        }
      }
    ],
    "contexto": "El Sangrado Uterino Anormal (SUA) es una de las causas más frecuentes de consulta ginecológica tanto en atención primaria como en urgencias. La Federación Internacional de Ginecología y Obstetricia (FIGO) estandarizó su etiología mediante la regla mnemotécnica PALM-COEIN, dividiéndolas en causas estructurales objetivables por imagen/anatomopatología (Pólipos, Adenomiosis, Leiomiomas, Malignidad e hiperplasia) y no estructurales (Coagulopatía, Disfunción Ovulatoria, Endometrial, Iatrogénica y No clasificada). Para el EUNACOM es mandatorio saber cuándo está indicada una biopsia endometrial ambulatoria (cánula de Pipelle) para descartar cáncer de endometrio: toda mujer ≥ 45 años con SUA, cualquier mujer con sangrado en la postmenopausia o menores de 45 años con factores de riesgo.",
    "contentSections": [
      {
        "subhead": "1. Definiciones y Clasificación FIGO: Sistema PALM-COEIN",
        "paragraphs": [
          "• Se define SUA como cualquier alteración en la frecuencia, regularidad, duración o volumen del sangrado menstrual en una mujer no gestante.",
          "• <strong>Grupo PALM (Causas Estructurales Anatómicas):</strong>",
          "  - <strong>P (Pólipo endometrial):</strong> Proliferación hiperplásica focal benigna de glándulas y estroma endometrial. Es la causa estructural más frecuente de sangrado intermenstrual y metrorragia en perimenopausia. Diagnóstico: ecografía TV / histerosonografía. Tratamiento: polipectomía histeroscópica.",
          "  - <strong>A (Adenomiosis):</strong> Presencia de glándulas y estroma endometrial en el espesor del miometrio, con hipertrofia muscular concéntrica reactiva. Cursa con hipermenorrea y dismenorrea secundaria severa, con útero globuloso y doloroso.",
          "  - <strong>L (Leiomioma / Miomatosis):</strong> Tumores benignos de músculo liso miometrial. Los que más sangran son los <strong>submucosos (FIGO 0, 1 y 2)</strong> al distorsionar la cavidad endometrial.",
          "  - <strong>M (Malignidad e Hiperplasia):</strong> Hiperplasia endometrial con atipias y adenocarcinoma de endometrio. Es la causa que SIEMPRE debe descartarse en mujeres mayores.",
          "• <strong>Grupo COEIN (Causas No Estructurales Funcionales):</strong>",
          "  - <strong>C (Coagulopatía):</strong> Trastornos de la hemostasia. La <strong>Enfermedad de von Willebrand</strong> es la causa más común en adolescentes con hipermenorrea severa desde la menarquia (hasta el 20% de los casos).",
          "  - <strong>O (Disfunción Ovulatoria):</strong> Anovulación crónica (típica de extremos de la vida reproductiva y de pacientes con SOP o disfunción tiroidea).",
          "  - <strong>E (Endometrial):</strong> Disfunción primaria en la producción local de prostaglandinas vasoconstrictoras y hemostasia endometrial en ciclos ovulatorios regulares.",
          "  - <strong>I (Iatrogénica):</strong> Uso de DIU de cobre, implantes de progestágeno, anticonceptivos, anticoagulantes o psicofármacos.",
          "  - <strong>N (No clasificada):</strong> Malformaciones arteriovenosas uterinas, etc."
        ]
      },
      {
        "subhead": "2. Indicaciones Mandatorias de Biopsia Endometrial",
        "paragraphs": [
          "• El objetivo primordial del estudio en SUA es descartar patología preneoplásica (hiperplasia endometrial con atipias) y neoplásica (adenocarcinoma de endometrio).",
          "• <strong>Criterios Oficiales de Indicación de Biopsia de Endometrio (ACOG / MINSAL):</strong>",
          "  - <strong>1) Toda mujer de 45 años o más que consulte por SUA.</strong>",
          "  - <strong>2) Toda mujer con Sangrado Uterino en la Postmenopausia</strong> (cualquier sangrado ocurrido tras más de 12 meses de amenorrea en la menopausia, especialmente si el grosor endometrial ecográfico es <strong>> 4 a 5 mm</strong>).",
          "  - <strong>3) Pacientes menores de 45 años con Factores de Riesgo para Cáncer de Endometrio:</strong> Obesidad (IMC ≥ 30 kg/m²), anovulación crónica prolongada (SOP), nuliparidad, uso de Tamoxifeno, diabetes mellitus o antecedente familiar de Síndrome de Lynch (cáncer colorrectal hereditario no polipósico).",
          "  - <strong>4) Falla o persistencia del sangrado</strong> tras tratamiento médico farmacológico de primera línea.",
          "• <strong>Método de Elección:</strong> <strong>Biopsia por aspiración con cánula de Pipelle</strong> en box ambulatorio (sensibilidad > 95% para adenocarcinoma). Si la muestra es insuficiente, el canal cervical está estenótico o persisten dudas: <strong>Histeroscopía con biopsia dirigida</strong>."
        ]
      },
      {
        "subhead": "3. Manejo Terapéutico del Sangrado Uterino Anormal",
        "paragraphs": [
          "• <strong>Manejo de la Hemorragia Uterina Aguda Severa (Urgencia):</strong>",
          "  - Estabilización hemodinámica con fluidos.",
          "  - Fármaco de 1.ª línea: <strong>Estrógenos conjugados equinos EV (25 mg c/4-6h)</strong> o anticonceptivos orales combinados en altas dosis escalonadas (ej. 1 comprimido cada 8 horas hasta el cese, luego reducir progresivamente) + <strong>Ácido Tranexámico 1g EV cada 8 horas</strong>.",
          "  - Si la hemorragia es incontrolable o hay inestabilidad: <strong>Legrado Uterino Instrumental hemostático de urgencia</strong> o taponamiento con sonda Foley intrauterina.",
          "• <strong>Manejo Médico Crónico de Causas No Estructurales (COEIN):</strong>",
          "  - <strong>Dispositivo Intrauterino liberador de Levonorgestrel (DIU-LNG / Mirena):</strong> <strong>ESTÁNDAR DE ORO</strong> médico de máxima eficacia. Reduce el sangrado en más de un 90% a los 6 meses y protege el endometrio.",
          "  - <strong>Ácido Tranexámico oral (1g cada 8h durante los días de menstruación):</strong> Antifibrinolítico no hormonal, reduce la pérdida sanguínea en 40-50%. Excelente opción en mujeres que desean embarazarse o con contraindicaciones hormonales.",
          "  - <strong>AINEs (Ácido Mefenámico, Ibuprofeno):</strong> Inhiben prostaglandinas inflamatorias vasodilatadoras endometriales, reduciendo el sangrado en 30% y aliviando la dismenorrea.",
          "  - <strong>Anticonceptivos Hormonales Combinados o Progestágenos orales continuos.</strong>"
        ]
      }
    ],
    "table": {
      "title": "Clasificación FIGO PALM-COEIN de las Causas de Sangrado Uterino Anormal",
      "headers": [
        "Categoría",
        "Etiología",
        "Naturaleza",
        "Diagnóstico de Elección",
        "Tratamiento Habitual"
      ],
      "rows": [
        [
          "P",
          "Pólipos Endometriales",
          "Estructural",
          "Ecografía TV / Histerosonografía",
          "Polipectomía por histeroscopía"
        ],
        [
          "A",
          "Adenomiosis",
          "Estructural",
          "RMN pélvica / Eco TV Doppler",
          "DIU-LNG / AINEs / Histerectomía"
        ],
        [
          "L",
          "Leiomiomas (Miomas)",
          "Estructural",
          "Ecografía TV (mapeo FIGO)",
          "Miomectomía / DIU-LNG / Embolización"
        ],
        [
          "M",
          "Malignidad e Hiperplasia",
          "Estructural",
          "Biopsia Pipelle / Histeroscopía",
          "Oncológico: Cirugía etapificadora"
        ],
        [
          "C",
          "Coagulopatías",
          "No estructural",
          "Estudio hemostasia (vWF, plaquetas)",
          "Ácido tranexámico / Desmopresina"
        ],
        [
          "O",
          "Disfunción Ovulatoria",
          "No estructural",
          "Historia clínica (anovulación, SOP)",
          "Progestágenos / ACOs combinados"
        ],
        [
          "E",
          "Causas Endometriales",
          "No estructural",
          "Diagnóstico de exclusión",
          "DIU-LNG / Ácido tranexámico / AINEs"
        ],
        [
          "I",
          "Causas Iatrogénicas",
          "No estructural",
          "Fármacos (anticoagulantes, DIU-Cu)",
          "Retiro o cambio de método"
        ],
        [
          "N",
          "No Clasificadas",
          "No estructural",
          "Malformaciones arteriovenosas",
          "Angiografía / Embolización"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios de Biopsia Endometrial Obligatoria en Sangrado Uterino Anormal",
      "headers": [
        "Grupo de Población",
        "Criterio Clínico Mandatorio",
        "Razón Oncológica Fundamental"
      ],
      "rows": [
        [
          "Mujeres ≥ 45 años",
          "Cualquier SUA (hipermenorrea, sangrado intermenstrual o sangrado frecuente)",
          "Pico de incidencia de hiperplasia con atipias y cáncer de endometrio perimenopáusico."
        ],
        [
          "Mujeres Postmenopáusicas",
          "Cualquier metrorragia tras > 12 meses de amenorrea (especialmente si endometrio > 4 mm)",
          "El 10-15% de las metrorragias postmenopáusicas corresponden a cáncer de endometrio."
        ],
        [
          "Mujeres < 45 años con Riesgo",
          "Obesidad (IMC ≥ 30), anovulación crónica por SOP, uso de tamoxifeno o Síndrome de Lynch",
          "Exposición continua a estrógenos no balanceados que induce mutaciones carcinogénicas."
        ],
        [
          "Falla de Terapia Médica",
          "Persistencia de hipermenorrea tras 3-6 meses de tratamiento médico adecuado",
          "Descartar lesiones endometriales focales no visualizadas previamente."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Arsenal Terapéutico en Sangrado Uterino Anormal No Estructural (MINSAL)",
      "headers": [
        "Estrategia Terapéutica",
        "Fármaco y Dosis",
        "Eficacia Reducción Sangrado",
        "Ventajas y Consideraciones"
      ],
      "rows": [
        [
          "DIU-Levonorgestrel (Mirena)",
          "Dispositivo intrauterino (libera 20 mcg/día de LNG)",
          "85 - 95% a los 6 meses",
          "Estándar de oro médico. Anticonceptivo y protector endometrial por 5 a 8 años."
        ],
        [
          "Ácido Tranexámico",
          "1 g cada 8 horas vía oral durante los días de sangrado activo",
          "40 - 50%",
          "No hormonal; ideal si desea fertilidad futura o contraindicación de estrógenos."
        ],
        [
          "AINEs (Ácido Mefenámico)",
          "500 mg cada 8 horas durante la menstruación",
          "25 - 35%",
          "Alivia simultáneamente la dismenorrea asociada. Reduce síntesis de PGs endometriales."
        ],
        [
          "ACOs Combinados",
          "Formulaciones monofásicas con 30 mcg etinilestradiol",
          "50 - 60%",
          "Regulariza el ciclo, reduce sangrado y aporta anticoncepción."
        ],
        [
          "Estrógenos Conjugados EV",
          "25 mg EV cada 4 a 6 horas (máximo 24-48 horas)",
          "Control agudo de urgencia",
          "Estimula epitelización endotelial rápida en hemorragia masiva inestable."
        ]
      ]
    },
    "vignette": "Mujer de 48 años, multípara de 2, sin antecedentes mórbidos, consulta por cuadro de 6 meses de evolución caracterizado por menstruaciones abundantes con presencia de coágulos grandes, que duran entre 8 y 10 días, con intervalos irregulares de 21 a 40 días. Su último hemograma revela una hemoglobina de 9.2 g/dL y microcitosis. Al examen físico ginecológico: genitales externos normales, cuello uterino sano a la especuloscopía y útero de tamaño normal e indoloro. La ecografía transvaginal muestra un útero de 75 mm, miometrio homogéneo sin miomas y un grosor endometrial de 14 mm regular y homogéneo sin imágenes focales intrauterinas. La paciente pregunta cuál es el paso médico que corresponde realizar a continuación.",
    "explicacion": "Nos encontramos ante una paciente de 48 años que presenta un Sangrado Uterino Anormal (hipermenorrea y sangrado irregular) que le ha provocado anemia ferropénica. De acuerdo a las guías clínicas de la FIGO, ACOG y el consenso nacional del MINSAL, TODA paciente de 45 años o más que presente un sangrado uterino anormal tiene indicación estricta y mandatoria de una BIOPSIA ENDOMETRIAL (preferentemente mediante aspiración ambulatoria con cánula de Pipelle), con el fin primordial de descartar una hiperplasia endometrial con atipias o un adenocarcinoma de endometrio. Ningún tratamiento hormonal definitivo ni dispositivo intrauterino debe instalarse antes de tener confirmada la benignidad histológica del endometrio.",
    "keyPoints": [
      "Clasificación FIGO PALM-COEIN: PALM = Estructurales (Pólipo, Adenomiosis, Leiomioma, Malignidad).",
      "COEIN = No Estructurales (Coagulopatía, Ovulatoria, Endometrial, Iatrogénica, No clasificada).",
      "Causa más común de sangrado abundante severo en adolescentes: Coagulopatía (Enfermedad de von Willebrand).",
      "Biopsia endometrial ambulatoria (Pipelle): OBLIGATORIA en toda mujer ≥ 45 años con SUA.",
      "Toda paciente postmenopáusica con sangrado uterino DEBE recibir biopsia de endometrio (corte ecográfico > 4 mm).",
      "Mujeres < 45 años requieren biopsia si tienen factores de riesgo: Obesidad, SOP, tamoxifeno, Lynch.",
      "Tratamiento médico de máxima eficacia para SUA no estructural: DIU liberador de Levonorgestrel (Mirena).",
      "Ácido tranexámico oral: Antifibrinolítico no hormonal de elección si la paciente busca embarazo.",
      "Tratamiento de urgencia en hemorragia masiva: Estrógenos conjugados EV o legrado hemostático."
    ],
    "questions": [
      {
        "stem": "Una paciente de 47 años consulta por sangrado uterino anormal de 4 meses de evolución, con menstruaciones abundantes y sangrados intermenstruales ocasionales. Al examen físico no se palpan masas pelvianas y la especuloscopía muestra cuello uterino macroscópicamente sano. La ecografía transvaginal informa útero de dimensiones normales y endometrio de 12 mm de grosor sin miomas ni pólipos identificables. ¿Cuál es la conducta médica de primera línea más adecuada antes de iniciar cualquier terapia hormonal?",
        "options": [
          {
            "id": "A",
            "text": "Instalación inmediata de un DIU liberador de levonorgestrel sin estudios adicionales"
          },
          {
            "id": "B",
            "text": "Realización de una biopsia de endometrio ambulatoria con cánula de Pipelle"
          },
          {
            "id": "C",
            "text": "Histerectomía total abdominal profiláctica"
          },
          {
            "id": "D",
            "text": "Prescripción de ácido tranexámico oral y alta sin seguimiento"
          },
          {
            "id": "E",
            "text": "Observación durante 6 meses con calendario menstrual"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Instalar un DIU-LNG sin descartar previamente malignidad en una mujer de 47 años con endometrio engrosado puede retrasar catastróficamente el diagnóstico de un adenocarcinoma endometrial.\nB) Correcta. Según los consensos internacionales (FIGO, ACOG) y las directrices del MINSAL, toda mujer de 45 años o más que consulte por Sangrado Uterino Anormal tiene indicación mandatoria de Biopsia Endometrial (mediante cánula de Pipelle ambulatoria o histeroscopía) para descartar cáncer de endometrio o hiperplasia endometrial con atipias antes de definir o iniciar un tratamiento médico hormonal definitivo.\nC) Incorrecta. La histerectomía es desproporcionada y prematura sin un diagnóstico histopatológico previo.\nD) Incorrecta. El ácido tranexámico solo controla el síntoma pero no descarta malignidad.\nE) Incorrecta. Observar en una paciente perimenopáusica con sangrado abundante es negligencia médica.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.003"
      },
      {
        "stem": "Una adolescente de 14 años es traída a la urgencia por metrorragia abundante de 10 días de evolución desde su menarquia hace 4 meses, asociando astenia y palidez. No tiene antecedentes de actividad sexual. El hemograma muestra hemoglobina de 8.0 g/dL. En la anamnesis remota la madre refiere que la niña siempre ha presentado epistaxis frecuentes y equimosis fáciles ante traumatismos mínimos. ¿Cuál es la sospecha etiológica de causa no estructural (clasificación FIGO) más probable?",
        "options": [
          {
            "id": "A",
            "text": "Adenomiosis uterina difusa"
          },
          {
            "id": "B",
            "text": "Coagulopatía congénita (Enfermedad de von Willebrand)"
          },
          {
            "id": "C",
            "text": "Adenocarcinoma de células claras de endometrio"
          },
          {
            "id": "D",
            "text": "Pólipo endometrial gigante"
          },
          {
            "id": "E",
            "text": "Leiomioma submucoso pediculado"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La adenomiosis es excepcional en adolescentes y propia de multíparas sobre 35 años.\nB) Correcta. Dentro de la clasificación PALM-COEIN, la letra 'C' corresponde a Coagulopatías. La Enfermedad de von Willebrand es la coagulopatía hereditaria más común y se diagnostica en hasta un 20% de las adolescentes que ingresan hospitalizadas por hipermenorrea severa desde su menarquia, especialmente si se acompaña de historia de sangrado mucocutáneo (epistaxis, equimosis, gingivorragia). Debe solicitarse estudio de hemostasia completo (antígeno de vWF, actividad de cofactor de ristocetina y factor VIII).\nC) Incorrecta. El cáncer endometrial es extraordinariamente infrecuente a los 14 años.\nD) Incorrecta. Los pólipos son causas estructurales raras en la adolescencia.\nE) Incorrecta. Los miomas son típicos de mujeres en la 4.ª y 5.ª década de la vida.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.003"
      },
      {
        "stem": "¿Cuál de los siguientes métodos terapéuticos médicos ha demostrado la mayor tasa de reducción del volumen de sangrado menstrual (superior al 90% a los 6 meses) y constituye el tratamiento médico de elección para el sangrado uterino anormal de causa endometrial o disovulatoria?",
        "options": [
          {
            "id": "A",
            "text": "Ácido acetilsalicílico oral en dosis bajas"
          },
          {
            "id": "B",
            "text": "Dispositivo intrauterino liberador de Levonorgestrel (DIU-LNG)"
          },
          {
            "id": "C",
            "text": "Dispositivo intrauterino de Cobre (T de Cobre)"
          },
          {
            "id": "D",
            "text": "Anticonceptivos orales de solo progestágeno en dosis intermitentes"
          },
          {
            "id": "E",
            "text": "Vitamina K intramuscular semanal"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La aspirina es un antiagregante plaquetario que aumenta el sangrado.\nB) Correcta. El Dispositivo Intrauterino liberador de Levonorgestrel (DIU-LNG / Mirena) es el tratamiento farmacológico no quirúrgico más eficaz disponible en la medicina actual para el SUA no estructural. Al liberar diariamente levonorgestrel directamente en la cavidad uterina, produce una intensa decidualización del estroma y una atrofia endometrial marcada y reversible, reduciendo la pérdida sanguínea menstrual en más de un 90% a los 6 meses, superando con creces a cualquier terapia oral y evitando histerectomías en un alto porcentaje de pacientes.\nC) Incorrecta. El DIU de cobre tiene como efecto secundario común el AUMENTO del sangrado menstrual y la dismenorrea.\nD) Incorrecta. Los progestágenos orales continuos son eficaces pero inferiores al DIU-LNG en adherencia y reducción neta.\nE) Incorrecta. La vitamina K solo es útil en coagulopatías por déficit de factores dependientes o sobredosis de cumarínicos.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.003"
      },
      {
        "stem": "Una paciente de 56 años, menopáusica desde hace 5 años sin terapia de reemplazo hormonal, consulta por un episodio de sangrado vaginal rojo oscuro de 3 días de evolución. La especuloscopía descarta lesiones en cérvix y vagina. La ecografía transvaginal revela un endometrio engrosado de 9 mm, heterogéneo. ¿Cuál es el diagnóstico diferencial prioritario que debe descartarse y la conducta obligatoria?",
        "options": [
          {
            "id": "A",
            "text": "Descartar Cáncer de Endometrio mediante Biopsia Endometrial (Pipelle o histeroscópica)"
          },
          {
            "id": "B",
            "text": "Tratar como vaginitis atrófica con óvulos de estriol sin necesidad de biopsia"
          },
          {
            "id": "C",
            "text": "Indicar progestágenos orales por 10 días y reevaluar ecográficamente en 1 año"
          },
          {
            "id": "D",
            "text": "Indicar reposo en cama y control en APS si no repite el sangrado"
          },
          {
            "id": "E",
            "text": "Realizar laparoscopía exploradora de urgencia para ooforectomía bilateral"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El sangrado uterino en una mujer postmenopáusica es un síntoma de alarma neoplásico hasta que se demuestre lo contrario. Aunque la atrofia endometrial es la causa más frecuente en número de casos, el Cáncer de Endometrio es la causa maligna subyacente en el 10 al 15% de las pacientes. Un grosor endometrial ecográfico ≥ 4 a 5 mm en una postmenopáusica exige de forma mandatoria la toma de una Biopsia Endometrial para estudio histopatológico definitivo.\nB) Incorrecta. Aunque la vaginitis atrófica es frecuente, un endometrio de 9 mm (> 4-5 mm) prohíbe atribuir el sangrado a atrofia sin biopsia.\nC) Incorrecta. Administrar hormonas a ciegas sobre un eventual adenocarcinoma retrasa el tratamiento curativo.\nD) Incorrecta. Conducta negligente ante metrorragia de la postmenopausia.\nE) Incorrecta. La cirugía de ovario no diagnostica el sangrado uterino.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.003"
      }
    ]
  },
  {
    "id": "gin-04",
    "classId": "gin-04",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Endocrinología Ginecológica, Ciclo Menstrual & SUA",
    "topicLabel": "20.4",
    "title": "Patología Benigna Uterina: Miomatosis Uterina (FIGO 0-8) y Adenomiosis",
    "perfilCode": "3.02.1.004",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cobertura en red de ginecología general y quirúrgica.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#48) · EUNACOM Julio 2023 (Q#25) · EUNACOM Julio 2021 (Q#18)",
    "frecuencia": "Alta rentabilidad · Miomas submucosos como causa de sangrado, clasificación FIGO y miomectomía vs histerectomía",
    "svg": null,
    "algoTitle": "Algoritmo Terapéutico de la Miomatosis Uterina según Síntomas y Deseo de Fertilidad",
    "diagramRows": [
      {
        "t": "Diagnóstico de Miomatosis Uterina por Ecografía Transvaginal",
        "s": "Evaluar: ¿Asintomático vs Sintomático (Hipermenorrea, Anemia, Dolor Pélvico o Compresión)?",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Presencia de Síntomas Clínicos",
        "al": "Asintomática vs Sintomática",
        "ll": "Asintomática (Hallazgo casual)",
        "left": {
          "t": "Conducta Expectante",
          "s": "Control ginecológico y ecográfico anual · No requiere cirugía ni fármacos",
          "type": "acc"
        },
        "rl": "Sintomática (Sangrado abundante / Compresión)",
        "right": {
          "t": "Evaluar Clasificación FIGO y Fertilidad",
          "s": "Submucosos (FIGO 0, 1, 2) causan hipermenorrea · Intramurales (3, 4, 5) · Subserosos (6, 7) causan compresión",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Deseo de Fertilidad Futura",
        "al": "¿Desea Preservar el Útero y la Fertilidad?",
        "ll": "SÍ desea fertilidad",
        "left": {
          "t": "Tratamiento Quirúrgico Conservador: MIOMECTOMÍA",
          "s": "Miomectomía histeroscópica (submucosos FIGO 0-1) o Miomectomía laparoscópica/laparotómica (intramurales)",
          "type": "acc"
        },
        "rl": "NO desea fertilidad (Paridad satisfecha)",
        "right": {
          "t": "HISTERECTOMÍA (o DIU-LNG / Embolización)",
          "s": "Histerectomía total (vía laparoscópica o vaginal) como tratamiento curativo definitivo",
          "type": "crit"
        }
      }
    ],
    "contexto": "Los Leiomiomas Uterinos (o fibromiomas) son los tumores benignos sólidos más comunes del aparato genital femenino, presentes en más del 50-70% de las mujeres a los 50 años. Se originan a partir de la proliferación clonal de células del músculo liso miometrial y su crecimiento es estrógeno y progesterona dependiente. La clasificación FIGO (grados 0 al 8) divide a los miomas según su relación con la cavidad endometrial y la serosa: los miomas submucosos (grados 0, 1 y 2) son los principales responsables de la hipermenorrea y la infertilidad por distorsión endometrial. Por su parte, la Adenomiosis es la presencia ectópica de glándulas endometriales en el miometrio, causando útero doloroso aumentado de tamaño y dismenorrea severa.",
    "contentSections": [
      {
        "subhead": "1. Clasificación Anatómica de los Miomas (Sistema FIGO)",
        "paragraphs": [
          "• <strong>Submucosos (en contacto con la cavidad endometrial):</strong> Son los más sintomáticos y los que provocan <strong>mayor sangrado (hipermenorrea abundante) e infertilidad</strong>:",
          "  - <strong>FIGO 0:</strong> Totalmente intracavitario, pediculado.",
          "  - <strong>FIGO 1:</strong> Intracavitario con componente intramural < 50%.",
          "  - <strong>FIGO 2:</strong> Intracavitario con componente intramural ≥ 50%.",
          "• <strong>Intramurales (dentro del espesor miometrial):</strong>",
          "  - <strong>FIGO 3:</strong> 100% intramural pero en contacto con el endometrio.",
          "  - <strong>FIGO 4:</strong> 100% intramural sin contacto con endometrio ni serosa.",
          "  - <strong>FIGO 5:</strong> Intramural con componente subseroso < 50%.",
          "• <strong>Subserosos (hacia la cavidad peritoneal):</strong> Producen síntomas compresivos (polaquiuria, constipación) pero <strong>habitualmente NO producen sangrado uterino aumentado</strong>:",
          "  - <strong>FIGO 6:</strong> Subseroso con componente intramural < 50%.",
          "  - <strong>FIGO 7:</strong> Subseroso pediculado.",
          "• <strong>FIGO 8:</strong> Otros (cervicales, parasitarios del ligamento ancho)."
        ]
      },
      {
        "subhead": "2. Manifestaciones Clínicas y Degeneraciones de los Miomas",
        "paragraphs": [
          "• <strong>Clínica:</strong> La gran mayoría (> 50-60%) son <strong>completamente asintomáticos</strong>. En sintomáticos:",
          "  - <strong>Hemorragia Uterina Anormal:</strong> Síntoma más frecuente (hipermenorrea / sangrado menstrual abundante y prolongado con coágulos, llevando a anemia ferropénica).",
          "  - <strong>Síntomas Compresivos y Dolor Pélvico:</strong> Sensación de peso hipogástrico, tenesmo vesical o polaquiuria por compresión de vejiga, hidronefrosis por compresión ureteral y constipación por compresión rectal.",
          "• <strong>Degeneraciones Típicas:</strong>",
          "  - <strong>Degeneración Hialina:</strong> La más frecuente (60%). Sustitución por tejido conjuntivo acelular.",
          "  - <strong>Degeneración Roja (Necrobiosis aséptica):</strong> Complicación típica durante el <strong>segundo o tercer trimestre del EMBARAZO</strong> por rápido crecimiento que supera el aporte vascular, provocando infarto hemorrágico miomatoso con dolor abdominal agudo severo, fiebre moderada y leucocitosis (tratamiento conservador con analgesia e hidratación; ¡NO se opera durante el embarazo!).",
          "  - <strong>Degeneración Quística y Calcificada:</strong> Frecuente en la postmenopausia.",
          "  - <strong>Degeneración Sarcomatosa (Leiomiosarcoma):</strong> Extraordinariamente rara (< 0.5%). Sospechar ante un mioma que crece rápidamente en una mujer postmenopáusica."
        ]
      },
      {
        "subhead": "3. Manejo Farmacológico y Quirúrgico de la Miomatosis",
        "paragraphs": [
          "• <strong>Miomas Asintomáticos:</strong> <strong>CONDUCTA EXPECTANTE</strong>. No requieren tratamiento médico ni quirúrgico; solo controles periódicos.",
          "• <strong>Manejo Médico Farmacológico:</strong>",
          "  - Sintomático de sangrado: <strong>DIU liberador de Levonorgestrel (DIU-LNG)</strong> (reduce sangrado en miomas intramurales que no distorsionan la cavidad); Ácido Tranexámico y AINEs.",
          "  - <strong>Análogos de GnRH (Leuprolide):</strong> Producen hipoestrogenismo profundo con reducción del 30-50% del volumen del mioma. Indicados exclusivamente como <strong>terapia preoperatoria por 3 a 6 meses</strong> para corregir anemia severa y reducir el tamaño antes de la cirugía.",
          "• <strong>Manejo Quirúrgico (Indicado ante hipermenorrea refractaria con anemia, compresión de órganos vecinos o miomas submucosos que causan infertilidad):</strong>",
          "  - <strong>Miomectomía Histeroscópica:</strong> De elección para miomas <strong>submucosos FIGO 0 y 1</strong> (y algunos FIGO 2 seleccionados) menores de 4-5 cm.",
          "  - <strong>Miomectomía Laparoscópica o por Laparotomía:</strong> Extirpación exclusiva de los miomas conservando el útero. De elección en <strong>mujeres que desean preservar la fertilidad</strong>.",
          "  - <strong>Histerectomía Total:</strong> Extirpación del útero (laparoscópica, abdominal o vaginal). Es el <strong>tratamiento curativo y definitivo de elección en mujeres con paridad satisfecha</strong>.",
          "  - <strong>Embolización de Arterias Uterinas (EAU):</strong> Opción no quirúrgica mediante cateterismo femoral para ocluir las arterias uterinas, produciendo necrosis isquémica de los miomas."
        ]
      }
    ],
    "table": {
      "title": "Clasificación FIGO de los Leiomiomas Uterinos según su Localización",
      "headers": [
        "Clasificación FIGO",
        "Localización Anatómica",
        "Manifestación Clínica Principal",
        "Abordaje Quirúrgico Preferente"
      ],
      "rows": [
        [
          "FIGO 0",
          "Submucoso pediculado 100% intracavitario",
          "Hipermenorrea severa, sangrado intermenstrual",
          "Miomectomía Histeroscópica"
        ],
        [
          "FIGO 1",
          "Submucoso con extensión intramural < 50%",
          "Hipermenorrea, anemia ferropénica",
          "Miomectomía Histeroscópica"
        ],
        [
          "FIGO 2",
          "Submucoso con extensión intramural ≥ 50%",
          "Hipermenorrea, dismenorrea",
          "Miomectomía Histeroscópica / Laparoscópica"
        ],
        [
          "FIGO 3",
          "100% Intramural en contacto con endometrio",
          "Hipermenorrea moderada",
          "Miomectomía Laparoscópica / Histerectomía"
        ],
        [
          "FIGO 4",
          "100% Intramural puro sin contacto seroso/mucoso",
          "Asintomático o hipermenorrea",
          "Manejo médico / Miomectomía"
        ],
        [
          "FIGO 5",
          "Subseroso con extensión intramural ≥ 50%",
          "Síntomas compresivos leves",
          "Laparoscopía si sintomático"
        ],
        [
          "FIGO 6",
          "Subseroso con extensión intramural < 50%",
          "Compresión vesical / rectal",
          "Miomectomía Laparoscópica"
        ],
        [
          "FIGO 7",
          "Subseroso pediculado peritoneal",
          "Masa palpable, riesgo de torsión aguda",
          "Miomectomía Laparoscópica"
        ]
      ]
    },
    "vignette": "Paciente de 38 años, multípara de 2 con paridad cumplida, consulta por menstruaciones extremadamente abundantes con coágulos gigantes de 8 días de duración desde hace 1 año, asociando astenia progresiva. Su hemoglobina actual es de 8.8 g/dL. Al examen físico se palpa un útero aumentado de tamaño equivalente a 12 semanas de gestación, de superficie nodular e indoloro. La ecografía transvaginal revela un útero con tres miomas intramurales de 4, 5 y 6 cm de diámetro que no contactan con la cavidad endometrial. El legrado biopsia endometrial ambulatorio resultó proliferativo benigno sin atipias. La paciente refiere haber completado su deseo de tener hijos y solicita una solución definitiva que resuelva su sangrado y anemia.",
    "explicacion": "Nos encontramos ante una paciente con Miomatosis Uterina Sintomática (hipermenorrea severa con anemia ferropénica secundaria y útero aumentado de tamaño a 12 semanas). Al tratarse de una mujer con paridad cumplida que no desea fertilidad futura, con confirmación de benignidad endometrial previa y fracaso o desestimación del manejo médico, el tratamiento curativo definitivo de elección es la Histerectomía Total (preferentemente por vía laparoscópica o abdominal según experiencia quirúrgica). Si la paciente hubiera manifestado deseo de conservar el útero o tener más hijos, la alternativa conservadora de elección habría sido una miomectomía o la colocación de un DIU-Levonorgestrel.",
    "keyPoints": [
      "Los miomas son los tumores benignos sólidos más comunes del aparato genital femenino.",
      "Miomas submucosos (FIGO 0, 1 y 2): Son los que más sangran y causan infertilidad.",
      "Miomas subserosos (FIGO 6 y 7): Provocan síntomas compresivos (vejiga/recto) sin aumentar el sangrado.",
      "Miomas asintomáticos: Conducta expectante y control anual (NO se operan de rutina).",
      "Degeneración roja: Infarto aséptico doloroso típico del embarazo; manejo médico analgésico.",
      "Tratamiento de mioma submucoso FIGO 0-1 sintomático: Miomectomía histeroscópica ambulatoria.",
      "Mujer que desea preservar fertilidad: Miomectomía conservadora.",
      "Mujer con paridad satisfecha y sangrado severo: Histerectomía total como curación definitiva."
    ],
    "questions": [
      {
        "stem": "Una paciente de 34 años, nuligesta, que desea embarazarse en el corto plazo, consulta por hipermenorrea de 7 meses de evolución. En la ecografía transvaginal e histerosonografía se identifica un leiomioma submucoso único de 3.5 cm de diámetro localizado en la pared anterior con protrusión del 80% hacia la cavidad endometrial (FIGO 1). El resto del miometrio es normal. ¿Cuál es el tratamiento de elección para esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Histerectomía total por vía laparoscópica"
          },
          {
            "id": "B",
            "text": "Resección del mioma mediante Miomectomía Histeroscópica"
          },
          {
            "id": "C",
            "text": "Embolización de arterias uterinas bilateral"
          },
          {
            "id": "D",
            "text": "Administración continua de análogos de GnRH durante 5 años"
          },
          {
            "id": "E",
            "text": "Radioterapia pélvica fraccionada"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La histerectomía mutilaría definitivamente su deseo de fertilidad.\nB) Correcta. En una paciente con deseo de embarazo que presenta un mioma submucoso intracavitario (FIGO 0 o 1) menor de 4-5 cm que causa sangrado o distorsión de la cavidad endometrial, el tratamiento de elección indiscutido es la Miomectomía por Histeroscopía quirúrgica resectoscópica. Es un procedimiento mínimamente invasivo, ambulatorio y conservador que extirpa el mioma respetando la pared miometrial y restaurando la anatomía endometrial y la fertilidad.\nC) Incorrecta. La embolización de arterias uterinas puede comprometer la reserva ovárica y aumentar complicaciones obstétricas posteriores, por lo que está formalmente desaconsejada en mujeres con deseo de gestación.\nD) Incorrecta. Los análogos de GnRH solo se usan por un máximo de 3-6 meses como puente quirúrgico, no como terapia definitiva por riesgo de osteoporosis severa.\nE) Incorrecta. Los miomas son benignos y la radioterapia no tiene indicación.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.004"
      },
      {
        "stem": "Una embarazada de 22 semanas consulta en la urgencia por dolor abdominal agudo intenso en hipogastrio y flanco derecho de 12 horas de evolución, asociado a febrícula de 37.8°C y náuseas. Al examen físico: abdomen muy sensible a la palpación en fosa ilíaca derecha, donde se palpa una masa nodular de 7 cm dolorosa dependiente del miometrio anterior, sin dinámica uterina. El monitoreo cardiofetal muestra feto reactivo de 145 lpm. La ecografía confirma un mioma intramural con ecos heterogéneos internos y áreas de licuefacción. El hemograma muestra leucocitosis de 13.500 /mm³ sin desviación izquierda. ¿Cuál es el diagnóstico más probable y la conducta adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Apendicitis aguda complicada; laparotomía de urgencia"
          },
          {
            "id": "B",
            "text": "Degeneración roja (necrobiosis) de un mioma uterino; manejo médico conservador con reposo, hidratación y analgesia"
          },
          {
            "id": "C",
            "text": "Rotura uterina inminente; cesárea de emergencia"
          },
          {
            "id": "D",
            "text": "Leiomiosarcoma uterino; histerectomía total inmediata"
          },
          {
            "id": "E",
            "text": "Corioamnionitis clínica; inducción inmediata del parto"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La masa dependiente del útero con cambios ecográficos típicos corresponde al mioma, no a apéndice cecal.\nB) Correcta. La Degeneración Roja o Necrobiosis Aséptica es una complicación clásica de los miomas durante el segundo y tercer trimestre del embarazo. Se produce debido al rápido crecimiento del leiomioma estimulado por las hormonas placentarias que sobrepasa el aporte vascular del pedículo, provocando isquemia tisular, trombosis venosa e infarto hemorrágico. Clínicamente se manifiesta como dolor localizado agudo intenso, febrícula y leucocitosis moderada. El tratamiento es estrictamente CONSERVADOR y MÉDICO (hospitalización, hidratación, analgesia parenteral con paracetamol u opiáceos SOS); la miomectomía está formalmente contraindicada durante el embarazo por el altísimo riesgo de hemorragia masiva incontrolable y pérdida gestacional.\nC) Incorrecta. No hay antecedente de trabajo de parto ni cese de dinámica.\nD) Incorrecta. El sarcoma es excepcional en menores de 50 años.\nE) Incorrecta. No hay RPM ni loquios fétidos; el útero no está infectado.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.004"
      }
    ]
  }
];

const bloque1Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowGinecologia(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque1Classes };
