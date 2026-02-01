'use client';

import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  text?: string;
}

export default function ScrollIndicator({ text = 'Scroll' }: ScrollIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        className="w-[1px] h-[40px] bg-primary"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span className="text-[12px] text-text-light">{text}</span>
    </div>
  );
}
