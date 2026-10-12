# Auditoría de imágenes — Dermatología (derma-01 a derma-16)

Fecha: 2026-10-12. Método: script de volcado de `classes/lessons/derma-*.cjs` (títulos, kickers, tarjetas, nodos de flujo, filas de tabla, diapositivas `image` con src/rótulo/narración), cruce con `classes/media/biblioteca/indice.json` y revisión visual (Read y hojas de contacto) de **todas** las fotos de `11_dermatologia/`, de `classes/media/derma-01/` (fotos propias de la clase uno), de las `_alt` sin usar y de las candidatas dermatológicas de otras carpetas (infecto-13/20/21/23, reuma-08/10/13/18/22, gin-02/10, diab-02/23/24, ped-10, neuro-08, gastro-09, nefro-02).

Leyenda: **foto** · **anim** (.mp4) · **NO** = no se muestra. "¿La necesita?": **sí** = lesión reconocible que el EUNACOM pregunta; **no** = fármacos, escalas, cortes de laboratorio. Estado descrito = **antes** de los cambios (ver `CAMBIOS_derma.md`).

Dermatología es la especialidad más visual: casi todo lo enseñado tiene una imagen reconocible. El problema principal no eran los vacíos sino la **calidad**: 4 fotos mal rotuladas o ilegibles, 4 duplicados exactos dentro de una misma clase y 12 pasos con narración de relleno ("Mira esta imagen…").

## Resumen

| clase | tema | entidades | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| derma-01 | Lesiones elementales | 14 | 9 + 10 en "Más imágenes" (**4 duplicados**, 1 ilegible) | 1 | 2 (mácula/mancha, nódulo) | media |
| derma-02 | Acné | 4 | 4 (**"acné nodular" es pápulo-pustuloso**; 1 no enseñada) | 0 | 1 (nódulo-quístico) | **alta** |
| derma-03 | Rosácea | 4 | 2 | 0 | 0 (pápulo-pustulosa: `_alt` sin usar) | baja |
| derma-04 | Alopecias | 4 | 3 | 0 | 1 (pelos en signo de exclamación) | baja |
| derma-05 | Psoriasis | 7 | 4 | 0 | 2 (artritis psoriásica: en reuma-18; pustulosa/eritrodermia) | media |
| derma-06 | Dermatitis atópica | 5 | 3 | 0 | 2 (impetiginización: en infecto-20; eccema herpético) | **alta** |
| derma-07 | Seborreica y contacto | 3 | 2 | 0 | 1 (contacto irritativa) | media |
| derma-08 | Urticaria y angioedema | 3 | 2 | 0 | 0 (1 opcional) | baja |
| derma-09 | SSJ / NET | 4 | 3 | 0 | 1 (Nikolsky / dianas atípicas) | media |
| derma-10 | DRESS | 3 | 3 | 0 | 0 | baja |
| derma-11 | Pénfigo y penfigoide | 4 | 2 | 1 | 2 (pénfigo oral, Nikolsky) | **alta** |
| derma-12 | Eritema multiforme | 2 | 2 | 0 | 0 | baja |
| derma-13 | Melanoma | 6 | 2 (**"nevus benigno" es un nevo congénito gigante**) | 1 | 3 (nevo común, lentiginoso acral, nodular) | **alta** |
| derma-14 | Basocelular y espinocelular | 5 | 2 | 0 | 0 (rodens y labio: `_alt` sin usar) | media |
| derma-15 | Queratosis actínica, nevo displásico | 3 | 2 | 0 | 1 (nevo displásico) | media |
| derma-16 | Tiñas, pitiriasis versicolor, escabiosis | 6 | 3 (**escabiosis ilegible**) | 0 | 3 (surco acarino, tiña pedis; tiña capitis en derma-04) | **alta** |

## Detalle por clase

