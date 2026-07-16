import type { Metadata } from "next";
import Link from "next/link";
import { packs, getProducto, formatMXN } from "@/lib/products";

export const metadata: Metadata = {
  title: "Paquetes de suplementos",
  description:
    "Rutinas de suplementos diseñadas por objetivo: Daily Essentials, Energía, Descanso, Active y 40+. Suscripción mensual con envío incluido en México.",
};

export default function PaquetesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-pino-oscuro sm:text-5xl">
          Nuestros paquetes
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          No vendemos 80 frascos distintos. Diseñamos rutinas completas por
          objetivo, con productos de alta absorción y dosis efectivas.
        </p>
        <Link
          href="/cuestionario"
          className="mt-6 inline-block rounded-full border border-pino px-6 py-3 text-sm font-semibold text-pino transition hover:bg-pino hover:text-white"
        >
          ¿No sabes cuál elegir? Haz la evaluación →
        </Link>
        <p className="mt-6 rounded-2xl bg-pino-claro px-6 py-4 text-sm text-pino-oscuro">
          🏠 <strong>Descuento hogar:</strong> con más de una suscripción al
          mismo envío, el paquete más caro paga precio completo y todos los
          demás tienen <strong>15% de descuento</strong>.
        </p>
      </div>

      <div className="mt-16 space-y-8">
        {packs.map((pack) => (
          <div
            key={pack.id}
            id={pack.id}
            className="scroll-mt-24 rounded-3xl border border-stone-200 bg-white p-8 sm:p-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{pack.emoji}</span>
                  {pack.popular && (
                    <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-pino-oscuro">
                      Más popular
                    </span>
                  )}
                </div>
                <h2 className="mt-4 text-2xl font-bold text-pino-oscuro">
                  {pack.nombre}
                </h2>
                <p className="mt-1 font-medium text-pino">{pack.tagline}</p>
                <p className="mt-4 leading-relaxed text-stone-600">
                  {pack.descripcion}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {pack.productos.map((id) => {
                    const p = getProducto(id)!;
                    return (
                      <div
                        key={id}
                        className="flex items-center gap-3 rounded-xl bg-crema px-4 py-3"
                      >
                        <span className="text-xl">{p.emoji}</span>
                        <div>
                          <p className="text-sm font-semibold text-pino-oscuro">
                            {p.nombre}
                          </p>
                          <p className="text-xs text-stone-500">{p.beneficio}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-full rounded-2xl bg-pino-claro p-6 text-center lg:w-64 lg:shrink-0">
                <p className="text-3xl font-bold text-pino-oscuro">
                  {formatMXN(pack.precioMensual)}
                </p>
                <p className="text-sm text-stone-500">por mes</p>
                <ul className="mt-4 space-y-1 text-left text-xs text-stone-600">
                  <li>✓ Envío incluido a todo México</li>
                  <li>✓ Recordatorios y portal personal</li>
                  <li>✓ Pausa o cancela cuando quieras</li>
                </ul>
                <Link
                  href={`/checkout?pack=${pack.id}`}
                  className="mt-5 block rounded-full bg-pino px-6 py-3 text-sm font-semibold text-white transition hover:bg-pino-oscuro"
                >
                  Suscribirme
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-xs leading-relaxed text-stone-400">
        Estos productos no son medicamentos. Los suplementos alimenticios no
        sustituyen una alimentación equilibrada. Consulta a tu médico si tomas
        medicamentos o padeces alguna condición.
      </p>
    </div>
  );
}
