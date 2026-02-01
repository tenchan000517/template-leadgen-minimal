import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { meta, theme, company } from "@/lib/site";
import { MinimalHeader, MinimalFooter } from "@/components";

// JSON-LD構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: meta.description,
  url: meta.siteUrl,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    postalCode: company.postalCode,
    addressCountry: "JP",
    streetAddress: company.address,
  },
  founder: company.ceo,
  foundingDate: company.establishedYear?.toString(),
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: meta.siteName,
  description: meta.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: meta.siteName,
    description: meta.description,
    locale: "ja_JP",
    type: "website",
    url: meta.siteUrl,
    siteName: meta.siteName,
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: meta.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.siteName,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: theme.colors.primary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <MinimalHeader />
        <main>{children}</main>
        <MinimalFooter />
      </body>
    </html>
  );
}
