# Cambios para la app: reconstrucciones corregidas

Generado por `books/scripts/limpiar_app_reconstrucciones.py`. Salida en `books/data/app_reconstrucciones/` (la app NO se modificó).
Se copia con `books/scripts/aplicar_a_app.sh` (con respaldo). Las claves del texto original de la app se cambian solo si el banco las corrigió (audit.aplicado)
y la app tenía la clave original; si difieren por otro motivo se deja la de la app y se anota (`revisar`).

Campos nuevos por pregunta (opcionales): `image` {src, credit, nota}, `excluir` (true: no usar), `revisar` (true: clave/enunciado dudoso), `audit_nota`.

topic_index.json: 8400 entradas actualizadas, 0 sin cambios (examen no procesado o id inexistente).

## eunacom-2013
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 1
  - P89: app C, banco original B, banco actual B (difiere del banco original)
- Explicaciones corregidas del banco: 17 (no transferidas por clave distinta: [89])
- Imágenes agregadas: 4: P25 (julio-2013_p25.jpg), P73 (julio-2013_p73.jpg), P90 (julio-2013_p90.jpg), P127 (julio-2013_p127.jpg)
- Excluir: 1: P42 (TEXTO_DANADO)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 29
  - Banco: P22 (CLAVE_DISCUTIBLE, propuesta A), P24 (CLAVE_DISCUTIBLE, propuesta B), P31 (MAL_VINCULADA, propuesta D), P44 (CLAVE_DISCUTIBLE, propuesta A), P45 (CLAVE_DISCUTIBLE, propuesta D), P46 (CLAVE_DISCUTIBLE, propuesta B), P48 (CLAVE_DISCUTIBLE, propuesta D), P55 (CLAVE_DISCUTIBLE, propuesta E), P70 (CLAVE_DISCUTIBLE, propuesta D), P77 (CLAVE_DISCUTIBLE, propuesta A), P78 (CLAVE_DISCUTIBLE, propuesta E), P83 (CLAVE_DISCUTIBLE, propuesta E), P84 (CLAVE_DISCUTIBLE, propuesta A), P85 (CLAVE_DISCUTIBLE, propuesta E), P87 (CLAVE_DISCUTIBLE, propuesta C), P101 (CLAVE_DISCUTIBLE, propuesta D), P104 (CLAVE_DISCUTIBLE, propuesta C), P106 (CLAVE_DISCUTIBLE, propuesta C), P108 (CLAVE_DISCUTIBLE, propuesta E), P113 (CLAVE_DISCUTIBLE, propuesta E), P130 (CLAVE_DISCUTIBLE, propuesta B), P142 (CLAVE_DISCUTIBLE, propuesta A), P149 (CLAVE_DISCUTIBLE, propuesta E), P156 (CLAVE_DISCUTIBLE, propuesta B), P159 (CLAVE_DISCUTIBLE, propuesta B)
  - Por comentario de la fuente: P8, P14, P19, P164

