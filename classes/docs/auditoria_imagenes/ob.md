# Auditoría de imágenes — Obstetricia (ob-01 a ob-20)

Fecha: 2026-10-12. Estado **antes** de los cambios (arreglos en `CAMBIOS_ob.md`; lo que sigue faltando en `FALTANTES_ob.md`).

Método: volcado con script de `classes/lessons/ob-*.cjs` (títulos, kickers, tarjetas, nodos, filas y diapositivas de imagen con `src`, `label` y narración). `.mp4` y los `A*_…__animacion.svg` de ob-17 = animación; `S*__propio.svg` y `ob-03/rbne_reactivo.svg` = esquema propio. Se abrieron con Read todas las fotos de `classes/media/biblioteca/14_obstetricia/` y todas las `_alt` sin usar; se cruzaron con el pie de figura de `indice.json`. Se buscaron candidatas en el resto de la biblioteca (no apareció ninguna útil fuera de la carpeta de obstetricia).

Leyenda: **foto** · **anim** · **NO**. "¿La necesita?": **sí** = imagen reconocible que el EUNACOM pregunta (monitoreo, eco, Doppler); **no** = dosis, cortes, calendarios.

## Resumen

| clase | tema | entidades | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| ob-01 | Control prenatal | 6 | 0 | 0 | 0 | baja |
| ob-02 | Ecografías 11-14 y 20-24 semanas | 6 | 3 | 0 | 2 | media |
| ob-03 | RBNE y perfil biofísico | 6 | 2 (1 esquema) | 1 | 1 | media |
| ob-04 | PEG y restricción de crecimiento | 7 | 4 (1 esquema; 2 normales casi iguales) | 1 | 2 | **alta** |
| ob-05 | SHE: HTA crónica, gestacional, preeclampsia | 5 | 0 | 1 | 0 | baja |
| ob-06 | Preeclampsia severa, eclampsia, HELLP | 5 | 0 | 0 | 0 | baja |
| ob-07 | Diabetes gestacional | 5 | 0 | 0 | 0 | baja |
| ob-08 | Colestasia intrahepática | 4 | 0 | 0 | 0 | baja |
| ob-09 | ITU en el embarazo | 4 | 0 | 0 | 0 | baja |
| ob-10 | Aborto | 7 | 1 (**no es ecografía**) | 0 | 2 | **alta** |
| ob-11 | Embarazo ectópico | 5 | 2 (1 algoritmo) | 0 | 1 | baja |
| ob-12 | Enfermedad trofoblástica (mola) | 4 | 2 (**1 narrada como otra cosa**) | 0 | 0 | media |
| ob-13 | Metrorragia de la segunda mitad | 6 | 3 (1 esquema) | 2 | 3 | **alta** |
| ob-14 | Rotura prematura de membranas | 4 | 1 | 0 | 0 | baja |
| ob-15 | Parto prematuro | 4 | 1 | 0 | 0 | baja |
| ob-16 | Trabajo de parto normal | 6 | 3 (2 esquemas; **1 mal rotulada**) | 1 | 1 | media |
| ob-17 | Distocias y monitoreo intraparto | 8 | 4 (**1 mal rotulada**) | 3 | 2 | **alta** |
| ob-18 | Hemorragia postparto | 6 | 2 (esquemas) | 1 | 1 | media |
| ob-19 | Infección puerperal y mastitis | 5 | 2 | 0 | 0 | baja |
| ob-20 | Aloinmunización Rh | 5 | 1 (esquema) | 3 | 1 | media |
| **Total** | | **108** | **31** | **13** | **17** | 4 alta · 7 media |

Fotos con problemas:
- **ob-10**: la única foto ("Aborto", en la diapositiva "Aborto en la ecografía") es una pieza expulsada (embrión y restos), no una ecografía; la narración habla de ecografía. La `_alt2` (gestación detenida, eco, CTO Fig. 16.3) y la `_alt1` (aborto tardío, pieza) estaban sin usar.
- **ob-12**: `02_mola-vesiculas` es una **ecografía** con múltiples quistes, pero la narración dice "el tejido son vesículas como un racimo de uvas".
- **ob-16**: `01_planos-de-hodge-presentaciones` no muestra los planos de Hodge: son dos pelvis con la cabeza fetal (correcto / incorrecto), sin rótulo que permita saber qué compara. Narración genérica.
- **ob-17**: `01_deceleraciones-…_1` (Así se ve) muestra **solo desaceleraciones tardías** (CTO Fig. 23.3), pero la narración describe precoces, tardías y variables. `_2` ("Registro con deceleraciones") es un trazado **sin desaceleraciones**. Las `_alt1` (variables) y `_alt2` (precoces) estaban sin usar.
- **ob-02**: la translucencia rotulada a secas es la **normal** (< 3 mm), mientras la narración habla de la aumentada; las `_alt1`/`_alt2` (aumentada) estaban sin usar. La imagen normal es de baja calidad.
- **ob-04**: "Doppler real" y "Doppler de arteria umbilical" son dos Doppler umbilicales **normales**; falta el patológico real. `02_ondas-doppler-patologicas-tabla` es un recorte de tabla AMIR (pie "Flujo reverso ductus venoso"); se deja con rótulo genérico.
- Duplicados entre clases (aceptables): `ob-03/01_rctg-normal-reactivo` = `ob-17/02_rctg-normal`; `ob-02/03_cervicometria` = `ob-15/01_cervicometria-cervix-corto`.

