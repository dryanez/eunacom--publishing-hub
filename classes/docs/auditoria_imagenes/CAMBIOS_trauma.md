# Cambios de imágenes — Traumatología (aplicación de la auditoría `trauma.md`)

Fecha: 2026-10-12. Toda foto usada se abrió y verificó antes de rotularla. `check_lesson.cjs` da ✓ en trauma-01 a trauma-15. Traumatología no tiene audio renderizado; se ajustó la narración donde hizo falta. No había fotos mal rotuladas: el paso 1 se limitó a respetar el máximo de 3 fotos por diapositiva.

clase | slide (kicker · título) | antes → después | archivo(s)
---|---|---|---
trauma-03 | Más imágenes · El TEP en el angioTAC (nueva) | Agregado angioTAC con trombos en arterias pulmonares (la clase enseña "Dx: angioTAC de tórax"). | `18_traumatologia/trauma-03/03_angiotc-tep__cto-neumo_p103.jpg` (copia de `02_neumologia/resp-19/01_angiotc-tep__cto-neumo_p103.jpg`)
trauma-05 | Así se ve · Pelvis cerrada y uretra lesionada | 4 fotos → 3 (antes de la faja, sábana, uretrografía). "Después de la faja" pasa a una diapositiva nueva; su narración se ajustó para leerse sola. | `trauma-05/02_pelvis-despues-de-faja__atls_p150.jpg`
trauma-05 | Más imágenes · La pelvis después de la faja (nueva) | Recibe la foto movida. | ídem
trauma-10 | Así se ve · La fractura de cadera en la radiografía (nueva, antes del pathway) | La clase no tenía imágenes → Rx de fractura de cuello femoral y lámina de osteosíntesis (tornillo dinámico en intertrocantérica; tornillos canulados en cuello). Galería, un paso por foto. | `trauma-10/01_rx_fractura_cuello_femur__commons.jpg` (copia de `09_neurologia/neuro-23/…`), `trauma-10/02_osteosintesis-intertrocanterea-y-cuello__cto-trauma_p26.jpg` (copia de `neuro-23/02_fractura-pertrocanterea_1__cto-trauma_p26.jpg`)
trauma-12 | Más imágenes · La condrocalcinosis en la radiografía (nueva) | Agregada Rx de rodilla con condrocalcinosis. | `trauma-12/04_condrocalcinosis-rx-rodilla__amir-reuma_p23.jpg` (copia de `08_reumatologia/reuma-03/…`)
trauma-13 | Así se ve · Tumores óseos en la radiografía | 5 fotos → 3 (osteosarcoma, osteocondroma, Ewing). "Por último, un sarcoma de Ewing" → "Y un sarcoma de Ewing". | `lessons/trauma-13.cjs`
trauma-13 | Más imágenes · Otros tumores óseos (nueva) | Reciben osteoma osteoide y tumor de células gigantes, con sus pasos. | `trauma-13/03_…`, `trauma-13/04_…`
trauma-14 | Así se ve · Cadera, columna y pie del niño | 4 fotos → 3 (Perthes, epifisiólisis, escoliosis). | `lessons/trauma-14.cjs`
trauma-14 | Más imágenes · Displasia y pie bot (nueva) | Agregada maniobra de Ortolani (dibujo Nelson) + yesos de Ponseti movidos. | `trauma-14/05_maniobra-de-ortolani__nelson_p5430.jpg` (copia de `15_pediatria/ped-22/01_ortolani__nelson_p5430.jpg`)
trauma-15 | Así se ve · Examen del hombro y del cuello | 4 fotos → 3 (arco doloroso, Jobe, RM). | `lessons/trauma-15.cjs`
trauma-15 | Más imágenes · El examen del cuello (nueva) | Recibe la prueba de Spurling. | `trauma-15/04_prueba-de-spurling__bailey-love_p461.jpg`

## No hecho

- **trauma-04, 06, 07**: siguen sin imágenes; no hay candidatas en el repo (ver `FALTANTES_trauma.md`).
- **trauma-10**: posición impúdica y luxación posterior de cadera, sin candidata.
- **trauma-12**: `reuma-03/02_tofos-en-manos__amir-reuma_p19.jpg` no se usó (la clase no enseña tofos); podagra sin candidata.
- **trauma-14**: `ped-22/04_barlow_foto__bates_p873.jpg` no se usó: la foto muestra una abducción (parece Ortolani), no Barlow.
- **neuro-23** (fuera de mi especialidad, no se tocó): `02_fractura-pertrocanterea_2__cto-trauma_p26.jpg` es una fractura distal de fémur, no pertrocantérea.
- **trauma-03**: petequias de embolia grasa: las de `hem-*` son púrpura en piernas, no sirven.
