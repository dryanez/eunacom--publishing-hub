# Plan de imágenes para las clases Suizas

> Estado: **borrador para revisar con el usuario** (2026-10-03). Nada de esto está implementado todavía.

## Por qué

- Hoy las 340 clases no tienen **ninguna** imagen real: solo `flow`, `points`, `pathway`, `table` y `quiz`.
- El examen sí muestra imágenes. En el banco real (`books/data/real_questions_by_code.json`, 2.708 preguntas)
  hay **137 preguntas únicas que no se pueden responder sin ver la imagen**: 62 radiografías, 42 fotos clínicas,
  20 ECG, más TAC, ecografías y CTG. Varias se descartaron al escribir las clases justamente por eso
  (ej. melanoma y queratosis actínica en derma-13/derma-15).
- Un médico general tiene que **reconocer** una lesión, un trazado o una radiografía, no solo saber describirla.

## Escala

| Nivel | Significado |
|---|---|
| ★★★ | Imprescindible: el diagnóstico es visual o el examen muestra esta imagen |
| ★★ | Muy útil: imagen clásica que hoy solo se describe con palabras |
| ★ | Opcional: un esquema propio ayudaría, pero la clase se entiende sin él |
| — | No necesita imagen (laboratorio, fármacos, leyes, algoritmos) |

Tipos: **FOTO** (foto clínica), **RX**, **TAC/RM**, **ECO**, **ECG**, **CTG**, **FONDO** (fondo de ojo),
**FROTIS** (microscopía/histología), **CURVA** (gráfico: curvas OMS, espirometría, Bhutani, ROC…),
**ESQUEMA** (dibujo propio en SVG).

## Resumen

| Módulo / libro | Clases | ★★★ | ★★ | ★ | — |
|---|---|---|---|---|---|
| Gastroenterología | 26 | 4 | 13 | 6 | 3 |
| Neumología | 24 | 9 | 8 | 4 | 3 |
| Nefrología | 22 | 2 | 1 | 7 | 12 |
| Diabetes y Dislipidemias | 24 | 2 | 2 | 2 | 18 |
| Endocrinología | 24 | 7 | 3 | 8 | 6 |
| Hematología | 24 | 3 | 8 | 6 | 7 |
| Infectología | 24 | 9 | 7 | 3 | 5 |
| Reumatología | 24 | 12 | 7 | 3 | 2 |
| Neurología y Geriatría | 24 | 7 | 5 | 6 | 6 |
| Cirugía General | 18 | 7 | 6 | 2 | 3 |
| Dermatología | 16 | 15 | 1 | 0 | 0 |
| Oftalmología | 18 | 13 | 5 | 0 | 0 |
| Ginecología | 16 | 3 | 7 | 4 | 2 |
| Obstetricia | 20 | 5 | 5 | 4 | 6 |
| Pediatría | 22 | 8 | 5 | 4 | 5 |
| Salud Pública | 14 | 0 | 2 | 1 | 11 |
| **Total** | **340** | **106** | **85** | **60** | **89** |

Lectura rápida: **Dermatología y Oftalmología son casi 100 % visuales**, seguidas de Reumatología, Neumología
(radiografía de tórax) e Infectología (exantemas e ITS). Nefrología, Diabetes y Salud Pública casi no necesitan.

Varias imágenes se repiten entre libros (ej. colelitiasis en gastro-17 y cirugia-02, retinopatía diabética en
diab-21 y oftal-12, invaginación en gastro-25 y ped-12). Se consiguen una vez y se reusan.

---

## Módulo 1 · Gastroenterología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| gastro-01 | ERGE y Barrett | ★★ | ENDO: Barrett (lengüetas asalmonadas) |
| gastro-02 | Úlcera péptica y H. pylori | ★ | ENDO: úlcera gástrica/duodenal |
| gastro-03 | Disfagia y acalasia | ★★ | RX: esofagograma "pico de pájaro" |
| gastro-04 | Perforación y cáusticos | ★★★ | RX: neumoperitoneo bajo el diafragma |
| gastro-05 | Cáncer esófago y gástrico | ★ | ESQUEMA: Borrmann |
| gastro-06 | Hernia hiatal y mediastino | ★★ | RX: hernia hiatal retrocardíaca; ESQUEMA compartimentos del mediastino |
| gastro-07 | SII | — | |
| gastro-08 | Diarrea y constipación | — | |
| gastro-09 | Celíaca y malabsorción | ★★ | FOTO: dermatitis herpetiforme; FROTIS: atrofia vellositaria |
| gastro-10 | EII | ★★ | ENDO: CU continua vs Crohn en parches/empedrado; RX megacolon tóxico |
| gastro-11 | Pólipos y CCR | ★ | ENDO: pólipo pediculado vs sésil |
| gastro-12 | Patología perianal | ★★ | FOTO/ESQUEMA: grados de hemorroides, fisura, fístula (Goodsall) |
| gastro-13 | Ictericia y colestasia | ★★ | ECO: vía biliar dilatada |
| gastro-14 | Hepatitis | ★ | CURVA: serología VHB en el tiempo |
| gastro-15 | DHC e hipertensión portal | ★★ | FOTO: arañas vasculares, eritema palmar, ascitis, circulación colateral |
| gastro-16 | Lesiones hepáticas focales | ★★ | ECO/TAC: hemangioma, quiste, HCC |
| gastro-17 | Litiasis biliar y colangitis | ★★★ | ECO: cálculo con sombra acústica, pared engrosada |
| gastro-18 | Pancreatitis aguda | ★★ | TAC: Balthazar; FOTO: Cullen / Grey Turner |
| gastro-19 | Apendicitis y diverticulitis | ★★ | TAC: apendicitis / diverticulitis |
| gastro-20 | Isquemia mesentérica | ★ | AngioTAC |
| gastro-21 | Hemorragia digestiva | ★★ | ENDO/ESQUEMA: clasificación de Forrest |
| gastro-22 | Cuerpo extraño digestivo | ★★★ | RX: moneda vs pila de botón (doble halo) |
| gastro-23 | Diarrea en el niño | ★ | FOTO: signo del pliegue |
| gastro-24 | RGE lactante y constipación | — | |
| gastro-25 | Cirugía pediátrica digestiva | ★★★ | RX: neumatosis (ECN), doble burbuja, hernia diafragmática; ECO: píloro, invaginación (diana) |
| gastro-26 | Trauma abdominal y torácico | ★★ | ECO-FAST; RX tórax |

