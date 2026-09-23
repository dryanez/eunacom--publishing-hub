const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: 'B4-Q01',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Fisiología Tiroidea, Interpretación de TSH/T4L y Síndrome del Eutiroideo Enfermo',
    perfilCode: '1.05.1.005',
    legalLevel: {
      dx: 'Específico',
      tx: 'Completo',
      seg: 'Completo',
      ges: 'Garantía Explícita en Salud (GES N° 35): Hipotiroidismo en Personas de 15 años y más'
    },
    stem: 'Una mujer de 39 años con antecedente de una hemorragia postparto masiva con shock hipovolémico hace 3 años (que requirió histerectomía de urgencia y soporte en UCI, tras lo cual no logró amamantar y desarrolló amenorrea secundaria persistente) consulta en el CESFAM por astenia progresiva, intolerancia al frío, constipación y piel fría y áspera. Al examen físico destaca PA 92/58 mmHg, FC 54 lpm, piel pálida, seca y con descamación fina, y reflejos osteotendinosos con relajación aquiliana prolongada. El tiroides no es palpable. Los exámenes de laboratorio informan: TSH 1.2 mIU/L (rango de referencia 0.4 a 4.0 mIU/L) y T4 Libre 0.42 ng/dL (rango de referencia 0.8 a 1.8 ng/dL). ¿Cuál es la conducta médica inicial prioritaria que debe realizarse antes de prescribir levotiroxina en esta paciente?',
    options: [
      {
        id: 'A',
        text: 'Iniciar levotiroxina a dosis sustitutiva completa de 1.6 mcg/kg/día para normalizar de inmediato la T4 libre'
      },
      {
        id: 'B',
        text: 'Evaluar la función suprarrenal mediante cortisol matinal y asegurar reemplazo con glucocorticoides previo al inicio de levotiroxina si existe déficit'
      },
      {
        id: 'C',
        text: 'Iniciar triyodotironina (T3) oral en dosis crecientes para no depender de la conversión periférica'
      },
      {
        id: 'D',
        text: 'Solicitar anticuerpos anti-tiroperoxidasa (anti-TPO) y ecografía tiroidea para clasificar la variante de tiroiditis de Hashimoto'
      },
      {
        id: 'E',
        text: 'Diagnosticar síndrome del eutiroideo enfermo y mantener conducta expectante sin realizar exámenes adicionales'
      }
    ],
    correcta: 'B',
    explicacion: 'La paciente presenta un Hipotiroidismo Central (secundario) en el contexto de un Síndrome de Sheehan (necrosis hipofisaria isquémica postparto evidenciada por fracaso de lactancia, amenorrea persistente e hipotensión). El hallazgo bioquímico de T4 libre marcadamente disminuida con una TSH inapropiadamente normal o baja es patognomónico de hipotiroidismo secundario/central. En todo paciente con sospecha o confirmación de hipotiroidismo central es una REGLA MÉDICA OBLIGATORIA evaluar el eje corticotropo y descartar o tratar una insuficiencia suprarrenal concomitante antes de iniciar levotiroxina. Administrar hormona tiroidea sola acelera el aclaramiento hepático de cortisol y eleva el consumo metabólico periférico, lo que puede precipitar una crisis suprarrenal aguda potencialmente mortal (shock circulatorio refractario).\n\nAnálisis de distractores:\n- Opción A: Es peligrosa y contraindicada como paso inicial; iniciar levotiroxina en un hipotiroidismo central sin verificar ni cubrir el eje adrenal puede desencadenar una crisis suprarrenal fatal.\n- Opción C: La triyodotironina exógena no está indicada en el reemplazo tiroideo crónico y comparte el mismo riesgo letal de precipitar colapso suprarrenal agudo.\n- Opción D: Los anticuerpos anti-TPO evalúan tiroiditis de Hashimoto (hipotiroidismo primario con TSH marcadamente elevada), no hipotiroidismo central de origen selar.\n- Opción E: El síndrome del eutiroideo enfermo se observa en pacientes con patología médica crítica aguda hospitalaria y cursa con T3 baja y rT3 alta, no con un cuadro insidioso de hipopituitarismo crónico sintomático.'
  },
  {
    id: 'B4-Q02',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Enfermedad de Graves-Basedow y Síndromes Tirotóxicos',
    perfilCode: '1.04.1.002',
    legalLevel: {
      dx: 'TSH suprimida (< 0.01 mIU/L), T4L/T3 elevadas, TRAb positivos (> 1.75 UI/L) y ecografía doppler con infierno tiroideo',
      tx: 'Tiamazol 10-30 mg/día (o PTU en 1er trimestre), betabloqueo sintomático (propranolol/atenolol), radioyodo I-131 o tiroidectomía',
      seg: 'Control T4L/T3 a las 4-6 semanas (la TSH puede permanecer suprimida meses). Monitoreo estricto de neutrófilos si fiebre o dolor faríngeo',
      ges: 'No GES directa para hipertiroidismo primario. GES 33 para Gran Quemado/politraumatizado, derivación prioritaria a endocrinología'
    },
    stem: 'Una mujer de 34 años consulta en el CESFAM por un cuadro de 10 días de evolución caracterizado por dolor intenso en la cara anterior del cuello que se irradia hacia la mandíbula y ambos oídos, acompañado de palpitaciones, nerviosismo, temblor distal y sudoración profusa. Refiere haber cursado un cuadro respiratorio alto febril hace dos semanas. Al examen físico: Temp 37.9 °C, PA 138/72 mmHg, FC 108 lpm. La palpación cervical revela una glándula tiroides aumentada de tamaño de forma moderada, difusa, extremadamente sensible y dolorosa a la palpación, sin bocio nodular ni soplos audibles. No presenta exoftalmos ni retracción palpebral. Los exámenes de laboratorio revelan: TSH < 0.01 mIU/L, T4 Libre 3.2 ng/dL (VN 0.8 a 1.8), VHS 88 mm/h (VN < 20) y PCR 52 mg/L. Un cintigrama tiroideo de urgencia muestra una captación tiroidea de I-131 prácticamente abolida (< 1%). ¿Cuál es el diagnóstico más probable y el tratamiento inicial de elección?',
    options: [
      {
        id: 'A',
        text: 'Enfermedad de Graves-Basedow; iniciar de inmediato tiamazol 20 mg/día asociado a propranolol'
      },
      {
        id: 'B',
        text: 'Adenoma tóxico autónomo; indicar ablación con radioyodo I-131 ambulatorio de urgencia'
      },
      {
        id: 'C',
        text: 'Tiroiditis subaguda de De Quervain (granulomatosa); indicar antiinflamatorios no esteroidales (o corticoides si es severo) y betabloqueadores para el control sintomático'
      },
      {
        id: 'D',
        text: 'Tiroiditis bacteriana supurada aguda; programar punción diagnóstica y cefazolina endovenosa'
      },
      {
        id: 'E',
        text: 'Tirotoxicosis facticia; retirar el consumo exógeno de levotiroxina y mantener reposo'
      }
    ],
    correcta: 'C',
    explicacion: 'El cuadro clínico corresponde a una Tiroiditis Subaguda Granulomatosa de De Quervain. Se caracteriza por antecedente de infección viral respiratoria previa, dolor cervical anterior exquisito e inflamación tiroidea dolorosa irradiada a oídos/mandíbula, elevación masiva de reactantes de fase aguda (VHS > 50-80 mm/h) y tirotoxicosis con captación de radioyodo colapsada (< 1%) en el cintigrama. La tirotoxicosis se debe a la liberación descontrolada de hormona tiroidea preformada por lisis de los folículos inflamados, y NO a una hiperfunción glandular. Por ello, los fármacos antitiroideos (tiamazol/PTU) están CONTRAINDICADOS o son completamente ineficaces puesto que la síntesis de novo ya se encuentra fisiológicamente suprimida. El tratamiento de elección son los AINEs (o prednisona 30-40 mg/día si el dolor es severo) asociados a betabloqueadores (propranolol) para controlar las manifestaciones adrenérgicas.\n\nAnálisis de distractores:\n- Opción A: En la Enfermedad de Graves la glándula es indolora, puede haber soplo o frémito, orbitopatía distiroidea, y el cintigrama muestra captación alta y difusa (> 30-50%), no abolida. Tiamazol es inútil en tiroiditis destructiva.\n- Opción B: El adenoma tóxico cursa con un nódulo único hipercaptante caliente con el resto del parénquima suprimido, no con bocio doloroso difuso ni VHS muy elevada.\n- Opción D: La tiroiditis supurada bacteriana es un flemón localizado con fluctuación, fiebre alta séptica y leucocitosis marcada con desviación izquierda, extremadamente rara en adultos sin fístula del seno piriforme.\n- Opción E: La tirotoxicosis facticia presenta glándula tiroides no palpable o atrófica, tiroglobulina suprimida y ausencia de dolor o inflamación cervical.'
  },
  {
    id: 'B4-Q03',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Síndrome de Cushing: Algoritmo Diagnóstico y Diagnóstico Etiológico',
    perfilCode: '1.04.1.005',
    legalLevel: {
      dx: 'Demostrar hipercortisolismo con 2 pruebas de 1ra línea alteradas (CLU 24h, Nugent 1 mg, Cortisol salival nocturno) + ACTH plasmática',
      tx: 'Según etiología: Resección transesfenoidal (Enfermedad de Cushing), Suprarrenalectomía laparoscópica (Adenoma), ketoconazol/metirapona',
      seg: 'Monitoreo de cortisol post-quirúrgico y reemplazo temporal con hidrocortisona por insuficiencia suprarrenal secundaria a atrofia del eje',
      ges: 'No GES directo. Derivación de alta prioridad a Endocrinología y Neurocirugía / Cirugía Oncológica'
    },
    stem: 'Una mujer de 41 años consulta por aumento de peso progresivo de 10 kg en los últimos 7 meses con redistribución central, debilidad muscular proximal en extremidades inferiores que le impide levantarse de una silla sin apoyarse, hipertensión arterial de reciente diagnóstico y hematomas fáciles ante traumatismos mínimos. No refiere consumo de corticoides. Al examen físico destaca fascies redondeada pletórica (\'cara de luna llena\'), giba dorsocervical y estrías violáceas de 1.5 cm de ancho en hemiabdomen inferior y flancos. El estudio de pesquisa confirma hipercortisolismo con dos pruebas positivas: Test de Nugent (cortisol matinal post 1 mg de dexametasona) en 11.2 mcg/dL (positivo > 1.8) y Cortisol Libre Urinario en 24 horas en 380 mcg/24h (VN < 50). Para continuar el estudio etiológico, se mide ACTH plasmática matinal, la cual resulta en 72 pg/mL (VN 10 a 60 pg/mL). La Resonancia Magnética de silla turca demuestra una lesión hipointensa de 5 mm en la adenohipófisis. ¿Cuál es el tratamiento curativo definitivo de primera línea indicado para esta paciente?',
    options: [
      {
        id: 'A',
        text: 'Cirugía de resección selectiva transesfenoidal del microadenoma hipofisario (adenomectomía transesfenoidal)'
      },
      {
        id: 'B',
        text: 'Suprarrenalectomía bilateral laparoscópica definitiva con radioterapia hipofisaria complementaria'
      },
      {
        id: 'C',
        text: 'Tratamiento médico prolongado con ketoconazol en monoterapia oral para inhibir la esteroidogénesis'
      },
      {
        id: 'D',
        text: 'Radiocirugía estereotáctica hipofisaria (Gamma Knife) como procedimiento inicial exclusivo'
      },
      {
        id: 'E',
        text: 'Terapia con cabergolina a dosis altas para reducir la masa selar y normalizar el cortisol'
      }
    ],
    correcta: 'A',
    explicacion: 'La paciente presenta una Enfermedad de Cushing (microadenoma hipofisario productor de ACTH), que representa el 70-80% de los casos de síndrome de Cushing endógeno. El algoritmo diagnóstico se completó rigurosamente: 1° Confirmación de hipercortisolismo autónomo con dos pruebas de primera línea concordantes (Nugent no suprime y CLU 24h marcadamente elevado); 2° Clasificación etiológica mediante ACTH plasmática que resultó detectable/elevada (ACTH-dependiente); 3° Visualización de microadenoma hipofisario en la RM de silla turca. El tratamiento de primera línea curativo, seguro y de elección indiscutida es la resección microquirúrgica transesfenoidal selectiva del adenoma hipofisario (adenomectomía transesfenoidal), la cual logra tasas de curación o remisión de 70 a 90% en manos expertas.\n\nAnálisis de distractores:\n- Opción B: La suprarrenalectomía bilateral se reserva exclusivamente para casos refractarios a múltiples cirugías y terapias médicas; induce insuficiencia suprarrenal primaria definitiva y conlleva un riesgo de hasta un 25% de desarrollar el Síndrome de Nelson (crecimiento invasivo del tumor hipofisario con hiperpigmentación extrema).\n- Opción C: El ketoconazol o la metirapona son fármacos que bloquean la esteroidogénesis suprarrenal y se usan de forma puente antes de la cirugía o en enfermedad residual, pero no ofrecen curación definitiva del adenoma.\n- Opción D: La radiocirugía no es primera línea; su acción terapéutica tarda meses a años en manifestarse y tiene alto riesgo de generar panhipopituitarismo diferido.\n- Opción E: La cabergolina tiene baja efectividad en adenomas corticotropos (< 30%) y se reserva para casos seleccionados no operables o rescates compasivos.'
  },
  {
    id: 'B4-Q04',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Hipercalcemia e Hiperparatiroidismo Primario versus Neoplásico',
    perfilCode: '1.04.1.009',
    legalLevel: {
      dx: 'Calcio total corregido por albúmina o Calcio Iónico + PTH intacta (PTHi). PTH elevada/inapropiada = HPT 1°; PTH suprimida = Neoplasia / Vit D',
      tx: 'Crisis aguda: Suero fisiológico 0.9% enérgico + Ácido Zoledrónico EV +/- Calcitonina. HPT 1°: Paratiroidectomía si cumple criterios',
      seg: 'Calcio sérico, fósforo y función renal post-resección. Monitoreo de hipocalcemia severa por \'Síndrome del Hueso Hambriento\'',
      ges: 'No GES directo. Garantías por patología oncológica o nefrológica si concurre'
    },
    stem: 'Un hombre de 34 años, asintomático, acude a una evaluación médica ocupacional rutinaria. En su perfil bioquímico preventivo se detecta un calcio sérico de 10.9 mg/dL con albúmina de 4.0 g/dL (calcio corregido 10.9 mg/dL, VN 8.5 a 10.5) y fósforo sérico de 3.2 mg/dL. Se solicita una medición de Hormona Paratiroidea Intacta (PTHi) que resulta en 55 pg/mL (rango de referencia 15 a 65 pg/mL, valor normal pero inadecuadamente no suprimido para el nivel de calcio). Al indagar antecedentes familiares, el paciente refiere que su padre y una hermana menor presentan \'calcio levemente alto\' en controles médicos desde hace años, encontrándose ambos totalmente sanos. La ecografía cervical no visualiza lesiones paratiroideas y la densitometría ósea es normal. Para precisar el diagnóstico diferencial, se solicita una orina de 24 horas que documenta una excreción fraccionada de calcio (FeCa) de 0.4% (< 0.01 o < 1%). ¿Cuál es el diagnóstico más probable y la conducta médica más adecuada?',
    options: [
      {
        id: 'A',
        text: 'Hiperparatiroidismo primario normohormonal por adenoma paratiroideo; programar exploración cervical quirúrgica de cuatro glándulas'
      },
      {
        id: 'B',
        text: 'Neoplasia Endocrina Múltiple tipo 1 (MEN-1); solicitar resonancia magnética selar y gastrinemia urgente'
      },
      {
        id: 'C',
        text: 'Hipercalcemia secundaria a intoxicación insidiosa por vitamina D; indicar corticoides sistémicos y dieta estricta sin calcio'
      },
      {
        id: 'D',
        text: 'Hipercalcemia hipocalciúrica familiar (mutación del CaSR); mantener conducta expectante y contraindicar la paratiroidectomía quirúrgica'
      },
      {
        id: 'E',
        text: 'Hiperparatiroidismo terciario incipiente; prescribir cinacalcet oral para normalizar la calcemia'
      }
    ],
    correcta: 'D',
    explicacion: 'El cuadro corresponde a una Hipercalcemia Hipocalciúrica Familiar (HHF), un trastorno genético autosómico dominante infrecuente pero cardinal en el diagnóstico diferencial del hiperparatiroidismo primario. Se debe a mutaciones inactivadoras heterocigotas en el gen del receptor sensor de calcio (CaSR), lo que desplaza hacia la derecha el umbral de sensado de calcio tanto en las glándulas paratiroides (liberan PTH con calcemias más altas de lo normal) como en los túbulos renales (aumenta la reabsorción tubular de calcio). Clásicamente cursa con hipercalcemia leve asintomática, PTH normal o discretamente elevada, antecedentes familiares de hipercalcemia benigna y, como dato confirmatorio patognomónico, una excreción fraccionada de calcio en orina (FeCa) menor al 1% (FeCa < 0.01, a diferencia del hiperparatiroidismo primario donde la FeCa suele ser > 1-2%). En la HHF el curso es enteramente benigno sin afectación ósea ni litiásica, y la paratiroidectomía está FORMALMENTE CONTRAINDICADA puesto que no normaliza la calcemia y solo expone al paciente a riesgos quirúrgicos e hipoparatiroidismo definitivo.\n\nAnálisis de distractores:\n- Opción A: En el hiperparatiroidismo primario la excreción fraccionada de calcio es típicamente > 1-2% debido a la filtración aumentada de calcio; someter a cirugía a un paciente con HHF es un error médico grave ya que no resuelve el defecto receptor.\n- Opción B: El MEN-1 produce hiperparatiroidismo primario clásico con hipercalciuria (> 2%) e hiperplasia multiglandular con litiasis renal frecuente y adenomas hipofisarios o tumores neuroendocrinos.\n- Opción C: La intoxicación por vitamina D cursa con PTH suprimida a niveles indetectables e hipercalciuria muy elevada (> 300-400 mg/24h).\n- Opción E: El hiperparatiroidismo terciario se observa en pacientes con insuficiencia renal crónica avanzada de larga data o postrasplante renal con hiperfosfatemia y daño óseo severo previo.'
  },
  {
    id: 'B4-Q05',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Masas Selares, Adenomas Hipofisiarios y Apoplejía Hipofisaria',
    perfilCode: '1.04.1.013',
    legalLevel: {
      dx: 'RM de Silla Turca con gadolinio + Campo visual computarizado + Evaluación hormonal completa de todos los ejes hipofisarios',
      tx: 'Compresión quiasmática o tumores no funcionantes grandes: Cirugía transesfenoidal. Apoplejía: Hidrocortisona EV inmediata +/- descompresión urgente',
      seg: 'RM de control anual, campimetría periódica y seguimiento hormonal para pesquisar hipopituitarismo diferido postquirúrgico',
      ges: 'No GES directo. Garantías por patología neurológica o neuroquirúrgica prioritaria'
    },
    stem: 'Una mujer de 29 años consulta por amenorrea secundaria de 9 meses de evolución, galactorrea espontánea bilateral y disminución progresiva de los campos visuales periféricos que le dificulta conducir de noche. La evaluación oftalmológica y campimétrica confirma una hemianopsia bitemporal con agudeza visual central conservada. La Resonancia Magnética de silla turca revela una masa hipofisaria sólida de 24 × 18 mm con expansión supraselar que desplaza y comprime el quiasma óptico. La prolactina sérica matinal resulta marcadamente elevada en 780 ng/mL (VN < 25 ng/mL). La prueba de embarazo es negativa, y el resto del perfil hipofisario (TSH, T4L, cortisol y FSH/LH) se encuentra dentro de límites normales. ¿Cuál es el tratamiento de primera línea de elección para reducir la masa tumoral y descomprimir la vía visual?',
    options: [
      {
        id: 'A',
        text: 'Descompresión quirúrgica urgente por vía transesfenoidal'
      },
      {
        id: 'B',
        text: 'Radiocirugía estereotáctica fraccionada externa (Gamma Knife)'
      },
      {
        id: 'C',
        text: 'Terapia médica con análogos de la somatostatina (octreótido subcutáneo)'
      },
      {
        id: 'D',
        text: 'Anticonceptivos orales combinados para restituir la menstruación y observación de la masa con RM seriada'
      },
      {
        id: 'E',
        text: 'Iniciar tratamiento médico con un agonista dopaminérgico oral (cabergolina)'
      }
    ],
    correcta: 'E',
    explicacion: 'El diagnóstico es un Macroprolactinoma con compromiso visual por compresión quiasmática (prolactina > 200-500 ng/mL y masa selar > 10 mm). El Macroprolactinoma es la ÚNICA masa selar con compresión quiasmática cuyo tratamiento de primera línea es MÉDICO y no quirúrgico. Los agonistas dopaminérgicos de los receptores D2 (siendo la Cabergolina el fármaco de elección por su alta eficacia y excelente tolerancia) logran una rápida reducción del volumen tumoral (generalmente en días a semanas), lo que descomprime eficazmente el quiasma óptico y restablece la agudeza y el campo visual en más del 85-90% de los pacientes, normalizando a su vez los niveles de prolactina y restaurando el eje gonadal.\n\nAnálisis de distractores:\n- Opción A: La cirugía transesfenoidal es de primera línea para los macroadenomas no funcionantes o secretores de ACTH/GH con compresión quiasmática, pero en prolactinomas se reserva estrictamente como rescate ante resistencia documentada o intolerancia severa a los agonistas dopaminérgicos.\n- Opción B: La radiocirugía es una terapia adyuvante de tercera línea; tiene acción lenta (tarda meses en actuar) y alto riesgo de panhipopituitarismo, siendo inadecuada para la descompresión urgente de la vía visual.\n- Opción C: Los análogos de somatostatina son la terapia médica de elección para la acromegalia (adenomas secretores de hormona del crecimiento), siendo ineficaces en macroprolactinomas.\n- Opción D: Administrar estrógenos/anticonceptivos sin tratar el prolactinoma está contraindicado, ya que los estrógenos pueden estimular la proliferación de las células lactotropas y acelerar el crecimiento tumoral.'
  },
  {
    id: 'B4-Q06',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Hipotiroidismo Primario y Subclínico: Diagnóstico y Titulación de Levotiroxina',
    perfilCode: '1.05.1.005',
    legalLevel: {
      dx: 'Específico',
      tx: 'Completo',
      seg: 'Completo',
      ges: 'Garantía Explícita en Salud (GES N° 35): Hipotiroidismo en Personas de 15 años y más'
    },
    stem: 'Un hombre de 74 años con antecedentes de cardiopatía coronaria (infarto agudo de miocardio tratado con angioplastía y stent hace 2 años) e hipertensión arterial acude a control al CESFAM refiriendo astenia, lentitud psicomotora, piel seca y dificultad para concentrarse desde hace 4 meses. Su tratamiento habitual incluye atenolol, enalapril, ácido acetilsalicílico y atorvastatina. Al examen físico: PA 132/80 mmHg, FC 58 lpm, afebril, con leve edema blando pretibial y piel fría. Los exámenes de laboratorio revelan: TSH de 19.4 mIU/L (VN 0.4 a 4.0 mIU/L), T4 Libre de 0.52 ng/dL (VN 0.8 a 1.8 ng/dL) y anticuerpos anti-TPO fuertemente positivos. El electrocardiograma muestra ritmo sinusal, FC 58 lpm, sin signos de isquemia aguda. Su peso es de 72 kg. De acuerdo con las guías clínicas del GES N° 35 y los consensos internacionales, ¿cuál es la conducta terapéutica inicial más adecuada respecto a la administración de levotiroxina?',
    options: [
      {
        id: 'A',
        text: 'Iniciar levotiroxina a dosis sustitutiva completa de 1.6 mcg/kg/día (112 mcg/día) para normalizar velozmente el perfil hormonal'
      },
      {
        id: 'B',
        text: 'Iniciar levotiroxina a dosis baja de 25 mcg/día e ir titulando gradualmente cada 6 a 8 semanas según controles de TSH'
      },
      {
        id: 'C',
        text: 'Iniciar triyodotironina (T3) 20 mcg/día por tener menor vida media y permitir un control más seguro en cardiopatías'
      },
      {
        id: 'D',
        text: 'Contraindicar la levotiroxina por el alto riesgo de desencadenar una crisis isquémica miocárdica o fibrilación auricular'
      },
      {
        id: 'E',
        text: 'Iniciar levotiroxina a dosis de 75 mcg/día asociada a un incremento en la dosis de betabloqueador para prevenir taquiarritmias'
      }
    ],
    correcta: 'B',
    explicacion: 'El paciente presenta un hipotiroidismo primario clínico establecido (TSH marcadamente elevada con T4 libre baja y anti-TPO positivos por tiroiditis autoinmune de Hashimoto). En adultos mayores (> 65-70 años) o en pacientes con antecedentes conocidos de cardiopatía coronaria o vascular establecida, la regla de oro clínica estipulada tanto en la guía GES N° 35 como en consensos internacionales es \'empezar bajo e ir lento\' (\'start low, go slow\'). Se debe iniciar levotiroxina en dosis bajas de 12.5 a 25 mcg al día (máximo 50 mcg/día) con incrementos paulatinos de 12.5 a 25 mcg cada 6 a 8 semanas guiados por TSH. Iniciar dosis sustitutivas plenas incrementaría bruscamente el consumo de oxígeno miocárdico, pudiendo desencadenar angina refractaria, infarto agudo de miocardio, insuficiencia cardíaca aguda o arritmias ventriculares letales.\n\nAnálisis de distractores:\n- Opción A: La dosis de 1.6 mcg/kg/día es la dosis de inicio exclusiva para adultos jóvenes y sanos sin comorbilidad cardiovascular; en este anciano cardiópata es extremadamente peligrosa.\n- Opción C: La triyodotironina (T3) induce picos plasmáticos rápidos y oscilaciones catecolaminérgicas intensas que sobrecargan el aparato cardiovascular, estando formalmente desaconsejada.\n- Opción D: El hipotiroidismo empeora el perfil lipídico, incrementa las resistencias vasculares periféricas y atenúa la función sistólica; no debe dejarse sin tratamiento, sino tratarse con titulación lenta y cuidadosa.\n- Opción E: Iniciar con 75 mcg/día supera con creces la dosis segura de inicio en cardiopatía isquémica establecida.'
  },
  {
    id: 'B4-Q07',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Manejo Terapéutico Comparado: Fármacos, Radioyodo y Cirugía',
    perfilCode: '1.04.1.002',
    legalLevel: {
      dx: 'Evaluación de etiología tiroidea, severidad clínica, comorbilidades cardiovasculares, deseo gestacional y orbitopatía activa',
      tx: 'Tiamazol (1ra línea médica), Radioyodo I-131 (elección en recidivas/BMNT), Tiroidectomía total (bocios gigantes, compresión o sospecha CA)',
      seg: 'Perfil tiroideo a las 4-6 semanas de inicio médico; seguimiento anual con TSH tras I-131 o cirugía por desarrollo inexorable de hipotiroidismo',
      ges: 'Patología no GES directa. Garantías GES si concurre en cardiopatía o estudio quirúrgico sospechoso de cáncer papilar'
    },
    stem: 'Una mujer de 33 años con diagnóstico de Enfermedad de Graves-Basedow severa presenta recaída sintomática tras un segundo intento de tratamiento médico con tiamazol, presentando intolerancia gastrointestinal y prurito refractario. No tiene orbitopatía activa ni planes de embarazo a corto plazo. Presenta un bocio difuso moderado de 45 gramos. Tras discusión multidisciplinaria, se programa para una tiroidectomía total electiva en 10 días. Actualmente la paciente se encuentra clínicamente eutiroidea gracias a tiamazol en dosis ajustada y propranolol. ¿Cuál es la medida farmacológica preoperatoria estándar que debe administrarse durante los 7 a 10 días previos a la intervención para reducir la vascularización de la glándula y el sangrado intraoperatorio?',
    options: [
      {
        id: 'A',
        text: 'Duplicar la dosis diaria de tiamazol hasta el momento de ingresar a pabellón'
      },
      {
        id: 'B',
        text: 'Administrar una dosis terapéutica ablativa de radioyodo I-131 7 días antes de la cirugía'
      },
      {
        id: 'C',
        text: 'Administrar solución oral saturada de yoduro de potasio (solución de Lugol)'
      },
      {
        id: 'D',
        text: 'Iniciar heparina de bajo peso molecular en dosis de anticoagulación plena'
      },
      {
        id: 'E',
        text: 'Suspender todos los fármacos antitiroideos 10 días antes para restablecer la fisiología tiroidea basal'
      }
    ],
    correcta: 'C',
    explicacion: 'La preparación preoperatoria clásica y mandatoria para la tiroidectomía total en pacientes con Enfermedad de Graves-Basedow incluye, una vez alcanzado el eutiroidismo con tionamidas, la administración de yoduro inorgánico oral (solución de Lugol o solución saturada de yoduro de potasio, SSKI) durante los 7 a 10 días previos a la cirugía. El yodo inorgánico en altas concentraciones induce el efecto Wolff-Chaikoff transitorio, frenando la liberación de hormonas tiroideas y provocando una marcada reducción en el flujo sanguíneo y la hipervascularización de la glándula tiroidea (colapsa los vasos intratiroideos). Esto reduce significativamente la friabilidad del tejido y la pérdida sanguínea intraoperatoria, facilitando la disección quirúrgica y protegiendo los nervios laríngeos recurrentes y las glándulas paratiroides.\n\nAnálisis de distractores:\n- Opción A: El tiamazol bloquea la síntesis de nuevas hormonas por la peroxidasa tiroidea, pero no reduce de forma aguda la vascularización tiroidea como lo hace el yoduro inorgánico (Lugol).\n- Opción B: Administrar radioyodo I-131 días antes de la cirugía produce una tiroiditis rádica aguda con inflamación intensa, necrosis tisular y fibrosis peritiroidea que haría la tiroidectomía extremadamente riesgosa y con alto índice de complicaciones.\n- Opción D: La anticoagulación plena está contraindicada antes de cirugía mayor cervical por el gravísimo riesgo de hematoma sofocante del cuello con asfixia mecánica.\n- Opción E: Suspender la medicación antitiroidea dejaría a la paciente expuesta a una crisis tirotóxica o tormenta tiroidea intraoperatoria por manipulación de la glándula.'
  },
  {
    id: 'B4-Q08',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Insuficiencia Suprarrenal Crónica: Primaria (Addison) versus Secundaria',
    perfilCode: '1.04.1.006',
    legalLevel: {
      dx: 'Cortisol plasmático matinal (< 3 mcg/dL confirma; 3-15 requiere test de ACTH/Synacthen). ACTH elevada confirma primaria (Addison); ACTH baja orienta a secundaria',
      tx: 'Reemplazo con Hidrocortisona (15-25 mg/día en 2-3 tomas) + Fludrocortisona (0.05-0.1 mg/día SOLO en primaria/Addison). Educar ajuste por estrés',
      seg: 'Monitoreo clínico (peso, PA de pie/sentado, energía), electrolitos plasmáticos y renina plasmática. NUNCA guiar dosis con cortisol plasmático',
      ges: 'No GES directo. Garantía en Ley Ricarte Soto para bombas o fármacos especializados si aplica, derivación prioritaria'
    },
    stem: 'Una mujer de 35 años con diagnóstico de Enfermedad de Addison (insuficiencia suprarrenal primaria autoinmune) desde hace 3 años acude al CESFAM por un cuadro de 24 horas de fiebre de 38.9 °C, calofríos, dolor faríngeo intenso y disfagia. Se encuentra bajo tratamiento de sustitución crónico con hidrocortisona 20 mg/día (15 mg a las 08:00 h y 5 mg a las 15:00 h) y fludrocortisona 0.1 mg al día. Al examen físico: PA 105/65 mmHg, FC 94 lpm, Temp 38.8 °C. En la orofaringe se observa eritema amigdalino con exudado pultáceo compatible con amigdalitis bacteriana aguda. La paciente se encuentra lúcida, bien hidratada y hemodinámicamente compensada. Además de prescribir el antibiótico pertinente para su foco infeccioso, ¿cuál es la indicación médica fundamental respecto a su terapia de sustitución suprarrenal?',
    options: [
      {
        id: 'A',
        text: 'Suspender la hidrocortisona durante la infección para no comprometer la respuesta inmunológica celular'
      },
      {
        id: 'B',
        text: 'Duplicar exclusivamente la dosis de fludrocortisona a 0.2 mg/día manteniendo la hidrocortisona en sus dosis basales'
      },
      {
        id: 'C',
        text: 'Mantener la dosis habitual de hidrocortisona y solicitar un control de cortisol plasmático a las 48 horas para evaluar modificaciones'
      },
      {
        id: 'D',
        text: 'Duplicar o triplicar transitoriamente la dosis oral de hidrocortisona (a 40-60 mg/día) durante los días con fiebre e instruir acudir a urgencias para recibir hidrocortisona parenteral si presenta vómitos'
      },
      {
        id: 'E',
        text: 'Cambiar de inmediato la hidrocortisona oral por dexametasona 8 mg cada 8 horas endovenosa de forma permanente'
      }
    ],
    correcta: 'D',
    explicacion: 'En los pacientes con Enfermedad de Addison (insuficiencia suprarrenal primaria), la glándula suprarrenal es incapaz de responder al estrés fisiológico aumentando la secreción de cortisol. Ante cualquier evento de estrés agudo intercurrente como fiebre (> 38 °C), infecciones bacterianas, traumatismos o procedimientos médicos, es mandatorio aplicar las \'reglas de días de enfermedad\' (\'sick-day rules\'): duplicar o triplicar la dosis oral diaria de hidrocortisona (ej. 40 a 60 mg/día divididos en 3 tomas) hasta que la fiebre y el cuadro agudo hayan remitido por completo (generalmente 48 a 72 horas). Si la paciente no tolera la vía oral por vómitos o diarrea, debe acudir inmediatamente a un servicio de urgencias para recibir hidrocortisona parenteral (100 mg EV o IM) con suero salino al 0.9% para prevenir una crisis addisoniana con shock hemodinámico letal.\n\nAnálisis de distractores:\n- Opción A: Suspender la hidrocortisona es un error catastrófico y potencialmente mortal; la paciente caería en colapso cardiovascular y shock addisoniano refractario en cuestión de horas.\n- Opción B: En situaciones de estrés no se ajusta la fludrocortisona; las dosis elevadas de hidrocortisona ya aportan una actividad mineralocorticoide cruzada suficiente para mantener la volemia.\n- Opción C: Mantener la dosis basal durante una infección febril desencadena una crisis suprarrenal aguda; además, el cortisol plasmático carece de utilidad para monitorizar el tratamiento sustitutivo.\n- Opción E: La dexametasona en megadosis carece de actividad mineralocorticoide y es un tratamiento transitorio en emergencias extremas, nunca un reemplazo ambulatorio permanente.'
  },
  {
    id: 'B4-Q09',
    specialtyKey: 'endocrinologia',
    specialtyName: 'Endocrinología',
    topicTitle: 'Hipocalcemia Aguda y Crónica: Diagnóstico y Manejo de Emergencia',
    perfilCode: '1.04.1.010',
    legalLevel: {
      dx: 'Calcio total corregido por albúmina < 8.5 mg/dL o Calcio Iónico < 4.0 mg/dL (1.0 mmol/L) + Signos de irritabilidad neuromuscular (Trousseau / Chvostek)',
      tx: 'Aguda sintomática: Gluconato de Calcio al 10% 1-2 ampollas EV en 10-20 min + infusión continua. Corregir magnesio si hipomagnesemia',
      seg: 'Monitoreo cardíaco continuo (riesgo QT largo y arritmias). Monitoreo de calcemia, magnesemia y producto calcio-fósforo en tratamiento crónico',
      ges: 'No GES directo. Garantías por patología tiroidea/oncológica previa si aplica'
    },
    stem: 'Una mujer de 46 años con antecedente de tiroidectomía total electiva por cáncer papilar de tiroides hace 3 meses evolucionó con un hipoparatiroidismo definitivo posquirúrgico (PTH intacta indetectable y calcio corregido basal de 6.8 mg/dL). Su médico le indicó carbonato de calcio oral a dosis de 2.500 mg al día; sin embargo, en su control ambulatorio al mes, la paciente persiste con parestesias peribucales frecuentes y calambres dolorosos en extremidades. Sus exámenes de laboratorio revelan: Calcio sérico corregido 7.3 mg/dL (VN 8.5 a 10.5), Fósforo sérico 5.2 mg/dL (VN 2.5 a 4.5) y Calciuria de 24 horas baja. ¿Cuál es el mecanismo fisiopatológico por el cual el calcio oral en monoterapia no logra corregir la hipocalcemia en esta paciente y qué modificación terapéutica obligatoria se debe implementar?',
    options: [
      {
        id: 'A',
        text: 'El carbonato de calcio es quelado por el fósforo sérico; se debe suspender el calcio oral e indicar gluconato de calcio en inyecciones intramusculares bisemanales'
      },
      {
        id: 'B',
        text: 'La absorción intestinal de calcio está disminuida por falta de hormonas tiroideas; se debe duplicar la dosis de levotiroxina'
      },
      {
        id: 'C',
        text: 'La paciente presenta una resistencia periférica tisular al calcio; se debe agregar cinacalcet oral para activar los receptores de calcio'
      },
      {
        id: 'D',
        text: 'La hipocalcemia se debe a una pérdida masiva tubular de calcio por déficit de aldosterona; se debe iniciar fludrocortisona oral'
      },
      {
        id: 'E',
        text: 'La ausencia de PTH impide la activación renal de la 1-alfa-hidroxilasa, bloqueando la síntesis de 1,25-dihidroxivitamina D (calcitriol); se debe asociar calcitriol oral al suplemento de calcio'
      }
    ],
    correcta: 'E',
    explicacion: 'En el hipoparatiroidismo definitivo posquirúrgico, la ausencia completa de PTH genera un doble defecto metabólico: 1) Cesa la estimulación paratiroidea de la enzima 1-alfa-hidroxilasa en los túbulos renales proximales, impidiendo la conversión de la 25-hidroxivitamina D en su metabolito activo, el Calcitriol (1,25-dihidroxivitamina D); y 2) Se pierde la reabsorción tubular distal de calcio. Dado que la absorción intestinal de calcio depende de la presencia de calcitriol activo en los enterocitos, la administración de calcio oral en monoterapia o de colecalciferol nativo no se absorbe eficientemente. Por lo tanto, el pilar farmacológico obligatorio del manejo crónico del hipoparatiroidismo es asociar Carbonato de Calcio con Calcitriol oral (0.25 a 1.0 mcg/día). El objetivo es mantener la calcemia en el límite bajo-normal (8.0 a 8.5 mg/dL) para evitar síntomas de hipocalcemia y prevenir la hipercalciuria con nefrocalcinosis.\n\nAnálisis de distractores:\n- Opción A: El calcio intramuscular está formalmente contraindicado por el riesgo de necrosis tisular grave y formación de abscesos estériles.\n- Opción B: La absorción de calcio no depende de la levotiroxina sino de la vitamina D activa (calcitriol) en el enterocito duodenal.\n- Opción C: El cinacalcet es un calcimimético que suprime la secreción de PTH en hiperparatiroidismo primario o secundario a falla renal; en hipoparatiroidismo empeoraría drásticamente la hipocalcemia.\n- Opción D: La aldosterona regula el sodio y potasio, no la homeostasis fosfocálcica.'
  },
  {
    id: 'B4-Q10',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Síndrome Anémico: Definición, Índices Eritrocitarios (VCM, HCM) e Índice Reticulocitario',
    perfilCode: '1.08.1.001',
    legalLevel: {
      dx: 'Específico',
      tx: 'Inicial',
      seg: 'Completo',
      ges: 'No GES directo · Programa de Salud del Adulto Mayor y APS'
    },
    stem: 'Un hombre de 64 años, previamente sano, consulta en el CESFAM por un cuadro de 3 meses de astenia progresiva, mareos ocasionales y disnea de moderados esfuerzos. No relata antecedentes de hematemesis, melena ni proctorragia visible. Al examen físico destaca palidez cutaneomucosa evidente, sin ictericia, adenopatías ni visceromegalias. El hemograma muestra: Hb 8.1 g/dL, Hto 25%, VCM 70 fL (VN 80 a 100 fL), HCM 22 pg (VN 27 a 32 pg), Leucocitos 7.100/uL con fórmula normal, Plaquetas 495.000/uL (trombocitosis reactiva). El recuento de reticulocitos es de 0.9% (Índice Reticulocitario Corregido, IRC = 0.3%). ¿Cuál es la clasificación fisiopatológica de esta anemia y la conducta diagnóstica inicial prioritaria en este paciente?',
    options: [
      {
        id: 'A',
        text: 'Anemia microcítica hipocrómica arregenerativa; sospechar ferropenia secundaria a pérdidas digestivas crónicas y solicitar perfil de hierro junto a estudio endoscópico digestivo completo (colonoscopía y endoscopía digestiva alta)'
      },
      {
        id: 'B',
        text: 'Anemia normocítica normocrómica regenerativa; sospechar hemólisis autoinmune y solicitar prueba de Coombs directa con haptoglobina sérica'
      },
      {
        id: 'C',
        text: 'Anemia macrocítica arregenerativa; solicitar niveles de vitamina B12 y ácido fólico junto a mielograma'
      },
      {
        id: 'D',
        text: 'Anemia microcítica regenerativa por hiperesplenismo; solicitar ecografía abdominal y derivar a hematología para esplenectomía'
      },
      {
        id: 'E',
        text: 'Anemia hemolítica microangiopática; derivar de urgencia para recambio plasmático por sospecha de púrpura trombocitopénico trombótico'
      }
    ],
    correcta: 'A',
    explicacion: 'El análisis de los índices eritrocitarios y reticulocitarios revela: 1) Microcitosis franca (VCM 70 fL < 80 fL) e hipocromía (HCM 22 pg < 27 pg); 2) Un Índice Reticulocitario Corregido (IRC) de 0.3% (< 2.0%), lo que clasifica la anemia como hipoproliferativa o ARREGENERATIVA (falla central o carencial en la médula ósea); 3) Trombocitosis reactiva (plaquetas 495.000/uL), hallazgo clásico acompañante del déficit crónico de hierro debido a estimulación cruzada de megacariocitos por eritropoyetina elevada. En todo varón adulto o mujer postmenopáusica con anemia ferropénica microcítica arregenerativa, la causa es una hemorragia digestiva crónica oculta (cáncer colorrectal o gástrico) hasta que se demuestre lo contrario. La conducta prioritaria es confirmar el perfil de hierro y solicitar estudio endoscópico digestivo alto y bajo completo.\n\nAnálisis de distractores:\n- Opción B: Los índices son marcadamente microcíticos (VCM 70 fL) y el IRC < 2% descarta una anemia regenerativa o hemolítica periférica.\n- Opción C: El VCM bajo (70 fL) descarta de plano una macrocitosis (VCM > 100 fL) y las causas megaloblásticas.\n- Opción D: El hiperesplenismo cursa con pancytopenia (leucopenia y trombocitopenia), no con trombocitosis reactiva ni microcitosis pura con IRC bajo.\n- Opción E: La microangiopatía trombótica (PTT) cursa con trombocitopenia severa consumptiva, esquistocitos y signos de hemólisis intravascular regenerativa.'
  },
  {
    id: 'B4-Q11',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Anemias Macrocíticas y Megaloblásticas: Déficit de B12 (Anemia Perniciosa/Neuropatía) vs Déficit de Folato',
    perfilCode: '1.08.1.004',
    legalLevel: {
      dx: 'Sospecha',
      tx: 'Inicial',
      seg: 'Completo',
      ges: 'No GES directo · Suplementación en Adulto Mayor y Cirugía Bariátrica'
    },
    stem: 'Un hombre de 68 años con antecedente de una gastrectomía total por cáncer gástrico hace 4 años (sin recidiva tumoral aparente) consulta en la sala de medicina por un cuadro de 6 meses de debilidad extrema, parestesias dolorosas en extremidades inferiores con sensación de caminar sobre algodones, inestabilidad de la marcha en la oscuridad y caídas recurrentes. Al examen físico destaca palidez cérea con discreto tinte ictérico escleral, glositis atrófica (lengua lisa, roja y depapilada) y un examen neurológico con abolición de la sensibilidad vibratoria (palestesia) y posicional (batiestesia) en ambos pies, signo de Romberg positivo y reflejos osteotendinosos rotulianos exaltados con reflejo cutáneo plantar extensor (Babinski) bilateral. El hemograma muestra: Hb 7.0 g/dL, VCM 118 fL, Leucocitos 3.200/uL con neutrófilos hipersegmentados (> 5 lóbulos), Plaquetas 105.000/uL y reticulocitos 0.3%. ¿Cuál es el diagnóstico etiológico del compromiso neurológico y cuál es el esquema terapéutico mandatorio?',
    options: [
      {
        id: 'A',
        text: 'Mielopatía nutricional por déficit aislado de folatos; iniciar ácido fólico 5 mg oral al día en monoterapia'
      },
      {
        id: 'B',
        text: 'Degeneración combinada subaguda de la médula espinal por déficit de vitamina B12 (cobalamina); iniciar cianocobalamina o hidroxocobalamina intramuscular de por vida, evitando prescribir ácido fólico en monoterapia'
      },
      {
        id: 'C',
        text: 'Mielopatía compresiva metastásica; iniciar dexametasona en bolo y programar radioterapia holomedular urgente'
      },
      {
        id: 'D',
        text: 'Polineuropatía periférica por déficit de piridoxina (vitamina B6); administrar complejo vitamínico B oral durante 1 mes'
      },
      {
        id: 'E',
        text: 'Síndrome de Guillain-Barré atípico post-neoplásico; iniciar infusión de inmunoglobulina endovenosa (IgEV)'
      }
    ],
    correcta: 'B',
    explicacion: 'El cuadro clínico y neurológico es la clásica Degeneración Combinada Subaguda de la médula espinal por déficit severo de Vitamina B12 (cobalamina). La gastrectomía total suprime por completo las células parietales gástricas productoras de factor intrínseco, anulando la absorción ileal de B12; dado que los depósitos hepáticos de cobalamina duran 3 a 5 años, el cuadro debuta típicamente en este período si no hubo profilaxis. La falta de B12 altera la metilmalonil-CoA mutasa y produce acumulación de ácido metilmalónico tóxico para la mielina, causando desmielinización de los cordones posteriores (pérdida de propiocepción, vibración y ataxia sensitiva con Romberg positivo) y de las vías piramidales/corticoespinales laterales (hiperreflexia y Babinski). El hemograma confirma pancytopenia megaloblástica con pleocariocitos (neutrófilos con > 5 lóbulos). El tratamiento MANDATORIO es B12 parenteral (intramuscular) de por vida. Es una REGLA DE ORO no administrar ácido fólico solo, ya que este corrige la hematopoyesis pero precipita o agrava el daño neurológico irreversible.\n\nAnálisis de distractores:\n- Opción A: El déficit de ácido fólico produce anemia megaloblástica idéntica pero NUNCA genera degeneración combinada subaguda ni daño neurológico; tratar con folato enmascara el déficit de B12 y perpetúa el daño axonal permanente.\n- Opción C: La compresión metastásica causaría un nivel sensitivo medular nítido con dolor radicular localizado y no se acompaña de macrocitosis extrema ni glositis ni neutrófilos hipersegmentados.\n- Opción D: El déficit de B6 no causa degeneración de cordones medulares ni pancytopenia macrocítica; produce anemia microcítica sideroblástica.\n- Opción E: El síndrome de Guillain-Barré cursa con parálisis flácida arrefléxica ascendente aguda (no Babinski ni hiperreflexia).'
  },
  {
    id: 'B4-Q12',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Fisiología de la Hemostasia y Evaluación de Laboratorio: Recuento Plaquetario, TP/INR, TTPK y Fibrinógeno',
    perfilCode: '1.08.1.005',
    legalLevel: {
      dx: 'Sospecha',
      tx: 'Inicial',
      seg: 'Completo',
      ges: 'No GES directo · Pruebas Básicas de Laboratorio (1.08.4.005)'
    },
    stem: 'Una mujer de 31 años sin antecedentes de diátesis hemorrágica ni sangrados anormales en procedimientos dentales previos, pero con historia obstétrica de dos pérdidas reproductivas espontáneas en el primer trimestre, es evaluada en el policlínico de preanestesia para una colecistectomía laparoscópica electiva. Los exámenes preoperatorios de hemostasia revelan: Recuento plaquetario 230.000/uL, Tiempo de Protrombina (TP) 12.1 segundos (INR 1.02, normal) y Tiempo de Tromboplastina Parcial Activada (TTPK) marcadamente prolongado en 64 segundos (control normal 30 segundos). Se realiza una prueba de mezclas 1:1 con plasma normal, observándose que el TTPK persiste prolongado en 60 segundos (no corrige). ¿Cuál es la interpretación diagnóstica más adecuada y qué riesgo clínico presenta prioritariamente la paciente?',
    options: [
      {
        id: 'A',
        text: 'Déficit congénito de Factor VIII (Hemofilia A); presenta alto riesgo de hemorragia intraoperatoria severa no controlable'
      },
      {
        id: 'B',
        text: 'Déficit severo de Factor VII de la vía extrínseca; presenta riesgo inminente de hemartrosis y hematomas musculares profundos'
      },
      {
        id: 'C',
        text: 'Presencia de un inhibidor circulante tipo anticoagulante lúpico (asociado a síndrome antifosfolípido); presenta riesgo paradójico de trombosis arterial o venosa y pérdidas fetales, sin mayor riesgo hemorrágico per se'
      },
      {
        id: 'D',
        text: 'Enfermedad de Von Willebrand tipo 1 clásica; presenta alteración de la hemostasia primaria con riesgo de sangrado mucoso inmediato'
      },
      {
        id: 'E',
        text: 'Hepatopatía crónica incipiente; presenta déficit de factores vitamina K-dependientes con indicación de plasma fresco congelado preoperatorio'
      }
    ],
    correcta: 'C',
    explicacion: 'La Prueba de Mezcla 1:1 con plasma normal es el examen rector para estudiar la prolongación aislada del TTPK: si la mezcla normaliza el tiempo de coagulación, existe un déficit de factores de la vía intrínseca (FVIII, FIX, FXI); si NO corrige (el TTPK permanece prolongado), demuestra la presencia de un inhibidor circulante que interfiere activamente con la coagulación in vitro. El inhibidor más frecuente en personas asintomáticas o con antecedentes obstétricos adversos es el Anticoagulante Lúpico (anticuerpos antifosfolípidos). Aunque in vitro prolonga el TTPK al interferir con los reactivos fosfolipídicos de la prueba de laboratorio, in vivo produce un estado protrombótico severo con riesgo de trombosis venosa profunda, tromboembolismo pulmonar, accidente cerebrovascular isquémico y pérdidas fetales recurrentes (Síndrome Antifosfolípido), sin conferir riesgo de hemorragia quirúrgica espontánea.\n\nAnálisis de distractores:\n- Opción A: En la hemofilia A el plasma normal al 50% aporta factor VIII suficiente (> 50%) para normalizar completamente el TTPK (la prueba de mezclas corrige de inmediato).\n- Opción B: El factor VII pertenece exclusivamente a la vía extrínseca; su déficit altera el TP/INR y mantiene un TTPK estrictamente normal.\n- Opción D: En la enfermedad de Von Willebrand el defecto es de la hemostasia primaria con sangrado mucocutáneo y la prueba de mezclas sí corrige.\n- Opción E: El daño hepatocelular compromete primero el factor VII (por su vida media corta de 4-6 h), prolongando el TP de forma precoz antes de afectar el TTPK.'
  },
  {
    id: 'B4-Q13',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Leucemias Agudas: Mieloide Aguda (LMA) y Linfoblástica Aguda (LLA): Blastos >20%, Bastones de Auer y Trasplante',
    perfilCode: '1.08.1.009',
    legalLevel: {
      dx: 'Sospecha',
      tx: 'Inicial',
      seg: 'Derivar',
      ges: 'Garantía Explícita en Salud (GES N° 37 y N° 8): Leucemias en personas de 15 años y más / Menores de 15 años'
    },
    stem: 'Una mujer de 26 años, previamente sana, consulta de urgencia por un cuadro de 5 días de astenia profunda, fiebre de 38.6 °C, epistaxis bilateral que no cede al taponamiento anterior, sangrado gingival espontáneo abundante y hematomas con petequias diseminadas en tronco y extremidades. Al examen físico se aprecia palidez intensa, múltiples equimosis y abundantes petequias, sin visceromegalias ni adenopatías. Los exámenes de urgencia revelan: Hb 6.8 g/dL, Leucocitos 4.100/uL con 52% de blastos y promielocitos anómalos de gran tamaño con gránulos azurófilos y múltiples Bastones de Auer agrupados en manojos (células de Faggot), y Plaquetas 14.000/uL. El estudio de hemostasia demuestra una coagulopatía de consumo severa: TP 23 segundos (INR 2.2), TTPK 54 segundos, Fibrinógeno colapsado en 68 mg/dL (VN 200 a 400 mg/dL) y Dímero D > 20.000 ng/mL. Ante la sospecha diagnóstica de Leucemia Promielocítica Aguda (LMA-M3) asociada a Coagulación Intravascular Diseminada (CID), ¿cuál es la medida farmacológica inmediata e inaplazable que debe iniciarse de urgencia mientras se tramita la derivación por GES N° 37?',
    options: [
      {
        id: 'A',
        text: 'Administrar ácido tranexámico endovenoso en altas dosis en monoterapia para detener la hiperfibrinolisis'
      },
      {
        id: 'B',
        text: 'Iniciar infusión continua de heparina no fraccionada para inhibir la cascada de coagulación'
      },
      {
        id: 'C',
        text: 'Administrar quimioterapia citotóxica con dosis altas de citarabina en la unidad de emergencias sin soporte transfusional'
      },
      {
        id: 'D',
        text: 'Iniciar de inmediato Ácido Todo-Trans-Retinoico (ATRA / tretinoína oral) para inducir la diferenciación celular de los blastos y frenar la coagulopatía de consumo'
      },
      {
        id: 'E',
        text: 'Prescribir prednisona oral 1 mg/kg/día y posponer cualquier otra terapia hasta obtener el resultado citogenético molecular del gen PML-RARA'
      }
    ],
    correcta: 'D',
    explicacion: 'El cuadro corresponde a una Leucemia Promielocítica Aguda (LPA o subtipo M3 de la FAB), caracterizada por la translocación t(15;17)(q22;q21) que genera el gen quimérico PML-RARA. La presencia de blastos promielocíticos con múltiples Bastones de Auer en manojo (\'células de Faggot\') es morfológicamente patognomónica. La LPA es la mayor urgencia médica en hematología debido a que los promielocitos neoplásicos liberan factores tisulares y anexina II, desencadenando una Coagulación Intravascular Diseminada (CID) fulminante con hiperfibrinolisis y colapso de fibrinógeno, con alta mortalidad precoz (10-20%) por hemorragia del sistema nervioso central o pulmonar. El tratamiento debe iniciarse de forma INMEDIATA ante la sospecha morfológica sin esperar la confirmación molecular, administrando Ácido Todo-Trans-Retinoico (ATRA o tretinoína oral, 45 mg/m2/día) asociado a soporte agresivo con plaquetas y crioprecipitados (para mantener fibrinógeno > 150 mg/dL). El ATRA induce la diferenciación de los promielocitos a granulocitos maduros, deteniendo la liberación procoagulante y revirtiendo la coagulopatía en 48-72 horas, alcanzando tasas de curación superiores al 90% en la era actual (garantizada en Chile por GES N° 37).\n\nAnálisis de distractores:\n- Opción A: El ácido tranexámico en monoterapia está contraindicado en la fase activa de la CID por riesgo de trombosis microvascular masiva fatal.\n- Opción B: La heparina está proscrita en LPA con trombocitopenia profunda (< 20.000/uL) por riesgo inminente de exanguinación o sangrado intracraneano.\n- Opción C: La quimioterapia citotóxica aislada provoca lisis masiva de blastos con liberación abrupta de gránulos procoagulantes, empeorando la CID y provocando la muerte por hemorragia.\n- Opción E: Demorar el inicio de ATRA a la espera de la citogenética o dar corticoides aislados constituye una negligencia grave, ya que el riesgo de muerte hemorrágica es máximo en las primeras 48 horas.'
  },
  {
    id: 'B4-Q14',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Neutropenia Febril en Oncología: Estratificación MASCC, Monoterapia Antipseudomónica y Urgencia Médica',
    perfilCode: '1.08.2.006',
    legalLevel: {
      dx: 'Sospecha',
      tx: 'Inicial',
      seg: 'Derivar',
      ges: 'Garantía Explícita en Salud: Urgencia Vital en Paciente Oncológico GES'
    },
    stem: 'Un hombre de 56 años con linfoma difuso de células B grandes en tratamiento con quimioterapia esquema R-CHOP (tercer ciclo recibido hace 9 días) consulta en el Servicio de Urgencias por calofríos intensos y registro febril axilar de 38.8 °C en su domicilio hace 2 horas. Al examen físico: PA 102/65 mmHg, FC 106 lpm, FR 20 rpm, SatO2 96% ambiental, Temp axilar 38.5 °C. El paciente se encuentra decaído, lúcido, con mucosas secas pero sin úlceras ni mucositis visible. El catéter venoso central tunelizado no presenta eritema ni secreción en su trayecto o punto de inserción. El abdomen es blando e indoloro. El hemograma urgente informa: Leucocitos 550/uL con 8% de neutrófilos segmentados y 2% de baciliformes (Recuento Absoluto de Neutrófilos, RAN = 55 células/uL), Hb 9.8 g/dL, Plaquetas 72.000/uL y Creatinina 0.9 mg/dL. El score de MASCC calculado es de 18 puntos (< 21, alto riesgo). ¿Cuál es la conducta médica inmediata que debe ejecutarse dentro de los primeros 60 minutos de ingreso (\'Hora de Oro\') de acuerdo con los protocolos oncológicos y garantías GES?',
    options: [
      {
        id: 'A',
        text: 'Realizar un examen proctológico digital minucioso (tacto rectal) para descartar celulitis o flemón perianal oculto antes de administrar antibióticos orales ambulatorios'
      },
      {
        id: 'B',
        text: 'Iniciar esquema triple de amplio espectro con vancomicina, meropenem y anfotericina B de forma rutinaria e indiscriminada en el servicio de urgencias'
      },
      {
        id: 'C',
        text: 'Indicar paracetamol oral y citar a control en 24 horas al policlínico oncológico a la espera del crecimiento de los hemocultivos'
      },
      {
        id: 'D',
        text: 'Administrar Factor Estimulante de Colonias de Granulocitos (G-CSF) subcutáneo en monoterapia para revertir la neutropenia, postergando los antibióticos hasta tener un foco infeccioso confirmado'
      },
      {
        id: 'E',
        text: 'Tomar hemocultivos periféricos y a través de cada lumen del catéter venoso central, iniciar de inmediato monoterapia endovenosa con Cefepima o Piperacilina/Tazobactam y hospitalizar, contraindicando estrictamente el tacto rectal o medición rectal de temperatura'
      }
    ],
    correcta: 'E',
    explicacion: 'El paciente cursa una Neutropenia Febril de Alto Riesgo (RAN 55/uL < 500/uL y Temp ≥ 38.3 °C, con índice de MASCC 18 puntos < 21). Representa una emergencia médica oncológica máxima cubierta por garantías GES. La regla de la \'Hora de Oro\' exige tomar 2 frascos de hemocultivos periféricos más hemocultivos de cada lumen del catéter venoso central y administrar la primera dosis de antibiótico endovenoso bactericida antipseudomónico en MENOS de 60 minutos desde el ingreso hospitalario. La monoterapia empírica con Cefepima (2 g EV cada 8 h) o Piperacilina/Tazobactam (4.5 g EV cada 6 h) es el estándar internacional. Asimismo, en todo paciente neutropénico está ESTRICTAMENTE CONTRAINDICADO realizar tacto rectal, administrar supositorios o usar termómetros rectales, debido a que el más mínimo microtrauma de la mucosa anorrectal desprovista de neutrófilos permite la translocación masiva de bacterias entéricas a la circulación, desencadenando un shock séptico fatal.\n\nAnálisis de distractores:\n- Opción A: El tacto rectal está prohibido en pacientes neutropénicos por riesgo letal de bacteriemia por translocación; además, un paciente de alto riesgo (MASCC < 21) jamás puede manejarse ambulatoriamente con antibióticos orales.\n- Opción B: La vancomicina empírica solo se indica si hay shock séptico hemodinámico, flebitis/infección evidente del CVC o mucositis severa, y los antifúngicos se reservan ante fiebre persistente al 4°-7° día.\n- Opción C: Diferir los antibióticos 24 horas en neutropenia febril se asocia a una mortalidad mayor al 50% por shock séptico por bacilos gramnegativos.\n- Opción D: El G-CSF acelera la recuperación mieloide futura pero carece de efecto antimicrobiano agudo; su uso nunca reemplaza la terapia antibiótica urgente.'
  },
  {
    id: 'B4-Q15',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Perfil de Cinética de Hierro: Ferritina, Transferrina, TIBC y Saturación de Transferrina',
    perfilCode: '1.08.1.002',
    legalLevel: {
      dx: 'Específico',
      tx: 'Inicial',
      seg: 'Completo',
      ges: 'No GES directo · Examen de Laboratorio Perfil V3 (1.08.4.008)'
    },
    stem: 'Una mujer de 52 años con antecedente de artritis reumatoide de 8 años de evolución, en tratamiento con metotrexato y leflunomida, consulta por astenia y fatigabilidad progresiva. Al examen físico presenta palidez moderada y sinovitis activa con aumento de volumen y dolor en articulaciones interfalángicas proximales y muñecas. El hemograma revela: Hb 9.3 g/dL, Hto 28%, VCM 79 fL (microcitosis límite), HCM 26 pg, Leucocitos 8.200/uL y Plaquetas 410.000/uL. Los exámenes de cinética de hierro y marcadores inflamatorios muestran:\n- Ferremia: 25 mcg/dL (disminuida, VN 50 a 150)\n- Capacidad Total de Fijación de Hierro (TIBC): 215 mcg/dL (disminuida, VN 250 a 420)\n- Transferrina plasmática: 170 mg/dL (disminuida, VN 200 a 360)\n- Saturación de transferrina: 12% (disminuida, VN 20 a 50%)\n- Ferritina sérica: 480 ng/mL (marcadamente elevada, VN 15 a 150)\n- Proteína C Reactiva (PCR): 38 mg/L (elevada, VN < 5)\n¿Cuál es el diagnóstico más probable de esta anemia y el mecanismo fisiopatológico cardinal responsable de este perfil de hierro?',
    options: [
      {
        id: 'A',
        text: 'Anemia de enfermedad crónica (inflamación); caracterizada por bloqueo del hierro macrofágico mediado por aumento de hepcidina y síntesis hepática disminuida de transferrina'
      },
      {
        id: 'B',
        text: 'Anemia ferropénica pura; el aumento de ferritina corresponde a un error de laboratorio por hemólisis in vitro de la muestra'
      },
      {
        id: 'C',
        text: 'Hemocromatosis hereditaria secundaria; acumulación de hierro en depósitos reticuloendoteliales con descenso paradójico de la saturación'
      },
      {
        id: 'D',
        text: 'Beta-talasemia menor heterocigota; defecto genético en la síntesis de cadenas de globina sin alteración del metabolismo del hierro'
      },
      {
        id: 'E',
        text: 'Anemia sideroblástica congénita; falla enzimática en la síntesis del grupo hemo mitocondrial'
      }
    ],
    correcta: 'A',
    explicacion: 'El cuadro y el perfil de cinética de hierro corresponden al patrón clásico de Anemia de Enfermedad Crónica (o anemia por inflamación). Su mecanismo fisiopatológico cardinal está mediado por la sobreproducción de citoquinas proinflamatorias (principalmente Interleukina-6 y TNF-alfa) inducida por la artritis reumatoide activa. La IL-6 estimula al hígado a sintetizar y secretar masivamente hepcidina (el regulador hormonal negativo del hierro). La hepcidina se une a la ferroportina en los macrófagos del sistema reticuloendotelial y en los enterocitos duodenales, provocando su internalización y degradación; esto bloquea por completo la liberación del hierro desde los depósitos celulares hacia la circulación plasmática. En consecuencia, el hierro queda atrapado en los depósitos tisulares (ferritina muy elevada como reactante de fase aguda positivo, 480 ng/mL), mientras que el hierro disponible para la eritropoyesis disminuye (ferremia baja y saturación baja). Además, la transferrina es un reactante de fase aguda negativo, por lo que su síntesis hepática disminuye, resultando en una TIBC baja (< 250 mcg/dL), lo que diferencia inequívocamente este cuadro de la ferropenia pura.\n\nAnálisis de distractores:\n- Opción B: En la anemia ferropénica clásica la ferritina está disminuida (< 30 ng/mL) y la TIBC/transferrina se encuentra marcadamente aumentada (> 400 mcg/dL) como mecanismo compensatorio.\n- Opción C: La hemocromatosis hereditaria cursa con ferremia elevada y saturación de transferrina marcadamente alta (> 50-60%), no disminuida.\n- Opción D: En la beta-talasemia menor la microcitosis es desproporcionada para el grado de anemia (VCM < 65-70 fL con Hb > 10 g/dL) y el perfil de hierro es estrictamente normal.\n- Opción E: La anemia sideroblástica se acompaña de saturación de transferrina elevada y ferritina muy alta con presencia de sideroblastos en anillo en el mielograma.'
  },
  {
    id: 'B4-Q16',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Anemia Hemolítica Autoinmune (AHAI: Anticuerpos Calientes IgG vs Crioaglutininas IgM) y Test de Coombs Directo',
    perfilCode: '1.08.1.003',
    legalLevel: {
      dx: 'Sospecha',
      tx: 'Inicial',
      seg: 'Derivar',
      ges: 'No GES directo · Urgencia Hematológica de Nivel Terciario'
    },
    stem: 'Un hombre de 24 años consulta por astenia severa, ictericia conjuntival y orinas de color té oscuro (coluria/hemoglobinuria). Como antecedente relevante, hace 10 días presentó un cuadro respiratorio con tos seca, cefalea y fiebre tratado como neumonía atípica por Mycoplasma pneumoniae. En las últimas 48 horas nota que al exponerse al frío matinal presenta dolor y coloración azulada-violácea en los lóbulos de las orejas, punta nasal y pulpejos de los dedos de las manos (acrocianosis), la cual remite al calentarse. Al examen físico: PA 115/70 mmHg, FC 98 lpm, afebril, con palidez cutánea evidente, tinte ictérico escleral y leve esplenomegalia palpable a 1 cm bajo el reborde costal. Exámenes de laboratorio: Hb 7.6 g/dL, Hto 23%, VCM 102 fL, Reticulocitos 8.4% (anemia regenerativa), Leucocitos 9.800/uL, Plaquetas 220.000/uL, Bilirrubina total 4.2 mg/dL con predominio indirecto (3.5 mg/dL), LDH 1.250 UI/L y Haptoglobina sérica colapsada en < 5 mg/dL. Se solicita Test de Coombs Directo (prueba de antiglobulina directa) que resulta POSITIVO fuertemente para complemento (C3d) y NEGATIVO para IgG. ¿Cuál es el diagnóstico más probable y la conducta terapéutica inicial más adecuada?',
    options: [
      {
        id: 'A',
        text: 'Anemia hemolítica autoinmune por anticuerpos calientes (IgG); hospitalizar e iniciar prednisona oral a dosis de 1 a 1.5 mg/kg/día de inmediato'
      },
      {
        id: 'B',
        text: 'Anemia hemolítica autoinmune por crioaglutininas (anticuerpos fríos IgM); indicar protección estricta contra el frío y medidas de soporte, reconociendo que los corticoides sistémicos son ineficaces en esta entidad'
      },
      {
        id: 'C',
        text: 'Púrpura Trombocitopénico Trombótico; programar recambio plasmático urgente con plasma fresco congelado en UPC'
      },
      {
        id: 'D',
        text: 'Hemoglobinuria Paroxística Nocturna; solicitar citometría de flujo para CD55/CD59 y programar trasplante alogénico de médula ósea'
      },
      {
        id: 'E',
        text: 'Síndrome Urémico Hemolítico asociado a toxina Shiga; indicar diálisis peritoneal urgente y antibioterapia con ciprofloxacino'
      }
    ],
    correcta: 'B',
    explicacion: 'El cuadro corresponde a una Anemia Hemolítica Autoinmune (AHAI) por Crioaglutininas (o anticuerpos fríos). Típicamente está mediada por anticuerpos de isotipo IgM dirigidos contra el antígeno eritrocitario I/i, los cuales se unen al eritrocito a bajas temperaturas (< 37 °C) en las regiones acrales del cuerpo (orejas, nariz, dedos), desencadenando aglutinación vascular reversible (acrocianosis dolorosa) y fijando el complemento. Al regresar los hematíes a la circulación central a 37 °C, la IgM se disocia pero el complemento permanece fijado a la membrana celular, promoviendo hemólisis intravascular y extravascular hepática. La infección reciente por Mycoplasma pneumoniae (o virus de Epstein-Barr) es el gatillante postinfeccioso clásico. En el Test de Coombs Directo, el hallazgo característico es positividad exclusiva para C3d y negatividad para IgG. Es una REGLA TERAPÉUTICA CARDINAL recordar que la enfermedad por crioaglutininas NO responde a los glucocorticoides ni a la esplenectomía (a diferencia de la AHAI por anticuerpos calientes IgG). El pilar del manejo es evitar el frío y calentar al paciente; si el cuadro es grave o crónico, el tratamiento farmacológico de elección es Rituximab (anti-CD20).\n\nAnálisis de distractores:\n- Opción A: La AHAI por anticuerpos calientes está mediada por IgG (Coombs positivo para IgG), ocurre a 37 °C sin fenómeno de acrocianosis acral, se destruye predominantemente en el bazo y SÍ responde excelentemente a prednisona.\n- Opción C: El PTT cursa con Coombs negativo, trombocitopenia severa consumptiva y esquistocitos abundantes en frotis.\n- Opción D: La HPN es un defecto clonal adquirido del gen PIGA sin autoinmunidad (Coombs negativo).\n- Opción E: El SUH típico cursa tras diarrea disentérica con falla renal aguda oligoanúrica y trombocitopenia con Coombs negativo.'
  },
  {
    id: 'B4-Q17',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Trombocitopenias y Púrpura Trombocitopénica Inmune (PTI) del Adulto y Niño: Criterios, Sangrado y Terapia GES',
    perfilCode: '1.08.1.012',
    legalLevel: {
      dx: 'Sospecha',
      tx: 'Inicial',
      seg: 'Completo',
      ges: 'No GES directo · Programa de Inmunosupresión y Urgencia Hematológica'
    },
    stem: 'Una mujer de 26 años, sin antecedentes mórbidos ni uso previo de medicamentos, es traída al Servicio de Urgencias por un cuadro de 24 horas de evolución caracterizado por la aparición súbita de hematomas espontáneos en tronco y extremidades, epistaxis activa abundante que mancha la ropa y sangrado gingival espontáneo con presencia de ampollas hemorrágicas violáceas en la mucosa yugal bucal y bordes linguales (\'púrpura húmedo\'). Al examen físico: PA 118/74 mmHg, FC 88 lpm, lúcida, afebril. Se observan petequias confluentes en extremidades inferiores y equimosis múltiples. No se palpan adenopatías y el bazo no es palpable. Los exámenes de urgencia informan: Hb 11.8 g/dL, Leucocitos 6.900/uL con fórmula leucocitaria rigurosamente normal, Plaquetas 7.000/uL. Pruebas de coagulación: TP 12.2 segundos (INR 1.0) y TTPK 29 segundos (ambos normales). El frotis sanguíneo descarta agregados plaquetarios y esquistocitos, confirmando una trombocitopenia aislada severa con plaquetas grandes aisladas de regeneración. ¿Cuál es la conducta médica inmediata más adecuada para esta paciente?',
    options: [
      {
        id: 'A',
        text: 'Indicar reposo relativo en domicilio, evitar traumatismos y citar a control ambulatorio con nuevo hemograma en 7 días sin iniciar fármacos'
      },
      {
        id: 'B',
        text: 'Indicar transfusión de 10 unidades de concentrados de plaquetas como monoterapia exclusiva en urgencias sin administrar corticoides'
      },
      {
        id: 'C',
        text: 'Hospitalizar de urgencia e iniciar pulsos de corticoterapia (Dexametasona 40 mg/día por 4 días) asociados a Inmunoglobulina Endovenosa (IgEV 1 g/kg) por el alto riesgo de hemorragia grave del sistema nervioso central'
      },
      {
        id: 'D',
        text: 'Programar esplenectomía laparoscópica de urgencia en las primeras 24 horas de ingreso hospitalario'
      },
      {
        id: 'E',
        text: 'Iniciar aspirina en dosis antiagregantes bajas para mejorar la hemostasia plaquetaria residual'
      }
    ],
    correcta: 'C',
    explicacion: 'La paciente presenta una Púrpura Trombocitopénica Inmune (PTI) primaria del adulto con trombocitopenia severa (< 20.000/uL, en este caso 7.000/uL) y signos de hemorragia mucosa activa (\'púrpura húmedo\' evidenciado por ampollas hemorrágicas orales y epistaxis). La presencia de púrpura húmedo en una trombocitopenia profunda es un signo de alarma clínica crítica que anticipa un riesgo elevado de hemorragia intracraneal letal o digestiva masiva. La conducta médica inmediata e inaplazable es la hospitalización urgente y el tratamiento combinado de rescate con Corticoides a dosis altas (Dexametasona 40 mg al día por 4 días o Metilprednisolona) más Inmunoglobulina Endovenosa (IgEV a dosis de 1 g/kg/día por 1-2 días). La IgEV satura competitivamente los receptores Fc de los macrófagos esplénicos, frenando la destrucción plaquetaria y logrando un ascenso rápido y seguro del recuento plaquetario en 24 a 48 horas (mucho más veloz que los corticoides orales solos).\n\nAnálisis de distractores:\n- Opción A: Es una negligencia médica inaceptable; enviar al domicilio a una paciente con 7.000 plaquetas y sangrado mucocutáneo activo conlleva un riesgo inminente de muerte hemorrágica.\n- Opción B: Las plaquetas transfundidas solas en PTI son rápidamente destruidas en minutos a pocas horas por los autoanticuerpos circulantes; la transfusión plaquetaria se reserva estrictamente para hemorragias que amenazan la vida inmediata y siempre administrada en conjunto con IgEV y corticoides.\n- Opción D: La esplenectomía es una terapia de segunda línea para casos refractarios crónicos tras al menos 12 meses de evolución, jamás un tratamiento inicial en agudo.\n- Opción E: La aspirina inhibe la ciclooxigenasa plaquetaria y precipitaría un sangrado catastrófico fatal.'
  },
  {
    id: 'B4-Q18',
    specialtyKey: 'hematologia',
    specialtyName: 'Hematología',
    topicTitle: 'Leucemias Crónicas: Leucemia Mieloide Crónica (LMC, BCR-ABL) vs Leucemia Linfática Crónica (LLC)',
    perfilCode: '1.08.1.0010',
    legalLevel: {
      dx: 'Sospecha',
      tx: 'Inicial',
      seg: 'Derivar',
      ges: 'Garantía Explícita en Salud (GES N° 37): Leucemia en personas de 15 años y más (LMC)'
    },
    stem: 'Un hombre de 74 años, autovalente y asintomático, acude a su control cardiovascular en el CESFAM para renovación de recetas de antihipertensivos. No refiere astenia, fiebre, sudoración nocturna ni baja de peso. Al examen físico: PA 128/78 mmHg, FC 70 lpm, buen estado general. A la palpación cervical se detectan dos ganglios linfáticos de 1.2 cm, rodaderos, elásticos, móviles e indoloros, y un ganglio axilar izquierdo de 1.0 cm de iguales características. No se palpa hepatomegalia ni esplenomegalia. En el hemograma de control destaca: Hb 14.0 g/dL, Hto 42%, Plaquetas 225.000/uL, Leucocitos 39.000/uL con 86% de linfocitos maduros pequeños (recuento absoluto de linfocitos 33.540/uL). El frotis sanguíneo informa linfocitosis monomorfa madura con abundantes manchas de lisis nuclear o sombras celulares (Sombras de Gümprecht). La citometría de flujo en sangre periférica confirma una población clonal de linfocitos B maduros que coexpresan CD19, CD23 y CD5 (aberrante). ¿Cuál es el diagnóstico y la conducta terapéutica indicada de acuerdo con las guías clínicas internacionales y los protocolos hematológicos chilenos?',
    options: [
      {
        id: 'A',
        text: 'Leucemia Linfática Crónica en estadio temprano asintomático (estadio A de Binet / estadio 0-I de Rai); mantener conducta expectante y seguimiento clínico periódico (\'Watch and Wait\') sin quimioterapia'
      },
      {
        id: 'B',
        text: 'Leucemia Linfática Crónica en etapa avanzada; iniciar de inmediato inmuno-quimioterapia con esquema FCR (fludarabina, ciclofosfamida y rituximab)'
      },
      {
        id: 'C',
        text: 'Leucemia Mieloide Crónica; iniciar inmediatamente terapia dirigida con imatinib oral 400 mg/día bajo garantía GES N° 37'
      },
      {
        id: 'D',
        text: 'Linfoma de Hodgkin de predominio linfocítico; derivar de urgencia para quimioterapia esquema ABVD y radioterapia'
      },
      {
        id: 'E',
        text: 'Leucemia Linfoblástica Aguda de precursores B; hospitalizar de urgencia en aislamiento para quimioterapia de inducción y profilaxis intratecal'
      }
    ],
    correcta: 'A',
    explicacion: 'El paciente presenta una Leucemia Linfática Crónica (LLC), la leucemia más frecuente en adultos mayores en el mundo occidental. El diagnóstico se establece formalmente por la concurrencia de: 1) Linfocitosis clonal persistente ≥ 5.000/uL de células maduras; 2) Sombras de Gümprecht (células en cesta o restos nucleares de linfocitos frágiles rotos durante la extensión del frotis); 3) Citometría de flujo característica que coexpresa marcadores de línea B (CD19, CD20 débil, CD23) junto al antígeno T aberrante CD5. Según la clasificación pronóstica de Binet, el paciente se encuentra en Estadio A (< 3 áreas ganglionares comprometidas, sin anemia [Hb ≥ 10 g/dL] ni trombocitopenia [plaquetas ≥ 100.000/uL]). Múltiples ensayos clínicos aleatorizados han demostrado categóricamente que en el estadio Binet A asintomático, iniciar tratamiento con quimioterapia o agentes dirigidos NO prolonga la sobrevida global y solo añade toxicidad e infecciones oportunistas. La conducta estándar obligatoria es la observación clínica y hematológica periódica (\'Watch and Wait\'), reservando el tratamiento activo solo ante progresión a estadios B/C o aparición de síntomas B constitucionales o tiempo de duplicación linfocitaria acelerado (< 6 meses).\n\nAnálisis de distractores:\n- Opción B: El esquema FCR o inhibidores de BTK/Bcl-2 se reservan exclusivamente para estadios avanzados sintomáticos con falla medular (Binet C) o gran masa tumoral compresiva (Binet B sintomático).\n- Opción C: La Leucemia Mieloide Crónica cursa con leucocitosis de la serie granulocítica (mielocitos, metamielocitos, neutrófilos, basofilia) y presencia de la translocación BCR-ABL1 t(9;22), no con proliferación clonal de linfocitos B maduros.\n- Opción D: El linfoma de Hodgkin presenta adenopatías mediastínicas/cervicales progresivas con células gigantes de Reed-Sternberg en biopsia histológica ganglionar, no linfocitosis periférica monoclonal aislada.\n- Opción E: La LLA es una enfermedad aguda de blastos inmaduros (> 20%), que cursa con pancitopenia grave, sangrados y rápido deterioro general en cuestión de días o semanas.'
  }
];

// Verify perfilCode for Q18: in batch_input_4.json it is '1.08.1.010'
questions[17].perfilCode = '1.08.1.010';

const targetPath = path.resolve('books/data/temp_ensayo_batch_4.json');
fs.writeFileSync(targetPath, JSON.stringify(questions, null, 2), 'utf8');
console.log('SUCCESS: Generated and saved ' + questions.length + ' questions to ' + targetPath);
