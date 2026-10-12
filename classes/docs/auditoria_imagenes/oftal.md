# Auditoría de imágenes — Oftalmología (oftal-01 a oftal-18)

Fecha: 2026-10-12. Método: script de volcado (títulos, kickers, tarjetas, nodos, filas, diapositivas `image` con src y rótulo) sobre `classes/lessons/oftal-*.cjs`, cruce con `classes/media/biblioteca/indice.json` y revisión visual (Read / hojas de contacto) de **todas** las fotos de `12_oftalmologia/`, de las variantes `_alt` sin usar y de las candidatas oftalmológicas de otras carpetas (diab-21, endo-06, neuro-05/06/07/17/18, infecto-21/22/23, reuma-06/20, orl-10, resp-17).

Leyenda: **foto** · **anim** (.mp4) · **NO** = no se muestra. "¿La necesita?": **sí** = imagen reconocible que el EUNACOM pregunta; **no** = fármacos, plazos GES, criterios.

Estado descrito = **antes** de los cambios (ver `CAMBIOS_oftal.md`).

## Resumen

| clase | tema | entidades | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| oftal-01 | Ojo rojo: semiología y alarma | 8 | 2 (**1 ilegible**) | 0 | 3 (hiposfagma, uveítis anterior, endoftalmitis) | **alta** |
| oftal-02 | Conjuntivitis | 5 | 4 (1 duplicada de oftal-01) | 0 | 1 (gonocócica hiperaguda / neonatal) | **alta** |
| oftal-03 | Orzuelo, chalazión, blefaritis, dacriocistitis | 4 | 4 (**chalazión ilegible**) | 0 | 1 (chalazión) | **alta** |
| oftal-04 | Queratitis herpética y bacteriana | 4 | 2 | 0 | 0 (1 opcional) | baja |
| oftal-05 | Epiescleritis y escleritis | 3 | 2 | 0 | 0 (1 opcional) | baja |
| oftal-06 | Glaucoma agudo | 3 | 1 | 1 | 0 | baja |
| oftal-07 | Glaucoma crónico | 3 | 2 (**campimetría mal rotulada: es una OCT**) | 1 | 0 | media |
| oftal-08 | Catarata | 5 | 2 | 0 | 1 (catarata madura / subtipos) | media |
| oftal-09 | Vicios de refracción, ambliopía, estrabismo | 6 | 1 + esquema (**Hirschberg ambiguo**) | 3 | 0 | media |
| oftal-10 | Desprendimiento de retina | 4 | 2 | 1 | 0 (desgarro: `_alt` sin usar) | baja |
| oftal-11 | Oclusiones arterial y venosa | 3 | 2 | 0 | 0 | baja |
| oftal-12 | Retinopatía diabética | 5 | 1 (**rótulo genérico; muestra hemorragia vítrea, la narración describe la no proliferativa**) | 0 | 3 (RDNP, edema macular, neovasos) | **alta** |
| oftal-13 | Retinopatía hipertensiva | 4 | 1 | 0 | 1 (cruces AV / hilo de cobre) | media |
| oftal-14 | DMAE | 4 | 3 (Amsler duplicado; **DMAE húmeda sin foto**) | 0 | 1 (DMAE húmeda: `_alt` sin usar) | **alta** |
| oftal-15 | Trauma ocular, globo abierto, hipema | 5 | 2 | 0 | 1 (pupila en gota / Seidel) | **alta** |
| oftal-16 | Quemadura química | 3 | 1 (poco legible) | 0 | 1 (isquemia límbica) | media |
| oftal-17 | Celulitis preseptal y orbitaria | 4 | 2 | 0 | 0 (1 opcional) | baja |
| oftal-18 | DPAR, neuritis óptica, papiledema | 5 | 3 + esquema | 1 | 0 (1 opcional) | baja |

## Detalle por clase

