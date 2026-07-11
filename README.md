# Cyber Land

Production-ready Next.js 15 storefront for **Cyber Land** — laptops, gaming PCs, computer hardware, and tech accessories.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 · Framer Motion
- Zustand · TanStack Query · Axios
- React Hook Form · Zod

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality gates (must pass before deploy)

```bash
npm run type-check
npm run lint
npm run build
# or all:
npm run verify
```

## Vercel deployment

1. Push this repo to GitHub (include the full `src/` folder).
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Optional env:
   - `NEXT_PUBLIC_SITE_URL` — production domain (e.g. `https://your-app.vercel.app`)
5. Deploy. Build command: `npm run build`. Output: `.next`.

### GitHub → Vercel

Connect the GitHub repository; every push to `main` triggers a production deploy.

## Project structure

See [ARCHITECTURE.md](./ARCHITECTURE.md).

```
src/
  app/           # Routes, sitemap, robots
  features/      # Domain modules
  components/    # UI, layout, sections
  services/      # API layer
  store/         # Zustand
  types/ config/ constants/ utils/ styles/
```

## SEO

- `src/app/sitemap.ts` — dynamic sitemap
- `src/app/robots.ts` — robots.txt
- Per-route `metadata` / `generateMetadata`
