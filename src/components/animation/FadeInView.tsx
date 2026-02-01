'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Direction = 'up' | 'left' | 'right' | 'none';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
}

const getInitialPosition = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':
      return { opacity: 0, y: distance };
    case 'left':
      return { opacity: 0, x: distance };
    case 'right':
      return { opacity: 0, x: -distance };
    case 'none':
    default:
      return { opacity: 0, y: 0 };
  }
};

const getFinalPosition = (direction: Direction) => {
  switch (direction) {
    case 'up':
      return { opacity: 1, y: 0 };
    case 'left':
    case 'right':
      return { opacity: 1, x: 0 };
    case 'none':
    default:
      return { opacity: 1, y: 0 };
  }
};

export default function FadeInView({
  children,
  delay = 0,
  direction = 'up',
  distance = 20,
  className = '',
}: FadeInViewProps) {
  return (
    <motion.div
      initial={getInitialPosition(direction, distance)}
      whileInView={getFinalPosition(direction)}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