### oftal-01 — Ojo rojo
- Enseña: inyección conjuntival, inyección ciliar, cinco signos de alarma (baja visual, dolor, pupila, córnea opaca, hipopión/hipema), glaucoma agudo, uveítis anterior, queratitis, endoftalmitis, hiposfagma.
- Inyección conjuntival: **foto** (CTO p33, correcta).
- Inyección ciliar: **foto ilegible** — `02_tabla-dif-ojo-rojo-inyeccion-ciliar__cto-oftalmo_p62.jpg` es una tabla dibujada de ocho ojos sin rótulos (se perdió el texto al recortar); no se distingue cuál es la inyección ciliar. Candidata en repo: `oftal-04/02_ulcera-corneal-con-hipopion` (inyección periquerática intensa + hipopión). → reemplazada.
- Hiposfagma: **NO**, sí la necesita (caso clásico de la clase y del banco). Sin imagen en el repo.
- Uveítis anterior (miosis, precipitados, hipopión): **NO**, sí. Sin imagen en el repo (reuma-20 trae uveítis *posterior* de Behçet, no sirve).
- Glaucoma agudo: no aquí, pero tiene foto en oftal-06. Endoftalmitis: **NO**, prioridad baja.

### oftal-02 — Conjuntivitis
- Bacteriana: **foto** (Kanski p147, tarso evertido con secreción/pseudomembrana; aceptable). Viral: **foto** (Kanski p155, folículos tarsales). Alérgica/vernal: **foto** solo en "Más imágenes" (CTO p35). Conjuntivitis aguda (Más imágenes) = **misma foto** que la inyección conjuntival de oftal-01, con narración de relleno ("Mira esta imagen…").
- Sin usar: `02_conjuntivitis-alergica-vernal-papilar-gi_alt1__amir-oftalmo_p49.jpg` (papilas en empedrado muy nítidas) → útil para la diapositiva "Así se ve" (alérgica no estaba entre las tres del libro).
- Gonocócica hiperaguda / oftalmía neonatal: **NO**, sí la necesita (pregunta real EUNACOM 2019). Sin imagen en el repo.

### oftal-03 — Párpado
- Orzuelo: **foto** (AMIR p57, correcta). Dacriocistitis: **foto** (AMIR p53, correcta). Blefaritis: **foto** en "Más imágenes" con narración de relleno.
- Chalazión: **foto ilegible** — `01_chalazion__kanski_p16.jpg` es un primer plano desenfocado del borde palpebral; no se ve ningún nódulo. Sin reemplazo en el repo → retirada; vacío alto.
- `_alt` sin usar: `03_dacriocistitis_alt1__cto-oftalmo_p30` (dacriocistitis con celulitis preseptal; mismo archivo que `oftal-17/_alt1`). No necesaria.

### oftal-04 — Queratitis
- Úlcera dendrítica con fluoresceína: **foto** (CTO p40). Úlcera con hipopión: **foto** (CTO p39). `_alt1` AMIR p46 (dendritas múltiples) sin usar, redundante.
- Queratitis actínica: no necesita imagen. Infiltrado por Pseudomonas en usuario de lente de contacto: cubierto en parte por la foto del hipopión (opcional, baja).

### oftal-05 — Epiescleritis / escleritis
- Ambas con **foto** correcta. Escleromalacia perforante: **NO**, opcional (baja).

### oftal-06 — Glaucoma agudo
- **anim** (cierre angular 3D) + **foto** (AMIR p36: córnea edematosa, pupila media). Completo.

### oftal-07 — Glaucoma crónico
- Papila glaucomatosa: **foto** (AMIR p34, correcta). **anim** de excavación.
- "Campimetría": **mal rotulada** — `02_campimetria-papila-en-gcs__cto-oftalmo_p52.jpg` es un informe de OCT de capa de fibras (tablas y gráficos), no una campimetría. El `_alt1_2` (AMIR p35) sí es una campimetría con pérdida progresiva → reemplazo. `_alt1_1` (excavación papilar) sin usar, redundante.

### oftal-08 — Catarata
- Catarata cortical: **foto** (AMIR p40 `_1`, retroiluminación con radios corticales). Leucocoria: **foto** (AMIR p55).
- `01_catarata_2__amir-oftalmo_p40.jpg` (sin usar): opacidad blanquecina que llega al limbo con hiperemia; **parece opacidad corneal**, no se puede asegurar que sea catarata → no se usa.
- Subtipos nuclear / subcapsular posterior, catarata madura: **NO**, media.

### oftal-09 — Refracción, ambliopía, estrabismo
- **anim** (emétrope, miopía, hipermetropía) + esquema SVG.
- Hirschberg: la foto usada (CTO p80, pie "De visu") muestra a un niño con reflejos prácticamente centrados y puente nasal ancho (parece **pseudoestrabismo**): no ilustra "reflejo descentrado". El `_alt1` (CTO Fig. 12.2, estrabismo acomodativo) muestra la desviación con claridad → reemplazo.
- Ambliopía (parche), agujero estenopeico: no necesitan foto.

