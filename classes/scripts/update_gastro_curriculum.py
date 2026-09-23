# -*- coding: utf-8 -*-
import json, os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
DATA_PATH = os.path.join(ROOT, 'classes', 'curriculum', 'gastroenterologia_decks_data.json')

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

# GASTRO-01 REFACTORING
gastro01 = data['gastro-01']
slides01 = gastro01['slides']

# Slide 1 (index 1): Fisiopatología
slides01[1] = {
    "type": "bento",
    "nav": "Fisiopatología y Mecanismos",
    "notes": "En la fisiopatología de la ERGE, el elemento central no es la sobreproducción ácida, sino la incompetencia biomecánica de la barrera antirreflujo. Las relajaciones transitorias del esfínter esofágico inferior explican más del noventa por ciento de los episodios de reflujo no erosivo, actuando como el defecto primario. Por su parte, la hernia hiatal por deslizamiento agrava el cuadro al desalinear el esfínter con el diafragma crural y crear un reservorio ácido que retarda el aclaramiento esofágico distal.",
    "title": "1. Fisiopatología y Mecanismos de Barrera Antirreflujo",
    "cards": [
        {
            "tag": "FISIOPATOLOGÍA",
            "title": "Incompetencia de la Barrera Antirreflujo",
            "kind": "normal",
            "bullets": [
                "Mecanismo Primario: Incompetencia funcional o anatómica de la unión gastroesofágica (no hiperacidez gástrica).",
                "Relajaciones Transitorias del EEI: Explican más del 90% de los episodios en reflujo no erosivo, independientes de la deglución.",
                "Tono Basal del Esfínter: Presión de reposo disminuida (< 10 mmHg) que permite el reflujo libre posprandial."
            ]
        },
        {
            "tag": "FACTORES AGRAVANTES",
            "title": "Hernia Hiatal y Aclaramiento Esofágico",
            "kind": "alert",
            "bullets": [
                "Hernia por Deslizamiento: Tipo I desplaza el cardias al tórax, anulando la pinza del diafragma crural.",
                "Aclaramiento Esofágico: Retraso en la motilidad secundaria esofágica que prolonga la exposición al ácido.",
                "Resistencia Mucosa: Daño progresivo de uniones intercelulares que incrementa la permeabilidad iónica distal."
            ]
        }
    ]
}

# Slide 2 (index 2): Presentación Típica vs Atípica
slides01[2] = {
    "type": "bento",
    "nav": "Presentación Típica vs Atípica",
    "notes": "El enfrentamiento clínico de la ERGE distingue dos grandes formas de presentación. En el síndrome típico, los pacientes presentan pirosis retroesternal y regurgitación ácida; en menores de cincuenta años sin signos de alarma, el diagnóstico es clínico y se confirma mediante prueba terapéutica con IBP en ayunas por cuatro a ocho semanas. Por el contrario, en el síndrome atípico con tos crónica o dolor torácico, es perentorio descartar primero patología coronaria con electrocardiograma y enzimas, para luego indicar IBP a doble dosis y confirmar con pH-impedanciometría de veinticuatro horas.",
    "title": "2. Presentación Típica vs Atípica y Criterios Diagnósticos",
    "cards": [
        {
            "tag": "SÍNDROME TÍPICO",
            "title": "Clínica Típica (< 50 años sin alarma)",
            "kind": "key",
            "bullets": [
                "Síntomas Cardinales: Pirosis retroesternal urente ascendente y regurgitación ácida posprandial.",
                "Diagnóstico Clínico Directo: Cuadro típico en menores de 50 años no requiere endoscopía inicial.",
                "Prueba Terapéutica con IBP: Omeprazol 20 mg al día en ayunas por 4 a 8 semanas; alivio > 75% confirma diagnóstico."
            ]
        },
        {
            "tag": "SÍNDROME ATÍPICO",
            "title": "Manifestaciones Extraesofágicas",
            "kind": "alert",
            "bullets": [
                "Clínica Atípica: Tos crónica nocturna, laringitis posterior, asma de inicio tardío y dolor torácico no cardíaco.",
                "Paso 1 Mandatorio: Descarte prioritario de patología coronaria con ECG y enzimas antes de atribuir dolor a reflujo.",
                "Paso 2 y 3 Confirmatorio: IBP a doble dosis por 8 a 12 semanas; pH-impedanciometría de 24 horas es el Gold Standard."
            ]
        }
    ]
}

