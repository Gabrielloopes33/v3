import Link from "next/link";
import type { Modality } from "@/lib/site";
import { getWhatsAppHref, modalities } from "@/lib/site";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import {
  getModalityImageSrc,
  modalityGalleryMedia,
  modalityGalleryVideo,
  modalityHeroVideo,
  modalityMedia,
} from "@/lib/media";

type ModalityTemplateProps = {
  modality: Modality;
};

function ThreeCardGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded border border-[#F5C400]/20 bg-black/40 p-5">
          <h3 className="display-font text-xl leading-tight text-[#F5C400] uppercase">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ModalityTemplate({ modality }: ModalityTemplateProps) {
  const others = modalities.filter((item) => item.slug !== modality.slug && !item.redirectHref);
  const whatsappHref = getWhatsAppHref({ modalityName: modality.name });
  const heroVideoSrc = modalityHeroVideo[modality.slug];
  const galleryVideos = modalityGalleryVideo[modality.slug];
  const galleryImages = modalityGalleryMedia[modality.slug] ?? [
    modalityMedia[modality.slug],
    modalityMedia[modality.slug],
    modalityMedia[modality.slug],
  ];

  const hasRichContent = !!(modality.whyChoose || modality.richBenefits || modality.whyV3);

  return (
    <main className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[80svh] items-end overflow-hidden px-4 pb-12 pt-28 md:px-8">
        <div className="absolute inset-0">
          {heroVideoSrc ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={heroVideoSrc} type="video/quicktime" />
            </video>
          ) : (
            <PlaceholderMedia
              label="Foto da modalidade"
              src={getModalityImageSrc(modality.slug) ?? modalityMedia[modality.slug]}
              className="h-full w-full"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Modalidade V3</p>
          <h1 className="mt-3 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight uppercase md:text-7xl">
            {modality.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-200">{modality.tagline}</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp"
            data-location="modality-hero-cta"
            className="mt-6 inline-flex rounded bg-[#F5C400] px-6 py-3 font-semibold tracking-[0.08em] text-black uppercase"
          >
            Quero experimentar
          </a>
        </div>
      </section>

      {hasRichContent ? (
        /* Layout rico — Por que escolher / Benefícios / Por que V3 */
        <div className="mx-auto w-full max-w-7xl px-4 py-16 space-y-14 md:px-8">
          {modality.whyChoose && (
            <div>
              <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Por que escolher</p>
              <h2 className="display-font mt-2 text-3xl uppercase md:text-4xl">
                Por que escolher o {modality.name}?
              </h2>
              <ThreeCardGrid items={modality.whyChoose} />
            </div>
          )}

          {modality.richBenefits && (
            <div>
              <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Benefícios</p>
              <h2 className="display-font mt-2 text-3xl uppercase md:text-4xl">O que você vai ganhar</h2>
              <ThreeCardGrid items={modality.richBenefits} />
            </div>
          )}

          {modality.whyV3 && (
            <div>
              <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Por que a V3</p>
              <h2 className="display-font mt-2 text-3xl uppercase md:text-4xl">Por que treinar na V3?</h2>
              <ThreeCardGrid items={modality.whyV3} />
            </div>
          )}

          {/* Horários */}
          <div>
            <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Horários e turmas</p>
            <div className="mt-4 divide-y divide-white/10 rounded border border-white/10">
              {modality.schedule.map((slot) => (
                <div key={`${slot.day}-${slot.time}`} className="flex items-center justify-between px-4 py-3 text-sm">
                  <span className="text-zinc-300">{slot.day}</span>
                  <span className="font-semibold text-white">{slot.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Layout simples — fallback para modalidades sem conteúdo rico */
        <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">O que é</p>
            <p className="mt-4 text-zinc-300">{modality.whatIs}</p>
            <ul className="mt-6 space-y-3 text-zinc-200">
              {modality.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="mt-1 text-[#F5C400]">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Para quem é</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {modality.audience.map((profile) => (
                <span key={profile} className="rounded-full border border-[#F5C400] px-4 py-2 text-sm text-[#F5C400]">
                  {profile}
                </span>
              ))}
            </div>

            <p className="mt-8 text-xs tracking-[0.14em] text-[#F5C400] uppercase">Horários e turmas</p>
            <div className="mt-4 divide-y divide-white/10 rounded border border-white/10">
              {modality.schedule.map((slot) => (
                <div key={`${slot.day}-${slot.time}`} className="flex items-center justify-between px-4 py-3 text-sm">
                  <span className="text-zinc-300">{slot.day}</span>
                  <span className="font-semibold text-white">{slot.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Galeria */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8">
        <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Galeria</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {galleryVideos?.length
            ? galleryVideos.map((videoSrc) => (
                <div
                  key={`${modality.slug}-${videoSrc}`}
                  className="relative h-64 overflow-hidden border border-white/10 bg-[linear-gradient(130deg,#111_0%,#1a1a1a_50%,#0a0a0a_100%)]"
                >
                  <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
                    <source src={videoSrc} />
                  </video>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,196,0,.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.08),transparent_40%)]" />
                </div>
              ))
            : galleryImages.map((imageSrc, index) => (
                <PlaceholderMedia
                  key={`${modality.slug}-${imageSrc}-${index}`}
                  label=""
                  src={imageSrc}
                  className="h-64"
                />
              ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#111111] px-4 py-16 text-center md:px-8">
        <h2 className="text-4xl font-bold uppercase md:text-6xl">Agende sua aula experimental</h2>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="whatsapp"
          data-location="modality-final-cta"
          className="mt-6 inline-flex rounded bg-[#F5C400] px-7 py-3 font-semibold tracking-[0.08em] text-black uppercase"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* Outras modalidades */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Outras modalidades</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.slice(0, 6).map((item) => (
            <Link key={item.slug} href={`/${item.slug}`} className="group border border-white/10 p-4 transition hover:border-[#F5C400]">
              <p className="font-semibold uppercase">{item.name}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.tagline}</p>
              <p className="mt-3 text-sm text-[#F5C400]">Ver modalidade →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
