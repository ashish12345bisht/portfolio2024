"use client";

import { motion, useReducedMotion } from "motion/react";

/** Fades content up as it scrolls into view; appears instantly for reduced motion. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      // The server can't know the motion preference, so the starting state is always the
      // same (a different one wouldn't hydrate); reduced motion just skips the animation.
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: [0.76, 0, 0.24, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
