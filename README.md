# Acre-X Infra — Marketing Site

A premium, single-page marketing site for the **Acre-X** property-discovery app. Its
one job: get visitors to download the mobile app. Built as an immersive scroll story —
not a property-listing site.

## Stack

- **React 19 + Vite + TypeScript**
- **Tailwind CSS v4** (design tokens in `src/index.css`)
- **Framer Motion** — all entrance, scroll and micro-interactions
- **Lenis** — momentum smooth scroll + smooth anchor navigation (`src/lib/useLenis.ts`)
- **lucide-react** — icons
- **react-router-dom** — landing + two tiny legal routes (`/privacy`, `/terms`)

> GSAP was intentionally left out: Framer Motion's `useScroll`/`useTransform` +
> Lenis already cover every animation in the brief (parallax, pinned horizontal
> scroll, timeline fill, counters). Add it only if a future effect genuinely needs it.

## Sections (`src/pages/Home.tsx`)

Hero → What is Acre-X → Why Acre-X → **Experience the App** (pinned horizontal phone
showcase) → How it Works (timeline) → Interactive Experience (map) → Trust + Stats →
Testimonials → Download CTA → Footer.

The iPhone mockups and in-app screens are **pure CSS/SVG** (`src/components/ui/PhoneMockup.tsx`,
`src/components/app/AppScreens.tsx`) — no screenshot assets to manage.

## Notes

- App Store / Play Store links and contact details are placeholders — see
  `APP_STORE_URL` / `PLAY_STORE_URL` in `src/data/content.ts`.
- The download QR (`src/components/ui/QrCode.tsx`) is decorative, not scannable.

## Scripts

```bash
npm run dev       # dev server
npm run build     # typecheck + production build
npm run preview   # preview the build
npm run lint      # oxlint
```
"# acerx-infra" 
