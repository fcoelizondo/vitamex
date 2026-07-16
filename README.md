# Vitamex

Sitio web de **Vitamex**: suscripción inteligente de suplementos en México.

> "Tu rutina diaria de suplementos, diseñada para ti y entregada automáticamente."

## Qué incluye

- **Home** educativa (no ecommerce tradicional): hero, cómo funciona, beneficios, paquetes, opiniones, FAQ y CTA de suscripción.
- **Cuestionario** (`/cuestionario`): 10 preguntas en menos de 3 minutos (edad, objetivos, sueño, ejercicio, dieta, digestión, estrés, medicamentos).
- **Recomendación personalizada** (`/recomendacion`): motor de reglas que asigna un pack principal + complementos, con explicación científica y avisos de seguridad.
- **Paquetes** (`/paquetes`): Daily Essentials, Energía, Descanso, Active y 40+.
- **Checkout** (`/checkout`): flujo de suscripción mensual (demo; en producción se integra con Stripe Billing).
- **Portal del cliente** (`/cuenta`): próximo envío, pausar/reanudar, cambiar dirección y frecuencia, historial, facturas y referidos (demo con datos de ejemplo).
- **Contenido SEO** (`/aprende`): artículos con explicación, FAQ, bibliografía y CTA a la evaluación, más `sitemap.xml`, `robots.txt` y JSON-LD.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Contenido y catálogo en `lib/` (fácil de migrar a un headless CMS)

## Desarrollo

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de producción
```

## Estructura

```
app/            Rutas (home, cuestionario, recomendacion, paquetes, checkout, cuenta, aprende)
components/     Header, Footer, Quiz, Recomendacion, Checkout, Dashboard, FaqAccordion
lib/            products.ts (catálogo y packs), quiz.ts (preguntas y motor de recomendación), articles.ts (artículos SEO)
```

## Próximos pasos (según roadmap)

- Integración real con Stripe Billing para suscripciones.
- Headless CMS para artículos y catálogo.
- Klaviyo (email), HubSpot (CRM), GA4/Mixpanel/PostHog (analytics).
- Chatbot de IA para dudas sobre suplementos.
- Programa de referidos con códigos reales.

## Aviso

Los suplementos alimenticios no son medicamentos y no sustituyen una alimentación equilibrada ni la atención médica. El contenido del sitio es educativo.
