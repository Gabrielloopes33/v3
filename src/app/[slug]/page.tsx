import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModalityTemplate } from "@/components/ModalityTemplate";
import { getModalityBySlug, modalitySlugs } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return modalitySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const modality = getModalityBySlug(slug);

  if (!modality) {
    return {
      title: "Modalidade | V3 Training Gym",
    };
  }

  return {
    title: `${modality.name} | V3 Training Gym`,
    description: `${modality.tagline} Conheca a modalidade na V3 Training Gym em Ipatinga.`,
  };
}

export default async function ModalityPage({ params }: PageProps) {
  const { slug } = await params;
  const modality = getModalityBySlug(slug);

  if (!modality) {
    notFound();
  }

  return <ModalityTemplate modality={modality} />;
}