## Detalle por clase

### ob-01 · Control prenatal — baja
Naegele, fechado por eco, suplementos, batería de exámenes, SGB: no necesitan imagen.

### ob-02 · Ecografías — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| LCN (fechado) | foto | — |
| Translucencia nucal normal / aumentada | foto (solo la normal) — candidata `_alt2` (TN 7 mm) | sí |
| Doppler de arterias uterinas (notch) | NO | sí — sin candidata |
| Cervicometría | foto | — |
| Ecografía morfológica 20-24 | NO | no |
| Aspirina, progesterona | NO | no |

### ob-03 · RBNE — media
RBNE reactivo → esquema anotado propio + anim + RCTG normal CTO. **RBNE no reactivo** → NO, sí (sin candidata). Perfil biofísico: no.

### ob-04 · RCF — alta
PEG vs RCF, etapas, betametasona, magnesio: no. Doppler umbilical: esquema propio + 2 normales + anim de redistribución. **Doppler umbilical con diástole ausente / reversa (real)** y **ductus venoso con onda a reversa** → NO (sí, sin candidata clara). ACM con vasodilatación → solo anim.

### ob-05 a ob-09 — baja
Clasificación del SHE, sulfato de magnesio, diabetes gestacional, colestasia, ITU: dosis, cortes y conductas; no necesitan imagen. ob-05 tiene la animación de la placentación.

### ob-10 · Aborto — alta
| entidad | estado | ¿la necesita? |
|---|---|---|
| Amenaza de aborto (embrión con latido) | NO | no (baja) |
| Aborto retenido (sin latido / saco sin embrión) | NO — candidata `_alt2` (eco, gestación detenida) | sí |
| Aborto incompleto (restos en la cavidad, eco) | NO | sí — sin candidata |
| Aborto completo (endometrio fino) | NO | baja |
| Pieza de aborto | foto, **en diapositiva de ecografía** | — |
| Aborto séptico, Ley 21.030, misoprostol/AMEU | NO | no |

### ob-11 · Ectópico — baja
Ectópico ampular (eco con anillo tubárico) → foto; útero vacío y beta → algoritmo. `_alt1_1`/`_alt1_2` (algoritmo II) sin usar, no aportan. Hemoperitoneo (líquido libre en Douglas) → NO, baja.

### ob-12 · Mola — media
Tormenta de nieve → foto (coincide). Vesículas → eco, narrada como pieza. Pieza en racimo de uvas: no está, baja. Seguimiento con beta: no.

### ob-13 · Metrorragia de la segunda mitad — alta
| entidad | estado | ¿la necesita? |
|---|---|---|
| Placenta previa vs DPPNI | esquema propio + anim ×2 | — |
| Tipos de placenta previa | dibujo CTO | — |
| Placenta previa en eco transvaginal real | NO | **sí** — sin candidata |
| DPPNI: coágulo retroplacentario | foto (pieza) | — |
| Acretismo placentario | NO — candidata `_alt1` (lámina acreta/increta/percreta, AMIR p. 42) | sí |
| Vasa previa (Doppler) | NO | sí (media) — sin candidata |
| Rotura uterina | NO | no |

### ob-14 · RPM — baja
Cristalización en helecho → foto (coincide). Especuloscopía, PAMG-1, esquemas: no.

### ob-15 · Parto prematuro — baja
Cervicometría con cuello corto → foto. Tocolisis, corticoides, magnesio: no.

### ob-16 · Trabajo de parto — media
Mecanismo del parto → anim 3D; variedades de posición y partograma → esquemas propios. "Planos de Hodge y presentaciones" → **imagen que no muestra los planos**. Planos de Hodge / estaciones (espinas ciáticas) → sí, sin candidata (media). `_alt1` (parto en nalgas) sin usar: la clase no enseña podálica. Bishop, manejo activo del alumbramiento: no.

### ob-17 · Distocias y monitoreo — alta
| entidad | estado | ¿la necesita? |
|---|---|---|
| Desaceleraciones precoces | anim; foto real NO — candidata `_alt2` | sí |
| Desaceleraciones tardías | anim + foto (`_1`, rotulada "Deceleraciones") | — |
| Desaceleraciones variables | anim; foto real NO — candidata `_alt1` | sí |
| Registro "con deceleraciones" (`_2`) | **sin desaceleraciones** | — |
| RCTG normal | foto | — |
| Patrón sinusoidal | NO | **sí** — sin candidata |
| Categorías I-III | NO | no |
| McRoberts + presión suprapúbica | dibujo (coincide) | — |
| Signo de la tortuga | NO | baja — sin candidata |

### ob-18 · Hemorragia postparto — media
Atonía → anim; Bakri y B-Lynch → esquemas (coinciden). **Inversión uterina** → NO (media), sin candidata. Cuatro T, uterotónicos: no.

### ob-19 · Infección puerperal — baja
Absceso mamario clínico y ecográfico → fotos (coinciden). Mastitis (placa roja) se ve en la foto del absceso. Endometritis, congestión: no.

### ob-20 · Aloinmunización Rh — media
Sensibilización → anim ×3; Doppler de ACM → esquema propio. **Hidrops fetal** en ecografía → NO (media), sin candidata. Coombs, anti-D: no.
