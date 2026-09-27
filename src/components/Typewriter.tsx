"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const TYPE_MS = 62;
const DELETE_MS = 32;
const HOLD_MS = 1700;

/**
 * Types each phrase out, holds, deletes, moves to the next.
 *
 * This lives in its own component on purpose. It re-renders roughly every
 * 60ms, and when that state sat in the Hero it re-rendered every sibling too,
 * which restarted their delayed entrance animations before they could begin.
 *
 * Seeded with the first phrase already complete so the server pass and the
 * first client render produce the same text — typing starts once the effect runs.
 */
export default function Typewriter({ phrases }: { phrases: readonly string[] }) {
  const reduceMotion = useReducedMotion();
  const enabled = !reduceMotion;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const phrase = phrases[index % phrases.length];

    if (!deleting && text === phrase) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }

    // Finished deleting — advance to the next phrase on the next tick rather
    // than synchronously, which would cascade an extra render.
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, TYPE_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting ? phrase.slice(0, prev.length - 1) : phrase.slice(0, prev.length + 1)
        ),
      deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, enabled]);

  return (
    <span className="font-mono font-medium text-accent caret">
      {enabled ? text : phrases[0]}
    </span>
  );
}
