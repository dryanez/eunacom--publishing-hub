# Auditoría de imágenes — Respiratorio (resp-01 a resp-24)

Fecha: 2026-10-08 · Solo lectura (no se modificó ninguna clase ni archivo de media).

Método: se extrajo de cada `classes/lessons/resp-*.cjs` lo enseñado (títulos, tarjetas, flujos, tablas) y las diapositivas `type: 'image'` (src + label + narración). Las imágenes dudosas se abrieron. Rutas relativas a `classes/media/`.

Leyenda: **foto** = foto/figura real · **anim** = animación .mp4 · **svg** = esquema propio · **—** = no se muestra. "Necesita" = hay una imagen reconocible que EUNACOM muestra o describe (RX, TC, frotis, foto clínica). Dosis, scores y algoritmos no necesitan imagen.

Nota sobre el libro: `books/dist/Modulo_1_Medicina_Interna/Manual_EUNACOM_Respiratorio_Completo_2026.pdf` (106 pp., 25 imágenes) usa las mismas figuras que las clases (Imagen 1.1 … 5.4). No aporta candidatos nuevos.

## Resumen

| clase | tema | entidades enseñadas (n) | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| resp-01 | Espirometría | 5 | 0 (+svg) | 1 | 0 | baja |
| resp-02 | Crisis asmática | 8 | 0 | 1 | 1 | baja |
| resp-03 | Asma crónica (GINA) | 6 | 0 (+svg) | 1 | 1 | media |
| resp-04 | EPOC estable | 7 | 2 | 1 | 1 | media |
| resp-05 | Exacerbación de EPOC | 6 | 0 | 1 | 0 | baja |
| resp-06 | NAC: diagnóstico y gravedad | 7 | 2 | 1 | 0 | baja |
| resp-07 | NAC: tratamiento | 5 | 0 | 0 | 0 | baja |
| resp-08 | Atípica, aspirativa, intrahospitalaria | 5 | 2 | 1 | 1 | baja |
| resp-09 | Absceso pulmonar | 6 | 1 | 1 | 2 | media |
| resp-10 | Tuberculosis | 9 | 2 | 1 | 2 | media |
| resp-11 | Derrame pleural (Light) | 6 | 1 | 1 | 1 | baja |
| resp-12 | Derrame complicado y empiema | 6 | 1 | 1 | 2 | media |
| resp-13 | Neumotórax espontáneo | 5 | 1 | 1 | 0 | baja |
| resp-14 | Neumotórax a tensión y hemotórax | 6 | 1 | 1 | 2 | media |
| resp-15 | Derrame linfocítico (TBC vs cáncer) | 5 | 0 | 0 | 1 | media |
| resp-16 | Nódulo pulmonar | 6 | 1 (**ilegible**) | 1 | 3 | **alta** |
| resp-17 | Cáncer pulmonar | 9 | 6 | 1 | 1 | baja |
| resp-18 | Fibrosis pulmonar idiopática | 6 | 3 | 1 | 1 | media |
| resp-19 | TEP | 8 | 3 | 1 | 2 | media |
| resp-20 | Hemoptisis y bronquiectasias | 6 | 1 | 1 | 0 | baja |
| resp-21 | Insuficiencia respiratoria aguda | 6 | 0 | 1 | 1 | baja |
| resp-22 | SDRA | 5 | 1 | 1 | 1 | **alta** |
| resp-23 | SAHOS | 5 | 1 (+svg) | 0 | 1 | baja |
| resp-24 | Intoxicación por CO | 5 | 0 (+svg) | 1 | 0 | baja |
| **Total** | | **148** | **29** | **21** | **24** | 2 alta · 9 media · 13 baja |

### Problemas de fotos (corregir antes que agregar)

