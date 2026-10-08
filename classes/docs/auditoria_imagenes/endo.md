# Auditoría de imágenes — Endocrinología (endo-01 a endo-24)

Fecha: 2026-10-08 · Solo lectura (no se modificó ninguna clase ni archivo de medios).

Método: se extrajo de cada `classes/lessons/endo-XX.cjs` lo que la clase enseña (títulos, nodos de flujo, tarjetas, tablas, narración de las diapositivas de imagen) y lo que muestra (diapositivas `type: 'image'`; `.mp4` = animación, resto = foto en `classes/media/<src>`). Se cruzó con el pie de figura de `classes/media/biblioteca/indice.json` y se abrieron todas las fotos dudosas y las variantes `_alt` sin usar.

Leyenda: **foto** · **anim** (animación) · **NO** = no se muestra. "¿La necesita?": **sí** = existe una imagen reconocible que el EUNACOM pregunta; **no** = dosis, cortes, scores, algoritmos. En el resumen, "con foto" = número de fotos que muestra la clase.

Nota sobre el libro: `books/dist/Modulo_1_Medicina_Interna/Manual_EUNACOM_Endocrinologia_Completo_2026.pdf` (Imagen 1.2–1.5 y 7.6–7.24) reproduce **las mismas figuras** que las clases (se extrajeron sus 32 imágenes grandes y se compararon). No aporta candidatas nuevas; además repite el mismo error de endo-15 (la RM de incidentaloma va como "Feocromocitoma en la imagen").

## Resumen

| clase | tema | entidades enseñadas (n) | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| endo-01 | Perfil tiroideo y eutiroideo enfermo | 5 | 0 | 4 | 0 | baja |
| endo-02 | Hipotiroidismo primario y subclínico | 7 | 2 | 1 | 0 | baja |
| endo-03 | Coma mixedematoso | 6 | 1 | 0 | 0 | baja |
| endo-04 | Tiroides en el embarazo e hipotiroidismo congénito | 5 | 2 | 1 | 0 | baja |
| endo-05 | Tiroiditis (De Quervain, Hashimoto, silente, amiodarona, litio) | 8 | 1 | 1 | 3 | **alta** |
| endo-06 | Hipertiroidismo y Graves | 13 | 6 | 1 | 1 | media |
| endo-07 | Tratamiento del hipertiroidismo | 6 | 1 | 1 | 2 | media |
| endo-08 | Tormenta tiroidea | 6 | 0 | 1 | 0 | baja |
| endo-09 | Nódulo tiroideo | 7 | 4 (1 mal rotulada) | 1 | 2 | media |
| endo-10 | Cáncer de tiroides | 6 | 1 | 0 | 2 | media |
| endo-11 | Síndrome de Cushing | 9 | 6 | 1 | 1 | baja |
| endo-12 | Insuficiencia suprarrenal (Addison vs secundaria) | 6 | 2 | 2 | 0 | baja |
| endo-13 | Crisis suprarrenal | 6 | 0 | 1 | 1 | media |
| endo-14 | Hiperaldosteronismo primario | 5 | 0 | 1 | 1 | media |
| endo-15 | Feocromocitoma | 7 | 1 (**mal rotulada**) | 1 | 1 | media |
| endo-16 | Hipercalcemia e hiperparatiroidismo | 9 | 2 | 1 | 2 | media |
| endo-17 | Hipocalcemia y tetania | 5 | 4 | 0 | 0 | baja |
| endo-18 | Osteoporosis | 7 | 1 (esquema propio) | 1 | 2 | **alta** |
| endo-19 | Vitamina D, osteomalacia y raquitismo | 6 | 3 | 1 | 1 | **alta** |
| endo-20 | Masas selares y apoplejía | 7 | 3 | 1 | 1 | media |
| endo-21 | Hiperprolactinemia y prolactinoma | 5 | 1 | 1 | 0 | baja |
| endo-22 | Acromegalia | 5 | 1 | 1 | 0 | baja |
| endo-23 | Sheehan e hipopituitarismo | 5 | 1 | 1 | 0 | baja |
| endo-24 | Diabetes insípida, SIADH y NEM | 6 | 1 | 2 | 1 | media |
| **Total** | | **157** | **44** | **27** | **21** | 3 alta · 10 media |

