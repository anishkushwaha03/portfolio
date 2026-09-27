"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` makes Motion drop transform and layout animations for
 * anyone who asked the OS for reduced motion, keeping only opacity fades.
 *
 * Handling it here rather than branching on `useReducedMotion()` inside each
 * component matters: that hook returns null during SSR and a boolean on the
 * client, so branching on it produced different markup on each side and broke
 * hydration.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
