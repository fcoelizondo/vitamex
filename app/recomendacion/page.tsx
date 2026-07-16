import type { Metadata } from "next";
import Recomendacion from "@/components/Recomendacion";

export const metadata: Metadata = {
  title: "Tu recomendación personalizada",
  description:
    "Tu rutina de suplementos personalizada con base en tus respuestas.",
};

export default function RecomendacionPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Recomendacion />
    </div>
  );
}