1. **resp-16 — foto ilegible.** «Nódulo espiculado» (`biblioteca/02_neumologia/resp-16/01_nodulo_espiculado__cxr_p282.jpg`) es un recorte ampliado del vértice en una RX; **no se distingue un nódulo**, y menos sus espículas. La narración ("bordes irregulares, con prolongaciones hacia el pulmón") no tiene correlato visible. Hay que reemplazarla, idealmente por una TC.
2. **resp-18 — el rótulo no calza con la imagen.** «Panal de abejas» se pone sobre `…/resp-18/01_fpi-rx-y-tc__cto-neumo_p73.jpg`, que es la **RX PA** (CTO "Figura 9.3. FPI (Rx de tórax)"), donde el panal casi no se ve. La **TC con panal** es el repuesto sin usar `…/resp-18/01_fpi-rx-y-tc_alt1__cto-neumo_p73.jpg` (Figura 9.4). Conviene mostrar la TC con ese rótulo.
3. **resp-13 — la misma RX dos veces.** La diapositiva "Cómo se ve un neumotórax" usa `resp-13/neumotorax.jpg` (con marcas, excelente) y "Más imágenes" vuelve a mostrar `biblioteca/02_neumologia/resp-13/01_neumotorax__cto-neumo_p116.jpg`, que **visualmente es la misma radiografía** (otro archivo, mismo caso). Además, la imagen principal no tiene `label` (en el volcado sale «undefined»: solo tiene `alt`).
4. **resp-14 — repuesto mal nombrado:** `…/resp-14/01_neumotorax-a-tension-tc-rx_alt1__cto-neumo_p116.jpg` es **idéntico** (md5) a la RX de resp-13: es un neumotórax **simple**, con el mediastino centrado. **No** sirve como neumotórax a tensión.
5. **resp-08 — patrones sin identificar.** `01_patrones-rx-por-germen_1…4__cto-infecto_p56.jpg` son 4 RX esquemáticas. La fuente las asigna a Klebsiella, TBC y Mycoplasma, pero los rótulos ("Patrón por germen", "Infiltrados parcheados bilaterales"…) **no dicen qué germen es cada una**. La narración menciona "la cavitación del estafilococo" y "el infiltrado intersticial de los atípicos" sin señalar cuál es cuál.
6. **resp-19 «AngioTC»** (`01_angiotc-tep__cto-neumo_p103.jpg`): los defectos de llenado en las arterias pulmonares existen, pero son pequeños y **no tienen flecha**. La narración pide ver "un defecto oscuro" y el estudiante no sabe dónde mirar.
7. **resp-10 «Tuberculosis miliar»** (`02_tbc-miliar__cto-radiologia_p13.jpg`) es una **TC**. La imagen clásica del examen es la RX en "granos de mijo": está disponible sin usar en `…/resp-10/02_tbc-miliar_alt1__cto-infecto_p66.jpg` y en `07_infectologia/infecto-11/03_tbc-miliar-rx__cto-infecto_p66.jpg`.
8. **`IMAGENES_FALTANTES.md` dice que el esquema del colapso de la vía aérea en SAHOS (resp-23) está "✅ Dibujado"**, pero apunta a `S1_polisomnografia-apnea__propio.svg`, que es la polisomnografía. El colapso faríngeo **no se muestra** en la clase.

### 10 huecos de mayor prioridad (Respiratorio)

1. resp-22: **RX de edema pulmonar cardiogénico** (cardiomegalia, líneas B de Kerley, redistribución) junto a la del SDRA: es "la diferencia que más se pregunta". *Candidatos:* `02_neumologia/resp-18/02_patrones-intersticiales_alt1__cto-radiologia_p11.jpg` (líneas B de Kerley) y `07_infectologia/infecto-14/02_rx_hanta_edema_intersticial__guia-hanta-2009.jpg`.
2. resp-16: **nódulo espiculado legible en la TC** + **hamartoma en "popcorn"** + calcificación benigna.
3. resp-14: **RX de hemotórax masivo** y **tórax volante**. *Candidatos:* `10_cirugia/cirugia-10/02_hemotorax-derrame-rx__cto-neumo_p111.jpg`, `10_cirugia/cirugia-10/01_torax_volante__atls_p127.jpg`.
4. resp-18: **TC con panal (NIU)** en la diapositiva principal (repuesto listo) y **vidrio esmerilado de la NINE**.
5. resp-12: **ecografía o TC con derrame tabicado** y **líquido pleural purulento** (empiema).
6. resp-10: **baciloscopía con Ziehl-Neelsen (BAAR)** y **PPD leído (induración)**.
7. resp-19: **TVP clínica / eco-Doppler con compresión negativa** y **eco con VD dilatado** (TEP de riesgo intermedio-alto).
8. resp-09: las otras **cavidades del diferencial**: quiste hidatídico complicado y cáncer cavitado de pared gruesa. *Candidato:* `07_infectologia/infecto-17/01_quiste-hidatidico_1__amir-infecto_p189.jpg` (verificar que sea pulmonar).
9. resp-03 / resp-02: **técnica inhalatoria con inhalador + aerocámara** (marcada como pendiente en `IMAGENES_FALTANTES.md`).
10. resp-17: **síndrome de vena cava superior** (edema en esclavina, circulación colateral) o TC con la compresión de la cava.

