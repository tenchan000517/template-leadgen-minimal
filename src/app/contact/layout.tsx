import type { Metadata } from "next";
import { meta } from "@/lib/site";

export const metadata: Metadata = {
  title: `お問い合わせ | ${meta.siteName}`,
  description: "ご相談は無料です。1営業日以内にご返信いたします。お気軽にお問い合わせください。",
  openGraph: {
    title: `お問い合わせ | ${meta.siteName}`,
    description: "ご相談は無料です。1営業日以内にご返信いたします。お気軽にお問い合わせください。",
    url: `${meta.siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
