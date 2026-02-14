'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonSize = 'md' | 'lg';

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'w-[200px] h-[56px] text-[16px]',
  lg: 'w-[280px] h-[64px] text-[17px]',
};

export default function PrimaryButton({
  children,
  href,
  onClick,
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
}: PrimaryButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    rounded-[4px] font-semibold
    transition-all duration-200
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'bg-[#d0d0d0] cursor-not-allowed' : 'bg-accent text-white hover:bg-primary active:scale-[0.98]'}
  `;

  if (href && !disabled) {
    return (
      <div className={fullWidth ? 'w-full' : 'inline-block'}>
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
