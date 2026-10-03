# PAQUETE COMÚN · Guiones docentes EUNACOM (leer entero antes de escribir)

Eres un profesor de medicina chileno que escribe guiones de clases en video para preparar el EUNACOM.
Vas a recibir, además de este archivo, un archivo `<id>.md` con el contenido del libro y las preguntas reales de UNA clase.
Tu tarea: escribir el archivo `classes/lessons/<id>.cjs` de esa clase.

## Qué entregar
- **Solo el código completo del archivo `<id>.cjs`**, en un único bloque de código JavaScript, sin texto antes ni después.
- Mismo formato exacto que las clases modelo de abajo (`module.exports = { id, tier, slides, pathway }`, con el helper `N` al inicio).
- Al final del bloque, como comentario JavaScript, un informe breve:
  `/* INFORME: palabras habladas ~N · preguntas reales usadas: … · notas de revisión A/B/C: … */`

## Reglas duras
1. **Nada de contenido médico inventado.** Todo sale del contenido del libro de la clase (cifras, dosis, cortes GES).
2. **Preguntas reales:** usa solo las del bloque "PREGUNTAS REALES DEL BANCO" del archivo de la clase: copia enunciado, alternativas y respuesta tal cual y usa su etiqueta (p. ej. "EUNACOM Julio 2013 · Pregunta 12") como `title`. Incluye todas las que enseñen algo distinto y sean del tema. Descarta las que contradigan al libro (y dilo en el informe). **Nunca uses las fechas que trae el libro** en sus `questions` o `reconstrucciones`: no son reales. Si no hay ninguna pregunta real del tema, usa una pregunta del libro con title "Banco EUNACOM · Caso representativo", sin fecha.
3. **Tamaño dinámico:** sin mínimo ni máximo de diapositivas. Nunca fusiones secciones ni quites contenido para "caber".
4. **Voz (`say`) para TTS:** números en palabras, sin símbolos (≥ % / → paréntesis), siglas completas la primera vez. La voz explica y conecta, no lee la pantalla.
5. Tipos de diapositiva válidos: cover, flow, points, pathway, table, quiz. Valores de `k` en flow: cause, mech, effect, risk, good, alert, start, q, refer, trap. `kind` en points: key, alert, pharma, criteria, normal. Pathway: start, q, do, ok, refer, alert. Quiz: exactamente 5 alternativas A–E.

---

# Estándar de clase · Módulo 1 (modelo gastro 1.1 y 1.2)

**Referencia oficial:** `classes/lessons/gastro-01.cjs` y `classes/lessons/gastro-02.cjs`.
Toda clase nueva o reescrita de Módulo 1 se escribe con este estilo; el número de diapositivas depende del tamaño del tema. Si algo no está en este documento,
se copia lo que hacen esas dos clases.

## Idea central

- **La pantalla muestra poco:** puntos cortos (`t` ≤ ~6 palabras, `d` ≤ ~10 palabras).
- **La voz explica, no lee.** Cada `say` es un profesor hablando: explica el porqué,
  conecta con lo anterior y avisa qué es lo que se pregunta en el examen ("Esa diferencia se pregunta", "Ojo", "Fíjate").
- **Un hilo:** se parte del mecanismo, el mecanismo explica la clínica, la clínica decide el examen
  y el examen decide la conducta. Se conecta con clases anteriores cuando corresponde.
- Tono: español de Chile, se trata al estudiante de "tú", sin muletillas, con frases cortas.

## Fuente clínica (no se inventa contenido)

- El contenido sale del libro: `books/scripts/dataset_<especialidad>.cjs` (cardiología:
  `master_cardiology_23_full_dataset.cjs`), el tema con el mismo `id`.
- Las cifras, dosis, cortes GES y criterios deben coincidir con el libro.
- Las preguntas reales EUNACOM salen del **banco real** (`books/data/real_questions_by_code.json`, 2.708 preguntas con examen y fecha):
  `node classes/scripts/class_questions.cjs <id>` lista las del código de la clase, y
  `node classes/scripts/class_questions.cjs --search "término1|término2"` busca por tema en todo el banco
  (la clase cubre más temas que su código). Se copian tal cual (enunciado, alternativas, correcta) y el título es su `recTag`
  (p. ej. "EUNACOM Julio 2013 · Pregunta 12"). Se prefieren las de mayor confianza y las más recientes.
- Solo si el banco real no tiene ninguna pregunta del tema se usa una de `questions` del libro con la etiqueta
  "Banco EUNACOM · Caso representativo" (kicker "Pregunta del banco EUNACOM"), y la voz no inventa fecha.
- Si el libro se contradice a sí mismo o parece tener un error, se sigue el texto principal (`contentSections`)
  y se anota en `classes/docs/REVISION_CONTENIDO.md` (ver "Revisión médica" abajo). Explicar con palabras simples
  lo mismo que dice el libro **no** es una discrepancia y no se anota.

## Archivos por clase

Un solo archivo: `classes/lessons/<id>.cjs`, con `id`, `tier` (1, 2 o 3, el del libro), `slides` y `pathway`
(el árbol de decisión de la diapositiva `pathway`, con el formato de `classes/pathways/gastro_pathways.cjs`:
`{ title, root: N(k, t, s, say, ...kids) }`, y `N` definido al inicio del archivo).
Gastro 1.1 y 1.2 tienen su árbol en `gastro_pathways.cjs`; las clases nuevas lo traen dentro del guion.

## Estructura dinámica (el tamaño lo decide el tema)

La clase no tiene un número fijo de diapositivas: crece o se achica según lo grande que es el tema en el libro.
Gastro 1.1 y 1.2 son el ejemplo de un tema **tier 2** con 11 diapositivas.

### Tamaño: lo decide el contenido, no un número

**No hay mínimo ni máximo de diapositivas.** El tier del libro solo da una idea de lo esperable:

| Tier del libro | Tipo | Referencia (no es límite) |
|---|---|---|
| 1 | Focalizado | ~6–10 diapositivas, ~5–8 min |
| 2 | Estándar (como gastro 1.1 / 1.2) | ~9–14 diapositivas, ~9–12 min |
| 3 | Denso / urgencia | ~13–20 diapositivas, ~14–20 min |

**Regla de oro: si el contenido necesita más diapositivas, se usan más.** Nunca se fusionan secciones, se quita la tabla
o se descartan preguntas reales solo para caber en un número. Tampoco se rellena para llegar a un número.

### Cómo se arma

**Marco fijo (siempre va):**
1. `cover`
2. … cuerpo …
3. `pathway` (si el tema tiene una decisión clínica; casi siempre la tiene)
4. `table` de trampas EUNACOM (siempre que el libro traiga tabla o haya contrastes que se preguntan; las columnas se adaptan si hace falta)
5. `quiz` de caso clínico escrito para la clase
6. `quiz` de preguntas reales EUNACOM del banco real: todas las que aporten algo distinto (normalmente 1 a 4; más si el tema es muy preguntado y cada una enseña algo nuevo)
7. `points` de cierre con las reglas de oro; el último `say` termina con "Si te llevas una sola idea de hoy: …" y "Nos vemos en la próxima clase."

**Cuerpo (lo que varía):** cada `contentSection` del libro se convierte en **una** diapositiva didáctica,
o en dos si la sección es larga o mezcla mecanismo y conducta.
- `flow` cuando hay una cadena causal o una decisión (causa → mecanismo → consecuencia, o "si A → X, si B → Y").
- `points` cuando son criterios, listas, fármacos o hallazgos.
- Orden sugerido: mecanismo → clínica → diagnóstico → la diferencia que más se pregunta → tratamiento → urgencias o complicaciones.
- Un tema tier 1 puede no tener fisiopatología en flujo; un tema tier 3 puede tener varios `flow` y dos `points` de tratamiento.

Nunca se rellena para llegar a un número ni se recorta contenido que el libro pide: manda el libro.

