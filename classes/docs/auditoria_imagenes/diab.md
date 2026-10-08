# Auditoría de imágenes — Diabetes y Dislipidemias (diab-01 a diab-24)

Fecha: 2026-10-08 · Solo lectura (no se modificó ninguna clase ni archivo de medios).

Método: se extrajo de cada `classes/lessons/diab-XX.cjs` lo que la clase enseña (títulos, nodos de flujo, tarjetas, tablas, narración de las diapositivas de imagen) y lo que muestra (diapositivas `type: 'image'`; `.mp4` = animación, resto = foto en `classes/media/<src>`). Se cruzó con `classes/media/biblioteca/indice.json` y se abrieron las fotos dudosas y las variantes `_alt` sin usar.

Leyenda: **foto** · **anim** (animación) · **NO** = no se muestra. "¿La necesita?": **sí** = existe una imagen reconocible que el EUNACOM pregunta; **no** = dosis, cortes, criterios, algoritmos.

Nota sobre el libro: `books/dist/Modulo_1_Medicina_Interna/Manual_EUNACOM_Diabetes_Completo_2026.pdf` trae solo 12 imágenes (Imagen 1.2, 4.3, 5.2–5.5) y son **las mismas** que ya usan las clases (acantosis, ECG hipokalemia, retina, pie, xantomas, plasma lipémico). No aporta candidatas nuevas.

Diabetes es una especialidad mayoritariamente de criterios, cortes y fármacos: 13 de 24 clases no necesitan imágenes clínicas. Los vacíos reales se concentran en **retinopatía (diab-21)**, **pie diabético (diab-22)**, **nefropatía (diab-20)** y **dislipidemia familiar (diab-24)**.

## Resumen

| clase | tema | entidades enseñadas (n) | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| diab-01 | Tipos de diabetes (DM1, DM2, LADA, MODY) | 5 | 0 | 2 | 1 | baja |
| diab-02 | Diagnóstico, prediabetes, tamizaje | 7 | 1 | 1 | 0 | baja |
| diab-03 | Diabetes gestacional: diagnóstico | 5 | 0 | 1 | 0 (1 opcional) | baja |
| diab-04 | Metas de control | 4 | 0 | 0 | 0 | baja |
| diab-05 | Ejercicio en diabetes | 5 | 0 | 1 | 0 | baja |
| diab-06 | Tratamiento escalonado DM2 | 6 | 0 | 0 | 0 | baja |
| diab-07 | Metformina y glibenclamida | 4 | 0 | 1 | 0 | baja |
| diab-08 | iSGLT2, GLP-1, iDPP-4 | 5 | 0 | 2 | 1 | baja |
| diab-09 | DMG: tratamiento | 5 | 0 | 0 | 0 | baja |
| diab-10 | HTA en el diabético | 4 | 0 | 1 | 0 | baja |
| diab-11 | Insulinas: farmacocinética | 5 | 0 | 2 | 1 | media |
| diab-12 | Titulación, Somogyi y alba | 5 | 0 | 2 | 0 | baja |
| diab-13 | Hiperglicemia hospitalaria | 4 | 0 | 0 | 0 | baja |
| diab-14 | Hipoglicemia | 6 | 0 | 2 | 0 | baja |
| diab-15 | CAD y estado hiperosmolar: diagnóstico | 6 | 0 | 2 | 0 | baja |
| diab-16 | CAD/EHH: fluidos | 4 | 0 | 1 | 0 | baja |
| diab-17 | CAD/EHH: potasio, insulina, bicarbonato | 4 | 1 | 2 | 0 | baja |
| diab-18 | Resolución y traslape | 3 | 0 | 0 | 0 | baja |
| diab-19 | Edema cerebral e hipofosfemia | 3 | 0 | 1 | 0 (1 opcional) | baja |
| diab-20 | Nefropatía diabética | 4 | 0 | 1 | 1 | media |
| diab-21 | Retinopatía diabética | 8 | 2 (**rotuladas al revés**) | 1 | 4 | **alta** |
| diab-22 | Pie diabético | 8 | 3 (1 mal narrada) | 1 | 3 | **alta** |
| diab-23 | Dislipidemia y estatinas | 5 | 2 | 1 | 0 | baja |
| diab-24 | Hipertrigliceridemia e hipercolesterolemia familiar | 5 | 2 | 0 | 2 | media |
| **Total** | | **120** | **11** | **25** | **13** | 2 alta · 3 media |

## Detalle por clase

### diab-01 · Tipos de diabetes — baja
| entidad | estado | ¿la necesita? |
|---|---|---|
| DM1 (autoinmunidad, déficit absoluto) | anim (A1_tipo1_real) | — |
| DM2 (resistencia, agotamiento) | anim (A2_tipo2_real) | — |
| Signos de resistencia: acantosis nigricans, acrocordones | NO | sí, pero ya se muestra en diab-02 |
| LADA | NO | no |
| MODY | NO | no |

