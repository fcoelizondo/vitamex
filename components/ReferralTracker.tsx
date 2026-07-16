"use client";

import { useState } from "react";

const CODIGO = "FRAN-MESGRATIS";
const MESES_META = 6;

type Referido = {
  nombre: string;
  estado: "invitado" | "suscrito" | "completado";
  mesesActivos: number;
  fecha: string;
};

const referidos: Referido[] = [
  { nombre: "Ana R.", estado: "completado", mesesActivos: 6, fecha: "Se suscribió en enero 2026" },
  { nombre: "Luis M.", estado: "suscrito", mesesActivos: 3, fecha: "Se suscribió en abril 2026" },
  { nombre: "Sofía T.", estado: "suscrito", mesesActivos: 1, fecha: "Se suscribió en junio 2026" },
  { nombre: "carlos.g@correo.com", estado: "invitado", mesesActivos: 0, fecha: "Invitación enviada el 2 de julio" },
];

function EstadoBadge({ referido }: { referido: Referido }) {
  if (referido.estado === "completado") {
    return (
      <span className="rounded-full bg-pino px-3 py-1 text-xs font-semibold text-white">
        🎉 Mes gratis ganado
      </span>
    );
  }
  if (referido.estado === "suscrito") {
    return (
      <span className="rounded-full bg-pino-claro px-3 py-1 text-xs font-semibold text-pino">
        {referido.mesesActivos} de {MESES_META} meses
      </span>
    );
  }
  return (
    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-500">
      Invitación enviada
    </span>
  );
}

export default function ReferralTracker() {
  const [copiado, setCopiado] = useState(false);

  const mesesGratisGanados = referidos.filter((r) => r.estado === "completado").length;
  const enProgreso = referidos.filter((r) => r.estado === "suscrito").length;

  async function copiarCodigo() {
    try {
      await navigator.clipboard.writeText(CODIGO);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // sin acceso al portapapeles: el código queda visible en pantalla
    }
  }

  return (
    <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-semibold text-pino-oscuro">🎁 Programa de referidos</h2>
          <p className="mt-1 max-w-md text-sm text-stone-600">
            Comparte tu código. Cuando tu referido cumpla{" "}
            <strong>{MESES_META} meses de suscripción</strong>, tú recibes{" "}
            <strong>1 mes gratis</strong>. Sin límite de referidos.
          </p>
        </div>
        <button
          onClick={copiarCodigo}
          className="shrink-0 rounded-full bg-pino px-6 py-3 text-sm font-semibold text-white transition hover:bg-pino-oscuro"
        >
          {copiado ? "✓ Copiado" : `Copiar mi código: ${CODIGO}`}
        </button>
      </div>

      {/* Resumen */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-4 text-center">
          <p className="text-2xl font-bold text-pino-oscuro">{mesesGratisGanados}</p>
          <p className="text-xs text-stone-500">Meses gratis ganados</p>
        </div>
        <div className="rounded-xl bg-white p-4 text-center">
          <p className="text-2xl font-bold text-pino-oscuro">{enProgreso}</p>
          <p className="text-xs text-stone-500">Referidos en progreso</p>
        </div>
        <div className="rounded-xl bg-white p-4 text-center">
          <p className="text-2xl font-bold text-pino-oscuro">{referidos.length}</p>
          <p className="text-xs text-stone-500">Invitaciones totales</p>
        </div>
      </div>

      {/* Rastreador */}
      <div className="mt-5 rounded-xl bg-white p-5">
        <h3 className="text-sm font-semibold text-pino-oscuro">Mis referidos</h3>
        <div className="mt-3 divide-y divide-stone-100">
          {referidos.map((r) => (
            <div key={r.nombre} className="py-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-stone-700">{r.nombre}</p>
                  <p className="text-xs text-stone-400">{r.fecha}</p>
                </div>
                <EstadoBadge referido={r} />
              </div>
              {r.estado !== "invitado" && (
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-stone-100">
                  <div
                    className={`h-full rounded-full transition-all ${
                      r.estado === "completado" ? "bg-amber-400" : "bg-pino"
                    }`}
                    style={{ width: `${(r.mesesActivos / MESES_META) * 100}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-stone-400">
          El mes gratis se aplica automáticamente a tu siguiente cobro cuando tu
          referido cumple {MESES_META} meses con suscripción activa.
        </p>
      </div>
    </div>
  );
}