## Módulo 1 · Neumología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| resp-01 | Espirometría | ★★★ | CURVA: flujo-volumen normal / obstructiva / restrictiva |
| resp-02 | Crisis asmática adulto | — | |
| resp-03 | Asma crónica | ★★ | CURVA: espirometría con respuesta a broncodilatador; FOTO técnica inhalatoria |
| resp-04 | EPOC estable | ★★ | RX: hiperinsuflación; CURVA |
| resp-05 | Exacerbación EPOC | ★ | RX |
| resp-06 | NAC: diagnóstico | ★★★ | RX: consolidación lobar con broncograma |
| resp-07 | NAC: tratamiento | — | |
| resp-08 | Atípicas y aspirativa | ★★ | RX: patrón intersticial; aspiración en lóbulo inferior derecho |
| resp-09 | Absceso pulmonar | ★★★ | RX: cavidad con nivel hidroaéreo |
| resp-10 | Tuberculosis pulmonar | ★★★ | RX: cavitación apical |
| resp-11 | Derrame pleural | ★★★ | RX: menisco, ángulo costofrénico borrado |
| resp-12 | Paraneumónico y empiema | ★★ | ECO/TAC: derrame tabicado |
| resp-13 | Neumotórax espontáneo | ★★★ | RX: línea pleural visceral |
| resp-14 | Neumotórax a tensión y hemotórax | ★★★ | RX: desviación del mediastino (y mensaje: no esperar la RX) |
| resp-15 | Derrame neoplásico y TBC pleural | ★ | RX |
| resp-16 | Nódulo pulmonar solitario | ★★ | TAC: calcificación benigna ("palomita") vs espiculado |
| resp-17 | Cáncer pulmonar | ★★★ | RX/TAC: masa, Pancoast, atelectasia; FOTO acropaquia, Horner |
| resp-18 | EPID / FPI | ★★★ | TAC: panal de abejas; FOTO acropaquia |
| resp-19 | TEP | ★★ | ECG: S1Q3T3 / taquicardia; AngioTAC: defecto de llenado |
| resp-20 | Hemoptisis y bronquiectasias | ★★ | TAC: signo del anillo de sello |
| resp-21 | Insuficiencia respiratoria | — | |
| resp-22 | SDRA | ★★ | RX: infiltrado bilateral |
| resp-23 | SAHOS | ★ | ESQUEMA: colapso de vía aérea |
| resp-24 | Monóxido de carbono | ★ | ESQUEMA |

## Módulo 1 · Nefrología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| nefro-01 | Injuria renal aguda | ★ | FROTIS: sedimento |
| nefro-02 | NTA y NTIA | ★ | FROTIS: cilindros granulosos "café" |
| nefro-03 | Síndrome urémico | — | |
| nefro-04 | Cardiorrenal y hepatorrenal | — | |
| nefro-05 | Hiponatremia | — | |
| nefro-06 | SIADH vs pierde sal | — | |
| nefro-07 | Hipernatremia y DI | — | |
| nefro-08 | Fluidos y diuréticos | — | |
| nefro-09 | Hiperkalemia | ★★★ | ECG: T picudas → QRS ancho → sinusoidal |
| nefro-10 | Hipokalemia | ★★★ | ECG: T aplanada, onda U |
| nefro-11 | Acidosis metabólica | — | |
| nefro-12 | Alcalosis y mixtos | — | |
| nefro-13 | Síndrome nefrótico | ★ | FOTO: edema / orina espumosa |
| nefro-14 | Glomerulopatías primarias | — | |
| nefro-15 | Nefrítico y GNPE | ★★ | FOTO: orina "coca-cola", edema palpebral |
| nefro-16 | GNRP y ANCA | — | |
| nefro-17 | Nefropatía lúpica | — | |
| nefro-18 | ERC y GES | ★ | ESQUEMA: etapas KDIGO |
| nefro-19 | Complicaciones ERC | ★ | ESQUEMA |
| nefro-20 | HTA secundaria renovascular | ★ | AngioTAC/RM |
| nefro-21 | Pielonefritis | ★ | ECO/TAC |
| nefro-22 | Fármacos en ERC | — | |

