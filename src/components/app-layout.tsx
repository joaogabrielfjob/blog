import { Outlet } from "@tanstack/react-router";
import { Header } from "./header";
import { ScrollToTop } from "./scroll-to-top";

export function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-prose pb-4">
        <Outlet />
        <ScrollToTop />
      </main>
      <footer className="mx-auto flex max-w-prose flex-col items-center gap-2 py-6 text-sm text-zinc-500 max-sm:items-start dark:text-zinc-400">
        <div className="flex items-center gap-4">
          <a className="decoration-zinc-500 underline-offset-4 transition-transform sm:hover:underline dark:decoration-zinc-400" href="https://github.com/joaogabrielfjob/blog" target="_blank" rel="noreferrer">Code</a>
          <a className="decoration-zinc-500 underline-offset-4 transition-transform sm:hover:underline dark:decoration-zinc-400" href="https://x.com/joaogabrielfjob" target="_blank" rel="noreferrer">@joaogabrielfjob</a>
        </div>
        <blockquote className="text-zinc-800 dark:text-zinc-300">Smile, you&apos;re alive :)</blockquote>
      </footer>
    </>
  );
}
