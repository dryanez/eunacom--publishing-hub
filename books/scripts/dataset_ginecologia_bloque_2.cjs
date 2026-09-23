/**
 * TOMO 20: GINECOLOGÍA & ONCOLOGÍA GINECOLÓGICA · BLOQUE 2
 * Endometriosis, Piso Pélvico, Infertilidad & Anticoncepción (20.5 a 20.8)
 */

const { flowGinecologia } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "gin-05",
    "classId": "gin-05",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Endometriosis, Piso Pélvico, Infertilidad & Anticoncepción",
    "topicLabel": "20.5",
    "title": "Endometriosis y Adenomiosis: Tríada Cardinal, Diagnóstico y Manejo Médico Escalonado",
    "perfilCode": "3.02.1.005",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cobertura de estudio y cirugía ginecológica en red pública.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#49) · EUNACOM Julio 2023 (Q#26) · EUNACOM Diciembre 2022 (Q#16)",
    "frecuencia": "Máxima rentabilidad · Tríada de dismenorrea progresiva + dispareunia + infertilidad; ecografía en vidrio esmerilado y Dienogest",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Endometriosis",
    "diagramRows": [
      {
        "t": "Sospecha de Endometriosis: Dismenorrea Secundaria Progresiva + Dispareunia Profunda + Infertilidad",
        "s": "Examen ginecológico: dolor en fondo de saco de Douglas y ligamentos uterosacros engrosados nodulares",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Evaluación por Imágenes Inicial",
        "al": "Ecografía Transvaginal Especializada vs RMN Pélvica",
        "ll": "Endometrioma Ovárico ('Quiste de Chocolate')",
        "left": {
          "t": "Imagen en 'Vidrio Esmerilado'",
          "s": "Quiste ovárico homogéneo con ecos internos de bajo nivel y pared regular sin proyecciones papilares",
          "type": "warn"
        },
        "rl": "Endometriosis Profunda Infiltrante (EPI)",
        "right": {
          "t": "Resonancia Magnética Pélvica",
          "s": "Mapeo de implantes en ligamentos uterosacros, tabique rectovaginal, vejiga o colon sigmoides",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Estrategia Terapéutica según Deseo Reproductivo",
        "al": "¿Desea Embarazo en el Corto Plazo?",
        "ll": "NO desea fertilidad actual",
        "left": {
          "t": "Tratamiento Médico Hormonal Escalonado",
          "s": "1.ª Línea: Dienogest 2 mg/d oral continuo o ACOs continuos o DIU-Levonorgestrel · 2.ª Línea: Análogos GnRH",
          "type": "acc"
        },
        "rl": "SÍ desea embarazo actual",
        "right": {
          "t": "Cirugía Conservadora o Técnicas de Reproducción",
          "s": "Cistectomía ovárica laparoscópica preservando corteza + Derivación a Reproducción Asistida (FIV)",
          "type": "crit"
        }
      }
    ],
    "contexto": "La Endometriosis se define como la presencia de tejido endometrial funcional (glándulas y estroma) fuera de la cavidad uterina. Afecta al 10-15% de las mujeres en edad reproductiva y hasta al 40-50% de las mujeres con dolor pélvico crónico o infertilidad. Su patogenia clásica se atribuye a la teoría de la menstruación retrógrada de Sampson, con adhesión, invasión y proliferación estrógeno-dependiente de células endometriales en el peritoneo pélvico y ovarios. La tríada clínica clásica de dismenorrea progresiva severa que no cede con AINEs habituales, dispareunia profunda e infertilidad es de altísima rentabilidad para el EUNACOM. El pilar médico actual descansa en los progestágenos continuos (Dienogest) y el abordaje quirúrgico laparoscópico reservado para dolor refractario o endometriomas voluminosos.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Localizaciones de la Endometriosis",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> Es una enfermedad inflamatoria crónica estrógeno-dependiente. La teoría más aceptada es la <strong>menstruación retrógrada (Sampson)</strong>, donde fragmentos endometriales viables refluyen a través de las trompas de Falopio hacia la cavidad peritoneal durante la menstruación, logrando implantarse gracias a un ambiente peritoneal de disfunción inmunológica, angiogénesis patológica y resistencia a la progesterona.",
          "• <strong>Localizaciones Anatómicas Más Frecuentes:</strong>",
          "  - <strong>1. Ovarios (la localización más común, > 60-70%):</strong> Forma los llamados <strong>Endometriomas ováricos o 'quistes de chocolate'</strong> (colecciones quísticas de sangre degradada y hemosiderina).",
          "  - <strong>2. Fondo de saco de Douglas y ligamentos útero-sacros:</strong> Provocan retroversión uterina fija y dolor exquisito al tacto.",
          "  - <strong>3. Tabique rectovaginal y serosa del colon sigmoides / recto:</strong> Causan disquecia cíclica.",
          "  - <strong>4. Vejiga y uréteres:</strong> Disuria cíclica y hematuria catamenial.",
          "  - <strong>5. Localizaciones extrapélvicas raras:</strong> Pleura y diafragma (neumotórax catamenial) o cicatriz de cesárea previa."
        ]
      },
      {
        "subhead": "2. Manifestaciones Clínicas y Hallazgos Diagnósticos",
        "paragraphs": [
          "• <strong>La Tríada Clásica de Síntomas Cardinales (Pregunta Fija EUNACOM):</strong>",
          "  - <strong>1) Dismenorrea Secundaria Progresiva e Incapacitante:</strong> Dolor cólico pelviano intenso que empeora con el paso de los años, comienza días antes de la regla, persiste durante el sangrado y es refractario al uso de AINEs comunes.",
          "  - <strong>2) Dispareunia Profunda:</strong> Dolor intenso durante las relaciones sexuales con la penetración profunda (por tracción de los ligamentos uterosacros y tabique rectovaginal afectados).",
          "  - <strong>3) Infertilidad / Esterilidad (30-50% de las pacientes):</strong> Por distorsión anatómica tubárica, adherencias pélvicas densas ('pelvis congelada') y citocinas inflamatorias que alteran la motilidad espermática y la implantación.",
          "  - <em>Otros síntomas asociados:</em> Dolor pélvico crónico no cíclico, <strong>disquecia</strong> (dolor al defecar durante la menstruación) y disuria catamenial.",
          "• <strong>Examen Físico:</strong> Útero en retroversión fija, dolor exquisito a la lateralización cervical y <strong>palpación de nódulos dolorosos firmes en el fondo de saco posterior y ligamentos uterosacros</strong>.",
          "• <strong>Estudio por Imágenes y Estándar de Oro:</strong>",
          "  - <strong>Ecografía Transvaginal Especializada:</strong> Identifica con alta precisión el <strong>Endometrioma Ovárico</strong> como una masa quística con <strong>ecos internos finos homogéneos en 'vidrio esmerilado' (ground glass)</strong>, sin tabiques gruesos ni vascularización Doppler interna.",
          "  - <strong>Resonancia Magnética (RMN) Pélvica:</strong> Es el estándar de oro imagenológico para mapear la <strong>Endometriosis Profunda Infiltrante (EPI)</strong> en ligamentos uterosacros, tabique rectovaginal e intestino.",
          "  - <strong>Laparoscopía Quirúrgica con Biopsia:</strong> Es el estándar de oro diagnóstico definitivo, permitiendo visualizar los implantes endometriósicos (lesiones en 'quemadura de pólvora', rojas o vesiculares) y confirmar glándulas y estroma endometrial con macrófagos cargados de hemosiderina."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico y Quirúrgico de la Endometriosis",
        "paragraphs": [
          "• <strong>Objetivo del Tratamiento:</strong> El tratamiento depende estrictamente de si el motivo de consulta principal es el <strong>Dolor Pélvico</strong> o el <strong>Deseo de Embarazo (Infertilidad)</strong>.",
          "• <strong>Manejo del DOLOR PÉLVICO (Mujer sin deseo gestacional inmediato):</strong>",
          "  - <strong>1.ª Línea: PROGESTÁGENOS CONTINUOS:</strong> <strong>DIENOGEST 2 mg al día vía oral continuo</strong> (progestágeno de 4.ª generación que induce decidualización y atrofia marcada de los focos endometriósicos sin efectos androgénicos). Alternativas excelentes: DIU liberador de Levonorgestrel (DIU-LNG), implante de Etonogestrel o Anticonceptivos Hormonales Combinados en pauta continua sin descansos (para inducir amenorrea).",
          "  - <strong>2.ª Línea: Análogos de la GnRH (Leuprolide, Goserelina):</strong> Suprimen completamente el eje hipotálamo-hipofisario induciendo una 'menopausia médica temporal'. Limitados a un máximo de 6 meses por riesgo de desmineralización ósea severa, salvo que se asocien a terapia 'add-back' (dosis bajas de estrógenos/progestágenos).",
          "• <strong>Manejo de la INFERTILIDAD:</strong>",
          "  - ¡El tratamiento hormonal médico (ACOs, dienogest, GnRH) <strong>NO mejora la fertilidad</strong> y solo retrasa la búsqueda de embarazo!",
          "  - La conducta consiste en <strong>Laparoscopía quirúrgica conservadora</strong> (cistectomía ovárica de endometriomas > 3-4 cm respetando la corteza sana y lisis de adherencias) para restaurar la anatomía o derivación directa a <strong>Técnicas de Reproducción Asistida de Alta Complejidad (FIV)</strong>."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial Clínico y Terapéutico entre Endometriosis y Adenomiosis",
      "headers": [
        "Parámetro",
        "Endometriosis Pélvica",
        "Adenomiosis Uterina"
      ],
      "rows": [
        [
          "Definición Histológica",
          "Glándulas y estroma endometrial FUERA del útero (ovarios, peritoneo)",
          "Glándulas y estroma endometrial EN EL ESPESOR del miometrio"
        ],
        [
          "Edad Típica",
          "Mujeres jóvenes en edad reproductiva (20 a 35 años)",
          "Mujeres multíparas de 35 a 50 años"
        ],
        [
          "Síntomas Cardinales",
          "Dismenorrea progresiva + Dispareunia profunda + Infertilidad",
          "Hipermenorrea abundante + Dismenorrea secundaria tardía"
        ],
        [
          "Examen Físico",
          "Útero en retroversión fija, ligamentos uterosacros nodulares dolorosos",
          "Útero aumentado de tamaño difuso, blando, globuloso y doloroso"
        ],
        [
          "Ecografía Transvaginal",
          "Endometrioma ovárico en 'vidrio esmerilado', adherencias",
          "Miometrio heterogéneo con sombras en 'rayos solares' y asimetría"
        ],
        [
          "Manejo Médico",
          "Dienogest 2 mg continuo, ACOs continuos, DIU-LNG",
          "DIU-Levonorgestrel (Mirena), Ácido Tranexámico, AINEs"
        ],
        [
          "Tratamiento Quirúrgico",
          "Cistectomía ovárica laparoscópica / escisión de implantes",
          "Histerectomía total (curativo en paridad satisfecha)"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios de Intervención Quirúrgica Laparoscópica en Endometriosis",
      "headers": [
        "Indicación Quirúrgica",
        "Hallazgos Clínicos y Parámetros",
        "Técnica Quirúrgica de Elección"
      ],
      "rows": [
        [
          "Endometrioma Ovárico Voluminoso",
          "Quiste ovárico endometriósico ≥ 3 a 4 cm de diámetro o dolor refractario",
          "Cistectomía ovárica laparoscópica por enucleación de cápsula (evitar ooforectomía)"
        ],
        [
          "Dolor Pélvico Refractario Severo",
          "Falla persistente de al menos dos líneas de terapia médica hormonal continua",
          "Laparoscopía diagnóstica y terapéutica con escisión/vaporización de implantes peritoneales"
        ],
        [
          "Endometriosis Infiltrante con Obstrucción",
          "Compromiso urétrico con hidronefrosis o estenosis luminal intestinal sintomática",
          "Cirugía laparoscópica multidisciplinaria con resección segmentaria"
        ],
        [
          "Infertilidad Mecánica Tuboperitoneal",
          "Distorsión anatómica con bloqueo tubárico por adherencias densas",
          "Salpingolisis, fimbrioplastía y remoción de bridas para permeabilizar trompas"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Esquemas Terapéuticos Farmacológicos Oficiales en Endometriosis (MINSAL / ESHRE)",
      "headers": [
        "Fármaco / Modalidad",
        "Dosis y Posología",
        "Mecanismo de Acción",
        "Efectos Secundarios Principales"
      ],
      "rows": [
        [
          "Dienogest (1.ª Línea de Elección)",
          "2 mg vía oral una vez al día de forma continua (sin descansos)",
          "Progestágeno sintético: anovulación, decidualización y atrofia de focos",
          "Spotting irregular en primeros meses, cefalea, cambios de humor."
        ],
        [
          "ACOs Combinados Continuos",
          "1 comprimido diario continuo sin descanso de 7 días",
          "Inhibición del eje y amenorrea inducida farmacológicamente",
          "Riesgo trombótico según criterios de elegibilidad OMS."
        ],
        [
          "DIU-Levonorgestrel",
          "Dispositivo intrauterino (20 mcg/día)",
          "Atrofia endometrial profunda local y reducción de dismenorrea",
          "Sangrado intermenstrual inicial, excelente tolerancia a largo plazo."
        ],
        [
          "Análogos GnRH (Leuprolide)",
          "3.75 mg IM mensual o 11.25 mg trimestral por máximo 6 meses",
          "Hipoestrogenismo severo ('menopausia médica')",
          "Sofocos, sequedad vaginal, pérdida de densidad mineral ósea (osteopenia)."
        ]
      ]
    },
    "vignette": "Paciente de 27 años, nuligesta, consulta por dismenorrea intensa e invalidante de 3 años de evolución, que ha empeorado progresivamente y no cede con ibuprofeno ni ketoprofeno. Además, refiere dolor profundo durante las relaciones sexuales (dispareunia profunda) y refiere haber intentado concebir con su pareja sin éxito durante 18 meses. Al examen ginecológico se constata útero en retroversión fija, con exquisita sensibilidad y palpación de pequeños nódulos firmes dolorosos en el fondo de saco de Douglas y ligamentos uterosacros. La ecografía transvaginal revela en el ovario izquierdo una formación quística unilocular de 4.2 cm con contenido ecogénico fino homogéneo en 'vidrio esmerilado', sin nódulos sólidos murales ni flujo al Doppler color.",
    "explicacion": "El cuadro clínico de dismenorrea secundaria progresiva severa refractaria a AINEs, dispareunia profunda e infertilidad conyugal primaria de 18 meses, asociado al hallazgo semiológico de nódulos dolorosos en fondo de saco de Douglas y la imagen ecográfica patognomónica de un endometrioma ovárico en 'vidrio esmerilado' (quiste de chocolate) de 4.2 cm, confirma el diagnóstico de Endometriosis Moderada a Severa (con endometrioma ovárico). Dado que la paciente consulta primordialmente por deseo de fertilidad activa y presenta un endometrioma mayor a 4 cm con sospecha de adherencias pelvianas, la conducta médica indicada es la derivación a ginecología para resolución quirúrgica conservadora mediante laparoscopía (cistectomía ovárica conservando corteza sana, lisis de adherencias y confirmación histopatológica) o derivación expedita a Técnicas de Reproducción Asistida de Alta Complejidad (FIV). No se debe indicar tratamiento médico hormonal exclusivo si la paciente desea un embarazo inmediato.",
    "keyPoints": [
      "Fisiopatología: Menstruación retrógrada (Sampson), inflamación crónica estrógeno-dependiente.",
      "Tríada cardinal clásica: Dismenorrea secundaria progresiva + Dispareunia profunda + Infertilidad.",
      "Localización anatómica más frecuente: Ovarios (Endometrioma o 'quiste de chocolate').",
      "Ecografía transvaginal del endometrioma: Quiste homogéneo con ecos finos en 'vidrio esmerilado' sin papilas.",
      "Estándar de oro imagenológico en endometriosis profunda: Resonancia Magnética (RMN) de pelvis.",
      "Estándar de oro diagnóstico definitivo: Laparoscopía quirúrgica con confirmación histopatológica.",
      "Tratamiento médico de elección para dolor pélvico: Dienogest 2 mg/día oral continuo o ACOs continuos.",
      "Los fármacos hormonales NO mejoran la fertilidad; no deben administrarse si desea embarazo inmediato.",
      "Tratamiento ante infertilidad y endometrioma > 4 cm: Cistectomía ovárica laparoscópica o FIV."
    ],
    "questions": [
      {
        "stem": "Una paciente de 26 años consulta por dismenorrea secundaria severa que le impide asistir al trabajo durante sus menstruaciones, dispareunia profunda y dispareunia al defecar (disquecia) durante los días de sangrado. Al tacto bimanual se palpa el útero en retroversoflexión fija con gran sensibilidad en los ligamentos uterosacros. La ecografía ginecológica muestra un quiste ovárico derecho de 3.5 cm con ecos internos homogéneos de bajo nivel en 'vidrio esmerilado'. La paciente no desea embarazo en la actualidad. ¿Cuál es el tratamiento farmacológico oral de primera línea de elección para el control de sus síntomas dolorosos?",
        "options": [
          {
            "id": "A",
            "text": "Paracetamol 500 mg cada 12 horas solo durante el sangrado"
          },
          {
            "id": "B",
            "text": "Dienogest 2 mg al día por vía oral de forma continua"
          },
          {
            "id": "C",
            "text": "Metotrexato intramuscular a dosis única"
          },
          {
            "id": "D",
            "text": "Citrato de Clomifeno oral por 5 días cada mes"
          },
          {
            "id": "E",
            "text": "Terapia de reemplazo hormonal con estrógenos equinos solos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los analgésicos simples son totalmente insuficientes para una endometriosis sintomática.\nB) Correcta. En pacientes con endometriosis y dolor pélvico (dismenorrea, dispareunia, dolor pélvico crónico) que NO desean fertilidad activa inmediata, el tratamiento médico de primera línea de elección respaldado por las guías clínicas internacionales (ESHRE) y el MINSAL es el uso continuo de Progestágenos, siendo el DIENOGEST oral a dosis de 2 mg al día el estándar de oro actual. El dienogest produce decidualización y atrofia directa de las lesiones endometriósicas ectópicas, suprime la ovulación y reduce la inflamación pélvica de forma segura y prolongada.\nC) Incorrecta. El metotrexato es para el embarazo ectópico.\nD) Incorrecta. El clomifeno estimula la foliculogénesis e induciría mayor crecimiento estrogénico de los implantes.\nE) Incorrecta. Los estrógenos solos alimentarían y proliferarían agresivamente las lesiones de endometriosis.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.005"
      },
      {
        "stem": "Una mujer de 30 años, con antecedente de dolor pélvico crónico e infertilidad primaria de 2 años, se somete a una ecografía transvaginal que revela un quiste ovárico de 5 cm de diámetro de pared delgada, regular, con ecogenicidad interna difusa y homogénea de bajo nivel ('aspecto en vidrio esmerilado'), sin flujo Doppler al interior y sin excrecencias papilares. ¿Cuál es el diagnóstico más probable de esta lesión ovárica?",
        "options": [
          {
            "id": "A",
            "text": "Cistoadenocarcinoma seroso de ovario"
          },
          {
            "id": "B",
            "text": "Endometrioma ovárico"
          },
          {
            "id": "C",
            "text": "Teratoma quístico maduro (quiste dermoide)"
          },
          {
            "id": "D",
            "text": "Quiste folicular simple funcional"
          },
          {
            "id": "E",
            "text": "Absceso tubo-ovárico roto"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El cistoadenocarcinoma seroso muestra áreas sólidas, septos gruesos, papilas internas y ascitis con alta vascularización Doppler.\nB) Correcta. La descripción ecográfica clásica y patognomónica de una masa quística unilocular ovárica con ecos internos finos y homogéneos de bajo nivel descrita como imagen en 'vidrio esmerilado' (ground glass appearance), con pared regular y sin vascularización Doppler interna en una mujer joven con dolor pélvico e infertilidad, corresponde con total precisión a un Endometrioma Ovárico (o 'quiste de chocolate').\nC) Incorrecta. El teratoma muestra nódulos ecogénicos murales (tapón de Rokitansky), niveles líquido-grasa y áreas de sombra acústica por calcificaciones o dientes.\nD) Incorrecta. El quiste folicular es anecoico puro, con refuerzo acústico posterior y sin ecos internos.\nE) Incorrecta. El absceso tubo-ovárico es una masa compleja multiloculada dolorosa con paredes engrosadas y Doppler hiperémico.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.005"
      },
      {
        "stem": "¿Por qué razón farmacológica el tratamiento médico hormonal con anticonceptivos orales combinados o progestágenos continuos NO está indicado como tratamiento de la infertilidad en una paciente con endometriosis que busca activamente un embarazo?",
        "options": [
          {
            "id": "A",
            "text": "Porque son teratogénicos irreversibles para cualquier ovocito futuro"
          },
          {
            "id": "B",
            "text": "Porque suprimen la ovulación y no mejoran las tasas de fertilidad ni de nacidos vivos tras suspenderlos, retrasando el tratamiento reproductivo efectivo"
          },
          {
            "id": "C",
            "text": "Porque causan oclusión tubárica bilateral irreversible por fibrosis miometrial"
          },
          {
            "id": "D",
            "text": "Porque aumentan la incidencia de embarazo molar recurrente"
          },
          {
            "id": "E",
            "text": "Porque aceleran la apoptosis de la reserva folicular ovárica"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No son teratogénicos irreversibles.\nB) Correcta. La evidencia médica basada en ensayos clínicos aleatorizados y guías internacionales (ESHRE / ASRM) ha demostrado de forma categórica que la supresión médica hormonal de la endometriosis (con ACOs, progestágenos, análogos de GnRH o danazol) NO erradica las adherencias anatómicas ni mejora las tasas acumuladas de embarazo espontáneo tras su retiro, y tiene el efecto deletéreo de anovulación que posterga inútilmente el tiempo reproductivo de la mujer. Ante infertilidad por endometriosis, el camino es la cirugía laparoscópica para reparar la anatomía o la fertilización in vitro (FIV).\nC) Incorrecta. No ocluyen las trompas.\nD) Incorrecta. No tienen relación con enfermedad trofoblástica.\nE) Incorrecta. No aceleran la pérdida folicular.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.005"
      },
      {
        "stem": "Una paciente de 42 años, multípara de 3, consulta por hipermenorrea severa y dismenorrea secundaria progresiva. Al examen físico se palpa un útero aumentado de tamaño difusamente de 11 semanas, simétrico, reblandecido y difusamente doloroso al tacto bimanual. La ecografía transvaginal muestra engrosamiento asimétrico del miometrio posterior con estriaciones lineales y microquistes miometriales. La biopsia endometrial es benigna. Tras fallar el tratamiento médico, se decide una histerectomía total. ¿Qué hallazgo anatomopatológico confirmará el diagnóstico definitivo?",
        "options": [
          {
            "id": "A",
            "text": "Glándulas y estroma endometrial ectópicos en el espesor del miometrio con hipertrofia muscular concéntrica (Adenomiosis)"
          },
          {
            "id": "B",
            "text": "Proliferación clonal de células fusiformes de músculo liso miometrial (Leiomioma)"
          },
          {
            "id": "C",
            "text": "Infiltración estromal por células mesenquimatosas malignas con atipias (Leiomiosarcoma)"
          },
          {
            "id": "D",
            "text": "Pólipo vascular fibroepitelial endocervical"
          },
          {
            "id": "E",
            "text": "Tejido decidual ectópico confinado exclusivamente a la serosa peritoneal"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El cuadro de útero uniformemente aumentado de tamaño, blando y doloroso en una multípara de más de 40 años con hipermenorrea y dismenorrea severa corresponde a una Adenomiosis Uterina (o endometriosis interna). La definición anatomopatológica estricta de la adenomiosis es la presencia de glándulas y estroma endometrial dentro del miometrio a más de 2.5 mm de la capa basal del endometrio, acompañada de hiperplasia e hipertrofia del músculo liso adyacente.\nB) Incorrecta. Es la definición de mioma.\nC) Incorrecta. Corresponde a un sarcoma uterino maligno.\nD) Incorrecta. Es un pólipo cervical.\nE) Incorrecta. Describe implantes de endometriosis externa peritoneal.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.005"
      }
    ]
  },
  {
    "id": "gin-06",
    "classId": "gin-06",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Endometriosis, Piso Pélvico, Infertilidad & Anticoncepción",
    "topicLabel": "20.6",
    "title": "Prolapso de Órganos Pélvicos (POP-Q) e Incontinencia Urinaria de Esfuerzo vs Urgencia",
    "perfilCode": "3.02.1.006",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cobertura quirúrgica en red ginecológica y uroginecológica.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#50) · EUNACOM Julio 2023 (Q#27) · EUNACOM Diciembre 2021 (Q#20)",
    "frecuencia": "Alta rentabilidad · Clasificación POP-Q y diferenciación estricta entre incontinencia de esfuerzo (TOT/TVT) vs urgencia (anticolinérgicos)",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Incontinencia Urinaria Femenina",
    "diagramRows": [
      {
        "t": "Mujer con Pérdida Involuntaria de Orina",
        "s": "Anamnesis diferenciada: ¿Ocurre ante esfuerzos físicos o precedida de deseo miccional imperioso?",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Tipo de Incontinencia Urinaria",
        "al": "Incontinencia de Esfuerzo vs Incontinencia de Urgencia",
        "ll": "Esfuerzo (Tos, reír, estornudar, saltar)",
        "left": {
          "t": "INCONTINENCIA URINARIA DE ESFUERZO (IUE)",
          "s": "Fisiopatología: Hipermovilidad uretral / Falla del soporte del esfínter · Test de la compresa (+) · Test de Bonney (+)",
          "type": "warn"
        },
        "rl": "Urgencia (Escape involuntario tras deseo imperioso súbito)",
        "right": {
          "t": "INCONTINENCIA DE URGENCIA / VEJIGA HIPERACTIVA",
          "s": "Fisiopatología: Hiperactividad del músculo detrusor con contracciones no inhibidas involuntarias",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Tratamiento de Elección según Tipo",
        "al": "Manejo Quirúrgico vs Manejo Médico",
        "ll": "Manejo IUE (Esfuerzo)",
        "left": {
          "t": "Kinesioterapia (Kegel) -> Slings Mediouretrales (TOT / TVT)",
          "s": "Cintas libres de tensión suburetrales (TOT transobturador o TVT retropúbico) · Curación > 85-90%",
          "type": "acc"
        },
        "rl": "Manejo IUU (Urgencia)",
        "right": {
          "t": "Reeducación Vesical + Fármacos Anticolinérgicos",
          "s": "Solifenacina, Oxibutinina o Agonista beta-3 adrenérgico (Mirabegrón) · ¡NO SE OPERA!",
          "type": "acc"
        }
      }
    ],
    "contexto": "Los trastornos del suelo pélvico comprenden el Prolapso de Órganos Pélvicos (POP) y la Incontinencia Urinaria (IU), patologías que impactan severamente la calidad de vida de las mujeres adultas. La clasificación POP-Q de la ICS estandariza la cuantificación del prolapso utilizando el himen como plano de referencia anatómico cero. Por su parte, la diferenciación semiológica y terapéutica entre la Incontinencia Urinaria de Esfuerzo (IUE) y la Incontinencia Urinaria de Urgencia (IUU) es una pregunta obligada de examen: la IUE es un problema anatómico de soporte que se resuelve con cabestrillos mediouretrales (TOT/TVT), mientras que la IUU es una disfunción funcional del detrusor que se trata con medidas conductuales y antimuscarínicos (oxibutinina/solifenacina) o mirabegrón, estando FORMALMENTE CONTRAINDICADA la cirugía en la urgencia pura.",
    "contentSections": [
      {
        "subhead": "1. Prolapso de Órganos Pélvicos (POP) y Sistema POP-Q",
        "paragraphs": [
          "• <strong>Definición:</strong> Descenso de uno o más de los compartimentos de la pared vaginal y órganos pélvicos adyacentes: pared anterior (cistocele / uretrocele), pared posterior (rectocele) y compartimento apical (histerocele o prolapso de cúpula vaginal tras histerectomía).",
          "• <strong>Factores de Riesgo Mayores:</strong> Multiparidad y partos vaginales traumáticos instrumentales (fórceps), edad avanzada y menopausia (hipoestrogenismo con pérdida de colágeno), sobrepeso u obesidad, y aumento crónico de la presión intraabdominal (tos crónica, constipación, esfuerzos físicos pesados).",
          "• <strong>Estadificación POP-Q (Referencia: Anillo Himenal = 0 cm):</strong>",
          "  - <strong>Estadio 0:</strong> Sin prolapso; todos los puntos se encuentran a -3 cm.",
          "  - <strong>Estadio I:</strong> El punto de mayor descenso está a <strong>más de 1 cm por encima del himen (< -1 cm)</strong>.",
          "  - <strong>Estadio II:</strong> El punto de mayor descenso se sitúa <strong>entre 1 cm por encima y 1 cm por debajo del himen (entre -1 cm y +1 cm)</strong>.",
          "  - <strong>Estadio III:</strong> El punto de mayor descenso se encuentra a <strong>más de 1 cm por debajo del himen (> +1 cm)</strong>, pero sin evertir totalmente la vagina.",
          "  - <strong>Estadio IV:</strong> Prolapso total / Procidencia uterina completa (eversión completa de la longitud vaginal total).",
          "• <strong>Tratamiento:</strong> Asintomático: observación. Sintomático: <em>Conservador</em> (ejercicios de Kegel para fortalecimiento de suelo pélvico o <strong>Pesarios vaginales</strong> en pacientes con alto riesgo quirúrgico o que rechazan cirugía); <em>Quirúrgico</em> (colporrafia anterior para cistocele, colporrafia posterior para rectocele, histerectomía vaginal o sacrocolpopexia con malla)."
        ]
      },
      {
        "subhead": "2. Incontinencia Urinaria de Esfuerzo (IUE)",
        "paragraphs": [
          "• <strong>Definición y Fisiopatología:</strong> Pérdida involuntaria de orina sincrónica con el aumento de la presión intraabdominal (<strong>al toser, reír, estornudar, correr o levantar peso</strong>), en ausencia de contracción del detrusor.",
          "• Causa principal: <strong>Hipermovilidad uretral</strong> por pérdida del soporte conectivo pubocervical del suelo pélvico (daño perineal obstétrico), y menos frecuentemente deficiencia esfinteriana intrínseca.",
          "• <strong>Diagnóstico:</strong> Anamnesis típica, examen ginecológico con <strong>prueba de esfuerzo positiva</strong> (escape de orina al toser con vejiga llena), Test de Bonney o Marshall (el escape cede al elevar digitalmente el cuello vesical a ambos lados de la uretra sin ocluirla) y Test de Q-tip / hisopo (movilidad uretral > 30° respecto a la horizontal).",
          "• <strong>Tratamiento Escalonado:</strong>",
          "  - Leve a moderada: Fisioterapia del suelo pélvico (ejercicios de contracción del elevador del ano - <strong>Kegel</strong>).",
          "  - Moderada a severa / Fracaso kinesiológico: <strong>CIRUGÍA DE ELECCIÓN MEDIOURETRAL CON CINTAS LIBRES DE TENSIÓN (SLINGS)</strong>: <strong>TOT (Trans-Obturator Tape)</strong> o <strong>TVT (Tension-free Vaginal Tape)</strong>. Colocación de una malla de polipropileno libre de tensión debajo del tercio medio de la uretra por vía vaginal ambulatoria. Tasas de curación > 85-90%."
        ]
      },
      {
        "subhead": "3. Incontinencia Urinaria de Urgencia (IUU) y Vejiga Hiperactiva",
        "paragraphs": [
          "• <strong>Definición y Fisiopatología:</strong> Pérdida involuntaria de orina precedida de forma inmediata por un <strong>deseo miccional imperioso, súbito y difícil de postergar ('urgencia')</strong>. Fisiopatología: <strong>Hiperactividad del músculo detrusor</strong> (contracciones musculares involuntarias no inhibidas de la vejiga durante la fase de llenado vesical).",
          "• <strong>Síndrome de Vejiga Hiperactiva (VHA):</strong> Complejo sintomático caracterizado por urgencia miccional, habitualmente acompañada de <strong>polaquiuria (≥ 8 micciones al día) y nicturia (≥ 2 micciones nocturnas)</strong>, con o sin incontinencia de urgencia, en ausencia de infección urinaria demostrada.",
          "• <strong>¡REGLA DE ORO TERAPÉUTICA (Pregunta Clásica EUNACOM)!:</strong> <strong>LA INCONTINENCIA DE URGENCIA NUNCA SE OPERA</strong>. La cirugía de cabestrillos (slings) empeora catastróficamente la urgencia y puede causar retención urinaria.",
          "• <strong>Tratamiento Médico Escalonado:</strong>",
          "  - <strong>1. Medidas No Farmacológicas:</strong> Modificación del estilo de vida (reducir café, té, alcohol, edulcorantes artificiales, tabaco) y <strong>reeducación vesical con micciones programadas por horario</strong>.",
          "  - <strong>2. Fármacos Antimuscarínicos / Anticolinérgicos (1.ª Línea):</strong> Bloquean receptores M2 y M3 del detrusor, frenando las contracciones involuntarias: <strong>Solifenacina (5-10 mg/día)</strong>, <strong>Oxibutinina (5 mg c/8-12h)</strong> o Tolterodina. Efectos adversos: sequedad de boca, estreñimiento, visión borrosa. ¡Contraindicados en glaucoma de ángulo estrecho!",
          "  - <strong>3. Agonistas Beta-3 Adrenérgicos:</strong> <strong>MIRABEGRÓN (25-50 mg/día)</strong>. Relaja activamente el detrusor durante el llenado vesical sin efectos anticolinérgicos (ideal en ancianas con boca seca o deterioro cognitivo). Precaución en HTA no controlada.",
          "  - <strong>4. Terapia Avanzada Refractaria:</strong> Inyección intravesical de Toxina Botulínica tipo A o neuromodulación sacra."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial entre Incontinencia Urinaria de Esfuerzo y de Urgencia",
      "headers": [
        "Característica",
        "Incontinencia de Esfuerzo (IUE)",
        "Incontinencia de Urgencia (IUU)"
      ],
      "rows": [
        [
          "Mecanismo Desencadenante",
          "Aumento brusco de presión intraabdominal (tos, risa, esfuerzo)",
          "Deseo miccional repentino e incontrolable ('no alcanza a llegar al baño')"
        ],
        [
          "Volumen de Pérdida",
          "Escaso a moderado (en chorro o gotas sincrónicas con el esfuerzo)",
          "Moderado a abundante (vaciado vesical completo súbito)"
        ],
        [
          "Fisiopatología",
          "Falla anatómica del soporte uretral (hipermovilidad uretral)",
          "Contracciones involuntarias del músculo detrusor (hiperactividad)"
        ],
        [
          "Síntomas Asociados",
          "Habitualmente no tiene polaquiuria ni nicturia",
          "Polaquiuria diurna (> 8 veces) y nicturia (> 2 veces) frecuentes"
        ],
        [
          "Prueba de Esfuerzo al Examen",
          "POSITIVA sincrónica inmediata con la tos",
          "NEGATIVA (salvo contracción inducida tardía)"
        ],
        [
          "Tratamiento Médico",
          "Poco eficaz (solo fisioterapia de Kegel en casos leves)",
          "MUY EFICAZ: Reeducación vesical + Anticolinérgicos / Mirabegrón"
        ],
        [
          "Tratamiento Quirúrgico",
          "ESTÁNDAR DE ORO: Cintas mediouretrales TOT / TVT",
          "¡CONTRAINDICADO! (Empeora la hiperactividad del detrusor)"
        ]
      ]
    },
    "vignette": "Mujer de 52 años, multípara de 3 partos vaginales eutócicos con recién nacidos de más de 3.800 g, consulta por pérdida involuntaria de orina desde hace 2 años. Refiere que los escapes de orina ocurren de forma automática e inmediata al toser fuerte, reírse o realizar ejercicios en el gimnasio, manchando su ropa interior. Niega tener deseos urgentes de orinar antes del escape, no tiene polaquiuria y duerme de corrido sin levantarse en la noche a orinar. Al examen ginecológico en posición ginecológica con vejiga cómodamente llena, se le solicita toser, observándose de inmediato un chorro de escape de orina sincrónico con el golpe de tos. El urocultivo es negativo.",
    "explicacion": "El cuadro clínico de escapes involuntarios de orina sincrónicos exclusivamente con el aumento de la presión intraabdominal (tos, risa, ejercicio) en ausencia de urgencia miccional o polaquiuria, con demostración objetiva de la fuga al toser en el examen físico y urocultivo estéril, configura con certeza el diagnóstico de Incontinencia Urinaria de Esfuerzo (IUE) por hipermovilidad uretral secundaria a daño del piso pélvico obstétrico. En esta paciente, el manejo inicial conservador incluye ejercicios de fortalecimiento del piso pélvico (Kegel); ante la persistencia de los síntomas o afectación moderada-severa de su calidad de vida, el tratamiento curativo de elección y estándar de oro indiscutido es la colocación quirúrgica de un cabestrillo mediouretral libre de tensión por vía transobturatriz (TOT) o retropúbica (TVT).",
    "keyPoints": [
      "Incontinencia de esfuerzo: Pérdida sincrónica con tos, risa o ejercicio por hipermovilidad uretral.",
      "Tratamiento quirúrgico de elección en IUE: Cintas o cabestrillos mediouretrales libres de tensión (TOT / TVT).",
      "Incontinencia de urgencia / Vejiga hiperactiva: Escape tras deseo imperioso súbito por hiperactividad del detrusor.",
      "¡LA CIRUGÍA ESTÁ FORMALMENTE CONTRAINDICADA en la incontinencia de urgencia pura!",
      "Tratamiento médico de IUU: Reeducación vesical + Antimuscarínicos (Solifenacina, Oxibutinina) o Mirabegrón.",
      "POP-Q: Sistema de estadificación donde el plano de referencia himenal es el punto 0 cm.",
      "POP Estadio II: Descenso de órganos entre -1 cm y +1 cm del himen.",
      "POP Estadio IV: Procidencia o eversión completa de la longitud vaginal.",
      "Pesarios vaginales: Tratamiento conservador de elección para POP en pacientes con contraindicación quirúrgica."
    ],
    "questions": [
      {
        "stem": "Una paciente de 62 años consulta por sensación de peso genital y escapes de orina involuntarios que ocurren exclusivamente cuando estornuda, tose o levanta objetos pesados. No presenta nicturia ni deseos miccionales apremiantes. Al examen físico se evidencia salida de orina sincrónica con la maniobra de Valsalva y un prolapso de la pared vaginal anterior cuyo punto de mayor descenso se sitúa a 2 cm por fuera del anillo himenal (+2 cm, Estadio III). Tras fracasar la kinesioterapia de piso pélvico, se programa cirugía. ¿Cuál es el procedimiento quirúrgico de elección para resolver la incontinencia urinaria de esfuerzo?",
        "options": [
          {
            "id": "A",
            "text": "Colocación de cabestrillo mediouretral libre de tensión (cinta TOT o TVT)"
          },
          {
            "id": "B",
            "text": "Inyección intravesical de toxina botulínica en el músculo detrusor"
          },
          {
            "id": "C",
            "text": "Prescripción oral de oxibutinina a dosis altas"
          },
          {
            "id": "D",
            "text": "Cistoplastía de aumento con parche intestinal"
          },
          {
            "id": "E",
            "text": "Denervación quirúrgica de los plexos hipogástricos inferiores"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Incontinencia Urinaria de Esfuerzo (IUE) confirmada clínicamente que no responde al tratamiento conservador tiene como estándar de oro quirúrgico indiscutido la colocación de un Cabestrillo Mediouretral Libre de Tensión (Slings tipo TOT [Trans-Obturator Tape] o TVT [Tension-free Vaginal Tape]). Estas cintas de polipropileno se ubican debajo de la uretra media por vía vaginal, restableciendo el soporte suburetral y logrando tasas de continencia y curación superiores al 85-90% con baja morbilidad.\nB) Incorrecta. La toxina botulínica vesical es para la incontinencia de urgencia severa refractaria, no para la de esfuerzo.\nC) Incorrecta. La oxibutinina es un anticolinérgico para la hiperactividad del detrusor; en la IUE es ineficaz.\nD) Incorrecta. Es una cirugía mayor reservada para vejigas neurógenas espásticas de escasa capacidad.\nE) Incorrecta. Procedimiento en desuso y sin rol en IUE.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.006"
      },
      {
        "stem": "Una mujer de 68 años acude a control refiriendo que con frecuencia experimenta una sensación urgente, súbita e incontenible de orinar, no alcanzando a llegar al baño y perdiendo abundantes volúmenes de orina. Además, orina 12 veces al día y se despierta 3 a 4 veces por noche para miccionar. El examen físico y el sedimento de orina son normales. ¿Cuál de las siguientes conductas terapéuticas es la más apropiada?",
        "options": [
          {
            "id": "A",
            "text": "Indicar colocación de cabestrillo suburetral transobturador (TOT)"
          },
          {
            "id": "B",
            "text": "Iniciar reeducación vesical combinada con un fármaco anticolinérgico como Solifenacina o un agonista beta-3 como Mirabegrón"
          },
          {
            "id": "C",
            "text": "Indicar restricción total de líquidos a menos de 500 mL al día"
          },
          {
            "id": "D",
            "text": "Realizar uretrotomía interna bajo anestesia"
          },
          {
            "id": "E",
            "text": "Indicar tratamiento antibiótico empírico continuo con ciprofloxacino por 6 meses"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La cirugía de TOT/TVT está contraindicada en la incontinencia de urgencia porque no trata la hiperactividad del detrusor e incrementa el riesgo de retención urinaria y empeoramiento de la urgencia.\nB) Correcta. El cuadro clínico de deseo miccional imperioso seguido de escape, acompañado de polaquiuria diurna y nicturia sin esfuerzo asociado corresponde a una Incontinencia Urinaria de Urgencia (Vejiga Hiperactiva). El tratamiento de primera línea no invasivo consiste en medidas higiénico-dietéticas y reeducación vesical con micciones programadas, asociado a tratamiento farmacológico con Antimuscarínicos (Solifenacina, Oxibutinina) para bloquear los receptores colinérgicos del detrusor, o un agonista de receptores beta-3 adrenérgicos (Mirabegrón) que promueve la relajación del detrusor durante el llenado vesical.\nC) Incorrecta. La restricción extrema de líquidos concentra la orina y estimula aún más el detrusor.\nD) Incorrecta. No hay estenosis uretral.\nE) Incorrecta. El sedimento es normal y el uso prolongado de antibióticos genera resistencia innecesaria.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.006"
      }
    ]
  },
  {
    "id": "gin-07",
    "classId": "gin-07",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Endometriosis, Piso Pélvico, Infertilidad & Anticoncepción",
    "topicLabel": "20.7",
    "title": "Infertilidad Conyugal: Estudio Básico Inicial en Cuatro Pilares y Técnicas de Reproducción Asistida",
    "perfilCode": "3.02.1.007",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "No GES. Cobertura de Fertilización Asistida en centros de referencia FONASA y red pública.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#51) · EUNACOM Diciembre 2023 (Q#28) · EUNACOM Julio 2022 (Q#24)",
    "frecuencia": "Alta rentabilidad · Cuatro pilares de estudio básico, parámetros normales del espermiograma OMS y selección IIU vs FIV/ICSI",
    "svg": null,
    "algoTitle": "Algoritmo de Estudio Básico de la Pareja Infértil",
    "diagramRows": [
      {
        "t": "Pareja con Infertilidad (≥ 12 meses sin embarazo con relaciones sexuales regulares sin anticoncepción)",
        "s": "Si la mujer tiene ≥ 35 años: Iniciar estudio de forma precoz a los 6 meses de búsqueda infructuosa",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Estudio Básico Inicial en Cuatro Pilares",
        "al": "Masculino + Ovulatorio + Tuboperitoneal + Uterino",
        "ll": "1) Factor Masculino (35%) + 2) Factor Ovulatorio (25%)",
        "left": {
          "t": "Espermiograma + Reserva Ovárica",
          "s": "Espermiograma tras 3-5 días de abstinencia sexual · Progesterona día 21 (> 3 ng/mL) y Hormona Antimülleriana (AMH)",
          "type": "warn"
        },
        "rl": "3) Factor Tubárico (30%) + 4) Factor Uterino (10%)",
        "right": {
          "t": "Histerosalpingografía + Ecografía TV",
          "s": "HSG para evaluar permeabilidad de trompas (Prueba de Cotte +) · Eco TV / histeroscopía para descartar miomas o pólipos",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "Selección de la Técnica de Reproducción Asistida",
        "al": "¿Trompas Permeables y Espermograma Adecuado?",
        "ll": "SÍ: Trompas permeables y REM > 3-5 millones",
        "left": {
          "t": "Baja Complejidad: Inseminación Intrauterina (IIU)",
          "s": "Inducción suave de ovulación + Capacitación espermática e inoculación intrauterina de semen en momento ovulatorio",
          "type": "acc"
        },
        "rl": "NO: Obstrucción tubárica bilateral, REM < 3 mill o falla IIU",
        "right": {
          "t": "Alta Complejidad: FIV o ICSI",
          "s": "Fertilización In Vitro (FIV) o Inyección Intracitoplasmática de Espermatozoide (ICSI) con punción ovocitaria",
          "type": "crit"
        }
      }
    ],
    "contexto": "Se define Infertilidad como la incapacidad de una pareja en edad reproductiva de lograr un embarazo clínico tras un año (12 meses) de relaciones sexuales coitales regulares sin el uso de ningún método anticonceptivo (plazo que se acorta a 6 meses si la mujer tiene 35 años o más, o ante antecedentes de cirugía tubárica, endometriosis o criptorquidia). La infertilidad es un problema conyugal donde las causas se distribuyen equitativamente entre ambos miembros: 30-40% masculina, 30-40% femenina (tubárica, ovulatoria, uterina) y 10-20% mixta o de origen desconocido. El EUNACOM evalúa de manera sistemática los cuatro exámenes del estudio básico inicial y los criterios de derivación a técnicas de baja o alta complejidad.",
    "contentSections": [
      {
        "subhead": "1. Definiciones y Distribución Etiológica de la Infertilidad",
        "paragraphs": [
          "• <strong>Definición Temporal:</strong>",
          "  - En mujeres <strong>menores de 35 años</strong>: Tras <strong>12 meses</strong> de búsqueda sin protección.",
          "  - En mujeres de <strong>35 años o más</strong>: El estudio debe iniciarse a los <strong>6 meses</strong> debido al acelerado declive fisiológico de la reserva ovárica y la calidad ovocitaria.",
          "  - Inmediato: Ante factores de riesgo mayores conocidos (amenorrea/oligomenorrea severa, endometriosis en estadios III-IV, antecedente de EIP grave, varicocele voluminoso o criptorquidia corregida tardíamente).",
          "• <strong>Distribución de Causas:</strong>",
          "  - <strong>Factor Masculino (35%):</strong> Varicocele, infecciones accesorias, azoospermia obstructiva o secretora, tabaquismo y exposición a tóxicos.",
          "  - <strong>Factor Tuboperitoneal (30%):</strong> Secuelas de Enfermedad Pélvica Inflamatoria (salpingitis), endometriosis pélvica o cirugías previas que causan obstrucción tubárica bilateral.",
          "  - <strong>Factor Ovárico / Ovulatorio (20%):</strong> Síndrome de Ovario Poliquístico (la causa anovulatoria más frecuente), insuficiencia ovárica prematura o disfunción tiroidea/prolactina.",
          "  - <strong>Factor Uterino / Cervical (5-10%):</strong> Miomas submucosos, pólipos endometriales, síndrome de Asherman o malformaciones müllerianas.",
          "  - <strong>Infertilidad Sin Causa Aparente (ISCA) (10-15%):</strong> Cuando el estudio básico completo resulta normal."
        ]
      },
      {
        "subhead": "2. Estudio Básico Inicial en Cuatro Pilares Fundamentales",
        "paragraphs": [
          "• <strong>1) Estudio del Factor Masculino (ESPERMIOGRAMA):</strong>",
          "  - Examen inicial de rigor. Requiere <strong>3 a 5 días de abstinencia sexual previa</strong>. Valores normales de referencia (criterios OMS 2021 / 6.ª edición):",
          "    • Volumen eyaculado: <strong>≥ 1.4 a 1.5 mL</strong>.",
          "    • Concentración espermática: <strong>≥ 15 a 16 millones/mL</strong> (o ≥ 39 millones totales). Oligozoospermia si es menor.",
          "    • Motilidad progresiva (PR): <strong>≥ 30 a 32%</strong>. Astenozoospermia si es menor.",
          "    • Morfología normal (Kruger estricto): <strong>≥ 4% de formas normales</strong>. Teratozoospermia si es menor.",
          "    • Si el espermiograma resulta alterado, DEBE <strong>repetirse una segunda muestra a las 4 a 12 semanas</strong> para confirmarlo antes de etiquetar al paciente.",
          "• <strong>2) Estudio del Factor Ovulatorio:</strong>",
          "  - <strong>Progesterona sérica en fase lútea media (Día 21 del ciclo):</strong> Un valor <strong>> 3 a 5 ng/mL</strong> confirma la ocurrencia de ovulación en ese ciclo.",
          "  - <strong>Evaluación de Reserva Ovárica:</strong>",
          "    • <strong>Hormona Antimülleriana (AMH) sérica:</strong> Producida por las células de la granulosa de folículos preantrales y antrales pequeños. Se puede medir en cualquier día del ciclo. Valores normales: <strong>1.0 a 3.5 ng/mL</strong>. Valores < 0.5-1.0 ng/mL indican baja reserva ovárica.",
          "    • <strong>FSH y Estradiol en fase folicular temprana (Día 3 del ciclo):</strong> FSH > 10-12 UI/L predice pobre respuesta ovárica.",
          "    • <strong>Recuento de Folículos Antrales (RFA) por ecografía TV:</strong> Total < 5 a 7 folículos entre ambos ovarios indica baja reserva.",
          "• <strong>3) Estudio del Factor Tuboperitoneal (HISTEROSALPINGOGRAFÍA - HSG):</strong>",
          "  - Radiografía con inyección de medio de contraste radiopaco a través del cuello uterino en la primera mitad del ciclo.",
          "  - Evalúa la forma de la cavidad endometrial y la <strong>permeabilidad de las trompas de Falopio</strong>.",
          "  - <strong>Prueba de Cotte Positiva:</strong> Paso y dispersión libre del contraste hacia la cavidad peritoneal a través de ambas trompas (confirma permeabilidad tubárica bilateral).",
          "• <strong>4) Estudio del Factor Uterino:</strong>",
          "  - <strong>Ecografía Transvaginal ginecológica</strong> (descarta miomas submucosos, adenomiosis o pólipos) e <strong>Histeroscopía diagnóstica</strong> si hay defectos de llene en la HSG."
        ]
      },
      {
        "subhead": "3. Indicaciones de Reproducción Asistida: Baja vs Alta Complejidad",
        "paragraphs": [
          "• <strong>Técnicas de Baja Complejidad: INSEMINACIÓN INTRAUTERINA (IIU):</strong>",
          "  - Consiste en la inducción suave de la ovulación y la introducción de una muestra de semen capacitado dentro de la cavidad uterina mediante una cánula en el momento de la ovulación.",
          "  - <strong>Requisitos Indispensables para IIU:</strong>",
          "    • 1) <strong>Al menos UNA trompa de Falopio permeable comprobada (Cotte +).</strong>",
          "    • 2) <strong>Recuento de Espermatozoides Móviles Progresivos Recuperados (REM) post-capacitación ≥ 3 a 5 millones.</strong>",
          "  - Indicaciones: Factor masculino leve a moderado, anovulación / SOP refractario a fármacos orales, factor cervical o esterilidad idiopática.",
          "• <strong>Técnicas de Alta Complejidad: FERTILIZACIÓN IN VITRO (FIV) e ICSI:</strong>",
          "  - Requiere hiperestimulación ovárica controlada, aspiración folicular guiada por ecografía transvaginal, fecundación en laboratorio y transferencia embrionaria intrauterina.",
          "  - <strong>Indicaciones de Elección para FIV / ICSI:</strong>",
          "    • 1) <strong>Factor Tubárico Severo: Obstrucción tubárica bilateral (hidrosálpinx bilateral, salpingectomía bilateral previa).</strong>",
          "    • 2) <strong>Factor Masculino Severo: REM < 1 a 3 millones, oligoastenozoospermia severa o azoospermia</strong> (en estos casos se realiza <strong>ICSI</strong> inyectando un único espermatozoide directamente dentro de cada ovocito).",
          "    • 3) Endometriosis severa en estadios III o IV.",
          "    • 4) Edad materna avanzada (> 38-40 años) o baja reserva ovárica crítica.",
          "    • 5) Fracaso reiterado de técnicas de baja complejidad (3 a 4 intentos de IIU)."
        ]
      }
    ],
    "table": {
      "title": "Criterios de Elección entre Técnicas de Reproducción Asistida (Baja vs Alta Complejidad)",
      "headers": [
        "Parámetro Clínico",
        "Baja Complejidad (Inseminación Intrauterina)",
        "Alta Complejidad (FIV / ICSI)"
      ],
      "rows": [
        [
          "Estado de las Trompas de Falopio",
          "OBLIGATORIO: Al menos una trompa permeable (Cotte +)",
          "Permeabilidad IRRELEVANTE (indicada en obstrucción bilateral)"
        ],
        [
          "Calidad Seminal (REM Post-capacitación)",
          "REM ≥ 3 a 5 millones de espermatozoides móviles",
          "Apta para factor severo (REM < 1-3 mill, azoospermia)"
        ],
        [
          "Lugar de la Fecundación",
          "In vivo (dentro de la trompa de la mujer)",
          "In vitro (en el laboratorio de embriología)"
        ],
        [
          "Complejidad y Cirugía",
          "Ambulatoria en consulta, sin anestesia ni punción",
          "Requiere punción ovárica bajo sedación en pabellón"
        ],
        [
          "Costo y Tasa de Éxito por Ciclo",
          "Bajo costo · Éxito 12 - 18% por ciclo",
          "Alto costo · Éxito 35 - 50% por ciclo"
        ],
        [
          "Indicaciones Clásicas EUNACOM",
          "SOP que no ovula con letrozol, factor masculino leve, ISCA",
          "Obstrucción tubárica bilateral, factor masculino grave, > 38 años"
        ]
      ]
    },
    "vignette": "Pareja compuesta por mujer de 31 años y varón de 33 años consultan por no haber logrado embarazo tras 18 meses de relaciones sexuales no protegidas regulares. La mujer tiene ciclos menstruales regulares de 28 días y el dosaje de progesterona plasmática en el día 21 fue de 12 ng/mL (ovulatorio). Se realiza Histerosalpingografía (HSG) que demuestra cavidad uterina normal, pero existe ausencia completa de paso de medio de contraste a través de ambas trompas de Falopio, con dilatación ampular bilateral compatible con hidrosálpinx bilateral y prueba de Cotte negativa bilateral. El espermiograma del varón resulta con 45 millones de espermatozoides/mL y 55% de motilidad progresiva normal.",
    "explicacion": "El estudio de la pareja evidencia un Factor Tuboperitoneal Severo Absoluto como causa de la infertilidad, manifestado por obstrucción tubárica bilateral irreversible con hidrosálpinx bilateral confirmado por la ausencia de pasaje de contraste peritoneal (Prueba de Cotte negativa bilateral) en la histerosalpingografía, mientras que el varón tiene un factor masculino completamente normal y la mujer ovula regularmente. Dado que las trompas están totalmente ocluidas, el encuentro fisiológico entre el óvulo y el espermatozoide en la ampolla tubárica es imposible, lo que CONTRAINDICA absolutamente cualquier intento de Inseminación Intrauterina (IIU). La conducta terapéutica de elección y única vía eficaz para lograr un embarazo es la derivación inmediata a Técnicas de Reproducción Asistida de Alta Complejidad mediante Fertilización In Vitro (FIV), previa salpingectomía laparoscópica bilateral del hidrosálpinx (dado que el líquido del hidrosálpinx es tóxico para el endometrio y reduce a la mitad la tasa de implantación embrionaria).",
    "keyPoints": [
      "Infertilidad: 12 meses de búsqueda infructuosa en < 35 años; 6 meses si la mujer tiene ≥ 35 años.",
      "Distribución etiológica: 35% masculina, 30% tubárica, 20% ovulatoria, 15% idiopática o mixta.",
      "Espermiograma: Requiere 3-5 días de abstinencia. Concentración normal ≥ 15 mill/mL, motilidad progresiva ≥ 30-32%.",
      "Si un espermiograma está alterado, debe repetirse obligatoriamente una segunda muestra en 1 a 3 meses.",
      "Histerosalpingografía (HSG): Prueba de Cotte positiva confirma permeabilidad tubárica.",
      "Reserva ovárica: La Hormona Antimülleriana (AMH) sérica es el marcador más fiable y estable del ciclo.",
      "Requisito mandatorio para Inseminación Intrauterina (IIU): Al menos una trompa permeable y REM > 3-5 millones.",
      "Indicación de elección para FIV/ICSI: Obstrucción tubárica bilateral, factor masculino grave o edad > 38-40 años."
    ],
    "questions": [
      {
        "stem": "Una pareja acude a consulta por no lograr embarazo tras 2 años de búsqueda. En el estudio básico inicial se realiza una Histerosalpingografía a la mujer, informándose obstrucción tubárica bilateral con hidrosálpinx bilateral y prueba de Cotte negativa. El espermiograma del cónyuge y la reserva ovárica de la mujer son normales. ¿Cuál es el tratamiento de fertilidad más adecuado que debe indicarse?",
        "options": [
          {
            "id": "A",
            "text": "Inseminación intrauterina con semen de donante"
          },
          {
            "id": "B",
            "text": "Inducción de ovulación con Citrato de Clomifeno y relaciones sexuales programadas"
          },
          {
            "id": "C",
            "text": "Fertilización In Vitro (FIV)"
          },
          {
            "id": "D",
            "text": "Inseminación intrauterina con semen del cónyuge capacitado"
          },
          {
            "id": "E",
            "text": "Antibioticoterapia continua con Doxiciclina durante 6 meses"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. El semen del esposo es normal y las trompas de la mujer están bloqueadas, por lo que la IIU fracasará independientemente del origen del semen.\nB) Incorrecta. Las relaciones programadas no sirven si los gametos no pueden encontrarse por la obstrucción física tubárica.\nC) Correcta. La obstrucción tubárica bilateral no corregible es la indicación clásica y primordial de la Fertilización In Vitro (FIV). La FIV 'bypasea' o salta completamente la necesidad funcional de las trompas de Falopio al aspirar los ovocitos directamente del ovario mediante punción transvaginal, fertilizarlos con los espermatozoides en la placa de cultivo del laboratorio y transferir el embrión resultante directamente a la cavidad endometrial.\nD) Incorrecta. La Inseminación Intrauterina (IIU) exige como condición indispensable que al menos una trompa esté permeable; al estar ambas bloqueadas, la tasa de éxito de la IIU es del 0%.\nE) Incorrecta. Los antibióticos no resuelven la fibrosis cicatrizal tubárica establecida.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.007"
      },
      {
        "stem": "En el estudio de un varón de 30 años cuya pareja no logra concebir, se solicita un espermiograma de control. Para que los resultados del análisis seminal según los estándares internacionales de la OMS sean válidos y confiables, ¿cuántos días de abstinencia sexual previa debe cumplir el paciente antes de recolectar la muestra?",
        "options": [
          {
            "id": "A",
            "text": "Menos de 24 horas de abstinencia"
          },
          {
            "id": "B",
            "text": "De 3 a 5 días de abstinencia estricta"
          },
          {
            "id": "C",
            "text": "Al menos 20 a 30 días de abstinencia"
          },
          {
            "id": "D",
            "text": "La abstinencia sexual previa es irrelevante para el espermiograma"
          },
          {
            "id": "E",
            "text": "Exactamente 14 días coincidiendo con el ciclo de la pareja"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Una abstinencia menor a 48 horas reduce artificialmente el volumen y el recuento total de espermatozoides.\nB) Correcta. La Organización Mundial de la Salud (OMS) y las guías clínicas de fertilidad establecen de forma estricta que la recolección de semen para un espermiograma diagnóstico debe realizarse tras un período mínimo de 2 a 3 días y un máximo de 5 a 7 días de abstinencia sexual previa (la recomendación estándar óptima es de 3 a 5 días). Períodos más cortos disminuyen el volumen y concentración espermática, mientras que períodos más prolongados aumentan el recuento a expensas de una drástica caída en la motilidad y viabilidad de los espermatozoides por envejecimiento celular.\nC) Incorrecta. Abstinencias muy prolongadas aumentan las formas muertas y detritos.\nD) Incorrecta. Es el parámetro preanalítico más crítico de estandarización.\nE) Incorrecta. La recolección seminal masculina no depende del día del ciclo femenino.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.007"
      }
    ]
  },
  {
    "id": "gin-08",
    "classId": "gin-08",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Endometriosis, Piso Pélvico, Infertilidad & Anticoncepción",
    "topicLabel": "20.8",
    "title": "Anticoncepción y Planificación Familiar: Criterios Médicos de Elegibilidad OMS y Píldora de Emergencia",
    "perfilCode": "3.02.1.008",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "GES Prevención y Entrega Gratuita Universal en Atención Primaria de Salud (Chile).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#52) · EUNACOM Julio 2023 (Q#28) · EUNACOM Diciembre 2021 (Q#22)",
    "frecuencia": "Máxima rentabilidad · Criterios OMS Categoría 4 (Contraindicaciones absolutas de estrógenos), PAE Levonorgestrel 1.5 mg y DIU",
    "svg": null,
    "algoTitle": "Algoritmo de Selección de Anticoncepción según Criterios Médicos OMS",
    "diagramRows": [
      {
        "t": "Mujer en Edad Fértil que Solicita Asesoría Anticonceptiva",
        "s": "Anamnesis clínica rigurosa: descartar factores de riesgo cardiovascular y evaluar Criterios OMS",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Evaluación de Criterios Médicos de Elegibilidad OMS",
        "al": "¿Presenta Contraindicación Absoluta para Estrógenos (Categoría 4)?",
        "ll": "Categoría 4 (RIESGO INACEPTABLE: Fumadora ≥ 35a, Migraña con aura, TVP, HTA severa)",
        "left": {
          "t": "¡PROHIBIDOS LOS ANTICONCEPTIVOS COMBINADOS!",
          "s": "No usar ACOs combinados, parche ni anillo · Indicar Métodos de Solo Progestágeno (Implante, DIU-LNG, Minipíldora) o DIU de Cobre",
          "type": "crit"
        },
        "rl": "Categoría 1 o 2 (Sin contraindicación médica)",
        "right": {
          "t": "Métodos Combinados o LARC a Elección Informada",
          "s": "ACOs combinados, anillo vaginal, inyectable mensual, implante subdérmico o DIU según preferencia de la usuaria",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "Anticoncepción de Emergencia (PAE)",
        "al": "Relación sexual no protegida / Falla de método de barrera",
        "ll": "Levonorgestrel 1.5 mg oral (dosis única)",
        "left": {
          "t": "Administrar lo antes posible (primeras 72 horas, hasta 120h)",
          "s": "Mecanismo: retrasa o frena el pico de LH y la ovulación · NO es abortivo · Disponible en toda la red pública",
          "type": "acc"
        },
        "rl": "Dispositivo Intrauterino de Cobre",
        "right": {
          "t": "Método de Rescate más Eficaz (< 5 días)",
          "s": "Eficacia > 99% si se inserta dentro de los primeros 5 días postcoito y otorga anticoncepción por 10 años",
          "type": "crit"
        }
      }
    ],
    "contexto": "La prescripción informada y segura de métodos anticonceptivos es una de las competencias más evaluadas en el EUNACOM. La Organización Mundial de la Salud (OMS) categoriza la seguridad de los métodos en cuatro niveles: Categoría 1 (sin restricción), Categoría 2 (ventajas superan riesgos), Categoría 3 (riesgos superan ventajas) y Categoría 4 (RIESGO INACEPTABLE / CONTRAINDICACIÓN FORMAL ABSOLUTA). El médico general debe reconocer de forma instantánea las condiciones Categoría 4 que prohíben el uso de estrógenos (migraña con aura, fumadora ≥ 35 años, antecedente de trombosis venosa profunda o hipertensión arterial severa), debiendo optar por métodos de solo progestágeno o de barrera/cobre. Asimismo, se debe dominar el uso de la Píldora de Anticoncepción de Emergencia (PAE) con Levonorgestrel 1.5 mg.",
    "contentSections": [
      {
        "subhead": "1. Criterios Médicos de Elegibilidad de la OMS (Categorías 1 al 4)",
        "paragraphs": [
          "• <strong>Categoría 1:</strong> No hay ninguna restricción para el uso del método anticonceptivo. Se puede usar en cualquier circunstancia.",
          "• <strong>Categoría 2:</strong> Las ventajas de usar el método superan con creces los riesgos teóricos o demostrados. Generalmente se puede usar.",
          "• <strong>Categoría 3:</strong> Los riesgos teóricos o comprobados suelen superar las ventajas del método. Su uso no se recomienda a menos que no haya otros métodos disponibles o aceptables.",
          "• <strong>CATEGORÍA 4 (Pregunta Fija EUNACOM):</strong> <strong>RIESGO INACEPTABLE PARA LA SALUD / CONTRAINDICACIÓN MÉDICA ABSOLUTA</strong>. El método NO DEBE utilizarse bajo ninguna circunstancia."
        ]
      },
      {
        "subhead": "2. Contraindicaciones Absolutas (Categoría 4) para Anticonceptivos Combinados (Estrógenos + Progestágeno)",
        "paragraphs": [
          "• Aplican por igual a la vía oral (ACOs combinados), transdérmica (parche) y vaginal (anillo):",
          "  - <strong>1. Tabaquismo en mujeres de 35 años o más:</strong> Fumar <strong>≥ 15 cigarrillos al día con edad ≥ 35 años</strong> (dispara el riesgo de infarto agudo de miocardio y ACV isquémico).",
          "  - <strong>2. Migraña con AURA a cualquier edad:</strong> El antecedente de migraña con aura neurológica focal (escotomas centelleantes, parestesias, afasia) eleva exponencialmente el riesgo de <strong>Accidente Cerebrovascular Isquémico</strong>.",
          "  - <strong>3. Tromboembolismo Venoso Actual o Antecedente Personal de TVP / TEP.</strong>",
          "  - <strong>4. Trombofilias Conocidas:</strong> Mutación del Factor V de Leiden, mutación de Protrombina G20210A, déficit de proteína C, S o antitrombina, o Síndrome Antifosfolípido.",
          "  - <strong>5. Hipertensión Arterial Severa:</strong> Presión arterial sistólica <strong>≥ 160 mmHg y/o diastólica ≥ 100 mmHg</strong> o hipertensión con daño vascular de órgano blanco.",
          "  - <strong>6. Cáncer de Mama Actual o antecedente en los últimos 5 años</strong> (tumor dependiente de hormonas).",
          "  - <strong>7. Lactancia Materna en las primeras 6 semanas postparto</strong> (los estrógenos reducen el volumen de leche materna y aumentan el riesgo trombótico puerperal).",
          "  - <strong>8. Enfermedad Hepática Severa Activa:</strong> Cirrosis hepática descompensada, hepatitis aguda o adenoma/hepatocarcinoma hepático."
        ]
      },
      {
        "subhead": "3. Métodos Anticonceptivos de Solo Progestágeno y LARC",
        "paragraphs": [
          "• <strong>Ventaja Fundamental de los Progestágenos Solos:</strong> <strong>NO incrementan el riesgo tromboembólico venoso</strong> y no alteran la cantidad ni calidad de la leche materna. Son seguros y de elección en pacientes con contraindicación de estrógenos (fumadoras > 35a, migraña con aura, HTA controlada o lactancia materna).",
          "• <strong>Opciones de Solo Progestágeno:</strong>",
          "  - <strong>Minipíldora Oral:</strong> Desogestrel 75 mcg/día (inhibe ovulación) o Levonorgestrel 30 mcg (espesa moco cervical). Se toma sin descansos.",
          "  - <strong>Implante Subdérmico de Etonogestrel (Implanon / Nexplanon):</strong> Varilla flexible insertada en cara interna del brazo. <strong>Método reversible de mayor eficacia existente (Índice de Pearl 0.05)</strong>. Duración de 3 a 5 años.",
          "  - <strong>Inyectable Trimestral de Acetato de Medroxiprogesterona (150 mg IM):</strong> Puede producir amenorrea en 50-70% y retraso en la recuperación de la fertilidad de hasta 9-12 meses tras el retiro.",
          "  - <strong>DIU liberador de Levonorgestrel (Mirena / Kyleena):</strong> Duración de 5 a 8 años. Reduce el sangrado en más del 90%.",
          "• <strong>Dispositivo Intrauterino de Cobre (T de Cobre 380A):</strong>",
          "  - Método no hormonal de larga duración (10 a 12 años). Provoca reacción inflamatoria estéril espermicida.",
          "  - <strong>Contraindicaciones Absolutas:</strong> Infección pélvica aguda actual (EIP activa, cervicitis purulenta), sospecha de embarazo, distorsión severa de la cavidad endometrial o sangrado genital inexplicado no filiado.",
          "  - Efecto adverso frecuente: Aumento de la cuantía del sangrado menstrual y dismenorrea en los primeros ciclos."
        ]
      },
      {
        "subhead": "4. Anticoncepción de Emergencia (Píldora del Día Después - PAE)",
        "paragraphs": [
          "• Indicada tras una relación sexual no protegida, violación o falla comprobada del método habitual (rotura de preservativo, expulsión de DIU, olvido de ≥ 2-3 comprimidos hormonales).",
          "• <strong>Fármaco de Elección en Chile: LEVONORGESTREL:</strong>",
          "  - <strong>Posología Oficial:</strong> <strong>1.5 mg por vía oral en dosis única</strong> (o 2 comprimidos de 0.75 mg juntos).",
          "  - <strong>Ventana Terapéutica:</strong> Debe administrarse lo antes posible, idealmente dentro de las <strong>primeras 72 horas (3 días)</strong> postcoito, manteniendo una eficacia residual demostrada hasta las 120 horas (5 días).",
          "  - <strong>Mecanismo de Acción Biológico:</strong> Inhibe o retrasa el pico preovulatorio de LH, impidiendo o retrasando la ovulación. <strong>NO interrumpe un embarazo ya implantado ni actúa como método abortivo</strong>.",
          "  - Efecto adverso más común: Náuseas y vómitos. Si la paciente vomita dentro de las <strong>primeras 2 horas</strong> de la toma, debe repetir la dosis completa.",
          "• <strong>DIU de Cobre de Emergencia:</strong> La inserción de un DIU de cobre dentro de los <strong>primeros 5 días (120 horas) postcoito</strong> es el método anticonceptivo de emergencia más eficaz existente (tasa de fracaso < 0.1%) y otorga anticoncepción continua por 10 años."
        ]
      }
    ],
    "table": {
      "title": "Criterios Médicos de Elegibilidad OMS: Métodos Combinados vs Solo Progestágeno",
      "headers": [
        "Condición Médica de la Paciente",
        "Métodos Combinados (Estrógeno + PG)",
        "Métodos Solo Progestágeno",
        "DIU de Cobre"
      ],
      "rows": [
        [
          "Fumadora ≥ 35 años que fuma ≥ 15 cig/día",
          "CATEGORÍA 4 (PROHIBIDO)",
          "CATEGORÍA 1 (Sin restricción)",
          "CATEGORÍA 1 (Sin restricción)"
        ],
        [
          "Migraña CON AURA a cualquier edad",
          "CATEGORÍA 4 (PROHIBIDO)",
          "CATEGORÍA 1 o 2 (Seguro)",
          "CATEGORÍA 1 (Sin restricción)"
        ],
        [
          "Antecedente Personal de TVP o TEP",
          "CATEGORÍA 4 (PROHIBIDO)",
          "CATEGORÍA 2 (Aceptable)",
          "CATEGORÍA 1 (Sin restricción)"
        ],
        [
          "Hipertensión Arterial Severa (≥ 160/100)",
          "CATEGORÍA 4 (PROHIBIDO)",
          "CATEGORÍA 1 o 2 (Seguro)",
          "CATEGORÍA 1 (Sin restricción)"
        ],
        [
          "Lactancia Materna (< 6 semanas postparto)",
          "CATEGORÍA 4 (PROHIBIDO)",
          "CATEGORÍA 2 (Seguro)",
          "CATEGORÍA 1 (Sin restricción)"
        ],
        [
          "Cáncer de Mama Actual",
          "CATEGORÍA 4 (PROHIBIDO)",
          "CATEGORÍA 4 (PROHIBIDO)",
          "CATEGORÍA 1 (Sin restricción)"
        ],
        [
          "Infección Pélvica Activa (EIP / Cervicitis)",
          "CATEGORÍA 1 (Sin restricción)",
          "CATEGORÍA 1 (Sin restricción)",
          "CATEGORÍA 4 (PROHIBIDO)"
        ]
      ]
    },
    "severityTable": {
      "title": "Condiciones de Categoría 4 OMS (Contraindicación Absoluta Inaceptable)",
      "headers": [
        "Método Anticonceptivo",
        "Condiciones Médicas con Riesgo Inaceptable (Categoría 4)",
        "Riesgo Clínico Vital Asociado"
      ],
      "rows": [
        [
          "Anticonceptivos Combinados (ACOs, Parche, Anillo)",
          "• Fumadora ≥ 35 años (≥ 15 cig/d)\n• Migraña con aura\n• TVP/TEP previo o activo\n• HTA severa (≥ 160/100)\n• Cáncer de mama actual\n• Cirrosis descompensada",
          "Tromboembolismo venoso masivo, accidente cerebrovascular isquémico, infarto agudo de miocardio."
        ],
        [
          "Métodos de Solo Progestágeno (Implante, Minipíldora, DIU-LNG)",
          "• Cáncer de mama actual activo (durante los últimos 5 años)",
          "Estímulo de progresión tumoral hormonal."
        ],
        [
          "DIU de Cobre y DIU-LNG",
          "• Infección Pélvica Inflamatoria (EIP) activa\n• Cervicitis purulenta\n• Tuberculosis pélvica\n• Sospecha o confirmación de embarazo",
          "Diseminación séptica pélvica, pelviperitonitis y perforación miometrial."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolos Farmacológicos en Anticoncepción de Emergencia (PAE)",
      "headers": [
        "Método",
        "Fármaco y Dosis",
        "Ventana de Tiempo Eficaz",
        "Consideraciones y Manejo de Vómitos"
      ],
      "rows": [
        [
          "Levonorgestrel (1.ª Línea en APS)",
          "1.5 mg vía oral en dosis única (o 2 comp de 0.75 mg)",
          "Primeras 72 horas (útil hasta 120h)",
          "Si vomita en < 2 horas post-toma: REPETIR LA DOSIS. No es abortivo."
        ],
        [
          "Acetato de Ulipristal",
          "30 mg vía oral en dosis única",
          "Hasta 120 horas (5 días postcoito)",
          "Modulador del receptor de progesterona. Mayor eficacia que LNG en sobrepeso."
        ],
        [
          "DIU de Cobre de Rescate",
          "Inserción de T de Cobre intrauterina",
          "Hasta 120 horas (5 días postcoito)",
          "Método de rescate más eficaz (> 99%). Requiere disponibilidad y colocación por profesional capacitado."
        ]
      ]
    },
    "vignette": "Mujer de 37 años, fumadora de 20 cigarrillos al día desde los 18 años, acude a la consulta ginecológica del CESFAM solicitando inicio de método anticonceptivo. Refiere que una amiga toma un anticonceptivo oral combinado de etinilestradiol con drospirenona que le deja la piel tersa y solicita la misma receta. La paciente no tiene otros antecedentes de importancia y su presión arterial es de 125/80 mmHg. Al revisar los Criterios Médicos de Elegibilidad de la OMS, el médico evalúa la seguridad de la prescripción solicitada.",
    "explicacion": "La solicitud de la paciente de recibir anticonceptivos orales combinados debe ser FORMALMENTE DENEGADA. Según los Criterios Médicos de Elegibilidad de la OMS y las normas del MINSAL, el antecedente de ser una mujer de 35 años o más que fuma 15 o más cigarrillos al día constituye una condición CATEGORÍA 4 (Contraindicación Absoluta / Riesgo Inaceptable para la salud) para cualquier método hormonal que contenga Estrógenos (anticonceptivos combinados orales, parches transdérmicos o anillos vaginales), debido a que la combinación de estrógenos y tabaco a partir de esa edad multiplica exponencialmente el riesgo de infarto agudo de miocardio, accidente cerebrovascular isquémico y tromboembolismo venoso mortal. La conducta médica correcta es explicarle claramente estos riesgos y ofrecerle alternativas de alta eficacia totalmente seguras (Categoría 1 de la OMS), tales como los Métodos de Solo Progestágeno (Implante subdérmico de Etonogestrel, DIU liberador de Levonorgestrel o minipíldora de desogestrel) o el DIU de Cobre.",
    "keyPoints": [
      "Criterios OMS: Categoría 1 = Sin restricción; Categoría 4 = Contraindicación absoluta inaceptable.",
      "Fumadora ≥ 35 años con ≥ 15 cig/d: CATEGORÍA 4 para métodos combinados con estrógenos.",
      "Migraña CON AURA a cualquier edad: CATEGORÍA 4 para métodos combinados (riesgo de ACV isquémico).",
      "Antecedente de TVP/TEP o trombofilia: CATEGORÍA 4 para métodos combinados.",
      "Métodos de solo progestágeno (Implante, Minipíldora, DIU-LNG): NO aumentan el riesgo de trombosis.",
      "Son seguros en fumadoras > 35 años, migraña con aura y durante la lactancia materna.",
      "Implante subdérmico de Etonogestrel: Método reversible con menor tasa de falla de toda la medicina (Pearl 0.05).",
      "Píldora de Emergencia (PAE): Levonorgestrel 1.5 mg oral en dosis única en las primeras 72 horas.",
      "Mecanismo de la PAE: Retrasa o frena el pico de LH y la ovulación; NO interrumpe un embarazo implantado.",
      "Si la paciente vomita dentro de las 2 horas tras tomar la PAE, debe repetirse la dosis de inmediato."
    ],
    "questions": [
      {
        "stem": "Una paciente de 36 años, sin antecedentes cardiovasculares pero fumadora activa de una cajetilla diaria (20 cigarrillos al día), solicita inicio de método anticonceptivo. ¿Cuál de los siguientes métodos anticonceptivos se encuentra FORMALMENTE CONTRAINDICADO (Categoría 4 de la OMS) en esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Dispositivo intrauterino de cobre (T de Cobre)"
          },
          {
            "id": "B",
            "text": "Implante subdérmico liberador de etonogestrel"
          },
          {
            "id": "C",
            "text": "Anticonceptivos orales combinados de etinilestradiol con levonorgestrel"
          },
          {
            "id": "D",
            "text": "Dispositivo intrauterino liberador de levonorgestrel"
          },
          {
            "id": "E",
            "text": "Minipíldora oral de desogestrel"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. El DIU de cobre es Categoría 1 (sin ninguna restricción).\nB) Incorrecta. El implante de etonogestrel contiene solo progestágeno y es Categoría 1 en fumadoras.\nC) Correcta. De acuerdo a los Criterios Médicos de Elegibilidad de la OMS y a las normas de anticoncepción del MINSAL, ser mujer de 35 años o más y fumar 15 o más cigarrillos al día es una contraindicación formal absoluta (CATEGORÍA 4: Riesgo inaceptable para la salud) para el uso de Anticonceptivos Hormonales Combinados que contengan estrógenos. El sinergismo entre el etinilestradiol y los componentes del tabaco altera severamente la función endotelial y la hemostasia, disparando el riesgo de infarto de miocardio, trombosis venosa y ACV isquémico.\nD) Incorrecta. El DIU-LNG contiene solo progestágeno local y es totalmente seguro (Categoría 1).\nE) Incorrecta. La minipíldora de solo progestágeno es Categoría 1 en fumadoras.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.008"
      },
      {
        "stem": "Una joven de 20 años consulta en el servicio de urgencia 18 horas después de una relación sexual no protegida por rotura del condón. Solicita la píldora de anticoncepción de emergencia. ¿Cuál es el fármaco de elección, la dosis recomendada y el mecanismo de acción de la píldora de anticoncepción de emergencia disponible en el sistema público chileno?",
        "options": [
          {
            "id": "A",
            "text": "Mifepristona 200 mg oral; desprendimiento del blastocisto implantado"
          },
          {
            "id": "B",
            "text": "Levonorgestrel 1.5 mg oral en dosis única; retraso o inhibición del pico ovulatorio de LH"
          },
          {
            "id": "C",
            "text": "Misoprostol 800 mcg vaginal; inducción de contracciones uterinas expulsivas"
          },
          {
            "id": "D",
            "text": "Metotrexato 50 mg intramuscular; lisis de las células trofoblásticas"
          },
          {
            "id": "E",
            "text": "Estrógenos conjugados a altas dosis; inducción de hemorragia masiva"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La mifepristona es un antiprogestágeno utilizado en interrupción del embarazo, no la PAE estándar en Chile.\nB) Correcta. El método de anticoncepción de emergencia farmacológico de elección en Chile y en los protocolos del MINSAL es el LEVONORGESTREL a dosis única de 1.5 mg por vía oral (o dos comprimidos de 0.75 mg juntos), administrado preferentemente dentro de las primeras 72 horas del coito no protegido. Su mecanismo de acción biológico comprobado consiste en impedir o postergar el pico ovulatorio de LH y la consecuente expulsión del ovocito; NO actúa como un método abortivo, no afecta el endometrio receptivo ni daña un embrión ya implantado.\nC) Incorrecta. El misoprostol es un abortivo sintético, no anticoncepción de emergencia.\nD) Incorrecta. El metotrexato es un citotóxico para ectópico.\nE) Incorrecta. El método de Yuzpe clásico con estrógenos está en desuso por su alta tasa de náuseas y menor eficacia.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.008"
      },
      {
        "stem": "Una paciente de 28 años con antecedente de migraña clásica con aura visual (escotomas centelleantes) frecuente acude a solicitar anticoncepción hormonal. Al evaluar las alternativas, ¿cuál de los siguientes métodos está formalmente contraindicado por clasificarse como Categoría 4 de la OMS?",
        "options": [
          {
            "id": "A",
            "text": "Anillo vaginal liberador de etinilestradiol y etonogestrel"
          },
          {
            "id": "B",
            "text": "Implante subdérmico de etonogestrel"
          },
          {
            "id": "C",
            "text": "Dispositivo intrauterino de cobre"
          },
          {
            "id": "D",
            "text": "Minipíldora de desogestrel"
          },
          {
            "id": "E",
            "text": "Dispositivo intrauterino liberador de levonorgestrel"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La Migraña con AURA a cualquier edad es una condición de CATEGORÍA 4 de la OMS (Riesgo inaceptable para la salud / contraindicación absoluta) para TODOS los métodos anticonceptivos hormonales combinados (ACOs, parche transdérmico y anillo vaginal). Los estrógenos provocan vasoconstricción y microtrombosis cerebral que, sumados a la fisiopatología vasoespástica del aura migrañosa, elevan drásticamente el riesgo de Infarto Cerebral Isquémico (ACV). En cambio, los métodos de solo progestágeno (implante, DIU-LNG, minipíldora) y el DIU de cobre son completamente seguros.\nB) Incorrecta. El implante es de solo progestágeno y es seguro en migraña con aura.\nC) Incorrecta. El DIU de cobre no tiene hormonas y es totalmente seguro.\nD) Incorrecta. El desogestrel no contiene estrógenos.\nE) Incorrecta. El DIU-LNG es de solo progestágeno local y seguro.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.008"
      },
      {
        "stem": "Una paciente que tomó la píldora de anticoncepción de emergencia de levonorgestrel 1.5 mg presenta un episodio de vómito profuso 45 minutos después de haber deglutido el comprimido. ¿Cuál es la indicación médica correcta a seguir?",
        "options": [
          {
            "id": "A",
            "text": "No realizar ninguna acción, pues la absorción intestinal completa ocurre en los primeros 15 minutos"
          },
          {
            "id": "B",
            "text": "Repetir de inmediato la dosis completa de 1.5 mg de Levonorgestrel, idealmente asociando un antiemético oral"
          },
          {
            "id": "C",
            "text": "Indicar que el método fracasó y que debe programarse una interrupción legal del embarazo"
          },
          {
            "id": "D",
            "text": "Administrar antibióticos profilácticos para evitar infecciones"
          },
          {
            "id": "E",
            "text": "Esperar 1 semana y realizar un test de embarazo en sangre"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La absorción gástrica y duodenal de los comprimidos tarda entre 1 y 2 horas.\nB) Correcta. De acuerdo a las directrices de la OMS y a la Norma General Técnica de Regulación de la Fertilidad del MINSAL, si una mujer vomitara dentro de las PRIMERAS 2 HORAS posteriores a la ingestión de la píldora de anticoncepción de emergencia de Levonorgestrel, se asume que el fármaco no fue absorbido en cantidad terapéutica suficiente y la paciente DEBE tomar una nueva dosis completa de 1.5 mg lo antes posible, pudiendo administrarse previamente un antiemético (como metoclopramida o domperidona) para asegurar la retención gástrica.\nC) Incorrecta. El método aún puede ser administrado y no se sabe si habrá fecundación.\nD) Incorrecta. Los antibióticos no tienen ningún rol en la anticoncepción.\nE) Incorrecta. No resolver la falta de absorción deja a la paciente totalmente desprotegida.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.02.1.008"
      }
    ]
  }
];

const bloque2Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowGinecologia(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque2Classes };