## Módulo 1 · Diabetes y Dislipidemias

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| diab-01 | Tipos de Diabetes Mellitus | — |  |
| diab-02 | Criterios Diagnósticos de Diabetes Mellitus, Prediabetes y T | ★ | FOTO: acantosis nigricans |
| diab-03 | Diabetes y Embarazo | — |  |
| diab-04 | Objetivos del Control Metabólico y Metas de HbA1c Individual | — |  |
| diab-05 | Ejercicio Físico, Cambios de Estilo de Vida y Prevención Car | — |  |
| diab-06 | Tratamiento Escalonado de la DM2 y Canasta GES MINSAL | — |  |
| diab-07 | Hipoglucemiantes Orales Clásicos | — |  |
| diab-08 | Nuevas Terapias | — |  |
| diab-09 | Tratamiento y Monitoreo de la Diabetes en la Gestante | — |  |
| diab-10 | Diabetes e Hipertensión Arterial | — |  |
| diab-11 | Tipos de Insulina, Farmacocinética e Indicaciones de Inicio | — |  |
| diab-12 | Esquemas de Insulinoterapia y Algoritmos de Ajuste de Dosis | — |  |
| diab-13 | Manejo de la Hiperglicemia en el Paciente Hospitalizado | — |  |
| diab-14 | Hipoglicemias | — |  |
| diab-15 | Cetoacidosis Diabética | — |  |
| diab-16 | Protocolo de Reanimación con Fluidos y Expansión en CAD/EHH | — |  |
| diab-17 | Insulinoterapia Endovenosa y Manejo del Potasio y Bicarbonat | ★ | ECG: hipokalemia (reusar nefro-10) |
| diab-18 | Criterios de Resolución de CAD/EHH y Traslape a Insulina Sub | — |  |
| diab-19 | Complicaciones Agudas del Tratamiento | — |  |
| diab-20 | Nefropatía Diabética | — |  |
| diab-21 | Retinopatía Diabética | ★★★ | FONDO: microaneurismas, exudados, neovasos |
| diab-22 | Pie Diabético | ★★★ | FOTO: úlcera neuropática vs isquémica, grados de Wagner |
| diab-23 | Dislipidemias | ★★ | FOTO: xantelasma, xantomas tendinosos, arco corneal |
| diab-24 | Dislipidemias Severas y Genéticas | ★★ | FOTO: xantomas eruptivos; suero lechoso |

## Módulo 1 · Endocrinología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| endo-01 | Fisiología tiroidea | — | |
| endo-02 | Hipotiroidismo | ★ | FOTO: facies mixedematosa |
| endo-03 | Coma mixedematoso | ★ | FOTO |
| endo-04 | Hipotiroidismo congénito y embarazo | ★★ | FOTO: macroglosia, hernia umbilical |
| endo-05 | Tiroiditis | ★ | CURVA: captación de radioyodo baja vs alta |
| endo-06 | Graves-Basedow | ★★★ | FOTO: oftalmopatía, bocio difuso, mixedema pretibial |
| endo-07 | Tratamiento hipertiroidismo | — | |
| endo-08 | Tormenta tiroidea | — | |
| endo-09 | Nódulo tiroideo y TI-RADS | ★★★ | ECO: microcalcificaciones, "más alto que ancho" |
| endo-10 | Cáncer de tiroides | ★ | FROTIS: núcleos "ojos de Annie" (papilar) |
| endo-11 | Cushing | ★★★ | FOTO: estrías violáceas, giba, facies de luna llena |
| endo-12 | Addison | ★★★ | FOTO: hiperpigmentación de pliegues y mucosa oral |
| endo-13 | Crisis suprarrenal | — | |
| endo-14 | Conn | — | |
| endo-15 | Feocromocitoma | ★ | TAC suprarrenal |
| endo-16 | Hipercalcemia | ★ | ECG: QT corto |
| endo-17 | Hipocalcemia | ★★★ | FOTO: signos de Trousseau y Chvostek; ECG QT largo |
| endo-18 | Osteoporosis (DEXA) | ★★ | Informe DEXA: T-score |
| endo-19 | Vitamina D y raquitismo | ★★ | RX/FOTO: rosario raquítico, genu varo |
| endo-20 | Masas selares | ★★★ | ESQUEMA: hemianopsia bitemporal (vía óptica) + RM |
| endo-21 | Prolactinoma | ★ | RM |
| endo-22 | Acromegalia | ★★★ | FOTO: facies, manos y pies |
| endo-23 | Hipopituitarismo y Sheehan | ★ | RM: silla turca vacía |
| endo-24 | DI, SIADH y MEN | — | |

