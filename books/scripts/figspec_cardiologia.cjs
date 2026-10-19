/**
 * FIG_SPEC · Cardiología — auditoría de figuras clínicas para la Maqueta 1b.
 * Sólo entran láminas verificadas visualmente como limpias y relevantes al EUNACOM.
 *   mode  'full' (ancho de página) | 'wide' (ancho de la caja de texto)
 *   desc  pie de figura: QUÉ se ve y POR QUÉ importa en el examen
 *   crop  [x%, y%, w%, h%] para eliminar pies/bordes del libro fuente
 *   items [{file, cap, crop?}]  cap = subrótulo bajo cada imagen (A., B., …)
 * Temas sin entrada → sin figura clínica (basta el algoritmo vectorial + tablas).
 * Claves = topicLabel de los 38 temas nuevos (oct-2026; antes 1.3→1.4, 1.4→1.6, 4.1→4.2, 4.4→4.6, 5.3→5.5, 5.4→5.7).
 * Una entrada aquí tiene prioridad sobre las imágenes de la clase (classes/lessons/cardio-NN.cjs): si la clase nueva
 * trae mejores fotos, borrar la entrada del tema.
 */
module.exports = {
  '1.1': {
    mode: 'full', crop: [3, 5, 94, 61],
    desc: 'Tiempos normales del ECG de superficie. Umbrales que se preguntan textualmente: onda P < 120 ms, PR 120–200 ms, QRS < 120 ms, QTc < 440 ms (H) / < 460 ms (M).',
    items: [{ file: 'figura_1_1_ecg_intervalos.png', cap: 'Medición sistemática de intervalos' }],
  },
  '4.2': {
    mode: 'wide', crop: [1, 1, 98, 98],
    desc: 'Ecocardiograma de la válvula aórtica: apertura sistólica reducida y calcificación de los velos. La severidad se define por área valvular < 1,0 cm², gradiente medio > 40 mmHg y velocidad máxima > 4 m/s.',
    items: [{ file: 'figura_4_1_eao_ecocardiograma.png', cap: 'Válvula aórtica calcificada (eje corto)' }],
  },
  '5.1': {
    mode: 'wide',
    desc: 'Monitorización ambulatoria de presión arterial (MAPA) de 24 h: promedios diurno y nocturno y porcentaje de descenso nocturno. Confirma el diagnóstico de HTA y detecta el patrón non-dipper (riesgo cardiovascular aumentado).',
    items: [{ file: 'fig_mapa_hta_p142_img3.jpeg', cap: 'Registro de 24 horas con promedios por período' }],
  },
  '5.5': {
    mode: 'full', crop: [0, 0, 100, 96],
    desc: 'ECG de pericarditis aguda: supradesnivel del ST cóncavo y difuso (no territorial) con descenso del segmento PR. Evoluciona en cuatro fases; la ausencia de imagen especular la separa del SCACEST.',
    items: [{ file: 'fig_pericarditis_ecg_p67_img1.jpeg', cap: 'Supradesnivel ST difuso y cóncavo' }],
  },
  '5.7': {
    mode: 'wide', crop: [2, 3, 96, 92],
    desc: 'AngioTC de tórax con contraste en disección aórtica: flap intimal que separa la luz verdadera de la falsa. El compromiso de la aorta ascendente (tipo A de Stanford) obliga a cirugía urgente.',
    items: [{ file: 'figura_5_4_angiotac_diseccion_stanford_a.png', cap: 'Flap intimal y doble luz (cortes axial y sagital)' }],
  },
};
