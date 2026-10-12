# Auditoría de imágenes — Ginecología (gin-01 a gin-16)

Fecha: 2026-10-12. Estado **antes** de los cambios (arreglos en `CAMBIOS_gin.md`; lo que sigue faltando en `FALTANTES_gin.md`).

Método: volcado con script de `classes/lessons/gin-*.cjs` (títulos, kickers, tarjetas, nodos, filas y diapositivas de imagen con `src`, `label`, narración). `.mp4` = animación; `S*__propio.svg` = esquema propio. Se abrieron con Read todas las fotos de `classes/media/biblioteca/13_ginecologia/` y las `_alt` sin usar, cruzándolas con el pie de `indice.json`, y se buscaron candidatas en las demás carpetas (endocrino, derma, cirugía).

Leyenda: **foto** · **anim** · **NO**. "¿La necesita?": **sí** = imagen reconocible que el EUNACOM pregunta; **no** = criterios, dosis, algoritmos.

## Resumen

| clase | tema | entidades | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| gin-01 | Ciclo menstrual y amenorrea | 9 | 1 (esquema propio) | 1 | 2 | media |
| gin-02 | Síndrome de ovario poliquístico | 5 | 2 | 0 | 1 | baja |
| gin-03 | Sangrado uterino anormal (PALM-COEIN) | 6 | 1 (esquema propio) | 0 | 1 | media |
| gin-04 | Miomas uterinos | 6 | 4 (1 esquema; **1 mal rotulada**) | 0 | 1 | media |
| gin-05 | Endometriosis y adenomiosis | 6 | 2 | 0 | 1 | media |
| gin-06 | Incontinencia urinaria y prolapso | 5 | 1 (esquema propio) | 0 | 1 | media |
| gin-07 | Infertilidad | 5 | 2 | 0 | 1 | **alta** |
| gin-08 | Anticoncepción | 6 | 4 | 0 | 0 | baja |
| gin-09 | Vulvovaginitis y cervicitis | 5 | 5 | 0 | 1 | baja |
| gin-10 | Bartolino y liquen escleroso | 3 | 2 | 0 | 1 | baja |
| gin-11 | Enfermedad inflamatoria pélvica | 5 | 2 | 0 | 1 | media |
| gin-12 | Climaterio y terapia hormonal | 4 | 0 | 0 | 0 | baja |
| gin-13 | Cáncer cervicouterino y PAP | 7 | 2 | 1 | 2 | media |
| gin-14 | Cáncer de mama y BI-RADS | 8 | 6 (**1 poco legible**) | 0 | 1 | media |
| gin-15 | Cáncer de endometrio y masa anexial | 7 | 5 (**1 mal rotulada**) | 0 | 0 | media |
| gin-16 | Torsión anexial y quiste hemorrágico | 4 | 2 | 0 | 2 | **alta** |
| **Total** | | **91** | **41** | **3** | **18** | 2 alta · 9 media |

Fotos con problemas:
- **gin-04** `01_mioma-intramural-miomas-multiples` rotulada "Ecografía" y narrada como ecografía: es una **laparoscopía** (CTO Fig. 6.10, miomectomía laparoscópica de un mioma intramural). `02_leiomiomas-tc_2` ("Mioma uterino (ecografía)") es una eco muy poco legible.
- **gin-14** `01_microcalcificaciones-sospechosas-mamogra` (Así se ve) es el panel-esquema de la CTO Fig. 6.14 con líneas amarillas: las calcificaciones casi no se ven. La `_alt2` (AMIR, magnificación con microcalcificaciones agrupadas) estaba sin usar.
- **gin-15** `04_endometrio-engrosado-eco-histeroscopia` rotulada "Endometrio engrosado y histeroscopia": es **solo la ecografía** (CTO Fig. 7.3); la histeroscopía es la `_alt1` (sin usar). Narraciones genéricas ("Mira esta imagen…").
- **gin-09**, **gin-15**: narraciones genéricas en "Más imágenes".
- **gin-07** `_1` y `_2`: dos recortes de la misma figura de HSG normal (el segundo solo muestra la cavidad).

Candidatas ya en el repo: `gin-14/…_alt2` (microcalcificaciones), `gin-15/…_alt1` (histeroscopía), `gin-05/01_endometrioma-eco_alt1` (endometrioma con Doppler), `endo-21/01_prolactinoma-gigante-rm` (macroprolactinoma, gin-01). Sin usar y sin necesidad: `gin-04/…_alt1`, `_alt2` (piezas quirúrgicas), `gin-11/…_alt1` (HSG + cirugía de absceso), `gin-14/02_…_alt1`/`_alt2` (fibroadenoma y quiste en eco; el fibroadenoma ya se muestra), `gin-14/01_…_alt1`, `gin-15/03_…_alt1_*` (RM).

