"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  /** How much of the scroll distance the content lags behind by. */
  speed?: number;
  className?: string;
};

/**
 * Drifts its children a little slower than the page scrolls, so the content
 * reads as a layer sitting above the page rather than flat on it. Transform
 * only, and switched off entirely for people who ask for reduced motion.
 */
export function Parallax({ children, speed = 0.12, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      // How far the element has travelled through the viewport, from -1 to 1.
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = (progress - 0.5) * 2 * speed * 100;
      element.style.setProperty("--parallax", `${offset.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: "translate3d(0, var(--parallax, 0px), 0)" }}
    >
      {children}
    </div>
  );
}