---

## Detalle por clase

### resp-01 · Espirometría
VEF1/CVF/validez, patrón obstructivo, prueba broncodilatadora, sospecha de restricción y pletismografía: cubiertos con 3 anims (`A1_fv_normal`, `A2_fv_obstructiva`, `A3_fv_restrictiva`) y el svg `S1_flujo-volumen__propio.svg`. **Ningún hueco obligatorio.** Opcional (baja): una curva volumen-tiempo con la meseta de 6 s (criterio de validez).

### resp-02 · Crisis asmática
| entidad | estado |
|---|---|
| Fisiopatología del bronquio | anim `A1_crisis_asmatica_real.mp4` |
| Severidad / riesgo vital (tórax silente, tiraje) | — (baja: foto de tiraje / uso de músculos accesorios) |
| Gases (CO₂ normal = alarma) | — (no necesita) |
| Tratamiento, magnesio, intubación | — (no necesita) |
| **Inhalador + aerocámara = nebulización** | **— necesita (media)**: foto de la técnica |
| PEF / flujómetro | — (baja) |
| Criterios de alta | — (no necesita) |
**Falta:** técnica de inhalador con aerocámara. No está en el repo. *Nota:* la clase tiene una sola diapositiva visual (la animación).

### resp-03 · Asma crónica (GINA)
| entidad | estado |
|---|---|
| Prueba broncodilatadora positiva | svg ✔ `S1_prueba-broncodilatadora__propio.svg` |
| Variabilidad del PEF / metacolina | — (baja) |
| Control GINA | — (no necesita) |
| Nunca SABA solo, escalones | anim `A1_escalones_gina.mp4` |
| **Técnica y adherencia antes de subir** | **— necesita (media)**: foto de la técnica inhalatoria (pendiente en `IMAGENES_FALTANTES.md`) |
| Biológicos | — (no necesita) |
**Falta:** técnica inhalatoria (MDI con aerocámara y turbuhaler). No está en el repo.

### resp-04 · EPOC estable
| entidad | estado |
|---|---|
| Diagnóstico por espirometría | — (reusar el svg de resp-01) |
| Enfisema / tipos | anim `A1_enfisema_real.mp4` + figura ✔ `01_tipos-de-enfisema__cto-neumo_p43.jpg` |
| RX con hiperinsuflación | foto ✔ `01_epoc_hiperinsuflacion__cxr_p292.jpg` |
| **TC con enfisema centrolobulillar / bullas** | **— necesita (media)** |
| GOLD / grupos A-B-E / tratamiento | — (no necesita) |
| O₂ domiciliario / poliglobulia / cor pulmonale | — (baja) |
**Falta:** TC de enfisema. No está en el repo.

### resp-05 · Exacerbación de EPOC
Anthonisen, gérmenes, techo de O₂ (anim `A1_oxigeno_techo.mp4`), corticoide, VMNI. **Ningún hueco obligatorio.** Opcional (baja): foto de la mascarilla de VMNI (BiPAP) o de una Venturi. `IMAGENES_FALTANTES.md` propone reusar la RX de resp-04.

