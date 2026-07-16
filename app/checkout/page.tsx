import type { Metadata } from "next";
import { Suspense } from "react";
import Checkout from "@/components/Checkout";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Activa tu suscripción mensual de suplementos.",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Suspense
        fallback={<div className="py-24 text-center text-stone-400">Cargando…</div>}
      >
        <Checkout />
      </Suspense>
    </div>
  );
}