- Falta: foto de **acantosis nigricans / acrocordones** cuando se describe al paciente DM2 (se nombra en "¿Cómo se ve cada paciente?"). Candidatas: `biblioteca/04_diabetes/diab-02/01_acantosis-nigricans__amir-derma_p30.jpg`, `biblioteca/13_ginecologia/gin-02/02_acantosis-nigricans__amir-derma_p30.jpg`.

### diab-02 · Diagnóstico — baja
Criterios, prediabetes, HOMA, tamizaje APS, hiperglicemia de estrés, HbA1c falsamente alta/baja, GES: todo **no** necesita imagen. PTGO → anim (A1_ptgo). Acantosis nigricans → foto correcta (axila, coincide con la narración).

### diab-03 · Diabetes gestacional: diagnóstico — baja
| entidad | estado | ¿la necesita? |
|---|---|---|
| Resistencia placentaria | anim (A1_resistencia_embarazo) | — |
| Criterios (ayuno ≥ 100, PTGO 2 h ≥ 140) | NO | no |
| Pregestacional → malformaciones | NO | no (opcional) |
| Gestacional → macrosomía | NO | opcional: foto de RN macrosómico |
| Tamizaje 24–28 / 32–34 semanas | NO | no |

- Sin candidata en el repo para macrosomía.

### diab-04 · Metas — baja
Metas de HbA1c, adulto mayor, PA/LDL, tamizaje con RAC y fondo de ojo: ninguna necesita imagen.

### diab-05 · Ejercicio — baja
GLUT-4/hipoglicemia tardía → anim. Neuropatía (ampollas, úlceras) y retinopatía proliferativa (hemorragia vítrea) se mencionan como contraindicaciones; sus imágenes viven en diab-21/22. No necesita más.

### diab-06 · Tratamiento escalonado DM2 — baja
Escalera terapéutica, metformina, segundo fármaco, insulinización, GES: no necesita imágenes. Sin animación (el algoritmo va en el pathway).

### diab-07 · Metformina y glibenclamida — baja
Mecanismos → anim (A1_metformina_glibenclamida). Resto son cortes de VFG y conducta: no necesita imagen.

### diab-08 · iSGLT2, GLP-1, iDPP-4 — baja
| entidad | estado | ¿la necesita? |
|---|---|---|
| Gliflozinas (glucosuria) | anim (A1_gliflozina) | — |
| Micosis genital (candidiasis vulvovaginal, balanitis) — "el más frecuente" | NO | sí (baja) |
| CAD euglicémica | NO | no |
| Agonistas GLP-1 | anim (A2_glp1) | — |
| iDPP-4 / linagliptina | NO | no |

- Candidatas para micosis genital: `biblioteca/13_ginecologia/gin-09/01_leucorrea-candidiasica__amir-gyo_p106.jpg`, `biblioteca/13_ginecologia/gin-09/03_microscopia_candida__fitzpatrick_p80.jpg`.

### diab-09 · DMG: tratamiento — baja
Dieta, automonitoreo, inicio de insulina, glibenclamida contraindicada: no necesitan imagen. La consecuencia fetal (macrosomía, distocia de hombros, hipoglicemia neonatal) no tiene foto ni animación; una animación de "glucosa cruza, insulina fetal no" reforzaría la idea, pero no es imagen de examen. Sin candidata en el repo.

### diab-10 · HTA en el diabético — baja
Arteriola eferente → anim (A1_eferente_real). Resto: fármacos y metas. Nada más.

### diab-11 · Insulinas — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Basales (NPH vs análogos) | anim (A1_basales) | — |
| Prandiales (cristalina vs ultrarrápidas) | anim (A2_prandiales) | — |
| NPH en la cena vs al acostarse | anim (en A1) | — |
| Indicaciones de insulina en DM2 | NO | no |
| **Lipohipertrofia** por no rotar sitios | NO | **sí**: foto clínica de lipohipertrofia abdominal; explica "glicemias que oscilan sin explicación" |

- No hay candidata en el repo (se buscó "lipohip"). Repetir la foto en diab-12 ("Técnica y rotación de sitios").

### diab-12 · Titulación, Somogyi, alba — baja
Somogyi y alba → anim (A1_somogyi, A2_alba). Titulación, basal-plus/bolo, regla del 500/1800: no necesitan imagen. Lipohipertrofia: ver diab-11.

### diab-13 · Hiperglicemia hospitalaria — baja
Metas, suspensión de orales, esquema móvil, basal-bolo: no necesitan imagen.

