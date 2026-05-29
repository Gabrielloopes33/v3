import { businessInfo, getWhatsAppHref } from "@/lib/site";

export function LocationBlock() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section className="section-padding mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
      <div className="reveal flex flex-col justify-center">
        <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">Localização</p>
        <h2 className="display-font mt-3 text-4xl uppercase md:text-5xl">Onde nos encontrar</h2>

        <div className="mt-6 space-y-4 text-zinc-300">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-[#F5C400]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <p className="text-sm leading-relaxed">{businessInfo.fullAddress}</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-[#F5C400]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </span>
            <div className="text-sm leading-relaxed">
              <p>Seg – Qui: 06:00 – 22:00</p>
              <p>Sexta: 06:00 – 21:00</p>
              <p>Sábado: 08:00 – 12:00</p>
              <p>Dom e feriados: 09:00 – 13:00</p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp"
            data-location="location-block-primary-cta"
            className="motion-cta inline-flex items-center justify-center rounded bg-[#F5C400] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-black uppercase hover:bg-[#E0B000]"
          >
            Agende uma aula experimental
          </a>
          <a
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-cta inline-flex items-center justify-center rounded border border-[#F5C400] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[#F5C400] uppercase"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>

      <div className="reveal min-h-80">
        <iframe
          src={businessInfo.mapsEmbedUrl}
          className="h-full min-h-80 w-full border border-white/10"
          loading="lazy"
          title="Localização V3 Academia — R. Tiradentes, 72, Cidade Nobre, Ipatinga"
        />
      </div>
    </section>
  );
}
