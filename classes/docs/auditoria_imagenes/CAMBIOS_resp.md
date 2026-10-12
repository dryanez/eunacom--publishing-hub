# Cambios de imágenes — Respiratorio

Aplicados según `resp.md`. Rutas relativas a `classes/media/`. Todas las imágenes se abrieron y revisaron antes de usarlas. `check_lesson` da ✓ en todas las clases tocadas.

| clase | slide (kicker + título) | qué cambió (antes → después) | archivo(s) |
|---|---|---|---|
| resp-08 | Así se ve · Neumonías que no son del neumococo | 2.ª foto «Patrón por germen» (nódulos sin germen identificable) y narración sobre estafilococo → RX de Mycoplasma con infiltrado perihiliar bilateral (pie del CTO: «Mycoplasma (perihiliar)»), rótulo y narración del atípico | quitado `biblioteca/02_neumologia/resp-08/01_patrones-rx-por-germen_1__cto-infecto_p56.jpg`; agregado `…/resp-08/01_patrones-rx-por-germen_2__cto-infecto_p56.jpg` |
| resp-08 | Más imágenes · Más imágenes del tema | Rótulos sin germen → «Tuberculosis: cavidad derecha y nódulos miliares izquierdos» y «Klebsiella pneumoniae: consolidación del lóbulo superior derecho» (según el pie del CTO); la de Mycoplasma pasó a «Así se ve» | `…/resp-08/01_patrones-rx-por-germen_3__cto-infecto_p56.jpg`, `…/resp-08/01_patrones-rx-por-germen_4__cto-infecto_p56.jpg` |
| resp-10 | Así se ve · Tuberculosis en las imágenes | Miliar solo en TC → se agrega la RX miliar «en granos de mijo» (repuesto sin usar) antes de la TC; rótulos (RX)/(TC) y un paso más | `…/resp-10/02_tbc-miliar_alt1__cto-infecto_p66.jpg` |
| resp-12 | Más imágenes · Más imágenes del tema | Rótulo genérico «Derrame pleural (Rx)» → «Derrame pleural masivo izquierdo (Rx)», con narración que describe el desplazamiento del mediastino | `…/resp-12/01_derrame-encapsulado_2__cto-neumo_p111.jpg` |
| resp-13 | La radiografía · Cómo se ve un neumotórax | La imagen no tenía `label` → «Neumotórax derecho» | `resp-13/neumotorax.jpg` |
| resp-13 | Más imágenes · Más imágenes del tema | Misma RX que la diapositiva principal → repuesto sin usar: otro neumotórax derecho en inspiración y espiración, con la línea pleural punteada | quitado `…/resp-13/01_neumotorax__cto-neumo_p116.jpg`; agregado `…/resp-13/01_neumotorax_alt1__cto-radiologia_p23.jpg` |
| resp-14 | Así se ve · Neumotórax a tensión → «Neumotórax a tensión y hemotórax» | Solo el neumotórax a tensión → se agrega RX con ocupación pleural masiva derecha, rotulada como hemotórax en el trauma, con narración del hemotórax masivo | `…/resp-14/02_hemotorax-masivo-rx__cto-neumo_p111.jpg` (copia de cirugia-10) |
| resp-16 | Así se ve · El nódulo pulmonar sospechoso → «La lesión pulmonar sospechosa» | Recorte de RX ilegible («Nódulo espiculado», no se ve el nódulo) → TC con una lesión de bordes irregulares en el pulmón izquierdo, rotulada honestamente como «Masa pulmonar de bordes irregulares (TC)»; narración de bordes irregulares, el límite de tres centímetros y los signos benignos | quitado `…/resp-16/01_nodulo_espiculado__cxr_p282.jpg`; agregado `…/resp-16/01_masa-pulmonar-bordes-irregulares-tc__cto-neumo_p139.jpg` (copia de resp-17) |
| resp-18 | Así se ve · Fibrosis pulmonar idiopática | «Panal de abejas» rotulaba la RX PA → la TC con panal (repuesto `_alt1`) lleva ese rótulo; la RX queda como «Fibrosis pulmonar idiopática (RX)» con su propio paso | `…/resp-18/01_fpi-rx-y-tc_alt1__cto-neumo_p73.jpg`, `…/resp-18/01_fpi-rx-y-tc__cto-neumo_p73.jpg` |
| resp-22 | Así se ve · Distrés respiratorio agudo | Solo SDRA → se agregan líneas B de Kerley (edema intersticial) para comparar con el edema cardiogénico | `…/resp-22/02_lineas-b-kerley__cto-radiologia_p11.jpg` (copia de `resp-18/02_patrones-intersticiales_alt1`) |

## No hecho

- **resp-16**: no hay en el repo una TC de nódulo espiculado (menor de tres centímetros), un hamartoma en «popcorn», un vidrio esmerilado ni un PET. Se usó la masa de resp-17 como ejemplo legible de borde irregular; si se consigue un nódulo real, conviene reemplazarla.
- **resp-08**: la RX `01_patrones-rx-por-germen_1` (nódulos bilaterales) no se pudo asignar a ningún germen del pie del CTO; se dejó sin usar.
- **resp-09**: todos los quistes hidatídicos de `infecto-17` son hepáticos o una pieza quirúrgica de órgano no identificado; ninguno es pulmonar. Cáncer cavitado: no está.
- **resp-10**: BAAR (Ziehl-Neelsen) y PPD no están. El repuesto `01_tbc-ghon-cavitacion_alt1` y la escrófula de infecto-11 son opcionales y no se agregaron.
- **resp-11**: el repuesto `01_derrame-pleural_alt1` es una RX invertida que no se ve claramente en decúbito lateral, y la clase no habla del decúbito; no se usó. Ecografía pleural: no está.
- **resp-14**: el tórax volante (`cirugia-10/01_torax_volante__atls_p127.jpg`) no se agregó: la clase no lo menciona y el dibujo tiene rótulos en inglés. El `_alt1` de resp-14 (neumotórax simple, mal nombrado) no se usa. Nota: la RX del hemotórax es la misma radiografía que el derrame de resp-11 (mismo origen, CTO Neumología p. 111).
- **resp-19**: la angio-TC sigue sin flecha; no agregué marcas porque los defectos son pequeños y no quise marcar a ojo. TVP y eco con VD dilatado: no están.
- **resp-22**: la RX del hanta (`infecto-14`) es un edema no cardiogénico y no sirve para la comparación.
- **resp-17**: la diapositiva «Así se ve» tiene 4 fotos (más del máximo de 3), pero no era un hallazgo de la auditoría y no se tocó. Síndrome de vena cava superior: no está.
- **resp-23**: el esquema del colapso faríngeo no existe (se dibujaría; no es un cambio de imagen del repo).
- **resp-02, 03, 04, 12 (tabiques/pus), 15, 21**: huecos sin candidato en el repo.
