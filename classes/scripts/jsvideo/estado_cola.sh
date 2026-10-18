#!/bin/bash
# Estado de la cola de videos: listos / pendientes por especialidad, el que se está haciendo y tiempo estimado.
#   bash classes/scripts/jsvideo/estado_cola.sh
D=$(cd "$(dirname "$0")" && pwd)/out; Q="$D/queue.txt"; DONE="$D/queue.done"
echo "Ahora: $(tail -1 "$D/batch.log")"
listos=$(ls "$D"/*/*_clase.mp4 2>/dev/null | wc -l | tr -d ' ')
pend=$(grep -vxF -f "$DONE" "$Q" | awk '!s[$0]++' | wc -l | tr -d ' ')
min=$(grep " OK " "$D/batch.log" | tail -20 | awk '{print $1}' | sed -n '1p;$p' | awk -F: 'NR==1{a=$1*60+$2} NR==2{b=$1*60+$2; if(b<a)b+=1440; print b-a}')
n=$(grep " OK " "$D/batch.log" | tail -20 | wc -l | tr -d ' ')
per=$(awk -v m="${min:-0}" -v n="$n" 'BEGIN{ if(n>1&&m>0) printf "%.1f", m/(n-1); else print 7 }')
echo "Listos: $listos · pendientes: $pend · ~$per min por video · faltan ~$(awk -v p=$pend -v r=$per 'BEGIN{printf "%.0f", p*r/60}') h"
echo; printf "%-9s %7s %10s\n" Especialidad Listos Pendientes
for e in $( (grep -o '^[a-z]*' "$Q"; ls "$D" | grep -o '^[a-z]*-' | tr -d -) | sort -u); do
  l=$(ls "$D"/$e-*/$e-*_clase.mp4 2>/dev/null | wc -l | tr -d ' ')
  p=$(grep -vxF -f "$DONE" "$Q" | awk '!s[$0]++' | grep -c "^$e-")
  [ "$l$p" != "00" ] && printf "%-9s %7s %10s\n" $e $l $p
done