# Slide 3 (index 3): Banderas Rojas y EDA
slides01[3] = {
    "type": "bento",
    "nav": "Signos de Alarma y EDA",
    "notes": "Identificar las banderas rojas es crucial para responder correctamente en el examen. La disfagia progresiva de sólidos a líquidos es la señal de alarma cardinal para descartar neoplasia esofágica o estenosis péptica. Asimismo, la odinofagia, la baja de peso inexplicable, la anemia ferropénica y el inicio de síntomas a partir de los cincuenta años exigen una endoscopía digestiva alta inmediata con toma de biopsias. Ante cualquiera de estos signos, duplicar la dosis de omeprazol sin estudio endoscópico previo constituye un error grave.",
    "title": "3. Banderas Rojas y Criterios Mandatorios de EDA",
    "cards": [
        {
            "tag": "ALERTA EUNACOM",
            "title": "Signos de Alarma Cardinales",
            "kind": "alert",
            "bullets": [
                "Disfagia Progresiva: De sólidos a líquidos; signo cardinal de adenocarcinoma o estenosis péptica.",
                "Odinofagia y Sangrado: Sugieren úlcera esofágica profunda, perforación inminente o hemorragia digestiva alta.",
                "Síntomas Sistémicos: Pérdida involuntaria de peso no explicada y anemia ferropénica en estudio."
            ]
        },
        {
            "tag": "CRITERIO GES",
            "title": "Criterios Demográficos y Conducta",
            "kind": "criteria",
            "bullets": [
                "Punto de Corte Etario: Todo paciente ≥ 50 años con debut dispéptico o pirosis exige endoscopía inicial.",
                "Cronología de Reflujo: Pirosis continua por más de 5 años requiere EDA para tamizaje de Esófago de Barrett.",
                "Conducta Ineludible: Endoscopía Digestiva Alta (EDA) con biopsias; prohibido duplicar IBP sin estudio previo."
            ]
        }
    ]
}

# Slide 4 (index 4): Esófago de Barrett
slides01[4] = {
    "type": "bento",
    "nav": "Histología y Protocolo de Seattle",
    "notes": "El Esófago de Barrett es una complicación metaplásica del reflujo crónico y lesión precursora del adenocarcinoma. Para su confirmación diagnóstica no basta observar lengüetas asalmonadas en la endoscopía; es estrictamente indispensable la histología demostrando metaplasia intestinal especializada con células caliciformes. Para pesquisar focos de displasia, se aplica el protocolo de Seattle con biopsias circunferenciales en cuatro cuadrantes cada uno a dos centímetros. Si se confirma ausencia de displasia, la conducta es IBP a permanencia y control endoscópico cada tres a cinco años, estando contraindicada la funduplicatura quirúrgica.",
    "title": "4. Esófago de Barrett: Histopatología y Protocolo de Seattle",
    "cards": [
        {
            "tag": "REGLA DE ORO",
            "title": "Criterio Histopatológico Definitivo",
            "kind": "key",
            "bullets": [
                "Definición Rigurosa: Metaplasia intestinal especializada donde el epitelio escamoso es reemplazado por cilíndrico.",
                "Células Caliciformes: Hallazgo indispensable en biopsia (goblet cells); sin células caliciformes no existe Barrett.",
                "Insuficiencia Macroscópica: La visión endoscópica de lengüetas asalmonadas sobre la línea Z es solo una sospecha."
            ]
        },
        {
            "tag": "CONDUCTA CLÍNICA",
            "title": "Protocolo de Seattle y Seguimiento",
            "kind": "pharma",
            "bullets": [
                "Protocolo de Seattle: Biopsias en los 4 cuadrantes cada 1 a 2 cm de mucosa metaplásica más biopsias de lesiones.",
                "Manejo sin Displasia: IBP continuo a permanencia y vigilancia endoscópica cada 3 a 5 años.",
                "Trampa Clásica: La cirugía antirreflujo (funduplicatura) está formalmente contraindicada si no existe displasia."
            ]
        }
    ]
}

