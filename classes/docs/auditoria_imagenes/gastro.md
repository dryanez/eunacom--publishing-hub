# Auditoría de imágenes — Gastroenterología (gastro-01 a gastro-26)

Fecha: 2026-10-08 · Solo lectura (no se modificó ninguna clase ni archivo de medios).

Método: se extrajo de cada `classes/lessons/gastro-XX.cjs` lo que la clase enseña (títulos, nodos de flujo, tarjetas, tablas) y lo que muestra (diapositivas `type: 'image'`; `.mp4` = animación, resto = foto en `classes/media/<src>`). Se cruzó con `classes/media/biblioteca/indice.json` (pie de figura de cada foto) y se abrieron las fotos dudosas.

Leyenda de estado: **foto** · **anim** (animación) · **NO** = no se muestra. En "¿la necesita?": **sí** = existe una imagen reconocible que el EUNACOM pregunta; **no** = contenido de dosis, criterios, scores o conducta.

Nota sobre los libros: los PDF `books/dist/Modulo_1_Medicina_Interna/Manual_EUNACOM_Gastroenterologia_Completo_2026.pdf` reproducen exactamente las mismas figuras de las clases ("Imagen 1.1 … 6.4", mismos títulos), así que **no aportan candidatas nuevas**. Las candidatas útiles están en la biblioteca: variantes `_alt` sin usar y carpetas de otras especialidades (`10_cirugia`, `15_pediatria`, `12_oftalmologia`, `08_reumatologia`, `07_infectologia`).

## Resumen

| clase | tema | entidades enseñadas (n) | con foto | con animación | sin imagen y la necesita | prioridad |
|---|---|---|---|---|---|---|
| gastro-01 | ERGE y Barrett | 6 | 2 | 1 | 0 | baja |
| gastro-02 | Úlcera péptica y H. pylori | 6 | 3 | 1 | 1 | baja |
| gastro-03 | Disfagia (cáncer, acalasia, esclerodermia, Zenker) | 6 | 1 | 1 | 3 | **alta** |
| gastro-04 | Perforación y cáustico | 4 | 1 | 1 | 3 | **alta** |
| gastro-05 | Cáncer de esófago y gástrico | 5 | 1 | 0 | 2 | media |
| gastro-06 | Hernia hiatal, diafragmática, mediastino | 5 | 2 | 1 | 2 | media |
| gastro-07 | Trastornos funcionales / SII | 3 | 0 | 0 | 0 | baja |
| gastro-08 | Diarrea y constipación del adulto | 6 | 0 | 1 | 1 | baja |
| gastro-09 | Malabsorción y celíaca | 6 | 2 | 1 | 0 | baja |
| gastro-10 | EII (CU vs Crohn) | 8 | 4 | 2 | 2 | media |
| gastro-11 | Pólipos y cáncer colorrectal | 6 | 1 | 1 | 2 | media |
| gastro-12 | Patología anal | 5 | 3 | 0 | 2 | media |
| gastro-13 | Ictericia y colestasia | 7 | 1 | 1 | 2 | media |
| gastro-14 | Hepatitis | 7 | 0 (1 esquema) | 1 | 1 | baja |
| gastro-15 | Cirrosis y complicaciones | 7 | 5 | 1 | 2 | **alta** |
| gastro-16 | Lesiones hepáticas y vesiculares | 9 | 3 | 1 | 4 | media |
| gastro-17 | Litiasis biliar | 6 | 3 | 1 | 1 | baja |
| gastro-18 | Pancreatitis aguda | 5 | 4 | 1 | 0 | baja |
| gastro-19 | Apendicitis y diverticulitis | 6 | 3 | 1 | 0 | baja |
| gastro-20 | Isquemia mesentérica | 4 | 1 | 1 | 2 | media |
| gastro-21 | Hemorragia digestiva | 7 | 1 | 1 | 2 | media |
| gastro-22 | Cuerpos extraños | 5 | 2 | 0 | 0 | baja |
| gastro-23 | Diarrea pediátrica | 6 | 1 | 0 | 1 | baja |
| gastro-24 | Reflujo del lactante, píloro, constipación | 5 | 0 | 1 | 2 | **alta** |
| gastro-25 | Cirugía digestiva neonatal y pediátrica | 9 | 6 | 1 | 1 | baja |
| gastro-26 | Trauma abdominal y torácico | 7 | 2 | 0 | 3 | media |

