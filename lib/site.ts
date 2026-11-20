/**
 * Single source of truth for the content of the site.
 * Edit this file to update copy, links and metadata, no component changes needed.
 */

export const site = {
  name: "Silas Alderwood",
  title: "Silas Alderwood, Systems Engineer",
  description:
    "Silas Alderwood, systems engineer at Forgevine in Zug, Switzerland. Builds software that behaves the way you left it.",
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
    note: "Short notes on systems and tooling.",
  },
];

export const about = {
  heading: "Most things I build are meant to stay put.",
  paragraphs: [
    "I work at Forgevine, where I spend most of my time on systems that should not change underneath you. State gets decided once, the boundaries are explicit, and nothing quietly rewrites itself later. It sounds fussy until something breaks at 3am and you can still tell exactly what happened.",
    "A lot of it happens before anything gets built, while the shape of the data is still being decided. Get that wrong and everything above it is standing on sand. Get it right and the rest is mostly unglamorous plumbing, which is exactly how I like it.",
  ],
};

export const currently = [
  "At Forgevine, on systems that stay put.",
  "Small programs, sharp edges, boring tools.",
  "In Zug, Switzerland, on GMT+1.",
];

export const principles = [
  {
    title: "State is decided once",
    body: "If a value can change, it should change out loud, in one place, for a reason. Quiet mutation is where the 3am bugs come from.",
  },
  {
    title: "Small programs, honest tools",
    body: "A tool that does one thing well is worth more than one that does everything badly. The same goes for a service, a schema, a script. Small and honest beats big and clever.",
  },
  {
    title: "Boring is a feature",
    body: "The interesting parts should be few and deliberate. Everything else can be predictable, boring and fast.",
  },
];
