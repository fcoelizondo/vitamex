export type Articulo = {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  minutos: number;
  contenido: { subtitulo: string; parrafos: string[] }[];
  faqs: { pregunta: string; respuesta: string }[];
  bibliografia: string[];
};

export const articulos: Articulo[] = [
  {
    slug: "para-que-sirve-el-magnesio",
    titulo: "¿Para qué sirve el Magnesio?",
    resumen:
      "El magnesio participa en más de 300 reacciones del cuerpo: músculos, nervios, energía y descanso. Te explicamos para qué sirve, qué formas existen y cómo tomarlo.",
    categoria: "Minerales",
    minutos: 5,
    contenido: [
      {
        subtitulo: "Qué es y por qué importa",
        parrafos: [
          "El magnesio es un mineral esencial que participa en más de 300 reacciones enzimáticas: la contracción muscular, la transmisión nerviosa, la producción de energía y la regulación del sueño, entre otras.",
          "Se estima que una parte importante de la población no alcanza la ingesta recomendada de magnesio a través de la dieta, en parte por el consumo de alimentos ultraprocesados y suelos agrícolas cada vez más pobres en minerales.",
        ],
      },
      {
        subtitulo: "Beneficios respaldados por evidencia",
        parrafos: [
          "Los usos mejor estudiados del magnesio incluyen: apoyo a la relajación muscular, mejora en la calidad del sueño en personas con niveles bajos, apoyo en el manejo del estrés y contribución al metabolismo energético normal.",
          "No todas las formas de magnesio son iguales. El citrato y el glicinato se absorben mejor que el óxido. El glicinato, además, es suave con el estómago y suele preferirse para tomarlo por la noche.",
        ],
      },
      {
        subtitulo: "Cómo tomarlo",
        parrafos: [
          "La dosis habitual en suplementos va de 200 a 400 mg de magnesio elemental al día. Muchas personas prefieren tomarlo 30 a 60 minutos antes de dormir.",
          "Si tomas medicamentos (por ejemplo antibióticos o medicamentos para la presión), consulta a tu médico: el magnesio puede interferir con la absorción de algunos fármacos.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Puedo tomar magnesio todos los días?",
        respuesta:
          "Sí, en dosis habituales de suplemento (200–400 mg de magnesio elemental) es seguro para la mayoría de los adultos sanos. Dosis muy altas pueden causar malestar digestivo.",
      },
      {
        pregunta: "¿Cuál es la mejor hora para tomarlo?",
        respuesta:
          "Puede tomarse a cualquier hora, pero si buscas mejor descanso, tómalo por la noche, 30 a 60 minutos antes de dormir.",
      },
      {
        pregunta: "¿Magnesio glicinato o citrato?",
        respuesta:
          "Ambos se absorben bien. El glicinato es más suave con el estómago; el citrato puede tener un ligero efecto laxante, útil si hay estreñimiento.",
      },
    ],
    bibliografia: [
      "National Institutes of Health, Office of Dietary Supplements. Magnesium — Fact Sheet for Health Professionals.",
      "Boyle NB, et al. The Effects of Magnesium Supplementation on Subjective Anxiety and Stress. Nutrients. 2017.",
      "Abbasi B, et al. The effect of magnesium supplementation on primary insomnia in elderly. J Res Med Sci. 2012.",
    ],
  },
  {
    slug: "beneficios-de-la-vitamina-d",
    titulo: "Beneficios de la Vitamina D",
    resumen:
      "La vitamina D es clave para huesos, sistema inmune y estado de ánimo, y su deficiencia es muy común en México a pesar del sol. Aquí lo que dice la evidencia.",
    categoria: "Vitaminas",
    minutos: 5,
    contenido: [
      {
        subtitulo: "La deficiencia más común de la que nadie habla",
        parrafos: [
          "Aunque México es un país soleado, estudios nacionales han encontrado niveles insuficientes de vitamina D en una proporción alta de adultos. Pasamos la mayor parte del día en interiores y usamos protector solar, lo que limita la síntesis en la piel.",
          "La vitamina D funciona más como una hormona que como una vitamina: regula la absorción de calcio, participa en la función inmune y se ha asociado con el estado de ánimo.",
        ],
      },
      {
        subtitulo: "Beneficios principales",
        parrafos: [
          "Huesos: la vitamina D es indispensable para absorber calcio; su deficiencia prolongada se asocia con pérdida de densidad ósea.",
          "Sistema inmune: niveles adecuados se asocian con una respuesta inmune más equilibrada.",
          "Estado de ánimo y energía: la deficiencia se ha relacionado con fatiga y ánimo bajo, especialmente en personas que pasan poco tiempo al aire libre.",
        ],
      },
      {
        subtitulo: "D3 vs D2 y cómo tomarla",
        parrafos: [
          "La forma D3 (colecalciferol) eleva los niveles en sangre de manera más eficiente que la D2. Las dosis habituales de mantenimiento van de 1,000 a 4,000 UI diarias.",
          "Al ser liposoluble, se absorbe mejor si la tomas con una comida que contenga grasa, por ejemplo el desayuno.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Si vivo en México necesito vitamina D?",
        respuesta:
          "Depende de tu exposición al sol y tus niveles en sangre. Muchos adultos que trabajan en interiores presentan niveles insuficientes aun viviendo en zonas soleadas.",
      },
      {
        pregunta: "¿Puedo tomar demasiada vitamina D?",
        respuesta:
          "Sí, en dosis muy altas y por tiempo prolongado. Las dosis de mantenimiento de 1,000 a 4,000 UI diarias se consideran seguras para la mayoría de los adultos.",
      },
    ],
    bibliografia: [
      "National Institutes of Health, Office of Dietary Supplements. Vitamin D — Fact Sheet for Health Professionals.",
      "Flores M, et al. Serum 25-hydroxyvitamin D levels among Mexican children, adolescents, and adults (ENSANUT).",
      "Martineau AR, et al. Vitamin D supplementation to prevent acute respiratory tract infections. BMJ. 2017.",
    ],
  },
  {
    slug: "tipos-de-omega-3",
    titulo: "Tipos de Omega 3: EPA, DHA y ALA explicados",
    resumen:
      "No todos los omega 3 son iguales. EPA, DHA y ALA tienen funciones distintas, y la fuente importa. Te explicamos cómo elegir un buen omega 3.",
    categoria: "Ácidos grasos",
    minutos: 4,
    contenido: [
      {
        subtitulo: "Los tres tipos principales",
        parrafos: [
          "EPA (ácido eicosapentaenoico): predominantemente asociado con la salud cardiovascular y el equilibrio de procesos inflamatorios.",
          "DHA (ácido docosahexaenoico): componente estructural del cerebro y la retina; clave para la función cognitiva.",
          "ALA (ácido alfa-linolénico): se encuentra en fuentes vegetales como chía y linaza, pero el cuerpo lo convierte a EPA/DHA en proporciones muy bajas (menos del 10%).",
        ],
      },
      {
        subtitulo: "Cómo elegir un buen suplemento",
        parrafos: [
          "Fíjate en la cantidad de EPA + DHA por porción, no en el total de 'aceite de pescado'. Un buen suplemento aporta al menos 500 mg de EPA + DHA combinados.",
          "Busca aceites purificados (destilación molecular) que garanticen bajos niveles de metales pesados, y de preferencia con certificaciones de frescura para evitar el sabor a pescado rancio.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿A qué hora tomo el omega 3?",
        respuesta:
          "Con cualquier comida principal que contenga grasa. La constancia importa más que el horario.",
      },
      {
        pregunta: "¿Sirven las fuentes vegetales?",
        respuesta:
          "La chía y la linaza aportan ALA, pero la conversión a EPA/DHA es muy limitada. Si no comes pescado, considera un omega 3 de microalgas.",
      },
    ],
    bibliografia: [
      "National Institutes of Health, Office of Dietary Supplements. Omega-3 Fatty Acids — Fact Sheet.",
      "Calder PC. Omega-3 fatty acids and inflammatory processes. Biochem Soc Trans. 2017.",
    ],
  },
  {
    slug: "que-es-la-creatina",
    titulo: "¿Qué es la Creatina y para qué sirve?",
    resumen:
      "La creatina es el suplemento deportivo con más evidencia científica. Mitos, beneficios reales y cómo tomarla correctamente.",
    categoria: "Deporte",
    minutos: 5,
    contenido: [
      {
        subtitulo: "El suplemento más estudiado del mundo",
        parrafos: [
          "La creatina es un compuesto que tu propio cuerpo produce y que se almacena en los músculos como fosfocreatina, una reserva rápida de energía para esfuerzos intensos y cortos.",
          "Con cientos de estudios publicados, el monohidrato de creatina ha demostrado de forma consistente mejoras en fuerza, potencia y masa muscular cuando se combina con entrenamiento.",
        ],
      },
      {
        subtitulo: "Mitos comunes",
        parrafos: [
          "“Daña los riñones”: en personas sanas, la evidencia no muestra daño renal en las dosis recomendadas. Si tienes enfermedad renal, consulta a tu médico.",
          "“Es solo para fisicoculturistas”: la investigación reciente explora beneficios cognitivos y en adultos mayores para conservar masa muscular.",
          "“Hay que hacer fase de carga”: no es necesaria. Con 3 a 5 g diarios llegas a la saturación muscular en 3 a 4 semanas.",
        ],
      },
      {
        subtitulo: "Cómo tomarla",
        parrafos: [
          "3 a 5 gramos de monohidrato de creatina al día, todos los días, con o sin entrenamiento. El horario no importa; la constancia sí.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿La creatina retiene líquidos?",
        respuesta:
          "Aumenta el agua intramuscular (dentro del músculo), lo cual es parte de su efecto positivo. No causa retención subcutánea notable en la mayoría de las personas.",
      },
      {
        pregunta: "¿Pueden tomarla las mujeres?",
        respuesta:
          "Sí. Los beneficios en fuerza y composición corporal aplican igual, y no causa un aumento de volumen 'excesivo'.",
      },
    ],
    bibliografia: [
      "Kreider RB, et al. ISSN position stand: safety and efficacy of creatine supplementation. JISSN. 2017.",
      "Antonio J, et al. Common questions and misconceptions about creatine supplementation. JISSN. 2021.",
    ],
  },
  {
    slug: "como-tomar-zinc",
    titulo: "Cómo tomar Zinc correctamente",
    resumen:
      "El zinc apoya al sistema inmune, la piel y la recuperación, pero tomarlo mal reduce su absorción. Dosis, horarios e interacciones.",
    categoria: "Minerales",
    minutos: 4,
    contenido: [
      {
        subtitulo: "Para qué sirve el zinc",
        parrafos: [
          "El zinc participa en la función inmune, la cicatrización, el sentido del gusto y del olfato, y la síntesis de proteínas. El cuerpo no lo almacena, por lo que requiere un aporte constante.",
        ],
      },
      {
        subtitulo: "Dosis y forma correcta de tomarlo",
        parrafos: [
          "Las dosis habituales de suplemento van de 10 a 25 mg diarios. Dosis mayores a 40 mg al día de forma sostenida pueden interferir con la absorción de cobre.",
          "Tómalo con alimentos para evitar náuseas. Evita tomarlo al mismo tiempo que suplementos de calcio o hierro en dosis altas, pues compiten por absorción; sepáralos un par de horas.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Puedo tomar zinc y magnesio juntos?",
        respuesta:
          "Sí, en las dosis habituales de suplemento no hay problema. En dosis muy altas pueden competir por absorción; si es tu caso, sepáralos.",
      },
      {
        pregunta: "¿El zinc sirve para la gripa?",
        respuesta:
          "Algunos estudios muestran que el zinc puede acortar la duración del resfriado común si se toma al inicio de los síntomas. No lo previene por completo.",
      },
    ],
    bibliografia: [
      "National Institutes of Health, Office of Dietary Supplements. Zinc — Fact Sheet for Health Professionals.",
      "Science M, et al. Zinc for the treatment of the common cold. CMAJ. 2012.",
    ],
  },
  {
    slug: "vitamina-c-todos-los-dias",
    titulo: "¿Es bueno tomar Vitamina C todos los días?",
    resumen:
      "La vitamina C es el suplemento más famoso del mundo, pero ¿realmente sirve tomarla a diario? Lo que dice la ciencia sobre dosis y beneficios reales.",
    categoria: "Vitaminas",
    minutos: 4,
    contenido: [
      {
        subtitulo: "Qué hace realmente la vitamina C",
        parrafos: [
          "La vitamina C es un antioxidante esencial que participa en la síntesis de colágeno, la absorción del hierro vegetal y la función inmune normal. El cuerpo no la produce ni la almacena en grandes cantidades.",
          "Tomarla a diario es seguro: el exceso se elimina por la orina. Dosis de 200 a 1,000 mg diarios son las más comunes en suplementos.",
        ],
      },
      {
        subtitulo: "Lo que sí y lo que no",
        parrafos: [
          "Sí: en personas con actividad física intensa o exposición a frío, la suplementación regular puede reducir la duración de los resfriados. También mejora la absorción de hierro de fuentes vegetales.",
          "No: tomar megadosis cuando ya empezó la gripa tiene un efecto mínimo. La constancia diaria importa más que las dosis de rescate.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánta vitamina C es demasiada?",
        respuesta:
          "Más de 2,000 mg al día puede causar malestar digestivo. Las dosis habituales de 200 a 1,000 mg son seguras.",
      },
      {
        pregunta: "¿Mejor en la mañana o en la noche?",
        respuesta:
          "A cualquier hora. Si tomas hierro o comes fuentes vegetales de hierro, tomarla junto mejora su absorción.",
      },
    ],
    bibliografia: [
      "National Institutes of Health, Office of Dietary Supplements. Vitamin C — Fact Sheet for Health Professionals.",
      "Hemilä H, Chalker E. Vitamin C for preventing and treating the common cold. Cochrane. 2013.",
    ],
  },
  {
    slug: "multivitaminico-o-vitaminas-individuales",
    titulo: "¿Multivitamínico o vitaminas individuales?",
    resumen:
      "¿Conviene más un multivitamínico completo o comprar cada vitamina por separado? Ventajas, desventajas y cómo decidir según tu caso.",
    categoria: "Guías",
    minutos: 5,
    contenido: [
      {
        subtitulo: "El caso del multivitamínico",
        parrafos: [
          "Un buen multivitamínico funciona como un seguro nutricional: cubre pequeñas brechas de muchos nutrientes a la vez, con una sola toma diaria. Es la opción más práctica para quien empieza.",
          "Su limitación: las dosis de cada nutriente son moderadas. Si tienes una deficiencia específica (por ejemplo vitamina D o B12), el multivitamínico rara vez alcanza para corregirla.",
        ],
      },
      {
        subtitulo: "El caso de las vitaminas individuales",
        parrafos: [
          "Suplementar nutrientes específicos permite dosis efectivas dirigidas a tu necesidad real: magnesio para el descanso, vitamina D si tienes niveles bajos, B12 si eres vegetariano.",
          "La desventaja es la complejidad: más frascos, más horarios, más decisiones. Aquí es donde la mayoría abandona su rutina.",
        ],
      },
      {
        subtitulo: "Nuestra postura",
        parrafos: [
          "La respuesta correcta suele ser una combinación: una base sencilla (multivitamínico + omega 3 + vitamina D) más 1 o 2 suplementos específicos según tus objetivos. Exactamente así construimos nuestras recomendaciones.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿El multivitamínico sustituye una buena dieta?",
        respuesta:
          "No. Ningún suplemento sustituye una alimentación equilibrada; complementa las brechas que la dieta moderna suele dejar.",
      },
    ],
    bibliografia: [
      "Blumberg JB, et al. The use of multivitamin/multimineral supplements: a modified Delphi consensus. Clin Ther. 2018.",
    ],
  },
  {
    slug: "mejores-vitaminas-despues-de-los-40",
    titulo: "Las mejores vitaminas después de los 40",
    resumen:
      "A partir de los 40 cambian las prioridades: masa muscular, huesos, corazón y energía. Los suplementos con más evidencia para esta década.",
    categoria: "Guías",
    minutos: 6,
    contenido: [
      {
        subtitulo: "Qué cambia después de los 40",
        parrafos: [
          "A partir de los 40 la masa muscular disminuye de forma natural (sarcopenia), la densidad ósea empieza a descender —especialmente en mujeres—, la absorción de vitamina B12 se reduce y el metabolismo se vuelve menos flexible.",
        ],
      },
      {
        subtitulo: "Los 5 con mayor respaldo",
        parrafos: [
          "Vitamina D3: clave para huesos y músculo; los niveles bajos son más comunes con la edad.",
          "Omega 3: apoyo cardiovascular y cognitivo, las dos grandes prioridades de esta etapa.",
          "Magnesio: descanso, presión arterial y función muscular.",
          "Colágeno: evidencia creciente en confort articular y elasticidad de la piel con uso constante.",
          "Complejo B: la absorción de B12 disminuye con la edad; niveles bajos se asocian con fatiga y niebla mental.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Es tarde para empezar a los 50?",
        respuesta:
          "No. Los estudios en adultos mayores muestran beneficios al iniciar suplementación y ejercicio a cualquier edad.",
      },
      {
        pregunta: "¿Hombres y mujeres necesitan lo mismo?",
        respuesta:
          "La base es similar, pero las mujeres cerca de la menopausia deben poner especial atención a calcio, vitamina D y magnesio por la pérdida ósea acelerada.",
      },
    ],
    bibliografia: [
      "Cruz-Jentoft AJ, et al. Sarcopenia: revised European consensus on definition and diagnosis. Age Ageing. 2019.",
      "Weaver CM, et al. Calcium plus vitamin D supplementation and risk of fractures. Osteoporos Int. 2016.",
    ],
  },
  {
    slug: "que-vitaminas-tomar-para-hacer-ejercicio",
    titulo: "¿Qué vitaminas tomar si haces ejercicio?",
    resumen:
      "Si entrenas varias veces por semana, tus necesidades nutricionales cambian. Los suplementos que sí tienen evidencia para el rendimiento y la recuperación.",
    categoria: "Deporte",
    minutos: 5,
    contenido: [
      {
        subtitulo: "Primero lo primero",
        parrafos: [
          "Ningún suplemento compensa un mal sueño o una dieta pobre en proteína. Pero si tu base está cubierta, algunos suplementos tienen evidencia sólida para quienes entrenan.",
        ],
      },
      {
        subtitulo: "Con evidencia sólida",
        parrafos: [
          "Creatina: mejora fuerza y potencia en esfuerzos repetidos. 3–5 g diarios.",
          "Proteína: si no alcanzas 1.6–2.2 g por kilo de peso al día con comida, un batido facilita llegar.",
          "Electrolitos: en entrenamientos largos o con mucho sudor, reponen sodio, potasio y magnesio.",
          "Vitamina D y magnesio: niveles bajos de ambos se asocian con peor rendimiento y recuperación.",
        ],
      },
      {
        subtitulo: "Con evidencia débil",
        parrafos: [
          "BCAAs (si ya consumes suficiente proteína), quemadores de grasa y la mayoría de los 'pre-entrenos' de moda: ahorra tu dinero y priariza lo básico.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Tomo proteína aunque no quiera 'ponerme grande'?",
        respuesta:
          "La proteína no te hace ganar volumen por sí sola; apoya la recuperación y el mantenimiento muscular a cualquier nivel de entrenamiento.",
      },
    ],
    bibliografia: [
      "Jäger R, et al. ISSN Position Stand: protein and exercise. JISSN. 2017.",
      "Maughan RJ, et al. IOC consensus statement: dietary supplements and the high-performance athlete. BJSM. 2018.",
    ],
  },
  {
    slug: "magnesio-antes-de-dormir",
    titulo: "Magnesio antes de dormir: ¿funciona?",
    resumen:
      "Tomar magnesio en la noche se ha vuelto uno de los hábitos de descanso más populares. Qué dice la evidencia y cómo hacerlo bien.",
    categoria: "Descanso",
    minutos: 4,
    contenido: [
      {
        subtitulo: "Por qué el magnesio se relaciona con el sueño",
        parrafos: [
          "El magnesio participa en la regulación del GABA, el principal neurotransmisor inhibidor del cerebro, y en la relajación muscular. Niveles bajos de magnesio se asocian con sueño de peor calidad.",
          "Los estudios muestran mejoras en la calidad del sueño principalmente en personas con niveles bajos o ingesta insuficiente, que son más comunes de lo que se piensa.",
        ],
      },
      {
        subtitulo: "Cómo tomarlo para dormir",
        parrafos: [
          "Elige magnesio glicinato: combina el mineral con glicina, un aminoácido que por sí mismo se ha estudiado para el descanso, y es suave con el estómago.",
          "Toma 200–400 mg de magnesio elemental 30 a 60 minutos antes de acostarte, de forma constante. Los efectos suelen notarse tras 1 a 2 semanas de uso regular.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Me va a dar sueño como una pastilla para dormir?",
        respuesta:
          "No. El magnesio no seda; favorece la relajación y la calidad del sueño de forma gradual, sin dependencia ni pesadez al despertar.",
      },
      {
        pregunta: "¿Puedo combinarlo con melatonina?",
        respuesta:
          "Suelen combinarse sin problema. Empieza con uno a la vez para saber qué te funciona, y consulta a tu médico si tomas otros medicamentos.",
      },
    ],
    bibliografia: [
      "Abbasi B, et al. The effect of magnesium supplementation on primary insomnia. J Res Med Sci. 2012.",
      "Cao Y, et al. Magnesium intake and sleep disorder symptoms. Nutrients. 2018.",
    ],
  },
  {
    slug: "que-suplementos-realmente-funcionan",
    titulo: "¿Qué suplementos realmente funcionan?",
    resumen:
      "La industria de los suplementos está llena de promesas. Esta es nuestra lista honesta: lo que tiene evidencia sólida, lo prometedor y lo que no vale tu dinero.",
    categoria: "Guías",
    minutos: 6,
    contenido: [
      {
        subtitulo: "Evidencia sólida",
        parrafos: [
          "Creatina (fuerza y rendimiento), vitamina D (si tienes niveles bajos), omega 3 (salud cardiovascular), proteína (si tu dieta no alcanza), magnesio (descanso y déficit común), fibra (digestión y saciedad) y probióticos con cepas específicas (digestión).",
        ],
      },
      {
        subtitulo: "Prometedores",
        parrafos: [
          "Colágeno para articulaciones y piel, ashwagandha para estrés percibido y zinc al inicio de resfriados: evidencia creciente pero aún con estudios mixtos.",
        ],
      },
      {
        subtitulo: "Ahorra tu dinero",
        parrafos: [
          "Detox y limpiezas, quemadores de grasa 'milagro', megadosis de antioxidantes en personas sanas y la mayoría de las gomitas con dosis simbólicas de nutrientes.",
          "Nuestra regla: si suena a milagro, no lo vendemos. Cada producto de nuestro catálogo debe pasar el filtro de evidencia publicada, dosis efectivas y formas de alta absorción.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cómo sé si un suplemento es de calidad?",
        respuesta:
          "Busca la forma química correcta (por ejemplo glicinato vs óxido de magnesio), dosis comparables a las usadas en estudios y análisis de terceros por lote.",
      },
    ],
    bibliografia: [
      "Maughan RJ, et al. IOC consensus statement: dietary supplements and the high-performance athlete. BJSM. 2018.",
      "National Institutes of Health, Office of Dietary Supplements. Dietary Supplement Fact Sheets.",
    ],
  },
];

export function getArticulo(slug: string): Articulo | undefined {
  return articulos.find((a) => a.slug === slug);
}
