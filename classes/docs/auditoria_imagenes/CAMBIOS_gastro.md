# Cambios aplicados — Gastroenterología (auditoría de imágenes, pasos 1 y 2)

Fecha: 2026-10-12. Todas las imágenes se abrieron y revisaron antes de usarlas. Las copiadas desde otras clases conservan su crédito original. Todas las clases editadas pasan `node classes/scripts/check_lesson.cjs <id>` (✓).

| clase | slide (kicker + título) | qué cambió (antes → después) | archivo(s) |
|---|---|---|---|
| gastro-01 | Más imágenes · Más imágenes del tema | Barrett `_2` (otro recorte de la misma figura 4.5) → Barrett `alt1_1` (lengüetas salmón, fig. 4.7); rótulo «Esófago de Barrett: lengüetas salmón» y narración que describe la foto | `gastro-01/01_esofago-de-barrett-endoscopia_alt1_1__cto-digestivo_p27.jpg` |
| gastro-02 | Más imágenes · Úlcera perforada: aire bajo el diafragma (nueva) | No había imagen de perforación → Rx de tórax con neumoperitoneo, copiada de gastro-04 | `gastro-02/03_neumoperitoneo-bajo-diafragma__cto-digestivo_p65.jpg` |
| gastro-03 | Así se ve · Acalasia: manometría y esofagograma → «Acalasia y esclerodermia» | Se agregó una 3.ª foto: esclerodactilia (copiada de reuma-12), con su narración | `gastro-03/03_esclerodactilia__amir-reuma_p99.jpg` |
| gastro-03 | Más imágenes · Chagas: el esófago dilatado (nueva) | Se agregó un megaesófago chagásico (copiado de infecto-15) | `gastro-03/04_megaesofago_chagas__commons.jpg` |
| gastro-10 | Así se ve · Colitis ulcerosa y Crohn | Foto mal rotulada: «Signo de la cuerda» (en realidad TC con íleon terminal engrosado, fig. 2.36) → rótulo «Crohn: íleon terminal engrosado (TC)»; la narración ya no dice «signo de la cuerda» | `gastro-10/03_crohn-ileal-tc-signo-de-la-cuerda_1__cto-radiologia_p40.jpg` |
| gastro-11 | Más imágenes · Más imágenes del tema → «Más pólipos y la obstrucción» | Narraciones genéricas («Mira esta imagen…») → narraciones que describen cada pólipo; rótulo del `_2` «Pólipo de colon (endoscopia)» → «Pólipo grande, lobulado»; se agregó Rx de obstrucción de colon (copiada de cirugia-04) | `gastro-11/03_obstruccion-de-colon__cto-radiologia_p26.jpg` |
| gastro-13 | Así se ve · Colédoco dilatado → «Colédoco dilatado: ecografía y colangiorresonancia» | 1 foto → 2: se agregó la colangio-RM con coledocolitiasis (`_alt1`, sin usar) | `gastro-13/01_coledoco-dilatado-eco-colangio-rm_alt1__cto-radiologia_p45.jpg` |
| gastro-19 | Más imágenes · Los puntos y signos del examen (nueva) | Se agregó el esquema de McBurney, Rovsing, Blumberg, psoas y obturador (copiado de cirugia-01) | `gastro-19/S1_puntos-apendicitis__propio.svg` |
| gastro-21 | Así se ve · Clasificación de Forrest | Una sola foto (Forrest Ia) con narración que hablaba de toda la escala → 3 fotos: sangrado activo, vaso visible (copiado de gastro-02) y úlcera de fondo de fibrina (`_alt2`), una narración por foto | `gastro-21/02_ulcera_duodenal_vaso_visible__harrison_p2430.jpg`, `gastro-21/01_forrest-ia-iib-iic_alt2__cto-digestivo_p63.jpg` |
| gastro-24 | Así se ve · Estenosis hipertrófica del píloro (nueva; la clase no tenía «Así se ve») | Se agregó la ecografía del píloro y el dibujo anatómico (copiados de gastro-25) | `gastro-24/01_eco-piloro-ehp__cto-pediatria_p65.jpg`, `gastro-24/01_eco-piloro-ehp_alt1__cto-pediatria_p65.jpg` |
| gastro-25 | Más imágenes · Más imágenes del tema | Se quitó «Malrotación y vólvulo» porque la clase no lo enseña y no tiene reemplazo; la narración genérica de «Hernia diafragmática congénita» → describe las asas con aire en el tórax | (se quitó) `gastro-25/06_malrotacion-y-volvulo__cto-radiologia_p149.jpg` |
| gastro-26 | Así se ve · Trauma abdominal → «Trauma abdominal y torácico» | Se agregó una 3.ª foto: Rx de neumotórax (copiada de cirugia-10) | `gastro-26/02_neumotorax-rx__cto-neumo_p116.jpg` |
| gastro-26 | Más imágenes · Sangre en la pleura y aire en el abdomen (nueva) | Se agregaron hemotórax (copiado de cirugia-10) y neumoperitoneo (copiado de cirugia-05) | `gastro-26/03_hemotorax-derrame-rx__cto-neumo_p111.jpg`, `gastro-26/04_neumoperitoneo__cto-digestivo_p65.jpg` |

