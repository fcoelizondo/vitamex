import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Vitamex — Tu rutina de suplementos, diseñada para ti",
    template: "%s | Vitamex",
  },
  description:
    "Descubre qué suplementos necesitas en menos de 3 minutos. Recomendación personalizada, entregada automáticamente cada mes en todo México.",
  keywords: [
    "suplementos",
    "vitaminas",
    "suscripción",
    "México",
    "magnesio",
    "omega 3",
    "vitamina d",
  ],
  openGraph: {
    title: "Vitamex — Tu rutina de suplementos, diseñada para ti",
    description:
      "Responde un cuestionario de 3 minutos y recibe tu rutina personalizada de suplementos cada mes.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body className="bg-crema text-stone-800 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
