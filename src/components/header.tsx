import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function isThemeSetToDark() {
  return document.documentElement.classList.contains("dark");
}

export function Header() {
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
        <div className="-m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 max-sm:text-center">
          <div className="flex flex-col max-sm:items-center">João Job<span className="text-zinc-500 dark:text-zinc-400">Software Engineer</span></div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="group relative flex cursor-pointer items-center" aria-label="Toggle theme">
            {isDarkMode ? <Moon strokeWidth={1.4} className="size-5 fill-gray-700 transition-transform" /> : <Sun strokeWidth={1.4} className="size-5 fill-yellow-300 transition-transform sm:hover:rotate-45" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