# Slide 11 (index 11): Reglas de Oro
slides01[11] = {
    "type": "bento",
    "nav": "Reglas de Oro",
    "notes": "Para asegurar el puntaje máximo en esta materia, grabemos cuatro reglas de oro. Primero: en menores de cincuenta años con pirosis típica sin alarma, la conducta es prueba terapéutica con IBP y nunca endoscopía de entrada. Segundo: ante síntomas atípicos, tras descartar causa coronaria, se usa IBP a doble dosis y se confirma con pH-impedanciometría de veinticuatro horas. Tercero: el Esófago de Barrett sin displasia se vigila cada tres a cinco años con IBP continuo, estando la funduplicatura quirúrgica totalmente contraindicada. Y cuarto: una distancia mayor a dos centímetros entre la línea Z y la impronta diafragmática diagnostica hernia hiatal por deslizamiento.",
    "title": "Reglas de Oro del Examen EUNACOM",
    "cards": [
        {
            "tag": "REGLA DE ORO",
            "title": "Diagnóstico Clínico y Banderas Rojas",
            "kind": "key",
            "bullets": [
                "Prueba con IBP Directa: En < 50 años con pirosis típica y sin alarma, iniciar omeprazol 20 mg/día; prohibida EDA inicial.",
                "Síntomas Atípicos: Tras descartar patología coronaria, indicar IBP a doble dosis por 8-12 semanas y pH-metría de 24h.",
                "Alerta de Endoscopía: Disfagia progresiva, baja de peso, anemia o edad ≥ 50 años obligan a EDA inmediata con biopsias."
            ]
        },
        {
            "tag": "CRITERIO GES",
            "title": "Esófago de Barrett y Hernia Hiatal",
            "kind": "alert",
            "bullets": [
                "Confirmación de Barrett: Exige células caliciformes en biopsia según protocolo de Seattle en los 4 cuadrantes.",
                "Barrett sin Displasia: IBP a permanencia y control endoscópico cada 3 a 5 años; cirugía antirreflujo contraindicada.",
                "Hernia Hiatal por Deslizamiento: Distancia > 2 cm entre línea Z e impronta diafragmática; nunca confundir con Barrett."
            ]
        }
    ]
}


# GASTRO-02 REFACTORING
gastro02 = data['gastro-02']
slides02 = gastro02['slides']

# Slide 1 (index 1): Enfrentamiento de la Dispepsia
slides02[1] = {
    "type": "bento",
    "nav": "Enfrentamiento de la Dispepsia",
    "notes": "Al enfrentar un cuadro dispéptico, la edad y los signos de alarma determinan la conducta inicial. Si el paciente tiene cincuenta años o más, o presenta disfagia, baja de peso o anemia, la endoscopía digestiva alta es obligatoria de inmediato para descartar neoplasia gástrica. En menores de cincuenta años sin alarma, adoptamos la estrategia de test and treat para Helicobacter pylori o prueba terapéutica con IBP por cuatro semanas. Solo diagnosticamos dispepsia funcional cuando la endoscopía descarta patología orgánica y los síntomas cumplen los criterios temporales de Roma cuatro.",
    "title": "1. Enfrentamiento de la Dispepsia: Roma IV y Estrategia Test & Treat",
    "cards": [
        {
            "tag": "DISPEPSIA NO INVESTIGADA",
            "title": "Estratificación Inicial y Banderas Rojas",
            "kind": "alert",
            "bullets": [
                "Cuadro Clínico Dispéptico: Epigastralgia urente, ardor, saciedad precoz o plenitud posprandial molesta.",
                "Alerta GES Cáncer Gástrico: Edad ≥ 50 años, baja de peso, disfagia, anemia o vómitos obligan a EDA de entrada.",
                "Estrategia en Pacientes Jóvenes: En < 50 años sin alarma, aplicar Test & Treat para H. pylori o IBP por 4 semanas."
            ]
        },
        {
            "tag": "CRITERIOS ROMA IV",
            "title": "Dispepsia Funcional y Subtipos",
            "kind": "criteria",
            "bullets": [
                "Requisito Mandatorio: Endoscopía Digestiva Alta rigurosamente NORMAL sin lesiones orgánicas visibles.",
                "Criterio Temporal de Roma IV: Síntomas presentes en los últimos 3 meses, iniciados al menos 6 meses antes.",
                "Conducta Terapéutica: Explicación de benignidad funcional y prueba con proquinéticos o IBP según subtipo clínico."
            ]
        }
    ]
}