Totales: 26 clases · 156 entidades · 52 con foto · 21 con animación (algunas entidades tienen ambas) · **39 brechas que necesitan imagen** · prioridad alta en 4 clases (gastro-03, 04, 15, 24).

Fotos con problemas: 1 mal rotulada (gastro-10 "Signo de la cuerda"), 1 mostrada sin enseñarse (gastro-25 malrotación), varias duplicadas o con narración genérica (gastro-01, 11, 18, 25).

---

## gastro-01 · ERGE y esófago de Barrett — prioridad baja

| entidad | estado | ¿la necesita? |
|---|---|---|
| Mecanismo del reflujo (EEI, hernia) | anim (`A1_reflujo_barrett.mp4`) | — |
| ERGE típica / atípica (clínica) | NO | no |
| Signos de alarma → endoscopía | NO | no |
| Esofagitis erosiva | foto (×2) | — |
| Esófago de Barrett | foto (×2) | — |
| Tratamiento (IBP, fundoplicatura) | NO | no |

- Faltantes: ninguno imprescindible. Opcional: histología de Barrett (metaplasia intestinal con células caliciformes).
- Problema: la diapositiva "Más imágenes del tema" repite las mismas dos figuras (recortes `_2` de las mismas fig. 4.3 y 4.5 de CTO). No suma información.
- Candidata sin usar: `biblioteca/01_gastroenterologia/gastro-01/01_esofago-de-barrett-endoscopia_alt1_1/_2__cto-digestivo_p27.jpg` (Barrett con ácido acético); sirve para reemplazar el duplicado.

## gastro-02 · Úlcera péptica y H. pylori — prioridad baja

| entidad | estado | ¿la necesita? |
|---|---|---|
| H. pylori / mecanismo | anim (`A1_pylori_ulcera.mp4`) | — |
| Úlcera gástrica | foto (Forrest IIc) | — |
| Úlcera duodenal | foto | — |
| Vaso visible | foto | — |
| Perforación (neumoperitoneo) | NO | sí (se enseña "Rx de tórax de pie: neumoperitoneo") |
| Erradicación / indicaciones de EDA | NO | no |

- Faltante: Rx de tórax con neumoperitoneo. Candidatas: `biblioteca/01_gastroenterologia/gastro-04/01_neumoperitoneo-bajo-diafragma__cto-digestivo_p65.jpg`, `biblioteca/10_cirugia/cirugia-05/01_neumoperitoneo*`.
- Nota: la foto "Úlcera gástrica" es la misma figura (CTO fig. 10.6, Forrest IIc) que la alternativa `alt2` de gastro-21.

## gastro-03 · Disfagia: cáncer, acalasia, esclerodermia, Zenker — prioridad ALTA

| entidad | estado | ¿la necesita? |
|---|---|---|
| Deglución normal vs acalasia | anim ×2 (`A1_deglucion_normal_3d.mp4`, `A1_acalasia_3d.mp4`) | — |
| Acalasia: manometría + esofagograma "pico de pájaro" | foto ×2 | — |
| Cáncer de esófago (disfagia lógica) | NO | **sí** — endoscopía de tumor esofágico estenosante / esofagograma con imagen en "manzana mordida" |
| Anillo de Schatzki / estenosis péptica | NO | baja |
| Esclerodermia (CREST) | NO | **sí** — foto de esclerodactilia/telangiectasias o manometría con aperistalsis |
| Divertículo de Zenker | NO | **sí** — esofagograma con bario del divertículo faringoesofágico (imagen clásica de examen) |

- Candidatas en el repo: esclerodactilia `biblioteca/08_reumatologia/reuma-12/01_esclerodactilia__amir-reuma_p99.jpg`; megaesófago chagásico (acalasia secundaria, útil como contraste) `biblioteca/07_infectologia/infecto-15/02_megaesofago_chagas__commons.jpg`; manometrías de acalasia tipo II y III sin usar `gastro-03/01_manometria-de-alta-resolucion-acalasia-i_alt1/_alt2__cto-digestivo_p19.jpg`.
- No hay en el repo: esofagograma de Zenker ni endoscopía de cáncer de esófago (buscar en CTO Digestivo, capítulos de divertículos y tumores de esófago).