## Módulo 1 · Hematología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| hem-01 | Síndrome anémico | — | |
| hem-02 | Cinética del hierro | — | |
| hem-03 | Anemia ferropénica | ★★ | FROTIS: microcítico hipocrómico; FOTO coiloniquia |
| hem-04 | Anemia de enfermedad crónica | — | |
| hem-05 | Aplasia medular | ★ | FROTIS: médula hipocelular |
| hem-06 | Megaloblástica | ★★ | FROTIS: neutrófilo hipersegmentado; FOTO glositis |
| hem-07 | AHAI y Coombs | ★★ | FROTIS: esferocitos; ESQUEMA Coombs directo |
| hem-08 | Esferocitosis, G6PD, HPN | ★★ | FROTIS: esferocitos, células "mordidas" |
| hem-09 | Talasemia y falciforme | ★★ | FROTIS: dianocitos, drepanocitos |
| hem-10 | PTT y SHU | ★★★ | FROTIS: esquistocitos |
| hem-11 | Hemostasia y laboratorio | ★ | ESQUEMA: cascada (vía intrínseca/extrínseca) |
| hem-12 | PTI | ★★ | FOTO: petequias y equimosis |
| hem-13 | Hemofilia y von Willebrand | ★ | FOTO: hemartrosis |
| hem-14 | Coagulopatías adquiridas | — | |
| hem-15 | CID | ★ | FROTIS: esquistocitos (reusar hem-10) |
| hem-16 | Leucemias agudas | ★★★ | FROTIS: blastos, bastones de Auer |
| hem-17 | Leucemias crónicas | ★★ | FROTIS: sombras de Gumprecht (LLC) |
| hem-18 | Linfomas | ★★ | FROTIS: célula de Reed-Sternberg |
| hem-19 | Mieloma múltiple | ★★★ | RX: lesiones líticas en cráneo; CURVA pico monoclonal; FROTIS rouleaux |
| hem-20 | Mieloproliferativas | ★ | FROTIS |
| hem-21 | Neutropenia febril | — | |
| hem-22 | Lisis tumoral y compresión medular | ★ | RM columna |
| hem-23 | Trombofilias | — | |
| hem-24 | Transfusión | — | |

## Módulo 1 · Infectología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| infecto-01 | Sepsis | — | |
| infecto-02 | Meningitis | ★★ | FOTO: púrpura fulminante meningocócica; ESQUEMA Kernig/Brudzinski |
| infecto-03 | Encefalitis y absceso | ★★ | RM: lóbulo temporal (VHS); TAC: lesión en anillo |
| infecto-04 | Partes blandas y Ludwig | ★★★ | FOTO: fasceítis necrotizante, angina de Ludwig |
| infecto-05 | Contactos y cortopunzantes | — | |
| infecto-06 | Rabia y tétanos | ★★ | FOTO: opistótonos, risa sardónica |
| infecto-07 | IAAS | — | |
| infecto-08 | Intoxicación alimentaria y botulismo | — | |
| infecto-09 | VIH | ★ | (ver infecto-10) |
| infecto-10 | Oportunistas en VIH | ★★★ | FOTO: candidiasis oral, Kaposi, leucoplasia vellosa; RX/TAC Pneumocystis; TAC toxoplasma |
| infecto-11 | TBC extrapulmonar | ★★ | RX/RM: mal de Pott; FOTO escrófula |
| infecto-12 | Sífilis | ★★★ | FOTO: chancro, roséola, sifílides palmoplantares, condiloma plano |
| infecto-13 | ITS II | ★★★ | FOTO: herpes genital, condiloma acuminado, chancroide |
| infecto-14 | Hantavirus | ★ | RX: edema pulmonar no cardiogénico |
| infecto-15 | Chagas | ★★ | FOTO: signo de Romaña; RX megaesófago/cardiomegalia; ECG BRD + HBAI |
| infecto-16 | Dengue, malaria, fiebre amarilla | ★★ | FROTIS: Plasmodium; FOTO exantema/prueba del torniquete |
| infecto-17 | Hidatidosis y triquinosis | ★★★ | RX/ECO: quiste hidatídico, signo del camalote |
| infecto-18 | Brucelosis, lepto, tifoidea | ★ | FOTO: roséola tífica |
| infecto-19 | Ántrax | ★★★ | FOTO: escara negra; RX: mediastino ensanchado |
| infecto-20 | Celulitis, erisipela, foliculitis | ★★★ | FOTO: erisipela (borde neto) vs celulitis |
| infecto-21 | Mononucleosis y TORCH | ★★ | FOTO: amigdalitis, rash por amoxicilina; coriorretinitis |
| infecto-22 | Exantemas febriles y Kawasaki | ★★★ | FOTO: Koplik, sarampión, rubéola, escarlatina, Kawasaki |
| infecto-23 | Varicela y zóster | ★★★ | FOTO: polimorfismo "cielo estrellado", zóster en dermatoma |
| infecto-24 | Neutropenia febril y fiebre sin foco | — | |

