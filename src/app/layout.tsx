import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { ViewportEnhancer } from "@/components/ViewportEnhancer";
import { siteConfig } from "@/lib/site";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  weight: ["700", "800"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1600,
        height: 900,
        alt: siteConfig.ogTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/logo-v3.png",
    apple: "/logo-v3.png",
    shortcut: "/logo-v3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR" className={`${barlow.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0A0A0A] text-white">
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        ) : null}
        <AnalyticsEvents />
        <ViewportEnhancer />
        <Header />
        {children}
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
