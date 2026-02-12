# rrdev.site — Portfolio of Roman Romanov

Personal portfolio of **Roman Romanov**, Senior Frontend Engineer.  
Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **next-intl** for a multilingual, performance-focused presentation.

## Tech stack

- Next.js 16 (App Router, typed routes)
- TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- next-intl (i18n: `en`, `ro`, `ru`, `ua`)
- Framer Motion (subtle motion primitives)
- React Three Fiber / Drei (experimental 3D, optional)

## Getting started

### Prerequisites

- Node.js 20+
- pnpm (recommended, see `packageManager` field in `package.json`)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Then open `http://localhost:3000`.

### Production build

```bash
pnpm build
pnpm start
```

## Internationalization

Locales are configured in `i18n/config.ts`:

- Default locale: `en`
- Supported: `en`, `ro`, `ru`, `ua`

Locale-specific messages live in `messages/*.json`. The route prefix is always present (e.g. `/en`, `/ro`, ...).

## SEO

- `app/robots.ts` — dynamic `robots.txt` based on `siteConfig`.
- `app/sitemap.ts` — sitemap that lists the root and all localized home pages using `siteConfig.url` and `locales`.
- Open Graph and basic metadata are configured via `app/layout.tsx` and `utils/site-config.ts`.

## Project structure (high level)

- `app/` — Next.js app router entrypoints, layouts, routing
- `components/` — UI components, sections, layout primitives
- `i18n/` — internationalization config and server helpers
- `messages/` — localized copy per namespace and locale
- `public/` — static assets (images, PDF resume, OG image)
- `utils/` — shared utilities and site config

## License

This repository is private and intended for personal portfolio use. Please do not redistribute or reuse the code without prior permission.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