## Detalle por clase

### endo-01 · Perfil tiroideo — baja
Eje HHT, patrones TSH/T4L (primario, hiper, central) → anim (A1–A4 del eje). Hipotiroidismo central (RM de hipófisis) y eutiroideo enfermo: no necesitan foto (la RM selar se ve en endo-20/23).

### endo-02 · Hipotiroidismo — baja
| entidad | estado | ¿la necesita? |
|---|---|---|
| Hashimoto (anti-TPO) | NO aquí (eco en endo-05) | no |
| Clínica: facies, piel seca, cejas ralas, voz ronca | foto (01_facies_hipotiroidea, 01_clinica-del-hipotiroidismo = esquema) | — |
| Mixedema, bocio firme | parcial (facies) | no |
| Relajación lenta del aquiliano | NO | no |
| Dislipidemia, anemia, hiponatremia, CK | NO | no |
| Subclínico / adulto mayor / dosis de levotiroxina | anim (A1_levotiroxina_dosis) | — |

Sin vacíos importantes.

### endo-03 · Coma mixedematoso — baja
Facies de mixedema grave → foto (`01_facies_mixedema__commons.jpg`, coincide). Gatillantes, tríada, laboratorio, hidrocortisona antes que levotiroxina, recalentamiento pasivo: no necesitan foto. No tiene animación; el flujo "hidrocortisona antes que levotiroxina" es candidato a animación (se repite en endo-23), pero no es vacío de imagen.

### endo-04 · Embarazo y congénito — baja
Metas de TSH y tamizaje → anim (A1_tsh_embarazo_talon). Hipotiroidismo congénito sin y con tratamiento → 2 fotos correctas (Nelson: macroglosia, facies tosca). Opcional: foto de la punción de talón en papel filtro.

### endo-05 · Tiroiditis — **alta**
| entidad | estado | ¿la necesita? |
|---|---|---|
| De Quervain: clínica (dolor irradiado, tiroides dolorosa) | NO | no (no hay signo visual distintivo) |
| **De Quervain: gammagrafía "en blanco" (captación < 1–2 %)** | NO | **sí**: es la clave de la clase ("¿capta yodo?") |
| Tres fases (tóxica → hipo → recuperación) | anim (A1_tres_fases) | — |
| Hashimoto: eco heterogénea hipoecogénica | foto (01_eco-hashimoto, coincide) | — |
| **Silente/postparto: captación nula** | NO | sí (misma gammagrafía que De Quervain) |
| Supurada aguda (eritema, fluctuación) | NO | no (rara) |
| **Amiodarona tipo 1 (Doppler vascular) vs tipo 2 (Doppler avascular, captación nula)** | NO | **sí**: la tabla lo enseña como "pista clave" |
| Litio: bocio | NO | no |

Faltan concretamente:
1. **Gammagrafía de De Quervain/silente sin captación** comparada con la de Graves (captación difusa alta). Es la imagen que resume la clase. Candidata parcial para el lado "Graves": `biblioteca/05_endocrinologia/endo-09/03_gammagrafia-nodulo-frio__amir-endocrino_p44.jpg` (por su pie y su aspecto es una **Graves con captación difusa**, ver errores). No hay gammagrafía "en blanco" en el repo.
2. **Eco Doppler de amiodarona tipo 1 (hipervascular) vs tipo 2 (avascular).** Candidata para el patrón hipervascular: `biblioteca/05_endocrinologia/endo-06/03_eco-doppler-graves_2__amir-endocrino_p38.jpg` (variante sin usar). Falta el patrón avascular.

