import type { MetadataRoute } from "next";
import { articulos } from "@/lib/articles";

const BASE = "https://vitamex.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = ["", "/cuestionario", "/paquetes", "/aprende"].map((ruta) => ({
    url: `${BASE}${ruta}`,
    changeFrequency: "weekly" as const,
    priority: ruta === "" ? 1 : 0.8,
  }));

  const posts = articulos.map((a) => ({
    url: `${BASE}/aprende/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...estaticas, ...posts];
}
