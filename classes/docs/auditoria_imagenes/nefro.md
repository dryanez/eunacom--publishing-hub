# Auditoría de imágenes — Nefrología (nefro-01 a nefro-22)

Fecha: 2026-10-08 · Solo lectura (no se modificó ninguna clase ni archivo de medios).

Método: se extrajo de cada `classes/lessons/nefro-XX.cjs` lo que la clase enseña (títulos, nodos de flujo, tarjetas, tablas, narración de las diapositivas de imagen) y lo que muestra (diapositivas `type: 'image'`; `.mp4` = animación, resto = foto en `classes/media/<src>`). Se cruzó con el pie de figura de `classes/media/biblioteca/indice.json` y se abrieron las fotos dudosas y las variantes `_alt` sin usar.

Leyenda: **foto** · **anim** (animación) · **NO** = no se muestra. "¿La necesita?": **sí** = existe una imagen reconocible que el EUNACOM pregunta; **no** = fórmulas, cortes, dosis, algoritmos. En el resumen, "con foto" = número de fotos o esquemas estáticos que muestra la clase. La secuencia de 5 SVG de nefro-09 cuenta como animación.

Nota sobre el libro: `books/dist/Modulo_1_Medicina_Interna/Manual_EUNACOM_Nefrologia_Completo_2026.pdf` trae 10 imágenes (Imagen 1.1–5.4) y son **exactamente las mismas** que usan las clases (se extrajeron y compararon). No aporta candidatas nuevas. Las candidatas útiles están en carpetas de otras especialidades (`19_urologia`, `08_reumatologia`, `07_infectologia`) y en variantes `_alt` sin usar.

Nefrología es una especialidad con mucho contenido de fórmulas y electrolitos (nefro-03 a nefro-12 casi no necesitan fotos). Los vacíos reales están en **glomerulopatías (nefro-13 a nefro-17)**, **estenosis de arteria renal (nefro-20)** y la **IRA postrenal (nefro-01)**.

## Resumen

| clase | tema | entidades enseñadas (n) | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| nefro-01 | Injuria renal aguda: definición y enfrentamiento | 6 | 1 | 1 | 1 | media |
| nefro-02 | Necrosis tubular y nefritis intersticial | 5 | 1 | 1 | 2 | media |
| nefro-03 | Diálisis de urgencia (AEIOU) | 5 | 0 | 0 | 0 | baja |
| nefro-04 | Cardiorrenal y hepatorrenal | 2 | 0 | 1 | 0 | baja |
| nefro-05 | Hiponatremia | 6 | 0 | 3 | 1 | media |
| nefro-06 | SIADH, perdedor de sal, polidipsia | 4 | 0 | 1 | 0 | baja |
| nefro-07 | Hipernatremia y diabetes insípida | 4 | 0 | 1 | 0 | baja |
| nefro-08 | Sueros y diuréticos | 4 | 0 | 2 | 0 | baja |
| nefro-09 | Hiperkalemia | 6 | 2 (1 duplicada) | 1 (secuencia SVG) | 0 | baja |
| nefro-10 | Hipokalemia | 5 | 1 | 0 | 0 | baja |
| nefro-11 | Acidosis metabólica | 6 | 0 | 1 | 0 | baja |
| nefro-12 | Alcalosis metabólica y trastornos mixtos | 5 | 0 | 1 | 0 | baja |
| nefro-13 | Síndrome nefrótico | 7 | 1 | 1 | 2 | **alta** |
| nefro-14 | Membranosa, cambios mínimos, GEFS | 3 | 0 | 1 | 1 | media |
| nefro-15 | Glomerulonefritis postestreptocócica | 5 | 3 (1 de otra entidad) | 0 | 1 | media |
| nefro-16 | GN rápidamente progresiva | 6 | 0 | 1 | 3 | **alta** |
| nefro-17 | Nefritis lúpica | 4 | 0 | 1 | 1 | media |
| nefro-18 | Enfermedad renal crónica: KDIGO y GES | 6 | 1 (esquema propio) | 0 | 1 | baja |
| nefro-19 | Anemia, CKD-MBD y acidosis en ERC | 4 | 1 (esquema propio) | 0 | 1 | baja |
| nefro-20 | Estenosis de arteria renal | 4 | 1 | 0 | 1 | **alta** |
| nefro-21 | Pielonefritis aguda | 5 | 1 | 1 | 1 | media |
| nefro-22 | Fármacos en falla renal y contraste | 4 | 0 | 0 | 0 | baja |
| **Total** | | **106** | **13** | **18** | **16** | 3 alta · 7 media |

