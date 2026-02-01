// LeadGen Minimal テンプレート 型定義

export interface SiteData {
  meta: Meta;
  company: Company;
  navigation: Navigation;
  theme: Theme;
  pages: Pages;
}

export interface Meta {
  siteName: string;
  siteUrl: string;
  description: string;
  ogImage: string;
  favicon: string;
  gtmId?: string;
}

export interface Company {
  name: string;
  nameEn?: string;
  postalCode: string;
  address: string;
  phone: string;
  email: string;
  establishedYear?: number;
  capital?: string;
  employees?: string;
  ceo?: string;
  description?: string;
}

export interface Navigation {
  main: NavItem[];
  cta: NavItem;
  footer: NavItem[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export interface ThemeColors {
  primary: string;
  accent: string;
  background: string;
  backgroundAlt: string;
  text: string;
  textLight: string;
}

export interface ThemeFonts {
  heading: string;
  body: string;
}

export interface Pages {
  top: TopPage;
  service: ServicePage;
  case: CasePage;
  contact: ContactPage;
  privacy: PrivacyPage;
}

// TOP Page
export interface TopPage {
  hero: HeroSection;
  problem: ProblemSection;
  solution: SolutionSection;
  results: ResultsSection;
  cta: CtaSection;
}

export interface HeroSection {
  catchCopy: string;
  subCopy: string;
}

export interface ProblemSection {
  heading: string;
  items: ProblemItem[];
}

export interface ProblemItem {
  number: string;
  title: string;
  description: string;
}

export interface SolutionSection {
  heading: string;
  points: SolutionPoint[];
}

export interface SolutionPoint {
  title: string;
  description: string;
}

export interface ResultsSection {
  heading: string;
  items: ResultItem[];
}

export interface ResultItem {
  number: number;
  unit: string;
  description: string;
}

export interface CtaSection {
  heading: string;
  subText: string;
  buttonText: string;
  buttonLink: string;
}

// Service Page
export interface ServicePage {
  header: PageHeader;
  overview: ServiceOverview;
  whyChooseUs: WhyChooseUs;
  process: ProcessSection;
  cta: ServiceCtaSection;
}

export interface PageHeader {
  title: string;
  description: string;
}

export interface ServiceOverview {
  heading: string;
  categories: ServiceCategory[];
}

export interface ServiceCategory {
  number: string;
  name: string;
  description: string;
  items: string[];
}

export interface WhyChooseUs {
  heading: string;
  reasons: Reason[];
}

export interface Reason {
  keyword: string;
  description: string;
}

export interface ProcessSection {
  heading: string;
  steps: ProcessStep[];
}

export interface ProcessStep {
  number: string;
  name: string;
  description: string;
}

export interface ServiceCtaSection extends CtaSection {
  caseLink?: {
    text: string;
    href: string;
  };
}

// Case Page
export interface CasePage {
  header: PageHeader;
  cases: CaseStudy[];
  cta: CtaSection;
}

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  problemSummary: string;
  background: string;
  problem: string;
  solution: string;
  result: CaseResult;
}

export interface CaseResult {
  number: string;
  unit: string;
  label: string;
  description: string;
}

// Contact Page
export interface ContactPage {
  header: PageHeader;
  form: ContactForm;
  thankYou: ThankYouSection;
}

export interface ContactForm {
  fields: FormField[];
  privacyPolicyLink: string;
  submitButtonText: string;
  note?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  required: boolean;
  placeholder?: string;
}

export interface ThankYouSection {
  heading: string;
  description: string;
  backLink: {
    text: string;
    href: string;
  };
}

// Privacy Page
export interface PrivacyPage {
  header: PrivacyHeader;
  content: string;
}

export interface PrivacyHeader {
  title: string;
  lastUpdated: string;
}
