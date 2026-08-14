# Style Guide

Design conventions for this site. Consult this before building or styling any component — prefer these tokens over inventing new colors, sizes, or fonts inline.

## Typography

- **Font family**: Lato (`--font-lato`), loaded in [app/layout.tsx](app/layout.tsx) with weights 400/700/900 and applied globally via `body`'s `font-family` in [app/globals.css](app/globals.css).
- **Titles & headers** (`h1`, `h2`, and other heading-level content — e.g. press release item titles): Lato Black — use Tailwind's `font-black` (weight 900).
- **Body text**: Lato Regular — the default; no weight utility needed.
- Only weights 400, 700, and 900 are loaded. Utilities requesting other weights (e.g. `font-medium` 500, `font-semibold` 600) will render as the nearest loaded weight per the browser's font-matching rules — in practice this means they render as Lato Bold (700). Prefer `font-normal`, `font-bold`, or `font-black` explicitly rather than `font-medium`/`font-semibold` going forward.
- Do not introduce additional font families without updating this guide.

### Type scale

<!-- TODO: confirm/expand — filling in with common Tailwind sizes as a starting point -->
- Headings: `text-4xl`/`text-5xl` (hero), `text-2xl`/`text-3xl` (section), `text-xl` (subsection)
- Body: `text-base`
- Small/caption: `text-sm`, `text-xs`

## Color

### Brand

- Primary green: `#068e4a` — use `bg-[#068e4a]` / `text-[#068e4a]`
- Primary green (hover/darker): `#057a3f`

### Neutrals

Use Tailwind's `zinc` scale exclusively for grays/blacks/whites — do not add raw hex grays.

- `zinc-50` / `zinc-100` — light backgrounds, light text on dark
- `zinc-400` / `zinc-500` / `zinc-600` — secondary/muted text
- `zinc-800` / `zinc-900` / `zinc-950` — dark backgrounds, primary dark text

<!-- TODO: `#ccc`, `#383838`, `#1a1a1a` are currently used as raw hex in a few places
     and should be mapped to the nearest zinc value (or promoted to named tokens
     here) rather than left as one-offs. -->

## Spacing & layout

<!-- TODO: document standard section padding, max-width/container conventions, gap scale -->

## Components

<!-- TODO: buttons, links, cards — document standard treatments as they solidify -->

## Notes for Claude Code

- When adding new UI, reuse the tokens above rather than picking new colors/sizes.
- If a new color or font is genuinely needed, flag it and propose adding it here rather than using it ad hoc.
- Keep this file in sync with reality — if you introduce a new pattern that should become standard, update this guide in the same change.
