import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  "Comecei sem condicionamento e em 3 meses já senti evolução real.",
  "Academia acolhedora e professores presentes em todos os treinos.",
  "Ambiente familiar e estrutura excelente aqui na Cidade Nobre.",
];

export function TestimonialsMarquee() {
  return (
    <section id="diferenciais" className="section-padding bg-[#F5C400] px-4 text-black md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs tracking-[0.14em] text-black/70 uppercase">Depoimentos</p>
        <h2 className="mt-4 display-font text-4xl uppercase md:text-5xl">Comentários dos alunos.</h2>

        <Marquee pauseOnHover className="mt-8">
          {testimonials.map((quote) => (
            <article
              key={quote}
              className="motion-card flex h-full w-[min(22rem,80vw)] flex-col justify-between rounded-2xl border border-black/10 bg-black px-5 py-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            >
              <p className="text-[#F5C400]">★★★★★</p>
              <p className="mt-4 text-base leading-relaxed text-zinc-200 italic">&quot;{quote}&quot;</p>
              <p className="mt-6 text-sm font-semibold tracking-[0.08em] text-[#F5C400] uppercase">Aluno V3</p>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  );
}