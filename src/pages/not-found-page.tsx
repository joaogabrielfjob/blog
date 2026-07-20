import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-5xl max-sm:text-4xl">Page not found</h1>
      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        The page you requested does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
      >
        Back to home
      </Link>
    </section>
  );
}
