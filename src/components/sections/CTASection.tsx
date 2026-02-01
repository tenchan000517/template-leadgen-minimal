'use client';

import { FadeInView, PrimaryButton, TextLink } from '@/components';

type BackgroundColor = 'dark' | 'offwhite';

interface CTASectionProps {
  heading: string;
  subText: string;
  buttonText: string;
  buttonLink: string;
  secondaryLink?: {
    text: string;
    href: string;
  };
  background?: BackgroundColor;
}

export default function CTASection({
  heading,
  subText,
  buttonText,
  buttonLink,
  secondaryLink,
  background = 'dark',
}: CTASectionProps) {
  const isDark = background === 'dark';

  return (
    <section
      className={`
        py-[80px] lg:py-[120px]
        px-[5%] lg:px-[20%]
        ${isDark ? 'bg-primary' : 'bg-background-alt'}
      `}
    >
      <FadeInView>
        <div className="text-center">
          <h2
            className={`
              text-[28px] lg:text-[36px]
              ${isDark ? 'text-white' : 'text-primary'}
            `}
          >
            {heading}
          </h2>
          <p
            className={`
              mt-4 lg:mt-6
              text-[16px] lg:text-[17px]
              ${isDark ? 'text-white/70' : 'text-text-light'}
            `}
          >
            {subText}
          </p>
          <div className="mt-[40px] lg:mt-[48px]">
            <PrimaryButton href={buttonLink} size="lg">
              {buttonText}
            </PrimaryButton>
          </div>
          {secondaryLink && (
            <div className="mt-8">
              <TextLink
                href={secondaryLink.href}
                arrow="right"
                color={isDark ? 'light' : 'dark'}
              >
                {secondaryLink.text}
              </TextLink>
            </div>
          )}
        </div>
      </FadeInView>
    </section>
  );
}
