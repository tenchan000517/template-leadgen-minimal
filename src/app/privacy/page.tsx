'use client';

import { getPageData, company } from '@/lib/site';
import { PageHeader, SectionWrapper } from '@/components';
import { FadeInUp } from '@/components/animations';

export default function PrivacyPage() {
  const data = getPageData('privacy');

  // Markdownっぽいテキストをシンプルに処理
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc pl-6 space-y-2 mb-6">
            {currentList.map((item, i) => (
              <li key={i} className="text-[15px] lg:text-[16px] leading-[1.9]">
                {item}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2
            key={`h2-${index}`}
            className="text-[20px] lg:text-[24px] font-bold mt-[48px] lg:mt-[60px] mb-4 lg:mb-6 first:mt-0"
          >
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('・')) {
        currentList.push(trimmedLine.replace('・', ''));
      } else if (trimmedLine) {
        flushList();
        elements.push(
          <p
            key={`p-${index}`}
            className="text-[15px] lg:text-[16px] leading-[1.9] mb-4 lg:mb-6"
          >
            {trimmedLine}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={data.header.title}
        lastUpdated={data.header.lastUpdated}
        height="sm"
      />

      {/* Policy Content */}
      <SectionWrapper background="offwhite" paddingTop="sm" paddingBottom="lg">
        <FadeInUp>
          <div className="max-w-[800px] mx-auto">
            {renderContent(data.content)}

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-white">
              <p className="text-[15px] lg:text-[16px] leading-[1.9]">
                会社名: {company.name}
              </p>
              <p className="text-[15px] lg:text-[16px] leading-[1.9]">
                メールアドレス: {company.email}
              </p>
              <p className="text-[15px] lg:text-[16px] leading-[1.9]">
                電話番号: {company.phone}
              </p>
            </div>
          </div>
        </FadeInUp>
      </SectionWrapper>
    </>
  );
}