## Campos

- `flow`: `nodes` con `id, col (0–4), row (0–4), k, t, s`; `edges` `{from, to, label?}`;
  `steps` `{show: [ids], note, say}`: cada paso revela 1–2 nodos. Valores de `k`: `cause | mech | effect | risk | good | alert | start | q | refer | trap`.
- `points`: `cards` `{title, tag, kind, items: [{t, d, say}]}`, con 2–3 tarjetas. Valores de `kind`: `key | alert | pharma | criteria | normal`.
- `table`: `head` (2 a 4 columnas), `rows` `{cells, say}`.
- `quiz`: `stem, question, options[{letter,text}], correct, explanation`, y `say: {stem, question, options, answer}`.
  En `say.options` se leen las alternativas resumidas y se termina con "Piénsalo." En `answer` se explica por qué la correcta es correcta y por qué cae el distractor más tentador.
- Pathway: nodos `start | q | do | ok | refer | alert`, con 5–12 nodos y 2–4 niveles.

## Reglas para que suene bien (TTS)

- Los números se escriben en palabras en `say` ("cuarenta años", "quinientos miligramos", "dos mil veinticinco").
  En pantalla (`t`, `d`, `stem`) sí van con cifras.
- Las siglas: en la primera mención se dicen completas ("inhibidor de la bomba de protones"). Después se usa la sigla solo si se pronuncia natural (IBP, AINE, TAC, GES).
- Nada de símbolos en `say`: ni ≥, %, /, →, paréntesis ni abreviaturas como "mg" o "lpm".
- Nunca se leen números de diapositiva ni "en esta lámina".

## Largo

- El largo total lo fija el contenido (la tabla de tiers es solo referencia).
- Cada `say` tiene entre 1 y 4 frases. Si pasa de ~70 palabras, se divide en dos pasos.

## Verificación antes de entregar

```bash
node classes/scripts/check_lesson.cjs <id>    # sin ERROR; los avisos se corrigen salvo que haya motivo
```
El reproductor (`build_swiss_player.cjs`) lo compila después quien integra; no se corre en paralelo.

## Revisión médica (`classes/docs/REVISION_CONTENIDO.md`)

Se anota solo lo que un médico tiene que decidir, en la sección de la especialidad y en la categoría que corresponde:
- **A · Posible error del libro:** un dato que parece médicamente incorrecto.
- **B · El libro se contradice:** dos partes del libro dicen cosas distintas (se indica cuál se usó).
- **C · Falta información en el libro:** dosis, preguntas mencionadas que no están, etc.
No se anotan decisiones de formato ni explicaciones con otras palabras de lo mismo que dice el libro.
Cada agente devuelve sus notas en el informe final; quien integra las agrega al archivo.


---

