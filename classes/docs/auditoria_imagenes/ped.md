# Auditoría de imágenes — Pediatría (ped-01 a ped-22)

Fecha: 2026-10-12. Estado **antes** de los cambios (los arreglos están en `CAMBIOS_ped.md`; lo que sigue faltando, en `FALTANTES_ped.md`).

Método: script de volcado (título, kicker, tarjetas, nodos, filas de tabla y diapositivas `type: 'image'` con `src`, `label` y narración) sobre `classes/lessons/ped-*.cjs`. `.mp4` = animación; `.svg __propio` = esquema dibujado por nosotros (cuenta como foto/esquema). Se abrieron con Read **todas** las fotos de `classes/media/biblioteca/15_pediatria/` y las `_alt` sin usar, y se buscaron candidatas en las demás carpetas de la biblioteca (infecto, resp, endo, orl, trauma, gastro).

Leyenda: **foto** · **anim** · **NO** = no se muestra. "¿La necesita?": **sí** = existe una imagen reconocible que el EUNACOM pregunta; **no** = dosis, cortes, scores, calendarios, algoritmos.

## Resumen

| clase | tema | entidades | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| ped-01 | Antropometría y curvas de crecimiento | 5 | 1 (esquema propio) | 0 | 0 | baja |
| ped-02 | Desarrollo psicomotor | 5 | 1 (esquema propio) | 0 | 0 | baja |
| ped-03 | Calendario de vacunas (PNI) | 5 | 0 | 0 | 0 | baja |
| ped-04 | Lactancia y suplementación | 6 | 4 | 0 | 0 | baja |
| ped-05 | Bronquiolitis | 6 | 2 | 1 | 0 | baja |
| ped-06 | Laringitis obstructiva (croup) | 6 | 2 (1 poco legible) | 0 | 1 | media |
| ped-07 | Neumonía adquirida en la comunidad | 7 | 1 | 0 | 3 | **alta** |
| ped-08 | Cuerpo extraño en la vía aérea | 6 | 3 | 1 | 1 | media |
| ped-09 | Fiebre sin foco | 5 | 0 | 0 | 0 | baja |
| ped-10 | Exantemas febriles y Kawasaki | 6 | 9 (**1 no enseñada, 4 en una diapositiva**) | 1 | 2 | **alta** |
| ped-11 | Diarrea aguda y deshidratación | 6 | 1 (adulto) | 0 | 1 | media |
| ped-12 | Vómitos del lactante (RGE, píloro, invaginación) | 5 | 2 | 0 | 2 | media |
| ped-13 | ITU en pediatría | 5 | 2 (1 esquema) | 0 | 1 | baja |
| ped-14 | Convulsión febril | 4 | 0 | 0 | 0 | baja |
| ped-15 | Reanimación neonatal | 6 | 1 (algoritmo) | 1 | 0 | baja |
| ped-16 | Clasificación del RN (EG y peso) | 5 | 1 | 0 | 0 | baja |
| ped-17 | Ictericia neonatal | 7 | 1 (esquema propio) | 2 | 2 | media |
| ped-18 | Dificultad respiratoria del RN | 5 | 3 | 0 | 0 | baja |
| ped-19 | Sepsis neonatal | 5 | 0 | 0 | 0 | baja |
| ped-20 | Hipoglicemia e hipocalcemia neonatal | 4 | 0 | 0 | 0 | baja |
| ped-21 | Tamizaje neonatal | 5 | 3 | 0 | 1 | media |
| ped-22 | Displasia del desarrollo de la cadera | 7 | 7 (**2 mal rotuladas, 1 duplicada, 4 en una diapositiva**) | 0 | 3 | **alta** |
| **Total** | | **121** | **44** | **6** | **17** | 3 alta · 8 media |

