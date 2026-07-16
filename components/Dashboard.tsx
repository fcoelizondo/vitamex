"use client";

import Link from "next/link";
import { useState } from "react";
import { formatMXN } from "@/lib/products";
import ReferralTracker from "@/components/ReferralTracker";

const historial = [
  { fecha: "15 junio 2026", estado: "Entregado", total: 699 },
  { fecha: "15 mayo 2026", estado: "Entregado", total: 699 },
  { fecha: "15 abril 2026", estado: "Entregado", total: 699 },
];

const acciones = [
  { emoji: "📍", titulo: "Cambiar dirección", texto: "Actualiza a dónde enviamos tu caja." },
  { emoji: "🗓️", titulo: "Cambiar frecuencia", texto: "Cada 30, 45 o 60 días." },
  { emoji: "➕", titulo: "Agregar productos", texto: "Suma complementos a tu rutina." },
  { emoji: "🎯", titulo: "Actualizar objetivos", texto: "Repite la evaluación y ajusta tu rutina." },
  { emoji: "🧾", titulo: "Descargar facturas", texto: "Facturación CFDI disponible." },
  { emoji: "❌", titulo: "Cancelar suscripción", texto: "Sin penalizaciones ni llamadas." },
];

export default function Dashboard() {
  const [pausada, setPausada] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-stone-400">Mi cuenta · Demo</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
            Hola, Francisco 👋
          </h1>
        </div>
        <span
          className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
            pausada ? "bg-amber-100 text-amber-800" : "bg-pino-claro text-pino"
          }`}
        >
          <span className={`h-2 w-2 rounded-full ${pausada ? "bg-amber-500" : "bg-pino"}`} />
          {pausada ? "Suscripción pausada" : "Suscripción activa"}
        </span>
      </div>

      {/* Próximo envío */}
      <div className="mt-8 rounded-3xl bg-pino p-8 text-white">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-emerald-100/80">
              Próximo envío
            </p>
            <p className="mt-1 text-3xl font-bold">
              {pausada ? "En pausa" : "15 de agosto 2026"}
            </p>
            <p className="mt-2 text-emerald-100/80">
              Pack Daily Essentials + Magnesio Glicinato ·{" "}
              {formatMXN(898)}/mes
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setPausada(!pausada)}
              className="rounded-full bg-white/15 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/25"
            >
              {pausada ? "▶ Reanudar" : "⏸ Pausar"}
            </button>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-pino transition hover:bg-amber-50">
              Adelantar envío
            </button>
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {acciones.map((a) => (
          <button
            key={a.titulo}
            className="rounded-2xl border border-stone-200 bg-white p-5 text-left transition hover:border-pino"
          >
            <span className="text-2xl">{a.emoji}</span>
            <p className="mt-3 font-semibold text-pino-oscuro">{a.titulo}</p>
            <p className="mt-1 text-sm text-stone-500">{a.texto}</p>
          </button>
        ))}
      </div>

      {/* Historial */}
      <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="font-semibold text-pino-oscuro">Historial de envíos</h2>
        <div className="mt-4 divide-y divide-stone-100">
          {historial.map((h) => (
            <div key={h.fecha} className="flex items-center justify-between py-3 text-sm">
              <span className="text-stone-600">{h.fecha}</span>
              <span className="rounded-full bg-pino-claro px-3 py-1 text-xs font-semibold text-pino">
                {h.estado}
              </span>
              <span className="font-medium text-stone-700">{formatMXN(h.total)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Referidos */}
      <ReferralTracker />

      <p className="mt-8 text-center text-sm text-stone-400">
        ¿Dudas sobre tu rutina?{" "}
        <Link href="/aprende" className="font-medium text-pino hover:underline">
          Visita nuestro centro de aprendizaje
        </Link>
      </p>
      <p className="mt-2 text-center text-xs text-stone-300">
        Esta pantalla es una demostración del portal del cliente con datos de ejemplo.
      </p>
    </div>
  );
}