### resp-06 · NAC: diagnóstico y gravedad
| entidad | estado |
|---|---|
| Definición / etiología | — (no necesita) |
| RX: consolidación lobar | foto ✔ `01_consolidacion-lobar__cto-radiologia_p13.jpg` |
| Broncograma aéreo | foto ✔ `02_broncograma-aereo__cto-radiologia_p10.jpg` |
| CURB-65 / CRB-65 | anim `A1_curb65.mp4` |
| ATS/IDSA | — (no necesita) |
| Fiebre a las 72 h → derrame/absceso | — (reusar resp-09/12) |
**Ningún hueco obligatorio.** Opcional (baja): signo de la silueta.

### resp-07 · NAC: tratamiento
Solo esquemas antibióticos por lugar. **No tiene ninguna diapositiva de imagen ni animación**, y no la necesita. Opcional (baja): repetir la RX de resp-06 como ancla visual.

### resp-08 · Neumonía atípica, aspirativa e intrahospitalaria
| entidad | estado |
|---|---|
| Atípica: disociación clínico-radiológica, infiltrado intersticial | foto (patrones esquemáticos sin identificar el germen, problema 5) — **necesita (baja-media)** una RX intersticial de *Mycoplasma* con su rótulo |
| Legionella (diarrea, hiponatremia) | — (no necesita) |
| Aspirativa en el LID | foto ✔ `01_rx_neumonia_aspirativa_lid__commons.jpg` + anim `A1_aspiracion_3d.mp4` |
| Intrahospitalaria (Pseudomonas, SAMR) | — (no necesita) |
| Cavitación estafilocócica | foto (`_3`, sin rótulo de germen) |
**Falta:** rótulos con el germen en los 4 patrones (alcanza con usar el pie del CTO: Klebsiella / TBC / Mycoplasma perihiliar).

### resp-09 · Absceso pulmonar
| entidad | estado |
|---|---|
| Aspiración → necrosis | anim `A1_absceso_nivel.mp4` |
| Clínica (esputo fétido, mala dentadura) | — (baja: foto de periodontitis) |
| Cavidad de pared gruesa con nivel hidroaéreo | foto ✔ `01_absceso-pulmonar__cto-radiologia_p16.jpg` (panel A-D: absceso + émbolos sépticos) |
| **Cáncer cavitado** (pared > 15 mm) | **— necesita (media)** |
| TBC cavitada | — (reusar resp-10) |
| **Quiste hidatídico complicado** | **— necesita (media)** |
**Faltan:** carcinoma epidermoide cavitado; quiste hidatídico pulmonar (signo del camalote / membrana flotante).
**Candidatos:** `biblioteca/07_infectologia/infecto-17/01_quiste-hidatidico_1__amir-infecto_p189.jpg` (y `_2`, `_alt1_*`, `_alt2`: verificar cuál es pulmonar; `gastro-16/02_quiste-hidatidico-hepatico…` es hepático). No hay un cáncer cavitado.

### resp-10 · Tuberculosis
| entidad | estado |
|---|---|
| Sintomático respiratorio, programa, GES | — (no necesita) |
| GeneXpert / cultivo | — (no necesita) |
| **Baciloscopía: BAAR con Ziehl-Neelsen** | **— necesita (media)** |
| Granuloma → caverna | anim `A1_granuloma_caverna.mp4` |
| Complejo de Ghon, cavitación apical | foto ✔ `01_tbc-ghon-cavitacion__cto-radiologia_p14.jpg` |
| Miliar | foto (TC; problema 7) |
| Esquema 2RHZE/4RH, dosis | — (no necesita) |
| RAM: orina naranja, neuritis óptica (rojo-verde), hepatotoxicidad | — (baja: lámina de Ishihara) |
| **Contactos: PPD / IGRA** | **— necesita (baja-media)**: foto de un PPD leído |
**Faltan:** frotis con BAAR (Ziehl-Neelsen); PPD con induración medida.
**Candidatos:** RX miliar: `biblioteca/02_neumologia/resp-10/02_tbc-miliar_alt1__cto-infecto_p66.jpg`, `biblioteca/07_infectologia/infecto-11/03_tbc-miliar-rx__cto-infecto_p66.jpg`; TBC extensa: `…/resp-10/01_tbc-ghon-cavitacion_alt1__amir-infecto_p112.jpg` (sin usar); escrófula (TBC extrapulmonar, opcional): `07_infectologia/infecto-11/02_escrofula-adenitis-tbc__amir-infecto_p112.jpg`. No hay un frotis de Ziehl-Neelsen ni un PPD.