# Slide 2 (index 2): Fisiopatología: H. pylori vs AINEs
slides02[2] = {
    "type": "bento",
    "nav": "Fisiopatología: H. pylori y AINEs",
    "notes": "La enfermedad ulcerosa péptica se origina casi exclusivamente por dos factores: la infección por Helicobacter pylori y el consumo de AINEs. Helicobacter pylori neutraliza el ácido gástrico mediante la enzima ureasa y destruye el epitelio a través de sus citotoxinas CagA y VacA, explicando más del noventa por ciento de las úlceras duodenales. Por su parte, los AINEs inhiben la enzima ciclooxigenasa uno, suprimiendo las prostaglandinas que mantienen el flujo microvascular y la barrera de moco. Los corticoides solos no causan úlcera, pero multiplican severamente el riesgo si se asocian a un AINE.",
    "title": "2. Fisiopatología de la Úlcera Péptica: H. pylori vs AINEs",
    "cards": [
        {
            "tag": "HELICOBACTER PYLORI",
            "title": "Mecanismos de Infección y Daño Epitelial",
            "kind": "pharma",
            "bullets": [
                "Enzima Ureasa: Hidroliza urea gástrica generando amonio alcalino que protege a la bacteria y lesiona el epitelio.",
                "Factores de Virulencia: Citotoxinas CagA y VacA inducen apoptosis celular, disrupción de uniones e inflamación activa.",
                "Carga de Enfermedad: Explica más del 90% de las úlceras duodenales y más del 70% de las úlceras gástricas."
            ]
        },
        {
            "tag": "TOXICIDAD POR AINES",
            "title": "Inhibición de Prostaglandinas y Sinergia",
            "kind": "alert",
            "bullets": [
                "Bloqueo de COX-1: Suprime la síntesis de prostaglandinas E2 e I2 protectoras de la mucosa gastroduodenal.",
                "Compromiso Microvascular: Reduce el flujo sanguíneo submucoso, disminuyendo la secreción de moco y bicarbonato.",
                "Efecto de Corticoides: En monoterapia no causan úlcera péptica, pero multiplican por 4 el daño si se combinan con un AINE."
            ]
        }
    ]
}

# Slide 3 (index 3): Úlcera Duodenal vs Gástrica
slides02[3] = {
    "type": "bento",
    "nav": "Úlcera Duodenal vs Gástrica",
    "notes": "La distinción entre úlcera duodenal y gástrica es una de las preguntas fijas del EUNACOM. La úlcera duodenal calma con los alimentos, tiene dolor nocturno tardío y su riesgo de malignidad es nulo; si la ureasa es negativa en un paciente sin AINEs, se asume un falso negativo y se debe erradicar siempre, sin requerir endoscopía de control. En cambio, toda úlcera gástrica puede esconder un adenocarcinoma: es obligatorio tomar de seis a ocho biopsias de bordes en la endoscopía inicial y realizar siempre una endoscopía de control a las seis a ocho semanas para documentar su curación completa.",
    "title": "3. Diagnóstico Diferencial: Úlcera Duodenal vs Úlcera Gástrica",
    "cards": [
        {
            "tag": "ÚLCERA DUODENAL",
            "title": "Características y Regla de Erradicación",
            "kind": "key",
            "bullets": [
                "Patrón de Dolor: Calma típicamente con los alimentos y reaparece a las 2 a 3 horas posprandiales (dolor nocturno).",
                "Potencial Maligno: Nulo; no requiere toma sistemática de biopsias de los bordes ulcerosos.",
                "Regla de Oro en Ureasa (-): Si el test resulta negativo sin consumo de AINEs, se asume falso negativo y se erradica siempre."
            ]
        },
        {
            "tag": "ÚLCERA GÁSTRICA",
            "title": "Riesgo Neoplásico y Protocolo de Biopsias",
            "kind": "alert",
            "bullets": [
                "Patrón de Dolor: No calma o empeora inmediatamente tras la ingesta de alimentos; mayor sospecha neoplásica.",
                "Muestreo Obligatorio: Tomar 6 a 8 biopsias de bordes y base en la endoscopía diagnóstica inicial.",
                "EDA de Control Ineludible: SIEMPRE realizar nueva endoscopía a las 6-8 semanas para certificar cicatrización completa."
            ]
        }
    ]
}

