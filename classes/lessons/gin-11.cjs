// Clase 20.11 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Enfermedad pélvica inflamatoria, criterios de Hager, estadificación de Monif, absceso tubo-ovárico y esquemas antimicrobianos MINSAL',
      say: 'Bienvenidos a la clase sobre enfermedad pélvica inflamatoria, una de las urgencias ginecológicas más evaluadas en el examen EUNACOM. En esta sesión dominaremos los criterios diagnósticos clínicos de Hager, aprenderemos a clasificar minuciosamente cada caso según los cuatro estadios de Monif, identificaremos los criterios indiscutibles que obligan a hospitalizar de urgencia a la paciente en la sala de ginecología, y fijaremos los esquemas antimicrobianos ambulatorios e intrahospitalarios de catorce días completos. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo patogénico',
      title: 'Fisiopatología de la Infección Ascendente del Tracto Genital Superior',
      nodes: [
        { id: 'cer', col: 0, row: 1, k: 'start', t: 'Infección endocervical', s: 'Infección inicial por Chlamydia trachomatis o Neisseria gonorrhoeae en el cuello uterino' },
        { id: 'asc', col: 1, row: 1, k: 'mech', t: 'Ascenso canalicular', s: 'Ruptura de la barrera de moco cervical durante la menstruación o instrumentación' },
        { id: 'sal', col: 2, row: 1, k: 'effect', t: 'Salpingitis y daño ciliar', s: 'Endometritis, destrucción del endosálpinx y exudado purulento hacia la pelvis' },
        { id: 'ato', col: 3, row: 1, k: 'alert', t: 'Absceso y peritonitis', s: 'Formación de absceso tubo-ovárico, adherencias en cuerdas de violín o peritonitis' },
      ],
      edges: [
        { from: 'cer', to: 'asc', label: 'colonización ascendente' },
        { from: 'asc', to: 'sal', label: 'invasión tubaria' },
        { from: 'sal', to: 'ato', label: 'progresión supurada' },
      ],
      steps: [
        {
          show: ['cer', 'asc'],
          note: 'Inicio cervical y pérdida de la barrera endocervical',
          say: 'El proceso comienza típicamente con una infección de transmisión sexual por clamidia o gonococo en el canal endocervical. Durante la menstruación o tras procedimientos intrauterinos, el moco cervical pierde su viscosidad permitiendo a las bacterias ascender libremente hacia la cavidad endometrial.',
        },
        {
          show: ['sal', 'ato'],
          note: 'Colonización tubaria, sobreinfección polimicrobiana y colecciones',
          say: 'Al invadir las trompas de Falopio se produce una salpingitis aguda purulenta con pérdida irreversible de los cilios tubarios. Se suman rápidamente bacterias anaerobias y entéricas secundarias, originando pelviperitonitis, abscesos tubo-ováricos o adherencias pélvicas crónicas.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Población diana y factores de riesgo',
      title: 'Epidemiología y Factores de Riesgo de la Infección Pélvica',
      cards: [
        {
          title: 'Factores de Riesgo Mayores',
          tag: 'Perfil epidemiológico clásico',
          kind: 'key',
          items: [
            {
              t: 'Mujer joven sexualmente activa',
              d: 'Máxima incidencia entre los quince y veinticinco años, inicio precoz de relaciones y parejas múltiples',
              say: 'El grupo de mayor riesgo epidemiológico está conformado por mujeres jóvenes menores de veinticinco años con vida sexual activa, parejas sexuales múltiples o recambio reciente de pareja sin protección.',
            },
            {
              t: 'Antecedente de episodio previo de EIP',
              d: 'Un episodio previo multiplica por cuatro el riesgo de recurrencia por daño ciliar residual',
              say: 'El factor predictor clínico más potente para desarrollar una nueva infección pélvica es el antecedente personal de un episodio previo documentado, el cual multiplica por cuatro el riesgo debido a la alteración anatómica permanente y a la pérdida residual de los cilios del endosálpinx.',
            },
          ],
        },
        {
          title: 'Factores Ginecológicos Coadyuvantes',
          tag: 'Procedimientos y dispositivos',
          kind: 'alert',
          items: [
            {
              t: 'Inserción reciente de dispositivo intrauterino',
              d: 'Riesgo transitorio elevado en los primeros veinte días posteriores a la colocación del DIU',
              say: 'La inserción de un dispositivo intrauterino eleva el riesgo de infección pélvica de forma transitoria únicamente durante los primeros veinte días post-inserción por arrastre mecánico de flora cervical.',
            },
            {
              t: 'Duchas vaginales frecuentes',
              d: 'Barren la flora de lactobacilos acidófilos facilitando el ascenso bacteriano patógeno',
              say: 'Las duchas vaginales frecuentes constituyen otro factor coadyuvante demostrado al remover la flora protectora de lactobacilos y empujar bacterias del fondo de saco hacia el orificio cervical.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico clínico estandarizado',
      title: 'Criterios de Hager: Tríada Mayor y Criterios Menores Complementarios',
      cards: [
        {
          title: 'Criterios Mayores Obligatorios (Los Tres Presentes)',
          tag: 'Basta la sospecha clínica para tratar',
          kind: 'criteria',
          items: [
            {
              t: 'Dolor abdominal o hipogástrico espontáneo',
              d: 'Dolor pélvico sordo bilateral que se acentúa con el movimiento o maniobra de Valsalva',
              say: 'El primer criterio mayor de Hager es la presencia obligatoria de dolor espontáneo y a la palpación profunda en el hemiabdomen inferior o hipogastrio, habitualmente de carácter bilateral, continuo y de intensidad moderada a severa.',
            },
            {
              t: 'Dolor a la palpación y movilización cervical',
              d: 'Signo de Frenkel positivo; exquisito dolor al lateralizar el cuello con los dedos en tacto bimanual',
              say: 'El segundo criterio mayor es el dolor intenso a la movilización o lateralización cervical durante el tacto bimanual, conocido como signo de Frenkel positivo por tracción de los ligamentos útero-sacros inflamados.',
            },
            {
              t: 'Dolor a la palpación anexial bimanual',
              d: 'Sensibilidad acusada al comprimir una o ambas fosas ilíacas y fondos de saco anexiales',
              say: 'El tercer criterio mayor indispensable es el dolor marcado a la palpación bimanual de uno o ambos anexos tubáricos, reflejando directamente el compromiso inflamatorio exudativo agudo del parénquima y serosa de las trompas de Falopio.',
            },
          ],
        },
        {
          title: 'Criterios Menores de Apoyo Diagnóstico',
          tag: 'Aumentan la especificidad diagnóstica',
          kind: 'normal',
          items: [
            {
              t: 'Fiebre y secreción endocervical purulenta',
              d: 'Temperatura axilar mayor a 38.3 grados Celsius o leucorrea mucopurulenta por orificio cervical',
              say: 'Los criterios menores incluyen fiebre mayor a treinta y ocho coma tres grados Celsius, exudado mucopurulento purulento por el orificio cervical o friabilidad del cuello uterino.',
            },
            {
              t: 'Reactantes de fase aguda elevados',
              d: 'Proteína C reactiva elevada, velocidad de sedimentación globular acelerada o leucocitosis en sangre',
              say: 'También apoyan el diagnóstico el aumento de proteína C reactiva o velocidad de sedimentación globular, leucocitosis en el hemograma y la confirmación microbiológica de gonococo o clamidia.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Confirmación y certeza diagnóstica',
      title: 'Criterios Definitivos y Exámenes Complementarios en EIP',
      cards: [
        {
          title: 'Estándar de Oro y Métodos Invasivos',
          tag: 'Certeza histológica y laparoscópica',
          kind: 'key',
          items: [
            {
              t: 'Laparoscopía diagnóstica directa',
              d: 'Estándar de oro que evidencia hiperemia de serosas, edema tubario y exudado purulento pélvico',
              say: 'La laparoscopía es el estándar de oro confirmatorio al visualizar directamente trompas eritematosas, edematosas y cubiertas de fibrina o pus, reservándose para dudas diagnósticas graves.',
            },
            {
              t: 'Biopsia de endometrio por aspiración',
              d: 'Demuestra infiltrado de neutrófilos y células plasmáticas característico de endometritis aguda',
              say: 'La biopsia endometrial por aspiración confirma histológicamente la presencia de endometritis inflamatoria con infiltración de plasmocitos estromales y neutrófilos intraepiteliales.',
            },
          ],
        },
        {
          title: 'Imágenes No Invasivas de Elección',
          tag: 'Ecografía transvaginal de alta resolución',
          kind: 'criteria',
          items: [
            {
              t: 'Ecografía transvaginal ginecológica',
              d: 'Primer examen de imagen; pesquisa engrosamiento tubario, piosálpinx y absceso tubo-ovárico',
              say: 'La ecografía transvaginal es la imagen inicial indispensable ante sospecha de infección pélvica, permitiendo detectar colecciones líquidas en trompas, piosálpinx y abscesos tubo-ováricos.',
            },
            {
              t: 'Descarte de patologías quirúrgicas agudas',
              d: 'Permite diferenciar la salpingitis de un embarazo ectópico roto, apendicitis o torsión anexial',
              say: 'Toda paciente con dolor pélvico debe contar con test de embarazo en sangre u orina y ecografía para descartar categóricamente un embarazo ectópico complicado o una apendicitis aguda.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estadificación de Monif',
      title: 'Clasificación de Monif: De la Salpingitis Simple al Shock Séptico',
      cards: [
        {
          title: 'Estadios Iniciales de Monif',
          tag: 'Salpingitis y pelviperitonitis',
          kind: 'criteria',
          items: [
            {
              t: 'Monif Estadio I: Salpingitis aguda no complicada',
              d: 'Inflamación tubaria sin masa anexial ni reacción peritoneal pélvica; manejo ambulatorio oral',
              say: 'El estadio uno de Monif corresponde a una salpingitis aguda simple sin pelviperitonitis ni masas palpables, siendo el único estadio candidato a tratamiento médico ambulatorio con estricto control.',
            },
            {
              t: 'Monif Estadio II: Salpingitis con pelviperitonitis',
              d: 'Extensión del exudado al peritoneo pelviano con peritonismo localizado; requiere hospitalización',
              say: 'El estadio dos presenta extensión de la infección con irritación peritoneal pélvica y Blumberg localizado, exigiendo de inmediato hospitalización y terapia antibiótica endovenosa.',
            },
          ],
        },
        {
          title: 'Estadios Avanzados y Complicados',
          tag: 'Abscesos y emergencias quirúrgicas',
          kind: 'alert',
          items: [
            {
              t: 'Monif Estadio III: Absceso Tubo-Ovárico (ATO) íntegro',
              d: 'Masa anexial inflamatoria palpable o visible en ecografía; hospitalización y antibióticos EV',
              say: 'El estadio tres se define por la presencia de un absceso tubo-ovárico íntegro con masa purulenta anexial; obliga a hospitalizar para recibir antibióticos parenterales de máxima potencia.',
            },
            {
              t: 'Monif Estadio IV: Rotura de Absceso Tubo-Ovárico',
              d: 'Rotura intraperitoneal catastrófica con abdomen en tabla y shock séptico; pabellón urgente',
              say: 'El estadio cuatro es la rotura del absceso tubo-ovárico hacia el peritoneo libre, desencadenando peritonitis generalizada y shock séptico con indicación de cirugía inmediata.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Toma de decisiones clínicas',
      title: 'Criterios de Hospitalización Obligatoria en Infección Pélvica',
      cards: [
        {
          title: 'Criterios Clínicos e Imaginológicos Mayores',
          tag: 'Hospitalización inmediata en sala',
          kind: 'alert',
          items: [
            {
              t: 'Presencia de Absceso Tubo-Ovárico (ATO)',
              d: 'Monif estadio tres demostrado clínica o ecográficamente requiere antibióticos parenterales continuos',
              say: 'La presencia confirmada de un absceso tubo-ovárico es un criterio absoluto de hospitalización inmediata por el riesgo vital de rotura peritoneal si no responde a fármacos intravenosos.',
            },
            {
              t: 'Embarazo en curso con sospecha de EIP',
              d: 'Altísimo riesgo de aborto séptico, morbimortalidad materna y parto prematuro extremo',
              say: 'Toda mujer embarazada con sospecha de infección pélvica debe ser ingresada al hospital sin excepción, debido a la gravedad del cuadro sobre la gestación y el binomio materno fetal.',
            },
          ],
        },
        {
          title: 'Criterios Quirúrgicos y de Tolerancia',
          tag: 'Dudas diagnósticas y falla oral',
          kind: 'criteria',
          items: [
            {
              t: 'Duda diagnóstica con urgencia quirúrgica',
              d: 'Imposibilidad de descartar con certeza apendicitis aguda perforada o torsión anexial',
              say: 'Si no es posible descartar con absoluta certeza una apendicitis aguda o una torsión de ovario, la paciente se hospitaliza para observación quirúrgica activa y eventual laparoscopía.',
            },
            {
              t: 'Falla o intolerancia a la vía oral y falta de mejoría',
              d: 'Vómitos incoercibles o ausencia de mejoría clínica tras cuarenta y ocho a setenta y dos horas ambulatorias',
              say: 'Asimismo, la intolerancia gástrica con vómitos incoercibles o el fracaso del tratamiento ambulatorio tras cuarenta y ocho a setenta y dos horas imponen el ingreso intrahospitalario.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento ambulatorio MINSAL',
      title: 'Esquema Ambulatorio: Triple Terapia por Catorce Días',
      cards: [
        {
          title: 'Protocolo de Manejo Ambulatorio (Monif I)',
          tag: 'Cobertura completa de 14 días',
          kind: 'pharma',
          items: [
            {
              t: 'Ceftriaxona intramuscular para gonococo',
              d: 'Ceftriaxona 500 mg intramuscular en dosis única el día de la consulta inicial',
              say: 'El pilar bactericida indiscutible para erradicar Neisseria gonorrhoeae y sus cepas resistentes es la administración inmediata de ceftriaxona quinientos miligramos por vía intramuscular profunda en monodosis estricta durante el primer día de consulta en el centro asistencial.',
            },
            {
              t: 'Doxiciclina oral para Chlamydia trachomatis',
              d: 'Doxiciclina 100 mg cada doce horas vía oral durante catorce días completos',
              say: 'Para erradicar a Chlamydia trachomatis del epitelio tubario se prescribe formalmente doxiciclina cien miligramos cada doce horas por vía oral durante catorce días completos, asegurando una penetración tisular intracelular óptima en las trompas.',
            },
            {
              t: 'Metronidazol oral para bacterias anaerobias',
              d: 'Metronidazol 500 mg cada doce horas vía oral durante catorce días consecutivos',
              say: 'Es indispensable asociar metronidazol quinientos miligramos cada doce horas vía oral por catorce días para cubrir la flora anaerobia sobreinfectante del tracto genital.',
            },
          ],
        },
        {
          title: 'Seguimiento y Control en Cuarenta y Ocho Horas',
          tag: 'Control obligatorio en 48-72 horas',
          kind: 'alert',
          items: [
            {
              t: 'Cita de control clínico obligatorio en 48 a 72 horas',
              d: 'Evaluar descenso de la fiebre, disminución del dolor pélvico y tolerancia a los medicamentos',
              say: 'La paciente ambulatoria tiene cita obligatoria de control a las cuarenta y ocho o setenta y dos horas; si persiste febril o el dolor no cede, se hospitaliza de inmediato para terapia endovenosa.',
            },
            {
              t: 'Tratamiento simultáneo de los contactos sexuales',
              d: 'Citar y tratar a todas las parejas sexuales recientes con ceftriaxona y doxiciclina',
              say: 'Todas las parejas sexuales de los últimos sesenta días deben ser evaluadas y tratadas empíricamente para gonorrea y clamidia, recomendando abstinencia hasta finalizar los antibióticos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapia hospitalaria y absceso',
      title: 'Esquemas Parenterales y Abordaje del Absceso Tubo-Ovárico',
      cards: [
        {
          title: 'Esquemas Parenterales de Elección',
          tag: 'Vía endovenosa intrahospitalaria',
          kind: 'pharma',
          items: [
            {
              t: 'Esquema con Clindamicina más Gentamicina',
              d: 'Clindamicina 900 mg EV cada 8 horas más Gentamicina dosis de carga y mantenimiento',
              say: 'El esquema clásico hospitalario de alta cobertura anaerobia combina clindamicina novecientos miligramos endovenosos cada ocho horas más gentamicina dos miligramos por kilo de carga y mantenimiento.',
            },
            {
              t: 'Esquema alternativo con Ceftriaxona EV',
              d: 'Ceftriaxona 1 a 2 gramos EV cada 24 horas más Doxiciclina 100 mg oral más Metronidazol 500 mg EV',
              say: 'Una alternativa eficaz es ceftriaxona uno a dos gramos endovenosos al día asociada a doxiciclina oral y metronidazol endovenoso cada doce horas hasta completar mejoría.',
            },
          ],
        },
        {
          title: 'Manejo Médico Escalonado del ATO',
          tag: 'Monitoreo de respuesta en 48-72 horas',
          kind: 'key',
          items: [
            {
              t: 'Respuesta médica favorable en el setenta por ciento',
              d: 'La mayoría de los abscesos menores a 8 cm responden a antibióticos EV sin requerir cirugía',
              say: 'El setenta por ciento de los abscesos tubo-ováricos no complicados menores a ocho centímetros curan con antibióticos endovenosos exclusivos sin requerir ninguna intervención quirúrgica.',
            },
            {
              t: 'Indicación de drenaje o cirugía',
              d: 'Abscesos mayores a 8-10 cm o falla de mejoría tras 72 horas de antibióticos EV intensivos',
              say: 'Si tras setenta y dos horas de antibióticos intravenosos la paciente persiste febril o el absceso supera los ocho centímetros, se indica drenaje percutáneo guiado por tomografía o laparoscopía.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones mayores',
      title: 'Rotura de ATO y Síndrome de Fitz-Hugh-Curtis',
      cards: [
        {
          title: 'Rotura de Absceso Tubo-Ovárico (Monif IV)',
          tag: 'Emergencia quirúrgica extrema',
          kind: 'alert',
          items: [
            {
              t: 'Deterioro hemodinámico brusco con abdomen en tabla',
              d: 'Aparición repentina de dolor hiperagudo generalizado, signos peritoneales y shock séptico',
              say: 'La rotura de un absceso tubo-ovárico es una catástrofe quirúrgica que se manifiesta por dolor abdominal difuso hiperagudo diez de diez, vientre en tabla, hipotensión y shock séptico descompensado.',
            },
            {
              t: 'Laparotomía exploradora de urgencia salvadora',
              d: 'Resucitación hemodinámica inmediata y traslado a pabellón para lavado peritoneal y salpingooforectomía',
              say: 'La conducta inmediata que salva la vida de la paciente es la reanimación con fluidos y el traslado urgente a pabellón para laparotomía exploradora con lavado peritoneal y salpingooforectomía.',
            },
          ],
        },
        {
          title: 'Síndrome de Fitz-Hugh-Curtis (Perihepatitis)',
          tag: 'Adherencias en cuerdas de violín',
          kind: 'key',
          items: [
            {
              t: 'Diseminación peritoneal ascendente a hipocondrio derecho',
              d: 'Migración de Chlamydia o Gonococo por goteras paracólicas simulando colecistitis o pleuresía',
              say: 'El síndrome de Fitz-Hugh-Curtis ocurre por diseminación de clamidia o gonococo a lo largo de las correderas parietocólicas hacia la cápsula hepática, simulando un cólico biliar o pleuritis.',
            },
            {
              t: 'Adherencias peritoneales en cuerdas de violín',
              d: 'Hallazgo laparoscópico clásico de bridas translúcidas entre la cápsula hepática y la pared anterior',
              say: 'En la laparoscopía se observan adherencias finas y translúcidas patognomónicas en cuerdas de violín entre la cápsula de Glisson y la pared abdominal, respondiendo al tratamiento antibiótico de la infección pélvica.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Matriz comparativa de manejo',
      title: 'Resumen Comparativo de Estadios de Monif y Esquemas Terapéuticos',
      head: ['Estadio de Monif', 'Definición Clínica', 'Esquema Antimicrobiano', 'Vía y Lugar'],
      rows: [
        {
          cells: ['Estadio I', 'Salpingitis aguda simple no complicada', 'Ceftriaxona 500 mg IM + Doxiciclina 100 mg c/12h + Metronidazol 500 mg c/12h', 'Vía oral ambulatoria por 14 días'],
          say: 'El estadio uno no tiene peritonismo y se trata ambulatoriamente con ceftriaxona intramuscular y catorce días de doxiciclina y metronidazol oral.',
        },
        {
          cells: ['Estadio II', 'Salpingitis con pelviperitonitis', 'Ceftriaxona EV + Doxiciclina + Metronidazol o Clindamicina + Gentamicina EV', 'Hospitalización parenteral continua'],
          say: 'El estadio dos presenta reacción peritoneal pélvica y exige hospitalización inmediata para recibir antibióticos endovenosos de amplio espectro.',
        },
        {
          cells: ['Estadio III', 'Absceso Tubo-Ovárico íntegro', 'Clindamicina 900 mg EV c/8h + Gentamicina EV (drenar si > 8 cm o falla a 72h)', 'Hospitalización parenteral y vigilancia'],
          say: 'El estadio tres presenta una masa purulenta anexial íntegra que se hospitaliza con clindamicina y gentamicina, drenando si fracasa a las setenta y dos horas.',
        },
        {
          cells: ['Estadio IV', 'Rotura de ATO con shock y peritonitis difusa', 'Reanimación con volumen, antibióticos EV de amplio espectro y cirugía urgente', 'Pabellón de urgencia para laparotomía'],
          say: 'El estadio cuatro es la rotura del absceso con abdomen en tabla y shock séptico, requiriendo laparotomía exploradora de urgencia para salvar la vida.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Diagnóstico, Estadificación y Manejo de la EIP',
      say: 'Revisemos el algoritmo estructurado para clasificar la severidad de la enfermedad pélvica inflamatoria y definir la conducta terapéutica ambulatoria versus quirúrgica.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'EIP Monif I · Esquema Ambulatorio de Elección',
      stem: 'Una mujer de 22 años consulta en el CESFAM por dolor hipogástrico bilateral de 4 días de evolución que se intensificó tras el término de la menstruación. Al examen físico se encuentra en buenas condiciones generales, con temperatura axilar de 37.8 °C. Al examen ginecológico se aprecia leucorrea purulenta endocervical, marcado dolor a la movilización del cuello uterino (signo de Frenkel positivo) y sensibilidad moderada a la palpación de ambos anexos, sin masas palpables ni signos de irritación peritoneal generalizada. La ecografía transvaginal descarta colecciones pélvicas y masas anexiales.',
      question: '¿Cuál es el esquema farmacológico ambulatorio de elección indicado por las guías clínicas para esta paciente?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino 500 mg cada 12 horas oral por 7 días en monoterapia' },
        { letter: 'B', text: 'Ceftriaxona 500 mg IM en dosis única MÁS Doxiciclina 100 mg cada 12 horas oral por 14 días MÁS Metronidazol 500 mg cada 12 horas oral por 14 días' },
        { letter: 'C', text: 'Amoxicilina con ácido clavulánico oral 875/125 mg cada 12 horas por 7 días' },
        { letter: 'D', text: 'Metronidazol 2 g oral en dosis única exclusivamente' },
        { letter: 'E', text: 'Gentamicina intramuscular 160 mg dosis única y reposo' },
      ],
      correct: 'B',
      explanation: 'La paciente presenta una Enfermedad Pélvica Inflamatoria (EIP) Estadio I de Monif diagnosticada por los Criterios de Hager (dolor hipogástrico, dolor cervical a la movilización, dolor anexial y leucorrea purulenta). Al ser de manejo ambulatorio, el esquema oficial ministerial y de los CDC es la triple terapia durante 14 DÍAS: 1) Ceftriaxona 500 mg IM en dosis única (cobertura de gonococo); 2) Doxiciclina 100 mg cada 12 horas por vía oral por 14 días (cobertura de Chlamydia trachomatis); y 3) Metronidazol 500 mg cada 12 horas por vía oral por 14 días (cobertura indispensable para anaerobios pélvicos). Requiere control clínico obligatorio en 48 a 72 horas.',
      say: {
        stem: 'Joven de veintidós años con dolor hipogástrico, dolor a la movilización cervical y dolor anexial bilateral sin colecciones ecográficas, en buenas condiciones generales.',
        question: '¿Cuál es el esquema farmacológico ambulatorio de elección indicado por las guías clínicas para esta paciente?',
        options: 'La opción A propone ciprofloxacino oral en monoterapia. La B ceftriaxona intramuscular en dosis única más doxiciclina y metronidazol oral por catorce días. La C amoxicilina con ácido clavulánico. La D metronidazol en dosis única. La E gentamicina. Piénsalo.',
        answer: 'La respuesta correcta es la B. Se trata de una infección pélvica estadio uno de Monif que requiere triple cobertura con ceftriaxona, doxiciclina y metronidazol por catorce días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Criterio Absoluto de Hospitalización en EIP',
      stem: '¿En cuál de las siguientes situaciones clínicas una paciente con diagnóstico clínico de Enfermedad Pélvica Inflamatoria DEBE ser OBLIGATORIAMENTE HOSPITALIZADA para recibir tratamiento antibiótico parenteral por vía endovenosa?',
      question: '¿En cuál de las siguientes situaciones clínicas la paciente con EIP debe ser obligatoriamente hospitalizada para tratamiento endovenoso?',
      options: [
        { letter: 'A', text: 'Paciente de 24 años con EIP leve (Monif I) y buena tolerancia oral' },
        { letter: 'B', text: 'Presencia de un Absceso Tubo-Ovárico (ATO) evidenciado en la ecografía transvaginal' },
        { letter: 'C', text: 'Paciente con antecedentes de un episodio de EIP hace dos años ya resuelto' },
        { letter: 'D', text: 'Paciente con cultivo positivo para Ureaplasma urealyticum en cuello uterino' },
        { letter: 'E', text: 'Paciente con pareja sexual que se niega a recibir tratamiento preventivo' },
      ],
      correct: 'B',
      explanation: 'La presencia de un Absceso Tubo-Ovárico (ATO) (Monif Estadio III) es un criterio absoluto e indiscutido de HOSPITALIZACIÓN OBLIGATORIA. El ATO conlleva un alto riesgo de rotura intraperitoneal catastrófica con sepsis grave y peritonitis fecal/purulenta, y requiere antibioticoterapia endovenosa continua de amplio espectro a dosis máximas (ej. Ceftriaxona + Doxiciclina + Metronidazol o Clindamicina + Gentamicina) y monitorización intrahospitalaria estricta para definir si responde o requiere drenaje quirúrgico.',
      say: {
        stem: 'Pregunta sobre la indicación médica indiscutible de hospitalización obligatoria en una paciente con diagnóstico de enfermedad pélvica inflamatoria.',
        question: '¿En cuál de las siguientes situaciones clínicas la paciente con infección pélvica debe ser obligatoriamente hospitalizada para recibir antibióticos endovenosos?',
        options: 'La opción A propone paciente joven con estadio uno y buena tolerancia. La B presencia de absceso tubo-ovárico en ecografía. La C antecedente previo resuelto. La D cultivo positivo para ureaplasma. La E negativa de la pareja a tratarse. Piénsalo.',
        answer: 'La respuesta correcta es la B. El hallazgo de un absceso tubo-ovárico en el estadio tres de Monif impone la hospitalización inmediata para antibioticoterapia intravenosa de alta potencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Síndrome de Fitz-Hugh-Curtis · Perihepatitis en EIP',
      stem: 'Una paciente de 25 años en tratamiento ambulatorio por una EIP consulta en la urgencia por persistencia del dolor pélvico al que se agrega dolor agudo en hipocondrio derecho que empeora con la inspiración profunda, semejante a una pleuresía. La ecografía hepática y biliar descarta colelitiasis y muestra líquido fino perihepático. En la laparoscopía se observan adherencias finas en cuerdas de violín entre la cápsula de Glisson hepática y la pared abdominal anterior.',
      question: '¿Cuál es el diagnóstico de esta complicación?',
      options: [
        { letter: 'A', text: 'Síndrome de Fitz-Hugh-Curtis (Perihepatitis por Chlamydia o Gonococo)' },
        { letter: 'B', text: 'Hepatitis autoinmune tipo 2' },
        { letter: 'C', text: 'Síndrome de Budd-Chiari agudo' },
        { letter: 'D', text: 'Absceso hepático amebiano roto' },
        { letter: 'E', text: 'Tromboflebitis séptica de la vena porta (Pileflebitis)' },
      ],
      correct: 'A',
      explanation: 'El Síndrome de Fitz-Hugh-Curtis o Perihepatitis asociada a EIP es una complicación clásica provocada por la diseminación ascendente transperitoneal de Chlamydia trachomatis o Neisseria gonorrhoeae desde la pelvis a lo largo de las correderas parietocólicas hacia el espacio perihepático. Cursa con dolor agudo en hipocondrio derecho (que simula colecistitis o pleuritis) y formación característica de adherencias peritoneales translúcidas en cuerdas de violín entre la cápsula hepática y el diafragma/pared anterior. El tratamiento consiste en completar el esquema antibiótico para EIP, el cual es altamente curativo.',
      say: {
        stem: 'Mujer de veinticinco años con infección pélvica que agrega dolor en hipocondrio derecho pleurítico y adherencias en cuerdas de violín entre hígado y pared abdominal en laparoscopía.',
        question: '¿Cuál es el diagnóstico de esta complicación clínica clásica?',
        options: 'La opción A propone síndrome de Fitz-Hugh-Curtis o perihepatitis. La B hepatitis autoinmune. La C síndrome de Budd-Chiari. La D absceso hepático amebiano. La E pileflebitis de vena porta. Piénsalo.',
        answer: 'La respuesta correcta es la A. Las adherencias perihepáticas en cuerdas de violín asociadas a dolor pélvico son patognomónicas del síndrome de Fitz-Hugh-Curtis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Rotura de ATO (Monif IV) · Emergencia Quirúrgica',
      stem: 'Una paciente hospitalizada hace 48 horas por un Absceso Tubo-Ovárico de 8 cm en tratamiento con Clindamicina más Gentamicina endovenosa presenta súbitamente dolor abdominal difuso hiperagudo de intensidad 10/10, palidez profusa, taquicardia de 130 lpm, presión arterial de 80/40 mmHg y abdomen difusamente en tabla con signos de Blumberg y Guéneau de Mussy generalizados.',
      question: '¿Cuál es el diagnóstico y la conducta médica inmediata que salva la vida de la paciente?',
      options: [
        { letter: 'A', text: 'Apendicitis perforada; colonoscopía de urgencia' },
        { letter: 'B', text: 'Rotura de Absceso Tubo-Ovárico (Monif IV) con shock séptico; traslado inmediato a pabellón para laparotomía exploradora de urgencia' },
        { letter: 'C', text: 'Embolia pulmonar; inicio inmediato de anticoagulación con heparina' },
        { letter: 'D', text: 'Evolución esperable del ATO; aumentar la dosis de gentamicina y esperar 24 horas' },
        { letter: 'E', text: 'Hemorragia digestiva alta; endoscopía digestiva alta' },
      ],
      correct: 'B',
      explanation: 'El deterioro clínico catastrófico repentino con dolor peritoneal difuso, contractura abdominal en tabla (vientre peritoneal) e inestabilidad hemodinámica severa (shock séptico/hipovolémico) en una paciente hospitalizada por un ATO representa una Rotura de Absceso Tubo-Ovárico (Estadio IV de Monif). Es una emergencia quirúrgica de extrema gravedad con altísima mortalidad materna. La conducta mandatoria es la resucitación hemodinámica con fluidos y traslado inmediato a pabellón para LAPAROTOMÍA EXPLORADORA DE URGENCIA con lavado profuso de la cavidad abdominal, desbridamiento y salpingooforectomía del anexo comprometido.',
      say: {
        stem: 'Paciente con absceso tubo-ovárico hospitalizada que presenta súbitamente dolor hiperagudo generalizado, abdomen en tabla, hipotensión de ochenta con cuarenta y shock séptico.',
        question: '¿Cuál es el diagnóstico y la conducta médica inmediata que salva la vida de la paciente?',
        options: 'La opción A propone apendicitis con colonoscopía. La B rotura de absceso tubo-ovárico con shock séptico y laparotomía exploradora de urgencia en pabellón. La C embolia pulmonar. La D conducta expectante. La E hemorragia digestiva. Piénsalo.',
        answer: 'La respuesta correcta es la B. La rotura de un absceso tubo-ovárico produce peritonitis purulenta masiva y shock séptico que exige laparotomía exploradora inmediata.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Enfermedad Pélvica Inflamatoria',
      cards: [
        {
          title: 'Sospecha y Tríada de Hager',
          tag: 'Tratar sin esperar cultivos',
          kind: 'key',
          items: [
            {
              t: 'Tríada mayor obligatoria de Hager',
              d: 'Dolor hipogástrico, dolor a la movilización cervical y dolor a la palpación anexial',
              say: 'La presencia de dolor hipogástrico junto a dolor cervical y anexial bimanual basta para iniciar tratamiento antibiótico empírico inmediato sin esperar confirmación microbiológica.',
            },
            {
              t: 'Manejo ambulatorio por catorce días',
              d: 'Ceftriaxona 500 mg IM más Doxiciclina y Metronidazol oral por 14 días con control en 48 horas',
              say: 'El estadio uno no complicado se trata de forma ambulatoria con ceftriaxona intramuscular y catorce días completos de doxiciclina y metronidazol, citando a control a las cuarenta y ocho horas.',
            },
          ],
        },
        {
          title: 'Criterios de Hospitalización y Monif',
          tag: 'Estadios avanzados',
          kind: 'criteria',
          items: [
            {
              t: 'ATO y embarazo imponen ingreso hospitalario',
              d: 'Monif III o mujer gestante obligan a iniciar antibióticos parenterales como clindamicina con gentamicina',
              say: 'El absceso tubo-ovárico o la coexistencia de embarazo obligan a hospitalizar de urgencia para terapia intravenosa combinada con clindamicina y gentamicina.',
            },
            {
              t: 'Rotura de ATO: Cirugía de urgencia salvadora',
              d: 'Abdomen en tabla y shock séptico exigen laparotomía exploradora inmediata en pabellón',
              say: 'La rotura de un absceso tubo-ovárico en el estadio cuatro de Monif constituye una catástrofe que exige traslado inmediato a pabellón para laparotomía exploradora.',
            },
          ],
        },
        {
          title: 'Complicaciones Crónicas Severas',
          tag: 'Secuelas a largo plazo',
          kind: 'alert',
          items: [
            {
              t: 'Infertilidad y embarazo ectópico tubario',
              d: 'La salpingitis destruye los cilios tubarios causando infertilidad y riesgo de ectópico',
              say: 'Cada episodio de salpingitis lesiona gravemente el endosálpinx, siendo la causa primordial de infertilidad tubárica y multiplicando el riesgo de embarazo ectópico futuro.',
            },
            {
              t: 'Síndrome de Fitz-Hugh-Curtis',
              d: 'Perihepatitis con adherencias en cuerdas de violín que cura con el esquema antimicrobiano',
              say: 'Las adherencias en cuerda de violín reflejan una infección pélvica previa. Si te llevas una sola idea de hoy: el dolor pélvico crónico requiere un enfoque multidisciplinario, descartando endometriosis, adenomiosis y síndrome miofascial antes de cualquier cirugía. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico, Estadificación y Manejo de la EIP',
    root: N(
      'start',
      'Mujer Joven con Dolor Pélvico Agudo y Tríada de Hager',
      'Dolor hipogástrico · dolor a la movilización cervical · dolor anexial bimanual',
      'Iniciamos el abordaje confirmando la tríada clínica de Hager y descartando embarazo ectópico.',
      [
        'Presenta criterios de hospitalización (absceso tubo-ovárico, embarazo, peritonismo difuso o falla oral)',
        N(
          'alert',
          'Hospitalización Inmediata en Servicio de Ginecología',
          'Terapia antimicrobiana parenteral continua de amplio espectro (Monif II o III)',
          'Si presenta absceso tubo-ovárico, embarazo o peritonismo pélvico ingresamos a hospitalización.',
          [
            'Absceso Tubo-Ovárico íntegro sin shock',
            N(
              'do',
              'Clindamicina 900 mg EV c/8h + Gentamicina EV',
              'Vigilancia estricta por setenta y dos horas · drenaje guiado por imágenes si no responde',
              'Indicamos clindamicina más gentamicina endovenosa, vigilando la respuesta médica.',
            ),
          ],
          [
            'Rotura de absceso tubo-ovárico con abdomen en tabla y shock séptico (Monif IV)',
            N(
              'alert',
              'Laparotomía Exploradora de Urgencia Inmediata en Pabellón',
              'Reanimación hemodinámica vigorosa con fluidos, lavado peritoneal amplio y salpingooforectomía',
              'Ante rotura del absceso con peritonitis y shock realizamos laparotomía exploradora de urgencia.',
            ),
          ],
        ),
      ],
      [
        'Estadio I de Monif: Salpingitis simple no complicada, tolera vía oral y sin colecciones',
        N(
          'ok',
          'Tratamiento Ambulatorio Triple por Catorce Días (MINSAL)',
          'Ceftriaxona 500 mg IM dosis única + Doxiciclina 100 mg c/12h oral + Metronidazol 500 mg c/12h oral por 14 días',
          'Prescribimos ceftriaxona intramuscular más catorce días de doxiciclina y metronidazol oral con control en cuarenta y ocho horas.',
        ),
      ],
    ),
  },
};
