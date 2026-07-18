# João Job

Personal website built with React, Vite, TanStack Router, and Tailwind CSS.

## Development

```bash
bun install
bun run dev
```

## Production build

```bash
bun run build
```

The production files are written to `dist/`. Cloudflare Pages preview and production environments use `bun ci && bun run build` as the build command and publish `dist`. The generated `_redirects` file enables direct visits to client-side routes.
