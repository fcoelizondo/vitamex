import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pino text-sm font-bold text-white">
                V
              </span>
              <span className="text-lg font-bold text-pino-oscuro">Vitamex</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              Tu rutina diaria de suplementos, diseñada para ti y entregada
              automáticamente en todo México.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900">Producto</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-500">
              <li><Link href="/cuestionario" className="hover:text-pino">Evaluación gratuita</Link></li>
              <li><Link href="/paquetes" className="hover:text-pino">Paquetes</Link></li>
              <li><Link href="/cuenta" className="hover:text-pino">Mi cuenta</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900">Aprende</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-500">
              <li><Link href="/aprende" className="hover:text-pino">Todos los artículos</Link></li>
              <li><Link href="/aprende/para-que-sirve-el-magnesio" className="hover:text-pino">¿Para qué sirve el magnesio?</Link></li>
              <li><Link href="/aprende/beneficios-de-la-vitamina-d" className="hover:text-pino">Beneficios de la vitamina D</Link></li>
              <li><Link href="/aprende/que-suplementos-realmente-funcionan" className="hover:text-pino">¿Qué suplementos funcionan?</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-500">
              <li>hola@vitamex.mx</li>
              <li>WhatsApp: 55 0000 0000</li>
              <li>Ciudad de México, México</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-200 pt-6">
          <p className="text-xs leading-relaxed text-stone-400">
            Aviso importante: Estos productos no son medicamentos. El consumo de
            estos productos es responsabilidad de quien los recomienda y de quien
            los usa. Los suplementos alimenticios no sustituyen una alimentación
            equilibrada ni un estilo de vida saludable. La información de este
            sitio tiene fines educativos y no constituye consejo médico; consulta
            a un profesional de la salud antes de iniciar cualquier suplemento,
            especialmente si estás embarazada, en lactancia, tomas medicamentos o
            padeces alguna condición médica.
          </p>
          <p className="mt-4 text-xs text-stone-400">
            © {new Date().getFullYear()} Vitamex. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