### resp-11 · Derrame pleural (Light)
| entidad | estado |
|---|---|
| Examen físico | — (no necesita) |
| RX de pie (> 150–200 mL) | foto ✔ `01_derrame-pleural__cto-neumo_p111.jpg` |
| **Ecografía (desde 20 mL) / decúbito lateral** | **— necesita (baja-media)** |
| Trasudado vs exudado / Light | anim `A1_trasudado_exudado_real.mp4` |
| Estudio etiológico, ADA | — (no necesita) |
| TEP como trampa | — (no necesita) |
**Falta:** ecografía pleural. **Candidato** para el decúbito lateral: `biblioteca/02_neumologia/resp-11/01_derrame-pleural_alt1__cto-neumo_p112.jpg` (sin usar). No hay ecografía pleural en el repo.

### resp-12 · Derrame complicado y empiema
| entidad | estado |
|---|---|
| Tres fases | anim `A1_tres_fases.mp4` |
| Empiema: pus macroscópico | **— necesita (media)**: foto del líquido purulento en la jeringa/frasco |
| pH < 7,20 / glucosa | — (no necesita) |
| **Tabiques o loculaciones en la imagen** | **— necesita (media)**: ecografía con septos o TC con "split pleura" |
| Derrame encapsulado | foto ✔ `01_derrame-encapsulado_1__cto-neumo_p111.jpg` (+ `_2` en "Más imágenes" con el rótulo genérico "Derrame pleural (Rx)") |
| Tubo pleural, fibrinolíticos, VATS | — (baja) |
**Faltan:** ecografía/TC con tabiques; aspecto del pus. No están en el repo.

### resp-13 · Neumotórax espontáneo
| entidad | estado |
|---|---|
| Rotura de blebs | anim `A1_bleb_neumotorax.mp4` |
| RX: línea pleural, sin trama, mediastino centrado | foto ✔ `resp-13/neumotorax.jpg` con marcas por paso (muy buena) |
| Primario vs secundario | — (no necesita) |
| Tamaño / conducta | — (baja: esquema de la medición de 2 cm en el hilio) |
| Cirugía VATS | — (baja) |
**Ningún hueco obligatorio.** Problemas: imagen repetida y label vacío (problema 3). Opcional: `biblioteca/02_neumologia/resp-13/01_neumotorax_alt1__cto-radiologia_p23.jpg` (inspiración/espiración, sin usar) en lugar del duplicado.

### resp-14 · Neumotórax a tensión y hemotórax
| entidad | estado |
|---|---|
| Válvula unidireccional / descompresión | anim ×2 (`A1_tension_3d`, `A2_puncion_3d`) |
| Neumotórax a tensión (RX) | foto ✔ `01_neumotorax-a-tension-tc-rx__cto-cirugia_p71.jpg` (con flechas) |
| Diagnóstico clínico (yugulares, tráquea desviada) | — (baja: foto de la ingurgitación yugular) |
| **Hemotórax masivo** | **— necesita (media)** |
| Taponamiento cardíaco | — (baja-media: eco con derrame pericárdico) |
| **Tórax volante** | **— necesita (media)** |
**Faltan:** RX de hemotórax; tórax volante.
**Candidatos:** `biblioteca/10_cirugia/cirugia-10/02_hemotorax-derrame-rx__cto-neumo_p111.jpg`; `biblioteca/10_cirugia/cirugia-10/01_torax_volante__atls_p127.jpg`; `biblioteca/10_cirugia/cirugia-10/03_neumotorax-a-tension__cto-cirugia_p71.jpg` (duplicado de la actual). Repuesto mal nombrado: problema 4.

