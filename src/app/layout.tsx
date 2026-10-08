import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Fontes servidas pelo próprio site (sem chamada ao Google Fonts).
const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/fraunces-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const allura = localFont({
  src: "../fonts/allura.woff2",
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});

const figtree = localFont({
  src: "../fonts/figtree.woff2",
  weight: "300 900",
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Desapego da Bina · Brechó e consultoria de estilo em Camboriú",
    template: "%s · Desapego da Bina",
  },
  description: site.description,
  keywords: [
    "brechó Camboriú",
    "brechó Balneário Camboriú",
    "second hand",
    "consultoria de imagem Camboriú",
    "análise de guarda-roupa",
    "Destrava Closet",
    "ClosetBox",
    "Sabrina Machado",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: "Desapego da Bina · Vista-se de você",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Desapego da Bina · Vista-se de você",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f4e7de",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneE164,
  image: `${site.url}/images/sabrina.webp`,
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: site.owner, jobTitle: site.ownerRole },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: site.address.country,
  },
  openingHours: site.hours.map((h) => h.schema),
  sameAs: [site.instagram],
  makesOffer: {
    "@type": "Offer",
    name: "Destrava Closet · Análise de guarda-roupa express",
    price: site.destrava.price,
    priceCurrency: "BRL",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${allura.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
