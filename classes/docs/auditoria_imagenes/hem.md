# Auditoría de imágenes — Hematología (hem-01 a hem-24)

Fecha: 2026-10-08 · Solo lectura (no se modificó ninguna clase ni archivo de media).

Método: se extrajo de cada `classes/lessons/hem-*.cjs` lo enseñado (títulos, tarjetas, flujos, tablas) y las diapositivas `type: 'image'` (src + label + narración). Las fotos dudosas se abrieron. Rutas de imágenes relativas a `classes/media/`.

Leyenda de estado: **foto** = foto/figura real · **anim** = animación .mp4 · **svg** = esquema propio · **—** = no se muestra.
"Necesita" = existe una imagen reconocible que EUNACOM puede mostrar o describir (frotis, RX, foto clínica). Dosis, umbrales, scores y algoritmos no necesitan imagen.

Nota sobre el libro: `books/dist/Modulo_1_Medicina_Interna/Manual_EUNACOM_Hematologia_Completo_2026.pdf` (130 pp., 26 imágenes) usa **las mismas figuras que las clases** (Imagen 8.1 … 8.22). No aporta candidatos nuevos.

## Resumen

| clase | tema | entidades enseñadas (n) | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| hem-01 | Síndrome anémico: VCM y reticulocitos | 6 | 1 (débil) | 1 | 2 | media |
| hem-02 | Perfil de hierro | 6 | 0 | 1 | 0 | baja |
| hem-03 | Anemia ferropénica | 9 | 2 (+1 fuera de tema) | 1 | 3 | media |
| hem-04 | Anemia de enfermedad crónica y renal | 6 | 0 | 1 | 1 | baja |
| hem-05 | Aplasia medular | 7 | 1 (**equivocada**) | 0 | 2 | **alta** |
| hem-06 | Anemia megaloblástica | 9 | 2 (+1 fuera de tema) | 1 | 2 | media |
| hem-07 | Anemia hemolítica autoinmune | 8 | 1 (+svg) | 2 | 3 | media |
| hem-08 | Esferocitosis, G6PD, HPN | 9 | 1 (+1 esquema) | 1 | 3 | **alta** |
| hem-09 | Talasemias y drepanocitosis | 9 | 3 | 1 | 3 | media |
| hem-10 | PTT y SHU | 7 | 1 (débil) | 1 | 2 | media |
| hem-11 | Pruebas de coagulación | 6 | 0 (+svg) | 2 | 1 | baja |
| hem-12 | PTI | 8 | 1 | 1 | 1 | baja |
| hem-13 | Hemofilia y von Willebrand | 9 | 1 (dibujo histórico) | 1 | 3 | media |
| hem-14 | Vitamina K, hígado y anticoagulantes | 6 | 0 | 1 | 0 | baja |
| hem-15 | CID | 6 | 1 (repetida de hem-10) | 1 | 2 | media |
| hem-16 | Leucemias agudas | 9 | 3 | 1 | 1 | baja |
| hem-17 | LMC y LLC | 8 | 2 | 1 | 2 | media |
| hem-18 | Linfomas | 10 | 4 | 1 | 2 | media |
| hem-19 | Mieloma y GMSI | 7 | 4 (+svg) | 1 | 1 | baja |
| hem-20 | Neoplasias mieloproliferativas y SMD | 8 | 2 (**1 mal rotulada**) | 1 | 4 | **alta** |
| hem-21 | Neutropenia febril | 6 | 0 | 1 | 0 | baja |
| hem-22 | Urgencias oncológicas | 7 | 1 | 1 | 2 | media |
| hem-23 | Trombofilias y SAF | 8 | 0 | 1 | 2 | media |
| hem-24 | Transfusión | 9 | 0 | 1 | 1 | baja |
| **Total** | | **183** | **31** | **25** | **43** | 3 alta · 12 media · 9 baja |

### Problemas de fotos (corregir antes que agregar)

