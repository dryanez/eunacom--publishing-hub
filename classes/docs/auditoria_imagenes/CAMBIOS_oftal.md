# Cambios de imágenes — Oftalmología (aplicación de `oftal.md`)

Fecha: 2026-10-12. Cada foto usada se abrió y verificó antes de rotularla. `node classes/scripts/check_lesson.cjs` da ✓ en todas las clases tocadas (los avisos restantes de oftal-14 son previos: "AREDS-2" en tarjetas). Los guiones hablados exportados (`classes/narration/oftal-*.json`) quedan desactualizados para las clases tocadas: hay que volver a exportar.

clase | slide (kicker · título) | antes → después | archivo(s)
---|---|---|---
oftal-01 | Así se ve · El ojo rojo | "Inyección ciliar" = tabla dibujada de ocho ojos sin rótulos (ilegible) → foto real "Inyección ciliar con hipopión"; narración del paso dos ampliada (hipopión = signo de alarma, se deriva). | `media/biblioteca/12_oftalmologia/oftal-01/03_inyeccion-ciliar-con-hipopion__cto-oftalmo_p39.jpg` (copia de `oftal-04/02_ulcera-corneal-con-hipopion…`)
oftal-02 | Así se ve · Conjuntivitis | Agregada tercera foto "Alérgica: papilas en empedrado" (`_alt1` sin usar) con su paso narrado. | `oftal-02/02_conjuntivitis-alergica-vernal-papilar-gi_alt1__amir-oftalmo_p49.jpg`
oftal-02 | Más imágenes · Más imágenes del tema | Narración de relleno de "Conjuntivitis aguda" ("Mira esta imagen…") → "ojo rojo con secreción, sin dolor profundo ni baja de visión". | `lessons/oftal-02.cjs`
oftal-03 | Así se ve · Lesiones del párpado | Retirada la foto "Chalazión" (Kanski p16, primer plano desenfocado sin nódulo visible); blefaritis movida aquí desde "Más imágenes"; narración reescrita (orzuelo vs chalazión en palabras, dacriocistitis, blefaritis con escamas). | `lessons/oftal-03.cjs`
oftal-03 | Más imágenes · Más imágenes del tema | Diapositiva eliminada (su única foto pasó a "Así se ve"). | `lessons/oftal-03.cjs`
oftal-07 | Así se ve · Glaucoma crónico | "Campimetría" que en realidad era un informe de OCT → campimetría real con pérdida progresiva del campo (`_alt1_2` sin usar). | `oftal-07/01_papila-glaucomatosa_alt1_2__amir-oftalmo_p35.jpg`
oftal-09 | Así se ve · Refracción y estrabismo | "Hirschberg" con reflejos casi centrados (parece pseudoestrabismo) → `_alt1` "Estrabismo: reflejo descentrado (Hirschberg)" (CTO Fig. 12.2). | `oftal-09/01_estrabismo-hirschberg_alt1__cto-oftalmo_p80.jpg`
oftal-10 | Así se ve · Desprendimiento de retina | Agregada tercera foto "Desgarro en herradura con retina levantada" (`_alt1` sin usar) con paso narrado sobre el mecanismo regmatógeno. | `oftal-10/01_dr-regmatogeno-fondo_alt1__amir-oftalmo_p13.jpg`
oftal-12 | Así se ve · Retinopatía diabética | Una foto rotulada "Retinopatía" (muestra hemorragia vítrea; narración hablaba de microaneurismas) → galería de tres: "No proliferativa: hemorragias y exudados" (copiada de diab-21), "Edema macular: exudados junto a la mácula" (`_alt1` sin usar), "Proliferativa: hemorragia vítrea" (la original, rerrotulada); tres pasos narrados. | `oftal-12/02_rd-no-proliferativa-hemorragias-exudados__cto-oftalmo_p67.jpg` (copia de `diab-21/02_hemorragias-retinianas-rd…`), `oftal-12/01_retinopatia-diabetica_alt1__cto-oftalmo_p108.jpg`
oftal-14 | Así se ve · Degeneración macular | Agregada "DMAE húmeda: hemorragia subretiniana" (`_alt1` sin usar) entre drusas y Amsler, con paso narrado. | `oftal-14/02_dmae-humeda_alt1__cto-oftalmo_p107.jpg`

## No hecho

- **oftal-08**: `01_catarata_2` (sin usar) no se agregó: la opacidad llega al limbo y parece corneal; no se puede rotular con seguridad como catarata.
- **oftal-14**: la rejilla de Amsler en blanco de "Más imágenes" se dejó (rótulo correcto); su archivo se llama `02_dmae-humeda__cto-oftalmo_p73.jpg`, nombre engañoso que no se renombró para no romper referencias de otros procesos.
- **oftal-16**: la foto de la quemadura química (defecto epitelial con fluoresceína) es poco legible pero no es errónea; se mantiene hasta tener una de isquemia límbica.
- **oftal-17**: no se agregó la TAC de absceso subperióstico de orl-10 (poco demostrativa a tamaño de diapositiva).
- Vacíos sin imagen en el repo: ver `FALTANTES_oftal.md`.
