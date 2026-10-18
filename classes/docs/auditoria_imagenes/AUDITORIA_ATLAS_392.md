# Auditoría del Atlas de 392 imágenes (revisión visual, imagen por imagen)

Fecha: 2026-10-13. Cada imagen de `books/figuras/atlas_eunacom_2026/` fue mirada y comparada con la imagen que la clase necesita.

**Resultado: 63 correctas (16 %), 66 dudosas (17 %), 263 incorrectas (67 %).**

- OK = muestra lo que la clase necesita. DUDOSA = tema parecido pero no es la imagen pedida (hay que buscar una mejor). MAL = no corresponde.
- Problemas repetidos: páginas enteras escaneadas en vez de figuras (todo ob/gin), la misma imagen usada para varias filas (80 imágenes en 37 grupos duplicados), fotos de genitales sin relación con el tema (#5, #52, #55, #214, #284), diagramas y cortes histológicos donde se pedía una foto clínica o radiografía.

| # | Clase | Veredicto | Lo que se necesita |
|---|---|---|---|
| 1 | diab-21 | MAL | microaneurismas retinianos aislados (retinopatía diabética no proliferativa leve) |
| 2 | diab-21 | MAL | exudados algodonosos en retinopatía diabética |
| 3 | diab-21 | MAL | neovasos en papila / neovascularización retiniana (retinopatía diabética proliferativa) |
| 4 | diab-22 | OK | test del monofilamento de Semmes-Weinstein 10 g: técnica y puntos de exploración |
| 5 | diab-22 | MAL | úlcera isquémica típica del pie diabético (borde distal, lecho pálido, sin hiperqueratosis) |
| 6 | diab-22 | MAL | osteomielitis del pie diabético: prueba del estilete (probe-to-bone) y/o Rx con osteólisis de falange/metatars |
| 7 | endo-05 | MAL | gammagrafía tiroidea "en blanco", sin captación (tiroiditis subaguda de De Quervain / tiroiditis silente o pos |
| 8 | endo-05 | MAL | gammagrafía de Graves con captación difusa aumentada, para contrastar con la tiroiditis (existe en endo-07; fa |
| 9 | endo-05 | MAL | eco Doppler tiroideo hipervascular en tirotoxicosis por amiodarona tipo 1 (candidata sin usar: `endo-06/03_eco |
| 10 | endo-05 | MAL | eco Doppler tiroideo avascular en tirotoxicosis por amiodarona tipo 2 |
| 11 | endo-18 | MAL | fractura de Colles (radio distal) por fragilidad |
| 12 | endo-19 | DUDOSA | líneas de Looser-Milkman (seudofracturas) en cuello femoral / ramas del pubis en osteomalacia |
| 13 | nefro-13 | MAL | lipiduria: cuerpos ovales grasos con "cruz de Malta" bajo luz polarizada en el sedimento urinario |
| 14 | nefro-16 | DUDOSA | Rx/TC de tórax con infiltrados alveolares bilaterales por hemorragia alveolar (síndrome de Goodpasture) |
| 15 | nefro-16 | OK | nódulos pulmonares cavitados en granulomatosis con poliangeítis (Wegener) |
| 16 | nefro-20 | DUDOSA | displasia fibromuscular de arteria renal en "collar de perlas" |
| 17 | hem-06 | MAL | RM de médula espinal en degeneración combinada subaguda: hiperintensidad T2 de cordones posteriores ("V invert |
| 18 | hem-08 | OK | déficit de G6PD: células mordidas (bite cells) en frotis y cuerpos de Heinz en tinción supravital |
| 19 | hem-11, hem-13 | MAL | hemartrosis aguda de rodilla en niño con hemofilia (o Rx de artropatía hemofílica); reemplaza el dibujo histór |
| 20 | hem-17 | MAL | frotis de LLC con sombras de Gümprecht (smudge cells) señaladas |
| 21 | hem-20 | MAL | frotis con dacriocitos (hematíes en lágrima) en mielofibrosis (el repuesto `_alt1` no los muestra) |
| 22 | neuro-03 | DUDOSA | TC de hematoma cerebeloso ≥ 3 cm (indicación quirúrgica urgente) |
| 23 | neuro-04 | MAL | parálisis del III par con ptosis, midriasis y ojo abajo-afuera (aneurisma de comunicante posterior) |
| 24 | neuro-14 | MAL | RM coronal con atrofia hipocampal (enfermedad de Alzheimer) |
| 25 | neuro-19 | MAL | síndrome del túnel carpiano: atrofia tenar y maniobras de Phalen y Tinel |
| 26 | neuro-23 | DUDOSA | miembro inferior acortado y en rotación externa (fractura de cadera) |
| 27 | resp-16 | MAL | TC con nódulo pulmonar espiculado < 3 cm bien visible (hoy se usa una masa de resp-17) |
| 28 | resp-16 | DUDOSA | hamartoma pulmonar con calcificación en "palomitas de maíz" (popcorn) / calcificación benigna central o lamina |
| 29 | resp-22 | OK | RX de edema pulmonar cardiogénico clásico: cardiomegalia, redistribución de flujo, derrame pleural (hoy solo h |
| 30 | gastro-03, gastro-05 | DUDOSA | cáncer de esófago estenosante en endoscopía o esofagograma con estenosis irregular en "manzana mordida" |
| 31 | gastro-03 | MAL | divertículo de Zenker en esofagograma con bario (divertículo faringoesofágico) |
| 32 | gastro-04 | MAL | síndrome de Boerhaave: Rx/TC de tórax con neumomediastino y enfisema subcutáneo |
| 33 | gastro-04, gastro-21 | OK | desgarro de Mallory-Weiss en la unión gastroesofágica (endoscopía) |
| 34 | gastro-04 | MAL | esofagitis cáustica en endoscopía (clasificación de Zargar) |
| 35 | gastro-15, gastro-21 | OK | várices esofágicas en endoscopía y ligadura con bandas |
| 36 | gastro-15 | MAL | asterixis (temblor en aleteo) en encefalopatía hepática |
| 37 | gastro-24 | DUDOSA | Rx de abdomen con fecaloma en niño (constipación funcional) |
| 38 | infecto-19 | OK | carbunco inhalatorio: Rx de tórax con mediastino ensanchado |
| 39 | infecto-19 | MAL | loxoscelismo cutáneo (araña de rincón): placa livedoide violácea con necrosis central |
| 40 | infecto-19, infecto-24 | OK | ectima gangrenoso (úlcera necrótica por Pseudomonas en neutropénico) |
| 41 | infecto-22 | MAL | Kawasaki: labios rojos fisurados y lengua en frambuesa |
| 42 | infecto-22 | OK | Kawasaki: inyección conjuntival bulbar bilateral sin secreción (la foto actual es la descamación de dedos) |
| 43 | infecto-22 | OK | Kawasaki: edema indurado y eritema de manos y pies en fase aguda |
| 44 | reuma-12 | MAL | facies esclerodérmica: microstomía, pliegues peribucales y telangiectasias |
| 45 | reuma-12 | MAL | Rx de manos con calcinosis subcutánea y acroosteólisis de falanges distales |
| 46 | reuma-12, reuma-14 | OK | úlceras digitales de pulpejos / necrosis digital (Raynaud secundario) |
| 47 | reuma-12 | MAL | TAC de tórax con enfermedad pulmonar intersticial (patrón NINE) en esclerodermia |
| 48 | reuma-17 | MAL | test de Schöber: medición de la flexión lumbar |
| 49 | reuma-17, reuma-20 | DUDOSA | uveítis anterior aguda: ojo rojo con inyección ciliar e hipopión (estéril en Behçet) |
| 50 | reuma-17 | MAL | Rx comparativa de columna: sindesmofitos finos (EA) vs osificación "en cera derretida" (DISH) (el recorte `_al |
| 51 | reuma-18 | MAL | Rx con deformidad en "lápiz en copa" (pencil-in-cup) de interfalángicas |
| 52 | reuma-20 | MAL | úlcera genital (escrotal o vulvar) con cicatriz residual |
| 53 | cirugia-01 | MAL | ecografía de apendicitis aguda: apéndice no compresible, diámetro mayor de 6 mm, en corte transversal "en dian |
| 54 | cirugia-06 | MAL | hernia inguinal indirecta inguinoescrotal en el adulto (foto clínica de pie) |
| 55 | cirugia-06 | MAL | hernia crural: masa bajo el ligamento inguinal en mujer añosa |
| 56 | cirugia-07 | MAL | hemorroide externa trombosada: nódulo violáceo, tenso, en el margen anal |
| 57 | cirugia-13 | MAL | escarotomía en quemadura circular de tercer grado (extremidad o tórax) |
| 58 | trauma-04 | OK | mano caída (muñeca péndula) por lesión del nervio radial en fractura de diáfisis humeral |
| 59 | trauma-04 | OK | Rx de fractura supracondílea de húmero en niño (lateral de codo) |
| 60 | trauma-06 | MAL | Rx de pseudoartrosis hipertrófica: extremos ensanchados "en pata de elefante" |
| 61 | trauma-06 | DUDOSA | Rx de pseudoartrosis atrófica: extremos afinados "en punta de lápiz" |
| 62 | trauma-10 | MAL | posición impúdica: miembro inferior acortado y en rotación externa en adulto mayor |
| 63 | trauma-12 | MAL | podagra: primer ortejo rojo, caliente e hinchado |
| 64 | uro-05 | MAL | eco Doppler testicular sin flujo arterial y signo del remolino en el cordón |
| 65 | uro-05 | DUDOSA | signo de Gouverneur: testículo ascendido y horizontal en adolescente |
| 66 | uro-07 | MAL | varicocele izquierdo: "bolsa de gusanos" sobre el testículo (foto de pie) o eco Doppler con venas dilatadas qu |
| 67 | uro-10 | MAL | Rx de tórax legible con metástasis pulmonares en "bala de cañón" (múltiples nódulos redondos bilaterales) |
| 68 | orl-02 | MAL | otoscopía de colesteatoma: perforación atical o marginal con escamas blanco nacaradas |
| 69 | orl-04 | MAL | niño con pabellón auricular desplazado hacia adelante y abajo, eritema y edema retroauricular |
| 70 | orl-12 | MAL | hematoma septal: abombamiento violáceo y bilateral del tabique que ocluye ambas fosas |
| 71 | orl-12 | MAL | pólipos nasales translúcidos "en uva pelada" en la rinoscopía anterior o endoscopía |
| 72 | orl-14 | MAL | abombamiento del pilar anterior con úvula desviada al lado sano |
| 73 | orl-14 | DUDOSA | Rx lateral de cuello de un niño con espacio prevertebral ensanchado |
| 74 | orl-16 | MAL | carcinoma glótico o leucoplasia de cuerda vocal en laringoscopía |
| 75 | oftal-01 | MAL | hiposfagma: hemorragia subconjuntival roja homogénea que oculta los vasos, córnea clara |
| 76 | oftal-01 | MAL | uveítis anterior aguda: inyección ciliar, pupila en miosis, precipitados queráticos |
| 77 | oftal-02 | OK | conjuntivitis hiperaguda gonocócica / oftalmía neonatal: secreción purulenta abundante y quemosis |
| 78 | oftal-03 | OK | chalazión: nódulo firme indoloro en el tarso del párpado superior, sin signos inflamatorios |
| 79 | oftal-15 | DUDOSA | pupila en gota apuntando a la herida con prolapso de iris; signo de Seidel positivo con fluoresceína |
| 80 | derma-02 | DUDOSA | acné nódulo-quístico / conglobata con nódulos, quistes y cicatrices atróficas en cara o espalda |
| 81 | derma-06 | MAL | eccema herpético de Kaposi: vesículas umbilicadas y erosiones en sacabocado sobre dermatitis atópica |
| 82 | derma-11 | OK | pénfigo vulgar oral: erosiones dolorosas en mucosa yugal y paladar |
| 83 | derma-13 | OK | melanoma lentiginoso acral en planta del pie o lecho ungueal (signo de Hutchinson) |
| 84 | derma-16 | MAL | surco acarino interdigital con vesícula perlada (sarna) |
| 85 | ped-22 | OK | lactante con arnés de Pavlik colocado |
| 86 | ped-22 | MAL | radiografía de pelvis con displasia del desarrollo de la cadera: índice acetabular aumentado, núcleo femoral s |
| 87 | ped-10 | MAL | enfermedad de Kawasaki: inyección conjuntival bilateral no exudativa y labios rojos fisurados con lengua afram |
| 88 | ob-04 | DUDOSA | Doppler de arteria umbilical con flujo diastólico ausente y con flujo diastólico reverso |
| 89 | ob-04 | DUDOSA | Doppler de ductus venoso con onda a reversa (ausente o invertida) |
| 90 | ob-17 | DUDOSA | registro cardiotocográfico con patrón sinusoidal (anemia fetal grave) |
| 91 | ob-13 | DUDOSA | ecografía transvaginal de placenta previa oclusiva cubriendo el orificio cervical interno |
| 92 | ob-10 | MAL | ecografía transvaginal de aborto incompleto: restos ovulares en la cavidad, endometrio engrosado heterogéneo |
| 93 | gin-07 | MAL | histerosalpingografía con obstrucción tubárica bilateral / hidrosálpinx sin paso de contraste al peritoneo |
| 94 | gin-16 | MAL | ecografía de quiste hemorrágico del cuerpo lúteo con patrón en red de pesca y líquido libre en el fondo de sac |
| 95 | diab-11, diab-12 | MAL | lipohipertrofia abdominal en sitios de inyección de insulina |
| 96 | diab-20 | MAL | glomeruloesclerosis nodular de Kimmelstiel-Wilson (nódulos mesangiales PAS+) |
| 97 | diab-22 | MAL | pie neuropático con dedos en garra/martillo y cabezas metatarsianas prominentes |
| 98 | diab-24 | MAL | arco corneal (arco lipoide) en menor de 45 años |
| 99 | endo-06 | MAL | lámina comparativa de cintigramas: Graves difuso, adenoma tóxico, bocio multinodular tóxico y captación nula ( |
| 100 | endo-07 | OK | bocio compresivo gigante con desviación traqueal (Rx/TAC cervicotorácica o foto clínica) |
| 101 | endo-09 | MAL | ecografía demostrativa de nódulo tiroideo TI-RADS 5 (hipoecogénico, más alto que ancho, márgenes irregulares,  |
| 102 | endo-09 | MAL | ecografía de nódulo tiroideo benigno: espongiforme / quiste simple |
| 103 | endo-10 | MAL | ecografía de carcinoma papilar con microcalcificaciones y adenopatía cervical metastásica |
| 104 | endo-13 | OK | síndrome de Waterhouse-Friderichsen: púrpura fulminante meningocócica + hemorragia suprarrenal bilateral |
| 105 | endo-14 | MAL | TAC suprarrenal: adenoma de Conn vs hiperplasia suprarrenal bilateral |
| 106 | endo-16 | MAL | osteítis fibrosa quística: resorción subperióstica de falanges y cráneo en "sal y pimienta" |
| 107 | endo-16 | DUDOSA | gammagrafía con sestamibi-Tc99m mostrando adenoma paratiroideo |
| 108 | endo-20 | DUDOSA | craneofaringioma quístico y calcificado en RM/TAC |
| 109 | endo-24 | MAL | MEN 2B: neuromas mucosos en labios y lengua, hábito marfanoide |
| 110 | nefro-02 | MAL | orina color té / oscura en rabdomiólisis (mioglobinuria) |
| 111 | nefro-05 | OK | RM de mielinólisis pontina central: hiperintensidad pontina en T2/FLAIR "en tridente / alas de murciélago" (sí |
| 112 | nefro-13 | MAL | amiloidosis renal: tinción rojo Congo con birrefringencia verde manzana |
| 113 | nefro-14 | DUDOSA | biopsia real de glomerulopatía: nefropatía membranosa con tinción de plata ("spikes") y/o microscopía electrón |
| 114 | nefro-15 | MAL | orina color coca-cola (hematuria macroscópica glomerular) |
| 115 | nefro-16 | OK | biopsia renal con semiluna glomerular (crescent) |
| 116 | nefro-16 | MAL | inmunofluorescencia glomerular lineal (anti-MBG) vs granular (inmunocomplejos) |
| 117 | nefro-17 | MAL | nefritis lúpica clase IV: lesiones en "asas de alambre" (wire loops) |
| 118 | nefro-21 | DUDOSA | absceso renal en TAC con contraste |
| 119 | hem-01 | DUDOSA | reticulocitos con tinción supravital (azul de cresil brillante) |
| 120 | hem-03 | OK | queilitis angular (estomatitis angular) en anemia ferropénica |
| 121 | hem-03 | OK | frotis demostrativo de anemia ferropénica: microcitosis, hipocromía marcada (palidez central amplia), anisocit |
| 122 | hem-06 | MAL | aspirado de médula ósea con megaloblastos (asincronía núcleo-citoplasma) |
| 123 | hem-07 | OK | autoaglutinación por crioaglutininas en frotis o en tubo de sangre |
| 124 | hem-07 | MAL | ictericia escleral en síndrome hemolítico |
| 125 | hem-08 | MAL | hemoglobinuria paroxística nocturna: serie de muestras de orina oscura matinal que se aclara en el día |
| 126 | hem-09 | OK | frotis con dianocitos (células en diana) en rasgo talasémico |
| 127 | hem-09 | OK | cuerpos de Howell-Jolly en frotis (asplenia / autoesplenectomía) |
| 128 | hem-09 | MAL | electroforesis de hemoglobina: normal vs rasgo β-talasémico (HbA2 > 3,5 %) vs HbSS |
| 129 | hem-10, hem-15 | MAL | frotis con esquistocitos abundantes (cascos, triángulos) de buena resolución; hoy hem-10 y hem-15 comparten un |
| 130 | hem-13 | DUDOSA | TC de abdomen con hematoma del psoas en hemofilia |
| 131 | hem-17, hem-20 | MAL | esplenomegalia masiva (TC de abdomen o foto con bazo marcado hasta la fosa ilíaca) |
| 132 | hem-18 | MAL | adenopatía cervical o supraclavicular izquierda (ganglio de Virchow) |
| 133 | hem-18 | MAL | linfoma MALT gástrico en endoscopía digestiva alta |
| 134 | hem-20 | MAL | facies pletórica en policitemia vera |
| 135 | hem-20 | MAL | eritromelalgia (pies/manos rojos y ardientes) en policitemia vera / trombocitemia |
| 136 | hem-23 | OK | necrosis cutánea inducida por cumarínicos (warfarina/acenocumarol) |
| 137 | hem-23 | MAL | livedo reticularis en síndrome antifosfolípido (existe en reuma-11/hem-07, pero la clase no la menciona: requi |
| 138 | hem-24 | DUDOSA | Rx de TACO / edema pulmonar cardiogénico (cardiomegalia + congestión) para contrastar con el TRALI ya mostrado |
| 139 | neuro-01 | MAL | infarto lacunar en cápsula interna (TC o RM) |
| 140 | neuro-02 | MAL | RM con difusión (DWI) positiva tras síntomas resueltos (infarto pequeño agudo) |
| 141 | neuro-02 | MAL | eco-Doppler carotídeo con estenosis significativa de carótida interna |
| 142 | neuro-02 | MAL | ECG con fibrilación auricular (causa cardioembólica) |
| 143 | neuro-03 | MAL | hemorragia lobar por angiopatía amiloide (TC) o microsangrados corticales en RM T2*/SWI |
| 144 | neuro-04 | MAL | tubos de LCR con xantocromía (vs punción traumática que se aclara) |
| 145 | neuro-04 | DUDOSA | TC con hidrocefalia aguda (dilatación ventricular) tras HSA |
| 146 | neuro-05 | DUDOSA | TC con infarto venoso hemorrágico (parasagital) |
| 147 | neuro-05 | MAL | trombosis del seno cavernoso: proptosis, quemosis y oftalmoplejía |
| 148 | neuro-05 | DUDOSA | angio-RM venosa con defecto de relleno / ausencia de flujo en seno sagital o transverso |
| 149 | neuro-08 | MAL | hiperplasia gingival por fenitoína |
| 150 | neuro-12 | MAL | RM sagital con signo del colibrí / pingüino (atrofia mesencefálica en parálisis supranuclear progresiva) |
| 151 | neuro-12 | MAL | RM axial con signo de la cruz caliente (hot cross bun) en la protuberancia (atrofia multisistémica) |
| 152 | neuro-12, neuro-15 | MAL | RM FLAIR con leucoaraiosis e infartos lacunares múltiples |
| 153 | neuro-13 | MAL | distonía aguda por metoclopramida/neurolépticos: crisis oculógira o tortícolis |
| 154 | neuro-14 | MAL | hidrocefalia normotensiva (Hakim-Adams): TC/RM con ventriculomegalia desproporcionada a la atrofia |
| 155 | neuro-18 | OK | oftalmoplejía internuclear (fallo de aducción con nistagmo del ojo abductor; foto de posiciones de la mirada o |
| 156 | neuro-18 | OK | RM medular de neuromielitis óptica: mielitis longitudinal extensa (≥ 3 segmentos vertebrales) |
| 157 | neuro-19 | MAL | neuropatía cubital: garra cubital, atrofia hipotenar y signo de Froment |
| 158 | neuro-19 | MAL | neuropatía del peroneo común: pie caído / marcha en estepaje |
| 159 | neuro-20 | MAL | prueba de impulso cefálico (head impulse test, HINTS): normal vs sacada correctiva |
| 160 | resp-02, resp-03 | MAL | técnica inhalatoria: inhalador presurizado (MDI) con aerocámara y dispositivo de polvo seco (turbuhaler) |
| 161 | resp-04 | MAL | TC de tórax con enfisema centrolobulillar y bullas |
| 162 | resp-09 | MAL | carcinoma epidermoide cavitado de pared gruesa (> 15 mm) en RX/TC |
| 163 | resp-09 | DUDOSA | quiste hidatídico pulmonar complicado: signo del camalote / membrana flotante (los de infecto-17 son hepáticos |
| 164 | resp-10 | MAL | baciloscopía con tinción de Ziehl-Neelsen: bacilos ácido-alcohol resistentes (BAAR) |
| 165 | resp-10 | MAL | PPD / tuberculina leído: induración medida en milímetros |
| 166 | resp-12 | DUDOSA | ecografía pleural con derrame tabicado (septos) o TC con signo de la pleura dividida (split pleura) |
| 167 | resp-12 | MAL | líquido pleural purulento (pus macroscópico) en jeringa o frasco: empiema |
| 168 | resp-14 | MAL | tórax volante (respiración paradójica / RX con fracturas costales segmentarias) |
| 169 | resp-15 | MAL | biopsia pleural con granulomas caseificantes (pleuritis tuberculosa) |
| 170 | resp-16 | MAL | nódulo en vidrio esmerilado parcial (subsólido) en TC |
| 171 | resp-17 | OK | síndrome de vena cava superior: edema en esclavina y circulación colateral torácica (o TC con compresión de la |
| 172 | resp-18 | MAL | TC con vidrio esmerilado en neumonía intersticial no específica (NINE) |
| 173 | resp-19 | MAL | trombosis venosa profunda: pierna edematosa unilateral o eco-Doppler con vena no compresible |
| 174 | resp-19 | DUDOSA | ecocardiograma con ventrículo derecho dilatado (TEP de riesgo intermedio-alto) |
| 175 | gastro-05 | DUDOSA | cáncer gástrico incipiente (early gastric cancer) en endoscopía |
| 176 | gastro-06 | MAL | hernia diafragmática traumática: Rx de tórax con estómago/asas en hemitórax izquierdo (adulto) |
| 177 | gastro-06 | OK | masa mediastínica anterior (timoma, linfoma, teratoma, bocio) en Rx/TAC |
| 178 | gastro-08 | OK | colitis pseudomembranosa por Clostridioides difficile en colonoscopía |
| 179 | gastro-10 | MAL | eritema nodoso en piernas (manifestación extraintestinal de EII) |
| 180 | gastro-10 | DUDOSA | pioderma gangrenoso |
| 181 | gastro-10, gastro-12 | MAL | fístula perianal con orificio externo (enfermedad de Crohn perianal / fístula anal) |
| 182 | gastro-11 | DUDOSA | cáncer colorrectal en colonoscopía o enema baritado con imagen en "manzana mordida" |
| 183 | gastro-11 | OK | poliposis adenomatosa familiar: colon con innumerables pólipos (pieza quirúrgica o endoscopía) |
| 184 | gastro-12 | MAL | hemorroide externo trombosado (nódulo perianal violáceo) |
| 185 | gastro-12 | MAL | absceso perianal (tumefacción perianal eritematosa fluctuante) |
| 186 | gastro-13 | MAL | ictericia escleral |
| 187 | gastro-13 | MAL | TAC con masa en cabeza de páncreas y vía biliar dilatada (Courvoisier-Terrier) |
| 188 | gastro-14 | MAL | ecografía de hígado graso / esteatosis hepática ("hígado brillante", hiperecogénico) |
| 189 | gastro-16 | MAL | absceso hepático en ecografía/TC |
| 190 | gastro-16 | MAL | hiperplasia nodular focal con cicatriz central (TC/RM) |
| 191 | gastro-16 | OK | metástasis hepáticas múltiples en TC |
| 192 | gastro-16 | MAL | pólipo vesicular en ecografía (sin sombra acústica, fijo) |
| 193 | gastro-17 | DUDOSA | cáncer de vesícula biliar / vesícula en porcelana (Rx o TC) |
| 194 | gastro-20 | MAL | colitis isquémica: "huellas digitales" (thumbprinting) en Rx/TC o colonoscopía del ángulo esplénico |
| 195 | gastro-20 | MAL | angio-TAC con defecto de llene (émbolo) en arteria mesentérica superior |
| 196 | gastro-26 | MAL | contusión pulmonar en Rx/TC de tórax |
| 197 | gastro-26 | MAL | taponamiento cardíaco: derrame pericárdico en ecografía (ventana subxifoidea FAST) |
| 198 | infecto-02 | MAL | tinción de Gram del LCR con diplococos (Gram + lanceolados de neumococo / Gram − de meningococo) |
| 199 | infecto-04 | OK | gangrena de Fournier (fascitis necrotizante perineal/escrotal) |
| 200 | infecto-08 | OK | deposiciones en "agua de arroz" del cólera (o paciente deshidratado en catre de cólera) |
| 201 | infecto-08 | OK | botulismo: ptosis bilateral y parálisis descendente de pares craneanos |
| 202 | infecto-11 | MAL | baciloscopía con tinción de Ziehl-Neelsen: bacilos ácido-alcohol resistentes (BAAR) |
| 203 | infecto-13 | MAL | uretritis gonocócica: secreción uretral purulenta y/o Gram con diplococos Gram negativos intracelulares |
| 204 | infecto-15 | MAL | vinchuca (Triatoma infestans), insecto vector |
| 205 | infecto-15 | MAL | megacolon chagásico en Rx / enema baritado |
| 206 | infecto-17 | DUDOSA | triquinosis: edema bipalpebral bilateral (o larvas de Trichinella enquistadas en biopsia muscular) |
| 207 | infecto-18 | DUDOSA | sufusión conjuntival en leptospirosis (síndrome de Weil) |
| 208 | infecto-20 | OK | foliculitis: pústulas centradas en folículos pilosos |
| 209 | infecto-20 | MAL | forúnculo / ántrax estafilocócico (nódulo con necrosis central) |
| 210 | infecto-21 | OK | frotis con linfocitos atípicos (células de Downey) en mononucleosis |
| 211 | infecto-21 | OK | TAC cerebral neonatal: calcificaciones periventriculares (CMV congénito) vs difusas (toxoplasmosis congénita) |
| 212 | infecto-23 | MAL | neumonitis varicelosa: Rx con infiltrados nodulares bilaterales |
| 213 | reuma-02 | MAL | bursitis olecraneana o prepatelar (diferencial con artritis séptica) |
| 214 | reuma-03 | MAL | Rx de gota crónica: erosiones "en sacabocado" con bordes colgantes en pie/mano |
| 215 | reuma-05 | OK | uveítis anterior crónica de la AIJ: sinequias posteriores / queratopatía en banda |
| 216 | reuma-06 | MAL | mano reumatoide con dedos en cuello de cisne y en ojal (boutonnière) |
| 217 | reuma-06 | DUDOSA | nódulos reumatoides subcutáneos en el codo |
| 218 | reuma-08 | MAL | úlcera oral indolora en el paladar en lupus |
| 219 | reuma-08 | MAL | artropatía de Jaccoud: deformidades reductibles de manos sin erosiones |
| 220 | reuma-09 | MAL | biopsia de nefritis lúpica clase IV: asas de alambre (wire loops) / semilunas |
| 221 | reuma-10 | MAL | lupus neonatal: lesiones anulares periorbitarias en el lactante ("ojos de mapache") |
| 222 | reuma-13 | MAL | manos de mecánico (síndrome antisintetasa) |
| 223 | reuma-15 | DUDOSA | síndrome sicca: lengua seca depapilada (xerostomía) o queratoconjuntivitis seca con tinción de fluoresceína |
| 224 | reuma-15 | OK | test de Schirmer (tira de papel en el fondo de saco conjuntival) |
| 225 | reuma-21 | MAL | arteria temporal engrosada, nodular y sin pulso |
| 226 | reuma-21 | OK | neuropatía óptica isquémica anterior arterítica: papila pálida y edematosa |
| 227 | reuma-21 | MAL | biopsia de arteria temporal: células gigantes multinucleadas y lámina elástica interna fragmentada |
| 228 | reuma-22 | MAL | granulomatosis con poliangeítis: nódulos pulmonares cavitados bilaterales (Rx/TAC) |
| 229 | reuma-22 | MAL | síndrome riñón-pulmón: hemorragia alveolar difusa con infiltrado alveolar bilateral (Rx/TAC) |
| 230 | cirugia-01 | OK | TAC de plastrón o absceso apendicular: colección con gas en la fosa ilíaca derecha |
| 231 | cirugia-02 | MAL | colecistitis enfisematosa: gas en la pared vesicular (TAC o Rx simple) |
| 232 | cirugia-02 | DUDOSA | síndrome de Mirizzi: cálculo en el cístico que comprime el hepático común (colangio-RM o CPRE) |
| 233 | cirugia-03 | DUDOSA | TAC legible de diverticulitis no complicada: sigmoides engrosado con divertículos y estriación de la grasa per |
| 234 | cirugia-03 | DUDOSA | TAC de diverticulitis con absceso pericólico (Hinchey Ib/II) y drenaje percutáneo (panel B de CTO Digestivo p1 |
| 235 | cirugia-04 | DUDOSA | TAC de obstrucción de delgado con zona de transición (asas dilatadas proximales, colapsadas distales) |
| 236 | cirugia-06 | MAL | hernia umbilical incarcerada con signos inflamatorios (foto real de CTO Cirugía p56, Fig. 8.2) |
| 237 | cirugia-07 | MAL | absceso perianal: aumento de volumen eritematoso y fluctuante junto al ano |
| 238 | cirugia-07 | MAL | regla de Goodsall: orificio externo anterior (trayecto recto) vs posterior (trayecto curvo a la línea media po |
| 239 | cirugia-10 | MAL | taponamiento cardíaco en eco FAST subxifoidea: derrame pericárdico anecoico |
| 240 | cirugia-11 | MAL | signo del cinturón de seguridad: equimosis transversa en la pared abdominal |
| 241 | cirugia-13 | OK | quemadura de vía aérea: vibrisas chamuscadas, hollín en boca y nariz |
| 242 | cirugia-16 | MAL | atelectasia en Rx de tórax: opacidad basal laminar con pérdida de volumen |
| 243 | cirugia-16 | MAL | infección de herida operatoria: eritema, calor y salida de pus por la incisión |
| 244 | cirugia-16 | MAL | trombosis venosa profunda: pantorrilla asimétrica y edematosa, o eco-Doppler con trombo venoso no compresible |
| 245 | trauma-03 | MAL | embolia grasa: petequias en tórax superior, cuello y axilas tras fractura de fémur |
| 246 | trauma-03 | MAL | contractura isquémica de Volkmann: mano en garra con flexión de muñeca y dedos |
| 247 | trauma-04 | OK | luxación anterior de hombro: signo de la charretera y Rx AP con cabeza humeral subcoracoidea |
| 248 | trauma-07 | MAL | Rx de fractura bimaleolar de tobillo (AP de mortaja) |
| 249 | trauma-07 | MAL | Rx de fractura por avulsión de la base del quinto metatarsiano |
| 250 | trauma-08 | MAL | RM de rotura meniscal: línea hiperintensa que llega a la superficie del menisco |
| 251 | trauma-09 | MAL | quiste de Baker: eco o RM poplítea con colección entre gastrocnemio medial y semimembranoso |
| 252 | trauma-09 | MAL | rotura del tendón de Aquiles: depresión palpable sobre el tendón y maniobra de Thompson |
| 253 | trauma-10 | DUDOSA | Rx de luxación posterior de cadera (cabeza femoral fuera del acetábulo, arriba y atrás) |
| 254 | trauma-13 | DUDOSA | Rx de osteosarcoma de fémur distal con reacción perióstica en "sol naciente" y triángulo de Codman |
| 255 | trauma-14 | MAL | Rx de pelvis con displasia de cadera: núcleo femoral arriba y afuera, ángulo acetabular aumentado |
| 256 | trauma-14 | DUDOSA | pie bot congénito sin tratar: equino, varo, cavo y aducto |
| 257 | trauma-14 | MAL | test de Adams: giba costal al inclinarse hacia adelante |
| 258 | trauma-15 | DUDOSA | RM lumbar sagital con hernia discal L4-L5 o L5-S1 comprimiendo la raíz |
| 259 | uro-05 | MAL | signo del punto azul en el polo superior del testículo |
| 260 | uro-06 | MAL | eco Doppler con epidídimo engrosado e hipervascular (hiperemia) |
| 261 | uro-11 | MAL | TAC trifásico con masa renal sólida que realza con contraste (carcinoma de células claras) |
| 262 | uro-14 | DUDOSA | TAC de quiste renal complejo Bosniak III/IV: tabiques gruesos o nódulo sólido que realza |
| 263 | uro-15 | MAL | orina color coca-cola (glomerular) frente a orina roja con coágulos (urológica) |
| 264 | orl-03 | DUDOSA | tejido de granulación en el piso del conducto auditivo de un diabético, o TAC de peñasco con osteólisis |
| 265 | orl-04 | OK | TAC de peñasco con mastoiditis coalescente: celdas ocupadas, lisis de trabéculas y absceso subperióstico |
| 266 | orl-05 | MAL | audiograma de hipoacusia de conducción (brecha óseo-aérea) frente a sensorioneural (aire y hueso caen juntos) |
| 267 | orl-14 | MAL | TAC de cuello con contraste: colección con realce periférico en el espacio parafaríngeo |
| 268 | orl-15 | DUDOSA | amígdalas grado cuatro de Brodsky que se tocan en la línea media |
| 269 | orl-15 | DUDOSA | facies adenoidea: boca abierta, cara alargada, respirador bucal |
| 270 | orl-16 | MAL | edema de Reinke: cuerdas vocales edematosas y translúcidas en fumador |
| 271 | orl-17 | MAL | Rx lateral de cuello con "signo del pulgar" (epiglotis engrosada) |
| 272 | oftal-08 | MAL | catarata madura blanca (cristalino blanco tras la pupila) o catarata nuclear brunescente |
| 273 | oftal-12 | MAL | neovasos en la papila (NVD) en retinopatía diabética proliferativa |
| 274 | oftal-13 | DUDOSA | arteriolas en hilo de cobre / hilo de plata y cruces arteriovenosos (signo de Gunn y de Salus) |
| 275 | oftal-16 | OK | isquemia límbica: limbo blanco porcelana sin vasos tras quemadura por álcali |
| 276 | oftal-01 | MAL | endoftalmitis postoperatoria: hipopión y ojo rojo tras cirugía de catarata |
| 277 | derma-13 | DUDOSA | nevo melanocítico común adquirido: simétrico, borde regular, color homogéneo, menor de seis milímetros |
| 278 | derma-13 | MAL | melanoma nodular: nódulo azul-negro elevado de crecimiento rápido |
| 279 | derma-15 | MAL | nevo displásico (atípico): mayor de seis milímetros, borde irregular, color variado |
| 280 | derma-11 | MAL | signo de Nikolsky positivo: desprendimiento de la epidermis con presión tangencial (pénfigo / NET) |
| 281 | derma-11 | DUDOSA | IFD de pénfigo vulgar (patrón intercelular en red de pescar) vs penfigoide (depósito lineal en la membrana bas |
| 282 | derma-09 | MAL | dianas atípicas planas de dos anillos con centro purpúrico o ampollar en el tronco (Stevens-Johnson) |
| 283 | derma-05 | OK | psoriasis pustulosa generalizada (von Zumbusch) o eritrodermia psoriásica |
| 284 | derma-07 | MAL | dermatitis irritativa de manos: piel seca, fisurada y eritematosa confinada al área de contacto |
| 285 | derma-01 | MAL | mancha café con leche o mácula de vitíligo (lesión plana, solo cambio de color) |
| 286 | derma-01 | MAL | eritema nudoso: nódulos subcutáneos rojos y dolorosos en región pretibial |
| 287 | derma-16 | OK | tiña pedis interdigital: maceración y fisuras entre los dedos del pie |
| 288 | ped-22 | MAL | ecografía de cadera del lactante (método de Graf) normal vs displásica |
| 289 | ped-07 | MAL | radiografía de tórax pediátrica con infiltrado intersticial peribronquial (neumonía viral / Mycoplasma) |
| 290 | ped-07 | DUDOSA | radiografía de tórax pediátrica con consolidación lobar y broncograma aéreo (las del repo son de adulto) |
| 291 | ped-06 | MAL | radiografía lateral de cuello con epiglotitis: signo del pulgar |
| 292 | ped-06 | DUDOSA | radiografía AP de cuello con signo del campanario (aguja) legible en laringotraqueítis |
| 293 | ped-17 | MAL | recién nacido con ictericia (progresión céfalo-caudal, zonas de Kramer) |
| 294 | ped-17 | MAL | acolia y coluria en atresia de vías biliares (deposición blanca vs tarjeta colorimétrica de heces) |
| 295 | ped-11 | DUDOSA | lactante con deshidratación: ojos hundidos, mucosas secas, fontanela deprimida |
| 296 | ped-12 | OK | radiografía de abdomen con doble burbuja / obstrucción duodenal en recién nacido con vómito bilioso |
| 297 | ob-03 | MAL | registro basal no estresante no reactivo: sin aceleraciones, variabilidad disminuida |
| 298 | ob-02 | MAL | Doppler de arterias uterinas alterado con escotadura protodiastólica (notch) e IP aumentado |
| 299 | ob-04 | MAL | Doppler de arteria cerebral media con vasodilatación (redistribución, índice cerebro-placentario bajo) |
| 300 | ob-13 | MAL | vasa previa: vasos fetales sobre el orificio cervical en Doppler color transvaginal |
| 301 | ob-16 | MAL | planos de Hodge / estaciones de De Lee en relación con las espinas ciáticas |
| 302 | ob-18 | MAL | inversión uterina: fondo uterino invertido protruyendo por la vagina |
| 303 | ob-20 | MAL | hidrops fetal en ecografía: ascitis, derrame pleural y edema subcutáneo |
| 304 | gin-16 | MAL | signo del remolino (whirlpool) del pedículo vascular en torsión anexial, Doppler color |
| 305 | gin-01 | MAL | síndrome de Turner: talla baja, pterigion colli, tórax en escudo |
| 306 | gin-02 | MAL | hirsutismo facial / escala de Ferriman-Gallwey |
| 307 | gin-03 | MAL | pólipo endometrial en ecografía transvaginal (o sonohisterografía) e histeroscopía |
| 308 | gin-04 | MAL | ecografía transvaginal legible de mioma: nódulo hipoecogénico bien delimitado que deforma la cavidad (submucos |
| 309 | gin-05 | MAL | ecografía de adenomiosis: útero globoso, miometrio heterogéneo asimétrico con sombras en rayos de sol |
| 310 | gin-06 | MAL | prolapso genital / cistocele (POP-Q estadio III-IV) |
| 311 | gin-11 | MAL | síndrome de Fitz-Hugh-Curtis: adherencias perihepáticas en cuerdas de violín en laparoscopía |
| 312 | gin-13 | MAL | citología cervical (PAP) con lesión intraepitelial de alto grado (LIEAG) |
| 313 | gin-13 | MAL | cáncer cervicouterino invasor: masa exofítica friable o úlcera en el cuello a la especuloscopía |
| 314 | sp-05 | MAL | genograma familiar de tres generaciones con simbología estándar (cuadrado, círculo, fallecido, vínculos confli |
| 315 | sp-05 | MAL | ecomapa de una familia con su entorno: líneas de vínculo fuerte, débil y estresante hacia escuela, trabajo, CE |
| 316 | diab-01 | MAL | acantosis nigricans en cuello/axila y acrocordones en el paciente DM2 (existe en diab-02; falta narrarla aquí) |
| 317 | diab-08 | MAL | candidiasis genital por gliflozinas (vulvovaginitis candidiásica / balanitis candidiásica) |
| 318 | endo-10 | MAL | carcinoma anaplásico de tiroides: masa cervical pétrea de crecimiento rápido en adulto mayor |
| 319 | endo-11 | MAL | TAC suprarrenal: adenoma (pequeño, homogéneo) vs carcinoma suprarrenal (> 4–6 cm) |
| 320 | endo-18 | MAL | osteonecrosis mandibular por bifosfonatos |
| 321 | endo-18 | MAL | fractura atípica subtrocantérea de fémur por bifosfonatos |
| 322 | nefro-18 | MAL | fístula arteriovenosa radiocefálica (Brescia-Cimino) para hemodiálisis |
| 323 | nefro-19 | OK | calcifilaxis (arteriolopatía urémica calcificante): úlceras necróticas cutáneas |
| 324 | nefro-19 | MAL | osteodistrofia renal: columna "en camiseta de rugby" (rugger-jersey spine) |
| 325 | nefro-20 | MAL | estenosis ateroesclerótica ostial de arteria renal |
| 326 | hem-04 | DUDOSA | tinción de Perls (azul de Prusia) en médula ósea: hierro en macrófagos sin sideroblastos |
| 327 | hem-10 | MAL | colitis hemorrágica / diarrea con sangre en niño con SHU por E. coli productora de Shiga (STEC O157:H7) |
| 328 | hem-12 | OK | pseudotrombocitopenia por EDTA: agregados plaquetarios en el frotis |
| 329 | hem-13 | MAL | sangrado mucocutáneo en enfermedad de von Willebrand (epistaxis, gingivorragia) |
| 330 | hem-16 | MAL | frotis de leucemia linfoblástica aguda B común (linfoblastos pequeños sin granulación), en contraste con la LM |
| 331 | hem-20 | MAL | frotis con trombocitosis en trombocitemia esencial |
| 332 | hem-20 | OK | neutrófilo pseudo-Pelger-Huët hipogranular en síndrome mielodisplásico |
| 333 | hem-22 | OK | metástasis vertebral lítica con aplastamiento (Rx o TC de columna) |
| 334 | neuro-02 | DUDOSA | émbolo de colesterol de Hollenhorst en arteriola retiniana (amaurosis fugaz) |
| 335 | neuro-04 | MAL | síndrome de Terson: hemorragias subhialoideas/vítreas |
| 336 | neuro-07 | MAL | mapa dermatómico de las ramas del trigémino V1, V2, V3 |
| 337 | neuro-10 | MAL | mordedura lateral de la lengua tras crisis tónico-clónica |
| 338 | neuro-11 | MAL | foto real de paciente con Parkinson: facies amímica / postura y marcha festinante (hoy es un dibujo) |
| 339 | neuro-17 | MAL | estimulación nerviosa repetitiva a 3 Hz con respuesta decremental |
| 340 | neuro-20 | MAL | audiometría de enfermedad de Menière: hipoacusia neurosensorial de frecuencias graves |
| 341 | resp-11 | MAL | ecografía pleural con derrame anecoico |
| 342 | resp-15 | MAL | RX de derrame pleural masivo neoplásico (o líquido pleural serohemático) como ancla visual de la clase |
| 343 | resp-16 | DUDOSA | PET-CT con nódulo pulmonar hipercaptante (FDG ávido) |
| 344 | resp-21 | MAL | dispositivos de oxígeno: naricera, mascarilla Venturi, mascarilla con reservorio, cánula nasal de alto flujo |
| 345 | resp-23 | MAL | esquema del colapso de la vía aérea faríngea durante el sueño |
| 346 | gastro-23, gastro-08 | OK | trofozoíto de Giardia lamblia en microscopía |
| 347 | gastro-25 | MAL | atresia esofágica: Rx con sonda nasogástrica enrollada en el bolsón esofágico |
| 348 | infecto-24 | MAL | TAC de tórax con signo del halo (aspergilosis pulmonar invasora) |
| 349 | reuma-19 | MAL | gonococcemia diseminada: pústula hemorrágica acral (diferencial con artritis séptica) |
| 350 | cirugia-02 | MAL | cintigrafía HIDA con vesícula que no se llena (obstrucción del cístico) |
| 351 | cirugia-03 | MAL | TAC de diverticulitis perforada con aire libre y líquido (Hinchey III-IV) |
| 352 | cirugia-04 | OK | TAC con neumatosis intestinal y gas portal (asa necrosada) |
| 353 | cirugia-05 | DUDOSA | Rx de tórax de pie con neumoperitoneo evidente: semiluna de aire bajo ambos hemidiafragmas |
| 354 | cirugia-08 | MAL | RM de sarcoma de partes blandas: masa profunda mayor de cinco centímetros |
| 355 | cirugia-10 | MAL | neumotórax abierto con parche fijado en tres lados |
| 356 | cirugia-11 | MAL | signos de Cullen (periumbilical) y Grey Turner (flancos) |
| 357 | cirugia-17 | MAL | infección incisional superficial con puntos retirados y curación abierta |
| 358 | cirugia-18 | DUDOSA | mordedura de gato: punciones finas y profundas con celulitis |
| 359 | trauma-01 | OK | Rx AP y lateral de fractura diafisaria (dos proyecciones, incluyendo articulaciones vecinas) |
| 360 | trauma-03 | MAL | distrofia simpático refleja: Rx con osteoporosis moteada de mano o pie |
| 361 | trauma-06 | MAL | consolidación viciosa: Rx de fractura consolidada con angulación |
| 362 | trauma-07 | MAL | Rx de fractura de Maisonneuve (cuello del peroné con lesión de tobillo) |
| 363 | trauma-11 | MAL | tenosinovitis de De Quervain: prueba de Finkelstein |
| 364 | trauma-12 | MAL | artritis séptica de rodilla: derrame a tensión, eritema; artrocentesis con líquido purulento |
| 365 | uro-02 | MAL | globo vesical: masa suprapúbica mate o eco con vejiga distendida y gran residuo |
| 366 | uro-07 | MAL | eco demostrativa de quiste de epidídimo: lesión anecoica en la cabeza del epidídimo, separada del testículo |
| 367 | uro-07 | MAL | transiluminación positiva de hidrocele |
| 368 | uro-08 | MAL | RM multiparamétrica con lesión sospechosa en la zona periférica |
| 369 | orl-12 | MAL | nariz en silla de montar por necrosis del cartílago septal |
| 370 | orl-18 | DUDOSA | Rx con pila de botón (doble contorno) en esófago o nariz |
| 371 | orl-20 | MAL | masa cervical lateral metastásica en adulto mayor de cuarenta años |
| 372 | oftal-05 | OK | escleromalacia perforante: esclera adelgazada con úvea azulada visible |
| 373 | oftal-17 | DUDOSA | trombosis séptica del seno cavernoso: proptosis y oftalmoplejía bilateral / TAC con contraste |
| 374 | oftal-18 | MAL | RM de órbita con gadolinio: realce del nervio óptico en neuritis óptica |
| 375 | derma-04 | DUDOSA | tricoscopia de alopecia areata: pelos en signo de exclamación |
| 376 | derma-16 | DUDOSA | tiña cruris: placa bilateral de borde activo en pliegues inguinales |
| 377 | derma-07 | OK | costra láctea: escamas amarillentas grasosas en cuero cabelludo del lactante |
| 378 | psiq-10 | MAL | crisis oculógira o tortícolis aguda tras inicio de haloperidol / risperidona |
| 379 | psiq-10 | MAL | discinesia tardía orofacial: movimientos de lengua y labios (idealmente video) |
| 380 | psiq-10 | MAL | esquema sagital del encéfalo con las vías mesolímbica, mesocortical, nigroestriada y tuberoinfundibular |
| 381 | ped-10 | OK | escarlatina: exantema en piel de lija con líneas de Pastia en pliegues (la del repo no se distingue) |
| 382 | ped-12 | MAL | deposición en jalea de grosella en invaginación intestinal |
| 383 | ped-13 | OK | cintigrama renal DMSA con cicatriz cortical |
| 384 | ob-10 | MAL | ecografía de aborto completo: cavidad vacía con endometrio fino |
| 385 | ob-17 | MAL | signo de la tortuga: cabeza fetal retraída contra el periné |
| 386 | ob-11 | MAL | ecografía con líquido libre / hemoperitoneo en el fondo de saco de Douglas (ectópico roto) |
| 387 | gin-13 | MAL | test de Schiller: zona yodo negativa en el cuello uterino |
| 388 | gin-09 | MAL | vaginosis bacteriana: flujo gris homogéneo en la especuloscopía |
| 389 | gin-10 | MAL | quiste de la glándula de Bartolino indoloro, sin eritema |
| 390 | gin-14 | MAL | telorrea hemática uniporo (papiloma intraductal) |
| 391 | sp-10 | MAL | esquema del sesgo de duración: el tamizaje periódico capta más tumores de crecimiento lento que rápido |
| 392 | sp-02 | MAL | Formulario de Constancia de Información al Paciente GES (Superintendencia de Salud) |