1. **hem-05 — foto equivocada.** `biblioteca/06_hematologia/hem-05/01_medula-normal-vs-aplasia__amir-hemato_p26.jpg` es *solo* la "Figura 1. Biopsia de médula ósea normocelular" (médula llena). La narración dice "a la izquierda una médula normal; a la derecha una aplasia: casi solo grasa", pero la aplasia no aparece. La aplasia está en el repuesto sin usar `…/hem-05/01_medula-normal-vs-aplasia_alt1__amir-hemato_p26.jpg` (Figura 2, médula grasa). Hay que mostrar las dos lado a lado.
2. **hem-20 — rótulo equivocado.** `…/hem-20/01_mielofibrosis-dacriocitos__amir-hemato_p58.jpg` tiene el rótulo «Dacriocitos» y la narración habla de "glóbulos en forma de lágrima", pero la figura es la "Figura 3. Aspecto de la médula en la mielofibrosis" (histología con fibrosis): no se ve ningún dacriocito. El frotis con dacriocitos es el repuesto sin usar `…/hem-20/01_mielofibrosis-dacriocitos_alt1__cto-hemato_p9.jpg` (CTO Figura 1.3, poca resolución). Conviene mostrar las dos con su rótulo correcto.
3. **hem-07 y hem-08 usan la misma foto** (mismo md5): `hem-07/01_esferocitos__amir-hemato_p34.jpg` = `hem-08/01_esferocitosis-hereditaria__amir-hemato_p34.jpg`. El pie original es "Esferocitosis hereditaria". En la AHAI caliente sirve igual (microesferocitos), pero se repite.
4. **hem-10 y hem-15 usan la misma foto** (mismo md5): `01_esquistocitos__cto-hemato_p10.jpg`. Además es pequeña (612×356) y se ve **un solo esquistocito** (casco, arriba a la derecha). Es poco demostrativa para el hallazgo más preguntado del tema.
5. **hem-01** `01_morfologia-eritrocitaria-equinocitos-dia__cto-hemato_p9.jpg` (565×326): el pie de la fuente es un panel "Equinocitos · Dianocitos · Punteado basófilo · Heinz · Howell-Jolly", pero el recorte guardado es **un solo campo, sin rótulos** (glóbulos hipocrómicos). La narración ("cada forma orienta a una causa") promete varias formas y la imagen no muestra cuál es cuál.
6. **hem-03** `01_anemia-ferropenica-microcitica-frotis__amir-hemato_p16.jpg`: la microcitosis y la hipocromía se ven poco (muchos glóbulos parecen normocrómicos). Sirve, pero es débil.
7. **hem-03 — foto fuera de tema:** «Sideroblasto en anillo» (`02_sideroblasto-en-anillo__amir-hemato_p19.jpg`). La anemia sideroblástica no aparece en ninguna diapositiva ni narración de la clase. O se agrega una línea al guion, o se quita la foto.
8. **hem-06 — foto fuera de tema:** «Glositis en anemia ferropénica» (`02_glositis_ferropenia__commons.jpg`) está en la clase de megaloblástica. Corresponde a hem-03 (allí se enseña "glositis atrófica" y no se muestra).
9. **hem-09 — repuesto mal nombrado:** `…/hem-09/01_drepanocitos_2__amir-hemato_p38.jpg` **no muestra drepanocitos**: es una tinción supravital con inclusiones verdes/oscuras dentro de los glóbulos (parecen cuerpos de Heinz o inclusiones). Verificar el pie en AMIR Hemato p. 38. Si son cuerpos de Heinz, sirve para el hueco de G6PD en hem-08.
10. **hem-13**: «Artropatía hemofílica» es un dibujo anatómico histórico (Wellcome), no una foto clínica ni una RX. La narración lo dice con honestidad, pero el estudiante no ve una hemartrosis como aparecería en el examen.

### 10 huecos de mayor prioridad (Hematología)

