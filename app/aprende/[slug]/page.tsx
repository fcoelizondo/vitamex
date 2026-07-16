import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articulos, getArticulo } from "@/lib/articles";
import FaqAccordion from "@/components/FaqAccordion";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) return {};
  return {
    title: articulo.titulo,
    description: articulo.resumen,
    openGraph: { title: articulo.titulo, description: articulo.resumen },
  };
}

export default async function ArticuloPage({ params }: Props) {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) notFound();

  const relacionados = articulos.filter((a) => a.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articulo.titulo,
    description: articulo.resumen,
    inLanguage: "es-MX",
    publisher: { "@type": "Organization", name: "Vitamex" },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/aprende" className="text-sm font-medium text-pino hover:underline">
        ← Todos los artículos
      </Link>

      <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-pino">
        {articulo.categoria} · Lectura de {articulo.minutos} min
      </span>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
        {articulo.titulo}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-stone-600">
        {articulo.resumen}
      </p>

      {articulo.contenido.map((seccion) => (
        <section key={seccion.subtitulo} className="mt-10">
          <h2 className="text-xl font-bold text-pino-oscuro">
            {seccion.subtitulo}
          </h2>
          {seccion.parrafos.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-stone-700">
              {p}
            </p>
          ))}
        </section>
      ))}

      {/* CTA intermedia */}
      <div className="mt-12 rounded-2xl bg-pino-claro p-6 text-center">
        <p className="font-semibold text-pino-oscuro">
          ¿Este suplemento es para ti? Descúbrelo en 3 minutos.
        </p>
        <Link
          href="/cuestionario"
          className="mt-4 inline-block rounded-full bg-pino px-6 py-3 text-sm font-semibold text-white transition hover:bg-pino-oscuro"
        >
          Haz tu evaluación gratuita
        </Link>
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-pino-oscuro">
          Preguntas frecuentes
        </h2>
        <div className="mt-5">
          <FaqAccordion faqs={articulo.faqs} />
        </div>
      </section>

      {/* Bibliografía */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-pino-oscuro">Bibliografía</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-stone-500">
          {articulo.bibliografia.map((ref) => (
            <li key={ref}>{ref}</li>
          ))}
        </ol>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-stone-400">
        Este contenido tiene fines educativos y no constituye consejo médico.
        Los suplementos alimenticios no son medicamentos y no sustituyen una
        alimentación equilibrada ni la atención de un profesional de la salud.
      </p>

      {/* Relacionados */}
      <section className="mt-14 border-t border-stone-200 pt-10">
        <h2 className="text-lg font-bold text-pino-oscuro">Sigue aprendiendo</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {relacionados.map((a) => (
            <Link
              key={a.slug}
              href={`/aprende/${a.slug}`}
              className="rounded-xl border border-stone-200 bg-white p-4 text-sm font-semibold text-pino-oscuro transition hover:border-pino"
            >
              {a.titulo}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