### endo-06 · Hipertiroidismo y Graves — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Tirotoxicosis: ¿capta o no capta? | NO | sí (ver cintigrama) |
| TRAb estimulantes | anim (A1_graves_3d) | — |
| Síndrome hipermetabólico / apático con FA | NO | no |
| Orbitopatía (proptosis, retracción) | foto ×3 (02_oftalmopatia, 01_graves…_2 TC de órbitas, 01_graves…_3 exoftalmos) | — |
| Bocio difuso | foto (01_graves-bocio-difuso_1) | — |
| Mixedema pretibial | foto (Fitzpatrick) | — |
| Acropaquia tiroidea | NO | no (rara) |
| Eco Doppler hipervascular | foto (03_eco-doppler-graves_1) | — |
| **Cintigrama: un patrón para cada causa** (Graves difuso, adenoma tóxico, BMN, captación nula) | NO (la diapositiva es solo texto) | **sí** |
| Tionamidas, agranulocitosis, radioyodo, cirugía, severidad | NO | no |

- Falta la **lámina comparativa de gammagrafías** en la diapositiva "El cintigrama: un patrón para cada causa". Candidatas ya en el repo: Graves difuso → `05_endocrinologia/endo-09/03_gammagrafia-nodulo-frio__amir-endocrino_p44.jpg`; adenoma tóxico → `05_endocrinologia/endo-07/01_gammagrafia-adenoma-toxico-bmn__cto-endocrino_p57.jpg` o `…_alt2__amir-endocrino_p44.jpg`; BMN → `05_endocrinologia/endo-07/01_gammagrafia-adenoma-toxico-bmn_alt1_1__amir-endocrino_p44.jpg`. Falta la de captación nula (ver endo-05).
- Sin usar: `02_oftalmopatia-exoftalmos_alt1_1/_alt1_2__amir-endocrino_p38.jpg` (TC axial de exoftalmos, redundante) y `03_eco-doppler-graves_2` (reutilizable en endo-05).

### endo-07 · Tratamiento del hipertiroidismo — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Tiamazol vs PTU / radioyodo | anim (A1_tiamazol_radioyodo) | — |
| Quién necesita tratamiento definitivo (BMN y adenoma no remiten) | foto gammagrafía | parcial |
| Radioyodo: indicaciones y contraindicaciones | NO | no |
| **Cirugía: bocio compresivo > 80 g, desviación traqueal** | NO | sí (media): Rx/TC de bocio con desviación traqueal o foto de bocio gigante |
| Lugol / Wolff-Chaikoff | NO | no |
| Complicaciones: hipoparatiroidismo, recurrente | NO | no (tetania se ve en endo-17) |

- **Foto que no cubre la narración:** la única gammagrafía (`endo-07/01_gammagrafia-adenoma-toxico-bmn__cto-endocrino_p57.jpg`, rótulo "Gammagrafía") muestra **solo un nódulo caliente (adenoma tóxico)**, pero la narración describe "captación difusa en Graves, un nódulo que capta y apaga al resto, varios nódulos en el BMN". Faltan Graves difuso y BMN. Candidatas: `endo-07/01_gammagrafia-adenoma-toxico-bmn_alt1_1__amir-endocrino_p44.jpg` (BMN, sin usar, claro) y la Graves de `endo-09/03_gammagrafia-nodulo-frio…`.
- `endo-07/01_gammagrafia-adenoma-toxico-bmn_alt1_2__amir-endocrino_p44.jpg`: su pie dice BMN, pero se ve una captación bastante homogénea con una flecha en el polo superior izquierdo; dudosa, no usar sin revisar.
- Bocio compresivo: sin candidata en el repo.

### endo-08 · Tormenta tiroidea — baja
Burch-Wartofsky, cuatro pilares, PTU antes que Lugol (anim A1_tormenta_orden), aspirina prohibida: no necesitan foto.

