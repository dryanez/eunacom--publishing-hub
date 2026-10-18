// Clase 18.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo tomas la muestra, cuándo tratas y cuándo pides imágenes',
      say: 'Bienvenido a la clase de infección del tracto urinario en pediatría. Hoy vas a aprender a distinguirla de otras causas de fiebre en el lactante, a elegir bien cómo tomar la muestra de orina, y a saber cuándo pedir imágenes después del episodio. Es un tema de alta frecuencia en el examen, con varias preguntas reales que vamos a revisar. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología y clínica',
      title: '¿Por qué se infecta la vía urinaria?',
      nodes: [
        { id: 'eco', col: 0, row: 0, k: 'cause', t: 'Escherichia coli', s: 'Responsable de más del 80%' },
        { id: 'fac', col: 0, row: 2, k: 'cause', t: 'Fimosis y mal vaciamiento', s: 'Facilitan que la bacteria suba' },
        { id: 'sub', col: 1, row: 1, k: 'mech', t: 'Asciende por la uretra', s: 'Coloniza la vejiga y el riñón' },
        { id: 'lac', col: 2, row: 0, k: 'effect', t: 'Lactante: fiebre sin foco', s: 'Vómitos, decaimiento e irritabilidad' },
        { id: 'pre', col: 2, row: 2, k: 'effect', t: 'Preescolar: disuria', s: 'Polaquiuria y enuresis reciente' },
        { id: 'pie', col: 3, row: 1, k: 'risk', t: 'Si sube al riñón: pielonefritis', s: 'Fiebre alta y compromiso del estado general' },
      ],
      edges: [
        { from: 'eco', to: 'sub' },
        { from: 'fac', to: 'sub', label: 'favorecen' },
        { from: 'sub', to: 'lac' },
        { from: 'sub', to: 'pre' },
        { from: 'sub', to: 'pie', label: 'si progresa' },
      ],
      steps: [
        { show: ['eco'], note: 'El patógeno indiscutido',
          say: 'Empecemos por la causa. La bacteria que casi siempre está detrás de una infección urinaria en el niño es la Escherichia coli, responsable de más del ochenta por ciento de los casos.' },
        { show: ['fac'], note: 'Guarda la idea del reflujo',
          say: 'Hay factores que facilitan que esa bacteria suba: la fimosis en el niño, el reflujo vesicoureteral y el mal vaciamiento de la vejiga. Acuérdate del reflujo, porque vuelve más adelante en la clase.' },
        { show: ['sub'], note: 'El ascenso explica la clínica',
          say: 'Y por ahí sube: la bacteria entra por la uretra y coloniza la vía urinaria. Ese ascenso es lo que explica todo lo que viene.' },
        { show: ['lac'], note: 'Se disfraza de fiebre sin foco',
          say: 'Fíjate en cómo se presenta según la edad. En el lactante que todavía no tiene palabras para contarte que le duele, la infección se disfraza de fiebre sin foco, con vómitos, decaimiento e irritabilidad.' },
        { show: ['pre'], note: 'El preescolar sí te cuenta los síntomas',
          say: 'En el preescolar que ya controla esfínteres, en cambio, te va a contar los síntomas clásicos: disuria, polaquiuria, y a veces una enuresis que antes no tenía.' },
        { show: ['pie'], note: 'La diferencia que decide el tratamiento',
          say: 'Y si esa bacteria sigue subiendo y llega al riñón, ya no es una simple cistitis: es una pielonefritis, con fiebre alta y compromiso del estado general. Esa diferencia decide todo el tratamiento, y la vemos ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿Cómo tomas la muestra de orina?',
      cards: [
        { title: 'Sin control de esfínteres', tag: 'Lactante', kind: 'criteria', items: [
          { t: 'Sondeo vesical', d: 'Método de elección: 10.000 UFC o más',
            say: 'Si tu paciente no controla esfínteres, el método de elección es el sondeo vesical estéril: seguro, y positivo desde diez mil unidades formadoras de colonias por mililitro.' },
          { t: 'Punción suprapúbica', d: 'Estándar de oro: cualquier bacteria cuenta',
            say: 'La punción suprapúbica es el estándar de oro, y la prefieres en el recién nacido o si hay una fimosis muy cerrada. Ahí basta una sola colonia para considerarlo positivo.' },
        ] },
        { title: 'Bolsa recolectora', tag: 'La trampa clásica', kind: 'alert', items: [
          { t: 'Hasta 85% de falsos positivos', d: 'Nunca confirma ni trata una ITU',
            say: 'Y aquí viene la trampa que más se repite en el examen: la bolsa recolectora tiene hasta un ochenta y cinco por ciento de falsos positivos, por contaminación de la piel. Nunca inicies un tratamiento con un urocultivo tomado de bolsa.' },
          { t: 'Solo sirve si sale normal', d: 'Ahí sí descarta la infección',
            say: 'Su único valor es al revés: si el sedimento de la bolsa sale completamente normal, ahí sí puedes usarla para descartar la infección. Esa regla es justo lo que preguntan.' },
        ] },
        { title: 'Con control de esfínteres', tag: 'Preescolar', kind: 'normal', items: [
          { t: 'Segundo chorro limpio', d: '100.000 UFC o más confirma',
            say: 'Si el niño ya controla esfínteres, tomas la muestra por segundo chorro miccional limpio, con aseo genital previo con agua, y aquí subes la exigencia a cien mil colonias o más.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Técnica',
      title: 'Cateterismo vesical en el niño',
      nodes: [
        { id: 'ind', col: 0, row: 1, k: 'start', t: 'Indicación', s: 'Urocultivo en quien no controla esfínteres' },
        { id: 'mat', col: 1, row: 1, k: 'mech', t: 'Material estéril', s: 'Nelaton 6–8 Fr; 5 Fr en recién nacido' },
        { id: 'nin', col: 2, row: 0, k: 'good', t: 'Niña', s: 'Meato sobre el introito; 2–3 cm' },
        { id: 'var', col: 2, row: 2, k: 'good', t: 'Varón', s: 'Pene perpendicular, tracción suave' },
        { id: 'rec', col: 3, row: 1, k: 'alert', t: 'Descartar primeras gotas', s: 'Frasco estéril, procesar en 1 hora' },
      ],
      edges: [
        { from: 'ind', to: 'mat' }, { from: 'mat', to: 'nin' }, { from: 'mat', to: 'var' },
        { from: 'nin', to: 'rec' }, { from: 'var', to: 'rec' },
      ],
      steps: [
        { show: ['ind'], note: 'El método de elección en el lactante',
          say: 'Ya dijimos que el sondeo vesical es el método de elección en el niño que no controla esfínteres. Además del urocultivo, lo usas para medir la diuresis, en la retención aguda y para estudios como la uretrocistografía.' },
        { show: ['mat'], note: 'Todo estéril, lavado de manos y antisepsia',
          say: 'Usas una sonda de Nelaton de seis a ocho French, y de cinco en el recién nacido, con guantes y material estériles. Te lavas las manos, haces la antisepsia genital con suero o clorhexidina acuosa, y lubricas con material estéril.' },
        { show: ['nin'], note: 'Posición de rana, meato sobre el introito',
          say: 'En la niña, la dejas en decúbito con las piernas en rana, separas los labios menores, identificas el meato, que está sobre el introito vaginal, y avanzas dos a tres centímetros hasta que salga orina.' },
        { show: ['var'], note: 'Sin forzar ante la resistencia',
          say: 'En el varón, retraes suavemente el prepucio y sostienes el pene perpendicular al cuerpo, con una tracción suave que endereza la uretra. Si sientes resistencia en el esfínter externo, mantienes una presión suave y nunca fuerzas.' },
        { show: ['rec'], note: 'Con sangre en el meato, antes uretrografía',
          say: 'Descartas las primeras gotas y recoges el resto en un frasco estéril, que se procesa antes de una hora o se refrigera. Las complicaciones son infección, trauma uretral y falsa vía, y si hay sangre en el meato tras un trauma, no lo haces: primero va una uretrografía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Orina completa',
      title: 'Cómo interpretar la orina del niño',
      cards: [
        { title: 'Tira reactiva', tag: 'Orienta a ITU', kind: 'key', items: [
          { t: 'Esterasa leucocitaria y nitritos', d: 'Ambos negativos hacen improbable la ITU',
            say: 'Partamos por la tira reactiva. La esterasa leucocitaria marca leucocituria, y los nitritos marcan bacterias que reducen nitratos. Los nitritos son muy específicos, pero poco sensibles en el lactante, porque la orina pasa poco tiempo en la vejiga. Si ambos son negativos, la infección urinaria es improbable.' },
        ] },
        { title: 'Sedimento', tag: 'Qué es significativo', kind: 'criteria', items: [
          { t: 'Más de 5 leucocitos por campo', d: 'Bacterias suben la probabilidad; cilindros: pielonefritis',
            say: 'En el sedimento, la leucocituria es significativa con más de cinco leucocitos por campo de cuarenta aumentos. Las bacterias aumentan la probabilidad de infección, y los cilindros leucocitarios sugieren pielonefritis.' },
          { t: 'Hematuria glomerular o no', d: 'Dismórficos y cilindros hemáticos: glomerular',
            say: 'Con más de cinco hematíes por campo, hay hematuria. Es glomerular si hay hematíes dismórficos, cilindros hemáticos, orina color té y proteinuria, como en la glomerulonefritis postestreptocócica. Si los hematíes son normales, es no glomerular: litiasis, hipercalciuria, infección o malformaciones.' },
        ] },
        { title: 'Proteinuria y límites', tag: 'No sobreinterpretes', kind: 'alert', items: [
          { t: 'Relación proteína/creatinina', d: 'Normal < 0,2; > 2 mg/mg es rango nefrótico',
            say: 'La proteinuria se cuantifica con la relación proteína creatinina en una muestra aislada: lo normal es menos de cero coma dos, y más de dos es rango nefrótico. La proteinuria ortostática es benigna.' },
          { t: 'La orina sola no diagnostica ITU', d: 'Siempre urocultivo; la bolsa solo descarta',
            say: 'Y recuerda los límites: en una muestra de bolsa solo sirve un examen normal, que descarta. La hidratación, los antibióticos previos y la contaminación modifican el resultado, y el diagnóstico de infección urinaria siempre requiere urocultivo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cistitis o pielonefritis: cambia el antibiótico',
      cards: [
        { title: 'Cistitis o ITU baja', tag: 'Sin fiebre', kind: 'pharma', items: [
          { t: 'Cefadroxilo oral', d: '3 a 5 días',
            say: 'Si es una cistitis, sin fiebre, el antibiótico de elección es el cefadroxilo oral, por tres a cinco días.' },
          { t: 'Nitrofurantoína: solo aquí', d: 'Nunca en la ITU febril',
            say: 'La nitrofurantoína también sirve, pero solo en esta forma baja. Acuérdate de esto para el examen: la nitrofurantoína nunca se usa en la ITU febril, porque no alcanza el parénquima renal.' },
        ] },
        { title: 'Pielonefritis o ITU febril', tag: 'Con fiebre', kind: 'alert', items: [
          { t: 'Ambulatorio: cefadroxilo oral', d: '7 a 10 días',
            say: 'Si hay fiebre, es una pielonefritis, y el tratamiento cambia. Si el niño tiene más de tres meses, tolera la vía oral y se ve con buen estado general, tratas ambulatorio con el mismo cefadroxilo, pero esta vez por siete a diez días.' },
          { t: 'Hospitalizar si es grave', d: 'Menor de 3 meses, vómitos, tóxico',
            say: 'Pero si es menor de tres meses, vomita todo, o se ve tóxico, ahí lo hospitalizas y usas cefotaxima o ceftriaxona endovenosa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Urocultivo',
      title: 'Antibiograma y resistencia en Chile',
      cards: [
        { title: 'Cómo leerlo', tag: 'S, I, R', kind: 'key', items: [
          { t: 'Sensible, intermedio, resistente', d: 'Elige el de menor espectro con buen nivel urinario',
            say: 'El antibiograma informa cada antibiótico como sensible, intermedio o resistente. Eliges el sensible, de menor espectro y con buena concentración en orina o en el tejido, y ajustas el esquema empírico a las cuarenta y ocho a setenta y dos horas.' },
          { t: 'Dos o más gérmenes: contaminación', d: 'Se repite; no se trata la bacteriuria asintomática',
            say: 'Un cultivo con dos o más gérmenes sugiere contaminación y se repite. Y la bacteriuria asintomática no se trata.' },
        ] },
        { title: 'Lo que pasa en Chile', tag: 'E. coli resistente', kind: 'alert', items: [
          { t: 'Ampicilina y cotrimoxazol', d: 'Resistencia de 50–60% y 30–40%',
            say: 'En Chile la E. coli urinaria es muy resistente a la ampicilina, de cincuenta a sesenta por ciento, y al cotrimoxazol, de treinta a cuarenta. Por eso no son de primera línea.' },
          { t: 'BLEE: aminoglucósidos o carbapenémicos', d: 'Crece la producción de betalactamasas',
            say: 'La resistencia a cefalosporinas de primera generación es menor, pero crecen las betalactamasas de espectro extendido, y ahí se usan aminoglucósidos o carbapenémicos.' },
        ] },
        { title: 'Si no mejora', tag: '48 a 72 horas', kind: 'criteria', items: [
          { t: 'Nitrofurantoína: no en pielonefritis', d: 'Tampoco frente a Proteus',
            say: 'Y de nuevo la nitrofurantoína: no sirve en pielonefritis, porque no alcanza niveles en el tejido, ni frente a Proteus. Si no hay respuesta clínica a las cuarenta y ocho a setenta y dos horas con un antibiótico sensible, buscas obstrucción o absceso con una ecografía.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Estudio por imágenes',
      title: '¿Qué pides después del primer episodio febril?',
      nodes: [
        { id: 'eco', col: 0, row: 1, k: 'mech', t: 'Ecografía renal y vesical', s: 'A todos, tras el primer episodio' },
        { id: 'ucg', col: 1, row: 0, k: 'q', t: '¿Eco alterada o ITU atípica?', s: 'O si se repite' },
        { id: 'ucr', col: 2, row: 0, k: 'refer', t: 'Uretrocistografía miccional', s: 'Busca el reflujo vesicoureteral' },
        { id: 'dms', col: 2, row: 2, k: 'risk', t: 'Cintigrama DMSA', s: 'A los seis meses' },
      ],
      edges: [
        { from: 'eco', to: 'ucg' },
        { from: 'ucg', to: 'ucr', label: 'sí' },
        { from: 'eco', to: 'dms', label: 'siempre que hubo fiebre' },
      ],
      steps: [
        { show: ['eco'], note: 'Se pide a todos, sin excepción',
          say: 'Ahora, ¿qué haces después del primer episodio? A todo niño con una infección urinaria febril comprobada le pides una ecografía renal y vesical.' },
        { show: ['ucg'], note: 'Solo si hay una señal de alarma',
          say: 'Y esa ecografía te hace una pregunta: ¿salió alterada, o el cuadro fue atípico o recurrente?' },
        { show: ['ucr'], note: 'El examen del reflujo',
          say: 'Si la respuesta es sí, el siguiente paso es la uretrocistografía miccional, el examen que busca y clasifica el reflujo vesicoureteral, la malformación que más se asocia a este cuadro.' },
        { show: ['dms'], note: 'Busca la cicatriz permanente',
          say: 'Y en paralelo, a los seis meses del episodio agudo, pides un cintigrama renal con DMSA, que muestra si quedó una cicatriz permanente en el riñón.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Malformaciones nefrourológicas',
      title: 'Cuándo sospecharlas y qué estudio pedir',
      cards: [
        { title: 'Las más frecuentes', tag: '3 a 4 por 1.000 recién nacidos', kind: 'criteria', items: [
          { t: 'Estenosis pieloureteral y reflujo', d: 'La primera causa de hidronefrosis neonatal es la estenosis',
            say: 'Las malformaciones nefrourológicas afectan a tres a cuatro de cada mil recién nacidos, y muchas se pesquisan en la ecografía prenatal. La más frecuente como causa de hidronefrosis neonatal es la estenosis de la unión pieloureteral; después el reflujo vesicoureteral, el megauréter, la duplicidad pieloureteral y el riñón multiquístico displásico.' },
          { t: 'Válvulas de uretra posterior', d: 'Varón con chorro débil e hidronefrosis bilateral',
            say: 'La que no puedes olvidar son las válvulas de uretra posterior: un varón con chorro débil, vejiga engrosada e hidronefrosis bilateral, con riesgo de insuficiencia renal y de hipoplasia pulmonar.' },
        ] },
        { title: 'Cuándo sospechar', tag: 'Pistas postnatales', kind: 'key', items: [
          { t: 'Hidronefrosis prenatal, arteria única', d: 'Ano imperforado, masa abdominal, falla de medro',
            say: 'Sospechas ante una hidronefrosis prenatal, una arteria umbilical única, malformaciones asociadas como el ano imperforado, una masa abdominal, la primera infección urinaria febril, un chorro débil, hipertensión o falla de medro.' },
        ] },
        { title: 'Estudio y conducta', tag: 'Sospecha, inicial, derivar', kind: 'pharma', items: [
          { t: 'Eco, uretrocistografía, cintigrama', d: 'Eco postnatal después de los 5–7 días de vida',
            say: 'El estudio parte con la ecografía renal y vesical, que si es postnatal se hace después de los cinco a siete días de vida, por la oliguria fisiológica inicial. Después, uretrocistografía para reflujo y válvulas, y cintigrama renal.' },
          { t: 'Profilaxis y derivación', d: 'Válvulas o hidronefrosis bilateral grave: urgente',
            say: 'Con una hidronefrosis significativa, inicias profilaxis antibiótica mientras completas el estudio y derivas a nefrología o urología infantil. Las válvulas de uretra posterior y la hidronefrosis bilateral grave son derivación urgente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Reflujo vesicoureteral',
      title: 'Grados, profilaxis y seguimiento',
      cards: [
        { title: 'Los cinco grados', tag: 'Uretrocistografía', kind: 'criteria', items: [
          { t: 'Del grado I al V', d: 'Del uréter solo a dilatación severa',
            say: 'El reflujo vesicoureteral es el paso de orina desde la vejiga hacia atrás, al uréter, y se diagnostica con la uretrocistografía miccional. Mira este esquema de los cinco grados: en el primero solo llega al uréter, en el segundo a la pelvis sin dilatación, y en el tercero hay dilatación leve a moderada. El cuarto suma tortuosidad ureteral, y el quinto, dilatación severa.',
            photo: { src: 'biblioteca/15_pediatria/ped-13/S1_grados-rvu__propio.svg', label: 'Grados del reflujo', at: 'Mira este esquema', credit: 'Dibujo propio (esquema)' } },
          { t: 'Los grados I a III se resuelven', d: 'Cerca del 80% en 5 años; IV y V, rara vez',
            say: 'Los grados uno a tres suelen resolverse solos, cerca del ochenta por ciento en cinco años. Los grados cuatro y cinco, rara vez. Esta cistouretrografía muestra justamente un reflujo bilateral de alto grado, con los uréteres muy dilatados y tortuosos.',
            photo: { src: 'biblioteca/15_pediatria/ped-13/02_cistouretrografia_rvu__harrison_p2402.jpg', label: 'Reflujo de alto grado', at: 'Esta cistouretrografía', credit: 'Harrison 21.ª ed., Fig. 316-4A' } },
        ] },
        { title: 'Manejo', tag: 'Profilaxis continua', kind: 'pharma', items: [
          { t: 'Corregir el vaciamiento', d: 'Disfunción vesical y estreñimiento',
            say: 'El manejo parte por corregir la disfunción vesical y el estreñimiento, y mantener una micción regular.' },
          { t: 'Profilaxis en grados III a V', d: 'Cefadroxilo 10 mg/kg/día; nitrofurantoína nocturna',
            say: 'Indicas profilaxis antibiótica continua en dosis bajas en los grados tres a cinco, y en los menores si hay infecciones recurrentes: cefadroxilo diez miligramos por kilo al día o nitrofurantoína uno a dos miligramos por kilo en la noche, y amoxicilina en menores de dos meses. Se mantiene hasta que se resuelva o controle esfínteres.' },
        ] },
        { title: 'Cirugía y control', tag: 'Grados IV y V', kind: 'alert', items: [
          { t: 'Endoscópico o reimplante', d: 'IV–V, recurrentes pese a profilaxis, cicatrices',
            say: 'El tratamiento endoscópico o el reimplante ureteral quedan para los grados cuatro y cinco, las infecciones recurrentes pese a la profilaxis, las cicatrices progresivas o la intolerancia a la profilaxis.' },
          { t: 'Control por nefropatía por reflujo', d: 'Urocultivo, eco anual, DMSA, presión y proteinuria',
            say: 'Y controlas con urocultivo ante fiebre, ecografía anual, DMSA, presión arterial y proteinuria, por el riesgo de nefropatía por reflujo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cintigrama renal',
      title: 'DMSA y MAG3: qué muestran',
      cards: [
        { title: 'DMSA', tag: 'Estudio estático', kind: 'key', items: [
          { t: 'Cicatrices y función relativa', d: 'Función normal 45–55% por riñón',
            say: 'El DMSA es un estudio estático que mira la corteza renal funcionante. Muestra las cicatrices corticales, que son defectos fijos con pérdida de volumen, y la función relativa de cada riñón, normal entre cuarenta y cinco y cincuenta y cinco por ciento. Mira este cintigrama: en uno de los riñones hay un defecto, una zona que no capta, que es una cicatriz cortical.',
            photo: { src: 'biblioteca/15_pediatria/ped-13/03_dmsa-cicatriz__atlas.jpg', label: 'DMSA con cicatriz cortical', at: 'Mira este cintigrama', credit: 'Atlas EUNACOM 2026' } },
          { t: 'Al menos 6 meses después', d: 'Antes, el defecto puede ser reversible',
            say: 'Para diagnosticar cicatrices lo haces al menos seis meses después de la pielonefritis, porque en la fase aguda los defectos pueden ser reversibles. Se indica en infección febril atípica o recurrente, reflujo de alto grado y sospecha de displasia o ectopia.' },
        ] },
        { title: 'MAG3 con furosemida', tag: 'Estudio dinámico', kind: 'criteria', items: [
          { t: 'Perfusión, función y drenaje', d: 'T½ > 20 min: obstrucción; < 10 min: normal',
            say: 'El eme a ge tres con furosemida es dinámico y evalúa perfusión, función y drenaje. Ante una hidronefrosis, una curva que no desciende tras el diurético, con una vida media mayor a veinte minutos, indica obstrucción. Menos de diez minutos es normal, y entre diez y veinte es indeterminado.' },
        ] },
        { title: 'Tu rol', tag: 'Interpretar el informe', kind: 'normal', items: [
          { t: 'Saber leer el informe', d: 'Función diferencial, cicatrices, curva de drenaje',
            say: 'Como médico general tu tarea es saber emplear el informe: la función diferencial, la presencia y localización de cicatrices, y la curva de drenaje. La radiación es baja, y el niño debe estar bien hidratado.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "La orina que sube",
      images: [
        { src: 'animaciones/ped-13/A1_reflujo_vesicoureteral.mp4', label: "Reflujo vesicoureteral", credit: "Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios" },
      ],
      steps: [
        { note: "Del reflujo a la cicatriz",
          say: "Mira cómo la bacteria sube por la uretra hasta la vejiga. Cuando el niño orina y hay reflujo, la orina no sale solo hacia abajo: sube por el uréter, con las bacterias, hasta el riñón. Ahí se produce la pielonefritis, y con las repeticiones queda una cicatriz. Tras el primer episodio febril pides ecografía; si sale alterada, uretrocistografía miccional; y a los seis meses, DMSA." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos toda la decisión clínica en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Bolsa recolectora alterada', 'Confirmar con sondeo o punción', 'Tratar directo con ese resultado'],
          say: 'Repasemos las trampas. Bolsa recolectora alterada: confirmas con sondeo o punción. El error es tratar directo con ese resultado.' },
        { cells: ['Cistitis sin fiebre', 'Cefadroxilo o nitrofurantoína oral', 'Usar nitrofurantoína en la febril'],
          say: 'Cistitis sin fiebre: cefadroxilo o nitrofurantoína oral. El error es usar la nitrofurantoína también en la forma febril.' },
        { cells: ['Pielonefritis, buen estado, mayor de 3 meses', 'Cefadroxilo oral ambulatorio', 'Hospitalizar a todos por igual'],
          say: 'Pielonefritis con buen estado y más de tres meses: cefadroxilo oral ambulatorio. El error es hospitalizar a todos por igual.' },
        { cells: ['Primer episodio de ITU febril', 'Ecografía renal y vesical a todos', 'Pedirla solo si hay síntomas nuevos'],
          say: 'Primer episodio de ITU febril: ecografía a todos. El error es pedirla solo si aparecen síntomas nuevos.' },
        { cells: ['Ecografía alterada o ITU atípica', 'Uretrocistografía miccional', 'Saltarse el estudio del reflujo'],
          say: 'Y si la ecografía sale alterada o el cuadro fue atípico: uretrocistografía. El error es saltarse el estudio del reflujo.' },
        { cells: ['Tira con esterasa y nitritos negativos', 'ITU improbable; el diagnóstico es con urocultivo', 'Diagnosticar ITU solo con la tira'],
          say: 'Una tira con esterasa leucocitaria y nitritos negativos hace improbable la infección, pero el diagnóstico siempre es con urocultivo. El error es confirmar o descartar solo con la tira, sobre todo en el lactante, donde los nitritos fallan.' },
        { cells: ['Antibiótico empírico en ITU', 'Cefalosporina oral y ajustar al antibiograma', 'Ampicilina o cotrimoxazol por rutina'],
          say: 'Para el antibiótico empírico: una cefalosporina oral, y ajustas con el antibiograma a las cuarenta y ocho a setenta y dos horas. El error es partir con ampicilina o cotrimoxazol, por la resistencia de la E. coli en Chile.' },
        { cells: ['Hidronefrosis prenatal o chorro débil en varón', 'Sospechar malformación; derivar si hay válvulas', 'Tratarlo como una ITU simple'],
          say: 'Y ante una hidronefrosis prenatal o un varón con chorro débil, sospechas una malformación, como las válvulas de uretra posterior, y derivas de urgencia. El error es tratarlo como una infección urinaria simple.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 7 meses, sin antecedentes, con fiebre de hasta 39 °C de 2 días de evolución, decaimiento e inapetencia, sin síntomas respiratorios ni digestivos. Examen físico reactivo, salvo por la fiebre. Se instala bolsa recolectora perineal: el sedimento muestra leucocitos y bacterias abundantes.',
      question: '¿Cuál es la conducta más adecuada antes de iniciar el tratamiento antibiótico?',
      options: [
        { letter: 'A', text: 'Iniciar cefadroxilo oral con el resultado de la bolsa recolectora' },
        { letter: 'B', text: 'Realizar sondeo vesical para tomar un urocultivo confirmatorio' },
        { letter: 'C', text: 'Esperar 48 horas sin tratamiento a que la bolsa confirme el diagnóstico' },
        { letter: 'D', text: 'Solicitar cintigrama DMSA de urgencia' },
        { letter: 'E', text: 'Dar el alta, porque la bolsa recolectora siempre contamina' },
      ],
      correct: 'B',
      explanation: 'La bolsa recolectora tiene una tasa de falsos positivos demasiado alta para confirmar o tratar. Con un sedimento alterado, la norma exige confirmar con sondeo vesical o punción suprapúbica antes de iniciar antibióticos.',
      say: {
        stem: 'Vamos con un caso. Lactante de siete meses, sin antecedentes, con fiebre de hasta treinta y nueve grados desde hace dos días, decaimiento e inapetencia, sin síntomas respiratorios ni digestivos. Está reactiva, salvo por la fiebre. Le instalan una bolsa recolectora perineal, y el sedimento muestra leucocitos y bacterias abundantes.',
        question: '¿Cuál es la conducta más adecuada antes de iniciar el tratamiento antibiótico?',
        options: 'Tienes cinco opciones: tratar directo con el resultado de la bolsa, hacer un sondeo vesical para confirmar, esperar cuarenta y ocho horas sin tratar, pedir un cintigrama DMSA de urgencia, o dar de alta asumiendo que la bolsa siempre contamina. Piénsalo.',
        answer: 'Es la B. La bolsa recolectora nunca confirma ni descarta cuando sale alterada: tienes que confirmar con una muestra fidedigna, por sondeo vesical o punción suprapúbica, antes de tratar. Tratar directo con la bolsa es la trampa más clásica del tema, y esperar sin hacer nada solo retrasa el diagnóstico en una lactante febril.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 156',
      stem: 'Niña de 8 meses con cuadro febril hasta 39,2 °C, sin otros síntomas ni alteraciones al examen físico. Se realiza un urocultivo por recolector, que resulta positivo para Escherichia coli sensible, con 45.000 unidades formadoras de colonias por mililitro.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tratar con cefadroxilo oral' },
        { letter: 'B', text: 'Tratar con nitrofurantoína oral' },
        { letter: 'C', text: 'Tratar con amoxicilina oral' },
        { letter: 'D', text: 'Solicitar hemograma, VHS y PCR' },
        { letter: 'E', text: 'Repetir el urocultivo por sondeo vesical' },
      ],
      correct: 'E',
      explanation: 'El urocultivo por bolsa recolectora solo es positivo si supera las 100.000 UFC por mililitro. Con 45.000, el único paso aceptable es repetirlo con una técnica fidedigna: sondeo vesical.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Niña de ocho meses con fiebre hasta treinta y nueve coma dos, sin otros síntomas ni hallazgos al examen. El urocultivo, tomado por bolsa recolectora, sale positivo para Escherichia coli, con cuarenta y cinco mil colonias por mililitro.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tratar con cefadroxilo, tratar con nitrofurantoína, tratar con amoxicilina, pedir hemograma y reactantes, o repetir el urocultivo por sondeo vesical.',
        answer: 'Es la E. El corte para que un urocultivo de bolsa recolectora cuente como positivo es cien mil colonias o más. Con cuarenta y cinco mil, ese resultado no alcanza el umbral, y la única opción aceptable es repetirlo con una técnica que no se contamine: el sondeo vesical.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 50',
      stem: 'Niño de 3 años, con antecedente de fimosis, con fiebre hasta 39,5 °C desde hace 48 horas, asociada a vómitos y malestar general. Examen cardiopulmonar y abdominal sin alteraciones relevantes. Sedimento de orina con 20 glóbulos rojos y 50 glóbulos blancos por campo, bacterias en moderada cantidad; hemograma con 14.000 leucocitos por milímetro cúbico y VHS de 42 milímetros por hora.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Balanopostitis' },
        { letter: 'B', text: 'Neumonía adquirida en la comunidad' },
        { letter: 'C', text: 'Influenza' },
        { letter: 'D', text: 'Síndrome hemolítico urémico' },
        { letter: 'E', text: 'Pielonefritis aguda' },
      ],
      correct: 'E',
      explanation: 'La fimosis puede orientar a balanopostitis o a pielonefritis; la balanopostitis da alteraciones cutáneas del prepucio sin fiebre alta. Aquí la leucocituria elevada junto con la fiebre define la pielonefritis aguda.',
      say: {
        stem: 'Una segunda pregunta real, del EUNACOM de julio de dos mil veinticuatro. Niño de tres años, con fimosis, con fiebre hasta treinta y nueve coma cinco desde hace cuarenta y ocho horas, con vómitos y malestar general, y examen cardiopulmonar y abdominal normales. El sedimento de orina muestra cincuenta glóbulos blancos por campo, y el hemograma sale con catorce mil leucocitos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: balanopostitis, neumonía, influenza, síndrome hemolítico urémico, o pielonefritis aguda.',
        answer: 'Es la E, pielonefritis aguda. La fimosis te puede hacer dudar entre una balanopostitis y una pielonefritis, pero la balanopostitis da alteraciones visibles en el prepucio y no fiebre alta como esta. Aquí la leucocituria tan elevada, junto con la fiebre y el compromiso del estado general, apunta directo al riñón.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.065 · Malformaciones urogenitales",
      "stem": "Niña de 2 años, con su segunda infección urinaria febril en 6 meses, confirmada por sondeo vesical y ya tratada con buena respuesta. La ecografía renal y vesical muestra dilatación de la pelvis renal y del uréter izquierdos.",
      "question": "¿Cuál es el examen más adecuado para continuar el estudio?",
      "options": [
        {
          "letter": "A",
          "text": "Cintigrama renal con DMSA en fase aguda"
        },
        {
          "letter": "B",
          "text": "Pielografía endovenosa"
        },
        {
          "letter": "C",
          "text": "Urocultivo mensual por 1 año"
        },
        {
          "letter": "D",
          "text": "Uretrocistografía miccional"
        },
        {
          "letter": "E",
          "text": "TAC de abdomen con contraste"
        }
      ],
      "correct": "D",
      "explanation": "Una ecografía alterada (ureterohidronefrosis) o una infección urinaria febril recurrente obligan a buscar reflujo vesicoureteral, la malformación más asociada a infección urinaria. La uretrocistografía miccional lo diagnostica y clasifica en grados.",
      "say": {
        "stem": "Niña de dos años, con su segunda infección urinaria febril en seis meses, confirmada por sondeo y ya tratada. La ecografía renal y vesical muestra dilatación de la pelvis y del uréter del lado izquierdo.",
        "question": "¿Cuál es el examen más adecuado para seguir el estudio?",
        "options": "Las opciones: cintigrama con DMSA en fase aguda, pielografía endovenosa, urocultivo mensual, uretrocistografía miccional o escáner de abdomen. Piénsalo.",
        "answer": "Es la D. Infección recurrente y un uréter dilatado te hacen pensar en reflujo vesicoureteral, y el examen que lo confirma y lo gradúa es la uretrocistografía miccional. El DMSA tienta, pero mide cicatrices renales, no demuestra el reflujo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.003 · Ecotomografía abdominal",
      "stem": "Lactante de 10 meses, sin antecedentes, con su primer episodio de infección urinaria febril, confirmado por urocultivo tomado por sondeo vesical. Evolucionó afebril a las 36 horas de tratamiento y completó el antibiótico. No tiene antecedentes prenatales de malformaciones.",
      "question": "¿Cuál es el estudio de imágenes más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Ninguno, porque respondió bien al tratamiento"
        },
        {
          "letter": "B",
          "text": "Ecografía renal y vesical"
        },
        {
          "letter": "C",
          "text": "Uretrocistografía miccional como primer examen"
        },
        {
          "letter": "D",
          "text": "TAC de abdomen y pelvis"
        },
        {
          "letter": "E",
          "text": "Radiografía simple de abdomen"
        }
      ],
      "correct": "B",
      "explanation": "A todo niño con una primera infección urinaria febril comprobada se le pide ecografía renal y vesical, para buscar malformaciones y dilatación de la vía urinaria. La uretrocistografía se reserva para cuando la ecografía sale alterada o el cuadro es atípico o recurrente.",
      "say": {
        "stem": "Lactante de diez meses, sano, con su primera infección urinaria febril, confirmada por urocultivo tomado por sondeo. Se le quitó la fiebre a las treinta y seis horas y completó el tratamiento.",
        "question": "¿Cuál es el estudio de imágenes más adecuado?",
        "options": "Las opciones: ninguno porque respondió bien, ecografía renal y vesical, uretrocistografía como primer examen, escáner de abdomen, o radiografía simple. Piénsalo.",
        "answer": "Es la B. Después de una primera infección urinaria febril comprobada, a todos se les pide ecografía renal y vesical. No pedir nada porque respondió bien tienta, pero la buena respuesta no descarta una malformación de la vía urinaria."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.011 · Cultivos y antibiograma",
      "stem": "Un lactante de 8 meses con fiebre de 39 °C sin foco tiene orina completa con leucocituria y nitritos positivos. El urocultivo, tomado por cateterismo vesical, informa Escherichia coli 50.000 UFC/mL, sensible a cefalosporinas de primera generación y resistente a ampicilina.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Contaminación, porque es menor a 100.000 UFC/mL"
        },
        {
          "letter": "B",
          "text": "Es necesario un hemocultivo para confirmar"
        },
        {
          "letter": "C",
          "text": "Bacteriuria asintomática que no requiere tratamiento"
        },
        {
          "letter": "D",
          "text": "Debe repetirse con bolsa recolectora"
        },
        {
          "letter": "E",
          "text": "Infección urinaria confirmada"
        }
      ],
      "correct": "E",
      "explanation": "El punto de corte del urocultivo depende de la técnica: por punción suprapúbica cualquier recuento; por cateterismo vesical 10.000 UFC/mL o más (algunos usan 50.000); por segundo chorro 100.000 o más. Con fiebre, sedimento inflamatorio y 50.000 UFC/mL por cateterismo, la ITU está confirmada. El antibiograma permite ajustar el tratamiento, en este caso a cefalosporina.",
      "say": {
        "stem": "Un lactante de ocho meses con fiebre sin foco tiene orina inflamatoria y un urocultivo por sondeo con cincuenta mil colonias de E. coli.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: contaminación por ser menos de cien mil, pedir hemocultivo, bacteriuria asintomática, repetir con bolsa o infección urinaria confirmada. Piénsalo.",
        "answer": "Es la E. Por cateterismo vesical el corte es mucho menor que por segundo chorro, así que cincuenta mil colonias con fiebre confirman una infección urinaria. Pensar en contaminación tienta por el corte de cien mil, pero ese valor es para muestras de segundo chorro."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.5.003 · Cateterismo vesical",
      "stem": "Un lactante de 9 meses, sin control de esfínteres, presenta fiebre de 39 °C sin foco. Se decide estudiar una posible infección urinaria.",
      "question": "¿Cuál es el método más adecuado para obtener la muestra de urocultivo?",
      "options": [
        {
          "letter": "A",
          "text": "Cateterismo vesical con técnica estéril"
        },
        {
          "letter": "B",
          "text": "Bolsa recolectora adhesiva"
        },
        {
          "letter": "C",
          "text": "Recolección del pañal"
        },
        {
          "letter": "D",
          "text": "Segundo chorro espontáneo"
        },
        {
          "letter": "E",
          "text": "Orina de 24 horas"
        }
      ],
      "correct": "A",
      "explanation": "En niños sin control de esfínteres, el urocultivo debe tomarse por cateterismo vesical estéril (o punción suprapúbica), porque la bolsa recolectora tiene una alta tasa de contaminación: solo es útil si resulta negativa. El segundo chorro se usa en niños con control miccional. La técnica requiere aseo genital, sonda fina y desechar las primeras gotas.",
      "say": {
        "stem": "Un lactante de nueve meses sin control de esfínteres tiene fiebre sin foco y se estudiará una infección urinaria.",
        "question": "¿Cuál es el método más adecuado para el urocultivo?",
        "options": "Las opciones: cateterismo vesical estéril, bolsa recolectora, orina del pañal, segundo chorro o orina de veinticuatro horas. Piénsalo.",
        "answer": "Es la A. En un lactante sin control de esfínteres el urocultivo se toma por cateterismo vesical estéril. La bolsa recolectora tienta por ser menos invasiva, pero se contamina con frecuencia y un resultado positivo no es confiable."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.5.010 · Punción suprapúbica",
      "stem": "Un lactante de 2 meses con fiebre sin foco requiere urocultivo. No fue posible realizar cateterismo vesical por fimosis estrecha, por lo que se obtiene la muestra mediante punción suprapúbica, que informa Escherichia coli 2.000 UFC/mL.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Contaminación, porque el recuento es bajo"
        },
        {
          "letter": "B",
          "text": "Bacteriuria asintomática"
        },
        {
          "letter": "C",
          "text": "Requiere repetir con bolsa recolectora"
        },
        {
          "letter": "D",
          "text": "Infección urinaria confirmada, ya que por punción suprapúbica cualquier recuento es significativo"
        },
        {
          "letter": "E",
          "text": "Se necesitan más de 100.000 UFC/mL para confirmar"
        }
      ],
      "correct": "D",
      "explanation": "La punción suprapúbica obtiene orina directamente de la vejiga, normalmente estéril, por lo que cualquier recuento de bacterias gramnegativas es significativo. Se indica en lactantes cuando no es posible el cateterismo (fimosis estrecha, sinequias), preferentemente guiada por ecografía con vejiga llena. Los puntos de corte de mayor recuento son para cateterismo y segundo chorro.",
      "say": {
        "stem": "Un lactante de dos meses con fiebre sin foco tiene un urocultivo por punción suprapúbica con dos mil colonias de E. coli.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: contaminación, bacteriuria asintomática, repetir con bolsa, infección urinaria confirmada o necesita cien mil colonias. Piénsalo.",
        "answer": "Es la D. Por punción suprapúbica la orina debería ser estéril, así que cualquier recuento confirma la infección. Pensar en contaminación tienta por el recuento bajo, pero los cortes altos son para muestras de cateterismo o segundo chorro."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.4.017 · Urocultivo y antibiograma",
      "stem": "Una lactante de 8 meses, sin control de esfínter, presenta fiebre de 39 °C sin foco de 2 días de evolución. Se sospecha infección urinaria.",
      "question": "¿Cuál es el método más adecuado para obtener la muestra de urocultivo?",
      "options": [
        {
          "letter": "A",
          "text": "Bolsa recolectora adhesiva"
        },
        {
          "letter": "B",
          "text": "No es necesario urocultivo si la tira reactiva es positiva"
        },
        {
          "letter": "C",
          "text": "Muestra obtenida del pañal"
        },
        {
          "letter": "D",
          "text": "Orina de segundo chorro espontánea"
        },
        {
          "letter": "E",
          "text": "Cateterismo vesical (sondeo) con técnica estéril"
        }
      ],
      "correct": "E",
      "explanation": "En niños sin control de esfínter, el urocultivo se toma por cateterismo vesical (o punción suprapúbica) con técnica estéril. La bolsa recolectora tiene alta tasa de contaminación y falsos positivos; solo es útil si resulta negativa. El urocultivo es indispensable para confirmar la ITU y guiar el antibiótico; la tira reactiva solo orienta.",
      "say": {
        "stem": "Una lactante de ocho meses, sin control de esfínter, tiene dos días de fiebre alta sin foco y se sospecha infección urinaria.",
        "question": "¿Cuál es el método más adecuado para tomar el urocultivo?",
        "options": "Las opciones: bolsa recolectora, no cultivar si la tira es positiva, muestra del pañal, segundo chorro espontáneo o cateterismo vesical estéril. Piénsalo.",
        "answer": "Es la E. Sin control de esfínter, el urocultivo se toma por sondeo vesical estéril o punción suprapúbica. La bolsa recolectora tienta por no ser invasiva, pero se contamina mucho y da falsos positivos."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.007 · Cintigrama renal",
      "stem": "Lactante de 10 meses con una primera pielonefritis aguda por E. coli, tratada con buena respuesta. La ecografía renal fue normal.",
      "question": "¿Cuál es el examen indicado para detectar cicatrices renales y cuándo debe realizarse?",
      "options": [
        {
          "letter": "A",
          "text": "Cintigrama renal DMSA, 4 a 6 meses después de la infección"
        },
        {
          "letter": "B",
          "text": "Cintigrama renal DMSA durante la fase aguda en todos los casos"
        },
        {
          "letter": "C",
          "text": "Uretrocistografía miccional en las primeras 24 horas"
        },
        {
          "letter": "D",
          "text": "Pielo TAC de control al terminar el tratamiento"
        },
        {
          "letter": "E",
          "text": "Urografía de eliminación a los 2 meses"
        }
      ],
      "correct": "A",
      "explanation": "El cintigrama renal con DMSA es el examen de elección para detectar daño del parénquima renal. Para evaluar cicatrices se realiza 4 a 6 meses después de la pielonefritis, porque antes puede mostrar defectos inflamatorios reversibles. La uretrocistografía busca reflujo vesicoureteral y no se hace en la fase aguda.",
      "say": {
        "stem": "Lactante de diez meses que tuvo su primera pielonefritis, con buena respuesta y ecografía normal.",
        "question": "¿Qué examen busca cicatrices renales y cuándo?",
        "options": "Las opciones: DMSA a los cuatro a seis meses, DMSA en fase aguda a todos, uretrocistografía en las primeras horas, pielo TAC, o urografía. Piénsalo.",
        "answer": "Es la A. Cintigrama DMSA cuatro a seis meses después. Hacerlo en fase aguda tienta, pero muestra inflamación reversible y no cicatriz."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 20",
      "stem": "Un recién nacido de sexo masculino, con antecedente de pielectasia bilateral diagnosticada por ecografía obstétrica, presenta retraso en la eliminación de orina. La ecografía abdominal al tercer día de vida muestra hidroureteronefrosis bilateral asociada a una vejiga de paredes engrosadas.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Valvas uretrales posteriores"
        },
        {
          "letter": "B",
          "text": "Síndrome de Prune Belly"
        },
        {
          "letter": "C",
          "text": "Reflujo vésico-ureteral"
        },
        {
          "letter": "D",
          "text": "Vejiga neurogénica"
        },
        {
          "letter": "E",
          "text": "Megauréter congénito"
        }
      ],
      "correct": "A",
      "explanation": "Hidroureteronefrosis bilateral con vejiga de paredes engrosadas (de lucha) en un recién nacido varón con micción retrasada es una obstrucción infravesical: valvas uretrales posteriores. Se confirma con uretrocistografía miccional (uretra posterior dilatada) y se maneja con sonda vesical y resección endoscópica. El megauréter suele ser unilateral y sin vejiga de lucha.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Recién nacido varón con dilatación renal bilateral prenatal, que demora en orinar. La ecografía muestra hidroureteronefrosis bilateral y vejiga de paredes gruesas.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: valvas uretrales posteriores, síndrome de Prune Belly, reflujo vésico-ureteral, vejiga neurogénica o megauréter congénito. Piénsalo.",
        "answer": "Es la A. La dilatación bilateral con vejiga gruesa en un varón indica obstrucción bajo la vejiga, típica de valvas uretrales posteriores. El reflujo tienta porque también dilata ambos lados, pero no engrosa la pared vesical ni retrasa la micción."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.1.021 · Reflujo vésico ureteral",
      "stem": "Lactante de 8 meses cursa su segundo episodio de pielonefritis aguda por E. coli. La ecografía renal muestra dilatación pielocalicial bilateral leve. La uretrocistografía miccional muestra reflujo vésico-ureteral grado IV bilateral.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Profilaxis antibiótica continua y derivación a nefrología o urología infantil, con cintigrama DMSA para evaluar cicatrices"
        },
        {
          "letter": "B",
          "text": "Cirugía de reimplante ureteral inmediata"
        },
        {
          "letter": "C",
          "text": "Alta sin seguimiento, ya que el reflujo se resuelve siempre espontáneamente"
        },
        {
          "letter": "D",
          "text": "Repetir la uretrocistografía en 1 semana"
        },
        {
          "letter": "E",
          "text": "Tratamiento antibiótico solo durante los episodios febriles"
        }
      ],
      "correct": "A",
      "explanation": "El RVU de alto grado (IV a V) con ITU febril recurrente en un lactante tiene alto riesgo de cicatrices renales. Se indica profilaxis antibiótica (nitrofurantoína o cefadroxilo), DMSA diferido para evaluar daño parenquimatoso y manejo por especialista; la corrección endoscópica o quirúrgica se reserva para ITU de brecha o daño progresivo.",
      "say": {
        "stem": "Lactante de ocho meses con su segunda pielonefritis y reflujo vésico-ureteral grado cuatro bilateral en la uretrocistografía.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: profilaxis antibiótica con derivación y cintigrama, reimplante ureteral inmediato, alta sin seguimiento, repetir el estudio en una semana o antibiótico solo en los episodios. Piénsalo.",
        "answer": "Es la A. Un reflujo de alto grado con pielonefritis recurrente requiere profilaxis, evaluar cicatrices con cintigrama y seguimiento por especialista. La cirugía inmediata tienta por el alto grado, pero se reserva para infecciones de brecha o daño progresivo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.4.009 · Cintigrama renal",
      "stem": "Niña de 2 años que tuvo una pielonefritis aguda febril hace 5 meses, tratada adecuadamente. Su ecografía renal fue normal. Se desea evaluar si quedaron cicatrices en el parénquima renal.",
      "question": "¿Cuál es el examen de elección?",
      "options": [
        {
          "letter": "A",
          "text": "TAC de abdomen sin contraste"
        },
        {
          "letter": "B",
          "text": "Cintigrama renal con MAG3 y diurético"
        },
        {
          "letter": "C",
          "text": "Uretrocistografía miccional"
        },
        {
          "letter": "D",
          "text": "Urocultivo de control"
        },
        {
          "letter": "E",
          "text": "Cintigrama renal con DMSA (ácido dimercaptosuccínico)"
        }
      ],
      "correct": "E",
      "explanation": "El cintigrama estático con DMSA es el estándar para detectar cicatrices renales; se realiza 4 a 6 meses después de la pielonefritis para no confundir inflamación aguda con cicatriz. El cintigrama dinámico (MAG3 o DTPA con diurético) evalúa obstrucción y función diferencial con curva de eliminación. La uretrocistografía evalúa reflujo, no cicatrices.",
      "say": {
        "stem": "Niña de dos años que tuvo una pielonefritis hace cinco meses, con ecografía normal. Se quiere saber si quedaron cicatrices renales.",
        "question": "¿Cuál es el examen de elección?",
        "options": "Las opciones: TAC sin contraste, cintigrama MAG tres con diurético, uretrocistografía miccional, urocultivo o cintigrama con DMSA. Piénsalo.",
        "answer": "Es la E. El cintigrama con DMSA, hecho meses después de la infección, es el estándar para cicatrices. El cintigrama con MAG tres tienta por ser también cintigrama, pero mide drenaje y obstrucción, no cicatrices."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Según la edad', kind: 'key', items: [
          { t: 'Bolsa recolectora: solo descarta', d: 'Nunca confirma ni trata',
            say: 'Cerremos con las reglas de oro. La bolsa recolectora solo sirve para descartar si sale normal; nunca para confirmar ni tratar.' },
          { t: 'Confirmar con sondeo o punción', d: 'Según control de esfínteres',
            say: 'Para confirmar, usas sondeo vesical o punción suprapúbica en el que no controla esfínteres, y segundo chorro limpio en el que sí controla.' },
        ] },
        { title: 'Tratamiento', tag: 'Cambia con la fiebre', kind: 'pharma', items: [
          { t: 'Sin fiebre: cefadroxilo o nitrofurantoína', d: '3 a 5 días',
            say: 'Sin fiebre, cefadroxilo o nitrofurantoína por tres a cinco días.' },
          { t: 'Con fiebre: cefadroxilo, 7 a 10 días', d: 'Hospitaliza si es menor de 3 meses',
            say: 'Con fiebre, el mismo cefadroxilo pero por siete a diez días, salvo que sea menor de tres meses o se vea grave: ahí hospitalizas.' },
        ] },
        { title: 'Imágenes', tag: 'Después del episodio', kind: 'alert', items: [
          { t: 'Ecografía renal a todos', d: 'Uretrocistografía si sale alterada',
            say: 'Y después de todo episodio febril, ecografía renal a todos, y uretrocistografía si sale alterada o el cuadro fue atípico. Las cicatrices se buscan con DMSA, al menos seis meses después. Si te llevas una sola idea de hoy: la bolsa recolectora nunca confirma una infección urinaria. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Infección urinaria: fiebre o no fiebre decide todo',
    root: N('start', 'Sospecha de ITU', 'Depende de si hay fiebre',
      'Tienes un niño con sospecha de infección urinaria confirmada. La pregunta que decide todo el manejo es una sola: ¿hay fiebre?',
      ['Sin fiebre', N('ok', 'Cistitis o ITU baja', 'Cefadroxilo o nitrofurantoína oral, 3 a 5 días',
        'Sin fiebre, es una cistitis: tratas con cefadroxilo o nitrofurantoína oral, por tres a cinco días. No necesitas más estudio que ese.')],
      ['Con fiebre', N('q', '¿Tolera la vía oral y tiene más de 3 meses?', 'Decide si va a la casa o se hospitaliza',
        'Con fiebre, es una pielonefritis. Ahora preguntas si el niño tolera la vía oral, se ve con buen estado general, y tiene más de tres meses.',
        ['Sí', N('do', 'Cefadroxilo oral ambulatorio', '7 a 10 días',
          'Si tolera y tiene más de tres meses, tratas ambulatorio con cefadroxilo oral, por siete a diez días.')],
        ['No: menor de 3 meses, vómitos o tóxico', N('alert', 'Hospitalizar', 'Cefotaxima o ceftriaxona endovenosa',
          'Si es menor de tres meses, vomita todo o se ve tóxico, lo hospitalizas y usas cefotaxima o ceftriaxona endovenosa.')])]),
  },
};
