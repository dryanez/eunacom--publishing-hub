# Auditoría de imágenes — Cirugía (cirugia-01 a cirugia-18)

Fecha: 2026-10-12. Estado **antes** de los cambios (los cambios aplicados están en `CAMBIOS_cirugia.md`; lo que sigue faltando, en `FALTANTES_cirugia.md`).

Método: se extrajo de cada `classes/lessons/cirugia-XX.cjs` lo que la clase enseña (títulos, nodos de flujo, tarjetas, tablas) y lo que muestra (diapositivas `type: 'image'`; `.mp4` = animación). Se abrieron todas las fotos de `classes/media/biblioteca/10_cirugia/` (usadas y `_alt` sin usar) y se cruzaron con el pie de figura de `biblioteca/indice.json`. Se buscaron candidatas en las carpetas de las otras especialidades.

Leyenda: **foto** · **anim** · **esq** (esquema/dibujo propio, no cuenta como foto) · **NO** = no se muestra. "¿La necesita?": **sí** = imagen reconocible que el EUNACOM pregunta; **no** = dosis, scores, algoritmos.

## Resumen

| clase | tema | entidades enseñadas (n) | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| cirugia-01 | Apendicitis aguda | 7 | 1 (**mal rotulada**: TAC narrado como "ecografía y pieza") + esq | 0 | 2 | media |
| cirugia-02 | Colecistitis aguda | 7 | 1 (rótulo impreciso: es colelitiasis) | 0 | 3 | media |
| cirugia-03 | Diverticulitis aguda | 6 | 1 (poco legible) | 0 | 2 | media |
| cirugia-04 | Obstrucción intestinal | 8 | 4 | 1 | 2 | baja |
| cirugia-05 | Peritonitis y úlcera perforada | 5 | 1 (neumoperitoneo poco evidente) | 0 | 1 | baja |
| cirugia-06 | Hernias de la pared abdominal | 8 | 2 (1 **mal rotulada**: dibujo de asa isquémica rotulado "hernia umbilical incarcerada") + esq | 1 | 3 | **alta** |
| cirugia-07 | Fisura, hemorroides, absceso y fístula | 6 | 1 | 0 | 4 | **alta** |
| cirugia-08 | Pilonidal, hidrosadenitis, partes blandas | 6 | 5 (4 en una diapositiva: excede el máximo de 3) | 0 | 1 | baja |
| cirugia-09 | Politraumatizado (ATLS) | 6 | 0 + esq | 1 | 2 | media |
| cirugia-10 | Trauma de tórax | 6 | 4 | 0 | 2 | media |
| cirugia-11 | Trauma abdominal | 7 | 3 | 0 | 2 | media |
| cirugia-12 | TEC | 6 | 3 | 1 | 0 | baja |
| cirugia-13 | Quemaduras | 7 | 5 (2 con narración rota: "dosº y tresº grado", rótulo truncado) | 0 | 3 | media |
| cirugia-14 | Evaluación preoperatoria | 4 | 0 | 0 | 0 | baja |
| cirugia-15 | Anestesia y anestésicos locales | 6 | 0 | 0 | 0 | baja |
| cirugia-16 | Fiebre postoperatoria (5 W) | 5 | 0 | 0 | 3 | media |
| cirugia-17 | Infección y dehiscencia de herida | 5 | 5 (2 "aportadas por el usuario", licencia por verificar) | 0 | 1 | baja |
| cirugia-18 | Heridas, tétanos y mordeduras | 5 | 1 | 0 | 1 | baja |
| **Total** | | **108** | **37** | **4** | **32** | 2 alta · 9 media |

## Detalle por clase