# Slide 4 (index 4): Diagnóstico de H. pylori
slides02[4] = {
    "type": "bento",
    "nav": "Diagnóstico de H. pylori",
    "notes": "El diagnóstico de Helicobacter pylori exige conocer sus causas de error. El test rápido de ureasa en biopsia antral es el método invasivo de elección en la endoscopía. Sin embargo, para evitar falsos negativos, es imprescindible suspender los inhibidores de bomba de protones dos semanas antes, y los antibióticos o bismuto cuatro semanas previas al estudio. Para certificar la erradicación post-tratamiento, indicamos el test del aliento o antígeno fecal a las cuatro semanas de terminado el esquema. Recuerden la trampa del examen: la serología IgG en sangre nunca debe utilizarse para evaluar curación.",
    "title": "4. Diagnóstico de H. pylori: Métodos y Evitación de Falsos Negativos",
    "cards": [
        {
            "tag": "MÉTODOS DIAGNÓSTICOS",
            "title": "Pruebas Invasivas vs No Invasivas",
            "kind": "pharma",
            "bullets": [
                "Test Rápido de Ureasa: Método invasivo de elección durante la endoscopía; sensibilidad y especificidad > 90%.",
                "Test del Aliento (13C-UBT): Método no invasivo de elección para certificar curación tras tratamiento antibiótico.",
                "Antígeno Fecal Monoclonal: Alternativa no invasiva de alta precisión diagnóstica para inicio y control."
            ]
        },
        {
            "tag": "PREVENCIÓN DE ERRORES",
            "title": "Falsos Negativos y Trampa Serológica",
            "kind": "alert",
            "bullets": [
                "Períodos de Ventana: Suspender IBP al menos 2 semanas antes, y antibióticos o bismuto 4 semanas previas al examen.",
                "Impacto de Sangrado Activo: La presencia de sangre fresca en el estómago disminuye la sensibilidad de la ureasa rápida.",
                "Trampa Clásica de Examen: La serología IgG permanece positiva por años tras curar la bacteria; PROHIBIDA para control."
            ]
        }
    ]
}

# Slide 11 (index 11): Reglas de Oro
slides02[11] = {
    "type": "bento",
    "nav": "Reglas de Oro",
    "notes": "Cerramos la clase con las cuatro reglas de oro de la enfermedad ulcerosa y Helicobacter pylori. Primero: toda úlcera duodenal sin AINEs se erradica, aunque el test de ureasa resulte negativo. Segundo: en toda úlcera gástrica es obligatorio tomar de seis a ocho biopsias y controlar con una nueva endoscopía a las seis a ocho semanas. Tercero: ante la sospecha de perforación péptica con abdomen en tabla, solicitamos radiografía de tórax y se va a pabellón, estando la endoscopía formalmente contraindicada. Y cuarto: el control de erradicación se realiza con test del aliento o antígeno fecal a las cuatro semanas, recordando que la serología IgG está prohibida para evaluar curación.",
    "title": "Reglas de Oro del Examen EUNACOM",
    "cards": [
        {
            "tag": "REGLA DE ORO",
            "title": "Enfrentamiento y Biopsias Pépticas",
            "kind": "key",
            "bullets": [
                "Úlcera Duodenal y Ureasa (-): Si no consume AINEs, erradicar siempre H. pylori por alta sospecha de falso negativo.",
                "Protocolo en Úlcera Gástrica: Obligatorio tomar 6 a 8 biopsias iniciales y realizar EDA de control a las 6-8 semanas.",
                "Duración de Esquema Erradicador: Siempre 14 días completos (nunca 7 ni 10 días) con cuádruple con bismuto o triple extendida."
            ]
        },
        {
            "tag": "ALERTA EUNACOM",
            "title": "Urgencias y Control Post-Tratamiento",
            "kind": "alert",
            "bullets": [
                "Sospecha de Perforación Péptica: Dolor súbito y abdomen en tabla; Rx de tórax (neumoperitoneo) y pabellón, EDA contraindicada.",
                "Control de Curación de H. pylori: Test de aire o antígeno fecal a las 4-6 semanas post-ATB con IBP suspendido.",
                "Trampa Serológica de Curación: Anticuerpos IgG persisten positivos por años; prohibido solicitarlos para evaluar curación."
            ]
        }
    ]
}

# Save updated JSON
with open(DATA_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("[OK] gastroenterologia_decks_data.json actualizado con exito para gastro-01 y gastro-02.")