1. hem-05: biopsia de **aplasia** (médula grasa) junto a la normal. *Candidato listo:* `hem-05/…_alt1__amir-hemato_p26.jpg`.
2. hem-20: **frotis con dacriocitos** con el rótulo correcto. *Candidato:* `hem-20/…_alt1__cto-hemato_p9.jpg`.
3. hem-08: **frotis de déficit de G6PD** con cuerpos de Heinz y células mordidas (bite cells). Posible candidato: `hem-09/01_drepanocitos_2__amir-hemato_p38.jpg`, si se confirma que son cuerpos de Heinz.
4. hem-10/15: un **frotis con esquistocitos abundantes** de mejor resolución, y uno distinto para la CID.
5. hem-17: **frotis de LLC con sombras de Gümprecht** destacadas (la foto actual de Harrison tiene linfocitos maduros y una célula rota sin señalar).
6. hem-06: **RM de médula** en la degeneración combinada subaguda (hiperintensidad de los cordones posteriores en T2, signo de la "V invertida").
7. hem-13: **hemartrosis aguda de rodilla** (foto clínica o RX de artropatía hemofílica) en lugar del dibujo histórico.
8. hem-18: **adenopatía cervical o supraclavicular** (foto clínica) y **linfoma MALT** gástrico en endoscopía.
9. hem-23: **livedo reticularis** en el SAF y **necrosis cutánea por cumarínicos**. *Candidato:* `08_reumatologia/reuma-11/01_livedo-reticularis__amir-reuma_p39.jpg`.
10. hem-20: **facies pletórica / eritromelalgia** en la policitemia vera.

---

## Detalle por clase

### hem-01 · Síndrome anémico (VCM y reticulocitos)
| entidad | estado |
|---|---|
| Definición OMS / Hto ≈ 3×Hb | — (no necesita) |
| Clasificación por VCM (micro/normo/macro) | — (no necesita; podría ilustrarse con 3 frotis) |
| HCM, CHCM, RDW | — (no necesita) |
| Reticulocitos / IRC | anim `animaciones/hem-01/A1_reticulocitos.mp4` |
| Morfología eritrocitaria | foto débil (ver problema 5) |
| Trampas (hemorragia crónica/aguda, hemólisis) | — (no necesita) |

**Faltan:** (a) un panel de morfología **rotulado** (microcito hipocrómico, macroovalocito, esferocito, esquistocito, dianocito, drepanocito, dacriocito), que se puede armar con fotos que ya están en hem-03, hem-06, hem-07, hem-09, hem-10 y hem-20; (b) **reticulocitos con tinción supravital** (azul de cresil brillante): falta en el repo.
**Candidatos en el repo:** las fotos de las clases citadas (reutilizar).

### hem-02 · Perfil de hierro
Ferritina, transferrina/TIBC, IST, rasgo talasémico, hemocromatosis, ferritina extrema: todo es laboratorio y está cubierto con la anim `A1_ferritina_transferrina.mp4`. **Ningún hueco obligatorio.** Opcional (baja): la piel bronceada de la hemocromatosis.

### hem-03 · Anemia ferropénica
| entidad | estado |
|---|---|
| Etapas de la ferropenia | anim `A1_etapas_ferropenia.mp4` |
| Frotis microcítico hipocrómico | foto (débil, problema 6) |
| Coiloniquia | foto `01_coiloniquia__commons.jpg` |
| Queilitis angular | **— necesita** |
| Glositis atrófica | **— necesita** (la foto está en hem-06, problema 8) |
| Pica / pagofagia | — (no necesita) |
| Estudio causal: EDA + colonoscopía, cáncer de colon derecho | — (opcional, baja) |
| Enfermedad celíaca (anti-TG2 + biopsia duodenal) | — opcional: biopsia con atrofia vellositaria (media-baja) |
| Hierro oral/EV, cronología, transfusión | — (no necesita) |
| (Sideroblasto en anillo) | foto **sin respaldo en el guion** (problema 7) |

**Faltan:** queilitis angular; glositis atrófica ferropénica; un frotis con hipocromía y anisocitosis claras (con dianocitos).
**Candidatos:** `biblioteca/06_hematologia/hem-06/02_glositis_ferropenia__commons.jpg` (moverla a esta clase). Biopsia celíaca (opcional): `biblioteca/01_gastroenterologia/gastro-09/02_atrofia_vellositaria__pathoma_p114.jpg`. En el repo no hay ninguna foto de queilitis angular.

