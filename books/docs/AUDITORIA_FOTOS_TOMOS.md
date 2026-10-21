# Auditoría de las fotos impresas en los tomos

Fecha: 2026-10-21. Se miró una a una cada imagen que trae el PDF de cada tomo (`books/dist/01_Tomos/`), con el pie con que sale impresa.
Origen de cada foto en el tomo: **figura del tema** (sale de la clase o del figspec) o **foto en el texto** (capa «atlas 392», `figspec_clases.cjs → mergeAtlas`).

## Resumen

| Tomo | Fotos | Repetidas en el mismo tomo | Mal | Ilegibles | En inglés | Menores/desnudos | Sin hallazgo | Dudosas | OK |
|---|---|---|---|---|---|---|---|---|---|
| 01 Cardiología | 130 | 56 | 1 | 2 | 7 | 0 | 1 | 1 | 62 |
| 02 Infectología | 80 | 16 | 1 | 3 | 1 | 2 | 0 | 1 | 56 |
| 03 Gastroenterología | 119 | 18 | 1 | 3 | 1 | 1 | 0 | 4 | 91 |
| 04 Respiratorio | 69 | 14 | 3 | 4 | 2 | 0 | 0 | 2 | 44 |
| 05 Nefrología | 43 | 13 | 0 | 0 | 1 | 0 | 1 | 4 | 24 |
| 06 Diabetes Mellitus & Dislipidemias | 36 | 12 | 0 | 0 | 1 | 0 | 0 | 1 | 22 |
| 07 Endocrinología & Metabolismo | 73 | 17 | 1 | 1 | 1 | 0 | 0 | 1 | 52 |
| 08 Hematología & Hemostasia | 86 | 28 | 2 | 2 | 1 | 0 | 0 | 1 | 52 |
| 09 Reumatología | 93 | 19 | 1 | 4 | 1 | 0 | 0 | 1 | 67 |
| 10 Neurología y Geriatría | 92 | 21 | 1 | 4 | 4 | 1 | 0 | 2 | 59 |
| 11 Cirugía General y Anestesia | 87 | 17 | 1 | 1 | 6 | 2 | 0 | 4 | 56 |
| 12 Traumatología y Ortopedia | 91 | 19 | 1 | 0 | 7 | 3 | 0 | 2 | 59 |
| 13 Urología | 50 | 11 | 2 | 2 | 4 | 0 | 1 | 1 | 29 |
| 14 Otorrinolaringología | 68 | 14 | 2 | 5 | 1 | 0 | 0 | 1 | 45 |
| 15 Oftalmología | 74 | 15 | 2 | 2 | 1 | 0 | 0 | 3 | 51 |
| 16 Dermatología | 85 | 13 | 1 | 0 | 2 | 4 | 0 | 1 | 64 |
| 17 Psiquiatría y Salud Mental | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 18 Pediatría y Neonatología | 84 | 13 | 2 | 5 | 4 | 8 | 0 | 2 | 50 |
| 19 Obstetricia y Medicina Materno-Fetal | 54 | 11 | 0 | 5 | 5 | 0 | 0 | 4 | 29 |
| 20 Ginecología y Oncología | 60 | 9 | 1 | 3 | 3 | 1 | 1 | 7 | 35 |
| 21 Salud Pública y Bioética | 6 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 5 |
| **Total** | **1482** | **338** | **23** | **46** | **53** | **22** | **4** | **43** | **953** |

## Correcciones aplicadas (2026-10-21)

- **Repetidas (338)**: el compilador ya no imprime dos veces la misma foto en un tema (`figspec_clases.cjs → mergeAtlas`).
- **En inglés (53)**: se borraron los rótulos y pies en inglés de la imagen y se escribieron en español (o se recortó el pie impreso).
- **Mal, ilegibles, dudosas o sin hallazgo**: 71 reemplazadas por una imagen correcta de los libros fuente (Bailey & Love, Harrison, Nelson, Kanski, Fitzpatrick, Rumack, Herring, Brant & Helms, Talley, Bull, Reardon, Williams) o corregidas (recorte, contraste); el crédito y el pie se actualizaron en la clase y en el atlas. 1 revisada y correcta. **44 pendientes**: no hay una imagen mejor en los libros disponibles en el computador (varios PDF fuente ya no están en Descargas).
- **Menores o desnudos (22)**: se mantienen; son fotos clínicas.
- El detalle por foto (columna `accion`) está en `books/data/auditoria_fotos_tomos.json`. Los originales reemplazados quedaron respaldados fuera del repo durante la sesión.

**Por qué hay tantas repetidas:** el compilador pone la misma foto dos veces cuando la clase la usa como figura del tema y también está en el set «atlas 392»: una como figura y otra dentro del texto.


## Tomo 01 · Cardiología

130 fotos · 62 OK · 56 repetidas · 12 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 0 | 1.1 | — | Medición sistemática de intervalos | No muestra lo que dice el pie | recorte mal hecho: trae el pie «Figura 3.2» del manual original y medio dibujo de otra figura (V6-V9) abajo |
| 5 | 1.3B | 14 | Una descarga termina la FV | Ilegible al tamaño impreso | tira de ritmo muy delgada: no se lee al tamaño impreso |
| 68 | 2.6 | 78 | Aneurisma ventricular izquierdo (pieza anatomopatológica): a | Ilegible al tamaño impreso | pieza en la que no se distingue el aneurisma |
| 1 | 1.1 | 6 | Conducción normal: onda P, complejo QRS y onda T con un inte | Rótulos o pie en inglés | rótulos «NORMAL CONDUCTION», «time» y diagrama en escalera en inglés |
| 27 | 1.8A | 36 | BAV de 1.er grado: PR 280 ms | Rótulos o pie en inglés | «1st degree AV BLOCK», «time» |
| 28 | 1.8B | 36 | Mobitz I (Wenckebach) | Rótulos o pie en inglés | «normal / prolonged / blocked», «time» |
| 29 | 1.8C | 36 | Mobitz II | Rótulos o pie en inglés | «Type II block with narrow QRS complexes», «constant PR interval» |
| 35 | 1.9A | 41 | EV en bigeminismo y parejas | Rótulos o pie en inglés | rótulos «PVCs in bigeminy…» en inglés |
| 36 | 1.9B | 42 | Holter y registrador | Rótulos o pie en inglés | «Electrodes», «Holter Monitor» |
| 125 | 5.7 | 185 | Disección aórtica: Stanford A (tipos DeBakey I y II) y Stanf | Rótulos o pie en inglés | «Ascending dissection», «DeBakey type…» en inglés |
| 51 | 2.2 | 57 | Reserva fraccional de flujo (FFR) de 0,78: estenosis interme | Sin hallazgo que mirar | pantalla con el valor FFR 0,78: no hay hallazgo visual |
| 87 | 4.2 | 124 | Válvula aórtica calcificada (eje corto) | Dudosa (se puede mejorar) | ecocardiograma transesofágico en eje corto: el pie dice calcificada pero cuesta verlo sin rótulos |

