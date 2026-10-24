# Portfolio

Personal portfolio of Ashish Bisht, built with Next.js, TypeScript, Three.js (React Three Fiber), Motion and Tailwind CSS.

[Live demo](https://portfolio2024-nine-navy.vercel.app/)

## Getting started

Requires Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | What it does                   |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Start the dev server           |
| `npm run build`        | Production build               |
| `npm run start`        | Serve the production build     |
| `npm run lint`         | ESLint                         |
| `npm run typecheck`    | TypeScript check (`tsc`)       |
| `npm run format`       | Format with Prettier           |
| `npm run format:check` | Verify formatting (used in CI) |

CI runs lint, typecheck, format check and build on every push to `main` and on pull requests.