### hem-04 · Anemia de enfermedad crónica y renal
| entidad | estado |
|---|---|
| Hepcidina–ferroportina | anim `A1_hepcidina_ferroportina.mp4` |
| Hemograma normo → microcítico leve, perfil inflamatorio | — (no necesita) |
| Azul de Prusia: macrófagos cargados de hierro en la médula | **— necesita (baja)** |
| Anemia renal: EPO, hierro EV, meta de Hb 10–11,5 | — (no necesita) |
| HTA por EPO | — (no necesita) |
**Falta:** tinción de Perls/azul de Prusia en la médula (hierro en los macrófagos, sin sideroblastos). No está en el repo.

### hem-05 · Aplasia medular — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| Fisiopatología (CD8, IFN-γ) | — (no necesita) |
| Causas (cloranfenicol, antitiroideos, benceno, hepatitis) | — (no necesita) |
| Pancitopenia: síndrome anémico, infecciones, **síndrome purpúrico** | **— necesita (media)**: petequias/equimosis |
| Sin esplenomegalia | — (no necesita) |
| Biopsia: celularidad < 25 %, reemplazo graso | foto **equivocada** (problema 1) |
| Camitta (grave/muy grave) | — (no necesita) |
| Diferencial de la pancitopenia (leucemia, SMD, mielofibrosis, cirrosis) | — (puede reutilizar fotos de hem-16/20) |
**Faltan:** la biopsia de aplasia (y la normal al lado, como dice la narración); petequias en el paciente pancitopénico.
**Candidatos:** `biblioteca/06_hematologia/hem-05/01_medula-normal-vs-aplasia_alt1__amir-hemato_p26.jpg` (aplasia, sin usar); petequias: `biblioteca/06_hematologia/hem-12/01_petequias-purpura-en-eeii__amir-hemato_p89.jpg` (reutilizar).

### hem-06 · Anemia megaloblástica
| entidad | estado |
|---|---|
| Asincronía núcleo-citoplasma / megaloblastos en la médula | **— necesita (media)**: aspirado con megaloblastos |
| Absorción de B12 (factor intrínseco, íleon) | anim `A1_viaje_b12.mp4` |
| Frotis: macroovalocitos + neutrófilo hipersegmentado | foto ✔ |
| Degeneración combinada subaguda (cordones posteriores, piramidal) | **— necesita (media-alta)**: RM medular |
| Glositis de Hunter | foto `01_glositis_atrofica_b12__commons.jpg` (lengua fisurada; la narración dice "lisa y roja": se parece poco) |
| Anemia perniciosa (gastritis atrófica tipo A), vitíligo, Hashimoto | — opcional (baja): vitíligo |
| Ácido fólico solo → daño neurológico | — (no necesita) |
| Tratamiento, hipokalemia, crisis reticulocitaria | — (no necesita) |
| (Glositis ferropénica) | foto **fuera de tema** (problema 8) |
**Faltan:** RM de columna con hiperintensidad T2 de los cordones posteriores ("V invertida"); aspirado de médula con megaloblastos.
**Candidatos:** no hay en el repo.

### hem-07 · Anemia hemolítica autoinmune
| entidad | estado |
|---|---|
| Síndrome hemolítico (ictericia, LDH, haptoglobina) | **— necesita (media)**: ictericia escleral |
| AHAI caliente: microesferocitos | foto (la misma de hem-08, problema 3) |
| Crioaglutininas: autoaglutinación en el frotis/tubo | **— necesita (media)** |
| Acrocianosis, livedo, Raynaud | **— necesita (media)** |
| Coombs directo e indirecto | anim ×2 + svg `S1_coombs__propio.svg` |
| Síndrome de Evans | — (puede reutilizar las petequias de hem-12) |
| Gravedad, corticoides, rituximab, esplenectomía, transfusión | — (no necesita) |
**Faltan:** frotis o tubo con **autoaglutinación** por crioaglutininas; **acrocianosis/Raynaud**; ictericia.
**Candidatos:** `biblioteca/08_reumatologia/reuma-14/01_raynaud-palidez-cianosis__amir-reuma_p98.jpg`; `biblioteca/08_reumatologia/reuma-11/01_livedo-reticularis__amir-reuma_p39.jpg`.

