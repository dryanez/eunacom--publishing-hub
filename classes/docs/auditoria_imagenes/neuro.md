# Auditoría de imágenes — Neurología y Geriatría (neuro-01 a neuro-24)

Fecha: 2026-10-08 · Solo lectura (no se modificó ninguna clase ni archivo de media).

Método: se extrajo de cada `classes/lessons/neuro-*.cjs` lo enseñado (títulos, tarjetas, flujos, tablas) y las diapositivas `type: 'image'` (src + label + narración). Las fotos dudosas se abrieron. Rutas relativas a `classes/media/`.

Leyenda: **foto** = foto/figura real · **anim** = animación .mp4 · **svg** = esquema propio · **—** = no se muestra. "Necesita" = hay una imagen reconocible que EUNACOM muestra o describe (TC, RM, foto clínica, EEG). Dosis, escalas y algoritmos no necesitan imagen.

Nota sobre el libro: `books/dist/Modulo_1_Medicina_Interna/Manual_EUNACOM_Neurologia_Completo_2026.pdf` (137 pp., 26 imágenes) usa las mismas figuras que las clases (Imagen 10.1 … 10.24). No aporta candidatos nuevos.

## Resumen

| clase | tema | entidades enseñadas (n) | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| neuro-01 | ACV isquémico agudo | 9 | 4 (**1 equivocada**) | 1 | 1 | **alta** |
| neuro-02 | AIT | 7 | 1 | 1 | 3 | media |
| neuro-03 | Hemorragia intracerebral | 9 | 1 | 1 | 3 | media |
| neuro-04 | Hemorragia subaracnoidea | 10 | 3 (1 no calza con la narración) | 1 | 4 | **alta** |
| neuro-05 | Trombosis venosa cerebral | 7 | 1 (débil) | 1 | 3 | media |
| neuro-06 | Migraña y cefalea tensional | 6 | 0 (+svg) | 1 | 0 | baja |
| neuro-07 | Racimos y neuralgia del trigémino | 6 | 1 | 1 | 1 | baja |
| neuro-08 | Epilepsia y fármacos | 8 | 1 | 1 | 2 | media |
| neuro-09 | Estatus epiléptico | 5 | 0 | 1 | 0 | baja |
| neuro-10 | Primera crisis vs síncope | 6 | 0 | 1 | 1 | baja |
| neuro-11 | Enfermedad de Parkinson | 7 | 1 (+svg) | 1 | 1 | baja |
| neuro-12 | Parkinsonismos atípicos y por fármacos | 6 | 0 | 1 | 3 | media |
| neuro-13 | Temblor y distonía aguda | 5 | 1 (+svg) | 0 | 1 | baja |
| neuro-14 | Alzheimer y DCL | 8 | 1 (+svg) | 1 | 3 | media |
| neuro-15 | Demencia vascular, Lewy y frontotemporal | 5 | 1 | 1 | 2 | media |
| neuro-16 | Guillain-Barré | 6 | 0 | 1 | 0 | baja |
| neuro-17 | Miastenia gravis | 8 | 6 | 2 | 1 | baja |
| neuro-18 | Esclerosis múltiple | 8 | 3 | 1 | 3 | media |
| neuro-19 | Parálisis facial y atrapamientos | 9 | 2 | 2 | 4 | **alta** |
| neuro-20 | Vértigo | 6 | 2 (dibujos) | 0 | 2 | media |
| neuro-21 | Delirium | 5 | 0 | 0 | 0 | baja |
| neuro-22 | Fragilidad y sarcopenia | 5 | 0 | 1 | 0 | baja |
| neuro-23 | Caídas y fractura de cadera | 6 | 4 | 1 | 1 | **alta** |
| neuro-24 | Polifarmacia e incontinencia | 5 | 0 (+svg) | 0 | 0 | baja |
| **Total** | | **162** | **33** | **23** | **39** | 4 alta · 9 media · 11 baja |