## Detalle por clase

### nefro-01 · Injuria renal aguda — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Criterios KDIGO y estadios | NO | no |
| Autorregulación (AINE, IECA) | anim (A1_autorregulacion_real) | — |
| **IRA postrenal: "primero descartar obstrucción" (eco renal y vesical, globo)** | NO | **sí**: eco con hidronefrosis |
| Índices urinarios (FeNa, FeUrea) | NO | no |
| Sedimento: hialinos / granulosos pardos / hemáticos / leucocitarios | foto solo de hematíes dismórficos (ver nefro-02) | parcial |
| Tratamiento | NO | no |

- Candidatas: `biblioteca/19_urologia/uro-01/03_ecografia-hidronefrosis__bailey-love_p1433.jpg`, `biblioteca/19_urologia/uro-02/01_tac-hidronefrosis-bilateral-obstruccion-vesical__bailey-love_p1482.jpg`.
- La foto de hematíes dismórficos (`nefro-01/01_sedimento-hematuria-glomerular__cto-nefro_p33.jpg`) es correcta, pero en esta clase el sedimento enseña sobre todo cilindros; se podría sumar la lámina de cilindros (ver nefro-02).

### nefro-02 · NTA y NIA — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| NTA (isquemia, nefrotóxicos) → cilindros granulosos pardos | anim (A1_necrosis_tubular) + foto "Cilindros" | sí (ver problema) |
| **Rabdomiólisis: orina color té, tira (+) sin hematíes** | NO | sí (media) |
| **NIA: piuria estéril, cilindros leucocitarios, exantema por fármaco** | NO | **sí** |
| Tratamiento | NO | no |

- **Foto que no cubre la narración:** `nefro-02/01_tipos-de-cilindros__cto-nefro_p34.jpg` ("Cilindros", narración: "los granulosos, color café, sugieren NTA; los leucocitarios, nefritis intersticial…") muestra **un solo cilindro** pálido con hematíes alrededor; no se ven los tipos que se nombran. Mejor candidata sin usar: `nefro-02/01_tipos-de-cilindros_alt1_2__cto-nefro_p34.jpg` (lámina dibujada con cilindro leucocitario, hemático, hialino y granuloso). `…_alt1_1` (hialino) y `…_alt1_3` (cilindro celular sobre fondo verde) son de apoyo.
- NIA: `biblioteca/03_nefrologia/nefro-21/01_sedimento-con-leucocituria__cto-nefro_p33.jpg` — su pie (CTO Fig. 3.3) dice literalmente "leucocituria… en el contexto de una **nefritis intersticial aguda**": pertenece más a esta clase que a nefro-21. Exantema por fármaco: `biblioteca/11_dermatologia/derma-10/01_exantema-morbiliforme-dress__cto-derma_p9.jpg`.
- Orina de rabdomiólisis: sin candidata en el repo.

### nefro-03 · Diálisis de urgencia — baja
AEIOU, encefalopatía, pericarditis urémica, sangrado urémico, catéter yugular, desequilibrio dialítico. Ninguna entidad depende de una imagen; es la única clase de los primeros 12 sin ninguna imagen ni animación. Opcionales: ECG de pericarditis (supradesnivel difuso), Rx de edema pulmonar por sobrecarga (indicación "O"), foto de catéter Mahurkar. Para "E" se puede reutilizar el ECG de hiperkalemia de nefro-09. Sin candidatas de pericarditis/edema pulmonar en el repo de esta área (buscar en `02_neumologia`/cardiología).

### nefro-04 · Cardiorrenal y hepatorrenal — baja
Hepatorrenal → anim (A1_hepatorrenal). Cardiorrenal y criterios: no necesitan foto. Opcional: ascitis `biblioteca/01_gastroenterologia/gastro-15/02_ascitis_tension_foto__commons.jpg`.

### nefro-05 · Hiponatremia — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Edema cerebral agudo / adaptación / corrección rápida | anim ×3 (neurona aguda, adaptación, corrección) | — |
| Seudohiponatremia / osmolaridad | NO | no |
| Clasificación por volemia y Na urinario | NO | no |
| Tiazidas, ISRS, microcítico | NO | no |
| NaCl 3 % / Adrogué-Madias | NO | no |
| **Síndrome de desmielinización osmótica (mielinólisis pontina central)** | NO (solo la anim celular) | **sí**: RM con hiperintensidad pontina "en tridente/murciélago" |

