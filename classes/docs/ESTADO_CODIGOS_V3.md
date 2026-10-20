# Estado y traspaso: códigos Perfil V3, preguntas, libros y fotos (18-oct-2026)

## Fuente de verdad
- PDF oficial: `~/Desktop/NEWeunacom/eunacom-app-v2/Perfils/Perfil2026.pdf` (Perfil de Conocimientos EUNACOM v3, 16-jun-2026), 1.556 códigos.
- `books/data/v3_codemap.json`: reconstruido desde el PDF (nombres completos + niveles dx/tx/seg y `nivel` de exámenes/procedimientos).
  Se corrigieron 21 nombres corridos, 384 niveles de diagnóstico y 35 nombres truncados. El 2.01.1.046 está repetido en el PDF oficial.
  Respaldo previo: /tmp/v3_codemap_backup.json (puede no existir tras reinicio).

## Hecho
- `books/data/v3_topic_codes.json`: códigos correctos por tema/clase (fuente única). Aplicado en libros vía `books/scripts/v3_codes.cjs` (+ `v3_question_codes.json`, código por pregunta) y en clases (`classes/curriculum/*_decks_data.json`).
- Los 1.556 códigos tienen ≥1 pregunta: 1.463 dentro de una clase, 93 en `books/data/banco_preguntas_v3.json` (huecos).
- Clases: ~1.100 diapositivas de pregunta agregadas (reales EUNACOM + práctica), todas pasan `node classes/scripts/check_lesson.cjs <id>`.
  Respuestas correctas de las de práctica repartidas A–E.
- Respaldo de preguntas: `books/dist/Preguntas_de_Practica_Perfil_V3.pdf` (840) y `books/data/preguntas_practica_v3.json`.
- Banco real `books/data/real_questions_by_code.json`: preguntas de TEC/herpes zóster/loxoscelismo/necrólisis movidas al código correcto. ~40 preguntas con clave errónea listadas en `classes/docs/REVISION_CONTENIDO.md` (no usar).
- Huecos (93 códigos) mapeados a libro/bloque: `classes/docs/HUECOS_V3_BLOQUES.md` y `books/data/huecos_v3_bloques.json` (24 temas nuevos + 8 integraciones).
- Libros: capa de fotos (`books/data/atlas_fotos_verificadas.json`, `books/scripts/figspec_clases.cjs`: fotos dentro del texto tras el párrafo que las menciona, solo pie de foto, sin fuente); diagramas sin cajas vacías ni rótulos tachados (37 copias de `flow`). Solo Tomo 14 (ORL) reconstruido: `CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" node books/scripts/build_book.cjs otorrino`.

