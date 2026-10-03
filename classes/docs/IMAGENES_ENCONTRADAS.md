# Imágenes encontradas en los manuales (bucket R2)

> 2026-10-03. Fuente: bucket Cloudflare R2 `eunacomvideos`, carpeta `Manuales_MIR/` (62 PDF). Se extrajeron 4.267 imágenes (3.328 figuras distintas) y se eligieron a mano las que sirven a cada clase de `PLAN_IMAGENES.md`, revisando cada una visualmente. Nada está insertado todavía en las clases.

## Resumen

| Prioridad | Clases que la necesitan | Con imagen encontrada |
|---|---|---|
| ★★★ | 106 | 99 |
| ★★ | 85 | 62 |
| ★ | 60 | 23 |
| **Total** | **251** | **184** |

338 imágenes pedidas cubiertas con 414 figuras. Por libro:

| Libro | Clases con imagen | Clases sin imagen (que la necesitan) |
|---|---|---|
| Gastroenterología | 17 / 23 | gastro-05, gastro-09, gastro-14, gastro-20, gastro-22, gastro-23 |
| Neumología | 14 / 21 | resp-01, resp-03, resp-05, resp-15, resp-16, resp-23, resp-24 |
| Nefrología | 6 / 10 | nefro-13, nefro-18, nefro-19, nefro-20 |
| Diabetes y Dislipidemias | 4 / 6 | diab-02, diab-24 |
| Endocrinología | 10 / 18 | endo-03, endo-04, endo-10, endo-12, endo-17, endo-18, endo-19, endo-23 |
| Hematología | 14 / 17 | hem-11, hem-13, hem-22 |
| Infectología | 14 / 19 | infecto-06, infecto-09, infecto-14, infecto-15, infecto-18 |
| Reumatología | 20 / 22 | reuma-02, reuma-23 |
| Neurología y Geriatría | 12 / 18 | neuro-06, neuro-07, neuro-13, neuro-15, neuro-20, neuro-24 |
| Cirugía General | 13 / 15 | cirugia-09, cirugia-18 |
| Dermatología | 16 / 16 | — |
| Oftalmología | 17 / 18 | oftal-16 |
| Ginecología | 9 / 14 | gin-01, gin-03, gin-06, gin-13, gin-16 |
| Obstetricia | 10 / 14 | ob-14, ob-18, ob-19, ob-20 |
| Pediatría | 8 / 17 | ped-01, ped-02, ped-04, ped-07, ped-11, ped-13, ped-16, ped-17, ped-21 |
| Salud Pública | 0 / 3 | sp-06, sp-08, sp-13 |

## Qué hay en el bucket

- **CTO 14.ª edición** (34 tomos, `Manuales_MIR/14_Edicion/`): todas las especialidades, más Radiología, Anatomía Patológica, Anestesia, Urgencias, Geriatría, Fisiología, etc. Es la fuente principal de imágenes.
- **AMIR** (26 PDF, `Manuales_MIR/` y `Manuales_MIR/17_Edicion/`): Cirugía General, Dermatología, ECG, Endocrinología (2 ediciones), Estadística (2), Ginecología y Obstetricia, Hematología (2), Infecciosas (2), Inmunología (2), Miscelánea (2), Nefrología, Oftalmología, Otorrino, Psiquiatría (2), Reumatología, Urología (2), Libro Gordo (preguntas MIR 2016-2025) y Temas de Actualidad 2026.
- Otros: Derrame pleural (Entiendo EUNACOM), Referencias bibliográficas MIR 2025 (Ministerio de Sanidad).
- El resto del bucket son videos (Sketchy, Boards and Beyond, `Modulo 1/` de clases) y 9 PDF de Sketchy.
- El manual AMIR de ECG tiene los trazados como dibujo vectorial: no salen como imagen, pero se pueden renderizar las páginas completas (útil para hiperkalemia, QT corto/largo, etc.).

## Libros que no están en el bucket

Para los huecos de abajo. Los primeros cubren casi todo lo que falta.

| Libro | Cubre |
|---|---|
| Guía Perinatal MINSAL 2015 | CTG adicionales, test de helecho, mastitis puerperal, hemorragia posparto (ob-14, ob-18, ob-19) |
| Meneghello *Pediatría* o atlas pediátrico | Capurro, croup (signo del campanario), NAC pediátrica, deshidratación, lactancia (ped-04, 06, 07, 11, 16) |
| Norma técnica de supervisión de salud infantil MINSAL | Curvas OMS (ped-01); Bhutani/Kramer se pueden dibujar (ped-17) |
| AMIR Cardiología, Neumología, Digestivo, Neurología, Pediatría, Traumatología | No están en el bucket; tienen imágenes distintas a las de CTO |
| Atlas de dermatología (Fitzpatrick) | Comedones, acné nódulo-quístico, rinofima, cuerno cutáneo, SSJ con mucosas, xantomas eruptivos |
| Atlas de endocrinología / semiología | Addison (hiperpigmentación), Trousseau/Chvostek, hipotiroidismo congénito, raquitismo (endo-04, 12, 17, 19) |

Se pueden **dibujar en SVG** sin libro: espirometría (resp-01), curvas OMS (ped-01), Bhutani (ped-17), ROC (sp-08), ciclo menstrual (gin-01), PALM-COEIN (gin-03), POP-Q (gin-06), grados de RVU (ped-13), Dix-Hallpike/Epley (neuro-20), cascada de coagulación (hem-11), etapas ERC (nefro-18), serología VHB (gastro-14), informe DEXA (endo-18), diseños de estudio (sp-06) y el certificado de defunción (sp-13).

## Detalle por clase

Formato: ítem → figura elegida (libro, página, pie). Las alternativas quedan en `classes/media/image_picks.json`.