### hem-08 · Esferocitosis, G6PD, HPN — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| Esferocitosis: esferocitos, CHCM > 36 | foto (repetida de hem-07) + anim `A1_esferocitosis_bazo.mp4` + esquema `02_patogenia-esferocitosis_1__cto-hemato_p30.jpg` |
| Litiasis biliar pigmentaria en un joven | **— necesita (baja-media)**: ecografía con cálculos |
| Fragilidad osmótica | — (podría dibujarse una curva; baja) |
| Esplenectomía + vacunas | — (no necesita) |
| **G6PD: cuerpos de Heinz, células mordidas** | **— necesita (alta)** |
| G6PD: gatillantes (habas, sulfas, primaquina) | — (no necesita) |
| **HPN: orina oscura matinal** | **— necesita (media)**: serie de orinas con hemoglobinuria |
| HPN: trombosis atípicas (Budd-Chiari) | — (baja) |
| Citometría CD55/CD59, eculizumab | — (no necesita) |
**Faltan:** frotis de G6PD con **células mordidas (bite cells)** y **cuerpos de Heinz** (tinción supravital); orinas seriadas de HPN.
**Candidatos:** `biblioteca/06_hematologia/hem-09/01_drepanocitos_2__amir-hemato_p38.jpg` (verificar si son cuerpos de Heinz, problema 9); colelitiasis: `biblioteca/10_cirugia/cirugia-02/01_colelitiasis-colecistitis-eco__cto-radiologia_p44.jpg` o `biblioteca/01_gastroenterologia/gastro-17/01_colelitiasis-con-sombra-eco__cto-radiologia_p44.jpg`. Repuesto sin usar: `hem-08/02_patogenia-esferocitosis_2__cto-hemato_p30.jpg` (parece duplicado del _1).

### hem-09 · Talasemias y drepanocitosis
| entidad | estado |
|---|---|
| Rasgo talasémico menor: microcitosis desproporcionada, dianocitos | **— necesita (media)**: frotis con dianocitos |
| Talasemia mayor (Cooley): cráneo en cepillo | foto ✔ `03_craneo-en-cepillo-talasemia__cto-hemato_p32.jpg` |
| Cooley: facies, hepatoesplenomegalia masiva | — (baja) |
| Hemosiderosis transfusional / quelantes | — (no necesita) |
| Alfa-talasemia: cuerpos de HbH | foto ✔ (se menciona poco en el guion) |
| Drepanocitosis: drepanocitos | foto ✔ + anim `A1_falciforme_real.mp4` |
| Autoesplenectomía: **cuerpos de Howell-Jolly** | **— necesita (media)** |
| Electroforesis de Hb (HbA2 > 3,5 %, HbS) | **— necesita (media)**: trazado de la electroforesis (se puede dibujar como el svg de hem-19) |
| Crisis vasooclusiva / dactilitis | — (baja) |
**Faltan:** frotis con dianocitos (rasgo talasémico); frotis con Howell-Jolly; esquema de electroforesis de Hb (normal / rasgo β / HbSS).
**Candidatos:** no hay fotos en el repo. La electroforesis puede seguir el patrón de `hem-19/S1_electroforesis-pico-m__propio.svg`. Repuesto mal nombrado: problema 9.

### hem-10 · PTT y SHU
| entidad | estado |
|---|---|
| ADAMTS13 / multímeros de vWF | anim `A1_adamts13_real.mp4` |
| Esquistocitos | foto débil y repetida (problema 4) |
| Péntada (fiebre, neurología, riñón) | — (no necesita) |
| Púrpura / petequias en la PTT | **— necesita (baja)**: reutilizar |
| SHU típico: diarrea con sangre por STEC, niño | **— necesita (baja-media)** |
| MAT vs CID | — (no necesita) |
| Plasmaféresis, no transfundir plaquetas | — (no necesita) |
**Falta:** un frotis con **muchos esquistocitos** (cascos, triángulos) de buena resolución. **Candidatos:** no hay otro en el repo; petequias: `hem-12/01_petequias-purpura-en-eeii__amir-hemato_p89.jpg`.

