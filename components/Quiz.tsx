"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { preguntas, QuizAnswers } from "@/lib/quiz";

const MAX_MULTIPLE = 3;

export default function Quiz() {
  const router = useRouter();
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState<QuizAnswers>({});
  const [textoActual, setTextoActual] = useState("");

  const pregunta = preguntas[paso];
  const progreso = Math.round((paso / preguntas.length) * 100);
  const esUltima = paso === preguntas.length - 1;

  function avanzar(nuevas: QuizAnswers) {
    if (esUltima) {
      try {
        localStorage.setItem("vitamex-quiz", JSON.stringify(nuevas));
      } catch {
        // sin almacenamiento disponible seguimos con la navegación
      }
      router.push("/recomendacion");
    } else {
      setPaso(paso + 1);
      setTextoActual("");
    }
  }

  function responderOpcion(valor: string) {
    const nuevas = { ...respuestas, [pregunta.id]: valor };
    setRespuestas(nuevas);
    avanzar(nuevas);
  }

  function toggleMultiple(valor: string) {
    const actual = (respuestas[pregunta.id] as string[]) || [];
    const seleccionado = actual.includes(valor);
    if (!seleccionado && actual.length >= MAX_MULTIPLE) return;
    const nuevo = seleccionado
      ? actual.filter((v) => v !== valor)
      : [...actual, valor];
    setRespuestas({ ...respuestas, [pregunta.id]: nuevo });
  }

  function continuarMultiple() {
    const actual = (respuestas[pregunta.id] as string[]) || [];
    if (actual.length === 0) return;
    avanzar(respuestas);
  }

  function continuarTexto() {
    const valor = textoActual.trim();
    if (!valor) return;
    const nuevas = { ...respuestas, [pregunta.id]: valor };
    setRespuestas(nuevas);
    avanzar(nuevas);
  }

  const seleccionMultiple = (respuestas[pregunta.id] as string[]) || [];

  return (
    <div>
      {/* Barra de progreso */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-stone-500">
          <span>
            Pregunta {paso + 1} de {preguntas.length}
          </span>
          <span>{progreso}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-pino transition-all duration-300"
            style={{ width: `${Math.max(progreso, 4)}%` }}
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-pino-oscuro sm:text-3xl">
        {pregunta.pregunta}
      </h1>
      {pregunta.descripcion && (
        <p className="mt-2 text-stone-500">{pregunta.descripcion}</p>
      )}

      <div className="mt-8 space-y-3">
        {pregunta.tipo === "texto" && (
          <div>
            <input
              type="text"
              value={textoActual}
              onChange={(e) => setTextoActual(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && continuarTexto()}
              placeholder={pregunta.placeholder}
              autoFocus
              className="w-full rounded-xl border border-stone-300 bg-white px-5 py-4 text-lg outline-none transition focus:border-pino focus:ring-2 focus:ring-pino/20"
            />
            <button
              onClick={continuarTexto}
              disabled={!textoActual.trim()}
              className="mt-4 w-full rounded-full bg-pino px-6 py-4 font-semibold text-white transition hover:bg-pino-oscuro disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continuar
            </button>
          </div>
        )}

        {pregunta.tipo === "opciones" &&
          pregunta.opciones!.map((op) => (
            <button
              key={op.value}
              onClick={() => responderOpcion(op.value)}
              className="flex w-full items-center gap-3 rounded-xl border border-stone-300 bg-white px-5 py-4 text-left font-medium text-stone-700 transition hover:border-pino hover:bg-pino-claro"
            >
              {op.emoji && <span className="text-xl">{op.emoji}</span>}
              {op.label}
            </button>
          ))}

        {pregunta.tipo === "multiple" && (
          <>
            {pregunta.opciones!.map((op) => {
              const activo = seleccionMultiple.includes(op.value);
              return (
                <button
                  key={op.value}
                  onClick={() => toggleMultiple(op.value)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-5 py-4 text-left font-medium transition ${
                    activo
                      ? "border-pino bg-pino-claro text-pino-oscuro"
                      : "border-stone-300 bg-white text-stone-700 hover:border-pino"
                  }`}
                >
                  {op.emoji && <span className="text-xl">{op.emoji}</span>}
                  <span className="flex-1">{op.label}</span>
                  {activo && <span className="font-bold text-pino">✓</span>}
                </button>
              );
            })}
            <button
              onClick={continuarMultiple}
              disabled={seleccionMultiple.length === 0}
              className="mt-2 w-full rounded-full bg-pino px-6 py-4 font-semibold text-white transition hover:bg-pino-oscuro disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continuar ({seleccionMultiple.length}/{MAX_MULTIPLE})
            </button>
          </>
        )}
      </div>

      {paso > 0 && (
        <button
          onClick={() => setPaso(paso - 1)}
          className="mt-6 text-sm font-medium text-stone-400 transition hover:text-pino"
        >
          ← Regresar
        </button>
      )}
    </div>
  );
}