## gastro-04 · Perforación (úlcera, Boerhaave) y cáustico — prioridad ALTA

| entidad | estado | ¿la necesita? |
|---|---|---|
| Úlcera perforada → neumoperitoneo | foto + anim (`A1_neumoperitoneo.mp4`) | — |
| Perforación esofágica / Boerhaave | NO | **sí** — Rx/TAC de tórax con neumomediastino y enfisema subcutáneo |
| Mallory-Weiss | NO | **sí** — endoscopía de desgarro longitudinal de la unión gastroesofágica |
| Ingesta de cáustico | NO | **sí** — endoscopía de esofagitis cáustica (grados de Zargar) |

- Candidata sin usar: `gastro-04/01_neumoperitoneo-bajo-diafragma_alt1__cto-radiologia_p27.jpg` (signo de Rigler), sirve como segunda imagen de neumoperitoneo.
- No hay en el repo neumomediastino, Mallory-Weiss ni lesión cáustica; son las tres entidades centrales de la tabla "Examen inicial y lo que está prohibido".

## gastro-05 · Cáncer de esófago y gástrico — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Clínica común (baja de peso, HDA) | NO | no |
| Cáncer de esófago (escamoso vs adenocarcinoma) | NO | **sí** — endoscopía de tumor esofágico |
| Cáncer gástrico avanzado (Borrmann I–IV) | foto + esquema SVG | — |
| Cáncer gástrico incipiente vs avanzado (profundidad) | esquema parcial (SVG de Borrmann) | sí (media) — endoscopía de cáncer gástrico incipiente o esquema de capas mucosa/submucosa/muscular |
| Síndrome pilórico / etapificación | NO | no |

- Nota: la foto de Borrmann (Bailey p1155) es buena (4 paneles a–d).
- Sin candidatas en el repo para cáncer de esófago.

## gastro-06 · Hernia hiatal, hernia diafragmática y mediastino — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Hernia hiatal tipo I (deslizamiento) | anim (`A1_hernia_hiatal.mp4`) | — |
| Hernia paraesofágica | foto (Rx lateral) | — |
| Hernia diafragmática traumática | NO | **sí** — Rx de tórax con estómago/asas en hemitórax izquierdo |
| Compartimentos del mediastino | esquema SVG propio | — |
| Masa mediastínica anterior (timoma, linfoma, teratoma, bocio) | NO | sí (media) — Rx/TAC con masa mediastínica anterior |

- Candidata parcial: `biblioteca/01_gastroenterologia/gastro-25/05_hernia-diafragmatica-congenita__cto-radiologia_p153.jpg` (asas en tórax, pero es neonatal).

## gastro-07 · Trastornos funcionales / SII — prioridad baja

Entidades: concepto de trastorno funcional, Roma IV, signos de alarma ABCDEFH, tratamiento según síntoma. Nada se muestra y nada lo necesita (contenido de criterios). Opcional: escala de Bristol como esquema. No hay carpeta de biblioteca.

## gastro-08 · Diarrea y constipación del adulto — prioridad baja

| entidad | estado | ¿la necesita? |
|---|---|---|
| Definiciones (regla de los 3) | NO | no |
| Planes A/B/C de hidratación | anim (`A1_planes_abc.mp4`) | — |
| Fármacos (loperamida, antibióticos) | NO | no |
| Diarrea prolongada: Giardia/Entamoeba | NO | baja (microscopía) |
| C. difficile | NO | sí (media) — colitis pseudomembranosa en colonoscopía |
| Constipación | NO | no |

No hay carpeta de biblioteca ni candidatas para colitis pseudomembranosa.

## gastro-09 · Malabsorción y enfermedad celíaca — prioridad baja

| entidad | estado | ¿la necesita? |
|---|---|---|
| Sudán / D-xilosa | NO | no |
| Celíaca: atrofia vellositaria | anim + foto (histología) | — |
| Dermatitis herpetiforme | foto | — |
| Signos carenciales (glositis, anemia) | NO | baja |
| Celíaca refractaria / linfoma | NO | no |
| Lactosa vs galactosemia | NO | no |

