"use client";

import { useState, useEffect, useRef } from "react";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

export type VideoSlide = {
  src: string;
  thumbnail: string;
  type: "video" | "image";
};

type VideoCarouselProps = {
  slides: VideoSlide[];
};

export function VideoCarousel({ slides }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = slides[activeIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full bg-black">
      {/* Vídeo / imagem principal */}
      <div className="relative aspect-video w-full overflow-hidden">
        {active.type === "video" ? (
          <video
            ref={videoRef}
            key={active.src}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={active.src} type="video/mp4" />
            <source src={active.src} type="video/quicktime" />
          </video>
        ) : (
          <PlaceholderMedia
            src={active.src}
            label=""
            className="h-full w-full"
            priority={activeIndex === 0}
          />
        )}

        {/* Indicadores de posição */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-[#F5C400]" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Faixa de miniaturas */}
      {slides.length > 1 && (
        <div className="flex gap-1 overflow-x-auto bg-black px-1 py-1 sm:gap-2 sm:px-2 sm:py-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Selecionar slide ${index + 1}`}
              className={`relative h-14 w-24 flex-shrink-0 overflow-hidden border-2 transition-all duration-200 sm:h-16 sm:w-28 ${
                index === activeIndex
                  ? "border-[#F5C400]"
                  : "border-white/15 opacity-60 hover:border-white/40 hover:opacity-90"
              }`}
            >
              <PlaceholderMedia
                src={slide.thumbnail}
                label=""
                className="h-full w-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