### cirugia-01 · Apendicitis — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Puntos y signos (McBurney, Blumberg, Rovsing, psoas, obturador) | esq (`S1_puntos-apendicitis`) | — |
| Score de Alvarado | NO | no |
| Apendicitis en TAC | foto `01_apendicitis-eco-pieza-rx__cto-radiologia_p41.jpg`, pero rotulada "Imágenes" y narrada como "ecografía y pieza operatoria": **es un TAC coronal** (apéndice engrosado con grasa inflamada) | — |
| Apendicitis en ecografía (niño, embarazada) | NO | **sí** (sin candidata: `gastro-19/01_apendicitis-eco…` es el mismo recorte de TAC) |
| Pieza operatoria | NO (candidata sin usar `_alt1__cto-digestivo_p157`) | sí |
| Fecalito en Rx simple | NO (candidata sin usar `_alt2__cto-digestivo_p158`) | sí (menor) |
| Plastrón / absceso apendicular en TAC | NO | **sí** (sin candidata) |

### cirugia-02 · Colecistitis — media
| entidad | estado | ¿la necesita? |
|---|---|---|
| Colelitiasis con sombra acústica | foto (rotulada "Colecistitis"; el pie dice cálculos con sombra) | — |
| Colecistitis: pared > 4 mm, líquido perivesicular | NO (candidata sin usar `_alt1__cto-radiologia_p44`, pared medida) | **sí** |
| Grados de Tokio, Strasberg | NO | no |
| Colecistitis enfisematosa (gas en la pared, TAC/Rx) | NO | sí |
| Síndrome de Mirizzi (colangio-RM/CPRE) | NO | sí (media) |
| Cintigrafía HIDA sin llenado vesicular | NO | sí (baja) |

### cirugia-03 · Diverticulitis — media
TAC de diverticulitis → foto `01_diverticulitis-tc__cto-digestivo_p142.jpg` (axial pequeño, 300 px; el engrosamiento del sigmoides casi no se distingue; el pie habla de un panel B Hinchey II que no está en el recorte). `gastro-19/03_diverticulitis-tc-hinchey` es el mismo recorte. Faltan: TAC de absceso pericólico (Hinchey Ib/II, drenaje percutáneo) **sí**; aire libre / peritonitis (Hinchey III-IV) sí; colonoscopía con divertículos (baja). Hinchey, antibióticos: no.

### cirugia-04 · Obstrucción intestinal — baja
Niveles hidroaéreos (foto ✓), vólvulo de sigmoides en grano de café (foto ✓), vólvulo de ciego y obstrucción de colon (foto ✓, "Más imágenes" con narración genérica), anim de brida. `_alt1` (niveles, CTO Radiología p26) sin usar, redundante. Faltan: TAC con zona de transición (media); neumatosis / gas portal (baja); hernia crural atascada como causa (foto, media; ver cirugia-06).

### cirugia-05 · Peritonitis — baja
Neumoperitoneo bajo el diafragma derecho → foto (correcta pero **poco evidente**, línea de aire muy fina). `_alt1` (signo de Rigler, CTO Radiología p27) sin usar: la clase no enseña Rigler. Abdomen en tabla, Jobert, PBE: no necesitan foto. Falta una Rx de tórax de pie con neumoperitoneo evidente (baja).

### cirugia-06 · Hernias — alta
| entidad | estado | ¿la necesita? |
|---|---|---|
| Indirecta vs directa (vasos epigástricos) | anim + esq Hesselbach | — |
| Hernia incarcerada / estrangulada | `02_hernia-umbilical-incarcerada__cto-cirugia_p56.jpg` es **un dibujo de dos asas (sana y violácea isquémica)**, no la foto de hernia umbilical del pie (Fig. 8.2): recorte equivocado; narración "esta hernia umbilical está incarcerada" no corresponde | sí |
| Pérdida de domicilio | foto hernia bilateral gigante ✓ (narración genérica) | — |
| Hernia inguinal indirecta inguinoescrotal (foto) | NO | **sí** |
| Hernia crural (bajo el ligamento inguinal, mujer) | NO | **sí** |
| Hernia umbilical (foto real de Fig. 8.2) | NO (el recorte correcto está en CTO Cirugía p56) | sí |
| Lichtenstein, McVay, GES | NO | no |

