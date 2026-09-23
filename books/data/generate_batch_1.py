import json
import os

questions = [
    {
        "id": "B1-Q01",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "Lectura Sistemática del ECG en Urgencias y APS",
        "perfilCode": "1.01.4.001",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Inicial",
            "seg": "Derivar",
            "ges": "Herramienta Diagnóstica Universal (Protocolo GES Urgencias)"
        },
        "stem": "Hombre de 24 años, deportista aficionado, acude a control de salud en su CESFAM para evaluación precompetitiva. Refiere que en los últimos seis meses ha presentado en tres ocasiones episodios autolimitados de palpitaciones de inicio y término brusco durante el ejercicio intenso, sin síncope ni disnea. Al examen físico: PA 118/72 mmHg, FC 68 lpm regular, afebril, examen cardíaco y pulmonar normales.\nSe realiza un electrocardiograma de reposo de 12 derivaciones que revela: ritmo regular a 68 lpm, presencia de ondas P sinusales visibles precediendo a cada complejo, intervalo PR acortado de 102 ms, complejos QRS de 126 ms de duración con un empastamiento ascendente en la rama inicial de la onda R (onda delta) evidente en DI, aVL, V5 y V6, con alteraciones secundarias de la repolarización ventricular.\n¿Cuál es el diagnóstico electrocardiográfico más probable y la conducta médica inicial más adecuada?",
        "options": [
            {
                "id": "A",
                "text": "Bloqueo completo de rama izquierda; indicar ecocardiograma urgente y suspender de por vida todo tipo de actividad física"
            },
            {
                "id": "B",
                "text": "Bloqueo auriculoventricular de primer grado; tranquilizar al paciente y autorizar la práctica deportiva sin restricciones"
            },
            {
                "id": "C",
                "text": "Patrón de Wolff-Parkinson-White (preexcitación ventricular); derivar a cardiología/electrofisiología para estratificación de riesgo y eventual ablación por radiofrecuencia"
            },
            {
                "id": "D",
                "text": "Hipertrofia ventricular izquierda concéntrica con sobrecarga sistólica; iniciar de inmediato Enalapril 10 mg al día"
            },
            {
                "id": "E",
                "text": "Ritmo de la unión auriculoventricular acelerado; indicar Holter de arritmias ambulatorio de 24 horas y dar de alta"
            }
        ],
        "correcta": "C",
        "explicacion": "La opción C es la CORRECTA. El electrocardiograma muestra la tríada diagnóstica patognomónica del patrón de preexcitación ventricular o de Wolff-Parkinson-White (WPW): 1) Intervalo PR corto (< 120 ms), 2) Ensanchamiento del complejo QRS (> 120 ms a expensas de la fase inicial), y 3) Presencia de onda delta (empastamiento inicial de la onda R producido por la despolarización ventricular prematura a través de una vía accesoria anómala o haz de Kent que elude el retardo fisiológico del nodo auriculoventricular). Dado que el paciente presenta antecedentes clínicos de palpitaciones paroxísticas, se configura formalmente un Síndrome de Wolff-Parkinson-White. La conducta normativa en la atención primaria es derivar a cardiología y electrofisiología para estratificación del período refractario anterógrado de la vía accesoria (riesgo de fibrilación auricular preexcitada con respuesta ventricular rápida y degeneración en fibrilación ventricular) y eventual ablación curativa por catéter con radiofrecuencia (éxito > 95%).\n\nAnálisis de distractores:\n- Opción A es incorrecta: En el bloqueo de rama izquierda (BCRI) el intervalo PR es normal (> 120 ms) y no existe onda delta; el ensanchamiento del QRS se debe a retardo en la conducción intraventricular izquierda tardía (ondas R anchas y melladas en V5-V6), no a una vía accesoria.\n- Opción B es incorrecta: El bloqueo AV de primer grado se define exactamente por lo contrario: una prolongación patológica del intervalo PR (> 200 ms con conducción 1:1), mientras que en este paciente el PR está marcadamente acortado (102 ms).\n- Opción D es incorrecta: La hipertrofia ventricular izquierda se diagnostica por criterios de voltaje aumentado (como Sokolow-Lyon ≥ 35 mm o Cornell) y sobrecarga del ST-T, pero no cursa con intervalo PR corto ni onda delta; el paciente es un joven normotenso sin indicación de IECA.\n- Opción E es incorrecta: En el ritmo nodal o de la unión, las ondas P sinusales normales están ausentes (o son retrógradas negativas en derivaciones inferiores) y el QRS habitualmente es estrecho (< 100 ms)."
    },
    {
        "id": "B1-Q02",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "Angina Crónica Estable & Estratificación de Riesgo Funcional",
        "perfilCode": "1.01.1.001",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Patología GES #24 (Cardiopatía Coronaria y Angina Crónica)"
        },
        "stem": "Hombre de 63 años, hipertenso y diabético tipo 2, con diagnóstico reciente de angina de pecho estable en APS. Se encuentra en tratamiento con Aspirina 100 mg/día, Atorvastatina 80 mg/día y Bisoprolol 5 mg/día (con FC de reposo de 60 lpm). Como parte de su estratificación funcional GES, se somete a un test de esfuerzo convencional en cinta rodante bajo protocolo de Bruce. Durante la etapa 1 (a los 2 minutos y medio de ejercicio a baja carga), el paciente refiere opresión retroesternal progresiva y el trazado electrocardiográfico muestra un infradesnivel horizontal del segmento ST de 2.5 mm en derivaciones V4 a V6 y DII-DIII-aVF, acompañado de una caída de la presión arterial sistólica de 140 mmHg a 115 mmHg.\n¿Cuál es la conducta médica inmediata más adecuada a seguir según las guías clínicas GES vigentes?",
        "options": [
            {
                "id": "A",
                "text": "Suspender la prueba de esfuerzo y derivar de urgencia a coronariografía invasiva por criterios de alto riesgo isquémico y disfunción ventricular"
            },
            {
                "id": "B",
                "text": "Suspender la prueba, aumentar la dosis de Bisoprolol a 10 mg al día y programar una nueva ergometría en 3 meses"
            },
            {
                "id": "C",
                "text": "Continuar la prueba de esfuerzo hasta alcanzar al menos el 85% de la frecuencia cardíaca máxima teórica calculada para su edad"
            },
            {
                "id": "D",
                "text": "Indicar reposo en sala de observación, administrar nitroglicerina sublingual y solicitar un Holter de arritmias de 24 horas"
            },
            {
                "id": "E",
                "text": "Indicar alta a domicilio con adición de Mononitrato de Isosorbida oral 20 mg cada 12 horas y control en 6 meses"
            }
        ],
        "correcta": "A",
        "explicacion": "La opción A es la CORRECTA. El paciente presenta múltiples criterios de muy alto riesgo isquémico en la prueba de esfuerzo: 1) Aparición precoz de isquemia severa en la etapa 1 de Bruce (< 5 METs de carga); 2) Infradesnivel horizontal del segmento ST ≥ 2 mm en derivaciones múltiples; y 3) Respuesta tensional patológica con caída de la presión arterial sistólica durante el esfuerzo (marcador inequívoco de disfunción ventricular izquierda aguda inducida por isquemia masiva o enfermedad severa de tronco coronario izquierdo o trivascular). Estos hallazgos obligan a suspender de inmediato el test y constituyen una indicación formal de coronariografía invasiva precoz para eventual revascularización miocárdica (percutánea o quirúrgica) bajo la garantía GES de Cardiopatía Coronaria.\n\nAnálisis de distractores:\n- Opción B es incorrecta: Titular el betabloqueador y esperar 3 meses es negligente ante un paciente con criterios de alto riesgo anatómico de tronco común o tres vasos, en quien el riesgo de infarto extenso o muerte súbita a corto plazo es crítico.\n- Opción C es incorrecta: Forzar la continuación de la prueba ante dolor anginoso, caída de la presión arterial y ST descendido > 2 mm viola las normas elementales de seguridad ergométrica y expone al paciente a paro cardíaco o fibrilación ventricular en la cinta.\n- Opción D es incorrecta: El Holter de ritmo evalúa arritmias ambulatorias, pero no cuantifica la anatomía coronaria ni reemplaza la coronariografía ante una prueba de esfuerzo marcadamente positiva de alto riesgo.\n- Opción E es incorrecta: Los nitratos orales son fármacos antianginosos sintomáticos que no modifican la sobrevida ni previenen el infarto de miocardio en pacientes con enfermedad coronaria de alto riesgo."
    },
    {
        "id": "B1-Q03",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "Insuficiencia Cardíaca Crónica: Fenotipos, Diagnóstico & Criterios Framingham",
        "perfilCode": "1.01.1.006, 1.01.1.007",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Patología GES #24 (Insuficiencia Cardíaca)"
        },
        "stem": "Mujer de 74 años, con antecedentes de hipertensión arterial de larga data, diabetes mellitus tipo 2 y obesidad grado I (IMC 32 kg/m²), consulta en su CESFAM por disnea de 4 meses de evolución que ha progresado hasta presentarse al vestirse o caminar una cuadra (clase funcional III de la NYHA), asociada a necesidad de dormir con tres almohadas para no ahogarse (ortopnea) y edema vespertino de extremidades inferiores.\nAl examen físico: PA 142/86 mmHg, FC 76 lpm regular, FR 20 rpm, SatO2 94% ambiental. Destaca ingurgitación yugular visible a 45°, auscultación pulmonar con crépitos húmedos inspiratorios en ambas bases pulmonares, choque de la punta no desplazado, cuarto ruido cardíaco audible (R4) y edema maleolar bilateral simétrico con fóvea (++).\nLaboratorio: Creatinina 1.0 mg/dL, Potasio 4.4 mEq/L, NT-proBNP plasmático 1.350 pg/mL. El ecocardiograma Doppler transtorácico informa: ventrículo izquierdo con hipertrofia concéntrica moderada, fracción de eyección del ventrículo izquierdo (FEVI) estimada en 56%, aurícula izquierda dilatada (volumen indexado 42 mL/m²) y relación E/e' de 14.\n¿Cuál es el diagnóstico fenotípico más preciso y la estrategia farmacológica de primera línea recomendada para reducir hospitalizaciones y mortalidad cardiovascular según la evidencia actual?",
        "options": [
            {
                "id": "A",
                "text": "Insuficiencia cardíaca con fracción de eyección reducida (IC-FEr); indicar cuádruple terapia con Sacubitrilo/Valsartán, Carvedilol, Espironolactona y Dapagliflozina"
            },
            {
                "id": "B",
                "text": "Cor pulmonale crónico aislado; indicar oxigenoterapia domiciliaria continua y teofilina oral"
            },
            {
                "id": "C",
                "text": "Síndrome nefrótico incipiente; solicitar proteinuria de 24 horas e iniciar prednisona oral"
            },
            {
                "id": "D",
                "text": "Insuficiencia cardíaca con fracción de eyección preservada (IC-FEp); indicar inhibidor de SGLT2 (Empagliflozina o Dapagliflozina) y diurético de asa para descongestión"
            },
            {
                "id": "E",
                "text": "Disfunción diastólica asintomática Grado I; suspender fármacos y citar a control anual"
            }
        ],
        "correcta": "D",
        "explicacion": "La opción D es la CORRECTA. La paciente cumple criterios clínicos de Framingham para insuficiencia cardíaca congestiva (tres criterios mayores: ortopnea, ingurgitación yugular, crépitos pulmonares; y un criterio menor: edema de extremidades inferiores), presenta péptidos natriuréticos marcadamente elevados (NT-proBNP > 125 pg/mL en paciente no descompensado agudo) y el ecocardiograma demuestra una FEVI preservada (≥ 50%) con evidencia estructural y hemodinámica de disfunción diastólica y presiones de llenado elevadas (hipertrofia concéntrica del VI, dilatación de aurícula izquierda y relación E/e' > 13). Esto configura de manera concluyente el diagnóstico de Insuficiencia Cardíaca con Fracción de Eyección Preservada (IC-FEp). Según la evidencia de los ensayos clínicos EMPEROR-Preserved y DELIVER y las guías de práctica clínica ministeriales e internacionales vigentes, los inhibidores de SGLT2 (Empagliflozina 10 mg/día o Dapagliflozina 10 mg/día) son los únicos fármacos modificadores de la enfermedad que han demostrado reducir significativamente el desenlace combinado de hospitalizaciones por insuficiencia cardíaca y muerte cardiovascular en IC-FEp, asociados a diuréticos de asa (Furosemida) titulados según necesidad para el alivio de la sobrecarga de volumen.\n\nAnálisis de distractores:\n- Opción A es incorrecta: La IC-FEr se define formalmente por una FEVI ≤ 40%. En esta paciente la FEVI es del 56% (FE preservada). La cuádruple terapia completa (ARNI, betabloqueadores y ARM a dosis plenas) tiene indicación formal con reducción de mortalidad demostrada en IC-FEr, no en IC-FEp.\n- Opción B es incorrecta: El cor pulmonale es una falla ventricular derecha secundaria a hipertensión pulmonar por neumopatía crónica parenquimatosa o vascular (como EPOC grave); en esta paciente la patología primaria es del ventrículo izquierdo (hipertrofia y presiones de llenado aumentadas).\n- Opción C es incorrecta: El cuadro clínico corresponde a congestión cardíaca retrógrada con NT-proBNP elevado; no existen elementos clínicos ni de laboratorio de hipoalbuminemia ni síndrome nefrótico.\n- Opción E es incorrecta: La paciente no es asintomática; se encuentra en clase funcional III con ortopnea y signos congestivos evidentes que demandan tratamiento médico activo."
    },
    {
        "id": "B1-Q04",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "Estenosis Aórtica: Semiología, Severidad & TAVI vs SAVR (Guía GES)",
        "perfilCode": "1.01.1.002",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Derivar",
            "ges": "Patología GES #24 (Tratamiento Quirúrgico y Percutáneo de Valvulopatías)"
        },
        "stem": "Hombre de 79 años, hipertenso en tratamiento con Enalapril 10 mg al día, consulta en APS por disnea de esfuerzos progresiva en los últimos meses hasta clase funcional II-III y dos episodios de presíncope y mareos intensos al apurar el paso en la calle.\nAl examen físico: PA 110/80 mmHg, pulso carotídeo de baja amplitud y ascenso retardado (parvus et tardus), choque de la punta sostenido. A la auscultación destaca un soplo mesosistólico eyectivo, rudo, grado IV/VI en el segundo espacio intercostal derecho con irradiación a ambos vasos carotídeos, acompañado de un segundo ruido cardíaco único y marcadamente disminuido de intensidad (componente aórtico inaudible).\nEl ecocardiograma Doppler transtorácico revela: válvula aórtica trivalva con calcificación masiva y movilidad severamente reducida, Área Valvular Aórtica (AVA) de 0.72 cm² (AVA indexada de 0.40 cm²/m²), Gradiente medio transaórtico de 49 mmHg, Velocidad pico aórtica de 4.3 m/s, y FEVI del 55%.\n¿Cuál es el diagnóstico clínico-ecocardiográfico y la conducta definitiva de elección garantizada por el régimen GES?",
        "options": [
            {
                "id": "A",
                "text": "Estenosis aórtica moderada asintomática; titular Enalapril a dosis máximas de 40 mg al día y controlar con ecocardiograma en 1 año"
            },
            {
                "id": "B",
                "text": "Estenosis aórtica severa sintomática; derivar a centro cardiovascular terciario para evaluación de reemplazo valvular aórtico percutáneo (TAVI) o quirúrgico"
            },
            {
                "id": "C",
                "text": "Esclerosis aórtica senil benigna; mantener tratamiento habitual y tranquilizar al paciente"
            },
            {
                "id": "D",
                "text": "Estenosis aórtica severa; solicitar de inmediato un test de esfuerzo convencional en cinta rodante para estratificar el pronóstico funcional"
            },
            {
                "id": "E",
                "text": "Insuficiencia aórtica severa sintomática; programar plastía de válvula aórtica de urgencia"
            }
        ],
        "correcta": "B",
        "explicacion": "La opción B es la CORRECTA. El paciente cumple criterios ecocardiográficos inequívocos de Estenosis Aórtica Severa: 1) Área Valvular Aórtica < 1.0 cm² (0.72 cm²); 2) Gradiente medio transvalvular ≥ 40 mmHg (49 mmHg); y 3) Velocidad pico aórtica ≥ 4.0 m/s (4.3 m/s). La semiología confirma la severidad hemodinámica (pulso parvus et tardus, soplo sistólico eyectivo irradiado a carótidas y R2 con componente aórtico apagado o inaudible). La aparición de síntomas cardinales (disnea y presíncope de esfuerzo) marca un punto de inflexión pronóstico dramático: sin resolución de la obstrucción mecánica, la sobrevida media cae a menos de 2 a 3 años con un riesgo inminente de muerte súbita. La guía clínica GES y las normativas internacionales establecen como indicación formal el reemplazo valvular aórtico; en pacientes de 75 años o más, o con comorbilidades y fragilidad, el implante percutáneo de válvula aórtica transcatéter (TAVI) es el procedimiento de elección preferente frente a la cirugía abierta tradicional (SAVR).\n\nAnálisis de distractores:\n- Opción A es incorrecta: El área valvular < 1.0 cm² y el gradiente > 40 mmHg definen estenosis severa, no moderada. Además, los vasodilatadores potentes (como IECA en dosis altas) en presencia de una estenosis aórtica severa fija pueden inducir hipotensión ortostática catastrófica y colapso cardiovascular.\n- Opción C es incorrecta: La esclerosis aórtica senil cursa con engrosamiento o calcificación valvular pero con velocidad pico < 2.5 m/s, gradiente normal y sin repercusión hemodinámica ni clínica.\n- Opción D es incorrecta: En un paciente con estenosis aórtica severa SINTOMÁTICA, la prueba de esfuerzo (ergometría) está FORMALMENTE CONTRAINDICADA por el elevado riesgo de desencadenar hipotensión refractaria, síncope, taquiarritmias ventriculares y muerte súbita durante la prueba.\n- Opción E es incorrecta: El paciente presenta una estenosis aórtica con soplo sistólico eyectivo, no una insuficiencia aórtica (la cual se manifiesta por soplo diastólico aspirativo y pulsos saltones tipo Corrigan)."
    },
    {
        "id": "B1-Q05",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "Hipertensión Arterial Esencial & Secundaria: Diagnóstico, Metas GES & Terapia Dual",
        "perfilCode": "1.01.1.014, 1.01.1.015",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Patología GES #21 (Hipertensión Arterial Primaria o Esencial en personas de 15 años y más)"
        },
        "stem": "Mujer de 46 años, con diagnóstico de hipertensión arterial hace 1 año, consulta a control en CESFAM. Se encuentra en tratamiento regular con Enalapril 20 mg cada 12 horas, Amlodipino 10 mg al día e Hidroclorotiazida 25 mg al día (esquema triple a dosis plenas, con adherencia confirmada por conteo de comprimidos). En los últimos controles persiste con cifras tensionales elevadas, registrándose hoy PA 166/102 mmHg (promedio de 3 tomas estandarizadas) y FC 74 lpm. No tiene diabetes, no consume AINEs ni corticoides, y su IMC es 26 kg/m².\nLaboratorio de control: Creatinina 0.85 mg/dL, Nitrógeno ureico 14 mg/dL, Sodio 143 mEq/L, Potasio 2.9 mEq/L (confirmado en segunda muestra sin hemólisis), Bicarbonato venoso 31 mEq/L, Orina completa sin proteinuria.\nAnte la confirmación de hipertensión arterial resistente asociada a hipopotasemia persistente y alcalosis metabólica, ¿cuál es la sospecha etiológica más probable y el examen de tamizaje inicial de elección?",
        "options": [
            {
                "id": "A",
                "text": "Feocromocitoma retroperitoneal; solicitar determinación de metanefrinas libres en plasma u orina de 24 horas"
            },
            {
                "id": "B",
                "text": "Estenosis bilateral de arterias renales; solicitar angiografía por tomografía computarizada (AngioTAC) de arterias renales"
            },
            {
                "id": "C",
                "text": "Síndrome de Cushing endógeno; solicitar prueba de supresión nocturna con 1 mg de dexametasona"
            },
            {
                "id": "D",
                "text": "Hipertensión arterial esencial no controlada; añadir Atenolol 50 mg al día sin realizar estudios complementarios"
            },
            {
                "id": "E",
                "text": "Hiperaldosteronismo primario; solicitar relación entre concentración de aldosterona plasmática y actividad de renina plasmática (ARR)"
            }
        ],
        "correcta": "E",
        "explicacion": "La opción E es la CORRECTA. La paciente presenta una Hipertensión Arterial Resistente (PA no controlada a pesar del uso simultáneo de 3 fármacos antihipertensivos de familias distintas a dosis máximas recomendadas, uno de los cuales es un diurético). En este escenario clínico, la coexistencia de hipopotasemia espontánea o desproporcionada (< 3.0 mEq/L) y alcalosis metabólica (bicarbonato elevado) en una paciente joven o de mediana edad orienta de forma cardinal hacia el Hiperaldosteronismo Primario (Síndrome de Conn o hiperplasia suprarrenal bilateral), la causa más prevalente de hipertensión arterial secundaria endocrina (representando hasta un 10-20% de las HTA resistentes). El método de tamizaje de primera elección con mayor sensibilidad y especificidad es la Relación Aldosterona Plasmática / Actividad de Renina Plasmática (ARR). Un valor marcadamente elevado (típicamente ARR > 20-30 ng/dL por ng/mL/h con aldosterona > 15 ng/dL) confirma el cribado positivo y exige derivación para pruebas de confirmación diagnóstica (sobrecarga salina) y estudio de imágenes (TAC de glándulas suprarrenales).\n\nAnálisis de distractores:\n- Opción A es incorrecta: El feocromocitoma se presenta típicamente con crisis paroxísticas de la tríada sintomática clásica: cefalea pulsátil, sudoración profusa y palpitaciones taquicárdicas con gran labilidad hemodinámica, pero no cursa con hipopotasemia primaria ni alcalosis metabólica.\n- Opción B es incorrecta: La estenosis renovascular se sospecha ante deterioro brusco de la función renal (> 30-50% de incremento de creatinina) tras iniciar IECA/ARA2 o ante soplo abdominal; la paciente tolera dosis plenas de Enalapril manteniendo una creatinina estrictamente normal (0.85 mg/dL).\n- Opción C es incorrecta: El hipercortisolismo cursa con fenotipo característico (obesidad centrípeta, cara de luna llena, giba de búfalo, estrías purpúreas, miopatía proximal), signos ausentes en la paciente.\n- Opción D es incorrecta: Asumir una HTA primaria y prescribir un cuarto fármaco a ciegas posterga el diagnóstico de una causa secundaria potencialmente curable o con tratamiento específico (antagonistas de aldosterona como Espironolactona o cirugía) y perpetúa la hipopotasemia con riesgo de arritmias ventriculares letales."
    },
    {
        "id": "B1-Q06",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "Paro Cardiorrespiratorio & Algoritmos ACLS / MINSAL",
        "perfilCode": "1.01.2.006, 1.01.3.002, 1.01.3.004",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Derivar",
            "ges": "Garantía Explícita en Salud (Atención de Urgencia Vital Inmediata)"
        },
        "stem": "Hombre de 56 años con antecedentes de cardiopatía coronaria sufre colapso súbito en la sala de espera del servicio de urgencia. El equipo médico constata ausencia de respuesta y ausencia de pulso carotídeo, iniciando RCP inmediata de alta calidad con compresiones torácicas y ventilaciones con bolsa-mascarilla conectada a O2. El monitor-desfibrilador bifásico revela Fibrilación Ventricular (FV).\nSe administra una primera descarga de 200 J y se reanuda de inmediato la RCP por 2 minutos. Al verificar el ritmo persiste la FV, por lo que se administra una segunda descarga de 200 J, se reanuda la RCP y se administra 1 mg de Adrenalina endovenosa. Tras completar el segundo ciclo de 2 minutos de compresiones y ventilaciones, el ritmo en el monitor continúa mostrando Fibrilación Ventricular gruesa sin pulso. El operador administra la tercera descarga de 200 J e inmediatamente el equipo retoma las compresiones torácicas.\nMientras se ejecuta este tercer ciclo de RCP de 2 minutos, ¿cuál es la intervención farmacológica prioritaria de primera línea que debe prepararse y administrarse de inmediato según el algoritmo universal ACLS / MINSAL?",
        "options": [
            {
                "id": "A",
                "text": "Amiodarona 300 mg en bolo endovenoso rápido (o Lidocaína 1 a 1.5 mg/kg EV)"
            },
            {
                "id": "B",
                "text": "Bicarbonato de sodio 1 mEq/kg en infusión endovenosa rápida"
            },
            {
                "id": "C",
                "text": "Segunda dosis de Adrenalina 1 mg en bolo endovenoso"
            },
            {
                "id": "D",
                "text": "Sulfato de magnesio 2 gramos en bolo endovenoso lento"
            },
            {
                "id": "E",
                "text": "Gluconato de calcio al 10% 10 mL en bolo endovenoso directo"
            }
        ],
        "correcta": "A",
        "explicacion": "La opción A es la CORRECTA. En el algoritmo universal de Soporte Vital Cardiovascular Avanzado (ACLS) adoptado por el MINSAL para Paro Cardiorrespiratorio en ritmos desfibrilables (Fibrilación Ventricular / Taquicardia Ventricular sin pulso):\n1) Tras la 1ª descarga: RCP continua de 2 minutos;\n2) Tras la 2ª descarga: se administra el primer vasopresor (Adrenalina 1 mg EV, la cual se repite cada 3 a 5 minutos);\n3) Tras la 3ª descarga (ritmo desfibrilable refractario): está formalmente indicada la administración del fármaco antiarrítmico de primera elección. El antiarrítmico de referencia es la Amiodarona en bolo endovenoso rápido de 300 mg (diluida en 20-30 mL de suero fisiológico o glucosado al 5%), con una segunda dosis de 150 mg si la FV/TVsp persiste tras la siguiente descarga. La alternativa terapéutica equivalente normada por guías actuales es la Lidocaína (dosis inicial de 1.0 a 1.5 mg/kg EV).\n\nAnálisis de distractores:\n- Opción B es incorrecta: El uso rutinario de bicarbonato de sodio en la reanimación cardiopulmonar no ha demostrado beneficio y está desaconsejado; puede generar acidosis intracelular paradójica, hipernatremia e hipocalcemia. Solo se indica ante paro por hiperkalemia severa previa o sobredosis de antidepresivos tricíclicos.\n- Opción C es incorrecta: La adrenalina se administra cada 3 a 5 minutos (es decir, habitualmente ciclo de por medio). Habiéndose administrado tras la segunda descarga hace apenas dos minutos, adelantar una nueva dosis en este ciclo no corresponde y aumenta la vasoconstricción y el consumo miocárdico de oxígeno innecesariamente.\n- Opción D es incorrecta: El sulfato de magnesio está indicado exclusivamente cuando el ritmo de paro corresponde a Torsades de Pointes (taquicardia ventricular polimórfica en entorchamiento asociada a intervalo QT prolongado) o hipomagnesemia documentada; carece de utilidad en la FV idiopática o coronaria común.\n- Opción E es incorrecta: El gluconato de calcio no es un antiarrítmico de rutina para la fibrilación ventricular; se restringe a situaciones de hiperpotasemia extrema, hipocalcemia severa o sobredosis de bloqueadores del canal de calcio."
    },
    {
        "id": "B1-Q07",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "SCASEST: Angina Inestable e IAM sin Supradesnivel del ST",
        "perfilCode": "1.01.1.020, 1.01.2.001",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Patología GES #24 (Síndrome Coronario Agudo)"
        },
        "stem": "Hombre de 66 años, hipertenso, con antecedentes de tabaquismo activo y revascularización coronaria con stent hace 3 años, consulta en el servicio de urgencia por cuadro de 4 horas de evolución caracterizado por tres episodios de dolor opresivo retroesternal de reposo, de 20 minutos de duración cada uno, que no ceden completamente.\nAl examen físico: PA 135/85 mmHg, FC 82 lpm, FR 18 rpm, SatO2 96% ambiental, examen cardiopulmonar sin soplos ni signos de congestión pulmonar.\nEl electrocardiograma de 12 derivaciones en reposo muestra ritmo sinusal y un infradesnivel horizontal del segmento ST de 1.8 mm en las derivaciones V3, V4, V5 y V6, sin supradesnivel del ST en ninguna derivación. El primer set de laboratorio arroja Troponina I ultrasensible en 120 ng/L (límite superior normal < 14 ng/L) y Creatinina 1.1 mg/dL.\nAnte la confirmación diagnóstica de un Síndrome Coronario Agudo sin Supradesnivel del ST (IAMSEST), ¿cuál de las siguientes terapias o conductas se encuentra FORMALMENTE CONTRAINDICADA en este paciente?",
        "options": [
            {
                "id": "A",
                "text": "Doble antiagregación plaquetaria con Aspirina oral 250 mg más Ticagrelor 180 mg en dosis de carga"
            },
            {
                "id": "B",
                "text": "Anticoagulación parenteral con Enoxaparina 1 mg/kg cada 12 horas por vía subcutánea"
            },
            {
                "id": "C",
                "text": "Administración inmediata de trombolisis farmacológica con Tenecteplase o Alteplase endovenoso"
            },
            {
                "id": "D",
                "text": "Administración de Atorvastatina en dosis de alta potencia (80 mg por vía oral)"
            },
            {
                "id": "E",
                "text": "Programación de coronariografía invasiva con eventual angioplastía dentro de las primeras 24 horas de ingreso"
            }
        ],
        "correcta": "C",
        "explicacion": "La opción C es la CORRECTA (es la conducta FORMALMENTE CONTRAINDICADA). En el Síndrome Coronario Agudo sin Supradesnivel del Segmento ST (SCASEST, que engloba a la angina inestable y al infarto agudo al miocardio sin supradesnivel del ST), la fibrinólisis farmacológica está FORMALMENTE CONTRAINDICADA. Fisiopatológicamente, el SCASEST se origina por una obstrucción coronaria subtotal debida a un trombo blanco rico en plaquetas; los ensayos clínicos demostraron de forma categórica que el uso de trombolíticos en SCASEST no sólo no confiere beneficio en la apertura vascular, sino que incrementa significativamente la mortalidad global, el riesgo de infarto transmural secundario por activación trombogénica paradójica de la superficie plaquetaria y la incidencia de hemorragias mayores intracraneanas. La terapia fibrinolítica se reserva de manera exclusiva para el infarto con supradesnivel del ST (SCACEST) cuando el tiempo estimado para angioplastía primaria excede los 120 minutos.\n\nAnálisis de distractores (conductas indicadas y recomendadas):\n- Opción A es una conducta correcta y recomendada: La doble antiagregación plaquetaria (Aspirina 250-500 mg carga oral + Ticagrelor 180 mg carga, o Prasugrel/Clopidogrel) es mandatoria para reducir la reactivación isquémica coronaria.\n- Opción B es una conducta correcta y recomendada: La anticoagulación parenteral sistemática con HBPM (Enoxaparina 1 mg/kg cada 12h SC) o Fondaparinux disminuye la progresión a oclusión trombótica completa mientras se planifica el cateterismo.\n- Opción D es una conducta correcta y recomendada: La terapia con estatinas de alta potencia (Atorvastatina 80 mg/día) debe iniciarse precozmente por sus efectos pleiotrópicos de estabilización endotelial de la placa ateromatosa.\n- Opción E es una conducta correcta y recomendada: El paciente presenta un score TIMI de 4 puntos y elevación de biomarcadores con cambios dinámicos del ST, lo que clasifica el cuadro como de alto riesgo y define la indicación de una estrategia invasiva precoz mediante coronariografía antes de 24 horas."
    },
    {
        "id": "B1-Q08",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "Cuádruple Terapia GDMT en IC-FEr (Guía GES 2026)",
        "perfilCode": "1.01.1.006, 1.01.1.007",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Patología GES #24 (Insuficiencia Cardíaca - Garantía de Fármacos GDMT)"
        },
        "stem": "Hombre de 61 años con antecedentes de infarto agudo al miocardio hace 2 años y miocardiopatía dilatada con fracción de eyección reducida severa (FEVI 28%), consulta a control ambulatorio en el programa GES de Insuficiencia Cardíaca. Se encuentra en clase funcional II de la NYHA, estable, realizando sus actividades cotidianas sin disnea de reposo ni ortopnea.\nSu terapia farmacológica actual consiste en: Enalapril 10 mg cada 12 horas, Carvedilol 25 mg cada 12 horas, Espironolactona 25 mg al día y Furosemida 20 mg al día.\nAl examen físico: PA 116/74 mmHg, FC 66 lpm, afebril, examen pulmonar con murmullo pulmonar limpio bilateral sin crépitos, yugulares no ingurgitadas, sin edemas periféricos (completamente euvolémico).\nLaboratorio: Creatinina 1.0 mg/dL (VFG 78 mL/min/1.73m²), Potasio 4.5 mEq/L, Sodio 139 mEq/L.\nEl médico del policlínico decide optimizar su esquema a la cuádruple terapia guiada por guías (GDMT), sustituyendo el IECA por un inhibidor del receptor de angiotensina-neprilisina (ARNI: Sacubitrilo/Valsartán) e incorporando un iSGLT2 (Dapagliflozina).\nRespecto a la sustitución de Enalapril por Sacubitrilo/Valsartán, ¿cuál es la indicación farmacológica crítica y de seguridad obligatoria que debe impartirse al paciente para prevenir una complicación potencialmente fatal?",
        "options": [
            {
                "id": "A",
                "text": "Iniciar Sacubitrilo/Valsartán de manera simultánea con Enalapril durante los primeros 3 días para garantizar un bloqueo neurohormonal ininterrumpido"
            },
            {
                "id": "B",
                "text": "Suspender el Enalapril y esperar un período de lavado de al menos 36 horas antes de tomar la primera dosis de Sacubitrilo/Valsartán, para evitar el riesgo de angioedema severo"
            },
            {
                "id": "C",
                "text": "Suspender el Carvedilol y la Espironolactona de forma definitiva antes de realizar el cambio de IECA a ARNI"
            },
            {
                "id": "D",
                "text": "Cuadruplicar la dosis de Furosemida a 80 mg al día durante la primera semana para contrarrestar la sobrecarga hídrica de rebote"
            },
            {
                "id": "E",
                "text": "Indicar la toma de Sacubitrilo/Valsartán exclusivamente por infusión endovenosa durante una hospitalización en cuidados intermedios"
            }
        ],
        "correcta": "B",
        "explicacion": "La opción B es la CORRECTA. La transición desde un inhibidor de la enzima convertidora de angiotensina (IECA, como Enalapril) hacia un inhibidor del receptor de angiotensina-neprilisina (ARNI: Sacubitrilo/Valsartán) exige de forma mandatoria e ineludible un período de lavado libre de fármaco de al menos 36 horas tras la última toma de Enalapril. Tanto la ECA como la neprilisina participan activamente en la degradación fisiológica de la bradicinina. La inhibición simultánea o superpuesta de ambas enzimas conduce a una acumulación sinérgica masiva de bradicinina tisular, lo que precipita un cuadro de angioedema laríngeo u orofaríngeo grave, con riesgo inminente de obstrucción de la vía aérea superior y asfixia fatal. Esta es una advertencia de seguridad farmacológica fundamental evaluada sistemáticamente en el EUNACOM. Cabe destacar que esta regla de las 36 horas NO aplica cuando se cambia desde un ARA2 (como Losartán) a Sacubitrilo/Valsartán, debido a que los ARA2 no inhiben la degradación de bradicinina.\n\nAnálisis de distractores:\n- Opción A es incorrecta: La administración concomitante o superpuesta de IECA y ARNI maximiza el riesgo de angioedema de la vía aérea potencialmente mortal; está formal y categóricamente contraindicada.\n- Opción C es incorrecta: Carvedilol (betabloqueador) y Espironolactona (ARM) son dos de los cuatro pilares fundamentales de la terapia médica óptima con impacto comprobado en sobrevida; suspenderlos privaría al paciente de beneficios pronósticos mayores.\n- Opción D es incorrecta: El paciente se encuentra euvolémico y compensado; cuadruplicar la dosis de diurético de asa provocaría hipovolemia, deterioro prerrenal de la función renal e hipotensión que impediría la titulación de la cuádruple terapia.\n- Opción E es incorrecta: Sacubitrilo/Valsartán se comercializa y administra exclusivamente por vía oral en dosis fija combinada (24/26 mg, 49/51 mg, 97/103 mg) en el contexto ambulatorio programado; no existe presentación parenteral endovenosa."
    },
    {
        "id": "B1-Q09",
        "specialtyKey": "cardiologia",
        "specialtyName": "Cardiología",
        "topicTitle": "Insuficiencia Aórtica & Estenosis Mitral Reumática",
        "perfilCode": "1.01.1.003, 1.01.1.004",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Derivar",
            "ges": "Patología GES #24"
        },
        "stem": "Mujer de 44 años, con antecedente remoto de fiebre reumática en la adolescencia, consulta en CESFAM por disnea de esfuerzos progresiva y palpitaciones irregulares rápidas de 2 semanas de evolución.\nAl examen físico: PA 115/70 mmHg, pulso completamente irregular y deficitario con frecuencia cardíaca de 114 lpm. A la auscultación cardíaca en el ápex (foco mitral) en decúbito lateral izquierdo (posición de Pachón), se percibe un primer ruido marcadamente brillante e intenso (R1 aumentado), seguido de un silencio sistólico sin soplos, un chasquido de apertura mitral precoz tras el segundo ruido y un retumbo diastólico de tono grave y áspero con componente presistólico ausente.\nEl electrocardiograma confirma Fibrilación Auricular con respuesta ventricular rápida. El ecocardiograma Doppler revela: estenosis mitral de etiología reumática de grado moderado a severo con Área Valvular Mitral de 1.2 cm², gradiente transmitral medio de 10 mmHg y dilatación severa de la aurícula izquierda (volumen indexado 58 mL/m²), sin trombos intracavitarios visibles.\n¿Cuál es el tratamiento antitrombótico oral de primera línea mandatorio para la prevención del accidente cerebrovascular embólico en esta paciente según las guías clínicas ministeriales e internacionales?",
        "options": [
            {
                "id": "A",
                "text": "Anticoagulantes orales directos inhibidores del factor Xa (Rivaroxabán 20 mg al día o Apixabán 5 mg cada 12 horas)"
            },
            {
                "id": "B",
                "text": "Doble terapia antiplaquetaria con Aspirina 100 mg más Clopidogrel 75 mg al día"
            },
            {
                "id": "C",
                "text": "Monoterapia con Ácido Acetilsalicílico 100 mg al día"
            },
            {
                "id": "D",
                "text": "Heparina de bajo peso molecular por vía subcutánea de por vida sin necesidad de terapia oral"
            },
            {
                "id": "E",
                "text": "Antagonistas de la vitamina K (Acenocumarol o Warfarina) con meta de INR entre 2.0 y 3.0"
            }
        ],
        "correcta": "E",
        "explicacion": "La opción E es la CORRECTA. La paciente presenta una Fibrilación Auricular (FA) en el contexto de una valvulopatía cardíaca mayor: Estenosis Mitral Reumática moderada a severa (definición canónica de 'Fibrilación Auricular Valvular'). En esta condición, el riesgo de estasis sanguíneo auricular izquierdo, formación de trombos en la orejuela y accidente cerebrovascular cardioembólico masivo es extraordinariamente alto (hasta 17 veces superior al de la población sin valvulopatía). El tratamiento de elección indiscutido y el estándar normado de por vida son los Antagonistas de la Vitamina K (AVK: Acenocumarol o Warfarina), monitorizados periódicamente para mantener un INR terapéutico objetivo entre 2.0 y 3.0. Crucialmente, los Anticoagulantes Orales Directos (DOACs como rivaroxabán, apixabán o dabigatrán) están FORMALMENTE CONTRAINDICADOS en la estenosis mitral reumática moderada-severa. En el estudio clínico aleatorizado INVICTUS, el uso de rivaroxabán en pacientes con estenosis mitral reumática y FA se asoció a una tasa significativamente mayor de eventos cardioembólicos y a una mayor mortalidad en comparación con los antagonistas de la vitamina K.\n\nAnálisis de distractores:\n- Opción A es incorrecta: Los DOACs demostraron ser inferiores a la warfarina en el ensayo clínico INVICTUS en estenosis mitral reumática, con un incremento neto de eventos trombóticos y letalidad, por lo que su indicación está formalmente contraindicada.\n- Opción B es incorrecta: La doble antiagregación con aspirina y clopidogrel es ineficaz para prevenir la formación de trombos endocavitarios por estasis en la aurícula izquierda y somete a la paciente a un riesgo hemorrágico sin beneficio tromboembólico real.\n- Opción C es incorrecta: La aspirina en monoterapia no reduce de forma significativa el riesgo de ACV en FA valvular; su indicación en lugar de la anticoagulación oral formal constituye mala praxis médica.\n- Opción D es incorrecta: Las heparinas parenterales se usan solo transitoriamente durante el inicio o puente terapéutico del acenocumarol; no son un esquema ambulatorio factible de por vida."
    },
    {
        "id": "B1-Q10",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Sepsis y Shock Séptico (Consenso Sepsis-3 & Paquete 1ª Hora)",
        "perfilCode": "1.04.2.007",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Inicial",
            "seg": "Derivar",
            "ges": "Garantía Explícita en Salud (GES): Manejo Integral del Paciente Crítico en Cuidados Intensivos"
        },
        "stem": "Mujer de 67 años con antecedentes de diabetes mellitus tipo 2 e infección urinaria a repetición, es traída al Servicio de Urgencia por su familia tras 24 horas de fiebre alta con calofríos, desorientación y postración.\nAl ingreso: vigil pero confusa y soporosa (Escala de Coma de Glasgow 13), piel sudorosa, pálida y con llene capilar prolongado de 4 segundos. Signos vitales: PA 78/44 mmHg (Presión Arterial Media [PAM] 55 mmHg), FC 128 lpm, FR 28 rpm, SatO2 93% ambiental, Temperatura axilar 39.1 °C. El sedimento de orina revela leucocituria masiva, bacterias abundantes y piocitos agrupados.\nEl equipo médico aplica de inmediato el 'Paquete de la Primera Hora': se toman 2 pares de hemocultivos más urocultivo, se inicia Ceftriaxona 2 g EV y se administran 2.100 mL de cristaloides isotónicos balanceados (30 mL/kg de peso estimado) en infusión rápida durante los primeros 60 minutos. Al término de la carga de volumen, la paciente persiste con PA 82/46 mmHg (PAM 58 mmHg) y el informe de lactato sérico arroja 3.8 mmol/L.\nSegún los criterios del Consenso Internacional Sepsis-3 y la campaña 'Sobreviviendo a la Sepsis', ¿cuál es la condición hemodinámica confirmada de la paciente y el fármaco vasoactivo de primera línea que debe iniciarse de inmediato?",
        "options": [
            {
                "id": "A",
                "text": "Shock hipovolémico no respondedor; transfundir de inmediato 2 unidades de glóbulos rojos concentrados"
            },
            {
                "id": "B",
                "text": "Sepsis sin shock; continuar la reanimación hídrica con 2.000 mL adicionales de suero fisiológico antes de usar fármacos"
            },
            {
                "id": "C",
                "text": "Shock séptico; iniciar infusión continua de Dopamina a 15 µg/kg/min por vía venosa periférica"
            },
            {
                "id": "D",
                "text": "Shock séptico refractario a volumen; iniciar infusión continua de Noradrenalina titulada para lograr meta de PAM ≥ 65 mmHg"
            },
            {
                "id": "E",
                "text": "Falla de bomba cardiogénica primaria; suspender líquidos e iniciar infusión de Furosemida 40 mg EV"
            }
        ],
        "correcta": "D",
        "explicacion": "La opción D es la CORRECTA. La paciente cumple con exactitud los criterios del Consenso Sepsis-3 para definir Shock Séptico: presencia de infección documentada con disfunción orgánica aguda que cursa con hipotensión arterial refractaria a la reposición adecuada de fluidos (30 mL/kg de cristaloides) que requiere soporte con fármacos vasopresores para mantener una Presión Arterial Media (PAM) ≥ 65 mmHg Y una concentración plasmática de lactato sérico > 2.0 mmol/L (en este caso 3.8 mmol/L). En shock séptico, el fármaco vasoactivo de primera línea absoluto es la Noradrenalina en infusión continua (con titulación orientada a mantener PAM ≥ 65 mmHg). La Noradrenalina posee un potente efecto agonista alfa-1 adrenérgico que revierte la vasoplejía periférica y un efecto inotrópico beta-1 moderado, garantizando la restauración rápida de la presión de perfusión de órganos nobles.\n\nAnálisis de distractores:\n- Opción A es incorrecta: No hay anemia severa ni pérdida hemática aguda; el umbral transfusional normado en sepsis es hemoglobina < 7.0 g/dL en ausencia de cardiopatía isquémica aguda.\n- Opción B es incorrecta: El aporte ciego de volumen por encima de los 30 mL/kg normados cuando el paciente ya no es respondedor retrasa el inicio del vasopresor y precipita edema pulmonar agudo, falla de ventrículo derecho y empeoramiento de la mortalidad por balance hídrico acumulado positivo.\n- Opción C es incorrecta: La Dopamina ya no es de primera línea en shock séptico; múltiples metaanálisis y ensayos clínicos demostraron que la dopamina se asocia a un riesgo significativamente más alto de arritmias cardíacas letales y a mayor mortalidad intrahospitalaria comparada con noradrenalina.\n- Opción E es incorrecta: La paciente sufre un shock vasodilatado de origen séptico urinario; administrar diuréticos de asa reduciría aún más el volumen circulante efectivo provocando colapso hemodinámico total y paro en asistolia."
    },
    {
        "id": "B1-Q11",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Manejo de Contactos en Enfermedades Transmisibles y Accidentes Cortopunzantes",
        "perfilCode": "1.04.3.001, 1.04.3.009, 1.04.3.010",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Garantía Explícita en Salud (GES): Prevención de la Transmisión Vertical de VIH y Sífilis · Programa Nacional TBC MINSAL"
        },
        "stem": "Mujer de 28 años, con embarazo de 24 semanas de gestación por ecografía del primer trimestre, sin patologías crónicas conocidas, consulta en el servicio de urgencia muy angustiada. Refiere que su hijo de 4 años fue hospitalizado de urgencia hace 8 horas en el hospital base con confirmación microbiológica por tinción de Gram y cultivo de LCR de Meningitis Aguda por Neisseria meningitidis (meningococo serogrupo W). La paciente comparte el mismo dormitorio y ha tenido contacto estrecho y continuo con el menor en los últimos 5 días.\nAl examen físico materno: vigil, afebril (36.6 °C), PA 115/72 mmHg, FC 78 lpm, examen neurológico estrictamente normal sin signos meníngeos. Latidos cardiofetales presentes y normales.\nDe acuerdo con la Norma Técnica Nacional de Quimioprofilaxis y Control de Contactos del Ministerio de Salud (MINSAL), ¿cuál es la conducta preventiva y el esquema farmacológico de elección para esta paciente gestante?",
        "options": [
            {
                "id": "A",
                "text": "Administrar Ceftriaxona 250 mg por vía intramuscular en dosis única"
            },
            {
                "id": "B",
                "text": "Indicar Rifampicina oral 600 mg cada 12 horas durante 2 días seguidos"
            },
            {
                "id": "C",
                "text": "Administrar Ciprofloxacino oral 500 mg en dosis única"
            },
            {
                "id": "D",
                "text": "No indicar profilaxis antibiótica y mantener observación clínica ambulatoria para no afectar al feto"
            },
            {
                "id": "E",
                "text": "Indicar hospitalización inmediata para infusión de Penicilina G sódica endovenosa por 7 días"
            }
        ],
        "correcta": "A",
        "explicacion": "La opción A es la CORRECTA. Los contactos estrechos de un caso confirmado de enfermedad meningocócica invasora tienen un riesgo cientos de veces superior al basal de desarrollar la infección en los días subsiguientes debido a la colonización nasofaríngea. La quimioprofilaxis tiene como objetivo erradicar la portación del meningococo en la nasofaringe y debe administrarse lo más precozmente posible (idealmente en las primeras 24 horas tras el diagnóstico del caso índice).\nEn adultos no embarazados, las opciones estándar son Rifampicina (600 mg c/12h por 2 días) o Ciprofloxacino (500 mg dosis única oral). No obstante, en la MUJER EMBARAZADA tanto la Rifampicina como las Fluoroquinolonas (Ciprofloxacino) están FORMALMENTE CONTRAINDICADAS por sus efectos teratogénicos y toxicidad en el cartílago articular fetal, respectivamente. Por consiguiente, la norma ministerial chilena y las directrices internacionales establecen que el antibiótico de primera elección indiscutido en la gestante es la Ceftriaxona en dosis única de 250 mg intramuscular, la cual logra una tasa de erradicación nasofaríngea del 97 al 100% con un perfil de seguridad materno-fetal intachable.\n\nAnálisis de distractores:\n- Opción B es incorrecta: La Rifampicina atraviesa la placenta libremente y está asociada a malformaciones fetales y riesgo de hemorragia neonatal por déficit de factores de coagulación dependientes de vitamina K; está contraindicada en la gestación.\n- Opción C es incorrecta: El Ciprofloxacino (y todas las quinolonas) se encuentra contraindicado en el embarazo debido a la artropatía por daño cartilaginoso observada en animales de experimentación.\n- Opción D es incorrecta: Omitir la profilaxis en un contacto domiciliario íntimo expone a la madre y al feto a una infección meningocócica invasora con una letalidad del 15 al 30% y secuelas neurológicas o pérdida gestacional severa.\n- Opción E es incorrecta: La Penicilina G sódica cura la meningitis meningocócica pero NO erradica de forma eficaz la portación nasofaríngea de Neisseria meningitidis, por lo que no sirve como quimioprofilaxis de contactos."
    },
    {
        "id": "B1-Q12",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Infección por VIH: Diagnóstico, Etapificación y Terapia Antirretroviral (TARV GES)",
        "perfilCode": "1.04.1.014",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Garantía Explícita en Salud (GES N° 18): Síndrome de Inmunodeficiencia Adquirida (VIH/SIDA)"
        },
        "stem": "Hombre de 27 años, sin antecedentes mórbidos conocidos, consulta a control médico en el Policlínico de Infectología derivado desde su CESFAM. Hace 3 semanas se realizó un test de tamizaje serológico para VIH en el contexto del Examen de Medicina Preventiva del Adulto (EMPA), el cual resultó reactivo, habiéndose enviado la muestra de confirmación al Instituto de Salud Pública (ISP).\nEl paciente acude hoy a retirar su resultado oficial, el cual confirma formalmente: 'Infección por Virus de la Inmunodeficiencia Humana tipo 1 (VIH-1) demostrada mediante ensayo confirmatorio ISP'.\nAl examen físico se encuentra totalmente asintomático, peso 72 kg, examen cardiopulmonar, ganglionar y cutáneo rigurosamente normales.\nLos exámenes basales de ingreso registran: Recuento de Linfocitos CD4 de 580 células/mm³, Carga Viral de VIH-1 de 42.000 copias/mL, función renal y pruebas hepáticas normales, antígeno HBsAg negativo y serología para Sífilis (VDRL) no reactiva.\nDe acuerdo con la Guía Clínica Ministerial de la Garantía Explícita en Salud (GES N° 18) y la normativa sanitaria chilena vigente, ¿cuál es la conducta terapéutica y el esquema farmacológico de primera línea que debe indicarse de inmediato?",
        "options": [
            {
                "id": "A",
                "text": "Diferir el inicio de fármacos antirretrovirales y citar a nuevo control de CD4 en 6 meses, dado que su recuento es mayor a 500 células/mm³"
            },
            {
                "id": "B",
                "text": "Iniciar de inmediato profilaxis primaria con Cotrimoxazol oral diario y diferir la triterapia hasta que la carga viral supere las 100.000 copias/mL"
            },
            {
                "id": "C",
                "text": "Iniciar Terapia Antirretroviral (TARV) de inmediato con la combinación en dosis fija diaria de Tenofovir disoproxilo + Lamivudina + Dolutegravir (TDF/3TC/DTG)"
            },
            {
                "id": "D",
                "text": "Iniciar monoterapia oral con Zidovudina 300 mg cada 12 horas para evitar fenómenos de resistencia viral precoz"
            },
            {
                "id": "E",
                "text": "Indicar esquema basado en Efavirenz + Emtricitabina + Lopinavir potenciado con Ritonavir"
            }
        ],
        "correcta": "C",
        "explicacion": "La opción C es la CORRECTA. En Chile, según la Guía Clínica GES N° 18 del MINSAL, la política pública y el consenso científico internacional consagran el \"Tratamiento Antirretroviral Universal Inmediato\": TODO paciente con diagnóstico de infección por VIH confirmado por el Instituto de Salud Pública (ISP) debe iniciar Terapia Antirretroviral (TARV) a la brevedad posible, con independencia estricta de su recuento de linfocitos CD4 o de su nivel de carga viral plasmática. Los ensayos clínicos START y TEMPRANO demostraron de forma incontrovertible que el inicio precoz reduce la mortalidad global, previene el desarrollo de enfermedades oportunistas definitorias de SIDA, frena el daño inflamatorio crónico sistémico endotelial y detiene por completo la transmisión sexual (\"Indetectable = Intransmisible\").\nEl esquema ministerial preferente de primera línea en Chile para adultos no embarazados es la coformulación en comprimido único al día de dos inhibidores de la transcriptasa reversa nucleósidos asociados a un inhibidor de la transferencia de hebras de la integrasa (INSTI): Tenofovir disoproxil fumarato + Lamivudina + Dolutegravir (TDF/3TC/DTG). Este esquema destaca por su altísima tasa de supresión virológica rápida, excelente tolerancia y muy alta barrera genética a la resistencia.\n\nAnálisis de distractores:\n- Opción A es incorrecta: La antigua práctica de retrasar el tratamiento hasta que los CD4 bajaran de 500 o 350 células/mm³ es completamente obsoleta; esperar perpetúa el deterioro inmune y aumenta la letalidad a largo plazo.\n- Opción B es incorrecta: La profilaxis primaria con Cotrimoxazol solo se prescribe cuando los CD4 son inferiores a 200 células/mm³ (o en estadio clínico B/C con muguet oral); con 580 CD4/mm³ no tiene ninguna indicación.\n- Opción D es incorrecta: La monoterapia en VIH está formalmente proscrita por generar resistencia viral masiva en pocas semanas; además, la Zidovudina induce toxicidad hematológica severa (anemia macrocítica y neutropenia).\n- Opción E es incorrecta: El Efavirenz fue retirado de la primera línea debido a su alta tasa de eventos neuropsiquiátricos (insomnio, depresión, ideación suicida) y menor barrera genética que Dolutegravir; además, asociar Efavirenz con Lopinavir/r genera interacciones metabólicas complejas e innecesarias."
    },
    {
        "id": "B1-Q13",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Síndrome Pulmonar por Hantavirus (SCPH)",
        "perfilCode": "1.04.2.008",
        "legalLevel": {
            "dx": "Sospecha",
            "tx": "Inicial",
            "seg": "Derivar",
            "ges": "Enfermedad de Notificación Obligatoria Inmediata (ENO) · Guía Clínica MINSAL Manejo Hantavirus"
        },
        "stem": "Hombre de 34 años, operario forestal y desbrozador en una zona rural precordillera de la Región del Biobío, consulta en el servicio de urgencia de un hospital de baja complejidad por cuadro de 4 días de fiebre alta hasta 39.5 °C, cefalea holocraneana y mialgias intensas y discapacitantes que comprometen de forma predominante la región lumbar y ambos muslos. En las últimas 12 horas se agrega tos seca pertinaz, opresión torácica y disnea de moderados esfuerzos. Refiere haber limpiado hace 18 días un cobertizo de faenas madereras deshabitado y cerrado durante todo el invierno.\nAl examen físico: T° 38.6 °C, PA 92/58 mmHg, FC 118 lpm, FR 26 rpm, SatO2 88% respirando aire ambiental. A la auscultación pulmonar se pesquisan crépitos húmedos bilaterales difusos de predominio en bases.\nRadiografía de tórax portátil: Infiltrados intersticiales y alveolares bilaterales perihiliares difusos, con borramiento de senos costofrénicos y silueta cardíaca de tamaño rigurosamente normal.\nHemograma urgente: Hematocrito 53% (marcada hemoconcentración), Leucocitosis de 19.800/mm³ con 16% de linfocitos atípicos de gran tamaño con citoplasma basófilo (inmunoblastos), y recuento de Plaquetas de 38.000/mm³.\nAnte la alta sospecha clínica, epidemiológica y de laboratorio de Síndrome Cardiopulmonar por Hantavirus (SCPH), ¿cuál de las siguientes medidas representa la conducta médica inmediata más adecuada y un principio terapéutico CRÍTICO normado por el MINSAL?",
        "options": [
            {
                "id": "A",
                "text": "Administrar de inmediato un bolo rápido de cristaloides a 30 mL/kg (2.500 mL en 1 hora) para corregir la hipotensión arterial y la hemoconcentración"
            },
            {
                "id": "B",
                "text": "Realizar notificación epidemiológica inmediata (ENO), iniciar oxigenoterapia estricta con manejo hidroelectrolítico restrictivo (evitando la sobrecarga hídrica) y coordinar traslado urgente en ambulancia medicalizada a un centro terciario con capacidad de soporte con ECMO"
            },
            {
                "id": "C",
                "text": "Iniciar tratamiento empírico con Ceftriaxona 2 g EV más Claritromicina 500 mg EV e ingresar a sala de medicina general básica para control de diuresis"
            },
            {
                "id": "D",
                "text": "Indicar infusión endovenosa de Ribavirina a dosis altas durante 10 días como terapia antiviral curativa de primera línea"
            },
            {
                "id": "E",
                "text": "Tomar muestra de serología para IgM de Hantavirus y esperar el informe oficial del ISP antes de autorizar la derivación del paciente"
            }
        ],
        "correcta": "B",
        "explicacion": "La opción B es la CORRECTA. El paciente presenta la presentación prototípica del Síndrome Cardiopulmonar por Hantavirus (SCPH) causado por el virus Andes en Chile: nexo epidemiológico rural (inhalación de bioaerosoles desecados con excretas de Oligoryzomys longicaudatus en espacios cerrados), pródromo febril con mialgias axiales intensas en muslos y dorso, y la 'tríada de sospecha en el hemograma': 1) Trombocitopenia marcada (< 50.000-100.000/mm³); 2) Hemoconcentración (Hematocrito > 45-50%); y 3) Presencia de inmunoblastos o linfocitos atípicos circulantes (> 10%).\nLa Guía Clínica del MINSAL define tres principios de manejo inaplazables:\n1) Notificación inmediata como Enfermedad de Notificación Obligatoria (ENO);\n2) MANEJO RESTRICTIVO DE FLUIDOS: la fisiopatología es un edema pulmonar agudo no cardiogénico por fuga endotelial masiva mediada por citoquinas. La sobrecarga con cristaloides precipita la asfixia pulmonar irreversible; si hay hipotensión arterial se debe recurrir de forma precoz a vasopresores (Noradrenalina);\n3) Traslado crítico precoz: coordinar el transporte asistido con médico reanimador hacia un centro de alta complejidad que cuente con disponibilidad de Oxigenación por Membrana Extracorpórea (ECMO), terapia de soporte cardiopulmonar que disminuye drásticamente la letalidad de la enfermedad.\n\nAnálisis de distractores:\n- Opción A es incorrecta: La administración agresiva de volumen (como los 30 mL/kg típicos de sepsis bacteriana) está FORMALMENTE PROSCRITA en Hantavirus por las guías del MINSAL, dado que inunda los alvéolos y causa muerte por asfixia masiva.\n- Opción C es incorrecta: Catalogarlo como neumonía bacteriana común y hospitalizarlo en sala básica sin monitorización intensiva conlleva una muerte inminente por falla cardiopulmonar catastrófica en las horas subsiguientes.\n- Opción D es incorrecta: La Ribavirina fue evaluada en múltiples ensayos clínicos y demostró no tener eficacia clínica en la fase cardiopulmonar del SCPH; no está aprobada ni indicada.\n- Opción E es incorrecta: El SCPH es una emergencia médica fulminante. El ISP demora días en confirmar la serología. La conducta clínica y el traslado hacia ECMO se basan en la sospecha clínico-epidemiológica y los parámetros del hemograma, sin esperar nunca la serología confirmatoria."
    },
    {
        "id": "B1-Q14",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Infecciones de Piel Comunitarias: Celulitis, Erisipela y Foliculitis",
        "perfilCode": "1.04.1.006",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Garantías Explícitas en Salud: Manejo Ambulatorio de Infecciones de Piel en APS"
        },
        "stem": "Hombre de 54 años, con antecedentes de diabetes mellitus tipo 2 y obesidad grado II, consulta en el box de urgencias de su CESFAM por dolor, enrojecimiento y aumento de volumen progresivo en la pierna izquierda de 3 días de evolución.\nAl examen físico: afebril (37.2 °C), PA 130/80 mmHg, FC 78 lpm. En la cara posterior y lateral de la pierna izquierda se observa un área eritematosa extensa, mal delimitada, con bordes difusos y planos que se mezclan gradualmente con la piel sana vecina, de consistencia empastada, caliente al tacto y moderadamente dolorosa a la compresión superficial. No se aprecian colecciones purulentas fluctuantes ni crepitación cutánea.\nAl examinar detenidamente la extremidad en busca de la puerta de entrada, el médico constata en el cuarto espacio interdigital del pie izquierdo marcada maceración blanquecina, descamación y una fisura húmeda muy pruriginosa correspondiente a tiña pedis interdigital (pie de atleta).\n¿Cuál es el diagnóstico clínico más preciso, el microorganismo causal más frecuente y la conducta médica integral ambulatoria más adecuada?",
        "options": [
            {
                "id": "A",
                "text": "Erisipela clásica por Streptococcus pyogenes; hospitalizar de urgencia para infusión de Vancomicina endovenosa y debridamiento quirúrgico"
            },
            {
                "id": "B",
                "text": "Fascitis necrotizante tipo I; solicitar resonancia magnética urgente y exploración quirúrgica inmediata de la fascia profunda"
            },
            {
                "id": "C",
                "text": "Tromboflebitis superficial no infecciosa; indicar reposo absoluto, Heparina subcutánea y vendaje compresivo elástico"
            },
            {
                "id": "D",
                "text": "Dermatitis de contacto alérgica; suspender el uso de calzado sintético e indicar Clobetasol en crema tópica al 0.05%"
            },
            {
                "id": "E",
                "text": "Celulitis bacteriana comunitaria secundaria a puerta de entrada por tinea pedis; delimitar con lápiz los bordes, indicar Cefadroxilo oral 500 mg cada 12 horas por 7 a 10 días y tratar la micosis interdigital con antimicótico tópico"
            }
        ],
        "correcta": "E",
        "explicacion": "La opción E es la CORRECTA. El compromiso del tejido celular subcutáneo profundo caracterizado por eritema, calor local, edema y bordes MAL DELIMITADOS Y PLANOS (a diferencia de la erisipela, que compromete la dermis superficial y presenta bordes nítidos y sobreelevados) define una Celulitis bacteriana no complicada. Los agentes causales principales son Streptococcus pyogenes y Staphylococcus aureus meticilino-sensible (SAMS). En más del 70% de las celulitis de extremidades inferiores existe una puerta de entrada micótica (tinea pedis o intertrigo interdigital) que permite la inoculación de la flora bacteriana cutánea.\nLa conducta integral en APS incluye:\n1) Delimitar los márgenes del eritema con lápiz dermográfico indeleble para monitorizar objetivamente la progresión o resolución;\n2) Tratamiento antibiótico oral de primera línea con Cefadroxilo 500 mg cada 12 horas (o Cefalexina o Flucloxacilina) durante 7 a 10 días;\n3) Tratamiento simultáneo de la puerta de entrada con antimicótico tópico (Terbinafina al 1% o Clotrimazol) para evitar la recurrencia;\n4) Reposo con elevación de la extremidad.\n\nAnálisis de distractores:\n- Opción A es incorrecta: La erisipela presenta bordes nítidos, elevados y bien demarcados, suele iniciar con fiebre alta y calofríos súbitos, y no requiere hospitalización ni vancomicina salvo compromiso sistémico severo o mala respuesta.\n- Opción B es incorrecta: La fascitis necrotizante es una infección rápidamente progresiva con dolor desproporcionado, signos de toxicidad sistémica grave, bulas hemorrágicas, anestesia y crepitación tisular por gas, hallazgos ausentes en el paciente.\n- Opción C es incorrecta: La tromboflebitis superficial se palpa como un cordón venoso indurado y doloroso siguiendo el trayecto anatómico de una vena superficial, no como un eritema cutáneo difuso de pierna.\n- Opción D es incorrecta: Aplicar corticoides tópicos potentes (Clobetasol) sobre una celulitis bacteriana suprime la respuesta inmune local, favoreciendo la diseminación tisular bacteriana, bacteriemia y sepsis."
    },
    {
        "id": "B1-Q15",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Meningitis Aguda Bacteriana y Viral",
        "perfilCode": "1.04.2.006",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Inicial",
            "seg": "Derivar",
            "ges": "Garantía Explícita en Salud (GES): Infecciones del Sistema Nervioso Central en Adultos y Pediatría"
        },
        "stem": "Hombre de 69 años, con antecedentes de diabetes mellitus tipo 2 mal controlada y consumo crónico de alcohol, es traído al servicio de urgencia por su esposa tras 24 horas de fiebre alta, vómitos explosivos, cefalea intensa y desorientación progresiva.\nAl examen físico: somnoliento, desorientado en tiempo y espacio (Escala de Coma de Glasgow 13), sin déficit motor focal ni compromiso de pares craneales, fondo de ojo sin edema de papila. Temperatura axilar 39.2 °C, PA 138/85 mmHg, FC 106 lpm, FR 22 rpm. Presenta rigidez de nuca marcada y signos de Brudzinski y Kernig francamente positivos.\nSe realiza de inmediato una punción lumbar que obtiene líquido cefalorraquídeo (LCR) de aspecto francamente turbio y purulento a una presión de apertura de 32 cm H2O. El informe urgente del citoquímico revela: 3.800 leucocitos/mm³ con 91% de polimorfonucleares neutrófilos, Glucosa en LCR de 14 mg/dL (con glicemia sérica concomitante de 135 mg/dL; ratio LCR/suero de 0.10) y Proteínas totales en LCR de 290 mg/dL.\nAnte la confirmación de una Meningitis Bacteriana Aguda adquirida en la comunidad en un adulto mayor con factores de riesgo, ¿cuál es el esquema antimicrobiano empírico endovenoso y la terapia adyuvante obligatoria que debe iniciarse de inmediato según las guías clínicas ministeriales?",
        "options": [
            {
                "id": "A",
                "text": "Ceftriaxona 2 g cada 24 h en monoterapia endovenosa sin adición de otros fármacos"
            },
            {
                "id": "B",
                "text": "Ciprofloxacino 400 mg cada 12 h + Metronidazol 500 mg cada 8 h endovenoso"
            },
            {
                "id": "C",
                "text": "Aciclovir 10 mg/kg cada 8 h endovenoso en monoterapia"
            },
            {
                "id": "D",
                "text": "Ceftriaxona 2 g cada 12 h + Vancomicina 15-20 mg/kg cada 12 h + Ampicilina 2 g cada 4 h endovenosa, asociada a Dexametasona 10 mg endovenosa administrada antes o junto con la primera dosis de antibiótico"
            },
            {
                "id": "E",
                "text": "Penicilina G sódica 4 millones de unidades cada 4 horas en monoterapia sin corticoides"
            }
        ],
        "correcta": "D",
        "explicacion": "La opción D es la CORRECTA. El citoquímico del LCR es diagnóstico definitivo de Meningitis Bacteriana Aguda: pleocitosis marcada con franco predominio polimorfonuclear (> 80%), consumo masivo de glucosa (ratio LCR/suero < 0.40) e hiperproteinorraquia notable (> 100-200 mg/dL).\nEl régimen antimicrobiano empírico de elección debe cubrir los patógenos más prevalentes:\n1) Ceftriaxona 2 g cada 12 h EV + Vancomicina 15-20 mg/kg cada 12 h EV (para cubrir Streptococcus pneumoniae resistente a penicilina y Neisseria meningitidis);\n2) AMPICILINA 2 g cada 4 h EV: adición OBLIGATORIA en todo paciente mayor de 50 años, alcohólico, inmunodeprimido o embarazadas, para cubrir Listeria monocytogenes. Este bacilo Gram positivo intracelular posee una resistencia natural intrínseca absoluta a todas las cefalosporinas; omitir la ampicilina se asocia a una letalidad superior al 30%;\n3) DEXAMETASONA 10 mg EV cada 6 h: debe administrarse antes o inmediatamente junto con la primera dosis de antibióticos para atenuar la liberación masiva de citoquinas inflamatorias por lisis bacteriana, reduciendo la mortalidad global, el edema cerebral y la pérdida auditiva (hipoacusia neurosensorial).\n\nAnálisis de distractores:\n- Opción A es incorrecta: La monoterapia con ceftriaxona deja desprotegido al paciente frente a Listeria monocytogenes y no asegura cobertura adecuada frente a cepas de neumococo con susceptibilidad intermedia/resistente a cefalosporinas; además omite el corticoide.\n- Opción B es incorrecta: Quinolonas y metronidazol no son el esquema de elección para meningitis bacteriana comunitaria típica; el metronidazol cubre anaerobios en abscesos cerebrales, no meningitis purulenta.\n- Opción C es incorrecta: El aciclovir se utiliza en encefalitis por herpes simple (VHS), la cual cursa con citoquímico linfocítico mononuclear y glucosa normal en LCR, perfil incompatible con los hallazgos purulentos del caso.\n- Opción E es incorrecta: La penicilina en monoterapia no cubre neumococos resistentes ni Listeria de manera óptima y carece del beneficio neuroprotector comprobado de la dexametasona."
    },
    {
        "id": "B1-Q16",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Rabia y Tétanos: Profilaxis de Heridas y Manejo Clínico",
        "perfilCode": "1.04.2.009, 1.04.3.002, 1.04.3.008, 1.04.3.012",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Inicial",
            "seg": "Derivar",
            "ges": "Garantía Explícita en Salud (GES): Prevención y Profilaxis Post-Exposición Rabia y Tétanos"
        },
        "stem": "Hombre de 42 años, trabajador de la construcción, acude a la urgencia de un SAR tras sufrir un accidente laboral hace 3 horas. Mientras removía escombros y tierra húmeda mezclada con desechos orgánicos en un terreno baldío, se clavó profundamente en la palma de la mano derecha una varilla de fierro oxidada y deshilachada.\nAl examen físico: presenta una herida lacerada y punzante de 2.5 cm de profundidad en eminencia tenar derecha, con bordes desvitalizados, restos visibles de tierra negra incrustada y exudado serohemático. No tiene déficit neurológico motor distal.\nAl consultar exhaustivamente por su historial de inmunizaciones, el paciente refiere no tener controles médicos desde su infancia, no contar con carné de vacunas y tener la certeza de no haber recibido ninguna dosis de vacuna ni refuerzos contra el tétanos en su vida adulta.\nDe acuerdo con la Guía Técnica Ministerial de Manejo y Profilaxis del Tétanos del Ministerio de Salud de Chile, ¿cuál es la conducta preventiva farmacológica que debe indicarse de forma perentoria tras el aseo quirúrgico y desinfección de la herida?",
        "options": [
            {
                "id": "A",
                "text": "Administrar exclusivamente un refuerzo de Vacuna dT, omitiendo la inmunoglobulina para no interferir con la respuesta de anticuerpos activos"
            },
            {
                "id": "B",
                "text": "Administrar de inmediato la primera dosis de Vacuna con toxoide diftérico-tetánico (dT) MÁS Inmunoglobulina Humana Antitetánica (IGH-T 250 UI) por vía intramuscular en sitios anatómicos separados con jeringas distintas"
            },
            {
                "id": "C",
                "text": "Administrar exclusivamente Inmunoglobulina Humana Antitetánica (IGH-T 250 UI) sin indicar vacuna, ya que el paciente es adulto"
            },
            {
                "id": "D",
                "text": "Indicar únicamente profilaxis antibiótica oral con Ciprofloxacino por 10 días, sin requerir inmunobiológicos"
            },
            {
                "id": "E",
                "text": "Tranquilizar al paciente e indicar que la herida solo requiere curaciones locales diarias con solución salina"
            }
        ],
        "correcta": "B",
        "explicacion": "La opción B es la CORRECTA. El paciente presenta una \"herida sucia o de alto riesgo tetanígeno\" (punzante profunda > 1 cm, con tejido desvitalizado y contaminada con tierra y materia orgánica, condiciones anaeróbicas ideales para la proliferación de esporas de Clostridium tetani).\nEn pacientes con antecedente de vacunación incompleta, desconocida o con menos de 3 dosis en su vida, la norma técnica ministerial del MINSAL exige la combinación simultánea de:\n1) Inmunización pasiva con Inmunoglobulina Humana Antitetánica (IGH-T, 250 UI IM): provee anticuerpos neutralizantes circulantes de forma inmediata para inactivar la tetanospasmina antes de su fijación irreversible a las interneuronas de la médula espinal;\n2) Inmunización activa con Vacuna dT (toxoide tetánico-diftérico del adulto, 0.5 mL IM): inicia la producción endógena de anticuerpos (debiendo completarse el esquema con dosis a los 30 días y a los 6 meses).\nRegla técnica de aplicación: Ambos preparados deben administrarse en sitios anatómicos distintos (ej. deltoides derecho e izquierdo) y con jeringas diferentes para evitar que la inmunoglobulina neutralice el toxoide vacunal in situ.\n\nAnálisis de distractores:\n- Opción A es incorrecta: La vacuna tarda entre 10 y 14 días en inducir anticuerpos protectores; el período de incubación del tétanos en heridas sucias puede ser de 3 a 7 días, por lo que prescindir de la inmunoglobulina expone al paciente a tétanos fulminante.\n- Opción C es incorrecta: La inmunoglobulina sólo confiere protección transitoria (vida media de 3-4 semanas); sin iniciar la vacuna con toxoide dT, el paciente no adquiere inmunidad activa prolongada.\n- Opción D es incorrecta: La profilaxis antibiótica no previene el tétanos, el cual está mediado por una potente exotoxina bacteriana; no sustituye bajo ninguna circunstancia a los inmunobiológicos.\n- Opción E es incorrecta: Limitarse a curaciones locales en una herida tetanígena de alto riesgo sin vacunar ni administrar antitoxina constituye negligencia médica inexcusable."
    },
    {
        "id": "B1-Q17",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Infecciones Oportunistas Mayores en VIH/SIDA",
        "perfilCode": "1.04.1.019, 1.04.3.006",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Inicial",
            "seg": "Derivar",
            "ges": "Garantía Explícita en Salud (GES N° 18): Tratamiento de Infecciones Oportunistas en VIH"
        },
        "stem": "Hombre de 32 años, con diagnóstico de infección por VIH realizado hace 3 años con abandono voluntario de la terapia antirretroviral desde hace 18 meses, consulta en el servicio de urgencia por cefalea holocraneana progresiva, sorda y persistente de 2 semanas de evolución, que se ha intensificado notablemente en los últimos días, acompañada de náuseas, vómitos matinales recurrentes y febrícula vespertina.\nAl examen físico: paciente en enflaquecimiento evidente, somnoliento pero cooperador (Glasgow 14), afebril (37.4 °C), PA 120/75 mmHg, FC 68 lpm. No presenta rigidez de nuca marcada ni déficit neurológico motor focal. El examen de fondo de ojo demuestra borramiento nasal de bordes papilares compatible con edema de papila incipiente bilateral.\nLa RMN de cerebro con gadolinio no muestra lesiones focales con efecto de masa ni abscesos, evidenciando solo discreto ensanchamiento ventricular.\nSe realiza punción lumbar con manometría: Presión de apertura marcadamente elevada en 36 cm H2O. El citoquímico del LCR revela: aspecto límpido y transparente, 140 leucocitos/mm³ con 92% de predominio mononuclear/linfocitario, Glucosa de 22 mg/dL (con glicemia simultánea de 95 mg/dL; ratio < 0.3) y Proteínas totales de 145 mg/dL. La tinción con Tinta China (examen directo) demuestra la presencia de abundantes levaduras esféricas encapsuladas con halo transparente característico.\nRecuento de CD4 solicitado de urgencia: 38 células/mm³.\n¿Cuál es el diagnóstico más probable y el tratamiento farmacológico de fase de inducción de primera línea normado por la guía GES N° 18?",
        "options": [
            {
                "id": "A",
                "text": "Meningitis bacteriana aguda por Neumococo; indicar Ceftriaxona más Vancomicina por 14 días"
            },
            {
                "id": "B",
                "text": "Toxoplasmosis meníngea aguda; iniciar tratamiento con Sulfadiazina más Pirimetamina y ácido folínico por 6 semanas"
            },
            {
                "id": "C",
                "text": "Meningitis por Cryptococcus neoformans; iniciar fase de inducción con Anfotericina B deoxicolato (o liposomal) asociada a Flucitosina (o Fluconazol a altas dosis) por al menos 2 semanas, junto con punciones lumbares evacuadoras para control de la hipertensión endocraneana"
            },
            {
                "id": "D",
                "text": "Leucoencefalopatía multifocal progresiva por virus JC; iniciar de inmediato corticoterapia en bolos de Metilprednisolona"
            },
            {
                "id": "E",
                "text": "Neurocisticercosis quística en fase coloidal; iniciar Albendazol oral más Praziquantel por 21 días"
            }
        ],
        "correcta": "C",
        "explicacion": "La opción C es la CORRECTA. El cuadro de cefalea subaguda progresiva con síndrome de hipertensión endocraneana (vómitos, papiledema, presión de apertura > 20-25 cm H2O) en un paciente con inmunodeficiencia avanzada por VIH (SIDA con CD4 < 100 células/mm³), con LCR claro, pleocitosis linfocitaria, hipoglucorraquia y visualización directa de levaduras gemantes encapsuladas con halo mucilaginoso en la tinción con Tinta China es patognomónico de Meningitis Criptocócica (Cryptococcus neoformans).\nEl tratamiento normado por la Guía Clínica GES N° 18 consta de dos pilares esenciales:\n1) Tratamiento antifúngico fungicida de fase de inducción: Anfotericina B deoxicolato (0.7-1.0 mg/kg/día EV) o liposomal (3-4 mg/kg/día EV) asociada a Flucitosina oral (100 mg/kg/día) o Fluconazol a dosis altas (800-1200 mg/día) durante un mínimo de 2 semanas, seguida de fase de consolidación y mantención con Fluconazol oral;\n2) Control activo de la hipertensión endocraneana: la elevada presión intracraneana es la principal causa de letalidad y pérdida visual irreversible; su manejo exige punciones lumbares terapéuticas evacuadoras repetidas diarias (extrayendo volumen hasta reducir la presión de apertura a < 20 cm H2O o reducirla en un 50%).\n\nAnálisis de distractores:\n- Opción A es incorrecta: La meningitis neumocócica se presenta con inicio hiperagudo (< 48 horas), rigidez meníngea extrema, LCR turbio purulento y predominio neutrofílico (> 80% PMN), no con levaduras encapsuladas ni curso subagudo.\n- Opción B es incorrecta: La toxoplasmosis cerebral se manifiesta con convulsiones, signos de focalidad neurológica y múltiples lesiones nodulares con realce anular y edema vasogénico en núcleos basales en la RMN; la neuroimagen de este paciente no mostró lesiones focales.\n- Opción D es incorrecta: La LMP produce alteraciones cognitivas y motoras asimétricas con desmielinización en la sustancia blanca sin realce en la RMN y no consume glucosa en LCR ni responde a corticoides.\n- Opción E es incorrecta: La neurocisticercosis no cursa con levaduras en la tinción de Tinta China en LCR."
    },
    {
        "id": "B1-Q18",
        "specialtyKey": "infectologia",
        "specialtyName": "Infectología",
        "topicTitle": "Enfermedad de Chagas: Aguda, Indeterminada y Crónica",
        "perfilCode": "1.04.4.016",
        "legalLevel": {
            "dx": "Específico",
            "tx": "Completo",
            "seg": "Completo",
            "ges": "Norma Técnica N° 162 MINSAL: Diagnóstico y Tratamiento de la Enfermedad de Chagas"
        },
        "stem": "Mujer de 26 años, primigesta con embarazo de 12 semanas de gestación bien tolerado, reside en una localidad rural de la Región de Coquimbo. Como parte del tamizaje prenatal obligatorio normado por el MINSAL en zonas endémicas, se le toma serología para Enfermedad de Chagas.\nEl Instituto de Salud Pública (ISP) emite informe confirmatorio: 'Serología positiva para infección por Trypanosoma cruzi mediante dos técnicas inmunoenzimáticas concordantes (ELISA IgG positivo e Inmunofluorescencia Indirecta IFI reactiva 1:80)'.\nLa paciente se encuentra totalmente asintomática, no presenta palpitaciones, disfagia ni constipación. Su electrocardiograma de 12 derivaciones es normal y la ecografía obstétrica confirma feto único acorde a edad gestacional con latidos cardíacos normales.\nDe acuerdo con la Norma Técnica N° 162 del Ministerio de Salud para el Diagnóstico y Tratamiento de la Enfermedad de Chagas en Chile, ¿cuál es la conducta médica normativa más adecuada respecto al tratamiento antiparasitario de la madre y al seguimiento del recién nacido?",
        "options": [
            {
                "id": "A",
                "text": "Diferir el tratamiento antiparasitario materno con Benznidazol o Nifurtimox hasta finalizar el parto y el período de lactancia materna, y realizar de inmediato al nacer un examen parasitológico directo (microhematocrito o PCR) en sangre del recién nacido"
            },
            {
                "id": "B",
                "text": "Iniciar tratamiento inmediato con Benznidazol oral durante el segundo trimestre para evitar la transmisión vertical transplacentaria del parásito"
            },
            {
                "id": "C",
                "text": "Indicar cesárea electiva obligatoria a las 38 semanas para prevenir el contagio durante el paso por el canal del parto"
            },
            {
                "id": "D",
                "text": "Contraindicar de forma absoluta la lactancia materna exclusiva y alimentar al neonato únicamente con fórmula de inicio"
            },
            {
                "id": "E",
                "text": "Solicitar serología IgG para Chagas en sangre de cordón al nacer y catalogar al recién nacido como infectado si el resultado es positivo"
            }
        ],
        "correcta": "A",
        "explicacion": "La opción A es la CORRECTA. La Norma Técnica N° 162 del MINSAL establece regulaciones estrictas y obligatorias respecto a la Enfermedad de Chagas en la mujer embarazada:\n1) Los fármacos tripanocidas disponibles (Benznidazol y Nifurtimox) están FORMALMENTE CONTRAINDICADOS durante el embarazo debido a su demostrado potencial teratogénico y mutagenicidad en estudios preclínicos. Por lo tanto, el tratamiento etiológico de la madre DEBE postergarse hasta el puerperio y la finalización completa de la lactancia materna;\n2) Diagnóstico en el recién nacido: en el período neonatal precoz, el diagnóstico de transmisión vertical congénita se efectúa EXCLUSIVAMENTE mediante métodos parasitológicos directos (microhematocrito de sangre de cordón o punción capilar) o PCR antes del primer mes de vida. Si el examen es positivo, se trata de inmediato al lactante con Benznidazol o Nifurtimox, logrando tasas de curación parasitológica superiores al 95-100%; si es negativo, se controla a los 3 meses y se confirma la seronegatividad con serología IgG a partir de los 9 a 12 meses de edad.\n\nAnálisis de distractores:\n- Opción B es incorrecta: El Benznidazol está estrictamente contraindicado durante toda la gestación por toxicidad fetal; su administración en una embarazada viola la normativa sanitaria nacional y la seguridad clínica.\n- Opción C es incorrecta: La transmisión vertical de Trypanosoma cruzi es por vía hematógena transplacentaria, no intraparto vaginal; la infección materna por Chagas por sí sola no constituye indicación médica de cesárea.\n- Opción D es incorrecta: T. cruzi no se transmite por la leche materna (salvo que existan grietas sangrantes del pezón en fase aguda materna). La lactancia materna está recomendada y garantizada.\n- Opción E es incorrecta: La IgG materna atraviesa la barrera placentaria a partir del segundo trimestre; todos los recién nacidos de madres seropositivas presentarán IgG positiva al nacer sin que ello signifique infección propia. La serología IgG no es diagnóstica en el neonato y solo tiene validez confirmatoria después de los 9 a 12 meses, cuando los anticuerpos transplacentarios maternos se han depurado."
    }
]

output_path = r"d:\Anti\eunacom-publishing-hub\books\data\temp_ensayo_batch_1.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {len(questions)} questions in {output_path}")
