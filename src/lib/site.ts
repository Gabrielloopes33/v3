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
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "06:00", closes: "22:00" },
    { days: ["Friday"], opens: "06:00", closes: "21:00" },
    { days: ["Saturday"], opens: "08:00", closes: "12:00" },
    { days: ["Sunday"], opens: "09:00", closes: "13:00" },
  ],
};

export type ModalityCard = {
  title: string;
  description: string;
};

export type Modality = {
  slug: string;
  name: string;
  tagline: string;
  whatIs: string;
  benefits: string[];
  audience: string[];
  schedule: Array<{ day: string; time: string }>;
  /** Link externo alternativo — se definido, o card da grade vai para este href em vez de /slug */
  redirectHref?: string;
  /** Conteúdo rico: "Por que escolher?" — 3 cards */
  whyChoose?: ModalityCard[];
  /** Conteúdo rico: "Benefícios" — 3 cards */
  richBenefits?: ModalityCard[];
  /** Conteúdo rico: "Por que a V3?" — 3 cards */
  whyV3?: ModalityCard[];
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
      { day: "Seg–Qui", time: "06:00 – 22:00" },
      { day: "Sexta", time: "06:00 – 21:00" },
      { day: "Sábado", time: "08:00 – 12:00" },
      { day: "Dom e feriados", time: "09:00 – 13:00" },
    ],
    redirectHref: getWhatsAppHref({ modalityName: "Musculação" }),
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
      { day: "Segunda à Sexta", time: "07h00" },
    ],
  },
  {
    slug: "muay-thai",
    name: "Muay Thai",
    tagline: "A arte tailandesa que transforma corpos e mentes.",
    whatIs:
      "Modalidade de luta completa para condicionamento físico, disciplina mental e autoconfiança.",
    benefits: [
      "Melhora de resistência e explosão",
      "Técnica com instrutores especializados",
      "Desenvolvimento de disciplina",
      "Ambiente acolhedor para iniciantes",
    ],
    audience: ["Iniciantes", "Intermediários", "Praticantes avançados"],
    schedule: [
      { day: "Segunda-feira", time: "19h30" },
      { day: "Quarta-feira", time: "20h15" },
      { day: "Sexta-feira", time: "19h30" },
    ],
    whyChoose: [
      {
        title: "Treinamento Autêntico",
        description:
          "Nossas aulas seguem os princípios tradicionais do Muay Thai, proporcionando uma experiência autêntica e desafiadora.",
      },
      {
        title: "Condicionamento Físico Completo",
        description:
          "Além de aprender técnicas de combate, você desenvolverá força, resistência, flexibilidade e agilidade.",
      },
      {
        title: "Cultura e Respeito",
        description:
          "O Muay Thai é mais do que apenas uma arte marcial — é uma cultura baseada em disciplina, respeito e autocontrole.",
      },
    ],
    richBenefits: [
      {
        title: "Defesa Pessoal Eficiente",
        description:
          "Aprenda técnicas poderosas de autodefesa que podem ser aplicadas em situações da vida real.",
      },
      {
        title: "Melhora do Condicionamento Físico",
        description:
          "Queime calorias, melhore a saúde cardiovascular e fortaleça o corpo inteiro enquanto se diverte.",
      },
      {
        title: "Confiança e Determinação",
        description:
          "Supere desafios físicos e mentais, ganhando confiança em suas habilidades e capacidade de enfrentar qualquer adversidade.",
      },
    ],
    whyV3: [
      {
        title: "Instrutores Experientes",
        description:
          "Profissionais qualificados e dedicados comprometidos em ajudá-lo a alcançar seus objetivos.",
      },
      {
        title: "Instalações de Classe Mundial",
        description:
          "Instalações modernas e espaços adequados para a prática segura e eficaz do Muay Thai.",
      },
      {
        title: "Comunidade de Apoio",
        description:
          "Faça parte de uma comunidade acolhedora e motivadora que compartilha a paixão pela arte marcial.",
      },
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
      { day: "Terça-feira", time: "07h / 18h15 (Kids) / 19h15" },
      { day: "Quarta-feira", time: "18h15" },
      { day: "Quinta-feira", time: "07h / 18h15 (Kids) / 19h15" },
      { day: "Sábado", time: "09h" },
    ],
    whyChoose: [
      {
        title: "Treinamento Realista",
        description:
          "Técnicas de autodefesa práticas e eficazes projetadas para situações da vida real.",
      },
      {
        title: "Condicionamento Físico Abrangente",
        description:
          "Além de aprender a se defender, você também desenvolverá força, agilidade e resistência.",
      },
      {
        title: "Simples, rápido e objetivo",
        description:
          "Baseado em movimentos naturais do corpo humano, curtos e visando pontos sensíveis do agressor.",
      },
    ],
    richBenefits: [
      {
        title: "Autoconfiança",
        description:
          "Melhora da sua autoestima e equilíbrio emocional, sabendo como lidar com situações de violência e conflito.",
      },
      {
        title: "Resistência Física",
        description:
          "A prática desenvolve condicionamento físico, agilidade, flexibilidade e explosão muscular.",
      },
      {
        title: "Defenda-se da violência",
        description:
          "Esteja preparado(a) para qualquer situação de violência, desarmadas ou armadas, independente do porte físico ou sexo.",
      },
    ],
    whyV3: [
      {
        title: "Krav Maga – Mestre Kobi",
        description:
          "A maior organização de Krav Maga no mundo. Instrutores altamente treinados e constantemente atualizados.",
      },
      {
        title: "Flexibilidade de Horários",
        description: "Variedade de horários de aulas para se adequar à agenda ocupada.",
      },
      {
        title: "Professor qualificado",
        description:
          "Discípulo direto do Grão Mestre Kobi, uma das maiores autoridades do Krav Maga no mundo.",
      },
    ],
  },
  {
    slug: "jiu-jitsu",
    name: "Jiu-Jitsu",
    tagline: "Técnica. Estratégia. Superação.",
    whatIs:
      "Arte marcial baseada em luta de solo, alavancas e pressões, onde técnica vence força bruta.",
    benefits: [
      "Condicionamento físico completo e alto gasto calórico",
      "Defesa pessoal eficiente para situações reais",
      "Foco, agilidade mental e resiliência",
      "Treino em equipe com respeito mútuo",
    ],
    audience: ["Iniciantes", "Intermediários", "Competidores"],
    schedule: [
      { day: "Segunda-feira", time: "20h30" },
      { day: "Terça-feira", time: "21h00" },
      { day: "Quinta-feira", time: "21h00" },
      { day: "Sexta-feira", time: "18h00" },
    ],
    whyChoose: [
      {
        title: "O xadrez humano",
        description:
          "O Jiu-Jitsu é conhecido como o 'xadrez humano'. Diferente de modalidades que focam em socos e chutes, é uma arte baseada em luta de solo, alavancas, pressões e chaves. A grande premissa é que uma pessoa menor e fisicamente mais fraca consegue dominar um oponente maior usando técnica e biomecânica a seu favor.",
      },
      {
        title: "Defesa pessoal real",
        description:
          "É uma das artes marciais mais eficientes para situações reais, já que a maioria das agressões físicas acaba terminando no chão. Você aprende a controlar um oponente sem precisar dar um único soco.",
      },
      {
        title: "Superação e evolução constante",
        description:
          "O segredo do jiu-jitsu é a constância e o respeito. No tatame, cada treino é um aprendizado prático de humildade e superação. Você entra para suar o corpo e sai com a mente blindada.",
      },
    ],
    richBenefits: [
      {
        title: "Condicionamento físico brutal",
        description:
          "O treino envolve o corpo todo. Em uma única sessão de 'rola', você trabalha força, resistência cardiovascular, flexibilidade e coordenação. O gasto calórico é altíssimo.",
      },
      {
        title: "Foco e agilidade mental",
        description:
          "No tatame, você precisa raciocinar sob pressão. Cada movimento do seu parceiro exige uma resposta rápida, o que esvazia a cabeça de problemas externos e melhora muito a concentração.",
      },
      {
        title: "Alívio do estresse e resiliência",
        description:
          "O tatame é um equalizador. Você aprende a lidar com a frustração, a manter a calma em situações desconfortáveis e a respirar fundo para encontrar saídas. Essa resiliência vai direto para a sua vida pessoal e profissional.",
      },
    ],
    whyV3: [
      {
        title: "Metodologia progressiva",
        description:
          "Você começa pelos fundamentos — aprendendo a cair com segurança, a fazer as pegadas certas no kimono e a entender as posições básicas de guarda e controle. Quando menos espera, já está completamente integrado à prática.",
      },
      {
        title: "Comunidade do tatame",
        description:
          "A parceria e o respeito mútuo são a base de tudo. Aqui, você faz parte de uma comunidade onde a evolução acontece em equipe e cada treino fortalece laços.",
      },
      {
        title: "Transformação de estilo de vida",
        description:
          "Se você busca uma atividade que vá além da monotonia da musculação tradicional, o Jiu-Jitsu é uma escolha excelente. É o tipo de esporte que transforma o estilo de vida de quem pratica.",
      },
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
      { day: "Segunda-feira", time: "08h00" },
      { day: "Quarta-feira", time: "08h00" },
    ],
    whyChoose: [
      {
        title: "Abordagem Holística",
        description:
          "Nossas aulas combinam posturas físicas, técnicas de respiração e meditação para promover o equilíbrio entre mente, corpo e espírito.",
      },
      {
        title: "Instrutores Qualificados",
        description:
          "Nossa equipe é certificada e experiente, proporcionando orientação especializada em cada sessão.",
      },
      {
        title: "Ambiente Relaxante",
        description:
          "Criamos um ambiente tranquilo e acolhedor onde você pode se desconectar do estresse do dia a dia.",
      },
    ],
    richBenefits: [
      {
        title: "Flexibilidade",
        description:
          "A prática regular ajuda a melhorar a flexibilidade e a mobilidade, reduzindo o risco de lesões e dores musculares.",
      },
      {
        title: "Alívio do Estresse",
        description:
          "As técnicas de respiração e meditação são eficazes para reduzir o estresse, promovendo calma e clareza mental.",
      },
      {
        title: "Força Interior",
        description:
          "O yoga fortalece não apenas os músculos do corpo, mas também a força interior, a resiliência emocional e a autoaceitação.",
      },
    ],
    whyV3: [
      {
        title: "Para todas as pessoas",
        description:
          "Independente de idade ou sexo, nossos instrutores estão preparados para desenvolver iniciantes e avançados.",
      },
      {
        title: "Horários Convenientes",
        description:
          "Variedade de horários que tornam mais fácil encontrar tempo para praticar yoga, independente da agenda.",
      },
      {
        title: "Comunidade de Apoio",
        description:
          "Junte-se a uma comunidade calorosa e inclusiva de entusiastas do yoga que compartilham sua jornada de bem-estar.",
      },
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
      { day: "Terça-feira", time: "18h15" },
      { day: "Quinta-feira", time: "18h15" },
    ],
    whyChoose: [
      {
        title: "Desenvolvimento Integral",
        description:
          "As aulas são projetadas para o desenvolvimento físico, motor, social e disciplinar das crianças, de maneira lúdica e estimulante.",
      },
      {
        title: "Foco na Diversão",
        description:
          "As atividades são cuidadosamente planejadas para manter as crianças engajadas e entretidas enquanto se desenvolvem.",
      },
      {
        title: "Segurança em Primeiro Lugar",
        description:
          "Professores experientes e dedicados garantem um ambiente seguro e supervisionado para todas as atividades.",
      },
    ],
    richBenefits: [
      {
        title: "Desenvolvimento Motor",
        description:
          "O Krav Maga desenvolve habilidades motoras e físicas fundamentais como coordenação, equilíbrio e força.",
      },
      {
        title: "Socialização",
        description:
          "A filosofia do Krav Maga ensina as crianças a interagirem de forma respeitosa, fazerem amigos e aprenderem a trabalhar em equipe.",
      },
      {
        title: "Hábitos Saudáveis",
        description:
          "As crianças são estimuladas a se alimentarem de forma saudável e a performarem com excelência no ambiente escolar e em casa.",
      },
    ],
    whyV3: [
      {
        title: "Ambiente Confortável e Estimulante",
        description:
          "Nossas instalações foram projetadas pensando no conforto e na segurança das crianças.",
      },
      {
        title: "Equipe Especializada",
        description:
          "Nossos instrutores são treinados para trabalhar com crianças e comprometidos em tornar cada aula uma experiência positiva.",
      },
      {
        title: "Variedade de Atividades",
        description:
          "Oferecemos uma variedade de exercícios e jogos que mantêm as crianças engajadas e motivadas.",
      },
    ],
  },
  {
    slug: "personalite",
    name: "Personalité",
    tagline: "Treino personalizado. Resultado que você sente.",
    whatIs:
      "Personal trainer exclusivo para acompanhar seus treinos com atendimento semi-privativo, focado nos seus objetivos e integrado à mensalidade da academia.",
    benefits: [
      "Programa de treino sob medida para seus objetivos",
      "Motivação e responsabilidade com personal exclusivo",
      "Variedade e inovação para treinos sempre desafiadores",
      "Ótimo custo x benefício — integrado à mensalidade",
    ],
    audience: ["Adultos", "Todos os níveis", "Quem busca resultado acelerado"],
    schedule: [
      { day: "Horários", time: "A confirmar — consulte pelo WhatsApp" },
    ],
    whyChoose: [
      {
        title: "Personal Exclusivo",
        description:
          "Personal trainer exclusivo para acompanhar seus treinos, garantindo atenção individualizada e suporte personalizado em cada sessão.",
      },
      {
        title: "Atendimento Semi-Privativo",
        description:
          "O Personalité permite que seu personal atenda até três pessoas simultaneamente, garantindo bom atendimento a todos.",
      },
      {
        title: "Maior Economia",
        description:
          "Você economiza em comparação com a contratação individual, pois o valor do serviço é integrado à mensalidade da academia.",
      },
    ],
    richBenefits: [
      {
        title: "Programa Sob Medida",
        description:
          "Seu personal desenvolverá um programa de treinamento personalizado de acordo com seus objetivos, necessidades e nível de condicionamento.",
      },
      {
        title: "Motivação e Responsabilidade",
        description:
          "Ter um personal exclusivo ao seu lado motiva você a se esforçar mais e manter o compromisso com seus treinos.",
      },
      {
        title: "Variedade e Inovação",
        description:
          "Seu personal irá variar os exercícios e técnicas de treinamento para manter os treinos desafiadores, interessantes e eficazes.",
      },
    ],
    whyV3: [
      {
        title: "Profissionais Qualificados",
        description:
          "Equipe de personals altamente qualificada e experiente, pronta para ajudá-lo a alcançar seus objetivos de forma segura.",
      },
      {
        title: "Flexibilidade de Horários",
        description:
          "Agende seus treinos de acordo com sua disponibilidade, escolhendo os horários que melhor se adequam à sua rotina.",
      },
      {
        title: "Ótimo Custo x Benefício",
        description:
          "Treine com um personal em ambiente agradável e com lotação racionalizada por um preço acessível, com acesso ilimitado à academia.",
      },
    ],
  },
];

export const modalitySlugs = modalities.map((item) => item.slug);

export function getModalityBySlug(slug: string) {
  return modalities.find((item) => item.slug === slug);
}
