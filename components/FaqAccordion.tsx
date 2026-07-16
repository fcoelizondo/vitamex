"use client";

import { useState } from "react";

export default function FaqAccordion({
  faqs,
}: {
  faqs: { pregunta: string; respuesta: string }[];
}) {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <div className="divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
      {faqs.map((faq, i) => (
        <div key={faq.pregunta}>
          <button
            onClick={() => setAbierta(abierta === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            aria-expanded={abierta === i}
          >
            <span className="pr-4 font-semibold text-pino-oscuro">
              {faq.pregunta}
            </span>
            <span className="text-xl text-pino">{abierta === i ? "−" : "+"}</span>
          </button>
          {abierta === i && (
            <p className="px-6 pb-5 text-sm leading-relaxed text-stone-600">
              {faq.respuesta}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
