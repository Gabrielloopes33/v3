"use client";

import { useState, useEffect, useRef } from "react";
import { businessInfo, getWhatsAppHref } from "@/lib/site";

const videos = [
  "/videos/herov/ACADEMIA%201.mp4",
  "/videos/herov/academia%202.mp4",
  "/videos/herov/academia%203%20.mp4",
  "/videos/herov/academia%204.mp4",
  "/videos/herov/academia%205.mp4",
  "/videos/herov/academia%206.mp4",
  "/videos/herov/academia%207.mp4",
  "/videos/herov/banheiro.mp4",
  "/videos/herov/energy%20.mp4",
  "/videos/herov/tatame%281%29.mp4",
];

const thumbs = [
  "/videos/herov-thumbs/academia-1.jpg",
  "/videos/herov-thumbs/academia-2.jpg",
  "/videos/herov-thumbs/academia-3.jpg",
  "/videos/herov-thumbs/academia-4.jpg",
  "/videos/herov-thumbs/academia-5.jpg",
  "/videos/herov-thumbs/academia-6.jpg",
  "/videos/herov-thumbs/academia-7.jpg",
  "/videos/herov-thumbs/banheiro.jpg",
  "/videos/herov-thumbs/energy.jpg",
  "/videos/herov-thumbs/tatame.jpg",
];

const hours = [
  { days: "Seg–Qui", time: "06:00–22:00" },
  { days: "Sexta", time: "06:00–21:00" },
  { days: "Sábado", time: "08:00–12:00" },
  { days: "Dom e feriados", time: "09:00–13:00" },
];

function VideoThumb({
  src,
  active,
  onClick,
}: {
  src: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Selecionar vídeo"
      className={`relative h-12 w-16 shrink-0 overflow-hidden bg-zinc-900 transition-all duration-200 sm:h-14 sm:w-20 ${
        active ? "opacity-100 ring-2 ring-inset ring-[#F5C400]" : "opacity-50 hover:opacity-75"
      }`}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="pointer-events-none h-full w-full object-cover"
      />
    </button>
  );
}

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const whatsappHref = getWhatsAppHref();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
    // Fallback: avança após 20s caso o vídeo não termine sozinho
    const fallback = setTimeout(
      () => setCurrent((p) => (p + 1) % videos.length),
      20000,
    );
    return () => clearTimeout(fallback);
  }, [current]);

  const prev = () => setCurrent((p) => (p - 1 + videos.length) % videos.length);
  const next = () => setCurrent((p) => (p + 1) % videos.length);

  return (
    <>
      {/* Card principal */}
      <section className="hero-compact-gutter max-w-full overflow-x-clip bg-black pt-44 md:pt-62">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-3 text-xs tracking-[0.14em] text-[#F5C400]/80 uppercase md:mb-4">Ipatinga · Cidade Nobre</p>
          <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,0.9fr)_360px] lg:gap-6">

            {/* Esquerda: player + miniaturas */}
            <div className="min-w-0">
              <div className="relative aspect-20/11 w-full overflow-hidden bg-zinc-900 sm:aspect-video">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  muted
                  playsInline
                  preload="auto"
                  poster={thumbs[current]}
                  onEnded={next}
                  aria-hidden="true"
                >
                  <source src={videos[current]} type="video/mp4" />
                </video>

                {/* Setas */}
                <button
                  onClick={prev}
                  aria-label="Vídeo anterior"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80 md:h-10 md:w-10"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Próximo vídeo"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80 md:h-10 md:w-10"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Miniaturas */}
              <div className="mt-3 max-w-full overflow-x-auto overscroll-x-contain pb-2 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex w-max min-w-full gap-2 px-0.5">
                  {thumbs.map((src, i) => (
                    <VideoThumb
                      key={i}
                      src={src}
                      active={i === current}
                      onClick={() => setCurrent(i)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Direita: info cards + CTA */}
            <div className="min-w-0 flex flex-col gap-4">

              {/* Horário de funcionamento */}
              <div className="rounded border border-white/10 bg-zinc-900/60 p-5">
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div className="w-full">
                    <p className="mb-3 text-base font-semibold text-white">Horário de funcionamento</p>
                    <div className="space-y-1.5">
                      {hours.map((h) => (
                        <div key={h.days} className="flex items-center justify-between text-sm">
                          <span className="text-zinc-400">{h.days}</span>
                          <span className="font-medium text-white">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="rounded border border-white/10 bg-zinc-900/60 p-5">
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="mb-1 text-base font-semibold text-white">Endereço</p>
                    <p className="text-sm leading-relaxed text-zinc-300">{businessInfo.fullAddress}</p>
                    <a
                      href={businessInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm text-[#F5C400] hover:underline"
                    >
                      Ver no mapa →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-1" />

              {/* CTA WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="whatsapp"
                data-location="hero-card-cta"
                className="flex w-full min-h-12 items-center justify-center rounded bg-[#F5C400] px-3 py-3.5 text-center text-sm leading-tight font-bold tracking-[0.03em] text-black uppercase whitespace-normal text-balance wrap-break-word transition hover:bg-[#E0B000] sm:px-4 sm:tracking-wider"
              >
                Quero treinar na V3
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Faixa amarela */}
      <div className="hero-ripple-banner hero-compact-gutter mt-5 py-8 md:py-10">
        <div aria-hidden="true" className="hero-ripple-layer pointer-events-none absolute inset-0">
          <span className="hero-ripple-circle" />
          <span className="hero-ripple-circle" />
          <span className="hero-ripple-circle" />
          <span className="hero-ripple-circle" />
          <span className="hero-ripple-circle" />
          <span className="hero-ripple-circle" />
          <span className="hero-ripple-circle" />
          <span className="hero-ripple-circle" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="display-font mt-2 text-[2.05rem] uppercase leading-[0.9] text-black sm:text-4xl md:text-5xl lg:text-6xl">
              O lugar onde a<br />
              transformação<br />
              acontece.
            </h1>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp"
              data-location="hero-banner-cta"
              className="inline-flex w-full items-center justify-center rounded bg-black px-6 py-3 text-xs font-bold tracking-[0.08em] text-[#F5C400] uppercase sm:w-auto sm:text-sm"
            >
              Quero treinar na V3
            </a>
            <a
              href="#diferenciais"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded border-2 border-black px-6 py-3 text-xs font-bold tracking-[0.08em] text-black uppercase transition hover:bg-black/10 sm:w-auto sm:text-sm"
            >
              Conhecer a academia ↓
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
