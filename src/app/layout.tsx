import type { Metadata, Viewport } from "next";
import { EB_Garamond, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#840d0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mima - Biscoitos Artesanais Feitos com Alma e Afeto | Salvador, BA",
  description:
    "Descubra os biscoitos e cookies artesanais da Mima em Salvador, BA. Receitas de família preparadas com carinho, ingredientes selecionados e sabor inesquecível. Peça pelo Instagram!",
  keywords: [
    "Biscoitos Artesanais",
    "Cookies Salvador",
    "Mima Biscoitos",
    "Doces Salvador",
    "Confeitaria Artesanal",
    "Biscoito de Pistache",
    "Cookies Artesanais BA",
  ],
  authors: [{ name: "Mima Artisanal Cookies" }],
  creator: "Mima",
  metadataBase: new URL("https://www.instagram.com/biscoitosmima/"),
  alternates: {
    canonical: "https://www.instagram.com/biscoitosmima/",
  },
  openGraph: {
    title: "Mima - Biscoitos Artesanais Feitos com Alma e Afeto",
    description:
      "Sinta o aroma reconfortante da manteiga fresca e a textura inigualável de uma receita artesanal feita para transformar o seu dia.",
    url: "https://www.instagram.com/biscoitosmima/",
    siteName: "Mima Artisanal Cookies",
    images: [
      {
        url: "/biscoito_com_calda.jpg",
        width: 1200,
        height: 630,
        alt: "Biscoitos Artesanais Mima",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mima - Biscoitos Artesanais Feitos com Alma e Afeto",
    description:
      "Biscoitos e cookies artesanais feitos com carinho em Salvador, BA. Peça pelo Direct!",
    images: ["/biscoito_com_calda.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Mima Biscoitos Artesanais",
    image: "https://www.instagram.com/biscoitosmima/",
    description:
      "Biscoitos artesanais feitos com alma e afeto em Salvador, BA.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-12.9777",
      longitude: "-38.5016",
    },
    url: "https://www.instagram.com/biscoitosmima/",
    priceRange: "$$",
    openingHours: "Mo-Sa 10:00-19:00",
    sameAs: ["https://www.instagram.com/biscoitosmima/"],
  };

  return (
    <html
      lang="pt-BR"
      className={`${ebGaramond.variable} ${beVietnamPro.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-petal-pink text-on-surface">
        {children}
      </body>
    </html>
  );
}
