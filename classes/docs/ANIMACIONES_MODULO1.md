# Animaciones que faltan · Módulo 1 (Medicina Interna)

Generado desde `ESTADO_ANIMACIONES.md` (PLAN_ANIMACIONES.md + videos en `media/animaciones/`). Cardiología excluida.

Regla: la anatomía siempre sobre ilustración real (Servier Medical Art CC BY 4.0, Blausen CC BY 3.0) o 3D real; los gráficos
y líneas de tiempo pueden ser solo código. Método nuevo: JavaScript (`classes/scripts/jsvideo/`, ver `VIDEO_CLASES_JS.md`).

**Total: 122** · rehacer (hoy abstractas): 16 · nuevas: 106

| Método | Cuántas |
|---|---|
| JS sobre ilustración real | 85 |
| JS gráfico | 33 |
| 3D en el Mac | 4 |

| Por especialidad | ★★★ | ★★ | ★ | Total |
|---|---|---|---|---|
| Diabetes | 1 | 10 | 3 | 14 |
| Endocrinología | 2 | 8 | 5 | 15 |
| Gastroenterología | 2 | 9 | 4 | 15 |
| Hematología | 2 | 12 | 2 | 16 |
| Infectología | 1 | 9 | 5 | 15 |
| Nefrología | 1 | 7 | 2 | 10 |
| Neurología | 2 | 8 | 4 | 14 |
| Respiratorio | 1 | 7 | 5 | 13 |
| Reumatología | 3 | 5 | 2 | 10 |

## Lista (en orden de trabajo: ★★★ primero)

