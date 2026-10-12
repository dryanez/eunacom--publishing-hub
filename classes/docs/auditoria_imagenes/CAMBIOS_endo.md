# Cambios de imágenes — Endocrinología (aplicación de la auditoría `endo.md`)

Fecha: 2026-10-12. Todas las fotos usadas se abrieron y verificaron visualmente antes de rotularlas. `check_lesson.cjs` da ✓ en cada clase tocada. En endo-01 a endo-07 (video ya renderizado) solo se tocó el arreglo `images`.

clase | slide (kicker + título) | qué cambió (antes → después) | archivo(s)
---|---|---|---
endo-07 | Así se ve · La gammagrafía tiroidea | Rótulo "Gammagrafía" → "Adenoma tóxico: nódulo caliente" (es lo que muestra). | `media/biblioteca/05_endocrinologia/endo-07/01_gammagrafia-adenoma-toxico-bmn__cto-endocrino_p57.jpg`
endo-07 | Así se ve · La gammagrafía tiroidea | Agregadas las dos gammagrafías que la narración ya describe: "Graves: captación difusa" (copia de endo-09, AMIR Fig. 14) y "Bocio multinodular: zonas calientes y frías" (`_alt1_1` sin usar). Solo `images`; narración intacta. | `endo-07/02_gammagrafia-graves-captacion-difusa__amir-endocrino_p44.jpg` (copia de `endo-09/03_gammagrafia-nodulo-frio__amir-endocrino_p44.jpg`), `endo-07/01_gammagrafia-adenoma-toxico-bmn_alt1_1__amir-endocrino_p44.jpg`
endo-09 | Más imágenes · Más imágenes del tema | "Gammagrafía nódulo frío" (en realidad Graves, y contradice "cintigrama solo con TSH suprimida") → "Gammagrafía: nódulo caliente" (AMIR Fig. 13). Solo `images`. | `endo-09/03_gammagrafia-nodulo-caliente__amir-endocrino_p44.jpg` (copia de `endo-07/01_gammagrafia-adenoma-toxico-bmn_alt2__amir-endocrino_p44.jpg`)
endo-15 | Así se ve · Feocromocitoma en la imagen | RM coronal rotulada "Gammagrafía MIBG" → rótulo "RM: masa suprarrenal derecha"; agregada la MIBG real (`_alt1` sin usar, AMIR Fig. 6) "Gammagrafía MIBG". Diapositiva pasa a galería con un paso narrado por foto (TC/RM primero, MIBG en casos seleccionados). | `endo-15/01_incidentaloma-suprarrenal-mibg__amir-endocrino_p59.jpg`, `endo-15/01_incidentaloma-suprarrenal-mibg_alt1__amir-endocrino_p58.jpg`
endo-18 | Más imágenes · La fractura por fragilidad (diapositiva nueva, tras "Así se ve") | Agregados aplastamientos vertebrales dorsales (AMIR Reuma p. 88) y fractura de cuello femoral (Commons), un paso narrado por foto. | `endo-18/01_aplastamientos-vertebrales__amir-reuma_p88.jpg` (copia de `reuma-24/…`), `endo-18/02_rx_fractura_cuello_femur__commons.jpg` (copia de `neuro-23/…`)
endo-20 | Así se ve · El macroadenoma hipofisario | Agregada RM de macroadenoma (prolactinoma gigante, AMIR p. 24) como primera foto, con su paso narrado. | `endo-20/04_macroadenoma-rm__amir-endocrino_p24.jpg` (copia de `endo-21/01_prolactinoma-gigante-rm__amir-endocrino_p24.jpg`)
endo-24 | Así se ve · Neoplasia endocrina múltiple | Narración "feocromocitoma, a menudo bilateral" → describe la TC real (masa suprarrenal derecha) y aclara que en el MEN puede ser bilateral. Foto sin cambios. | `lessons/endo-24.cjs`

## No hecho

- **endo-09** · Más imágenes: la narración (audio ya renderizado) aún dice "gammagrafía nódulo frío" sobre la nueva foto de nódulo caliente → pendiente (requiere narración). No afecta al libro (no es "Así se ve").
- **endo-07**: la diapositiva no tiene `layout: 'gallery'`, así que el reproductor del video solo muestra la primera foto; las otras dos llegan al libro. Pasarla a galería exige un paso narrado por foto → pendiente (requiere narración).
- **endo-05** (gammagrafía de Graves para contrastar con la "en blanco"; Doppler hipervascular `endo-06/03_eco-doppler-graves_2` para amiodarona tipo 1): pendiente (requiere narración). La única diapositiva de fotos narra la eco de Hashimoto; además falta la gammagrafía sin captación y el Doppler avascular.
- **endo-06** (lámina comparativa de gammagrafías en "El cintigrama: un patrón para cada causa"): pendiente (requiere narración / diapositiva nueva). Esa diapositiva no es de tipo imagen.
- **endo-13** (púrpura meningocócica `infecto-02/01_purpura-meningococica…`): no hecho. La clase no enseña Waterhouse-Friderichsen ni meningococo; narrarlo exigiría hechos que la clase no dice. ECG de hiperkalemia: marcado "opcional", no se agregó.
- **endo-11** (RM de incidentaloma de endo-15 como "imagen suprarrenal"): no hecho; la auditoría la propone solo si se retira de endo-15, y ahí se mantiene. No es un adenoma/carcinoma de Cushing.
- **endo-14** (ECG de hipokalemia `nefro-10/01_ecg-hipopotasemia-ondas-u…`): no hecho, marcado "opcional". TC de adenoma de Conn: sin candidata.
- **endo-16** (lesiones líticas `hem-19/…`, litiasis `uro-01/01_rx-simple-calculo-renal…`): no hecho, marcados "opcionales". Sestamibi y osteítis fibrosa quística: sin candidata. `endo-16/01_ecg-reusar__cto-cardio_p19.jpg` (hiperkalemia) sigue sin usarse, como recomienda la auditoría.
- **endo-17** (catarata `oftal-08/01_catarata_1…`), **endo-22** (RM de adenoma), **endo-12**, **endo-04**: opcionales; no se agregaron.
- **endo-18**: las fracturas quedaron en "Más imágenes" (el "Así se ve" es la densitometría), por lo que el libro no las toma. Colles, osteonecrosis mandibular, fractura atípica: sin candidata.
- **endo-09** eco poco legible, **endo-10**, **endo-19** (Looser-Milkman), **endo-20** craneofaringioma, **endo-24** neuromas mucosos: sin candidata en el repo.
- **endo-15**: la RM es un incidentaloma suprarrenal (AMIR Fig. 7); se rotuló "masa suprarrenal" sin afirmar que sea feocromocitoma.
- `endo-09/03_gammagrafia-nodulo-frio__amir-endocrino_p44.jpg` queda en disco sin usar en endo-09 (su copia se usa en endo-07); no se borró ningún archivo.
