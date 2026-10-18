/**
 * TOMO 18: PEDIATRÍA GENERAL & NEONATOLOGÍA · BLOQUE 1
 * Crecimiento, Desarrollo & Vacunas PNI (18.1 a 18.4)
 */

const { flowPediatria } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ped-01",
    "classId": "ped-01",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.1",
    "title": "Evaluación del Crecimiento & Estado Nutricional en Pediatría: Curvas OMS (P/E, T/E, P/T)",
    "perfilCode": "2.01.1.061",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Patología cubierta en control de salud infantil del Programa Nacional de Salud de la Infancia (MINSAL).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#12) · EUNACOM Julio 2022 (Q#88)",
    "frecuencia": "Muy Alta rentabilidad · Pregunta clásica de cálculo e interpretación de desviaciones estándar en curvas OMS",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico del Estado Nutricional en Lactantes y Preescolares según Desviaciones Estándar OMS",
    "diagramRows": [
      {
        "t": "Lactante o Preescolar en Control Sano (0 a 5 años)",
        "s": "Medición antropométrica estandarizada: Peso, Longitud/Estatura, Perímetro Cefálico",
        "type": "acc"
      },
      {
        "t": "Graficar en Curvas OMS (2006) y Calcular Desviaciones Estándar (DE)",
        "s": "Indicadores: P/E (global), P/T (agudo/actual), T/E (crónico/estatura)",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Evaluación del Indicador Peso para la Talla (P/T)",
        "al": "Estratificación Nutricional P/T",
        "ll": "P/T ≤ -1 DE",
        "left": {
          "t": "Riesgo de Desnutrición o Desnutrición",
          "s": "≤ -1 a -1.9 DE: Riesgo Desnutrición · ≤ -2 DE: Desnutrición Severa",
          "type": "warn"
        },
        "rl": "P/T ≥ +1 DE",
        "right": {
          "t": "Sobrepeso u Obesidad Infantil",
          "s": "+1 a +1.9 DE: Sobrepeso · ≥ +2 DE: Obesidad · ≥ +3 DE: Obesidad Severa",
          "type": "crit"
        }
      },
      {
        "t": "Conducta Clínica y Plan de Intervención Nutricional",
        "s": "P/T normal (-0.9 a +0.9 DE) + T/E normal: Control habitual · Alterado: Evaluación de ingesta, refuerzo de lactancia y control en 15-30 días",
        "type": "acc"
      }
    ],
    "contexto": "La evaluación del crecimiento y estado nutricional es el pilar fundamental del control de salud infantil en Chile. El médico de atención primaria debe dominar la interpretación estandarizada de las curvas de crecimiento de la Organización Mundial de la Salud (OMS 2006 adoptadas por el MINSAL), diferenciando alteraciones agudas (peso para la talla) de crónicas (talla para la edad), diagnosticando precozmente el riesgo de desnutrición, la desnutrición y la malnutrición por exceso (sobrepeso y obesidad), cuya prevalencia supera el 50% en escolares chilenos.",
    "contentSections": [
      {
        "subhead": "1. Antropometría Estandarizada e Indicadores Nutricionales",
        "paragraphs": [
          "La evaluación nutricional requiere técnica estandarizada: pesaje con balanza de lactante calibrada (desnudo hasta los 2 años) y medición de <strong>longitud en decúbito supino con infantómetro hasta los 24 meses</strong>, pasando a <strong>estatura en bipedestación con estadiómetro desde los 2 años cumplidos</strong>.",
          "Los tres indicadores antropométricos clásicos evaluados mediante desviaciones estándar (DE o puntaje Z) son:",
          "• <strong>Peso para la Talla (P/T):</strong> Es el indicador de elección para diagnosticar el estado nutricional actual (agudo) en niños menores de 5 años. Refleja la armonía corporal y masa magra/grasa relativa.",
          "• <strong>Talla para la Edad (T/E):</strong> Evalúa el crecimiento lineal y el impacto nutricional o patológico a largo plazo (crónico). Una alteración refleja desnutrición crónica, hipocrecimiento endocrinológico, genético o ambiental.",
          "• <strong>Peso para la Edad (P/E):</strong> Indicador de desnutrición global. En menores de 1 año alerta sobre desviaciones del canal de crecimiento, pero no discrimina entre desnutrición actual y talla baja constitucional."
        ]
      },
      {
        "subhead": "2. Criterios Diagnósticos MINSAL / OMS según Desviaciones Estándar (Puntaje Z)",
        "paragraphs": [
          "En menores de 5 años, el diagnóstico estatutario del MINSAL se basa primordialmente en <strong>P/T</strong>:",
          "• <strong>Obesidad Severa:</strong> P/T ≥ +3 DE.",
          "• <strong>Obesidad:</strong> P/T entre +2.0 y +2.9 DE.",
          "• <strong>Sobrepeso (Riesgo de Obesidad):</strong> P/T entre +1.0 y +1.9 DE.",
          "• <strong>Eutrófico (Normal):</strong> P/T entre -0.9 y +0.9 DE.",
          "• <strong>Riesgo de Desnutrición:</strong> P/T entre -1.0 y -1.9 DE.",
          "• <strong>Desnutrición:</strong> P/T ≤ -2.0 DE (moderada entre -2.0 y -2.9 DE; severa ≤ -3.0 DE).",
          "Para el indicador <strong>Talla para la Edad (T/E)</strong>:",
          "• Talla Alta: T/E ≥ +2 DE.",
          "• Talla Normal: T/E entre -1.9 y +1.9 DE.",
          "• Talla Baja (o Retraso del Crecimiento): T/E ≤ -2 DE."
        ]
      },
      {
        "subhead": "3. Evaluación Nutricional en Mayores de 5 Años: Índice de Masa Corporal (IMC)",
        "paragraphs": [
          "A partir de los 5 años cumplidos (60 meses) hasta los 19 años, el diagnóstico nutricional de masa corporal cambia del indicador P/T al <strong>Índice de Masa Corporal para la Edad (IMC/E)</strong>:",
          "• Obesidad Severa: IMC/E ≥ +3 DE.",
          "• Obesidad: IMC/E entre +2.0 y +2.9 DE.",
          "• Sobrepeso: IMC/E entre +1.0 y +1.9 DE.",
          "• Eutrófico: IMC/E entre -0.9 y +0.9 DE.",
          "• Bajo Peso: IMC/E entre -1.0 y -1.9 DE.",
          "• Desnutrición: IMC/E ≤ -2.0 DE.",
          "La velocidad de crecimiento es el parámetro más sensible: un aplanamiento o caída de dos canales percentilares o >1 DE en controles sucesivos es criterio formal de alerta ('faltering growth'), obligando a descartar patología orgánica subyacente (celiaquía, alergia a proteína de leche de vaca, fibrosis quística, ITU recurrente, cardiopatía)."
        ]
      },
      {
        "subhead": "4. Conducta Clínica y Manejo en Atención Primaria",
        "paragraphs": [
          "• <strong>Riesgo de Desnutrición o Desnutrición:</strong> Evaluar técnica de lactancia, dilución de fórmulas lácteas, frecuencia de tomas e incorporación de sólidos. Solicitar exámenes básicos (orina completa, urocultivo, hemograma, ferritina). Control nutricional abreviado en 15 a 30 días. Si no hay ganancia ponderal tras optimización dietética, derivar a pediatría.",
          "• <strong>Malnutrición por Exceso:</strong> Suspender bebidas azucaradas, jugos envasados y colaciones ultraprocesadas. Estimular lactancia materna exclusiva hasta los 6 meses. Fomentar juego activo no estructurado mínimo 60 minutos al día. No someter a dietas restrictivas en menores de 2 años; la meta es frenar la ganancia excesiva de peso permitiendo que la talla crezca."
        ]
      },
      {
        "subhead": "5. Talla Baja y Radiografía de Edad Ósea: Estudio Inicial y Derivación",
        "paragraphs": [
          "La <strong>talla baja</strong> se define como T/E ≤ -2 DE (bajo el percentil 3). Lo primero es distinguir una variante normal de una causa patológica con tres datos: la <strong>velocidad de crecimiento</strong> (normal: ~25 cm el primer año, ~12 cm el segundo, ~8 cm el tercero y 5 a 7 cm/año hasta la pubertad; una velocidad < 4 cm/año en edad prepuberal es patológica), la <strong>talla blanco-familiar</strong> (niño: [talla padre + talla madre + 13] / 2; niña: [talla padre + talla madre - 13] / 2, con rango de ±8,5 cm) y la <strong>edad ósea</strong>.",
          "• <strong>Variantes normales (las más frecuentes):</strong> <em>talla baja familiar</em> (edad ósea = cronológica, velocidad normal, talla dentro del rango blanco-familiar) y <em>retraso constitucional del crecimiento y la pubertad</em> (edad ósea retrasada, velocidad normal, antecedente familiar de «desarrollo tardío»; la talla adulta final es normal).",
          "• <strong>Causas patológicas:</strong> desnutrición y enfermedades crónicas (celiaquía, enfermedad inflamatoria intestinal, nefropatía, cardiopatía, asma grave), endocrinas (<strong>déficit de hormona de crecimiento, hipotiroidismo</strong>, síndrome de Cushing), genéticas (<strong>síndrome de Turner en toda niña con talla baja inexplicada</strong>, displasias óseas, síndrome de Down), restricción de crecimiento intrauterino sin crecimiento recuperador (PEG) y causas psicosociales (privación afectiva).",
          "<em>Conducta (nivel Inicial/Derivar):</em> en el control se confirma la medición, se calcula la velocidad y la talla blanco-familiar y se solicita el estudio básico: hemograma y VHS, creatinina y electrolitos con gases, pruebas hepáticas, <strong>anticuerpos antitransglutaminasa IgA con IgA total</strong>, TSH y T4 libre, orina completa, <strong>cariograma en niñas</strong> y <strong>radiografía de edad ósea</strong>. Se <strong>deriva a endocrinología pediátrica</strong> si T/E ≤ -2 DE con velocidad disminuida, cruce descendente de canales, talla muy discordante con la blanco-familiar, desproporción corporal, signos de enfermedad sistémica o edad ósea muy retrasada.",
          "La <strong>radiografía de edad ósea</strong> es una proyección AP de <strong>mano y muñeca izquierda</strong> que se compara con un atlas (<strong>Greulich-Pyle</strong>) o con el método de Tanner-Whitehouse. El médico general debe <strong>emplear el informe</strong>: una diferencia mayor de 2 DE (alrededor de 1 a 2 años) con la edad cronológica es patológica. <em>Edad ósea retrasada:</em> retraso constitucional, hipotiroidismo, déficit de hormona de crecimiento, hipercortisolismo, desnutrición y enfermedad crónica. <em>Edad ósea adelantada:</em> pubertad precoz, hiperplasia suprarrenal congénita, obesidad exógena e hipertiroidismo. <em>Edad ósea igual a la cronológica con talla baja:</em> talla baja familiar (o causas genéticas). Permite además predecir la talla adulta."
        ]
      },
      {
        "subhead": "6. Alteraciones del Desarrollo Puberal: Pesquisa y Derivación",
        "paragraphs": [
          "La secuencia normal en la <strong>niña</strong> es telarquia (Tanner M2, entre los 8 y 13 años), pubarquia, pico de velocidad de crecimiento y <strong>menarquia</strong> (unos 2 a 2,5 años después de la telarquia, a los 12 a 13 años). En el <strong>varón</strong> comienza con el aumento del volumen testicular a <strong>≥ 4 mL (Tanner G2, entre los 9 y 14 años)</strong>, seguido del vello pubiano y del crecimiento del pene; el estirón puberal es más tardío que en la niña.",
          "• <strong>Pubertad precoz:</strong> telarquia o vello pubiano antes de los <strong>8 años en la niña</strong>, o aumento testicular antes de los <strong>9 años en el varón</strong>. Puede ser <em>central</em> (dependiente de GnRH; en la niña es idiopática en la mayoría, en el varón obliga a descartar lesión del sistema nervioso central con resonancia) o <em>periférica</em> (hiperplasia suprarrenal congénita, tumores productores de esteroides, quistes ováricos, síndrome de McCune-Albright, hipotiroidismo primario grave). Se sospecha por la aceleración de la velocidad de crecimiento y la <strong>edad ósea adelantada</strong>; se <strong>deriva a endocrinología</strong> (tratamiento con análogos de GnRH en la central).",
          "• <strong>Pubertad retrasada:</strong> ausencia de telarquia a los <strong>13 años en la niña</strong> o de aumento testicular a los <strong>14 años en el varón</strong> (o más de 5 años entre el inicio y el término de la pubertad). La causa más frecuente es el <strong>retraso constitucional</strong>; deben descartarse hipogonadismo (síndrome de Turner, síndrome de Klinefelter), enfermedad crónica, desnutrición, ejercicio extremo y alteraciones hipotálamo-hipofisarias. Estudio inicial: Tanner, edad ósea, LH, FSH, estradiol o testosterona, TSH y prolactina; derivar.",
          "• <strong>Variantes que solo se observan:</strong> la <em>telarquia prematura aislada</em> (menores de 2 a 3 años, sin aceleración del crecimiento ni edad ósea adelantada) y la <em>adrenarquia o pubarquia prematura</em> (vello púbico o axilar y olor apocrino antes de los 8 años en niñas y 9 en niños, sin telarquia ni crecimiento testicular). Se controlan cada 3 a 6 meses y se derivan si progresan rápido."
        ]
      },
      {
        "subhead": "7. Macrocefalia y Microcefalia: Perímetro Cefálico en el Control de Salud",
        "paragraphs": [
          "El <strong>perímetro cefálico (PC)</strong> se mide en todos los controles hasta los 5 años con cinta métrica inextensible, pasando por la glabela y la prominencia occipital máxima, y se grafica en las curvas OMS según edad y sexo. <strong>Macrocefalia:</strong> PC > +2 DE (sobre el percentil 97). <strong>Microcefalia:</strong> PC < -2 DE; es <strong>severa</strong> si es < -3 DE. Lo que más importa es la <strong>velocidad de crecimiento del PC</strong>, no una cifra aislada.",
          "• <strong>Macrocefalia:</strong> la causa más frecuente es la <em>macrocefalia familiar benigna</em> (PC alto en uno de los padres, curva paralela al canal, desarrollo normal). Debe sospecharse <strong>hidrocefalia</strong> si el PC cruza canales hacia arriba, hay fontanela tensa o abombada, ojos «en sol poniente», venas del cuero cabelludo dilatadas, vómitos o irritabilidad; otras causas son hematoma subdural crónico (pensar en maltrato), tumores, megalencefalia y raquitismo. Estudio: <strong>ecografía transfontanelar</strong> si la fontanela está abierta, luego resonancia o TAC; derivar a neurocirugía o neurología infantil.",
          "• <strong>Microcefalia:</strong> puede ser <em>primaria</em> (genética, cromosomopatías, síndromes) o <em>secundaria</em> a noxas prenatales o perinatales: infecciones congénitas (<strong>TORCH, virus Zika</strong>), alcohol y otros teratógenos, encefalopatía hipóxico-isquémica y meningitis. Se acompaña de retraso del desarrollo y epilepsia. Estudio inicial: antecedentes prenatales, neuroimagen, serología/PCR de infecciones congénitas y cariograma; <strong>derivar a neurología infantil</strong>. No debe confundirse con la craneosinostosis (cierre precoz de suturas, con deformidad craneal específica)."
        ]
      },
      {
        "subhead": "8. Desnutrición y Obesidad: Manejo Completo",
        "paragraphs": [
          "La <strong>desnutrición</strong> (P/T ≤ -2 DE) se clasifica en <em>primaria</em> (aporte insuficiente o inadecuado de nutrientes) y <em>secundaria</em> (enfermedad que impide ingerir, absorber o aumenta los requerimientos: fibrosis quística, celiaquía, cardiopatía, infecciones crónicas, malabsorción). Clínicamente se reconocen el <strong>marasmo</strong> (emaciación extrema, sin edema, con apetito conservado) y el <strong>kwashiorkor</strong> (<strong>edema bilateral con fóvea</strong>, hipoalbuminemia, lesiones cutáneas, cabello frágil y hepatomegalia). El tratamiento depende de la gravedad.",
          "• <strong>Desnutrición no grave, sin complicaciones:</strong> manejo ambulatorio en APS. Corregir la causa (técnica de alimentación, fórmula mal preparada, infecciones, parasitosis), indicar aporte de 120 a 150 kcal/kg/día con alimentación hipercalórica fraccionada, suplementos del <strong>PNAC</strong> (Programa Nacional de Alimentación Complementaria), hierro, zinc y vitaminas, y controles frecuentes (cada 15 días) hasta que P/T sea ≥ -1 DE. Se agrega apoyo psicosocial y estimulación del desarrollo.",
          "• <strong>Desnutrición grave</strong> (P/T ≤ -3 DE o edema bilateral): <strong>hospitalizar</strong> si tiene edema, anorexia, infección, deshidratación, hipoglicemia, hipotermia o es menor de 6 meses. Fase de <strong>estabilización</strong> (primeros 7 días): tratar hipoglicemia e hipotermia, rehidratar <strong>preferentemente por vía oral</strong> (solución ReSoMal; la vía EV solo en shock, por riesgo de sobrecarga cardíaca), corregir potasio y magnesio, iniciar antibiótico de amplio espectro y alimentar con fórmula láctea de bajo aporte (F-75, ~100 kcal/kg/día). Luego fase de <strong>rehabilitación</strong>: 150 a 220 kcal/kg/día para crecimiento recuperador, y recién entonces hierro.",
          "<em>Síndrome de realimentación:</em> el aumento brusco del aporte calórico provoca <strong>hipofosfemia, hipokalemia e hipomagnesemia</strong> (arritmias, insuficiencia cardíaca, convulsiones). Por eso se avanza gradualmente y se controlan los electrolitos durante los primeros días.",
          "La <strong>obesidad</strong> (P/T o IMC/E ≥ +2 DE) es en más del 95% de los casos <em>exógena</em> (niño con talla normal o alta y edad ósea adelantada). Debe sospecharse causa secundaria si hay <strong>talla baja, retraso del desarrollo o dismorfias</strong> (hipotiroidismo, síndrome de Cushing, síndrome de Prader-Willi, lesión hipotalámica). Se buscan <strong>comorbilidades</strong>: acantosis nigricans y resistencia a la insulina (prediabetes, diabetes tipo 2), dislipidemia, <strong>hipertensión arterial</strong> (PA ≥ p95 para edad, sexo y talla), hígado graso (ALT elevada), síndrome de apnea del sueño (ronquido), epifisiólisis femoral y genu valgum, ovario poliquístico y problemas psicosociales (burlas, baja autoestima, depresión).",
          "<em>Estudio:</em> desde los 10 años (o inicio de la pubertad) o antes si hay riesgo: <strong>glicemia en ayunas, perfil lipídico, transaminasas</strong> y presión arterial. <em>Tratamiento:</em> intervención <strong>familiar multicomponente</strong> sobre estilo de vida: alimentación saludable sin bebidas azucaradas, <strong>actividad física ≥ 60 minutos diarios</strong>, pantallas < 2 horas al día y sueño suficiente. La meta en el menor de 10 años es <strong>mantener el peso</strong> mientras crece; en el adolescente con obesidad se busca bajar de 0,5 a 1 kg/mes. Los fármacos y la cirugía bariátrica quedan en manos del especialista. <strong>Derivar</strong> si hay obesidad severa (≥ +3 DE), comorbilidad o sospecha de causa secundaria."
        ]
      },
      {
        "subhead": "9. Supervisión de Salud del Lactante y del Escolar, y Promoción de Estilos de Vida Saludables",
        "paragraphs": [
          "La <strong>supervisión de salud del lactante</strong> (Programa Nacional de Salud de la Infancia, <em>Chile Crece Contigo</em>) se hace con controles seriados: ingreso antes de los 10 días de vida, al mes y luego cada uno o dos meses durante el primer año, con controles posteriores a los 18 y 24 meses y a los 3, 4 y 5 años. En cada control se evalúan: <strong>crecimiento</strong> (peso, longitud, PC, estado nutricional), <strong>desarrollo psicomotor</strong> (EEDP/TEPSI), examen físico dirigido (cadera, corazón, ojos con reflejo rojo, testículos, dientes), <strong>vacunas</strong>, lactancia y alimentación, suplementos de vitamina D y hierro, y pesquisa de riesgo psicosocial (depresión materna con la escala de Edimburgo, violencia, vínculo).",
          "La educación a los padres incluye <strong>sueño seguro</strong> (decúbito supino, cuna sin almohadas ni peluches, sin colecho en lactantes menores de 6 meses, prevención del síndrome de muerte súbita), prevención de accidentes y de la exposición al humo de tabaco, y estimulación del juego y del lenguaje.",
          "La <strong>supervisión de salud del escolar</strong> (5 a 9 años) y del adolescente es un control <strong>anual</strong> que incluye antropometría con estado nutricional (IMC/E), presión arterial, agudeza visual y auditiva, columna (<strong>escoliosis</strong>, prueba de Adams), desarrollo puberal (Tanner), salud bucal, vacunas escolares (VPH, dTpa), rendimiento escolar, salud mental (ánimo, conducta, <em>bullying</em>), actividad física y alimentación. La pesquisa visual, auditiva y de columna se complementa con el programa escolar de JUNAEB. En el adolescente la entrevista debe incluir un tiempo a solas y confidencial.",
          "La <strong>promoción de salud</strong> en el niño se resume en: lactancia materna exclusiva hasta los 6 meses, alimentación complementaria saludable, <strong>actividad física diaria</strong>, sueño adecuado, límite de pantallas, <strong>salud bucal</strong> (cepillado desde el primer diente con pasta con flúor), vacunación al día, crianza respetuosa y ambientes libres de humo de tabaco. Las medidas son familiares y comunitarias (escuela, plazas, kioscos saludables) y no solo del consultorio."
        ]
      }
    ],
    "table": {
      "title": "Clasificación Nutricional según Puntaje Z (Desviaciones Estándar) MINSAL / OMS",
      "headers": [
        "Diagnóstico Nutricional",
        "Menores de 5 Años (P/T)",
        "De 5 a 19 Años (IMC/E)",
        "Talla para la Edad (T/E)"
      ],
      "rows": [
        [
          "Obesidad Severa",
          "≥ +3.0 DE",
          "≥ +3.0 DE",
          "—"
        ],
        [
          "Obesidad",
          "+2.0 a +2.9 DE",
          "+2.0 a +2.9 DE",
          "—"
        ],
        [
          "Sobrepeso",
          "+1.0 a +1.9 DE",
          "+1.0 a +1.9 DE",
          "—"
        ],
        [
          "Eutrófico (Normal)",
          "-0.9 a +0.9 DE",
          "-0.9 a +0.9 DE",
          "-1.9 a +1.9 DE"
        ],
        [
          "Riesgo Desnutrición / Bajo Peso",
          "-1.0 a -1.9 DE",
          "-1.0 a -1.9 DE",
          "—"
        ],
        [
          "Desnutrición / Talla Baja",
          "≤ -2.0 DE",
          "≤ -2.0 DE",
          "≤ -2.0 DE"
        ]
      ]
    },
    "vignette": "Lactante de 8 meses, traído a control sano en CESFAM. Alimentado con lactancia materna y dos comidas diarias (almuerzo y cena) con postre de fruta. Al examen físico: peso 8.100 g, longitud 70 cm. Al contrastar con curvas OMS: P/E se ubica en -0.4 DE, P/T se ubica en -1.3 DE, y T/E se ubica en +0.8 DE. Su desarrollo psicomotor es adecuado para la edad y el examen segmentario no presenta hallazgos patológicos.",
    "explicacion": "El indicador que define el estado nutricional actual en un lactante menor de 5 años es el Peso para la Talla (P/T). Un P/T entre -1.0 y -1.9 DE corresponde a Riesgo de Desnutrición. La T/E de +0.8 DE descarta alteración del crecimiento lineal. La conducta médica correcta en APS es evaluar detalladamente la anamnesis alimentaria (consistencia de papillas, incorporación de aceite vegetal, frecuencia de lactancia), reforzar la técnica y citar a control ponderal abreviado en 15 a 30 días.",
    "keyPoints": [
      "En menores de 5 años, el diagnóstico nutricional oficial se establece mediante el indicador Peso para la Talla (P/T).",
      "A partir de los 5 años (60 meses) hasta los 19 años, se utiliza el Índice de Masa Corporal para la Edad (IMC/E).",
      "Riesgo de desnutrición corresponde a P/T entre -1.0 y -1.9 DE; Desnutrición a P/T ≤ -2.0 DE.",
      "Sobrepeso corresponde a P/T o IMC/E entre +1.0 y +1.9 DE; Obesidad entre +2.0 y +2.9 DE; Obesidad severa ≥ +3.0 DE.",
      "La Talla para la Edad (T/E) refleja nutrición y crecimiento crónico; T/E ≤ -2.0 DE define Talla Baja.",
      "La medición hasta los 24 meses se realiza acostado (longitud con infantómetro) y desde los 2 años de pie (estatura con estadiómetro)."
    ],
    "questions": [
      {
        "stem": "Un lactante de 14 meses es llevado al CESFAM para su control de salud infantil. Su madre refiere que come bien, recibe fórmula de continuación y sólidos. En la antropometría se registra: P/T en +1.4 DE, T/E en +0.2 DE y P/E en +1.1 DE. ¿Cuál es el diagnóstico nutricional integrado del paciente?",
        "options": [
          {
            "id": "A",
            "text": "Eutrófico con talla normal"
          },
          {
            "id": "B",
            "text": "Sobrepeso con talla normal"
          },
          {
            "id": "C",
            "text": "Obesidad con talla normal"
          },
          {
            "id": "D",
            "text": "Riesgo de desnutrición con talla normal"
          },
          {
            "id": "E",
            "text": "Sobrepeso con talla alta"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Para ser eutrófico, el P/T debe encontrarse entre -0.9 y +0.9 DE.\nB) Correcta. En menores de 5 años, el estado nutricional se determina por el indicador P/T. Un valor de +1.4 DE se encuentra en el rango de +1.0 a +1.9 DE, lo que corresponde a Sobrepeso. La T/E de +0.2 DE se ubica entre -1.9 y +1.9 DE, correspondiente a talla normal.\nC) Incorrecta. Obesidad requiere un P/T ≥ +2.0 DE.\nD) Incorrecta. El riesgo de desnutrición requiere P/T entre -1.0 y -1.9 DE.\nE) Incorrecta. La talla alta requiere T/E ≥ +2.0 DE, y este lactante tiene +0.2 DE.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.061"
      },
      {
        "stem": "Una niña de 7 años acude a control de salud escolar. En la evaluación antropométrica presenta un IMC de 21.5 kg/m², lo que al graficar en las tablas OMS para su edad y sexo arroja un puntaje Z de IMC/E de +2.4 DE y una T/E de -0.5 DE. ¿Cuál es la clasificación nutricional correcta?",
        "options": [
          {
            "id": "A",
            "text": "Sobrepeso con talla normal"
          },
          {
            "id": "B",
            "text": "Obesidad con talla baja"
          },
          {
            "id": "C",
            "text": "Obesidad con talla normal"
          },
          {
            "id": "D",
            "text": "Obesidad severa con talla normal"
          },
          {
            "id": "E",
            "text": "Eutrófica con talla normal"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Sobrepeso en mayores de 5 años corresponde a IMC/E entre +1.0 y +1.9 DE.\nB) Incorrecta. La T/E es de -0.5 DE, lo que está dentro del rango normal (-1.9 a +1.9 DE). Talla baja requiere T/E ≤ -2.0 DE.\nC) Correcta. A partir de los 5 años se utiliza el indicador IMC/E. Un puntaje Z de +2.4 DE corresponde a Obesidad (+2.0 a +2.9 DE). La talla es normal (-0.5 DE).\nD) Incorrecta. Obesidad severa requiere IMC/E ≥ +3.0 DE.\nE) Incorrecta. Eutrófico requiere IMC/E entre -0.9 y +0.9 DE.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.061"
      }
    ]
  },
  {
    "id": "ped-02",
    "classId": "ped-02",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.2",
    "title": "Desarrollo Psicomotor: Hitos Madurativos & Baterías de Tamizaje (EEDP y TEPSI)",
    "perfilCode": "2.01.1.083",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Cubierto por Programa Chile Crece Contigo y salas de estimulación en APS.",
    "reconstrucciones": "EUNACOM Julio 2023 (Q#14) · EUNACOM Diciembre 2021 (Q#112)",
    "frecuencia": "Alta rentabilidad · Pregunta recurrente sobre hitos motores y de lenguaje y edad de aplicación de EEDP/TEPSI",
    "svg": null,
    "algoTitle": "Flujo de Tamizaje y Manejo de Déficit del Desarrollo Psicomotor en APS (Chile Crece Contigo)",
    "diagramRows": [
      {
        "t": "Control Sano Infantil: Evaluación del DSM según Edad",
        "s": "Observación de hitos clínicos madurativos cardinales en cada control",
        "type": "acc"
      },
      {
        "t": "Aplicación de Instrumentos Estandarizados Nacionales",
        "s": "EEDP: a los 8 y 18 meses · TEPSI: a los 3 años (36 meses)",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Resultado del Coeficiente de Desarrollo (CD)",
        "al": "Estratificación del Coeficiente de Desarrollo",
        "ll": "CD ≥ 85 (Normal)",
        "left": {
          "t": "Desarrollo Psicomotor Normal",
          "s": "Refuerzo pautas de estimulación · Próximo control según calendario habitual",
          "type": "acc"
        },
        "rl": "CD < 85 (Riesgo / Retraso)",
        "right": {
          "t": "Déficit del Desarrollo Psicomotor",
          "s": "CD 70-84: Riesgo (Sala de Estimulación) · CD < 70: Retraso (Médico + Especialista)",
          "type": "crit"
        }
      },
      {
        "t": "Derivación e Intervención Multidisciplinaria",
        "s": "Descartar hipoacusia, hipotiroidismo, errores innatos y trastorno del espectro autista (TEA)",
        "type": "warn"
      }
    ],
    "contexto": "El desarrollo psicomotor (DSM) es un proceso continuo y ordenado de maduración del sistema nervioso central que progresa en sentido céfalo-caudal y de proximal a distal. La detección precoz de retrasos permite intervenciones en períodos críticos de máxima plasticidad cerebral. En Chile, el sistema público cuenta con instrumentos validados a nivel poblacional (EEDP y TEPSI) integrados a la red del subsistema Chile Crece Contigo.",
    "contentSections": [
      {
        "subhead": "1. Hitos Madurativos Cardinales del Desarrollo Psicomotor",
        "paragraphs": [
          "El médico debe conocer las edades límite (red flags) en las cuatro áreas cardinales (motora gruesa, motora fina, lenguaje y social):",
          "• <strong>3 meses:</strong> Sostén cefálico firme, sonrisa social responsiva, vocalizaciones guturales ('agú'), manos abiertas.",
          "• <strong>6 meses:</strong> Sedestación con apoyo (trípode), transferencia de objetos de una mano a otra, balbuceo monosilábico ('ma', 'da'), se gira de prono a supino.",
          "• <strong>8-9 meses:</strong> Sedestación independiente sin apoyo, pinza radial inferior, balbuceo bisilábico duplicado ('mamá', 'papá' inespecífico), angustia de separación (ante extraños).",
          "• <strong>12 meses:</strong> Bipedestación con apoyo o marcha incipiente, pinza fina madura (índice-pulgar), primeras 1-2 palabras con sentido ('papá', 'agua'), responde a su nombre y señala para pedir (protoimperativo).",
          "• <strong>18 meses:</strong> Marcha autónoma fluida, sube escalones tomado de la mano, torre de 3 cubos, vocabulario de 10 a 20 palabras, uso de cuchara.",
          "• <strong>24 meses:</strong> Corre bien, sube y baja escaleras solo, patea pelota, torre de 6 cubos, frases de 2 palabras ('quiero agua'), control diurno de esfínteres incipiente."
        ]
      },
      {
        "subhead": "2. Instrumentos Estandarizados de Tamizaje en Chile: EEDP y TEPSI",
        "paragraphs": [
          "En la red pública de salud chilena, la evaluación formal se realiza mediante dos baterías normadas:",
          "• <strong>EEDP (Escala de Evaluación del Desarrollo Psicomotor):</strong> Se aplica desde los <strong>0 hasta los 24 meses</strong> de edad. Evalúa cuatro áreas: Motora, Coordinación, Lenguaje y Social. Los controles con aplicación obligatoria por norma son a los <strong>8 meses y a los 18 meses</strong> de vida.",
          "• <strong>TEPSI (Test de Desarrollo Psicomotor):</strong> Se aplica entre los <strong>2 y los 5 años</strong> (24 a 59 meses). Evalúa tres áreas: Coordinación, Lenguaje y Motricidad. La aplicación universal programada en APS es a los <strong>3 años cumplidos (36 meses)</strong>.",
          "• <strong>Puntajes de Corte (Coeficiente de Desarrollo / Puntaje T):</strong>",
          "  - <strong>Normal:</strong> Puntaje ≥ 85 puntos (o normal con rezago si aprueba el total pero falla un ítem específico).",
          "  - <strong>Riesgo:</strong> Puntaje entre 70 y 84 puntos (ingreso a Sala de Estimulación de APS, reevaluación en 60-90 días).",
          "  - <strong>Retraso:</strong> Puntaje < 70 puntos (evaluación médica inmediata, derivación a pediatría/neurología infantil)."
        ]
      },
      {
        "subhead": "3. Banderas Rojas y Signos de Alerta de Retraso Global o TEA",
        "paragraphs": [
          "Constituyen <strong>signos de alarma absolutos</strong> que obligan a evaluación inmediata sin esperar el próximo control:",
          "• Ausencia de sonrisa social a los 2-3 meses.",
          "• Falta de fijación y seguimiento ocular a los 3 meses.",
          "• Hipotonía axial marcada o ausencia de sostén cefálico a los 4 meses.",
          "• Persistencia de reflejos arcaicos (moro, prensión) más allá de los 6 meses.",
          "• No mantenerse sentado sin apoyo a los 9 meses.",
          "• Ausencia de balbuceo comunicativo o de señalar con el dedo a los 12 meses.",
          "• No caminar de forma independiente a los 18 meses.",
          "• No decir palabras con significado a los 18 meses o no emitir frases de 2 palabras a los 24 meses.",
          "• <strong>Regresión o pérdida de cualquier habilidad previamente adquirida:</strong> Alerta máxima de enfermedad neurodegenerativa o trastorno del espectro autista (TEA, evaluable con M-CHAT a los 18-24 meses)."
        ]
      },
      {
        "subhead": "4. Síndromes Hipertónico e Hipotónico: Diagnóstico Inicial y Derivación",
        "paragraphs": [
          "El <strong>síndrome hipertónico</strong> es el aumento del tono muscular. En el lactante lo más frecuente es la <strong>espasticidad</strong> por lesión de la vía piramidal, característica de la <strong>parálisis cerebral</strong> (causa más común: lesión perinatal, prematurez con leucomalacia periventricular, encefalopatía hipóxico-isquémica, kernicterus, infección). Se reconoce por tono aumentado velocidad-dependiente («signo de navaja»), <strong>hiperreflexia, clonus, Babinski persistente</strong>, aducción de las piernas «en tijera», marcha en puntillas, pulgar incluido en el puño y persistencia de reflejos arcaicos; una <strong>preferencia manual antes del año</strong> sugiere hemiparesia.",
          "Según el patrón se describen formas <em>espásticas</em> (diplejía, hemiplejía, cuadriplejía), <em>discinéticas o distónicas</em> (compromiso extrapiramidal) y <em>atáxicas</em>. El diagnóstico es clínico y se complementa con <strong>resonancia cerebral</strong>. <em>Conducta (Inicial/Derivar):</em> descartar causas tratables, <strong>derivar a neurología infantil</strong> y rehabilitación (kinesiterapia precoz, órtesis, toxina botulínica o baclofeno en el especialista) y apoyar a la familia.",
          "El <strong>síndrome hipotónico</strong> (lactante «de trapo», postura en rana, signo de la bufanda, <em>head lag</em> en la tracción a sentado y deslizamiento entre las manos en suspensión axilar) se divide en <strong>central</strong> (la más frecuente: fuerza conservada, reflejos presentes o aumentados) y <strong>periférico o neuromuscular</strong> (<strong>debilidad marcada, hipo o arreflexia</strong>, atrofia, fasciculaciones). Causas centrales: encefalopatía hipóxico-isquémica, cromosomopatías (<strong>síndrome de Down</strong>), <strong>síndrome de Prader-Willi</strong>, <strong>hipotiroidismo congénito</strong> y malformaciones cerebrales. Causas periféricas: <strong>atrofia muscular espinal tipo 1 (Werdnig-Hoffmann)</strong>, miopatías y distrofia miotónica congénitas, miastenia neonatal y <strong>botulismo del lactante</strong> (constipación, ptosis, llanto débil; antecedente de miel).",
          "<em>Estudio inicial (Inicial/Derivar):</em> TSH y T4 libre, CK, electrolitos, calcio y glicemia, cariograma o <em>microarray</em> si hay dismorfias, estudio metilado para Prader-Willi, y resonancia cerebral en la forma central; en la forma periférica el especialista solicita electromiografía, estudio genético (gen SMN1) o biopsia. La hipotonía con debilidad, dificultad respiratoria o dificultad para alimentarse es una <strong>urgencia de derivación</strong>."
        ]
      },
      {
        "subhead": "5. Trastornos del Desarrollo: Retraso Global, TEA y TDAH (Sospecha y Derivación)",
        "paragraphs": [
          "Un <strong>retraso global del desarrollo</strong> es el compromiso de dos o más áreas del DSM (< -2 DE) en menores de 5 años; si persiste, evoluciona a <strong>discapacidad intelectual</strong> (CI < 70 con déficit de la conducta adaptativa). Ante cualquier retraso se descartan siempre <strong>hipoacusia</strong> (EOA/PEATC), alteración visual, hipotiroidismo congénito, intoxicación por plomo, privación psicoafectiva y cromosomopatías (Down, X frágil, Rett).",
          "El <strong>trastorno del espectro autista (TEA)</strong> se caracteriza por déficit persistente de la <strong>comunicación e interacción social</strong> (no responde al nombre, no señala ni comparte la atención, escaso contacto visual) y por <strong>conductas repetitivas</strong> o intereses restringidos. Se tamiza con el <strong>M-CHAT-R/F entre los 16 y 30 meses</strong> (controles de 18 y 24 meses); cualquier <strong>regresión</strong> de lenguaje o habilidades sociales es bandera roja. El <strong>TDAH</strong> (inatención, hiperactividad e impulsividad en al menos dos ambientes, inicio antes de los 12 años y persistencia sobre 6 meses) se diagnostica desde los 4 a 6 años y su tratamiento farmacológico lo indica el especialista.",
          "<em>Conducta del médico general (Sospecha/Inicial/Derivar):</em> registrar las banderas rojas, aplicar el tamizaje del control de salud, ingresar a <strong>estimulación del desarrollo</strong> (sala de estimulación de APS, <em>Chile Crece Contigo</em>) y <strong>derivar a neurología infantil o salud mental infantojuvenil</strong>; la Ley 21.545 (2023) garantiza la detección temprana y la atención de personas con TEA."
        ]
      },
      {
        "subhead": "6. Desarrollo Cognitivo, Afectivo y Social a lo Largo del Ciclo Vital",
        "paragraphs": [
          "• <strong>Piaget (cognitivo):</strong> <em>sensoriomotor</em> (0 a 2 años; adquiere la permanencia del objeto hacia los 8 a 12 meses), <em>preoperacional</em> (2 a 7 años; pensamiento simbólico y egocéntrico), <em>operaciones concretas</em> (7 a 11 años; lógica con objetos reales) y <em>operaciones formales</em> (desde la adolescencia; razonamiento abstracto e hipotético).",
          "• <strong>Erikson (psicosocial):</strong> confianza vs desconfianza (lactante), autonomía vs vergüenza (1 a 3 años), iniciativa vs culpa (preescolar), laboriosidad vs inferioridad (escolar), <strong>identidad vs confusión de roles (adolescencia)</strong>, intimidad vs aislamiento (adulto joven), generatividad vs estancamiento (adulto) e <strong>integridad vs desesperanza (vejez)</strong>.",
          "• <strong>Apego (Bowlby, Ainsworth):</strong> la ansiedad ante extraños aparece a los 6 a 8 meses y la ansiedad de separación entre los 8 y 18 meses; el apego puede ser seguro, evitativo, ambivalente o desorganizado. En la <strong>adolescencia</strong> (temprana 10 a 13, media 14 a 16 y tardía 17 a 19 años) se consolidan la identidad, la autonomía respecto de la familia y la importancia del grupo de pares, con mayor exposición a conductas de riesgo. En el adulto mayor las tareas centrales son el duelo, la jubilación y la integración de la propia vida."
        ]
      },
      {
        "subhead": "7. Trastornos del Lenguaje: Pesquisa, Diagnóstico y Manejo Inicial",
        "paragraphs": [
          "Hitos del lenguaje: arrullos a los 2 meses, balbuceo a los 6, bisílabos (<em>mamá, papá</em>) a los 9 a 10, <strong>primeras palabras a los 12 meses</strong>, unas <strong>50 palabras y frases de dos palabras a los 24 meses</strong> y frases de tres o más palabras a los 3 años, con lenguaje comprensible para extraños en ≥ 75% a los 3 años y casi completo a los 4. Constituyen alerta: <strong>ausencia de balbuceo a los 12 meses, ninguna palabra a los 18 meses, menos de 50 palabras o sin frases a los 24 meses, lenguaje ininteligible a los 3 años y cualquier regresión</strong>.",
          "<em>Diagnóstico:</em> el <strong>retraso simple del lenguaje</strong> («hablador tardío») es el más frecuente y con buen pronóstico, pero debe distinguirse de la <strong>hipoacusia</strong> (se solicita siempre audiometría o PEATC), la discapacidad intelectual, el TEA, la privación psicoafectiva y el <strong>trastorno específico del lenguaje</strong> (TEL; expresivo o mixto) o de los trastornos fonológicos. Las disfluencias («tartamudez») son frecuentes entre los 2 y 5 años; se derivan si duran más de 6 meses o persisten después de los 5 años. El bilingüismo <em>no</em> causa retraso del lenguaje.",
          "<em>Pesquisa (Sospecha/Inicial/Derivar):</em> se hace en el control de salud mediante los hitos, el <strong>subtest de lenguaje del TEPSI/EEDP</strong> y la pauta de preocupación de los padres; una pesquisa alterada se confirma con evaluación fonoaudiológica (pruebas como STSG y TECAL). Manejo inicial: <strong>audiometría/PEATC</strong>, estimulación en casa (hablar, cantar, leer cuentos, limitar pantallas) y <strong>derivación a fonoaudiología</strong> y, según el caso, a ORL o neurología infantil. En edad escolar, el TEL se atiende además en las escuelas de lenguaje."
        ]
      }
    ],
    "table": {
      "title": "Baterías de Tamizaje del Desarrollo Psicomotor en APS (Chile Crece Contigo)",
      "headers": [
        "Parámetro",
        "EEDP (Lactantes)",
        "TEPSI (Preescolares)"
      ],
      "rows": [
        [
          "Rango de Edad",
          "0 a 24 meses",
          "2 a 5 años (24 a 59 meses)"
        ],
        [
          "Edades Obligatorias MINSAL",
          "8 meses y 18 meses",
          "3 años cumplidos (36 meses)"
        ],
        [
          "Áreas Evaluadas",
          "Motora, Coordinación, Lenguaje, Social",
          "Coordinación, Lenguaje, Motricidad"
        ],
        [
          "Normal",
          "Coeficiente de Desarrollo (CD) ≥ 85",
          "Puntaje T ≥ 85"
        ],
        [
          "Riesgo",
          "CD entre 70 y 84 puntos",
          "Puntaje T entre 70 y 84 puntos"
        ],
        [
          "Retraso",
          "CD < 70 puntos",
          "Puntaje T < 70 puntos"
        ],
        [
          "Conducta en Riesgo",
          "Sala de Estimulación + Reevaluar en 60 días",
          "Sala de Estimulación + Reevaluar en 90 días"
        ],
        [
          "Conducta en Retraso",
          "Evaluación médica + Derivación a Pediatría",
          "Evaluación médica + Derivación a Especialidad"
        ]
      ]
    },
    "vignette": "Lactante de 9 meses, sin antecedentes perinatales patológicos. Acude a control sano de los 8 meses que estaba pendiente. En la evaluación clínica se observa que no logra mantenerse sentado de manera independiente, apoya las manos hacia adelante cayendo frecuentemente, no transfiere objetos de una mano a otra y emite únicamente sonidos guturales guturales aislados sin balbuceo bisilábico. En la aplicación de la EEDP obtiene un puntaje estándar que corresponde a un Coeficiente de Desarrollo de 64 puntos.",
    "explicacion": "Un lactante de 9 meses que no logra sedestación estable (hito esperado a los 7-8 meses), no realiza transferencia de objetos (esperado a los 6 meses) y presenta un Coeficiente de Desarrollo (CD) en la EEDP < 70 puntos se clasifica formalmente como Retraso del Desarrollo Psicomotor. La conducta médica inmediata consiste en realizar examen neurológico completo, descartar causas sensoriales (hipoacusia) y derivar a Pediatría / Neurología Infantil para estudio etiológico e inicio precoz de neurorrehabilitación.",
    "keyPoints": [
      "El EEDP se aplica en Chile de forma obligatoria a los 8 meses y a los 18 meses (rango 0 a 24 meses).",
      "El TEPSI se aplica de forma universal a los 3 años cumplidos (36 meses) en el control de salud infantil.",
      "Puntajes: Normal ≥ 85; Riesgo = 70 a 84 (ingresa a Sala de Estimulación); Retraso < 70 (evaluación médica y derivación).",
      "Hitos clave: Sostén cefálico a los 3 meses; sedestación sin apoyo a los 8 meses; marcha independiente a los 12-15 meses.",
      "Límite máximo para marcha independiente es 18 meses; si no camina a los 18 meses es bandera roja formal.",
      "La pérdida de pautas ya adquiridas (regresión) constituye siempre un signo de alarma neurológica urgente."
    ],
    "questions": [
      {
        "stem": "Un lactante de 8 meses acude a control de salud infantil en el CESFAM. La enfermera aplica la Escala de Evaluación del Desarrollo Psicomotor (EEDP), obteniendo un Coeficiente de Desarrollo de 76 puntos. ¿Cuál es la clasificación del desarrollo y la conducta inicial más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Desarrollo normal; citar a control habitual a los 12 meses"
          },
          {
            "id": "B",
            "text": "Riesgo de déficit del DSM; derivar a Sala de Estimulación y reevaluar con EEDP en 60 días"
          },
          {
            "id": "C",
            "text": "Retraso del DSM; derivar de urgencia a Neurología Infantil"
          },
          {
            "id": "D",
            "text": "Retraso del DSM; hospitalizar para estudio metabólico"
          },
          {
            "id": "E",
            "text": "Desarrollo con rezago; indicar control telefónico en 6 meses"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Un puntaje de 76 puntos no es normal (normal es ≥ 85).\nB) Correcta. Según las normas técnicas de Chile Crece Contigo y del MINSAL, un Coeficiente de Desarrollo en la EEDP entre 70 y 84 puntos se clasifica como Riesgo. La conducta oficial es el ingreso a la Sala de Estimulación de APS y la reevaluación con una nueva EEDP en 60 días.\nC) Incorrecta. Retraso corresponde a puntaje < 70 puntos.\nD) Incorrecta. No requiere hospitalización ni tiene criterios de retraso severo.\nE) Incorrecta. El rezago se define cuando el puntaje global es normal (≥ 85) pero falla en un área específica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.083"
      },
      {
        "stem": "Durante el control de salud infantil de un niño de 18 meses, el médico constata que aún no camina de forma independiente, requiriendo ser tomado de ambas manos para dar pasos inestables. Dice solo 'mamá' y no señala con el dedo para pedir cosas. ¿Cuál es la conducta médica más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Tranquilizar a la madre y esperar hasta los 24 meses, dado que la marcha puede demorarse"
          },
          {
            "id": "B",
            "text": "Indicar uso de andador infantil para fortalecer la musculatura de extremidades inferiores"
          },
          {
            "id": "C",
            "text": "Considerar bandera roja por falta de marcha a los 18 meses, realizar examen neurológico completo y derivar a especialista"
          },
          {
            "id": "D",
            "text": "Solicitar únicamente radiografía de pelvis para descartar displasia de cadera"
          },
          {
            "id": "E",
            "text": "Suspender lácteos e indicar multivitamínicos orales"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Los 18 meses son la edad límite superior estricta para la marcha independiente. No caminar a los 18 meses nunca es una variante normal y no debe esperarse.\nB) Incorrecta. Los andadores están formalmente desaconsejados por la Academia Americana de Pediatría y la Sociedad Chilena de Pediatría (SOCHIPE) por alto riesgo de traumatismos graves y alteración del patrón de marcha.\nC) Correcta. La ausencia de marcha independiente y la falta de lenguaje comunicativo (señalar) a los 18 meses son banderas rojas formales que exigen examen físico/neurológico acucioso y derivación a Pediatría / Neurología Infantil.\nD) Incorrecta. Aunque la cadera debe evaluarse, el cuadro excede lo ortopédico puro.\nE) Incorrecta. No tiene indicación clínica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.083"
      }
    ]
  },
  {
    "id": "ped-03",
    "classId": "ped-03",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.3",
    "title": "Programa Nacional de Inmunizaciones (PNI Chile): Calendario de Vacunación Obligatorio 2026",
    "perfilCode": "2.01.2.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Garantía de acceso universal, obligatoria y gratuita por Decreto Ley Supremo del Ministerio de Salud (MINSAL).",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#45) · EUNACOM Diciembre 2023 (Q#101) · EUNACOM Julio 2021 (Q#5)",
    "frecuencia": "Máxima rentabilidad · Patología de salud pública pediátrica más preguntada en el examen",
    "svg": null,
    "algoTitle": "Cronología y Composición de Vacunas del Calendario Nacional PNI Chile",
    "diagramRows": [
      {
        "t": "Recién Nacido en Maternidad (Sala de Partos)",
        "s": "BCG (Tuberculosis miliar/meníngea) + Hepatitis B neonatal (primeras 12-24h)",
        "type": "acc"
      },
      {
        "t": "Lactante Menor: 2 y 4 Meses de Vida",
        "s": "Hexavalente (DTPa + Hib + HB + VIP) + Neumocócica Conjugada (13 o 15-valente)",
        "type": "dec"
      },
      {
        "t": "Lactante Menor: 6 Meses de Vida",
        "s": "Hexavalente (3.ª dosis) · Nota: Lactante prematuro recibe Neumococo a los 6 meses",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Lactante Mayor: 12 y 18 Meses de Vida",
        "al": "Hitos Inmunológicos de los 12 y 18 Meses",
        "ll": "12 Meses (1 Año)",
        "left": {
          "t": "Vacunas del Año de Vida",
          "s": "Tresvírica (SRP) + Meningocócica Conjugada (ACWY) + Neumocócica Conjugada (refuerzo)",
          "type": "acc"
        },
        "rl": "18 Meses (Año y Medio)",
        "right": {
          "t": "Vacunas de los 18 Meses",
          "s": "Hexavalente (4.ª dosis) + Hepatitis A + Varicela (1.ª dosis)",
          "type": "crit"
        }
      },
      {
        "t": "Vacunas Escolares (1.°, 4.°, 5.° y 8.° Básico)",
        "s": "1.° Básico: Tresvírica + dTpa · 4.° y 5.° Básico: VPH (Gardasil 9) · 8.° Básico: dTpa refuerzo",
        "type": "warn"
      }
    ],
    "contexto": "El Programa Nacional de Inmunizaciones (PNI) de Chile es un bien público fundamental, con coberturas históricas superiores al 90%. El médico general debe memorizar de manera infalible el calendario vigente (incluyendo la incorporación de anticuerpos monoclonales como Nirsevimab para VRS), los tipos de vacunas (vivas atenuadas vs inactivadas), sus contraindicaciones formales (embarazo, inmunodeprimidos) y el manejo de los Eventos Supuestamente Atribuibles a la Vacunación o Inmunización (ESAVI).",
    "contentSections": [
      {
        "subhead": "1. Calendario Oficial de Vacunación PNI Infantil",
        "paragraphs": [
          "• <strong>Recién Nacido:</strong> <strong>BCG</strong> (intradérmica, previene formas graves meníngea y miliar de tuberculosis; contraindicada si peso < 2.000 g o inmunodeficiencia conocida) y <strong>Hepatitis B</strong> (monovalente intramuscular, en las primeras 12-24 h de vida).",
          "• <strong>Lactante a los 2 y 4 meses:</strong>",
          "  1) <strong>Hexavalente acelular:</strong> Difteria, Tétanos, Tos convulsiva acelular (DTPa), Haemophilus influenzae tipo b (Hib), Hepatitis B (HB) y Polio inactivada (VIP inyectable). Reemplazó a la polio oral viva.",
          "  2) <strong>Neumocócica conjugada:</strong> Protege contra Streptococcus pneumoniae.",
          "• <strong>Lactante a los 6 meses:</strong> <strong>Hexavalente</strong> (3.ª dosis). En prematuros extremos se administra también dosis de Neumocócica a los 6 meses (esquema 3+1).",
          "• <strong>Lactante a los 12 meses (1 año):</strong>",
          "  1) <strong>Tresvírica (SRP):</strong> Sarampión, Rubéola y Parotiditis (virus vivos atenuados).",
          "  2) <strong>Meningocócica conjugada (ACWY):</strong> Protege contra serogrupos A, C, W-135 e Y.",
          "  3) <strong>Neumocócica conjugada:</strong> Dosis de refuerzo.",
          "• <strong>Lactante a los 18 meses:</strong>",
          "  1) <strong>Hexavalente</strong> (4.ª dosis de refuerzo).",
          "  2) <strong>Hepatitis A</strong> (inactivada).",
          "  3) <strong>Varicela</strong> (1.ª dosis, virus vivo atenuado; 2.ª dosis a los 36 meses)."
        ]
      },
      {
        "subhead": "2. Vacunación Escolar e Innovaciones en Chile (Nirsevimab y VPH)",
        "paragraphs": [
          "• <strong>36 meses (3 años):</strong> <strong>Varicela</strong> (2.ª dosis).",
          "• <strong>1.° Básico (6 años):</strong> <strong>Tresvírica</strong> (2.ª dosis) + <strong>dTpa</strong> acelular (difteria, tétanos, pertussis acelular formulación adulto/adolescente).",
          "• <strong>4.° y 5.° Básico:</strong> <strong>VPH (Virus Papiloma Humano):</strong> Vacuna nonavalente (Gardasil 9) administrada a niñas y niños (4.° básico 1.ª dosis, 5.° básico 2.ª dosis) para prevención de cáncer cervicouterino, anal y verrugas genitales.",
          "• <strong>8.° Básico:</strong> <strong>dTpa</strong> (refuerzo de tétanos y tos convulsiva).",
          "• <strong>Nirsevimab (Beyfortus):</strong> Hito sanitario chileno 2024-2026. No es una vacuna, sino un <em>anticuerpo monoclonal de vida media prolongada</em> contra la proteína F del Virus Respiratorio Sincicial (VRS). Se administra como inmunización pasiva universal a todos los recién nacidos y lactantes menores de 6 meses que ingresan a su primera temporada invernal, reduciendo más de 80% las hospitalizaciones por bronquiolitis grave."
        ]
      },
      {
        "subhead": "3. Contraindicaciones Reales vs Falsas Contraindicaciones",
        "paragraphs": [
          "• <strong>Vacunas de Virus Vivos Atenuados:</strong> BCG, Tresvírica (SRP), Varicela y Fiebre Amarilla. <em>Contraindicadas en:</em> Inmunodeficiencias congénitas o adquiridas graves (VIH con CD4 < 15%), terapia inmunosupresora a dosis altas (corticoides ≥ 2 mg/kg/día de prednisona por > 14 días), y <strong>embarazo</strong>.",
          "• <strong>Falsas Contraindicaciones (Errores habituales en EUNACOM):</strong>",
          "  - Resfrío común, coriza, diarrea leve o fiebre de bajo grado (< 38.5°C) <strong>NO</strong> contraindican la vacunación.",
          "  - Tratamiento antibiótico en curso <strong>NO</strong> contraindica ninguna vacuna.",
          "  - Alergia al huevo: Las vacunas Tresvírica y de Influenza actuales pueden administrarse de forma segura en APS sin pruebas cutáneas previas.",
          "  - Prematurez: Los prematuros deben vacunarse según su <strong>edad cronológica postnatal</strong>, nunca según la edad gestacional corregida (a excepción del peso para BCG que requiere ≥ 2.000 g)."
        ]
      },
      {
        "subhead": "4. Técnica de Administración de Vacunas: Vías, Sitios y Agujas (Inyecciones SC, IM, ID y EV)",
        "paragraphs": [
          "• <strong>Intramuscular (IM):</strong> ángulo de 90°. En el <strong>lactante y el niño que aún no camina</strong> se usa el <strong>vasto lateral</strong> (tercio medio de la cara anterolateral del muslo); desde que camina y en el adulto, el <strong>deltoides</strong>. Aguja de 25 mm (22 a 25 G) en lactantes y 25 a 38 mm en niños mayores y adultos (16 mm en el recién nacido). <strong>No se usa el glúteo</strong> (riesgo del nervio ciático y menor inmunogenicidad de la vacuna de hepatitis B). Se aplican por esta vía la hexavalente, la neumocócica, la dTpa, la hepatitis A y el VPH.",
          "• <strong>Subcutánea (SC):</strong> ángulo de 45°, aguja de 16 mm (5/8\"), en el muslo o la región deltoidea, formando un pliegue de piel; se usa para <strong>tresvírica, varicela</strong> y otras vacunas de virus vivos. <strong>Intradérmica (ID):</strong> la <strong>BCG</strong> se aplica en la región deltoidea derecha con aguja fina (26 a 27 G), bisel hacia arriba, ángulo de 15°, formando un <strong>habón o pápula de 5 mm</strong> (0,1 mL); no se frota ni se cubre. Cuando se aplican varias vacunas se usan <strong>sitios distintos separados por al menos 2,5 cm</strong>.",
          "• <strong>Endovenosa (EV):</strong> con técnica aséptica (lavado de manos, guantes, antisepsia con alcohol o clorhexidina y esperar a que seque) se cateteriza una vena periférica (dorso de la mano, antebrazo, pie; en el lactante también cuero cabelludo), se comprueba el reflujo de sangre y se fija. <strong>No se reencapuchan las agujas</strong> y se desechan en contenedores cortopunzantes. En el lactante se reduce el dolor con lactancia, solución de sacarosa o contacto piel a piel.",
          "<em>Seguridad:</em> mantener la <strong>cadena de frío (2 a 8 °C)</strong>, verificar el lote y la fecha, registrar la dosis y observar al vacunado durante 15 a 30 minutos. La <strong>anafilaxia</strong> se trata con <strong>adrenalina IM 0,01 mg/kg</strong> (solución 1:1.000, máximo 0,5 mg) en el vasto lateral. Los eventos supuestamente atribuidos a vacunación e inmunización (ESAVI) son de <strong>notificación obligatoria</strong>."
        ]
      },
      {
        "subhead": "5. Vacunación de Hepatitis A y B: Esquemas, Grupos de Riesgo y Profilaxis Post-Exposición",
        "paragraphs": [
          "• <strong>Hepatitis B:</strong> en el PNI se administra dentro de la hexavalente a los 2, 4 y 6 meses. El <strong>hijo de madre HBsAg positiva</strong> recibe al nacer, en las primeras 12 horas (y no más allá de 7 días), <strong>vacuna más inmunoglobulina antihepatitis B</strong> en sitios distintos, y continúa el esquema; se controla anti-HBs después de completar la serie. En el adulto de riesgo (personal de salud, hemodiálisis, contactos sexuales o domiciliarios de portadores, usuarios de drogas, personas con VIH o hepatopatía crónica) el esquema es de <strong>tres dosis (0, 1 y 6 meses)</strong> y se confirma la respuesta con anti-HBs ≥ 10 mUI/mL.",
          "• <strong>Hepatitis A:</strong> el PNI aplica <strong>una dosis a los 18 meses</strong>. En el adulto se indica en hepatopatía crónica, hombres que tienen sexo con hombres, viajeros a zonas endémicas y manipuladores de alimentos, con dos dosis separadas por 6 a 12 meses.",
          "<em>Profilaxis post-exposición:</em> en la exposición a hepatitis B de una persona no vacunada (accidente cortopunzante, contacto sexual, recién nacido de madre portadora) se administra <strong>vacuna más inmunoglobulina específica (0,06 mL/kg)</strong> lo antes posible (idealmente en 24 a 48 horas); si estaba vacunada con respuesta documentada, solo un refuerzo. En la hepatitis A, los contactos susceptibles reciben <strong>vacuna dentro de las 2 primeras semanas</strong> (inmunoglobulina en lactantes menores de 12 meses, inmunodeprimidos y hepatopatía crónica)."
        ]
      },
      {
        "subhead": "6. Inmunizaciones en el Adulto y en las Personas Mayores (Contactos del Lactante)",
        "paragraphs": [
          "El <strong>adulto mayor</strong> recibe <strong>influenza anual</strong> (campaña de otoño-invierno) y vacuna <strong>neumocócica</strong> (polisacárida 23-valente a los 65 años, según el PNI vigente), además de los refuerzos de <strong>tétanos-difteria (Td/dTpa) cada 10 años</strong> y la vacuna contra COVID-19 según las campañas anuales. Fuera del programa se recomienda la vacuna recombinante contra <strong>herpes zóster</strong> en mayores de 50 años. Las vacunas de virus vivos están contraindicadas en inmunosupresión grave.",
          "Estrategia de <strong>cocooning</strong>: los convivientes del lactante (padres, abuelos, cuidadores) deben tener al día la influenza y la <strong>dTpa</strong> para evitar el contagio de coqueluche, y la <strong>embarazada recibe dTpa desde las 28 semanas</strong> de cada gestación, que traspasa anticuerpos al feto y protege al recién nacido durante sus primeros meses."
        ]
      }
    ],
    "table": {
      "title": "Esquema Resumen del Calendario PNI Chile 2026",
      "headers": [
        "Edad",
        "Vacunas Administradas",
        "Vía de Administración",
        "Tipo de Vacuna"
      ],
      "rows": [
        [
          "Recién Nacido",
          "BCG + Hepatitis B",
          "Intradérmica / IM",
          "Viva atenuada / Recombinante"
        ],
        [
          "2 meses",
          "Hexavalente (1.ª) + Neumocócica (1.ª)",
          "Intramuscular (muslos)",
          "Inactivadas"
        ],
        [
          "4 meses",
          "Hexavalente (2.ª) + Neumocócica (2.ª)",
          "Intramuscular (muslos)",
          "Inactivadas"
        ],
        [
          "6 meses",
          "Hexavalente (3.ª)",
          "Intramuscular",
          "Inactivada"
        ],
        [
          "12 meses",
          "Tresvírica (1.ª) + Meningococo ACWY + Neumococo (refuerzo)",
          "Subcutánea / IM",
          "Viva atenuada (SRP) / Conjugadas"
        ],
        [
          "18 meses",
          "Hexavalente (4.ª) + Hepatitis A + Varicela (1.ª)",
          "Intramuscular / Subcutánea",
          "Inactivadas / Viva atenuada (Varicela)"
        ],
        [
          "36 meses",
          "Varicela (2.ª dosis)",
          "Subcutánea",
          "Viva atenuada"
        ],
        [
          "1.° Básico",
          "Tresvírica (2.ª) + dTpa",
          "Subcutánea / IM",
          "Viva atenuada / Inactivada"
        ],
        [
          "4.° y 5.° Básico",
          "VPH (Gardasil 9) niñas y niños",
          "Intramuscular",
          "Recombinante VLP"
        ],
        [
          "8.° Básico",
          "dTpa (refuerzo)",
          "Intramuscular",
          "Inactivada toxoide"
        ]
      ]
    },
    "vignette": "Lactante de 12 meses acude a su control de salud integral. No presenta antecedentes mórbidos. La madre consulta si puede vacunarse hoy, ya que presenta desde hace dos días rinorrea hialina, estornudos y temperatura axilar registrada en el box de 37.4°C. Al examen físico se observa activo, reactivo y con faringe levemente congestiva sin exudados.",
    "explicacion": "Una infección respiratoria alta leve con febrícula (< 38.5°C) o coriza constituye una falsa contraindicación para la vacunación. Diferir la inmunización genera oportunidades perdidas de vacunación y riesgo de contagio. Corresponde administrar las vacunas correspondientes a los 12 meses: Tresvírica (SRP), Meningocócica conjugada (ACWY) y el refuerzo de Neumocócica conjugada.",
    "keyPoints": [
      "A los 2, 4 y 6 meses se administra la vacuna Hexavalente (DTPa-Hib-HB-VIP) intramuscular.",
      "A los 12 meses se administran: Tresvírica (SRP), Meningocócica conjugada ACWY y Neumocócica.",
      "A los 18 meses se administran: Hexavalente (refuerzo), Hepatitis A y Varicela.",
      "Las vacunas vivas atenuadas (BCG, SRP, Varicela) están contraindicadas en inmunosuprimidos y embarazadas.",
      "Infecciones leves afebriles o con fiebre baja (< 38.5°C) NO contraindican la vacunación.",
      "Los prematuros se vacunan según su edad cronológica postnatal, no por edad corregida.",
      "Nirsevimab es un anticuerpo monoclonal contra VRS indicado universalmente a recién nacidos y lactantes menores de 6 meses."
    ],
    "questions": [
      {
        "stem": "Un lactante de 12 meses acude al vacunatorio del CESFAM con su calendario al día hasta los 6 meses. ¿Cuáles son las vacunas que le corresponde recibir según el Programa Nacional de Inmunizaciones (PNI) de Chile?",
        "options": [
          {
            "id": "A",
            "text": "Hexavalente, Hepatitis A y Varicela"
          },
          {
            "id": "B",
            "text": "Tresvírica, Meningocócica ACWY y Neumocócica conjugada"
          },
          {
            "id": "C",
            "text": "Tresvírica, Varicela y Hexavalente"
          },
          {
            "id": "D",
            "text": "Neumocócica conjugada, Hepatitis A y Polio oral"
          },
          {
            "id": "E",
            "text": "Meningocócica ACWY, Varicela y Hepatitis B monovalente"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Hexavalente, Hepatitis A y Varicela corresponden al hito de los 18 meses.\nB) Correcta. En Chile, a los 12 meses de vida se administran: 1) Tresvírica (SRP: sarampión, rubéola, parotiditis), 2) Meningocócica conjugada contra serogrupos A, C, W-135 e Y, y 3) Refuerzo de Neumocócica conjugada.\nC) Incorrecta. La varicela y el refuerzo de hexavalente se indican a los 18 meses.\nD) Incorrecta. La polio oral (bOPV) ya no forma parte del calendario chileno (se usa VIP en la hexavalente).\nE) Incorrecta. La varicela corresponde a los 18 meses.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.001"
      },
      {
        "stem": "Un niño de 3 años en tratamiento con quimioterapia y corticoterapia a dosis altas por leucemia linfoblástica aguda en remisión es llevado a control. Su hermano menor recibirá vacunas del calendario. ¿Cuál de las siguientes vacunas está ABSOLUTAMENTE CONTRAINDICADA en el paciente oncológico inmunodeprimido?",
        "options": [
          {
            "id": "A",
            "text": "Vacuna Antineumocócica conjugada"
          },
          {
            "id": "B",
            "text": "Vacuna contra Hepatitis A inactivada"
          },
          {
            "id": "C",
            "text": "Vacuna Tresvírica (SRP) o Varicela"
          },
          {
            "id": "D",
            "text": "Vacuna Hexavalente acelular"
          },
          {
            "id": "E",
            "text": "Vacuna contra Influenza inactivada"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Las vacunas inactivadas o conjugadas no contienen microorganismos replicativos y son seguras en inmunodeprimidos (aunque su inmunogenicidad puede ser menor).\nB) Incorrecta. La vacuna de Hepatitis A es inactivada y segura.\nC) Correcta. Las vacunas de microorganismos vivos atenuados (Tresvírica, Varicela, BCG) están estrictamente contraindicadas en pacientes con inmunodeficiencias celulares graves o bajo quimioterapia inmunosupresora, por riesgo de diseminación y enfermedad vacunal potencialmente letal.\nD) Incorrecta. La hexavalente está compuesta exclusivamente por antígenos inactivados y toxoides.\nE) Incorrecta. La vacuna influenza administrada en Chile es inactivada.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.001"
      }
    ]
  },
  {
    "id": "ped-04",
    "classId": "ped-04",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.4",
    "title": "Lactancia Materna Exclusiva, Alimentación Complementaria & Suplementación (Vitamina D / Fierro)",
    "perfilCode": "2.01.1.004",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por Programa Nacional de Alimentación Complementaria (PNAC).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#82) · EUNACOM Diciembre 2022 (Q#33)",
    "frecuencia": "Alta rentabilidad · Preguntas directas de dosificación de Vitamina D y edad de inicio de suplementación de fierro",
    "svg": null,
    "algoTitle": "Esquema Cronológico de Alimentación Infantil y Suplementación Profiláctica Universal MINSAL",
    "diagramRows": [
      {
        "t": "Recién Nacido a Término con Lactancia Materna",
        "s": "Lactancia materna exclusiva (LME) a libre demanda los primeros 6 meses",
        "type": "acc"
      },
      {
        "t": "Suplementación Universal de Vitamina D",
        "s": "Inicio al mes de vida: 400 UI/día oral (ergocalciferol/colecalciferol) hasta los 12 meses",
        "type": "warn"
      },
      {
        "k": "split",
        "q": "Suplementación Profiláctica con Hierro Oral",
        "al": "Estratificación de Suplementación de Hierro",
        "ll": "Recién Nacido a Término",
        "left": {
          "t": "Inicio a los 4 Meses de Vida",
          "s": "1 mg/kg/día de hierro elemental hasta el año (si LME > 50%)",
          "type": "acc"
        },
        "rl": "Prematuro (< 37 sem) o Bajo Peso (< 2.500 g)",
        "right": {
          "t": "Inicio Precoz a los 2 Meses",
          "s": "2 a 3 mg/kg/día de hierro elemental (depósitos agotados)",
          "type": "crit"
        }
      },
      {
        "t": "Alimentación Complementaria: Hitos de Introducción",
        "s": "6 meses: 1.ª papilla (almuerzo) + fruta cruda molida · 8-9 meses: 2.ª papilla (cena) · 12 meses: Pescado, huevo entero e incorporación a mesa familiar",
        "type": "dec"
      }
    ],
    "contexto": "La nutrición en los primeros 1.000 días de vida determina la salud metabólica e inmunológica a largo plazo. La OMS y el MINSAL recomiendan lactancia materna exclusiva (LME) durante los primeros 6 meses de vida y complementada hasta los 2 años o más. El médico general debe prescribir con precisión matemática la suplementación profiláctica universal con vitamina D y sulfato ferroso, guiando a la familia en la introducción oportuna y segura de la alimentación complementaria.",
    "contentSections": [
      {
        "subhead": "1. Beneficios de la Lactancia Materna y Contraindicaciones Absolutas",
        "paragraphs": [
          "La leche materna humana es el alimento óptimo: aporta macronutrientes balanceados, anticuerpos secretores (IgA), lactoferrina, oligosacáridos prebióticos (HMO) y lisozima. Reduce sustancialmente el riesgo de diarreas, neumonías, otitis media, muerte súbita del lactante, obesidad futura y diabetes.",
          "<strong>Contraindicaciones Absolutas Maternas de Lactancia:</strong>",
          "• Infección materna por <strong>VIH</strong> (en países con acceso a fórmula como Chile) e infección por <strong>HTLV-1 / HTLV-2</strong> (por riesgo de paraparesia espástica tropical y leucemia/linfoma de células T).",
          "• TBC bacilífera activa no tratada (separación transitoria hasta 2 semanas de tratamiento efectivo).",
          "• Lesiones herpéticas activas en la mama o pezón.",
          "• Consumo activo de drogas ilícitas (cocaína, heroína, pasta base, anfetaminas) o quimioterapia/radiofármacos.",
          "<strong>Contraindicaciones Neonatales:</strong> Galactosemia clásica (requiere fórmula sin lactosa a base de soya). Nota: La fenilcetonuria permite lactancia mixta monitoreada."
        ]
      },
      {
        "subhead": "2. Suplementación Profiláctica Universal MINSAL (Vitamina D y Hierro)",
        "paragraphs": [
          "• <strong>Vitamina D (Prevención de Raquitismo):</strong>",
          "  - <strong>Dosis:</strong> <strong>400 UI al día</strong> por vía oral (habitualmente 4 gotas de formulación pediátrica de 100 UI/gota o 1 gota según presentación).",
          "  - <strong>Momento de inicio:</strong> Al <strong>primer mes de vida (30 días)</strong>.",
          "  - <strong>Duración:</strong> Hasta los <strong>12 meses cumplidos</strong> de edad en todos los niños que reciben lactancia materna o ingesta < 1.000 mL/día de fórmula fortificada.",
          "• <strong>Hierro Elemental (Prevención de Anemia Ferropénica):</strong>",
          "  - <strong>Recién Nacido de Término (AEG):</strong> Iniciar a los <strong>4 meses de vida</strong> a dosis de <strong>1 mg/kg/día</strong> de hierro elemental hasta el año de vida (si recibe > 50% de lactancia materna).",
          "  - <strong>Prematuro (< 37 semanas) o Pequeño para la Edad Gestacional (< 2.500 g):</strong> Iniciar precozmente a los <strong>2 meses de vida</strong> (o a los 30 días en < 1.500 g) a dosis de <strong>2 a 3 mg/kg/día</strong> (hasta 4 mg/kg/día en extremos) debido al menor traspaso placentario de depósitos de hierro en el tercer trimestre."
        ]
      },
      {
        "subhead": "3. Cronograma de Alimentación Complementaria",
        "paragraphs": [
          "La alimentación complementaria se inicia a los <strong>6 meses cumplidos</strong>, momento en que el lactante adquiere madurez renal, digestiva y neurológica (pérdida del reflejo de extrusión, sostén cefálico y sedestación asistida):",
          "• <strong>A los 6 meses:</strong> Se introduce la <strong>primera comida (almuerzo)</strong>: papilla suave o puré mixto (verduras variadas + carne de vacuno, pollo o pavo desgrasada, 20-30 g) + <strong>1 cucharadita de postre (5 mL) de aceite vegetal crudo</strong> (canola, soya u oliva, fuente de ácidos grasos esenciales omega 3 y 6) agregada al momento de servir. Postre: fruta fresca cruda molida (manzana, pera, plátano) sin azúcar añadida.",
          "• <strong>A los 8 a 9 meses:</strong> Se introduce la <strong>segunda comida (cena)</strong> con las mismas características nutricionales.",
          "• <strong>A los 10 a 12 meses:</strong> Incorporación progresiva de pescado blanco/azul, huevo entero cocido y legumbres bien cocidas y pasadas por cedazo.",
          "• <strong>Prohibiciones estrictas el primer año:</strong> Sal añadida, azúcar, miel cruda (riesgo letal de <em>botulismo del lactante</em> por esporas de Clostridium botulinum), y leche de vaca entera no modificada (alta carga de solutos renales y microhemorragias intestinales)."
        ]
      },
      {
        "subhead": "4. Técnica de Lactancia, Problemas Mamarios, Extracción y Destete",
        "paragraphs": [
          "<strong>Técnica correcta:</strong> madre cómoda, bebé con el cuerpo alineado, «vientre con vientre», con la nariz a la altura del pezón. <strong>Buen agarre:</strong> boca bien abierta, labio inferior evertido, <strong>más areola visible por arriba que por abajo</strong>, mentón contra la mama, succión rítmica con deglución audible y <strong>sin dolor</strong>. La lactancia es a libre demanda (8 a 12 tomas al día) y se deja que el lactante vacíe una mama antes de ofrecer la otra. <em>Signos de lactancia efectiva:</em> al menos 6 pañales mojados diarios desde el día 5, deposiciones amarillas y ganancia de peso de 20 a 30 g/día (la pérdida fisiológica hasta 7-10% se recupera hacia los 10 a 14 días).",
          "• <strong>Grietas del pezón:</strong> casi siempre por mal agarre; se corrige la técnica, se aplica un poco de leche materna al final de la toma y se evitan jabones o cremas irritantes. • <strong>Ingurgitación:</strong> mamas tensas y dolorosas al 3.° a 5.° día; vaciado frecuente, compresas tibias antes y frías después, masaje. • <strong>Conducto obstruido:</strong> nódulo doloroso sin fiebre; masaje y vaciado.",
          "• <strong>Mastitis:</strong> zona dolorosa, eritematosa y caliente con <strong>fiebre ≥ 38,4 °C</strong>, calofríos y compromiso general. Se continúa amamantando o extrayendo la leche, con analgesia (ibuprofeno) y, si no mejora en 12 a 24 horas o es grave, antibiótico antiestafilocócico (<strong>cloxacilina o cefalosporina de primera generación</strong> por 10 a 14 días). La lactancia <strong>no</strong> se suspende. • <strong>Absceso mamario:</strong> colección fluctuante; ecografía y drenaje, con continuidad de la lactancia. • <strong>Candidiasis del pezón:</strong> dolor punzante, pezón brillante; tratamiento tópico a la madre y al lactante.",
          "<strong>Extracción y conservación de la leche materna:</strong> extracción manual o con bomba, en recipientes limpios. La leche se mantiene hasta 4 horas a temperatura ambiente, <strong>3 a 4 días en el refrigerador (4 °C)</strong> y hasta <strong>6 meses en el congelador (-18 °C)</strong>; se descongela en el refrigerador o en baño maría, <strong>nunca en microondas</strong>, y no se vuelve a congelar. La madre que trabaja tiene derecho a sala cuna y a una hora diaria para alimentar.",
          "<strong>Destete:</strong> la OMS recomienda lactancia hasta los 2 años o más, complementada desde los 6 meses. Si se decide suspender, debe ser <strong>gradual</strong> (reemplazar una toma cada una a dos semanas) para evitar ingurgitación y mastitis. Si no hay lactancia materna se usa <strong>fórmula de inicio hasta los 6 meses</strong> y de continuación desde entonces; la leche de vaca entera no se da antes de los 12 meses (anemia ferropénica por microsangrado intestinal)."
        ]
      },
      {
        "subhead": "5. Higiene de la Alimentación",
        "paragraphs": [
          "• <strong>Manos y utensilios:</strong> lavado de manos antes de preparar y dar el alimento; biberones y chupetes lavados con agua y detergente y escobillado, y <strong>hervidos 5 minutos</strong> en el primer año. • <strong>Fórmulas:</strong> preparar con agua hervida y enfriada, respetando la dilución exacta (una medida rasa por cada 30 mL), <strong>desechar el sobrante</strong> después de una hora y no recalentar.",
          "• <strong>Alimentos:</strong> lavar frutas y verduras, cocer bien carnes y huevos, refrigerar a ≤ 5 °C y no usar miel antes de los 12 meses (botulismo). Evitar alimentos de riesgo de aspiración (frutos secos enteros, uvas enteras, trozos redondos de salchicha) antes de los 4 a 5 años. • <strong>Conducta a la mesa:</strong> sentado, en horarios regulares, acompañado y sin pantallas; no forzar a comer. • <strong>Higiene bucal:</strong> limpiar las encías y cepillar desde el primer diente con pasta con flúor (1.000 ppm, en cantidad de un grano de arroz); evitar el biberón nocturno por el riesgo de caries."
        ]
      },
      {
        "subhead": "6. Alteraciones Pigmentarias del Recién Nacido y del Niño",
        "paragraphs": [
          "• <strong>Mancha mongólica</strong> (melanocitosis dérmica): máculas azul-grisáceas en la región lumbosacra del recién nacido, benignas, que desaparecen en la infancia; se registran en la ficha para no confundirlas con equimosis por maltrato. • <strong>Manchas café con leche:</strong> aisladas son frecuentes; <strong>seis o más mayores de 5 mm</strong> (15 mm en la pubertad), con pecas axilares o neurofibromas, sugieren <strong>neurofibromatosis tipo 1</strong> (derivar). • <strong>Nevus congénito gigante:</strong> riesgo de melanoma y de melanosis neurocutánea; derivar.",
          "• <strong>Hipopigmentaciones:</strong> el <em>nevus acrómico</em> y el <em>nevus anémico</em> son estables y benignos. Tres o más <strong>máculas hipomelánicas «en hoja de fresno»</strong> (se ven mejor con luz de Wood) obligan a descartar <strong>esclerosis tuberosa</strong> (convulsiones, retraso, angiofibromas). El <strong>vitíligo</strong> es acromía adquirida, bien delimitada y simétrica, de origen autoinmune (se asocia a tiroiditis y diabetes tipo 1); se indica fotoprotección y derivación. La <strong>pitiriasis alba</strong> son placas hipocrómicas con fina descamación en la cara del escolar atópico: benigna, con emolientes y fotoprotección.",
          "• <strong>Albinismo:</strong> hipopigmentación generalizada con nistagmo, fotofobia y baja agudeza visual; fotoprotección estricta y derivación a oftalmología y dermatología. <em>Regla general:</em> se derivan las lesiones múltiples, de crecimiento o cambio de color, y las que se acompañan de otros hallazgos sistémicos o neurológicos."
        ]
      }
    ],
    "table": {
      "title": "Protocolo Oficial MINSAL de Suplementación y Alimentación Complementaria",
      "headers": [
        "Edad / Condición",
        "Alimentación Recomendada",
        "Suplementación Requerida",
        "Pautas de Seguridad"
      ],
      "rows": [
        [
          "0 a 6 meses",
          "Lactancia materna exclusiva (LME)",
          "Vitamina D 400 UI/día desde el mes 1",
          "Libre demanda · No agua ni infusiones"
        ],
        [
          "Prematuro / < 2.500 g",
          "LME o fórmula prematuro",
          "Hierro 2-3 mg/kg/día desde los 2 meses + Vit D",
          "Control estrecho de hemograma a los 6 meses"
        ],
        [
          "RN Término en LME",
          "LME hasta los 6 meses",
          "Hierro 1 mg/kg/día desde los 4 meses",
          "Previene anemia ferropénica del lactante"
        ],
        [
          "6 meses cumplidos",
          "1.ª comida (almuerzo) + fruta",
          "Mantener Vitamina D + Hierro",
          "Agregar 5 mL aceite vegetal crudo · Cero sal"
        ],
        [
          "8 a 9 meses",
          "2.ª comida (cena) + almuerzo",
          "Mantener suplementación hasta los 12 meses",
          "Textura papilla semisólida / picados blandos"
        ],
        [
          "Menores de 1 año",
          "Evitar alimentos prohibidos",
          "—",
          "¡Prohibida la miel (botulismo), sal, azúcar y leche de vaca!"
        ]
      ]
    },
    "vignette": "Madre primeriza trae a su hijo de 4 meses a control sano. El niño nació a término con peso 3.400 g y se alimenta con lactancia materna exclusiva a libre demanda, con incremento ponderal adecuado. La madre refiere que ha estado dándole diariamente las 4 gotas de vitamina D prescritas al mes de vida. Consulta qué indicaciones farmacológicas y nutricionales debe iniciar a partir de este control.",
    "explicacion": "En un lactante nacido a término con lactancia materna exclusiva, a los 4 meses de vida se agotan las reservas hepáticas de hierro transferidas durante el embarazo. La norma del MINSAL indica iniciar suplementación profiláctica con hierro elemental a dosis de 1 mg/kg/día por vía oral, manteniendo la vitamina D a 400 UI/día y continuando con lactancia materna exclusiva hasta los 6 meses de vida, momento en el cual se incorporará la primera papilla.",
    "keyPoints": [
      "La vitamina D se prescribe universalmente a todos los lactantes a 400 UI/día desde el mes de vida hasta el año.",
      "En recién nacidos a término con LME, el hierro profiláctico se inicia a los 4 meses a 1 mg/kg/día.",
      "En prematuros (< 37 semanas) o bajo peso (< 2.500 g), el hierro profiláctico se inicia a los 2 meses a 2-3 mg/kg/día.",
      "La alimentación complementaria se inicia a los 6 meses con la primera comida (almuerzo) + aceite vegetal crudo (5 mL).",
      "La cena se introduce entre los 8 y 9 meses de vida.",
      "La miel está estrictamente prohibida en menores de 1 año por riesgo de botulismo del lactante.",
      "Contraindicaciones absolutas maternas de lactancia: VIH y HTLV-1/2."
    ],
    "questions": [
      {
        "stem": "Un lactante de 2 meses de vida, nacido a las 33 semanas de gestación con peso de nacimiento de 1.950 g, acude a control de salud infantil. Se alimenta con lactancia materna exclusiva y recibe vitamina D 400 UI/día desde los 30 días de vida. ¿Cuál es la indicación de suplementación con hierro más adecuada según la normativa chilena?",
        "options": [
          {
            "id": "A",
            "text": "Esperar hasta los 6 meses para iniciar hierro junto con la alimentación complementaria"
          },
          {
            "id": "B",
            "text": "Iniciar sulfato ferroso a 2 a 3 mg/kg/día de hierro elemental a contar de este control"
          },
          {
            "id": "C",
            "text": "Iniciar sulfato ferroso a los 4 meses a dosis de 1 mg/kg/día"
          },
          {
            "id": "D",
            "text": "No requiere suplementación de hierro si la madre consume una dieta rica en carnes rojas"
          },
          {
            "id": "E",
            "text": "Indicar hierro dextrano intramuscular en dosis única mensual"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los prematuros tienen reservas reducidas y desarrollan anemia precoz si no se suplementan antes.\nB) Correcta. La norma técnica del MINSAL establece que en niños prematuros (< 37 semanas) o con peso de nacimiento menor a 2.500 g, la suplementación profiláctica con hierro oral debe iniciarse precozmente a los 2 meses de vida (o al duplicar el peso de nacimiento) a dosis de 2 a 3 mg/kg/día de hierro elemental.\nC) Incorrecta. La indicación a los 4 meses y a 1 mg/kg/día corresponde al recién nacido de término con peso adecuado.\nD) Incorrecta. El hierro de la leche materna tiene excelente biodisponibilidad pero concentración baja; la dieta materna no compensa la prematurez.\nE) Incorrecta. La vía parenteral se reserva para malabsorción severa.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.004"
      },
      {
        "stem": "Una madre consulta en el CESFAM sobre la alimentación de su hijo de 7 meses. El niño recibe almuerzo desde los 6 meses. La abuela le recomienda endulzar el puré de fruta con un poco de miel natural de abeja y agregar una pizca de sal a la sopa. ¿Cuál es la recomendación médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Permitir la miel natural pero restringir la sal marina"
          },
          {
            "id": "B",
            "text": "Permitir una pizca de sal pero contraindicar formalmente la miel por riesgo de botulismo"
          },
          {
            "id": "C",
            "text": "Contraindicar estrictamente tanto la miel (por riesgo de botulismo) como el agregado de sal y azúcar durante todo el primer año"
          },
          {
            "id": "D",
            "text": "Autorizar ambos alimentos en pequeñas cantidades para favorecer la aceptación de sabores"
          },
          {
            "id": "E",
            "text": "Recomendar diluir la miel en leche tibia para inactivar posibles toxinas"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La miel está absolutamente contraindicada por riesgo de esporas de Clostridium botulinum.\nB) Incorrecta. La sal tampoco debe adicionarse en menores de 1 año debido a la inmadurez de la función renal para manejar cargas de solutos y la inducción de preferencias hipertensogénicas.\nC) Correcta. La normativa MINSAL y de SOCHIPE prohíbe taxativamente el uso de miel en menores de 1 año debido al riesgo de botulismo del lactante (ingestión de esporas que germinan en el colon del lactante liberando neurotoxina). Asimismo, está prohibido añadir sal y azúcares simples a las preparaciones infantiles durante el primer año de vida.\nD) Incorrecta. Contraviene todas las guías de nutrición infantil.\nE) Incorrecta. Las esporas de Clostridium botulinum son termorresistentes y no se destruyen con leche tibia.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.004"
      }
    ]
  },
  {
    "id": "ped-26",
    "classId": "ped-26",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.26",
    "title": "Genética y Dismorfias: Síndrome de Down (Trisomía 21) y Síndromes Genéticos Frecuentes",
    "perfilCode": "2.01.1.134, 2.01.1.132",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Sin garantía GES específica · Tamizaje neonatal GES de hipotiroidismo congénito (frecuente en síndrome de Down) y cardiopatías congénitas operables (GES N° 4)",
    "reconstrucciones": "EUNACOM Diciembre 2018 (Q#76)",
    "frecuencia": "Alta rentabilidad · reconocimiento clínico de la trisomía 21, ecocardiograma en todo recién nacido con síndrome de Down, translocación y consejo genético, y diagnóstico de Marfán, Turner y Klinefelter",
    "svg": null,
    "algoTitle": "Algoritmo de Evaluación del Recién Nacido o Lactante con Dismorfias",
    "diagramRows": [
      {
        "t": "Recién nacido o lactante con rasgos dismórficos o malformaciones",
        "s": "Historia prenatal, teratógenos, consanguinidad, antecedentes familiares · examen dismorfológico completo",
        "type": "acc"
      },
      {
        "t": "Clasificar y buscar malformaciones asociadas",
        "s": "≥ 3 anomalías menores = alta probabilidad de malformación mayor · ecocardiograma, ecografía abdominal y renal, evaluación oftalmológica y auditiva",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "¿Fenotipo reconocible?",
        "al": "Fenotipo reconocible",
        "ll": "Sí",
        "left": {
          "t": "Cariograma (o estudio dirigido)",
          "s": "Trisomía 21, 18, 13 · Turner · Klinefelter · FISH 22q11 en cardiopatía conotruncal",
          "type": "acc"
        },
        "rl": "No",
        "right": {
          "t": "Microarray cromosómico y panel genético",
          "s": "Malformaciones múltiples, retraso del desarrollo o discapacidad intelectual sin causa evidente",
          "type": "warn"
        }
      },
      {
        "t": "Consejo genético y seguimiento multidisciplinario",
        "s": "Derivar a genética clínica · calcular riesgo de recurrencia · programa de salud específico del síndrome",
        "type": "acc"
      }
    ],
    "contexto": "La trisomía 21 es la cromosomopatía más frecuente (1 de cada 700 nacidos vivos) y la principal causa genética de discapacidad intelectual. El médico general debe reconocer su fenotipo en el recién nacido, solicitar el cariograma, buscar las malformaciones asociadas (especialmente cardiopatía y atresia duodenal), organizar el seguimiento de las comorbilidades y entregar un consejo genético inicial. Asimismo, debe sospechar otros síndromes genéticos frecuentes ante un fenotipo particular, como Turner, Klinefelter o Marfán.",
    "contentSections": [
      {
        "subhead": "1. Enfoque del Niño con Dismorfias",
        "paragraphs": [
          "Una <strong>malformación mayor</strong> compromete la función o requiere cirugía (cardiopatía, fisura palatina, defecto del tubo neural); una <strong>anomalía menor</strong> no tiene consecuencia funcional (epicanto, pliegue palmar único, clinodactilia, orejas displásicas). La presencia de <strong>tres o más anomalías menores</strong> aumenta mucho la probabilidad de una malformación mayor. Según el mecanismo se distinguen malformaciones (defecto intrínseco), disrupciones (destrucción de un tejido normal, p. ej. bridas amnióticas) y deformaciones (fuerzas mecánicas, p. ej. oligohidramnios).",
          "<strong>Evaluación:</strong> historia del embarazo (infecciones, <strong>teratógenos: alcohol, anticonvulsivantes, isotretinoína, diabetes materna</strong>), edad parental, consanguinidad, antecedentes familiares y abortos; examen físico completo con medidas (peso, talla, perímetro cefálico). <strong>Estudio:</strong> el <strong>cariograma</strong> detecta alteraciones numéricas (trisomías, Turner, Klinefelter) y estructurales grandes; el <strong>microarray cromosómico (CGH-array)</strong> es de primera línea en malformaciones múltiples o retraso del desarrollo sin causa; el FISH se usa para microdeleciones (22q11); luego, paneles o exoma. Siempre se derivan a genética clínica y se ofrece consejo genético.",
          "<strong>Síndromes frecuentes que se reconocen por el fenotipo:</strong> • <strong>Turner (45,X):</strong> niña con talla baja, cuello alado, tórax ancho, linfedema al nacer, coartación aórtica, disgenesia gonadal con amenorrea primaria. • <strong>Klinefelter (47,XXY):</strong> varón alto, hipogonadismo con testículos pequeños, ginecomastia e infertilidad. • <strong>Edwards (trisomía 18)</strong> y <strong>Patau (trisomía 13):</strong> malformaciones múltiples y mal pronóstico vital. • <strong>Prader-Willi:</strong> hipotonía neonatal, luego hiperfagia y obesidad. • <strong>Síndrome alcohólico fetal:</strong> microcefalia, fisuras palpebrales cortas, filtrum liso y labio superior delgado. • <strong>Neurofibromatosis tipo 1:</strong> manchas café con leche, pecas axilares y neurofibromas. • <strong>Williams:</strong> «facies de elfo», estenosis aórtica supravalvular, hipercalcemia. • <strong>X frágil:</strong> retraso del desarrollo, cara alargada, macroorquidismo.",
          "<strong>Síndrome de Marfán</strong> (autosómico dominante, gen de la fibrilina FBN1): talla alta con extremidades y dedos largos (aracnodactilia, envergadura mayor que la talla), <strong>hiperlaxitud articular</strong>, pectus, escoliosis, <strong>luxación del cristalino</strong> y <strong>dilatación de la raíz aórtica con insuficiencia aórtica y riesgo de disección y muerte súbita</strong>. El diagnóstico se basa en los criterios de Ghent; se solicita ecocardiograma y evaluación oftalmológica, se restringe el ejercicio isométrico intenso y se indica betabloqueador o losartán según la dilatación aórtica. Se estudia a los familiares."
        ]
      },
      {
        "subhead": "2. Síndrome de Down: Genética, Diagnóstico y Fenotipo",
        "paragraphs": [
          "Alrededor del <strong>95% es una trisomía 21 libre</strong> por no disyunción meiótica (el riesgo aumenta con la edad materna: 1/350 a los 35 años y 1/100 a los 40), el 3-4% se debe a una <strong>translocación robertsoniana</strong> (habitualmente 14;21) y 1-2% a un mosaicismo. La translocación puede ser heredada de un padre portador, por lo que ante ese resultado se solicita el <strong>cariograma de ambos padres</strong> (riesgo de recurrencia de 10-15% si la portadora es la madre y 2-5% si es el padre; 1% en la trisomía libre).",
          "<strong>Diagnóstico prenatal:</strong> tamizaje del primer trimestre (translucencia nucal aumentada, PAPP-A baja, β-hCG libre alta), ADN fetal libre en sangre materna y, para confirmar, amniocentesis o biopsia de vellosidades. <strong>Fenotipo:</strong> <strong>hipotonía</strong>, fisuras palpebrales oblicuas hacia arriba, <strong>epicanto</strong>, puente nasal plano, lengua protruyente, orejas pequeñas, cuello corto, braquicefalia con occipucio plano, <strong>pliegue palmar único</strong>, clinodactilia del quinto dedo, espacio amplio entre el primer y el segundo ortejo, manchas de Brushfield y laxitud articular. El diagnóstico se sospecha clínicamente y se confirma con el <strong>cariograma</strong>."
        ]
      },
      {
        "subhead": "3. Síndrome de Down: Comorbilidades, Tamizaje y Seguimiento",
        "paragraphs": [
          "• <strong>Cardiopatía congénita (~50%):</strong> canal auriculoventricular (la más característica), comunicación interventricular y ductus; puede ser asintomática al nacer y provocar hipertensión pulmonar precoz, por lo que se indica <strong>ecocardiograma a todo recién nacido con sospecha</strong>. • <strong>Digestivas:</strong> atresia duodenal («doble burbuja»), enfermedad de Hirschsprung, enfermedad celíaca. • <strong>Endocrinas:</strong> <strong>hipotiroidismo</strong> (TSH al nacer, a los 6 y 12 meses, luego anual). • <strong>Sensoriales:</strong> cataratas congénitas, estrabismo y vicios de refracción (control oftalmológico en el primer año), hipoacusia y otitis serosa (tamizaje auditivo).",
          "• <strong>Hematológicas:</strong> reacción leucemoide transitoria neonatal y mayor riesgo de leucemia aguda (linfoblástica y megacarioblástica). • <strong>Neurológicas y ortopédicas:</strong> discapacidad intelectual leve a moderada, <strong>inestabilidad atlantoaxial</strong> (se sospecha ante signos de mielopatía; no se solicita radiografía de rutina), apnea del sueño y luxación de cadera. • Obesidad, caries y enfermedad de Alzheimer de inicio precoz. <em>Manejo (Inicial/Derivar):</em> equipo multidisciplinario con genética, cardiología, estimulación temprana, fonoaudiología y kinesiología; vacunas del PNI más influenza; curvas de crecimiento específicas; apoyo a la familia e inclusión escolar. La esperanza de vida supera los 55 a 60 años."
        ]
      }
    ],
    "table": {
      "title": "Síndromes Genéticos Frecuentes: Fenotipo Clave y Examen de Confirmación",
      "headers": [
        "Síndrome",
        "Alteración",
        "Fenotipo y Complicaciones Clave",
        "Estudio"
      ],
      "rows": [
        [
          "Down",
          "Trisomía 21",
          "Hipotonía, fisuras palpebrales oblicuas, pliegue palmar único · canal AV, atresia duodenal, hipotiroidismo",
          "Cariograma · ecocardiograma · TSH"
        ],
        [
          "Turner",
          "45,X",
          "Talla baja, cuello alado, linfedema, coartación aórtica · amenorrea primaria",
          "Cariograma · ecocardiograma · ecografía renal"
        ],
        [
          "Klinefelter",
          "47,XXY",
          "Varón alto, testículos pequeños, ginecomastia · infertilidad",
          "Cariograma · testosterona"
        ],
        [
          "Marfán",
          "Mutación FBN1 (AD)",
          "Talla alta, aracnodactilia, hiperlaxitud, luxación del cristalino · dilatación aórtica",
          "Criterios de Ghent · ecocardiograma · oftalmología"
        ],
        [
          "Prader-Willi",
          "Deleción 15q11-13 paterna",
          "Hipotonía neonatal, luego hiperfagia y obesidad · retraso cognitivo",
          "Estudio de metilación"
        ],
        [
          "Alcohólico fetal",
          "Teratógeno (alcohol)",
          "Microcefalia, fisuras palpebrales cortas, filtrum liso, labio superior delgado",
          "Clínico · antecedente materno"
        ]
      ]
    },
    "vignette": "Recién nacido de término, hijo de una madre de 38 años, con hipotonía, fisuras palpebrales oblicuas hacia arriba, epicanto, lengua protruyente, occipucio plano y pliegue palmar único bilateral. A las 12 horas presenta vómitos biliosos; la radiografía de abdomen muestra el signo de la doble burbuja. No hay soplos, pero la saturación es 94%.",
    "explicacion": "El fenotipo corresponde a una trisomía 21, favorecida por la edad materna. El vómito bilioso con doble burbuja indica atresia duodenal, que se asocia a este síndrome y requiere cirugía. Se confirma el diagnóstico con cariograma, y como la cardiopatía (canal auriculoventricular) puede ser silente, se solicita un ecocardiograma a todos estos recién nacidos. También se controlan TSH, audición y visión. Si el cariograma revela una translocación, se estudia a los padres para el consejo genético.",
    "keyPoints": [
      "La trisomía 21 libre explica el 95% de los casos; la translocación robertsoniana (3-4%) obliga a estudiar el cariograma de los padres por el riesgo de recurrencia.",
      "El fenotipo clásico incluye hipotonía, fisuras palpebrales oblicuas, epicanto, pliegue palmar único, lengua protruyente y occipucio plano.",
      "Todo recién nacido con síndrome de Down requiere ecocardiograma (canal AV), tamizaje de hipotiroidismo, audición y visión; se vigila la atresia duodenal y la enfermedad de Hirschsprung.",
      "El cariograma confirma la trisomía 21; el microarray cromosómico es de primera línea en malformaciones múltiples o retraso del desarrollo sin causa evidente.",
      "Marfán (FBN1): talla alta, aracnodactilia, hiperlaxitud y soplo de insuficiencia aórtica; el riesgo es la disección aórtica y requiere ecocardiograma y control oftalmológico.",
      "Turner (45,X) se sospecha en toda niña con talla baja inexplicada; Klinefelter (47,XXY) en el varón alto con hipogonadismo."
    ],
    "questions": [
      {
        "stem": "Un recién nacido de término presenta hipotonía, fisuras palpebrales oblicuas hacia arriba, epicanto, pliegue palmar único y occipucio plano. Se sospecha síndrome de Down y se solicita cariograma. Además del cariograma, ¿qué examen debe realizarse precozmente en todo recién nacido con esta sospecha?",
        "options": [
          {
            "id": "A",
            "text": "Resonancia magnética cerebral"
          },
          {
            "id": "B",
            "text": "Electroencefalograma"
          },
          {
            "id": "C",
            "text": "Radiografía de columna cervical"
          },
          {
            "id": "D",
            "text": "Ecocardiograma"
          },
          {
            "id": "E",
            "text": "Densitometría ósea"
          }
        ],
        "correcta": "D",
        "explicacion": "A) Incorrecta. No está indicada la resonancia en el período neonatal.\nB) Incorrecta. Las convulsiones no son parte del cuadro basal del síndrome.\nC) Incorrecta. Aunque existe inestabilidad atlantoaxial, no se solicita radiografía cervical de rutina en el recién nacido.\nD) Correcta. Cerca de la mitad de los niños con síndrome de Down tiene cardiopatía congénita, siendo característico el canal auriculoventricular, que puede ser asintomático al nacer y causar hipertensión pulmonar precoz. Por ello se indica ecocardiograma a todos en el período neonatal.\nE) Incorrecta. La densitometría no tiene indicación en el recién nacido.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.134"
      },
      {
        "stem": "Un niño de 14 años, con antecedente de su padre, que murió de muerte súbita, presenta talla alta, sus dedos y extremidades son muy largos y algo desproporcionados. Además, presenta hiperlaxitud de las articulaciones y tiene un soplo diastólico cardíaco en la auscultación cardiopulmonar. ¿Cuál es el síndrome más probable?",
        "options": [
          {
            "id": "A",
            "text": "Neurofibromatosis"
          },
          {
            "id": "B",
            "text": "Síndrome alcohólico fetal"
          },
          {
            "id": "C",
            "text": "Síndrome de Miller"
          },
          {
            "id": "D",
            "text": "Síndrome de Marfán"
          },
          {
            "id": "E",
            "text": "Síndrome de Ehler Dahnlos"
          }
        ],
        "correcta": "D",
        "explicacion": "A) Incorrecta. La neurofibromatosis cursa con manchas café con leche y neurofibromas.\nB) Incorrecta. El síndrome alcohólico fetal produce microcefalia y rasgos faciales característicos.\nC) Incorrecta. El síndrome de Miller no explica este cuadro.\nD) Correcta. Talla alta, extremidades y dedos largos, hiperlaxitud, soplo diastólico (insuficiencia aórtica por dilatación de la raíz) y antecedente familiar de muerte súbita (disección aórtica) son típicos del síndrome de Marfán.\nE) Incorrecta. El Ehlers-Danlos produce hiperextensibilidad cutánea y fragilidad tisular, sin talla alta ni aracnodactilia.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 76"
      },
      {
        "stem": "Un lactante con síndrome de Down tiene un cariograma que informa 46,XY,der(14;21)(q10;q10),+21 (translocación robertsoniana 14;21). Sus padres tienen 26 y 28 años y no tienen otros hijos. ¿Cuál es la conducta más adecuada para el consejo genético?",
        "options": [
          {
            "id": "A",
            "text": "Informar que el riesgo de recurrencia es el mismo que el de la población general"
          },
          {
            "id": "B",
            "text": "Solicitar cariograma a ambos padres, porque uno puede ser portador de la translocación"
          },
          {
            "id": "C",
            "text": "Indicar que el riesgo depende solo de la edad materna"
          },
          {
            "id": "D",
            "text": "Recomendar evitar un nuevo embarazo en todos los casos"
          },
          {
            "id": "E",
            "text": "Solicitar un cariograma solo al hijo, que ya fue realizado"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En la translocación el riesgo de recurrencia puede ser mucho mayor que el de la población general.\nB) Correcta. La translocación robertsoniana puede ser heredada de un padre portador balanceado; por eso se estudia el cariograma de ambos padres. Si uno es portador, el riesgo de recurrencia es de 10-15% (madre) o 2-5% (padre), y se ofrece diagnóstico prenatal.\nC) Incorrecta. La edad materna influye en la trisomía libre, no en la translocación heredada.\nD) Incorrecta. No se contraindica un embarazo; se ofrece consejo y diagnóstico prenatal.\nE) Incorrecta. El estudio del hijo ya está hecho; lo que falta es el de los padres.",
        "recTag": "Pregunta de práctica · Perfil V3 2.01.1.134"
      }
    ]
  },
  {
    "id": "ped-28",
    "classId": "ped-28",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Crecimiento, Desarrollo & Vacunas PNI",
    "topicLabel": "18.28",
    "title": "Pediatría Psicosocial: Maltrato Infantil, Entrevista Clínica, Conductas de Riesgo en el Adolescente y Psiquiatría de Enlace",
    "perfilCode": "2.01.1.138, 2.01.3.004, 2.01.3.009, 2.01.3.012",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Sin garantía GES específica · Denuncia obligatoria del maltrato (Código Procesal Penal, art. 175) · Salud mental: GES de depresión en mayores de 15 años, consumo problemático de alcohol y drogas en menores de 20 años",
    "reconstrucciones": "EUNACOM Julio 2015 (Q#150)",
    "frecuencia": "Alta rentabilidad · fondo de ojo en el niño sacudido, denuncia obligatoria, protocolo SPIKES para malas noticias, entrevista confidencial HEADSSS y CRAFFT en el adolescente, y derivación a salud mental en la mala adherencia de la enfermedad crónica",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo del Niño con Sospecha de Maltrato",
    "diagramRows": [
      {
        "t": "Lesión sospechosa, relato inconsistente o consulta tardía",
        "s": "Equimosis en lactante o en zonas protegidas · fracturas inexplicadas · quemaduras con patrón · lactante irritable, letárgico o con convulsiones",
        "type": "acc"
      },
      {
        "t": "Evaluación médica completa y registro",
        "s": "Examen físico desnudo, fondo de ojo, serie esquelética (< 2 años), neuroimagen, estudio de coagulación · registro textual del relato y fotografías",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "¿Riesgo inmediato para el niño?",
        "al": "Riesgo inmediato",
        "ll": "Sí",
        "left": {
          "t": "Hospitalizar y proteger",
          "s": "Ingreso al hospital como medida de protección · aviso a asistente social · no devolver al domicilio hasta evaluar",
          "type": "crit"
        },
        "rl": "No",
        "right": {
          "t": "Plan de protección ambulatorio",
          "s": "Evaluación psicosocial · coordinación con la red local · control cercano · seguimiento",
          "type": "warn"
        }
      },
      {
        "t": "Denuncia obligatoria y medida de protección",
        "s": "Denuncia dentro de 24 horas (Carabineros, PDI o Fiscalía) · Tribunal de Familia · en abuso sexual, Servicio Médico Legal y profilaxis",
        "type": "acc"
      }
    ],
    "contexto": "El pediatra y el médico general son a menudo los primeros en ver a un niño maltratado, y el reconocimiento oportuno puede salvar su vida: el maltrato es frecuente, se esconde detrás de relatos poco creíbles y su subdiagnóstico perpetúa la violencia. A esto se suman las competencias de comunicación que exige la práctica pediátrica: entrevistar a niños y adolescentes, dar malas noticias, prevenir conductas de riesgo y reconocer cuándo una enfermedad crónica o una hospitalización requieren el apoyo de salud mental. Este tema reúne las habilidades psicosociales que el EUNACOM evalúa en pediatría.",
    "contentSections": [
      {
        "subhead": "1. Maltrato Infantil: Tipos, Sospecha y Estudio",
        "paragraphs": [
          "El maltrato infantil incluye el <strong>maltrato físico</strong>, el <strong>emocional o psicológico</strong>, la <strong>negligencia</strong>, el <strong>abuso sexual</strong> y el síndrome de <strong>Münchhausen por poderes</strong> (los cuidadores inducen o inventan síntomas). Factores de riesgo: menor de 3 años, prematurez o discapacidad, cuidadores jóvenes o con consumo de sustancias, violencia intrafamiliar, depresión materna y aislamiento social. Debe sospecharse ante un <strong>relato inconsistente o que cambia</strong>, una lesión incompatible con la etapa del desarrollo del niño (un lactante que no camina con fractura de fémur), <strong>consulta tardía</strong>, múltiples consultas por lesiones o un cuidador que no mira al niño.",
          "<strong>Lesiones sospechosas:</strong> equimosis en un lactante, o en la cara, oído, cuello, tórax, abdomen, nalgas o genitales; marcas con patrón (cinturón, mano, cuerda); <strong>quemaduras por inmersión</strong> («en guante» o «en calcetín») o de cigarrillo; fracturas de costillas posteriores, fracturas metafisarias («en esquina»), múltiples fracturas en distintas etapas de consolidación y fractura en un lactante que no deambula. El <strong>síndrome del niño sacudido</strong> (traumatismo craneano abusivo) se presenta en menores de 1 año con irritabilidad, vómitos, letargia o convulsiones, <strong>hematoma subdural</strong>, <strong>hemorragias retinianas</strong> y fracturas costales.",
          "<strong>Estudio:</strong> examen físico completo con el niño desnudo, <strong>fondo de ojo</strong> (hemorragias retinianas), <strong>serie esquelética</strong> en menores de 2 años, TAC o resonancia cerebral, estudio de coagulación y plaquetas (para descartar diátesis hemorrágica) y estudio de osteogénesis imperfecta o raquitismo según el caso. Se registra el relato textual y se fotografían las lesiones. En el abuso sexual: lesiones genitales o anales, infecciones de transmisión sexual, embarazo o conductas sexualizadas; no se interroga repetidamente al niño.",
          "<strong>Conducta (Inicial/Derivar):</strong> proteger al niño (hospitalizarlo si hay riesgo inmediato), informar al asistente social, y <strong>denunciar</strong>: el personal de salud tiene <strong>obligación legal de denunciar</strong> un delito que advierta en el ejercicio de su función, dentro de 24 horas, ante Carabineros, PDI, Fiscalía o tribunales (art. 175 del Código Procesal Penal), además de solicitar una medida de protección al Tribunal de Familia. No se confronta al presunto agresor. En el abuso sexual agudo se deriva al Servicio Médico Legal y, según el tiempo, se indica anticoncepción de emergencia (hasta 120 horas), profilaxis de ITS, profilaxis post-exposición de VIH (dentro de 72 horas) y hepatitis B."
        ]
      },
      {
        "subhead": "2. Entrevista Clínica y Comunicación Efectiva con el Niño, la Familia y el Adolescente",
        "paragraphs": [
          "La entrevista centrada en el paciente se organiza en: <strong>saludar y presentarse</strong>, crear un ambiente privado y sin interrupciones, <strong>preguntas abiertas</strong> seguidas de preguntas específicas, <strong>escucha activa</strong> con empatía, lenguaje simple sin tecnicismos, resumir y <strong>confirmar la comprensión</strong> (pedir que repitan lo entendido) y acordar un plan. En pediatría se habla <strong>directamente al niño</strong> según su edad (juego, dibujo, preguntas simples) y no solo a los padres, y se respeta su derecho a ser informado y a participar en las decisiones de acuerdo con su madurez (Ley 20.584 sobre derechos de los pacientes).",
          "<strong>Entrevista del adolescente:</strong> se ofrece un tiempo a solas y se explica la <strong>confidencialidad y sus límites</strong> (se rompe ante riesgo vital, abuso o violencia grave). Se explora con la guía <strong>HEADSSS</strong>: Hogar, Educación o empleo, Actividades, Drogas, Sexualidad, Suicidio y depresión, Seguridad. Se evita juzgar y se refuerzan los factores protectores.",
          "<strong>Comunicar malas noticias: protocolo SPIKES.</strong> <strong>S</strong>etting: lugar privado, sin interrupciones, con los dos padres presentes y tiempo suficiente; <strong>P</strong>erception: preguntar qué saben y entienden; <strong>I</strong>nvitation: preguntar cuánta información desean; <strong>K</strong>nowledge: entregar la información de a poco, en lenguaje simple, con pausas; <strong>E</strong>motions: reconocer y acoger las emociones con empatía; <strong>S</strong>trategy y Summary: acordar un plan, resumir y asegurar un seguimiento. No se informa en pasillos, no se usan tecnicismos ni se entregan cifras de sobrevida sin que lo pidan, y no se delega la noticia en un solo padre."
        ]
      },
      {
        "subhead": "3. Prevención de Conductas de Riesgo en el Adolescente",
        "paragraphs": [
          "Las principales conductas de riesgo en adolescentes son el <strong>consumo de alcohol, tabaco, vapeadores y drogas</strong>, las relaciones sexuales sin protección (embarazo e ITS), la violencia y el acoso (incluido el ciberacoso), la conducta suicida y las autolesiones, la conducción imprudente y el sedentarismo y los malos hábitos alimentarios. Los factores protectores son un vínculo familiar sólido, buen rendimiento y pertenencia escolar, actividades extraprogramáticas y habilidades socioemocionales. La estrategia en APS es el <strong>Control de Salud del Joven Sano</strong> anual, con entrevista confidencial.",
          "<strong>Tamizaje e intervención:</strong> para el consumo de sustancias se usa el cuestionario <strong>CRAFFT</strong> (Car, Relax, Alone, Forget, Friends, Trouble): <strong>dos o más respuestas positivas</strong> indican un consumo problemático probable. La respuesta es una <strong>intervención breve motivacional</strong> ajustada al nivel de riesgo, con seguimiento, y derivación a tratamiento si hay consumo problemático (GES de consumo de alcohol y drogas en menores de 20 años). En sexualidad: consejería sobre condón y anticonceptivos (incluida la anticoncepción de emergencia), con confidencialidad; en salud mental: tamizaje de depresión (PHQ-A) e <strong>indagación directa de la ideación suicida</strong>, que no aumenta el riesgo."
        ]
      },
      {
        "subhead": "4. Psiquiatría de Enlace en Pediatría",
        "paragraphs": [
          "La <strong>psiquiatría de enlace</strong> es la interconsulta de salud mental para pacientes que están en atención médica general. En pediatría se solicita ante: <strong>trastornos adaptativos, depresión o ansiedad en niños con enfermedades crónicas</strong> (diabetes, cáncer, epilepsia, fibrosis quística), <strong>mala adherencia al tratamiento</strong> (por ejemplo, omisión de insulina), trastornos de la conducta alimentaria, <strong>síntomas somáticos sin causa orgánica</strong> (dolor abdominal recurrente funcional, cefalea, trastorno conversivo), reacciones a la hospitalización (regresión, ansiedad de separación), duelo, intento de suicidio o autolesiones, <em>delirium</em> y efectos neuropsiquiátricos de fármacos (corticoides).",
          "El manejo es conjunto con el equipo tratante: evaluación integral del niño y la familia, psicoeducación, intervención familiar y psicoterapia (terapia cognitivo-conductual), y tratamiento farmacológico cuando corresponde. La mala adherencia de un adolescente con diabetes tipo 1 y hospitalizaciones repetidas por cetoacidosis debe hacer pensar en depresión, trastorno de la conducta alimentaria (omisión de insulina para bajar de peso) o conflictos familiares; reforzar la educación no basta. Ante un intento de suicidio se asegura la protección del paciente y se solicita evaluación psiquiátrica antes del alta."
        ]
      }
    ],
    "table": {
      "title": "Lesiones y Signos Sugerentes de Maltrato Infantil",
      "headers": [
        "Hallazgo",
        "Por Qué Es Sospechoso",
        "Estudio",
        "Conducta"
      ],
      "rows": [
        [
          "Equimosis en lactante o en cara, oído, cuello, tórax, abdomen, nalgas",
          "Las zonas protegidas y la edad sin deambulación hacen improbable el trauma accidental",
          "Coagulación y plaquetas",
          "Registro, protección y denuncia"
        ],
        [
          "Fracturas costales posteriores, metafisarias en esquina, múltiples de distinta edad",
          "Mecanismo de sacudida, compresión o torsión",
          "Serie esquelética (< 2 años)",
          "Hospitalizar y denunciar"
        ],
        [
          "Hematoma subdural + hemorragias retinianas",
          "Síndrome del niño sacudido",
          "Fondo de ojo · TAC / resonancia",
          "UCI / neurocirugía · denuncia"
        ],
        [
          "Quemadura por inmersión («guante», «calcetín») o de cigarrillo",
          "Patrón de contacto forzado, bordes netos",
          "Fotografías · valoración de cuidadores",
          "Hospitalizar y denunciar"
        ],
        [
          "Relato inconsistente o consulta tardía",
          "Incompatible con la lesión o con la edad del desarrollo",
          "Entrevistas separadas · asistente social",
          "Proteger al niño"
        ]
      ]
    },
    "vignette": "Lactante de 5 meses traído a urgencia por vómitos e irritabilidad de 2 días. La madre de 17 años refiere que «se cayó de la cama». Está poco reactivo, con fontanela tensa y equimosis de distinto color en el tórax y el flanco. La TAC de cerebro muestra un hematoma subdural y la radiografía de tórax, fracturas costales posteriores en distintas etapas de consolidación.",
    "explicacion": "El cuadro es un traumatismo craneano abusivo (síndrome del niño sacudido) con maltrato crónico: hematoma subdural, fracturas costales posteriores de edades distintas, equimosis de distintas fechas y un relato inconsistente con el desarrollo del lactante. El siguiente estudio es el fondo de ojo para buscar hemorragias retinianas, junto con serie esquelética y coagulación. Corresponde hospitalizar al niño, avisar al asistente social y realizar la denuncia obligatoria dentro de 24 horas, con solicitud de medida de protección.",
    "keyPoints": [
      "La combinación de relato inconsistente, equimosis en un lactante, fracturas costales posteriores y hematoma subdural es maltrato hasta demostrar lo contrario: se busca hemorragia retiniana con fondo de ojo.",
      "El personal de salud tiene obligación legal de denunciar el maltrato y los delitos que conozca dentro de 24 horas (art. 175 del Código Procesal Penal) y se solicita medida de protección al Tribunal de Familia.",
      "En menores de 2 años con sospecha de maltrato se solicita serie esquelética; el estudio incluye coagulación para descartar causas médicas.",
      "Comunicación de malas noticias: protocolo SPIKES, en un lugar privado, explorando qué saben y quieren saber, con lenguaje simple y empatía; ambos padres tienen derecho a ser informados.",
      "En el adolescente la entrevista es confidencial (HEADSSS) y el consumo de sustancias se tamiza con CRAFFT, con intervención breve motivacional.",
      "La mala adherencia en un adolescente con enfermedad crónica, sobre todo con ánimo bajo, requiere interconsulta de psiquiatría de enlace (depresión, TCA, conflicto familiar)."
    ],
    "questions": [
      {
        "stem": "Un lactante de 6 meses es traído por la madre, porque presenta epistaxis. La madre, de 17 años, refiere que se cayó de la cama. Al examen está poco reactivo y presenta múltiples equimosis, algunas de color morado y otras de color verde. Además tiene dos fracturas costales posteriores. Su TAC de cerebro muestra un hematoma subdural. ¿Qué examen es más adecuado para proseguir con el estudio de este paciente?",
        "options": [
          {
            "id": "A",
            "text": "PTH y calcio"
          },
          {
            "id": "B",
            "text": "Tiempos de coagulación"
          },
          {
            "id": "C",
            "text": "Exámenes para descartar osteogénesis imperfecta"
          },
          {
            "id": "D",
            "text": "Fondo de ojo"
          },
          {
            "id": "E",
            "text": "Ecografía abdominal"
          }
        ],
        "correcta": "D",
        "explicacion": "A) Incorrecta. Las alteraciones del metabolismo fosfocálcico no explican este cuadro.\nB) Incorrecta. La coagulación se solicita como parte del estudio, pero no es el examen que orienta el diagnóstico de abuso.\nC) Incorrecta. La osteogénesis imperfecta es un diagnóstico diferencial, no el estudio prioritario.\nD) Correcta. Equimosis de distintas edades, fracturas costales posteriores y hematoma subdural en un lactante, con relato inconsistente, sugieren un traumatismo craneano abusivo; el fondo de ojo busca hemorragias retinianas, hallazgo característico del síndrome del niño sacudido.\nE) Incorrecta. La ecografía abdominal no es el siguiente paso prioritario.",
        "recTag": "EUNACOM Julio 2015 · Pregunta 150"
      },
      {
        "stem": "Usted debe comunicar a los padres de un niño de 5 años que el mielograma confirmó una leucemia linfoblástica aguda. ¿Cuál es la forma más adecuada de iniciar esta conversación?",
        "options": [
          {
            "id": "A",
            "text": "En el pasillo, para no retrasar la información"
          },
          {
            "id": "B",
            "text": "Esperar a que los padres pregunten por el resultado"
          },
          {
            "id": "C",
            "text": "Entregar la información técnica completa con estadísticas de sobrevida desde el inicio"
          },
          {
            "id": "D",
            "text": "En un lugar privado y sin interrupciones, explorando primero qué saben y qué desean saber"
          },
          {
            "id": "E",
            "text": "Informar solo al padre para que él se lo comunique a la madre"
          }
        ],
        "correcta": "D",
        "explicacion": "A) Incorrecta. La noticia no se da en un lugar sin privacidad.\nB) Incorrecta. La información debe ofrecerse de manera activa y planificada.\nC) Incorrecta. Entregar datos técnicos y cifras de golpe abruma; se dosifica la información según lo que la familia desea saber.\nD) Correcta. El protocolo SPIKES recomienda un lugar privado y sin interrupciones, explorar lo que la familia sabe y quiere saber, dar la información en forma gradual con lenguaje simple, acoger las emociones con empatía y acordar un plan.\nE) Incorrecta. Ambos padres tienen derecho a ser informados.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.3.004"
      },
      {
        "stem": "Un adolescente de 15 años acude a control de salud. En la entrevista a solas, refiere que consume alcohol los fines de semana con sus amigos. No tiene síntomas. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Informar inmediatamente a los padres"
          },
          {
            "id": "B",
            "text": "No abordar el tema porque no tiene síntomas"
          },
          {
            "id": "C",
            "text": "Derivar directamente a un centro de rehabilitación"
          },
          {
            "id": "D",
            "text": "Realizar tamizaje estructurado de consumo (ej. CRAFFT) e intervención breve motivacional"
          },
          {
            "id": "E",
            "text": "Solicitar test de drogas en orina sin su consentimiento"
          }
        ],
        "correcta": "D",
        "explicacion": "A) Incorrecta. Se mantiene la confidencialidad salvo riesgo vital.\nB) Incorrecta. La ausencia de síntomas no justifica omitir la prevención.\nC) Incorrecta. Derivar a rehabilitación sin evaluar el nivel de consumo es desproporcionado.\nD) Correcta. La prevención de conductas de riesgo se basa en la entrevista confidencial (HEADSSS), el tamizaje estructurado de consumo (CRAFFT) y la intervención breve con enfoque motivacional, ajustando el seguimiento al riesgo.\nE) Incorrecta. Un examen de orina sin consentimiento vulnera la confidencialidad y la autonomía.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.3.009"
      },
      {
        "stem": "Una adolescente de 14 años con diabetes mellitus tipo 1 ha tenido tres hospitalizaciones por cetoacidosis en 6 meses. Reconoce que omite dosis de insulina. Refiere ánimo bajo, aislamiento y conflictos familiares desde el diagnóstico. Además de reforzar la educación en diabetes, ¿cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Aumentar la dosis de insulina basal"
          },
          {
            "id": "B",
            "text": "Hospitalizar hasta que cumpla 18 años"
          },
          {
            "id": "C",
            "text": "Indicar que cumpla mejor el tratamiento y control en 3 meses"
          },
          {
            "id": "D",
            "text": "Cambiar a hipoglicemiantes orales"
          },
          {
            "id": "E",
            "text": "Solicitar interconsulta a salud mental (psiquiatría de enlace) para evaluación integral"
          }
        ],
        "correcta": "E",
        "explicacion": "A) Incorrecta. El problema no es la dosis, sino la omisión de insulina.\nB) Incorrecta. La hospitalización prolongada no es una medida terapéutica.\nC) Incorrecta. Insistir sin evaluar la causa perpetúa el problema.\nD) Incorrecta. Los hipoglicemiantes orales no reemplazan la insulina en la diabetes tipo 1.\nE) Correcta. La mala adherencia en adolescentes con enfermedades crónicas se asocia con frecuencia a depresión, trastornos de la conducta alimentaria (omisión de insulina para bajar de peso) y conflictos familiares. La psiquiatría de enlace evalúa y trata en conjunto con el equipo tratante, mejorando el control metabólico.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.3.012"
      }
    ]
  }
];

const bloque1Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowPediatria(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque1Classes };