# CLASE MODELO 1 (la referencia de tono y estilo): gastro-02.cjs
```js
// Clase piloto 1.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-02).

module.exports = {
  id: 'gastro-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué rompe la mucosa, a quién se endoscopia y a quién se erradica',
      say: 'Bienvenidos. En esta clase vemos la úlcera péptica, la dispepsia y el Helicobacter pylori, otro tema de alta frecuencia, con ocho preguntas en el banco. Y es la continuación natural de la clase anterior: allá el problema era una barrera que falla; aquí, es una mucosa que pierde su protección.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Qué rompe la mucosa?',
      nodes: [
        { id: 'hp', col: 0, row: 0, k: 'cause', t: 'Helicobacter pylori', s: 'Lo porta el 75 % de los chilenos' },
        { id: 'inf', col: 1, row: 0, k: 'mech', t: 'Inflamación de la mucosa', s: 'La bacteria daña el epitelio' },
        { id: 'aine', col: 0, row: 2, k: 'cause', t: 'AINE', s: 'Antiinflamatorios no esteroidales' },
        { id: 'pg', col: 1, row: 2, k: 'mech', t: 'Menos prostaglandinas', s: 'Se pierde la protección' },
        { id: 'cof', col: 2, row: 2, k: 'cause', t: 'Tabaco y corticoides', s: 'Cofactores' },
        { id: 'ulc', col: 2, row: 1, k: 'risk', t: 'Úlcera péptica', s: 'Duodenal o gástrica' },
        { id: 'sin', col: 3, row: 1, k: 'effect', t: 'Epigastralgia urente', s: 'Peor en ayunas, alivia al comer' },
      ],
      edges: [
        { from: 'hp', to: 'inf' }, { from: 'inf', to: 'ulc' },
        { from: 'aine', to: 'pg' }, { from: 'pg', to: 'ulc' },
        { from: 'cof', to: 'ulc', label: 'potencian' },
        { from: 'ulc', to: 'sin' },
      ],
      steps: [
        { show: ['hp'], note: 'Primer culpable: Helicobacter pylori',
          say: 'Partamos por la causa. En la úlcera péptica hay dos culpables, y el primero es el Helicobacter pylori. No es un detalle menor: en Chile, cerca del setenta y cinco por ciento de la población lo porta.' },
        { show: ['inf'], note: '90 % de las duodenales, 70 % de las gástricas',
          say: 'La bacteria vive en el estómago e inflama la mucosa, y esa mucosa inflamada es la que termina ulcerándose. Explica el noventa por ciento de las úlceras duodenales y el setenta por ciento de las gástricas.' },
        { show: ['aine'], note: 'Segundo culpable: los antiinflamatorios',
          say: 'El segundo culpable son los antiinflamatorios no esteroidales, los AINE.' },
        { show: ['pg'], note: 'Sin prostaglandinas, el ácido hace el daño',
          say: 'Pero actúan por otro camino: bloquean las prostaglandinas, que son justamente las que protegen la mucosa. Sin esa protección, el ácido hace el daño.' },
        { show: ['cof'], note: 'No causan úlcera solos, pero la potencian',
          say: 'Y hay dos cofactores que no causan la úlcera por sí solos, pero la potencian: el tabaco y los corticoides.' },
        { show: ['ulc'], note: 'Dos caminos, un mismo resultado',
          say: 'Por cualquiera de estos caminos llegamos al mismo lugar: la úlcera péptica, en el duodeno o en el estómago.' },
        { show: ['sin'], note: 'Ojo: el cáncer gástrico duele igual',
          say: '¿Y cómo se presenta? Con epigastralgia urente: un ardor en la boca del estómago que aumenta con el ayuno y alivia al comer o con antiácidos. Pero ojo, esta misma clínica la puede dar un cáncer gástrico, o una dispepsia funcional. Y eso nos lleva directo a la siguiente pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿A quién se le pide endoscopía?',
      cards: [
        { title: 'Endoscopía de entrada', tag: 'Alarma o 40 años o más', kind: 'alert', items: [
          { t: 'Signos de alarma', d: 'Baja de peso, anemia, vómitos, hemorragia',
            say: 'Como la úlcera, el cáncer y la dispepsia funcional duelen igual, la que decide es la endoscopía. ¿A quién se la pedimos? Primero, a todo paciente con signos de alarma: baja de peso, anemia, vómitos o hemorragia.' },
          { t: '40 años o más', d: 'Descartar cáncer gástrico (GES)',
            say: 'Y segundo, por edad: a los cuarenta años o más. En Chile el cáncer gástrico es la primera causa de muerte por cáncer en hombres, y por eso la garantía GES fija el corte en cuarenta, no en cincuenta como vimos en el reflujo. Esa diferencia se pregunta.' },
        ] },
        { title: 'Buscar el H. pylori', tag: 'Tres métodos', kind: 'key', items: [
          { t: 'Test de ureasa', d: 'En la biopsia de la endoscopía',
            say: 'La endoscopía además nos sirve para buscar la bacteria: en la biopsia se hace el test de ureasa.' },
          { t: 'Aliento o antígeno fecal', d: 'Sin endoscopía',
            say: 'Y sin endoscopía hay dos métodos no invasivos: el test del aliento con urea marcada, y el antígeno en deposiciones.' },
        ] },
        { title: 'Dispepsia funcional', tag: 'Diagnóstico de exclusión', kind: 'normal', items: [
          { t: 'Exige endoscopía normal', d: 'Sin úlcera ni cáncer',
            say: 'Por último, la dispepsia funcional. Es un diagnóstico de exclusión: solo puedes llamarla funcional cuando la endoscopía es normal. Sin endoscopía, no hay dispepsia funcional.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Úlcera duodenal vs úlcera gástrica',
      nodes: [
        { id: 'ulc', col: 0, row: 1, k: 'start', t: 'Úlcera en la endoscopía', s: '¿Dónde está?' },
        { id: 'duo', col: 1, row: 0, k: 'effect', t: 'Úlcera duodenal', s: 'No se maligniza' },
        { id: 'era', col: 2, row: 0, k: 'good', t: 'Erradicar siempre', s: 'Aunque el test sea negativo' },
        { id: 'ctd', col: 3, row: 0, k: 'good', t: 'Control no invasivo', s: 'Aliento o antígeno fecal' },
        { id: 'gas', col: 1, row: 2, k: 'risk', t: 'Úlcera gástrica', s: 'Puede ser un cáncer' },
        { id: 'bio', col: 2, row: 2, k: 'risk', t: 'Biopsia del borde', s: 'Siempre, para descartar cáncer' },
        { id: 'ctg', col: 3, row: 2, k: 'good', t: 'Endoscopía de control', s: 'Erradicar si H. pylori + y rebiopsiar' },
      ],
      edges: [
        { from: 'ulc', to: 'duo', label: 'duodeno' }, { from: 'duo', to: 'era' }, { from: 'era', to: 'ctd' },
        { from: 'ulc', to: 'gas', label: 'estómago' }, { from: 'gas', to: 'bio' }, { from: 'bio', to: 'ctg' },
      ],
      steps: [
        { show: ['ulc'], note: 'La ubicación cambia toda la conducta',
          say: 'Ahora, encontraste una úlcera. Lo primero que tienes que preguntarte es dónde está, porque la conducta cambia completamente.' },
        { show: ['duo'], note: 'Duodenal: el problema es la bacteria, no el cáncer',
          say: 'Si está en el duodeno, la úlcera no se maligniza. Su problema es otro: casi siempre es Helicobacter.' },
        { show: ['era'], note: 'Falsos negativos: IBP previo o sangrado reciente',
          say: 'Por eso la regla es erradicar siempre, incluso si el test sale negativo. Los falsos negativos son frecuentes, por ejemplo si el paciente venía tomando IBP o sangró hace poco.' },
        { show: ['ctd'], note: '4 semanas post antibióticos, IBP suspendido 2 semanas',
          say: 'Y el control se hace sin endoscopía: test del aliento o antígeno fecal, cuatro semanas después de terminar los antibióticos, y con el IBP suspendido dos semanas antes, para no tener un falso negativo.' },
        { show: ['gas'], note: 'Gástrica: puede ser un cáncer que parece úlcera',
          say: 'Si en cambio la úlcera está en el estómago, el foco cambia. La úlcera gástrica puede ser un cáncer que se ve como úlcera.' },
        { show: ['bio'], note: 'Biopsia en la primera endoscopía',
          say: 'Por eso siempre se biopsia el borde, ya en la primera endoscopía.' },
        { show: ['ctg'], note: 'Duodenal: se controla con un test. Gástrica: con el endoscopio',
          say: 'Se erradica si el Helicobacter es positivo, y el control es con una nueva endoscopía, que verifica la cicatrización y permite volver a biopsiar. En resumen: la duodenal se controla con un test; la gástrica, con el endoscopio.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Erradicación: cómo y a quién',
      cards: [
        { title: 'Primera línea', tag: '14 días', kind: 'pharma', items: [
          { t: 'IBP + amoxicilina + claritromicina', d: 'Amoxicilina 1 g y claritromicina 500 mg, cada 12 horas',
            say: 'Veamos cómo se erradica. La primera línea es una terapia triple: un IBP, amoxicilina un gramo y claritromicina quinientos miligramos, todos cada doce horas, por catorce días. Catorce, no siete ni diez.' },
        ] },
        { title: 'Segunda línea', tag: 'Si falla la primera', kind: 'pharma', items: [
          { t: 'Cuádruple con bismuto', d: 'IBP + bismuto + tetraciclina + metronidazol',
            say: 'Si falla, pasamos a la segunda línea: la terapia cuádruple con bismuto, que suma bismuto, tetraciclina y metronidazol al IBP. Y fíjate en la lógica: si la primera falló, lo más probable es que la bacteria sea resistente a la claritromicina, así que no la repetimos.' },
        ] },
        { title: '¿A quién se erradica?', tag: 'Se pregunta siempre', kind: 'key', items: [
          { t: 'Úlcera y linfoma MALT: siempre', d: 'El MALT regresa solo con antibióticos',
            say: '¿A quién se erradica? Siempre en la úlcera, y siempre en el linfoma MALT gástrico. Este último es un dato muy preguntado: el linfoma MALT regresa solo con los antibióticos, sin quimioterapia.' },
          { t: 'Reflujo: no', d: 'No hay asociación',
            say: 'En el reflujo, no. Conecta esto con la clase anterior: no hay relación entre el Helicobacter y el reflujo, así que un paciente con reflujo y test positivo no se erradica por su reflujo.' },
          { t: 'Indicaciones relativas', d: 'Dispepsia funcional, AINE crónico, familiar con cáncer gástrico',
            say: 'Y hay indicaciones relativas: la dispepsia funcional, el usuario crónico de antiinflamatorios, el familiar con cáncer gástrico, y la metaplasia o gastritis atrófica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencias',
      title: 'Complicaciones: hemorragia y perforación',
      nodes: [
        { id: 'ulc', col: 0, row: 1, k: 'risk', t: 'Úlcera péptica', s: 'Complicada' },
        { id: 'hda', col: 1, row: 0, k: 'risk', t: 'Hemorragia digestiva alta', s: 'La más frecuente' },
        { id: 'ibp', col: 2, row: 0, k: 'good', t: 'IBP endovenoso', s: 'Y endoscopía urgente con hemostasia' },
        { id: 'per', col: 1, row: 2, k: 'risk', t: 'Perforación', s: 'Dolor en puñalada, abdomen en tabla' },
        { id: 'rx', col: 2, row: 2, k: 'mech', t: 'Radiografía de tórax de pie', s: 'Neumoperitoneo' },
        { id: 'cir', col: 3, row: 2, k: 'alert', t: 'Cirugía de urgencia', s: 'Endoscopía contraindicada' },
      ],
      edges: [
        { from: 'ulc', to: 'hda', label: 'sangra' }, { from: 'hda', to: 'ibp' },
        { from: 'ulc', to: 'per', label: 'perfora' }, { from: 'per', to: 'rx' }, { from: 'rx', to: 'cir' },
      ],
      steps: [
        { show: ['ulc'], note: 'Las dos complicaciones que llegan a urgencias',
          say: 'Para cerrar la parte teórica, las dos complicaciones que llegan a urgencias.' },
        { show: ['hda'], note: 'Melena o hematemesis en un paciente ulceroso',
          say: 'La más frecuente es la hemorragia digestiva alta: melena o hematemesis en un paciente con síndrome ulceroso.' },
        { show: ['ibp'], note: 'La endoscopía diagnostica y trata',
          say: 'Se maneja con IBP endovenoso y endoscopía de urgencia, que en el mismo acto detiene el sangrado con terapia hemostática.' },
        { show: ['per'], note: 'Clínica inconfundible',
          say: 'La segunda es la perforación, y su clínica es inconfundible: un dolor brusco, en puñalada, y un abdomen en tabla.' },
        { show: ['rx'], note: 'Buscar aire bajo el diafragma',
          say: 'El examen es la radiografía de tórax de pie, buscando aire bajo el diafragma: el neumoperitoneo.' },
        { show: ['cir'], note: 'Al revés que en la hemorragia: aquí no se endoscopia',
          say: 'Y el tratamiento es cirugía de urgencia. Aquí la endoscopía está contraindicada: meter aire a presión en un estómago perforado solo empeora las cosas. Es exactamente al revés que en la hemorragia, y por eso el examen las pone juntas.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'A quién se erradica y cómo se controla',
      head: ['Situación', '¿Erradicar?', 'Control'],
      rows: [
        { cells: ['Úlcera duodenal', 'Siempre, aunque el test sea negativo', 'Aliento o antígeno fecal a las 4 semanas'],
          say: 'Repasemos en una tabla. Úlcera duodenal, cualquiera: se erradica siempre, aunque el test sea negativo, y se controla con antígeno fecal o test del aliento a las cuatro semanas.' },
        { cells: ['Úlcera gástrica con H. pylori +', 'Sí', 'Endoscopía: cicatrización + biopsias'],
          say: 'Úlcera gástrica con Helicobacter positivo: se erradica, y se controla con endoscopía, para ver la cicatrización y volver a biopsiar.' },
        { cells: ['Úlcera gástrica con H. pylori −', 'No', 'Endoscopía de control igual'],
          say: 'Úlcera gástrica con Helicobacter negativo: no hay nada que erradicar, pero la endoscopía de control se mantiene. En la gástrica, lo que nunca cambia es el endoscopio.' },
        { cells: ['Reflujo con H. pylori +', 'No, no hay asociación', 'No aplica'],
          say: 'Reflujo con Helicobacter positivo: no se erradica.' },
        { cells: ['Linfoma MALT gástrico', 'Sí: es el tratamiento', 'Endoscopía seriada'],
          say: 'Y el linfoma MALT: se erradica, porque ese es el tratamiento, y se controla con endoscopías seriadas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 27 años, sin antecedentes ni uso de antiinflamatorios, con 3 meses de dolor epigástrico urente que aumenta con el ayuno y calma al comer. La endoscopía muestra una úlcera duodenal activa de 1 cm; el test de ureasa es negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar esquema erradicador de Helicobacter pylori por 14 días' },
        { letter: 'B', text: 'Indicar omeprazol 20 mg al día por 8 semanas, sin antibióticos' },
        { letter: 'C', text: 'Solicitar tomografía computarizada de abdomen y pelvis' },
        { letter: 'D', text: 'Repetir la endoscopía en 4 semanas para nuevo test de ureasa' },
        { letter: 'E', text: 'Solicitar gastrina sérica para descartar gastrinoma' },
      ],
      correct: 'A',
      explanation: 'Úlcera duodenal sin AINE: se erradica siempre, aunque el test sea negativo (los falsos negativos son frecuentes). Solo con IBP la úlcera cicatriza pero recidiva en cerca del 90 %; repetir estudios retrasa el tratamiento.',
      say: {
        stem: 'Vamos al caso. Hombre de veintisiete años, sin antecedentes y sin uso de antiinflamatorios, con tres meses de dolor epigástrico urente que aumenta con el ayuno y calma al comer. La endoscopía muestra una úlcera duodenal activa de un centímetro, y el test de ureasa sale negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: erradicar el Helicobacter por catorce días, dar solo omeprazol por ocho semanas, pedir un TAC de abdomen, repetir la endoscopía en cuatro semanas, o medir la gastrina. Piénsalo.',
        answer: 'Es la A. Este caso está hecho para que caigas en la trampa del test negativo. Úlcera duodenal, sin antiinflamatorios: es Helicobacter hasta que se demuestre lo contrario, y se erradica siempre. Si solo das omeprazol, la úlcera cicatriza, pero vuelve en cerca del noventa por ciento de los casos. Y repetir la endoscopía o pedir un TAC solo retrasa el tratamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 129',
      stem: 'Hombre de 42 años con 5 días de dolor epigástrico intenso y fluctuante, con náuseas, que empeora con el ayuno y tras usar antiinflamatorios. FC 85 lpm, PA 130/82 mmHg. Dolor a la palpación epigástrica, sin signos peritoneales, masas ni visceromegalia.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Gastritis erosiva' },
        { letter: 'B', text: 'Úlcera péptica' },
        { letter: 'C', text: 'Reflujo gastroesofágico' },
        { letter: 'D', text: 'Pancreatitis aguda leve' },
        { letter: 'E', text: 'Colecistitis aguda' },
      ],
      correct: 'B',
      explanation: 'Epigastralgia que empeora en ayunas y se gatilla con AINE: síndrome ulceroso. Sin dolor en faja ni signos peritoneales no es pancreatitis; sin dolor en hipocondrio derecho no es colecistitis; el reflujo da pirosis y regurgitación.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Hombre de cuarenta y dos años con cinco días de dolor epigástrico intenso y fluctuante, con náuseas, que empeora con el ayuno y después de tomar antiinflamatorios. Signos vitales normales, dolor a la palpación epigástrica, sin signos peritoneales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: gastritis erosiva, úlcera péptica, reflujo gastroesofágico, pancreatitis aguda leve, o colecistitis aguda.',
        answer: 'La respuesta es la B, úlcera péptica. Fíjate cómo el enunciado va armando exactamente el mecanismo que vimos: un dolor que empeora en ayunas, y un gatillo claro, los antiinflamatorios. Sin dolor en faja ni signos peritoneales, no es pancreatitis. Sin dolor en el hipocondrio derecho, no es colecistitis. Y el reflujo daría pirosis y regurgitación, no epigastralgia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Endoscopía', kind: 'key', items: [
          { t: 'Alarma o 40 años o más', d: 'Endoscopía con biopsias',
            say: 'Cerremos con las reglas de oro. Signos de alarma, o cuarenta años o más: endoscopía con biopsias.' },
          { t: 'Dispepsia funcional', d: 'Solo con endoscopía normal',
            say: 'La dispepsia funcional solo existe con una endoscopía normal.' },
        ] },
        { title: 'Tratamiento', tag: 'Erradicar', kind: 'pharma', items: [
          { t: 'Duodenal: erradicar siempre', d: 'Aunque el test sea negativo',
            say: 'La úlcera duodenal se erradica siempre, aunque el test sea negativo.' },
          { t: 'Gástrica: biopsia y control endoscópico', d: 'Siempre',
            say: 'La gástrica se biopsia y se controla con endoscopía, siempre.' },
          { t: 'Triple terapia por 14 días', d: 'Si falla: cuádruple con bismuto',
            say: 'La triple terapia dura catorce días, y si falla, cuádruple con bismuto.' },
        ] },
        { title: 'Urgencias', tag: 'Hemorragia vs perforación', kind: 'alert', items: [
          { t: 'Perforación: radiografía y cirugía', d: 'La endoscopía está contraindicada',
            say: 'Y en la perforación, radiografía y cirugía, nunca endoscopía. Si te llevas una sola idea de hoy: la duodenal se erradica siempre, y la gástrica se biopsia siempre. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],
};

```

