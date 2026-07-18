import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronLeft, Moon, Sun, Triangle } from "lucide-react";
import { useEffect, useState } from "react";

function isThemeSetToDark() {
  return document.documentElement.classList.contains("dark");
}

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isHome = pathname === "/";
  const [isDarkMode, setIsDarkMode] = useState(isThemeSetToDark);

  useEffect(() => {
    setIsDarkMode(isThemeSetToDark());
  }, []);

  function toggleTheme() {
    const nextTheme = !isDarkMode;
    localStorage.theme = nextTheme ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextTheme);
    setIsDarkMode(nextTheme);
  }

  return (
    <header className="mx-auto max-w-prose py-8 max-sm:pt-4">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        <Link className={`group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 ${isHome ? "ring-0" : "ring-1"} ring-sky-500 ring-opacity-0 transition-transform max-sm:text-center sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0`} to="/" aria-label="Back to home">
          <div className={`${isHome ? "hidden" : "absolute"} left-1 flex size-4 h-full w-12 items-center px-2`}><ChevronLeft strokeWidth={1.4} /></div>
          <div className="flex flex-col max-sm:items-center">João Job<span className="text-zinc-500 dark:text-zinc-400">Software Engineer</span></div>
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="group relative flex items-center" aria-label="Toggle theme">
            {isDarkMode ? <Moon strokeWidth={1.4} className="size-5 fill-gray-700 transition-transform" /> : <Sun strokeWidth={1.4} className="size-5 fill-yellow-300 transition-transform sm:hover:rotate-45" />}
          </button>
          <NavigationLink to="/projects" label="/projects" active={pathname === "/projects"} />
          <NavigationLink to="/about" label="/about" active={pathname === "/about"} />
        </div>
      </nav>
    </header>
  );
}

function NavigationLink({ to, label, active }: { to: "/projects" | "/about"; label: string; active: boolean }) {
  return (
    <Link className="group relative rounded px-2 py-px transition-transform sm:hover:ring-1 sm:ring-sky-500 dark:ring-sky-600 dark:ring-opacity-0" to={to} aria-label={`View ${label.slice(1)} page`} aria-current={active ? "page" : undefined}>
      {label}
      <Triangle aria-hidden="true" className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent" />
    </Link>
  );
}
