export type Product = {
  id: string;
  nombre: string;
  descripcion: string;
  beneficio: string;
  emoji: string;
};

export type Pack = {
  id: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  productos: string[]; // ids de Product
  precioMensual: number; // MXN
  emoji: string;
  popular?: boolean;
};

export const PRECIO_BASE = 699;

export const productos: Product[] = [
  {
    id: "multivitaminico",
    nombre: "Multivitamínico",
    descripcion: "Base diaria de vitaminas y minerales esenciales.",
    beneficio: "Cubre los básicos de tu alimentación diaria",
    emoji: "💊",
  },
  {
    id: "vitamina-d3",
    nombre: "Vitamina D3",
    descripcion: "Apoya huesos, sistema inmune y estado de ánimo.",
    beneficio: "Huesos e inmunidad",
    emoji: "☀️",
  },
  {
    id: "magnesio",
    nombre: "Magnesio Glicinato",
    descripcion: "Forma de alta absorción, suave con el estómago.",
    beneficio: "Descanso y relajación muscular",
    emoji: "🌙",
  },
  {
    id: "omega-3",
    nombre: "Omega 3",
    descripcion: "EPA y DHA de aceite de pescado purificado.",
    beneficio: "Corazón y cerebro",
    emoji: "🐟",
  },
  {
    id: "probiotico",
    nombre: "Probiótico",
    descripcion: "Cepas estudiadas para el equilibrio de tu flora intestinal.",
    beneficio: "Digestión y flora intestinal",
    emoji: "🦠",
  },
  {
    id: "fibra",
    nombre: "Fibra",
    descripcion: "Fibra soluble para digestión regular y saciedad.",
    beneficio: "Digestión regular",
    emoji: "🌾",
  },
  {
    id: "colageno",
    nombre: "Colágeno",
    descripcion: "Péptidos de colágeno hidrolizado con vitamina C.",
    beneficio: "Piel, articulaciones y cabello",
    emoji: "✨",
  },
  {
    id: "complejo-b",
    nombre: "Complejo B",
    descripcion: "Las 8 vitaminas B que participan en la producción de energía.",
    beneficio: "Energía y concentración",
    emoji: "⚡",
  },
  {
    id: "zinc",
    nombre: "Zinc",
    descripcion: "Mineral clave para inmunidad y recuperación.",
    beneficio: "Sistema inmune",
    emoji: "🛡️",
  },
  {
    id: "vitamina-c",
    nombre: "Vitamina C",
    descripcion: "Antioxidante clásico de apoyo inmune diario.",
    beneficio: "Antioxidante e inmunidad",
    emoji: "🍊",
  },
  {
    id: "proteina",
    nombre: "Proteína",
    descripcion: "Proteína en polvo para recuperación muscular.",
    beneficio: "Recuperación muscular",
    emoji: "💪",
  },
  {
    id: "creatina",
    nombre: "Creatina",
    descripcion: "Monohidrato de creatina, el suplemento deportivo más estudiado.",
    beneficio: "Fuerza y rendimiento",
    emoji: "🏋️",
  },
  {
    id: "electrolitos",
    nombre: "Electrolitos",
    descripcion: "Sodio, potasio y magnesio para hidratación.",
    beneficio: "Hidratación",
    emoji: "💧",
  },
];

export const packs: Pack[] = [
  {
    id: "daily-essentials",
    nombre: "Daily Essentials",
    tagline: "Los básicos que casi todos necesitamos",
    descripcion:
      "La base diaria: un multivitamínico completo, omega 3 y vitamina D3. El punto de partida ideal si nunca has tomado suplementos de forma constante.",
    productos: ["multivitaminico", "omega-3", "vitamina-d3"],
    precioMensual: 699,
    emoji: "🌱",
    popular: true,
  },
  {
    id: "energia",
    nombre: "Energía",
    tagline: "Para días largos y mente despierta",
    descripcion:
      "Complejo B para la producción de energía, magnesio para el sistema nervioso y vitamina D3 para el estado de ánimo.",
    productos: ["complejo-b", "magnesio", "vitamina-d3"],
    precioMensual: 699,
    emoji: "⚡",
  },
  {
    id: "descanso",
    nombre: "Descanso",
    tagline: "Duerme mejor, despierta mejor",
    descripcion:
      "Magnesio glicinato en la noche para relajación muscular y un descanso más profundo, sin sensación de pesadez al despertar.",
    productos: ["magnesio"],
    precioMensual: 499,
    emoji: "🌙",
  },
  {
    id: "active",
    nombre: "Active",
    tagline: "Entrena, recupera, repite",
    descripcion:
      "Proteína para recuperación, creatina para fuerza y electrolitos para hidratación. Para quienes entrenan 3 o más veces por semana.",
    productos: ["proteina", "creatina", "electrolitos"],
    precioMensual: 899,
    emoji: "🏋️",
  },
  {
    id: "40-plus",
    nombre: "40+",
    tagline: "Diseñado para tu década",
    descripcion:
      "A partir de los 40 cambian las prioridades: huesos, articulaciones, corazón y energía. Multivitamínico, omega 3, vitamina D3, magnesio y colágeno.",
    productos: ["multivitaminico", "omega-3", "vitamina-d3", "magnesio", "colageno"],
    precioMensual: 999,
    emoji: "🧭",
  },
];

export function getPack(id: string): Pack | undefined {
  return packs.find((p) => p.id === id);
}

export function getProducto(id: string): Product | undefined {
  return productos.find((p) => p.id === id);
}

export function formatMXN(n: number): string {
  return `$${n.toLocaleString("es-MX")} MXN`;
}
