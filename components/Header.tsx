"use client";

import Link from "next/link";
import { useState } from "react";

const navegacion = [
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/paquetes", label: "Paquetes" },
  { href: "/aprende", label: "Aprende" },
  { href: "/cuenta", label: "Mi cuenta" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-crema/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pino text-sm font-bold text-white">
            V
          </span>
          <span className="text-xl font-bold tracking-tight text-pino-oscuro">
            Vitamex
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navegacion.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition hover:text-pino"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cuestionario"
            className="rounded-full bg-pino px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pino-oscuro"
          >
            Comenzar evaluación
          </Link>
        </nav>

        <button
          onClick={() => setAbierto(!abierto)}
          className="rounded-md p-2 text-stone-600 md:hidden"
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {abierto ? (
              <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {abierto && (
        <nav className="border-t border-stone-200 bg-crema px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navegacion.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setAbierto(false)}
                className="py-1 text-sm font-medium text-stone-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cuestionario"
              onClick={() => setAbierto(false)}
              className="mt-2 rounded-full bg-pino px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Comenzar evaluación
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
