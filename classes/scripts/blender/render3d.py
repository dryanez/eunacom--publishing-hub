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
SCRIPTS = {'z_parkinson': 'z_parkinson.py'}

# escena: (destino, cuadros, título, subtítulo, color, [(texto, desde_s, hasta_s, x, y, color)])
JOBS = {
    'z_parkinson': ('neuro-11/A1_nigroestriada_3d', 192, 'Parkinson: la vía nigroestriada', 'La sustancia nigra envía dopamina al estriado; al perder sus neuronas se despigmenta', 'B388FF',
                    [('Sustancia nigra', 0.4, 4.0, 880, 430, 'FFFFFF', (700, 365)), ('Estriado (caudado y putamen)', 0.4, 4.0, 900, 150, '4FA3FF', (820, 190)),
                     ('Dopamina', 1.0, 4.0, 900, 250, 'FFD34D', (705, 290)),
                     ('La nigra se despigmenta', 4.6, 8, 880, 430, 'FF5A4E', (700, 365)), ('Falta dopamina en el estriado', 5.2, 8, 120, 620, 'FF5A4E')]),
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
