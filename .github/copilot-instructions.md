# Copilot instructions for this repo

This repository is a Vite + React (Tailwind) template organized by feature. Keep suggestions precise and repo-specific — avoid generic instructions.

- Project entry points: `src/main.jsx` mounts `src/app/app.jsx`.
- Routing: `src/app/router.jsx` defines routes with `createRoute()`; pages live in `src/app/routes/` and are imported using Vite aliases (e.g. `@routes/home`). Use `getRouteByName()` / `generatePath()` for internal path generation.
- Code-splitting: pages are lazy-loaded via `React.lazy` and wrapped with `SuspenseWrapper`. When adding pages, follow this pattern.

- Aliases: see `vite.config.js` — imports use `@`, `@app`, `@components`, `@routes`, `@data`, etc. Prefer aliases for cross-file imports instead of long relative paths.
- Styling: Tailwind v4 is used. Modify utility classes in JSX or `src/index.css` for global styles.

- Data/content: static content is under `src/data/` (JSON files). Prefer editing those for copy/content changes rather than hardcoding strings in components.
- Features: feature modules are under `src/features/` and may include an `api/` directory for feature-specific adapters. Follow existing file placement when adding features.

- Providers & app shell: `src/app/provider.jsx` wraps the app with `ErrorBoundary` and `SkipLink`. Preserve wrapper order when changing global providers.

- Components: UI components live under `src/components/` and `src/components/ui/`. Reusable components follow prop-based APIs; mimic existing components for new ones.

- Dev workflow & commands (use exact scripts):
  - `npm install` — install deps
  - `npm run dev` — start Vite dev server
  - `npm run build` — build production bundle
  - `npm run preview` — preview built output
  - `npm run lint` — run ESLint

- Module format: repository uses ESM (`type: module` in `package.json`). Use `export` / `import` syntax.

- Performance & accessibility patterns:
  - Follow lazy-loading for route pages. Keep non-route UI synchronous.
  - `ErrorBoundary` and `SkipLink` are used globally — preserve accessibility helpers when changing layout.

- Examples (how to add a simple page):
  1. Add `src/app/routes/newpage.jsx` exporting a React component.
  2. Import it in `src/app/router.jsx` as a lazy route using `@routes/newpage`.
  3. Add a `createRoute()` entry and, if needed, include it in navigation via `showInNav: true`.

- Linting & conventions: run `npm run lint` and follow ESLint rules. Prefer named exports for components when the file may export more than one symbol.

- What not to change without discussing: global Vite aliases in `vite.config.js`, `index.html` root id, and `src/main.jsx` bootstrap logic.

If anything here is unclear or you want examples for a specific task (adding a feature, wiring an API, or modifying build settings), tell me which area and I'll expand or provide concrete edits.