Repetidas (la misma foto sale dos veces en el tomo): #3 (1.2, p. 27), #6 (1.3, p. 15), #7 (1.3, p. 14), #11 (1.4, p. 18), #12 (1.4, p. 19), #13 (1.4, p. 19), #17 (1.6, p. 26), #18 (1.6, p. 26), #19 (1.6, p. 27), #24 (1.7, p. 31), #25 (1.7, p. 31), #26 (1.7, p. 32), #30 (1.8, p. 36), #31 (1.8, p. 36), #32 (1.8, p. 36), #37 (1.9, p. 41), #38 (1.9, p. 42), #42 (2.1, p. 51), #43 (2.1, p. 52), #44 (2.1, p. 52), #48 (2.2, p. 56), #49 (2.2, p. 57), #50 (2.2, p. 57), #53 (2.3, p. 62), #56 (2.4, p. 65), #57 (2.4, p. 65), #60 (2.5, p. 70), #61 (2.5, p. 72), #65 (2.6, p. 77), #66 (2.6, p. 78), #67 (2.6, p. 78), #71 (3.1, p. 87), #74 (3.3, p. 97), #75 (3.3, p. 96), #78 (3.5, p. 106), #79 (3.5, p. 106), #83 (3.6, p. 110), #84 (3.6, p. 112), #85 (3.6, p. 112), #90 (4.3, p. 127), #93 (4.4, p. 132), #94 (4.4, p. 132), #97 (4.5, p. 138), #98 (4.5, p. 139), #102 (4.6, p. 142), #103 (4.6, p. 143), #104 (4.6, p. 143), #108 (4.7, p. 147), #109 (4.7, p. 147), #114 (5.3, p. 166), #115 (5.3, p. 167), #117 (5.4, p. 172), #122 (5.6, p. 180), #123 (5.6, p. 180), #127 (5.9, p. 193), #129 (5.10, p. 197)

## Tomo 02 · Infectología

80 fotos · 56 OK · 16 repetidas · 8 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 61 | 5.2 | 91 | TAC cerebral neonatal | No muestra lo que dice el pie | recorte de TAC en el que no se ven las calcificaciones que dice el pie |
| 21 | 3.3C | 47 | Escrófula | Ilegible al tamaño impreso | foto desenfocada: no se ve la adenopatía; hay una mejor en la biblioteca (escrofula_alt1, CTO p. 69) |
| 22 | 3.3 | 46 | Baciloscopía con tinción de Ziehl-Neelsen | Ilegible al tamaño impreso | baciloscopía borrosa; hay una nítida en la biblioteca (_web/164 Ziehl-Neelsen) |
| 74 | 5.5B | 104 | Signo del halo | Ilegible al tamaño impreso | no se distingue el halo alrededor del nódulo |
| 35 | 4.2C | 66 | ECG: BCRD + HBAI | Rótulos o pie en inglés | rótulo «RBBB & LAH» |
| 13 | 2.4B | 32 | Botulismo del lactante | Menor con el torso o el cuerpo desnudo | lactante con el torso desnudo |
| 63 | 5.3B | 97 | Sarampión | Menor con el torso o el cuerpo desnudo | niño con el torso desnudo |
| 24 | 3.4B | 51 | Sífilis secundaria | Dudosa (se puede mejorar) | colores saturados, poco natural; hay alternativa (sifilis-secundaria alt1, CTO p. 99) |

Repetidas (la misma foto sale dos veces en el tomo): #9 (1.4, p. 16), #14 (2.4, p. 32), #15 (2.4, p. 32), #28 (3.5, p. 51), #30 (3.5, p. 54), #36 (4.2, p. 65), #45 (4.5, p. 77), #49 (4.6, p. 80), #50 (4.6, p. 80), #55 (5.1, p. 88), #60 (5.2, p. 91), #72 (5.4, p. 100), #73 (5.5, p. 80), #76 (5.5, p. 80), #77 (5.5, p. 104), #78 (5.5, p. 104)

## Tomo 03 · Gastroenterología

119 fotos · 91 OK · 18 repetidas · 10 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 75 | 3.4 | 69 | Metástasis hepáticas múltiples en TC | No muestra lo que dice el pie | PET-CT que no muestra metástasis hepáticas (las captaciones son renales/intestinales) |
| 1 | 1.1B | 7 | Esofagitis (endoscopia) | Ilegible al tamaño impreso | endoscopía borrosa; ya está la #0 nítida |
| 21 | 1.5 | 21 | Cáncer gástrico incipiente | Ilegible al tamaño impreso | endoscopía sobreexpuesta: no se ve la lesión |
| 116 | 6.4 | 114 | Contusión pulmonar en Rx/TC de tórax | Ilegible al tamaño impreso | lámina de 3 cortes demasiado pequeña |
| 118 | 6.4 | 114 | Derrame pericárdico (eco) | Rótulos o pie en inglés | rótulos «pericardial fluid», «RA», «LV», «LA» |
| 55 | 2.6 | 51 | Absceso perianal | Menor con el torso o el cuerpo desnudo | región perianal de un lactante |
| 12 | 1.4A | 18 | Neumoperitoneo | Dudosa (se puede mejorar) | Rx de tórax virada a verde: el aire bajo el diafragma casi no se ve |
| 15 | 1.4 | 17 | Síndrome de Boerhaave | Dudosa (se puede mejorar) | no se distingue el aire mediastínico |
| 49 | 2.5 | 47 | Cáncer colorrectal en colonoscopía o enema baritado con imag | Dudosa (se puede mejorar) | enema poco legible: no se reconoce la «manzana mordida» |
| 90 | 5.2 | 90 | Angio-TAC con defecto de llene | Dudosa (se puede mejorar) | no se distingue el defecto de llene en la AMS |

Repetidas (la misma foto sale dos veces en el tomo): #10 (1.3, p. 14), #16 (1.4, p. 17), #17 (1.4, p. 17), #22 (1.5, p. 14), #23 (1.5, p. 21), #33 (2.2, p. 34), #34 (2.2, p. 34), #35 (2.2, p. 34), #56 (2.6, p. 51), #63 (3.1, p. 59), #91 (5.3, p. 66), #93 (5.3, p. 11), #94 (5.3, p. 17), #95 (5.3, p. 66), #99 (5.4, p. 97), #102 (6.1, p. 34), #103 (6.1, p. 34), #114 (6.4, p. 18)

## Tomo 04 · Respiratorio