## Módulo 1 · Reumatología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| reuma-01 | Monoartritis y líquido sinovial | ★★ | FOTO: aspecto del líquido; FROTIS cristales |
| reuma-02 | Artritis séptica | ★ | FOTO: rodilla |
| reuma-03 | Gota y pseudogota | ★★★ | FROTIS: agujas (−) vs romboides (+) con luz polarizada; FOTO tofos; RX "sacabocado" |
| reuma-04 | Artrosis | ★★★ | RX: osteofitos, pinzamiento asimétrico; FOTO Heberden/Bouchard |
| reuma-05 | AIJ y Still | ★★ | FOTO: exantema asalmonado |
| reuma-06 | AR: diagnóstico | ★★★ | FOTO: desviación cubital, cuello de cisne, boutonnière; RX erosiones |
| reuma-07 | AR: tratamiento | — | |
| reuma-08 | LES | ★★★ | FOTO: alas de mariposa |
| reuma-09 | Nefritis lúpica | — | |
| reuma-10 | Lupus cutáneo | ★★★ | FOTO: discoide vs subagudo |
| reuma-11 | SAF | ★★ | FOTO: livedo reticularis |
| reuma-12 | Esclerosis sistémica | ★★★ | FOTO: esclerodactilia, microstomía, telangiectasias, calcinosis |
| reuma-13 | Dermato/polimiositis | ★★★ | FOTO: heliotropo, pápulas de Gottron |
| reuma-14 | Raynaud y capilaroscopía | ★★★ | FOTO: fases blanco-azul-rojo; capilaroscopía |
| reuma-15 | Sjögren y EMTC | ★ | FOTO: hipertrofia parotídea |
| reuma-16 | Espondiloartritis | ★★ | RX: sacroilitis |
| reuma-17 | Espondilitis anquilosante | ★★★ | RX: columna en caña de bambú |
| reuma-18 | Artritis psoriásica | ★★★ | FOTO: dactilitis, pitting ungueal; RX "lápiz en copa" |
| reuma-19 | Artritis reactiva | ★★ | FOTO: queratodermia blenorrágica, balanitis circinada |
| reuma-20 | Behçet | ★★★ | FOTO: aftas orales y genitales, patergia |
| reuma-21 | Arteritis de la temporal y Takayasu | ★★ | FOTO: arteria temporal engrosada |
| reuma-22 | Vasculitis ANCA y Henoch | ★★★ | FOTO: púrpura palpable en EEII; nariz en silla de montar |
| reuma-23 | Fibromialgia y PMR | ★ | ESQUEMA |
| reuma-24 | Osteoporosis | ★★ | RX: fractura vertebral en cuña; informe DEXA (reusar endo-18) |

## Módulo 1 · Neurología y Geriatría

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| neuro-01 | ACV isquémico | ★★★ | TAC: normal precoz vs hipodensidad; ACM hiperdensa |
| neuro-02 | AIT | ★ | ESQUEMA territorios |
| neuro-03 | Hemorragia intracerebral | ★★★ | TAC: hiperdensidad parenquimatosa |
| neuro-04 | HSA | ★★★ | TAC: sangre en cisternas; FOTO LCR xantocrómico |
| neuro-05 | Trombosis venosa cerebral | ★★ | TAC/RM: signo del delta vacío |
| neuro-06 | Migraña y tensional | ★ | ESQUEMA: aura (espectro de fortificación) |
| neuro-07 | Cluster y trigémino | ★ | FOTO: Horner con lagrimeo |
| neuro-08 | Epilepsia | ★★ | EEG: punta-onda 3 Hz (ausencias) |
| neuro-09 | Status epiléptico | — | |
| neuro-10 | Primera crisis vs síncope | — | |
| neuro-11 | Parkinson | ★★ | FOTO/ESQUEMA: postura, micrografía |
| neuro-12 | Parkinsonismos | — | |
| neuro-13 | Temblor y distonías | ★ | FOTO: espiral de Archimedes |
| neuro-14 | Alzheimer | ★★ | FOTO: test del reloj alterado; RM atrofia hipocampal |
| neuro-15 | Otras demencias | ★ | RM |
| neuro-16 | Guillain-Barré | — | |
| neuro-17 | Miastenia | ★★★ | FOTO: ptosis fatigable, test del hielo |
| neuro-18 | Esclerosis múltiple | ★★★ | RM: placas periventriculares (dedos de Dawson) |
| neuro-19 | Parálisis facial | ★★★ | FOTO/ESQUEMA: periférica (toma la frente) vs central |
| neuro-20 | Vértigo | ★★ | ESQUEMA: Dix-Hallpike y Epley |
| neuro-21 | Delirium | — | |
| neuro-22 | Fragilidad | — | |
| neuro-23 | Caídas y fractura de cadera | ★★★ | RX: fractura de cuello femoral; FOTO pierna acortada y rotada |
| neuro-24 | Polifarmacia e incontinencia | ★ | ESQUEMA |

