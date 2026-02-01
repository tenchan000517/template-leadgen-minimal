import type { Metadata } from "next";
import { meta } from "@/lib/site";

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${meta.siteName}`,
  description: "個人情報の取り扱いについてご説明します。",
  openGraph: {
    title: `プライバシーポリシー | ${meta.siteName}`,
    description: "個人情報の取り扱いについてご説明します。",
    url: `${meta.siteUrl}/privacy`,
  },
  robots: {
    index: false,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
