"use client";

import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { homeMedia } from "@/lib/media";

const carouselSlides = [
  { label: "Recepção", src: homeMedia.recepcao },
  { label: "Área de musculação", src: homeMedia.musculacao1 },
  { label: "Energy Box", src: homeMedia.energy },
  { label: "Área de lutas", src: homeMedia.lutas },
  { label: "Convivência", src: homeMedia.convivencia },
  { label: "Fachada", src: homeMedia.fachada },
];

export function HeroAcademyCarousel() {
  return (
    <div className="relative ml-auto w-full max-w-xl">
      <Carousel>
        <CarouselContent maxVisible={4} stackOffset={14} className="min-h-96">
          {carouselSlides.map((slide) => (
            <CarouselItem key={slide.label} className="p-2">
              <PlaceholderMedia
                label={slide.label}
                src={slide.src}
                className="h-full min-h-80 rounded-xl border-white/20"
                labelContainerClassName="justify-center pb-16"
                labelClassName="text-sm"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-between px-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
