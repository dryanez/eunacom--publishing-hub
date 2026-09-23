/**
 * TOMO 19: OBSTETRICIA & MEDICINA MATERNO-FETAL · BLOQUE 3
 * Metrorragias de la Primera y Segunda Mitad del Embarazo (19.10 a 19.13)
 */

const { flowObstetricia } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ob-10",
    "classId": "ob-10",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Metrorragias de la Primera y Segunda Mitad del Embarazo",
    "topicLabel": "19.10",
    "title": "Aborto Espontáneo, Formas Clínicas, Aborto Séptico y Ley IVE 21.030",
    "perfilCode": "3.01.1.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cobertura en red pública según Guía Perinatal MINSAL y Ley IVE 21.030.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#35) · EUNACOM Julio 2023 (Q#14) · EUNACOM Diciembre 2022 (Q#8)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico diferencial según cuello cerrado vs abierto, vitalidad embrionaria y shock séptico",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de las Formas Clínicas de Aborto",
    "diagramRows": [
      {
        "t": "Metrorragia del 1° Trimestre (< 20 sem) + Dolor Hipogástrico",
        "s": "Especuloscopía para constatar origen + Tacto vaginal para evaluar OCI + Ecografía TV",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Estado del Orificio Cervical Interno (OCI)",
        "al": "OCI Cerrado vs OCI Abierto",
        "ll": "OCI Cerrado",
        "left": {
          "t": "AMENAZA DE ABORTO vs ABORTO RETENIDO / COMPLETO",
          "s": "Eco TV: ¿Embrión con LCF (+) -> Reposo relativo y abstinencia sexual? ¿Saco anembrionado o LCF (-) -> Aborto retenido? ¿Útero vacío con endometrio < 15mm -> Aborto completo?",
          "type": "warn"
        },
        "rl": "OCI Abierto / Permeable",
        "right": {
          "t": "ABORTO EN EVOLUCIÓN / INEVITABLE vs INCOMPLETO",
          "s": "Eco TV: restos ovulares intrauterinos + cuello abierto. Si hay fiebre/fetidez -> ¡ABORTO SÉPTICO! Manejo urgente con ATB EV triple asociación y legrado",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Manejo del Aborto Retenido / Incompleto",
        "al": "Tratamiento Farmacológico vs Quirúrgico",
        "ll": "Médico (Estable, < 10-12 sem)",
        "left": {
          "t": "Misoprostol 800 mcg vaginal/sublingual",
          "s": "Dosis única (repetible en 24h) · Alta eficacia de expulsión · Control ecográfico ambulatorio",
          "type": "acc"
        },
        "rl": "Quirúrgico (Hemorragia profusa, infección o > 12 sem)",
        "right": {
          "t": "AMEU (Aspiración Manual Endouterina) o LUI",
          "s": "AMEU preferido por menor tasa de perforación uterina y sinequias (Sd. Asherman) vs Legrado Uterino Instrumental",
          "type": "crit"
        }
      }
    ],
    "contexto": "El aborto es la interrupción del embarazo antes de las 20 semanas de gestación o con un peso fetal inferior a 500 gramos. Representa el principal motivo de consulta por sangrado del primer trimestre. Para el EUNACOM es indispensable dominar el diagnóstico diferencial de sus formas clínicas basado en la especuloscopía, el tacto vaginal (OCI cerrado vs abierto) y los hallazgos de la ecografía transvaginal. Asimismo, el aborto séptico es una urgencia ginecobstétrica letal que exige antibioterapia empírica triple y evacuación uterina inmediata. Finalmente, la Ley 21.030 despenaliza la interrupción voluntaria en tres causales específicas con objeción de conciencia regulada.",
    "contentSections": [
      {
        "subhead": "1. Definición y Diagnóstico Diferencial de las Formas Clínicas de Aborto",
        "paragraphs": [
          "• <strong>Amenaza de Aborto:</strong> Metrorragia escasa o moderada con dolor cólico hipogástrico leve. Al examen ginecológico: <strong>OCI cerrado</strong>. En la ecografía transvaginal: saco gestacional normoinserto con <strong>embrión con LCF positivos</strong>. Manejo: reposo relativo, abstinencia sexual, descartar patología infecciosa cervical o urinaria. No hay evidencia de beneficio con progesterona de rutina salvo aborto recurrente previo.",
          "• <strong>Aborto en Evolución / Inevitable:</strong> Metrorragia moderada a severa con contracciones uterinas dolorosas frecuentes. Al examen: <strong>OCI permeable / abierto</strong>. Las membranas pueden estar íntegras (en evolución) o rotas (inevitable). La pérdida gestacional es irreversible.",
          "• <strong>Aborto Incompleto:</strong> Expulsión parcial de productos de la concepción. El paciente relata expulsión de coágulos o tejido carnoso. Al examen: <strong>OCI abierto</strong>, útero más pequeño que la amenorrea pero aún aumentado de tamaño. Ecografía TV: presencia de <strong>restos trofoblásticos heterogéneos intrauterinos con grosor endometrial > 15-20 mm</strong> o masa desorganizada con Doppler.",
          "• <strong>Aborto Completo:</strong> Expulsión total del saco gestacional y anexos. Cesan el dolor cólico y el sangrado se reduce a escaso. Al examen: <strong>OCI cerrado</strong>, útero contraído y de tamaño normal. Ecografía TV: línea endometrial fina, lineal y homogénea (< 8-10 mm), sin ecos retenidos. Conducta: observación ambulatoria y control.",
          "• <strong>Aborto Retenido o Diferido (Huevo Anembrionado / Muerte Embrionaria Precoz):</strong> Cese del desarrollo gestacional sin expulsión de restos ni sangrado inicial activo. Al examen: <strong>OCI cerrado</strong>. Criterios ecográficos de no viabilidad: <em>1)</em> Longitud céfalo-nalga (LCN) ≥ 7 mm sin actividad cardíaca; <em>2)</em> Diámetro medio del saco gestacional (DMSG) ≥ 25 mm sin vesícula vitelina ni polo embrionario (saco anembrionado); <em>3)</em> Ausencia de embrión con LCF tras 11-14 días de una ecografía que mostró saco sin embrión."
        ]
      },
      {
        "subhead": "2. Manejo Terapéutico del Aborto: Farmacológico vs Quirúrgico",
        "paragraphs": [
          "• <strong>Manejo Farmacológico (Elección en aborto < 10-12 semanas sin sangrado incoercible ni sepsis):</strong>",
          "  - <strong>Misoprostol:</strong> Análogo sintético de PGE1. Dosis estándar de <strong>800 mcg por vía vaginal o sublingual</strong> (repetible una segunda dosis a las 24 horas si no hay expulsión). Tasa de éxito > 85-90%. Efectos adversos esperables: dolor cólico, fiebre autolimitada transitoria (< 38°C por efecto directo hipotalámico), náuseas, diarrea.",
          "• <strong>Manejo Quirúrgico (Indicado ante hemorragia abundante, inestabilidad hemodinámica, sospecha de infección o fracaso del tratamiento médico):</strong>",
          "  - <strong>Aspiración Manual Endouterina (AMEU):</strong> Método de elección por sobre el legrado instrumental en embarazos ≤ 12 semanas. Ventajas: ambulatorio con anestesia local o sedación, menor pérdida sanguínea, menor dolor y <strong>menor riesgo de perforación uterina y sinequias uterinas secundarias (Síndrome de Asherman)</strong>.",
          "  - <strong>Legrado Uterino Instrumental (LUI):</strong> Procedimiento en pabellón bajo anestesia regional o general. Reservado para úteros > 12 semanas, sangrado masivo o falta de insumos de aspiración vacuum.",
          "• <strong>Profilaxis de Incompatibilidad Rh:</strong> Toda paciente con grupo Rh (-) no sensibilizada con aborto espontáneo o inducido DEBE recibir <strong>Inmunoglobulina Anti-D (300 mcg IM, o 120 mcg en < 12 sem)</strong> dentro de las primeras 72 horas para prevenir la aloinmunización."
        ]
      },
      {
        "subhead": "3. Aborto Séptico: Cuadro Crítico y Manejo Escalonado",
        "paragraphs": [
          "• <strong>Etiología y Fisiopatología:</strong> Sobreinfección polimicrobiana (ascendente desde microbiota vaginal o secundaria a maniobras abortivas inseguras no asépticas). Gérmenes involucrados: anaerobios (<em>Bacteroides fragilis</em>, <em>Clostridium perfringens</em>), bacilos Gram negativos (<em>E. coli</em>, <em>Klebsiella</em>) y Gram positivos (<em>Streptococcus agalactiae</em>, <em>Enterococcus</em>).",
          "• <strong>Clínica de Alarma:</strong> Fiebre ≥ 38°C, calofríos, dolor hipogástrico continuo e intenso, flujo vaginal purulento o de <strong>olor fétido pútrido</strong>, subinvolución uterina con útero blando y exquisitamente doloroso a la movilización cervical. Si hay <em>Clostridium</em>: crepitación uterina o pelviana, ictericia bronceada por hemólisis masiva intravascular y oliguria (Síndrome de Mondor).",
          "• <strong>Esquema Antibiótico Triple Asociación EV Inmediato (Hospitalización en UCI/UTI):</strong>",
          "  - <strong>Ceftriaxona (o Ciprofloxacino) + Metronidazol + Ampicilina</strong>, o clásicamente <strong>Ampicilina (2g c/6h EV) + Gentamicina (5 mg/kg/día EV) + Metronidazol (500 mg c/8h EV)</strong> o Clindamicina (900 mg c/8h EV).",
          "• <strong>Evacuación Quirúrgica:</strong> Tras estabilizar y luego de 2 a 4 horas de iniciados los antibióticos EV de amplio espectro, realizar <strong>evacuación uterina inmediata mediante AMEU o legrado suave</strong>. Si no responde, existe necrosis miometrial, pelviperitonitis o shock refractario: <strong>Histerectomía total de urgencia</strong>."
        ]
      },
      {
        "subhead": "4. Marco Legal en Chile: Ley IVE 21.030 (Tres Causales)",
        "paragraphs": [
          "• <strong>Causal 1 (Riesgo Vital Materno):</strong> La mujer se encuentre en riesgo vital presente o inminente, de modo que la interrupción del embarazo evite un peligro para su vida. No tiene límite de edad gestacional. No requiere comité; basta el diagnóstico del médico tratante.",
          "• <strong>Causal 2 (Inviabilidad Fetal Letal):</strong> El embrión o feto padezca una patología congénita adquirida o genética de carácter letal, incompatible con la vida extrauterina independiente. Requiere ratificación por un segundo especialista ginecobstetra. Sin límite de edad gestacional.",
          "• <strong>Causal 3 (Embarazo Producto de Violación):</strong> El embarazo sea resultado de una violación, siempre que no hayan transcurrido más de <strong>12 semanas de gestación</strong> (o hasta <strong>14 semanas</strong> si se trata de una menor de 14 años). Requiere ratificación por un equipo de salud psicosocial.",
          "• <strong>Objeción de Conciencia:</strong> El médico cirujano y el personal de pabellón pueden manifestar objeción de conciencia por escrito y previamente, pero <strong>NO pueden abstenerse si la paciente se encuentra en riesgo vital inmediato (Causal 1 urgente)</strong> y no hay otro médico disponible para subrogar."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial Clínico y Ecográfico de las Formas de Aborto",
      "headers": [
        "Forma Clínica",
        "Metrorragia",
        "Dolor Cólico",
        "Orificio Cervical Interno (OCI)",
        "Ecografía Transvaginal",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Amenaza de Aborto",
          "Escasa a moderada",
          "Leve o nulo",
          "CERRADO",
          "Saco normoinserto con embrión y LCF (+)",
          "Reposo relativo, descartar ITU/vaginitis, analgesia SOS"
        ],
        [
          "Aborto en Evolución",
          "Moderada a abundante",
          "Intenso y rítmico",
          "ABIERTO / PERMEABLE",
          "Restos o saco en cérvix, desprendimiento",
          "Hospitalización, analgesia, preparar evacuación"
        ],
        [
          "Aborto Incompleto",
          "Abundante con coágulos",
          "Moderado a severo",
          "ABIERTO / PERMEABLE",
          "Restos ovulares heterogéneos, endometrio > 15 mm",
          "Evacuación uterina: AMEU o Misoprostol 800 mcg"
        ],
        [
          "Aborto Completo",
          "Mínima o cesó",
          "Cede progresivamente",
          "CERRADO",
          "Cavidad vacía, endometrio fino regular < 8-10 mm",
          "Observación ambulatoria, control clínico"
        ],
        [
          "Aborto Retenido",
          "Nula o escasa mancha",
          "Ausente",
          "CERRADO",
          "LCN ≥ 7mm sin LCF o DMSG ≥ 25mm sin embrión",
          "Misoprostol 800 mcg vaginal o AMEU electivo"
        ],
        [
          "Aborto Séptico",
          "Purulenta / Fétida",
          "Severo continuo",
          "Generalmente ABIERTO",
          "Restos uterinos + hiperemia / colecciones",
          "Hospitalización UCI, ATB triple EV + AMEU/LUI en 2-4h"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios de Gravedad, Factores de Riesgo y Complicaciones en Aborto",
      "headers": [
        "Complicación",
        "Signos de Alarma y Presentación",
        "Conducta de Rescate Inmediata"
      ],
      "rows": [
        [
          "Shock Hipovolémico por Metrorragia Masiva",
          "PAS < 90 mmHg, taquicardia > 120 lpm, palidez profusa, sangrado genital continuo con coágulos gigantes",
          "Vías venosas periféricas gruesas (14-16G), fluidoterapia con Cristaloides, hemoderivados (glóbulos rojos) y AMEU/LUI de emergencia"
        ],
        [
          "Aborto Séptico Complicado (Sd. de Mondor)",
          "Infección por Clostridium perfringens con hemólisis masiva, ictericia flavínica/bronceada, hemoglobinuria y falla renal aguda",
          "UCI de inmediato, ATB con Penicilina G sódica a dosis masivas o Clindamicina + Gentamicina + Histerectomía total temprana"
        ],
        [
          "Perforación Uterina Instrumental",
          "Pérdida de resistencia al paso de la cureta, aspiración de epiplón o grasa mesentérica, dolor súbito e hipotensión",
          "Suspender procedimiento de inmediato, laparoscopía o laparotomía exploradora para reparar lesión uterina y descartar daño intestinal"
        ],
        [
          "Sinequias Uterinas (Sd. de Asherman)",
          "Amenorrea secundaria o hipomenorrea tras legrado uterino enérgico post-aborto",
          "Histeroscopía diagnóstica y terapéutica con lisis de bridas + estrogenoterapia"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolos Farmacológicos y Quirúrgicos Oficiales en Aborto (MINSAL)",
      "headers": [
        "Modalidad",
        "Indicaciones Específicas",
        "Esquema y Posología",
        "Efectos Secundarios y Cuidados"
      ],
      "rows": [
        [
          "Misoprostol Médico",
          "Aborto retenido o incompleto < 12 semanas, paciente hemodinámicamente estable",
          "800 mcg por vía vaginal o sublingual en dosis única (repetible a las 24h si es necesario)",
          "Cólicos, fiebre transitoria autolimitada, diarrea. Control ecográfico a los 7-14 días."
        ],
        [
          "AMEU (Aspiración Manual)",
          "Tratamiento de elección en aborto incompleto o retenido ≤ 12 semanas",
          "Cánulas flexibles de Karman conectadas a jeringa de vacío con presión negativa (60 mmHg)",
          "Menor tasa de perforación y sinequias. Realizable con bloqueo paracervical ambulatorio."
        ],
        [
          "Legrado Uterino (LUI)",
          "Falta de instrumental AMEU, útero > 12 semanas o sangrado profuso activo",
          "Dilatación cervical con bujías de Hégar y raspado de paredes con cureta metálica fenestrada",
          "Riesgo de perforación miometrial y síndrome de Asherman. Requiere anestesia general/regional."
        ],
        [
          "Profilaxis Anti-D",
          "Toda mujer Rh (-) no sensibilizada con aborto espontáneo o legrado",
          "Inmunoglobulina Anti-D 300 mcg IM (o 120-250 mcg si EG < 12 semanas) en < 72h",
          "Previene la producción de anticuerpos anti-D maternos para futuros embarazos."
        ]
      ]
    },
    "vignette": "Paciente de 24 años, multigesta de 1, cursando embarazo de 9 semanas por FUR confiable, consulta en Urgencias por sangrado vaginal oscuro de 2 días de evolución y dolor sordo en hipogastrio. Al examen: signos vitales estables (PA 115/75 mmHg, FC 74 lpm, afebril). Especuloscopía: metrorragia escasa proveniente de cavidad uterina, orificio cervical externo e interno CERRADOS sin restos visibles. Se realiza ecografía transvaginal que revela saco gestacional intrauterino normoinserto con longitud céfalo-nalga (LCN) de 12 mm, SIN evidencia de latidos cardíacos fetales ni flujo Doppler. La paciente refiere no haber expulsado ningún tejido carnoso ni coágulo.",
    "explicacion": "La presencia de un embrión intrauterino con LCN ≥ 7 mm sin actividad cardíaca en una paciente con OCI cerrado define con certeza el diagnóstico de Aborto Retenido (o diferido / muerte embrionaria precoz). Al encontrarse la paciente hemodinámicamente estable y con una gestación menor a 12 semanas, la conducta de elección de primera línea acordada por la evidencia actual y las guías clínicas es ofrecer el manejo médico con Misoprostol a dosis de 800 mcg por vía vaginal o sublingual (o como alternativa la Aspiración Manual Endouterina - AMEU si la paciente prefiere tratamiento quirúrgico inmediato o presenta contraindicaciones para misoprostol). No se debe adoptar conducta expectante prolongada por riesgo de sangrado sobreagregado o coagulopatía de consumo.",
    "keyPoints": [
      "Amenaza de aborto: Sangrado + dolor pero OCI CERRADO y embrión con LCF POSITIVOS en la eco TV.",
      "Aborto en evolución o inevitable: Metrorragia dolorosa con OCI ABIERTO / PERMEABLE.",
      "Aborto incompleto: OCI abierto con restos ovulares heterogéneos y endometrio engrosado (> 15 mm).",
      "Aborto completo: OCI cerrado, útero involucionado y cavidad endometrial vacía lineal (< 8-10 mm).",
      "Criterio ecográfico de aborto retenido: Embrión con LCN ≥ 7 mm SIN LCF, o saco ≥ 25 mm sin embrión.",
      "Tratamiento médico de elección < 12 semanas: Misoprostol 800 mcg vía vaginal o sublingual.",
      "Quirúrgico de elección < 12 semanas: AMEU por menor riesgo de perforación y sinequias que el LUI.",
      "Aborto séptico: Triada clínica fétida + fiebre, requiere ATB triple EV urgente y evacuación en 2-4 horas.",
      "Toda paciente Rh negativa no sensibilizada debe recibir Inmunoglobulina Anti-D antes de 72 horas."
    ],
    "questions": [
      {
        "stem": "Una paciente de 22 años con 8 semanas de amenorrea acude al servicio de urgencia por sangrado genital rojo oscuro escaso y dolor cólico leve en hipogastrio. Al examen ginecológico se constata sangrado escaso por OCE, OCI cerrado y útero acorde a la edad gestacional. La ecografía transvaginal confirma un saco gestacional intrauterino normoinserto con embrión de LCN 14 mm, con latidos cardíacos fetales presentes y rítmicos a 155 lpm. No se visualizan hematomas subcoriales. ¿Cuál es el diagnóstico más probable y la conducta médica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Aborto incompleto; realizar legrado uterino instrumental de urgencia"
          },
          {
            "id": "B",
            "text": "Amenaza de aborto; indicar reposo relativo, abstinencia sexual y control ambulatorio"
          },
          {
            "id": "C",
            "text": "Aborto retenido; administrar Misoprostol 800 mcg vaginal"
          },
          {
            "id": "D",
            "text": "Embarazo ectópico no roto; administrar Metotrexato intramuscular"
          },
          {
            "id": "E",
            "text": "Aborto inevitable; hospitalizar para infusión de oxitocina"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En el aborto incompleto el OCI está permeable y se observan restos ovulares desorganizados, no un embrión vital con LCF presentes.\nB) Correcta. El cuadro clásico de metrorragia de la primera mitad del embarazo con OCI cerrado y visualización ecográfica de un embrión con actividad cardíaca presente y normal (LCF +) corresponde a una Amenaza de Aborto. La conducta recomendada por MINSAL consiste en descartar patología infecciosa cervical o urinaria concomitante, indicar reposo físico y reposo sexual (abstinencia), y seguimiento ambulatorio. No se aconseja el uso rutinario de progesterona si no hay antecedentes de abortos recurrentes.\nC) Incorrecta. El embrión está vivo con LCF presentes; el misoprostol provocaría un aborto.\nD) Incorrecta. El saco está normoinserto intrauterino, descartando embarazo ectópico.\nE) Incorrecta. El aborto inevitable cursa con cuello dilatado y membranas rotas, lo cual no ocurre aquí.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.001"
      },
      {
        "stem": "Una mujer de 29 años, sin antecedentes mórbidos, ingresa a urgencias con fiebre de 38.8°C, taquicardia de 118 lpm, compromiso del estado general y dolor abdominal continuo severo. Refiere haber tenido una pérdida gestacional espontánea hace 4 días de un embarazo de 10 semanas, sin consultar previamente. Al examen físico: abdomen muy sensible en hipogastrio con rebote dudoso. Especuloscopía: cuello dilatado con salida de secreción hemato-purulenta de olor extraordinariamente fétido. El útero está aumentado de tamaño, blando y exquisitamente doloroso al tacto bimanual. ¿Cuál es la conducta inicial prioritaria e imperativa?",
        "options": [
          {
            "id": "A",
            "text": "Realizar legrado uterino instrumental de inmediato antes de cualquier otra medida"
          },
          {
            "id": "B",
            "text": "Tomar hemocultivos, iniciar antibióticos endovenosos de amplio espectro (triple cobertura para anaerobios y Gram negativos) y programar evacuación uterina a las 2-4 horas de cobertura"
          },
          {
            "id": "C",
            "text": "Indicar tratamiento ambulatorio con amoxicilina más ácido clavulánico oral y reposo absoluto"
          },
          {
            "id": "D",
            "text": "Administrar Misoprostol 800 mcg por vía oral y alta a domicilio con analgésicos"
          },
          {
            "id": "E",
            "text": "Realizar laparotomía exploradora inmediata para histerectomía total sin intentar antibioticoterapia previa"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Realizar un legrado instrumental a ciegas sobre un útero séptico friable sin impregnación antibiótica previa desencadena una bacteriemia masiva que conduce a shock séptico refractario y aumenta enormemente el riesgo de perforación uterina.\nB) Correcta. La combinación de fiebre alta, dolor hipogástrico, loquios o secreción purulenta fétida y útero doloroso subinvolucionado tras un aborto configura un Aborto Séptico. Es una emergencia infectológica mayor. La conducta médica oficial consiste en hospitalización inmediata en UTI/UCI, reanimación con fluidos, toma de cultivos, inicio precoz de antibioticoterapia parenteral de amplio espectro con triple asociación (ej. Ceftriaxona/Gentamicina + Ampicilina + Metronidazol o Clindamicina) para esterilizar el torrente sanguíneo, y posteriormente (a las 2 a 4 horas de iniciada la cobertura antibiótica) proceder a la evacuación uterina instrumental mediante AMEU o curetaje suave.\nC) Incorrecta. La vía oral y el manejo ambulatorio están estrictamente proscritos en el aborto séptico.\nD) Incorrecta. El misoprostol solo no trata la infección bacteriana invasiva ni garantiza la evacuación rápida en sepsis.\nE) Incorrecta. La histerectomía se reserva para casos de falla multiorgánica refractaria, gangrena miometrial por Clostridium o perforación uterina comprobada.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.001"
      },
      {
        "stem": "Una paciente de 25 años acude a la urgencia obstétrica por metrorragia moderada y dolor cólico intenso. En el tacto vaginal se constata cuello uterino con orificio cervical interno abierto y permeable a 2 cm, palpándose tejido ovular en el canal endocervical. La ecografía transvaginal muestra una masa heterogénea intrauterina de 28 mm sugerente de restos embrionarios y trofoblásticos. La paciente se encuentra afebril y con signos vitales normales. ¿Cuál es el diagnóstico clínico más exacto?",
        "options": [
          {
            "id": "A",
            "text": "Amenaza de aborto"
          },
          {
            "id": "B",
            "text": "Aborto retenido"
          },
          {
            "id": "C",
            "text": "Aborto incompleto"
          },
          {
            "id": "D",
            "text": "Aborto completo"
          },
          {
            "id": "E",
            "text": "Embarazo molar parcial"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. En la amenaza de aborto el OCI está estrictamente cerrado.\nB) Incorrecta. En el aborto retenido el OCI está cerrado y el tejido no está siendo expulsado activamente.\nC) Correcta. La conjunción de metrorragia activa, cuello con OCI permeable/abierto donde se palpan tejidos ovulares o restos, y confirmación ecográfica de restos intrauterinos desorganizados define el Aborto Incompleto. El tratamiento consiste en la evacuación de la cavidad mediante AMEU o Misoprostol.\nD) Incorrecta. En el aborto completo el cuello ya se ha cerrado y la ecografía muestra un endometrio delgado y lineal sin restos.\nE) Incorrecta. Aunque la mola muestra restos vesiculares, la presencia de OCI abierto con expulsión de restos fetoplacentarios típicos corresponde a la definición clínica de aborto incompleto.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.001"
      },
      {
        "stem": "En relación con la Ley 21.030 que regula la despenalización de la interrupción voluntaria del embarazo en Chile en tres causales, ¿cuál de las siguientes afirmaciones es correcta respecto a la causal de violación (Tercera Causal)?",
        "options": [
          {
            "id": "A",
            "text": "Requiere obligatoriamente que exista una denuncia judicial previa y condena al agresor antes del procedimiento"
          },
          {
            "id": "B",
            "text": "El plazo máximo para su realización es de hasta 12 semanas de gestación en mayores de 14 años, y de hasta 14 semanas en niñas menores de 14 años"
          },
          {
            "id": "C",
            "text": "Cualquier médico objetor de conciencia puede negarse a derivar a la paciente a un centro no objetor"
          },
          {
            "id": "D",
            "text": "No existe límite de edad gestacional para la interrupción en caso de violación comprobada"
          },
          {
            "id": "E",
            "text": "Requiere siempre la aprobación unánime de un comité de ética hospitalario"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La ley chilena no exige que haya denuncia policial ni fallo condenatorio; basta la declaración de la mujer y la evaluación del equipo de salud multidisciplinario.\nB) Correcta. La Ley 21.030 establece para la tercera causal (violación) un límite estricto de edad gestacional de hasta 12 semanas de gestación en mujeres mayores de 14 años, y se extiende hasta las 14 semanas de gestación cuando la víctima es una menor de 14 años.\nC) Incorrecta. El profesional que manifiesta objeción de conciencia tiene el deber legal estricto de derivar de inmediato a la paciente a un equipo o institución que realice la prestación.\nD) Incorrecta. La única causal sin límite temporal de edad gestacional es la Causal 1 (riesgo vital materno) y la Causal 2 (inviabilidad fetal letal).\nE) Incorrecta. No requiere aprobación de comité ético, sino verificación médica y del equipo psicosocial.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.001"
      }
    ]
  },
  {
    "id": "ob-11",
    "classId": "ob-11",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Metrorragias de la Primera y Segunda Mitad del Embarazo",
    "topicLabel": "19.11",
    "title": "Embarazo Ectópico: Localizaciones, Diagnóstico con β-hCG Cuantitativa, Manejo Médico (Metotrexato) vs Quirúrgico",
    "perfilCode": "3.01.1.002",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Protocolo de Urgencia Ginecológica de Alta Complejidad.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#38) · EUNACOM Julio 2023 (Q#16) · EUNACOM Julio 2022 (Q#22)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico mediante zona discriminatoria de β-hCG y criterios estrictos de Metotrexato",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico del Embarazo Ectópico",
    "diagramRows": [
      {
        "t": "Sospecha de Embarazo Ectópico: Dolor Pélvico Anexial + Metrorragia + Test Embarazo (+)",
        "s": "Evaluar Estabilidad Hemodinámica + Solicitar β-hCG Cuantitativa y Ecografía Transvaginal",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Estabilidad Hemodinámica de la Paciente",
        "al": "Hemodinámica Inestable vs Estable",
        "ll": "Inestable (Hipotensión, Taquicardia, Shock, Irritación Peritoneal)",
        "left": {
          "t": "EMBARAZO ECTÓPICO ROTO (HEMOPERITONEO)",
          "s": "Reanimación con cristaloides + Hemoderivados + Laparotomía exploradora urgente (o Laparoscopía inmediata) para Salpingectomía",
          "type": "crit"
        },
        "rl": "Estable Hemodinámicamente",
        "right": {
          "t": "Zona Discriminatoria de β-hCG (1.500 - 2.000 UI/L)",
          "s": "Si β-hCG ≥ 1.500-2.000 UI/L y útero está VACÍO -> ¡Ectópico confirmado! Si masa anexial visible, evaluar criterios de MTX",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Criterios de Tratamiento Médico con Metotrexato",
        "al": "Cumple Criterios vs No Cumple / Contraindicado",
        "ll": "Cumple Criterios MTX (Estable, β-hCG < 5.000, Masa < 3.5cm, Sin LCF)",
        "left": {
          "t": "METOTREXATO IM (50 mg/m²)",
          "s": "Dosis única · Medir β-hCG en día 4 y día 7 (descenso ≥ 15% entre d4 y d7 indica éxito) · Rhogam si Rh (-)",
          "type": "acc"
        },
        "rl": "No Cumple (β-hCG > 5.000, Masa ≥ 3.5cm, LCF (+), Dolor Intenso)",
        "right": {
          "t": "CIRUGÍA: SALPINGOSTOMÍA vs SALPINGECTOMÍA",
          "s": "Laparoscopía quirúrgica · Salpingostomía lineal (conserva trompa si deseo de fertilidad y trompa contralateral enferma) vs Salpingectomía",
          "type": "crit"
        }
      }
    ],
    "contexto": "El embarazo ectópico ocurre cuando el blastocisto se implanta fuera de la cavidad endometrial, localizándose en más del 95% de los casos en la trompa de Falopio (especialmente en la región ampular). Es la principal causa de muerte materna en el primer trimestre debido a la hemorragia interna por rotura tubárica. En el EUNACOM se evalúa sistemáticamente la tríada clásica (amenorrea, dolor anexial y metrorragia escasa), la interpretación de la zona discriminatoria de la β-hCG (1.500 a 2.000 UI/L en relación con el útero vacío) y la selección rigurosa entre tratamiento médico con Metotrexato y cirugía laparoscópica.",
    "contentSections": [
      {
        "subhead": "1. Epidemiología, Factores de Riesgo y Localizaciones",
        "paragraphs": [
          "• <strong>Localizaciones Anatómicas:</strong>",
          "  - <strong>Tubárico (95-97%):</strong> Ampular (75-80%, la más frecuente), Ístmico (10-15%, el que más precozmente se rompe por escasa distensibilidad), Fímbrico (5%), Intersticial o Cornual (2-3%, el más tardío en romperse pero con <strong>hemorragia cataclísmica masiva</strong> por irrigación de la arteria uterina).",
          "  - <strong>No Tubárico (< 3-5%):</strong> Ovárico (3%), Abdominal (1%), Cicatriz de cesárea anterior (1-2%), Cervical (< 1%).",
          "• <strong>Factores de Riesgo Mayores (OR > 3):</strong> Cirugía tubárica previa (salpingoplastía, ligadura tubárica), antecedente de <strong>embarazo ectópico previo</strong> (el riesgo se multiplica por 5 a 10), infección por <em>Chlamydia trachomatis</em> o Enfermedad Inflamatoria Pélvica (EIP) previa con salpingitis, esterilidad previa y técnicas de reproducción asistida.",
          "• <strong>Factores de Riesgo Moderados/Leves:</strong> Uso actual de DIU (el DIU previene el embarazo intrauterino mucho más que el ectópico, por lo que si una mujer con DIU se embaraza, la probabilidad relativa de que sea ectópico es elevada), tabaquismo activo y múltiples parejas sexuales."
        ]
      },
      {
        "subhead": "2. Diagnóstico Clínico, Laboratorio y Ecografía",
        "paragraphs": [
          "• <strong>Tríada Clásica:</strong> <strong>1) Amenorrea o retraso menstrual</strong>; <strong>2) Dolor pélvico o en fosa ilíaca</strong> (sordo continuo que se agudiza bruscamente si se rompe la trompa); <strong>3) Metrorragia oscura</strong> (en borra de café o escasa por deprivación hormonal del endometrio decidualizado).",
          "• <strong>Examen Físico:</strong> Masa anexial unilateral exquisitamente dolorosa, signo de Frenkel (+) (dolor a la lateralización cervical) y fondo de saco de Douglas abombado y muy sensible (grito de Douglas). Si hay rotura: shock hipovolémico, omalgia (signo de Kehr por irritación frénica por hemoperitoneo) y abdomen en tabla.",
          "• <strong>β-hCG Cuantitativa y Zona Discriminatoria:</strong>",
          "  - En un embarazo intrauterino normal, los niveles de β-hCG se duplican cada 48 horas (aumento mínimo de 53-66% en 48h). En el ectópico, la curva sube lentamente, forma meseta o desciende de modo atípico.",
          "  - <strong>Zona Discriminatoria (1.500 a 2.000 UI/L):</strong> Con niveles de β-hCG ≥ 1.500-2.000 UI/L, una <strong>Ecografía Transvaginal (ETV) DEBE evidenciar saco gestacional intrauterino</strong> si el embarazo es normoinserto. Por lo tanto: <strong>β-hCG ≥ 1.500-2.000 UI/L con útero VACÍO confirma el diagnóstico presuntivo de Embarazo Ectópico</strong>.",
          "• <strong>Hallazgos Ecográficos Transvaginales:</strong> Masa anexial sólida o en anillo tubárico ('signo del halo tubárico' o 'bagel sign'), visualización de vesícula vitelina o embrión ectópico con LCF (diagnóstico definitivo del 20%), pseudo-saco gestacional intrauterino (acumulación de líquido central sin anillo trofoblástico doble) y líquido libre en el Douglas o recesos peritoneales."
        ]
      },
      {
        "subhead": "3. Manejo Médico con Metotrexato (MTX)",
        "paragraphs": [
          "• <strong>Mecanismo de Acción:</strong> Antagonista del ácido fólico que inhibe la dihidrofolato reductasa (DHFR), bloqueando la síntesis de purinas y timina, destruyendo las células trofoblásticas en rápida división.",
          "• <strong>Criterios de Inclusión para Metotrexato (ESTRICTOS):</strong>",
          "  - <strong>Estabilidad hemodinámica comprobada</strong> (sin hemoperitoneo significativo ni sospecha de rotura).",
          "  - Concentración sérica de <strong>β-hCG < 5.000 UI/L</strong> (el éxito supera el 90%; si es > 5.000 disminuye francamente).",
          "  - Diámetro máximo de la masa anexial <strong>< 3.5 a 4.0 cm</strong>.",
          "  - <strong>Ausencia de latidos cardíacos embrionarios (LCF negativos)</strong> en la ecografía.",
          "  - Ausencia de líquido libre en fondo de saco que supere los 100 mL.",
          "  - Paciente confiable y con acceso garantizado a seguimiento seriado.",
          "• <strong>Contraindicaciones Absolutas de MTX:</strong> Inestabilidad hemodinámica, sospecha de ectópico roto, trombocitopenia (< 100.000), leucopenia, insuficiencia renal (creatinina > 1.3), disfunción hepática (transaminasas elevadas al doble), úlcera péptica activa o lactancia materna.",
          "• <strong>Protocolo de Dosis Única y Seguimiento:</strong>",
          "  - Dosis: <strong>50 mg/m² de superficie corporal por vía intramuscular (IM)</strong> (Día 1).",
          "  - Medición seriada de β-hCG: Se mide en el <strong>Día 4 y Día 7</strong>. Nota: Es normal que en el Día 4 la β-hCG aumente levemente respecto al basal. El éxito se define como una <strong>reducción ≥ 15% de la β-hCG entre el Día 4 y el Día 7</strong>. Si no desciende ≥ 15%, se evalúa una segunda dosis o cirugía. Luego se controla semanalmente hasta valores indetectables (< 5 UI/L)."
        ]
      },
      {
        "subhead": "4. Manejo Quirúrgico: Salpingostomía vs Salpingectomía Laparoscópica",
        "paragraphs": [
          "• La vía de abordaje estándar es la <strong>Laparoscopía</strong>. La laparotomía abierta se reserva para pacientes en shock hipovolémico extremo descompensado o con contraindicaciones anestésicas de neumoperitoneo.",
          "• <strong>Salpingostomía Lineal:</strong> Apertura de la trompa por su borde antimesentérico con aspiración del trofoblasto y hemostasia, dejando la trompa abierta para cicatrización por segunda intención. Indicada en mujeres que <strong>desean preservar fertilidad y presentan daño o ausencia de la trompa contralateral</strong>. Riesgo: 5-15% de persistencia trofoblástica (exige seguimiento semanal con β-hCG hasta negativizar).",
          "• <strong>Salpingectomía Total:</strong> Extirpación completa de la trompa afectada. De elección si la trompa está rota, hemorragia incoercible, embarazo ectópico recurrente en la misma trompa, paridad satisfecha, trompa severamente destruida o cuando la trompa contralateral está sana."
        ]
      }
    ],
    "table": {
      "title": "Criterios de Elección Terapéutica en Embarazo Ectópico (MINSAL / ACOG)",
      "headers": [
        "Modalidad",
        "Indicaciones y Criterios",
        "Contraindicaciones",
        "Protocolo de Seguimiento"
      ],
      "rows": [
        [
          "Manejo Expectante",
          "β-hCG < 1.000 UI/L en franco descenso espontáneo, asintomática, masa < 2 cm",
          "Dolor, β-hCG en ascenso, inestabilidad",
          "β-hCG bisemanal hasta negativización total"
        ],
        [
          "Tratamiento Médico (Metotrexato)",
          "Estable hemodinámicamente, β-hCG < 5.000 UI/L, masa < 3.5 cm, SIN actividad cardíaca",
          "Inestabilidad, hemoperitoneo, LCF (+), falla renal/hepática, trombocitopenia",
          "β-hCG en Día 4 y 7 (descenso ≥ 15%), luego semanal hasta < 5 UI/L"
        ],
        [
          "Salpingostomía Laparoscópica",
          "Deseo de fertilidad futura, trompa contralateral ausente o enferma, trompa no rota",
          "Trompa severamente destruida, hemorragia incoercible, paridad satisfecha",
          "β-hCG semanal hasta negativizar (riesgo de tejido trofoblástico retenido)"
        ],
        [
          "Salpingectomía Laparoscópica",
          "Trompa rota, hemoperitoneo importante, paridad cumplida, ectópico recurrente",
          "Negativa de la paciente ante trompa única",
          "Control postoperatorio estándar, Rhogam si Rh (-)"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios de Rotura Tubárica, Hemoperitoneo y Shock Hipovolémico",
      "headers": [
        "Nivel de Compromiso",
        "Parámetros Clínicos y Hallazgos",
        "Conducta Quirúrgica Inmediata"
      ],
      "rows": [
        [
          "Ectópico No Roto",
          "PA y FC estables, dolor localizado tolerable, fondo de saco libre sin líquido en ETV",
          "Evaluar para Metotrexato IM ambulatorio vs Salpingostomía laparoscópica programada"
        ],
        [
          "Rotura Tubárica con Hemoperitoneo Moderado",
          "Taquicardia (FC 100-115), PA límite, dolor súbito lacerante, líquido en Douglas > 100 mL",
          "Ingreso hospitalario urgente, solicitar pruebas cruzadas, Laparoscopía para hemostasia y salpingectomía"
        ],
        [
          "Embarazo Ectópico Roto en Shock Cataclísmico",
          "PAS < 80 mmHg, FC > 125 lpm, palidez extrema, oliguria, irritación peritoneal difusa",
          "Activación de Protocolo de Hemorragia Masiva, infusión de glóbulos rojos O(-), Laparotomía exploratoria inmediata"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Comparación Farmacológica y Quirúrgica en Embarazo Ectópico",
      "headers": [
        "Intervención",
        "Dosis / Técnica",
        "Éxito Global",
        "Consideraciones Clave EUNACOM"
      ],
      "rows": [
        [
          "Metotrexato Dosis Única",
          "50 mg/m² IM (Día 1)",
          "88 - 92%",
          "Monitorear β-hCG día 4 y 7. El dolor 'de separación' en d3-d5 es habitual; diferenciar de rotura."
        ],
        [
          "Metotrexato Dosis Múltiple",
          "1 mg/kg IM en días 1, 3, 5, 7 alternado con Ácido Folínico 0.1 mg/kg en días 2, 4, 6, 8",
          "90 - 94%",
          "Mayor toxicidad gastrointestinal y hematológica. Reservado para casos específicos."
        ],
        [
          "Salpingectomía Total",
          "Sección y coagulación del meso-salpinx y ángulo tubárico",
          "> 99%",
          "Método curativo definitivo. Procedimiento más seguro ante urgencia vital materna."
        ],
        [
          "Inmunoglobulina Anti-D",
          "300 mcg IM (o 120 mcg en < 12 sem) si paciente es Rh negativa no sensibilizada",
          "100% prevención",
          "Administración OBLIGATORIA dentro de las 72 horas para prevenir sensibilización Rh."
        ]
      ]
    },
    "vignette": "Mujer de 28 años, con antecedente de un episodio de Enfermedad Pélvica Inflamatoria hace dos años, consulta en urgencias por dolor persistente en fosa ilíaca derecha y goteo genital oscuro escaso de 4 días de evolución, tras 6 semanas de amenorrea. Al examen: PA 120/75 mmHg, FC 78 lpm, afebril. Abdomen blando, doloroso a la palpación profunda en fosa ilíaca derecha sin signos de irritación peritoneal. Especuloscopía: escaso sangrado oscuro por orificio cervical externo, cuello cerrado. Tacto bimanual: dolor a la movilización cervical y masa anexial derecha de 2.5 cm discretamente sensible. Se solicita β-hCG cuantitativa que resulta en 2.800 UI/L. La ecografía transvaginal muestra cavidad uterina completamente vacía con endometrio engrosado de 12 mm sin saco gestacional intrauterino, y en anexo derecho se identifica una masa de 2.8 cm compatible con saco ectópico, sin latidos cardíacos embrionarios. No hay líquido libre en el fondo de saco de Douglas.",
    "explicacion": "La presencia de un valor de β-hCG sérica cuantitativa de 2.800 UI/L (muy por encima de la zona discriminatoria de 1.500-2.000 UI/L) asociado a una cavidad uterina vacía confirma plenamente el diagnóstico de Embarazo Ectópico Tubárico. La paciente se encuentra con estabilidad hemodinámica absoluta, tiene una masa anexial menor de 3.5 cm, una β-hCG < 5.000 UI/L y ausencia de latidos cardíacos fetales (LCF negativos) sin hemoperitoneo ecográfico. Por ende, la paciente cumple con todos los criterios de inclusión para recibir tratamiento médico de primera línea con Metotrexato intramuscular a dosis única de 50 mg/m², debiendo monitorizarse la β-hCG los días 4 y 7 post-administración y asegurar la aplicación de inmunoglobulina Anti-D si es Rh negativa.",
    "keyPoints": [
      "Localización más frecuente del embarazo ectópico: Trompa de Falopio, región ampular (75-80%).",
      "Localización tubárica más peligrosa por hemorragia masiva: Porción intersticial o cornual.",
      "Factor de riesgo mayor más potente: Antecedente personal de embarazo ectópico previo.",
      "Zona discriminatoria ecográfica de β-hCG: 1.500 a 2.000 UI/L. Si el útero está vacío, es ectópico.",
      "Criterios indispensables para Metotrexato: Paciente estable, β-hCG < 5.000 UI/L, masa < 3.5 cm y LCF (-).",
      "Seguimiento con MTX: Medir β-hCG los días 4 y 7. Se exige un descenso ≥ 15% entre día 4 y día 7.",
      "Manejo quirúrgico urgente (Salpingectomía): Obligatorio ante inestabilidad hemodinámica, rotura o falla de MTX.",
      "Salpingostomía lineal laparoscópica: Indicada si desea preservar fertilidad y la otra trompa está dañada.",
      "Toda paciente Rh negativa no sensibilizada debe recibir Inmunoglobulina Anti-D dentro de 72 horas."
    ],
    "questions": [
      {
        "stem": "Una paciente de 31 años, con amenorrea de 6 semanas y test de embarazo casero positivo, acude a urgencias por dolor en hemiabdomen inferior izquierdo y sangrado vaginal escaso intermitente en borra de café. Al examen: PA 122/78 mmHg, FC 74 lpm, abdomen sensible en fosa ilíaca izquierda sin defensa ni rebote. La ecografía transvaginal muestra cavidad uterina vacía con línea endometrial de 10 mm y en el anexo izquierdo se aprecia una imagen redondeada hipoecogénica de 2.6 cm de diámetro rodeada por un halo hiperecogénico, sin actividad cardíaca embrionaria ni líquido libre pelviano. El resultado de la β-hCG cuantitativa sérica es de 3.200 UI/L. Las pruebas hepáticas, hematocrito y creatinina son normales. ¿Cuál es la mejor alternativa terapéutica para esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Laparotomía de urgencia para histerectomía total y salpingectomía izquierda"
          },
          {
            "id": "B",
            "text": "Administración de Metotrexato intramuscular a dosis única (50 mg/m²)"
          },
          {
            "id": "C",
            "text": "Manejo expectante sin fármacos y control con β-hCG en 1 mes"
          },
          {
            "id": "D",
            "text": "Aspiración manual endouterina (AMEU) de la cavidad endometrial"
          },
          {
            "id": "E",
            "text": "Tratamiento con progesterona micronizada oral 200 mg al día"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La laparotomía abierta y la histerectomía son procedimientos mutilantes completamente desproporcionados y contraindicados para una paciente joven y estable con un ectópico no roto.\nB) Correcta. La paciente presenta un embarazo ectópico tubárico no roto confirmado por β-hCG > 2.000 UI/L con útero vacío. Cumple con todos los criterios de elegibilidad para el tratamiento médico con Metotrexato a dosis única: hemodinámicamente estable, β-hCG sérica menor a 5.000 UI/L (3.200 UI/L), masa anexial menor de 3.5 cm (2.6 cm), ausencia de latidos cardíacos fetales, sin hemoperitoneo y con función hepática/renal y hemograma normales. Este abordaje médico preserva la indemnidad tubárica con una tasa de resolución cercana al 90%.\nC) Incorrecta. El manejo expectante solo se permite con β-hCG muy baja (< 1.000 UI/L) y en franco descenso espontáneo confirmado en 48 horas.\nD) Incorrecta. El embarazo no está en la cavidad uterina; el legrado no resolverá el cuadro y expondrá a la trompa a rotura por retraso diagnóstico.\nE) Incorrecta. La progesterona no tiene indicación y favorecería el crecimiento del trofoblasto ectópico.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.002"
      },
      {
        "stem": "Una paciente de 26 años, con retraso menstrual de 7 semanas, es traída al servicio de urgencia en ambulancia por dolor abdominal súbito de extrema intensidad en fosa ilíaca derecha y síncope en su domicilio. Al ingreso: somnolienta, muy pálida y sudorosa. Presión arterial de 75/40 mmHg, pulso de 135 lpm filiforme y saturación de 93% ambiental. El abdomen está rígido, doloroso en forma generalizada con marcado signo de Blumberg. Al tacto vaginal se palpa gran dolor en fondo de saco posterior. El test rápido de orina es positivo para gonadotrofina coriónica. ¿Cuál es la conducta inmediata que salva la vida de la paciente?",
        "options": [
          {
            "id": "A",
            "text": "Indicar Metotrexato intramuscular a dosis de 50 mg/m² y solicitar ecografía transvaginal diferida"
          },
          {
            "id": "B",
            "text": "Reanimación activa con cristaloides endovenosos, activación de protocolo de hemotransfusión y traslado inmediato a pabellón para laparotomía exploradora urgente"
          },
          {
            "id": "C",
            "text": "Solicitar TAC de abdomen y pelvis con contraste endovenoso para localizar la fuente de sangrado"
          },
          {
            "id": "D",
            "text": "Instalar sonda Foley, tomar β-hCG sérica cuantitativa y esperar resultado en 3 horas"
          },
          {
            "id": "E",
            "text": "Realizar legrado uterino bajo anestesia local en sala de procedimientos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El metotrexato está absolutamente contraindicado ante sospecha de rotura e inestabilidad hemodinámica; su efecto tarda días en manifestarse y la paciente fallecería en minutos.\nB) Correcta. La combinación de dolor abdominal hiperagudo, síncope, hipotensión severa (75/40), taquicardia extrema (135 lpm), palidez y vientre peritoneal con test de gestación positivo constituye un cuadro clásico de Embarazo Ectópico Roto en Shock Hipovolémico (Hemoperitoneo Masivo). Constituye una emergencia quirúrgica de riesgo vital absoluto. La conducta consiste en soporte hemodinámico inmediato con accesos venosos gruesos, fluidoterapia con cristaloides tibios, hemoderivados (glóbulos rojos) y traslado inmediato a pabellón para laparotomía de urgencia para cohibir el sangrado mediante salpingectomía.\nC) Incorrecta. Una paciente inestable nunca debe llevarse a un tomógrafo por riesgo de PCR fuera de pabellón.\nD) Incorrecta. Retrasar la cirugía para esperar una prueba de laboratorio es una negligencia médica letal.\nE) Incorrecta. El legrado no detiene la hemorragia tubárica intraperitoneal.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.002"
      },
      {
        "stem": "Una paciente tratada con Metotrexato intramuscular por un embarazo ectópico tubárico acude al policlínico para su seguimiento. Su β-hCG basal (Día 1) fue de 2.400 UI/L. Al Día 4 la β-hCG subió a 2.650 UI/L, y al Día 7 el valor de β-hCG es de 2.100 UI/L. La paciente se encuentra estable y prácticamente sin molestias. ¿Cómo se interpreta esta evolución y cuál es la conducta correcta?",
        "options": [
          {
            "id": "A",
            "text": "El tratamiento ha fracasado porque el Día 4 aumentó la β-hCG; debe intervenirse quirúrgicamente de inmediato"
          },
          {
            "id": "B",
            "text": "El descenso entre el Día 4 y el Día 7 fue superior al 15%, por lo que el tratamiento es exitoso; corresponde continuar con controles semanales de β-hCG"
          },
          {
            "id": "C",
            "text": "El descenso entre el Día 4 y el Día 7 fue menor al 15%; está indicada una segunda dosis de Metotrexato o tratamiento quirúrgico"
          },
          {
            "id": "D",
            "text": "La paciente está curada definitivamente y debe recibir el alta sin nuevos exámenes"
          },
          {
            "id": "E",
            "text": "Debe indicarse leucovorina para revertir la toxicidad del metotrexato"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El aumento transitorio de la β-hCG entre el Día 1 y el Día 4 es fisiológico debido a la lisis trofoblástica inicial inducida por el fármaco, y no se considera fracaso.\nB) Correcta. El cálculo matemático muestra: del Día 4 (2.650 UI/L) al Día 7 (2.100 UI/L) hubo una reducción de 550 UI/L. El porcentaje de reducción es: (550 / 2.650) * 100 = 20.75%. Como 20.75% es superior al umbral exigido del 15% de reducción entre el día 4 y el día 7, el tratamiento se clasifica formalmente como exitoso. La conducta médica es continuar la monitorización ambulatoria semanal de la β-hCG sérica hasta alcanzar concentraciones indetectables (< 5 UI/L).\nC) Incorrecta. El descenso fue del 20.75%, que supera el 15%.\nD) Incorrecta. No está de alta; el seguimiento semanal es obligatorio hasta la negativización total.\nE) Incorrecta. La leucovorina no está indicada en el esquema de dosis única.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.002"
      },
      {
        "stem": "¿Cuál de las siguientes localizaciones anatómicas del embarazo ectópico se asocia clásicamente a una rotura más tardía (entre las 12 y 16 semanas de gestación), pero que al romperse provoca un hemoperitoneo fulminante y cataclísmico por la proximidad y compromiso de la arteria uterina?",
        "options": [
          {
            "id": "A",
            "text": "Porción ampular de la trompa"
          },
          {
            "id": "B",
            "text": "Porción ístmica de la trompa"
          },
          {
            "id": "C",
            "text": "Porción intersticial o cornual de la trompa"
          },
          {
            "id": "D",
            "text": "Porción fímbrica de la trompa"
          },
          {
            "id": "E",
            "text": "Embarazo cervical"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La porción ampular se rompe entre las 6 y 8 semanas.\nB) Incorrecta. La porción ístmica es la más estrecha y se rompe muy precozmente (antes de las 6 semanas).\nC) Correcta. El embarazo ectópico intersticial (o cornual) se implanta en el segmento intramural de la trompa que atraviesa el miometrio uterino. Debido a la mayor distensibilidad de las fibras miometriales que rodean este segmento, el saco gestacional puede crecer durante más tiempo, rompiéndose típicamente en forma tardía entre las 12 y 16 semanas de gestación. Dado que en esa zona se localiza la anastomosis entre la arteria uterina y la arteria ovárica, su rotura causa una hemorragia cataclísmica y exanguinante masiva, con alta mortalidad materna.\nD) Incorrecta. La porción fímbrica suele culminar en aborto tubárico hacia la cavidad abdominal.\nE) Incorrecta. El ectópico cervical produce hemorragia vaginal indolora masiva, no hemoperitoneo.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.002"
      }
    ]
  },
  {
    "id": "ob-12",
    "classId": "ob-12",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Metrorragias de la Primera y Segunda Mitad del Embarazo",
    "topicLabel": "19.12",
    "title": "Enfermedad Trofoblástica Gestacional: Mola Completa vs Parcial, Criterios de Neoplasia Trofoblástica Gestacional (NTG) y Seguimiento",
    "perfilCode": "3.01.1.003",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "No GES. Derivación y seguimiento en centro de gineco-oncología.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#41) · EUNACOM Diciembre 2022 (Q#19) · EUNACOM Julio 2021 (Q#12)",
    "frecuencia": "Alta rentabilidad · Patrón ecográfico en tormenta de nieve, niveles masivos de β-hCG y protocolo estricto de seguimiento semanal",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico, Manejo y Seguimiento de la Mola Hidatiforme",
    "diagramRows": [
      {
        "t": "Sospecha de Mola Hidatiforme: Metrorragia 1° Trimestre + Útero mayor a amenorrea + β-hCG > 100.000 UI/L",
        "s": "Especuloscopía (¿expulsión de vesículas en racimo de uvas?) + Ecografía Transvaginal",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Hallazgos Ecográficos y Genéticos",
        "al": "Mola Completa vs Mola Parcial",
        "ll": "Mola Hidatiforme Completa (Diploide 46XX)",
        "left": {
          "t": "Imagen en 'Nevada' / 'Copos de nieve'",
          "s": "Ausencia total de embrión/feto + Degeneración hidrópica difusa de vellosidades + Quistes tecaluteínicos bilaterales frecuentes por hiperestímulo",
          "type": "crit"
        },
        "rl": "Mola Hidatiforme Parcial (Triploide 69XXY)",
        "right": {
          "t": "Presencia de Feto / Embrión con Malformaciones",
          "s": "Vellosidades hidrópicas focales + Niveles moderados de β-hCG + Menor riesgo de neoplasia persistente",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Tratamiento y Seguimiento Hormonal Post-Evacuación",
        "al": "Evacuación Uterina vs Sospecha de NTG",
        "ll": "Evacuación: AMEU o Legrado por Aspiración",
        "left": {
          "t": "AMEU + Estudio Histopatológico",
          "s": "Evacuación con infusión simultánea de oxitocina · Enviar TODO el material a biopsia · Profilaxis Anti-D si Rh (-)",
          "type": "acc"
        },
        "rl": "Seguimiento Seriado Obligatorio con β-hCG",
        "right": {
          "t": "β-hCG semanal hasta 3 valores normales (< 5 UI/L)",
          "s": "Luego β-hCG mensual por 6 meses · Anticoncepción oral estricta por 1 año · Si se estanca o sube -> ¡NTG! Quimioterapia",
          "type": "crit"
        }
      }
    ],
    "contexto": "La Enfermedad Trofoblástica Gestacional (ETG) abarca un espectro proliferativo de anomalías del trofoblasto originadas a partir de una fertilización aberrante. Comprende las molas hidatiformes (completa y parcial) y las formas malignas agrupadas bajo el término Neoplasia Trofoblástica Gestacional (mola invasora, coriocarcinoma, tumor del sitio placentario). En el EUNACOM se evalúa con frecuencia la diferenciación genética y clínica entre mola completa y parcial, la imagen ecográfica clásica en 'tormenta de nieve', las complicaciones asociadas a los niveles desorbitados de β-hCG (hiperemesis severa, preeclampsia precoz < 20 sem, hipertiroidismo gestacional, quistes tecaluteínicos) y el protocolo de seguimiento hormonal estricto para pesquisar a tiempo la malignización.",
    "contentSections": [
      {
        "subhead": "1. Genética y Diferenciación entre Mola Completa y Mola Parcial",
        "paragraphs": [
          "• <strong>Mola Hidatiforme Completa:</strong>",
          "  - <strong>Genética:</strong> Diploide, 100% de origen paterno (androgenética). Lo más frecuente es <strong>46, XX (90%)</strong> por fecundación de un óvulo anucleado (vacío) por un espermatozoide haploide (23,X) que se duplica; o 46,XY (10%) por fecundación de un óvulo vacío por dos espermatozoides.",
          "  - <strong>Tejido Fetal:</strong> <strong>Ausencia completa de embrión o tejido fetal</strong>. Todas las vellosidades coriónicas sufren degeneración hidrópica (vesículas avasculares agrupadas en 'racimos de uvas').",
          "  - <strong>β-hCG y Clínica:</strong> Niveles masivamente elevados (habitualmente <strong>> 100.000 UI/L</strong>). Mayor riesgo de complicaciones hiperestrogénicas y un <strong>15 a 20% de riesgo de evolucionar a Neoplasia Trofoblástica Gestacional (NTG) persistente</strong>.",
          "• <strong>Mola Hidatiforme Parcial:</strong>",
          "  - <strong>Genética:</strong> Triploide (69 cromosomas: <strong>69,XXY en 70%</strong>, 69,XXX o 69,XYY). Resulta de la fertilización de un óvulo normal (23,X) por dos espermatozoides o por un espermatozoide diploide.",
          "  - <strong>Tejido Fetal:</strong> <strong>Presencia de embrión o feto</strong> (generalmente no viable, con malformaciones múltiples y restricción severa de crecimiento). La degeneración hidrópica es focal y coexiste con vellosidades normales.",
          "  - <strong>β-hCG y Clínica:</strong> Niveles de β-hCG normales o moderadamente elevados. Clínica indistinguible de un aborto incompleto o retenido. Riesgo de NTG bajo (1 a 5%)."
        ]
      },
      {
        "subhead": "2. Manifestaciones Clínicas y Hallazgos Ecográficos",
        "paragraphs": [
          "• <strong>Clínica Típica de la Mola Completa:</strong>",
          "  - <strong>Metrorragia del primer trimestre:</strong> Es el síntoma más común (97%). Sangrado intermitente indoloro o con cólicos, a veces con <strong>expulsión transvaginal de vesículas hialinas en racimo de uvas</strong> (patognomónico).",
          "  - <strong>Útero de tamaño marcadamente superior a la edad gestacional estimada:</strong> En el 50% de las pacientes, el útero es blando y crece desproporcionadamente rápido.",
          "  - <strong>Síntomas derivados de concentraciones extremas de β-hCG:</strong> <em>1)</em> Hiperemesis gravídica severa; <em>2)</em> <strong>Preeclampsia de inicio muy precoz (antes de la semana 20 de gestación)</strong> (¡Pregunta Clásica EUNACOM: si una paciente de 14 semanas debuta con preeclampsia, sospechar Mola o Síndrome Antifosfolípido!); <em>3)</em> Hipertiroidismo clínico (la subunidad beta de la hCG tiene similitud estructural con la TSH); <em>4)</em> <strong>Quistes tecaluteínicos ováricos bilaterales</strong> (grandes, multiloculados > 6 cm, por hiperestimulación de los receptores de LH por la hCG).",
          "• <strong>Ecografía Transvaginal:</strong> Imagen clásica descrita como <strong>'patrón en tormenta de nieve', 'panal de abejas' o 'racimo de uvas'</strong>: cavidad uterina ocupada por una masa ecogénica heterogénea con múltiples microquistes sonolúcidos avasculares y ausencia de saco gestacional o embrión intrauterino."
        ]
      },
      {
        "subhead": "3. Tratamiento Primario y Protocolo de Seguimiento Hormonal",
        "paragraphs": [
          "• <strong>Evacuación Uterina:</strong> El método de elección indiscutido es la <strong>Aspiración Manual Endouterina (AMEU) o Aspiración Mecánica al Vacío</strong>. Durante el procedimiento se administra infusión continua de Oxitocina para favorecer la contractilidad y disminuir la hemorragia y el riesgo de embolización trofoblástica. Se desaconseja el legrado cortante enérgico para no perforar el miometrio adelgazado. Todo el tejido obtenido debe enviarse a estudio histopatológico definitivo.",
          "• <strong>Pacientes con Paridad Cumplida:</strong> En mujeres mayores de 40 años con paridad cumplida, la <strong>Histerectomía total con conservación anexial</strong> es una opción válida que reduce drásticamente el riesgo de enfermedad invasora local (aunque no exime del seguimiento hormonal postoperatorio).",
          "• <strong>Profilaxis Rh:</strong> Administrar Inmunoglobulina Anti-D a toda paciente Rh negativa no sensibilizada.",
          "• <strong>Protocolo Oficial de Seguimiento Post-Evacuación (FIGO / MINSAL):</strong>",
          "  - <strong>Control Semanal de β-hCG:</strong> Se mide la β-hCG cuantitativa sérica cada semana hasta obtener <strong>tres valores consecutivos en rango normal (< 5 UI/L)</strong>.",
          "  - <strong>Control Mensual de β-hCG:</strong> Luego se controla mensualmente durante <strong>6 meses consecutivos</strong> para certificar la remisión completa.",
          "  - <strong>Anticoncepción Obligatoria:</strong> La paciente debe utilizar <strong>anticoncepción hormonal eficaz (ACOs o implante) durante un período mínimo de 6 a 12 meses</strong> para evitar un nuevo embarazo que elevaría la β-hCG e impediría distinguir entre gestación normal y recidiva maligna. ¡Se contraindica el DIU por riesgo de perforación e infección!"
        ]
      },
      {
        "subhead": "4. Criterios Diagnósticos de Neoplasia Trofoblástica Gestacional (NTG)",
        "paragraphs": [
          "• La NTG se diagnostica durante el seguimiento postmolar según los <strong>Criterios FIGO</strong>:",
          "  - <strong>Meseta de β-hCG:</strong> Cuatro o más mediciones de β-hCG en un lapso de al menos 3 semanas (días 1, 7, 14 y 21) que se mantienen en meseta (variación < 10%).",
          "  - <strong>Ascenso de β-hCG:</strong> Tres o más mediciones consecutivas de β-hCG en al menos 2 semanas (días 1, 7 y 14) con un incremento ≥ 10% en cada medición.",
          "  - <strong>Diagnóstico histológico de Coriocarcinoma.</strong>",
          "  - <strong>Persistencia de niveles detectables de β-hCG después de 6 meses</strong> de la evacuación.",
          "• <strong>Manejo de la NTG:</strong> Estudio de diseminación (TAC tórax-abdomen-pelvis; las metástasis pulmonares son las más frecuentes con imagen en 'suelta de globos', seguidas de vagina) y etapificación según el score de riesgo FIGO/OMS:",
          "  - <strong>Bajo Riesgo (Score ≤ 6):</strong> Monoquimioterapia de elección con <strong>Metotrexato</strong> (o Actinomicina D). Tasa de curación cercana al 100%.",
          "  - <strong>Alto Riesgo (Score ≥ 7):</strong> Poliquimioterapia combinada (régimen EMA-CO: Etopósido, Metotrexato, Actinomicina D, Ciclofosfamida, Vincristina)."
        ]
      }
    ],
    "table": {
      "title": "Diferencias Clave entre Mola Hidatiforme Completa y Mola Hidatiforme Parcial",
      "headers": [
        "Característica",
        "Mola Hidatiforme Completa",
        "Mola Hidatiforme Parcial"
      ],
      "rows": [
        [
          "Cariotipo",
          "46,XX (90%) o 46,XY (10%) · Diploide 100% paterno",
          "69,XXY (70%), 69,XXX o 69,XYY · Triploide (materno + 2 paternos)"
        ],
        [
          "Tejido Fetal / Embrión",
          "AUSENTE (nunca hay embrión ni eritrocitos fetales)",
          "PRESENTE (embrión no viable con malformaciones múltiples)"
        ],
        [
          "Vellosidades Coriónicas",
          "Edema hidrópico difuso y generalizado ('racimo de uvas')",
          "Edema hidrópico focal intercalado con vellosidades normales"
        ],
        [
          "Niveles de β-hCG",
          "Masivamente elevados (habitualmente > 100.000 UI/L)",
          "Normales o discretamente elevados (< 50.000 UI/L)"
        ],
        [
          "Tamaño Uterino",
          "Mayor a la edad gestacional en 50% de los casos",
          "Menor o igual a la edad gestacional estimada"
        ],
        [
          "Complicaciones Clínicas",
          "Preeclampsia < 20 sem, quistes tecaluteínicos, tirotoxicosis",
          "Raras; clínica indistinguible de aborto incompleto común"
        ],
        [
          "Ecografía Transvaginal",
          "Patrón característico en 'tormenta de nieve' o 'panal'",
          "Saco deformado con tejido trofoblástico focal + partes fetales"
        ],
        [
          "Riesgo de Secuela Maligna (NTG)",
          "15 a 20% de transformación a NTG",
          "1 a 5% de transformación a NTG"
        ]
      ]
    },
    "vignette": "Paciente de 21 años, primigesta, con amenorrea de 13 semanas, acude a urgencias por sangrado genital intermitente de 1 semana y náuseas y vómitos incoercibles que le impiden alimentarse. Al examen: PA 145/95 mmHg, FC 98 lpm, afebril. Abdomen: útero blando palpable a nivel del ombligo (altura uterina de 20 cm, notoriamente mayor a las 13 semanas teóricas). No se auscultan latidos cardiofetales con Doppler. La ecografía transvaginal revela cavidad uterina intensamente ocupada por tejido ecolúcido heterogéneo con múltiples vesículas de aspecto en 'tormenta de nieve', sin visualizarse embrión ni saco gestacional. En ambos anexos se aprecian quistes ováricos multiloculados de 7 cm de diámetro de aspecto tecaluteínico. La cuantificación de β-hCG sérica arroja 180.000 UI/L y el examen de orina muestra proteinuria de (+) en tirita reactiva.",
    "explicacion": "El cuadro clínico de metrorragia indolora, útero significativamente mayor a la edad gestacional, hiperemesis severa, desarrollo de hipertensión con proteinuria antes de la semana 20 y niveles estratosféricos de β-hCG (> 100.000 UI/L), asociado al patrón ecográfico patognomónico en 'tormenta de nieve' y quistes tecaluteínicos bilaterales, es diagnóstico indudable de Mola Hidatiforme Completa. El tratamiento de urgencia de primera línea consiste en la evacuación uterina mediante aspiración manual o mecánica al vacío (AMEU) bajo infusión concomitante de oxitocina, con envío de la totalidad de las muestras a estudio anatomopatológico, profilaxis con Inmunoglobulina Anti-D si es Rh negativa, y establecimiento inmediato de un protocolo estricto de seguimiento con β-hCG semanal hasta la remisión y mensual por 6 meses, junto con anticoncepción oral obligatoria.",
    "keyPoints": [
      "Mola completa: 46XX diploide 100% paterno, sin embrión, imagen en tormenta de nieve, β-hCG > 100.000.",
      "Mola parcial: 69XXY triploide, con presencia de tejido embrionario malformado y vellosidades focales.",
      "Preeclampsia antes de la semana 20 de gestación es casi sinónimo de Mola Hidatiforme en el EUNACOM.",
      "Quistes tecaluteínicos ováricos bilaterales: Causados por el hiperestímulo masivo de la β-hCG sobre receptores de LH.",
      "Tratamiento primario de elección: Aspiración Manual Endouterina (AMEU) o aspiración al vacío.",
      "Seguimiento postmolar: β-hCG semanal hasta 3 valores normales (< 5 UI/L), luego mensual por 6 meses.",
      "Anticoncepción oral obligatoria durante el seguimiento para no enmascarar una recurrencia con un embarazo.",
      "Criterio de NTG: Meseta de β-hCG en 3 semanas o ascenso de β-hCG en 2 semanas consecutivas.",
      "Tratamiento de NTG de bajo riesgo (Score FIGO ≤ 6): Monoquimioterapia con Metotrexato curativa al 100%."
    ],
    "questions": [
      {
        "stem": "Una paciente de 20 años cursando un embarazo de 12 semanas por amenorrea consulta por metrorragia indolora y vómitos incoercibles. Al examen físico se palpa un útero correspondiente a 18 semanas de gestación. La ecografía transvaginal muestra una masa intrauterina con múltiples cavidades quísticas pequeñas ('patrón en panal de abejas') y ausencia de embrión. La subunidad beta de gonadotrofina coriónica humana sérica cuantitativa es de 160.000 UI/L. ¿Cuál es el tratamiento primario indicado?",
        "options": [
          {
            "id": "A",
            "text": "Histerectomía total abdominal de urgencia con salpingooforectomía bilateral"
          },
          {
            "id": "B",
            "text": "Evacuación uterina mediante Aspiración Manual Endouterina (AMEU) o aspiración al vacío, con estudio histopatológico"
          },
          {
            "id": "C",
            "text": "Inducción médica con altas dosis de misoprostol oral como único tratamiento"
          },
          {
            "id": "D",
            "text": "Inicio inmediato de poliquimioterapia con esquema EMA-CO antes de cualquier cirugía"
          },
          {
            "id": "E",
            "text": "Punción transabdominal y aspiración de los quistes ováricos tecaluteínicos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La histerectomía total se reserva para pacientes añosas con paridad satisfecha que no desean fertilidad, y la salpingooforectomía es innecesaria porque los ovarios regresan espontáneamente al normalizarse la hCG.\nB) Correcta. El tratamiento de elección para la mola hidatiforme es la evacuación inmediata de la cavidad uterina mediante aspiración al vacío (aspiración mecánica o AMEU) bajo goteo de oxitocina, enviando todo el tejido a confirmación anatomopatológica. Se prefiere la aspiración sobre el legrado instrumental cortante por el elevado riesgo de hemorragia profusa y perforación del miometrio reblandecido.\nC) Incorrecta. El uso de misoprostol o agentes inductores de contracciones aislados aumenta drásticamente el riesgo de embolización pulmonar de tejido trofoblástico.\nD) Incorrecta. La quimioterapia no es el tratamiento inicial de la mola hidatiforme; solo se reserva para las pacientes que desarrollan una Neoplasia Trofoblástica Gestacional (NTG) durante el seguimiento.\nE) Incorrecta. Los quistes tecaluteínicos no deben puncionarse ni extirparse; son una respuesta fisiológica benigna que involuciona espontáneamente al evacuar la mola.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.003"
      },
      {
        "stem": "Una paciente de 24 años fue sometida a una aspiración de mola hidatiforme completa sin incidentes hace 4 semanas. Se encuentra asintomática. En su control postoperatorio se revisan los valores de β-hCG sérica cuantitativa tomados semanalmente: Semana 1 post-evacuación: 12.000 UI/L; Semana 2: 3.500 UI/L; Semana 3: 3.600 UI/L; Semana 4: 3.800 UI/L. ¿Cuál es el diagnóstico clínico y la conducta médica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Evolución post-evacuación completamente normal; continuar controles habituales sin cambios"
          },
          {
            "id": "B",
            "text": "Neoplasia Trofoblástica Gestacional (NTG); etapificar con score FIGO y derivar a ginecología oncológica para quimioterapia"
          },
          {
            "id": "C",
            "text": "Nuevo embarazo intrauterino en evolución; solicitar ecografía transvaginal y dar de alta de patología trofoblástica"
          },
          {
            "id": "D",
            "text": "Infección puerperal tardía; iniciar antibioticoterapia con amoxicilina más ácido clavulánico"
          },
          {
            "id": "E",
            "text": "Realizar un nuevo legrado uterino cortante enérgico para limpiar la cavidad"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los valores de β-hCG se estancaron y comenzaron a ascender entre la semana 2 y 4, lo que descarta una evolución normal.\nB) Correcta. El criterio diagnóstico de la FIGO para Neoplasia Trofoblástica Gestacional (NTG) se cumple cuando la β-hCG se mantiene en meseta durante tres semanas consecutivas o cuando se constata un ascenso de los valores en dos o más mediciones sucesivas durante el seguimiento postmolar. En esta paciente, los niveles pasaron de 3.500 a 3.600 y luego a 3.800 UI/L, lo cual confirma NTG (mola invasora o coriocarcinoma). La conducta médica obligatoria es etapificar a la paciente (mediante examen clínico, TAC de tórax-abdomen-pelvis) para calcular el score pronóstico FIGO e iniciar tratamiento con quimioterapia (generalmente Metotrexato si es bajo riesgo).\nC) Incorrecta. A las 4 semanas de una mola no se trata de un nuevo embarazo normal, sino de proliferación trofoblástica activa invasora.\nD) Incorrecta. La infección no produce elevación de la β-hCG.\nE) Incorrecta. Un segundo legrado no cura la NTG y eleva el riesgo de perforación y hemorragia sin beneficio demostrado.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.003"
      }
    ]
  },
  {
    "id": "ob-13",
    "classId": "ob-13",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Metrorragias de la Primera y Segunda Mitad del Embarazo",
    "topicLabel": "19.13",
    "title": "Metrorragias de la Segunda Mitad del Embarazo: Placenta Previa, DPPNI, Rotura Uterina y Rotura de Vasa Previa",
    "perfilCode": "3.01.1.004",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Manejo hospitalario de urgencia en red terciaria obstétrica.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#39) · EUNACOM Julio 2023 (Q#18) · EUNACOM Diciembre 2021 (Q#10)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico diferencial estricto entre sangrado indoloro (Placenta Previa) vs sangrado doloroso con hipertonía (DPPNI)",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de las Metrorragias del 3° Trimestre",
    "diagramRows": [
      {
        "t": "Metrorragia de la Segunda Mitad del Embarazo (> 20 semanas)",
        "s": "¡PROHIBIDO REALIZAR TACTO VAGINAL HASTA CONOCER LOCALIZACIÓN PLACENTARIA!",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "Características Clínicas: Dolor Uterino y Tono Muscular",
        "al": "Indoloro con Útero Blando vs Muy Doloroso con Útero Leñoso",
        "ll": "Indolora + Sangrado Rojo Rutilante + Útero Blando",
        "left": {
          "t": "PLACENTA PREVIA (o Vasa Previa)",
          "s": "Eco TV: placenta sobre o a < 2cm del OCI · Asintomática: reposo y cesárea electiva a 37-38 sem. Sangrado activo: hospitalizar en ARO",
          "type": "warn"
        },
        "rl": "Dolor Abdominal Súbito + Útero Hipertónico ('en Madera')",
        "right": {
          "t": "DPPNI (Desprendimiento Prematuro de Placenta)",
          "s": "Metrorragia oscura/oculta + Hipertonía + Sufrimiento Fetal Agudo (bradicardia) · ¡CESÁREA DE URGENCIA INMEDIATA!",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Metrorragia con Antecedente de Cicatriz de Cesárea Previa",
        "al": "Dolor Desgarrador Brusco + Cese de Contracciones",
        "ll": "Cese Súbito de Contracciones + Desaparición de Presentación Fetal",
        "left": {
          "t": "ROTURA UTERINA",
          "s": "Dolor desgarrador, bradicardia fetal severa, partes fetales fácilmente palpables en abdomen · Laparotomía de urgencia vital",
          "type": "crit"
        },
        "rl": "Rotura de Membranas + Bradicardia Fetal Inmediata (Sangre Fetal)",
        "right": {
          "t": "ROTURA DE VASA PREVIA",
          "s": "Vasos umbilicales velamentosos sobre el OCI se desgarran al romper membranas · Sangre es 100% fetal · Cesárea emergente",
          "type": "crit"
        }
      }
    ],
    "contexto": "Las hemorragias de la segunda mitad del embarazo (> 20 semanas) constituyen emergencias de alto riesgo perinatal que demandan un diagnóstico diferencial inmediato. La regla de oro mandatoria y pregunta fija de examen es: <strong>ESTÁ TERMINANTEMENTE PROHIBIDO REALIZAR UN TACTO VAGINAL</strong> a ciegas en una embarazada que sangra en el tercer trimestre, debido a que si se trata de una Placenta Previa, el dedo puede perforar la placenta y desatar una hemorragia exanguinante fulminante. El diagnóstico diferencial se fundamenta en la semiología del dolor y el tono uterino: Placenta Previa (sangrado rojo brillante, rutilante, indoloro, útero blando y relajado) versus DPPNI (metrorragia oscura, dolor abdominal intenso, hipertonía uterina en tabla y sufrimiento fetal precoz).",
    "contentSections": [
      {
        "subhead": "1. Regla de Oro Semiológica y Estudio Inicial",
        "paragraphs": [
          "• <strong>PROHIBICIÓN ABSOLUTA DEL TACTO VAGINAL:</strong> Ante toda embarazada con sangrado genital en la segunda mitad de la gestación, <strong>NUNCA realizar tacto vaginal</strong> hasta haber determinado con absoluta certeza la posición de la placenta mediante <strong>Ecografía Transvaginal</strong>.",
          "• <strong>Especuloscopía Cuidadosa:</strong> Es el examen físico de elección inicial para verificar que el sangrado provenga del canal endocervical y descartar causas locales no obstétricas (ectropion sangrante, pólipo cervical, laceración vaginal, cáncer de cuello uterino).",
          "• <strong>Evaluación Simultánea Materno-Fetal:</strong> Signos vitales maternos, monitorización cardiofetal continua (MEFI) y ecografía obstétrica con Doppler."
        ]
      },
      {
        "subhead": "2. Placenta Previa y Espectro de Placenta Acreta",
        "paragraphs": [
          "• <strong>Definición y Clasificación Actual:</strong> Inserción de la placenta en el segmento uterino inferior:",
          "  - <strong>Placenta Previa Oclusiva:</strong> El tejido placentario <strong>cubre totalmente el Orificio Cervical Interno (OCI)</strong>.",
          "  - <strong>Placenta de Inserción Baja:</strong> El borde placentario se sitúa a <strong>menos de 20 mm (2 cm) del OCI</strong>, pero sin cubrirlo.",
          "• <strong>Factores de Riesgo:</strong> <strong>Cicatriz de cesárea anterior (el factor más potente)</strong>, edad materna avanzada (> 35 años), multiparidad, legrados uterinos previos, tabaquismo y embarazo múltiple.",
          "• <strong>Cuadro Clínico Típico:</strong> Metrorragia de sangre <strong>rojo rutilante, fresca, indolora y de comienzo insidioso</strong>, sin actividad uterina. El <strong>útero se palpa blando, indoloro y completamente relajado</strong>. No hay sufrimiento fetal inicial (los latidos cardiofetales se mantienen normales). El sangrado tiende a autolimitarse espontáneamente para luego reaparecer en episodios progresivamente más abundantes.",
          "• <strong>Diagnóstico:</strong> El estándar de oro es la <strong>Ecografía Transvaginal</strong> (es totalmente segura, ya que el transductor se ubica en el fórnix vaginal sin penetrar el OCI).",
          "• <strong>Manejo:</strong>",
          "  - Asintomática: Ecografía a las 32 semanas para confirmar si persiste (muchas 'migran' hacia el fondo por alargamiento del segmento).",
          "  - Sangrado moderado en pretérmino: Hospitalización en ARO, reposo absoluto, corticoides para maduración pulmonar (entre 24 y 34 semanas), tocolisis si hay dinámica asociada y monitorización.",
          "  - <strong>Vía de Parto:</strong> <strong>Cesárea electiva a las 36-37 semanas</strong> si es oclusiva o el borde está a < 10 mm del OCI. Si el borde está entre 10 y 20 mm, se puede intentar parto vaginal en centro quirúrgico.",
          "• <strong>Espectro del Acretismo Placentario (Placenta Acreta, Increta, Percreta):</strong> Adherencia anormal del trofoblasto al miometrio por deficiencia de la decidua basal. Ocurre clásicamente en pacientes con <strong>placenta previa sobre una cicatriz de cesárea anterior</strong> (riesgo del 25% con 1 cesárea, 50% con 2 cesáreas). Provoca hemorragia exanguinante en el alumbramiento. Requiere cesárea programada con histerectomía total con placenta <em>in situ</em>."
        ]
      },
      {
        "subhead": "3. Desprendimiento Prematuro de Placenta Normoinserta (DPPNI / Abruptio Placentae)",
        "paragraphs": [
          "• <strong>Definición:</strong> Separación accidental, total o parcial, de la placenta normalmente insertada antes del nacimiento del feto, después de las 20 semanas de gestación.",
          "• <strong>Factores de Riesgo Mayores:</strong> <strong>Síndrome Hipertensivo del Embarazo (Preeclampsia / HTA crónica) (el factor más frecuente en el 50% de los casos)</strong>, traumatismo abdominal directo, consumo de cocaína, descompresión uterina súbita (rotura de membranas en polihidramnios o parto del primer gemelar), tabaquismo y sobredistensión uterina.",
          "• <strong>Cuadro Clínico Clásico:</strong> Tríada característica compuesta por: <strong>1) Metrorragia oscura, negruzca, con coágulos</strong> (en 20% es oculta retroplacentaria); <strong>2) Dolor abdominal súbito, constante e intensísimo</strong>; <strong>3) Hipertonía uterina ('útero leñoso' o 'en tabla') con polisistolia</strong>.",
          "• <strong>Compromiso Fetal y Complicaciones Maternas:</strong> Sufrimiento fetal agudo precoz (desaceleraciones tardías DIP II, bradicardia fetal o muerte fetal intrauterina en desprendimientos > 50%). Complicaciones maternas graves: <strong>Coagulación Intravascular Diseminada (CID)</strong> por liberación masiva de tromboplastina placentaria al torrente materno, shock hipovolémico desproporcionado al sangrado visible y <strong>Útero de Couvelaire</strong> (apoplejía útero-placentaria con infiltración hemática del miometrio que causa atonía severa).",
          "• <strong>Diagnóstico:</strong> Clínico. La ecografía es útil pero poco sensible (solo visualiza el hematoma retroplacentario en el 25-50% de los casos). ¡Una ecografía normal NO descarta DPPNI!",
          "• <strong>Manejo:</strong> Estabilización hemodinámica agresiva (cristaloides y hemoderivados) y <strong>finalización INMEDIATA del embarazo mediante Cesárea de Urgencia</strong> (salvo feto muerto con madre hemodinámicamente estable y condiciones de parto vaginal inminente)."
        ]
      },
      {
        "subhead": "4. Rotura Uterina y Rotura de Vasa Previa",
        "paragraphs": [
          "• <strong>Rotura Uterina:</strong>",
          "  - <strong>Factores de Riesgo:</strong> Antecedente de <strong>cesárea anterior o miomectomía transmural</strong>, trabajo de parto prolongado u obstruido, uso inadecuado o excesivo de oxitocina / misoprostol, maniobra de Kristeller.",
          "  - <strong>Clínica:</strong> Ocurre típicamente durante el trabajo de parto. Signos de inminencia (Síndrome de Bandl-Frommel: anillo de retracción patológico visible en el ombligo + dolor paroxístico). Al consumarse la rotura: <strong>dolor desgarrador súbito seguido de cese brusco e instantáneo de las contracciones uterinas</strong>, <strong>desaparición o ascenso de la presentación fetal</strong> (el feto se desplaza a la cavidad abdominal haciéndose palpable bajo la piel), metrorragia vaginal variable, shock hipovolémico y <strong>bradicardia fetal severa o muerte fetal</strong>.",
          "  - <strong>Manejo:</strong> Laparotomía exploradora de emergencia absoluta para extracción fetal inmediata y reparación de la dehiscencia o histerectomía de rescate.",
          "• <strong>Rotura de Vasa Previa:</strong>",
          "  - Los vasos sanguíneos umbilicales discurren por las membranas fetales (inserción velamentosa del cordón o lóbulo succenturiado) cruzando por encima del OCI por delante de la presentación.",
          "  - <strong>Clínica Patognomónica:</strong> Metrorragia que se desencadena <strong>inmediatamente tras la amniorrexis (espontánea o artificial)</strong>, seguida de <strong>sufrimiento fetal agudo catastrófico (bradicardia fetal extrema)</strong> con madre completamente estable.",
          "  - Fisiopatología: La sangre vertida es <strong>100% de origen fetal</strong>, por lo que el feto sufre un shock hipovolémico y anemia aguda fulminante en minutos (Test de Apt o Kleihauer-Betke detecta hemoglobina fetal). Requiere cesárea de emergencia en minutos para salvar la vida fetal."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial Clínico de las Metrorragias de la Segunda Mitad del Embarazo",
      "headers": [
        "Característica",
        "Placenta Previa",
        "Desprendimiento (DPPNI)",
        "Rotura Uterina",
        "Rotura de Vasa Previa"
      ],
      "rows": [
        [
          "Comienzo",
          "Insidioso, progresivo",
          "Súbito, brusco",
          "Súbito durante el trabajo de parto",
          "Inmediato tras la amniorrexis"
        ],
        [
          "Tipo de Sangrado",
          "Rojo rutilante, fresco, sin coágulos",
          "Rojo oscuro, negruzco, con coágulos (u oculto)",
          "Variable, rojo oscuro a rutilante",
          "Escaso a moderado (sangre 100% fetal)"
        ],
        [
          "Dolor Abdominal",
          "Ausente (totalmente indoloro)",
          "Intenso, lacerante, continuo",
          "Dolor desgarrador que cede tras rotura",
          "Ausente (indoloro)"
        ],
        [
          "Tono Uterino",
          "Blando, relajado, normal",
          "Hipertónico ('útero leñoso' o en tabla)",
          "Atonía súbita (cesan las contracciones)",
          "Normal, sin hipertonía"
        ],
        [
          "Estado Fetal",
          "Normal (bienestar conservado)",
          "Sufrimiento fetal precoz / DIP II / Muerte",
          "Bradicardia fetal extrema / Desaparición LCF",
          "Bradicardia fetal extrema catastrófica"
        ],
        [
          "Estado Materno",
          "Compromiso proporcional al sangrado externo",
          "Shock desproporcionado al sangrado visible",
          "Shock hipovolémico peritoneal rápido",
          "Madre totalmente estable y asintomática"
        ],
        [
          "Asociación Típica",
          "Cesárea anterior, multípara",
          "Preeclampsia, traumatismo, cocaína",
          "Cicatriz uterina, uso de oxitócicos",
          "Inserción velamentosa del cordón"
        ],
        [
          "Conducta",
          "Eco TV (¡No tacto!), cesárea electiva 37s",
          "Cesárea de urgencia inmediata",
          "Laparotomía inmediata de salvataje",
          "Cesárea emergente inmediata"
        ]
      ]
    },
    "severityTable": {
      "title": "Complicaciones Críticas y Criterios de Emergencia Vital en Metrorragia del 3° Trimestre",
      "headers": [
        "Complicación",
        "Mecanismo y Hallazgos",
        "Conducta Obstétrica y Terapéutica Inmediata"
      ],
      "rows": [
        [
          "Coagulación Intravascular Diseminada (CID)",
          "Liberación masiva de tromboplastina tisular en DPPNI severo -> Consumo de fibrinógeno (< 150 mg/dL), plaquetopenia y sangrado en napa",
          "Cesárea inmediata, transfusión de Plasma Fresco Congelado, Crioprecipitados y Glóbulos Rojos. Control de hemostasia quirúrgica."
        ],
        [
          "Útero de Couvelaire (Apoplejía Uteroplacentaria)",
          "Extravasación hemática masiva hacia el miometrio y bajo la serosa peritoneal en DPPNI -> Atonía uterina incoercible post-cesárea",
          "Masaje uterino, uterotónicos intensivos (Oxitocina, Carbetocina, Misoprostol, Ácido Tranexámico), suturas de B-Lynch o histerectomía de rescate"
        ],
        [
          "Exanguinación Fetal por Vasa Previa",
          "Desgarro de vasos fetales en el OCI tras rotura de membranas -> Pérdida de 50-100 mL de sangre que causa shock hipovolémico fetal",
          "Cesárea de emergencia en menos de 5-10 minutos e intubación/transfusión urgente de glóbulos rojos O(-) al recién nacido"
        ],
        [
          "Shock Hemorrágico Materno por Rotura Uterina",
          "Dehiscencia completa de cicatriz previa con feto en cavidad abdominal -> Hemoperitoneo masivo de 2.000 a 3.000 mL",
          "Laparotomía urgente, reanimación masiva balanceada (1:1:1), extracción fetal y reparación o histerectomía hemostática"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Estrategias Quirúrgicas y Obstétricas de Resolución (MINSAL / FIGO)",
      "headers": [
        "Patología",
        "Criterios de Interrupción",
        "Vía de Elección",
        "Consideraciones Intraoperatorias Críticas"
      ],
      "rows": [
        [
          "Placenta Previa Asintomática",
          "Gestación de 36 a 37 semanas cumplidas",
          "Cesárea Electiva Programada",
          "Incisión uterina que evite atravesar la placenta. Preparar uterotónicos por atonía de lecho placentario."
        ],
        [
          "Placenta Previa con Hemorragia Masiva",
          "Cualquier edad gestacional si hay inestabilidad o sangrado severo activo",
          "Cesárea de Urgencia Inmediata",
          "Estabilización hemodinámica, disponibilidad de sangre y consentimiento de histerectomía si hay acretismo."
        ],
        [
          "DPPNI con Feto Vivo",
          "Diagnóstico clínico confirmado de desprendimiento placentario",
          "Cesárea de Urgencia Inmediata",
          "Extracción expedita para prevenir asfixia fetal y revertir el desencadenante de CID materna."
        ],
        [
          "DPPNI con Muerte Fetal Intrauterina",
          "Madre hemodinámicamente compensada y sin coagulopatía activa severa",
          "Parto Vaginal (si es inminente) vs Cesárea",
          "Monitorizar recuento plaquetario y fibrinógeno. Si se prolonga o hay sangrado masivo: cesárea."
        ]
      ]
    },
    "vignette": "Embarazada de 34 semanas, multípara de 2, con antecedente de una cesárea anterior por podálica, ingresa al Servicio de Urgencia Ginecoobstétrica por presentar sangrado vaginal rojo fresco rutilante abundante, que comenzó hace 1 hora de manera súbita mientras descansaba. La paciente refiere no sentir ningún dolor ni contracciones. Al examen físico: presión arterial de 110/70 mmHg, frecuencia cardíaca de 76 lpm, afebril. El abdomen es blando, depresible, completamente indoloro, sin dinámica uterina ni hipertonía. El monitor cardiofetal externo revela una frecuencia cardíaca fetal basal de 142 lpm, con variabilidad normal y reactiva, sin desaceleraciones. El médico interno de turno se coloca guantes estériles y se dispone a realizar un tacto vaginal para evaluar la dilatación cervical.",
    "explicacion": "La conducta médica prioritaria e impostergable ante esta situación es DETENER DE INMEDIATO al interno y PROHIBIR TERMINANTEMENTE EL TACTO VAGINAL. El cuadro de metrorragia de la segunda mitad del embarazo caracterizado por sangrado rojo rutilante fresco, abundante, de inicio súbito e indoloro, con útero relajado y blando y bienestar fetal conservado, es la presentación típica de una Placenta Previa. Realizar un tacto vaginal a ciegas en una placenta previa puede provocar la rotura digital de los cotiledones placentarios o del seno marginal, desencadenando una hemorragia cataclísmica masiva que pone en riesgo vital inmediato tanto a la madre como al feto. El examen de elección para confirmar el diagnóstico con total seguridad es la Ecografía Transvaginal, visualizando además con especuloscopía suave el canal vaginal.",
    "keyPoints": [
      "REGLA DE ORO: ¡PROHIBIDO EL TACTO VAGINAL en hemorragias del 3° trimestre sin conocer la posición placentaria!",
      "Placenta Previa: Metrorragia roja rutilante, fresca, indolora, útero blando y relajado, FCF normal.",
      "DPPNI: Metrorragia oscura con coágulos, dolor lacerante intenso, hipertonía uterina en tabla y sufrimiento fetal precoz.",
      "Factor de riesgo principal de DPPNI: Hipertensión materna (Preeclampsia / HTA crónica).",
      "Factor de riesgo principal de Placenta Previa: Cicatriz de cesárea anterior y legrados uterinos.",
      "La ecografía normal NO descarta DPPNI, ya que el diagnóstico del desprendimiento es eminentemente CLÍNICO.",
      "Rotura Uterina: Dolor desgarrador brusco, cese repentino de contracciones y ascenso de la presentación fetal.",
      "Rotura de Vasa Previa: Sangrado inmediato tras romper membranas con bradicardia fetal extrema (sangre 100% fetal).",
      "Tratamiento del DPPNI y de la rotura uterina: Cesárea / laparotomía de urgencia inmediata."
    ],
    "questions": [
      {
        "stem": "Una multigesta de 33 semanas con antecedente de dos cesáreas anteriores acude al servicio de urgencias por sangrado vaginal rojo rutilante abundante de inicio súbito hace 2 horas, sin dolor abdominal ni contracciones. Al examen: PA 118/72 mmHg, FC 78 lpm. Abdomen blando, depresible, útero relajado e indoloro. El monitoreo cardiofetal basal muestra FCF de 145 lpm con variabilidad normal y movimientos fetales presentes. ¿Cuál de las siguientes acciones está ABSOLUTAMENTE CONTRAINDICADA en este momento?",
        "options": [
          {
            "id": "A",
            "text": "Realizar una ecografía transvaginal"
          },
          {
            "id": "B",
            "text": "Efectuar un tacto vaginal digital"
          },
          {
            "id": "C",
            "text": "Instalar una vía venosa periférica con teflón grueso"
          },
          {
            "id": "D",
            "text": "Colocar un espéculo estéril para verificar el origen del sangrado"
          },
          {
            "id": "E",
            "text": "Tomar exámenes de hemograma, grupo sanguíneo y pruebas de coagulación"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La ecografía transvaginal es el método diagnóstico de elección y es completamente segura, ya que el transductor se ubica en el fondo de saco vaginal anterior a más de 2 cm del cuello.\nB) Correcta. En toda paciente que consulta por metrorragia del tercer trimestre con sospecha de placenta previa (sangrado indoloro, útero blando, feto reactivo), el TACTO VAGINAL DIGITAL está ESTRICTAMENTE CONTRAINDICADO. La introducción del dedo a través del canal cervical puede desgarrar la masa placentaria o vasos nutricios de gran calibre, provocando una hemorragia masiva exanguinante inmediata que amenaza la vida de la madre y del feto.\nC) Incorrecta. Instalar vías venosas gruesas es parte esencial de la estabilización.\nD) Incorrecta. La especuloscopía suave permite certificar si la sangre proviene de la cavidad uterina o de una lesión cervical/vaginal local.\nE) Incorrecta. El estudio hematológico y de coagulación es imperativo.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.004"
      },
      {
        "stem": "Una primigesta de 35 semanas con antecedente de Preeclampsia sin criterios de severidad en control acude a urgencias por dolor abdominal intenso, continuo y repentino en hipogastrio de 1 hora de evolución. Al examen físico: PA 155/95 mmHg, FC 100 lpm. El útero se palpa intensamente contracturado, duro como madera, no relajándose entre las contracciones y siendo muy doloroso a la palpación. A la especuloscopía se observa sangrado genital oscuro con coágulos en cuantía moderada. En el monitor fetal se evidencia una frecuencia cardíaca fetal basal de 100 lpm con variabilidad mínima y desaceleraciones tardías profundas (DIP II). ¿Cuál es el diagnóstico más probable y la conducta inmediata a seguir?",
        "options": [
          {
            "id": "A",
            "text": "Placenta previa oclusiva total; indicar reposo absoluto y tocolíticos con sulfato de magnesio"
          },
          {
            "id": "B",
            "text": "Desprendimiento Prematuro de Placenta Normoinserta (DPPNI); proceder a cesárea de urgencia inmediata"
          },
          {
            "id": "C",
            "text": "Rotura de vasa previa; realizar punción de membranas para acelerar el parto"
          },
          {
            "id": "D",
            "text": "Amenaza de parto prematuro; administrar nifedipino oral y enviar a domicilio"
          },
          {
            "id": "E",
            "text": "Cólico renal complicado; analgesia con AINEs endovenosos y ecografía renal"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La placenta previa no produce dolor intenso ni hipertonía uterina leñosa.\nB) Correcta. La combinación de metrorragia con sangre oscura, dolor abdominal intenso y continuo, hipertonía uterina leñosa ('útero en tabla') y sufrimiento fetal agudo (bradicardia fetal y DIP II) en una paciente hipertensa es la presentación clásica del Desprendimiento Prematuro de Placenta Normoinserta (DPPNI o Abruptio Placentae). Representa una emergencia obstétrica crítica con altísimo riesgo de muerte fetal intrauterina y coagulopatía de consumo materna (CID). Con feto vivo y viable a las 35 semanas, la conducta mandatoria es la interrupción inmediata mediante cesárea de urgencia junto a reanimación materna.\nC) Incorrecta. En la vasa previa el sangrado es indoloro tras romper membranas y el útero no está hipertónico.\nD) Incorrecta. Los tocolíticos están contraindicados ante sospecha de desprendimiento placentario.\nE) Incorrecta. El cuadro es netamente obstétrico de riesgo vital.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.004"
      },
      {
        "stem": "Una paciente en trabajo de parto activo de término con antecedente de cesárea previa hace 2 años recibe infusión de oxitocina para conducción. Súbitamente refiere un dolor abdominal lancinante y lacerante intensísimo en hipogastrio, tras lo cual manifiesta alivio transitorio del dolor y cese completo de las contracciones uterinas. Al examen: la paciente se torna pálida y diaforética, con PA 80/50 mmHg y FC 125 lpm. Al tacto vaginal se constata que la cabeza fetal que se encontraba en espinas +1 ha ascendido y ya no es palpable en la pelvis, palpándose partes fetales con extraordinaria facilidad bajo la pared abdominal anterior. El registro fetal muestra bradicardia severa a 60 lpm. ¿Cuál es el diagnóstico?",
        "options": [
          {
            "id": "A",
            "text": "Placenta previa sangrante"
          },
          {
            "id": "B",
            "text": "Embolia de líquido amniótico"
          },
          {
            "id": "C",
            "text": "Rotura uterina completa"
          },
          {
            "id": "D",
            "text": "Desprendimiento prematuro de placenta normoinserta"
          },
          {
            "id": "E",
            "text": "Inversión uterina puerperal"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La placenta previa no produce cese súbito de contracciones ni ascenso de la presentación.\nB) Incorrecta. La embolia de líquido amniótico debuta con colapso cardiopulmonar fulminante, hipoxemia y convulsiones sin ascenso fetal palpable.\nC) Correcta. El dolor desgarrador súbito seguido por el cese instantáneo de las contracciones uterinas, shock hipovolémico materno, ascenso y desaparición de la presentación fetal en la pelvis, y palpación muy superficial de las partes fetales en el abdomen en una paciente con cicatriz de cesárea anterior bajo oxitócicos es patognomónico de Rotura Uterina Completa. El feto ha sido expulsado hacia la cavidad peritoneal. Requiere laparotomía exploradora inmediata de emergencia para extracción fetal y hemostasia quirúrgica materna.\nD) Incorrecta. En el DPPNI el útero se mantiene hipertónico y duro, no cesan las contracciones ni asciende la presentación fetal a la cavidad abdominal.\nE) Incorrecta. La inversión uterina ocurre en el alumbramiento o postparto con masa que protruye por vagina.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.004"
      },
      {
        "stem": "Durante la atención de un parto de término, inmediatamente tras realizar la rotura artificial de membranas (amniotomía), se observa la salida de líquido amniótico teñido con sangre fresca rutilante en cuantía moderada. En el monitor cardiofetal se aprecia de forma simultánea una brusca caída de la frecuencia cardíaca fetal a 70 lpm con patrón sinusoidal y desaceleraciones severas sostenidas. La madre se mantiene normotensa, afebril, sin dolor abdominal y con dinámica uterina fisiológica de parto normal. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Rotura de Vasa Previa"
          },
          {
            "id": "B",
            "text": "Placenta previa oclusiva total"
          },
          {
            "id": "C",
            "text": "Desprendimiento prematuro de placenta normoinserta"
          },
          {
            "id": "D",
            "text": "Laceración de cuello uterino"
          },
          {
            "id": "E",
            "text": "Corioamnionitis clínica aguda"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. La secuencia clínica patognomónica de metrorragia que aparece inmediatamente tras la rotura de membranas ovulares (amniotomía o amniorrexis) asociada a sufrimiento fetal agudo severo e instantáneo (bradicardia severa o patrón sinusoidal), en una madre totalmente asintomática y con útero relajado, es la manifestación clásica de la Rotura de Vasa Previa. Los vasos umbilicales aberrantes velamentosos que atraviesan el orificio cervical interno se desgarran al romperse las membranas; la sangre es de origen fetal, por lo que el feto sufre una exanguinación fulminante en pocos minutos. Exige cesárea emergente inmediata.\nB) Incorrecta. La placenta previa sangra antes de romper membranas de forma espontánea y no se asocia al acto de la amniotomía de vasos aberrantes.\nC) Incorrecta. El DPPNI se asocia a dolor intenso e hipertonía uterina, ausentes en este caso.\nD) Incorrecta. La laceración de cuello no causa bradicardia fetal extrema inmediata.\nE) Incorrecta. La corioamnionitis cursa con fiebre materna y taquicardia fetal.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.004"
      }
    ]
  }
];

const bloque3Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowObstetricia(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque3Classes };