Fotos con problemas detectadas:
- **ped-10** `05_mano-pie-boca` está en "Así se ve" pero mano-pie-boca no se enseña en la clase; además la narración dice "vesículas en palmas y boca" y la foto muestra plantas. `06_kawasaki` muestra descamación periungueal de los dedos (el pie del índice dice "conjuntivitis"), rotulada solo "Kawasaki". Kawasaki y varicela (lo más preguntado) estaban fuera de "Así se ve". Una diapositiva "Más imágenes" tenía 4 fotos.
- **ped-22** `02_pliegues_asimetricos` muestra el **signo de Galeazzi** (caderas y rodillas flectadas, una rodilla más baja), no pliegues. `04_barlow_foto` muestra la **abducción** de ambas caderas flectadas (flechas hacia afuera), no el Barlow (aducción y empuje posterior). `01_lineas-radiologicas-ddc_1` (esquema de Ortolani/Barlow, mal nombrado el archivo) repite lo que ya muestra "Así se ve". "Más imágenes" tenía 4 fotos.
- **ped-06** `01_croup_campanario` (Rx AP de cuello) se lee mal: el estrechamiento subglótico casi no se ve.
- **ped-11** `01_pliegue_persistente` es el dorso de la mano de un adulto; sirve para el signo, pero no es un lactante.
- **ped-21** `03_muestras_satisfactorias` muestra las muestras **rechazadas** (la narración lo dice bien; el rótulo "Calidad de la muestra" es vago).

Candidatas ya en el repo: `resp-06/01_consolidacion-lobar`, `resp-11/01_derrame-pleural` (ped-07); `orl-18/02_…inspiracion` y `03_…espiracion` (ped-08); `ped-10/07_varicela_alt1`, `ped-10/06_kawasaki_alt1`, `ped-10/04_escarlatina_alt1` (ped-10); `endo-04/01_hipotiroidismo_congenito` (ped-21); `ped-12/*_alt1` y `ped-18/02_…_alt1` (sin necesidad).

## Detalle por clase

### ped-01 · Antropometría — baja
Indicadores P/T, T/E, P/E, IMC/E y sus cortes → esquema propio (curva OMS peso/edad niñas). Técnica de medición, conducta: no necesitan foto.

### ped-02 · Desarrollo psicomotor — baja
Hitos → esquema propio. EEDP/TEPSI, banderas rojas, edad corregida: no necesitan foto.

### ped-03 · Vacunas — baja
Calendario, vivas vs inactivadas, falsas contraindicaciones, nirsevimab: sin imagen y no la necesita.

### ped-04 · Lactancia — baja
| entidad | estado | ¿la necesita? |
|---|---|---|
| Acople correcto / deficiente | foto ×3 (`03_acople_incorrecto_vs_correcto`, `01_acople_correcto`, `04_acople_deficiente`) — coinciden | — |
| Succión efectiva | esquema (`02_tetina_succion`) | — |
| Contraindicaciones, vitamina D, hierro, alimentación complementaria | NO | no |

### ped-05 · Bronquiolitis — baja
Distrés (retracciones) → foto; Rx con hiperinsuflación → foto; fisiopatología → anim. Score de Tal, nirsevimab: no. Coinciden.

### ped-06 · Croup — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Signo del campanario (Rx AP) | foto, **poco legible** | sí (mejor imagen) |
| Epiglotitis "rojo cereza" | foto (endoscópica) | — |
| Epiglotitis: Rx lateral con signo del pulgar | NO | sí — sin candidata |
| Grados, dexametasona/adrenalina, traqueítis | NO | no |

### ped-07 · Neumonía — alta
| entidad | estado | ¿la necesita? |
|---|---|---|
| Neumonía redonda | foto (`01_neumonia_redonda`, coincide) | — |
| Consolidación lobar con broncograma (neumococo) | NO | sí — candidata `resp-06/01_consolidacion-lobar` (adulto) |
| Derrame pleural paraneumónico | NO | sí — candidata `resp-11/01_derrame-pleural` |
| Infiltrado intersticial (virus/Mycoplasma) | NO | sí — sin candidata |
| Taquipnea por edad, amoxicilina, criterios de hospitalización | NO | no |

### ped-08 · Cuerpo extraño — media
Golpes y compresiones en lactante y Heimlich → esquemas (coinciden). Bronquio derecho → anim. Rx de cuerpo extraño bronquial → foto (narración genérica). **Rx en espiración** (atrapamiento aéreo, se enseña en "fase subaguda") → NO, sí la necesita: candidatas `orl-18/02_mani-bronquio-derecho-inspiracion` y `03_…espiracion` (CXR Fig. 14.13; impresión en negativo, pero es la figura clásica). Broncoscopía rígida: no.

### ped-09 · Fiebre sin foco — baja
Grupos por edad, Rochester, esquemas antibióticos: no necesitan imagen.

