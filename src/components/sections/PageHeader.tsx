type HeightSize = 'sm' | 'md' | 'lg';

interface PageHeaderProps {
  title: string;
  description?: string;
  height?: HeightSize;
  lastUpdated?: string;
}

const heightClasses: Record<HeightSize, string> = {
  sm: 'min-h-[20vh] lg:min-h-[25vh]',
  md: 'min-h-[25vh] lg:min-h-[30vh]',
  lg: 'min-h-[35vh] lg:min-h-[40vh]',
};

export default function PageHeader({
  title,
  description,
  height = 'lg',
  lastUpdated,
}: PageHeaderProps) {
  return (
    <section
      className={`
        ${heightClasses[height]}
        flex flex-col justify-center items-center
        pt-[80px] lg:pt-[120px]
        pb-[60px] lg:pb-[80px]
        px-[5%] lg:px-[10%]
        bg-background
      `}
    >
      <h1 className="text-center text-[36px] lg:text-[48px]">{title}</h1>
      {description && (
        <p className="text-center text-text-light mt-4 lg:mt-6 text-[16px] lg:text-[18px]">
          {description}
        </p>
      )}
      {lastUpdated && (
        <p className="text-center text-text-light mt-4 text-[14px]">
          最終更新日: {lastUpdated}
        </p>
      )}
    </section>
  );
}
