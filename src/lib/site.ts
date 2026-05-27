const whatsappPhone = "553138245500";
const whatsappBaseUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}`;

type WhatsAppLinkOptions = {
  modalityName?: string;
};

export function getWhatsAppHref(options?: WhatsAppLinkOptions) {
  const message = options?.modalityName
    ? `Olá! Vim da página da modalidade ${options.modalityName} no site da V3 e quero saber mais.`
    : "Olá! Vim do site da V3 e quero saber mais.";

  return `${whatsappBaseUrl}&text=${encodeURIComponent(message)}`;
}

export const whatsappHref = getWhatsAppHref();

export const siteConfig = {
  siteName: "V3 Training Gym",
  siteUrl: "https://v3academia.com.br",
  title: "V3 Training Gym | Academia em Ipatinga - Cidade Nobre",
  description:
    "Academia em Ipatinga, Cidade Nobre. Musculação, Muay Thai, Krav Maga, Jiu-Jitsu, Energy Box e Yoga. Agende sua aula experimental!",
  ogTitle: "V3 Training Gym - O lugar onde a transformação acontece",
  ogDescription:
    "Academia em Ipatinga com musculação, lutas e aulas coletivas. Venha transformar sua vida.",
  ogImage: "/images/home/hero.jpg",
  keywords: [
    "academia ipatinga",
    "musculacao cidade nobre",
    "academia cidade nobre",
    "muay thai ipatinga",
    "krav maga ipatinga",
    "jiu jitsu ipatinga",
    "yoga ipatinga",
    "energy box ipatinga",
  ],
};

export const businessInfo = {
  name: "V3 Training Gym",
  areaServed: "Cidade Nobre, Ipatinga - MG",
  streetAddress: "R. Tiradentes, 72",
  fullAddress: "R. Tiradentes, 72 - Cidade Nobre, Ipatinga - MG, 35162-413, Brasil",
  postalCode: "35162-413",
  addressLocality: "Ipatinga",
  addressRegion: "MG",
  addressCountry: "BR",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.%20Tiradentes%2C%2072%20-%20Cidade%20Nobre%2C%20Ipatinga%20-%20MG%2C%2035162-413%2C%20Brasil",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=R.%20Tiradentes%2C%2072%20-%20Cidade%20Nobre%2C%20Ipatinga%20-%20MG%2C%2035162-413%2C%20Brasil&output=embed",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:00", closes: "22:00" },
    { days: ["Saturday"], opens: "08:00", closes: "15:00" },
    { days: ["Sunday"], opens: "08:00", closes: "12:00" },
  ],
};

export type Modality = {
  slug: string;
  name: string;
  tagline: string;
  whatIs: string;
  benefits: string[];
  audience: string[];
  schedule: Array<{ day: string; time: string }>;
};

export const modalities: Modality[] = [
  {
    slug: "musculacao",
    name: "Musculação",
    tagline: "Treino. Evolução. Resultado.",
    whatIs:
      "Treino de força com equipamentos modernos, suporte de professores e ambiente preparado para iniciantes e avançados.",
    benefits: [
      "Acompanhamento real da evolução",
      "Estrutura completa de aparelhos e pesos livres",
      "Treino adaptado para o seu objetivo",
      "Ambiente climatizado e organizado",
    ],
    audience: ["Iniciantes", "Intermediários", "Avançados"],
    schedule: [
      { day: "Seg-Sex", time: "06:00 - 22:00" },
      { day: "Sabado", time: "08:00 - 15:00" },
      { day: "Domingo", time: "08:00 - 12:00" },
    ],
  },
  {
    slug: "energy-box",
    name: "Energy Box",
    tagline: "Suor em grupo. Resultado individual.",
    whatIs:
      "Aulas coletivas de alta energia com foco em condicionamento, força e performance funcional.",
    benefits: [
      "Turmas menores com atenção real",
      "Treinos dinâmicos e motivadores",
      "Queima calórica elevada",
      "Evolução progressiva por nível",
    ],
    audience: ["Iniciantes", "Intermediários", "Quem gosta de aula em grupo"],
    schedule: [
      { day: "Seg-Qua-Sex", time: "07:00 / 18:30" },
      { day: "Terca-Quinta", time: "19:30" },
      { day: "Sabado", time: "09:00" },
    ],
  },
  {
    slug: "muay-thai",
    name: "Muay Thai",
    tagline: "A arte tailandesa que transforma corpos e mentes.",
    whatIs:
      "Modalidade de luta completa para condicionamento físico, disciplina mental e autoconfiança.",
    benefits: [
      "Melhora de resistencia e explosao",
      "Técnica com instrutores especializados",
      "Desenvolvimento de disciplina",
      "Ambiente acolhedor para iniciantes",
    ],
    audience: ["Iniciantes", "Intermediários", "Praticantes avançados"],
    schedule: [
      { day: "Seg-Qua", time: "20:00" },
      { day: "Terca-Quinta", time: "07:30" },
      { day: "Sabado", time: "10:00" },
    ],
  },
  {
    slug: "krav-maga",
    name: "Krav Maga",
    tagline: "Defesa pessoal real. Para o mundo real.",
    whatIs:
      "Sistema de defesa pessoal focado em situações urbanas, com técnicas práticas e objetivas.",
    benefits: [
      "Autoconfiança no dia a dia",
      "Técnicas práticas de defesa",
      "Melhora de foco e reflexos",
      "Treinos progressivos por nível",
    ],
    audience: ["Adultos", "Iniciantes", "Intermediários"],
    schedule: [
      { day: "Seg-Qua", time: "19:00" },
      { day: "Terca-Quinta", time: "20:00" },
      { day: "Sabado", time: "11:00" },
    ],
  },
  {
    slug: "jiu-jitsu",
    name: "Jiu-Jitsu",
    tagline: "Técnica. Estratégia. Superação.",
    whatIs:
      "Arte marcial baseada em técnica e controle, excelente para condicionamento e evolução constante.",
    benefits: [
      "Evolução técnica com metodologia",
      "Fortalecimento fisico e mental",
      "Treino em equipe e respeito mútuo",
      "Opção para lazer ou competição",
    ],
    audience: ["Iniciantes", "Intermediários", "Competidores"],
    schedule: [
      { day: "Seg-Qua-Sex", time: "19:30" },
      { day: "Terca-Quinta", time: "07:00" },
      { day: "Sabado", time: "08:30" },
    ],
  },
  {
    slug: "yoga",
    name: "Yoga",
    tagline: "Equilíbrio que vai além do corpo.",
    whatIs:
      "Prática para corpo e mente com foco em respiração, mobilidade, consciência corporal e bem-estar.",
    benefits: [
      "Reduz estresse e ansiedade",
      "Melhora a flexibilidade e a postura",
      "Aumenta foco e presença",
      "Aula acolhedora para todos os níveis",
    ],
    audience: ["Iniciantes", "Intermediários", "Público 50+"],
    schedule: [
      { day: "Terca-Quinta", time: "08:00" },
      { day: "Terca-Quinta", time: "18:00" },
      { day: "Sabado", time: "09:30" },
    ],
  },
  {
    slug: "krav-maga-kids",
    name: "Krav Maga Kids",
    tagline: "Desenvolva seu filho com propósito.",
    whatIs:
      "Aulas infantis com foco em disciplina, coordenação, confiança e segurança, em ambiente seguro.",
    benefits: [
      "Desenvolvimento motor e foco",
      "Aprendizado de respeito e disciplina",
      "Atividade física com diversão",
      "Turmas adequadas por faixa etária",
    ],
    audience: ["Crianças 6-9", "Crianças 10-13", "Adolescentes"],
    schedule: [
      { day: "Seg-Qua", time: "17:30" },
      { day: "Terca-Quinta", time: "18:30" },
      { day: "Sabado", time: "10:30" },
    ],
  },
];

export const modalitySlugs = modalities.map((item) => item.slug);

export function getModalityBySlug(slug: string) {
  return modalities.find((item) => item.slug === slug);
}