### Problemas de fotos (corregir antes que agregar)

1. **neuro-01 — foto equivocada.** En "Así se ve", la imagen con el rótulo «AngioTC» (`biblioteca/09_neurologia/neuro-01/03_angio-tc-oclusion-acm__cto-radiologia_p65.jpg`) **no es una angio-TC**: es un **gráfico de la densidad de la sangre en UH frente al tiempo (0–30 días)** con tres TC de un hematoma que se reabsorbe. La narración dice "la angiotomografía muestra la oclusión de un gran vaso". La angio-TC verdadera es `…/neuro-01/01_signos-precoces-tc-acm-hiperdensa_2__cto-radiologia_p62.jpg`, que ya se usa en "Más imágenes" (angio-TC del polígono con una flecha en la ACM). Solución: llevar la _2 a la diapositiva principal. El gráfico de densidad sirve para neuro-03 (evolución del hematoma).
2. **neuro-04 — la imagen no calza con la narración.** «Hemorragia subaracnoidea de la convexidad (TC)» (`…/neuro-04/01_hsa-de-la-convexidad-tc_1__cto-neuro_p176.jpg`) viene del capítulo de TEC del CTO (p. 176): es una TC postraumática con aire intracraneal y calota alterada, y **no tiene ninguna flecha**, aunque la narración dice "señalada por la flecha". Además, la HSA de la convexidad no es aneurismática, que es el tema de la clase. Conviene quitarla o reemplazarla. El repuesto `_2` es del mismo origen.
3. **neuro-04 «HSA en cisternas»** (`01_tc_hsa__harrison_p3325.jpg`): la sangre en las cisternas es **tenue** (TC de buena calidad, pero con poco contraste para un estudiante). Sirve; se podría mejorar con una TC donde la "estrella" sea evidente.
4. **neuro-05 «Signo delta»** (`01_trombosis-de-seno-signo-delta__cto-neuro_p41.jpg`): TC oscura y poco contrastada, en la que el delta vacío **casi no se ve**. Repuesto sin usar: `…/neuro-05/01_trombosis-de-seno-signo-delta_alt1__cto-radiologia_p64.jpg` (panel de RM: hiperintensidad en el seno longitudinal superior, con flechas). Se ve mejor, aunque es otra secuencia.
5. **neuro-17 — rótulo cortado:** «Ptosis miasténica antes y después de la » (`01_ptosis_miastenia_reversion__commons.jpg`). El label y la nota del paso quedan truncados en pantalla.
6. **neuro-17 «Timoma»** (`01_timoma-tc-mediastino__cto-radiologia_p22.jpg`): es un **panel de 4 lesiones mediastínicas** (A bocio endotorácico, B timoma, C y D tumores neurogénicos). Sin flecha o recorte, el estudiante no sabe cuál es el timoma.
7. **neuro-19 «Parálisis de Bell»** (`01_paralisis-facial-periferica-bell__amir-orl_p29.jpg`): la asimetría es sutil (con franjas superpuestas). El repuesto `…/neuro-19/01_paralisis-facial-periferica-bell_alt1__cto-orl_p45.jpg` muestra una parálisis periférica **mucho más evidente** (desviación de la comisura).
8. **neuro-23 — repuesto mal nombrado:** `…/neuro-23/02_fractura-pertrocanterea_2__cto-trauma_p26.jpg` **no es una fractura pertrocantérea**: es una RX lateral de una fractura del fémur distal/supracondílea (rodilla). No usarla para la cadera.

### 10 huecos de mayor prioridad (Neurología)

