# Repo Structure Recommendation

## Recommendation

Start with a lightweight monorepo-style repository from day one, even though the MVP is only a website.

Do not create a giant app/platform now, but avoid naming or structuring the repo as if it will only ever be a static website. The best middle path is a lightweight monorepo that contains the MVP website plus shared documentation, with room to add a mobile app, API, portal, shared UI package, and shared types later.

## Recommended Repo Name

`heart-of-the-matter-platform`

## Recommended Initial Structure

```txt
heart-of-the-matter-platform/
  apps/
    web/
      src/
      public/
      package.json
      next.config.ts
      tailwind.config.ts
  docs/
    strategy/
    implementation/
    design/
    operations/
    future_phases/
    content/
    templates/
  packages/
    ui/
    config/
    types/
  .gitignore
  package.json
  pnpm-workspace.yaml
  README.md
```

## What To Actually Build Now

Only build:

```txt
apps/web
docs
```

Keep `packages/ui`, `packages/config`, and `packages/types` minimal or empty until they are needed.

## Why Not a Simple Single-App Repo?

A simple repo would be fine for the MVP, but it may become annoying later if you add:
- teacher portal
- student/parent portal
- mobile app
- shared design system
- shared pricing/package logic
- shared types
- backend/API
- admin dashboard

You would eventually need to migrate or restructure.

## Why Not Build the Full Platform Now?

Do not overbuild. The initial site should remain simple. The monorepo should be structural foresight, not a reason to add platform features early.

## Recommended Stack

For MVP:
- Next.js app in `apps/web`
- TypeScript
- Tailwind CSS
- Vercel
- Acuity embed
- Stripe through Acuity
- Google Calendar through Acuity
- Markdown docs in `/docs`

For later:
- `apps/portal` for teacher/student/admin portal
- `apps/mobile` for React Native / Expo mobile app
- `apps/api` if a separate API becomes necessary
- `packages/ui` for shared UI components
- `packages/types` for shared TypeScript types
- `packages/config` for shared Tailwind/ESLint/TS config

## Future Expanded Structure

```txt
heart-of-the-matter-platform/
  apps/
    web/          # marketing website
    portal/       # future teacher/student/admin portal
    mobile/       # future mobile app
    api/          # future backend/API if needed
  packages/
    ui/           # shared components
    config/       # shared config
    types/        # shared TypeScript types
    utils/        # shared utilities
  docs/
    strategy/
    implementation/
    design/
    operations/
    future_phases/
    content/
    templates/
```

## MVP Guardrail

Even with a monorepo structure, the quote/scope should remain:

Custom website + Acuity + Stripe + Google Calendar.

Do not include:
- custom booking engine
- portal
- mobile app
- teacher marketplace
- custom payment system
- Stripe Connect