## Módulo 2 · Cirugía General

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| cirugia-01 | Apendicitis | ★★ | ESQUEMA: McBurney, Rovsing, psoas; TAC |
| cirugia-02 | Colecistitis | ★★★ | ECO (reusar gastro-17) |
| cirugia-03 | Diverticulitis | ★★ | TAC/ESQUEMA: Hinchey |
| cirugia-04 | Obstrucción intestinal | ★★★ | RX: niveles hidroaéreos, "grano de café" del vólvulo |
| cirugia-05 | Peritonitis y perforación | ★★★ | RX: neumoperitoneo (reusar gastro-04) |
| cirugia-06 | Hernias de pared | ★★ | ESQUEMA: directa vs indirecta (Hesselbach); FOTO |
| cirugia-07 | Patología orificial | ★★ | (reusar gastro-12) |
| cirugia-08 | Pilonidal, hidrosadenitis, partes blandas | ★★★ | FOTO: sinus pilonidal, hidrosadenitis, lipoma vs quiste |
| cirugia-09 | ATLS | ★ | ESQUEMA |
| cirugia-10 | Trauma torácico | ★★★ | RX: neumotórax a tensión, hemotórax; FOTO tórax volante |
| cirugia-11 | Trauma abdominal | ★★ | ECO-FAST: líquido en Morrison |
| cirugia-12 | TEC | ★★★ | TAC: epidural (lente) vs subdural (semiluna); FOTO Battle y ojos de mapache |
| cirugia-13 | Quemaduras | ★★★ | FOTO: profundidad A, AB, B; ESQUEMA regla de los 9 |
| cirugia-14 | Evaluación preoperatoria | — | |
| cirugia-15 | Anestesia | — | |
| cirugia-16 | Fiebre postoperatoria | — | |
| cirugia-17 | ISQ, dehiscencia, evisceración | ★★ | FOTO |
| cirugia-18 | Heridas y mordeduras | ★ | FOTO |

## Módulo 2 · Dermatología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| derma-01 | Lesiones elementales | ★★★ | FOTO: mácula, pápula, placa, vesícula, ampolla, pústula, habón, erosión vs úlcera |
| derma-02 | Acné | ★★★ | FOTO: comedones, pápulo-pustular, nódulo-quístico |
| derma-03 | Rosácea | ★★★ | FOTO: eritemato-telangiectásica, pápulo-pustular, rinofima |
| derma-04 | Alopecias | ★★★ | FOTO: areata (pelos en signo de exclamación), androgenética, tiña capitis |
| derma-05 | Psoriasis | ★★★ | FOTO: placa en codos, uñas, Koebner |
| derma-06 | Dermatitis atópica | ★★★ | FOTO: distribución lactante vs escolar |
| derma-07 | Seborreica y de contacto | ★★★ | FOTO |
| derma-08 | Urticaria y angioedema | ★★★ | FOTO: habones, angioedema |
| derma-09 | SSJ / NET | ★★★ | FOTO: desprendimiento, mucosas, Nikolsky |
| derma-10 | DRESS | ★★ | FOTO: edema facial, exantema |
| derma-11 | Pénfigo vs penfigoide | ★★★ | FOTO: ampolla flácida vs tensa |
| derma-12 | Eritema multiforme | ★★★ | FOTO: lesión en diana |
| derma-13 | Melanoma | ★★★ | FOTO: ABCDE (y recuperar las preguntas reales descartadas por falta de foto) |
| derma-14 | CBC vs CEC | ★★★ | FOTO: perlado con telangiectasias vs ulcerado queratósico |
| derma-15 | Premalignas | ★★★ | FOTO: queratosis actínica, cuerno cutáneo (recuperar preguntas reales) |
| derma-16 | Micosis, escabiosis, pediculosis | ★★★ | FOTO: tiña corporis, pitiriasis versicolor, surcos acarinos |

## Módulo 2 · Oftalmología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| oftal-01 | Ojo rojo | ★★★ | FOTO: inyección conjuntival vs ciliar |
| oftal-02 | Conjuntivitis | ★★★ | FOTO: bacteriana, viral, alérgica |
| oftal-03 | Párpados | ★★★ | FOTO: orzuelo vs chalazión, dacriocistitis |
| oftal-04 | Queratitis herpética | ★★★ | FOTO: úlcera dendrítica con fluoresceína |
| oftal-05 | Escleritis y epiescleritis | ★★ | FOTO |
| oftal-06 | Glaucoma agudo | ★★★ | FOTO: pupila media fija, córnea edematosa |
| oftal-07 | Glaucoma crónico | ★★★ | FONDO: excavación papilar aumentada |
| oftal-08 | Cataratas | ★★ | FOTO: opacidad, rojo pupilar |
| oftal-09 | Refracción y ambliopía | ★★ | ESQUEMA: miopía/hipermetropía; FOTO estrabismo, reflejo de Hirschberg |
| oftal-10 | Desprendimiento de retina | ★★ | FONDO; ESQUEMA "cortina" |
| oftal-11 | Oclusiones vasculares | ★★★ | FONDO: mancha rojo cereza vs hemorragias en llama |
| oftal-12 | Retinopatía diabética | ★★★ | FONDO (reusar diab-21) |
| oftal-13 | Retinopatía hipertensiva | ★★★ | FONDO: cruces AV, exudados algodonosos, edema de papila |
| oftal-14 | DMAE | ★★★ | FONDO: drusas; rejilla de Amsler |
| oftal-15 | Trauma ocular | ★★★ | FOTO: hipema, pupila en lágrima |
| oftal-16 | Quemadura química | ★★ | FOTO: isquemia limbar |
| oftal-17 | Celulitis preseptal vs orbitaria | ★★★ | FOTO + TAC |
| oftal-18 | Neurooftalmología | ★★★ | FONDO: edema de papila; ESQUEMA defecto pupilar aferente (Marcus Gunn) |