## No hecho

- gastro-03: no se usaron las manometrías de acalasia tipo II y III (`_alt1`, `_alt2`) porque la clase no enseña los subtipos. No hay en el repo esofagograma de Zenker ni endoscopía de cáncer de esófago.
- gastro-04: no se usó `01_neumoperitoneo-bajo-diafragma_alt1__cto-radiologia_p27.jpg` (signo de Rigler). Al abrirla, es una Rx de abdomen con material de osteosíntesis y una flecha que no muestra el signo de forma legible. No hay en el repo neumomediastino, Mallory-Weiss ni lesión cáustica.
- gastro-05, 08, 14, 15, 16, 20: no hay candidatas en el repo para estas brechas.
- gastro-06: no se usó la hernia diafragmática congénita de gastro-25, porque la clase enseña la hernia traumática del adulto y es otra entidad.
- gastro-09: no se agregaron la glositis (hem-06) ni el frotis ferropénico (hem-03). La auditoría las marca como opcionales y de prioridad baja, y la clase no describe la glositis.
- gastro-10: no se usó la epiescleritis (oftal-05), porque la clase no enseña manifestaciones extraintestinales y no hay texto que narrar. No se usó el enema con «signo de la cuerda» (`_alt1`): al abrirlo, la flecha no señala con claridad un íleon terminal estrecho. Se optó por corregir el rótulo. La diapositiva «Así se ve» ya tenía 4 fotos antes de esta revisión y no se tocó ese número.
- gastro-12: la única candidata (cirugia-07) es la misma figura que ya se muestra. No hay absceso perianal ni hemorroide trombosado.
- gastro-15: «Así se ve» ya tenía 4 fotos (el libro toma 3). No se cambió porque no es un error de foto. No hay várices ni asterixis en el repo.
- gastro-17: las candidatas (colecistitis `_alt1`, cirugia-02) no cubren la brecha real, que es el cáncer de vesícula.
- gastro-18: la narración genérica del seudoquiste no se reescribió. La foto (panel de RM de control) no se interpreta con seguridad y la clase no describe el seudoquiste. «Así se ve» tiene 4 fotos desde antes.
- gastro-19: no se agregó el embarazo ectópico (ob-11, opcional) ni la diverticulitis de cirugia-03 (misma figura).
- gastro-21: no se usó el Forrest IIb (`_alt1`). Su pie dice «coágulo adherido», pero la foto muestra una úlcera con puntos negros, no un coágulo.
- gastro-22: el cuerpo extraño bronquial (ped-08) es opcional y es de otra entidad.
- gastro-23: la candidata (ped-11) es la misma foto que ya se muestra.
- gastro-25: no se agregaron las `_alt` sin usar (ECN, píloro, invaginación, Hirschsprung) porque no cubren ninguna brecha. No hay Rx de atresia esofágica.
- gastro-26: no se usaron las ventanas FAST (cirugia-11), porque la clase no enseña las ventanas. Tampoco el tórax volante (cirugia-10), porque la clase no lo describe.
