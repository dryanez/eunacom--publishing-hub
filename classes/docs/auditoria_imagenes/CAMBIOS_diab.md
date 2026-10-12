# Cambios de imágenes — Diabetes (aplicación de la auditoría `diab.md`)

Fecha: 2026-10-12. Todas las fotos usadas se abrieron y verificaron visualmente antes de rotularlas. `check_lesson.cjs` da ✓ en cada clase tocada.

clase | slide (kicker + título) | qué cambió (antes → después) | archivo(s)
---|---|---|---
diab-21 | Así se ve · Retinopatía diabética | Fotos rotuladas al revés: orden y rótulos corregidos. `02_hemorragias-retinianas-rd` "Hemorragia" → primera, "No proliferativa: hemorragias y exudados duros"; `01_retinopatia-diabetica` "Retinopatía" → segunda, "Hemorragia prerretiniana y vítrea". Narración reescrita para describir lo que se ve (ya no promete neovasos en la primera foto). | `lessons/diab-21.cjs`
diab-21 | Así se ve · Retinopatía diabética | Agregada tercera foto (antes `_alt1` sin usar): "Edema macular: exudados duros junto a la mácula", con su paso narrado (anti VEGF). | `media/biblioteca/04_diabetes/diab-21/01_retinopatia-diabetica_alt1__cto-oftalmo_p108.jpg`
diab-22 | Así se ve · El pie diabético | Primera foto: amputación isquémica del hallux (narrada como úlcera neuropática) → `_2` "Úlcera neuropática en zona de apoyo" (CTO Fig. 5.6 B), que sí coincide con la narración; narración ajustada (rodete de callo bajo las cabezas metatarsianas). | `media/biblioteca/04_diabetes/diab-22/01_ulcera-necrosis-pie-diabetico_2__cto-endocrino_p114.jpg`
diab-22 | Más imágenes · Más imágenes del tema | `_2` "Úlcera de pie diabético" (quedaba duplicada) → `_1` "Amputación del primer dedo por necrosis isquémica", narración nueva sobre el componente isquémico. | `media/biblioteca/04_diabetes/diab-22/01_ulcera-necrosis-pie-diabetico_1__cto-endocrino_p114.jpg`
diab-24 | Más imágenes · La hipercolesterolemia familiar (diapositiva nueva, tras "Así se ve") | Agregado xantoma tendinoso del Aquiles (copiado desde diab-23, crédito original Fitzpatrick 7.ª ed., Fig. 135-4), con un paso narrado. | `media/biblioteca/04_diabetes/diab-24/02_xantomas-tendinosos__fitzpatrick_p1311.jpg` (copia de `diab-23/01_xantomas_tendinosos__fitzpatrick_p1311.jpg`)

## No hecho

- **diab-01** (acantosis nigricans / acrocordones, candidata `diab-02/01_acantosis-nigricans…`): pendiente (requiere narración). Clase con video ya renderizado y su única diapositiva de imagen es la animación "En movimiento"; poner una foto ahí sin narración no corresponde.
- **diab-08** (micosis genital por iSGLT2, candidatas `gin-09/01_leucorrea-candidiasica…`, `gin-09/03_microscopia_candida…`): pendiente (requiere narración). Clase renderizada; solo tiene diapositiva de animación.
- **diab-20** (tabla A1–A3 con `nefro-18/S1_kdigo__propio.svg`): no hecho; la auditoría lo marca como "no la necesita (podría reutilizar)". Kimmelstiel-Wilson: sin candidata en el repo.
- **diab-24** pancreatitis por TG (TC `gastro-18/01_pancreatitis-edematosa-tc_1…`): no hecho, marcada "opcional". Arco corneal: sin candidata.
- **diab-24**: el xantoma tendinoso quedó en una diapositiva "Más imágenes" (el título de "Así se ve" es "La hipertrigliceridemia severa"), por lo que el libro no lo toma.
- **diab-21**: neovasos, microaneurismas aislados y exudados algodonosos: sin candidata (la retinopatía hipertensiva de oftal-13 no se usó porque no es diabética).
- **diab-22**: monofilamento, úlcera isquémica típica, osteomielitis: sin candidata en el repo.
- **diab-03, diab-11/12, diab-19**: sin candidata en el repo (macrosomía, lipohipertrofia, TAC de edema cerebral).