### ped-10 · Exantemas — alta
| entidad | estado | ¿la necesita? |
|---|---|---|
| Exantema súbito | foto (Así se ve) | — |
| Eritema infeccioso (bofetada) | foto (Así se ve) | — |
| Escarlatina: lengua aframbuesada / saburral | foto ×2 (Más imágenes, rótulo genérico) | — |
| Escarlatina: piel de lija, líneas de Pastia | NO (`04_escarlatina_alt1` existe pero casi no se ve) | sí (baja) |
| Varicela (cielo estrellado) | foto (Más imágenes) — `07_varicela_alt1` sin usar muestra mejor los distintos estadios | — |
| Kawasaki: manos y pies | foto (Más imágenes; descamación periungueal rotulada "Kawasaki") — `06_kawasaki_alt1` (descamación plantar) sin usar | — |
| Kawasaki: conjuntivitis no exudativa, labios fisurados | NO (`infecto-22/04_kawasaki-conjuntivitis…` es el mismo archivo de dedos) | **sí** — sin candidata |
| Sarampión, rubéola (no son de los cinco cuadros, pero la animación cita sarampión) | foto ×2 | — |
| Mano-pie-boca | foto en "Así se ve" pero **no se enseña** | — (sobra) |
| Relación fiebre-exantema | anim | — |

### ped-11 · Diarrea y deshidratación — media
Pliegue persistente → foto (adulto). Signos del lactante deshidratado (ojos hundidos, mucosas secas, fontanela) → NO, sí la necesita, sin candidata. Planes A/B/C, SRO, SHU: no.

### ped-12 · Vómitos del lactante — media
Estenosis del píloro → eco (coincide); invaginación → eco en diana (coincide). `_alt1` (dibujos anatómicos de píloro e invaginación) sin usar, no aportan. Faltan: jalea de grosella (foto clínica, baja) y vómito bilioso del RN (Rx de doble burbuja/malrotación, media), sin candidata. RGE fisiológico: no.

### ped-13 · ITU — baja
Grados de RVU → esquema propio; CUMS con RVU bilateral → foto (coincide). DMSA con cicatriz renal → NO (baja), sin candidata. Toma de muestra, antibióticos: no.

### ped-14 · Convulsión febril — baja
Sin imagen y no la necesita.

### ped-15 · Reanimación neonatal — baja
Algoritmo (CTO) y animación del minuto de oro. Apgar, oxígeno, meconio: no.

### ped-16 · Clasificación del RN — baja
Test de Capurro → lámina (coincide). PEG/AEG/GEG, Ballard: no.

### ped-17 · Ictericia neonatal — media
Bhutani y Kramer → esquema propio; trayectorias → anim ×2. Faltan: **foto clínica de RN ictérico** (media) y **acolia / coluria** de la atresia biliar (media), sin candidata. ABO/Rh, fototerapia: no.

### ped-18 · Dificultad respiratoria del RN — baja
EMH, TTRN y SAM → Rx ×3 (coinciden con el pie del índice). `02_taquipnea-transitoria-rx_alt1` sin usar (no hace falta). Silverman: no.

### ped-19 · Sepsis neonatal — baja / ped-20 · Hipoglicemia — baja
Sin imagen y no la necesitan (esquemas, dosis, cortes).

### ped-21 · Tamizaje neonatal — media
Punción del talón, tarjeta, muestras rechazadas → fotos MINSAL (coinciden; rótulo vago en la tercera). **Facies de hipotiroidismo congénito** (macroglosia; la clase la enseña como "cuando se escapó") → NO, sí la necesita: candidata `endo-04/01_hipotiroidismo_congenito__nelson_p4372`. Fenilcetonuria, emisiones otoacústicas, oximetría: no.

### ped-22 · Displasia de cadera — alta
| entidad | estado | ¿la necesita? |
|---|---|---|
| Ortolani / Barlow | esquema ×2 (Así se ve, coinciden) + esquema `ddc_1` duplicado en Más imágenes | — |
| Signo de Galeazzi | foto, **rotulada "Pliegues asimétricos"** | — |
| Abducción limitada | foto, **rotulada "Maniobra de Barlow"** | — |
| Líneas de Hilgenreiner y Perkins | esquema (coincide) | — |
| Rx de pelvis con DDC (índice acetabular, núcleo súpero-externo) | NO | sí — sin candidata |
| Ecografía de cadera | NO | sí (media) — sin candidata |
| Arnés de Pavlik | NO | **sí** — sin candidata |
| Yeso pelvipédico | foto (coincide; narración genérica) | — |
