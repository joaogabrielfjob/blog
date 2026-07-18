# João Job

Personal website built with React, Vite, TanStack Router, and Tailwind CSS.

## Development

```bash
bun install
bun run dev
```

## Validation and production build

```bash
bun run typecheck
bun run build
```

The production files are written to `dist/`. Cloudflare Pages preview and production environments must set `BUN_VERSION=1.3.14` and `SKIP_DEPENDENCY_INSTALL=true`, use `bun ci && bun run build` as the build command, and publish `dist`. The generated `_redirects` file enables direct visits to client-side routes.