69 fotos · 44 OK · 14 repetidas · 11 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 7 | 1.4 | 16 | TC de tórax con enfisema centrolobulillar y bullas | No muestra lo que dice el pie | el pie dice TC con enfisema y bulas, pero es una Rx de tórax sin bulas visibles |
| 14 | 2.4 | 39 | Quiste hidatídico pulmonar complicado | No muestra lo que dice el pie | el pie dice quiste hidatídico complicado (camalote) y es una Rx con infiltrado difuso, sin quiste |
| 24 | 3.2 | 55 | Ecografía pleural con derrame tabicado | No muestra lo que dice el pie | el pie dice ecografía con derrame tabicado y es una Rx de tórax |
| 28 | 3.4 | 62 | Tórax volante | Ilegible al tamaño impreso | no se distinguen las fracturas costales del tórax volante |
| 29 | 3.5A | 66 | Derrame neoplásico masivo | Ilegible al tamaño impreso | lámina de 4 paneles; no se ve el derrame masivo que dice el pie |
| 39 | 4.1 | 74 | PET-CT con nódulo pulmonar hipercaptante | Ilegible al tamaño impreso | lámina de 4 paneles pequeña y desvaída |
| 63 | 5.3A | 106 | Polisomnografía real | Ilegible al tamaño impreso | registro de polisomnografía con canales ilegibles al tamaño impreso |
| 1 | 1.2 | 11 | Técnica inhalatoria | Rótulos o pie en inglés | rótulo «Using a Spacer» |
| 55 | 4.4 | — | Ecocardiograma con ventrículo derecho dilatado | Rótulos o pie en inglés | rótulos «RV», «LV» |
| 36 | 4.1 | 74 | TC con nódulo pulmonar espiculado < 3 cm bien visible | Dudosa (se puede mejorar) | recorte pequeño; el nódulo espiculado se ve chico |
| 43 | 4.2 | 78 | Síndrome de vena cava superior | Dudosa (se puede mejorar) | el pie dice vena cava superior y es una flebografía poco legible |

Repetidas (la misma foto sale dos veces en el tomo): #3 (1.3, p. 11), #4 (1.3, p. 11), #18 (2.5, p. 42), #21 (3.1, p. 51), #27 (3.4, p. 52), #31 (3.5, p. 66), #32 (3.5, p. 66), #37 (4.1, p. 74), #38 (4.1, p. 74), #45 (4.3, p. 79), #54 (4.4, p. 86), #58 (4.5, p. 91), #62 (5.2, p. 103), #68 (5.5, p. 112)

## Tomo 05 · Nefrología

43 fotos · 24 OK · 13 repetidas · 6 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 0 | 1.1A | 6 | Hidronefrosis (ecografía) | Rótulos o pie en inglés | rótulo «LT Kidney» (menor) |
| 17 | 4.3A | 58 | Tira de orina | Sin hallazgo que mirar | tira de orina sin leer: no muestra hematuria ni proteinuria |
| 2 | 1.1C | 6 | Hematíes dismórficos | Dudosa (se puede mejorar) | hematíes poco nítidos; el dismorfismo cuesta verlo |
| 12 | 4.1B | 51 | Edema facial y palpebral | Dudosa (se puede mejorar) | foto antigua de un niño de cuerpo entero: el edema facial casi no se aprecia |
| 15 | 4.2 | 54 | Glomérulo con depósitos | Dudosa (se puede mejorar) | el pie dice membranosa (depósitos), pero es tinción de plata sin spikes evidentes |
| 32 | 5.2 | 79 | Osteodistrofia renal | Dudosa (se puede mejorar) | Rx de columna: la «camiseta de rugby» no se aprecia con claridad |

Repetidas (la misma foto sale dos veces en el tomo): #7 (2.1, p. 22), #14 (4.1, p. 51), #16 (4.2, p. 54), #22 (4.4, p. 61), #24 (4.4, p. 61), #25 (4.4, p. 61), #28 (5.1, p. 75), #31 (5.2, p. 79), #36 (5.3, p. 82), #37 (5.3, p. 82), #39 (5.4, p. 11), #40 (5.4, p. 11), #41 (5.4, p. 6)

## Tomo 06 · Diabetes Mellitus & Dislipidemias

36 fotos · 22 OK · 12 repetidas · 2 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 16 | 5.2C | 87 | Exudados algodonosos | Rótulos o pie en inglés | rótulos «cotton wool spots», «hemorrhages» |
| 33 | 5.5 | 102 | Arco corneal | Dudosa (se puede mejorar) | el arco corneal casi no se distingue en esta foto |

Repetidas (la misma foto sale dos veces en el tomo): #1 (1.1, p. 6), #4 (2.3, p. 32), #6 (3.1, p. 43), #7 (3.2, p. 43), #8 (3.2, p. 43), #11 (4.3, p. 69), #13 (5.1, p. 84), #17 (5.2, p. 87), #18 (5.2, p. 87), #23 (5.3, p. 92), #26 (5.3, p. 92), #32 (5.5, p. 99)

## Tomo 07 · Endocrinología & Metabolismo

73 fotos · 52 OK · 17 repetidas · 4 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 13 | 7.6C | 28 | Oftalmopatía | No muestra lo que dice el pie | el pie dice oftalmopatía y la foto es piel (parece mixedema pretibial) |
| 47 | 7.16 | 76 | Gammagrafía con sestamibi-Tc99m mostrando adenoma paratiroid | Ilegible al tamaño impreso | cintigrama sestamibi de 4 paneles, muy poco legible |
| 44 | 7.16B | 75 | QT y calcio | Rótulos o pie en inglés | rótulos «Normal calcium level», «Hypercalcemia», «Hypocalcemia» |
| 57 | 7.19A | 87 | Rosario raquítico | Dudosa (se puede mejorar) | acercamiento de piel de un niño: no se reconoce el rosario raquítico |

Repetidas (la misma foto sale dos veces en el tomo): #8 (1.5, p. 20), #9 (1.5, p. 20), #14 (7.6, p. 20), #23 (7.9, p. 41), #26 (7.10, p. 41), #27 (7.10, p. 41), #36 (7.13, p. 59), #38 (7.14, p. 64), #42 (7.15, p. 67), #46 (7.16, p. 75), #50 (7.17, p. 75), #54 (7.18, p. 82), #60 (7.19, p. 86), #64 (7.20, p. 93), #65 (7.21, p. 94), #70 (7.24, p. 106), #72 (7.25, p. 110)

## Tomo 08 · Hematología & Hemostasia

