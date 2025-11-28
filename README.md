# WordofMouth Product Story — FE Assignment

A static React + Vite concept that reimagines the provided DMD Clothing product description page
using WordofMouth’s trust elements: live counters, social proof widgets, media mentions, and
community comments.

> **AI disclosure:** Built by me with significant assistance from ChatGPT (per assignment request).

## What’s inside

- **Three visual variations** (Impact, Story, Social) showcasing different layout strategies for the
  same PDP content.
- **Live counter widgets** and rich stats to highlight real-time shopper activity.
- **Social proof wall** that threads testimonials, comments, and media shout-outs.
- **Community-first microcopy** mimicking the tone of the reference production site.

## Tech stack

- React + TypeScript + Vite
- Vanilla CSS with layered glassmorphism aesthetic
- Google Fonts (`Space Grotesk`, `Inter`)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Structure

```
src/
 ├── App.tsx        # Data model + variation renderer
 ├── App.css        # Layout-specific styling
 └── index.css      # Global tokens, fonts, background
```

## References provided by HyperInt

- Assignment PDP: DMD Clothing Lycra Cotton Stretchable Formal Trousers
- Prototype inspo: https://designs-six-iota.vercel.app/
- Prototype inspo: https://face-oil.vercel.app/
- Walkthrough video: https://drive.google.com/file/d/14AIlKZlodAyH0fAjnrttvXSBr71MOty0/view

## Submission helper

When you’re ready, run `npm run build` to ensure the static bundle compiles, zip the project, host
the preview (optional), and fill the Google Form: https://forms.gle/zxUWSRqjqe5W6QjH6

—

Thanks for reviewing! Let me know if you’d like to see motion prototypes or hook this into a headless
CMS in the next round. ***