### derma-01 — Lesiones elementales
- Enseña: mácula, mancha, vesícula, ampolla, pústula, pápula, placa, nódulo, habón, erosión, úlcera, fisura, escama, costra, escara, liquenificación.
- "Así se ven" (fotos en `classes/media/derma-01/`): vesícula (VHS), ampolla (penfigoide), pústula (pustulosis palmar), pápula (molusco), placa (psoriasis), habón, erosión (pénfigo vulgar, misma foto que derma-11), úlcera con escara (calcifilaxis), liquenificación. Todas correctas; la liquenificación es poco marcada pero es la figura del CTO.
- "Más imágenes" (3 diapositivas, 10 fotos, todas con narración de relleno): **duplicados exactos** de las de arriba: `02_liquenificacion`, `06_pustula`, `09_ulcera`, `10_papula-umbilicada`. `08_erosion` (síndrome de piel escaldada en un lactante) **ilegible** como erosión a tamaño de diapositiva. Útiles y distintas: `01_papula-purpura-palpable`, `03_exantema-maculopapular`, `04_vesicula` (varicela), `05_ampolla` (penfigoide CTO), `07_habon` (CTO).
- `_alt` sin usar: `04_vesicula_alt1_2`, `05_ampolla_alt1` (impétigo ampolloso). No necesarias.
- **NO**: mácula/mancha (p. ej. mancha café con leche o vitíligo) y nódulo (p. ej. eritema nudoso). Sí las necesita (media). Escama, costra, fisura: baja.

### derma-02 — Acné
- Comedones (Fitzpatrick p66): **foto** correcta.
- "Acné nodular" (Fitzpatrick p732, panel B): **mal rotulada** — muestra pápulas y pústulas pequeñas, sin nódulos ni quistes; la narración ("deja cicatrices, indicación de isotretinoína") no corresponde.
- Más imágenes: acné pápulo-pustuloso CTO p59 (correcto) y "reacción acneiforme" por inhibidores del EGFR (CTO p53): **tema no enseñado** en la clase, narración de relleno.
- **NO**: acné nódulo-quístico / conglobata (alta: es la indicación de isotretinoína que se pregunta). Sin imagen en el repo.

### derma-03 — Rosácea
- Rosácea (CTO p60) y rinofima (AMIR ORL p41): correctas. `01_rosacea_alt1` (AMIR p84, pápulas y pústulas sobre eritema) sin usar → útil para la forma pápulo-pustulosa.
- Rosácea ocular: opcional (baja).

### derma-04 — Alopecias
- Alopecia areata (CTO p62), tiña capitis (AMIR p63), escala de Hamilton (dibujo CTO): correctas. `_alt1` de areata sin usar (redundante).
- Pelos en signo de exclamación (tricoscopia): **NO**, baja–media. Efluvio telógeno: no necesita imagen.

### derma-05 — Psoriasis
- Placas, guttata, pitting ungueal: **foto** correctas. Koebner (CTO p10, que en el original es liquen plano sobre cicatriz): rótulo válido, narración de relleno.
- Artritis psoriásica (IFD, dactilitis): **NO** en la clase, pero `reuma-18/01_artropatia-psoriasica-ifd__amir-reuma_p81.jpg` muestra compromiso de interfalángicas distales con uñas psoriásicas → candidata.
- Pustulosa generalizada / eritrodermia: **NO**, media. Signo de Auspitz: baja.

### derma-06 — Dermatitis atópica
- Lactante (mejillas) y escolar (flexuras) Fitzpatrick p189: correctas. AMIR p91 (eccema en brazo) en "Más imágenes" con narración de relleno.
- Impetiginización (costras melicéricas): **NO**; candidata `infecto-20/03_impetigo_alt1__amir-derma_p55.jpg` (costras melicéricas peribucales muy claras).
- Eccema herpético de Kaposi: **NO**, alta (urgencia que la clase destaca). Sin imagen en el repo.

### derma-07 — Seborreica y contacto
- Eccema de contacto alérgico (CTO p43) y seborreica facial (Fitzpatrick p260): correctas. `_alt1` de contacto (eccema palmar) sin usar.
- Dermatitis de contacto irritativa de manos: **NO**, media. Costra láctea: baja.

### derma-08 — Urticaria y angioedema
- Habones (CTO p49) y angioedema labial (CTO p50): correctas. Vasculitis urticariana: opcional (baja).