86 fotos · 52 OK · 28 repetidas · 6 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 0 | 8.1A | 5 | Reticulocitos teñidos | No muestra lo que dice el pie | el pie dice reticulocitos teñidos, pero es un frotis con tinción habitual: no se ven reticulocitos (sin azul de metileno) |
| 56 | 8.17 | 86 | Esplenomegalia masiva | No muestra lo que dice el pie | el pie dice esplenomegalia masiva; es una lámina con citometría y gráficos en inglés («WCC», «Death», «Diagnosis») |
| 37 | 8.11 | 56 | Hemartrosis aguda de rodilla en niño con hemofilia | Ilegible al tamaño impreso | Rx de rodilla borrosa y oscura: no se ve la hemartrosis |
| 42 | 8.13B | 64 | Hematoma del psoas | Ilegible al tamaño impreso | lámina de 3 imágenes muy pequeña |
| 60 | 8.18C | 90 | MALT gástrico | Rótulos o pie en inglés | sobreimpresos del endoscopio («Name», «Sex», «Physician») |
| 41 | 8.13A | 65 | Artropatía hemofílica | Dudosa (se puede mejorar) | dibujo histórico de una pieza: no es la artropatía que se ve en la práctica |

Repetidas (la misma foto sale dos veces en el tomo): #3 (8.1, p. 5), #7 (8.3, p. 12), #15 (8.6, p. 28), #20 (8.7, p. 33), #21 (8.8, p. 6), #29 (8.9, p. 43), #31 (8.10, p. 22), #34 (8.10, p. 47), #36 (8.11, p. 22), #39 (8.12, p. 22), #40 (8.12, p. 59), #43 (8.13, p. 56), #44 (8.13, p. 64), #46 (8.15, p. 49), #47 (8.15, p. 47), #48 (8.15, p. 47), #52 (8.16, p. 80), #57 (8.17, p. 85), #61 (8.18, p. 90), #62 (8.18, p. 90), #70 (8.20, p. 86), #71 (8.20, p. 99), #72 (8.20, p. 99), #74 (8.20, p. 100), #78 (8.22, p. 111), #81 (8.23, p. 116), #82 (8.23, p. 116), #85 (8.24, p. 119)

## Tomo 09 · Reumatología

93 fotos · 67 OK · 19 repetidas · 7 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 37 | 9.12 | 62 | Rx de manos con calcinosis subcutánea y acroosteólisis de fa | No muestra lo que dice el pie | el pie dice Rx de manos con calcinosis y acroosteólisis; es una lámina de fotos clínicas (manos y cara), no una radiografía |
| 61 | 9.17 | 89 | Rx comparativa de columna | Ilegible al tamaño impreso | Rx de columna muy desvaída |
| 69 | 9.19 | 98 | Gonococcemia diseminada | Ilegible al tamaño impreso | lámina de 6 fotos diminutas |
| 73 | 9.20C | 103 | Prueba de patergia | Ilegible al tamaño impreso | tres fotos de antebrazo diminutas: no se ve la pápula |
| 75 | 9.20 | 102 | Úlcera genital | Ilegible al tamaño impreso | dos fotos pequeñas y oscuras de la úlcera genital |
| 8 | 9.3B | 14 | Rx de gota crónica | Rótulos o pie en inglés | pie de figura en inglés dentro de la imagen («FIG 6.23 Gout. Sharply marginated erosions…») |
| 55 | 9.16A | 86 | Sacroilitis en la Rx | Dudosa (se puede mejorar) | Rx de pelvis pequeña: la sacroileítis cuesta verla |

Repetidas (la misma foto sale dos veces en el tomo): #5 (9.2, p. 10), #6 (9.2, p. 10), #10 (9.3, p. 14), #16 (9.5, p. 23), #25 (9.8, p. 39), #26 (9.8, p. 39), #38 (9.12, p. 63), #39 (9.12, p. 64), #47 (9.14, p. 63), #52 (9.15, p. 77), #53 (9.15, p. 77), #54 (9.15, p. 77), #57 (9.17, p. 86), #72 (9.20, p. 92), #74 (9.20, p. 92), #79 (9.21, p. 111), #80 (9.21, p. 110), #84 (9.22, p. 115), #85 (9.22, p. 117)

## Tomo 10 · Neurología y Geriatría

92 fotos · 59 OK · 21 repetidas · 12 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 8 | 10.2 | 13 | Eco-Doppler carotídeo con estenosis significativa de carótid | No muestra lo que dice el pie | el pie dice eco-Doppler carotídeo con estenosis; es una angiografía antigua rotulada en inglés («EC», «IC», «CC») |
| 1 | 10.1B | 7 | Infarto establecido | Ilegible al tamaño impreso | lámina de 7 cortes diminutos con siglas («ACA», «PICA») |
| 9 | 10.2 | 13 | ECG con fibrilación auricular | Ilegible al tamaño impreso | ECG pequeño, no se ve la FA |
| 31 | 10.8A | 51 | Punta onda a tres hertz | Ilegible al tamaño impreso | EEG con canales ilegibles |
| 65 | 10.18 | 114 | RM medular de neuromielitis óptica | Ilegible al tamaño impreso | lámina de 6 cortes diminutos |
| 15 | 10.3 | 21 | Hematoma cerebeloso en TC | Rótulos o pie en inglés | pie en inglés dentro de la imagen («FIGURE 1. Cerebellar hemorrhage») |
| 30 | 10.7B | 47 | V1, V2 y V3 | Rótulos o pie en inglés | rótulos «Ophthalmic», «Maxillary», «Mandibular» |
| 55 | 10.15B | 92 | Demencia frontotemporal | Rótulos o pie en inglés | rótulos «Behavioral variant FTD», «Semantic variant PPA»… |
| 73 | 10.20A | 122 | Registro impulso cefálico | Rótulos o pie en inglés | registro con rótulos «Impulse Right», «Head», «Eye» |
| 69 | 10.19 | 118 | Síndrome del túnel carpiano | Menor con el torso o el cuerpo desnudo | adolescente con el torso desnudo (maniobra de Phalen) |
| 6 | 10.2 | 12 | RM con difusión | Dudosa (se puede mejorar) | lámina de 4 paneles con mapa de perfusión; poco legible |
| 72 | 10.19 | 119 | Mano caída por lesión del nervio radial | Dudosa (se puede mejorar) | número de figura de otro libro impreso («9.136») |

Repetidas (la misma foto sale dos veces en el tomo): #7 (10.2, p. 12), #10 (10.2, p. 12), #14 (10.3, p. 17), #19 (10.4, p. 24), #22 (10.4, p. 24), #28 (10.6, p. 33), #34 (10.8, p. 51), #36 (10.10, p. 61), #41 (10.12, p. 74), #42 (10.12, p. 75), #47 (10.13, p. 78), #51 (10.14, p. 82), #52 (10.14, p. 28), #54 (10.15, p. 75), #56 (10.15, p. 75), #57 (10.15, p. 75), #64 (10.18, p. 110), #76 (10.20, p. 122), #80 (10.22, p. 139), #81 (10.22, p. 140), #89 (10.25, p. 152)