### endo-09 · Nódulo tiroideo — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Epidemiología y factores de riesgo | NO | no |
| TSH primero → cintigrama si TSH suprimida → **nódulo caliente** | foto "gammagrafía nódulo frío" (**mal rotulada**, ver abajo) | **sí**: falta el nódulo caliente |
| Eco de alta sospecha (hipoecogénico, más alto que ancho, márgenes irregulares, microcalcificaciones) | foto (01_nodulo-con-criterios…) — **poco legible** | sí: mejor imagen |
| **Eco benigna (espongiforme, quiste simple)** | NO | sí (media) |
| Bocio multinodular | foto ×2 (02_bocio-multinodular-eco_1/_2) | — |
| TI-RADS / PAAF / Bethesda | anim (A1_algoritmo_nodulo) | — |

- **Foto mal rotulada:** `endo-09/03_gammagrafia-nodulo-frio__amir-endocrino_p44.jpg` ("Gammagrafía nódulo frío", narración genérica) muestra ambos lóbulos con captación difusa; el pie de `indice.json` mezcla "Figura 16 Nódulo frío" y "Figura 14 … Enfermedad de Graves, hipercaptación difusa", y la imagen corresponde a la **Graves**. Además la clase enseña que el cintigrama solo se pide con TSH suprimida (nódulo **caliente**) y que "nunca cintigrama con TSH normal": mostrar un "nódulo frío" contradice el mensaje. Reemplazar por el nódulo caliente: `endo-07/01_gammagrafia-adenoma-toxico-bmn_alt2__amir-endocrino_p44.jpg`.
- `endo-09/01_nodulo-con-criterios-de-malignidad-eco-d__amir-endocrino_p46.jpg`: ecografía de baja calidad; el nódulo de 1 cm del istmo apenas se distingue entre las marcas, y la narración promete "hipoecogénico, bordes irregulares, más alto que ancho y con microcalcificaciones", que no se aprecian. Buscar una eco más demostrativa (TI-RADS 5) y una espongiforme/quiste para el contraste. Sin candidatas en el repo.

### endo-10 · Cáncer de tiroides — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Papilar: psamomas, núcleos en vidrio esmerilado | foto (histología Pathoma) | — |
| Papilar: diseminación linfática (adenopatía cervical) | NO | sí (media): eco de nódulo con microcalcificaciones + adenopatía |
| Folicular: invasión capsular/vascular, metástasis hematógenas | NO | no |
| Medular: calcitonina, NEM 2 | NO | no (opcional: histología con amiloide) |
| **Anaplásico: masa pétrea en adulto mayor** | NO | sí (baja) |
| Tratamiento (cirugía + I-131 + TSH frenada) / Tg | NO | opcional: rastreo corporal total con I-131 |

- Sin animación: el mapa "Dos células, cuatro cánceres" se presta para una.
- Candidata eco: reutilizar `endo-09/01_nodulo-con-criterios…` (si se mejora). Sin candidatas para anaplásico ni rastreo I-131.

### endo-11 · Síndrome de Cushing — baja
Clínica muy bien cubierta: facies de luna llena, estrías violáceas (×2), obesidad central, equimosis, fenotipo cushingoide → 6 fotos coherentes. Nugent → anim.
| entidad | estado | ¿la necesita? |
|---|---|---|
| Exógeno / Cushing hipofisario / ectópico / suprarrenal | NO | no |
| **TC suprarrenal: adenoma vs carcinoma > 4–6 cm** | NO | sí (baja) |
| RM de silla turca (microadenoma) | NO | no |
| Hiperpigmentación del ectópico | NO | no |

- Candidata parcial: `endo-15/01_incidentaloma-suprarrenal-mibg__amir-endocrino_p59.jpg` (RM de incidentaloma suprarrenal derecho) serviría para "imagen suprarrenal" si se retira de endo-15.

