"use client";

import { useState, useEffect } from "react";
import { homeMedia } from "@/lib/media";

const slides = [
  homeMedia.recepcao,
  homeMedia.musculacao1,
  homeMedia.lutas,
  homeMedia.energy,
  homeMedia.convivencia,
  homeMedia.fachada,
];

const bentoItems: { label: string; wide?: boolean; icon: React.ReactNode }[] = [
  {
    label: "Peso livre",
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
        <rect x="7" y="10" width="10" height="4" rx="1"/>
      </svg>
    ),
  },
  {
    label: "Musculação",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="1" y="11" width="4" height="2" rx="1"/><rect x="19" y="11" width="4" height="2" rx="1"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
        <rect x="7" y="9" width="3" height="6" rx="1"/><rect x="14" y="9" width="3" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    label: "Sala de luta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="5" r="2"/>
        <path d="M5 20l3-6 4 3 4-3 3 6"/><path d="M9 14l3-4 3 4"/>
      </svg>
    ),
  },
  {
    label: "Box de cross training",
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    label: "Personalité",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="7" r="4"/>
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
      </svg>
    ),
  },
  {
    label: "Armário rotativo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <circle cx="12" cy="12" r="2"/>
        <line x1="12" y1="14" x2="12" y2="16"/>
      </svg>
    ),
  },
  {
    label: "Ducha quente",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M4 12a8 8 0 0 1 16 0"/>
        <line x1="12" y1="12" x2="12" y2="4"/>
        <line x1="8" y1="16" x2="8" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="16" y1="16" x2="16" y2="20"/>
      </svg>
    ),
  },
  {
    label: "Ar condicionado",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="2" y="6" width="20" height="8" rx="2"/>
        <line x1="6" y1="14" x2="6" y2="18"/><line x1="10" y1="14" x2="10" y2="18"/>
        <line x1="14" y1="14" x2="14" y2="18"/><line x1="18" y1="14" x2="18" y2="18"/>
        <line x1="6" y1="10" x2="14" y2="10"/>
      </svg>
    ),
  },
  {
    label: "Equipamentos modernos",
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
  },
  {
    label: "App do aluno",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "Ambiente familiar",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export function ExperienceSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="section-padding page-gutter bg-[#111111]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">

          {/* Carrossel de fotos */}
          <div className="relative overflow-hidden lg:self-center">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slides[current]}
                alt=""
                className="h-full w-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/10" />

              <button
                onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>

            </div>

            {/* Miniaturas */}
            <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
              {slides.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para foto ${i + 1}`}
                  className={`relative h-12 w-20 shrink-0 overflow-hidden transition-all duration-200 ${
                    i === current
                      ? "opacity-100 ring-2 ring-[#F5C400]"
                      : "opacity-45 hover:opacity-75"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Título + Bento grid */}
          <div>
            <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Diferenciais V3</p>
            <h2 className="display-font mt-3 text-4xl uppercase leading-[0.9] md:text-5xl">
              Experiência completa<br />para evoluir.
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {bentoItems.map((item) =>
                item.wide ? (
                  <div
                    key={item.label}
                    className="col-span-2 flex items-center gap-4 rounded border border-white/10 bg-zinc-900/60 p-4 transition-colors hover:border-[#F5C400]/30"
                  >
                    <div className="shrink-0 rounded bg-[#F5C400]/10 p-2.5 text-[#F5C400]">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold tracking-wider text-white uppercase">{item.label}</p>
                  </div>
                ) : (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center gap-2.5 rounded border border-white/10 bg-black py-6 px-3 text-center transition-colors hover:border-[#F5C400]/30"
                  >
                    <div className="text-[#F5C400]">{item.icon}</div>
                    <p className="text-[11px] leading-tight tracking-wide text-zinc-300">{item.label}</p>
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