## Libro código por código — LISTOS LOS 21 (18-oct)
- `books/dist/04_Perfil_V3_Codigo_por_Codigo/Perfil_V3_Codigo_por_Codigo_*.pdf` (21 PDF, 1.556 códigos; niveles verificados contra Perfil2026.pdf: 1.285 comprobados automáticamente, 0 discrepancias). derma, oftal y sp escritos con Sonnet (calidad equivalente).
- Explicaciones del banco: `bx_prompt.txt`, paquetes `bx_pkg_1/2.json` (274 preguntas) → agentes escriben `bx_out_1/2.json` (mantener / reescrita / clave_dudosa). HECHO: 45 reescritas aplicadas (campo explicacion_original guarda la anterior; respaldo /tmp/real_questions_by_code.before_bx.json); 7 claves dudosas al final de REVISION_CONTENIDO.md; 21 PDF reconstruidos.
- Paquetes: `node ~/fotos_tools/js/cbpkg.cjs <specKey> <key>` → `~/fotos_tools/v3/cb_pkg_<key>.json` (ya generados los 21; incluye `temas_libro` si no hay clase).
- Instrucciones de los agentes: `~/fotos_tools/v3/cb_prompt.txt` → escriben `cb_out_<key>.json` y dudas en `cb_dudas_<key>.md`.
- Construir: `zsh ~/fotos_tools/js/cb_build_all.sh [key ...]` (keys: card diab endo infecto resp gastro geria hemato nefro neuro reuma ped obgin cirugia trauma uro psiq derma oftal orl sp).
- Tandas de 3 agentes: (1) card+geria, ped, cirugia · (2) obgin, resp+reuma, infecto+endo · (3) diab+gastro, nefro+neuro, hemato+trauma · (4) uro+psiq, derma+oftal, sp.
- ped: también escrito casi sin contrastar con las clases (solo ped-03/04/09/11/13/17) → revisar contra clases al final.
- cirugia: escrito SIN contrastar con las clases (el agente solo usó guías) → revisar contra clases al final.
- Hechos: card, geria, cirugia, obgin, ped, resp, reuma, diab, gastro, infecto, endo, nefro, neuro, hemato, trauma, uro, psiq, sp. Inconsistencia entre guías: mamografía cada 2 vs cada 3 años (sp 7.01.3.028 y cirugia dicen 3; gin/geria dicen 2) → unificar tras revisión médica. Las clases mal asignadas y contradicciones de cada especialidad están en `~/fotos_tools/v3/cb_dudas_<key>.md` (diab: glibenclamida en embarazo según clase vs MINSAL 2014; gastro: C. difficile metronidazol en clase vs vancomicina/fidaxomicina). Validar: `python3 -I ~/fotos_tools/js/cb_check.py <key>`.
- Error de mapeo: 3.01.3.007 y 3.01.3.012 (mortalidad perinatal) asignados a sp-07, que trata de medidas de asociación → corregir en v3_topic_codes.json. También clase que no cubre el código: 1.05.1.021 HTP→reuma-12, 1.05.1.022 IVAS→orl-10 (solo rinosinusitis), 1.11.3.001→sp-14, 1.11.1.019 poliartritis→reuma-05. Contradicciones entre clases: TBC fase de continuación 80 (infecto-11) vs 100 dosis (resp-10); quimioprofilaxis de contactos TBC (resp-10 vs infecto-05); prednisona riesgo óseo 2,5 (reuma-23) vs 5 mg (reuma-24).
- (antes) Hechos: card, geria, cirugia (validados y construidos). `codebook.py` ahora quita `**` del texto del banco.
- Al terminar las 20: (a) HECHO: `python3 -I ~/fotos_tools/js/cb_rebalance.py` reparte A–E las preguntas nuevas (correr de nuevo cuando esté derma); (b) un agente revisa y reescribe las explicaciones dudosas del banco real (~274 de 2.029 con confianza ≥0,6 no mencionan la opción correcta; ej. 1.01.1.003 coartación con explicación de asma) — pedido por el usuario 18-oct.
- Ojo: 20 códigos sin ninguna pregunta en ningún lado (14 de Cardio, 1.10.2.019, 3.01.2.020, 5.01.1.011/013, 5.01.5.001, 6.01.2.007): el agente escribe una en cb_out.

### Muestra ORL
- `books/dist/04_Perfil_V3_Codigo_por_Codigo/Perfil_V3_Codigo_por_Codigo_Otorrinolaringología.pdf` (58 págs, 83 códigos, todas las preguntas por código). Resúmenes en `~/fotos_tools/v3/cb_out_orl.json`.
- Dudas del agente ORL: GES hipoacusia (<4 años vs <2), GES hipoacusia ≥65 años, dosis penicilina benzatina <27 kg, dosis amoxicilina en rinosinusitis adulto, antibiótico post drenaje periamigdalino, otohematoma sin clase, índice de Fujioka, PREXOR/Ley 16.744.

## Detalle técnico del libro código por código
- Libro «Perfil V3 código por código», muestra ORL. Un agente escribe `~/fotos_tools/v3/cb_out_orl.json` (resumen por código + pregunta si falta) desde `~/fotos_tools/v3/cb_pkg_orl.json`.
  Cuando exista: `node ~/fotos_tools/js/qindex.cjs` (desde la raíz del repo) y luego
  `python3 -I ~/fotos_tools/js/codebook.py 6.03 orl "Otorrinolaringología" "#4338ca"` → `books/dist/04_Perfil_V3_Codigo_por_Codigo/Perfil_V3_Codigo_por_Codigo_Otorrinolaringología.pdf`.
  Muestra TODAS las preguntas de cada código (clase, práctica, libro y banco real sin revisar). Mostrar al usuario antes de hacer las otras 20 especialidades
  (paquetes: copiar la función `pkg()` usada para ORL; specKey por especialidad en `v3_codemap.json`).

