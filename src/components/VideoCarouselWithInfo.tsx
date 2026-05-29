"use client";

import { useState, useEffect, useRef } from "react";
import { businessInfo, getWhatsAppHref } from "@/lib/site";

export type VideoSlide = {
  src: string;
  thumbnail: string;
  type: "video" | "image";
};

type Props = {
  slides: VideoSlide[];
};

const hours = [
  { days: "Seg–Qui", time: "06:00–22:00" },
  { days: "Sexta", time: "06:00–21:00" },
  { days: "Sábado", time: "08:00–12:00" },
  { days: "Dom e feriados", time: "09:00–13:00" },
];

export function VideoCarouselWithInfo({ slides }: Props) {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const whatsappHref = getWhatsAppHref();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current, slides.length]);

  useEffect(() => {
    if (slides[current].type === "video" && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [current, slides]);

  const slide = slides[current];

  return (
    <>
      {/* Vídeo / Foto principal */}
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {slide.type === "video" ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={slide.src} />
          </video>
        ) : (
          <img src={slide.src} alt="" className="h-full w-full object-cover" />
        )}

        {/* Indicadores */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-[#F5C400]" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Miniaturas */}
      <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1 sm:gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`relative h-11 w-16 shrink-0 overflow-hidden transition-opacity sm:h-14 sm:w-20 ${
              i === current ? "opacity-100 ring-2 ring-[#F5C400]" : "opacity-50 hover:opacity-80"
            }`}
          >
            <img src={s.thumbnail} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {/* Horários */}
      <div className="mt-3 rounded border border-white/10 bg-black/50 p-3 lg:p-4">
        <div className="mb-2 flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F5C400"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <p className="text-sm font-semibold text-white">Horário de funcionamento</p>
        </div>
        <div className="space-y-1.5">
          {hours.map((h) => (
            <div key={h.days} className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">{h.days}</span>
              <span className="font-medium text-white">{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Endereço */}
      <div className="mt-2 rounded border border-white/10 bg-black/50 p-3 lg:p-4">
        <div className="mb-1.5 flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F5C400"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-sm font-semibold text-white">Endereço</p>
        </div>
        <p className="text-xs leading-relaxed text-zinc-300">{businessInfo.fullAddress}</p>
        <a
          href={businessInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs text-[#F5C400] hover:underline"
        >
          Ver no mapa →
        </a>
      </div>

      {/* CTA WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics="whatsapp"
        data-location="hero-panel-cta"
        className="mt-3 flex w-full items-center justify-center rounded bg-[#F5C400] py-2.5 text-sm font-bold tracking-[0.08em] text-black uppercase lg:py-3"
      >
        Agendar aula experimental
      </a>
    </>
  );
}
