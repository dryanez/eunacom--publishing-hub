# Banco vs app (chequeo cruzado)

Generado con `python3 -I books/scripts/banco_vs_app.py`: compara, pregunta a pregunta (mismo número), el banco `books/data/real_questions_by_code.json` con las reconstrucciones de la app (`eunacom-app-v2/public/data/reconstrucciones/*.json`, solo lectura). Clave = letra correcta; enunciado/alternativas se comparan sin ruido de plataforma («Sin contestar / Puntúa como…») ni ligaduras rotas.

## Resumen

| Examen | App | Banco |
|---|---|---|
| Julio 2013 | 180 | 180 |
| Julio 2015 | 179 | 179 |
| Julio 2016 | 180 | 180 |
| Diciembre 2017 | 180 | 180 |
| Julio 2017 | 180 | 180 |
| Diciembre 2018 | 180 | 180 |
| Julio 2018 | 180 | 180 |
| Diciembre 2019 | 180 | 180 |
| Julio 2019 | 179 | 180 |
| Agosto 2021 | 180 | 180 |
| Diciembre 2022 | 180 | 180 |
| Enero 2023 | 180 | 180 |
| Diciembre 2024 | 175 | 175 |
| Julio 2024 | 180 | 180 |
| Diciembre 2025 | 180 | 180 |
| Julio 2025 | 167 | 167 |

- Claves distintas: **64** (corregidas por el audit: **55**; origen desconocido: **9**).
- Enunciados con diferencia real: **15**. Alternativas con diferencia real: **7**. Cobertura distinta: **1**.

## 1. Clave distinta porque el audit la corrigió en el banco (`audit.clave_original` = clave de la app)

