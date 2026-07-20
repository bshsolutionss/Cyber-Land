# CYBER LAND — Design System

## Typography

| Role | Family | Weight | Line height | Letter spacing |
|------|--------|--------|-------------|----------------|
| Heading | Jost | 400 | 1 | -0.03em |
| Body | Inter | 400 | 1.2 | 0 |
| Navigation | Inter | 500 | — | — |
| Button | Inter | 500 | — | clamp 0.875–1rem |
| Product title | Inter | 500 | — | clamp 1–1.25rem |

### Type scale

`3xs` 0.625rem · `2xs` 0.6875rem · `xs` 0.75rem · `2sm` 0.8125rem · `sm` 0.875rem · `base` 1rem · `lg` 1.125rem · `xl` 1.25rem · `2xl` 1.5rem · `3xl` 1.875rem · `4xl` 2.25rem · `5xl` 3rem

## Color palette (RGB / Hex)

| Token | RGB | Hex |
|-------|-----|-----|
| Base text / button | 23 23 23 | `#171717` |
| Background | 255 255 255 | `#FFFFFF` |
| Announcement bar | 104 90 202 | `#685ACA` |
| Announcement text | 250 250 250 | `#FAFAFA` |
| Sale tag | 165 109 205 | `#A56DCD` |
| Highlight | 255 221 191 | `#FFDDBF` |
| Rating | 245 158 11 | `#F59E0B` |
| Placeholder | 250 250 250 | `#FAFAFA` |
| Footer | 0 0 0 | `#000000` |
| Copyright bar | 23 23 23 | `#171717` |
| Error | 190 18 60 | `#BE123C` |
| Shadow accent | 168 232 226 | `#A8E8E2` |

## Radius

| Element | Value |
|---------|--------|
| Button | `3.75rem` (pill) |
| Input | `0.75rem` |
| Card / block | `clamp(0.625rem, 1.053vw, 1.25rem)` |

## Layout

| Token | Value |
|-------|--------|
| Page width | 1900px |
| Page padding mobile | 1.25rem (20px) |
| Page padding ≥1024 | 2.25rem |
| Page padding ≥1280 | 3rem |
| Gap padding | clamp(1.25rem, 2.526vw, 3rem) |
| Header height | ~64–72px |
| Announcement height | 40px |

## Breakpoints (target)

320 · 375 · 390 · 414 · 768 · 1024 · 1280 · 1440 · 1920

## Components

- Announcement bar (autoplay 3s)
- Sticky header (always)
- Mobile menu drawer (left)
- Cart drawer (right) + free shipping threshold Rs. 1000
- Search drawer (top)
- Product card: save badge, rating, hover ATC
- Hero slider: 5s autoplay, fade/slide
- Category cards 5-col desktop
- Shop the look hotspots
- Instagram UGC grid
- Live Product Demo FAB

## Motion

| Interaction | Timing |
|-------------|--------|
| Drawer slide | 300ms tween ease [0.25, 0.46, 0.45, 0.94] |
| Card image hover | 500ms scale 1.04 |
| Category image hover | 600ms scale 1.06 |
| Hero slide | 550ms |
| Announcement rotate | 3000ms |
| Hero autoplay | 5000ms |
