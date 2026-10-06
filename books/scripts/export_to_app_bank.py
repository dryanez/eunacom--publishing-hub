#!/usr/bin/env python3
"""Append the new book questions (books/dist/ENSAYO_90Q_*.json) to the app's question bank.

Usage: python3 books/scripts/export_to_app_bank.py <path to eunacom-app-v2/public/data>

Skips: template filler, questions without a correct answer, and anything already online
(questionDB, pruebas or reconstrucciones, matched by normalized stem). Answer letters are
shuffled to fix the A/B skew, except where the explanation cites a letter.
"""
import glob, hashlib, json, os, random, re, sys, unicodedata, uuid

DATA = sys.argv[1]
DIST = os.path.join(os.path.dirname(__file__), '..', 'dist')
FILLER = ('Paciente de 52 años es evaluado', 'Paciente adulto consulta de urgencia en',
          'En el enfrentamiento clínico sistemático de')
CITES_LETTER = re.compile(r'\b(alternativa|opci[oó]n|letra|respuesta)\s+(correcta\s+es\s+(la\s+)?)?[A-E]\b|\([A-E]\)|\b[A-E]\)')
BOOKS = {
    'CARDIOLOGIA': ('Módulo 1', 'Cardiología'), 'DIABETES': ('Módulo 1', 'Endocrinología'),
    'ENDOCRINOLOGIA': ('Módulo 1', 'Endocrinología'), 'GASTROENTEROLOGIA': ('Módulo 1', 'Gastroenterología'),
    'HEMATOLOGIA': ('Módulo 1', 'Hematología'), 'INFECTOLOGIA': ('Módulo 1', 'Infectología'),
    'NEFROLOGIA': ('Módulo 1', 'Nefrología'), 'NEUMOLOGIA': ('Módulo 1', 'Respiratorio'),
    'NEUROLOGIA': ('Módulo 1', 'Neurología'), 'REUMATOLOGIA': ('Módulo 1', 'Reumatología'),
    'CIRUGIA': ('Módulo 2', 'Cirugía y Anestesia'), 'DERMATOLOGIA': ('Módulo 2', 'Dermatología'),
    'OFTALMOLOGIA': ('Módulo 2', 'Oftalmología'), 'OTORRINO': ('Módulo 2', 'Otorrinolaringología'),
    'PSIQUIATRIA': ('Módulo 2', 'Psiquiatría'), 'SALUDPUBLICA': ('Módulo 2', 'Salud Pública'),
    'TRAUMATOLOGIA': ('Módulo 2', 'Traumatología'), 'UROLOGIA': ('Módulo 2', 'Urología'),
    'GINECOLOGIA': ('Módulo 3', 'Ginecología'), 'OBSTETRICIA': ('Módulo 3', 'Obstetricia'),
    'PEDIATRIA': ('Módulo 3', 'Pediatría'),
}


def norm(s):
    s = unicodedata.normalize('NFKD', (s or '').lower())
    s = re.sub(r'\[[^\]]*\]', '', s)
    s = re.sub(r'[^a-z0-9 ]', '', s)
    return ' '.join(s.split())


def online_stems():
    stems = set()
    for q in json.load(open(os.path.join(DATA, 'questionDB.json'))):
        stems.add(norm(q['question']))
    for f in glob.glob(os.path.join(DATA, 'pruebas', 'modulo-*.json')):
        for p in json.load(open(f)).get('pruebas', []):
            for q in p.get('questions', []):
                stems.add(norm(q.get('pregunta')))
    for f in glob.glob(os.path.join(DATA, 'reconstrucciones', 'eunacom-*.json')):
        for q in json.load(open(f))['questions']:
            stems.add(norm(q.get('question') or q.get('pregunta') or q.get('enunciado')))
    return stems


def shuffled(q):
    """Shuffle option order deterministically and relabel A–E; returns (choices, correct)."""
    rng = random.Random(int(hashlib.md5(q['id'].encode()).hexdigest(), 16))
    opts = list(q['options'])
    rng.shuffle(opts)
    letters = 'ABCDE'
    correct = next(letters[i] for i, o in enumerate(opts) if o['id'] == q['correcta'])
    return [{'id': letters[i], 'text': o['text']} for i, o in enumerate(opts)], correct


def main():
    db_path = os.path.join(DATA, 'questionDB.json')
    bank = json.load(open(db_path))
    seen = online_stems()
    added = skipped_filler = skipped_dupe = skipped_noanswer = 0
    for f in sorted(glob.glob(os.path.join(DIST, 'ENSAYO_90Q_*.json'))):
        key = os.path.basename(f)[len('ENSAYO_90Q_'):-len('.json')]
        category, topic = BOOKS[key]
        for q in json.load(open(f)):
            stem = re.sub(r'^\[[^\]]*\]\s*', '', q['stem']).strip()
            if stem.startswith(FILLER):
                skipped_filler += 1
                continue
            if q.get('correcta') not in [o.get('id') for o in q.get('options', [])] or len(q.get('options', [])) < 4:
                skipped_noanswer += 1
                continue
            k = norm(stem)
            if k in seen:
                skipped_dupe += 1
                continue
            seen.add(k)
            explanation = q.get('explicacion', '')
            if CITES_LETTER.search(explanation):
                choices, correct = [{'id': o['id'], 'text': o['text']} for o in q['options']], q['correcta']
            else:
                choices, correct = shuffled(q)
            bank.append({
                'id': str(uuid.uuid5(uuid.NAMESPACE_URL, f"eunacom-aee-book/{q['id']}")),
                'question': stem,
                'choices': choices,
                'correctAnswer': correct,
                'explanation': explanation,
                'incorrectExplanations': '',
                'tags': ', '.join(t for t in ('Libro AEE 2026', q.get('blockName'), q.get('topicTitle')) if t),
                'topic': topic,
                'category': category,
                'codigo_eunacom': q.get('perfilCode', ''),
            })
            added += 1
    with open(db_path, 'w') as out:
        json.dump(bank, out, ensure_ascii=False, indent=2)
    print(f'added {added} · skipped: {skipped_dupe} already online, {skipped_filler} filler, '
          f'{skipped_noanswer} without answer · bank now {len(bank)}')


if __name__ == '__main__':
    main()
