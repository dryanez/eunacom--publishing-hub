"""
Renderiza una escena 3D y le pone título y rótulos con el estilo de las animaciones Manim.
    python3 classes/scripts/blender/render3d.py <escena> [<escena> ...]          # todas si no se indica
    python3 classes/scripts/blender/render3d.py --preview resp14_tension         # 3 cuadros de prueba
Salida: classes/media/animaciones/<clase>/<archivo>.mp4
"""
import os, subprocess, sys, shutil

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', '..', 'media', 'animaciones')
BLENDER = '/Applications/Blender.app/Contents/MacOS/Blender'
FONT = '/System/Library/Fonts/Helvetica.ttc'
CREDIT = 'Modelo 3D: BodyParts3D (DBCLS, CC BY 4.0)'
ZCREDIT = 'Modelo 3D: Z-Anatomy (CC BY-SA 4.0) · BodyParts3D'
SCRIPTS = {'z_parkinson': 'z_parkinson.py', 'z_portal': 'z_portal.py', 'z_aneurisma': 'z_aneurisma.py', 'z_crisis': 'z_crisis.py', 'z_graves': 'z_graves.py', 'z_obstruccion': 'z_obstruccion.py', 'z_tep': 'z_tep.py', 'z_glaucoma': 'z_glaucoma.py', 'z_gota': 'z_gota.py', 'z_artrosis': 'z_artrosis.py'}

