import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70svh] place-items-center bg-black px-4 text-center text-white">
      <div>
        <p className="text-xs tracking-[0.14em] text-[#F5C400] uppercase">404</p>
        <h1 className="mt-2 text-4xl font-bold uppercase md:text-6xl">Página não encontrada</h1>
        <p className="mt-3 text-zinc-400">A modalidade ou página que você buscou não existe.</p>
        <Link href="/" className="mt-6 inline-flex rounded bg-[#F5C400] px-6 py-3 font-semibold text-black uppercase">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}
