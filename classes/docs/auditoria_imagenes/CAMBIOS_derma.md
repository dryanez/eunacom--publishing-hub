# Cambios de imágenes — Dermatología (aplicación de `derma.md`)

Fecha: 2026-10-12. Cada foto usada se abrió y verificó antes de rotularla. `node classes/scripts/check_lesson.cjs` da ✓ en las dieciséis clases. Los guiones exportados (`classes/narration/derma-*.json`) quedan desactualizados para las clases tocadas: hay que volver a exportarlos.

clase | slide (kicker · título) | antes → después | archivo(s)
---|---|---|---
derma-01 | Más imágenes ×3 (10 fotos, narración de relleno) | Tres diapositivas → dos: "Las mismas lesiones en otros pacientes" (vesículas de varicela, ampollas tensas de penfigoide, habones) y "Pápulas y exantema" (pápulas purpúricas, exantema maculopapular), con narración propia. Retirados 4 duplicados exactos de "Así se ven" (liquenificación, pústula, úlcera, pápula umbilicada) y la erosión de piel escaldada (ilegible). | `lessons/derma-01.cjs`
derma-02 | Así se ve · Acné | "Acné nodular" (muestra pápulas y pústulas) → rerrotulada "Acné pápulo-pustuloso"; agregada CTO p59 "Pápulo-pustuloso con tendencia a cicatrizar" (venía de Más imágenes); narración nueva (escalar a isotretinoína ante nódulos, quistes o cicatrices). | `lessons/derma-02.cjs`
derma-02 | Más imágenes | Diapositiva eliminada: "reacción acneiforme" por inhibidores del EGFR no se enseña en la clase; la otra foto pasó a "Así se ve". | `lessons/derma-02.cjs`
derma-03 | Así se ve · Rosácea | Agregada "Rosácea pápulo-pustulosa" (`_alt1` sin usar) entre la rosácea y el rinofima, con paso narrado. | `media/biblioteca/11_dermatologia/derma-03/01_rosacea_alt1__amir-derma_p84.jpg`
derma-05 | Más imágenes · Koebner y artritis psoriásica | Narración de relleno de Koebner → explicación del fenómeno sobre la cicatriz; agregada "Artritis psoriásica de interfalángicas distales" (copiada de reuma-18). | `derma-05/05_artritis-psoriasica-ifd__amir-reuma_p81.jpg` (copia de `08_reumatologia/reuma-18/01_artropatia-psoriasica-ifd__amir-reuma_p81.jpg`)
derma-06 | Más imágenes · Eccema y sobreinfección | Narración de relleno → narración propia; agregada "Costras melicéricas (impétigo)" para la impetiginización (copiada de infecto-20). | `derma-06/03_impetiginizacion-costras-melicericas__amir-derma_p55.jpg` (copia de `07_infectologia/infecto-20/03_impetigo_alt1__amir-derma_p55.jpg`)
derma-09 | Más imágenes · Las mucosas en el Stevens-Johnson | Rótulo "Stevens-johnson por mycoplasma" (no enseñado) → "Labios y boca en el Stevens-Johnson"; narración de relleno → compromiso mucoso en más del noventa por ciento. | `lessons/derma-09.cjs`
derma-10 | Más imágenes · El exantema morbiliforme | Narración de relleno → exantema morbiliforme y lo que distingue al DRESS. | `lessons/derma-10.cjs`
derma-12 | Así se ve · Eritema multiforme | Foto de Más imágenes (dianas en el pie, AMIR p106) movida aquí como galería de dos; narración nueva (distribución acral y simétrica). Diapositiva "Más imágenes" eliminada. | `lessons/derma-12.cjs`
derma-13 | Así se ve · Melanoma | Retirado "Nevus benigno" (es un nevo congénito gigante, contrario a lo narrado). Queda solo el melanoma. | `lessons/derma-13.cjs`
derma-14 | Así se ve · Cáncer de piel no melanoma | Agregada "Basocelular ulcerado: úlcera de Rodent" (`_alt1` sin usar) entre el basocelular nodular y el espinocelular, con paso narrado. | `derma-14/01_cbc-nodular-perlado_alt1__amir-derma_p76.jpg`
derma-14 | Más imágenes · Espinocelular del labio inferior (nueva) | Nueva diapositiva tras "Así se ve" con el CEC de labio inferior (`_alt1` sin usar). | `derma-14/02_cec_alt1__amir-derma_p77.jpg`
derma-16 | Así se ve · Infecciones superficiales | "Escabiosis" CTO p31 (ilegible) → `_alt1` "Escabiosis: lesiones en muñeca y dedos"; narración ajustada (ya no promete un surco visible). | `derma-16/03_escabiosis-surco_alt1__amir-derma_p69.jpg`
derma-16 | Más imágenes · Tiña de la cabeza (nueva) | Nueva diapositiva con la tiña capitis (copiada de derma-04). | `derma-16/04_tina-capitis__amir-derma_p63.jpg` (copia de `derma-04/03_tina-capitis__amir-derma_p63.jpg`)

## No hecho

- **derma-13**: no hay en el repo un nevo común benigno para reemplazar el nevo congénito gigante; se dejó solo el melanoma (ver FALTANTES).
- **derma-11**: `_alt1_2` (placas urticariformes) no se usó como "fase prurítica previa" porque el pie solo dice "Penfigoide ampollar" y no se ven ampollas: rótulo no verificable.
- **derma-01**: la foto propia `classes/media/derma-01/liquenificacion.jpg` muestra una liquenificación poco marcada; se mantiene (es la figura del CTO) hasta tener una mejor.
- Archivos que quedaron sin referencia en las clases (no se borraron): `derma-01/02_liquenificacion`, `06_pustula`, `08_erosion`, `09_ulcera`, `10_papula-umbilicada`; `derma-02/02_reaccion-acneiforme`; `derma-13/02_nevus-melanocitico`; `derma-16/03_escabiosis-surco__cto-derma_p31`.
