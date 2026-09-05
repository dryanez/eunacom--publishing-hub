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

## 📊 Estructura Canónica de las 14 Diapositivas

| N° | Tipo de Slide | Propósito Instruccional | Componente Clave |
| :--- | :--- | :--- | :--- |
| **01** | **Portada y Códigos Oficiales** | Identificación del tema, código ASOFAMECh y objetivos clínicos. | `<Slide>` con badges temáticos |
| **02** | **Matriz Perfil V3** | Exigencia legal en APS (Dx, Tx, Seg, GES). | `<GuevaraTable>` legal |
| **03** | **Criterios Diagnósticos** | Criterios canónicos (ej. Diamond-Forrester, Jones, Duke). | Bullets bicolumna |
| **04** | **Clasificación Clínica** | Tipología de la enfermedad y presentación típica/atípica. | Comparador visual |
| **05** | **Escala Funcional** | Severidad clínica (CCS, NYHA, Child-Pugh, CURB-65). | Grilla de niveles |
| **06** | **Fisiopatología de Alto Rendimiento** | Mecanismo molecular/hemodinámico que justifica el tratamiento. | Diagrama o esquema de flujo |
| **07** | **Selección del Test Diagnóstico** | Cuándo pedir cada examen en APS vs Nivel Secundario. | Algoritmo de descarte |
| **08** | **Criterios de Positividad y Alto Riesgo** | Trazados, imágenes y valores de alarma. | Lámina clínica de alta resolución |
| **09** | **Estratificación y Derivación** | Criterios estrictos para derivar al especialista. | Semáforo de riesgo |
| **10** | **Farmacoterapia de Primera Línea** | Dosis exactas, mecanismos y titulación en Chile. | Tabla de fármacos |
| **11** | **Metas Terapéuticas y Prevención** | Metas de laboratorio (LDL, HbA1c, PA) y cambios de estilo de vida. | Checklist de metas |
| **12** | **Trampas de Examen y Variantes Raras** | Preguntas con trampa histórica (ej. Prinzmetal, Tako-Tsubo). | Cuadro de alerta roja |
| **13** | **Casos Clínicos Reales EUNACOM** | 3 viñetas consecutivas con selección múltiple interactiva. | `<QuestionSlide>` con feedback |
| **14** | **Checklist de Síntesis y Resumen High-Yield** | Resumen ejecutivo para repasar 24 horas antes del examen. | Matriz de perlas |

---

## 🎙️ Guion de Teleprompter y Síntesis de Voz

Cada diapositiva debe contar con una propiedad `notes` en el componente React que contiene el guion de teleprompter:
- **Líneas directas y activas**: Hablado en primera persona pedagógica (*"Observemos aquí el criterio..."*).
- **Pronunciación clínica natural**: Preparado fonéticamente para el motor de ElevenLabs.
- **Marcadores de diapositiva**: `[SLIDE 1]`, `[SLIDE 2]`, ... `[SLIDE 14]`.