## Tomo 11 · Cirugía General y Anestesia

87 fotos · 56 OK · 17 repetidas · 14 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 55 | 11.11C | 78 | Ventanas del FAST | No muestra lo que dice el pie | el pie dice ventanas del FAST, pero el dibujo es un torso de hombre con sondas sin rótulos |
| 14 | 11.4A | 24 | Niveles hidroaéreos | Ilegible al tamaño impreso | Rx de abdomen de pie desvaída |
| 7 | 11.2 | 12 | Cintigrafía HIDA con vesícula que no se llena | Rótulos o pie en inglés | cintigrafía con texto en inglés («PRETREATED WITH DOUBLE DOSE OF CCK») |
| 46 | 11.9B | 66 | Dónde se corta | Rótulos o pie en inglés | rótulos y pie en inglés («Cricothyroid muscle», «FIGURE 1. Anatomy of the neck…») |
| 51 | 11.10C | 72 | Movimiento paradójico | Rótulos o pie en inglés | rótulos «Inspiration», «Expiration» |
| 62 | 11.13A | 89 | Espesor parcial superficial | Rótulos o pie en inglés | rótulos «Epidermis», «Superficial partial-thickness…», «Blistering, Painful» |
| 63 | 11.13B | 89 | Espesor parcial profundo | Rótulos o pie en inglés | rótulos «Deep partial-thickness…», «Does not blanch» |
| 85 | 11.21 | 120 | Onicectomía parcial | Rótulos o pie en inglés | rótulos «Clean toe», «Digital block», «Nail cut»… |
| 67 | 11.13 | 91 | Cicatriz hipertrófica tras una quemadura dérmica profunda | Menor con el torso o el cuerpo desnudo | niño con el torso desnudo |
| 80 | 11.18B | 116 | Mordedura de perro | Menor con el torso o el cuerpo desnudo | niño pequeño con herida facial y torso desnudo |
| 3 | 11.1 | 6 | Ecografía de apendicitis aguda | Dudosa (se puede mejorar) | ecografía con poco contraste: el apéndice cuesta verlo |
| 13 | 11.3 | 16 | TAC de diverticulitis perforada con aire libre y líquido | Dudosa (se puede mejorar) | el pie dice aire libre; no se distingue en el corte |
| 19 | 11.5 | 29 | Neumoperitoneo | Dudosa (se puede mejorar) | Rx de tórax virada a verde; aire subdiafragmático poco visible |
| 66 | 11.13 | 91 | Quemadura de vía aérea | Dudosa (se puede mejorar) | foto muy cruda de quemadura facial con intubación |

Repetidas (la misma foto sale dos veces en el tomo): #11 (11.3, p. 16), #12 (11.3, p. 16), #24 (11.6, p. 35), #29 (11.7, p. 40), #40 (11.19, p. 51), #41 (11.19, p. 49), #42 (11.19, p. 49), #48 (11.9, p. 66), #56 (11.11, p. 76), #57 (11.11, p. 76), #71 (11.16, p. 106), #72 (11.16, p. 106), #73 (11.16, p. 106), #78 (11.17, p. 110), #82 (11.18, p. 115), #84 (11.18, p. 115), #86 (11.21, p. 120)

## Tomo 12 · Traumatología y Ortopedia

91 fotos · 59 OK · 19 repetidas · 13 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 40 | 12.7 | 44 | Rx de fractura de Maisonneuve | No muestra lo que dice el pie | el pie dice Maisonneuve, pero es una Rx lateral de rodilla sin la fractura de peroné proximal |
| 17 | 12.4A | 23 | Hombro sin contorno redondo | Rótulos o pie en inglés | pie en inglés dentro de la imagen («FIGURE 1. Loss of rounded appearance…») |
| 18 | 12.4B | 23 | Luxación anterior en la Rx | Rótulos o pie en inglés | pie en inglés dentro de la imagen («FIGURE 2. AP radiograph») |
| 24 | 12.4 | 23 | Fractura supracondílea, Rx de codo | Rótulos o pie en inglés | pie en inglés («FIGURE 1. Normal anterior humeral line…») |
| 37 | 12.7C | 44 | Maisonneuve | Rótulos o pie en inglés | pie en inglés («FIGURE 1. Medial malleolar fracture…») |
| 39 | 12.7 | 44 | Rx de fractura por avulsión de la base del quinto metatarsia | Rótulos o pie en inglés | lámina con rótulos en inglés («Proximal fractures of the 5th metatarsal»…) |
| 55 | 12.10A | 59 | Luxación posterior de cadera | Rótulos o pie en inglés | pie en inglés («FIGURE 1. Right posterior hip dislocation») |
| 81 | 12.14 | 83 | Líneas de Klein sobre el cuello femoral: en la cadera anorma | Rótulos o pie en inglés | rótulos «Abnormal/Normal Klein's Line» |
| 79 | 12.14 | 82 | Test de Adams | Menor con el torso o el cuerpo desnudo | adolescente en ropa interior (test de Adams) |
| 82 | 12.14 | 82 | Sinovitis transitoria de la cadera izquierda: cadera flexion | Menor con el torso o el cuerpo desnudo | niña pequeña en ropa interior |
| 29 | 12.5C | 32 | Pelvis atada con una sábana | Genitales expuestos sin necesidad | paciente con genitales expuestos en la foto de la sábana pélvica |
| 14 | 12.3 | 16 | Distrofia simpático refleja | Dudosa (se puede mejorar) | Rx antigua de mano poco legible |
| 68 | 12.12 | 73 | Artritis séptica de rodilla | Dudosa (se puede mejorar) | foto antigua: no se ve claramente el derrame de la rodilla |

Repetidas (la misma foto sale dos veces en el tomo): #7 (12.1, p. 7), #10 (12.2, p. 11), #16 (12.3, p. 16), #23 (12.4, p. 23), #25 (12.4, p. 23), #26 (12.4, p. 23), #30 (12.5, p. 31), #33 (12.6, p. 36), #34 (12.6, p. 36), #41 (12.7, p. 45), #43 (12.7, p. 44), #44 (12.7, p. 44), #51 (12.8, p. 49), #59 (12.10, p. 59), #60 (12.10, p. 59), #67 (12.12, p. 72), #70 (12.12, p. 72), #84 (12.14, p. 82), #90 (12.15, p. 88)

## Tomo 13 · Urología