- Sin candidata en el repo (se buscó "mielin", "pontin", "desmiel").

### nefro-06 · SIADH vs perdedor de sal vs polidipsia — baja
SIADH → anim (A1_siadh_volemia). Criterios, causas y diferencial: no necesitan foto.

### nefro-07 · Hipernatremia y DI — baja
Privación de agua → anim (A1_privacion_agua). Opcional: TC con hematoma subdural por desgarro de venas puente (nodo del flujo): `biblioteca/10_cirugia/cirugia-12/01_hematoma-epidural-vs-subdural-tc__cto-neuro_p142.jpg`.

### nefro-08 · Sueros y diuréticos — baja
Distribución de sueros y sitios de diuréticos → anim ×2. Nada más.

### nefro-09 · Hiperkalemia — baja
| entidad | estado | ¿la necesita? |
|---|---|---|
| Progresión ECG (T picuda → PR largo → QRS ancho → sinusoidal) | anim (secuencia de 5 SVG propios) | — |
| ECG real (K 6,8 → 9,1 → tras diálisis) | foto (`nefro-09/ecg_hiperk.jpg`) | — |
| Clínica (bradicardia, parálisis flácida) | NO | no |
| Calcio, insulina, salbutamol, diálisis | NO | no |
| Seudohiperkalemia | NO | no |

- **Foto duplicada:** la diapositiva "Más imágenes" muestra `biblioteca/03_nefrologia/nefro-09/01_ecg-hiperpotasemia-t-picudas-sinusoidal__cto-nefro_p23.jpg`, que es **la misma figura** (CTO Fig. 2.5, mismas dimensiones 1092×959) que `nefro-09/ecg_hiperk.jpg` de la diapositiva "ECG real". Reemplazar por la variante sin usar `…_alt1__cto-cardio_p19.jpg` (otro paciente: T picudas, silencio auricular y QRS ancho).
- Detalle menor: la narración de "ECG real" tiene 4 pasos sobre 3 paneles (A, B, C); los pasos 2 y 3 apuntan al mismo panel B. Correcto, pero conviene resaltar el panel en cada paso.

### nefro-10 · Hipokalemia — baja
Onda U → foto correcta (`nefro-10/01_ecg-hipopotasemia-ondas-u__cto-nefro_p22.jpg`, con flecha). Resto: reposición y magnesio. Sin animación; no la necesita.

### nefro-11 · Acidosis metabólica — baja
Gases paso a paso → anim. Winter, anion gap, MUDPILES, brecha osmolar, bicarbonato: no necesitan foto.

### nefro-12 · Alcalosis metabólica — baja
Alcalosis por vómitos → anim. Opcional: Trousseau/Chvostek (la clase los nombra por el calcio iónico bajo); reutilizar `biblioteca/05_endocrinologia/endo-17/01_signo_trousseau__commons.jpg`.

### nefro-13 · Síndrome nefrótico — **alta**
| entidad | estado | ¿la necesita? |
|---|---|---|
| Podocito → proteinuria → hipoalbuminemia → edema | anim (A1_podocito_real) | — |
| Edema blando con fóvea | foto (`01_edema_fovea__bates_p559.jpg`) | — |
| **Edema palpebral matinal / facial** | NO aquí (está mal ubicado en nefro-15) | **sí** |
| **Lipiduria: cuerpos ovales grasos, cruz de Malta con luz polarizada** | NO | **sí**: imagen clásica de sedimento |
| Hipercoagulabilidad: trombosis de vena renal, TEP | NO | opcional (TC) |
| Biopsia: niño vs adulto | NO | no |
| **Amiloidosis: rojo Congo, birrefringencia verde manzana** | NO | **sí** (media) |
| Infecciones (neumococo, PBE) | NO | no |

- Edema facial/palpebral: mover o duplicar `biblioteca/03_nefrologia/nefro-15/01_edema_facial_nino_nefrosis__cdc-phil-3894.jpg` (es un niño **nefrótico**).
- Cruz de Malta y rojo Congo: sin candidatas en el repo (se buscó "cruz", "congo", "amiloid").