# escena: (destino, cuadros, título, subtítulo, color, [(texto, desde_s, hasta_s, x, y, color)])
JOBS = {
    'z_parkinson': ('neuro-11/A1_nigroestriada_3d', 312, 'Parkinson: la vía nigroestriada', 'La sustancia nigra envía dopamina al estriado; al perder sus neuronas se despigmenta', 'B388FF',
                    [('Cerebro completo', 0.3, 2.3, 120, 620, 'FFFFFF'), ('Retiramos la corteza y el cerebelo', 2.4, 4.9, 120, 620, 'FFFFFF'),
                     ('Luego la sustancia blanca', 4.9, 6.5, 120, 620, 'FFFFFF'), ('Quedan los núcleos de la base y el mesencéfalo', 6.5, 7.6, 120, 620, 'FFFFFF'),
                     ('Sustancia nigra', 7.6, 10.4, 880, 400, 'FFFFFF', (652, 350)), ('Estriado (caudado y putamen)', 7.6, 10.4, 900, 150, '4FA3FF', (820, 190)),
                     ('Dopamina', 8.0, 10.4, 900, 250, 'FFD34D', (708, 268)),
                     ('La nigra se despigmenta', 10.6, 13, 880, 400, 'FF5A4E', (652, 350)), ('Falta dopamina en el estriado', 11.2, 13, 120, 620, 'FF5A4E')]),
    'z_aneurisma': ('neuro-04/A1_aneurisma_3d', 288, 'Hemorragia subaracnoidea', 'Un aneurisma del polígono de Willis se rompe y la sangre llena las cisternas', 'FF5A4E',
                    [('Giramos hasta ver la base del cerebro', 0.6, 3.5, 40, 655, 'FFFFFF'),
                     ('Polígono de Willis', 3.6, 6.7, 110, 410, 'FF8A7A', (570, 430)),
                     ('Aneurisma de la comunicante anterior', 4.8, 6.8, 760, 220, 'FFC247', (642, 294)),
                     ('Se rompe', 6.85, 7.7, 40, 655, 'FFFFFF'),
                     ('La sangre llena las cisternas de la base y las cisuras', 7.7, 12, 40, 610, 'FF5A4E'),
                     ('Cefalea en trueno: la peor de su vida', 9.3, 12, 40, 660, 'FFFFFF')]),
    'z_crisis': ('neuro-08/A1_crisis_propagacion_3d', 288, 'Cómo se propaga una crisis', 'De un foco en la corteza a todo el cerebro', 'FF9A3D',
                 [('Foco en la corteza motora izquierda: sacude la mano derecha', 0.7, 3.6, 40, 655, 'FFB15C'),
                  ('Se extiende por el hemisferio: marcha jacksoniana', 3.7, 6.8, 40, 655, 'FFB15C'),
                  ('Pasa al otro hemisferio: crisis bilateral tónico-clónica', 6.9, 9.6, 40, 655, 'FF5A4E'),
                  ('Toda la corteza: se pierde la conciencia', 9.7, 12, 40, 655, 'FF5A4E')]),
    'z_graves': ('endo-06/A1_graves_3d', 288, 'Enfermedad de Graves', 'Anticuerpos que imitan a la TSH estimulan la tiroides sin freno', 'FF5A4E',
                 [('Tiroides normal', 0.3, 1.4, 40, 655, 'FFFFFF'),
                  ('Llegan anticuerpos contra el receptor de TSH (TRAb)', 1.5, 4.3, 40, 655, '5CE0A0'),
                  ('La estimulan sin freno: crece (bocio difuso)', 4.4, 7.0, 40, 655, 'FF5A4E'),
                  ('Exceso de T4 y T3 a la sangre; la TSH queda suprimida', 7.0, 12, 40, 655, 'FFD34D')]),
    'z_obstruccion': ('cirugia-04/A1_obstruccion_3d', 288, 'Obstrucción intestinal', 'Una brida cierra el íleon: antes se dilata, después se colapsa', 'FFC247',
                      [('Intestino normal', 0.3, 1.4, 40, 655, 'FFFFFF'),
                       ('Una brida estrangula el íleon distal', 1.5, 3.3, 40, 655, 'FFE08A'),
                       ('Las asas proximales luchan y se dilatan con gas y líquido', 3.4, 7.8, 40, 655, 'FF8A7A'),
                       ('Brida', 7.9, 12, 160, 470, 'FFE08A', (480, 430)),
                       ('Asas dilatadas', 7.9, 12, 900, 250, 'FF8A7A', (700, 300)),
                       ('Colon colapsado', 7.9, 12, 900, 420, 'E0D8CC', (838, 400))]),
    'z_tep': ('resp-19/A1_tep_3d', 336, 'Tromboembolismo pulmonar', 'Un trombo de la pierna viaja por la cava y el corazón derecho hasta el pulmón', '7FA8FF',
              [('Trombosis venosa profunda en la pantorrilla', 0.4, 3.3, 40, 655, 'FF8A7A'),
               ('Se suelta un émbolo', 3.4, 4.6, 40, 655, 'FF5A4E'),
               ('Sube por la femoral, las ilíacas y la cava inferior', 4.7, 8.3, 40, 655, 'A8C4FF'),
               ('Atraviesa el corazón derecho', 8.4, 10.3, 40, 655, 'C9A8FF'),
               ('Se enclava en la arteria pulmonar: el pulmón queda sin perfusión', 10.4, 14, 40, 610, 'FF5A4E'),
               ('El ventrículo derecho se sobrecarga y se dilata', 11.8, 14, 40, 660, 'FF8FB1')]),
    'z_glaucoma': ('oftal-06/A1_cierre_angulo_3d', 288, 'Glaucoma agudo por cierre angular', 'El iris se abomba, tapa el ángulo y el humor acuoso no drena', '4FA3FF',
                   [('Ojo cortado por la mitad: córnea a la izquierda', 0.3, 2.0, 40, 655, 'FFFFFF'),
                    ('Normal: el humor acuoso pasa por la pupila y drena por el ángulo', 2.1, 5.5, 40, 655, '7FC8FF'),
                    ('El iris se abomba hacia delante y cierra el ángulo', 5.6, 7.8, 40, 655, 'FFC247'),
                    ('El acuoso queda atrapado detrás del iris: la presión sube en horas', 7.9, 12, 40, 610, 'FF5A4E'),
                    ('Dolor, ojo rojo, córnea turbia y pupila media fija', 9.0, 12, 40, 660, 'FFFFFF')]),
    'z_gota': ('reuma-03/A1_podagra_3d', 288, 'Gota: la podagra', 'El urato precipita en la articulación fría y desata la inflamación', 'FFC247',
               [('Podagra: primera articulación metatarsofalángica', 0.3, 2.5, 40, 655, 'FFFFFF'),
                ('Ácido úrico alto: urato disuelto en la articulación', 2.6, 3.6, 40, 655, 'FFD34D'),
                ('Es distal y fría: el urato precipita en cristales en aguja', 3.7, 6.5, 40, 655, '9FC8FF'),
                ('Llegan neutrófilos y fagocitan los cristales', 6.6, 7.9, 40, 655, 'FFFFFF'),
                ('Inflamación intensa: dolor, rubor, calor e hinchazón', 7.9, 12, 40, 655, 'FF5A4E')]),
    'z_artrosis': ('reuma-04/A1_artrosis_3d', 288, 'Artrosis de rodilla', 'El cartílago se gasta y el hueso responde con osteofitos', 'FFC247',
                   [('Rodilla sana: cartílago (azul) sobre los cóndilos y el platillo', 0.3, 2.4, 40, 655, '7FB2FF'),
                    ('El cartílago se gasta, sobre todo en el compartimento medial', 2.5, 7.0, 40, 655, 'FFFFFF'),
                    ('Se estrecha el espacio articular', 4.5, 7.0, 40, 605, 'FFC247'),
                    ('Crecen osteofitos en los bordes; el hueso subcondral se esclerosa', 7.1, 12, 40, 655, 'FFC247')]),
    'z_portal': ('gastro-15/A1_hipertension_portal_3d', 336, 'Hipertensión portal', 'El hígado cirrótico frena la sangre portal: busca colaterales y se filtra líquido', 'FF5A4E',
                 [('Normal: intestino y bazo drenan por la porta al hígado', 0.3, 3.0, 40, 655, 'FFFFFF'),
                  ('Cirrosis: el hígado frena el paso', 3.1, 6.3, 60, 200, 'FFC247', (540, 220)),
                  ('Sube la presión portal', 3.8, 6.3, 900, 330, 'FF5A4E', (650, 262)),
                  ('Hígado cirrótico', 6.4, 14, 60, 200, 'FFC247', (540, 220)),
                  ('Esplenomegalia', 4.8, 14, 900, 220, 'FF8FB1', (825, 245)),
                  ('Várices esofágicas', 6.4, 14, 900, 140, 'B388FF', (642, 112)),
                  ('Cabeza de medusa', 8.8, 14, 60, 440, 'B388FF', (500, 470)),
                  ('Ascitis', 11.1, 14, 60, 560, '7FC8FF', (600, 610))]),
    'gastro03_normal': ('gastro-03/A1_deglucion_normal_3d', 168, 'Deglución normal', 'La onda peristáltica baja el bolo y el esfínter inferior se abre justo cuando llega', '3DDC84',
                        [('Esfínter esofágico inferior', 0.3, 7, 800, 450, '3DDC84', (612, 467)), ('Se abre y deja pasar', 1.5, 7, 800, 500, 'FFFFFF')]),
    'gastro03_acalasia': ('gastro-03/A1_acalasia_3d', 168, 'Acalasia', 'El esfínter esofágico inferior no se relaja: el alimento se retiene y el esófago se dilata', 'FFC247',
                          [('Esfínter esofágico inferior', 0.3, 3.2, 800, 450, 'FF5A4E', (612, 467)), ('No se relaja al tragar', 1.2, 3.2, 800, 500, 'FFFFFF'),
                           ('El alimento se retiene', 2.4, 4.4, 800, 360, 'FFD34D', (605, 390)),
                           ('Megaesófago', 4.6, 7, 800, 260, 'FFC247', (655, 280)), ('Pico de pájaro', 4.6, 7, 800, 450, 'FF5A4E', (606, 462))]),
    'resp14_tension': ('resp-14/A1_tension_3d', 120, 'Neumotórax a tensión', 'El aire atrapado colapsa el pulmón y empuja el mediastino al otro lado', 'FF5A4E',
                       [('Pulmón derecho colapsado', 3.2, 5, 140, 560, 'FF5A4E'), ('Mediastino desplazado', 3.2, 5, 820, 560, 'FFC247')]),
    'resp14_puncion': ('resp-14/A2_puncion_3d', 120, 'Descompresión con aguja', '2.º espacio intercostal, línea medioclavicular, sin esperar la radiografía', '3DDC84',
                       [('El pulmón se reexpande', 3.0, 5, 140, 560, '3DDC84')]),
    'ped08_cuerpo': ('ped-08/A1_bronquio_derecho_3d', 110, 'El cuerpo extraño va al bronquio derecho', 'Es más ancho, más corto y más vertical', 'FFC247',
                     [('Bronquio derecho', 2.8, 4.6, 140, 600, 'FFC247')]),
    'resp08_aspiracion': ('resp-08/A1_aspiracion_3d', 120, 'Neumonía aspirativa', 'Lo aspirado cae por el bronquio derecho a los segmentos declive', '4FA3FF',
                          [('Pulmón derecho: lóbulo inferior', 3.4, 5, 120, 600, 'FF5A4E')]),
    'neuro01_acm': ('neuro-01/A1_acm_3d', 110, 'Oclusión de la arteria cerebral media', 'Visto desde la base: el territorio distal al trombo deja de recibir sangre', 'FF5A4E',
                    [('Trombo', 2.0, 4.6, 840, 360, 'FFFFFF'), ('ACM derecha sin flujo', 3.4, 4.6, 120, 600, 'FF5A4E')]),
    'neuro23_cadera': ('neuro-23/A1_fractura_cadera_3d', 110, 'Fractura del cuello femoral', 'La pierna queda acortada y en rotación externa', 'FF5A4E',
                       [('Acortamiento', 3.2, 4.6, 140, 560, 'FFC247'), ('Rotación externa', 3.2, 4.6, 140, 610, 'FFC247')]),
    'reuma24_vertebra': ('reuma-24/A1_aplastamiento_3d', 110, 'Fractura vertebral por fragilidad', 'L1 se aplasta en cuña anterior: pérdida de altura y cifosis', 'FFC247',
                         [('L1 en cuña', 3.0, 4.6, 140, 600, 'FF5A4E')]),
    'gastro19_apendice': ('gastro-19/A1_apendicitis_3d', 110, 'Apendicitis aguda', 'El apéndice obstruido se distiende, se inflama y puede perforarse', 'FF5A4E',
                          [('Apéndice inflamado', 3.0, 4.6, 140, 600, 'FF5A4E')]),
    'endo20_hipofisis': ('endo-20/A1_macroadenoma_3d', 110, 'Macroadenoma hipofisario', 'Crece hacia arriba y comprime el quiasma: hemianopsia bitemporal', 'B388FF',
                         [('Quiasma comprimido', 3.2, 4.6, 140, 600, 'FF5A4E')]),
    'neuro20_vppb': ('neuro-20/A1_otolitos_epley_3d', 168, 'Maniobra de Epley: qué pasa en el oído', 'Cada giro hace rodar los otolitos fuera del conducto posterior', '4FA3FF',
                     [('Conducto posterior', 0.3, 2.0, 140, 600, 'FFC247'), ('Los otolitos salen al vestíbulo', 5.6, 7, 140, 600, '3DDC84')]),
    'ob16_parto': ('ob-16/A1_mecanismo_parto_3d', 168, 'Mecanismo del parto', 'Encajamiento, descenso, flexión, rotación interna, extensión y rotación externa', 'B388FF',
                   [('Encajamiento', 0.2, 1.6, 140, 620, 'FFFFFF'), ('Descenso y flexión', 1.7, 3.0, 140, 620, 'FFFFFF'),
                    ('Rotación interna', 3.1, 4.3, 140, 620, 'FFFFFF'), ('Extensión', 4.4, 5.6, 140, 620, 'FFFFFF'), ('Rotación externa', 5.7, 7, 140, 620, 'FFFFFF')]),
}