50 fotos · 29 OK · 11 repetidas · 10 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 36 | 13.10C | 56 | Balas de cañón | No muestra lo que dice el pie | el pie dice «balas de cañón» pero es un recorte de Rx que no muestra los nódulos |
| 37 | 13.10 | 58 | Rx de tórax legible con metástasis pulmonares en "bala de ca | No muestra lo que dice el pie | el pie dice Rx de tórax y es un corte de TAC |
| 3 | 13.1 | 10 | Nefrostomía percutánea | Ilegible al tamaño impreso | lámina de 3 paneles pequeños |
| 12 | 13.3C | 17 | Lóbulo medio en la vejiga | Ilegible al tamaño impreso | RM borrosa: no se reconoce el lóbulo medio |
| 1 | 13.1B | 8 | Ecografía: hidronefrosis | Rótulos o pie en inglés | rótulo «LT Kidney» (menor) |
| 4 | 13.2A | 13 | Ecografía: gran residuo | Rótulos o pie en inglés | sobreimpreso «POST MICT LONG» |
| 28 | 13.8A | 48 | Eco transrectal normal | Rótulos o pie en inglés | siglas TZ/PZ (menor) |
| 29 | 13.8B | 47 | RM con lesión periférica | Rótulos o pie en inglés | sobreimpresos «DCE», «GE Medical Systems» |
| 15 | 13.5C | 27 | Doppler sin flujo arterial | Sin hallazgo que mirar | pantalla de Doppler casi vacía: se ve poco el testículo |
| 44 | 13.12B | 64 | Cáncer que invade la pared | Dudosa (se puede mejorar) | RM pélvica: la invasión de la pared vesical es difícil de ver |

Repetidas (la misma foto sale dos veces en el tomo): #7 (13.2, p. 13), #8 (13.2, p. 13), #9 (13.2, p. 13), #16 (13.5, p. 27), #17 (13.5, p. 26), #20 (13.6, p. 31), #21 (13.6, p. 31), #25 (13.7, p. 34), #31 (13.8, p. 47), #41 (13.11, p. 60), #42 (13.11, p. 60)

## Tomo 14 · Otorrinolaringología

68 fotos · 45 OK · 14 repetidas · 9 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 12 | 14.3 | 16 | Mucormicosis en una mujer con diabetes: proptosis, edema fac | No muestra lo que dice el pie | foto de mucormicosis (orbitaria) en el tema de otitis externa: no corresponde al tema |
| 24 | 14.8 | 38 | Herpes zóster en un dermatoma lumbar | No muestra lo que dice el pie | herpes zóster lumbar en el tema de parálisis facial: no muestra el Ramsay Hunt |
| 6 | 14.2 | 10 | Colesteatoma congénito: TAC axial de oído izquierdo con masa | Ilegible al tamaño impreso | TAC de peñasco ampliada y borrosa |
| 10 | 14.3 | 16 | Otitis externa maligna: granulación en el conducto auditivo | Ilegible al tamaño impreso | dos otoscopías pequeñas y oscuras |
| 38 | 14.14B | 73 | Rx y TC: prevertebral ancho | Ilegible al tamaño impreso | Rx y TC pequeñas; el espacio prevertebral no se aprecia |
| 39 | 14.14C | 73 | TC: absceso parafaríngeo | Ilegible al tamaño impreso | tres cortes de TC diminutos |
| 52 | 14.17A | 86 | Estrechamiento subglótico | Ilegible al tamaño impreso | Rx de cuello borrosa: no se ve el signo del campanario |
| 18 | 14.6A | 30 | Schwannoma vestibular en RM | Rótulos o pie en inglés | rótulos [HP], [R], [L], [FA] (menor) |
| 56 | 14.17 | 88 | Laringomalacia: en la inspiración los repliegues de la epigl | Dudosa (se puede mejorar) | laringoscopía en negativo, poco legible |

Repetidas (la misma foto sale dos veces en el tomo): #11 (14.3, p. 15), #15 (14.4, p. 19), #16 (14.4, p. 19), #32 (14.12, p. 58), #33 (14.12, p. 58), #40 (14.14, p. 72), #41 (14.14, p. 73), #42 (14.14, p. 73), #45 (14.15, p. 77), #46 (14.15, p. 77), #50 (14.16, p. 81), #55 (14.17, p. 86), #60 (14.18, p. 94), #67 (14.20, p. 102)

## Tomo 15 · Oftalmología

74 fotos · 51 OK · 15 repetidas · 8 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 56 | 15.14A | 73 | Drusas | No muestra lo que dice el pie | el pie dice drusas y la foto es un fondo de ojo casi normal: no se ven drusas claras |
| 69 | 15.17 | 90 | Trombosis séptica del seno cavernoso | No muestra lo que dice el pie | el pie dice trombosis del seno cavernoso y es el mismo tipo de TAC orbitario de celulitis |
| 2 | 15.1C | 7 | Uveítis anterior aguda | Ilegible al tamaño impreso | lámina de 6 fotos pequeñas con números de figura de otro libro («3.56»…) |
| 28 | 15.7A | — | Pérdida progresiva del campo | Ilegible al tamaño impreso | campos visuales en negro diminutos |
| 30 | 15.7C | 39 | OCT de fibras nerviosas | Rótulos o pie en inglés | informe de OCT en inglés («RNFL Circular Thickness», «Disc Topography») |
| 7 | 15.2A | 12 | Bacteriana | Dudosa (se puede mejorar) | colores saturados: poco natural |
| 46 | 15.11A | 60 | Mancha rojo cereza | Dudosa (se puede mejorar) | la mancha rojo cereza cuesta verla |
| 73 | 15.18 | 94 | RM de órbita con gadolinio | Dudosa (se puede mejorar) | RM antigua de órbita poco legible |

Repetidas (la misma foto sale dos veces en el tomo): #4 (15.1, p. 7), #8 (15.2, p. 8), #10 (15.2, p. 11), #14 (15.3, p. 15), #19 (15.4, p. 8), #24 (15.5, p. 24), #27 (15.6, p. 32), #35 (15.8, p. 42), #39 (15.9, p. 47), #41 (15.9, p. 47), #45 (15.10, p. 55), #52 (15.12, p. 63), #55 (15.13, p. 68), #62 (15.15, p. 80), #65 (15.16, p. 86)

## Tomo 16 · Dermatología

85 fotos · 64 OK · 13 repetidas · 8 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 51 | 16.12 | 62 | Herpes zóster diseminado: lesiones en distintas etapas de ev | No muestra lo que dice el pie | el pie dice herpes zóster diseminado y se ve una sola costra con algunas pápulas |
| 60 | 16.13 | 70 | Melanoma nodular | Rótulos o pie en inglés | rótulo «After One Year» |
| 72 | 16.16 | 83 | Surco acarino interdigital con vesícula perlada | Rótulos o pie en inglés | lámina con números de otro libro y esquema corporal rotulado en inglés («Common sites», «Burrows») |
| 21 | 16.6A | 31 | Lactante | Menor con el torso o el cuerpo desnudo | lactante con el torso desnudo |
| 26 | 16.7B | 34 | Seborreica del lactante | Menor con el torso o el cuerpo desnudo | tronco desnudo de un lactante (costra láctea) |
| 42 | 16.11A | 55 | Nikolsky positivo | Menor con el torso o el cuerpo desnudo | recién nacido desnudo (Nikolsky) |
| 55 | 16.13A | 71 | Nevo congénito grande | Menor con el torso o el cuerpo desnudo | lactante desnudo (nevo congénito) |
| 12 | 16.4A | 18 | Escala de Hamilton | Dudosa (se puede mejorar) | caricatura de tres cabezas: la escala de Hamilton no se entiende sin grados |

