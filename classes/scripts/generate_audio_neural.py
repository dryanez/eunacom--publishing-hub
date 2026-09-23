# -*- coding: utf-8 -*-
import sys, os, json, re, asyncio, argparse
import edge_tts

VOICE_MAP = {
    'chile-male': 'es-CL-LorenzoNeural',
    'chile-female': 'es-CL-CatalinaNeural',
    'latam-male': 'es-MX-JorgeNeural',
    'latam-female': 'es-MX-DaliaNeural',
    'spain-male': 'es-ES-AlvaroNeural'
}

def clean_text(text):
    text = re.sub(r'[\U00010000-\U0010ffff]', '', text)
    text = text.replace('$', '').replace('\\times', ' por ').replace('\\le', ' menor o igual a ')
    text = text.replace('\\ge', ' mayor o igual a ').replace('\\pm', ' mas o menos ')
    return text.strip()

async def generate_slide_audio(text, out_file, voice, max_retries=3):
    text = clean_text(text)
    if not text:
        return False
    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    for attempt in range(max_retries):
        try:
            comm = edge_tts.Communicate(text, voice, rate='+0%')
            await comm.save(out_file)
            if os.path.exists(out_file) and os.path.getsize(out_file) > 0:
                return True
        except Exception as e:
            if attempt == max_retries - 1:
                raise e
            await asyncio.sleep(2 * (attempt + 1))
    return False

async def process_class(cls, out_base_dirs, voice, target_slide_num=None):
    import shutil
    class_id = cls.get('id') or 'class-01'
    title = cls.get('title', class_id)
    slides = cls.get('slides', [])
    print(f'\nProcesando clase: {title} ({class_id})')
    print(f'Voz seleccionada: {voice}')
    print(f'Total diapositivas: {len(slides)}')

    for idx, slide in enumerate(slides):
        slide_num = idx + 1
        if target_slide_num is not None and slide_num != target_slide_num:
            continue
        note_text = ''
        if slide.get('notes') and len(slide['notes']) > 0:
            note_text = slide['notes'][0]
        elif slide.get('cards'):
            note_text = slide.get('title', '') + '. ' + '. '.join([c.get('title', '') + ': ' + c.get('body', '') for c in slide['cards']])
        elif slide.get('stem'):
            note_text = slide.get('stem', '') + '. ' + slide.get('question', '') + '. ' + slide.get('explanation', '')
        
        words = len(note_text.split())
        stype = slide.get('type', 'bento')
        print(f'Slide {slide_num:02d} ({stype}): {words} palabras...', end=' ', flush=True)

        primary_file = os.path.join(out_base_dirs[0], class_id, f'slide_{slide_num}.mp3')
        await generate_slide_audio(note_text, primary_file, voice)

        # Copiar eficientemente a los otros directorios sin volver a llamar a la API
        for other_dir in out_base_dirs[1:]:
            target_file = os.path.join(other_dir, class_id, f'slide_{slide_num}.mp3')
            os.makedirs(os.path.dirname(target_file), exist_ok=True)
            shutil.copyfile(primary_file, target_file)

        print('OK')

async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--class_id', default='gastro-01', help='Class ID, comma-separated IDs, or "all"')
    parser.add_argument('--voice', default='es-CL-LorenzoNeural', help='Voice name or key')
    parser.add_argument('--slide_num', type=int, default=None, help='Specific slide number to generate (e.g. 1)')
    args = parser.parse_args()

    voice = VOICE_MAP.get(args.voice, args.voice)

    root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
    html_path = os.path.join(root, 'classes', 'decks', 'Reproductor_Suiza_Oficial.html')

    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    classes = None
    for line in html.split('\n'):
        line_s = line.strip()
        if line_s.startswith('const CLASSES = ['):
            classes = json.loads(line_s[len('const CLASSES = '):-1])
            break

    if not classes:
        print('Error: Could not extract CLASSES from HTML.')
        sys.exit(1)

    brain_dir = 'C:/Users/PC/.gemini/antigravity/brain/1d7a0239-d155-4cb9-9422-60adf8cd5e8c'
    out_dirs = [
        os.path.join(root, 'classes', 'dist', 'audio'),
        os.path.join(root, 'dist', 'audio'),
        os.path.join(brain_dir, 'dist', 'audio')
    ]

    if args.class_id == 'all':
        to_process = classes
    else:
        req_ids = [x.strip() for x in args.class_id.split(',')]
        to_process = [c for c in classes if c.get('id') in req_ids]

    if not to_process:
        print(f'Clases no encontradas: {args.class_id}')
        sys.exit(1)

    for c in to_process:
        await process_class(c, out_dirs, voice, target_slide_num=args.slide_num)

    print('\nSintesis de audio completada exitosamente.')

if __name__ == '__main__':
    asyncio.run(main())
