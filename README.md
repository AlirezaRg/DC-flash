# The Flash — Codeiish Lab

A cinematic, scroll-driven fan tribute to The Flash. Every "video" in the site is really a sequence of still frames drawn to a canvas and scrubbed by scroll position — no video files, no autoplay.

## What it does

- **370-frame scroll-scrubbed sequences** rendered on canvas, pinned and driven by GSAP ScrollTrigger
- **Two-part "Run" chapter** (Desert Speed → The Clash, then No Hesitation → Common Ground) with a fan-art gallery in between
- **Scene breakdown** — four story beats laid out as a single unbroken sprint
- **Fan-art gallery** — 19 hover-to-reveal stills
- **Smooth scrolling** via Lenis, synced to GSAP's ticker
- Fully responsive, built with the App Router

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- React + TypeScript
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- Tailwind CSS

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
app/
  layout.tsx        # Metadata, fonts
  page.tsx           # Section order
components/
  Hero.tsx            # Title reveal (canvas scroll-scrub)
  TheRun.tsx          # Chapter 1: Desert Speed / The Clash
  FanArtGallery.tsx    # Hover-to-reveal gallery
  TheRunFinale.tsx     # Chapter 2: No Hesitation / Common Ground
  RunBreakdown.tsx      # Four-beat scene breakdown
  FootageHeadline.tsx   # "The Legend" interstitial
  HeroTransition.tsx    # About / tribute copy
  Faq.tsx               # Build FAQ
  CTA.tsx                # About this site + socials
  Nav.tsx / Footer.tsx   # Site chrome
  CodeiishMark.tsx       # Brand mark
public/
  frames/              # Canvas scroll-scrub frame sequences
  images/              # Gallery stills
```

## Editing Content

- **Copy & scene captions** — directly in each section component under `components/`
- **Frame sequences** — `public/frames/`, referenced by the relevant section component
- **Branding** — `components/CodeiishMark.tsx`, `public/codeiish-logo.png`, `app/favicon.ico`

## Disclaimer

This is an independent, non-commercial fan project celebrating The Flash. It is **not affiliated with, endorsed by, or produced by** Warner Bros., DC, or DC Studios. All Flash-related trademarks belong to their respective owners.

## Credits

Built by [Codeiish Lab](https://www.codeiish.ir).