### hem-11 · Pruebas de coagulación
TP/INR, TTPK, prueba de mezcla, hemostasia primaria vs secundaria: cubiertos con las anims `A1_cascada_tp.mp4`, `A2_cascada_ttpa.mp4` y el svg `S1_cascada-coagulacion__propio.svg`.
**Falta (baja-media):** una comparación clínica de **petequias/mucosas (primaria) vs hematoma profundo/hemartrosis (secundaria)**. **Candidatos:** `hem-12/01_petequias-purpura-en-eeii__amir-hemato_p89.jpg` (reutilizar); para hemartrosis no hay foto clínica (ver hem-13).

### hem-12 · PTI
| entidad | estado |
|---|---|
| Anti-GPIIb/IIIa, bazo | anim `A1_pti_bazo.mp4` |
| Petequias / púrpura | foto ✔ |
| Pseudotrombocitopenia por EDTA (agregados en el frotis) | **— necesita (baja-media)** |
| Sangrado de mucosas (bulas hemorrágicas orales) | — (baja) |
| Niño vs adulto, diferencial, tratamiento | — (no necesita) |
**Falta:** frotis con **agregados plaquetarios** (pseudotrombocitopenia); no está en el repo.

### hem-13 · Hemofilia y von Willebrand
| entidad | estado |
|---|---|
| Herencia ligada al X | — (podría ser un árbol genealógico svg; baja) |
| Tenasa / TTPK | anim `A1_hemofilia_tenasa.mp4` |
| **Hemartrosis aguda** | **— necesita (alta)** |
| Artropatía hemofílica | dibujo histórico (problema 10) |
| **Hematoma del psoas** | **— necesita (media)**: TC |
| Síndrome compartimental | — (baja) |
| von Willebrand: sangrado mucocutáneo (epistaxis, gingivorragia) | **— necesita (baja)** |
| Diagnóstico, desmopresina, factor, "nunca IM/AINE/punción" | — (no necesita) |
**Faltan:** foto clínica de **hemartrosis de rodilla** (rodilla aumentada de volumen en un niño) o RX de artropatía hemofílica; **TC con hematoma del psoas**.
**Candidatos:** como referencia de rodilla con derrame, `biblioteca/08_reumatologia/reuma-02/01_derrame_rodilla__commons.jpg` (no es una hemofilia: solo sirve de apoyo). No hay TC de psoas.

### hem-14 · Vitamina K, hígado y anticoagulantes
Todo es mecanismo y laboratorio (vitamina K, factor V, INR, CCP, antídotos), cubierto con la anim `A1_vitamina_k.mp4`. **Ningún hueco obligatorio.** Opcional (baja): hematoma o equimosis extensa en la sobreanticoagulación.

### hem-15 · CID
| entidad | estado |
|---|---|
| Doble paradoja trombosis/hemorragia | anim `A1_cid_real.mp4` |
| Esquistocitos | foto repetida de hem-10 (problema 4) |
| **Púrpura fulminans / equimosis y sangrado en las punciones** | **— necesita (media)** |
| Contextos (sepsis, DPPNI, LPA) | — (no necesita) |
| Score ISTH, laboratorio, hemocomponentes | — (no necesita) |
**Falta:** foto clínica de la CID: **púrpura fulminans** o equimosis confluentes / sangrado en los sitios de punción.
**Candidatos:** `biblioteca/07_infectologia/infecto-02/01_purpura-meningococica__cto-infecto_p38.jpg` (púrpura meningocócica: la CID séptica clásica).