### endo-12 · Addison vs secundaria — baja
Hiperpigmentación y pliegues palmares → 2 fotos correctas. Addison y secundaria → anim. Opcional: hiperpigmentación de mucosa oral/encías (la clase la nombra), vitíligo asociado. Sin candidatas en el repo.

### endo-13 · Crisis suprarrenal — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Shock refractario sin cortisol | anim (A1_shock_sin_cortisol) | — |
| Gatillantes | NO | no |
| **Waterhouse-Friderichsen (meningococcemia fulminante)** | NO | **sí**: púrpura fulminante + hemorragia suprarrenal |
| Tríada clínica y de laboratorio | NO | no |
| Hiperkalemia | NO | opcional (ECG) |
| Hidrocortisona / dexametasona | NO | no |

- Candidatas: `biblioteca/07_infectologia/infecto-02/01_purpura-meningococica__cto-infecto_p38.jpg` (y `_alt1__amir-infecto_p44.jpg`); ECG de hiperkalemia `biblioteca/03_nefrologia/nefro-09/01_ecg-hiperpotasemia-t-picudas-sinusoidal__cto-nefro_p23.jpg`.

### endo-14 · Hiperaldosteronismo primario — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Fisiopatología (renina suprimida, hipokalemia) | anim (A1_aldosterona_renina) | — |
| Sospecha (HTA resistente, hipokalemia, joven) | NO | no |
| RAR y sobrecarga salina | NO | no |
| **TC suprarrenal: adenoma de Conn vs hiperplasia bilateral** | NO | sí (media) |
| Hipokalemia en el ECG (onda U) | NO | opcional |

- Candidata ECG: `biblioteca/03_nefrologia/nefro-10/01_ecg-hipopotasemia-ondas-u__cto-nefro_p22.jpg`. TC de adenoma de Conn: sin candidata (la RM de `endo-15/01_incidentaloma…` es una masa grande, no un adenoma de Conn típico).

### endo-15 · Feocromocitoma — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Tríada paroxística, regla del 10 % | NO | no |
| Genética (RET, VHL, NF1, SDH) | NO | opcional (manchas café con leche de NF1) |
| Metanefrinas → TC/RM | foto (RM coronal de masa suprarrenal) | — |
| **MIBG** | rótulo "Gammagrafía MIBG", pero la foto no es MIBG | **sí** |
| Alfa antes que beta | anim (A1_alfa_beta_real) | — |
| Preparación preoperatoria / síndromes familiares | NO | no |

- **Foto mal rotulada:** `endo-15/01_incidentaloma-suprarrenal-mibg__amir-endocrino_p59.jpg` se muestra como "Gammagrafía MIBG" y la narración dice "la gammagrafía con MIBG muestra la suprarrenal que capta", pero es una **RM coronal de incidentaloma suprarrenal derecho** (pie: AMIR Fig. 7). La MIBG real está sin usar: `endo-15/01_incidentaloma-suprarrenal-mibg_alt1__amir-endocrino_p58.jpg` (AMIR Fig. 6, "Gammagrafía con MIBG en un feocromocitoma"). Mostrar ambas: la RM como "TC/RM: masa suprarrenal" y la alt1 como MIBG.

### endo-16 · Hipercalcemia — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Fracciones del calcio / corrección por albúmina | NO | no |
| Acciones de la PTH | anim (A1_pth_calcio) | — |
| PTH-independiente: PTHrP, metástasis, mieloma, granulomas | NO | opcional (lesiones líticas) |
| Clínica: litiasis, nefrocalcinosis | NO | opcional |
| **Hueso: osteítis fibrosa quística (resorción subperióstica de falanges, cráneo "sal y pimienta")** | NO | **sí** (media) |
| QT corto | foto ×2 (esquema QT + ECG QT corto) | — |
| Crisis hipercalcémica | NO | no |
| **Localización: cintigrama sestamibi (adenoma paratiroideo)** | NO | **sí** (media) |
| Criterios quirúrgicos | NO | no |