1. neuro-01: mostrar la **angio-TC con la oclusión de la ACM** en la diapositiva principal (la imagen está en el repo, problema 1).
2. neuro-19: **túnel carpiano**, con atrofia tenar y las maniobras de Phalen y Tinel. Hoy no tiene ninguna imagen.
3. neuro-19: **Ramsay Hunt** (vesículas en la concha). *Candidato listo:* `17_otorrino/orl-08/02_vesiculas-en-concha-ramsay-hunt__bailey-love_p736.jpg`.
4. neuro-04: **parálisis del III par** (ptosis + midriasis + ojo hacia abajo y afuera) por aneurisma de la comunicante posterior.
5. neuro-03: **TC de hematoma cerebeloso** (la indicación quirúrgica más preguntada) y una **hemorragia lobar**; usar además el repuesto talámico. *Candidato:* `09_neurologia/neuro-03/01_hematoma-intraparenquimatoso-tc_alt1__cto-radiologia_p67.jpg`.
6. neuro-14: **RM con atrofia hipocampal** y TC de las causas reversibles (**hematoma subdural crónico**, **hidrocefalia normotensiva**). *Candidato:* `10_cirugia/cirugia-12/01_hematoma-epidural-vs-subdural-tc__cto-neuro_p142.jpg`.
7. neuro-23: **pierna acortada y en rotación externa** (foto clínica), marcada ★★★ en `IMAGENES_FALTANTES.md` y todavía pendiente.
8. neuro-05: **papiledema** en el fondo de ojo y **trombosis del seno cavernoso** (proptosis, quemosis). *Candidato:* `12_oftalmologia/oftal-18/01_papiledema__cto-oftalmo_p88.jpg`.
9. neuro-12: **signo del colibrí** (PSP) y **signo de la cruz caliente** (AMS) en la RM.
10. neuro-18: **oftalmoplejía internuclear** y **mielitis longitudinal extensa** (neuromielitis óptica) en la RM.

---

## Detalle por clase

### neuro-01 · ACV isquémico agudo — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| Núcleo y penumbra | anim `animaciones/neuro-01/A1_penumbra_real.mp4` |
| TOAST | — (no necesita) |
| Territorios ACM / ACA / ACP | foto ✔ `04_territorios-vasculares__cto-neuro_p35.jpg` + `02_infartos-establecidos-por-territorio-tc__cto-radiologia_p63.jpg` |
| Vertebrobasilar / **infarto lacunar** | **— necesita (media)**: TC/RM con un infarto lacunar en la cápsula interna |
| FAST / NIHSS | — (no necesita) |
| TAC sin contraste: ACM hiperdensa, borramiento | foto ✔ `01_signos-precoces-tc-acm-hiperdensa_1__cto-radiologia_p62.jpg` |
| AngioTC: oclusión de gran vaso | foto **equivocada** en la diapositiva principal (problema 1); la correcta está en "Más imágenes" |
| Trombolisis / trombectomía | — (opcional: angiografía antes y después de la trombectomía, baja) |
| Manejo en UTAC | — (no necesita) |
**Faltan:** angio-TC en su lugar; infarto lacunar.
**Candidatos:** `biblioteca/09_neurologia/neuro-01/01_signos-precoces-tc-acm-hiperdensa_2__cto-radiologia_p62.jpg` (ya en el repo). No hay imagen de infarto lacunar.

### neuro-02 · AIT
| entidad | estado |
|---|---|
| Definición tisular (sin infarto en la imagen) | — |
| **RM con difusión positiva** ("síntomas resueltos, difusión positiva = infarto") | **— necesita (media)** |
| **Amaurosis fugaz** (émbolo de colesterol de Hollenhorst) | **— necesita (baja-media)**: fondo de ojo |
| Imitadores (migraña, Todd, hipoglicemia) | — (no necesita) |
| ABCD² | anim `A1_abcd2.mp4` |
| Estenosis carotídea | foto ✔ angiografía `01_estenosis-carotidea-angiografia__cto-neuro_p36.jpg`; **eco-Doppler carotídeo — (media)** |
| **FA en el ECG** como causa cardioembólica | **— necesita (media)** |
**Faltan:** RM con difusión positiva en un AIT; eco-Doppler con estenosis; ECG con fibrilación auricular; fondo de ojo con placa de Hollenhorst.
**Candidatos:** no hay en el repo una RM con difusión ni un ECG de FA (la biblioteca no tiene carpeta de cardiología; los ECG que hay son de K, Ca, TEP y bloqueos de rama).

