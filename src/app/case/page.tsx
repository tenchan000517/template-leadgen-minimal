'use client';

import { getPageData } from '@/lib/site';
import {
  PageHeader,
  SectionWrapper,
  CTASection,
} from '@/components';
import { FadeInUp } from '@/components/animations';

export default function CasePage() {
  const data = getPageData('case');

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={data.header.title}
        description={data.header.description}
        height="lg"
      />

      {/* Case Summary */}
      <SectionWrapper background="offwhite" paddingTop="md" paddingBottom="md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px] lg:gap-0 lg:divide-x lg:divide-[#e0e0e0]">
          {data.cases.map((caseItem, index) => (
            <FadeInUp key={caseItem.id} delay={index * 0.1}>
              <div className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <span className="text-[14px] text-text-light">
                  {caseItem.industry}
                </span>
                <p className="text-[18px] lg:text-[20px] mt-3 leading-[1.6]">
                  {caseItem.problemSummary}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-[40px] lg:text-[48px] font-bold text-accent">
                    {caseItem.result.number}
                  </span>
                  <span className="text-[18px] text-accent">
                    {caseItem.result.unit}
                  </span>
                </div>
                <p className="text-[14px] text-text-light mt-2">
                  {caseItem.result.label}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </SectionWrapper>

      {/* Case Details */}
      {data.cases.map((caseItem, index) => (
        <SectionWrapper
          key={caseItem.id}
          background={index % 2 === 0 ? 'white' : 'offwhite'}
          paddingTop="lg"
          paddingBottom="lg"
          id={caseItem.id}
        >
          <div className="max-w-[800px] mx-auto">
            <FadeInUp>
              <h2 className="text-[24px] lg:text-[28px]">{caseItem.title}</h2>
              <p className="text-text-light mt-6 leading-[1.8]">
                {caseItem.background}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="mt-[48px] lg:mt-[60px]">
                <h3 className="text-[18px] lg:text-[20px] font-semibold">
                  課題
                </h3>
                <p className="text-text-light mt-4 leading-[1.8]">
                  {caseItem.problem}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="mt-[48px] lg:mt-[60px]">
                <h3 className="text-[18px] lg:text-[20px] font-semibold">
                  解決策
                </h3>
                <p className="text-text-light mt-4 leading-[1.8]">
                  {caseItem.solution}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="mt-[48px] lg:mt-[60px]">
                <h3 className="text-[18px] lg:text-[20px] font-semibold">
                  成果
                </h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-[48px] lg:text-[64px] font-bold text-accent">
                    {caseItem.result.number}
                  </span>
                  <span className="text-[18px] lg:text-[20px] text-accent">
                    {caseItem.result.unit}
                  </span>
                  <span className="text-[18px] lg:text-[20px] ml-2">
                    {caseItem.result.label}
                  </span>
                </div>
                <p className="text-text-light mt-4 leading-[1.8]">
                  {caseItem.result.description}
                </p>
              </div>
            </FadeInUp>
          </div>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <CTASection
        heading={data.cta.heading}
        subText={data.cta.subText}
        buttonText={data.cta.buttonText}
        buttonLink={data.cta.buttonLink}
        background="dark"
      />
    </>
  );
}
