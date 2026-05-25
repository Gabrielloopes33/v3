import Link from "next/link";
import { HeroAcademyCarousel } from "@/components/HeroAcademyCarousel";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ShowcaseVideo } from "@/components/ShowcaseVideo";
import { businessInfo, modalities, whatsappHref } from "@/lib/site";
import { homeMedia } from "@/lib/media";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";

export default function Home() {
  return (
    <main>
      <LocalBusinessJsonLd />
      <section className="relative flex min-h-[100svh] items-end overflow-hidden px-4 pb-12 pt-24 md:px-8">
        <div className="absolute inset-0" data-parallax="5">
          <PlaceholderMedia label="Hero da V3" src={homeMedia.hero} priority className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        </div>
        <div className="stagger relative mx-auto grid w-full max-w-7xl items-end gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="reveal text-xs tracking-[0.14em] text-[#F5C400] uppercase">Ipatinga · Cidade Nobre</p>
            <h1 className="display-font reveal mt-4 max-w-4xl text-5xl leading-[0.9] font-extrabold tracking-tight uppercase md:text-8xl">
              <span className="hero-line reveal">O lugar onde a</span>
              <span className="hero-line reveal text-[#F5C400]">transformação</span>
              <span className="hero-line reveal">acontece.</span>
            </h1>
            <div className="reveal mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="whatsapp"
                data-location="home-hero-primary"
                className="motion-cta inline-flex rounded bg-[#F5C400] px-7 py-3 text-sm font-semibold tracking-[0.08em] text-black uppercase hover:bg-[#E0B000]"
              >
                Quero treinar na V3
              </a>
              <a
                href="#tour"
                className="motion-cta inline-flex rounded border border-[#F5C400] px-7 py-3 text-sm font-semibold tracking-[0.08em] text-[#F5C400] uppercase"
              >
                Conhecer a academia
              </a>
            </div>
            <a href="#tour" className="reveal mt-8 inline-flex scroll-indicator">
              Scroll
            </a>
          </div>
          <div className="reveal hidden lg:block lg:pb-2">
            <HeroAcademyCarousel />
          </div>
        </div>
      </section>

      <section id="tour" className="section-padding mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-[1.3fr_1fr] md:px-8">
        <ShowcaseVideo
          title="Recepcao"
          badge="01 - Recepcao"
          posterSrc={homeMedia.recepcao}
          className="min-h-80"
        />
        <div className="reveal flex flex-col justify-center">
          <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Diferenciais V3</p>
          <h2 className="display-font mt-3 text-4xl uppercase md:text-5xl">Experiencia completa para evoluir.</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Atendimento diferenciado", "Nossa equipe te conhece pelo nome."],
              ["Ambiente familiar", "Uma academia acolhedora, sem lotacao extrema."],
              ["Climatizado", "Conforto termico para treinar bem o ano todo."],
              ["Acompanhamento real", "Professores monitoram sua evolucao."],
            ].map(([title, text]) => (
              <article key={title} className="rounded border border-[#F5C400]/30 bg-black/40 p-4">
                <h3 className="display-font text-2xl leading-none text-[#F5C400] uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111] px-4 md:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="reveal">
            <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">02 - Musculação</p>
            <h2 className="display-font mt-3 text-4xl uppercase md:text-6xl">
              Equipamentos de alto nível para resultados reais.
            </h2>
            <p className="mt-4 text-zinc-300">
              Aparelhos modernos, espaço bem distribuído e professores presentes em cada treino.
            </p>
            <Link href="/musculacao" className="mt-4 inline-block text-[#F5C400] uppercase">
              Ver programa de musculação →
            </Link>
          </div>
          <div className="stagger grid gap-4 sm:grid-cols-2">
            <PlaceholderMedia label="Musculação 1" src={homeMedia.musculacao1} className="reveal h-48" />
            <PlaceholderMedia label="Musculação 2" src={homeMedia.musculacao2} className="reveal h-48" />
            <PlaceholderMedia label="Musculação 3" src={homeMedia.musculacao3} className="reveal h-48" />
            <PlaceholderMedia label="Musculação 4" src={homeMedia.musculacao4} className="reveal h-48" />
          </div>
        </div>
      </section>

      <section className="noise-overlay relative section-padding overflow-hidden px-4 text-center md:px-8">
        <div className="absolute inset-0" data-parallax="4">
          <PlaceholderMedia label="03 - Energy Box" src={homeMedia.energy} className="h-full w-full" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="stagger relative mx-auto w-full max-w-4xl">
          <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">03 - Energy Box</p>
          <h2 className="display-font mt-3 text-4xl uppercase md:text-6xl">Suor. Ritmo. Resultado.</h2>
          <p className="mt-4 text-zinc-200">
            Aulas coletivas que te tiram da zona de conforto, com condicionamento, força e diversão.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp"
            data-location="home-energy-cta"
            className="motion-cta mt-6 inline-flex rounded-full bg-[#F5C400] px-7 py-3 font-semibold tracking-[0.08em] text-black uppercase"
          >
            Quero experimentar uma aula
          </a>
        </div>
      </section>

      <section className="section-padding mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-8">
        <PlaceholderMedia label="04 - Área de lutas" src={homeMedia.lutas} className="reveal min-h-80" />
        <div className="reveal">
          <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">04 - Área de lutas</p>
          <h2 className="display-font mt-3 text-4xl uppercase md:text-6xl">Onde a disciplina vira potência.</h2>
          <p className="mt-4 text-zinc-300">
            No mesmo espaço acontecem as aulas de Muay Thai, Krav Maga, Jiu-Jitsu e Yoga.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {modalities.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="motion-chip rounded-full border border-[#F5C400] px-4 py-2 text-xs tracking-[0.08em] text-[#F5C400] uppercase hover:bg-[#F5C400] hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp"
            data-location="home-lutas-cta"
            className="motion-cta mt-6 inline-flex rounded bg-[#F5C400] px-6 py-3 font-semibold text-black uppercase"
          >
            Quero começar uma modalidade
          </a>
        </div>
      </section>

      <section className="section-padding bg-[#111111] px-4 md:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">05 - Estrutura completa</p>
          <h2 className="display-font mt-3 text-4xl uppercase md:text-6xl">Tudo que você precisa em um só lugar.</h2>
          <div className="stagger mt-6 grid gap-4 md:grid-cols-3">
            <PlaceholderMedia label="Vestiários completos" src={homeMedia.vestiario} className="reveal h-64 border-t-2 border-t-[#F5C400]" />
            <PlaceholderMedia label="Área de convivência" src={homeMedia.convivencia} className="reveal h-64 border-t-2 border-t-[#F5C400]" />
            <PlaceholderMedia label="Fachada Cidade Nobre" src={homeMedia.fachada} className="reveal h-64 border-t-2 border-t-[#F5C400]" />
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section-padding bg-[#F5C400] px-4 text-black md:px-8">
        <div className="stagger mx-auto grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Atendimento diferenciado", "Nossa equipe te conhece pelo nome."],
            ["Ambiente familiar", "Uma academia acolhedora, sem lotação extrema."],
            ["Climatizado", "Conforto térmico para treinar bem o ano todo."],
            ["Acompanhamento real", "Professores monitoram sua evolução."],
          ].map(([title, text]) => (
            <article key={title} className="reveal">
              <h3 className="display-font text-3xl leading-none uppercase">{title}</h3>
              <p className="mt-3 text-sm">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding mx-auto w-full max-w-7xl px-4 md:px-8">
        <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Modalidades</p>
        <div className="stagger mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="motion-card reveal group relative block aspect-[3/4] overflow-hidden border border-white/10"
            >
              <PlaceholderMedia label={`Foto ${item.name}`} src={`/images/modalities/${item.slug}.svg`} className="h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                <p className="display-font text-3xl uppercase">{item.name}</p>
                <span className="text-[#F5C400] opacity-0 transition group-hover:opacity-100">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="noise-overlay relative section-padding bg-black px-4 text-center md:px-8">
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

      <section className="section-padding mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-8">
        <div>
          <h3 className="display-font text-4xl uppercase">Onde nos encontrar</h3>
          <p className="mt-4 text-zinc-300">{businessInfo.fullAddress}</p>
          <p className="mt-3 text-zinc-400">Seg-Sex: 06:00 - 22:00</p>
          <p className="text-zinc-400">Sábado: 08:00 - 15:00</p>
          <p className="text-zinc-400">Domingo: 08:00 - 12:00</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-cta text-[#F5C400] uppercase"
            >
              Abrir no Google Maps
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp"
              data-location="home-location-whatsapp"
              className="motion-cta text-[#F5C400] uppercase"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
        <iframe
          src={businessInfo.mapsEmbedUrl}
          className="min-h-80 w-full border border-white/10"
          loading="lazy"
          title="Mapa V3"
        />
      </section>

      <section className="section-padding bg-[#111111] px-4 md:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h3 className="display-font text-4xl uppercase md:text-5xl">Depoimentos</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Comecei sem condicionamento e em 3 meses já senti evolução real.",
              "Academia acolhedora e professores presentes em todos os treinos.",
              "Ambiente familiar e estrutura excelente aqui na Cidade Nobre.",
            ].map((quote) => (
              <article key={quote} className="motion-card border border-white/10 bg-black/50 p-5">
                <p className="text-[#F5C400]">★★★★★</p>
                <p className="mt-3 text-zinc-200 italic">&quot;{quote}&quot;</p>
                <p className="mt-4 text-sm text-[#F5C400]">Aluno V3</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