- Sin candidatas en el repo para sestamibi ni osteítis fibrosa quística. Opcionales: lesiones líticas `biblioteca/06_hematologia/hem-19/01_lesiones-liticas-en-craneo_alt1__amir-hemato_p73.jpg`; litiasis `biblioteca/19_urologia/uro-01/01_rx-simple-calculo-renal__bailey-love_p1409.jpg`.
- Archivo mal ubicado (no usado): `endo-16/01_ecg-reusar__cto-cardio_p19.jpg` es un ECG de **hiperkalemia** (CTO Cardio Fig. 3.4), no de calcio; no debe usarse en esta clase.

### endo-17 · Hipocalcemia — baja
Trousseau, Chvostek (×2) y QT largo (esquema compartido con endo-16) → 4 fotos correctas. Opcional: TC con calcificación de ganglios basales y catarata (aparecen en la tabla de hipocalcemia crónica); catarata: `biblioteca/12_oftalmologia/oftal-08/01_catarata_1__amir-oftalmo_p40.jpg`. El QT largo es un esquema, no un ECG real; aceptable.

### endo-18 · Osteoporosis — **alta**
| entidad | estado | ¿la necesita? |
|---|---|---|
| DEXA y T-score | foto (S1_dexa-t-score__propio.svg, esquema propio) | — |
| Remodelado / bifosfonatos | anim (A1_remodelado_bifosfonato) | — |
| **Fractura por fragilidad: vertebral por aplastamiento** | NO | **sí**: "la fractura por fragilidad es el diagnóstico" |
| **Fractura de cadera y de Colles** | NO | **sí** |
| FRAX y factores de riesgo | NO | no |
| Osteonecrosis mandibular / fractura atípica subtrocantérea | NO | sí (baja) |
| Denosumab, teriparatida | NO | no |

- Candidatas en el repo: aplastamientos vertebrales `biblioteca/08_reumatologia/reuma-24/01_aplastamientos-vertebrales__amir-reuma_p88.jpg` (y `_alt1__cto-reuma_p14.jpg`); fractura de cadera `biblioteca/09_neurologia/neuro-23/01_rx_fractura_cuello_femur__commons.jpg`, `neuro-23/02_fractura-pertrocanterea_1__cto-trauma_p26.jpg` y la animación `animaciones/neuro-23/A1_fractura_cadera_3d.mp4`. Colles, osteonecrosis mandibular y fractura atípica: sin candidata.

### endo-19 · Vitamina D, osteomalacia, raquitismo — **alta**
| entidad | estado | ¿la necesita? |
|---|---|---|
| Fisiología (piel → hígado → riñón) | anim (A1_vitamina_d) | — |
| 25(OH)D: cortes | NO | no |
| Osteomalacia: dolor óseo, miopatía | NO | no |
| **Líneas de Looser-Milkman (seudofracturas)** — "patognomónicas" en el cierre | NO | **sí** |
| Raquitismo: rosario, muñecas, Rx metáfisis en copa | foto ×3 (Nelson, correctas) | — |
| Laboratorio comparado | NO | no |

- La clase enseña sobre todo la **osteomalacia del adulto**, pero solo muestra raquitismo pediátrico. Falta la Rx con **Looser-Milkman** (cuello femoral, pubis). Sin candidata en el repo.

### endo-20 · Masas selares — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Adenomas micro/macro | NO como RM simple | sí (baja; reutilizable) |
| **Craneofaringioma (quístico, calcificado)** | NO | sí (media) |
| Efecto de masa / anatomía selar | foto (03_efecto-masa-adenoma, esquema) + anim (A1_macroadenoma_3d) | — |
| Hemianopsia bitemporal | foto (campimetría) | — |
| Estudio triple / conducta | NO | no |
| Apoplejía hipofisaria | foto (RM con sangrado) | — |
| Meningioma / Rathke | NO | no |