### hem-16 · Leucemias agudas
| entidad | estado |
|---|---|
| Blastos / médula colapsada | anim `A1_blastos_medula.mp4` |
| Bastones de Auer (LMA/M3) | foto ✔ |
| Infiltración gingival | foto ✔ |
| Blastos de LLA (tipo Burkitt) | foto ✔ (L3; poco típica de la LLA infantil común) |
| Petequias / equimosis | — (reutilizar) |
| Hepatoesplenomegalia, adenopatías, dolor óseo | — (baja) |
| Citometría / MPO / inmunofenotipo | — (no necesita) |
| LPA: CID hiperfibrinolítica | — (reutilizar la púrpura) |
| Lisis tumoral, santuarios | — (no necesita) |
**Falta (baja):** un frotis de **LLA-B común** (linfoblastos pequeños, sin granulación) que contraste con la LMA. **Candidato sin usar:** `hem-16/01_leucemia-aguda-promielocitica-auer_alt1__cto-hemato_p64.jpg` (promielocitos de la M3, como 2.ª vista).

### hem-17 · LMC y LLC
| entidad | estado |
|---|---|
| Cromosoma Filadelfia t(9;22) | anim `A1_filadelfia.mp4` |
| Frotis de LMC: toda la serie, basofilia | foto ✔ `01_lmc-leucocitosis-con-desviacion-izquierd__cto-hemato_p53.jpg` |
| **Esplenomegalia masiva** | **— necesita (media)**: foto o TC |
| Frotis de LLC: linfocitos maduros | foto ✔ `01_frotis_llc__harrison_p875.jpg` |
| **Sombras de Gümprecht** | **— necesita (media-alta)**: hay un posible *smudge* en la foto de Harrison, pero ni la narración ni el rótulo lo señalan |
| Adenopatías (Binet/Rai) | — (baja) |
| AHAI/PTI autoinmune, Richter | — (no necesita) |
**Faltan:** sombras de Gümprecht **señaladas** (flecha o recorte); esplenomegalia masiva (TC o marcado en el abdomen).
**Candidatos:** no hay en el repo una TC de esplenomegalia (las de `cirugia-11`/`gastro-26` son de rotura esplénica: no sirven).

### hem-18 · Linfomas
| entidad | estado |
|---|---|
| **Adenopatía indolora, gomosa; ganglio de Virchow** | **— necesita (media)** |
| Biopsia escisional vs PAAF | — (no necesita) |
| Síntomas B | — (no necesita) |
| Reed-Sternberg ("ojos de búho") | foto ✔ |
| Masa mediastínica (esclerosis nodular) | foto ✔ RX |
| Diseminación por contigüidad | anim `A1_hodgkin_contiguo.mp4` |
| Ann Arbor | figura ✔ |
| PET en Hodgkin | foto ✔ |
| LDCBG / folicular | — (baja) |
| **Linfoma MALT gástrico** | **— necesita (baja-media)**: endoscopía |
**Faltan:** foto clínica de **adenopatía cervical o supraclavicular** (Virchow); endoscopía de MALT gástrico.
**Candidatos:** no hay en el repo (`07_infectologia/infecto-10/03_linfoma-snc-vih__amir-infecto_p155.jpg` es un linfoma del SNC: otro tema).

### hem-19 · Mieloma y GMSI
| entidad | estado |
|---|---|
| Lesiones líticas "en sacabocado" | foto ✔ cráneo (lesiones tenues) |
| Pico M | foto ✔ `02_pico_m_real__commons.jpg` + svg |
| Rouleaux | foto ✔ |
| Plasmocitos en médula | foto ✔ |
| Clon → pico M | anim `A1_clon_pico_m.mp4` |
| **Aplastamiento vertebral / lesiones líticas axiales** | **— necesita (media)** |
| Riñón de mieloma, hipercalcemia | — (no necesita) |
**Falta:** RX de columna con aplastamiento por mieloma. **Candidatos:** `hem-19/01_lesiones-liticas-en-craneo_alt1__amir-hemato_p73.jpg` (sin usar: cráneo + vértebras con aplastamiento; mejor que la actual); `08_reumatologia/reuma-24/01_aplastamientos-vertebrales__amir-reuma_p88.jpg`.

