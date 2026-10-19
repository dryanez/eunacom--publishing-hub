# Estado: clases, fotos y videos (actualizado 19-oct-2026 ~01:50)

Si Claude se corta por límite de uso: **nada se pierde**. Todo lo que hacen los agentes queda escrito en disco
(classes/lessons/*.cjs, media/, books/). La cola de videos NO usa Claude y sigue sola.
Al volver: abrir esta sesión y decir «sigue» — o en una sesión nueva: «lee classes/docs/ESTADO_CLASES_VIDEOS.md y continúa».

## Hecho
- 20 especialidades: clases actualizadas con contenido nuevo del libro, fotos en contexto, animaciones (prompt: ~/fotos_tools/v3/sec/clases_prompt.txt).
- 26 clases nuevas creadas (prompt: ~/fotos_tools/v3/sec/clases_nuevas_prompt.txt).
- Reproductor Suizo recompilado: 431 clases (`node classes/scripts/build_swiss_player.cjs`).
- Nada en commit todavía (el usuario no lo ha pedido).

## En curso al cortar (retomar si no terminaron)
1. **Cardiología → 38 temas — HECHO e integrado (19-oct-2026).** 38 clases cardio-NN con libro (204 págs) y clases; códigos fusionados (v3_section_codes/topic_codes), figspec 1.4/1.6/3.1/4.6 quitadas, verificar_codigos_cardio.cjs «Todo OK» (53 códigos antiguos asignados, todos con margen). Clases cardio-v1 ocultas en el reproductor.
   Dudas médicas pendientes de cardio (resumen; confirmar con un médico antes de publicar):
  - Bloque 1: 21 dudas (A · Posible error; B · El libro se contradice; C · Falta; Preguntas del banco descartadas) → detalle en REVISION_CONTENIDO.md, «Cardiología 38 temas: dudas por bloque».
  - Bloque 2: 29 dudas (A · Posible error del libro (versión migrada); B · El libro se contradice; C · Falta información en el libro; Preguntas del banco con clave dudosa (anotar); Preguntas del banco descartadas; Fotos) → detalle en REVISION_CONTENIDO.md, «Cardiología 38 temas: dudas por bloque».
  - Bloque 3: 14 dudas (A · Posible error; B · Se contradice; C · Falta; Posible retirada de figspec; Preguntas del banco descartadas) → detalle en REVISION_CONTENIDO.md, «Cardiología 38 temas: dudas por bloque».
  - Bloque 4: 28 dudas (A · Posible error del libro (lo que se corrigió o conviene confirmar); B · El libro se contradice; C · Falta información en el libro; Para quien integra; Preguntas del banco descartadas) → detalle en REVISION_CONTENIDO.md, «Cardiología 38 temas: dudas por bloque».
  - Bloque 5: 30 dudas (A · Posible error en el contenido migrado (ya corregido en la reescritura; confirmar); B · El libro se contradice o contradice el banco; C · Falta o conviene agregar; Preguntas del banco con clave dudosa (formato «Examen año Pn: …»); Preguntas del banco descartadas) → detalle en REVISION_CONTENIDO.md, «Cardiología 38 temas: dudas por bloque».
2. **Fotos faltantes — TERMINADO (66 fotos nuevas)** (4 agentes: m1a endo/diab/nefro/hem/neuro · m1b resp/gastro/infecto/reuma · m2 cirugia/trauma/uro/orl/oftal/derma ·
   m3 ped/ob/gin/sp/psiq). Prompt: ~/fotos_tools/v3/sec/fotos_prompt.txt. Avance: filas marcadas ✅/❌ en
   classes/docs/auditoria_imagenes/FALTANTES_<esp>.md. **FUSIÓN DE FOTOS HECHA**: 128 fotos nuevas (cardio 66 + m1a/m1b/m2/m3 62) en atlas_fotos_verificadas.json (420→548); atlas_add archivados en ~/fotos_tools/v3/sec/atlas_add_*.merged.json; 21 libros y guías Perfil V3 reconstruidos.
3. **Otro computador:** rama `clases-v3-videos` en GitHub; instrucciones en classes/docs/OTRO_COMPUTADOR.md (Módulos 3–4: ped, ob, gin, sp; quitados de la cola de este Mac).

## Cola de videos (corre sola)
- Ver estado: `bash classes/scripts/jsvideo/estado_cola.sh` · log: classes/scripts/jsvideo/out/batch.log
- Reiniciar si se cayó: `cd classes/scripts/jsvideo && (nohup bash queue_worker.sh > out/queue_worker.log 2>&1 &)` (sin sandbox: voz Edge por red)
- Videos listos: Escritorio › Clases_MP4/<esp>/ (accesos directos a out/<clase>/<clase>_clase.mp4).
- Voz de borrador Edge (Lorenzo). Voz final = clon del usuario en ElevenLabs (plan Scale ~$600 con Flash), después.
- Idea pendiente: repartir Módulos 3–4 a otro computador (requiere commit + push de rama nueva; el usuario no lo ha aprobado aún).

## Decisiones pendientes del usuario
- cardio-29/30 HTA: meta única (<130/80 libro vs <140/90 GES vs <150/90 en ≥80 años del banco); hoy va por grupos.
- cardio-17: examen pregunta el trío clásico; la clase enseña 4 pilares (ARNI, iSGLT2) con aviso.
- cardio-37: alteplasa (libro) vs tenecteplase (clave Dic 2025 P8).
- cirugia-13 quemaduras: ¿«agua corriente 10–20 min, sin hielo» (libro nuevo) en vez de «agua tibia»?
- psiq-02: ¿unificar litio y valproato con los rangos del libro nuevo?
- ped-05 / ped-10: ¿dejar 3 fotos de niños con torso descubierto (sin genitales)?
- Claves del banco posiblemente erróneas: ver classes/docs/REVISION_CONTENIDO.md («Posibles claves erróneas del banco»).
- Fotos en cuarentena (genitales de menores): ~/fotos_tools/cuarentena_fotos/ (no borradas).

## Integración de Cardiología — HECHA (19-oct-2026)
- Fusión sec/topics, figspec, atlas, libros (21 + 21 guías + libro único 1184 págs), reproductor (469 clases) y check_lesson (468/468 OK) completados.

## 19-oct tarde: Repaso, Anki, R2
- Repaso de última hora: muestra Gastro aprobada (books/dist/Repaso/, generador books/scripts/build_repaso.cjs); agente generando las otras 20.
- Anki estilo AnKing + glosario tipo AMBOSS: Gastro listo (books/dist/Anki/, LEEME_Anki.md). 4 agentes haciendo el resto con ~/fotos_tools/v3/sec/anki_esp_prompt.txt (endo/diab/nefro/hem · cardio/resp/infecto · neuro/reuma/derma/psiq · cirugia/trauma/uro/orl/oftal). FALTA lanzar: pediatria, obstetricia, ginecologia, saludpublica.
- «Ver aquí» = iframe a classes/scripts/jsvideo/embed/embed.html (servidor local `node classes/scripts/jsvideo/embed/servidor.cjs 8770`, con Range). Producción pendiente: R2 + página /embed/clase/<id>?t= con login en el sitio (URL real de la app: eunacomapp.cl/mis-clases?subsystem=…; no tiene ruta por clase ni ?t=).
- Anki: al final, RECONSTRUIR todos los .apkg (build_anki.py <libro>) para que tomen el color de tabla de cada tomo y los códigos por tarjeta (los de endo/diab/nefro/hem se armaron con tablas verdes).
- Videos → R2: classes/scripts/jsvideo/subir_r2.py (credenciales de ~/Documents/Archive/Apps/sketchy/.env; bucket eunacomvideos, carpeta Clases_V3/<esp>/<clase>.mp4); registro out/r2_subidos.txt. La cola sube y borra cada video nuevo (salvo gastro). Python con expat: ~/.venvs/manim/bin/python + PYTHONPATH=~/fotos_tools/pylib.
- Anki/videos: extract_sources.cjs marca «video» según el MP4 local; como los MP4 se suben a R2 y se borran, en la reconstrucción final debe contar también out/r2_subidos.txt (y data.js para los tiempos). El reproductor embed debe apuntar a la URL de R2 (falta dominio público o URLs firmadas del bucket eunacomvideos).