### diab-14 · Hipoglicemia — baja
Fisiopatología (adrenérgicos → neuroglucopenia) y betabloqueo → anim (A1_alarma, A2_betabloqueador). Whipple, regla de los 15, glucagón, glibenclamida, péptido C, insulinoma vs facticia: no necesitan imagen (el insulinoma se enseña bioquímicamente; una TC/eco endoscópica sería opcional).

### diab-15 · CAD y EHH: diagnóstico — baja
CAD y EHH → anim (A1_cad_real, A2_hiperosmolar_real). Criterios, severidad, osmolaridad, sodio corregido, CAD euglicémica: no necesitan imagen.

### diab-16 · Fluidos — baja
Regla del glucosado → anim (A1_glucosado_sodio). Resto: volúmenes y velocidades. Nada más.

### diab-17 · Potasio, insulina, bicarbonato — baja
Insulina mete K y umbral 3,3 → anim (A1, A2). **Foto ECG de hipokalemia** (`biblioteca/04_diabetes/diab-17/01_ecg-hipopotasemia__cto-nefro_p22.jpg`): correcta, con flecha "Onda U". Nada más.

### diab-18 · Resolución y traslape — baja
Solo criterios y tiempos. Sin imágenes, no las necesita.

### diab-19 · Edema cerebral e hipofosfemia — baja
| entidad | estado | ¿la necesita? |
|---|---|---|
| Edema cerebral (gradiente osmótico inverso) | anim (A1_edema_cerebral) | — |
| Clínica / tríada de Cushing | NO | no |
| TAC de edema cerebral (borramiento de surcos y cisternas) | NO | opcional (la clase insiste en "no esperar la TAC") |
| Hipofosfemia | NO | no |

- Sin candidata en el repo.

### diab-20 · Nefropatía diabética — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Hiperfiltración → albuminuria | anim (A1_glomerulo_albuminuria) | — |
| **Kimmelstiel-Wilson** (nodo del flujo) | NO | **sí**: histología con nódulos PAS+ mesangiales; es la lesión patognomónica que se pregunta |
| Tamizaje con RAC / categorías A1–A3 | NO | no (podría reutilizar el esquema KDIGO de nefro-18) |
| Nefroprotección | NO | no |

- No hay candidata de histología en el repo. Para la tabla A1–A3 se puede reutilizar `biblioteca/03_nefrologia/nefro-18/S1_kdigo__propio.svg`.

### diab-21 · Retinopatía diabética — **alta**
| entidad | estado | ¿la necesita? |
|---|---|---|
| Fisiopatología (pericitos → microaneurismas → VEGF → neovasos) | anim (A1_retinopatia) | — |
| **Microaneurismas** ("lesión más precoz") | NO como foto aislada | **sí** |
| Hemorragias en punto/llama, exudados duros (RDNP) | foto (ver error abajo) | — |
| **Exudados algodonosos** (microinfarto) | NO | **sí** |
| RDNP severa: regla 4-2-1 (venas arrosariadas, IRMA) | NO | no (opcional) |
| **Neovasos en papila/retina = proliferativa** | NO | **sí** (es lo que la define) |
| Hemorragia vítrea / prerretinal | foto (ver error abajo) | — |
| **Edema macular diabético** | NO | **sí** (causa más frecuente de baja visual moderada) |
| Panfotocoagulación (cicatrices de láser), desprendimiento traccional, glaucoma neovascular | NO | opcional |

**Foto mal emparejada (corregir):** las dos fotos están intercambiadas respecto a la narración.
- `biblioteca/04_diabetes/diab-21/01_retinopatia-diabetica__cto-oftalmo_p68.jpg` (rótulo "Retinopatía", narración "microaneurismas, hemorragias y exudados duros… neovasos") muestra en realidad una **gran hemorragia prerretinal/vítrea** inferior.
- `biblioteca/04_diabetes/diab-21/02_hemorragias-retinianas-rd__cto-oftalmo_p67.jpg` (rótulo "Hemorragia", narración "sangrado de los neovasos… ciego de un día para otro") muestra en realidad una **RDNP con hemorragias puntiformes y abundantes exudados duros**.
- Ninguna de las dos muestra neovasos, aunque la narración los nombra.

Candidatas en el repo:
- Edema macular (exudados duros en anillo/estrella en el polo posterior, con rejilla de láser focal): `biblioteca/04_diabetes/diab-21/01_retinopatia-diabetica_alt1__cto-oftalmo_p108.jpg` (sin usar; idéntica a `biblioteca/12_oftalmologia/oftal-12/01_retinopatia-diabetica_alt1__cto-oftalmo_p108.jpg`).
- Neovasos, microaneurismas aislados y algodonosos: **sin candidata** en el repo (buscar en Kanski / AMIR Oftalmología). Para algodonosos se puede reutilizar como apoyo `biblioteca/12_oftalmologia/oftal-13/01_retinopatia-hipertensiva__cto-oftalmo_p69.jpg` si los muestra (no verificado).

