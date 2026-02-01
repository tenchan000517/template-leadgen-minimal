import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { meta } from "@/lib/site";
import { MinimalHeader, MinimalFooter } from "@/components";

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
  openGraph: {
    title: meta.siteName,
    description: meta.description,
    locale: "ja_JP",
    type: "website",
    url: meta.siteUrl,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>
        <MinimalHeader />
        <main>{children}</main>
        <MinimalFooter />
      </body>
    </html>
  );
}
