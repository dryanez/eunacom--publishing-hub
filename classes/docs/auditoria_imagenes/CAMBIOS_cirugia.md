# Cambios de imágenes — Cirugía (aplicación de la auditoría `cirugia.md`)

Fecha: 2026-10-12. Toda foto usada se abrió y verificó visualmente antes de rotularla. `check_lesson.cjs` da ✓ en cirugia-01 a cirugia-18. Las clases de cirugía no tienen audio renderizado (`classes/dist/audio`), así que se ajustó la narración de las diapositivas tocadas.

clase | slide (kicker · título) | antes → después | archivo(s)
---|---|---|---
cirugia-01 | Así se ve · Apendicitis | Foto rotulada "Imágenes" y narrada como "ecografía y pieza operatoria" → rótulo "TAC: apéndice engrosado" con narración del TAC (grasa inflamada, score intermedio). | `10_cirugia/cirugia-01/01_apendicitis-eco-pieza-rx__cto-radiologia_p41.jpg`
cirugia-01 | Así se ve · Apendicitis | Agregada "Pieza operatoria" (`_alt1` sin usar) con su paso narrado. | `cirugia-01/01_apendicitis-eco-pieza-rx_alt1__cto-digestivo_p157.jpg`
cirugia-01 | Más imágenes · El fecalito en la radiografía (nueva) | Agregada Rx simple con fecalito en FID (`_alt2` sin usar). | `cirugia-01/01_apendicitis-eco-pieza-rx_alt2__cto-digestivo_p158.jpg`
cirugia-02 | Así se ve · Colecistitis en la ecografía | Rótulo "Colecistitis" → "Cálculos con sombra acústica"; agregada "Colecistitis: pared engrosada" (`_alt1` sin usar). Pasa a galería con un paso por foto. | `cirugia-02/01_colelitiasis-colecistitis-eco__cto-radiologia_p44.jpg`, `cirugia-02/01_colelitiasis-colecistitis-eco_alt1__cto-radiologia_p44.jpg`
cirugia-04 | Más imágenes · Más imágenes del tema | Narración genérica de "Obstrucción de colon" → marco periférico dilatado y cáncer colorrectal como causa más frecuente. Foto sin cambios. | `lessons/cirugia-04.cjs`
cirugia-06 | Así se ve · Hernias de la pared abdominal | Dibujo de asa sana / asa isquémica rotulado "Hernia incarcerada" y narrado como "hernia umbilical incarcerada" → rótulo "Asa sana y asa estrangulada", narración de la estrangulación (cirugía urgente sin reducir). | `cirugia-06/02_hernia-umbilical-incarcerada__cto-cirugia_p56.jpg`
cirugia-06 | Más imágenes · Más imágenes del tema | Narración genérica → pérdida de domicilio y neumoperitoneo progresivo. | `lessons/cirugia-06.cjs`
cirugia-07 | Así se ve · Hemorroides → Fisura y hemorroides | Agregada foto de fisura anal (copia de gastro-12). Prolapso rotulado "grado cuatro" (según el pie) y narrado. Pasa a galería. | `cirugia-07/02_fisura_anal_foto__commons.jpg` (copia de `01_gastroenterologia/gastro-12/02_fisura_anal_foto__commons.jpg`)
cirugia-08 | Así se ve · Patología de piel y partes blandas | Tenía 4 fotos (máximo 3) → el quiste epidermoide pasa a "Más imágenes". | `cirugia-08/01_quiste_epidermoide__fitzpatrick_p1102.jpg`
cirugia-08 | Más imágenes · Más imágenes del tema | Ahora galería: quiste epidermoide + hidrosadenitis, narraciones con los hechos de la clase (poro central; axilas, ingles, periné). | `lessons/cirugia-08.cjs`
cirugia-09 | Así se ve · La evaluación primaria | Solo esquema ABCDE → agregados ojos de mapache (sonda por la boca) y uretrografía con extravasación (no Foley a ciegas). Galería, un paso por imagen. | `cirugia-09/01_ojos_de_mapache__commons.jpg` (copia de `cirugia-12/…`), `cirugia-09/02_uretrografia-lesion-uretral__bailey-love_p227.jpg` (copia de `18_traumatologia/trauma-05/04_…`)
cirugia-11 | Más imágenes · Más imágenes del tema | Narración genérica de rotura esplénica → contorno perdido, sangre alrededor, TAC gradúa en el estable. | `lessons/cirugia-11.cjs`
cirugia-12 | Más imágenes · El subdural del adulto mayor (nueva) | Agregado TAC de hematoma subdural crónico (`_alt2` sin usar). | `cirugia-12/01_hematoma-epidural-vs-subdural-tc_alt2__cto-neuro_p174.jpg`
cirugia-13 | Más imágenes · Más imágenes del tema | Narraciones rotas ("dosº y tresº grado", "foto clínica de profundidad m") y rótulos con símbolo/truncados → "Quemaduras de segundo y tercer grado", "Quemadura de profundidad mixta", narraciones nuevas. | `lessons/cirugia-13.cjs`
cirugia-17 | Más imágenes · Más imágenes del tema | Narraciones genéricas de fascitis necrotizante y etapas de evisceración → desbridamiento de tejido no viable; progresión de dehiscencia a evisceración. | `lessons/cirugia-17.cjs`

## No hecho

- **cirugia-01**: ecografía de apendicitis y TAC de plastrón/absceso: sin candidata en el repo (`gastro-19/01_apendicitis-eco__cto-radiologia_p41.jpg` es el mismo recorte de TAC y también está mal nombrado en gastro-19; no se tocó por ser otra especialidad).
- **cirugia-03**: TAC de diverticulitis poco legible (300 px); no hay reemplazo (`gastro-19/03_…` es idéntica). Falta el panel B (Hinchey II con drenaje) que menciona el pie de CTO Digestivo p142.
- **cirugia-05**: neumoperitoneo poco evidente; `_alt1` (signo de Rigler) no se usó porque la clase no enseña Rigler.
- **cirugia-06**: el archivo `02_hernia-umbilical-incarcerada__cto-cirugia_p56.jpg` conserva su nombre (engañoso) para no romper referencias; la foto real de hernia umbilical (Fig. 8.2) habría que re-extraerla de CTO Cirugía p56.
- **cirugia-04**: "Vólvulo de ciego" mantiene la narración genérica (la clase no enseña sus hallazgos).
- **cirugia-16**: sin candidatas (atelectasia, herida infectada, TVP). `resp-19/01_angiotc-tep__cto-neumo_p103.jpg` no se usó: la clase no enseña el angio-TAC.
- **cirugia-17**: `03_evisceracion_expuesta__usuario.jpg` y `02_evisceracion_etapas__usuario.jpg` siguen con "licencia por verificar"; el hematoma de herida mantiene narración genérica (la clase no lo enseña). `02_hematoma-de-herida_2` es duplicado, sin usar.
- **cirugia-18**: `infecto-06/02_opistotonos__cdc-phil.jpg` no se usó (la clase no enseña el tétanos clínico).
- **cirugia-12**: `_alt1` (subdural agudo) sin usar; redundante con el comparativo.
- **cirugia-14 / cirugia-15**: no necesitan imagen.
