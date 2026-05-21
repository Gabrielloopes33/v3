"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/site";

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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-xl font-bold tracking-[0.08em] text-white uppercase">
          V3 Training Gym
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <div className="group relative">
            <button className="text-sm tracking-[0.08em] text-white uppercase">Modalidades</button>
            <div className="pointer-events-none absolute top-9 left-0 w-56 rounded border border-[#F5C400]/30 bg-black/95 p-2 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100">
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
          <div className="space-y-1 border-t border-white/10 bg-black p-4">
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
