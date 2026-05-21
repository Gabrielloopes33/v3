import Link from "next/link";
import { whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-12 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold tracking-[0.08em] text-white uppercase">V3 Training Gym</p>
          <p className="mt-3 text-zinc-400">Não é só treino. É evolução.</p>
        </div>

        <div className="space-y-2 text-sm text-zinc-300">
          <p>Cidade Nobre, Ipatinga - MG</p>
          <p>Seg-Sex: 06:00 - 22:00</p>
          <p>Sábado: 08:00 - 15:00</p>
          <p>Domingo: 08:00 - 12:00</p>
        </div>

        <div className="space-y-2 text-sm">
          <Link href="/" className="block text-zinc-300 hover:text-[#F5C400]">
            Home
          </Link>
          <Link href="/#diferenciais" className="block text-zinc-300 hover:text-[#F5C400]">
            A academia
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp"
            data-location="footer-whatsapp"
            className="block text-zinc-300 hover:text-[#F5C400]"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-white/10 pt-6 text-xs text-zinc-500">
        © 2026 V3 Training Gym. Todos os direitos reservados.
      </div>
    </footer>
  );
}
