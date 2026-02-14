'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getSiteData } from '@/lib/site';

interface MinimalHeaderProps {
  currentPath?: string;
}

export default function MinimalHeader({ currentPath }: MinimalHeaderProps) {
  const pathname = usePathname();
  const activePath = currentPath || pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const siteData = getSiteData();
  const { navigation, meta } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // モバイルメニューが開いている時はスクロールを無効化
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-[1000]
          h-[60px] lg:h-[80px]
          bg-white
          transition-shadow duration-200
          ${isScrolled ? 'shadow-md' : ''}
        `}
      >
        <div className="h-full mx-auto max-w-container px-[5%] lg:px-[10%] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-primary font-bold text-[18px] lg:text-[20px]">
            {meta.siteName}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-primary text-[16px] font-medium
                  transition-opacity duration-200
                  hover:opacity-80
                  relative pb-1
                  ${activePath === item.href ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary' : ''}
                `}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={navigation.cta.href}
              className="
                inline-flex items-center justify-center
                w-[160px] h-[44px]
                bg-accent text-white
                rounded-[4px] font-semibold text-[16px]
                transition-colors duration-200
                hover:bg-primary
              "
            >
              {navigation.cta.label}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-[44px] h-[44px] flex flex-col items-center justify-center gap-[6px]"
            aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`
                w-[24px] h-[2px] bg-primary transition-transform duration-200
                ${isMobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''}
              `}
            />
            <span
              className={`
                w-[24px] h-[2px] bg-primary transition-opacity duration-200
                ${isMobileMenuOpen ? 'opacity-0' : ''}
              `}
            />
            <span
              className={`
                w-[24px] h-[2px] bg-primary transition-transform duration-200
                ${isMobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}
              `}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-[999] bg-white lg:hidden
          transition-opacity duration-200
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="pt-[80px] px-[5%] flex flex-col items-center gap-8">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                text-primary text-[20px] font-medium
                ${activePath === item.href ? 'underline underline-offset-4' : ''}
              `}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={navigation.cta.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="
              inline-flex items-center justify-center
              w-[200px] h-[56px]
              bg-accent text-white
              rounded-[4px] font-semibold text-[17px]
              mt-4
            "
          >
            {navigation.cta.label}
          </Link>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[60px] lg:h-[80px]" />
    </>
  );
}
