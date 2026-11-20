"use client";

import { useState } from "react";

/**
 * Copies an email address to the clipboard. Only rendered when an address is set.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <span className="inline-flex items-baseline gap-3">
      <a
        href={`mailto:${email}`}
        className="link-wipe text-lg text-ink transition-colors duration-300 hover:text-accent sm:text-xl"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="label cursor-pointer transition-colors duration-300 hover:text-accent"
        aria-live="polite"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