- Candidatas opcionales: `biblioteca/06_hematologia/hem-06/02_glositis_ferropenia__commons.jpg`, `biblioteca/06_hematologia/hem-03/01_anemia-ferropenica-microcitica-frotis__amir-hemato_p16.jpg`.

## gastro-10 · Enfermedad inflamatoria intestinal — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Colitis ulcerosa (endoscopía) | anim + foto ×2 | — |
| CU en enema (colon sin haustras) | foto | — |
| Crohn (endoscopía, lesiones salteadas) | anim + foto | — |
| Crohn ileal (TC) | foto ×2 | — |
| Signo de la cuerda | **foto mal rotulada** (ver abajo) | sí |
| Megacolon tóxico | foto | — |
| Manifestaciones extraintestinales (eritema nodoso, pioderma, uveítis/epiescleritis, colangitis esclerosante) | NO | **sí** — foto de eritema nodoso y de pioderma gangrenoso |
| Fístulas perianales del Crohn | NO | sí (media) |

- **Foto mal rotulada:** la imagen rotulada "Signo de la cuerda" (`gastro-10/03_crohn-ileal-tc-signo-de-la-cuerda_1__cto-radiologia_p40.jpg`) es una TC con íleon engrosado y "signo del peine" (pie CTO fig. 2.36); la narración dice "el signo de la cuerda". El signo de la cuerda verdadero está en la variante sin usar `gastro-10/03_crohn-ileal-tc-signo-de-la-cuerda_alt1__cto-radiologia_p39.jpg` (enema opaco, fig. 2.35). Corregir el rótulo y la narración, o cambiar por la alt1.
- Candidatas: epiescleritis `biblioteca/12_oftalmologia/oftal-05/02_epiescleritis__amir-oftalmo_p47.jpg`; alternativas sin usar de CU (`01_colitis-ulcerosa-endoscopia_alt1_1/_2`) y de Crohn ileal (`_alt2__cto-digestivo_p105`). No hay eritema nodoso ni pioderma en la biblioteca.

## gastro-11 · Pólipos y cáncer colorrectal — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Secuencia adenoma-carcinoma | anim (`A1_adenoma_carcinoma.mp4`) | — |
| Pólipos (pediculado, sésil, tipos) | foto ×5 (con repeticiones) | — |
| Cáncer colorrectal (derecho/izquierdo, obstrucción) | NO | **sí** — colonoscopía de tumor o enema con imagen en "manzana mordida" |
| Poliposis adenomatosa familiar | NO | **sí** — colon con innumerables pólipos (pieza o endoscopía) |
| Síndrome de Lynch / tamizaje / etapificación | NO | no |
| Obstrucción de colon por cáncer | NO | sí (baja) |

- Problema: "Pólipo pediculado" aparece dos veces (Harrison y CTO `_1`) y "Pólipo de colon (endoscopia)" es el recorte `_2` de la misma figura CTO 17.3; la diapositiva "Más imágenes" tiene narración genérica ("Mira esta imagen…").
- Candidata: `biblioteca/10_cirugia/cirugia-04/04_obstruccion-de-colon__cto-radiologia_p26.jpg` (obstrucción de colon).

## gastro-12 · Patología anal — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Fisura anal | foto | — |
| Hemorroide interno (grado IV) | foto | — |
| Hemorroide externo trombosado | NO | **sí** — foto del nódulo violáceo perianal |
| Absceso perianal | NO | **sí** — foto de tumefacción perianal fluctuante |
| Fístula anal | esquema (CTO fig. 21.7, dibujo de trayectos) | sí (media) — foto de orificio fistuloso externo |

- La imagen "Fístulas perianales" es un dibujo anatómico, no una foto clínica; está bien como esquema.
- Candidata duplicada: `biblioteca/10_cirugia/cirugia-07/01_prolapso-hemorroidal__cto-digestivo_p149.jpg` (misma figura). No hay absceso perianal ni hemorroide trombosado en la biblioteca (el `cirugia-08/05_absceso_pilonidal__commons.jpg` es otra entidad).