def overlay_png(path, items):
    """items: [(texto, x, y, tamaño, color_hex, caja)] -> PNG transparente 1280x720."""
    from PIL import Image, ImageDraw, ImageFont
    im = Image.new('RGBA', (1280, 720), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    if any(sz >= 34 for _, _, _, sz, *_ in items):              # franja oscura detrás del título
        for yy in range(0, 130):
            a = int(215 * (1 - max(0, yy - 95) / 35)) if yy > 95 else 215
            d.line([(0, yy), (1280, yy)], fill=(14, 17, 22, a))
    for txt, x, y, size, col, boxed, *ptr in items:
        f = ImageFont.truetype(FONT, size, index=1 if size >= 34 else 0)
        w = d.textlength(txt, font=f)
        if x == 'right':
            x = 1280 - 24 - w
        if ptr and ptr[0]:                                           # línea guía hasta la estructura
            tx, ty = ptr[0]; sx = x - 10 if tx < x else x + w + 10; sy = y + size // 2 + 1
            d.line([(sx, sy), (tx, ty)], fill='#' + col, width=3); d.ellipse([tx - 6, ty - 6, tx + 6, ty + 6], outline='#' + col, width=3)
        if boxed:
            d.rounded_rectangle([x - 10, y - 8, x + w + 10, y + size + 10], radius=8, fill=(14, 17, 22, 170))
        d.text((x, y), txt, font=f, fill='#' + col)
    im.save(path)


def render(scene, preview=False):
    dest, frames, title, sub, col, labels = JOBS[scene]
    tmp = f'/tmp/a3d_{scene}'
    have = len([f for f in os.listdir(tmp) if f.endswith('.png')]) if os.path.isdir(tmp) else 0
    if have != frames:
        shutil.rmtree(tmp, ignore_errors=True)
        if scene in SCRIPTS:
            r = subprocess.run([BLENDER, '-b', '-P', os.path.join(HERE, SCRIPTS[scene]), '--', tmp, str(frames)], capture_output=True, text=True)
        else:
            r = subprocess.run([BLENDER, '-b', '-P', os.path.join(HERE, 'anatomia3d.py'), '--', scene, tmp, str(frames)], capture_output=True, text=True)
        if not os.path.isdir(tmp) or not os.listdir(tmp):
            print('FAIL', scene, r.stdout[-1200:], r.stderr[-800:]); return
    base = f'/tmp/a3d_{scene}_title.png'
    overlay_png(base, [(title, 36, 26, 38, col, False), (sub, 36, 76, 22, '9AA0A6', False), (ZCREDIT if scene in SCRIPTS else CREDIT, 'right', 690, 15, '6E6E73', False)])
    inputs = ['-framerate', '24', '-i', os.path.join(tmp, 'f_%04d.png'), '-i', base]
    chain = '[0:v][1:v]overlay=0:0[v1]'
    for i, (txt, a, b, x, y, c, *ptr) in enumerate(labels):
        pth = f'/tmp/a3d_{scene}_lab{i}.png'
        overlay_png(pth, [(txt, x, y, 28, c, True, *ptr)])
        inputs += ['-i', pth]
        chain += f";[v{i + 1}][{i + 2}:v]overlay=0:0:enable='between(t,{a},{b})'[v{i + 2}]"
    last = f'[v{len(labels) + 1}]'
    out = os.path.join(OUT, dest + '.mp4')
    os.makedirs(os.path.dirname(out), exist_ok=True)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error'] + inputs + ['-filter_complex', chain + f';{last}format=yuv420p[out]', '-map', '[out]',
                    '-c:v', 'libx264', '-crf', '24', '-preset', 'slow', '-movflags', '+faststart', out], check=False)
    print('ok' if os.path.exists(out) else 'FAIL', dest, os.path.getsize(out) // 1024 if os.path.exists(out) else 0, 'KB')


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    for s in (args or JOBS):
        render(s, preview='--preview' in sys.argv)
