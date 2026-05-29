import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PhotoStorySection } from "@/components/PhotoStorySection";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { getWhatsAppHref, modalities } from "@/lib/site";
import { getModalityImageSrc } from "@/lib/media";

export default function Home() {
  const whatsappHref = getWhatsAppHref();

  return (
    <main>
      <LocalBusinessJsonLd />

      {/* 1. Hero: card de fotos + faixa amarela */}
      <HeroSection />

      {/* 4. Diferenciais — 11 ícones */}
      <div id="diferenciais">
        <ExperienceSection />
      </div>

      {/* 5. Fotos com textos complementares */}
      <PhotoStorySection />

      {/* 6. Depoimentos */}
      <TestimonialsMarquee />

      {/* 7. Grade de modalidades */}
      <section className="section-padding page-gutter mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col gap-4">
          <h2 className="display-font text-4xl uppercase leading-[0.9] md:text-5xl lg:text-6xl">Modalidades</h2>
          <svg viewBox="0 0 24 24" fill="none" stroke="#F5C400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </div>
        <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((item) => {
            if (item.redirectHref) {
              return (
                <a
                  key={item.slug}
                  href={item.redirectHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="whatsapp"
                  data-location={`modalities-grid-${item.slug}`}
                  className="motion-card reveal group relative block aspect-3/4 overflow-hidden border border-white/10"
                >
                  <PlaceholderMedia
                    label={`Foto ${item.name}`}
                    src={getModalityImageSrc(item.slug)}
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                    <p className="display-font text-3xl uppercase">{item.name}</p>
                    <span className="text-[#F5C400] opacity-0 transition group-hover:opacity-100">→</span>
                  </div>
                </a>
              );
            }

            return (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="motion-card reveal group relative block aspect-3/4 overflow-hidden border border-white/10"
              >
                <PlaceholderMedia
                  label={`Foto ${item.name}`}
                  src={getModalityImageSrc(item.slug)}
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                  <p className="display-font text-3xl uppercase">{item.name}</p>
                  <span className="text-[#F5C400] opacity-0 transition group-hover:opacity-100">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="noise-overlay page-gutter relative section-padding bg-black text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="display-font text-5xl leading-[0.9] uppercase md:text-8xl">Pronto para começar?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Agende sua aula experimental gratuita e descubra qual modalidade é feita para você.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp"
            data-location="home-main-cta"
            className="motion-cta mt-7 inline-flex animate-pulse rounded bg-[#F5C400] px-8 py-4 text-base font-bold tracking-[0.08em] text-black uppercase"
          >
            Agendar aula experimental
          </a>
          <p className="mt-3 text-sm text-zinc-500">Sem compromisso. Sem matrícula.</p>
        </div>
      </section>
    </main>
  );
}
