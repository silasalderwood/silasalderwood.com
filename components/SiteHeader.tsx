"use client";

import { useEffect, useState } from "react";
import { LocalTime } from "@/components/LocalTime";
import { site } from "@/lib/site";

const nav = [
  { label: "About", href: "#about" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 12);

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
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
  }, []);

  // Close the mobile menu on Escape, and lock the page while it is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-scrolled={scrolled}
      className={`fixed inset-x-0 top-0 z-40 border-b border-transparent transition-colors duration-500 data-[scrolled=true]:surface-blur data-[scrolled=true]:border-line data-[scrolled=true]:backdrop-blur-xl ${
        open ? "border-line bg-paper" : ""
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
        <a
          href="#top"
          className="group flex items-baseline gap-2 text-[0.95rem] font-medium tracking-tightest"
        >
          <span className="inline-block size-1.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150" />
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 sm:flex">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-wipe text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          <LocalTime />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="label flex items-center gap-2 sm:hidden"
        >
          {open ? "Close" : "Menu"}
          <span className="relative flex h-2.5 w-3.5 flex-col justify-between" aria-hidden="true">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* How far down the page you are. */}
      <div
        className="h-px origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* Mobile navigation: a full-height overlay so the page never shows through. */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-16 z-30 bg-paper transition-opacity duration-300 ease-out sm:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="h-full overflow-y-auto px-5 pt-2">
          {nav.map((item, index) => (
            <li key={item.href} className="border-b border-line">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 60}ms` }}
                className={`flex items-baseline justify-between py-5 text-lg ${
                  open ? "animate-rise" : ""
                }`}
              >
                {item.label}
                <span className="label">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
