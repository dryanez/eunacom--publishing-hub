"""Aplica el audit del banco de preguntas reales (classes/docs/audit_banco/audit_<GRUPO>.csv) a
books/data/real_questions_by_code.json. Respaldo previo en books/data/real_questions_by_code.original.json (solo la 1.ª vez).

Reglas (aprobadas por el usuario el 19-oct-2026):
- CLAVE_ERRONEA confianza alta → se cambia la clave a la propuesta y la explicación a la corregida.
- CLAVE_ERRONEA media/baja y CLAVE_DISCUTIBLE → no se cambia la clave; queda marcada (audit.estado, audit.propuesta).
- EXPLICACION_AJENA / EXPLICACION_CONTRADICE → se reemplaza la explicación por la corregida (si la hay).
- TEXTO_DANADO con la misma clave → se reparan ligaduras rotas típicas del PDF (2→ti, :→fi entre letras) y se mantiene;
  si la clave cambia o las alternativas están rotas → audit.excluir = true.
- FALTA_IMAGEN, DUPLICADA → audit.excluir = true (no se usan en libros/clases/Anki hasta revisarlas).
Cada pregunta auditada lleva q["audit"] = {estado, confianza, motivo, propuesta, grupo, aplicado}.
  python3 books/scripts/aplicar_audit_banco.py [A B C D E]
"""
import csv, json, re, sys, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
BANK = ROOT / "books/data/real_questions_by_code.json"
ORIG = ROOT / "books/data/real_questions_by_code.original.json"
AUD = ROOT / "classes/docs/audit_banco"
groups = sys.argv[1:] or [p.stem.split("_")[1] for p in sorted(AUD.glob("audit_*.csv"))]

if not ORIG.exists():
    shutil.copy(BANK, ORIG)
bank = json.loads(BANK.read_text())

def fix_lig(s):
    s = re.sub(r"(?<=[a-záéíóúñ])2(?=[a-záéíóúñ])", "ti", s or "")
    return re.sub(r"(?<=[a-záéíóúñ]):(?=[a-záéíóúñ])", "fi", s)

rows = {}
for g in groups:
    f = AUD / f"audit_{g}.csv"
    if not f.exists():
        print(f"(falta {f.name})"); continue
    for r in csv.DictReader(open(f, encoding="utf-8"), delimiter=";"):
        rows[r["recTag"].strip()] = dict(r, grupo=g)

stats = {}
for code, qs in bank.items():
    for q in qs:
        r = rows.get(q.get("recTag"))
        if not r or (q.get("audit") or {}).get("grupo") == r["grupo"]:
            continue  # sin audit o ya aplicado (idempotente)
        est, conf = r["estado"].strip(), r["confianza"].strip().lower()
        prop, expl = r["clave_propuesta"].strip(), r["explicacion_corregida"].strip()
        a = {"estado": est, "confianza": conf, "motivo": r["motivo"].strip(), "propuesta": prop, "grupo": r["grupo"], "aplicado": False}
        ids = [o.get("id") for o in q.get("options", [])]
        if est == "CLAVE_ERRONEA" and conf == "alta" and prop in ids:
            a["clave_original"] = q.get("correcta"); q["correcta"] = prop; a["aplicado"] = True
            if expl:
                a["explicacion_original"] = q.get("explicacion"); q["explicacion"] = expl
        elif est in ("EXPLICACION_AJENA", "EXPLICACION_CONTRADICE") and expl:
            a["explicacion_original"] = q.get("explicacion"); q["explicacion"] = expl; a["aplicado"] = True
        elif est == "TEXTO_DANADO":
            if prop == q.get("correcta") and prop in ids:
                q["stem"] = fix_lig(q.get("stem"))
                for o in q.get("options", []):
                    o["text"] = fix_lig(o.get("text"))
                q["explicacion"] = fix_lig(q.get("explicacion"))
                a["aplicado"] = True
            else:
                a["excluir"] = True
        elif est == "FALTA_IMAGEN":
            a["excluir"] = True  # hasta que se le agregue la imagen (campo «imagen»)
        elif est == "DUPLICADA":
            if conf == "alta" and prop in ids and prop != q.get("correcta"):
                a["clave_original"] = q.get("correcta"); q["correcta"] = prop; a["aplicado"] = True  # misma pregunta en otro examen: se mantiene
        q["audit"] = a
        k = est + (" (aplicado)" if a["aplicado"] else " (excluir)" if a.get("excluir") else "")
        stats[k] = stats.get(k, 0) + 1

BANK.write_text(json.dumps(bank, ensure_ascii=False, indent=1))
print(f"grupos {groups} · {len(rows)} preguntas auditadas")
for k, v in sorted(stats.items(), key=lambda x: -x[1]):
    print(f"  {v:5d}  {k}")
