import Link from 'next/link';

type ArrowDirection = 'right' | 'left';
type ColorVariant = 'dark' | 'light';

interface TextLinkProps {
  children: React.ReactNode;
  href: string;
  arrow?: ArrowDirection;
  color?: ColorVariant;
}

export default function TextLink({
  children,
  href,
  arrow = 'right',
  color = 'dark',
}: TextLinkProps) {
  const colorClasses = color === 'dark' ? 'text-primary' : 'text-white';
  const hoverClasses = 'hover:underline';

  return (
    <Link
      href={href}
      className={`
        inline-flex items-center gap-2
        text-[16px] font-medium
        ${colorClasses}
        ${hoverClasses}
        transition-opacity duration-200
        hover:opacity-80
      `}
    >
      {arrow === 'left' && <span>←</span>}
      <span>{children}</span>
      {arrow === 'right' && <span>→</span>}
    </Link>
  );
}