### nefro-14 · Membranosa, cambios mínimos, GEFS — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Membranosa (MBG engrosada, spikes, anti-PLA2R) | anim (A1_tres_glomerulopatias) | biopsia real opcional |
| Cambios mínimos (óptica normal, borramiento de pedicelos) | anim | — |
| GEFS (esclerosis segmentaria) | anim | — |

- Falta al menos **una biopsia real** (p. ej., membranosa con plata mostrando spikes, o microscopía electrónica con borramiento de pedicelos) para que el alumno reconozca el corte histológico que la animación esquematiza. Sin candidatas en el repo.

### nefro-15 · GN postestreptocócica — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Latencia faringe/piel | NO | opcional: impétigo como antecedente |
| **Orina color té / coca-cola (hematuria macroscópica)** | NO | **sí** |
| Edema periorbitario + HTA | foto de edema facial (pero de un niño nefrótico) | parcial |
| Sedimento: dismorfia y cilindros hemáticos | foto (cilindro hemático) + tira de orina | — |
| C3 bajo / ASO / anti-DNAsa B | NO | no |
| Tratamiento (furosemida, sin corticoides) | NO | no |

- **Foto de otra entidad:** `nefro-15/01_edema_facial_nino_nefrosis__cdc-phil-3894.jpg` es un niño con **síndrome nefrótico** (la propia narración lo admite: "Este niño tiene un síndrome nefrótico"). En una clase de nefrítico confunde; pertenece a nefro-13.
- Orina coca-cola: sin candidata en el repo. Impétigo: `biblioteca/07_infectologia/infecto-20/03_impetigo__cto-derma_p25.jpg`.
- Sin animación: el flujo "faringitis → latencia → consumo de C3 → glomérulo" se presta para una.

### nefro-16 · GN rápidamente progresiva — **alta**
| entidad | estado | ¿la necesita? |
|---|---|---|
| Definición, semilunas | anim (A1_semilunas) | biopsia real con semiluna: sí (media) |
| **IF lineal (anti-MBG) vs granular (inmunocomplejos) vs pauciinmune** | anim (dentro de A1) | foto de IF lineal vs granular: sí (media) |
| **Goodpasture: hemorragia alveolar (Rx/TC con infiltrados alveolares bilaterales)** | NO | **sí** |
| Tipo 2: lupus IV, postinfecciosa, crioglobulinemia | NO | no |
| PAM (ANCA-p) | NO | no |
| **GPA: nariz en silla de montar, nódulos pulmonares cavitados** | NO | **sí** |

- Candidatas: nariz en silla de montar `biblioteca/08_reumatologia/reuma-22/01_nariz_silla_montar__commons.jpg`; púrpura palpable de vasculitis (apoyo) `biblioteca/08_reumatologia/reuma-22/01_purpura-palpable__amir-reuma_p38.jpg`; animación de hemoptisis `animaciones/resp-20/A1_hemoptisis_masiva.mp4` (apoyo). Rx de hemorragia alveolar, nódulos cavitados de GPA, semiluna e IF: sin candidata en el repo.

### nefro-17 · Nefritis lúpica — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Inmunocomplejos / clases I–VI | anim (A1_clases_lupus) | — |
| Indicaciones de biopsia, anti-dsDNA, C3/C4 | NO | no |
| **Clase IV: "asas de alambre"** (cierre de la clase) | NO | **sí** (media): histología |
| Lupus clínico (eritema malar) | NO | opcional |

- Candidata de contexto: `biblioteca/08_reumatologia/reuma-08/01_eritema-malar__cto-reuma_p81.jpg`. Asas de alambre: sin candidata.

### nefro-18 · ERC: KDIGO y GES — baja
| entidad | estado | ¿la necesita? |
|---|---|---|
| Definición / marcadores de daño | NO | opcional: eco con riñones < 9 cm, poliquistosis |
| Clasificación KDIGO G y A | foto (`S1_kdigo__propio.svg`, esquema) | — |
| Nefroprotección (IECA, iSGLT2) | NO | no |
| Fármacos en ERC | NO | no |
| GES: notificación y nefrólogo | NO | no |
| **Fístula AV radiocefálica (Brescia-Cimino)** | NO | sí (baja-media) |

- Candidatas: poliquistosis `biblioteca/19_urologia/uro-14/03_poliquistosis-renal-tac__bailey-love_p1571.jpg`. Fístula AV y eco de riñones pequeños: sin candidatas.