### Gastroenterología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| gastro-01 ★★ | esófago de Barrett (endoscopía) | CTO Digestivo p.27 | Figura 4.5. Esófago de Barrett. |
| gastro-01 ★★ | esofagitis | CTO Digestivo p.26 | Figura 4.3. Esofagitis (endoscopia). |
| gastro-02 ★ | úlcera gástrica (Forrest IIc) | CTO Digestivo p.63 | Figura 10.6. Úlcera gástrica con puntos de hematina sobre un fondo de fibrina (Forrest IIc). |
| gastro-03 ★★ | manometría de alta resolución acalasia I-III | CTO Digestivo p.18 | Figura 3.6. MAR de acalasia de tipo I o clásica. |
| gastro-04 ★★★ | neumoperitoneo bajo diafragma | CTO Digestivo p.65 | Figura 10.9. Perforación pilórica: neumoperitoneo bajo hemidiafragma derecho. |
| gastro-05 ★ | *sin imagen en los manuales* | | ESQUEMA: Borrmann |
| gastro-06 ★★ | hernia de hiato paraesofágica (RX) | CTO Digestivo p.35 | Figura 4.25. Rx lateral de tórax: hernia de hiato paraesofágica. Se observa una masa mediastínica con nivel hi |
| gastro-09 ★★ | *sin imagen en los manuales* | | FOTO: dermatitis herpetiforme; FROTIS: atrofia vellositaria |
| gastro-10 ★★ | colitis ulcerosa (endoscopía) | CTO Digestivo p.103 | Figura 16.1. Mucosa con afectación continua en forma de microulceraciones en la colitis ulcerosa (mucosa granu |
| gastro-10 ★★ | Crohn (endoscopía) | CTO Digestivo p.104 | Figura 16.4. Visión endoscópica de la enfermedad de Crohn con afectación de colon. |
| gastro-10 ★★ | Crohn ileal (TC / signo de la cuerda) | CTO Radiología p.40 | Figura 2.36. TC en paciente con enfermedad de Crohn con un engrosamiento del íleon terminal (flecha roja) e hi |
| gastro-10 ★★ | CU enema (colon sin haustras) | CTO Radiología p.40 | Figura 2.38. Enema opaco en paciente con colitis ulcerosa que demuestra un colon descendente sin haustras y úl |
| gastro-11 ★ | pólipo pediculado | CTO Digestivo p.119 | Figura 17.3. Pólipo con pedículo estrecho. |
| gastro-11 ★ | tipos de pólipos — *esquema* | CTO Digestivo p.119 | Figura 17.1. Tipos de pólipos. |
| gastro-12 ★★ | prolapso hemorroidal grado IV | CTO Digestivo p.149 | Figura 21.4. Prolapso hemorroidal de grado IV en crisis aguda. |
| gastro-12 ★★ | fístulas perianales — *esquema* | CTO Digestivo p.150 | Figura 21.7. Fístulas perianales: se clasifican por su localización. |
| gastro-13 ★★ | colédoco dilatado (ECO / colangio-RM) | CTO Radiología p.45 | Figura 2.50. Ecografía abdominal que demuestra una dilatación del colédoco (flecha blanca) debida a una coledo |
| gastro-14 ★ | *sin imagen en los manuales* | | CURVA: serología VHB en el tiempo |
| gastro-15 ★★ | arañas vasculares | CTO Digestivo p.211 | Figura 31.3. Arañas vasculares. |
| gastro-15 ★★ | eritema palmar | CTO Digestivo p.212 | Figura 31.4. Eritema palmar. |
| gastro-15 ★★ | cabeza de medusa | CTO Digestivo p.216 | Figura 32.3. Circulación periumbilical “en cabeza de medusa”. |
| gastro-15 ★★ | ECO cirrosis | CTO Radiología p.42 | Figura 2.44. Ecografía hepática con signos de cirrosis, ecogenicidad heterogénea, contornos lobulados (flecha  |
| gastro-16 ★★ | hemangioma (realce periférico) | CTO Radiología p.51 | Figura 2.67. TC abdominal en fase arterial en la que se observa una lesión con realce arterial periférico comp |
| gastro-16 ★★ | quiste hidatídico hepático | CTO Radiología p.43 | Figura 2.46. Ecografía y TC que demuestran quistes hidatídicos, uno de ellos con vesículas hijas (flecha blanc |
| gastro-17 ★★★ | colelitiasis con sombra (ECO) | CTO Radiología p.44 | Figura 2.47. Ecografía que demuestra una vesícula biliar con cálculos que dejan sombra posterior. |
| gastro-17 ★★★ | colecistitis (ECO) | CTO Radiología p.44 | Figura 2.48. Ecografía con signos de colecistitis, engrosamiento parietal, sobredistensión y colelitiasis en s |
| gastro-17 ★★★ | coledocolitiasis CPRE | CTO Digestivo p.246 | Figura 36.6. CPRE en el tratamiento de la coledocolitiasis. A la izquierda, CPRE con imágenes de cálculos en v |
| gastro-18 ★★ | pancreatitis edematosa (TC) | CTO Digestivo p.258 | Figura 38.1. TC en la que se observa una pancreatitis aguda: páncreas edematoso y aumentado de tamaño. |
| gastro-18 ★★ | pancreatitis necrotizante (TC) | CTO Radiología p.47 | Figura 2.58. TC en la que se identifica una pancreatitis necrotizante con ausencia de realce del parénquima he |
| gastro-18 ★★ | seudoquiste | CTO Digestivo p.261 | Figura 38.9. Imagen seudoquiste pancreático. (A) TC de pancreatitis aguda; (B) TC de seudoquiste a las 10 sema |
| gastro-19 ★★ | apendicitis (ECO) | CTO Radiología p.41 | Figura 2.39. A: ecografía con cortes longitudinales; B: corte transversal que demuestra un apéndice (flechas r |
| gastro-19 ★★ | apendicitis flemonosa (pieza) | CTO Digestivo p.157 | Figura 22.1. Apendicitis aguda flemonosa. |
| gastro-19 ★★ | diverticulitis (TC, Hinchey) | CTO Digestivo p.142 | Figura 20.2. (A) TC de diverticulitis no complicada; (B) TC de diverticulitis complicada (Hinchey II) tratada  |
| gastro-20 ★ | *sin imagen en los manuales* | | AngioTAC |
| gastro-21 ★★ | Forrest Ia / IIb / IIc | CTO Digestivo p.63 | Figura 10.2. Hemorragia activa por úlcera péptica. Se observa un vaso sangrando activamente (Forrest Ia). |
| gastro-22 ★★★ | *sin imagen en los manuales* | | RX: moneda vs pila de botón (doble halo) |
| gastro-23 ★ | *sin imagen en los manuales* | | FOTO: signo del pliegue |
| gastro-25 ★★★ | neumatosis (ECN) | CTO Pediatría p.24 | Figura 1.30. Enterocolitis necrotizante: las flechas indican neumatosis intestinal o patrón en miga de pan. |
| gastro-25 ★★★ | ECO píloro (EHP) | CTO Pediatría p.65 | Figura 4.11. Píloro alargado y engrosado en ecografía abdominal. |
| gastro-25 ★★★ | invaginación (ECO) | CTO Pediatría p.70 | Figura 4.18. Invaginación intestinal: ecografía. |
| gastro-25 ★★★ | Hirschsprung | CTO Pediatría p.68 | Figura 4.14. Enfermedad de Hirschsprung: radiografía abdominal con distensión del colon y ausencia de aire dis |
| gastro-25 ★★★ | hernia diafragmática congénita | CTO Radiología p.153 | Figura 7.24. Hernia diafragmática congénita. Niña de un día de edad, nacida a término. Radiografía AP de tórax |
| gastro-25 ★★★ | malrotación y vólvulo | CTO Radiología p.149 | Figura 7.11. Malrotación y vólvulo. Varón de dos meses de edad con vómitos biliosos. A: tránsito baritado most |
| gastro-26 ★★ | rotura esplénica (TC) | CTO Cirugía General p.69 | Figura 9.4. Rotura esplénica (flecha blanca) con desestructuración, pérdida de contigüidad del polo superior y |

### Neumología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| resp-01 ★★★ | *sin imagen en los manuales* | | CURVA: flujo-volumen normal / obstructiva / restrictiva |
| resp-03 ★★ | *sin imagen en los manuales* | | CURVA: espirometría con respuesta a broncodilatador; FOTO técnica inhalatoria |
| resp-04 ★★ | tipos de enfisema — *esquema* | CTO Neumología p.43 | Figura 6.1. Tipos de enfisema. |
| resp-05 ★ | *sin imagen en los manuales* | | RX |
| resp-06 ★★★ | consolidación lobar | CTO Radiología p.13 | Figura 1.26. Neumonía bacteriana típica en el lóbulo superior derecho, con contornos mal definidos a excepción |
| resp-06 ★★★ | broncograma aéreo | CTO Radiología p.10 | Figura 1.17. Broncograma aéreo en consolidaciones pulmonares (flechas rojas). |
| resp-08 ★★ | patrones RX por germen | CTO Infecciosas p.56 | Klebsiella pneumoniae Tuberculosis (diversos patrones) Mycoplasma (perihiliar) |
| resp-09 ★★★ | absceso pulmonar | CTO Radiología p.16 | Figura 1.34. Afectación piógena pulmonar: A: absceso. B: embolismos sépticos (flechas). |
| resp-10 ★★★ | TBC: Ghon, cavitación | CTO Radiología p.14 | Figura 1.29. Diferentes aspectos radiológicos de la TBC pulmonar. A: complejo de Ghon. B y C: TBC secundaria.  |
| resp-10 ★★★ | TBC miliar | CTO Radiología p.13 | Figura 1.25. Tuberculosis (TBC) miliar. |
| resp-11 ★★★ | derrame pleural | CTO Neumología p.111 | Figura 11.1. Derrame pleural derecho. |
| resp-12 ★★ | derrame encapsulado | CTO Neumología p.111 | Figura 11.3. Derrame encapsulado en hemitórax izquierdo. |
| resp-13 ★★★ | neumotórax | CTO Neumología p.116 | sión clínica depende de la reserva ventilatoria del paciente y del grado de |
| resp-14 ★★★ | neumotórax a tensión (TC/RX) | CTO Cirugía General p.71 | Figura 9.8. Neumotórax a tensión (*): colapso del pulmón derecho sobre su hilio (flecha azul) con desviación d |
| resp-15 ★ | *sin imagen en los manuales* | | RX |
| resp-16 ★★ | *sin imagen en los manuales* | | TAC: calcificación benigna ("palomita") vs espiculado |
| resp-17 ★★★ | masa pulmonar (TC) | CTO Neumología p.139 | Varón de 68 años, fumador activo con IPA acumulado de 50, que consulta por cuadro clínico de aumento de su tos |
| resp-17 ★★★ | adenocarcinoma / epidermoide (histología) | CTO Neumología p.125 | Figura 13.1. Adenocarcinoma de pulmón (cortesía del Servicio de Anatomía Patológica del Hospital Universitario |
| resp-18 ★★★ | FPI RX y TC | CTO Neumología p.73 | Figura 9.3. Fibrosis pulmonar idiopática (Rx de tórax) PA. |
| resp-18 ★★★ | patrones intersticiales | CTO Neumología p.80 | Figura 9.8. Patrones radiológicos de las enfermedades intersticiales. |
| resp-19 ★★ | angioTC TEP | CTO Neumología p.103 | Ante una TC nor mal y sospecha clínica alta, se deben llevar a cabo otras |
| resp-19 ★★ | arteriografía pulmonar | CTO Neumología p.104 | También se debe realizar en pacientes que se vayan a someter a algún tipo |
| resp-20 ★★ | bronquiectasias (TC) | CTO Neumología p.68 | y signos de secreciones impactadas (patrón de “árbol en brote”). |
| resp-22 ★★ | SDRA infiltrado bilateral | CTO Neumología p.35 | Figura 5.1. Síndrome de distrés respiratorio del adulto donde se objetivan infiltrados alveolares bilaterales. |
| resp-23 ★ | *sin imagen en los manuales* | | ESQUEMA: colapso de vía aérea |
| resp-24 ★ | *sin imagen en los manuales* | | ESQUEMA |

### Nefrología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| nefro-01 ★ | sedimento: hematuria glomerular | CTO Nefrología p.33 | Figura 3.1. Sedimento urinario que indica hematuria glomerular |
| nefro-02 ★ | tipos de cilindros — *esquema + foto* | CTO Nefrología p.34 | Figura 3.5. Principales tipos de cilindros que se pueden ver en el sedimento urinario. |
| nefro-09 ★★★ | ECG hiperpotasemia (T picudas → sinusoidal) | CTO Nefrología p.23 | Figura 2.5. Trazados electrocardiográficos de la hiperpotasemia tóxica. (A) [K]p = 6,8 mEq/L; (B) [K]p = 9,1 m |
| nefro-10 ★★★ | ECG hipopotasemia (ondas U) | CTO Nefrología p.22 | Figura 2.3. Trazados electrocardiográficos típicos de la hipopotasemia tóxica: ondas U en precordiales. |
| nefro-13 ★ | *sin imagen en los manuales* | | FOTO: edema / orina espumosa |
| nefro-15 ★★ | cilindro hemático | AMIR Nefrología 17ª p.46 | Figura 1. Cilindro hemático. |
| nefro-15 ★★ | tira de orina hematuria/proteinuria | CTO Pediatría p.81 | Figura 5.1. Tira de orina con hematuria y proteinuria. |
| nefro-18 ★ | *sin imagen en los manuales* | | ESQUEMA: etapas KDIGO |
| nefro-19 ★ | *sin imagen en los manuales* | | ESQUEMA |
| nefro-20 ★ | *sin imagen en los manuales* | | AngioTAC/RM |
| nefro-21 ★ | sedimento con leucocituria | CTO Nefrología p.33 | Figura 3.3. Sedimento urinario con leucocituria, agregados leucocitarios y hematuria en el contexto de una nef |

### Diabetes y Dislipidemias

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| diab-02 ★ | *sin imagen en los manuales* | | FOTO: acantosis nigricans |
| diab-17 ★ | ECG hipopotasemia | CTO Nefrología p.22 | Figura 2.3. Trazados electrocardiográficos típicos de la hipopotasemia tóxica: ondas U en precordiales. |
| diab-21 ★★★ | retinopatía diabética — *reusar de oftal-12* | CTO Oftalmología p.68 | Figura 11.5. Retinografía que muestra retinopatía diabética en el ojo derecho con hemorragia vítrea inferior. |
| diab-21 ★★★ | hemorragias retinianas RD | CTO Oftalmología p.67 | Figura 11.4). |
| diab-22 ★★★ | úlcera / necrosis pie diabético | CTO Endocrinología p.114 | Figura 5.6. (A) Amputación del primer dedo del pie derecho por necrosis isquémica. (B) Úlcera neuropática en z |
| diab-22 ★★★ | clasificación de Wagner — *tabla* | CTO Endocrinología p.113 | Grado 3 Grado 4 |
| diab-23 ★★ | xantelasma | AMIR Endocrinología p.120 | y Hiperlipemias mixtas: anticonceptivos orales, alcoho- |
| diab-24 ★★ | *sin imagen en los manuales* | | FOTO: xantomas eruptivos; suero lechoso |

### Endocrinología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| endo-02 ★ | clínica del hipotiroidismo — *ilustración* | CTO Endocrinología p.55 | Figura 3.8. Clínica del hipotiroidismo. |
| endo-03 ★ | *sin imagen en los manuales* | | FOTO |
| endo-04 ★★ | *sin imagen en los manuales* | | FOTO: macroglosia, hernia umbilical |
| endo-05 ★ | ECO Hashimoto | CTO Endocrinología p.55 | Figura 3.7. Ecografía de tiroiditis de Hashimoto (lóbulo tiroideo derecho con ecogenicidad heterogénea, global |
| endo-06 ★★★ | Graves (bocio difuso) | CTO Endocrinología p.57 | Figura 3.9. Enfermedad de Graves-Basedow. |
| endo-06 ★★★ | oftalmopatía / exoftalmos | CTO Endocrinología p.57 | Figura 3.10. Oftalmopatía infiltrativa tiroidea. |
| endo-06 ★★★ | ECO doppler Graves | AMIR Endocrinología p.38 | Figura 7. Ecografía doppler de tiroides de una enfermedad de Graves, en la que se obseva hipervascularización  |
| endo-09 ★★★ | nódulo con criterios de malignidad (ECO doppler) | AMIR Endocrinología p.46 | Figura 17. Ecografía doppler de un nódulo con criterios de malignidad. Se trata de un nódulo tiroideo de 1 cm  |
| endo-09 ★★★ | bocio multinodular (ECO) | AMIR Endocrinología p.40 | Figura 11. Bocio multinodular. Ecografía tiroidea que muestra un gran nódulo en el lado derecho (rodeado por u |
| endo-09 ★★★ | gammagrafía nódulo frío | AMIR Endocrinología p.44 | Figura 16. Gammagrafía de tiroides. Nódulo frío. Figura 14. Gammagrafía tiroidea. Enfermedad de Graves. Se obj |
| endo-10 ★ | *sin imagen en los manuales* | | FROTIS: núcleos "ojos de Annie" (papilar) |
| endo-11 ★★★ | estrías violáceas | CTO Endocrinología p.77 | Figura 4.2. Estrías abdominales en el síndrome de Cushing |
| endo-11 ★★★ | fenotipo cushingoide — *ilustración* | CTO Endocrinología p.76 | la debilidad muscular o miopatía proximal, las estrías rojo-vinosas (> 1 cm) |
| endo-12 ★★★ | *sin imagen en los manuales* | | FOTO: hiperpigmentación de pliegues y mucosa oral |
| endo-15 ★ | incidentaloma suprarrenal / MIBG | AMIR Endocrinología p.59 | Figura 7. Incidentaloma suprarrenal derecho. |
| endo-16 ★ | ECG (reusar) — *revisar: ECG de calcio no encontrado* | CTO Cardiología p.19 | Figura 3.4. ECG de paciente con hiperpotasemia grave con T picudas (flechas), silencio auricular y ECG ancho ( |
| endo-17 ★★★ | *sin imagen en los manuales* | | FOTO: signos de Trousseau y Chvostek; ECG QT largo |
| endo-18 ★★ | *sin imagen en los manuales* | | Informe DEXA: T-score |
| endo-19 ★★ | *sin imagen en los manuales* | | RX/FOTO: rosario raquítico, genu varo |
| endo-20 ★★★ | hemianopsia bitemporal (campimetría) | CTO Endocrinología p.41 | Figura 2.7. Campimetría con hemianopsia bitemporal secundaria a macroadenoma hipofisario. |
| endo-20 ★★★ | adenoma con sangrado (RM) | CTO Endocrinología p.42 | Figura 2.10. Adenoma hipofisario con signos de sangrado. |
| endo-20 ★★★ | efecto masa adenoma — *esquema* | CTO Endocrinología p.40 | Figura 2.6. Clínica por efecto masa de los adenomas hipofisarios. |
| endo-21 ★ | prolactinoma gigante (RM) | AMIR Endocrinología p.24 | Figura 9. Prolactinoma gigante. A. RM sagital potenciada en T1. B. RM coronal, potenciada en T2, que muestra e |
| endo-22 ★★★ | fenotipo acromegálico | CTO Endocrinología p.33 | Figura 2.4. Fenotipo del paciente acromegálico: facies característica, prognatismo, aumento de separación inte |
| endo-23 ★ | *sin imagen en los manuales* | | RM: silla turca vacía |

### Hematología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| hem-03 ★★ | anemia ferropénica microcítica (frotis) | AMIR Hematología p.16 | Figura 1. Anemia ferropénica con microcitosis. |
| hem-03 ★★ | sideroblasto en anillo | AMIR Hematología p.19 | Figura 1. Sideroblasto en anillo. |
| hem-05 ★ | médula normal vs aplasia | AMIR Hematología p.26 | Figura 1. Biopsia de médula ósea normocelular. |
| hem-06 ★★ | macroovalocitos + neutrófilo hipersegmentado | AMIR Hematología p.29 | Figura 1. Frotis de sangre periférica en la anemia megaloblástica: macroo- valocitos y neutrófilo hipersegment |
| hem-07 ★★ | esferocitos | AMIR Hematología p.34 | Figura 2. Esferocitosis hereditaria. |
| hem-08 ★★ | esferocitosis hereditaria | AMIR Hematología p.34 | Figura 2. Esferocitosis hereditaria. |
| hem-08 ★★ | patogenia esferocitosis — *esquema* | CTO Hematología p.30 | Figura 5.2. Patogenia de la esferocitosis. |
| hem-09 ★★ | drepanocitos | AMIR Hematología p.38 | Figura 7. Drepanocitos (células falciformes). |
| hem-09 ★★ | cuerpos de Hb H (alfa-talasemia) | AMIR Hematología p.37 | Figura 6. Cuerpos de inclusion de Hb H. α-talasemia. |
| hem-09 ★★ | cráneo en cepillo (talasemia) | CTO Hematología p.32 | Figura 5.4. Talasemia: cráneo “en cepillo”. |
| hem-10 ★★★ | esquistocitos | CTO Hematología p.10 | Figura 1.5. Esquistocitos o hematíes fragmentados (flecha). |
| hem-11 ★ | *sin imagen en los manuales* | | ESQUEMA: cascada (vía intrínseca/extrínseca) |
| hem-12 ★★ | petequias / púrpura en EEII | AMIR Hematología p.89 | Figura 2. Lesiones purpúricas (sobre todo petequias) en miembros infe- riores en un paciente con una púrpura t |
| hem-13 ★ | *sin imagen en los manuales* | | FOTO: hemartrosis |
| hem-15 ★ | esquistocitos | CTO Hematología p.10 | Figura 1.5. Esquistocitos o hematíes fragmentados (flecha). |
| hem-16 ★★★ | leucemia aguda promielocítica (Auer) | AMIR Hematología p.44 | Figura 1. Frotis de leucemia aguda promielocítica (LAM M3). A. Blastos con núcleo hendido. B. Bastones de Auer |
| hem-16 ★★★ | LAL tipo Burkitt | AMIR Hematología p.44 | Figura 2. Frotis de leucemia aguda linfoblástica L3 (tipo Burkitt). Blastos grandes de citoplasma bas |
| hem-16 ★★★ | infiltración gingival | CTO Hematología p.63 | Figura 10.1. Leucemia aguda: infiltración gingival. |
| hem-17 ★★ | LMC: leucocitosis con desviación izquierda | CTO Hematología p.53 | Figura 8.3. Leucocitosis a expensas de neutrófilos y desviación a la izquierda con presencia de formas inmadur |
| hem-18 ★★ | célula de Reed-Sternberg | CTO Hematología p.69 | Figura 11.1. Célula de Reed-Sternberg (A) y célula lacunar (B). |
| hem-18 ★★ | ensanchamiento mediastínico Hodgkin | CTO Hematología p.71 | Figura 11.4. Linfoma de Hodgkin. Ensanchamiento mediastínico. |
| hem-18 ★★ | Ann Arbor — *esquema* | CTO Hematología p.70 | Figura 11.3. Linfoma de Hodgkin. Clasificación de Ann Arbor-Cotswold. |
| hem-18 ★★ | PET en Hodgkin | AMIR Hematología p.80 | Figura 3. Valoración de la enfermedad de Hodgkin mediante PET. |
| hem-19 ★★★ | lesiones líticas en cráneo | CTO Hematología p.81 | Figura 13.1. Mieloma múltiple. Radiografía lateral de cráneo: lesiones osteolíticas en cráneo |
| hem-19 ★★★ | rouleaux | AMIR Hematología p.74 | Figura 2. Pilas de monedas o rouleaux. |
| hem-19 ★★★ | células plasmáticas en médula | CTO Hematología p.82 | Figura 13.2. Presencia de células plasmáticas en un aspirado de médula ósea. |
| hem-20 ★ | mielofibrosis / dacriocitos | AMIR Hematología p.58 | Figura 3. Aspecto de la médula en la mielofibrosis. |
| hem-20 ★ | médula mielodisplásica | AMIR Hematología p.50 | Figura 1. Médula mielodisplásica. |
| hem-22 ★ | *sin imagen en los manuales* | | RM columna |

### Infectología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| infecto-02 ★★ | púrpura meningocócica | CTO Infecciosas p.38 | Figura 4.1. Púrpura meningocócica en los miembros inferiores de una niña con bacteriemia de Neisseria meningit |
| infecto-02 ★★ | tinta china (criptococo) | CTO Infecciosas p.142 | Figura 17.5. Tinción con tinta china del LCR en un paciente con meningitis criptocócica. |
| infecto-03 ★★ | abscesos cerebrales en anillo (TC/RM) | AMIR Infecciosas p.42 | Figura 3. Abscesos piógenos. Múltiples lesiones con captación de con- traste fina en anillo (imagen de la izqu |
| infecto-04 ★★★ | fascitis necrotizante | CTO Infecciosas p.84 | Figura 9.1. Fascitis necrotizante por Streptococcus pyogenes. |
| infecto-06 ★★ | *sin imagen en los manuales* | | FOTO: opistótonos, risa sardónica |
| infecto-09 ★ | *sin imagen en los manuales* | | (ver infecto-10) |
| infecto-10 ★★★ | sarcoma de Kaposi | AMIR Infecciosas p.157 | Figura 10. Sarcoma de Kaposi. Placas eritrematovioláceas infiltradas localizadas en miembros inferiores (y det |
| infecto-10 ★★★ | toxoplasmosis cerebral (TC) | CTO Infecciosas p.144 | Figura 17.7. TC craneal con contraste de paciente con toxoplasmosis cerebral (lesión con captación de contrast |
| infecto-10 ★★★ | linfoma SNC VIH | AMIR Infecciosas p.155 | Figura 8. Linfoma en paciente VIH positivo (MIR 22, 19). Lesión con cap- tación en anillo de bordes muy irregu |
| infecto-10 ★★★ | colitis por CMV | CTO Infecciosas p.76 | Figura 8.1. Úlceras activas en colon con tejido de granulación exuberante en un paciente con colitis por citom |
| infecto-11 ★★ | mal de Pott | CTO Infecciosas p.69 | Figura 7.8. Mal de Pott con afectación de la columna dorsal. |
| infecto-11 ★★ | escrófula / adenitis TBC | AMIR Infecciosas p.112 | Figura 3. Escrófula. |
| infecto-11 ★★ | TBC miliar (RX) | CTO Infecciosas p.66 | Figura 7.5. Tuberculosis miliar. |
| infecto-12 ★★★ | sífilis secundaria palmoplantar | AMIR Infecciosas p.59 | Las manifestaciones de sífilis secundaria (MIR) general- mente aparecen a las 6-8 semanas tras haberse curado  |
| infecto-12 ★★★ | condilomas planos | CTO Infecciosas p.99 | Figura 11.4. Condilomas planos. |
| infecto-13 ★★★ | herpes genital | CTO Dermatología p.15 | Figura 2.2. Herpes simple genital. |
| infecto-13 ★★★ | condilomas acuminados / verrugas VPH | CTO Dermatología p.18 | Figura 2.7. Manifestaciones del virus del papiloma humano. (A) Verrugas en paciente con VIH. (B) Condilomas ac |
| infecto-13 ★★★ | molusco contagioso | AMIR Dermatología p.61 | Figura 16. Molusco contagioso. Pápulas umbilicadas (depresión central) brillantes en región púbica. Se trataba |
| infecto-14 ★ | *sin imagen en los manuales* | | RX: edema pulmonar no cardiogénico |
| infecto-15 ★★ | *sin imagen en los manuales* | | FOTO: signo de Romaña; RX megaesófago/cardiomegalia; ECG BRD + HBAI |
| infecto-16 ★★ | exantema del dengue | CTO Infecciosas p.134 | Figura 16.9. Exantema característico del dengue. |
| infecto-17 ★★★ | quiste hidatídico | AMIR Infecciosas p.189 | Figura 17. Quiste hidatídico hepático. Se visualizan las hidátides hijas dentro del quiste hidatídico. |
| infecto-18 ★ | *sin imagen en los manuales* | | FOTO: roséola tífica |
| infecto-19 ★★★ | carbunco cutáneo | CTO Infecciosas p.105 | Figura 12.4. Carbunco cutáneo. |
| infecto-20 ★★★ | erisipela | CTO Dermatología p.25 | Figura 4.2. Erisipela. |
| infecto-20 ★★★ | celulitis | AMIR Infecciosas p.67 | Figura 1. Celulitis. |
| infecto-20 ★★★ | impétigo | CTO Dermatología p.25 | Figura 4.1. Impétigo contagioso. |
| infecto-21 ★★ | amigdalitis mononucleósica | CTO Otorrino p.71 | Figura 5.4. Amigdalitis propia del síndrome mononucleósico (hipertrofia de amígdalas palatinas con pseudomembr |
| infecto-21 ★★ | faringoamigdalitis estreptocócica | CTO Infecciosas p.51 | Figura 6.1. Faringoamigdalitis pultácea por Streptococcus pyogenes. |
| infecto-22 ★★★ | sarampión | CTO Pediatría p.97 | Figura 7.2. Sarampión: período exantemático. |
| infecto-22 ★★★ | rubéola | CTO Pediatría p.98 | Figura 7.3. Exantema morbiliforme no confluente en rubeola. |
| infecto-22 ★★★ | escarlatina (lengua, Pastia) | CTO Pediatría p.102 | Figura 7.11. Escarlatina: lengua en fresa blanca. |
| infecto-22 ★★★ | Kawasaki (conjuntivitis, descamación) | CTO Pediatría p.103 | Figura 7.17. Conjuntivitis bilateral no purulenta en enfermedad de Kawasaki. |
| infecto-23 ★★★ | varicela | CTO Infecciosas p.127 | Figura 16.4. Vesículas cutáneas en adulto con varicela. |
| infecto-23 ★★★ | herpes zóster | AMIR Infecciosas p.128 | Figura 3. Herpes zóster. Erupción vesicular unilateral con distribución metamérica. |
| infecto-23 ★★★ | zóster oftálmico | AMIR Infecciosas p.128 | Figura 4. Zóster oftálmico. |

### Reumatología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| reuma-01 ★★ | cristales de urato (luz polarizada) | CTO Reumatología p.49 | Figura 5.3. Cristales de urato en forma de aguja en microscopio con luz polarizada. (Autor: C. Méndez Perles.  |
| reuma-02 ★ | *sin imagen en los manuales* | | FOTO: rodilla |
| reuma-03 ★★★ | cristales de urato | AMIR Reumatología p.20 | Figura 2. Cristales de urato monosódico con forma de aguja (recuerda además que tienen birrefringencia negativ |
| reuma-03 ★★★ | tofos en manos | AMIR Reumatología p.19 | 4. Tofos y artritis gotosa crónica (MIR 14, 15): con el tiempo, si no hay tratamiento, se puede desarrollar un |
| reuma-03 ★★★ | condrocalcinosis (RX rodilla) | AMIR Reumatología p.23 | Figura 4. Condrocalcinosis. Calcificación del espacio articular femorotibial (bilateral) correspondiente al fi |
| reuma-04 ★★★ | Heberden y Bouchard | CTO Reumatología p.64 | Figura 7.1. Nódulos de Heberden (H) y Bouchard (B). |
| reuma-04 ★★★ | artrosis de rodilla (RX) | AMIR Reumatología p.124 | El líquido sinovial es de características mecánicas (aspecto transparente y viscoso, con poca celularidad y gl |
| reuma-05 ★★ | exantema asalmonado (Still) | AMIR Reumatología p.57 | Figura 1. Exantema asalmonado de la enfermedad de Still. |
| reuma-06 ★★★ | AR desviación cubital | AMIR Reumatología p.48 | Figura 1. Artritis reumatoide. Desviación cubital de los dedos y subluxa- ción palmar de las falanges proximal |
| reuma-06 ★★★ | RX manos AR (erosiones) | CTO Reumatología p.27 | 22 |
| reuma-08 ★★★ | eritema malar | CTO Reumatología p.81 | Figura 9.2. Lesiones cutáneas en lupus cutáneo agudo. Eritema malar típico, que respeta ambos surcos nasogenia |
| reuma-10 ★★★ | lupus discoide | CTO Reumatología p.81 | Figura 9.4. Paciente con lupus discoide con afectación facial. Nótese las cicatrices atróficas residuales en z |
| reuma-10 ★★★ | lupus subagudo anular | CTO Reumatología p.81 | Figura 9.3. Lesiones cutáneas de lupus cutáneo subagudo subtipo anular policíclico. Lesiones circinadas con ce |
| reuma-11 ★★ | livedo reticularis | AMIR Reumatología p.39 | Figura 8. Livedo reticularis. |
| reuma-12 ★★★ | esclerodactilia | AMIR Reumatología p.99 | Existe una forma de esclerodermia o morfea generalizada y otra circunscrita, caracterizadas por la aparición d |
| reuma-13 ★★★ | pápulas de Gottron | AMIR Reumatología p.127 | Figura 1. Pápulas de Gottron. Imagen preguntada en el MIR 2022. |
| reuma-13 ★★★ | heliotropo — *de Dermatologia (CTO) p119* | CTO Dermatología p.120 | 24. Dermatosis paraneoplásicas · DM |
| reuma-13 ★★★ | heliotropo | CTO Dermatología p.119 | Figura 24.2. Dermatomiositis (eritema en heliotropo). |
| reuma-14 ★★★ | Raynaud (palidez/cianosis) | AMIR Reumatología p.98 | Figura 1. Fenómeno de Raynaud. Fase de palidez y fase de cianosis. |
| reuma-14 ★★★ | capilaroscopia | AMIR Reumatología p.100 | Figura 3. Capilaroscopia patológica, con megacapilares y microhemorragias. |
| reuma-15 ★ | parótida en Sjögren | AMIR Reumatología p.121 | Figura 1. Sjögren primario. Linfoma de parótida. |
| reuma-16 ★★ | sacroilitis RX | AMIR Reumatología p.79 | Figura 4. Sacroilitis radiográfica. A. Grado 3 bilateral. B. Sacroilitis grado 2 derecha y grado 1 izquierda. |
| reuma-17 ★★★ | columna en EA (sindesmofitos / bambú) | AMIR Reumatología p.79 | Figura 5. Cambios radiológicos típicos en la columna en EA. Izquierda: esclerosis (ángulos “brillantes). Centr |
| reuma-18 ★★★ | artropatía psoriásica IFD | AMIR Reumatología p.81 | Figura 8. Artropatía psoriásica con afectación de IFD (a diferencia de la AR). |
| reuma-18 ★★★ | dactilitis | AMIR Reumatología p.81 | Figura 9. Dactilitis en paciente con artritis psoriásica. |
| reuma-19 ★★ | balanitis circinada + queratodermia | AMIR Reumatología p.83 | Figura 11. A. Balanitis circinada. B. Queratodermia blenorrágica. |
| reuma-20 ★★★ | aftas orales Behçet | AMIR Reumatología p.41 | Figura 9. Behçet. A. Aftas orales. B. Uveítis posterior. |
| reuma-21 ★★ | halo ecográfico arteritis temporal | CTO Reumatología p.72 | Figura 8.6. Halo (*) hipoecoico en una ecografía de arteritis temporal (A). La PET-TC es otra técnica de image |
| reuma-21 ★★ | angiografía (Takayasu) — *revisar pie* | CTO Reumatología p.73 | Figura 8.5B y Figura 8.7). |
| reuma-22 ★★★ | púrpura palpable | AMIR Reumatología p.38 | El signo distintivo de la vasculitis por hipersensibilidad es la presencia de púrpura palpable en la piel (MIR |
| reuma-23 ★ | *sin imagen en los manuales* | | ESQUEMA |
| reuma-24 ★★ | aplastamientos vertebrales | AMIR Reumatología p.88 | Figura 1. Aplastamientos vertebrales múltiples en vertebras dorsales, con aumento de la cifosis dorsal. |

### Neurología y Geriatría

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| neuro-01 ★★★ | signos precoces TC (ACM hiperdensa) | CTO Radiología p.62 | Figura 3.5. A: se identifica hiperdensidad de ACM derecha; B: se identifica borramiento de cabeza de núcleo ca |
| neuro-01 ★★★ | infartos establecidos por territorio (TC) | CTO Radiología p.63 | Figura 3.7. Imágenes de TC de cráneo basal (sin contraste i.v.). Se muestran diferentes infartos establecidos, |
| neuro-01 ★★★ | angio-TC oclusión ACM | CTO Radiología p.65 | Figura 3.10. Angio-TC muestra oclusión de la ACM derecha (flecha). |
| neuro-01 ★★★ | territorios vasculares — *esquema* | CTO Neurología p.35 | Figura 4.1. Territorios vasculares cerebrales |
| neuro-02 ★ | estenosis carotídea (angiografía) | CTO Neurología p.36 | Figura 4.2. Angiografía carotídea donde se aprecia afectación aterosclerótica grave en el origen de la arteria |
| neuro-03 ★★★ | hematoma intraparenquimatoso (TC) | CTO Neurología p.42 | Figura 4.11. TC craneal en la que se aprecia un hematoma intraparenquimatoso profundo (flecha). |
| neuro-04 ★★★ | HSA de la convexidad (TC) — *revisar: buscar HSA en cisternas* | CTO Neurología p.176 | de la convexidad. Ante este hallazgo, es imprescindible realizar posterior­ |
| neuro-04 ★★★ | aneurisma sacular (arteriografía) | CTO Neurología p.45 | Figura 4.14. Arteriografía cerebral con aneurisma sacular. |
| neuro-04 ★★★ | localización de aneurismas — *esquema* | CTO Neurología p.43 | Figura 4.12. Localización principal de los aneurismas cerebrales. |
| neuro-05 ★★ | trombosis de seno (signo delta) | CTO Neurología p.41 | Figura 4.8. TC craneal de paciente con trombosis de seno longitudinal superior, donde se observa identificado  |
| neuro-06 ★ | *sin imagen en los manuales* | | ESQUEMA: aura (espectro de fortificación) |
| neuro-07 ★ | *sin imagen en los manuales* | | FOTO: Horner con lagrimeo |
| neuro-08 ★★ | EEG punta-onda 3 Hz | CTO Neurología p.73 | imagen. |
| neuro-11 ★★ | postura parkinsoniana — *ilustración* | CTO Neurología p.54 | Figura 5.6. Paciente con enfermedad de Parkinson. |
| neuro-13 ★ | *sin imagen en los manuales* | | FOTO: espiral de Archimedes |
| neuro-14 ★★ | PET-FDG Alzheimer | CTO Neurología p.29 | Figura 3.2. Dos cortes de un estudio PET-FDG en un mismo paciente con enfermedad de Alzheimer. Se observa hipo |
| neuro-15 ★ | *sin imagen en los manuales* | | RM |
| neuro-17 ★★★ | timoma (TC mediastino) | CTO Radiología p.22 | Figura 1.50. Diferentes lesiones mediastínicas. A: bocio endotorácico; B: timoma; C y D: tumores de origen neu |
| neuro-17 ★★★ | EMG fibra única | CTO Neurología p.103 | Figura 12.3. Electromiografía de fibra única de un paciente con miastenia gravis que demuestra una prolongació |
| neuro-18 ★★★ | placas EM (RM) | CTO Radiología p.73 | Figura 3.23. Imágenes axiales de RM. A y B: secuencias FLAIR; C: T2; D: imagen sagital ponderada en T2. Escler |
| neuro-18 ★★★ | neuritis óptica (RM) | CTO Radiología p.74 | Figura 3.25. Imagen ponderada en T2, plano coronal. Hiperintensidad de señal del nervio óptico izquierdo (flec |
| neuro-19 ★★★ | parálisis facial periférica (Bell) | AMIR Otorrino p.29 | Figura 35. Parálisis facial periférica derecha (de Bell). Se observa desvia- ción de la comisura bucal y lagof |
| neuro-19 ★★★ | central vs periférica — *ilustración* | CTO Neurología p.14 | Figura 1.11. Parálisis facial izquierda. Se observa la diferencia entre el origen central y periférico, sobre  |
| neuro-20 ★★ | *sin imagen en los manuales* | | ESQUEMA: Dix-Hallpike y Epley |
| neuro-23 ★★★ | fracturas subcapitales (Garden) — *esquema* | CTO Traumatología p.25 | Figura 1.29. Clasificación de Garden de las fracturas intracapsulares (subcapitales) del fémur proximal. |
| neuro-23 ★★★ | fractura pertrocantérea | CTO Traumatología p.26 | Figura 1.30. Fracturas de la extremidad proximal del fémur. (A) Fractura pertrocantérea. (B) Tratamiento con c |
| neuro-24 ★ | *sin imagen en los manuales* | | ESQUEMA |

### Cirugía General

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| cirugia-01 ★★ | apendicitis (ECO / pieza / RX) | CTO Radiología p.41 | Figura 2.39. A: ecografía con cortes longitudinales; B: corte transversal que demuestra un apéndice (flechas r |
| cirugia-02 ★★★ | colelitiasis / colecistitis (ECO) | CTO Radiología p.44 | Figura 2.47. Ecografía que demuestra una vesícula biliar con cálculos que dejan sombra posterior. |
| cirugia-03 ★★ | diverticulitis (TC) | CTO Digestivo p.142 | Figura 20.2. (A) TC de diverticulitis no complicada; (B) TC de diverticulitis complicada (Hinchey II) tratada  |
| cirugia-04 ★★★ | niveles hidroaéreos | CTO Digestivo p.163 | Figura 23.2. Niveles hidroaéreos: obstrucción mecánica de intestino delgado. |
| cirugia-04 ★★★ | vólvulo de sigma (grano de café) | CTO Radiología p.26 | Figura 2.5. Vólvulo de sigma con el signo del grano de café. |
| cirugia-04 ★★★ | vólvulo de ciego | CTO Radiología p.26 | Figura 2.4. Vólvulo de ciego con el signo de la coma. |
| cirugia-04 ★★★ | obstrucción de colon | CTO Radiología p.26 | Figura 2.3. Obstrucción de intestino grueso con dilatación del marco cólico y sin gas en ampolla rectal. |
| cirugia-05 ★★★ | neumoperitoneo | CTO Digestivo p.65 | Figura 10.9. Perforación pilórica: neumoperitoneo bajo hemidiafragma derecho. |
| cirugia-06 ★★ | hernia inguinal bilateral gigante | CTO Cirugía General p.56 | Figura 8.3. Paciente con hernia inguinal bilateral gigante con “pérdida de derecho a domicilio”, que presenta  |
| cirugia-06 ★★ | hernia umbilical incarcerada | CTO Cirugía General p.56 | Figura 8.2. Signos de inflamación local (rubor, tumor y dolor) por hernia umbilical incarcerada pendiente de i |
| cirugia-07 ★★ | prolapso hemorroidal | CTO Digestivo p.149 | Figura 21.4. Prolapso hemorroidal de grado IV en crisis aguda. |
| cirugia-08 ★★★ | hidradenitis supurativa — *pilonidal y lipoma: no hay foto* | CTO Dermatología p.61 | Figura 10.4. Hidradenitis supurativa. |
| cirugia-09 ★ | *sin imagen en los manuales* | | ESQUEMA |
| cirugia-10 ★★★ | neumotórax (RX) | CTO Neumología p.116 | sión clínica depende de la reserva ventilatoria del paciente y del grado de |
| cirugia-10 ★★★ | hemotórax / derrame (RX) | CTO Neumología p.111 | Figura 11.1. Derrame pleural derecho. |
| cirugia-10 ★★★ | neumotórax a tensión | CTO Cirugía General p.71 | Figura 9.8. Neumotórax a tensión (*): colapso del pulmón derecho sobre su hilio (flecha azul) con desviación d |
| cirugia-11 ★★ | rotura esplénica (TC) | CTO Cirugía General p.69 | Figura 9.4. Rotura esplénica (flecha blanca) con desestructuración, pérdida de contigüidad del polo superior y |
| cirugia-12 ★★★ | hematoma epidural vs subdural (TC) | CTO Neurología p.142 | Figura 18.6. (A) Hematoma epidural con forma de lente biconvexa; (B) Hematoma subdural agudo con forma de “sem |
| cirugia-13 ★★★ | quemaduras 2º y 3º grado | CTO Cirugía General p.37 | Figura 6.5. Quemaduras de segundo y tercer grado en una mano. |
| cirugia-17 ★★ | fascitis necrotizante postoperatoria | CTO Cirugía General p.26 | Figura 5.4. Fascitis necrotizante tras safenectomía. Se observa el miembro edematizado, exudativo, brillante y |
| cirugia-17 ★★ | hematoma de herida | CTO Cirugía General p.25 | Figura 5.2. Hematoma a tensión tras hernioplastia umbilical. Se identifican las distintas tonalidades de la pi |
| cirugia-18 ★ | *sin imagen en los manuales* | | FOTO |

### Dermatología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| derma-01 ★★★ | pápula / púrpura palpable | CTO Dermatología p.8 | Figura 1.5. Púrpura palpable en una vasculitis por hipersensibilidad. |
| derma-01 ★★★ | liquenificación | CTO Dermatología p.9 | Figura 1.6. Liquenificación. |
| derma-01 ★★★ | exantema maculopapular | CTO Dermatología p.9 | Figura 1.7. Exantema morbiliforme de origen vírico. |
| derma-01 ★★★ | vesícula | CTO Dermatología p.16 | Figura 2.4. Vesículas típicas en paciente con varicela. |
| derma-01 ★★★ | ampolla | CTO Dermatología p.72 | Figura 13.3. Penfigoide ampolloso. Ampollas tensas. Signo de Nikolsky negativo. |
| derma-01 ★★★ | pústula | AMIR Dermatología p.40 | Figura 3. Psoriasis pustulosa localizada: pustulosis palmar. |
| derma-01 ★★★ | habón | CTO Dermatología p.49 | Figura 8.1. Habones, urticaria aguda. |
| derma-01 ★★★ | erosión | AMIR Dermatología p.56 | Figura 3. Síndrome de la piel escaldada estafilocócica. Obsérvense la eri- trodermia macular y las tres erosio |
| derma-01 ★★★ | úlcera | AMIR Dermatología p.21 | Figura 5. Calcifilaxis urémica. Úlcera necrótica dolorosa en cara posterolateral de pierna izquierda. El lecho |
| derma-01 ★★★ | pápula umbilicada | AMIR Dermatología p.61 | Figura 16. Molusco contagioso. Pápulas umbilicadas (depresión central) brillantes en región púbica. Se trataba |
| derma-02 ★★★ | acné pápulo-pustular | CTO Dermatología p.59 | Figura 10.1. Acné papulopustuloso moderado con tendencia a la cicatrización en la cara. |
| derma-02 ★★★ | reacción acneiforme — *comedones y nódulo-quístico: no hay foto* | CTO Dermatología p.53 | Figura 9.2. Reacción acneiforme por IEGFR. |
| derma-03 ★★★ | rosácea — *rinofima: no hay foto* | CTO Dermatología p.60 | Figura 10.3. Rosácea. Obsérvese la falta de comedones. |
| derma-04 ★★★ | alopecia areata | CTO Dermatología p.62 | Figura 10.6. Alopecia areata. |
| derma-04 ★★★ | androgenética (Hamilton) — *esquema* | CTO Dermatología p.62 | Figura 10.5. Patrones clínicos de la alopecia androgénica o calvicie común, según Hamilton. |
| derma-04 ★★★ | tiña capitis | AMIR Dermatología p.63 | Figura 22. Tinea capitis no inflamatoria por T. tonsurans. Apréciense las placas eritematosas anulares en la z |
| derma-05 ★★★ | psoriasis en placas | AMIR Dermatología p.39 | Figura 1. Psoriasis en placas. |
| derma-05 ★★★ | guttata | AMIR Dermatología p.40 | Figura 2. Psoriasis guttata. |
| derma-05 ★★★ | pitting ungueal | AMIR Dermatología p.40 | Figura 5. Psoriasis ungueal: pitting. |
| derma-05 ★★★ | Koebner | CTO Dermatología p.10 | Figura 1.8. Fenómeno de Koebner: liquen plano sobre cicatriz de laparotomía. |
| derma-06 ★★★ | dermatitis atópica — *solo 1 foto; falta lactante vs escolar* | AMIR Dermatología p.91 | Figura 1. Dermatitis atópica. |
| derma-07 ★★★ | eccema de contacto — *seborreica: no hay foto* | CTO Dermatología p.43 | Figura 7.1. Eccema de contacto alérgico. |
| derma-08 ★★★ | habones | CTO Dermatología p.49 | Figura 8.1. Habones, urticaria aguda. |
| derma-08 ★★★ | angioedema | CTO Dermatología p.50 | Figura 8.2. Edema angioneurótico familiar de Quincke (angioedema hereditario). |
| derma-09 ★★★ | NET — *SSJ mucosas: no hay foto* | AMIR Dermatología p.105 | Figura 2. Pacientes con diagnóstico de NET |
| derma-10 ★★ | exantema morbiliforme (DRESS) — *sin foto específica de DRESS* | CTO Dermatología p.9 | Figura 1.7. Exantema morbiliforme de origen vírico. |
| derma-11 ★★★ | pénfigo vulgar | AMIR Dermatología p.49 | Figura 4. Pénfigo vulgar. |
| derma-11 ★★★ | penfigoide ampolloso (tensas) | CTO Dermatología p.72 | Figura 13.3. Penfigoide ampolloso. Ampollas tensas. Signo de Nikolsky negativo. |
| derma-12 ★★★ | eritema multiforme | AMIR Dermatología p.106 | Figura 3. Eritema multiforme por VHS. |
| derma-13 ★★★ | melanoma ABCDE | AMIR Dermatología p.78 | Figura 7. Características clínicas ABCDE del melanoma. |
| derma-13 ★★★ | nevus melanocítico | AMIR Dermatología p.99 | Figura 2. Nevus melanocítico |
| derma-14 ★★★ | CBC nodular perlado | CTO Dermatología p.99 | Figura 20.1. Carcinoma basocelular nodular. Brillo perlado con telangiectasias superficiales. |
| derma-14 ★★★ | CEC | CTO Dermatología p.100 | Figura 20.2. Carcinoma epidermoide, espinocelular o escamoso. |
| derma-15 ★★★ | queratosis actínica — *cuerno cutáneo: no hay foto* | CTO Dermatología p.96 | Figura 19.3. Queratosis actínica. |
| derma-16 ★★★ | tiña corporis | AMIR Dermatología p.62 | Figura 19. Tinea corporis en flanco abdominal izquierdo. Apréciese la descamación fina en el borde periférico. |
| derma-16 ★★★ | pitiriasis versicolor | CTO Dermatología p.21 | Figura 3.1. Pitiriasis versicolor. |
| derma-16 ★★★ | escabiosis surco | CTO Dermatología p.31 | Figura 5.3. Escabiosis. Surco acarino. |

### Oftalmología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| oftal-01 ★★★ | inyección conjuntival | CTO Oftalmología p.33 | Figura 6.1. Inyección conjuntival en ojo derecho característica de una conjuntivitis aguda. |
| oftal-01 ★★★ | tabla dif. ojo rojo (inyección ciliar) — *revisar: parece tabla-imagen* | CTO Oftalmología p.62 | Conjuntivitis aguda |
| oftal-02 ★★★ | conjuntivitis aguda | CTO Oftalmología p.33 | Figura 6.1. Inyección conjuntival en ojo derecho característica de una conjuntivitis aguda. |
| oftal-02 ★★★ | conjuntivitis alérgica (vernal / papilar gigante) | CTO Oftalmología p.35 | Figura 6.2. Erupción papilar en párpado superior de ojo izquierdo característica de una conjuntivitis vernal. |
| oftal-03 ★★★ | orzuelo | AMIR Oftalmología p.57 | Figura 3. Orzuelo. |
| oftal-03 ★★★ | blefaritis | AMIR Oftalmología p.57 | Figura 2. Blefaritis. |
| oftal-03 ★★★ | dacriocistitis — *chalazión: no hay foto* | AMIR Oftalmología p.53 | Figura 2. Dacriocistitis aguda. |
| oftal-04 ★★★ | úlcera dendrítica con fluoresceína | CTO Oftalmología p.40 | Figura 7.2. Queratitis herpética (puede apreciarse la característica forma dendrítica). |
| oftal-04 ★★★ | úlcera corneal con hipopion | CTO Oftalmología p.39 | Algunas posibles complicaciones son la perforación, la formación de |
| oftal-05 ★★ | escleritis | CTO Oftalmología p.42 | Figura 7.6. Escleritis en ojo izquierdo. |
| oftal-05 ★★ | epiescleritis | AMIR Oftalmología p.47 | Figura 6. Epiescleritis. |
| oftal-06 ★★★ | glaucoma agudo (pupila media, edema corneal) | AMIR Oftalmología p.36 | Figura 5. Glaucoma agudo. |
| oftal-07 ★★★ | papila glaucomatosa | AMIR Oftalmología p.34 | Figura 2. Papila glaucomatosa. |
| oftal-07 ★★★ | campimetría + papila en GCS — *esquema* | CTO Oftalmología p.52 | Figura 9.2. Evolución campimétrica y papilar del glaucoma crónico simple (GCS). |
| oftal-08 ★★ | catarata | AMIR Oftalmología p.40 | Figura 2. Catarata cortical. |
| oftal-08 ★★ | leucocoria | AMIR Oftalmología p.55 | Figura 1. Leucocoria. |
| oftal-09 ★★ | estrabismo / Hirschberg | CTO Oftalmología p.80 | • De visu. |
| oftal-10 ★★ | DR regmatógeno (fondo) | CTO Oftalmología p.65 | Figura 11.2. Desprendimiento de retina regmnatógeno superior en ojo izquierdo. Puede apreciarse la presencia d |
| oftal-10 ★★ | ecografía DR | CTO Oftalmología p.66 | Figura 11.3. Ecografía de un desprendimiento de retina. |
| oftal-11 ★★★ | mancha rojo cereza (OACR) | CTO Oftalmología p.70 | Figura 11.8. Retinografía que muestra mancha rojo cereza en la oclusión de la arteria central de la retina de  |
| oftal-11 ★★★ | OVCR hemorragias en llama | AMIR Oftalmología p.15 | Figura 6. Hemorragias en llama de una trombosis de la vena central de la retina. |
| oftal-12 ★★★ | retinopatía diabética | CTO Oftalmología p.68 | Figura 11.5. Retinografía que muestra retinopatía diabética en el ojo derecho con hemorragia vítrea inferior. |
| oftal-13 ★★★ | retinopatía hipertensiva | CTO Oftalmología p.69 | Figura 11.7. Retinografía que muestra retinopatía hipertensiva en ojo derecho, estadio IV de Keith-Wagener (se |
| oftal-14 ★★★ | DMAE seca drusas | CTO Oftalmología p.72 | Figura 11.11. Retinografía de ojo izquierdo que muestra DMAE seca con drusas maculares (por cortesía del Servi |
| oftal-14 ★★★ | DMAE húmeda | CTO Oftalmología p.73 | Figura 11.13. DMAE húmeda en ojo izquierdo. Membrana neovascular con hemorragias subretinianas (por cortesía d |
| oftal-15 ★★★ | fractura suelo orbitario (TC) — *hipema y globo abierto: no hay foto* | CTO Oftalmología p.94 | Figura 14.4. Fractura de suelo orbitario (TC orbitaria). Se puede apreciar el atrapamiento del músculo recto i |
| oftal-16 ★★ | *sin imagen en los manuales* | | FOTO: isquemia limbar |
| oftal-17 ★★★ | celulitis preseptal — *orbitaria con proptosis: no hay foto clara* | AMIR Oftalmología p.43 | En la celulitis orbitaria propiamente dicha, la infección se extiende a la órbita produciendo exoftalmos dolor |
| oftal-18 ★★★ | papiledema | CTO Oftalmología p.88 | Figura 13.4. Papiledema por hipertensión intracraneal. |
| oftal-18 ★★★ | pupila de Adie — *Marcus Gunn: esquema propio* | AMIR Oftalmología p.23 | Figura 2. Pupila de Adie (ojo izquierdo) antes y después de la instilación de pilocarpina al 0,125%. La respue |

### Ginecología

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| gin-01 ★★ | *sin imagen en los manuales* | | CURVA: hormonas del ciclo |
| gin-02 ★★ | ovario poliquístico (ECO) | CTO Ginecología y Obstetricia p.35 | Figura 3.1. Imagen ecográfica característica de un ovario con SOP. |
| gin-03 ★ | *sin imagen en los manuales* | | ESQUEMA |
| gin-04 ★★ | mioma intramural / miomas múltiples | CTO Ginecología y Obstetricia p.63 | Figura 6.10. Miomectomía laparoscópica en la que se observa un mioma intramural. |
| gin-04 ★★ | leiomiomas (TC) | CTO Radiología p.138 | Figura 6.23. Leiomiomas: cortes axiales de TC donde se observa un útero de contornos irregulares (A y F) con c |
| gin-05 ★ | endometrioma (ECO) | CTO Ginecología y Obstetricia p.74 | Figura 8.1. Ecografía transvaginal: endometrioma de 9 cm. |
| gin-05 ★ | endometriosis (laparoscopía) | CTO Ginecología y Obstetricia p.75 | Figura 8.2. Laparoscopia por endometriosis. |
| gin-06 ★★ | *sin imagen en los manuales* | | ESQUEMA: POP-Q |
| gin-07 ★ | histerosalpingografía normal | CTO Ginecología y Obstetricia p.50 | Figura 5.2. Histerosalpingografía (HSG) normal con paso de contraste por ambas trompas |
| gin-08 ★ | DIU normoinserto (ECO) | CTO Ginecología y Obstetricia p.45 | Figura 4.1. Ecografía ginecológica. DIU cobre normoinserto en cavidad uterina. |
| gin-09 ★★★ | leucorrea candidiásica | AMIR Ginecología y Obstetricia p.106 | Figura 1. Leucorrea candidiásica. |
| gin-10 ★★★ | liquen escleroso | CTO Ginecología y Obstetricia p.106 | Figura 13.2. Liquen escleroso. Fuente: UPTGI, H. Clínico San Carlos. |
| gin-13 ★★ | *sin imagen en los manuales* | | FOTO: colposcopía (epitelio acetoblanco); ESQUEMA zona de transformación |
| gin-14 ★★★ | microcalcificaciones sospechosas (mamografía) | CTO Radiología p.134 | Figura 6.14 Microcalcificaciones sospechosas: agrupación ramificada. A: esquema; B: proyección normal con marc |
| gin-14 ★★★ | nódulo maligno vs benigno (ECO mama) | CTO Ginecología y Obstetricia p.9 | Figura 1.5. Nódulo de mama con criterios ecográficos de malignidad. Bordes irregulares y eje mayor perpendicul |
| gin-14 ★★★ | fibroadenoma (mamografía) | CTO Radiología p.132 | Figura 6.8. Fibroadenoma. Masa sólida de bordes bien definidos. A y B: en mamografía tiene similar apariencia  |
| gin-14 ★★★ | carcinoma inflamatorio | CTO Ginecología y Obstetricia p.20 | Figura 1.8. Carcinoma inflamatorio de la mama izquierda. |
| gin-15 ★★ | masa anexial sospechosa (ECO) | CTO Ginecología y Obstetricia p.80 | Figura 9.3. Ecografía transvaginal. Masa anexial sospechosa (carcinoma de ovario seroso de grado alto). |
| gin-15 ★★ | quiste simple de ovario | CTO Ginecología y Obstetricia p.80 | Figura 9.2. Ecografía transvaginal. Quiste simple de ovario (benigno). |
| gin-15 ★★ | adenocarcinoma de ovario (TC/RM) | CTO Radiología p.141 | Figura 6.27. Adenocarcinoma de ovario. B: masa sólido-quística pélvica (estrella), con nódulo peritoneal (flec |
| gin-15 ★★ | endometrio engrosado (ECO) / histeroscopia | CTO Ginecología y Obstetricia p.69 | Figura 7.3. Ecografía transvaginal en mujer posmenopáusica. Corte longitudinal con endometrio para descartar c |
| gin-16 ★★ | *sin imagen en los manuales* | | ECO Doppler |

### Obstetricia

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| ob-02 ★★★ | translucencia nucal normal vs patológica | CTO Ginecología y Obstetricia p.117 | Figura 15.2. Translucencia nucal normal (< 3 mm). |
| ob-02 ★★★ | longitud craneocaudal | CTO Ginecología y Obstetricia p.117 | Figura 15.1. Medición de la longitud craneocaudal por ecografía. |
| ob-02 ★★★ | cervicometría | CTO Ginecología y Obstetricia p.159 | Figura 21.1. Medición de longitud cervical por ecografía transvaginal. “Cérvix corto” ≤ 25 mm. |
| ob-03 ★★★ | RCTG normal (reactivo) | CTO Ginecología y Obstetricia p.171 | Figura 23.1. RCTG normal (reactivo) con línea de FCF base a 120 lpm (línea verde), variabilidad de 10 lpm (cor |
| ob-04 ★★★ | Doppler arteria umbilical | CTO Ginecología y Obstetricia p.121 | Figura 15.8. Doppler de arteria umbilical normal. |
| ob-04 ★★★ | ondas Doppler patológicas (tabla) | AMIR Ginecología y Obstetricia p.23 | Flujo REVERSO DUCTUS VENOSO |
| ob-10 ★ | aborto precoz / tardío / gestación interrumpida | CTO Ginecología y Obstetricia p.123 | Figura 16.1. Aborto precoz. |
| ob-11 ★★ | ectópico ampular (ECO) | CTO Ginecología y Obstetricia p.126 | Figura 16.5. Ecografía transvaginal. Gestación ectópica ampular. |
| ob-11 ★★ | diagnóstico de ectópico — *esquema* | CTO Ginecología y Obstetricia p.126 | Figura 16.6. Diagnóstico de gestación ectópica (I). |
| ob-12 ★★★ | mola en "tormenta de nieve" (ECO) | CTO Ginecología y Obstetricia p.129 | Figura 16.8. Mola hidatiforme completa (MHC). Imagen ecográfica típica en “tormenta de nieve” |
| ob-12 ★★★ | mola: vesículas | AMIR Ginecología y Obstetricia p.33 | Figura 5. Mola hidatiforme. Vesículas múltiples de pequeño tamaño. Imagen preguntada en el MIR 2020. |
| ob-13 ★★ | tipos de placenta previa — *esquema* | CTO Ginecología y Obstetricia p.133 | Figura 17.1): |
| ob-13 ★★ | abruptio placentae | AMIR Ginecología y Obstetricia p.38 | Figura 3. A. Abruptio placentae. B. Hematoma del 50% del total de la superficie placentaria en un abruptio. |
| ob-14 ★★ | *sin imagen en los manuales* | | FOTO: cristalización en helecho |
| ob-15 ★ | cervicometría (cérvix corto) | CTO Ginecología y Obstetricia p.159 | Figura 21.1. Medición de longitud cervical por ecografía transvaginal. “Cérvix corto” ≤ 25 mm. |
| ob-16 ★★ | planos de Hodge / presentaciones — *esquema* | CTO Ginecología y Obstetricia p.178 | parto, la pelvis se divide en cuatros planos conocidos como los planos |
| ob-17 ★★★ | deceleraciones tardías / variables / precoces | CTO Ginecología y Obstetricia p.172 | Figura 23.3. Deceleraciones tardías. |
| ob-17 ★★★ | RCTG normal | CTO Ginecología y Obstetricia p.171 | Figura 23.1. RCTG normal (reactivo) con línea de FCF base a 120 lpm (línea verde), variabilidad de 10 lpm (cor |
| ob-18 ★ | *sin imagen en los manuales* | | ESQUEMA: balón, B-Lynch |
| ob-19 ★★ | *sin imagen en los manuales* | | FOTO: mastitis vs absceso |
| ob-20 ★ | *sin imagen en los manuales* | | DOPPLER: ACM |

### Pediatría

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| ped-01 ★★★ | *sin imagen en los manuales* | | CURVA: P/E, T/E, P/T con un caso graficado |
| ped-02 ★ | *sin imagen en los manuales* | | FOTO: hitos |
| ped-04 ★★ | *sin imagen en los manuales* | | FOTO/ESQUEMA: acople correcto vs incorrecto |
| ped-05 ★ | distrés en bronquiolitis | CTO Pediatría p.52 | Figura 3.5. Distrés respiratorio en bronquiolitis. |
| ped-05 ★ | RX bronquiolitis | CTO Pediatría p.52 | Figura 3.6. Bronquiolitis: radiografía de tórax. |
| ped-06 ★★ | epiglotitis "rojo cereza" (diagnóstico diferencial) — *croup: no hay RX campanario* | CTO Pediatría p.50 | Figura 3.2. Color “rojo cereza” característico de la epiglotitis. |
| ped-07 ★★ | *sin imagen en los manuales* | | RX: neumonía redonda |
| ped-08 ★★★ | cuerpo extraño bronquial (RX) | CTO Pediatría p.59 | Figura 3.14. Radiografía anteroposterior de tórax que muestra cuerpo extraño en árbol bronquial derecho provoc |
| ped-10 ★★★ | sarampión | CTO Pediatría p.97 | Figura 7.2. Sarampión: período exantemático. |
| ped-10 ★★★ | rubéola | CTO Pediatría p.98 | Figura 7.3. Exantema morbiliforme no confluente en rubeola. |
| ped-10 ★★★ | exantema súbito | CTO Pediatría p.101 | Figura 7.10. Exantema súbito: fase exantemática. |
| ped-10 ★★★ | escarlatina | CTO Pediatría p.102 | Figura 7.11. Escarlatina: lengua en fresa blanca. |
| ped-10 ★★★ | mano-pie-boca | CTO Pediatría p.100 | Figura 7.7. Enfermedad mano-boca-pie. Exantema en plantas. |
| ped-10 ★★★ | Kawasaki | CTO Pediatría p.103 | Figura 7.17. Conjuntivitis bilateral no purulenta en enfermedad de Kawasaki. |
| ped-10 ★★★ | varicela | CTO Dermatología p.16 | Figura 2.4. Vesículas típicas en paciente con varicela. |
| ped-11 ★★ | *sin imagen en los manuales* | | FOTO: signos de deshidratación |
| ped-12 ★★★ | ECO píloro | CTO Pediatría p.65 | Figura 4.11. Píloro alargado y engrosado en ecografía abdominal. |
| ped-12 ★★★ | invaginación (ECO) | CTO Pediatría p.70 | Figura 4.18. Invaginación intestinal: ecografía. |
| ped-13 ★★ | *sin imagen en los manuales* | | ESQUEMA: grados de reflujo vesicoureteral |
| ped-15 ★ | algoritmo reanimación neonatal — *esquema* | CTO Pediatría p.8 | Figura 1.3. Reanimación neonatal. |
| ped-16 ★★★ | *sin imagen en los manuales* | | FOTO: pezón, oreja, pliegues plantares, piel |
| ped-17 ★★★ | *sin imagen en los manuales* | | CURVA: Bhutani; ESQUEMA zonas de Kramer |
| ped-18 ★★★ | enfermedad de membrana hialina (RX) | CTO Pediatría p.19 | Figura 1.24. Radiografía de enfermedad de membrana hialina (patrón reticulogranular e imágenes de broncograma  |
| ped-18 ★★★ | taquipnea transitoria (RX) | CTO Pediatría p.18 | Figura 1.23. Radiografía de taquipnea transitoria. |
| ped-18 ★★★ | aspiración meconial (RX) | CTO Pediatría p.20 | Figura 1.26. Síndrome de aspiración meconial. |
| ped-21 ★ | *sin imagen en los manuales* | | FOTO: tarjeta de papel filtro |
| ped-22 ★★★ | líneas radiológicas DDC — *esquema* | CTO Traumatología p.79 | Figura 6.10. Líneas radiológicas de referencia en la displasia del desarrollo de la cadera. |
| ped-22 ★★★ | yeso pelvipédico / tratamiento | CTO Traumatología p.80 | Figura 6.13. Yeso pelvipédico en un caso de displasia de cadera en desarrollo bilateral. |

### Salud Pública

| Clase | Imagen | Fuente | Pie de figura |
|---|---|---|---|
| sp-06 ★ | *sin imagen en los manuales* | | ESQUEMA |
| sp-08 ★★ | *sin imagen en los manuales* | | CURVA: ROC |
| sp-13 ★★ | *sin imagen en los manuales* | | Formulario de certificado de defunción con causas I/II llenadas |