### diab-22 · Pie diabético — **alta**
| entidad | estado | ¿la necesita? |
|---|---|---|
| Tríada neuropatía + isquemia + trauma | anim (A1_pie_diabetico) | — |
| Úlcera neuropática en zona de apoyo (mal perforante) | foto (01_ulcera…_2, en "Más imágenes") | — |
| Clasificación de Wagner 0–5 | foto (02_clasificacion-de-wagner) | — |
| **Neuropatía motora: dedos en garra/martillo, cabezas metatarsianas prominentes** | NO | sí (media) |
| **Monofilamento de 10 g: técnica y puntos** | NO | **sí**: se pregunta como tamizaje anual |
| **Úlcera isquémica** (dolorosa, pálida, sin hiperqueratosis) vs neuropática | foto existe pero narrada como neuropática (ver error) | **sí**: falta una úlcera isquémica típica (borde distal, lecho pálido) junto a la neuropática |
| **Osteomielitis: prueba del estilete / Rx con osteólisis** | NO | **sí** |
| Gangrena seca de dedos (Wagner 4) | solo dentro del esquema de Wagner | opcional |

**Foto mal narrada:** `biblioteca/04_diabetes/diab-22/01_ulcera-necrosis-pie-diabetico_1__cto-endocrino_p114.jpg` (rótulo "Úlcera y necrosis", primera foto de "Así se ve") es, según su pie (CTO Fig. 5.6 A), una **amputación del primer dedo por necrosis isquémica**; la narración dice "úlcera con necrosis en un punto de apoyo… consecuencia de la neuropatía: el paciente no siente la herida". Debe re-narrarse como componente isquémico (o mostrarse primero la _2, que sí es la úlcera neuropática en apoyo metatarsiano, Fig. 5.6 B).

- No hay candidatas en el repo para monofilamento, úlcera isquémica típica ni osteomielitis del pie (se buscó "monofil", "osteomiel", "charcot", "garra"). Fuente sugerida: CTO Endocrino p113–114 (mismas páginas de las fotos actuales) y AMIR Endocrino.

### diab-23 · Dislipidemia y estatinas — baja
Ateroma/estatina → anim. Xantelasma y xantomas tendinosos → fotos correctas (`biblioteca/04_diabetes/diab-23/…`). Estratificación, metas, intensidad de estatinas, CK: no necesitan imagen. La rabdomiólisis ("orina color coñac") podría ilustrarse, pero no es prioritaria.

### diab-24 · Hipertrigliceridemia e HF — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Hipertrigliceridemia severa: plasma lechoso | foto (01_plasma_lipemico) | — |
| Xantomas eruptivos | foto (01_xantomas-eruptivos) | — |
| Pancreatitis por TG (flujo de fisiopatología) | NO | opcional |
| **Xantomas tendinosos de Aquiles y extensores ("patognomónicos")** | NO en esta clase | **sí** |
| **Arco corneal antes de los 45** | NO | **sí** |

- Xantomas tendinosos: reutilizar `biblioteca/04_diabetes/diab-23/01_xantomas_tendinosos__fitzpatrick_p1311.jpg` (el caso de la tabla "LDL > 190, xantomas de Aquiles" no tiene imagen en esta clase).
- Arco corneal: sin candidata en el repo.
- Pancreatitis (TC): `biblioteca/01_gastroenterologia/gastro-18/01_pancreatitis-edematosa-tc_1__cto-digestivo_p258.jpg` si se quiere cerrar el flujo.
- La narración del libro menciona "lipemia retinalis", que la clase no enseña: no es vacío de la clase.

## Fotos con problemas

| clase | archivo | problema |
|---|---|---|
| diab-21 | `04_diabetes/diab-21/01_retinopatia-diabetica__cto-oftalmo_p68.jpg` | Muestra hemorragia prerretinal/vítrea; la narración describe microaneurismas, exudados y neovasos. Intercambiada con la siguiente. |
| diab-21 | `04_diabetes/diab-21/02_hemorragias-retinianas-rd__cto-oftalmo_p67.jpg` | Muestra RDNP (hemorragias puntiformes + exudados duros); la narración habla de "sangrado de los neovasos" que deja ciego. Intercambiada con la anterior. |
| diab-22 | `04_diabetes/diab-22/01_ulcera-necrosis-pie-diabetico_1__cto-endocrino_p114.jpg` | Es amputación del hallux por necrosis **isquémica** (CTO Fig. 5.6 A); la narración la presenta como úlcera neuropática en punto de apoyo. |

Todas las demás fotos de Diabetes coinciden con su rótulo y narración.
