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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://biscoitosmima.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mima - Biscoitos Artesanais Feitos com Alma e Afeto | Salvador, BA",
    template: "%s | Mima Biscoitos Artesanais",
  },
  description:
    "Descubra os biscoitos e cookies artesanais da Mima em Salvador, BA. Receitas de família preparadas com manteiga pura, ingredientes nobres e carinho. Encomende pelo Instagram!",
  applicationName: "Mima Biscoitos",
  keywords: [
    "Biscoitos Artesanais Salvador",
    "Cookies Salvador",
    "Mima Biscoitos",
    "Biscoito Amanteigado com Chocolate",
    "Doces Artesanais Salvador BA",
    "Confeitaria Afetiva Salvador",
    "Biscoitos Caseiros",
    "Presentes Salvador BA",
  ],
  authors: [{ name: "Mima Biscoitos Artesanais", url: "https://www.instagram.com/biscoitosmima/" }],
  creator: "Mima",
  publisher: "Mima Biscoitos Artesanais",
  category: "Alimentos e Bebidas",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/MIMA-1.svg", type: "image/svg+xml" },
    ],
    apple: "/MIMA-1.svg",
  },
  openGraph: {
    title: "Mima - Biscoitos Artesanais Feitos com Alma e Afeto",
    description:
      "Sinta o aroma reconfortante da manteiga fresca e a textura inigualável de uma receita artesanal feita para transformar o seu dia em Salvador, BA.",
    url: "/",
    siteName: "Mima Biscoitos Artesanais",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/biscoito_com_calda.jpg",
        width: 1200,
        height: 630,
        alt: "Biscoito Amanteigado com Cobertura de Chocolate Mima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mima - Biscoitos Artesanais Feitos com Alma e Afeto",
    description:
      "Biscoitos e cookies artesanais feitos à mão com carinho em Salvador, BA. Peça pelo Direct!",
    images: ["/biscoito_com_calda.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Mima Biscoitos Artesanais",
        description: "Biscoitos artesanais feitos à mão com alma e afeto em Salvador, BA.",
        inLanguage: "pt-BR",
      },
      {
        "@type": "Bakery",
        "@id": `${siteUrl}/#bakery`,
        name: "Mima Biscoitos Artesanais",
        image: `${siteUrl}/biscoito_com_calda.jpg`,
        logo: `${siteUrl}/MIMA-1.svg`,
        description:
          "Biscoitos e cookies artesanais feitos com manteiga pura e chocolate nobre em Salvador, BA.",
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
        url: siteUrl,
        telephone: "",
        priceRange: "$$",
        currenciesAccepted: "BRL",
        paymentAccepted: "Pix, Cartão de Crédito, Cartão de Débito, Dinheiro",
        servesCuisine: "Confeitaria Artesanal, Biscoitos, Doces",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        sameAs: [
          "https://www.instagram.com/biscoitosmima/",
          "https://www.instagram.com/direct/t/17849015700317148/",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "38",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Product",
        "@id": `${siteUrl}/#produto-principal`,
        name: "Biscoito Amanteigado Mima com Chocolate Nobre",
        image: `${siteUrl}/biscoito_com_calda.jpg`,
        description:
          "Biscoito amanteigado artesanal doce, incrivelmente leve e crocante, coberto parcialmente com chocolate nobre.",
        brand: {
          "@type": "Brand",
          name: "Mima",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
          url: "https://www.instagram.com/direct/t/17849015700317148/",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "38",
        },
      },
    ],
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
