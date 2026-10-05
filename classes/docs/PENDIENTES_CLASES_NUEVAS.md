# Clases nuevas (ORL, Traumatología, Urología, Psiquiatría): imágenes y animaciones

Se llena a medida que cada agente termina un grupo de 3 clases (ver `AGENT_BRIEF.md` → "Pictures and animations").
Cardiología sigue excluida a pedido del usuario.

## Progreso

| Libro | Clases | Escritas | Con imágenes |
|---|---|---|---|
| Otorrinolaringología (`orl-XX`) | 20 | 7 | 6 |
| Traumatología (`trauma-XX`) | 15 | 0 | 0 |
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
