"""Lee un PDF y devuelve en JSON la página (1-based) donde aparece cada marcador @@id@@.
Lo usa build_book.cjs para corregir los números del índice en una segunda pasada."""
import json, re, sys
import fitz
out = {}
for i, p in enumerate(fitz.open(sys.argv[1])):
    for m in re.finditer(r'@@([^@\s]+)@@', p.get_text()):
        out.setdefault(m.group(1), i + 1)
print(json.dumps(out))