Repetidas (la misma foto sale dos veces en el tomo): #3 (16.1, p. 5), #8 (16.2, p. 9), #28 (16.7, p. 34), #29 (16.7, p. 34), #36 (16.9, p. 46), #40 (16.10, p. 6), #45 (16.11, p. 55), #46 (16.11, p. 55), #52 (16.12, p. 61), #59 (16.13, p. 71), #67 (16.15, p. 79), #73 (16.16, p. 83), #81 (16.17, p. 88)

## Tomo 17 · Psiquiatría y Salud Mental

2 fotos · 1 OK · 1 repetidas · 0 con problema


Repetidas (la misma foto sale dos veces en el tomo): #1 (17.10, p. 45)

## Tomo 18 · Pediatría y Neonatología

84 fotos · 50 OK · 13 repetidas · 21 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 48 | 18.10 | 78 | Manchas de Koplik en la mucosa yugal (sarampión) | No muestra lo que dice el pie | el pie dice manchas de Koplik y es un recorte borroso: no se distinguen |
| 49 | 18.11 | 81 | Pliegue persistente | No muestra lo que dice el pie | pliegue en una mano de adulto en el tomo de pediatría (deshidratación infantil) |
| 15 | 18.28C | 29 | Fractura metafisaria | Ilegible al tamaño impreso | tres Rx pequeñas: no se ve la fractura metafisaria |
| 37 | 18.23 | 57 | ECG normal de un lactante de 5 días: eje desviado a la derec | Ilegible al tamaño impreso | ECG en negativo con canales pequeños |
| 38 | 18.23 | 57 | ECG normal de un niño de 3 años: eje de 60° y relación R/S m | Ilegible al tamaño impreso | ECG en negativo, ilegible |
| 65 | 18.16A | 116 | Test de Capurro | Ilegible al tamaño impreso | tabla de Capurro con texto diminuto |
| 76 | 18.21C | — | Tarjeta de papel filtro | Ilegible al tamaño impreso | tarjeta de papel filtro con texto ilegible |
| 2 | 18.4A | — | Incorrecto vs correcto | Rótulos o pie en inglés | rótulos «Incorrect Latch-On», «Correct Latch-On» |
| 30 | 18.7 | 47 | Radiografía de tórax pediátrica con consolidación lobar y br | Rótulos o pie en inglés | pie en inglés («FIGURE 1. Right lower lobe pneumonia…») |
| 32 | 18.8B | 53 | Lactante | Rótulos o pie en inglés | rótulos «Back Blows», «Chest Thrusts» |
| 33 | 18.8C | — | Niño y adulto | Rótulos o pie en inglés | rótulos «Heimlich with Adult/Child» |
| 5 | 18.4 | 19 | Melanocitosis dérmica extensa (mancha mongólica) en el dorso | Menor con el torso o el cuerpo desnudo | espalda desnuda de un niño (mancha mongólica) |
| 8 | 18.26A | 23 | Facies típica | Menor con el torso o el cuerpo desnudo | recién nacido con el torso desnudo |
| 10 | 18.26C | 24 | Piel laxa de la nuca | Menor con el torso o el cuerpo desnudo | recién nacido desnudo |
| 11 | 18.26 | 23 | Recién nacido con síndrome de Down: hipotonía en la suspensi | Menor con el torso o el cuerpo desnudo | recién nacido desnudo |
| 19 | 18.5A | 38 | Dificultad respiratoria | Menor con el torso o el cuerpo desnudo | lactante con el torso desnudo |
| 42 | 18.10A | 77 | Exantema súbito | Menor con el torso o el cuerpo desnudo | torso desnudo de un lactante (exantema súbito) |
| 46 | 18.10 | 75 | Escarlatina | Menor con el torso o el cuerpo desnudo | niño con el torso desnudo (escarlatina) |
| 80 | 18.22 | 141 | Lactante con arnés de Pavlik colocado | Menor con el torso o el cuerpo desnudo | lactante desnudo con arnés (aceptable clínicamente) |
| 4 | 18.4C | 20 | Succión efectiva | Dudosa (se puede mejorar) | escaneo antiguo con texto de fondo transparentado |
| 62 | 18.15A | 110 | Algoritmo de reanimación | Dudosa (se puede mejorar) | el pie dice algoritmo de reanimación y es una foto de un maniquí |

Repetidas (la misma foto sale dos veces en el tomo): #12 (18.26, p. 23), #17 (18.28, p. 27), #18 (18.28, p. 27), #24 (18.6, p. 43), #29 (18.7, p. 47), #39 (18.23, p. 56), #40 (18.23, p. 56), #55 (18.12, p. 85), #60 (18.13, p. 90), #64 (18.15, p. 110), #67 (18.16, p. 115), #70 (18.17, p. 119), #83 (18.22, p. 140)

## Tomo 19 · Obstetricia y Medicina Materno-Fetal

54 fotos · 29 OK · 11 repetidas · 14 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 1 | 19.2B | 9 | Translucencia nucal normal | Ilegible al tamaño impreso | corte borroso: no se ve la translucencia nucal |
| 3 | 19.3A | 12 | Registro cardiotocográfico | Ilegible al tamaño impreso | registro de CTG fotografiado, poco legible |
| 10 | 19.4 | 16 | Doppler de ductus venoso con onda a reversa | Ilegible al tamaño impreso | tres trazados Doppler sin rótulos |
| 46 | 19.18C | 96 | Inversión uterina | Ilegible al tamaño impreso | imagen borrosa: no se reconoce la inversión uterina |
| 51 | 19.20B | 104 | Hidrops fetal | Ilegible al tamaño impreso | ecografía en negativo poco legible |
| 13 | 19.7 | 32 | Grasa subcutánea aumentada | Rótulos o pie en inglés | rótulos «Spine», «Stomach» |
| 15 | 19.21A | 44 | Corionicidad y amnionicidad | Rótulos o pie en inglés | esquema en inglés («Dizygotic twinning», «Monozygotic twinning»…) |
| 20 | 19.21 | 43 | Transfusión feto-fetal en ecografía: receptor con polihidram | Rótulos o pie en inglés | rótulos «Recipient», «Donor» |
| 31 | 19.13A | 65 | Eco transvaginal | Rótulos o pie en inglés | rótulos «Internal Os», «Cervix», «Placenta» |
| 49 | 19.19B | 101 | Clínica y ecografía | Rótulos o pie en inglés | rótulo «Right Breast» |
| 2 | 19.2C | 9 | Translucencia aumentada | Dudosa (se puede mejorar) | no se distingue la translucencia aumentada |
| 23 | 19.10C | 51 | Embrión y restos expulsados | Dudosa (se puede mejorar) | foto de un embrión expulsado: imagen sensible |
| 27 | 19.11C | 56 | Útero vacío y beta-hCG | Dudosa (se puede mejorar) | esquema/diapositiva escaneada de baja calidad |
| 37 | 19.15 | 82 | Cervicometría | Dudosa (se puede mejorar) | cervicometría sin medición marcada |

