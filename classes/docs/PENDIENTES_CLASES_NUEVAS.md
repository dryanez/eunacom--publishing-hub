# Clases nuevas (ORL, Traumatología, Urología, Psiquiatría): imágenes y animaciones

Se llena a medida que cada agente termina un grupo de 3 clases (ver `AGENT_BRIEF.md` → "Pictures and animations").
Cardiología sigue excluida a pedido del usuario.

## Progreso

| Libro | Clases | Escritas | Con imágenes |
|---|---|---|---|
| Otorrinolaringología (`orl-XX`) | 20 | 20 ✅ | 16 |
| Traumatología (`trauma-XX`) | 15 | 3 | 3 |
| Urología (`uro-XX`) | 15 | 0 | 0 |
| Psiquiatría (`psiq-XX`) | 18 | 0 | 0 |

## Imágenes que faltan (para buscar en los manuales CTO/AMIR del bucket R2 u otros libros)

| Clase | Imagen que ayudaría | Dónde buscar |
|---|---|---|
| orl-02 | Colesteatoma en otoscopía (bolsillo de retracción en pars flácida, escamas blancas) y TC de temporal | Manual CTO / AMIR Otorrino |
| orl-03 | Otitis externa maligna: tejido de granulación en el piso del conducto; TC axial de osteomielitis de base de cráneo; celulitis del pabellón (Bailey Fig. 46.12 solo 242 px) | Manual CTO / AMIR Otorrino |
| orl-04 | Mastoiditis: niño con pabellón desplazado hacia adelante y surco retroauricular borrado; TC con mastoiditis coalescente y absceso subperióstico; TC con signo del delta vacío | Manual CTO / AMIR Otorrino o Pediatría |
| orl-05 | Audiograma real con gap aéreo-óseo; timpanogramas impresos A, As, Ad, B y C; otoesclerosis / estapedotomía | Manual CTO / AMIR Otorrino |
| orl-06 | Audiogramas: hipoacusia súbita, presbiacusia en pendiente, muesca en 4000 Hz del trauma acústico; algoritmo de hipoacusia súbita | Manual CTO / AMIR Otorrino |
| orl-07 | Registro o video de nistagmo (torsional en Dix-Hallpike, horizontal en neuronitis); figura de HINTS; audiograma de Ménière (graves); RM/TC de infarto cerebeloso | Manual CTO / AMIR Otorrino |
| orl-08 | Bell clara: no arruga la frente ni cierra el ojo, idealmente junto a una parálisis central con frente respetada; Ramsay Hunt con vesícula en el tímpano | Manual CTO Otorrino / AMIR Neurología |
| orl-09 | Rinoscopía anterior: cornetes pálidos, azulados y edematosos; mucosa violácea de rinitis medicamentosa; pólipo nasal; pliegue de Dennie-Morgan | Manual CTO Otorrino / Harrison |
| orl-10 | Celulitis orbitaria con proptosis y quemosis (para comparar con preseptal); endoscopía con pus en el meato medio | Manual CTO / AMIR Otorrino |
| orl-11 | Sonda Foley / balón de taponamiento posterior colocado | Manual CTO / AMIR Otorrino |
| orl-12 | Hematoma septal en rinoscopía (abombamiento violáceo); pólipos "uva pelada" en nasofibroscopía; TC de desviación septal; papiloma invertido | Manual CTO / AMIR Otorrino |
| orl-13 | Exantema por amoxicilina en mononucleosis; escarlatina (lengua de fresa, exantema áspero); absceso periamigdalino con úvula desviada; petequias en el paladar | Manual CTO / AMIR Otorrino o Pediatría |
| orl-14 | Absceso periamigdalino con úvula desviada; Rx lateral de cuello con ensanchamiento prevertebral; TC de absceso retrofaríngeo | Manual CTO / AMIR Otorrino |
| orl-15 | Amígdalas grado 4 de Brodsky; Rx de cavum con hipertrofia adenoidea | Manual CTO / AMIR Otorrino o Pediatría |
| orl-16 | Edema de Reinke en laringoscopía | Manual CTO / AMIR Otorrino |
| orl-17 | Rx lateral de cuello con signo del pulgar (epiglotitis); Rx AP con signo de la aguja / campanario (croup) | AMIR Pediatría / Otorrino, Manual CTO |
| orl-18 | Pila de botón en Rx con doble contorno (halo); pila de botón nasal con necrosis septal en rinoscopía | AMIR / CTO Otorrino |
| orl-19 | Pus por la papila de Stenon en un adulto mayor; RM de adenoma pleomorfo; parálisis facial con masa parotídea | Manual CTO / AMIR Otorrino |
| orl-20 | TC o ecografía de adenopatía metastásica nivel II; endoscopía de tumor de laringe o hipofaringe; carcinoma nasofaríngeo con otitis serosa unilateral | Manual CTO / AMIR Otorrino |
| trauma-01 | Rx AP y lateral de una fractura con rasgo claro; esquema de las fases de consolidación (callo); pseudoartrosis y consolidación viciosa en Rx | Manual CTO / AMIR Traumatología |
| trauma-02 | Fotos de Gustilo I, II, IIIA, IIIB y IIIC para comparar; fijador externo en tibia; colgajo | Manual CTO / AMIR Traumatología |
| trauma-03 | Corte transversal de la pierna con 4 compartimentos (ATLS Fig. 8-7, p. 212, vectorial pequeño: renderizar); contractura de Volkmann / mano en garra; petequias de embolia grasa; osteoporosis moteada de Sudeck (¿Harrison Fig. 131-2, p. 1092?) | ATLS (renderizar), CTO / AMIR, Harrison |

