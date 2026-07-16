import type { Metadata } from "next";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Administra tu suscripción: próximos envíos, pausas y cambios.",
};

export default function CuentaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Dashboard />
    </div>
  );
}
