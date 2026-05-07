'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Side = 'left' | 'right' | 'center';

export function MotionReveal({
  children,
  side = 'left',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  side?: Side;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const hiddenX = shouldReduceMotion ? 0 : side === 'right' ? 72 : side === 'left' ? -72 : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: hiddenX, y: shouldReduceMotion ? 0 : 16, filter: shouldReduceMotion ? 'blur(0px)' : 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.24 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