### derma-09 — SSJ / NET
- Mucosas (Fitzpatrick p390), NET con despegamiento (AMIR p105) y labios (Fitzpatrick p685, rotulado "por Mycoplasma": la clase no enseña Mycoplasma para SSJ; narración de relleno).
- Signo de Nikolsky / dianas atípicas: **NO**, media. (`neuro-08/02_stevens-johnson-mucosas` es la misma figura p390.)

### derma-10 — DRESS
- Edema facial y exantema (Fitzpatrick Fig. 40-2/40-3) correctos. CTO p9 (exantema morbiliforme, en el original "de origen vírico") con narración de relleno; válido como ejemplo de exantema morbiliforme. Completo.

### derma-11 — Pénfigo y penfigoide
- **anim** del plano de separación. Pénfigo vulgar (AMIR p49: erosiones en dorso; no se ven ampollas flácidas intactas) y penfigoide (CTO p72, ampollas tensas): aceptables.
- `_alt1_1` (= foto "ampolla" de derma-01) y `_alt1_2` (placas urticariformes, sin ampollas visibles) sin usar; la segunda no se puede rotular con seguridad como fase prebullosa.
- **NO**: erosiones orales del pénfigo (alta: "la boca avisa antes"), signo de Nikolsky (media), inmunofluorescencia en red vs lineal (media, histología).

### derma-12 — Eritema multiforme
- Dianas en dorso de manos (CTO p15, lesiones pequeñas) en "Así se ve"; eritema multiforme en pie (AMIR p106, dianas más claras) en "Más imágenes" con narración de relleno. Ambas correctas → conviene juntarlas en "Así se ve".

### derma-13 — Melanoma
- **anim** Breslow. Melanoma ABCDE (AMIR p78): correcto.
- "Nevus benigno" (AMIR p99): **mal rotulado** — es un **nevo melanocítico congénito gigante** en un lactante (lesión extensa, irregular, con nevos satélites), lo opuesto al "simétrico, borde regular, color homogéneo" que narra la clase. Sin reemplazo en el repo.
- **NO**: nevo común benigno para comparar (media), melanoma lentiginoso acral (alta: el más frecuente en Chile según la clase), melanoma nodular (media).

### derma-14 — Basocelular y espinocelular
- CBC nodular perlado (CTO p99) y CEC (CTO p100): correctos.
- `_alt` sin usar y útiles: `01_cbc-nodular-perlado_alt1` (AMIR p76) = CBC ulcerado destructivo del ala nasal → **úlcera de Rodent**, que la clase enseña; `02_cec_alt1` (AMIR p77) = CEC del **labio inferior**, "la localización que más se pregunta".
- Morfeiforme / superficial: baja.

### derma-15 — Premalignas
- Queratosis actínica (CTO p96) y cuerno cutáneo (Fitzpatrick p66): correctos.
- Nevo displásico: **NO**, media.

### derma-16 — Infecciones superficiales
- Tiña corporis (AMIR p62) y pitiriasis versicolor (CTO p21): correctas.
- "Escabiosis" CTO p31: **ilegible** — primer plano desenfocado y violáceo, no se distingue ningún surco. `03_escabiosis-surco_alt1` (AMIR p69: pápulas y costras de rascado en muñeca, palma y dedos) es legible, aunque tampoco muestra un surco.
- Tiña de la cabeza: **NO** en la clase; existe en `derma-04/03_tina-capitis__amir-derma_p63.jpg`.
- **NO**: surco acarino (alta), tiña pedis interdigital (media), tiña inguinal (baja), KOH (baja).

## Candidatas revisadas y descartadas
- `derma-11/02_penfigoide-ampolloso-tensas_alt1_2` (placas urticariformes: rótulo dudoso).
- `derma-01/05_ampolla_alt1` (impétigo ampolloso: tema de infectología).
- `nefro-02/03_exantema-por-farmaco__cto-derma_p9` (misma figura que derma-10).
- `reuma-10` lupus discoide / subagudo, `reuma-13` heliotropo, `gin-02` acantosis, `gastro-09` dermatitis herpetiforme, `diab-24` xantomas: temas no enseñados en estas clases.