### neuro-03 · Hemorragia intracerebral
| entidad | estado |
|---|---|
| HTA (profunda) vs angiopatía amiloide (lobar) | — |
| Hematoma que crece / desviación de la línea media | anim `A1_hematoma_linea_media.mp4` |
| Hemorragia putaminal | foto ✔ `01_hematoma-intraparenquimatoso-tc__cto-neuro_p42.jpg` |
| Hemorragia talámica / con volcado ventricular | — (hay repuesto sin usar) |
| Hemorragia protuberancial (pupilas puntiformes) | — (baja) |
| **Hemorragia cerebelosa ≥ 3 cm** (cirugía urgente) | **— necesita (alta)** |
| **Hemorragia lobar / microsangrados corticales (amiloide)** | **— necesita (media)**: TC lobar o RM T2*/SWI |
| Signo del spot | — (baja) |
| PA, reversión de anticoagulantes, score ICH | — (no necesita) |
**Faltan:** TC de hematoma cerebeloso; hemorragia lobar o RM con microsangrados.
**Candidatos:** `biblioteca/09_neurologia/neuro-03/01_hematoma-intraparenquimatoso-tc_alt1__cto-radiologia_p67.jpg` (talámica + ventricular, sin usar); `biblioteca/09_neurologia/neuro-01/03_angio-tc-oclusion-acm__cto-radiologia_p65.jpg` (gráfico de la evolución de la densidad del hematoma, útil aquí). No hay TC cerebelosa.

### neuro-04 · Hemorragia subaracnoidea — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| Rotura del aneurisma | anim `A1_aneurisma_3d.mp4` |
| Aneurisma sacular / localización | foto ✔ arteriografía + esquema `03_localizacion-de-aneurismas__cto-neuro_p43.jpg` |
| Cefalea en trueno | — (no necesita) |
| **Parálisis del III par** (midriasis, ptosis) | **— necesita (alta)** |
| **Síndrome de Terson** (hemorragias subhialoideas) | **— necesita (baja-media)**: fondo de ojo |
| TAC: sangre en las cisternas | foto ✔ (tenue, problema 3) |
| **PL: xantocromía, GR iguales en los 3 tubos** | **— necesita (media)**: foto de tubos/xantocromía |
| Hunt-Hess / Fisher | — (no necesita) |
| Coils / clip | — (baja) |
| Vasoespasmo (angiografía) | — (baja) |
| **Hidrocefalia aguda** | **— necesita (media)**: TC con dilatación ventricular |
| (HSA de la convexidad) | foto **que no calza** (problema 2) |
**Faltan:** foto de la parálisis del III par; tubos de LCR con xantocromía; TC con hidrocefalia aguda; fondo de ojo de Terson.
**Candidatos:** no hay en el repo una foto del III par ni de la xantocromía.

### neuro-05 · Trombosis venosa cerebral
| entidad | estado |
|---|---|
| Hipertensión venosa / infarto venoso hemorrágico | anim `A1_trombosis_seno.mp4`; **TC con infarto venoso hemorrágico — (media)** |
| Factores de riesgo | — (no necesita) |
| HTEC: **papiledema** | **— necesita (media)** |
| **Trombosis del seno cavernoso**: proptosis, quemosis, oftalmoplejía | **— necesita (media)** |
| TAC: signo de la cuerda / delta vacío | foto débil (problema 4) |
| Angio-RM venosa (examen de elección) | **— necesita (media)** |
| Anticoagulación | — (no necesita) |
**Faltan:** papiledema; foto clínica de la trombosis del seno cavernoso; angio-RM venosa con defecto de relleno.
**Candidatos:** `biblioteca/12_oftalmologia/oftal-18/01_papiledema__cto-oftalmo_p88.jpg`; `biblioteca/09_neurologia/neuro-05/01_trombosis-de-seno-signo-delta_alt1__cto-radiologia_p64.jpg` (RM del seno, sin usar). Para la proptosis, solo como referencia: `05_endocrinologia/endo-06/02_oftalmopatia-exoftalmos__cto-endocrino_p57.jpg` (es la de Graves: no sirve como imagen de la trombosis).