Su árbol de decisión (en las clases nuevas va DENTRO del archivo, como `pathway`):
```js
const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
// 'gastro-02': {
    title: 'Dispepsia y úlcera péptica: estudio y erradicación',
    root: N('start', 'Dispepsia / epigastralgia', 'Urente, alivia con la comida',
      'Paciente con epigastralgia urente que alivia con la comida. Ojo: la misma clínica la dan la úlcera, el cáncer gástrico y la dispepsia funcional.',
      ['', N('q', '¿Alarma o edad ≥ 40 años?', 'Baja de peso · anemia · vómitos · HDA',
        '¿Tiene signos de alarma o cuarenta años o más? Esa es la puerta de entrada a la endoscopía.',
        ['SÍ', N('alert', 'EDA con biopsias', 'Confirma la úlcera y descarta cáncer',
          'Se solicita endoscopía digestiva alta con biopsias: confirma la úlcera y descarta un cáncer gástrico. En la biopsia además buscamos Helicobacter pylori con test de ureasa.',
          ['', N('q', '¿Úlcera duodenal o gástrica?', 'Define a quién se erradica y cómo se controla',
            'Ahora la pregunta clave: ¿la úlcera es duodenal o gástrica? De eso depende cómo erradicamos y cómo controlamos.',
            ['Duodenal', N('ok', 'Erradicar H. pylori siempre', 'Control: antígeno fecal o test del aliento',
              'Toda úlcera duodenal se erradica, aunque el test salga negativo, porque los falsos negativos son frecuentes. Primera línea: IBP más amoxicilina y claritromicina por catorce días. Control a las cuatro semanas con antígeno fecal o test del aliento.')],
            ['Gástrica', N('refer', 'Erradicar si H. pylori (+)', 'Biopsia del borde + EDA de control',
              'En la úlcera gástrica se erradica si el Helicobacter es positivo, y siempre se controla con una nueva endoscopía para verificar cicatrización y descartar cáncer.')])])],
        ['NO', N('ok', 'Buscar H. pylori y AINE', 'Dispepsia funcional exige EDA normal',
          'Sin alarma y bajo los cuarenta, buscamos las dos causas: Helicobacter pylori y los antiinflamatorios. Recuerda que la dispepsia funcional es un diagnóstico de exclusión que requiere una endoscopía normal.')])]),
  },
```