- Macroadenoma en RM: reutilizar `endo-21/01_prolactinoma-gigante-rm__amir-endocrino_p24.jpg`. Craneofaringioma: sin candidata en el repo.

### endo-21 · Hiperprolactinemia — baja
Dopamina/prolactina → anim. Prolactinoma gigante en RM → foto correcta. Opcional: galactorrea. Sin vacíos importantes.

### endo-22 · Acromegalia — baja
Fenotipo acromegálico (lámina CTO con facies, diastema, manos) → foto correcta; GH/IGF-1 → anim. Opcional: RM del adenoma (reutilizar endo-21). Sin vacíos importantes.

### endo-23 · Sheehan — baja
Sheehan → anim. Silla turca vacía → foto correcta (recorte de baja resolución, pero legible). Sin vacíos.

### endo-24 · DI, SIADH, NEM — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Diabetes insípida central/nefrogénica | anim (A1_diabetes_insipida_real) | — |
| Test de Miller | NO | no (está como anim en nefro-07) |
| SIADH | anim (A2_siadh_real) | — |
| NEM 1 (3 P) | NO | no |
| NEM 2A (medular + feocromocitoma + HPT) | foto (TC feocromocitoma en MEN 2A) | — |
| **NEM 2B: neuromas mucosos, hábito marfanoide** | NO | **sí** (media): es la pista visual que el examen da |

- Detalle: la narración dice "feocromocitoma, a menudo bilateral", pero la TC (`endo-24/01_feocromocitoma-men-2a__amir-endocrino_p126.jpg`) muestra **una sola masa suprarrenal derecha**. Ajustar la narración ("puede ser bilateral") o buscar una TC bilateral.
- Neuromas mucosos: sin candidata en el repo. Test de privación: reutilizar `animaciones/nefro-07/A1_privacion_agua.mp4`.

## Fotos con problemas

| clase | archivo | problema |
|---|---|---|
| endo-15 | `05_endocrinologia/endo-15/01_incidentaloma-suprarrenal-mibg__amir-endocrino_p59.jpg` | Rotulada y narrada como "Gammagrafía MIBG"; es una **RM coronal** de incidentaloma suprarrenal. La MIBG real está sin usar en `…_alt1__amir-endocrino_p58.jpg`. (El libro repite el error en "Imagen 7.15".) |
| endo-09 | `05_endocrinologia/endo-09/03_gammagrafia-nodulo-frio__amir-endocrino_p44.jpg` | Rotulada "nódulo frío"; muestra captación difusa bilateral (Graves, AMIR Fig. 14). Además contradice el mensaje de la clase (cintigrama solo para nódulo caliente). |
| endo-09 | `05_endocrinologia/endo-09/01_nodulo-con-criterios-de-malignidad-eco-d__amir-endocrino_p46.jpg` | Poco legible: no se aprecian los criterios que la narración enumera. |
| endo-07 | `05_endocrinologia/endo-07/01_gammagrafia-adenoma-toxico-bmn__cto-endocrino_p57.jpg` | Correcta (adenoma tóxico), pero la narración describe tres patrones y solo muestra uno. |
| endo-24 | `05_endocrinologia/endo-24/01_feocromocitoma-men-2a__amir-endocrino_p126.jpg` | Masa unilateral; la narración enfatiza "a menudo bilateral". Menor. |
| endo-16 | `05_endocrinologia/endo-16/01_ecg-reusar__cto-cardio_p19.jpg` (no usada) | ECG de hiperkalemia guardado en la carpeta de hipercalcemia; no usar aquí. |

Variantes `_alt` sin usar que sí sirven: `endo-15/…mibg_alt1` (MIBG), `endo-07/…bmn_alt1_1` (BMN), `endo-07/…bmn_alt2` (nódulo caliente), `endo-06/03_eco-doppler-graves_2` (Doppler para amiodarona tipo 1).
