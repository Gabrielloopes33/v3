import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Silvia Schneider",
    rating: 5,
    text: "Já malhei em outras academias, mas a V3 é disparado a melhor. Bons aparelhos, ambiente agradável e limpo. Os instrutores são educados e atenciosos. Destaque para o Vitor e Miguel, sempre muito educados e atentos.",
  },
  {
    name: "Roberto Morais",
    rating: 5,
    text: "Academia excelente. Ambiente climatizado, bem higienizado e com funcionários educados!",
  },
  {
    name: "Gillian Malta (Gii Malta)",
    rating: 5,
    text: "Uma academia para a família. Ótimos ambientes, excelentes profissionais e um atendimento diferenciado.",
  },
  {
    name: "Iara Saldanha da Cruz",
    rating: 5,
    text: "A estrutura é maravilhosa. Todos os professores atenciosos e múltiplas atividades diferentes.",
  },
  {
    name: "Felipe Oliveira",
    rating: 4,
    text: "Academia limpa, organizada, possui os equipamentos necessários para um bom treino. As recepcionistas são bem receptivas, apesar de não ter sentido o mesmo dos professores. Então quem já tem um perfil mais autônomo de treinar, recomendo.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[#F5C400]">
      {"★".repeat(count)}
      <span className="text-white/30">{"★".repeat(5 - count)}</span>
    </span>
  );
}

export function TestimonialsMarquee() {
  return (
    <section id="diferenciais" className="section-padding page-gutter bg-[#F5C400] text-black">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs tracking-[0.14em] text-black/70 uppercase">Depoimentos</p>
        <h2 className="mt-4 display-font text-4xl uppercase md:text-5xl">Comentários dos alunos.</h2>

        <Marquee pauseOnHover className="mt-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="motion-card flex h-full w-[min(22rem,80vw)] flex-col justify-between rounded-2xl border border-black/10 bg-black px-5 py-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-base leading-relaxed text-zinc-200 italic">&quot;{t.text}&quot;</p>
              <p className="mt-6 text-sm font-semibold tracking-[0.08em] text-[#F5C400] uppercase">{t.name}</p>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