## Animaciones por hacer

Anatomía real (BodyParts3D / Z-Anatomy / Blausen) o diagramas limpios; nunca formas abstractas para anatomía.
**Oído interno y riñón: NO usar los modelos de Z-Anatomy** (licencia no comercial); usar BodyParts3D o Blausen.

| Clase | Animación | Por qué importa en el examen |
|---|---|---|
| orl-01 | (pendiente de proponer: el informe del primer agente se perdió por el límite de uso) | — |
| orl-02 | Oído medio real: trompa de Eustaquio bloqueada, se absorbe el aire, el tímpano se retrae y se llena de líquido | Por qué la OME se observa 3 meses y se trata con colleras |
| orl-02 | Tímpano con la perforación cambiando: central (pars tensa) / marginal / ática | Central = ciprofloxacino; marginal o ática = cirugía |
| orl-02 | Colesteatoma erosionando en secuencia: huesecillos, canal del facial, conducto semicircular lateral, tegmen | Cada estructura explica una complicación |
| orl-03 | Presión del trago y tracción del pabellón mueven la piel del conducto (duele); el oído medio no se mueve | El signo del trago apunta al conducto |
| orl-03 | Otitis externa maligna: del piso del conducto por las fisuras de Santorini al agujero estilomastoideo, yugular e hipogloso | Por qué el VII par cae primero |
| orl-03 | Línea de tiempo: gotas 7–10 días vs tratamiento endovenoso 6–8 semanas | Diferencia de manejo difusa vs maligna |
| orl-04 | Anatomía real: pus del oído medio por el aditus a las celdas mastoideas; se rompe hacia afuera (absceso subperióstico, oreja en asa) o hacia adentro (seno sigmoideo, meninges) | La oreja en asa es el signo |
| orl-04 | Corte axial del seno sigmoideo: trombo con centro vacío y borde que capta (delta vacío) junto a la curva de fiebre en agujas | Signo del delta vacío |
| orl-05 | Weber: diapasón en la frente; el sonido va al oído enfermo en la conductiva y al sano en la sensorioneural (diagrama limpio de ambas cócleas) | Lateralización del Weber |
| orl-05 | Timpanograma que se dibuja al barrer la presión de −200 a +200 daPa: normal, B (líquido), C (presión negativa), As (cadena rígida) | Curvas de Jerger |
| orl-06 | Audiograma que va formando la muesca en 4000 Hz con los años de ruido vs la caída en pendiente de la presbiacusia | Trauma acústico vs presbiacusia |
| orl-06 | Cóclea (BodyParts3D/Blausen): las células ciliadas caen desde la espira basal (agudos) con ruido o edad | Por qué se pierden primero los agudos |
| orl-06 | Línea de tiempo de la hipoacusia súbita: la recuperación cae con cada día de retraso (0 a 14 días) | Corticoides de inmediato |
| orl-07 | Canalitiasis (BodyParts3D/Blausen): otoconias en el conducto posterior; la cabeza recorre Dix-Hallpike y Epley y la partícula vuelve al utrículo | Diagnóstico y tratamiento del VPPB |
| orl-07 | Movimientos oculares del HINTS: impulso cefálico con y sin sacada, nistagmo unidireccional vs que cambia de dirección, skew | Periférico vs central |
| orl-07 | Hidrops endolinfático: el laberinto membranoso se hincha; tríada en el tiempo (plenitud, vértigo, hipoacusia de graves fluctuante) | Ménière |
| orl-08 | Núcleo del facial: la mitad superior recibe fibras de ambos hemisferios, la inferior solo del contralateral; la lesión en cada sitio hace caer la cara distinto (diagrama limpio o cerebro BodyParts3D) | Central respeta la frente; periférica toma toda la hemicara |
| orl-08 | Trayecto del facial por el temporal hasta el ganglio geniculado: dónde se edematiza en Bell y dónde se reactiva el virus en Ramsay Hunt | Por qué puede afectarse el VIII par |
| orl-09 | Mastocito con IgE y alérgeno libera histamina: edema, rinorrea, estornudos (diagrama) | Mecanismo de la rinitis alérgica |
| orl-09 | Rebote de la oximetazolina: vasoconstricción, taquifilaxia, vasodilatación de rebote; se normaliza al suspender y usar corticoide nasal | Rinitis medicamentosa |
| orl-09 | Cuadrícula ARIA: intermitente/persistente × leve/moderada-severa | Clasificación que se pregunta |
| orl-10 | Corte coronal de órbita y etmoides: lámina papirácea, periostio y septum; dónde está la infección en cada grado de Chandler; globo desplazado abajo y afuera en el absceso subperióstico | Preseptal vs orbitaria |
| orl-10 | Complejo osteomeatal: el edema viral bloquea el drenaje, el moco se retiene y crecen bacterias | Por qué la sinusitis bacteriana viene después de la viral |
| orl-11 | Corte sagital de la fosa nasal: cuatro arterias que confluyen en Kiesselbach y la esfenopalatina atrás | Anterior vs posterior |
| orl-11 | Colocación de la sonda Foley: punta en orofaringe, balón con 8–10 mL de agua, tracción hasta la coana, más tapón anterior | Taponamiento posterior |
| orl-11 | Cauterización de ambas caras del tabique: el cartílago queda sin irrigación y se perfora | Por qué está prohibido |
| orl-12 | Hematoma septal despega el pericondrio; sin nutrición el cartílago se necrosa en 24–48 h hasta la nariz en silla de montar | Drenaje urgente |
| orl-12 | Drenaje por incisión y taponamiento bilateral compresivo | Conducta |
| orl-13 | Escala de McIsaac como contador que suma los cinco ítems, con las ramas de conducta | Cuándo tratar |
| orl-13 | Línea de tiempo: penicilina benzatina dosis única vs amoxicilina 10 días; con 5 días el germen persiste | Prevención de fiebre reumática |
| orl-13 | Fiebre reumática prevenida vs glomerulonefritis no prevenida, con el mecanismo de inmunocomplejos | Se pregunta |
| orl-14 | Espacios fasciales del cuello en corte sagital y axial: se ilumina cada espacio (periamigdalino, parafaríngeo, retrofaríngeo con el danger space) y el pus del retrofaríngeo baja al mediastino | Por qué el retrofaríngeo es grave |
| orl-15 | Corte sagital de la vía aérea de un niño con adenoides y amígdalas grado 1 a 4; al dormir se relaja el paladar y se cierra la luz | SAHOS infantil |
| orl-16 | Cuerdas vocales desde arriba abriendo y cerrando: nódulos (cierre en reloj de arena), pólipo (cierre asimétrico), Reinke (abombamiento difuso) | Diferenciar las lesiones benignas |
| orl-17 | Vía aérea subglótica bajo el anillo cricoides: el edema estrecha la luz (normal → croup → epiglotitis), nivel y calibre (Blausen o diagrama) | Croup vs epiglotitis |
| orl-17 | Línea de tiempo: efecto de la adrenalina vs inicio de la dexametasona; ventana de rebote de 2 a 4 h | Por qué se observa al niño |
| orl-18 | Electrólisis de una pila de botón húmeda: corriente → OH⁻ → quemadura alcalina → perforación septal | Urgencia de la pila de botón |
| orl-18 | Bronquio derecho más vertical y ancho; atrapamiento aéreo en válvula en inspiración vs espiración (BodyParts3D/Blausen) | Cuerpo extraño bronquial |
| orl-19 | Trayecto del conducto de Wharton sobre el milohioideo (curva cuesta arriba); el cálculo se enclava al estimular la saliva al comer | Sialolitiasis submandibular |
| orl-19 | Ramas del facial cruzando la parótida: parotidectomía superficial (nervio preservado) vs enucleación | Tratamiento del adenoma pleomorfo |
| orl-20 | Otalgia refleja: tumor de base de lengua o hipofaringe; se iluminan el IX (Jacobson) y X (Arnold) hacia el oído | Se pregunta |
| orl-20 | Masa cervical: las cuatro "80 %" encajadas hasta el carcinoma escamoso; luego nasofibroscopía → PAAF → TC, con la biopsia abierta tachada | Secuencia de estudio |
| trauma-01 | Fémur que sangra: el volumen perdido sube hasta 1,5 L y la presión cae (el ABC va antes que el hueso) | Prioridad del ABC |
| trauma-01 | Tipos de rasgo (conminuta, segmentaria, intraarticular) sobre un hueso real | Clasificación |
| trauma-01 | Pseudoartrosis atrófica vs hipertrófica, y consolidación viciosa | Complicaciones de la consolidación |
| trauma-02 | Gustilo I → III: la herida crece y la cobertura antibiótica se suma (gram +, luego gram −, luego anaerobios) | Antibiótico según grado |
| trauma-02 | Línea de tiempo de la primera hora: contaminación → antibiótico → aseo quirúrgico | Urgencia |
| trauma-02 | Yeso circular vs valva abierta: el edema se expande | Por qué valva |
| trauma-03 | Compartimento que se llena: sube la presión, colapsa primero la vena y luego la arteria, con el pulso aún presente | El pulso es tardío |
| trauma-03 | Estiramiento pasivo de los dedos con dolor que sube | Signo precoz |
| trauma-03 | Línea de tiempo: horas (compartimental, embolia grasa), días (TEP), semanas-meses (distrofia, Volkmann) | Diferenciar complicaciones |
