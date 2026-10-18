
## Gastroenterología (2026-10-18)

- gastro-07 · Intestino irritable: hipersensibilidad visceral y motilidad alterada · no hay ilustración real de la inervación visceral ni del eje cerebro-intestino; Servier solo tiene el intestino completo, y animar el dolor sobre él sería un esquema inventado.
- gastro-22 · Cuerpo extraño: los tres puntos donde se detiene (cricofaríngeo, arco aórtico, esfínter esofágico inferior) · falta una ilustración real del esófago por segmentos; Servier solo trae el tubo digestivo completo en miniatura.
- gastro-23 · Diarrea crónica del lactante: celíaca (vellosidad) ya está animada en gastro-09; el resto (giardiasis, APLV, fibrosis quística) no tiene mecanismo anatómico propio ni ilustración adecuada.

## Traumatología (2026-10-18)

- trauma-02 · Fractura expuesta: Gustilo y antibiótico según el grado · no hay mecanismo anatómico propio (es una clasificación y una tabla de cobertura); no hay ilustración real de una herida abierta con hueso y las cifras de riesgo de infección por hora no están en el libro, así que un gráfico sería inventado.
- trauma-07 · Fracturas de pierna y tobillo: Weber y reglas de Ottawa · Blausen solo trae la pierna completa de baja resolución y el pie sin el nivel de la sindesmosis; dibujar el peroné y la sindesmosis a mano sería anatomía inventada. Se puede rehacer con una ilustración del tobillo (mortaja) si se consigue.
- trauma-13 · Tumores óseos: sol naciente, telas de cebolla y triángulo de Codman · los patrones periósticos solo se enseñan bien en radiografía (ya están en las fotos de la clase, osteosarcoma y Ewing); no hay ilustración real de un tumor óseo con reacción perióstica y dibujarla sería inventar.

## Reumatología (2026-10-18)

- reuma-13 · Dermatomiositis y polimiositis: infiltrado perimisial y atrofia perifascicular frente a invasión endomisial por linfocitos CD8 · no hay ilustración real del fascículo muscular (Servier solo trae cardiomiocito y actina; Blausen 0801 muestra la miofibrilla y el retículo sarcoplásmico, no el perimisio ni el endomisio) y el libro no da cifras para un gráfico de CPK o fuerza en el tiempo; dibujarlo con formas simples sería inventar.

## Dermatología (derma-02 a derma-16 sin .mp4; derma-01, 11 y 13 ya tienen)
Escena lista pero SIN renderizar por disco < 3 GB libres (2,4 GB estable tras esperar ~15 min): `classes/scripts/jsvideo/scenes/derma.html?v=psoriasis` (derma-05, recambio 28 a 4 días y Auspitz, sobre Blausen Epidermis limpia en assets/blausen/derma_epidermis.png). Para cerrarla: `node classes/scripts/jsvideo/render.cjs "derma?v=psoriasis" derma-05/A1_psoriasis_recambio`, y agregar diapositiva image/sequence «En movimiento» (crédito Blausen CC BY 3.0) antes del pathway de derma-05.
Láminas limpias ya preparadas (derma_foliculo.png, derma_piel.png) para las demás; ideas por clase:
- derma-02 · pilares del acné en el folículo (tapón, sebo, C. acnes, inflamación) sobre derma_foliculo.png · pendiente de escena.
- derma-06 · barrera atópica: pérdida de filagrina, agua que sale y alérgenos que entran, sobre derma_epidermis.png.
- derma-08 · habón (dermis superficial) vs angioedema (profunda) con mastocito, sobre derma_piel.png.
- derma-09 · SSJ/NET (epidermis completa) vs piel escaldada (granuloso) y corte 10/30% de BSA, sobre derma_epidermis.png.
- derma-15 · queratosis actínica (tercio inferior) → Bowen (todo el espesor) → CEC invasor, sobre derma_epidermis.png.
- derma-03, 04, 07, 10, 12, 14, 16 · sin ilustración real adecuada (rosácea vascular, ciclo folicular sin lámina, contacto, DRESS, diana del eritema multiforme, CBC/CEC, ácaro): no se inventan.

## Oftalmología (2026-10-18)

- oftal-17 · Septum orbitario: celulitis preseptal contra orbitaria y extensión al seno cavernoso · no hay ilustración real de la órbita con el septum, el párpado y el seno etmoidal (Blausen solo trae el globo con los rectos y Servier solo los senos paranasales sin la órbita); dibujar la lámina fibrosa y la lámina papirácea a mano sería anatomía inventada. Se puede rehacer con un corte axial u sagital de la órbita (BodyParts3D no trae el septum).

## Obstetricia (2026-10-18)
- ob-12 · mola: vellosidades hidrópicas llenando el útero (anatomía) · no hay ilustración real de mola (Blausen/Servier); se hizo solo el gráfico de seguimiento de beta-hCG
- ob-17 · distocia de hombros (hombro anterior atrapado tras el pubis, McRoberts liberando el hueso) · no hay ilustración real de la pelvis con el feto en el expulsivo (Blausen «Stages of Childbirth» no muestra el hombro); la clase ya trae 3 animaciones SVG de las desaceleraciones (gráficos), no se inventa anatomía.

## Ginecología (2026-10-19)
- gin-10 · Quiste y absceso de la glándula de Bartolino (conducto obstruido, marsupialización) y placa de liquen escleroso · la única ilustración real de la vulva en Blausen es «Female Perineum» (genitales externos explícitos, sin glándula de Bartolino ni corte del conducto) y no hay gráfico que lo reemplace; dibujar la glándula y el conducto a mano sería anatomía inventada. Se puede rehacer con un corte esquemático del vestíbulo (p. ej. Servier/Biodigital con licencia) o fotos clínicas ya incluidas en la clase.

## Salud pública (2026-10-19)

- sp-01 a sp-03 · normativa (rectoría, tramos, GES, Ricarte Soto, PNAC): son listas y tablas que la clase ya resuelve con tabla de trampas; no hay mecanismo ni gráfico con cifras del libro que animar.
- sp-02 · garantías GES · idem; el plazo de oportunidad ya está en el árbol de decisión.
- sp-05 · MAIS · genograma y ecomapa ya salen en contexto como figura del libro; el ASIS y el método de Hanlon son una fórmula, sin gráfico propio.
- sp-11 a sp-14 · bioética y legislación (consentimiento, Ley 20.584, certificado de defunción, Ley IVE): sin mecanismo ni gráfico con cifras; el SPIKES y los flujos ya están en diapositivas.
