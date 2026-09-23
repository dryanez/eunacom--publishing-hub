# EUNACOM Perfil V3 Pedagogical & Slide Specification

Norma de diseño instruccional para la creación de **Masterclasses Interactivas EUNACOM 2026** basadas en el currículum oficial de ASOFAMECh.

---

## 🏛️ Filosofía Pedagógica: Boards & Beyond + Guevara

El sistema de clases de alta retención combina la claridad granular de **Boards & Beyond** con la orientación pragmática del **Dr. Guevara**:
1. **Un solo concepto por diapositiva**: Diapositivas limpias con tiempo de lectura de 25 a 45 segundos.
2. **Formato Bi-Columna**:
   - Columna izquierda: Bullets de alta densidad con palabras clave coloreadas (`#dc2626` alarmas y contraindicaciones, `#0284c7` fármacos y dosis).
   - Columna derecha: Trazado de ECG, fotografía clínica, algoritmo o tabla comparativa.
3. **Exigencia Legal Perfil V3**:
   - Todo tema debe explicitar el grado de exigencia legal para el médico general en Chile (Diagnóstico Específico vs Sospecha; Tratamiento Inicial vs Completo; Seguimiento en APS vs Derivación).

---

---

## Estructura Canónica de Diapositivas (Enfoque Clínico Puro)

> **Regla Editorial Fundamental**: La antigua "Matriz de Auditoría Legal" queda terminantemente **ELIMINADA** de todas las clases. No se incluyen tablas burocráticas de códigos o auditorías ministeriales. La clase entra de inmediato en la materia médica y el enfrentamiento diagnóstico.

| N° | Tipo de Slide | Propósito Instruccional | Componente Clave |
| :--- | :--- | :--- | :--- |
| **01** | **Portada Oficial** | Identificación del tema, frecuencia histórica oficial (2013-2025) y rentabilidad. Fondo Deep Slate #0F172A. | `<Cover>` centrado de alto impacto |
| **02** | **Definición y Fisiopatología Cardinal** | Mecanismo etiológico, definición operacional y semiología básica. | `<Bento>` o `<Steps>` clínico |
| **03** | **Criterios Diagnósticos** | Criterios canónicos (ej. Diamond-Forrester, Jones, Duke, KDIGO). | Bullets y correlación diagnóstica |
| **04** | **Clasificación Clínica y Presentación** | Tipología de la enfermedad, presentación típica vs atípica. | Comparador visual |
| **05** | **Escala Funcional y Severidad** | Severidad clínica (CCS, NYHA, Child-Pugh, CURB-65). | Grilla de niveles |
| **06** | **Fisiopatología de Alto Rendimiento** | Mecanismo molecular/hemodinámico que justifica el tratamiento. | Diagrama o esquema de flujo |
| **07** | **Selección del Test Diagnóstico** | Secuencia de exámenes complementarios de menor a mayor invasividad. | Algoritmo de descarte |
| **08** | **Criterios de Positividad y Banderas Rojas** | Trazados, imágenes, puntos de corte de laboratorio y signos de alarma. | Lámina clínica de alta resolución |
| **09** | **Estratificación y Criterios de Urgencia** | Criterios estrictos para hospitalización o derivación inmediata. | Semáforo de riesgo |
| **10** | **Farmacoterapia de Primera Línea** | Fármacos de elección, dosis exactas, vías y duración protocolizada. | Tabla de fármacos |
| **11** | **Metas Terapéuticas y Pronóstico** | Metas de laboratorio (LDL, HbA1c, PA) y prevención de secuelas. | Checklist de metas |
| **12** | **Trampas de Examen y Variantes Críticas** | Preguntas con trampa histórica del banco oficial. | Cuadro de alerta clínica |
| **13** | **Casos Clínicos Reales EUNACOM** | Viñetas con selección múltiple interactiva y análisis de distractores. | `<QuestionSlide>` con feedback |
| **14** | **Algoritmo Resumen y Conducta de Certeza** | Síntesis ejecutiva y regla de oro para responder en 60 segundos. | Matriz de perlas clínicas |

---

## Guion de Teleprompter y Síntesis de Voz (Estilo Médico Docente)

Cada diapositiva cuenta con locución explicativa con las siguientes directrices estrictas:
- **Explicar la materia, no la burocracia**: Centrarse exclusivamente en la medicina: clínica, fisiopatología, diagnóstico diferencial, fármacos y conductas.
- **Correlación Estricta Audio-Visual**: Todo concepto o fármaco mencionado en la locución debe estar anclado visualmente en la diapositiva activa. En diapositivas fisiopatológicas no se mencionan tratamientos futuros; cada fármaco o algoritmo se explica exactamente en la diapositiva donde está visible.
- **Estructura de Tarjetas Guevara (Puntos Ancla vs. Párrafos en Bloque)**: Prohibido apiñar párrafos continuos de texto en las tarjetas. El contenido se estructura en viñetas concisas con palabras clave en negrita y cajas clínicas destacadas, con tipografía amplia (16.5–18px) que llena verticalmente la pantalla sin dejar espacios grises vacíos.
- **Diagramas de Flujo SVG Integradores ("Guevara Flow")**: Toda clase médica debe consolidar la toma de decisiones con un árbol de decisión clínico interactivo en SVG (Slide 06) con bifurcaciones claras ("Si es esto → se va a esto"), permitiendo al alumno integrar la conducta escalonada antes de abordar los casos clínicos oficiales.
- **Prohibido el lenguaje robótico**: No enumerar "Punto 1, Punto 2, Punto 3" ni decir "miren cómo esto conecta con el punto siguiente". Un médico docente explica los hechos de forma fluida y natural.
- **Sin redundancias institucionales**: No repetir frases cliché sobre CESFAM, auditorías legales o penalizaciones de la comisión de ASOFAMECh. La relevancia para el examen se demuestra enseñando la medicina correcta.
- **Tarjetas limpias**: Las tarjetas no llevan etiquetas aleatorias ni identificadores ("CRITERIO GES", "PUNTO 01"). El contenido médico habla por sí mismo.
