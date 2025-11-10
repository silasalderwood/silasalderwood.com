# Silas Alderwood - Portfolio Website

A work in progress portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library
- **Google Analytics** - Analytics and event tracking via @next/third-parties

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
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── next.config.js      # Next.js configuration
```

## License

MIT License - See LICENSE file for details.