## Detalle por clase

### gin-01 · Amenorrea — media
Ciclo → esquema propio + anim. Rokitansky, Morris, Kallmann, himen imperforado, Asherman: no necesitan foto salvo **Turner** (fenotipo: talla baja, pterigion colli; sí, media, sin candidata) y el **macroprolactinoma** (RM; sí, candidata `endo-21/01_prolactinoma-gigante-rm`). Test de progesterona, insuficiencia ovárica: no.

### gin-02 · SOP — baja
Ovario poliquístico en eco (collar de perlas) y acantosis nigricans → fotos (coinciden). **Hirsutismo** → NO (sí, media), sin candidata. Rotterdam, 17-OH-progesterona, letrozol: no.

### gin-03 · SUA — media
PALM-COEIN → esquema propio. **Pólipo endometrial** (eco/histeroscopía) → NO (sí), sin candidata. Adenomiosis y mioma submucoso se ven en gin-04/05. Biopsia con Pipelle, tratamiento: no.

### gin-04 · Miomas — media
FIGO → esquema propio; mioma intramural → **laparoscopía rotulada como ecografía**; TC (coincide) y eco poco legible. **Ecografía de mioma clara** (nódulo hipoecogénico) → falta (media). Degeneración roja, análogos de GnRH: no.

### gin-05 · Endometriosis — media
Endometrioma en vidrio esmerilado y laparoscopía → fotos (coinciden). `_alt1` (endometrioma con Doppler, AMIR) sin usar. **Adenomiosis** en eco (útero globoso, miometrio heterogéneo) → NO (sí, media), sin candidata. Tratamiento: no.

### gin-06 · Incontinencia y prolapso — media
POP-Q → esquema propio. **Prolapso genital / cistocele** (foto clínica) → NO (sí, media), sin candidata. Test de Bonney, Kegel, TOT/TVT: no.

### gin-07 · Infertilidad — alta
HSG normal → foto ×2 (misma figura). **HSG con obstrucción tubárica / hidrosálpinx** (decide inseminación vs FIV) → NO, sí (alta), sin candidata. Espermiograma, AMH: no.

### gin-08 · Anticoncepción — baja
DIU de cobre y LNG, implante, retiro, DIU normoinserto en eco → fotos (coinciden). Criterios OMS, emergencia: no.

### gin-09 · Vulvovaginitis — baja
Células clave, tricomonas, Candida (microscopía); leucorrea candidiásica y cérvix en fresa (clínica) → todo coincide. Flujo gris de la vaginosis → NO (baja). Cervicitis purulenta → NO (baja).

### gin-10 · Patología vulvar — baja
Absceso de Bartolino y liquen escleroso (distribución en cerradura) → fotos (coinciden). Quiste de Bartolino indoloro → NO (baja).

### gin-11 · EIP — media
Absceso tuboovárico en eco y en laparoscopía → fotos (coinciden). **Fitz-Hugh-Curtis** (adherencias en cuerdas de violín, laparoscopía) → NO (sí, media), sin candidata. Hager, Monif, esquemas: no.

### gin-12 · Climaterio — baja
Sin imagen y no la necesita.

### gin-13 · Cáncer cervicouterino — media
VPH → anim; colposcopía de bajo y alto grado → fotos (coinciden). **Citología (PAP) con LIEAG** → NO (media); **cáncer cervicouterino invasor** (masa exofítica friable) → NO (media); test de Schiller (baja). Sin candidatas.

### gin-14 · Mama — media
Masa espiculada, piel de naranja, carcinoma inflamatorio, nódulo sospechoso en eco, fibroadenoma en eco → fotos (coinciden). Microcalcificaciones → **poco legible** (candidata `_alt2`). Papiloma intraductal / telorrea uniporo → NO (baja). BI-RADS, subtipos: no.

### gin-15 · Endometrio y ovario — media
Quiste simple y masa sospechosa (IOTA) → fotos (coinciden); TC de adenocarcinoma de ovario ×2; endometrio engrosado → foto **rotulada también como histeroscopía** (candidata `_alt1`). Marcadores, Lynch: no.

### gin-16 · Dolor pélvico agudo — alta
Torsión: ovario aumentado y Doppler → fotos (coinciden). **Signo del remolino** (Doppler del pedículo) → NO (media). **Quiste hemorrágico en "red de pesca" con líquido libre en Douglas** → NO (alta), sin candidata.