## gastro-13 · Ictericia y colestasia — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Camino de la bilirrubina | anim (`A1_camino_bilirrubina.mp4`) | — |
| Ictericia escleral vs carotenemia | NO | **sí** — foto de ictericia en escleras (y opcional, palmas con carotenemia) |
| Gilbert / hemólisis | NO | no |
| Hepatitis vs colestasia (patrón de laboratorio) | NO | no |
| Coledocolitiasis / colédoco dilatado | foto (eco) | — |
| Cáncer de páncreas / Courvoisier-Terrier | NO | **sí** — TAC de masa en cabeza de páncreas con vía biliar dilatada |
| Colangiorresonancia | NO | sí (media) |

- Candidata sin usar: `gastro-13/01_coledoco-dilatado-eco-colangio-rm_alt1__cto-radiologia_p45.jpg` (colangio-RM con coledocolitiasis), justo para la diapositiva "Siempre primero la ecografía → colangiorresonancia".

## gastro-14 · Hepatitis virales y crónicas — prioridad baja

| entidad | estado | ¿la necesita? |
|---|---|---|
| Aguda vs crónica / fulminante | NO | no |
| Hepatitis A y E | NO | no |
| Hepatitis B: serología | esquema SVG + anim (`A1_vhb_marcadores.mp4`) | — |
| Hepatitis C | NO | no |
| Hepatitis alcohólica / por fármacos | NO | no |
| Esteatohepatitis metabólica ("hígado brillante") | NO | sí (media) — ecografía de hígado graso |
| Autoinmunes (HAI, CBP, CEP) | NO | baja (CPRE/colangio-RM arrosariada en CEP) |

- La clase se apoya en tablas de serología: correcto que no lleve fotos. Falta sólo la ecografía de esteatosis, que la narración describe ("hígado brillante"). Sin candidata en el repo.

## gastro-15 · Cirrosis y complicaciones — prioridad ALTA

| entidad | estado | ¿la necesita? |
|---|---|---|
| Hipertensión portal | anim (`A1_hipertension_portal_3d.mp4`) + portografía | — |
| Estigmas (arañas, eritema palmar, cabeza de medusa) | foto ×3 | — |
| Ascitis a tensión | foto | — |
| Ecografía de cirrosis | foto | — |
| **Várices esofágicas (pesquisa, profilaxis, ligadura, hemorragia)** | NO | **sí** — endoscopía de várices esofágicas (y ligadura con bandas). Es el tema más extenso de la clase y no tiene imagen |
| Encefalopatía hepática (asterixis) | NO | **sí** — foto/secuencia de asterixis (temblor en aleteo) |
| PBE / paracentesis / hepatorrenal | NO | no (baja: técnica de paracentesis) |

- Revisada: "Portografía: colaterales portosistémicas" usa `03_cabeza-de-medusa_2` cuyo pie CTO dice "cabeza de medusa", pero la imagen es efectivamente una portografía con várices: el rótulo es correcto.
- No hay endoscopía de várices ni asterixis en la biblioteca.

## gastro-16 · Lesiones focales hepáticas y pólipos vesiculares — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Quiste simple | NO | baja |
| Quiste hidatídico | foto (eco + TC) | — |
| Absceso hepático | NO | **sí** — ecografía/TC de absceso hepático |
| Hemangioma | foto (TC realce periférico) | — |
| Hiperplasia nodular focal (cicatriz central) | NO | sí (media) |
| Adenoma hepático | NO | baja |
| Hepatocarcinoma | foto (TC trifásica) + anim (`A1_realce_hcc.mp4`) | — |
| Metástasis hepáticas múltiples | NO | sí (media) — TC con lesiones múltiples |
| Pólipos vesiculares (corte 1 cm) | NO | sí (media) — ecografía de pólipo vesicular |

- La clase está construida sobre "la palabra clave de la ecografía", pero sólo el hidatídico se muestra en ecografía; hemangioma y HCC se muestran en TC. Faltan ecografías de quiste simple, hemangioma hiperecogénico y pólipo vesicular. Sin candidatas en el repo.

## gastro-17 · Litiasis biliar — prioridad baja