### neuro-06 · Migraña y cefalea tensional
Fisiopatología (anim `A1_aura_cgrp.mp4`), aura (svg `S1_aura-fortificacion__propio.svg`), criterios IHS, tensional, SNOOP y tratamiento. **Ningún hueco obligatorio.**
Opcional (baja): papiledema para el "P" de SNOOP (`12_oftalmologia/oftal-18/01_papiledema__cto-oftalmo_p88.jpg`); arteritis temporal para "Older > 50" (`08_reumatologia/reuma-21/01_halo-ecografico-arteritis-temporal__cto-reuma_p72.jpg`).

### neuro-07 · Cefalea en racimos y neuralgia del trigémino
| entidad | estado |
|---|---|
| Racimos: dolor orbitario + autonómicos (lagrimeo, rinorrea, Horner) | foto ✔ `01_sindrome_horner__kanski_p821.jpg` |
| Tratamiento (O₂, sumatriptán, verapamilo) | — (no necesita) |
| Neuralgia: compresión por un asa vascular | anim `A1_trigemino_compresion.mp4` |
| **Territorios V1 / V2 / V3** (V2–V3 típico; V1 aislado = secundaria) | **— necesita (baja-media)**: mapa dermatómico del trigémino (puede ser un svg) |
| Carbamazepina / Jannetta | — (no necesita) |
| Hemicránea / SUNCT | — (no necesita) |
**Falta:** mapa de las ramas del trigémino. No está en el repo.

### neuro-08 · Epilepsia y fármacos
| entidad | estado |
|---|---|
| Glutamato/GABA, propagación focal → bilateral | anim `A1_crisis_propagacion_3d.mp4` |
| Clasificación ILAE | — |
| Ausencias: punta-onda a 3 Hz | foto ✔ `01_eeg-punta-onda-3-hz__cto-neuro_p73.jpg` |
| RM de epilepsia (esclerosis mesial temporal) | — (baja) |
| Valproato teratógeno | — (no necesita) |
| **Fenitoína: hiperplasia gingival** | **— necesita (media)** |
| **Carbamazepina/lamotrigina: Stevens-Johnson** | **— necesita (media)** |
| Selección del fármaco y niveles | — (no necesita) |
**Faltan:** hiperplasia gingival por fenitoína; rash / Stevens-Johnson.
**Candidatos:** `biblioteca/11_dermatologia/derma-09/01_necrolisis_mucosa_oral__fitzpatrick_p390.jpg` (necrólisis epidérmica en la mucosa oral). La infiltración gingival de `hem-16` es leucémica: **no** sirve para la fenitoína.

### neuro-09 · Estatus epiléptico
Reloj t1/t2 (anim `A1_reloj_estatus.mp4`), fases farmacológicas, complicaciones. **Ningún hueco obligatorio** (todo es protocolo). Opcional (baja): EEG de estatus no convulsivo; orina oscura por rabdomiolisis.

### neuro-10 · Primera crisis vs síncope
| entidad | estado |
|---|---|
| Crisis provocada (metabólica, tóxica) | — (no necesita) |
| Síncope convulsivo | anim `A1_sincope_flujo.mp4` |
| Semiología síncope vs crisis | — |
| **Mordedura lateral de la lengua** | **— necesita (baja-media)**: foto clínica |
| Pseudocrisis | — (no necesita) |
| Estudio (ECG, TAC), restricciones | — (opcional: ECG de QT largo / Brugada, baja) |
**Falta:** foto de la mordedura lateral de la lengua. No está en el repo.

