"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger position within a group. Each step adds 60ms. */
  delay?: number;
  /** Travel distance in px before settling. */
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Scroll-in wrapper. Reduced motion is handled globally by MotionProvider,
 * which strips the transform and leaves a plain fade — so this renders the
 * same markup on the server and the client.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: RevealProps) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: delay * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