| entidad | estado | ¿la necesita? |
|---|---|---|
| Un cálculo, cuatro cuadros | anim (`A1_calculo_real.mp4`) | — |
| Colelitiasis / cólico biliar | foto (eco con sombra) | — |
| Colecistitis aguda | foto (eco) | — |
| Coledocolitiasis / CPRE | foto | — |
| Colangitis (Charcot, Reynolds) | NO | no |
| Cáncer de vesícula (Chile) / vesícula en porcelana | NO | sí (media) |

- Candidatas sin usar: `gastro-17/02_colecistitis-eco_alt1__cto-digestivo_p244.jpg`; `biblioteca/10_cirugia/cirugia-02/01_colelitiasis-colecistitis-eco*`.

## gastro-18 · Pancreatitis aguda — prioridad baja

Bien cubierta: autodigestión (anim), TC edematosa, necrotizante, colecciones, seudoquiste, Grey Turner y Cullen (fotos). Criterios de Atlanta, scores, volumen y CPRE no necesitan imagen.
- Revisada: "Colecciones líquidas pancreáticas (TC)" usa el recorte `_2` de la figura de pancreatitis edematosa, pero la imagen muestra efectivamente dos grandes colecciones: rótulo aceptable.
- Problema menor: diapositiva "Más imágenes" con narración genérica. Alternativa sin usar `01_pancreatitis-edematosa-tc_alt1__cto-radiologia_p46.jpg`.

## gastro-19 · Apendicitis y diverticulitis — prioridad baja

Bien cubierta: apendicitis (anim 3D, eco, pieza operatoria), diverticulitis (TC Hinchey). Sin imagen: signos de McBurney/Rovsing/psoas/obturador (esquema), plastrón (TC), embarazo ectópico como diferencial.
- Candidatas: `biblioteca/10_cirugia/cirugia-01/S1_puntos-apendicitis__propio.svg` (puntos dibujados); `biblioteca/14_obstetricia/ob-11/01_ectopico-ampular-eco__cto-gyo_p126.jpg` (opcional); `biblioteca/10_cirugia/cirugia-03/01_diverticulitis-tc__cto-digestivo_p142.jpg` (misma figura).

## gastro-20 · Isquemia mesentérica — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Embolia mesentérica | anim (`A1_embolo_mesenterico.mp4`) + TC (asas isquémicas) | parcial: falta angio-TAC con defecto de llene en la AMS |
| Trombosis venosa mesentérica | NO | baja |
| Colitis isquémica | NO | **sí** — colonoscopía o TC/Rx con "huellas digitales" (thumbprinting) en ángulo esplénico |
| Diferenciales (aneurisma roto, CAD) | NO | no |

Sin candidatas en el repo.

## gastro-21 · Hemorragia digestiva alta y baja — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Ángulo de Treitz | anim (`A1_angulo_treitz.mp4`) | — |
| Gravedad / reanimación | NO | no |
| Úlcera: clasificación de Forrest | foto (sólo Forrest Ia) | **incompleta** — el título dice "Clasificación de Forrest" pero se ve un solo grado |
| Várices esofágicas sangrantes | NO | **sí** (misma brecha que gastro-15) |
| Mallory-Weiss | NO | sí (misma brecha que gastro-04) |
| HDB: divertículos, angiodisplasias | NO | baja |
| Divertículo de Meckel (niño) | NO | baja |

- Candidatas sin usar que completan la serie de Forrest: `gastro-21/01_forrest-ia-iib-iic_alt1__cto-digestivo_p63.jpg` (IIb, coágulo adherido), `gastro-21/01_forrest-ia-iib-iic_alt2__cto-digestivo_p63.jpg` (IIc, hematina); y el vaso visible (IIa) de `gastro-02/02_ulcera_duodenal_vaso_visible__harrison_p2430.jpg`.

## gastro-22 · Cuerpos extraños — prioridad baja

Moneda en esófago y pila de botón (fotos). Sin imagen: imanes, impactación alimentaria / esofagitis eosinofílica (traquealización en endoscopía, baja), objetos afilados. Nada imprescindible. Opcional: `biblioteca/15_pediatria/ped-08/01_cuerpo-extrano-bronquial-rx__cto-pediatria_p59.jpg` (vía aérea, como contraste).

## gastro-23 · Diarrea aguda y crónica en pediatría — prioridad baja

