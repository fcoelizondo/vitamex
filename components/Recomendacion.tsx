"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { generarRecomendacion, QuizAnswers, Recomendacion as Reco } from "@/lib/quiz";
import { getPack, getProducto, formatMXN } from "@/lib/products";

const PRECIO_EXTRA = 199;

export default function Recomendacion() {
  const [reco, setReco] = useState<Reco | null>(null);
  const [nombre, setNombre] = useState<string>("");
  const [sinDatos, setSinDatos] = useState(false);

  useEffect(() => {
    try {
      const guardado = localStorage.getItem("vitamex-quiz");
      if (!guardado) {
        setSinDatos(true);
        return;
      }
      const respuestas = JSON.parse(guardado) as QuizAnswers;
      setNombre((respuestas.nombre as string) || "");
      setReco(generarRecomendacion(respuestas));
    } catch {
      setSinDatos(true);
    }
  }, []);

  if (sinDatos) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold text-pino-oscuro">
          Aún no tenemos tus respuestas
        </h1>
        <p className="mt-3 text-stone-600">
          Responde la evaluación de 3 minutos para recibir tu recomendación
          personalizada.
        </p>
        <Link
          href="/cuestionario"
          className="mt-6 inline-block rounded-full bg-pino px-8 py-4 font-semibold text-white transition hover:bg-pino-oscuro"
        >
          Comenzar evaluación
        </Link>
      </div>
    );
  }

  if (!reco) {
    return (
      <div className="py-24 text-center text-stone-400">
        Preparando tu recomendación…
      </div>
    );
  }

  const pack = getPack(reco.packPrincipal)!;
  const extras = reco.extras
    .map(getProducto)
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .filter((p) => !pack.productos.includes(p.id));
  const total = pack.precioMensual + extras.length * PRECIO_EXTRA;

  return (
    <div>
      <span className="inline-block rounded-full bg-pino-claro px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-pino">
        Tu recomendación personalizada
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
        {nombre ? `${nombre}, esta` : "Esta"} es tu rutina ideal
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        Con base en tus respuestas, esto es lo que recomendamos y por qué.
      </p>

      {/* Pack principal */}
      <div className="mt-10 rounded-3xl border-2 border-pino bg-white p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-4xl">{pack.emoji}</span>
            <h2 className="mt-3 text-2xl font-bold text-pino-oscuro">
              Pack {pack.nombre}
            </h2>
            <p className="mt-1 text-stone-500">{pack.tagline}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-pino-oscuro">
              {formatMXN(pack.precioMensual)}
            </p>
            <p className="text-sm text-stone-400">/mes</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {pack.productos.map((id) => {
            const p = getProducto(id)!;
            return (
              <span
                key={id}
                className="rounded-full bg-pino-claro px-4 py-2 text-sm font-medium text-pino-oscuro"
              >
                {p.emoji} {p.nombre}
              </span>
            );
          })}
        </div>
      </div>

      {/* Extras */}
      {extras.length > 0 && (
        <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-8">
          <h3 className="text-lg font-semibold text-pino-oscuro">
            Complementos recomendados para ti
          </h3>
          <div className="mt-4 space-y-3">
            {extras.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between rounded-xl bg-crema px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <p className="font-semibold text-pino-oscuro">{p.nombre}</p>
                    <p className="text-sm text-stone-500">{p.beneficio}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-stone-600">
                  +{formatMXN(PRECIO_EXTRA)}/mes
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explicación científica */}
      <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-8">
        <h3 className="text-lg font-semibold text-pino-oscuro">
          🔬 Por qué te recomendamos esto
        </h3>
        <div className="mt-4 space-y-5">
          {reco.razones.map((r) => (
            <div key={r.titulo}>
              <h4 className="font-semibold text-pino">{r.titulo}</h4>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                {r.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Avisos */}
      {reco.avisoMedicamentos && (
        <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
          <strong>Importante:</strong> Nos indicaste que tomas medicamentos de
          forma regular. Antes de iniciar cualquier suplemento, consulta a tu
          médico para descartar interacciones.
        </div>
      )}
      <p className="mt-6 text-xs leading-relaxed text-stone-400">
        Los suplementos alimenticios no son medicamentos, no sustituyen una
        alimentación equilibrada ni la atención médica. Esta recomendación tiene
        fines educativos y no constituye un diagnóstico.
      </p>

      {/* CTA */}
      <div className="mt-8 rounded-3xl bg-pino p-8 text-center text-white">
        <p className="text-sm uppercase tracking-wide text-emerald-100/80">
          Tu rutina completa
        </p>
        <p className="mt-2 text-4xl font-bold">
          {formatMXN(total)}
          <span className="text-lg font-normal text-emerald-100/80"> /mes</span>
        </p>
        <p className="mt-2 text-sm text-emerald-100/80">
          Envío incluido · Pausa o cancela cuando quieras
        </p>
        <Link
          href={`/checkout?pack=${pack.id}${extras.length ? `&extras=${extras.map((e) => e.id).join(",")}` : ""}`}
          className="mt-6 inline-block rounded-full bg-white px-10 py-4 font-semibold text-pino shadow-lg transition hover:bg-amber-50"
        >
          Suscribirme
        </Link>
        <p className="mt-4 text-xs text-emerald-100/60">
          Sin plazos forzosos. Primer envío en 2 a 5 días hábiles.
        </p>
      </div>

      <p className="mt-6 text-center text-sm text-stone-400">
        ¿Cambiaron tus objetivos?{" "}
        <Link href="/cuestionario" className="font-medium text-pino hover:underline">
          Repetir la evaluación
        </Link>
      </p>
    </div>
  );
}