### neuro-11 · Enfermedad de Parkinson
| entidad | estado |
|---|---|
| Vía nigroestriada / cuerpos de Lewy | anim `A1_nigroestriada_3d.mp4` |
| Braak / síntomas no motores | — (no necesita) |
| Bradicinesia, temblor de reposo, rigidez, postura | foto ✔ (dibujo) `01_postura-parkinsoniana__cto-neuro_p54.jpg` + svg de micrografía |
| **Facies amímica / marcha festinante** | **— necesita (baja)**: foto o video |
| Levodopa, agonistas, complicaciones motoras | — (no necesita) |
| DBS | — (baja) |
**Falta (baja):** foto real de un paciente con Parkinson (hoy es un dibujo). Opcional: DaTSCAN normal vs Parkinson.

### neuro-12 · Parkinsonismos atípicos y por fármacos
| entidad | estado |
|---|---|
| Parkinsonismo por fármacos (bloqueo D2) | anim `A1_bloqueo_d2.mp4` |
| Fármacos culpables | — (no necesita) |
| **PSP: signo del colibrí / pingüino** | **— necesita (media)**: RM sagital |
| **AMS: signo de la cruz caliente** | **— necesita (media)**: RM axial de la protuberancia |
| Degeneración corticobasal (mano ajena) | — (baja) |
| **Parkinsonismo vascular**: infartos lacunares múltiples / leucoaraiosis | **— necesita (baja-media)** |
**Faltan:** RM con el signo del colibrí; RM con la cruz caliente; RM con leucoaraiosis. Ninguna está en el repo.

### neuro-13 · Temblor y distonía aguda
| entidad | estado |
|---|---|
| Reposo / postural / intención | — |
| Temblor esencial (espiral) | foto ✔ `02_espiral_temblor_real__commons.jpg` + svg |
| Fisiológico exagerado / hipertiroidismo | — (no necesita) |
| **Distonía aguda: crisis oculógira, tortícolis** | **— necesita (media)**: foto clínica |
| Biperideno | — (no necesita) |
**Falta:** foto de una distonía aguda por metoclopramida (crisis oculógira o tortícolis). No está en el repo. *Nota:* la clase no tiene animación.

### neuro-14 · Alzheimer y deterioro cognitivo leve
| entidad | estado |
|---|---|
| Amiloide y tau | anim `A1_amiloide_tau.mp4` |
| Olvido normal / DCL / demencia | — (no necesita) |
| MMSE, MoCA, **test del reloj** | svg ✔ `S1_test-del-reloj__propio.svg` |
| **RM con atrofia hipocampal** | **— necesita (alta)** (marcada como pendiente en `IMAGENES_FALTANTES.md`; solo se resolvió el reloj) |
| PET-FDG con hipometabolismo parietotemporal | foto ✔ |
| **Causa reversible: hematoma subdural crónico** | **— necesita (media)** |
| **Causa reversible: hidrocefalia normotensiva** (Hakim-Adams) | **— necesita (media)**: TC con ventriculomegalia |
| IAChE / memantina / síntomas conductuales | — (no necesita) |
**Faltan:** RM coronal con atrofia del hipocampo; TC de hematoma subdural crónico; TC/RM de hidrocefalia normotensiva.
**Candidatos:** `biblioteca/10_cirugia/cirugia-12/01_hematoma-epidural-vs-subdural-tc__cto-neuro_p142.jpg` (y sus `_alt1`/`_alt2`; verificar que se vea un subdural crónico hipodenso).

