import Link from "next/link";
import { packs, productos, formatMXN, PRECIO_BASE } from "@/lib/products";
import { articulos } from "@/lib/articles";
import FaqAccordion from "@/components/FaqAccordion";

const pasos = [
  {
    numero: "1",
    titulo: "Responde el cuestionario",
    texto:
      "Menos de 3 minutos sobre tus objetivos, sueño, ejercicio y estilo de vida. Sin tecnicismos.",
    emoji: "📝",
  },
  {
    numero: "2",
    titulo: "Recibe tu recomendación",
    texto:
      "Te decimos exactamente qué tomar y por qué, con explicación sencilla y respaldo científico.",
    emoji: "🔬",
  },
  {
    numero: "3",
    titulo: "Tu caja llega cada mes",
    texto:
      "Tu rutina personalizada llega a tu puerta automáticamente. Pausa, cambia o cancela cuando quieras.",
    emoji: "📦",
  },
];

const beneficios = [
  {
    titulo: "Sin investigar durante horas",
    texto:
      "Nosotros leemos los estudios para que tú no tengas que hacerlo. Cada recomendación se basa en evidencia publicada.",
    emoji: "🎯",
  },
  {
    titulo: "Nunca se te olvida recomprar",
    texto:
      "Tu siguiente caja llega antes de que se acabe la anterior. Adiós a los frascos vacíos abandonados.",
    emoji: "🔁",
  },
  {
    titulo: "Calidad verificada",
    texto:
      "Formas de alta absorción, dosis efectivas usadas en estudios y análisis de calidad por lote.",
    emoji: "✅",
  },
  {
    titulo: "Cero promesas milagro",
    texto:
      "Si un suplemento no tiene evidencia, no lo vendemos. Así de simple. Honestidad antes que ventas.",
    emoji: "🤝",
  },
  {
    titulo: "Flexibilidad total",
    texto:
      "Pausa, cambia productos, ajusta la frecuencia o cancela desde tu portal en dos clics. Sin llamadas, sin letras chiquitas.",
    emoji: "🎛️",
  },
  {
    titulo: "Envío incluido en todo México",
    texto:
      "Tu suscripción incluye el envío a domicilio, recordatorios y acceso a contenido educativo.",
    emoji: "🚚",
  },
];

const opiniones = [
  {
    nombre: "Mariana G.",
    ciudad: "Ciudad de México",
    texto:
      "Llevaba años comprando vitaminas al azar en la farmacia. El cuestionario me dijo exactamente qué necesitaba y por qué. Tres meses después, duermo mucho mejor.",
    estrellas: 5,
  },
  {
    nombre: "Ricardo T.",
    ciudad: "Monterrey",
    texto:
      "Lo que más valoro es no tener que pensar en recomprar. La caja llega sola cada mes y el portal para pausar cuando viajo es buenísimo.",
    estrellas: 5,
  },
  {
    nombre: "Paola S.",
    ciudad: "Guadalajara",
    texto:
      "Me convenció que explican la ciencia detrás de cada producto sin exagerar. Nada de 'cura todo'. Se siente honesto.",
    estrellas: 5,
  },
];

