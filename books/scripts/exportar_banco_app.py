#!/usr/bin/env python3
"""Exporta el banco corregido por el audit para el repo de la app:
books/data/real_questions_by_code.json  →  books/data/real_questions_corregido_para_app.json

Mismo formato que el banco original ({código V3: [pregunta, …]}, mismos campos), con:
- las correcciones ya aplicadas (clave, explicación, ligaduras),
- SIN las preguntas con audit.excluir (texto irrecuperable, falta imagen sin resolver…),
- sin el bloque «audit» (detalle interno); solo un aviso «revisar» en las que el audit dejó dudosas
  (CLAVE_DISCUTIBLE, CLAVE_ERRONEA de confianza media/baja, MAL_VINCULADA, explicación ajena sin reemplazo),
- «imagen» {src, credit, nota} si la pregunta la trae (src relativo a classes/media; copiar el archivo a la app).
  python3 books/scripts/exportar_banco_app.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
bank = json.loads((ROOT / "books/data/real_questions_by_code.json").read_text())
DUDOSA = {"CLAVE_DISCUTIBLE", "CLAVE_ERRONEA", "MAL_VINCULADA", "EXPLICACION_AJENA", "EXPLICACION_CONTRADICE"}
out, n, nx, nr, ni = {}, 0, 0, 0, 0
for code, qs in bank.items():
    lst = []
    for q in qs:
        a = q.get("audit") or {}
        if a.get("excluir"):
            nx += 1
            continue
        r = {k: v for k, v in q.items() if k != "audit"}
        est = a.get("estado")
        if est in DUDOSA and not a.get("aplicado"):
            r["revisar"] = {"estado": est, "motivo": a.get("motivo", ""), "propuesta": a.get("propuesta", "")}
            nr += 1
        ni += bool(q.get("imagen"))
        lst.append(r)
        n += 1
    if lst:
        out[code] = lst
dst = ROOT / "books/data/real_questions_corregido_para_app.json"
dst.write_text(json.dumps(out, ensure_ascii=False, indent=1))
print(f"{dst.relative_to(ROOT)}: {n} preguntas en {len(out)} códigos · {nx} excluidas fuera · {nr} con aviso «revisar» · {ni} con imagen")