### resp-15 · Derrame linfocítico: TBC vs cáncer
**No tiene ninguna diapositiva de imagen ni animación.**
| entidad | estado |
|---|---|
| Exudado linfocítico → TBC o cáncer | — |
| Pleuritis TBC: ADA ≥ 40, **biopsia con granulomas caseificantes** | **— necesita (media)**: histología de la biopsia pleural |
| Derrame neoplásico: líquido serohemático, citología | — (baja: foto del líquido serohemático) |
| Pleurodesis con talco / catéter tunelizado | — (baja) |
| TBC vs neoplásico (tabla) | — |
**Falta:** biopsia pleural con granuloma; al menos una RX de un derrame masivo neoplásico para darle ancla visual a la clase. No está en el repo.

### resp-16 · Nódulo pulmonar solitario — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| Definición (< 3 cm), imágenes previas | — |
| Tamaño y bordes / conducta | anim `A1_nodulo_tamano.mp4` |
| Espiculado (malignidad) | foto **ilegible** (problema 1) |
| **Calcificación benigna / popcorn (hamartoma)** | **— necesita (alta)** |
| **Vidrio esmerilado parcial** | **— necesita (media)** |
| **PET-CT con nódulo ávido** | **— necesita (baja-media)** |
**Faltan:** TC con un nódulo espiculado bien visible; TC con un hamartoma en "popcorn"; nódulo en vidrio esmerilado; PET-CT.
**Candidatos:** solo para el diferencial de nódulos múltiples, `biblioteca/19_urologia/uro-10/02_metastasis-pulmonares-bala-de-canon__bailey-love_p1529.jpg` (metástasis "en bala de cañón"). No hay un nódulo ni un hamartoma en el repo.

### resp-17 · Cáncer pulmonar
| entidad | estado |
|---|---|
| Central vs periférico | anim `A1_central_periferico.mp4` |
| Histología (adeno / epidermoide) | foto ✔ ×2 (repuesto `_alt1` = epidermoide, sin usar) |
| Microcítico | — (baja: histología) |
| Paraneoplásicos (SIADH, Cushing, Lambert-Eaton, hipercalcemia) | — (no necesita) |
| Osteoartropatía / acropaquia | foto ✔ `03_acropaquias__amir-reuma_p113.jpg` |
| Tumor de Pancoast | foto ✔ RX `03_rx_tumor_apical_derecho__cxr_p152.jpg` |
| Horner | foto ✔ `02_sindrome_horner__kanski_p821.jpg` (la misma que neuro-07) |
| Masa en la TC | foto ✔ `01_masa-pulmonar-tc__cto-neumo_p139.jpg` |
| **Síndrome de vena cava superior** (edema en esclavina) | **— necesita (media)** |
**Falta:** foto o TC del síndrome de vena cava superior. No está en el repo. Repuesto: `…/resp-17/03_acropaquias_alt1__cto-reuma_p115.jpg`.

### resp-18 · Fibrosis pulmonar idiopática
| entidad | estado |
|---|---|
| Velcro (auscultación) | — (no es una imagen) |
| Acropaquia | foto ✔ |
| Bases / progresión | anim `A1_fibrosis_bases.mp4` |
| TACAR: NIU con panal, bronquiectasias por tracción | foto con el rótulo cambiado (problema 2) + esquemas de patrones ✔ |
| **NINE: vidrio esmerilado** | **— necesita (media)** |
| Causas secundarias (amiodarona, NH) | — (baja) |
| Corticoides contraindicados / antifibróticos | — (no necesita) |
**Falta:** TC con vidrio esmerilado (NINE). **Candidatos:** `biblioteca/02_neumologia/resp-18/01_fpi-rx-y-tc_alt1__cto-neumo_p73.jpg` (TC con panal, sin usar); `…/resp-18/02_patrones-intersticiales_alt1__cto-radiologia_p11.jpg` (líneas B de Kerley: sirve más para resp-22).

