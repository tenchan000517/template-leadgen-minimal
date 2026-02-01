import siteData from '@data/site.json';
import type { SiteData } from '@/types/site';

// サイトデータをエクスポート
export const site: SiteData = siteData as SiteData;

// よく使うデータへのショートカット
export const meta = site.meta;
export const company = site.company;
export const navigation = site.navigation;
export const theme = site.theme;
export const pages = site.pages;

// サイトデータ取得ヘルパー
export function getSiteData(): SiteData {
  return site;
}

// ページデータ取得ヘルパー
export function getPageData<K extends keyof SiteData['pages']>(
  page: K
): SiteData['pages'][K] {
  return site.pages[page];
}

// 型定義を再エクスポート
export type {
  SiteData,
  Meta,
  Company,
  Navigation,
  NavItem,
  Theme,
  ThemeColors,
  ThemeFonts,
  Pages,
  TopPage,
  ServicePage,
  CasePage,
  ContactPage,
  PrivacyPage,
} from '@/types/site';
