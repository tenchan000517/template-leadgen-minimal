'use client';

import { getPageData } from '@/lib/site';
import {
  SectionWrapper,
  FadeInView,
  PrimaryButton,
  TextLink,
  ScrollIndicator,
} from '@/components';

export default function HomePage() {
  const data = getPageData('top');

  return (
    <>
      {/* Hero Section */}
      <section className="h-[100svh] flex flex-col justify-center items-center relative bg-background -mt-[60px] lg:-mt-[80px] pt-[60px] lg:pt-[80px]">
        <div className="flex-1 flex flex-col justify-center items-center px-[5%] lg:px-[20%]">
          <div className="mt-[10%] lg:mt-[5%]">
            <h1 className="text-center leading-[1.3] tracking-[0.02em]">
              {data.hero.catchCopy}
            </h1>
            <p className="text-center text-text-light mt-6 lg:mt-10 text-[16px] lg:text-[18px]">
              {data.hero.subCopy}
            </p>
          </div>
        </div>
        <div className="absolute bottom-[60px]">
          <ScrollIndicator />
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper background="offwhite" paddingTop="xl" paddingBottom="sm">
        <FadeInView>
          <h2 className="text-center mb-[60px]">{data.problem.heading}</h2>
        </FadeInView>
        <div className="max-w-[600px] mx-auto space-y-[48px] lg:space-y-[60px]">
          {data.problem.items.map((item, index) => (
            <FadeInView key={item.number} delay={index * 0.1}>
              <div className="text-left">
                <span className="text-accent text-[28px] lg:text-[32px] font-bold">
                  {item.number}
                </span>
                <h3 className="text-[20px] lg:text-[24px] mt-3 lg:mt-4">
                  {item.title}
                </h3>
                <p className="text-text-light mt-2 lg:mt-3">
                  {item.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </SectionWrapper>

      {/* Solution Section */}
      <SectionWrapper background="white" paddingTop="lg" paddingBottom="lg">
        <div className="flex flex-col lg:flex-row lg:gap-[10%]">
          <FadeInView direction="left" className="lg:w-[30%] mb-10 lg:mb-0">
            <h2 className="text-[36px] lg:text-[48px] leading-[1.4]">
              {data.solution.heading}
            </h2>
          </FadeInView>
          <FadeInView direction="right" delay={0.1} className="lg:w-[60%]">
            <div className="space-y-[40px] lg:space-y-[48px]">
              {data.solution.points.map((point, index) => (
                <div key={index}>
                  <h3 className="text-[20px] lg:text-[24px]">{point.title}</h3>
                  <p className="text-text-light mt-2 lg:mt-3">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-[60px] lg:mt-[80px]">
              <TextLink href="/service" arrow="right">
                サービス詳細を見る
              </TextLink>
            </div>
          </FadeInView>
        </div>
      </SectionWrapper>

      {/* Results Section */}
      <SectionWrapper background="dark" paddingTop="md" paddingBottom="md">
        <FadeInView>
          <h2 className="text-center text-white text-[28px] lg:text-[36px] mb-[48px] lg:mb-[60px]">
            {data.results.heading}
          </h2>
        </FadeInView>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[40px]">
          {data.results.items.map((item, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div className="text-center py-6 lg:py-10">
                <div className="flex items-baseline justify-center">
                  <span className="text-white text-[72px] lg:text-[96px] font-bold leading-none">
                    {item.number}
                  </span>
                  <span className="text-white text-[20px] lg:text-[24px] ml-1">
                    {item.unit}
                  </span>
                </div>
                <p className="text-white/70 mt-3 lg:mt-4 text-[15px] lg:text-[17px]">
                  {item.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
        <FadeInView delay={0.3}>
          <div className="text-center mt-[48px] lg:mt-[60px]">
            <TextLink href="/case" arrow="right" color="light">
              詳しい事例を見る
            </TextLink>
          </div>
        </FadeInView>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="offwhite" paddingTop="lg" paddingBottom="xl">
        <FadeInView>
          <div className="text-center">
            <h2 className="text-[32px] lg:text-[48px]">{data.cta.heading}</h2>
            <p className="text-text-light mt-4 lg:mt-6">
              {data.cta.subText}
            </p>
            <div className="mt-[40px] lg:mt-[48px]">
              <PrimaryButton href={data.cta.buttonLink} size="lg">
                {data.cta.buttonText}
              </PrimaryButton>
            </div>
          </div>
        </FadeInView>
      </SectionWrapper>
    </>
  );
}
