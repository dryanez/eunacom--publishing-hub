#!/usr/bin/env bash
# autosave_lessons.sh
# Cada N segundos guarda en git (commit + push) los guiones de classes/lessons que pasan check_lesson.cjs
# y actualiza classes/docs/PROGRESO_MODULO1.md. Así, si la sesión se corta, lo terminado ya está en GitHub.
# Uso: bash classes/scripts/autosave_lessons.sh [segundos=300] &
cd "$(dirname "$0")/../.." || exit 1
INTERVAL="${1:-300}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
while true; do
  (
    flock -w 60 9 || exit 0
    ok=()
    for f in $(git status --porcelain classes/lessons | awk '{print $2}' | grep '\.cjs$'); do
      id="$(basename "$f" .cjs)"
      node classes/scripts/check_lesson.cjs "$id" >/dev/null 2>&1 && ok+=("$f")
    done
    node classes/scripts/progress.cjs >/dev/null 2>&1
    git add classes/docs/PROGRESO_MODULO1.md "${ok[@]}" 2>/dev/null
    if ! git diff --cached --quiet; then
      git commit -qm "chore(classes): autosave ${#ok[@]} lesson(s) that pass the checker

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01RXYsSr1kwmMjBhe59vyBxf"
      for d in 2 4 8 16; do git push -q origin "$BRANCH" && break; sleep $d; done
      echo "$(date +%H:%M) autosave: ${ok[*]}"
    fi
  ) 9>/tmp/eunacom_autosave.lock
  sleep "$INTERVAL"
done