# CLASE MODELO 2 (formato completo con pathway dentro del archivo): gastro-17.cjs
```js
// Clase 4.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sumar síntomas para separar cuatro cuadros y saber cuál es urgencia',
      say: 'Bienvenidos. Hoy entramos al bloque de vía biliar con las cuatro patologías del cálculo: colelitiasis, colecistitis, coledocolitiasis y colangitis. Es un tema de alta rentabilidad, y se ordena con una regla muy simple: sumar síntomas. Si en la clase de ictericia aprendiste que el dolor manda en la colestasia, hoy vamos a ver por qué. Al final vas a saber responder lo que el examen siempre pregunta: qué cuadro es, y si se opera, se drena o espera.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un cálculo, cuatro cuadros',
      nodes: [
        { id: 'cal', col: 0, row: 2, k: 'cause', t: 'Cálculos en la vesícula', s: 'Colelitiasis' },
        { id: 'col', col: 1, row: 0, k: 'effect', t: 'Cólico biliar', s: 'Solo dolor' },
        { id: 'cis', col: 2, row: 0, k: 'risk', t: 'Colecistitis aguda', s: 'Dolor + fiebre' },
        { id: 'cdl', col: 1, row: 3, k: 'risk', t: 'Coledocolitiasis', s: 'Dolor + ictericia' },
        { id: 'cht', col: 2, row: 3, k: 'alert', t: 'Colangitis', s: 'Dolor + ictericia + fiebre' },
        { id: 'can', col: 3, row: 1, k: 'trap', t: 'Cáncer de vesícula', s: 'Chile: la tasa más alta del mundo' },
      ],
      edges: [
        { from: 'cal', to: 'col', label: 'contracción' }, { from: 'col', to: 'cis', label: 'se enclava' },
        { from: 'cal', to: 'cdl', label: 'migra' }, { from: 'cdl', to: 'cht', label: 'se infecta' },
        { from: 'cal', to: 'can', label: 'años' },
      ],
      steps: [
        { show: ['cal'], note: 'Todo parte del mismo cálculo',
          say: 'Todo parte del mismo lugar: cálculos en la vesícula, la colelitiasis. Lo que cambia es dónde se queda el cálculo y si se infecta. Entender ese recorrido es lo que te permite no memorizar cuatro cuadros por separado, sino deducirlos.' },
        { show: ['col'], note: 'Solo dolor, y cede solo',
          say: 'Si la vesícula se contrae contra un cálculo y luego este se libera, aparece solo dolor: el cólico biliar.' },
        { show: ['cis'], note: 'Se suma la fiebre',
          say: 'Si el cálculo se queda enclavado, la vesícula se inflama y se infecta. Al dolor se suma la fiebre: es una colecistitis aguda. Fíjate que la bilis sigue saliendo por el colédoco, así que no hay ictericia.' },
        { show: ['cdl'], note: 'Se suma la ictericia',
          say: 'Si el cálculo sale de la vesícula y migra al colédoco, tapa la salida de la bilis. Al dolor se suma la ictericia: es una coledocolitiasis. Es la colestasia con dolor que vimos en la clase de ictericia.' },
        { show: ['cht'], note: 'Tríada de Charcot',
          say: 'Y si esa bilis estancada se infecta, tienes dolor, ictericia y fiebre, la tríada de Charcot: una colangitis.' },
        { show: ['can'], note: 'Por eso toda colelitiasis se opera',
          say: 'Hay un quinto destino, más lento: el cáncer de vesícula. Chile tiene la tasa más alta del mundo, y eso explica una regla que vamos a ver enseguida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Colelitiasis',
      title: 'Cólico biliar',
      cards: [
        { title: 'Clínica', tag: 'Solo dolor', kind: 'criteria', items: [
          { t: 'Dolor sordo, 30–60 min', d: 'Epigastrio o hipocondrio derecho, cede solo',
            say: 'Empecemos por el cólico biliar. Es un dolor sordo en el epigastrio o el hipocondrio derecho, que dura de treinta a sesenta minutos y cede solo.' },
          { t: 'Tras comidas grasas', d: 'Con náuseas',
            say: 'Lo típico es que aparezca después de una comida grasa, con náuseas. Sin fiebre, sin ictericia, y sin signos de irritación. Ese dolor que cede solo es lo que lo separa de la colecistitis, que viene a continuación.' },
        ] },
        { title: 'Diagnóstico', tag: 'Ecografía', kind: 'key', items: [
          { t: 'Imagen con sombra acústica', d: 'El cálculo en la vesícula',
            say: 'El examen es la ecografía, que muestra el cálculo como una imagen con sombra acústica. Es el mismo examen que abre el estudio de todas las patologías de esta clase.' },
        ] },
        { title: 'Manejo agudo', tag: 'En urgencia', kind: 'pharma', items: [
          { t: 'Dipirona + antiespasmódico', d: 'Analgesia',
            say: 'En la urgencia, el manejo es analgesia con dipirona más un antiespasmódico. Pero el cólico cede, y la pregunta del examen no es qué analgésico usar, sino qué hacer después.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Colelitiasis',
      title: 'Toda colelitiasis se opera',
      cards: [
        { title: 'La regla chilena', tag: 'Incluso asintomática', kind: 'alert', items: [
          { t: 'Colecistectomía laparoscópica electiva', d: 'Con o sin síntomas',
            say: 'Y lo que se hace después es operar. Toda colelitiasis se opera, con colecistectomía laparoscópica electiva, incluso si nunca dio síntomas.' },
          { t: 'Por complicaciones y por cáncer', d: 'El cáncer de vesícula en Chile',
            say: '¿Por qué, si en otros países se observa? Por el riesgo de complicaciones, que es todo lo que vimos en el flujo anterior, y sobre todo por el cáncer de vesícula en Chile.' },
        ] },
        { title: 'GES', tag: 'Cirugía preventiva', kind: 'criteria', items: [
          { t: 'Entre 35 y 49 años', d: 'Colecistectomía garantizada',
            say: 'Y está respaldado por el GES, que garantiza la colecistectomía preventiva entre los treinta y cinco y los cuarenta y nueve años. Esas edades se preguntan. Fuera de ese rango la regla de operar se mantiene; lo que cambia es la garantía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Colecistitis aguda',
      title: 'Dolor que no cede, con fiebre',
      cards: [
        { title: 'Clínica', tag: 'Dolor + fiebre', kind: 'criteria', items: [
          { t: 'Dolor persistente, más de 6 h', d: 'En el hipocondrio derecho',
            say: 'Ahora la colecistitis aguda. La primera diferencia con el cólico es el tiempo: el cólico dura menos de una hora y cede solo, mientras que aquí el dolor no cede y dura más de seis horas.' },
          { t: 'Fiebre, Murphy, leucocitosis', d: 'El Murphy es la clave del examen físico',
            say: 'Y se suman fiebre, leucocitosis y el signo de Murphy: el paciente corta la inspiración cuando palpas bajo el reborde costal derecho.' },
        ] },
        { title: 'Ecografía', tag: 'Confirma', kind: 'key', items: [
          { t: 'Cálculo enclavado', d: 'Y Murphy ecográfico',
            say: 'La ecografía muestra el cálculo enclavado, y el Murphy se puede reproducir con el transductor.' },
          { t: 'Pared > 4 mm', d: 'Y líquido perivesicular',
            say: 'Además, la pared de la vesícula mide más de cuatro milímetros, y hay líquido alrededor. Una vesícula engrosada con líquido perivesicular es colecistitis. Y fíjate en lo que no aparece: la bilirrubina es normal, porque el colédoco sigue libre.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Colecistitis aguda',
      title: 'La única que se opera de urgencia',
      nodes: [
        { id: 'cis', col: 0, row: 1, k: 'start', t: 'Colecistitis aguda', s: 'Confirmada por clínica y eco' },
        { id: 'hos', col: 1, row: 1, k: 'mech', t: 'Hospitalizar + antibióticos', s: 'Siempre' },
        { id: 'q', col: 2, row: 1, k: 'q', t: '¿Riesgo quirúrgico?', s: 'Paciente muy frágil' },
        { id: 'cir', col: 3, row: 0, k: 'good', t: 'Colecistectomía precoz', s: 'Laparoscópica, en < 72 h' },
        { id: 'pct', col: 3, row: 2, k: 'refer', t: 'Colecistostomía percutánea', s: 'Transitoria' },
      ],
      edges: [
        { from: 'cis', to: 'hos' }, { from: 'hos', to: 'q' },
        { from: 'q', to: 'cir', label: 'habitual' }, { from: 'q', to: 'pct', label: 'muy alto' },
      ],
      steps: [
        { show: ['cis'], note: 'Cambia todo respecto del cólico',
          say: 'Con el diagnóstico hecho, el manejo cambia completamente respecto del cólico. Aquí ya no hay solo un cálculo molestando: hay una vesícula inflamada e infectada.' },
        { show: ['hos'], note: 'No se va a la casa',
          say: 'El paciente se hospitaliza y se inician antibióticos. Este no se va a la casa con analgesia, como el del cólico.' },
        { show: ['q'], note: 'La pregunta es cuándo operar',
          say: 'Y la pregunta siguiente no es si se opera, sino cuándo. Y aquí la respuesta es clara: no se deja para después, como en el cólico.' },
        { show: ['cir'], note: 'Primeras 72 horas',
          say: 'La respuesta es colecistectomía laparoscópica precoz, en las primeras setenta y dos horas. Fíjate bien: de las cuatro patologías biliares, la colecistitis es la única que se opera de urgencia.' },
        { show: ['pct'], note: 'Solo para el paciente que no resiste la cirugía',
          say: 'La excepción es el paciente de muy alto riesgo quirúrgico. En él se hace una colecistostomía percutánea transitoria, que drena la vesícula hasta que pueda operarse.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Coledocolitiasis',
      title: 'Eco, colangiorresonancia, CPRE',
      nodes: [
        { id: 'cdl', col: 0, row: 1, k: 'start', t: 'Dolor + ictericia', s: 'FA y GGT altas, sin fiebre' },
        { id: 'eco', col: 1, row: 1, k: 'mech', t: 'Ecografía', s: 'Colédoco > 6–7 mm = sospecha' },
        { id: 'crm', col: 2, row: 0, k: 'mech', t: 'Colangiorresonancia', s: 'Confirma el cálculo' },
        { id: 'cpre', col: 3, row: 1, k: 'good', t: 'CPRE', s: 'Extrae el cálculo' },
        { id: 'dir', col: 2, row: 2, k: 'trap', t: 'Directo a CPRE', s: 'Si hay colangitis o la eco ve el cálculo' },
        { id: 'cx', col: 4, row: 1, k: 'good', t: 'Colecistectomía', s: 'Electiva, después' },
      ],
      edges: [
        { from: 'cdl', to: 'eco' }, { from: 'eco', to: 'crm', label: 'no ve el cálculo' },
        { from: 'crm', to: 'cpre' }, { from: 'eco', to: 'dir', label: 'lo ve' }, { from: 'dir', to: 'cpre' },
        { from: 'cpre', to: 'cx' },
      ],
      steps: [
        { show: ['cdl'], note: 'Patrón colestásico',
          say: 'Tercer cuadro: la coledocolitiasis. Dolor con ictericia, un patrón colestásico con fosfatasas alcalinas y GGT altas, y sin fiebre mientras no haya infección. Es exactamente el segundo paso del algoritmo de ictericia que ya conoces.' },
        { show: ['eco'], note: 'Rara vez ve el cálculo en el colédoco',
          say: 'El primer examen es la ecografía. Un colédoco de más de seis a siete milímetros hace sospechar, pero la ecografía rara vez alcanza a ver el cálculo dentro del colédoco.' },
        { show: ['crm'], note: 'No invasiva',
          say: 'Por eso el paso siguiente es la colangiorresonancia, que confirma el cálculo sin invadir.' },
        { show: ['cpre'], note: 'Diagnostica y trata',
          say: 'Y con el cálculo confirmado, se hace la colangiopancreatografía retrógrada endoscópica, la CPRE, que lo extrae. Es invasiva y puede causar pancreatitis, por eso no se usa para confirmar.' },
        { show: ['dir'], note: 'Las dos excepciones se preguntan',
          say: 'Hay dos situaciones en que se salta la colangiorresonancia y se va directo a CPRE: si hay colangitis, o si la ecografía ya vio el cálculo en el colédoco. En los dos casos no hay nada que confirmar, y esperar solo retrasa el tratamiento.' },
        { show: ['cx'], note: 'La vesícula sigue teniendo cálculos',
          say: 'Y no olvides el final: después de la CPRE, colecistectomía laparoscópica electiva, porque la vesícula sigue llena de cálculos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Colangitis aguda',
      title: 'Charcot y Reynolds',
      cards: [
        { title: 'Tríada de Charcot', tag: 'Colangitis', kind: 'criteria', items: [
          { t: 'Dolor + ictericia + fiebre', d: 'Bilis infectada y a presión',
            say: 'El cuarto cuadro es el más grave. La colangitis se reconoce por la tríada de Charcot: dolor, ictericia y fiebre. Es bilis infectada y a presión dentro de una vía biliar tapada: es la coledocolitiasis que se infectó.' },
        ] },
        { title: 'Péntada de Reynolds', tag: 'Forma grave', kind: 'alert', items: [
          { t: 'Charcot + hipotensión', d: 'Shock séptico de origen biliar',
            say: 'Si a la tríada se suma hipotensión y compromiso de conciencia, tienes la péntada de Reynolds: la forma grave, con el paciente en shock. Es una sepsis de origen biliar, y el reloj corre.' },
          { t: '+ compromiso de conciencia', d: 'Somnolencia, confusión',
            say: 'Ojo con el enunciado: somnolencia o confusión en un paciente con fiebre e ictericia es Reynolds, no una encefalopatía. Ese paciente necesita drenaje ya.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Colangitis aguda',
      title: 'Lo esencial es drenar',
      nodes: [
        { id: 'cht', col: 0, row: 1, k: 'start', t: 'Colangitis', s: 'Charcot o Reynolds' },
        { id: 'vol', col: 1, row: 0, k: 'mech', t: 'Reposición de volumen', s: 'Sostener la presión' },
        { id: 'atb', col: 1, row: 2, k: 'mech', t: 'Antibióticos amplio espectro', s: 'Ceftriaxona + metronidazol' },
        { id: 'cpre', col: 2, row: 1, k: 'alert', t: 'CPRE urgente', s: 'Drenaje biliar: lo esencial' },
        { id: 'cx', col: 3, row: 1, k: 'good', t: 'Colecistectomía', s: 'Después, electiva' },
      ],
      edges: [
        { from: 'cht', to: 'vol' }, { from: 'cht', to: 'atb' },
        { from: 'vol', to: 'cpre' }, { from: 'atb', to: 'cpre' }, { from: 'cpre', to: 'cx' },
      ],
      steps: [
        { show: ['cht', 'vol'], note: 'Primero, estabilizar',
          say: '¿Cómo se trata? Primero se estabiliza: reposición de volumen, porque muchos llegan hipotensos.' },
        { show: ['atb'], note: 'Amplio espectro',
          say: 'Junto con eso, antibióticos de amplio espectro, por ejemplo ceftriaxona más metronidazol.' },
        { show: ['cpre'], note: 'Drenar la vía biliar tapada',
          say: 'Pero lo esencial es el drenaje biliar urgente por CPRE. Es un absceso dentro de la vía biliar, y como todo absceso, hay que drenarlo. Esta es la conducta prioritaria que te van a preguntar.' },
        { show: ['cx'], note: 'La vesícula se saca cuando el paciente está estable',
          say: 'Y la colecistectomía se hace después, en forma electiva, con el paciente estable. Operar la vesícula de urgencia en una colangitis es una respuesta incorrecta clásica: el problema no está en la vesícula, sino en el colédoco.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: '¿Qué es urgente y qué es electivo?',
      nodes: [
        { id: 'cis', col: 0, row: 0, k: 'risk', t: 'Colecistitis', s: 'Dolor + fiebre' },
        { id: 'cisx', col: 1, row: 0, k: 'alert', t: 'Cirugía urgente', s: 'Colecistectomía en < 72 h' },
        { id: 'cht', col: 0, row: 2, k: 'risk', t: 'Colangitis', s: 'Dolor + ictericia + fiebre' },
        { id: 'chtx', col: 1, row: 2, k: 'alert', t: 'CPRE urgente', s: 'Se drena, no se opera' },
        { id: 'resto', col: 2, row: 1, k: 'good', t: 'Todo lo demás: electivo', s: 'Cólico · post CPRE · crónicas' },
        { id: 'cro', col: 3, row: 1, k: 'trap', t: 'Colecistitis crónica', s: 'Porcelana o escleroatrófica: riesgo de cáncer' },
      ],
      edges: [
        { from: 'cis', to: 'cisx' }, { from: 'cht', to: 'chtx' },
        { from: 'cisx', to: 'resto', label: 'luego' }, { from: 'chtx', to: 'resto', label: 'luego' },
        { from: 'resto', to: 'cro' },
      ],
      steps: [
        { show: ['cis', 'cisx'], note: 'La única que se opera de urgencia',
          say: 'Juntemos todo en la diferencia que más se pregunta: qué es urgente y qué no. La colecistitis aguda se opera de urgencia, en menos de setenta y dos horas.' },
        { show: ['cht', 'chtx'], note: 'Urgente, pero con endoscopio',
          say: 'La colangitis también es urgente, pero no se opera: se drena por CPRE. Urgente no siempre significa pabellón.' },
        { show: ['resto'], note: 'Cólico, colelitiasis y post CPRE',
          say: 'Todo lo demás es electivo: la colelitiasis, el cólico biliar, y la colecistectomía que sigue a una CPRE. Incluso en la colangitis, la vesícula se saca después, cuando el paciente ya está estable.' },
        { show: ['cro'], note: 'Se operan por el riesgo de cáncer',
          say: 'Y las colecistitis crónicas, como la vesícula en porcelana o la escleroatrófica, también se operan en forma electiva, por su riesgo de cáncer. Suelen ser un hallazgo de imagen, y la trampa es dejarlas en observación porque el paciente no tiene síntomas.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos la regla de sumar síntomas en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Clínica, examen y cirugía',
      head: ['Cuadro', 'Dolor + …', 'Conducta'],
      rows: [
        { cells: ['Cólico biliar', 'Solo dolor', 'Analgesia; colecistectomía electiva'],
          say: 'Repasemos en una tabla, que es la misma regla de sumar síntomas con su conducta al lado. Cólico biliar, solo dolor: analgesia y colecistectomía electiva.' },
        { cells: ['Colecistitis aguda', 'Fiebre + Murphy', 'Antibióticos + colecistectomía < 72 h'],
          say: 'Colecistitis aguda, dolor con fiebre y Murphy: antibióticos y colecistectomía antes de setenta y dos horas.' },
        { cells: ['Coledocolitiasis', 'Ictericia', 'Eco → colangio-RM → CPRE → colecistectomía'],
          say: 'Coledocolitiasis, dolor con ictericia: ecografía, colangiorresonancia, CPRE, y luego colecistectomía electiva. Recuerda que la colangiorresonancia se salta si hay colangitis o si la ecografía ya vio el cálculo.' },
        { cells: ['Colangitis aguda', 'Ictericia + fiebre (Charcot)', 'Volumen + antibióticos + CPRE urgente'],
          say: 'Colangitis, dolor con ictericia y fiebre: volumen, antibióticos y CPRE urgente. Aquí lo urgente es drenar, no operar.' },
        { cells: ['Vesícula en porcelana o escleroatrófica', 'Hallazgo', 'Colecistectomía electiva'],
          say: 'Y la vesícula en porcelana o escleroatrófica, que suele ser un hallazgo: colecistectomía electiva por el riesgo de cáncer.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 48 años con 8 horas de dolor intenso y continuo en hipocondrio derecho, fiebre de 38,5 °C y vómitos. Murphy positivo. Leucocitos 15.000/mm³, PCR elevada, bilirrubina normal. Ecografía: colelitiasis, pared vesicular de 6 mm y líquido perivesicular.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Analgesia y colecistectomía electiva en 6 semanas' },
        { letter: 'B', text: 'Colangiorresonancia y luego CPRE' },
        { letter: 'C', text: 'Hospitalizar, antibióticos y colecistectomía laparoscópica precoz' },
        { letter: 'D', text: 'CPRE urgente para drenaje biliar' },
        { letter: 'E', text: 'Ácido ursodesoxicólico y control ecográfico' },
      ],
      correct: 'C',
      explanation: 'Dolor persistente + fiebre + Murphy + pared engrosada y líquido perivesicular: colecistitis aguda. La bilirrubina normal la separa de la coledocolitiasis y la colangitis. Es la única patología biliar que se opera de urgencia: colecistectomía laparoscópica en las primeras 72 horas.',
      say: {
        stem: 'Vamos al caso. Mujer de cuarenta y ocho años con ocho horas de dolor intenso y continuo en el hipocondrio derecho, fiebre de treinta y ocho y medio y vómitos. Murphy positivo, quince mil leucocitos, PCR elevada, y la bilirrubina normal. La ecografía muestra cálculos, una pared de seis milímetros y líquido perivesicular.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: analgesia y cirugía electiva en seis semanas, colangiorresonancia y CPRE, hospitalizar con antibióticos y colecistectomía precoz, CPRE urgente, o ácido ursodesoxicólico. Piénsalo.',
        answer: 'Es la C. Suma los síntomas: dolor de más de seis horas con fiebre y Murphy es colecistitis, y la ecografía lo confirma. La bilirrubina normal descarta el cálculo en el colédoco, así que la CPRE no tiene nada que hacer aquí. El distractor tentador es la cirugía electiva, pero la colecistitis es justamente la única que se opera de urgencia, en las primeras setenta y dos horas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Hombre de 62 años con dolor en hipocondrio derecho, ictericia progresiva, fiebre de 39 °C con calofríos y, en las últimas horas, somnolencia y PA 90/50 mmHg.',
      question: '¿Cuál es el diagnóstico y la conducta prioritaria?',
      options: [
        { letter: 'A', text: 'Colecistitis aguda; colecistectomía laparoscópica de urgencia' },
        { letter: 'B', text: 'Colangitis aguda grave; volumen, antibióticos y CPRE urgente para drenaje' },
        { letter: 'C', text: 'Coledocolitiasis; colangiorresonancia y luego CPRE electiva' },
        { letter: 'D', text: 'Hepatitis aguda; manejo de soporte' },
        { letter: 'E', text: 'Absceso hepático; antibióticos y drenaje percutáneo' },
      ],
      correct: 'B',
      explanation: 'Tríada de Charcot con hipotensión y compromiso de conciencia: péntada de Reynolds, colangitis aguda grave. Prioridad: volumen, antibióticos de amplio espectro y, sobre todo, drenaje biliar urgente por CPRE. La colecistectomía se difiere hasta estabilizar.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Hombre de sesenta y dos años con dolor en el hipocondrio derecho, ictericia progresiva, fiebre de treinta y nueve con calofríos, y en las últimas horas, somnolencia y una presión de noventa cincuenta.',
        question: '¿Cuál es el diagnóstico y la conducta prioritaria?',
        options: 'Las opciones: colecistitis con cirugía de urgencia, colangitis grave con volumen, antibióticos y CPRE urgente, coledocolitiasis con estudio electivo, hepatitis aguda, o absceso hepático. Piénsalo.',
        answer: 'La respuesta es la B. Dolor, ictericia y fiebre es Charcot; con hipotensión y somnolencia es Reynolds, una colangitis grave. Lo prioritario es volumen, antibióticos y drenar la vía biliar por CPRE. La A es la trampa: la cirugía de urgencia es para la colecistitis, y aquí la vesícula se opera después, con el paciente estable. Y la C falla por el tiempo: con Reynolds no hay espacio para un estudio electivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Mujer de 40 años, sin síntomas, a quien en una ecografía de rutina se le detecta colelitiasis (múltiples cálculos, vesícula de pared normal).',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Observación; operar solo si aparecen síntomas' },
        { letter: 'B', text: 'Ácido ursodesoxicólico para disolver los cálculos' },
        { letter: 'C', text: 'Colecistectomía laparoscópica electiva' },
        { letter: 'D', text: 'Dieta baja en grasas y control ecográfico anual' },
        { letter: 'E', text: 'Colecistectomía solo si los cálculos superan los 2 cm' },
      ],
      correct: 'C',
      explanation: 'En Chile, con la incidencia de cáncer de vesícula más alta del mundo, toda colelitiasis, aun asintomática, se trata con colecistectomía laparoscópica electiva. El GES la garantiza entre los 35 y 49 años. La disolución y la observación no protegen del cáncer.',
      say: {
        stem: 'Una más del banco. Mujer de cuarenta años, sin síntomas, a la que en una ecografía de rutina le encuentran múltiples cálculos en una vesícula de pared normal.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: observar y operar si aparecen síntomas, ácido ursodesoxicólico, colecistectomía laparoscópica electiva, dieta y control anual, u operar solo si los cálculos superan los dos centímetros. Piénsalo.',
        answer: 'Es la C. En Chile toda colelitiasis se opera, aunque no dé síntomas, por el cáncer de vesícula. Fíjate que el enunciado te quita todos los síntomas a propósito, para ver si aplicas la regla igual. Y esta paciente de cuarenta años está justo en el rango GES, de treinta y cinco a cuarenta y nueve. La A es la trampa, porque es lo que dicen muchos textos extranjeros; pero observar, disolver o hacer dieta no la protege del cáncer.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sumar síntomas', tag: 'Dolor + …', kind: 'key', items: [
          { t: 'Solo dolor = cólico', d: '+ fiebre = colecistitis',
            say: 'Cerremos con las reglas de oro. La primera es la regla que ordena toda la clase: sumar síntomas. Solo dolor es cólico biliar; dolor con fiebre, colecistitis.' },
          { t: '+ ictericia = coledocolitiasis', d: '+ fiebre + ictericia = colangitis',
            say: 'Dolor con ictericia, coledocolitiasis; y dolor, ictericia y fiebre, colangitis.' },
        ] },
        { title: 'Urgencias', tag: 'Qué y cómo', kind: 'alert', items: [
          { t: 'Colecistitis: cirugía < 72 h', d: 'La única que se opera de urgencia',
            say: 'La colecistitis es la única que se opera de urgencia, en menos de setenta y dos horas.' },
          { t: 'Colangitis: CPRE urgente', d: 'Volumen + antibióticos + drenaje',
            say: 'La colangitis se drena de urgencia por CPRE, con volumen y antibióticos, y la vesícula se opera después. Y en la coledocolitiasis, el orden es ecografía, colangiorresonancia y CPRE, salvo que haya colangitis o que la ecografía ya vea el cálculo.' },
        ] },
        { title: 'Electivo', tag: 'En Chile', kind: 'pharma', items: [
          { t: 'Toda colelitiasis se opera', d: 'GES entre 35 y 49 años',
            say: 'Y toda colelitiasis se opera, aunque sea asintomática, con GES entre los treinta y cinco y los cuarenta y nueve años. Si te llevas una sola idea de hoy: suma los síntomas, y sabrás cuál se opera, cuál se drena y cuál espera. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Patología biliar: qué acompaña al dolor',
    root: N('start', 'Dolor en hipocondrio derecho', 'Paciente con colelitiasis',
      'Paciente con cálculos en la vesícula y dolor en el hipocondrio derecho. No memorices cuatro cuadros: lo que acompaña al dolor define cuál es, y el cuadro define la conducta.',
      ['', N('q', '¿Qué acompaña al dolor?', 'Fiebre · ictericia · ambas',
        'La pregunta es una sola: ¿el dolor viene solo, con fiebre, con ictericia, o con ambas? La fiebre habla de infección; la ictericia, de un colédoco tapado.',
        ['Solo dolor', N('ok', 'Cólico biliar', 'Analgesia + colecistectomía electiva',
          'Solo dolor, que cede en treinta a sesenta minutos: cólico biliar. Analgesia, y colecistectomía laparoscópica electiva, porque toda colelitiasis se opera.')],
        ['Fiebre', N('alert', 'Colecistitis aguda', 'Antibióticos + colecistectomía < 72 h',
          'Dolor persistente con fiebre y Murphy positivo: colecistitis aguda. Hospitalizar, antibióticos y colecistectomía precoz, antes de setenta y dos horas.')],
        ['Ictericia', N('q', '¿La eco ve el cálculo?', 'Coledocolitiasis',
          'Dolor con ictericia, sin fiebre: coledocolitiasis. ¿La ecografía alcanzó a ver el cálculo en el colédoco?',
          ['NO', N('do', 'Colangiorresonancia → CPRE', 'Luego colecistectomía electiva',
            'Si no lo ve, se confirma con colangiorresonancia, y luego la CPRE lo extrae. Después, colecistectomía electiva.')],
          ['SÍ', N('do', 'CPRE directa', 'Luego colecistectomía electiva',
            'Si la ecografía ya lo vio, se va directo a CPRE, y después colecistectomía electiva.')])],
        ['Ictericia + fiebre', N('alert', 'Colangitis: CPRE urgente', 'Volumen + antibióticos',
          'Dolor, ictericia y fiebre, la tríada de Charcot: colangitis. Volumen, antibióticos y drenaje biliar urgente por CPRE. Si además hay hipotensión y compromiso de conciencia, es la péntada de Reynolds, y el drenaje no puede esperar.')])]),
  },
};

```
