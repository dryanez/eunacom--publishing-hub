# Cambios aplicados — Infectología (auditoría de imágenes, pasos 1 y 2)

Fecha: 2026-10-12. Todas las imágenes se abrieron y revisaron antes de usarlas. Las copiadas desde otras clases conservan su crédito original. Todas las clases editadas pasan `node classes/scripts/check_lesson.cjs <id>` (✓).

| clase | slide (kicker + título) | qué cambió (antes → después) | archivo(s) |
|---|---|---|---|
| infecto-10 | Así se ve · Infecciones oportunistas en el VIH | Toxoplasmosis: la TC mostraba una sola lesión y la narración decía «varias lesiones con anillo» → RM con varias lesiones en anillo en los ganglios basales (`_alt1`, sin usar); narración ajustada | `infecto-10/02_toxoplasmosis-cerebral-tc_alt1__amir-infecto_p154.jpg` |
| infecto-10 | Más imágenes · Más imágenes del tema | «Candidiasis intertriginosa» (entidad que la clase no enseña) → «Criptococo con tinta china» (copiada de infecto-02), con narración | `infecto-10/07_tinta-china-criptococo__cto-infecto_p142.jpg` |
| infecto-11 | Así se ve · Tuberculosis fuera del pulmón | Se agregó una 3.ª foto: Rx con derrame pleural unilateral, para la pleuresía tuberculosa (copiada de resp-11) | `infecto-11/04_derrame-pleural__cto-neumo_p111.jpg` |
| infecto-13 | Así se ve · Úlceras genitales | Faltaba el chancro sifilítico de la comparación de las tres úlceras: condilomas → chancro sifilítico (copiado de infecto-12), con narración | `infecto-13/01_chancro-sifilitico__cdc-phil-6803.jpg` |
| infecto-13 | Más imágenes · Más imágenes del tema | Los condilomas acuminados pasan aquí con su narración (layout galería); el molusco queda igual | `infecto-13/02_condilomas-acuminados-verrugas-vph__cto-derma_p18.jpg` |
| infecto-17 | Así se ve · Hidatidosis | La clase dice «ecografía: examen de elección», pero no mostraba ninguna ecografía → se agregó la eco + TC con vesículas hijas (copiada de gastro-16) como primera foto; rótulo de la TC → «Quiste hidatídico (TC)» | `infecto-17/02_quiste-hidatidico-eco-tc__cto-radiologia_p43.jpg` |
| infecto-20 | Más imágenes · Más imágenes del tema | Celulitis `_2` (repetía la entidad y sus bordes son nítidos, al revés de lo que decía la narración, «bordes mal definidos») → impétigo en la cara de un niño (`_alt1`, sin usar) | `infecto-20/03_impetigo_alt1__amir-derma_p55.jpg` |
| infecto-22 | Así se ve · Exantemas de la infancia | Kawasaki: la foto muestra descamación de la punta de los dedos, no conjuntivitis → rótulo «Kawasaki: descamación de los dedos» y narración «en dedo de guante» | `infecto-22/04_kawasaki-conjuntivitis-descamacion__cto-pediatria_p103.jpg` |
| infecto-22 | Más imágenes · Más imágenes del tema | Narración genérica de la rubéola → describe el exantema; se agregó el eritema infeccioso con el signo de la bofetada (copiado de ped-10) | `infecto-22/05_eritema_infeccioso__nelson_p2548.jpg` |
| infecto-22 | Más imágenes · Escarlatina: líneas de Pastia (nueva) | Se agregaron las líneas de Pastia en el pliegue del codo (`_alt1`, sin usar) | `infecto-22/03_escarlatina-lengua-pastia_alt1__cto-pediatria_p102.jpg` |
| infecto-23 | Más imágenes · Cielo estrellado y Ramsay-Hunt (nueva) | Se agregaron la varicela con lesiones en distintas etapas (`_alt1_2`, sin usar) y las vesículas en la concha del Ramsay-Hunt (copiadas de orl-08) | `infecto-23/01_varicela_alt1_2__amir-infecto_p127.jpg`, `infecto-23/04_vesiculas-en-concha-ramsay-hunt__bailey-love_p736.jpg` |

## No hecho

- infecto-02: la púrpura `_alt1` no cubre ninguna brecha. No hay Gram de LCR en el repo.
- infecto-03, 12 y 21: sólo hay `_alt` de entidades que ya se muestran; no hay brecha que cubrir. infecto-21: no hay frotis de linfocitos atípicos ni TAC de calcificaciones.
- infecto-04: no se usó la fascitis postoperatoria (cirugia-17), porque la brecha es la gangrena de Fournier y es otra entidad. La angina de Ludwig `_alt1` no cubre ninguna brecha.
- infecto-08, 15, 18, 19, 24: no hay candidatas en el repo (cólera, botulismo, vinchuca, megacolon, sufusión conjuntival, carbunco inhalatorio, loxoscelismo, ectima, signo del halo).
- infecto-10: el Kaposi `_alt1` no cubre ninguna brecha. «Así se ve» ya tenía 4 fotos antes de esta revisión.
- infecto-11: no se usaron la escrófula `_alt1` ni la Rx de TBC pulmonar (resp-10), que no son brechas de esta clase. No hay Ziehl-Neelsen.
- infecto-13: la narración genérica del molusco se dejó igual, porque la clase no describe el molusco (sólo aparece como alternativa de una pregunta). No hay Gram uretral.
- infecto-16: no se agregaron las petequias de hem-12 (opcionales), porque la clase no enseña petequias ni la prueba del torniquete.
- infecto-17: no se usaron los quistes calcificados (`_alt1_1`, `_alt1_2`, `_alt2`) porque no cubren ninguna brecha. No hay foto de triquinosis.
- infecto-20: no se usó la pústula de derma-01. Al abrirla, es una pustulosis palmar y no una foliculitis centrada en el vello, así que el rótulo sería falso.
- infecto-22: no se usó la descamación de Kawasaki `_alt1` / ped-10 (plantas que descaman), porque repite el mismo criterio. No hay fotos de los otros criterios de Kawasaki (labios, lengua). «Así se ve» ya tenía 4 fotos antes de esta revisión. Los opcionales ped-10 (exantema súbito, mano-pie-boca) no se agregaron porque la clase no los enseña.
- infecto-23: no se usó la varicela `_alt1_1`. Al abrirla, son lesiones en diana en la palma, no una varicela típica. Las `_alt2` y el zóster `_alt1` no se usaron porque no cubren brechas. No hay Rx de neumonitis varicelosa.
