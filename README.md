# João Job

Personal website built with React, Vite, TanStack Router, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Validation and production build

```bash
npm run typecheck
npm run build
```

The production files are written to `dist/`. Cloudflare Pages should use `npm run build` as its build command and `dist` as its output directory. The generated `_redirects` file enables direct visits to client-side routes.
