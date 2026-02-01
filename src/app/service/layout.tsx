import type { Metadata } from "next";
import { meta } from "@/lib/site";

export const metadata: Metadata = {
  title: `サービス | ${meta.siteName}`,
  description: "私たちが提供する価値と、その実現方法をご紹介します。戦略策定から実行支援、定着化まで一貫してサポートします。",
  openGraph: {
    title: `サービス | ${meta.siteName}`,
    description: "私たちが提供する価値と、その実現方法をご紹介します。戦略策定から実行支援、定着化まで一貫してサポートします。",
    url: `${meta.siteUrl}/service`,
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
