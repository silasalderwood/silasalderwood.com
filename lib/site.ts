/**
 * Single source of truth for the content of the site.
 * Edit this file to update copy, links and metadata — no component changes needed.
 */

export const site = {
  name: "Silas Alderwood",
  title: "Silas Alderwood — Systems Engineer",
  description:
    "Silas Alderwood, systems engineer at Forgevine in Zug, Switzerland. Architecting immutable systems — small, sharp programs in C and the plumbing that keeps them standing.",
  url: "https://www.silasalderwood.com",
  locale: "en",
  location: "Zug, Switzerland",
  timezone: "Europe/Zurich",
  coordinates: "47.17° N · 8.52° E",
  role: "Systems engineer",
  company: "Forgevine",
  /**
   * Leave empty to hide the email row in the contact section.
   */
  email: "",
} as const;

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  /** Short description of what lives there. */
  note: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@silasalderwood",
    href: "https://github.com/silasalderwood",
    note: "Source, small programs, experiments.",
  },
  {
    label: "X",
    handle: "@silasalderwood",
    href: "https://x.com/silasalderwood",
    note: "Short-form notes on systems and tooling.",
  },
];

export const about = {
  heading: "Everything I build is designed to be still.",
  paragraphs: [
    "I work at Forgevine on systems that do not quietly rewrite themselves. Immutable state, explicit boundaries, no surprises underneath you — the kind of software that stays predictable exactly when the interesting things start happening.",
    "Most days that means writing C, deciding the shape of data, and maintaining the unglamorous plumbing that keeps the rest of it standing. Boring in the best way.",
  ],
};

export const currently = [
  "Architecting immutable systems at Forgevine.",
  "Writing C — small programs with sharp edges.",
  "Working from Zug, Switzerland, on GMT+1.",
];

export const principles = [
  {
    title: "State is decided once",
    body: "If a value can change, it should change loudly — in one place, for a reason, on purpose.",
  },
  {
    title: "Small programs, honest tools",
    body: "C, because it makes you account for every byte, and a tool that does one thing well beats one that does many things.",
  },
  {
    title: "Boring is a feature",
    body: "The interesting parts should be few and deliberate. Everything else stays predictable, boring and fast.",
  },
];
