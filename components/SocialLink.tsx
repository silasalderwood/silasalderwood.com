"use client";

import { TrackedLink } from "@/components/TrackedLink";
import type { SocialLink } from "@/lib/site";

/**
 * A social link rendered as a full-width row: label on the left, a note in the
 * middle, an arrow that slides on hover on the right.
 */
export function SocialLinkRow({ link }: { link: SocialLink }) {
  return (
    <TrackedLink
      href={link.href}
      linkText={link.label}
      className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-line py-5 transition-colors duration-300 hover:border-line-strong sm:grid-cols-[7rem_1fr_auto]"
    >
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
        {link.label}
      </span>
      <span className="text-base text-ink sm:text-lg">{link.handle}</span>
      <span className="flex items-center gap-3">
        <span className="hidden text-sm text-ink-faint sm:inline">{link.note}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="size-4 translate-x-0 fill-none stroke-accent transition-transform duration-500 ease-out group-hover:translate-x-1"
          strokeWidth="1.4"
        >
          <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </TrackedLink>
  );
}
