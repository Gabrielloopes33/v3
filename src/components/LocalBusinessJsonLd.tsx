import { businessInfo, siteConfig, whatsappHref } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: businessInfo.name,
    description: siteConfig.description,
    areaServed: businessInfo.areaServed,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    telephone: "+55 31 3824-5500",
    sameAs: [whatsappHref],
    hasMap: businessInfo.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.streetAddress,
      addressLocality: businessInfo.addressLocality,
      addressRegion: businessInfo.addressRegion,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.addressCountry,
    },
    openingHoursSpecification: businessInfo.openingHours.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.days,
      opens: item.opens,
      closes: item.closes,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
