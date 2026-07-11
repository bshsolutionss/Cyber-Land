# Cyber Land — Enterprise Architecture

Feature-based, scalable architecture for production readiness.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| State | Zustand |
| Server state | TanStack React Query |
| HTTP | Axios |
| Forms | React Hook Form + Zod |
| Animation | Framer Motion |

## Folder structure

```
src/
├── app/                    # Next.js routes only (thin pages)
├── features/               # Self-contained domain modules
│   ├── products/
│   │   ├── api/
│   │   ├── hooks/
│   │   ├── components/
│   │   ├── data/
│   │   ├── types/
│   │   └── index.ts
│   ├── cart/
│   ├── checkout/
│   ├── auth/
│   ├── account/
│   ├── search/
│   ├── wishlist/
│   ├── compare/
│   └── collections/
├── components/
│   ├── ui/                 # Design-system primitives
│   ├── common/             # Shared reusable pieces
│   ├── layout/             # Header, footer, drawers
│   ├── cards/              # Product / category cards
│   ├── forms/              # RHF + Zod forms
│   └── sections/           # Homepage sections
├── services/               # API / business logic (no UI)
│   ├── api/client.ts
│   ├── product.service.ts
│   ├── cart.service.ts
│   ├── auth.service.ts
│   └── checkout.service.ts
├── store/                  # Zustand stores
│   ├── cart.store.ts
│   ├── wishlist.store.ts
│   ├── compare.store.ts
│   ├── auth.store.ts
│   └── ui.store.ts
├── hooks/                  # Cross-feature hooks
├── types/                  # Shared TypeScript types
├── constants/
├── config/
├── utils/
├── styles/
└── assets/
```

## Rules

1. **No API calls in UI** — always go through `services/` or `features/*/api/`.
2. **No business logic in pages** — pages compose features + sections.
3. **State** — client UI/cart via Zustand; async server data via React Query.
4. **Forms** — always React Hook Form + Zod schemas in `features/*/schemas/`.
5. **Types** — no `any`; shared types live in `src/types/`.
6. **Features are self-contained** — export public API via `index.ts`.

## Data flow

```
UI Component
  → hooks (useCart, useProduct, …)
    → store (Zustand) | services (productService, …)
      → catalog / Axios API
```

## Scaling path

| Today | Future |
|-------|--------|
| Local product catalog | REST/GraphQL via `apiClient` |
| Mock auth | Real JWT auth service |
| Client cart | Cart sync service |
| Static SSG | ISR + edge caching |

## Key imports

```ts
import { productService } from "@/services/product.service";
import { useCart } from "@/hooks/useCart";
import { useProduct } from "@/features/products";
import type { Product } from "@/types";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";
```