| entidad | estado | ¿la necesita? |
|---|---|---|
| Deshidratación / signo del pliegue | foto ×2 | — |
| Planes A/B/C, fármacos | NO | no |
| Diarrea crónica inespecífica | NO | no |
| Giardiasis | NO | sí (baja) — trofozoíto de Giardia |
| Celíaca / fibrosis quística | NO | no (ya en gastro-09) |
| APLV | NO | no |

- Candidata duplicada: `biblioteca/15_pediatria/ped-11/01_pliegue_persistente*`. No hay carpeta propia de animaciones (el resto de las clases pediátricas sí tiene).

## gastro-24 · Reflujo del lactante, píloro, dolor abdominal y constipación — prioridad ALTA

| entidad | estado | ¿la necesita? |
|---|---|---|
| Reflujo fisiológico vs patológico | NO | no |
| Estenosis hipertrófica del píloro | anim (`A1_oliva_pilorica.mp4`) | **sí** — falta la ecografía del píloro, que es el examen de elección y la clase lo enseña |
| Dolor abdominal funcional | NO | no |
| Constipación funcional / fecaloma | NO | **sí** — Rx de abdomen con fecaloma (masa abdominal más frecuente en pediatría) |
| Encopresis / tratamiento | NO | no |

- No tiene carpeta en la biblioteca, pero las candidatas existen: `biblioteca/15_pediatria/ped-12/01_eco-piloro__cto-pediatria_p65.jpg` (+ `_alt1`), `biblioteca/01_gastroenterologia/gastro-25/02_eco-piloro-ehp__cto-pediatria_p65.jpg` y su `_alt1` (imagen anatómica, sin usar). No hay Rx de fecaloma.

## gastro-25 · Cirugía digestiva neonatal y pediátrica — prioridad baja

| entidad | estado | ¿la necesita? |
|---|---|---|
| Enterocolitis necrotizante (neumatosis) | foto | — |
| Invaginación | anim + foto (eco) | — |
| Divertículo de Meckel / pólipo juvenil | NO | baja (cintigrafía con Tc-99m) |
| Atresia duodenal (doble burbuja) | foto | — |
| Atresia esofágica | NO | **sí** — Rx con sonda enrollada en el bolsón esofágico |
| Hernia diafragmática congénita | foto | — |
| Hirschsprung | foto ×2 | — |
| Ano imperforado | NO | baja |
| Estenosis hipertrófica del píloro | foto (eco) | — |

- **Foto mostrada sin enseñarse:** "Malrotación y vólvulo" (`gastro-25/06_malrotacion-y-volvulo__cto-radiologia_p149.jpg`) aparece en "Más imágenes" pero la malrotación no figura en ninguna diapositiva de contenido ni tabla; la narración es genérica ("Mira esta imagen…"). Agregar el contenido o retirar la foto.
- Candidatas sin usar: `01_neumatosis-ecn_alt1`, `02_eco-piloro-ehp_alt1`, `03_invaginacion-eco_alt1`, `04_hirschsprung_alt1` en `gastro-25/`.

## gastro-26 · Trauma abdominal y torácico — prioridad media

| entidad | estado | ¿la necesita? |
|---|---|---|
| Trauma cerrado: eco-FAST | foto | — |
| Víscera sólida (bazo) | foto (TC rotura esplénica) | — |
| Víscera hueca (neumoperitoneo) | NO | sí (media) |
| Arma blanca / arma de fuego | NO | no |
| Neumotórax / hemotórax | NO | **sí** — Rx de tórax con neumotórax y con hemotórax |
| Hemotórax masivo / toracotomía | NO | no (criterios numéricos) |
| Taponamiento / tórax volante / contusión pulmonar | NO | sí (media) |

- Candidatas en el repo: `biblioteca/10_cirugia/cirugia-10/01_neumotorax-rx__cto-neumo_p116.jpg`, `02_hemotorax-derrame-rx__cto-neumo_p111.jpg`, `03_neumotorax-a-tension__cto-cirugia_p71.jpg`, `01_torax_volante*`; `biblioteca/10_cirugia/cirugia-11/02_fast_ventanas__atls_p144.jpg` (ventanas FAST); `biblioteca/10_cirugia/cirugia-05/01_neumoperitoneo*`.