## Audit código↔párrafo de los 21 libros (18-oct) — HECHO
- Resultado: `books/data/v3_section_codes.json` (por tema: códigos de cada párrafo "i.j", no_cubiertos, parcial, sugerencia). Informe: `classes/docs/AUDIT_CODIGOS_LIBROS.md`.
- 301 códigos asignados no se enseñan en ningún párrafo + 89 huecos sin tema ≈ 390 códigos sin texto. 12 asignaciones sobrantes (se enseñan en otro tema).
- Libros: etiqueta de código al margen del párrafo (cuando cambia) y fila «Código Perfil V3» con recuadros enlazados a /clase/<id>?codigo=… junto al botón de la masterclass (aprobado). 21 libros reconstruidos.
- Arreglos del compilador: libro achicado al 80 % por listas de códigos sin salto de línea (Urología); applyV3 reemplazaba todos los códigos del texto por el primero; etiquetas .lv largas cortadas; 153 acentos dañados en dataset_traumatologia.cjs.
- HECHO (18-oct): los 21 libros completados por agentes (Endocrinología con Opus; resto con Sonnet, aprobado): párrafos nuevos para todos los no_cubiertos/parcial, temas nuevos de los huecos, audit de imágenes (fotos nuevas en atlas, faltantes en `classes/docs/auditoria_imagenes/FALTANTES_*.md`). 0 pendientes en el audit; 1.556/1.556 códigos con tema.
- Fusión: `python3 -I ~/fotos_tools/js/completar_merge.py <libro>` (upd_/topics_/atlas_add/dudas_ → archivos compartidos). Dudas médicas de cada libro al final de `REVISION_CONTENIDO.md`.
- Asignaciones sobrantes quitadas de v3_topic_codes.json (21+2; respaldo /tmp/v3_topic_codes.before_sobrantes.json); psiq-11 y psiq-13 conservan sus códigos.
- Contenido nuevo fuera del dataset principal: `books/scripts/cirugia_extra/`, `neumologia_extra/`, `neurologia_extra/` (aplicados con applyExtra en dataset_<libro>.cjs).
- Compilador: convierte markdown (**, *, ##) y oculta recuadros «:::important» del generador antiguo; V3_SECFILE y books/data/atlas_add/ para trabajo en paralelo.

## Clases (pendiente, siguiente fase)
- Temas nuevos sin clase (~24): uro-16 ya hecha; faltan endo-25, psiq-19, psiq-20, infecto-25, cirugia-19/20/21, resp-25, sp-15, ped-23…28, diab-25, neuro-25/26, derma-17/18, ob-21, cardio-24/25 (cardiología en cardio_decks_data.json). Sus botones «Ver masterclass» aún no llevan a nada.
- psiq-13…18 existen solo en psiquiatria_decks_data.json (sin .cjs).
- ~230 clases existentes deben recibir diapositivas con el contenido nuevo de su tema (cada agente listó las suyas en su reporte; ver upd_*.json).
- Estándar: classes/docs/LESSON_STANDARD.md; muestra aprobada uro-16. Primero mostrar una clase nueva de muestra.
- Cuidado: disco casi lleno (≈3–4 GB libres el 18-oct).

## Pendiente (en orden)
1. HECHO: guía código por código (21 PDF). Muestra de tema nuevo: uro-16 Patología peneana (libro Tomo 13 págs. 30–33 + clase uro-16, 21 diapositivas) — esperando aprobación y decisiones (numeración 13.16, parafimosis 4.03.2.003/4.03.5.006 en uro-02, marcar huecos en banco_preguntas_v3.json).
2. Escribir los 24 temas nuevos de los huecos (libros + clases).
3. Libros: una pregunta por código al final de cada tema (reales primero, sin repetidas, borrar fechas inventadas en Cardio/Infecto/Gastro/Resp/Nefro/Diab/Endo).
4. Fotos en los otros 20 libros, con pie exacto por foto (revisar visualmente).
5. Regenerar Ensayos 90Q y Gran Libro con los códigos nuevos.
6. Revisión médica de `classes/docs/REVISION_CONTENIDO.md`.

## Herramientas (~/fotos_tools)
- `js/insert_quiz.cjs` inserta diapositivas quiz antes del cierre; `js/integrate_nc.py`; `js/rebalance.py` / `rebalance_file.py`; `js/qindex.cjs`; `js/codebook.py`.
- Reglas del usuario: fotos donde corresponde en el texto, solo pie exacto (sin fuente); una pregunta por cada código V3; verificar todo contra el PDF oficial; respuestas en español.
