# Couch Cue

A Next.js application using TypeScript, the App Router, ESLint, and pnpm.

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Use `.env.local` for local values. It is ignored by Git. `.env.example` is the committed template.

Only variables prefixed with `NEXT_PUBLIC_` are available in browser code. `NEXT_PUBLIC_APP_NAME` is optional and defaults to `Couch Cue`.

## Verification

```bash
pnpm lint
pnpm build
pnpm start
```
