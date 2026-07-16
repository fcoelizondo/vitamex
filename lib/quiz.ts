export type QuizOption = {
  value: string;
  label: string;
  emoji?: string;
};

export type QuizQuestion = {
  id: string;
  pregunta: string;
  descripcion?: string;
  tipo: "opciones" | "multiple" | "texto" | "numero";
  opciones?: QuizOption[];
  placeholder?: string;
};

export type QuizAnswers = Record<string, string | string[]>;

export const preguntas: QuizQuestion[] = [
  {
    id: "nombre",
    pregunta: "Para empezar, ¿cómo te llamas?",
    descripcion: "Así podemos personalizar tu recomendación.",
    tipo: "texto",
    placeholder: "Tu nombre",
  },
  {
    id: "edad",
    pregunta: "¿Cuál es tu edad?",
    tipo: "opciones",
    opciones: [
      { value: "18-29", label: "18 a 29 años" },
      { value: "30-39", label: "30 a 39 años" },
      { value: "40-49", label: "40 a 49 años" },
      { value: "50+", label: "50 años o más" },
    ],
  },
  {
    id: "sexo",
    pregunta: "¿Cuál es tu sexo?",
    descripcion: "Algunas necesidades nutricionales varían.",
    tipo: "opciones",
    opciones: [
      { value: "mujer", label: "Mujer" },
      { value: "hombre", label: "Hombre" },
      { value: "otro", label: "Prefiero no decirlo" },
    ],
  },
  {
    id: "objetivos",
    pregunta: "¿Cuáles son tus objetivos principales?",
    descripcion: "Puedes elegir hasta 3.",
    tipo: "multiple",
    opciones: [
      { value: "energia", label: "Más energía", emoji: "⚡" },
      { value: "descanso", label: "Dormir mejor", emoji: "🌙" },
      { value: "inmunidad", label: "Reforzar defensas", emoji: "🛡️" },
      { value: "rendimiento", label: "Rendimiento físico", emoji: "🏋️" },
      { value: "digestion", label: "Mejor digestión", emoji: "🌾" },
      { value: "piel", label: "Piel, cabello y articulaciones", emoji: "✨" },
      { value: "longevidad", label: "Salud a largo plazo", emoji: "🧬" },
      { value: "estres", label: "Manejar el estrés", emoji: "🧘" },
    ],
  },
  {
    id: "sueno",
    pregunta: "¿Cuántas horas duermes en promedio?",
    tipo: "opciones",
    opciones: [
      { value: "menos-6", label: "Menos de 6 horas" },
      { value: "6-7", label: "Entre 6 y 7 horas" },
      { value: "7-8", label: "Entre 7 y 8 horas" },
      { value: "mas-8", label: "Más de 8 horas" },
    ],
  },
  {
    id: "ejercicio",
    pregunta: "¿Con qué frecuencia haces ejercicio?",
    tipo: "opciones",
    opciones: [
      { value: "nada", label: "Casi nunca" },
      { value: "1-2", label: "1 a 2 veces por semana" },
      { value: "3-4", label: "3 a 4 veces por semana" },
      { value: "5+", label: "5 o más veces por semana" },
    ],
  },
  {
    id: "dieta",
    pregunta: "¿Sigues alguna dieta en particular?",
    tipo: "opciones",
    opciones: [
      { value: "ninguna", label: "Como de todo" },
      { value: "vegetariana", label: "Vegetariana" },
      { value: "vegana", label: "Vegana" },
      { value: "keto", label: "Keto / baja en carbohidratos" },
    ],
  },
  {
    id: "digestivo",
    pregunta: "¿Tienes molestias digestivas con frecuencia?",
    descripcion: "Inflamación, irregularidad, pesadez.",
    tipo: "opciones",
    opciones: [
      { value: "no", label: "Casi nunca" },
      { value: "a-veces", label: "A veces" },
      { value: "frecuente", label: "Con frecuencia" },
    ],
  },
  {
    id: "estres",
    pregunta: "¿Cómo describirías tu nivel de estrés?",
    tipo: "opciones",
    opciones: [
      { value: "bajo", label: "Bajo" },
      { value: "medio", label: "Medio" },
      { value: "alto", label: "Alto" },
    ],
  },
  {
    id: "medicamentos",
    pregunta: "¿Tomas algún medicamento de forma regular?",
    descripcion:
      "Si es así, te recomendamos consultar a tu médico antes de iniciar cualquier suplemento.",
    tipo: "opciones",
    opciones: [
      { value: "no", label: "No" },
      { value: "si", label: "Sí" },
    ],
  },
];

