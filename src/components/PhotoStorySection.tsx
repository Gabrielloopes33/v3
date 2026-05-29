/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { homeMedia } from "@/lib/media";
import { getWhatsAppHref } from "@/lib/site";

const stories = [
  {
    index: "01",
    category: "Musculação",
    title: "Equipamentos de alto nível para resultados reais.",
    description:
      "Aparelhos modernos, espaço bem distribuído e professores presentes em cada treino.",
    photos: [
      homeMedia.musculacao1,
      homeMedia.musculacao2,
      homeMedia.musculacao3,
      homeMedia.musculacao4,
    ],
    link: { href: "/musculacao", label: "Ver programa de musculação" },
  },
];

export function PhotoStorySection() {
  const whatsappHref = getWhatsAppHref({ modalityName: "Musculação" });

  return (
    <section className="section-padding page-gutter bg-black">
      <div className="mx-auto w-full max-w-7xl space-y-16 md:space-y-24">
        {stories.map((story) => (
          <div
            key={story.index}
            className="reveal grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
          >
            {/* Texto */}
            <div>
              <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">
                {story.index} — {story.category}
              </p>
              <h2 className="display-font mt-3 text-4xl uppercase leading-[0.9] md:text-5xl lg:text-6xl">
                {story.title}
              </h2>
              <p className="mt-5 max-w-md text-zinc-300">{story.description}</p>
              <div className="mt-6 flex flex-col items-start gap-3">
                {story.link && (
                  <Link
                    href={story.link.href}
                    className="inline-flex items-center gap-1 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[#F5C400] uppercase transition hover:underline"
                  >
                    {story.link.label} →
                  </Link>
                )}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="whatsapp"
                  data-location="photo-story-musculacao"
                  className="inline-flex items-center justify-center rounded bg-[#F5C400] px-6 py-3 text-sm font-bold tracking-[0.08em] text-black uppercase"
                >
                  Quero treinar musculação na V3
                </a>
              </div>
            </div>

            {/* Grade de fotos */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {story.photos.map((src, i) => (
                <div key={i} className="aspect-4/3 overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
