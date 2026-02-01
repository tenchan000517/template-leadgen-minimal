import { ReactNode } from 'react';

type BackgroundColor = 'white' | 'offwhite' | 'dark';
type SpacingSize = 'sm' | 'md' | 'lg' | 'xl';

interface SectionWrapperProps {
  children: ReactNode;
  background?: BackgroundColor;
  paddingTop?: SpacingSize;
  paddingBottom?: SpacingSize;
  id?: string;
}

const backgroundClasses: Record<BackgroundColor, string> = {
  white: 'bg-background',
  offwhite: 'bg-background-alt',
  dark: 'bg-primary text-white',
};

// PC/SP対応の余白クラス
const paddingTopClasses: Record<SpacingSize, string> = {
  sm: 'pt-[60px] lg:pt-[80px]',
  md: 'pt-[80px] lg:pt-[120px]',
  lg: 'pt-[100px] lg:pt-[160px]',
  xl: 'pt-[120px] lg:pt-[200px]',
};

const paddingBottomClasses: Record<SpacingSize, string> = {
  sm: 'pb-[60px] lg:pb-[80px]',
  md: 'pb-[80px] lg:pb-[120px]',
  lg: 'pb-[100px] lg:pb-[160px]',
  xl: 'pb-[120px] lg:pb-[200px]',
};

export default function SectionWrapper({
  children,
  background = 'white',
  paddingTop = 'md',
  paddingBottom = 'md',
  id,
}: SectionWrapperProps) {
  const bgClass = backgroundClasses[background];
  const ptClass = paddingTopClasses[paddingTop];
  const pbClass = paddingBottomClasses[paddingBottom];

  return (
    <section
      id={id}
      className={`${bgClass} ${ptClass} ${pbClass}`}
    >
      <div className="mx-auto max-w-container px-[5%] lg:px-[10%]">
        {children}
      </div>
    </section>
  );
}
