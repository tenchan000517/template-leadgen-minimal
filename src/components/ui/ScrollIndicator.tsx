'use client';

interface ScrollIndicatorProps {
  text?: string;
}

export default function ScrollIndicator({ text = 'Scroll' }: ScrollIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[1px] h-[40px] bg-primary animate-bounce" />
      <span className="text-[12px] text-text-light">{text}</span>
    </div>
  );
}