## Módulo 3 · Ginecología

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| gin-01 | Ciclo menstrual y amenorrea | ★★ | CURVA: hormonas del ciclo |
| gin-02 | SOP | ★★ | ECO: ovario poliquístico; FOTO hirsutismo, acantosis |
| gin-03 | SUA (PALM-COEIN) | ★ | ESQUEMA |
| gin-04 | Miomatosis | ★★ | ESQUEMA: FIGO 0-8; ECO |
| gin-05 | Endometriosis | ★ | ECO: endometrioma |
| gin-06 | Prolapso e incontinencia | ★★ | ESQUEMA: POP-Q |
| gin-07 | Infertilidad | ★ | Histerosalpingografía |
| gin-08 | Anticoncepción | ★ | FOTO: DIU, implante |
| gin-09 | Vulvovaginitis | ★★★ | FROTIS: células clave, hifas, tricomonas; FOTO cuello "en fresa" |
| gin-10 | Vulva y Bartolino | ★★★ | FOTO: absceso de Bartolino, liquen escleroso |
| gin-11 | EIP | — | |
| gin-12 | Climaterio | — | |
| gin-13 | Cáncer cervicouterino | ★★ | FOTO: colposcopía (epitelio acetoblanco); ESQUEMA zona de transformación |
| gin-14 | Cáncer de mama y BI-RADS | ★★★ | MAMOGRAFÍA: microcalcificaciones, masa espiculada; FOTO piel de naranja, retracción |
| gin-15 | Endometrio y ovario | ★★ | ECO: masa anexial compleja (tabiques, papilas) |
| gin-16 | Torsión y quiste roto | ★★ | ECO Doppler |

## Módulo 3 · Obstetricia

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| ob-01 | Control prenatal | — | |
| ob-02 | Ecografía obstétrica | ★★★ | ECO: translucencia nucal, cervicometría |
| ob-03 | Bienestar fetal | ★★★ | CTG: RBNE reactivo vs no reactivo |
| ob-04 | RCF | ★★★ | DOPPLER: diástole ausente/reversa en umbilical; ductus venoso |
| ob-05 | SHE | — | |
| ob-06 | PE severa y HELLP | — | |
| ob-07 | Diabetes gestacional | — | |
| ob-08 | Colestasia del embarazo | — | |
| ob-09 | ITU en el embarazo | — | |
| ob-10 | Aborto | ★ | ECO |
| ob-11 | Embarazo ectópico | ★★ | ECO: útero vacío + masa anexial |
| ob-12 | Mola | ★★★ | ECO: "tormenta de nieve"; FOTO vesículas |
| ob-13 | Metrorragia 2ª mitad | ★★ | ESQUEMA: tipos de placenta previa, DPPNI |
| ob-14 | RPM | ★★ | FOTO: cristalización en helecho |
| ob-15 | Parto prematuro | ★ | ECO: cervicometría (reusar ob-02) |
| ob-16 | Trabajo de parto | ★★ | ESQUEMA: planos de Hodge, variedades de posición, fontanelas; partograma |
| ob-17 | Distocias y CTG intraparto | ★★★ | CTG: DIP I, DIP II, variables; ESQUEMA McRoberts |
| ob-18 | Hemorragia postparto | ★ | ESQUEMA: balón, B-Lynch |
| ob-19 | Infecciones puerperales | ★★ | FOTO: mastitis vs absceso |
| ob-20 | Aloinmunización Rh | ★ | DOPPLER: ACM |

## Módulo 3 · Pediatría

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| ped-01 | Crecimiento y curvas OMS | ★★★ | CURVA: P/E, T/E, P/T con un caso graficado |
| ped-02 | Desarrollo psicomotor | ★ | FOTO: hitos |
| ped-03 | PNI | — | |
| ped-04 | Lactancia | ★★ | FOTO/ESQUEMA: acople correcto vs incorrecto |
| ped-05 | Bronquiolitis y SBO | ★ | RX: hiperinsuflación |
| ped-06 | Croup | ★★ | RX: signo del campanario |
| ped-07 | NAC pediátrica | ★★ | RX: neumonía redonda |
| ped-08 | Cuerpo extraño en vía aérea | ★★★ | ESQUEMA: golpes en espalda/compresiones (lactante) vs Heimlich |
| ped-09 | Fiebre sin foco | — | |
| ped-10 | Exantemas infantiles | ★★★ | FOTO: eritema infeccioso, exantema súbito, escarlatina, varicela, Kawasaki |
| ped-11 | Diarrea, rehidratación y SHU | ★★ | FOTO: signos de deshidratación |
| ped-12 | Vómitos: EHP e invaginación | ★★★ | ECO: píloro engrosado, invaginación en diana (reusar gastro-25) |
| ped-13 | ITU pediátrica | ★★ | ESQUEMA: grados de reflujo vesicoureteral |
| ped-14 | Convulsión febril | — | |
| ped-15 | Reanimación neonatal | ★ | ESQUEMA |
| ped-16 | Edad gestacional (Capurro) | ★★★ | FOTO: pezón, oreja, pliegues plantares, piel |
| ped-17 | Ictericia neonatal | ★★★ | CURVA: Bhutani; ESQUEMA zonas de Kramer |
| ped-18 | Dificultad respiratoria neonatal | ★★★ | RX: EMH vs TTRN vs SAM |
| ped-19 | Sepsis neonatal | — | |
| ped-20 | Hipoglicemia neonatal | — | |
| ped-21 | Tamizaje neonatal | ★ | FOTO: tarjeta de papel filtro |
| ped-22 | Displasia de cadera | ★★★ | ESQUEMA: Ortolani y Barlow; RX líneas de Hilgenreiner y Perkins; FOTO pliegues asimétricos |

