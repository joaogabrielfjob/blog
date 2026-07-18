import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

function XLogo() {
  return <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1"><path className="fill-zinc-950 dark:fill-zinc-200" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}

interface ExternalLinkInfo { name: string; description: string; url: string; icon: ReactNode; }

const externalLinks: ExternalLinkInfo[] = [
  { name: "LinkedIn", description: "follow my career", url: "https://www.linkedin.com/in/joaogabrielfjob/", icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" /> },
  { name: "GitHub", description: "steal my code", url: "https://github.com/joaogabrielfjob", icon: <SiGithub /> },
  { name: "X (formerly Twitter)", description: "read my mind", url: "https://x.com/joaogabrielfjob", icon: <XLogo /> },
];

export function ContactLinks() {
  return <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">{externalLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between p-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"><span className="flex items-center gap-4">{link.icon} {link.name}<span className="text-zinc-500 opacity-0 transition-transform max-sm:hidden sm:group-hover:opacity-100 dark:text-zinc-400">{link.description}</span></span><ArrowUpRight strokeWidth={1.4} className="size-5 shrink-0 text-zinc-800 transition-transform sm:group-hover:rotate-45 dark:text-zinc-200" /></a>)}</div>;
}