| # | Clase | Animación | Prio | Estado | Método | Hecha |
|---|---|---|---|---|---|---|
| 1 | diab-15 | Cetoacidosis vs hiperosmolar: falta total vs parcial de insulina | ★★★ | 🔁 rehacer | JS gráfico (sin anatomía) || ✅ JS |
| 2 | endo-12 | Addison (ACTH alta, pigmento, potasio alto) vs secundaria (ACTH baja) en el eje | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 3 | endo-15 | Feocromocitoma: descarga de catecolaminas; por qué alfa antes que beta | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 4 | gastro-10 | Colitis ulcerosa continua desde el recto vs Crohn salteado y transmural | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 5 | gastro-25 | Invaginación: un segmento que entra en el siguiente | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 6 | hem-10 | Sin ADAMTS13, el von Willebrand no se corta y atrapa plaquetas | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 7 | hem-22 | Lisis tumoral: células que se rompen y liberan potasio, fósforo y ácido úrico | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 8 | infecto-06 | Virus rábico que sube por el nervio; toxina tetánica que quita el freno | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) | |
| 9 | nefro-13 | Podocito dañado y proteínas que escapan; edema | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 10 | neuro-01 | Núcleo y penumbra: la zona salvable que se pierde con el tiempo (2D, sin el modelo arterial incompleto) | ★★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 11 | neuro-20 | Otolitos en el conducto posterior durante Dix-Hallpike y Epley (procedural, con cabeza de referencia) | ★★★ | ⬜ nueva | 3D en el Mac (Blender + Z-Anatomy/BodyParts3D) | |
| 12 | resp-23 | Faringe que colapsa al dormir y se abre con el CPAP | ★★★ | ⬜ nueva | 3D en el Mac (Blender + Z-Anatomy/BodyParts3D) | |
| 13 | reuma-06 | Pannus que erosiona hueso en la artritis reumatoide | ★★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 14 | reuma-14 | Raynaud: blanco, azul y rojo en los dedos | ★★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 15 | reuma-17 | De la sacroilitis a la columna en caña de bambú | ★★★ | ⬜ nueva | 3D en el Mac (Blender + Z-Anatomy/BodyParts3D) | |
| 16 | diab-17 | Insulina mete el potasio a la célula (bomba Na/K); umbral de potasio antes de la insulina | ★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 17 | gastro-13 | Camino de la bilirrubina: hemólisis → hígado → bilis → intestino; dónde se corta en cada ictericia | ★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 18 | hem-07 | Coombs directo vs indirecto | ★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 19 | hem-15 | CID: consumo de plaquetas y factores, microtrombos y sangrado | ★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 20 | nefro-05 | Neurona en hiponatremia aguda, adaptación y corrección rápida (mielinólisis) | ★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 21 | neuro-19 | Parálisis facial central (respeta la frente) vs periférica (toda la hemicara) | ★★ | 🔁 rehacer | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 22 | diab-02 | Curva de la PTGO: normal, intolerancia y diabetes, con los cortes | ★★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 23 | diab-07 | Metformina en el hígado vs sulfonilurea forzando la célula beta | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 24 | diab-08 | Gliflozina (glucosa a la orina) e incretinas (saciedad, insulina) en sus órganos | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 25 | diab-14 | Síntomas adrenérgicos primero, neuroglucopénicos después, según cae la glicemia | ★★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 26 | diab-16 | El sodio corregido sube mientras baja la glicemia; agregar glucosa a los doscientos | ★★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 27 | diab-19 | Edema cerebral por gradiente osmótico inverso | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 28 | diab-20 | Del glomérulo hiperfiltrante a la albuminuria y la diálisis | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 29 | diab-21 | Del capilar dañado al neovaso que sangra | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 30 | diab-23 | Placa de ateroma que crece y la estatina que la estabiliza | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 31 | endo-07 | Yodo que entra al folículo; tiamazol bloquea la TPO; radioyodo destruye | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 32 | endo-08 | Cascada de la tormenta tiroidea y el orden PTU → yodo una hora después | ★★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 33 | endo-14 | Aldosterona → sodio dentro, potasio fuera; renina suprimida | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 34 | endo-16 | PTH: hueso, riñón, intestino; las vías de la hipercalcemia | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 35 | endo-18 | Remodelado óseo: osteoclasto vs osteoblasto; bifosfonato frenando la resorción | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 36 | endo-19 | Vitamina D: piel → hígado → riñón; dónde falla cada osteomalacia | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 37 | endo-21 | Dopamina frena a la prolactina; tallo cortado o fármaco → prolactina sube | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 38 | endo-23 | Sheehan: hipófisis grande del embarazo que se infarta con la hemorragia | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 39 | gastro-01 | Esfínter esofágico inferior que se relaja y el ácido que sube; Barrett | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 40 | gastro-02 | H. pylori en la mucosa; ácido que rompe la barrera | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 41 | gastro-06 | Hernia hiatal por deslizamiento vs paraesofágica | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 42 | gastro-09 | Vellosidad que se aplana con el gluten y se recupera con la dieta | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 43 | gastro-16 | Realce del hepatocarcinoma (arterial y lavado) vs hemangioma (centrípeto) | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 44 | gastro-18 | Páncreas que se autodigiere: tripsina activada | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 45 | gastro-20 | Émbolo en la mesentérica superior y el intestino que se isquemia | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 46 | gastro-24 | Píloro hipertrófico que no deja pasar; vómito a chorro | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 47 | hem-01 | Médula que responde (reticulocitos) vs que no responde | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 48 | hem-02 | Ferritina y transferrina que se cruzan según el hierro | ★★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 49 | hem-04 | Hepcidina que secuestra el hierro en la inflamación | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 50 | hem-08 | Disco que se vuelve esfera y el bazo que la atrapa | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 51 | hem-12 | Anticuerpos que marcan plaquetas y el bazo que las destruye | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 52 | hem-13 | Hemofilia: sin tenasa, el coágulo no se consolida | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 53 | hem-16 | Bloqueo madurativo: blastos que llenan la médula | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 54 | hem-18 | Diseminación ordenada del Hodgkin por cadenas ganglionares | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 55 | hem-20 | JAK2: receptor que no se apaga; tres neoplasias | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 56 | hem-24 | Compatibilidad ABO: quién recibe de quién | ★★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 57 | infecto-01 | Sepsis: de la infección a la disfunción orgánica y el shock | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 58 | infecto-02 | Meningitis: bacteria que cruza la barrera; LCR bacteriano vs viral | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 59 | infecto-03 | Herpes que viaja por el nervio olfatorio al lóbulo temporal | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 60 | infecto-07 | Aislamiento: contacto, gotitas, aéreo (tamaño de partícula) | ★★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 61 | infecto-11 | Diseminación de la tuberculosis desde el foco de Ghon | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 62 | infecto-14 | Hantavirus: fase prodrómica y fase cardiopulmonar en el tiempo | ★★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 63 | infecto-15 | Ciclo del Trypanosoma: vinchuca, sangre, corazón | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 64 | infecto-17 | Ciclo de la hidatidosis: perro, oveja, humano | ★★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 65 | infecto-22 | Línea de tiempo del exantema (cabeza a pies) por enfermedad | ★★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 66 | nefro-02 | Necrosis tubular: túbulo que se descama y forma cilindros | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 67 | nefro-04 | Síndrome hepatorrenal: vasodilatación esplácnica y riñón que se cierra | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 68 | nefro-06 | SIADH vs perdedor de sal vs polidipsia: volemia y orina | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 69 | nefro-12 | Alcalosis por vómito: cloro y potasio que se pierden | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 70 | nefro-16 | Semilunas que crecen en la cápsula de Bowman | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 71 | nefro-21 | Infección que sube de la vejiga al riñón | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 72 | neuro-03 | Hematoma que crece y desplaza la línea media | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 73 | neuro-05 | Seno venoso trombosado: la sangre no drena, edema e infarto venoso | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 74 | neuro-06 | Depresión cortical propagada (aura) y activación trigeminovascular | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 75 | neuro-07 | Nervio trigémino comprimido por un vaso (cortocircuito) | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 76 | neuro-14 | Placas de amiloide y ovillos de tau; acetilcolina que falta | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 77 | neuro-15 | Demencia vascular en escalones vs Alzheimer en pendiente | ★★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 78 | neuro-18 | Placas desmielinizantes separadas en tiempo y espacio | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 79 | resp-05 | Por qué el oxígeno tiene techo en el EPOC retenedor | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 80 | resp-10 | Bacilo, granuloma y cavitación | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 81 | resp-12 | Tres fases del derrame paraneumónico: exudativa, fibrinopurulenta, organizada | ★★ | ⬜ nueva | JS gráfico (sin anatomía) | ✅ JS |
| 82 | resp-13 | Bleb apical que se rompe y colapsa el pulmón | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 83 | resp-17 | Tumor central vs periférico; síndrome de vena cava | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 84 | resp-18 | Fibrosis que se extiende desde la periferia de las bases | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 85 | resp-24 | Monóxido que ocupa la hemoglobina | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 86 | reuma-01 | Artrocentesis y los cuatro líquidos | ★★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 87 | reuma-02 | Bacteria que llega por la sangre a la articulación | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 88 | reuma-08 | Inmunocomplejos que se depositan en órganos | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 89 | reuma-16 | Entesis inflamada: tendón que se inserta en el hueso | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 90 | reuma-21 | Arteria temporal inflamada que ocluye la arteria oftálmica | ★★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 91 | diab-03 | Resistencia a la insulina que sube durante el embarazo (lactógeno placentario) | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 92 | diab-05 | Glicemia durante y después del ejercicio (riesgo de hipoglicemia tardía) | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 93 | diab-22 | Neuropatía + isquemia + trauma → úlcera; el estilete que toca hueso | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 94 | endo-02 | Levotiroxina: dosis según peso y edad; absorción en ayunas | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 95 | endo-04 | TSH meta por trimestre; tamizaje de talón en el tiempo | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 96 | endo-09 | Algoritmo del nódulo: TSH → eco → punción → Bethesda | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 97 | endo-13 | Shock que no responde: por qué falta el cortisol para la noradrenalina | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 98 | endo-22 | GH → IGF-1; la glucosa que no la suprime | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 99 | gastro-04 | Úlcera que perfora vs Boerhaave vs Mallory-Weiss | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 100 | gastro-08 | Pérdida de agua según la deshidratación (planes A, B, C) | ★ | ⬜ nueva | JS gráfico (sin anatomía) | ✅ JS |
| 101 | gastro-21 | Ángulo de Treitz divide alta y baja | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 102 | gastro-26 | Trayectos de arma blanca vs fuego | ★ | ⬜ nueva | 3D en el Mac (Blender + Z-Anatomy/BodyParts3D) | |
| 103 | hem-21 | Neutrófilos y la regla de los sesenta minutos | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 104 | hem-23 | Trombofilias: balance procoagulante | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 105 | infecto-05 | Línea de tiempo de la profilaxis (72 h del pinchazo) | ★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 106 | infecto-09 | Algoritmo de confirmación del VIH | ★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 107 | infecto-18 | Cultivo según la semana en la fiebre tifoidea | ★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 108 | infecto-21 | Curso de la mononucleosis; TORCH | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
| 109 | infecto-24 | Riesgo MASCC y la regla de los sesenta minutos | ★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 110 | nefro-14 | Tres glomerulopatías en el glomérulo | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 111 | nefro-17 | Clases del lupus renal | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 112 | neuro-02 | ABCD²: riesgo que se acumula | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 113 | neuro-10 | Síncope (flujo cerebral cae) vs crisis | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 114 | neuro-12 | Bloqueo D2 por fármacos | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) || ✅ JS |
| 115 | neuro-22 | Fenotipo de fragilidad: cinco criterios | ★ | ⬜ nueva | JS gráfico (sin anatomía) || ✅ JS |
| 116 | resp-03 | Escalones GINA | ★ | ⬜ nueva | JS gráfico (sin anatomía) | ✅ JS |
| 117 | resp-06 | CURB-65 sumando puntos | ★ | ⬜ nueva | JS gráfico (sin anatomía) | ✅ JS |
| 118 | resp-09 | Absceso: cavidad que se forma y drena | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 119 | resp-16 | Nódulo: tamaño y crecimiento en el seguimiento | ★ | ⬜ nueva | JS gráfico (sin anatomía) | ✅ JS |
| 120 | resp-20 | Hemoptisis: sangre que inunda la vía aérea | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | ✅ JS |
| 121 | reuma-11 | Paradoja del anticoagulante lúpico (TTPK largo y trombosis) | ★ | ⬜ nueva | JS gráfico (sin anatomía) | |
| 122 | reuma-12 | Fibrosis de la piel y los órganos | ★ | ⬜ nueva | JS sobre ilustración real (Servier / Blausen) | |
