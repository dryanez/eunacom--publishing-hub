# Cambios de imágenes — Neurología

Aplicados según `neuro.md`. Rutas relativas a `classes/media/`. Todas las imágenes se abrieron y revisaron antes de usarlas. `check_lesson` da ✓ en todas las clases tocadas.

| clase | slide (kicker + título) | qué cambió (antes → después) | archivo(s) |
|---|---|---|---|
| neuro-01 | Así se ve · Accidente cerebrovascular isquémico | 3.ª foto «AngioTC» era un gráfico de densidad de la sangre (UH vs días) → angio-TC real con la ACM cortada en la flecha; rótulo «AngioTC: oclusión de la arteria cerebral media (flecha)» y narración que señala el corte | quitado `biblioteca/09_neurologia/neuro-01/03_angio-tc-oclusion-acm__cto-radiologia_p65.jpg`; agregado `…/neuro-01/01_signos-precoces-tc-acm-hiperdensa_2__cto-radiologia_p62.jpg` |
| neuro-01 | Más imágenes · Más imágenes del tema | Se quita la angio-TC (pasó a «Así se ve»); queda solo «Territorios vasculares» | `…/neuro-01/01_signos-precoces-tc-acm-hiperdensa_2__cto-radiologia_p62.jpg` |
| neuro-03 | Así se ve · Hemorragia intraparenquimatosa | Solo hematoma putaminal → se agrega el repuesto sin usar: hematoma talámico (A) y sangre en los ventrículos (B), con narración del drenaje ventricular | `…/neuro-03/01_hematoma-intraparenquimatoso-tc_alt1__cto-radiologia_p67.jpg` |
| neuro-04 | Más imágenes · Más imágenes del tema | «HSA de la convexidad (TC)»: TC postraumática con aire, sin la flecha que nombraba la narración → quitada (el `_2` es del mismo caso) | `…/neuro-04/01_hsa-de-la-convexidad-tc_1__cto-neuro_p176.jpg` (ya no se usa) |
| neuro-05 | Así se ve · Trombosis de senos venosos | TC oscura donde el delta casi no se ve → panel de RM (repuesto `_alt1`) con el delta vacío en D y el seno ocupado en F, más papiledema; 2 pasos de narración | quitado `…/neuro-05/01_trombosis-de-seno-signo-delta__cto-neuro_p41.jpg`; agregados `…/neuro-05/01_trombosis-de-seno-signo-delta_alt1__cto-radiologia_p64.jpg`, `…/neuro-05/02_papiledema__cto-oftalmo_p88.jpg` (copia de oftal-18) |
| neuro-06 | Así se ve · El aura de la migraña → «El aura y una bandera roja» | Solo el esquema del aura → se agrega papiledema como bandera roja (signo neurológico → TAC) | `…/neuro-06/01_papiledema__cto-oftalmo_p88.jpg` (copia de oftal-18) |
| neuro-08 | Así se ve · Ausencias en el EEG → «Ausencias en el EEG y toxicidad cutánea» | Solo EEG → se agrega Stevens-Johnson / necrólisis en mucosas (carbamazepina, lamotrigina) | `…/neuro-08/02_stevens-johnson-mucosas__fitzpatrick_p390.jpg` (copia de derma-09) |
| neuro-14 | Así se ve · Demencia de Alzheimer | Reloj + PET → se agrega TC con hematoma subdural en semiluna (causa tratable que la neuroimagen descarta) | `…/neuro-14/02_hematoma-subdural-tc__cto-neuro_p174.jpg` (copia de `cirugia-12/…_alt2`) |
| neuro-17 | Así se ve · Miastenia gravis | 4 fotos (más del máximo de 3) → se saca el panel del timoma; quedan las 3 del test del hielo | `…/neuro-17/01_timoma-tc-mediastino__cto-radiologia_p22.jpg` (movida) |
| neuro-17 | Más imágenes · Más imágenes del tema | Rótulo cortado «Ptosis miasténica antes y después de la » → «Ptosis miasténica: antes (a) y después (b) de revertirla» con narración propia; se agrega el panel mediastínico rotulado «Masas del mediastino: el timoma es el panel B» | `…/neuro-17/01_ptosis_miastenia_reversion__commons.jpg`, `…/neuro-17/01_timoma-tc-mediastino__cto-radiologia_p22.jpg` |
| neuro-18 | Así se ve · Esclerosis múltiple | Placas + neuritis óptica → se agrega la prueba de la linterna oscilante (defecto pupilar aferente, paneles B y D) | `…/neuro-18/03_linterna-oscilante-dpar__kanski_p820.jpg` (copia de oftal-18) |
| neuro-19 | Así se ve · Parálisis facial | Bell sutil (con franjas) → repuesto `_alt1` con caída evidente de la comisura; se agrega Ramsay Hunt (vesículas y costras en la concha); 3 pasos | quitado `…/neuro-19/01_paralisis-facial-periferica-bell__amir-orl_p29.jpg`; agregados `…/neuro-19/01_paralisis-facial-periferica-bell_alt1__cto-orl_p45.jpg`, `…/neuro-19/03_vesiculas-en-concha-ramsay-hunt__bailey-love_p736.jpg` (copia de orl-08) |

## No hecho

- **neuro-03, gráfico de densidad del hematoma** (`neuro-01/03_angio-tc-oclusion-acm…`): la clase solo dice que la sangre aguda es blanca; no enseña la evolución de la densidad en días, así que no se pudo narrar sin agregar hechos. Hematoma cerebeloso / lobar: no están en el repo.
- **neuro-04**: el repuesto `01_hsa-de-la-convexidad-tc_2` es del mismo caso postraumático; no se usó. La TC de HSA tenue no tiene reemplazo. Parálisis del III par, xantocromía, hidrocefalia y Terson: no están en el repo.
- **neuro-05**: proptosis de Graves (`endo-06`) no sirve para el seno cavernoso; angio-RM venosa no está.
- **neuro-06**: el halo ecográfico de la arteritis temporal (opcional) no se agregó: la clase no habla de ecografía.
- **neuro-14**: no se rotuló el subdural como «crónico» porque la imagen no permite asegurarlo; la RM hipocampal y la hidrocefalia normotensiva no están en el repo.
- **neuro-18**: el esquema `S1_marcus-gunn__propio.svg` no se agregó (la foto de Kanski ya cubre el DPAR y el slide quedó en 3). OIN y RM de NMO: no están. Repuesto `01_placas-em-rm_alt1` sin hueco asociado.
- **neuro-19**: túnel carpiano, garra cubital y pie caído: no hay nada en el repo. `orl-08/01_asimetria-facial-al-sonreir` no se agregó (el slide ya tiene 3).
- **neuro-20**: el schwannoma (`orl-06`, opcional) no se agregó; el duplicado de Epley en orl-07 no requiere acción.
- **neuro-23**: el repuesto mal nombrado `02_fractura-pertrocanterea_2` no se usa, se dejó. Pierna acortada y rotada: no está en el repo.
- **neuro-02, 07, 10, 11, 12, 13, 15**: huecos sin candidato en el repo.