export type Recomendacion = {
  packPrincipal: string; // id de Pack
  extras: string[]; // ids de Product
  razones: { titulo: string; texto: string }[];
  avisoMedicamentos: boolean;
};

export function generarRecomendacion(respuestas: QuizAnswers): Recomendacion {
  const objetivos = (respuestas.objetivos as string[]) || [];
  const edad = respuestas.edad as string;
  const sueno = respuestas.sueno as string;
  const ejercicio = respuestas.ejercicio as string;
  const dieta = respuestas.dieta as string;
  const digestivo = respuestas.digestivo as string;
  const estres = respuestas.estres as string;

  const razones: { titulo: string; texto: string }[] = [];
  const extras: string[] = [];

  // Pack principal
  let packPrincipal = "daily-essentials";

  if (edad === "40-49" || edad === "50+") {
    packPrincipal = "40-plus";
    razones.push({
      titulo: "Pack 40+",
      texto:
        "A partir de los 40, la evidencia apunta a cuidar huesos, articulaciones y corazón. Este pack combina multivitamínico, omega 3, vitamina D3, magnesio y colágeno.",
    });
  } else if (objetivos.includes("rendimiento") && (ejercicio === "3-4" || ejercicio === "5+")) {
    packPrincipal = "active";
    razones.push({
      titulo: "Pack Active",
      texto:
        "Entrenas con frecuencia y buscas rendimiento. La proteína apoya tu recuperación, la creatina es el suplemento deportivo con más evidencia y los electrolitos ayudan a tu hidratación.",
    });
  } else if (objetivos.includes("energia") && !objetivos.includes("longevidad")) {
    packPrincipal = "energia";
    razones.push({
      titulo: "Pack Energía",
      texto:
        "Tu prioridad es la energía diaria. El complejo B participa en convertir los alimentos en energía, y el magnesio y la vitamina D apoyan al sistema nervioso y al estado de ánimo.",
    });
  } else {
    razones.push({
      titulo: "Daily Essentials",
      texto:
        "Es la base ideal para empezar: un multivitamínico completo, omega 3 para corazón y cerebro, y vitamina D3, uno de los nutrientes con mayor deficiencia en México.",
    });
  }

  // Extras
  const packActual = packPrincipal;

  if (
    (sueno === "menos-6" || sueno === "6-7" || objetivos.includes("descanso") || estres === "alto") &&
    packActual !== "40-plus" &&
    packActual !== "energia"
  ) {
    extras.push("magnesio");
    razones.push({
      titulo: "Magnesio Glicinato",
      texto:
        sueno === "menos-6" || sueno === "6-7"
          ? "Duermes menos de lo ideal. El magnesio glicinato en la noche favorece la relajación muscular y un descanso más profundo."
          : "Para el estrés y el descanso, el magnesio es de los minerales mejor estudiados y esta forma es de alta absorción.",
    });
  }

  if (digestivo === "frecuente" || digestivo === "a-veces" || objetivos.includes("digestion")) {
    extras.push("probiotico");
    razones.push({
      titulo: "Probiótico",
      texto:
        "Reportas molestias digestivas. Un probiótico con cepas estudiadas ayuda al equilibrio de tu flora intestinal; combinado con fibra suficiente, mejora la regularidad.",
    });
  }

  if (objetivos.includes("inmunidad")) {
    extras.push("zinc");
    razones.push({
      titulo: "Zinc + Vitamina C",
      texto:
        "Para reforzar defensas, el zinc y la vitamina C son el dúo clásico con respaldo científico, especialmente en temporada de cambios de clima.",
    });
    extras.push("vitamina-c");
  }

  if (objetivos.includes("piel") && packActual !== "40-plus") {
    extras.push("colageno");
    razones.push({
      titulo: "Colágeno",
      texto:
        "Los péptidos de colágeno hidrolizado, tomados de forma constante, tienen evidencia en elasticidad de la piel y confort articular.",
    });
  }

  if (dieta === "vegetariana" || dieta === "vegana") {
    if (!extras.includes("complejo-b") && packActual !== "energia") {
      extras.push("complejo-b");
      razones.push({
        titulo: "Complejo B",
        texto:
          "Con una dieta vegetariana o vegana, la vitamina B12 es difícil de obtener de los alimentos. Un complejo B diario cubre ese hueco.",
      });
    }
  }

  return {
    packPrincipal,
    extras: [...new Set(extras)].slice(0, 3),
    razones,
    avisoMedicamentos: respuestas.medicamentos === "si",
  };
}