const faqs = [
  {
    pregunta: "¿Cómo funciona la suscripción?",
    respuesta:
      "Respondes el cuestionario, eliges tu rutina recomendada y cada mes recibes tu caja automáticamente. Puedes pausar, cambiar productos o cancelar en cualquier momento desde tu portal, sin penalizaciones.",
  },
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta: `Los paquetes van desde ${formatMXN(499)} al mes, con el plan más popular en ${formatMXN(PRECIO_BASE)}. El precio incluye los suplementos, el envío a todo México, recordatorios y acceso al contenido educativo.`,
  },
  {
    pregunta: "¿Puedo cancelar cuando quiera?",
    respuesta:
      "Sí. No hay plazos forzosos ni penalizaciones. Cancelas desde tu portal en dos clics y no se te cobra el siguiente mes.",
  },
  {
    pregunta: "¿Los suplementos son de calidad?",
    respuesta:
      "Trabajamos con fabricantes certificados, usamos formas de alta absorción (como magnesio glicinato en lugar de óxido) en dosis comparables a las de los estudios, y cada lote pasa análisis de calidad.",
  },
  {
    pregunta: "¿Esto sustituye ir al médico?",
    respuesta:
      "No. Los suplementos no son medicamentos y no sustituyen una alimentación equilibrada ni la atención médica. Si tomas medicamentos o tienes una condición de salud, consulta a tu médico antes de empezar.",
  },
  {
    pregunta: "¿Cómo funciona el programa de referidos?",
    respuesta:
      "Ganan los dos. Si te suscribes con el código de un amigo, tu sexto mes es gratis. Y cuando tu referido cumple 6 meses de suscripción activa, tú recibes 1 mes gratis, aplicado automáticamente a tu siguiente cobro. No hay límite de referidos, y puedes seguir el avance de cada uno desde el rastreador en tu cuenta.",
  },
  {
    pregunta: "¿Hacen envíos a todo México?",
    respuesta:
      "Sí, enviamos a todo el país y el costo ya está incluido en tu suscripción. El primer envío llega en 2 a 5 días hábiles.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-pino-claro px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-pino">
              Suplementos por suscripción en México
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-pino-oscuro sm:text-6xl">
              Descubre qué suplementos necesitas en menos de 3 minutos.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Responde un cuestionario sencillo, recibe una rutina personalizada
              con respaldo científico y olvídate de recomprar: tu caja llega
              automáticamente cada mes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/cuestionario"
                className="w-full rounded-full bg-pino px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pino/20 transition hover:bg-pino-oscuro sm:w-auto"
              >
                Comenzar evaluación gratuita
              </Link>
              <Link
                href="#como-funciona"
                className="w-full rounded-full border border-stone-300 bg-white px-8 py-4 text-base font-semibold text-stone-700 transition hover:border-pino hover:text-pino sm:w-auto"
              >
                Cómo funciona
              </Link>
            </div>
            <p className="mt-4 text-sm text-stone-500">
              Sin compromiso · Cancela cuando quieras · Envío incluido
            </p>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
              Cómo funciona
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Tres pasos. Cero complicaciones.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pasos.map((paso) => (
              <div
                key={paso.numero}
                className="relative rounded-2xl border border-stone-200 bg-crema p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pino text-lg font-bold text-white">
                    {paso.numero}
                  </span>
                  <span className="text-3xl">{paso.emoji}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-pino-oscuro">
                  {paso.titulo}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
              No vendemos vitaminas. Vendemos claridad.
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Entre farmacias que no explican nada y marketplaces con miles de
              opciones, nosotros simplificamos la decisión por completo.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <div
                key={b.titulo}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <span className="text-3xl">{b.emoji}</span>
                <h3 className="mt-4 text-lg font-semibold text-pino-oscuro">
                  {b.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section className="bg-pino py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Rutinas diseñadas para tu vida
            </h2>
            <p className="mt-4 text-lg text-emerald-100/90">
              Empezamos con lo esencial, no con 80 frascos. Cada paquete incluye
              envío, recordatorios y tu portal personal.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packs.map((pack) => (
              <Link
                key={pack.id}
                href={`/paquetes#${pack.id}`}
                className="group rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{pack.emoji}</span>
                  {pack.popular && (
                    <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-pino-oscuro">
                      Más popular
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-bold">{pack.nombre}</h3>
                <p className="mt-1 text-sm text-emerald-100/80">{pack.tagline}</p>
                <p className="mt-4 text-2xl font-bold">
                  {formatMXN(pack.precioMensual)}
                  <span className="text-sm font-normal text-emerald-100/70"> /mes</span>
                </p>
                <p className="mt-3 text-sm text-emerald-100/70">
                  {pack.productos.length} productos · Envío incluido
                </p>
              </Link>
            ))}
            <Link
              href="/cuestionario"
              className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/40 p-6 text-center transition hover:border-white hover:bg-white/10"
            >
              <span className="text-3xl">🤔</span>
              <h3 className="mt-4 text-xl font-bold">¿No sabes cuál elegir?</h3>
              <p className="mt-2 text-sm text-emerald-100/80">
                Haz la evaluación de 3 minutos y te lo decimos.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {opiniones.map((op) => (
              <figure
                key={op.nombre}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <div className="text-amber-400" aria-label={`${op.estrellas} estrellas`}>
                  {"★".repeat(op.estrellas)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-stone-600">
                  “{op.texto}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-pino-oscuro">
                  {op.nombre}
                  <span className="block font-normal text-stone-400">{op.ciudad}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Aprende */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
                Aprende antes de comprar
              </h2>
              <p className="mt-3 max-w-xl text-lg text-stone-600">
                Guías claras y con bibliografía, sin promesas milagro.
              </p>
            </div>
            <Link
              href="/aprende"
              className="text-sm font-semibold text-pino hover:underline"
            >
              Ver todos los artículos →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articulos.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                href={`/aprende/${a.slug}`}
                className="group rounded-2xl border border-stone-200 bg-crema p-6 transition hover:border-pino"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-pino">
                  {a.categoria}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-pino-oscuro group-hover:underline">
                  {a.titulo}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">
                  {a.resumen}
                </p>
                <span className="mt-4 block text-xs text-stone-400">
                  Lectura de {a.minutos} min
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="preguntas" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-pino-oscuro sm:text-4xl">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-pino px-6 py-16 text-center text-white sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tu rutina, diseñada para ti y entregada automáticamente.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-100/90">
              Deja de adivinar en el pasillo de la farmacia. En 3 minutos sabrás
              exactamente qué necesitas.
            </p>
            <Link
              href="/cuestionario"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-pino shadow-lg transition hover:bg-amber-50"
            >
              Comenzar evaluación gratuita
            </Link>
            <p className="mt-4 text-sm text-emerald-100/70">
              Desde {formatMXN(499)} al mes · Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>

      {/* Catálogo mini */}
      <section className="sr-only" aria-hidden>
        {productos.map((p) => (
          <span key={p.id}>{p.nombre}</span>
        ))}
      </section>
    </>
  );
}