| Pregunta | Código | App | Banco (corregida) | Confianza | Motivo |
|---|---|---|---|---|---|
| Diciembre 2017 · P110 | 5.01.1.010 | D | C | alta | Misma viñeta que Dic 2019 P95 (clave C esquizoafectivo); aquí la clave D 'esquizofrenia' contradice su propia explicación (esquizoafectivo, opción C).… |
| Julio 2017 · P141 | 7.01.3.028 | C | D | alta | La efectividad del tamizaje se evalúa con mortalidad específica, letalidad/supervivencia se distorsionan por sesgo de adelanto (lead-time). Coherente … |
| Diciembre 2018 · P40 | 2.01.2.014 | A | E | alta | Explicación describe intoxicación por tricíclicos (conciencia, taquicardia, pupilas arreactivas) pero la clave es AINES, la correcta es E. |
| Diciembre 2018 · P85 | 3.01.1.003 | D | C | alta | Libro: ácidos biliares séricos totales son el estándar de oro de CIE, clave del banco (fosfatasas alcalinas) contradice libro y su propia explicación |
| Diciembre 2018 · P173 | 3.01.3.008 | A | D | alta | Cefalea con aura visual: combinados categoria 4 (libro), corresponde progestageno solo, la explicacion se contradice |
| Julio 2018 · P25 | 1.05.1.017 | E | D | alta | La clave E (Hemograma y VHS) no responde la pregunta. el diagnostico es EPOC (alternativa D) por clinica y VEF1/CVF 44-48% sin reversibilidad. falta a… |
| Julio 2018 · P72 | 1.03.1.010 | E | D | alta | Sospecha de Turner (talla baja, sin pubertad, coartacion): corresponde cariograma, no hemograma y VHS |
| Julio 2018 · P81 | 3.01.1.006 | C | B | alta | Enunciado y alternativas reparados (HCG estaba como alternativa E); clave B según la pauta de la fuente (ectópico no complicado, HCG<5000, <4 cm: meto… |
| Julio 2018 · P105 | 4.03.1.024 | D | C | alta | Masa testicular con ginecomastia en joven es cancer testicular (C), no espermatocele, la explicacion lo confirma y la alternativa E esta danada |
| Julio 2018 · P132 | 1.04.1.009 | C | D | alta | Clave C (parasitológico) contradice la explicación, alternativas pegadas con texto de chat, correcta toxinas A y B |
| Diciembre 2022 · P4 | 3.01.1.027 | D | B | alta | Enfermedad coronaria contraindica TRH según el libro, síntomas vasomotores se manejan con no hormonales (escitalopram). Dudas conocidas Dic 2022 P4. |
| Diciembre 2022 · P8 | 2.01.1.024 | B | E | alta | Conjuntivitis neonatal a los 15 días + neumonía afebril-subaguda con crepitaciones a los 2 meses = Chlamydia trachomatis (pregunta 2023 equivalente co… |
| Diciembre 2022 · P11 | 4.03.1.025 | C | D | alta | Cristales de estruvita y cálculos coraliformes: Proteus mirabilis (D); Campylobacter jejuni no produce cálculos. Contradice Ago 2021 P126 y Ene 2023 P… |
| Diciembre 2022 · P13 | 1.05.2.006 | A | C | alta | pH 7,26 y PaCO2 62 tras tratamiento: VMNI, oxigeno al 50% empeora la hipercapnia, explicacion generica sin contenido |
| Diciembre 2022 · P17 | 1.01.1.003 | E | B | alta | Cuadro de CIA clasica (soplo infantil, desdoblamiento fijo, crepitaciones), la clave E coartacion parece desplazada, explicacion con parrafo ajeno de … |
| Diciembre 2022 · P20 | 7.01.3.009 | B | C | alta | Muertes <28 días / nacidos vivos es mortalidad neonatal, la perinatal (libro) usa muertes fetales tardías + neonatales precoces, Ene2023 P3 da neonata… |
| Diciembre 2022 · P28 | 5.01.1.006 | C | A | alta | Sintomas de 10 dias tras el evento = trastorno por estrés agudo (TEPT exige >1 mes, libro psiq-09 y Ene 2023 P132); además la explicación es ajena (co… |
| Diciembre 2022 · P30 | 5.01.2.002 | E | D | alta | Agitación solo con agresión verbal, sin violencia física: el escalamiento del libro indica contención verbal/ambiental primero; la contención física e… |
| Diciembre 2022 · P31 | 7.01.3.039 | A | C | alta | Posta rural es APS, el COSAM es secundario. Error conocido en REVISION_CONTENIDO (Dic 2022 P31), incoherente con Ene 2023 P166 |
| Diciembre 2022 · P35 | 2.01.1.141 | A | B | alta | Cuadro típico de TEA (aislamiento, rigidez a cambios, hipersensibilidad a ruidos, orden de juguetes), discapacidad cognitiva no explica |
| Diciembre 2022 · P36 | 1.01.1.015 | E | A | alta | Clínica de insuficiencia cardíaca (ortopnea, crepitos) con HTA mal controlada: agregar IECA/ARA2 (losartán A), doxazosina está contraindicada/no recom… |
| Diciembre 2022 · P38 | 1.01.1.015 | B | C | alta | Edema bajo amlodipino con PA controlada: suspender amlodipino (igual que Ene-2023 P85, Dic-2019 P122, Jul-2019 P51), cambiar enalapril por losartán no… |
| Diciembre 2022 · P41 | 2.01.1.111 | C | A | alta | Seis hemangiomas: corresponde ecografía abdominal (libro derma-17 y otras 3 preguntas), RM espinal no es el estudio |
| Diciembre 2022 · P44 | 6.03.2.016 | A | D | alta | Perforación timpánica traumática por hisopo no se lava (riesgo de infección de oído medio), manejo es observación y control (como en la pregunta del 2… |
| Diciembre 2022 · P47 | 3.01.1.027 | B | A | alta | Disuria/dispareunia con mucosa atrófica sin síntomas vasomotores: estrógeno tópico vaginal (promestrieno), no estradiol oral. Dudas conocidas Dic 2022… |
| Diciembre 2022 · P54 | 1.09.1.014 | C | B | alta | Diabético con IP/C 2,2 (proteinuria significativa) y HTA: IECA (enalapril) de elección, la hidroclorotiazida no es primera línea (libro nefro/diab-20 … |
| Diciembre 2022 · P56 | 1.05.1.020 | B | E | alta | Membranas como hollejos de uva en trabajador agricola = hidatidosis, no aspergiloma, explicacion ajena |
| Diciembre 2022 · P57 | 3.01.1.029 | D | A | alta | Libro: BI-RADS 3 se controla con mamografía a 6 meses, PAAF no. Duda conocida Dic 2022 P57. Explicación habla de mastopatía fibroquística. |
| Diciembre 2022 · P58 | 6.02.1.010 | A | D | alta | Metamorfopsia y lectura difícil es DMRE (D), la clave A glaucoma no produce deformación y la explicación es genérica |
| Diciembre 2022 · P67 | 1.08.1.009 | E | D | alta | VCM 126, pancitopenia, bilirrubina indirecta y LDH muy alta con bradipsiquia en anciano = megaloblástica (D), igual que Dic 2018 P117 y Jul 2019 P138;… |
| Diciembre 2022 · P69 | 1.07.1.003 | B | E | alta | Trastorno conductual del sueño REM, fluctuación, ideas paranoides y rigidez = demencia por cuerpos de Lewy (E), no Alzheimer; explicación ajena (anemi… |
| Diciembre 2022 · P71 | 1.06.1.029 | A | E | alta | Adenoma de 6 mm ya resecado: no corresponde hemicolectomía, corresponde control con colonoscopía (5 años) según guías, incoherente con Ene 2023 P175. |
| Diciembre 2022 · P74 | 3.01.2.015 | E | C | alta | Cuadro clasico de rotura uterina (cesarea previa, cese de contracciones, sangrado escaso, bradicardia), acretismo se presenta con sangrado en 3er trim… |
| Diciembre 2022 · P75 | 6.03.1.015 | D | C | alta | Masa de línea media entre mentón y cartílago tiroides, blanda, de crecimiento lento = quiste del conducto tirogloso, adenoma submandibular es lateral |
| Diciembre 2022 · P77 | 2.01.1.037 | C | D | alta | Masa de flanco con hematuria macroscópica a los 4 años es tumor de Wilms, hepatoblastoma es tumor hepático (sin hematuria, masa derecha). Preguntas he… |
| Diciembre 2022 · P78 | 5.01.1.010 | B | E | alta | Fiebre 38,7, rigidez generalizada, obnubilación y disautonomía 3 días tras flufenazina depot: síndrome neuroléptico maligno (como Ene 2023 P109). La d… |
| Diciembre 2022 · P79 | 2.01.1.054 | E | B | alta | Lactante de 4 meses con soplo holosistólico III-IV/VI, mala ganancia ponderal, crepitaciones y hepatomegalia: CIV con insuficiencia cardíaca, no es so… |
| Diciembre 2022 · P81 | 1.04.3.009 | A | B | alta | VIH con cultivo MGIT positivo, clínica y Rx: TBC activa, se trata y no es profilaxis (REVISION_CONTENIDO lo marca) |
| Diciembre 2022 · P83 | 5.01.1.010 | B | A | alta | Delirio de intrusión de vecinos, MMSE 29/30, sin síntomas afectivos ni otros: trastorno delirante (igual a Ene 2023 P135 y Dic 2025 P71). La explicaci… |
| Diciembre 2022 · P84 | 1.10.1.027 | E | D | alta | Cuadro típico de trastorno conductual del sueño REM (actúa sus sueños, edad 75), clave E (síndrome confusional agudo) incoherente, explicación habla d… |
| Diciembre 2022 · P91 | 5.01.1.010 | C | D | alta | Adolescente con logorrea, irritabilidad, sueño de 5 h, conductas de riesgo y consumo ocasional de cannabis: episodio maníaco (trastorno bipolar), no e… |
| Diciembre 2022 · P92 | 5.01.1.028 | A | D | alta | Mala concentración desde el colegio, pierde objetos, se distrae en conversaciones, procrastina: TDAH inatento (D). No hay episodios maníacos/hipomanía… |
| Diciembre 2022 · P93 | 1.10.2.007 | B | C | alta | Dolor cervical con deporte + ptosis y miosis = Horner por disección carotídea (igual a Dic 2018/Agosto 2021 con clave disección), parálisis del 3er pa… |
| Diciembre 2022 · P94 | 1.09.1.007 | E | C | alta | Poliuria 12 L/día con Na 154 en usuario de litio = diabetes insípida nefrogénica por litio, SIADH produce hiponatremia y orina concentrada, incompatib… |
| Diciembre 2022 · P96 | 1.07.2.005 | C | B | alta | Neumonía con agitación y alucinaciones de curso agudo en anciano = delirium (B), no epilepsia temporal; explicación ajena. |
| Diciembre 2022 · P105 | 1.01.1.015 | D | E | alta | Diabético con HTA nueva: de elección IECA/ARA2 (valsartán E), atenolol no es de elección. Además RAC 2,6 no tiene unidad |
| Diciembre 2022 · P109 | 1.05.1.026 | E | A | alta | Espirometria obstructiva no reversible con aumento del diametro AP y sibilancias = EPOC, no fibrosis (restrictiva) |
| Diciembre 2022 · P140 | 4.02.3.006 | B | D | alta | Ángulos acetabulares de 28° y 26° a los 3 meses son normales (<30°); contradice Ago 2021 P40 y Ene 2023 P34 del propio banco. La correcta es mantener … |
| Diciembre 2022 · P148 | 5.01.1.014 | A | C | alta | Delirium tremens a las 48 h tras ingreso (temblor, desorientación, delirio): el fármaco de elección es benzodiacepina (lorazepam); la tiamina se da en… |
| Diciembre 2024 · P35 | 5.01.1.009 | A | E | alta | Enunciado cortado ('a. Bipolar') pero la respuesta intencionada es bipolar (opción E): EDM previo + antidepresivo + aumento de energía. Clave A (ansie… |
| Diciembre 2024 · P37 | 5.01.1.002 | A | B | alta | Enunciado contiene "a. TOC" (respuesta del reconstructor) y describe obsesión de pedofilia con acto compulsivo (repetir frase): TOC. La clave A (TAG) … |
| Julio 2025 · P72 | 2.01.1.046 | A | B | alta | Con vómitos sin relación con la alimentación y 'oliva pilórica' el diagnóstico es estenosis hipertrófica del píloro (B), la explicación de la propia p… |
| Julio 2025 · P85 | 3.01.2.014 | A | B | alta | RPM de 35 sem sin infeccion: interrumpir (induccion) desde 34 sem, conducta expectante es <34 sem, duda conocida ob-14 |
| Julio 2025 · P96 | 1.01.2.004 | A | B | alta | Con ICP primaria disponible a 60 min (<120 min) corresponde traslado para angioplastia primaria, no trombolisis, la propia explicación pone el umbral … |
| Julio 2025 · P166 | 1.02.1.002 | A | B | alta | DMG con mala respuesta a metformina: se agrega insulina, pioglitazona está contraindicada en embarazo y la propia explicación dice 'agregar insulina' |

## 2. Clave distinta de origen desconocido (sin `clave_original` que lo explique)

| Pregunta | Código | App | Banco | Audit en banco |
|---|---|---|---|---|
| Julio 2013 · P89 | 1.06.1.024 | C | B | OK (alta), propone B: Clave coherente con el libro. |
| Julio 2016 · P11 | 4.01.3.005 | A | E | OK (alta), propone E: Fiebre en 48 h con hipoventilación basal: atelectasia (regla de las 5 W). |
| Julio 2016 · P94 | 1.10.1.013 | D | A | OK (alta), propone A: Clave coherente con el libro y la guía. |
| Diciembre 2017 · P58 | 1.10.1.014 | D | C | OK (media), propone C: Clave coherente con el libro y la guía. |
| Julio 2018 · P20 | 5.01.1.021 | C | B | OK (alta), propone B: Clave de la pauta de la fuente (reconstrucción Guevara/Aliaga); coherente con el libro |
| Julio 2018 · P75 | 3.01.1.029 | B | A | OK (alta), propone A: Clave de la pauta de la fuente (reconstrucción Guevara/Aliaga); coherente con el libro |
| Julio 2018 · P176 | 2.01.1.121 | A | C | OK (alta), propone C: Hiperbilirrubinemia directa a los 7 días: pruebas hepáticas/estudio de colestasis |
| Diciembre 2019 · P51 | 1.03.1.021 | E | A | OK (media), propone A: Coherente con el tema |
| Diciembre 2025 · P109 | 5.01.1.036 | B | A | TEXTO_DANADO (alta), propone A: Clave A (adaptativo, estresor laboral <3 meses) correcta, pero alternativas A y E con caracteres corruptos («a… |

## 3. Enunciado distinto (diferencias de palabras, no de formato)

- **Julio 2018 · P2** (2.01.1.067): app «pro a e» → banco «probable»
- **Julio 2018 · P24** (1.05.1.003): app «» → banco «cuál de los siguientes es el examen más adecuado para proseguir con el estudio en este»
- **Julio 2018 · P46** (4.01.2.005): app «pre unta 46 sin contestar puntúa como 1 00 marcar pregunta» → banco «»
- **Julio 2018 · P50** (1.01.2.009): app «seleccione una o más de una» → banco «»
- **Julio 2018 · P75** (3.01.1.029): app «presentaun» → banco «presenta un»
- **Julio 2018 · P81** (3.01.1.006): app «libr» → banco «libre los niveles de hcg resultan 3 400 ui l cuál es la conducta más adecuada»
- **Julio 2018 · P140** (1.04.1.027): app «seleccione una o más de una» → banco «»
- **Julio 2018 · P155** (1.01.1.012): app «con uc a m s a ecua a» → banco «conducta más adecuada»
- **Julio 2018 · P157** (2.01.3.002): app «un a como marcar pregunta» → banco «»
- **Julio 2018 · P160** (1.11.1.012): app «pregunta 161 sin contestar puntúa como 1 00 marcar pregunta» → banco «»
- **Julio 2019 · P3** (1.01.2.004): app «los enunciados fueron algo» → banco «un paciente de 64 años con antecedente de hipertensión arterial consulta por dolor torácic…» | app «cortos que los de las últimas versiones» → banco «adecuada es»
- **Diciembre 2022 · P105** (1.01.1.015): app «8horas» → banco «8 horas»
- **Diciembre 2024 · P104** (2.01.3.001): app «que» → banco «qué alimento» | app «da» → banco «introduce en la dieta del niño»
- **Diciembre 2024 · P174** (4.01.1.055): app «forunculo que hacer a atb» → banco «un paciente consulta por un forúnculo cuál es la conducta más adecuada»
- **Diciembre 2025 · P23** (6.03.4.002): app «o88s» → banco «otitis»

## 4. Alternativas distintas

- **Julio 2018 · P20** (5.01.1.021): A: app «Ecológico» / banco «Trastorno conversivo»; B: app «Descriptivo» / banco «Trastorno disociativo»; C: app «Analítico» / banco «Trastorno somatomorfo» (+2 más)
- **Julio 2018 · P75** (3.01.1.029): A: app «Seguimiento con PAP» / banco «Ecografía mamaria»; B: app «Crioterapia» / banco «Mamografías bilaterales»; C: app «Cono cervical» / banco «Punción con aguja fina» (+2 más)
- **Julio 2018 · P81** (3.01.1.006): A: app «Los niveles de HCG resultan 3.400 UI/L. ¿Cuál es la conducta más adecu…» / banco «Controlar con ecografía en 48 horas»; B: app «Controlar con ecografía en 48 horas» / banco «Administrar metotrexato»; C: app «Adminstrar metotrexato» / banco «Controlar con HCG en 48 horas» (+2 más)
- **Julio 2018 · P140** (1.04.1.027): A: app «Rinofibroangioma bilateral» / banco «Ascaris lumbricoides»; B: app «Rinitis alérgica» / banco «Trichinella spiralis»; C: app «Enfermedad de von Willebrand» / banco «Giardia lamblia» (+2 más)
- **Julio 2018 · P172** (6.02.2.003): C: app «Neuro atía ó tica is uémica» / banco «Neuropatía óptica isquémica»
- **Julio 2019 · P3** (1.01.2.004): A: app «Ninguna de las anteriores es correcta» / banco «Solicitar enzimas cardíacas»; B: app «Todas las anteriores son correctas» / banco «Solicitar un angioTAC de tórax de inmediato»; C: app «No se dispone de información suficiente» / banco «Realizar tratamiento de reperfusión miocárdica de inmediato» (+2 más)
- **Diciembre 2024 · P174** (4.01.1.055): A: app «Drenar 175.​ Espirometría con VEF1/CVC 0,35% no mejorá post broncodila…» / banco «Drenaje»; B: app «Fibrosis pulmonar b.​ Insuficiencia cardiaca derecha ECG: 1.​ TPSV tra…» / banco «Antibióticos orales»; C: app «Insuficiencia cardíaca» / banco «Antibiótico tópico solo» (+2 más)

## 5. Cobertura

- EUNACOM Julio 2019 · Pregunta 4: está en el banco y no existe en la app
