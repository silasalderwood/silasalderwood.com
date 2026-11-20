# Silas Alderwood - Portfolio Website

A work in progress portfolio website built with Next.js, TypeScript, and Tailwind CSS.

> Architecting immutable systems. Probably nothing.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library
- **Google Analytics** - Analytics and event tracking via @next/third-parties

## Editing the site

All copy, links and metadata live in **`lib/site.ts`**, one file, no components to
touch. The site renders About, How I work, Now and Contact from it.

```ts
export const site = {
  name: "Silas Alderwood",
  description: "...",
  email: "", // leave empty to hide the email row in Contact
};
```

A "Selected work" section can be added between About and How I work once there
are projects to show. The numbering of the sections is in `app/page.tsx`.

## Design

- **Type**: Plus Jakarta Sans for text, Instrument Serif for the one italic
  accent, JetBrains Mono for metadata labels.
- **Colour**: a single cobalt accent over warm paper in light mode and a cool
  near-black in dark mode. Both themes follow the operating system setting.
- **Tokens**: colours and fonts are CSS custom properties in `app/globals.css`,
  exposed to Tailwind in `tailwind.config.ts`.

## Google Analytics Setup

1. Get your Google Analytics Measurement ID (GA4) from [Google Analytics](https://analytics.google.com/)
2. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Restart your development server

### Event Tracking

Use the analytics utilities from `lib/analytics.ts` to track custom events:

```typescript
import { analytics } from '@/lib/analytics';

// Track button clicks
analytics.trackClick('Contact Button', 'header');

// Track link clicks
analytics.trackLink('https://example.com', 'External Link');

// Track custom events
import { trackEvent } from '@/lib/analytics';
trackEvent('custom_event', {
  event_category: 'engagement',
  event_label: 'custom_action'
});
```

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, analytics
│   ├── page.tsx          # Home page
│   ├── globals.css       # Design tokens and base styles
│   ├── opengraph-image.tsx # Social card
│   ├── robots.ts         # robots.txt
│   └── sitemap.ts        # sitemap.xml
├── components/
│   ├── SiteHeader.tsx    # Sticky header with mobile menu
│   ├── SiteFooter.tsx
│   ├── Reveal.tsx        # Scroll reveal wrapper
│   ├── LocalTime.tsx     # Clock in the site's timezone
│   └── SocialLink.tsx    # Tracked social link row
├── hooks/useAnalytics.ts
├── lib/
│   ├── site.ts           # All site content
│   └── analytics.ts      # Google Analytics helpers
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## License

MIT License - See LICENSE file for details.
