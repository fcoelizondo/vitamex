import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="mt-6 text-3xl font-bold text-pino-oscuro">
        No encontramos esta página
      </h1>
      <p className="mt-3 text-stone-600">
        Quizá el enlace cambió. Empieza por tu evaluación gratuita o explora
        nuestros artículos.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-pino px-6 py-3 font-semibold text-white transition hover:bg-pino-oscuro"
        >
          Ir al inicio
        </Link>
        <Link
          href="/aprende"
          className="rounded-full border border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:border-pino hover:text-pino"
        >
          Ver artículos
        </Link>
      </div>
    </div>
  );
}