### neuro-15 · Demencia vascular, Lewy y frontotemporal
| entidad | estado |
|---|---|
| Escalones vs pendiente | anim `A1_escalones_pendiente.mp4` |
| **Demencia vascular: multiinfarto / leucoaraiosis** | **— necesita (media)**: RM FLAIR |
| Lewy: alucinaciones, fluctuaciones, sensibilidad a neurolépticos | — (opcional: DaTSCAN, baja) |
| Frontotemporal: atrofia "en filo de cuchillo" | foto ✔ `01_rm_demencia_frontotemporal__harrison_p3420.jpg` (rótulos en inglés: "Behavioral variant FTD", "Semantic variant PPA"…) |
| **Lewy vs Parkinson con demencia (regla del año)** | — (no necesita) |
**Falta:** RM con leucoaraiosis / infartos múltiples en la demencia vascular. No está en el repo.

### neuro-16 · Guillain-Barré
Mimetismo molecular, debilidad ascendente (anim `A1_guillain_barre_real.mp4`), regla 20/30/40, LCR, variantes, inmunoterapia. **Ningún hueco obligatorio.** Opcional (baja): parálisis facial bilateral; oftalmoplejía en el Miller Fisher.

### neuro-17 · Miastenia gravis
| entidad | estado |
|---|---|
| Placa neuromuscular normal / miasténica | anim ×2 |
| Ptosis asimétrica y fatigable | foto ✔ |
| Test del hielo | foto ✔ (3 pasos, Kanski) + `01_ptosis_miastenia_reversion__commons.jpg` (rótulo cortado, problema 5) |
| Anticuerpos | — (no necesita) |
| **Estimulación repetitiva con respuesta decremental** | **— necesita (baja-media)**: trazado (puede dibujarse) |
| EMG de fibra única (jitter) | foto ✔ |
| Timoma en la TC | foto (panel de 4 lesiones, problema 6) |
| Fármacos prohibidos, tratamiento, crisis | — (no necesita) |
**Falta:** trazado de la estimulación repetitiva a 3 Hz con decremento. No está en el repo.

### neuro-18 · Esclerosis múltiple
| entidad | estado |
|---|---|
| Desmielinización perivenular | anim `A1_tiempo_espacio.mp4` |
| Uhthoff, Lhermitte | — (no necesita) |
| **Defecto pupilar aferente (Marcus Gunn)** | **— necesita (baja-media)** |
| Neuritis óptica | foto ✔ RM `02_neuritis-optica-rm_1__cto-radiologia_p74.jpg` (+ `_2` en "Más imágenes") |
| **Oftalmoplejía internuclear** | **— necesita (media)** |
| Placas periventriculares, yuxtacorticales, infratentoriales, medulares | foto ✔ `01_placas-em-rm__cto-radiologia_p73.jpg` (repuesto `_alt1__cto-neuro_p61.jpg` sin usar) |
| Bandas oligoclonales | — (baja) |
| **Neuromielitis óptica: mielitis longitudinal extensa (≥ 3 vértebras)** | **— necesita (media)**: RM medular |
**Faltan:** OIN (foto de las 9 posiciones de la mirada o un esquema); RM de NMO con mielitis extensa; DPAR.
**Candidatos:** `biblioteca/12_oftalmologia/oftal-18/01_linterna_oscilante_dpar__kanski_p820.jpg` y `biblioteca/12_oftalmologia/oftal-18/S1_marcus-gunn__propio.svg` (DPAR). No hay en el repo una OIN ni una RM de NMO.

