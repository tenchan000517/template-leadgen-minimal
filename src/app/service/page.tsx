'use client';

import { getPageData } from '@/lib/site';
import {
  PageHeader,
  SectionWrapper,
  CTASection,
} from '@/components';
import { FadeInUp } from '@/components/animations';

export default function ServicePage() {
  const data = getPageData('service');

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={data.header.title}
        description={data.header.description}
        height="lg"
      />

      {/* Service Overview */}
      <SectionWrapper background="offwhite" paddingTop="lg" paddingBottom="lg">
        <FadeInUp>
          <h2 className="text-[28px] lg:text-[36px] mb-[60px] lg:mb-[80px]">
            {data.overview.heading}
          </h2>
        </FadeInUp>
        <div className="space-y-[80px] lg:space-y-[120px]">
          {data.overview.categories.map((category, index) => (
            <FadeInUp key={category.number} delay={index * 0.15}>
              <div className="flex flex-col lg:flex-row lg:gap-[10%]">
                <div className="lg:w-[40%] mb-6 lg:mb-0">
                  <span className="text-[28px] lg:text-[32px] font-bold text-accent">
                    {category.number}
                  </span>
                  <h3 className="text-[24px] lg:text-[28px] mt-2">
                    {category.name}
                  </h3>
                </div>
                <div className="lg:w-[50%]">
                  <p className="text-text-light leading-[1.8]">
                    {category.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-text-light flex items-start gap-3"
                      >
                        <span className="text-text-light">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper background="white" paddingTop="xl" paddingBottom="lg">
        <FadeInUp>
          <h2 className="text-center text-[28px] lg:text-[36px] mb-[60px] lg:mb-[80px]">
            {data.whyChooseUs.heading}
          </h2>
        </FadeInUp>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px] lg:gap-[60px]">
          {data.whyChooseUs.reasons.map((reason, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div>
                <h3 className="text-[24px] lg:text-[28px] font-bold">
                  {reason.keyword}
                </h3>
                <p className="text-text-light mt-4 leading-[1.8]">
                  {reason.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper background="offwhite" paddingTop="lg" paddingBottom="lg">
        <FadeInUp>
          <h2 className="text-[28px] lg:text-[36px] mb-[60px] lg:mb-[80px]">
            {data.process.heading}
          </h2>
        </FadeInUp>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-[12.5%] top-[24px] bottom-[24px] w-[1px] bg-[#e0e0e0]" />

          <div className="space-y-[60px] lg:space-y-[80px]">
            {data.process.steps.map((step, index) => (
              <FadeInUp key={step.number} delay={index * 0.1}>
                <div className="flex gap-[5%] lg:gap-[10%]">
                  <div className="w-[20%] lg:w-[25%] flex-shrink-0 relative">
                    <span className="text-[36px] lg:text-[48px] font-bold text-[#c0c0c0]">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[20px] lg:text-[24px]">{step.name}</h3>
                    <p className="text-text-light mt-2 lg:mt-3 leading-[1.8]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection
        heading={data.cta.heading}
        subText={data.cta.subText}
        buttonText={data.cta.buttonText}
        buttonLink={data.cta.buttonLink}
        secondaryLink={data.cta.caseLink}
        background="dark"
      />
    </>
  );
}
