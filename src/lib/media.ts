export const homeMedia = {
  hero: "/images/home/hero.jpg",
  recepcao: "/images/home/recepcao.jpg",
  musculacao1: "/images/home/musculacao-1.jpg",
  musculacao2: "/images/home/musculacao-2.jpg",
  musculacao3: "/images/home/musculacao-3.jpg",
  musculacao4: "/images/home/musculacao-4.jpg",
  energy: "/images/home/energy-box.jpg",
  lutas: "/images/home/lutas.jpg",
  vestiario: "/images/home/vestiario.jpg",
  convivencia: "/images/home/convivencia.jpg",
  fachada: "/images/home/fachada.jpg",
};

const modalityImagePathBySlug: Record<string, string> = {
  musculacao: "/images/home/musculacao-3.jpg",
  "energy-box": "/images/modalities/energy-box.jpg",
  "muay-thai": "/images/modalities/muay-thai.jpg",
  "krav-maga": "/images/modalities/krav-maga.jpg",
  "jiu-jitsu": "/images/modalities/jiu-jitsu.svg",
  yoga: "/images/modalities/yoga.svg",
  "krav-maga-kids": "/images/modalities/krav-maga-kids.jpg",
  personalite: "/images/modalities/musculacao-cover.jpg",
};

export const modalityMedia: Record<string, string> = {
  ...modalityImagePathBySlug,
};

export const modalityHeroVideo: Record<string, string> = {
  "krav-maga": "/images/modalities/IMG_9444.MOV",
};

export const modalityGalleryMedia: Record<string, string[]> = {
  "energy-box": [
    "/images/modalities/energy-box copy.png",
    "/images/modalities/energy-box copy 2.png",
    "/images/modalities/energy-box copy 3.png",
  ],
  musculacao: [
    "/images/modalities/musculacao.png",
    "/images/modalities/musculacao copy 4.png",
    "/images/modalities/musculacao copy 5.png",
    "/images/modalities/musculacao copy 6.png",
  ],
  "krav-maga": [
    "/images/modalities/krav-maga copy.jpg",
    "/images/modalities/krav-maga copy 1.jpg",
    "/images/modalities/krav-maga copy 2.jpg",
    "/images/modalities/krav-maga copy 3.jpg",
  ],
  "krav-maga-kids": [
    "/images/modalities/krav-maga-kids.jpg",
    "/images/modalities/krav-maga-kids1.jpg",
    "/images/modalities/krav-maga-kids2.jpg",
  ],
};

export const modalityGalleryVideo: Record<string, string[]> = {
  "muay-thai": [
    "/images/modalities/muay-thai%20copy2.MOV",
    "/images/modalities/muay-thai%20copy3.MOV",
    "/images/modalities/muay-thai%20copy4.MOV",
  ],
};

export function getModalityImageSrc(slug: string) {
  return modalityImagePathBySlug[slug] ?? "/images/home/hero.jpg";
}