### hem-20 · Neoplasias mieloproliferativas y SMD — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| JAK2 | anim `A1_jak2_receptor.mp4` |
| **PV: facies pletórica** | **— necesita (media)** |
| PV: prurito acuagénico, **eritromelalgia** | **— necesita (media)**: foto de eritromelalgia |
| PV vs poliglobulia secundaria | — (no necesita) |
| Trombocitemia esencial: frotis con trombocitosis | **— necesita (baja)** |
| **Mielofibrosis: dacriocitos** | rotulada mal (problema 2) |
| Mielofibrosis: médula fibrosa / aspirado seco | foto (con el rótulo equivocado) |
| Esplenomegalia masiva | **— necesita (media)** |
| SMD: médula displásica, neutrófilos hipogranulares / pseudo-Pelger | foto de la médula ✔; neutrófilo pseudo-Pelger **— (baja)** |
**Faltan:** dacriocitos bien rotulados; facies pletórica; eritromelalgia; esplenomegalia masiva.
**Candidatos:** `hem-20/01_mielofibrosis-dacriocitos_alt1__cto-hemato_p9.jpg` (dacriocitos, sin usar). Los demás no están en el repo.

### hem-21 · Neutropenia febril
RAN, MASCC, hora de oro, antibióticos: no necesitan imagen; anim `A1_neutropenia_hora_oro.mp4`. **Ningún hueco obligatorio.** Opcional (baja): mucositis oral o infección del sitio del catéter.

### hem-22 · Urgencias oncológicas
| entidad | estado |
|---|---|
| Lisis tumoral (K, úrico, P ↑; Ca ↓) | anim `A1_lisis_tumoral_real.mp4` |
| **Hiperkalemia en el ECG** (T picudas, QRS ancho) | **— necesita (media)** |
| Hipercalcemia maligna (QT corto) | — (baja) |
| Compresión medular | foto ✔ RM `01_rm_compresion_medular__harrison_p3489.jpg` (cervical; la clase habla de metástasis vertebral dorsal: sirve) |
| **Metástasis vertebral lítica / aplastamiento** | **— necesita (baja)** |
**Faltan:** ECG de hiperkalemia (lisis con K 6,8 y QRS ancho).
**Candidatos:** `biblioteca/03_nefrologia/nefro-09/01_ecg-hiperpotasemia-t-picudas-sinusoidal__cto-nefro_p23.jpg`; `biblioteca/05_endocrinologia/endo-16/02_ecg_hipercalcemia_qt_corto__ecg-basics_p331.jpg` (hipercalcemia).

### hem-23 · Trombofilias y SAF
| entidad | estado |
|---|---|
| Factor V Leiden, protrombina, AT, C/S | — (no necesita) + anim `A1_balance_trombofilia.mp4` |
| **Necrosis cutánea por cumarínicos** | **— necesita (media)** |
| SAF: trombosis arterial/venosa | — (opcional: TVP / ACV en joven) |
| **SAF: livedo reticularis** | **— necesita (media)** |
| Anticoagulante lúpico / prueba de mezcla | — (no necesita) |
| Sydney, cuándo estudiar, tratamiento | — (no necesita) |
**Faltan:** necrosis cutánea por cumarínicos; livedo reticularis.
**Candidatos:** `biblioteca/08_reumatologia/reuma-11/01_livedo-reticularis__amir-reuma_p39.jpg`. No hay necrosis cumarínica en el repo.

### hem-24 · Transfusión
Umbrales, componentes, compatibilidad ABO (anim `A1_compatibilidad_abo.mp4`), reacciones: casi todo es conceptual.
**Falta (media):** **RX de TRALI vs TACO** (infiltrados bilaterales con corazón normal vs cardiomegalia + congestión). Es el tema más preguntado de la clase (42 menciones en las reconstrucciones).
**Candidatos:** `biblioteca/02_neumologia/resp-22/01_sdra-infiltrado-bilateral__cto-neumo_p35.jpg` (sirve como patrón de TRALI/SDRA). No hay RX de edema cardiogénico en `02_neumologia`.