### cirugia-07 · Patología anorrectal — alta
| entidad | estado | ¿la necesita? |
|---|---|---|
| Fisura anal | NO (candidata `gastro-12/02_fisura_anal_foto__commons.jpg`) | **sí** |
| Prolapso hemorroidal (grado IV) | foto ✓ | — |
| Hemorroide externa trombosada (nódulo violáceo) | NO | **sí** (pregunta real Julio 2025) |
| Absceso perianal | NO | sí |
| Fístula anorrectal / regla de Goodsall | NO (`gastro-12/02_fistulas-perianales` es lámina de tipos de fístula, no Goodsall) | sí (media) |

### cirugia-08 · Piel y partes blandas — baja
Sinus pilonidal, absceso pilonidal, lipomas, quiste epidermoide → 4 fotos en "Así se ve" (excede el máximo de 3; el libro solo toma 3). Hidrosadenitis → foto ✓ (narración genérica). Falta: RM de sarcoma de partes blandas (baja).

### cirugia-09 · ATLS — media
ABCDE → esq + anim. Ojos de mapache / Battle (sonda por la boca) → NO aquí (foto en cirugia-12) — **sí**. Uretrorragia / próstata flotante → NO (candidata `trauma-05/04_uretrografia-lesion-uretral`) — **sí**. Tríada letal, trimodal: no.

### cirugia-10 · Trauma de tórax — media
Tórax volante (dibujo ATLS ✓), neumotórax a tensión (Rx ✓), hemotórax (Rx ✓), neumotórax derecho (Rx ✓, coincide con la narración). Faltan: taponamiento cardíaco en eco FAST subxifoideo (**sí**, media); neumotórax abierto / parche en tres lados (baja); posición del tubo pleural (baja).

### cirugia-11 · Trauma abdominal — media
Ventanas FAST (dibujo ✓), FAST positivo en Morrison (eco ✓), rotura esplénica TAC (✓, narración genérica). Faltan: equimosis transversa por cinturón de seguridad (**sí**, media); Cullen / Grey Turner (baja); TAC con blush (baja).

### cirugia-12 · TEC — baja
Epidural vs subdural (TAC ✓ + anim), ojos de mapache, Battle ✓. `_alt1` (subdural agudo) y `_alt2` (subdural crónico) sin usar: el crónico ilustra "el subdural del anciano, deterioro en días". Midriasis unilateral (baja).

### cirugia-13 · Quemaduras — media
Espesor parcial superficial y profundo (dibujos ATLS ✓), regla de los nueve ✓, mano con 2.º y 3.er grado ✓, foto de profundidad mixta ✓. "Más imágenes": narraciones rotas ("dosº y tresº grado", "foto clínica de profundidad m") y rótulo truncado. Faltan: escarotomía en escara circular (**sí**), vía aérea quemada (vibrisas chamuscadas, hollín) (sí), quemadura de primer grado (baja). Parkland, Garcés: no.

### cirugia-14 · Preoperatorio — baja
ASA, Lee, fármacos: no necesitan imagen.

### cirugia-15 · Anestesia — baja
Técnicas, relajantes, dosis máximas, toxicidad: no necesitan imagen (opcional: esquema raquídea vs peridural).

### cirugia-16 · Fiebre postoperatoria — media
Sin ninguna imagen. Atelectasia en Rx (**sí**), infección de herida operatoria (eritema, pus) (**sí**), TVP: pierna asimétrica / eco-Doppler (**sí**). Infección urinaria, fiebre por fármacos: no. Candidata parcial: `resp-19/01_angiotc-tep` (la clase no enseña el angio-TAC; no se usó).

### cirugia-17 · Herida operatoria — baja
Dehiscencia ✓, evisceración ✓ (dibujo aportado por el usuario, **licencia por verificar**), fascitis necrotizante ✓, etapas de evisceración (usuario, licencia por verificar), hematoma ✓. Narraciones genéricas en "Más imágenes". `_2` de hematoma = duplicado del `_1`, sin usar. Falta: infección incisional superficial (eritema y pus en la herida) (media).

### cirugia-18 · Heridas y mordeduras — baja
Mordedura de perro ✓. Herida tetanígena punzante, mordedura de gato: baja. `infecto-06/02_opistotonos` existe, pero la clase no enseña el tétanos clínico.
