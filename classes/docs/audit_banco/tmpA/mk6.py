import json,csv,re
d=json.load(open('chunk6.json'))
O='OK'
S={
0:('CLAVE_DISCUTIBLE','B','media','Puérpera con 3 semanas de diarrea sanguinolenta sin antecedente de ATB en el enunciado; la explicación supone ATB inexistente, más compatible con colitis ulcerativa','Diarrea sanguinolenta de 3 semanas sin ATB previo en una mujer joven orienta a colitis ulcerativa; C. difficile requiere antecedente de ATB u hospitalización.','gastro-08 Diarrea asociada a antibióticos (criterios) / EII'),
1:('TEXTO_DANADO','C. difficile (A del enunciado)','baja','Enunciado con comentarios de reconstrucción pegados y alternativas/explicación de otra pregunta (S. aureus, insulina); clave A no corresponde','Tras diverticulitis tratada con ciprofloxacino y metronidazol, diarrea con fiebre y tenesmo sugiere colitis por C. difficile; pregunta irrecuperable sin alternativas originales.','gastro-08 Diarrea asociada a antibióticos'),
4:('CLAVE_ERRONEA','D','alta','Clave C (parasitológico) contradice la explicación; alternativas pegadas con texto de chat; correcta toxinas A y B','Colitis por C. difficile tras ATB se estudia con toxinas A y B o PCR en deposiciones (opción D).','gastro-08 Diarrea asociada a antibióticos, diagnóstico'),
11:('EXPLICACION_AJENA','C','alta','Clave correcta pero la explicación incluye frase sobre artritis reactiva de otro tema','Úlceras vulvares múltiples, dolorosas, con fondo amarillento y halo eritematoso en mujer joven corresponden a herpes genital (VHS).','reuma-19 ETS, úlceras genitales'),
13:('CLAVE_DISCUTIBLE','A','media','Condilomas: podofilino (D) es tratamiento directo; la clave A es criterio del autor','En condilomas acuminados lo más importante es descartar otras ETS (VIH, sífilis), aunque el tratamiento local (podofilino) también es válido.','reuma-19 ETS, condilomas'),
14:('FALTA_IMAGEN','B','baja','Depende de la imagen de lesión vulvar; explicación con frases ajenas (artritis reactiva, MINSAL/GES)','','reuma-19 ETS, herpes genital'),
15:('TEXTO_DANADO','E','media','Ligaduras corruptas en enunciado y alternativas (urocul2vo, 2empo); clave coherente con uretritis/ITS','','reuma-19 ETS, uretritis'),
17:('EXPLICACION_AJENA','A','media','Explicación incluye texto de espondiloartritis (AINEs y corticoides); clave penicilina benzatina es coherente con chancro sifilítico','Úlcera genital indolora con adenopatía inguinal es sífilis primaria; se trata con penicilina benzatina 2,4 millones UI IM dosis única.','reuma-19 ETS, sífilis primaria'),
18:('EXPLICACION_AJENA','A','media','Explicación incluye texto de espondiloartritis (AINEs y corticoides); clave penicilina benzatina coherente','Úlcera indolora en horquilla vulvar con adenopatía inguinal a las 3 semanas del contacto sugiere sífilis primaria: penicilina benzatina.','reuma-19 ETS, sífilis primaria'),
19:('EXPLICACION_AJENA','C','alta','Clave correcta (varicela del adulto: aciclovir) pero la explicación incluye frase sobre nefropatía diabética','Varicela en mayor de 13 años se trata con aciclovir oral; los antihistamínicos son solo sintomáticos y la aspirina está contraindicada.','infecto-23 Varicela'),
26:('EXPLICACION_AJENA','A','media','Alternativas B y D duplicadas (interrumpir embarazo) y explicación con frase de PCR/beta-D-glucano ajena; clave A razonable','Embarazada VIH sin tratamiento debe iniciar TARV de inmediato, la medida más importante para prevenir transmisión vertical.','infecto-10 VIH, transmisión vertical'),
27:('TEXTO_DANADO','A','alta','Enunciado con restos de plataforma (Pregunta 86 Sin contestar Puntúa...); clave correcta','','infecto-10 VIH, transmisión vertical'),
29:('CLAVE_DISCUTIBLE','D','media','La causa más frecuente sería Cryptosporidium, que no está entre las opciones (Criptococcus no causa diarrea); D por descarte','','infecto-10 VIH, diarrea crónica'),
32:('CLAVE_DISCUTIBLE','E','media','Sin factores de riesgo la guía MINSAL no indica oseltamivir, pero se puede usar; la explicación admite que es discutible','Adulto joven sin factores de riesgo con influenza leve: tratamiento sintomático (paracetamol); oseltamivir se reserva a grupos de riesgo o casos graves.','infecto-25 Influenza, tratamiento'),
33:('CLAVE_DISCUTIBLE','B','media','Mayor de 60-65 años con influenza es grupo de riesgo con indicación de oseltamivir; la clave A (acetaminofeno) es discutible y la explicación admite ambas','Adulto mayor de 66 años hipertenso con influenza tiene indicación de oseltamivir según guía MINSAL, aunque lleve 3 días.','infecto-25 Influenza, tratamiento'),
35:('EXPLICACION_AJENA','D','alta','Clave correcta (mucormicosis rinocerebral en diabético) pero la explicación incluye frase sobre hipoglicemia','Diabético con fiebre, rinorrea purulenta y necrosis del ala nasal corresponde a mucormicosis rinocerebral por Mucor.','infecto-24 Micosis invasora, mucormicosis'),
40:('FALTA_IMAGEN','C','baja','El antibiograma no está en el enunciado; la clave vancomicina asume SARM sin poder verificarlo','','reuma-02 Osteomielitis, tratamiento'),
41:('EXPLICACION_AJENA','E','alta','Clave correcta (discitis) pero la explicación habla de miopatía por estatinas','Diabético con dolor lumbar intenso, fiebre y dolor a la percusión vertebral: espondilodiscitis (discitis lumbar).','reuma-02 Osteomielitis / espondilodiscitis'),
42:('EXPLICACION_AJENA','C','media','Explicación sobre hipercolesterolemia familiar y alternativa E (Derrame pleural) ajena al tema; clave praziquantel coherente con Taenia saginata','Teniasis por Taenia saginata se trata con praziquantel.','gastro-08 Parasitosis intestinales, teniasis'),
43:('TEXTO_DANADO','C','media','Alternativas con aclaraciones entre paréntesis que delatan la respuesta; clave Trichuris coherente','','gastro-08 Parasitosis intestinales, tricocefalosis'),
45:('CLAVE_DISCUTIBLE','D','media','La explicación admite que Cryptosporidium es lo más frecuente y no está; D por descarte; texto con cortes de guion','','gastro-08 Parasitosis intestinales / infecto-10 VIH diarrea'),
49:('CLAVE_ERRONEA','A','media','Embarazada con sífilis alérgica solo a amoxicilina: el libro exige penicilina (con desensibilización si alergia real); eritromicina no trata al feto','En embarazada con sífilis y alergia a penicilina se debe desensibilizar y tratar con penicilina benzatina; los macrólidos no cruzan bien la placenta.','infecto-12 Sífilis, sífilis en embarazo (REVISION_CONTENIDO)'),
51:('CLAVE_DISCUTIBLE','D','baja','Clave eritromicina desactualizada: el libro exige desensibilización y penicilina; opción A (penicilina en 2 dosis) tampoco calza','Con alergia grave a penicilina la norma actual es desensibilizar y tratar con penicilina benzatina; la clave histórica era eritromicina.','infecto-12 Sífilis, sífilis en embarazo (REVISION_CONTENIDO)'),
52:('TEXTO_DANADO','D','alta','Ligaduras corruptas (hepa22s, Amigdali2s, adenopa`as); clave mononucleosis coherente','','orl-13 Síndrome mononucleósico'),
53:('EXPLICACION_AJENA','C','alta','Clave correcta (IgM VCA positiva) pero la explicación termina con texto genérico de amigdalitis / Perfil V3','IgM VCA positiva con IgG VCA negativa indica primoinfección por virus de Epstein-Barr (mononucleosis).','orl-13 Síndrome mononucleósico'),
55:('TEXTO_DANADO','A (IgM anti cápside EBV)','media','Enunciado con "a. Solicitar Elisa VIH" pegado y alternativas con letra B duplicada; clave B ambigua','Mononucleosis con exantema tras amoxicilina: confirmar con IgM anti-VCA de EBV.','orl-13 Síndrome mononucleósico'),
56:('TEXTO_DANADO','Azitromicina','media','Enunciado con respuesta pegada, alternativa A faltante y alternativas C/D/E de otra pregunta; clave A no verificable','Campylobacter con diarrea febril: azitromicina cuando requiere antibiótico.','infecto-08 Toxicoinfección alimentaria / Campylobacter'),
57:('CLAVE_ERRONEA','C','media','Diarrea febril de 7 días por Campylobacter: clave probióticos contradice la práctica actual y Ene 2023 P76 (azitromicina)','Campylobacter con fiebre y 7 días de evolución se trata con azitromicina; los probióticos no son tratamiento.','infecto-08 Toxicoinfección alimentaria / Campylobacter (REVISION_CONTENIDO)'),
}
sp={'gastro':'Gastroenterología','reuma':'Reumatología','infecto':'Infectología','orl':'Otorrinolaringología'}
rows=[]
for i,q in enumerate(d):
    c=q['codes']; code=c[0].split()[0]; m=re.search(r'\[(\w+)-',c[0]); esp=sp.get(m.group(1),m.group(1)) if m else ''
    if i in S: e,p,cf,mo,ex,fu=S[i]; kp=p
    else:
        e='OK';kp=q['correcta'];cf='alta' if q['conf']>=0.7 else 'media';mo='Coherente con el cuadro y la explicación';ex='';fu=re.sub(r'^.*?\[(.*)\]$',r'\1',c[0]).replace(';',',')
    row=[q['recTag'],q['year'],'|'.join(x.split()[0] for x in c),esp,e,q['correcta'],kp,cf,mo,ex,fu]
    rows.append([str(x).replace(';',',').replace('\n',' ') for x in row])
with open('out6.csv','w',newline='') as f: csv.writer(f,delimiter=';').writerows(rows)
print(len(rows))
from collections import Counter;print(Counter(r[4] for r in rows))