### nefro-19 · Complicaciones de la ERC — baja
Esquema propio de complicaciones (`S1_complicaciones-erc__propio.svg`). Anemia, hierro/EPO, acidosis: no necesitan foto. **CKD-MBD "vasos y piel"** (nodo del flujo): calcifilaxis u osteodistrofia renal (columna "en camiseta de rugby") serían la imagen reconocible; sin candidatas en el repo. Sin animación: el flujo "fósforo → FGF-23 → calcitriol → PTH" se presta para una.

### nefro-20 · Estenosis de arteria renal — **alta**
| entidad | estado | ¿la necesita? |
|---|---|---|
| Fisiopatología (renina-angiotensina) | NO | no (candidata a animación) |
| Sospecha clínica (soplo, creatinina con IECA, edema flash) | NO | no |
| **Displasia fibromuscular: "collar de perlas" (imagen clásica en la angiografía)** | NO | **sí** |
| Ateroesclerosis ostial | NO | sí (baja) |
| Estudio: eco Doppler → angioTAC/angio-RM → arteriografía | foto (angioTC 3D) | — |

- La foto actual (`nefro-20/01_angiotc_arteria_renal_fmd__harrison_p2132.jpg`) es una reconstrucción 3D con hipoperfusión del polo superior del riñón derecho: correcta, pero **no muestra el collar de perlas**, que la tabla y el cierre enseñan como la imagen clásica. Sin candidata en el repo.

### nefro-21 · Pielonefritis aguda — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Ascenso vejiga → riñón | anim (A1_pielonefritis_ascendente) | — |
| Sedimento: piuria y bacterias, cilindros leucocitarios | foto (leucocituria) | parcial |
| Criterios de hospitalización / embarazo | NO | no |
| Tratamiento | NO | no |
| **Complicación a las 48–72 h: absceso renal u obstrucción (TAC)** | NO | **sí** (media) |

- La foto `nefro-21/01_sedimento-con-leucocituria__cto-nefro_p33.jpg` es leucocituria correcta, pero su pie original es de una **nefritis intersticial aguda**; sirve aquí como "piuria", aunque sería más precisa en nefro-02. Para la PNA faltaría un cilindro leucocitario (`nefro-02/01_tipos-de-cilindros_alt1_2…` lo incluye dibujado).
- Obstrucción: `biblioteca/19_urologia/uro-01/03_ecografia-hidronefrosis__bailey-love_p1433.jpg`, `biblioteca/19_urologia/uro-01/02_tac-sin-contraste-calculos-renales__bailey-love_p1410.jpg`. Absceso renal: sin candidata.

### nefro-22 · Fármacos y contraste — baja
Cortes de metformina, AINE, aminoglucósidos, enoxaparina, prevención de nefropatía por contraste: no necesitan imágenes.

## Fotos con problemas

| clase | archivo | problema |
|---|---|---|
| nefro-15 | `03_nefrologia/nefro-15/01_edema_facial_nino_nefrosis__cdc-phil-3894.jpg` | Niño con síndrome **nefrótico** mostrado en la clase de **nefrítico** (la narración lo reconoce). Pertenece a nefro-13. |
| nefro-02 | `03_nefrologia/nefro-02/01_tipos-de-cilindros__cto-nefro_p34.jpg` | Muestra un solo cilindro; la narración describe granulosos pardos y leucocitarios. Usar la lámina `…_alt1_2__cto-nefro_p34.jpg` (cuatro tipos). |
| nefro-09 | `03_nefrologia/nefro-09/01_ecg-hiperpotasemia-t-picudas-sinusoidal__cto-nefro_p23.jpg` | Duplica la figura ya mostrada como `nefro-09/ecg_hiperk.jpg` (misma CTO Fig. 2.5). Sustituir por `…_alt1__cto-cardio_p19.jpg`. |
| nefro-20 | `03_nefrologia/nefro-20/01_angiotc_arteria_renal_fmd__harrison_p2132.jpg` | Correcta, pero no muestra el "collar de perlas" que la clase enseña como imagen clásica. |
| nefro-21 | `03_nefrologia/nefro-21/01_sedimento-con-leucocituria__cto-nefro_p33.jpg` | Correcta como leucocituria, pero el pie original es de nefritis intersticial aguda; menor. |