### neuro-19 · Parálisis facial y atrapamientos — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| Central vs periférica (la frente) | anim ×2 + figura ✔ `02_central-vs-periferica__cto-neuro_p14.jpg` |
| Parálisis de Bell: lagoftalmos, signo de Bell | foto ✔ (sutil, problema 7) |
| **Ramsay Hunt: vesículas en el conducto/concha** | **— necesita (alta)** |
| Tratamiento + protección ocular | — (no necesita) |
| **Túnel carpiano: atrofia tenar, Phalen, Tinel** | **— necesita (alta)** |
| **Nervio ulnar: garra cubital, signo de Froment, atrofia hipotenar** | **— necesita (media)** |
| **Peroneo común: pie caído / estepaje** | **— necesita (media)** |
| Parálisis facial bilateral | — (baja) |
**Faltan:** vesículas de Ramsay Hunt; atrofia tenar + maniobras de Phalen/Tinel; garra cubital / Froment; pie caído.
**Candidatos:** `biblioteca/17_otorrino/orl-08/02_vesiculas-en-concha-ramsay-hunt__bailey-love_p736.jpg` (Ramsay Hunt, listo); `biblioteca/17_otorrino/orl-08/01_asimetria-facial-al-sonreir__bailey-love_p736.jpg` (otra parálisis periférica); `biblioteca/09_neurologia/neuro-19/01_paralisis-facial-periferica-bell_alt1__cto-orl_p45.jpg` (Bell más evidente). Para el túnel carpiano, la mano cubital y el peroneo **no hay nada** en el repo (`18_traumatologia` no tiene).

### neuro-20 · Vértigo
| entidad | estado |
|---|---|
| Periférico vs central | — |
| **HINTS: impulso cefálico, nistagmo, skew** | **— necesita (media)**: esquema o secuencia de fotos del head impulse |
| VPPB: Dix-Hallpike | foto ✔ (dibujo) `02_dix_hallpike__usuario.jpg` |
| VPPB: Epley | foto ✔ (dibujo) `01_maniobra_epley__harrison_p202.jpg` |
| Neuronitis vestibular | — (no necesita) |
| **Menière: audiometría con hipoacusia de frecuencias graves** | **— necesita (baja-media)** |
**Faltan:** esquema del head impulse test (normal vs sacada correctiva); audiometría del Menière. *Nota:* la clase no tiene animación. Duplicado en otro módulo: `17_otorrino/orl-07/01_maniobra-de-epley-modificada__harrison_p202.jpg`. Opcional: `17_otorrino/orl-06/01_schwannoma-vestibular-rm-con-contraste__bailey-love_p687.jpg` para el diferencial central.

### neuro-21 · Delirium
CAM, diferencial con demencia/depresión, I WATCH DEATH, medidas HELP, haloperidol. **Ningún hueco obligatorio** (diagnóstico clínico). *Nota:* es la única clase de neurología **sin ninguna imagen ni animación**. Opcional (baja): una animación del CAM o la ecografía de un globo vesical (causa mecánica que se pregunta).

### neuro-22 · Fragilidad y sarcopenia
Fried (anim `A1_fried.mp4`), EWGSOP2, VGI, tratamiento. **Ningún hueco obligatorio.** Opcional (baja): dinamometría de prensión y la prueba de velocidad de marcha.

### neuro-23 · Caídas y fractura de cadera — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| Caída y síndrome post-caída | — (no necesita) |
| Factores intrínsecos, fármacos, hogar | — (no necesita) |
| Timed Up and Go / estación unipodal | — (baja: esquema) |
| **Pierna acortada y en rotación externa** | **— necesita (alta)**: foto clínica (★★★ pendiente en `IMAGENES_FALTANTES.md`) |
| RX: fractura del cuello femoral, Garden | foto ✔ `01_rx_fractura_cuello_femur__commons.jpg` + esquemas Garden ✔ |
| Pertrocantérea / osteosíntesis vs artroplastia | foto ✔ `02_fractura-pertrocanterea_1__cto-trauma_p26.jpg` (+ anim 3D) |
**Falta:** foto clínica del miembro acortado y en rotación externa. No está en el repo. Repuesto mal nombrado: problema 8.

### neuro-24 · Polifarmacia e incontinencia
Farmacología del envejecimiento, cascada de prescripción (svg `S1_cascada-prescripcion__propio.svg`), Beers/STOPP, DIAPPERS, tipos de incontinencia. **Ningún hueco obligatorio.**
