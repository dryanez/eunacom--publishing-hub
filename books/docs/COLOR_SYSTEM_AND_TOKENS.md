# Color System & Editorial Design Tokens (EUNACOM 2026)

Este documento define la paleta cromática canónica y las variables de diseño utilizadas en la Maqueta 1b para los manuales de preparación EUNACOM 2026.

---

## 1. Paleta Cromática por Especialidad

Cada especialidad cuenta con un color de acento único para permitir la rápida identificación visual del tomo en estantería y formato digital:

| Especialidad | Código Hexadecimal | Color de Muestra | Módulo Académico |
| :--- | :--- | :--- | :--- |
| **Cardiología** | `#ea580c` | Naranja Fuego | Módulo 1 · Medicina Interna |
| **Diabetes y Dislipidemias** | `#0891b2` | Cian Eléctrico | Módulo 1 · Medicina Interna |
| **Endocrinología** | `#7c3aed` | Violeta Real | Módulo 1 · Medicina Interna |
| **Gastroenterología** | `#15803d` | Verde Bosque | Módulo 1 · Medicina Interna |
| **Hematología** | `#be123c` | Carmesí | Módulo 1 · Medicina Interna |
| **Infectología** | `#4d7c0f` | Oliva Clínico | Módulo 1 · Medicina Interna |
| **Nefrología** | `#a16207` | Ámbar Oscuro | Módulo 1 · Medicina Interna |
| **Neurología y Geriatría** | `#6d28d9` | Púrpura Profundo | Módulo 1 · Medicina Interna |
| **Respiratorio / Neumología** | `#0f766e` | Teal Profundo | Módulo 1 · Medicina Interna |
| **Reumatología** | `#9f1239` | Granate | Módulo 1 · Medicina Interna |
| **Cirugía General** | `#334155` | Gris Pizarra | Módulo 2 · Cirugía |
| **Traumatología** | `#b45309` | Ocre Cálido | Módulo 2 · Cirugía |
| **Urología** | `#0369a1` | Azul Marino | Módulo 2 · Cirugía |
| **Dermatología** | `#a21caf` | Magenta | Módulo 2 · Cirugía / Especialidades |
| **Oftalmología** | `#0e7490` | Cian Océano | Módulo 2 · Cirugía / Especialidades |
| **Otorrinolaringología** | `#4338ca` | Índigo | Módulo 2 · Cirugía / Especialidades |
| **Psiquiatría** | `#7e22ce` | Violeta Intenso | Módulo 2 · Especialidades |
| **Salud Pública** | `#166534` | Verde Esmeralda | Módulo 3 · Salud Pública |
| **Pediatría** | `#c2410c` | Coral Cálido | Módulo 3 · Pediatría |
| **Ginecología** | `#be185d` | Rosa Frambuesa | Módulo 3 · Ginecología y Obstetricia |
| **Obstetricia** | `#9d174d` | Vino Tinto | Módulo 3 · Ginecología y Obstetricia |

---

## 2. Variables Cromáticas Derivadas (`themeVars`)

A partir del color de acento (`acc`), el motor genera automáticamente 6 tonos matemáticamente equilibrados mediante la función de mezcla (`mix`):

```javascript
function themeVars(acc) {
  return {
    acc,                                 // Color primario
    accD:   mix(acc, '#000000', 0.20),   // Sombra 20% oscuro (bordes, títulos)
    accDp:  mix(acc, '#000000', 0.40),   // Sombra 40% oscuro (fondos oscuros, portada)
    accT:   mix(acc, '#ffffff', 0.93),   // Tinte 93% claro (fondos de tarjetas y badges)
    accP:   mix(acc, '#ffffff', 0.74),   // Tinte pastel 74% claro (bordes suaves)
    accL:   mix(acc, '#ffffff', 0.55),   // Tinte medio 55% claro (acentos secundarios)
    accInk: mix(acc, '#000000', 0.58),   // Tinta 58% oscura (texto sobre fondos claros)
  };
}
```

---

## 3. Tokens Universales de Diseño

Los siguientes elementos mantienen un estándar cromático constante e inmutable en **todas** las especialidades de la serie:

- **Tablas de Datos Clínicos**:
  - Encabezado: `#0f172a` (Azul Marino Profundo / Navy) con texto `#ffffff`.
  - Bordes de celda: `#e2e8f0` (Gris Pizarra Claro).
  - Filas alternas: `#f8fafc` (Gris casi blanco).
- **Reglas de Oro EUNACOM**:
  - Fondo: Tinte pastel derivado (`accT`).
  - Borde izquierdo de acento: 4px sólido en color de especialidad (`acc`).
  - Viñeta de punto clave: Círculo con número o icono en `acc`.
- **Solucionario y Respuestas**:
  - Color clave: `#059669` (Verde Esmeralda Clínico).
  - Badges de respuesta correcta: Verde con texto blanco.
- **Tipografía Editorial**:
  - Títulos principales y números de portada: `Barlow`, `Barlow Semi Condensed`, `Helvetica Neue`.
  - Texto de lectura clínica: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
  - Monospace (Códigos y Dosis): `JetBrains Mono`, `Fira Code`, `Consolas`, `monospace`.
