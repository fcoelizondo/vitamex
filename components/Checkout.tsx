"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { getPack, getProducto, formatMXN } from "@/lib/products";

const PRECIO_EXTRA = 199;

export default function Checkout() {
  const params = useSearchParams();
  const [confirmado, setConfirmado] = useState(false);

  const pack = getPack(params.get("pack") || "daily-essentials");
  const extras = (params.get("extras") || "")
    .split(",")
    .filter(Boolean)
    .map(getProducto)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (!pack) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold text-pino-oscuro">
          No encontramos ese paquete
        </h1>
        <Link
          href="/paquetes"
          className="mt-6 inline-block rounded-full bg-pino px-8 py-4 font-semibold text-white"
        >
          Ver paquetes
        </Link>
      </div>
    );
  }

  const total = pack.precioMensual + extras.length * PRECIO_EXTRA;

  if (confirmado) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <span className="text-6xl">🎉</span>
        <h1 className="mt-6 text-3xl font-bold text-pino-oscuro">
          ¡Tu suscripción está activa!
        </h1>
        <p className="mt-4 leading-relaxed text-stone-600">
          Tu primera caja del pack <strong>{pack.nombre}</strong> llegará en 2 a
          5 días hábiles. Te enviamos la confirmación y tu factura por correo.
        </p>
        <Link
          href="/cuenta"
          className="mt-8 inline-block rounded-full bg-pino px-8 py-4 font-semibold text-white transition hover:bg-pino-oscuro"
        >
          Ir a mi portal
        </Link>
        <p className="mt-6 text-xs text-stone-400">
          (Demo: en producción este paso se procesa con Stripe Billing.)
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
        Activa tu suscripción
      </h1>
      <p className="mt-2 text-stone-600">
        Un solo pago mensual. Sin plazos forzosos.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* Formulario */}
        <form
          className="space-y-6 lg:col-span-3"
          onSubmit={(e) => {
            e.preventDefault();
            setConfirmado(true);
          }}
        >
          <fieldset className="rounded-2xl border border-stone-200 bg-white p-6">
            <legend className="px-2 text-sm font-semibold text-pino-oscuro">
              Datos de contacto
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Nombre completo" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
              <input required type="email" placeholder="Correo electrónico" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
              <input required type="tel" placeholder="WhatsApp / teléfono" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino sm:col-span-2" />
              <div className="sm:col-span-2">
                <input placeholder="Código de referido (opcional)" className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
                <p className="mt-2 text-xs text-stone-400">
                  ¿Te invitó un amigo? Ingresa su código y{" "}
                  <strong className="text-pino">tu sexto mes es gratis</strong>.
                  Al cumplirlo, tu amigo también recibe 1 mes gratis.
                </p>
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-2xl border border-stone-200 bg-white p-6">
            <legend className="px-2 text-sm font-semibold text-pino-oscuro">
              Dirección de envío
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Calle y número" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino sm:col-span-2" />
              <input required placeholder="Colonia" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
              <input required placeholder="Código postal" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
              <input required placeholder="Ciudad" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
              <input required placeholder="Estado" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
            </div>
          </fieldset>

          <fieldset className="rounded-2xl border border-stone-200 bg-white p-6">
            <legend className="px-2 text-sm font-semibold text-pino-oscuro">
              Pago seguro
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Número de tarjeta" inputMode="numeric" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino sm:col-span-2" />
              <input required placeholder="MM/AA" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
              <input required placeholder="CVC" inputMode="numeric" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-pino" />
            </div>
            <p className="mt-3 text-xs text-stone-400">
              🔒 Procesado por Stripe. No almacenamos los datos de tu tarjeta.
            </p>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-full bg-pino px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pino/20 transition hover:bg-pino-oscuro"
          >
            Confirmar suscripción · {formatMXN(total)}/mes
          </button>
          <p className="text-center text-xs text-stone-400">
            Al suscribirte aceptas los términos del servicio. Puedes pausar o
            cancelar en cualquier momento desde tu portal.
          </p>
        </form>

        {/* Resumen */}
        <aside className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-400">
              Tu rutina mensual
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl">{pack.emoji}</span>
              <div>
                <p className="font-bold text-pino-oscuro">Pack {pack.nombre}</p>
                <p className="text-sm text-stone-500">
                  {pack.productos.map((id) => getProducto(id)?.nombre).join(" · ")}
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 border-t border-stone-100 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500">Pack {pack.nombre}</span>
                <span className="font-medium">{formatMXN(pack.precioMensual)}</span>
              </div>
              {extras.map((p) => (
                <div key={p.id} className="flex justify-between">
                  <span className="text-stone-500">
                    {p.emoji} {p.nombre}
                  </span>
                  <span className="font-medium">{formatMXN(PRECIO_EXTRA)}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span className="text-stone-500">Envío</span>
                <span className="font-medium text-pino">Incluido</span>
              </div>
              <div className="flex justify-between border-t border-stone-100 pt-3 text-base font-bold text-pino-oscuro">
                <span>Total mensual</span>
                <span>{formatMXN(total)}</span>
              </div>
            </div>
            <ul className="mt-4 space-y-1 text-xs text-stone-500">
              <li>✓ Primer envío en 2 a 5 días hábiles</li>
              <li>✓ Recordatorios por correo y WhatsApp</li>
              <li>✓ Cancela cuando quieras, sin penalización</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
