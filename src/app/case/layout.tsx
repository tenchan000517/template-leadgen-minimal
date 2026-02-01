import type { Metadata } from "next";
import { meta } from "@/lib/site";

export const metadata: Metadata = {
  title: `導入事例 | ${meta.siteName}`,
  description: "お客様の課題解決をサポートした事例をご紹介します。製造業、IT・通信、小売・流通など多様な業界での実績があります。",
  openGraph: {
    title: `導入事例 | ${meta.siteName}`,
    description: "お客様の課題解決をサポートした事例をご紹介します。製造業、IT・通信、小売・流通など多様な業界での実績があります。",
    url: `${meta.siteUrl}/case`,
  },
};

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
