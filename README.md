# StackForge Client

Next.js frontend for StackForge, a project scaffolding tool meant to generate FastAPI and React starter projects through a step-by-step wizard. The backend lives in [stackforge-server](https://github.com/rogerjeasy/stackforge-server).

## Status

Early work in progress. Many files in `src/` are empty (0-byte) placeholders created to lay out the intended structure.

Implemented:

- Landing page: hero, features showcase, generator cards, about and contact sections, shared header and footer with a background animation.
- FastAPI generator wizard at `/fastapi-generator`, with four steps:
  1. Project info (name, version, Python version, description, author) with basic validation.
  2. API config (host, port, API prefix, docs/ReDoc URLs, CORS origins) and a library picker with a list of common FastAPI packages plus manual entries.
  3. Feature toggles (Docker, testing, logging, PostgreSQL / MongoDB / Firestore, authentication, CI/CD, background tasks, Redis, monitoring).
  4. Review.

Not implemented yet:

- Actual project generation. The "Generate" button does not call a backend; it waits a few seconds and downloads the chosen configuration as `<project-name>-config.json`.
- React, Next.js and Angular generators (cards are shown on the homepage, but the React wizard files are empty and the other routes do not exist).
- Authentication, dashboard and project pages, API routes (`src/app/api/*`), services, stores, hooks, schemas and most shared components are empty placeholders.
- Some header links (`/features`, `/generators`, `/about`, `/contact`) have no matching pages yet.

The figures and contact details shown on the landing and wizard pages are placeholder copy, not real data.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4, shadcn/ui components (Radix UI), lucide-react icons, sonner
- Listed for upcoming work but not yet used: axios, zustand, react-hook-form, zod

## Project structure

```
src/
  app/
    page.tsx                         # Landing page
    (generators)/fastapi-generator/  # FastAPI wizard page
    (generators)/react-generator/    # placeholder
    (auth)/, (dashboard)/, api/      # placeholders
  components/
    homepage/                        # Landing page sections
    fastapi/                         # Wizard steps (FastAPIWizard, ProjectInfoStep, APIConfigStep, FeaturesStep, ReviewStep, ...)
    common/                          # Header, Footer, BackgroundAnimation
    ui/                              # shadcn/ui components
  types/fastapi.types.ts             # Wizard data model
```

## Getting started

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. No environment variables are needed at this stage.

Other scripts:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run lint        # ESLint
npm run type-check  # tsc --noEmit
```

## Related

- [stackforge-server](https://github.com/rogerjeasy/stackforge-server): FastAPI backend (early skeleton).
