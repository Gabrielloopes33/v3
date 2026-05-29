"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getModalityBySlug, getWhatsAppHref } from "@/lib/site";

const navModalities = [
  { href: "/musculacao", label: "Musculação" },
  { href: "/energy-box", label: "Energy Box" },
  { href: "/muay-thai", label: "Muay Thai" },
  { href: "/krav-maga", label: "Krav Maga" },
  { href: "/jiu-jitsu", label: "Jiu-Jitsu" },
  { href: "/yoga", label: "Yoga" },
  { href: "/krav-maga-kids", label: "Krav Kids" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoUnavailable, setLogoUnavailable] = useState(false);
  const currentSlug = pathname.split("/").filter(Boolean)[0];
  const currentModality = getModalityBySlug(currentSlug);
  const whatsappHref = getWhatsAppHref({ modalityName: currentModality?.name });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="page-gutter mx-auto flex h-16 w-full max-w-7xl items-center justify-between md:h-20">
        <Link href="/" className="inline-flex items-center" aria-label="V3 Training Gym">
          {!logoUnavailable ? (
            <Image
              src="/logo-v3.png"
              alt="V3 Training Gym"
              width={168}
              height={88}
              className="h-10 w-auto object-contain sm:h-12 md:h-14"
              priority
              onError={() => setLogoUnavailable(true)}
            />
          ) : (
            <span className="text-xl font-bold tracking-[0.08em] text-white uppercase">V3 Training Gym</span>
          )}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <div className="group relative">
            <button className="text-sm tracking-[0.08em] text-white uppercase">Modalidades</button>
            <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none transition-all group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
              <div className="w-56 rounded border border-[#F5C400]/30 bg-black/95 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                {navModalities.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-zinc-300 transition hover:bg-[#F5C400] hover:text-black"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#diferenciais" className="text-sm tracking-[0.08em] text-white uppercase">
            A academia
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp"
            data-location="header-desktop-contact"
            className="rounded bg-[#F5C400] px-4 py-2 text-sm font-semibold tracking-[0.08em] text-black uppercase transition hover:bg-[#E0B000]"
          >
            Contato
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded border border-white/30 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          <span className="h-0.5 w-5 bg-white" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="page-gutter space-y-1 border-t border-white/10 bg-black py-4">
            {navModalities.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#diferenciais"
              className="block py-2 text-white"
              onClick={() => setIsOpen(false)}
            >
              A academia
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp"
              data-location="header-mobile-contact"
              className="mt-2 block rounded bg-[#F5C400] px-4 py-3 text-center font-semibold text-black uppercase"
            >
              Contato no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