## eunacom-2022
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 39
  - P4: D -> B (Enfermedad coronaria contraindica TRH según el libro, síntomas vasomotores se manejan con no hormonales (escitalopram). Dudas conocidas Dic 2022 P4.)
  - P8: B -> E (Conjuntivitis neonatal a los 15 días + neumonía afebril-subaguda con crepitaciones a los 2 meses = Chlamydia trachomatis (pregunta 2023 equivalente con clave Chlamydia), SGB es de inicio precoz. Además la explicación es ajena (parto vaginal con tamizaje SGB))
  - P11: C -> D (Cristales de estruvita y cálculos coraliformes: Proteus mirabilis (D); Campylobacter jejuni no produce cálculos. Contradice Ago 2021 P126 y Ene 2023 P101.)
  - P13: A -> C (pH 7,26 y PaCO2 62 tras tratamiento: VMNI, oxigeno al 50% empeora la hipercapnia, explicacion generica sin contenido)
  - P17: E -> B (Cuadro de CIA clasica (soplo infantil, desdoblamiento fijo, crepitaciones), la clave E coartacion parece desplazada, explicacion con parrafo ajeno de asma)
  - P20: B -> C (Muertes <28 días / nacidos vivos es mortalidad neonatal, la perinatal (libro) usa muertes fetales tardías + neonatales precoces, Ene2023 P3 da neonatal)
  - P28: C -> A (Sintomas de 10 dias tras el evento = trastorno por estrés agudo (TEPT exige >1 mes, libro psiq-09 y Ene 2023 P132); además la explicación es ajena (coqueluche/azitromicina) y el enunciado está dañado ('de años', 'ace').)
  - P30: E -> D (Agitación solo con agresión verbal, sin violencia física: el escalamiento del libro indica contención verbal/ambiental primero; la contención física es último recurso (psiq-14; ya descartada en REVISION).)
  - P31: A -> C (Posta rural es APS, el COSAM es secundario. Error conocido en REVISION_CONTENIDO (Dic 2022 P31), incoherente con Ene 2023 P166)
  - P35: A -> B (Cuadro típico de TEA (aislamiento, rigidez a cambios, hipersensibilidad a ruidos, orden de juguetes), discapacidad cognitiva no explica)
  - P36: E -> A (Clínica de insuficiencia cardíaca (ortopnea, crepitos) con HTA mal controlada: agregar IECA/ARA2 (losartán A), doxazosina está contraindicada/no recomendada en IC (ALLHAT))
  - P38: B -> C (Edema bajo amlodipino con PA controlada: suspender amlodipino (igual que Ene-2023 P85, Dic-2019 P122, Jul-2019 P51), cambiar enalapril por losartán no resuelve el edema)
  - P41: C -> A (Seis hemangiomas: corresponde ecografía abdominal (libro derma-17 y otras 3 preguntas), RM espinal no es el estudio)
  - P44: A -> D (Perforación timpánica traumática por hisopo no se lava (riesgo de infección de oído medio), manejo es observación y control (como en la pregunta del 2023 #580))
  - P47: B -> A (Disuria/dispareunia con mucosa atrófica sin síntomas vasomotores: estrógeno tópico vaginal (promestrieno), no estradiol oral. Dudas conocidas Dic 2022 P47.)
  - P54: C -> B (Diabético con IP/C 2,2 (proteinuria significativa) y HTA: IECA (enalapril) de elección, la hidroclorotiazida no es primera línea (libro nefro/diab-20 nefropatía diabética).)
  - P56: B -> E (Membranas como hollejos de uva en trabajador agricola = hidatidosis, no aspergiloma, explicacion ajena)
  - P57: D -> A (Libro: BI-RADS 3 se controla con mamografía a 6 meses, PAAF no. Duda conocida Dic 2022 P57. Explicación habla de mastopatía fibroquística.)
  - P58: A -> D (Metamorfopsia y lectura difícil es DMRE (D), la clave A glaucoma no produce deformación y la explicación es genérica)
  - P67: E -> D (VCM 126, pancitopenia, bilirrubina indirecta y LDH muy alta con bradipsiquia en anciano = megaloblástica (D), igual que Dic 2018 P117 y Jul 2019 P138; sin blastos ni infiltrado descritos para LMA. Explicación ajena (vejiga).)
  - P69: B -> E (Trastorno conductual del sueño REM, fluctuación, ideas paranoides y rigidez = demencia por cuerpos de Lewy (E), no Alzheimer; explicación ajena (anemia ferropénica).)
  - P71: A -> E (Adenoma de 6 mm ya resecado: no corresponde hemicolectomía, corresponde control con colonoscopía (5 años) según guías, incoherente con Ene 2023 P175.)
  - P74: E -> C (Cuadro clasico de rotura uterina (cesarea previa, cese de contracciones, sangrado escaso, bradicardia), acretismo se presenta con sangrado en 3er trimestre o alumbramiento, explicacion de plantilla)
  - P75: D -> C (Masa de línea media entre mentón y cartílago tiroides, blanda, de crecimiento lento = quiste del conducto tirogloso, adenoma submandibular es lateral)
  - P77: C -> D (Masa de flanco con hematuria macroscópica a los 4 años es tumor de Wilms, hepatoblastoma es tumor hepático (sin hematuria, masa derecha). Preguntas hermanas (#112,#114) tienen Wilms)
  - P78: B -> E (Fiebre 38,7, rigidez generalizada, obnubilación y disautonomía 3 días tras flufenazina depot: síndrome neuroléptico maligno (como Ene 2023 P109). La distonía aguda no da fiebre ni obnubilación.)
  - P79: E -> B (Lactante de 4 meses con soplo holosistólico III-IV/VI, mala ganancia ponderal, crepitaciones y hepatomegalia: CIV con insuficiencia cardíaca, no es soplo funcional)
  - P81: A -> B (VIH con cultivo MGIT positivo, clínica y Rx: TBC activa, se trata y no es profilaxis (REVISION_CONTENIDO lo marca))
  - P83: B -> A (Delirio de intrusión de vecinos, MMSE 29/30, sin síntomas afectivos ni otros: trastorno delirante (igual a Ene 2023 P135 y Dic 2025 P71). La explicación es de depresión (ajena).)
  - P84: E -> D (Cuadro típico de trastorno conductual del sueño REM (actúa sus sueños, edad 75), clave E (síndrome confusional agudo) incoherente, explicación habla de otra letra)
  - P91: C -> D (Adolescente con logorrea, irritabilidad, sueño de 5 h, conductas de riesgo y consumo ocasional de cannabis: episodio maníaco (trastorno bipolar), no esquizofrenia (sin alucinaciones, deterioro ni duración).)
  - P92: A -> D (Mala concentración desde el colegio, pierde objetos, se distrae en conversaciones, procrastina: TDAH inatento (D). No hay episodios maníacos/hipomaníacos descritos para bipolar (A). Explicación genérica. psiq-18.)
  - P93: B -> C (Dolor cervical con deporte + ptosis y miosis = Horner por disección carotídea (igual a Dic 2018/Agosto 2021 con clave disección), parálisis del 3er par da midriasis, no miosis)
  - P94: E -> C (Poliuria 12 L/día con Na 154 en usuario de litio = diabetes insípida nefrogénica por litio, SIADH produce hiponatremia y orina concentrada, incompatible.)
  - P96: C -> B (Neumonía con agitación y alucinaciones de curso agudo en anciano = delirium (B), no epilepsia temporal; explicación ajena.)
  - P105: D -> E (Diabético con HTA nueva: de elección IECA/ARA2 (valsartán E), atenolol no es de elección. Además RAC 2,6 no tiene unidad)
  - P109: E -> A (Espirometria obstructiva no reversible con aumento del diametro AP y sibilancias = EPOC, no fibrosis (restrictiva))
  - P140: B -> D (Ángulos acetabulares de 28° y 26° a los 3 meses son normales (<30°); contradice Ago 2021 P40 y Ene 2023 P34 del propio banco. La correcta es mantener control habitual (D).)
  - P148: A -> C (Delirium tremens a las 48 h tras ingreso (temblor, desorientación, delirio): el fármaco de elección es benzodiacepina (lorazepam); la tiamina se da en paralelo pero no controla la agitación. Explicación ajena (demencia/donepezilo).)
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 59
- Imágenes agregadas: 5: P22 (diciembre-2022_p22.jpg), P32 (diciembre-2022_p32.jpg), P42 (diciembre-2022_p42.jpg), P173 (diciembre-2022_p173.jpg), P176 (diciembre-2022_p176.jpg)
- Excluir: 4: P99 (TEXTO_DANADO), P124 (FALTA_IMAGEN), P142 (FALTA_IMAGEN), P151 (TEXTO_DANADO)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 46
  - Banco: P1 (CLAVE_ERRONEA, propuesta D), P2 (CLAVE_DISCUTIBLE, propuesta C), P3 (CLAVE_DISCUTIBLE, propuesta C), P6 (CLAVE_ERRONEA, propuesta D), P7 (CLAVE_ERRONEA, propuesta A), P9 (CLAVE_ERRONEA, propuesta B), P10 (CLAVE_DISCUTIBLE, propuesta A), P12 (CLAVE_ERRONEA, propuesta E), P15 (CLAVE_DISCUTIBLE, propuesta B), P16 (CLAVE_DISCUTIBLE, propuesta E), P18 (CLAVE_ERRONEA, propuesta E), P25 (CLAVE_ERRONEA, propuesta E), P34 (CLAVE_ERRONEA, propuesta B), P39 (CLAVE_DISCUTIBLE, propuesta E), P43 (CLAVE_ERRONEA, propuesta A), P45 (CLAVE_ERRONEA, propuesta A), P46 (CLAVE_ERRONEA, propuesta A), P48 (CLAVE_ERRONEA, propuesta E), P53 (CLAVE_ERRONEA, propuesta B), P55 (CLAVE_ERRONEA, propuesta C), P60 (CLAVE_ERRONEA, propuesta D), P61 (CLAVE_ERRONEA, propuesta B), P62 (CLAVE_DISCUTIBLE, propuesta E), P64 (CLAVE_ERRONEA, propuesta A), P65 (CLAVE_ERRONEA, propuesta C), P66 (CLAVE_DISCUTIBLE, propuesta C), P68 (CLAVE_ERRONEA, propuesta D), P70 (CLAVE_ERRONEA, propuesta B), P72 (CLAVE_DISCUTIBLE, propuesta E), P73 (CLAVE_ERRONEA, propuesta E), P85 (CLAVE_ERRONEA, propuesta A), P86 (CLAVE_DISCUTIBLE, propuesta B), P87 (CLAVE_ERRONEA, propuesta B), P88 (CLAVE_DISCUTIBLE, propuesta C), P100 (CLAVE_DISCUTIBLE, propuesta A), P101 (CLAVE_DISCUTIBLE, propuesta B), P102 (CLAVE_ERRONEA, propuesta A), P104 (CLAVE_ERRONEA, propuesta B), P118 (CLAVE_DISCUTIBLE, propuesta D), P122 (CLAVE_ERRONEA, propuesta C), P133 (CLAVE_DISCUTIBLE, propuesta A), P145 (CLAVE_DISCUTIBLE, propuesta B), P153 (CLAVE_DISCUTIBLE, propuesta A), P162 (CLAVE_DISCUTIBLE, propuesta E), P165 (CLAVE_DISCUTIBLE, propuesta B), P169 (MAL_VINCULADA, propuesta A)

## eunacom-ago-2021
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 13
- Imágenes agregadas: 7: P30 (agosto-2021_p30.jpg), P93 (agosto-2021_p93.jpg), P99 (agosto-2021_p99.jpg), P125 (agosto-2021_p125.jpg), P137 (agosto-2021_p137.jpg), P138 (agosto-2021_p138.jpg), P177 (agosto-2021_p177.jpg)
- Excluir: 2: P4 (FALTA_IMAGEN), P41 (TEXTO_DANADO)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 10
  - Banco: P27 (CLAVE_ERRONEA, propuesta A), P52 (CLAVE_DISCUTIBLE, propuesta B), P78 (CLAVE_DISCUTIBLE, propuesta B), P92 (CLAVE_DISCUTIBLE, propuesta B), P97 (CLAVE_DISCUTIBLE, propuesta D), P102 (CLAVE_DISCUTIBLE, propuesta A), P105 (CLAVE_DISCUTIBLE, propuesta C), P140 (CLAVE_DISCUTIBLE, propuesta B), P154 (CLAVE_DISCUTIBLE, propuesta B), P164 (CLAVE_DISCUTIBLE, propuesta A)

## eunacom-dic-2017
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Alternativas con letra fuera de orden en la fuente (se usó la posición): [57]
- Claves cambiadas: 1
  - P110: D -> C (Misma viñeta que Dic 2019 P95 (clave C esquizoafectivo); aquí la clave D 'esquizofrenia' contradice su propia explicación (esquizoafectivo, opción C). Ya descartada en psiq-10. Ambas son discutibles (ver P95).)
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 1
  - P58: app D, banco original C, banco actual C (difiere del banco original)
- Explicaciones corregidas del banco: 26 (no transferidas por clave distinta: [58])
- Imágenes agregadas: 0
- Excluir: 3: P88 (TEXTO_DANADO), P126 (TEXTO_DANADO), P57 (alternativas con letras irregulares en la fuente)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 30
  - Banco: P1 (CLAVE_DISCUTIBLE, propuesta A), P13 (CLAVE_DISCUTIBLE, propuesta E), P15 (CLAVE_DISCUTIBLE, propuesta A), P34 (CLAVE_DISCUTIBLE, propuesta A), P48 (CLAVE_DISCUTIBLE, propuesta B), P50 (CLAVE_DISCUTIBLE, propuesta B), P52 (CLAVE_DISCUTIBLE, propuesta A), P54 (CLAVE_DISCUTIBLE, propuesta E), P66 (CLAVE_ERRONEA, propuesta C), P67 (CLAVE_DISCUTIBLE, propuesta C), P86 (CLAVE_DISCUTIBLE, propuesta ), P93 (CLAVE_DISCUTIBLE, propuesta E), P94 (CLAVE_DISCUTIBLE, propuesta E), P111 (CLAVE_DISCUTIBLE, propuesta C), P113 (CLAVE_DISCUTIBLE, propuesta C), P124 (CLAVE_DISCUTIBLE, propuesta D), P150 (CLAVE_DISCUTIBLE, propuesta E), P158 (CLAVE_DISCUTIBLE, propuesta A), P160 (CLAVE_ERRONEA, propuesta B), P162 (CLAVE_DISCUTIBLE, propuesta C), P164 (CLAVE_DISCUTIBLE, propuesta A), P166 (CLAVE_DISCUTIBLE, propuesta D), P170 (CLAVE_DISCUTIBLE, propuesta D), P173 (CLAVE_DISCUTIBLE, propuesta A), P175 (CLAVE_DISCUTIBLE, propuesta E)
  - Por comentario de la fuente: P29, P76, P163, P169, P180

## eunacom-dic-2018
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 3
  - P40: A -> E (Explicación describe intoxicación por tricíclicos (conciencia, taquicardia, pupilas arreactivas) pero la clave es AINES, la correcta es E.)
  - P85: D -> C (Libro: ácidos biliares séricos totales son el estándar de oro de CIE, clave del banco (fosfatasas alcalinas) contradice libro y su propia explicación)
  - P173: A -> D (Cefalea con aura visual: combinados categoria 4 (libro), corresponde progestageno solo, la explicacion se contradice)
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 20
- Imágenes agregadas: 4: P94 (diciembre-2018_p94.jpg), P95 (diciembre-2018_p95.jpg), P143 (diciembre-2018_p143.jpg), P153 (diciembre-2018_p153.jpg)
- Excluir: 0
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 23
  - Banco: P7 (CLAVE_DISCUTIBLE, propuesta D), P11 (CLAVE_DISCUTIBLE, propuesta A), P14 (CLAVE_DISCUTIBLE, propuesta B), P42 (CLAVE_DISCUTIBLE, propuesta C), P47 (CLAVE_DISCUTIBLE, propuesta C), P60 (CLAVE_DISCUTIBLE, propuesta C), P66 (CLAVE_DISCUTIBLE, propuesta D), P78 (CLAVE_ERRONEA, propuesta C), P96 (CLAVE_DISCUTIBLE, propuesta ), P101 (CLAVE_DISCUTIBLE, propuesta A), P107 (CLAVE_DISCUTIBLE, propuesta D), P110 (CLAVE_DISCUTIBLE, propuesta E), P118 (CLAVE_DISCUTIBLE, propuesta A), P135 (CLAVE_DISCUTIBLE, propuesta D), P148 (CLAVE_DISCUTIBLE, propuesta A), P151 (CLAVE_DISCUTIBLE, propuesta D), P167 (MAL_VINCULADA, propuesta B), P170 (CLAVE_DISCUTIBLE, propuesta B), P178 (CLAVE_DISCUTIBLE, propuesta D), P179 (CLAVE_DISCUTIBLE, propuesta C)
  - Por comentario de la fuente: P106, P168, P169

## eunacom-dic-2019
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 1
  - P51: app E, banco original A, banco actual A (difiere del banco original)
- Explicaciones corregidas del banco: 5 (no transferidas por clave distinta: [51])
- Imágenes agregadas: 6: P26 (diciembre-2019_p26.jpg), P43 (diciembre-2019_p43.jpg), P174 (diciembre-2019_p174.jpg), P177 (diciembre-2019_p177.jpg), P178 (diciembre-2019_p178.jpg), P180 (diciembre-2019_p180.jpg)
- Excluir: 0
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 23
  - Banco: P9 (CLAVE_DISCUTIBLE, propuesta D), P18 (CLAVE_DISCUTIBLE, propuesta E), P19 (CLAVE_DISCUTIBLE, propuesta E), P20 (CLAVE_DISCUTIBLE, propuesta A), P24 (CLAVE_DISCUTIBLE, propuesta E), P52 (CLAVE_DISCUTIBLE, propuesta C), P77 (CLAVE_DISCUTIBLE, propuesta C), P78 (CLAVE_DISCUTIBLE, propuesta C), P82 (CLAVE_DISCUTIBLE, propuesta C), P85 (CLAVE_DISCUTIBLE, propuesta D), P88 (CLAVE_DISCUTIBLE, propuesta B), P95 (CLAVE_DISCUTIBLE, propuesta C (A defendible)), P96 (CLAVE_DISCUTIBLE, propuesta D), P108 (CLAVE_DISCUTIBLE, propuesta C), P111 (MAL_VINCULADA, propuesta B), P113 (CLAVE_DISCUTIBLE, propuesta A), P115 (CLAVE_DISCUTIBLE, propuesta D), P143 (CLAVE_DISCUTIBLE, propuesta C), P146 (CLAVE_DISCUTIBLE, propuesta C), P167 (CLAVE_DISCUTIBLE, propuesta C), P172 (CLAVE_DISCUTIBLE, propuesta D)
  - Por comentario de la fuente: P6, P156

## eunacom-dic-2024
- Preguntas: 180 (emparejadas con el banco: 175; sin emparejar: 0)
- Texto limpiado: 175 preguntas
- Alternativas con letra fuera de orden en la fuente (se usó la posición): [1, 3, 6, 9, 10, 16, 17, 19, 20, 24, 27, 33, 38, 45, 47, 49, 51, 58, 63, 66, 70, 73, 74, 87, 91, 100, 105, 109, 115, 127, 133, 134, 139, 150, 153, 159, 164, 169, 171, 174]
- Enunciado/alternativas tomados del banco (la app los tenía corridos o dañados): [1, 3, 5, 6, 8, 9, 10, 13, 14, 16, 17, 19, 20, 21, 24, 27, 28, 30, 31, 33, 34, 37, 38, 45, 46, 47, 49, 51, 55, 58, 59, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 78, 80, 81, 85, 86, 87, 88, 89, 90, 91, 95, 96, 97, 100, 101, 104, 105, 109, 114, 115, 116, 117, 119, 126, 127, 131, 132, 133, 134, 135, 136, 139, 142, 143, 145, 147, 149, 150, 153, 155, 156, 159, 160, 163, 164, 165, 167, 169, 170, 171, 172, 174]
- Claves cambiadas: 1
  - P35: A -> E (Enunciado cortado ('a. Bipolar') pero la respuesta intencionada es bipolar (opción E): EDM previo + antidepresivo + aumento de energía. Clave A (ansiedad generalizada) absurda; la explicación es ajena (intoxicación por litio).)
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 11
- Imágenes agregadas: 0
- Excluir: 0
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 5
  - Banco: P39 (CLAVE_ERRONEA, propuesta C), P40 (CLAVE_ERRONEA, propuesta B), P82 (CLAVE_DISCUTIBLE, propuesta A), P106 (CLAVE_DISCUTIBLE, propuesta B), P138 (CLAVE_DISCUTIBLE, propuesta B)

## eunacom-dic-2025
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 1
  - P109: app B, banco original A, banco actual A (difiere del banco original)
- Explicaciones corregidas del banco: 20 (no transferidas por clave distinta: [109])
- Imágenes agregadas: 6: P4 (diciembre-2025_p4.jpg), P26 (diciembre-2025_p26.jpg), P44 (diciembre-2025_p44.jpg), P80 (diciembre-2025_p80.jpg), P138 (diciembre-2025_p138.jpg), P162 (diciembre-2025_p162.jpg)
- Excluir: 2: P14 (FALTA_IMAGEN), P78 (TEXTO_DANADO)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 14
  - Banco: P22 (CLAVE_DISCUTIBLE, propuesta E), P24 (CLAVE_DISCUTIBLE, propuesta B), P40 (CLAVE_DISCUTIBLE, propuesta D), P47 (CLAVE_DISCUTIBLE, propuesta A), P53 (CLAVE_DISCUTIBLE, propuesta C), P91 (CLAVE_DISCUTIBLE, propuesta B), P100 (CLAVE_DISCUTIBLE, propuesta B), P127 (CLAVE_DISCUTIBLE, propuesta A), P161 (CLAVE_DISCUTIBLE, propuesta D), P165 (CLAVE_DISCUTIBLE, propuesta D), P178 (CLAVE_DISCUTIBLE, propuesta B)
  - Por comentario de la fuente: P17, P104, P120

## eunacom-ene-2023
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 35
- Imágenes agregadas: 1: P115 (enero-2023_p115.jpg)
- Excluir: 0
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 12
  - Banco: P13 (CLAVE_DISCUTIBLE, propuesta A), P20 (CLAVE_DISCUTIBLE, propuesta D), P44 (CLAVE_ERRONEA, propuesta C), P45 (CLAVE_DISCUTIBLE, propuesta B), P54 (CLAVE_DISCUTIBLE, propuesta C), P68 (CLAVE_DISCUTIBLE, propuesta A), P75 (CLAVE_DISCUTIBLE, propuesta B), P89 (CLAVE_DISCUTIBLE, propuesta D), P92 (CLAVE_DISCUTIBLE, propuesta C), P111 (CLAVE_DISCUTIBLE, propuesta A), P127 (CLAVE_ERRONEA, propuesta D), P168 (CLAVE_DISCUTIBLE, propuesta B)

## eunacom-jul-2015
- Preguntas: 179 (emparejadas con el banco: 179; sin emparejar: 0)
- Texto limpiado: 179 preguntas
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 12
- Imágenes agregadas: 2: P39 (julio-2015_p39.jpg), P169 (julio-2015_p169.jpg)
- Excluir: 1: P89 (FALTA_IMAGEN)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 22
  - Banco: P14 (CLAVE_DISCUTIBLE, propuesta A), P18 (CLAVE_DISCUTIBLE, propuesta C), P29 (MAL_VINCULADA, propuesta E), P51 (CLAVE_DISCUTIBLE, propuesta A), P61 (CLAVE_DISCUTIBLE, propuesta C), P72 (CLAVE_DISCUTIBLE, propuesta A), P86 (CLAVE_DISCUTIBLE, propuesta B), P90 (CLAVE_DISCUTIBLE, propuesta A), P91 (CLAVE_DISCUTIBLE, propuesta A), P96 (CLAVE_DISCUTIBLE, propuesta C), P108 (CLAVE_DISCUTIBLE, propuesta E), P115 (CLAVE_DISCUTIBLE, propuesta D), P120 (CLAVE_DISCUTIBLE, propuesta C), P136 (CLAVE_DISCUTIBLE, propuesta A), P140 (CLAVE_ERRONEA, propuesta D), P141 (CLAVE_DISCUTIBLE, propuesta E), P163 (CLAVE_DISCUTIBLE, propuesta B), P164 (CLAVE_DISCUTIBLE, propuesta D)
  - Por comentario de la fuente: P132, P133, P135, P150

## eunacom-jul-2016
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 2
  - P11: app A, banco original E, banco actual E (difiere del banco original)
  - P94: app D, banco original A, banco actual A (difiere del banco original)
- Explicaciones corregidas del banco: 3 (no transferidas por clave distinta: [11, 94])
- Imágenes agregadas: 5: P10 (julio-2016_p10.jpg), P43 (julio-2016_p43.jpg), P145 (julio-2016_p145.jpg), P163 (julio-2016_p163.jpg), P178 (julio-2016_p178.jpg)
- Excluir: 3: P26 (FALTA_IMAGEN), P70 (FALTA_IMAGEN), P77 (TEXTO_DANADO)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 27
  - Banco: P9 (CLAVE_DISCUTIBLE, propuesta E), P24 (CLAVE_DISCUTIBLE, propuesta E), P37 (CLAVE_DISCUTIBLE, propuesta D), P42 (CLAVE_DISCUTIBLE, propuesta E), P49 (CLAVE_DISCUTIBLE, propuesta D), P52 (CLAVE_DISCUTIBLE, propuesta B), P64 (CLAVE_DISCUTIBLE, propuesta B), P66 (CLAVE_ERRONEA, propuesta A), P71 (CLAVE_DISCUTIBLE, propuesta B), P75 (CLAVE_DISCUTIBLE, propuesta E), P80 (CLAVE_DISCUTIBLE, propuesta E), P88 (CLAVE_DISCUTIBLE, propuesta A), P93 (CLAVE_ERRONEA, propuesta C), P99 (CLAVE_DISCUTIBLE, propuesta D), P101 (CLAVE_DISCUTIBLE, propuesta C), P123 (CLAVE_DISCUTIBLE, propuesta B), P125 (CLAVE_ERRONEA, propuesta E), P126 (CLAVE_DISCUTIBLE, propuesta B), P131 (CLAVE_DISCUTIBLE, propuesta D), P136 (CLAVE_DISCUTIBLE, propuesta C), P143 (CLAVE_DISCUTIBLE, propuesta A), P147 (CLAVE_DISCUTIBLE, propuesta B), P153 (CLAVE_DISCUTIBLE, propuesta D)
  - Por comentario de la fuente: P4, P65, P109, P110

## eunacom-jul-2017
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 1
  - P141: C -> D (La efectividad del tamizaje se evalúa con mortalidad específica, letalidad/supervivencia se distorsionan por sesgo de adelanto (lead-time). Coherente con Ago 2021 P6 (clave D) y Dic 2025 P118)
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 17
- Imágenes agregadas: 6: P25 (julio-2017_p25.jpg), P30 (julio-2017_p30.jpg), P71 (julio-2017_p71.jpg), P142 (julio-2017_p142.jpg), P143 (julio-2017_p143.jpg), P163 (julio-2017_p163.jpg)
- Excluir: 1: P127 (FALTA_IMAGEN)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 25
  - Banco: P4 (CLAVE_DISCUTIBLE, propuesta A), P5 (CLAVE_DISCUTIBLE, propuesta C), P9 (CLAVE_DISCUTIBLE, propuesta E), P14 (CLAVE_DISCUTIBLE, propuesta D), P17 (CLAVE_DISCUTIBLE, propuesta C), P26 (CLAVE_DISCUTIBLE, propuesta C), P38 (CLAVE_ERRONEA, propuesta C), P48 (CLAVE_DISCUTIBLE, propuesta D), P68 (CLAVE_DISCUTIBLE, propuesta C), P73 (CLAVE_DISCUTIBLE, propuesta A), P83 (CLAVE_DISCUTIBLE, propuesta B), P84 (CLAVE_DISCUTIBLE, propuesta C), P107 (CLAVE_DISCUTIBLE, propuesta C), P113 (CLAVE_DISCUTIBLE, propuesta D), P116 (CLAVE_DISCUTIBLE, propuesta D), P134 (CLAVE_DISCUTIBLE, propuesta D), P138 (CLAVE_DISCUTIBLE, propuesta A), P150 (CLAVE_DISCUTIBLE, propuesta C), P153 (CLAVE_DISCUTIBLE, propuesta E), P155 (CLAVE_DISCUTIBLE, propuesta A), P169 (CLAVE_DISCUTIBLE, propuesta A), P172 (CLAVE_DISCUTIBLE, propuesta B)
  - Por comentario de la fuente: P25, P41, P66

## eunacom-jul-2018
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Alternativas con letra fuera de orden en la fuente (se usó la posición): [25, 61, 72, 81, 105, 122, 131, 139, 141, 145]
- Enunciado/alternativas tomados del banco (la app los tenía corridos o dañados): [20, 75, 81, 140]
- Claves cambiadas: 4
  - P25: E -> D (La clave E (Hemograma y VHS) no responde la pregunta. el diagnostico es EPOC (alternativa D) por clinica y VEF1/CVF 44-48% sin reversibilidad. falta ademas la Rx de torax)
  - P72: E -> D (Sospecha de Turner (talla baja, sin pubertad, coartacion): corresponde cariograma, no hemograma y VHS)
  - P105: D -> C (Masa testicular con ginecomastia en joven es cancer testicular (C), no espermatocele, la explicacion lo confirma y la alternativa E esta danada)
  - P132: C -> D (Clave C (parasitológico) contradice la explicación, alternativas pegadas con texto de chat, correcta toxinas A y B)
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 2
  - P81: app B, banco original C, banco actual B (banco cambió su clave pero la app ya difería)
  - P176: app A, banco original C, banco actual C (difiere del banco original)
- Explicaciones corregidas del banco: 8 (no transferidas por clave distinta: [176])
- Imágenes agregadas: 13: P13 (julio-2018_p13.jpg), P14 (julio-2018_p14.jpg), P16 (julio-2018_p16.jpg), P36 (julio-2018_p36.jpg), P51 (julio-2018_p51.jpg), P73 (julio-2018_p73.jpg), P94 (julio-2018_p94.jpg), P95 (julio-2018_p95.jpg), P102 (julio-2018_p102.jpg), P103 (julio-2018_p103.jpg), P108 (julio-2018_p108.jpg), P109 (julio-2018_p109.jpg), P150 (julio-2018_p150.jpg)
- Excluir: 19: P12 (TEXTO_DANADO), P24 (FALTA_IMAGEN), P33 (TEXTO_DANADO), P40 (TEXTO_DANADO), P44 (TEXTO_DANADO), P48 (FALTA_IMAGEN), P50 (FALTA_IMAGEN), P55 (TEXTO_DANADO), P60 (TEXTO_DANADO), P100 (TEXTO_DANADO), P107 (TEXTO_DANADO), P120 (TEXTO_DANADO), P131 (TEXTO_DANADO), P139 (TEXTO_DANADO), P141 (TEXTO_DANADO), P146 (TEXTO_DANADO), P61 (alternativas con letras irregulares en la fuente), P122 (alternativas con letras irregulares en la fuente), P145 (alternativas con letras irregulares en la fuente)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 15
  - Banco: P9 (CLAVE_DISCUTIBLE, propuesta D), P15 (CLAVE_DISCUTIBLE, propuesta B), P31 (CLAVE_DISCUTIBLE, propuesta C), P41 (CLAVE_ERRONEA, propuesta A), P52 (MAL_VINCULADA, propuesta E), P66 (CLAVE_ERRONEA, propuesta E), P76 (CLAVE_DISCUTIBLE, propuesta B), P80 (MAL_VINCULADA, propuesta B), P92 (CLAVE_DISCUTIBLE, propuesta C), P116 (CLAVE_DISCUTIBLE, propuesta C), P122 (CLAVE_ERRONEA, propuesta E), P143 (CLAVE_DISCUTIBLE, propuesta C), P148 (CLAVE_ERRONEA, propuesta B), P179 (CLAVE_DISCUTIBLE, propuesta D)
  - Por comentario de la fuente: P100

## eunacom-jul-2019
- Preguntas: 179 (emparejadas con el banco: 179; sin emparejar: 0)
- Texto limpiado: 179 preguntas
- Enunciado/alternativas tomados del banco (la app los tenía corridos o dañados): [3]
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 10
- Imágenes agregadas: 4: P21 (julio-2019_p21.jpg), P36 (julio-2019_p36.jpg), P58 (julio-2019_p58.jpg), P152 (julio-2019_p152.jpg)
- Excluir: 4: P1 (TEXTO_DANADO), P2 (TEXTO_DANADO), P84 (TEXTO_DANADO), P118 (FALTA_IMAGEN)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 22
  - Banco: P30 (CLAVE_DISCUTIBLE, propuesta D), P54 (CLAVE_DISCUTIBLE, propuesta E), P55 (CLAVE_DISCUTIBLE, propuesta B), P69 (CLAVE_DISCUTIBLE, propuesta C), P71 (CLAVE_DISCUTIBLE, propuesta A), P74 (CLAVE_DISCUTIBLE, propuesta C), P97 (CLAVE_DISCUTIBLE, propuesta B), P99 (CLAVE_DISCUTIBLE, propuesta A), P108 (CLAVE_DISCUTIBLE, propuesta B), P112 (CLAVE_DISCUTIBLE, propuesta B), P120 (CLAVE_DISCUTIBLE, propuesta E), P140 (CLAVE_DISCUTIBLE, propuesta E), P142 (CLAVE_DISCUTIBLE, propuesta B), P149 (CLAVE_DISCUTIBLE, propuesta A), P150 (CLAVE_DISCUTIBLE, propuesta B), P165 (CLAVE_DISCUTIBLE, propuesta C), P173 (CLAVE_DISCUTIBLE, propuesta B), P179 (CLAVE_DISCUTIBLE, propuesta D)
  - Por comentario de la fuente: P11, P46, P119, P145

## eunacom-jul-2024
- Preguntas: 180 (emparejadas con el banco: 180; sin emparejar: 0)
- Texto limpiado: 180 preguntas
- Claves cambiadas: 0
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 3
- Imágenes agregadas: 7: P17 (julio-2024_p17.jpg), P43 (julio-2024_p43.jpg), P48 (julio-2024_p48.jpg), P68 (julio-2024_p68.jpg), P87 (julio-2024_p87.jpg), P93 (julio-2024_p93.jpg), P160 (julio-2024_p160.jpg)
- Excluir: 1: P171 (FALTA_IMAGEN)
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 23
  - Banco: P13 (CLAVE_DISCUTIBLE, propuesta C), P21 (MAL_VINCULADA, propuesta D), P34 (CLAVE_DISCUTIBLE, propuesta A), P42 (CLAVE_DISCUTIBLE, propuesta D), P69 (CLAVE_DISCUTIBLE, propuesta C), P71 (CLAVE_DISCUTIBLE, propuesta E), P77 (CLAVE_DISCUTIBLE, propuesta B), P113 (CLAVE_DISCUTIBLE, propuesta C), P118 (CLAVE_DISCUTIBLE, propuesta D), P120 (CLAVE_DISCUTIBLE, propuesta A), P121 (CLAVE_DISCUTIBLE, propuesta E), P122 (CLAVE_DISCUTIBLE, propuesta C), P131 (CLAVE_DISCUTIBLE, propuesta B), P140 (CLAVE_DISCUTIBLE, propuesta A), P142 (CLAVE_DISCUTIBLE, propuesta A), P146 (CLAVE_DISCUTIBLE, propuesta B), P149 (CLAVE_DISCUTIBLE, propuesta C), P152 (CLAVE_DISCUTIBLE, propuesta C), P156 (CLAVE_DISCUTIBLE, propuesta A), P164 (CLAVE_DISCUTIBLE, propuesta B), P166 (CLAVE_DISCUTIBLE, propuesta A), P169 (CLAVE_DISCUTIBLE, propuesta B), P176 (CLAVE_DISCUTIBLE, propuesta C)

## eunacom-jul-2025
- Preguntas: 180 (emparejadas con el banco: 167; sin emparejar: 0)
- Texto limpiado: 167 preguntas
- Enunciado/alternativas tomados del banco (la app los tenía corridos o dañados): [28, 124]
- Claves cambiadas: 4
  - P72: A -> B (Con vómitos sin relación con la alimentación y 'oliva pilórica' el diagnóstico es estenosis hipertrófica del píloro (B), la explicación de la propia pregunta lo dice. Enunciado además muy resumido)
  - P85: A -> B (RPM de 35 sem sin infeccion: interrumpir (induccion) desde 34 sem, conducta expectante es <34 sem, duda conocida ob-14)
  - P96: A -> B (Con ICP primaria disponible a 60 min (<120 min) corresponde traslado para angioplastia primaria, no trombolisis, la propia explicación pone el umbral en >120 min)
  - P166: A -> B (DMG con mala respuesta a metformina: se agrega insulina, pioglitazona está contraindicada en embarazo y la propia explicación dice 'agregar insulina')
- Clave de la app distinta de la del banco (no se cambió, anotada y marcada `revisar`): 0
- Explicaciones corregidas del banco: 6
- Imágenes agregadas: 0
- Excluir: 0
- Revisar (clave discutible/errónea sin aplicar, mal vinculada, o la fuente la llama mala/discutible): 13
  - Banco: P12 (CLAVE_DISCUTIBLE, propuesta E), P23 (CLAVE_ERRONEA, propuesta D), P25 (CLAVE_ERRONEA, propuesta B), P31 (CLAVE_DISCUTIBLE, propuesta C), P51 (CLAVE_DISCUTIBLE, propuesta A), P55 (CLAVE_DISCUTIBLE, propuesta B), P66 (CLAVE_DISCUTIBLE, propuesta C), P68 (CLAVE_DISCUTIBLE, propuesta A), P122 (CLAVE_DISCUTIBLE, propuesta B), P141 (CLAVE_DISCUTIBLE, propuesta D), P145 (CLAVE_DISCUTIBLE, propuesta B), P148 (CLAVE_ERRONEA, propuesta A), P165 (CLAVE_DISCUTIBLE, propuesta E)

## Totales

- clave_cambiada: 53
- clave_distinta_anotada: 8
- creadas_nuevas: 18
- excluir: 37
- excluir_texto: 4
- explicacion_banco: 265
- explicacion_no_transferida: 7
- imagen: 70
- prefijos_desordenados: 51
- revisar: 306
- revisar_fuente: 33
- sin_banco: 0
- texto_banco: 102
- texto_limpiado: 2860

Detalle de las oraciones de comentario del recopilador eliminadas/editadas: `classes/docs/audit_banco/APP_LIMPIEZA_LOG.csv`.