### resp-19 · Tromboembolismo pulmonar
| entidad | estado |
|---|---|
| Virchow → TVP → émbolo | anim `A1_tep_3d.mp4` |
| **TVP: pierna edematosa / eco-Doppler sin compresión** | **— necesita (media)** |
| ECG: taquicardia, S1Q3T3 | foto ✔ `01_ecg_tep_s1q3t3__ecg-basics_p195.jpg` |
| Wells / dímero D | — (no necesita) |
| AngioTAC | foto ✔ (sin flecha, problema 6) |
| Arteriografía | foto ✔ |
| **Riesgo intermedio-alto: VD dilatado en la eco** | **— necesita (media)** |
| Trombólisis / anticoagulación | — (no necesita) |
**Faltan:** TVP (clínica o eco-Doppler); ecocardiograma con VD dilatado. Opcional: RX con joroba de Hampton / signo de Westermark. No hay ninguna en el repo (`nefro-13/01_edema_fovea__bates_p559.jpg` es edema con fóvea bilateral: no sirve para la TVP).

### resp-20 · Hemoptisis y bronquiectasias
| entidad | estado |
|---|---|
| Hemoptisis vs hematemesis | — (no necesita) |
| Arterias bronquiales / embolización | anim `A1_hemoptisis_masiva.mp4`; angiografía (baja) |
| Decúbito sobre el lado que sangra | — (baja: esquema) |
| Bronquiectasias: anillo de sello | foto ✔ `01_bronquiectasias-tc__cto-neumo_p68.jpg` |
| FQ / discinesia ciliar (Kartagener) | — (baja) |
**Ningún hueco obligatorio.** Repuestos sin usar: `…/resp-20/01_bronquiectasias-tc_alt1_1__cto-neumo_p86.jpg` (ABPA, bronquiectasias centrales) y `_alt1_2` (RX).

### resp-21 · Insuficiencia respiratoria aguda
Gases, mecanismos (anims `A1_hipoventilacion_real`, `A2_shunt_real`), gradiente A-a, VMNI. **Falta (baja-media):** fotos de los **dispositivos de O₂** (naricera, Venturi, cánula de alto flujo, mascarilla con reservorio), que la clase compara pero no muestra. No están en el repo.

### resp-22 · SDRA — PRIORIDAD ALTA
| entidad | estado |
|---|---|
| Daño alveolar difuso | anim `A1_distres_real.mp4` |
| Criterios de Berlín | — |
| RX: opacidades bilaterales | foto ✔ `01_sdra-infiltrado-bilateral__cto-neumo_p35.jpg` |
| **SDRA vs edema cardiogénico** | **— necesita (alta)**: RX de edema cardiogénico (cardiomegalia, Kerley, derrame) para compararla |
| Ventilación protectora / prono | — (baja: foto del prono) |
**Falta:** RX de edema pulmonar cardiogénico.
**Candidatos:** `biblioteca/02_neumologia/resp-18/02_patrones-intersticiales_alt1__cto-radiologia_p11.jpg` (líneas B de Kerley); `biblioteca/07_infectologia/infecto-14/02_rx_hanta_edema_intersticial__guia-hanta-2009.jpg` (edema intersticial no cardiogénico, del hanta). No hay una RX de edema cardiogénico clásico.

### resp-23 · SAHOS
| entidad | estado |
|---|---|
| **Colapso faríngeo** | **— necesita (baja-media)**: esquema (ver problema 8) |
| Factores de riesgo (obesidad, cuello) | — (baja: Mallampati) |
| Epworth | — (no necesita) |
| Polisomnografía / IAH | foto ✔ `02_polisomnografia_real__commons.jpg` + svg |
| CPAP | — (baja: foto de un paciente con CPAP) |
**Falta:** esquema del colapso faríngeo. *Nota:* la clase no tiene animación.

### resp-24 · Intoxicación por CO
Carboxihemoglobina (anim `A1_carboxihemoglobina.mp4`), curva desplazada (svg `S1_co-curva-disociacion__propio.svg`), saturómetro engañoso, O₂ 100 % / hiperbárica. **Ningún hueco obligatorio.** Opcional (baja): una foto del co-oxímetro o de la cámara hiperbárica.
