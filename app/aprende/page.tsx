import type { Metadata } from "next";
import Link from "next/link";
import { articulos } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Aprende sobre suplementos",
  description:
    "Guías claras sobre vitaminas y suplementos, con evidencia científica y sin promesas milagro: magnesio, vitamina D, omega 3, creatina y más.",
};

export default function AprendePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-pino-oscuro sm:text-5xl">
          Aprende
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          Guías claras, con bibliografía y sin promesas milagro. Leemos los
          estudios para que tú no tengas que hacerlo.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articulos.map((a) => (
          <Link
            key={a.slug}
            href={`/aprende/${a.slug}`}
            className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-pino"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-pino">
              {a.categoria}
            </span>
            <h2 className="mt-3 text-lg font-semibold text-pino-oscuro group-hover:underline">
              {a.titulo}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
              {a.resumen}
            </p>
            <span className="mt-4 text-xs text-stone-400">
              Lectura de {a.minutos} min
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-pino p-10 text-center text-white">
        <h2 className="text-2xl font-bold">
          ¿Prefieres que te digamos exactamente qué necesitas?
        </h2>
        <Link
          href="/cuestionario"
          className="mt-6 inline-block rounded-full bg-white px-8 py-4 font-semibold text-pino transition hover:bg-amber-50"
        >
          Haz tu evaluación gratuita
        </Link>
      </div>
    </div>
  );
}
