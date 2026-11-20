"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealProps = {
  children: ReactNode;
  /** Stagger, in milliseconds. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

type RevealTag = "div" | "section" | "li" | "article";

/**
 * Fades and lifts its children into place the first time they enter the
 * viewport. Content is server-rendered and visible by default, so it stays
 * readable without JavaScript; the hidden state is only applied on hydration.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const Wrapper = Tag as RevealTag;
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "out" | "in">("idle");

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setState("in");
      return;
    }

    const isInView = () => {
      const rect = element!.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.88 && rect.bottom > 0;
    };

    if (isInView()) {
      setState("in");
      return;
    }

    setState("out");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState("in");
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper
      ref={ref as React.Ref<never>}
      data-reveal={state === "idle" ? undefined : state}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={className}
    >
      {children}
    </Wrapper>
  );
}