### oftal-10 — Desprendimiento de retina
- **anim** (secuencia de síntomas), fondo de ojo (CTO p65) y ecografía (CTO p66) correctos.
- `_alt1` AMIR p13 (desgarro en herradura con retina levantada) sin usar; ilustra el mecanismo regmatógeno que la clase enseña → agregado.
- Traccional diabético: opcional (baja).

### oftal-11 — Oclusiones vasculares
- Mancha rojo cereza (CTO p70) y OVCR en llama (AMIR p15) correctos. `_alt1` CTO p71 (OVCR) redundante. Completo.

### oftal-12 — Retinopatía diabética
- Una sola foto, rótulo "Retinopatía": según el pie (CTO Fig. 11.5) y la imagen, es **hemorragia vítrea/prerretiniana** (forma proliferativa), pero la narración habla de microaneurismas y exudados → rótulo y narración no coinciden.
- Candidatas en repo: `oftal-12/_alt1` CTO p108 (exudados duros alrededor de la mácula: edema macular, sin usar) y `diab-21/02_hemorragias-retinianas-rd__cto-oftalmo_p67.jpg` (hemorragias y exudados duros: no proliferativa). → las tres juntas en "Así se ve".
- Neovasos en papila: **NO**, media.

### oftal-13 — Retinopatía hipertensiva
- Una **foto** (CTO p69, grado IV con edema de papila, exudados y hemorragias). Correcta.
- Hilo de cobre/plata y cruces AV (grados I–II, se preguntan): **NO**, media.

### oftal-14 — DMAE
- DMAE seca con drusas: **foto** (CTO p72). Amsler con metamorfopsia: **foto** (Kanski). "Más imágenes": rejilla de Amsler en blanco (archivo llamado `02_dmae-humeda…` pero la imagen es la rejilla; el rótulo "Rejilla de Amsler" es correcto, el nombre del archivo engaña).
- **DMAE húmeda: NO** pese a ser la mitad de la clase. `02_dmae-humeda_alt1__cto-oftalmo_p107.jpg` (membrana neovascular con gran hemorragia subretiniana) sin usar → agregada a "Así se ve".
- `01_dmae-seca-drusas_alt1__amir-oftalmo_p19.jpg`: el pie dice "DMAE seca", pero la imagen muestra hemorragias y exudados extensos → **no usar como DMAE seca**. `_alt2_2` es un corte de OCT.

### oftal-15 — Trauma ocular
- Hipema: **foto** (Kanski p882, hipema total). Fractura de piso orbitario en TC: **foto** (la clase casi no la enseña, pero no estorba).
- Signos de globo abierto (pupila en gota, Seidel positivo, prolapso uveal): **NO**, sí (alta). Sin imagen en el repo.

### oftal-16 — Quemadura química
- Una **foto** (Kanski p895): lámpara de hendidura con fluoresceína y gran defecto epitelial; poco legible para un alumno y **no muestra la isquemia límbica** que la narración menciona (la narración no afirma que se vea, se mantiene).
- Isquemia límbica / "ojo blanco porcelana": **NO**, media.

### oftal-17 — Celulitis periocular
- Preseptal (AMIR p43) y orbitaria en TC (Kanski p100) correctas. `_alt1` = dacriocistitis con celulitis preseptal (redundante).
- Candidatas en orl-10 (Bailey & Love: edema palpebral por etmoiditis; TAC con absceso subperióstico): la TAC es poco demostrativa a tamaño de diapositiva → no se usa. Trombosis del seno cavernoso: opcional (baja).

### oftal-18 — Pupila y nervio óptico
- **anim** linterna oscilante, foto Kanski de DPAR, papiledema (CTO p88), pupila de Adie (AMIR p23), esquema Marcus Gunn. Completo.
- Neuritis óptica (RM con realce del nervio óptico): opcional (baja).

## Candidatas revisadas y descartadas
- `oftal-08/01_catarata_2` (dudosa: parece opacidad corneal).
- `oftal-14/01_dmae-seca-drusas_alt1` (pie y foto no coinciden).
- `reuma-20/01_aftas-orales-behcet` panel B (uveítis posterior; la clase enseña la anterior).
- `infecto-21` coriorretinitis por toxoplasma, `infecto-23` zóster oftálmico, `endo-06` exoftalmos: temas no enseñados en estas clases.
