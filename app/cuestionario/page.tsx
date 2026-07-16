import type { Metadata } from "next";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Evaluación gratuita",
  description:
    "Responde 10 preguntas en menos de 3 minutos y descubre qué suplementos necesitas.",
};

export default function CuestionarioPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Quiz />
    </div>
  );
}