## Módulo 4 · Salud Pública

| Clase | Tema | Nivel | Imagen |
|---|---|---|---|
| sp-01 | Sistema de Salud Chileno | — |  |
| sp-02 | Régimen de Garantías Explícitas en Salud | — |  |
| sp-03 | Ley Ricarte Soto | — |  |
| sp-04 | Enfermedades de Notificación Obligatoria | — |  |
| sp-05 | Modelo de Atención Integral de Salud Familiar y Comunitaria | — |  |
| sp-06 | Diseños de Estudios Epidemiológicos | ★ | ESQUEMA |
| sp-07 | Medidas de Frecuencia, Asociación e Impacto Potencial en Sal | — |  |
| sp-08 | Pruebas Diagnósticas | ★★ | CURVA: ROC |
| sp-09 | Validez, Causalidad, Sesgos y Confusión en Estudios Epidemio | — |  |
| sp-10 | Tamizaje Poblacional | — |  |
| sp-11 | Principios de la Bioética Clínica, Consentimiento Informado  | — |  |
| sp-12 | Ley de Deberes y Derechos de los Pacientes | — |  |
| sp-13 | Certificación Médica de Defunción, Autopsias y Deber de Denu | ★★ | Formulario de certificado de defunción con causas I/II llenadas |
| sp-14 | Legislación Sanitaria Especial | — |  |

---

## De dónde sale cada tipo de imagen

| Tipo | Clases aprox. | Cómo se consigue |
|---|---|---|
| ESQUEMA, CURVA, CTG, ECG | ~90 | **Dibujados por nosotros en SVG.** Sin problema de derechos, mismo estilo Suizo, animables paso a paso. Un ECG de hiperkalemia, un RBNE o una curva de Bhutani se pueden generar con exactitud. |
| FOTO clínica, FONDO | ~110 | Bancos con licencia que permite uso comercial: Wikimedia Commons (CC BY / CC BY-SA / dominio público), CDC PHIL y NEI (dominio público en su mayoría). Siempre con crédito. |
| RX, TAC, ECO | ~70 | Wikimedia Commons y casos publicados con CC BY. Radiopaedia **no sirve** sin permiso (licencia no comercial). |
| FROTIS | ~15 | Wikimedia Commons / CDC PHIL. |

**Libros CTO u otros libros comerciales:** sirven como **guía** de qué imagen poner, pero **no se pueden copiar**
sus figuras a un curso que se vende. Lo mismo aplica a las fotos enlazadas dentro del banco de preguntas
(accesspediatrics, radiopaedia, blogs). Ver preguntas abajo.

## Plan propuesto

1. **Reproductor:** agregar un tipo de diapositiva `image`. Foto o radiografía a pantalla completa, con flechas y
   círculos que aparecen paso a paso mientras la voz explica ("fíjate en la línea pleural…"), pie de foto, y
   crédito de la licencia. También un `quiz` con imagen ("¿qué muestra esta radiografía?").
2. **Inventario de medios:** carpeta `classes/media/` + `media_manifest.json` con archivo, fuente, autor,
   licencia y en qué clases se usa. Nada entra sin licencia anotada.
3. **Piloto:** 1 clase de cada tipo para que la apruebes antes de escalar.
   Propuesta: derma-01 (fotos), resp-13 (radiografía), nefro-09 (ECG en SVG), ob-03 (CTG en SVG).
4. **Escalar por libro:** Dermatología → Oftalmología → Reumatología → Neumología → Infectología → Pediatría →
   el resto. Los ★★★ primero (106 clases), luego los ★★.
5. **Recuperar preguntas reales con imagen:** las 137 preguntas del banco que dependen de una imagen vuelven a
   ser usables si conseguimos una imagen equivalente con licencia.
6. Reconstruir el reproductor y la narración (`export_narration.cjs`) cuando cada libro quede listo.

## Preguntas abiertas para el usuario

1. ¿El curso se vende o es de uso personal / gratis? Define qué licencias sirven.
2. Los libros CTO: ¿tienes alguna licencia para usar sus figuras? Si no, se usan solo como referencia.
3. `books/figuras/` tiene recortes de páginas de un PDF (`fig_*_p154_img2.jpeg`, etc.). ¿De qué libro son?
   Si son de un libro comercial, no deberían ir en el curso.
4. ¿Tienes fotos clínicas propias (con consentimiento) o acceso a un servicio con fotos licenciadas?
5. ¿Partimos por el piloto de 4 clases, o prefieres un libro completo (Dermatología)?
