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
  { src: homeMedia.recepcao },
  { src: homeMedia.musculacao1 },
  { src: homeMedia.energy },
  { src: homeMedia.lutas },
  { src: homeMedia.convivencia },
  { src: homeMedia.fachada },
];

export function HeroAcademyCarousel() {
  return (
    <section className="section-padding bg-[#0A0A0A] px-4 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Academia em fotos</p>
        <div className="relative mt-4 ml-auto w-full">
          <Carousel>
            <CarouselContent maxVisible={4} stackOffset={14} className="min-h-96">
              {carouselSlides.map((slide, i) => (
                <CarouselItem key={i} className="p-2">
                  <PlaceholderMedia
                    src={slide.src}
                    label=""
                    className="h-full min-h-80"
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
      </div>
    </section>
  );
}