Repetidas (la misma foto sale dos veces en el tomo): #9 (19.4, p. 16), #12 (19.4, p. 15), #14 (19.7, p. 32), #18 (19.21, p. 42), #19 (19.21, p. 42), #24 (19.10, p. 50), #28 (19.11, p. 56), #34 (19.13, p. 65), #43 (19.17, p. 89), #47 (19.18, p. 96), #53 (19.20, p. 104)

## Tomo 20 · Ginecología y Oncología

60 fotos · 35 OK · 9 repetidas · 16 con problema

| # | Tema | Pág. tomo | Pie impreso | Problema | Detalle |
|---|---|---|---|---|---|
| 40 | 20.11C | 60 | Absceso en ecografía | No muestra lo que dice el pie | el pie dice «absceso en ecografía» y es una lámina de Rx con fotos quirúrgicas |
| 5 | 20.2B | 11 | Ovario poliquístico (eco) | Ilegible al tamaño impreso | ecografía de ovario poliquístico poco nítida |
| 53 | 20.15C | 83 | Masa pélvica (TC) | Ilegible al tamaño impreso | TAC de masa pélvica difícil de interpretar |
| 55 | 20.16B | 87 | Signo del remolino | Ilegible al tamaño impreso | ecografía borrosa: no se ve el remolino |
| 15 | 20.4 | 20 | Ecografía transvaginal legible de mioma | Rótulos o pie en inglés | rótulos «Uterus», «Fibroid», «Urinary bladder» |
| 25 | 20.7C | 36 | Hidrosálpinx (ecografía) | Rótulos o pie en inglés | rótulo «LT ADNEXA» (menor) |
| 54 | 20.16A | 88 | Ovario aumentado | Rótulos o pie en inglés | siglas UT, RTO, LTO |
| 1 | 20.1B | 5 | Cuello alado en Turner | Menor con el torso o el cuerpo desnudo | lactante desnudo (síndrome de Turner) |
| 6 | 20.2C | 10 | Escala de Ferriman-Gallwey | Sin hallazgo que mirar | grilla de siluetas sin puntaje: no se entiende la escala de Ferriman-Gallwey |
| 16 | 20.5A | 28 | Endometrioma | Dudosa (se puede mejorar) | endometrioma poco visible |
| 19 | 20.5 | 30 | Ecografía de adenomiosis | Dudosa (se puede mejorar) | ecografía de adenomiosis poco característica |
| 23 | 20.7A | 37 | Histerosalpingografía | Dudosa (se puede mejorar) | histerosalpingografía sin trompas visibles: no se entiende el hallazgo |
| 29 | 20.8C | 41 | DIU de cobre y LNG | Dudosa (se puede mejorar) | moneda de dólar como escala |
| 44 | 20.13C | 74 | Toma de Papanicolau | Dudosa (se puede mejorar) | dibujo de figura femenina sin hallazgo |
| 56 | 20.16C | 88 | Doppler | Dudosa (se puede mejorar) | Doppler con poco flujo, poco demostrativo |
| 58 | 20.16 | 88 | Ecografía de quiste hemorrágico del cuerpo lúteo con patrón  | Dudosa (se puede mejorar) | quiste sin hallazgo característico |

Repetidas (la misma foto sale dos veces en el tomo): #3 (20.1, p. 5), #7 (20.2, p. 10), #11 (20.3, p. 14), #22 (20.6, p. 32), #26 (20.7, p. 36), #33 (20.9, p. 48), #37 (20.10, p. 54), #46 (20.13, p. 16), #59 (20.16, p. 87)

## Tomo 21 · Salud Pública y Bioética

6 fotos · 5 OK · 1 repetidas · 0 con problema


Repetidas (la misma foto sale dos veces en el tomo): #1 (21.5, p. 22)


## Segunda pasada (al armar los 18 atlas, oct-2026)

Al mirar foto por foto para escribir cada ficha aparecieron más problemas. Se corrigieron así:

- Las fotos que el tomo ya no debe imprimir (repetidas casi idénticas a otra del mismo tema, o equivocadas) quedan listadas en `books/data/tomo_fotos_excluir.json` con su motivo; el compilador las salta en el tomo y en el atlas.
- reuma-14 capilaroscopía (02_capilaroscopia_alt1): rótulos Normal/Early/Active/Late → Normal/Temprano/Activo/Tardío
- tomo_fotos_excluir.json: 5 hemato (019 hemartrosis ilegible, 130 psoas, 133 MALT, atlas_333 y 333_baja RM) + neuro 148, neuro 145 (pie equivocado), orl 68, orl-08/04, oftal-15/53, ped 292, ob 091, gin 093, nefro 113
- endo-05: 008 lámina de cintigramas repetida (clases=[]); endo-17 QT en inglés → reemplazado por la versión en español
- cirugia-08: pie de la 354 decía RM; es TAC → corregido. cirugia-04: 09_rx-asa-delgado-gas excluida (repetida)
- trauma-07 362 (Maisonneuve): SUPINE → DECÚBITO; trauma-08 lipohemartrosis: rótulo «X Table» quitado
- trauma-10 253: pie decía Rx; es TAC → corregido
- uro-09: cintigrama «bajo volumen» excluido (es la misma imagen que «alto volumen»). OJO: la clase en video uro-09 también los muestra como dos casos distintos
- orl-17 laringomalacia: imagen estaba en negativo → invertida
- oftal-17: «trombosis séptica del seno cavernoso» excluida (es la misma TAC de celulitis orbitaria)
- ped-08 (golpes/compresiones y Heimlich): restos del rótulo en inglés bajo el texto en español → limpiados
- ob-04 Doppler ductus (089): IVC/UV → VCI/VU
- ob-20: hidrops repetido excluido
- gin-11 absceso tuboovárico eco: TRANSVERSE/CUL DE SAC → TRANSVERSAL/DOUGLAS
- reuma Gota (214): LEFT → IZQ

Cada atlas tiene exactamente las fotos que imprime su tomo (inventario `fuente: fotos impresas en el tomo`).
