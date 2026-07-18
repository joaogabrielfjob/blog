import { GitBranch, Globe } from "lucide-react";
import type { ReactNode } from "react";

interface Project { name: string; description: string; imageUrl: string; githubUrl: string; url: string; technologies: ReactNode; }

const chip = "rounded-full px-2.5 py-0.5 text-sm ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500";
const projects: Project[] = [
  { name: "Inter", description: "Display upcoming and finished games of the Sport Club Internacional", url: "https://inter.joaojob.dev", imageUrl: "/projects/inter.png", githubUrl: "https://github.com/joaogabrielfjob/inter", technologies: <div className="flex items-center gap-x-3"><span className={`${chip} bg-[#007ACC] text-zinc-100`}>React</span><span className={`${chip} bg-[#38BDF9] text-zinc-950`}>Bun</span><span className={`${chip} bg-black text-zinc-100`}>Elysia</span></div> },
  { name: "MiniURL", description: "Minify your URLs the easy way", url: "https://miniurl.joaojob.dev", imageUrl: "/projects/miniurl.png", githubUrl: "https://github.com/joaogabrielfjob/mini-url-web", technologies: <div className="flex items-center gap-x-3"><span className={`${chip} bg-[#FF5D01] text-zinc-100`}>TypeScript</span><span className={`${chip} bg-[#38BDF9] text-zinc-950`}>Tailwind</span><span className={`${chip} bg-black text-zinc-100`}>Railway</span></div> },
  { name: "NUA", description: "Easy way to upgrade all dependencies in your package.json to their latest versions", url: "https://www.npmjs.com/package/npm-upgrade-all", imageUrl: "/projects/npm.png", githubUrl: "https://github.com/LukeberryPi/npm-upgrade-all", technologies: <div className="flex items-center gap-x-3"><span className={`${chip} bg-[#00D8FE] text-zinc-950`}>JavaScript</span><span className={`${chip} bg-[#38BDF9] text-zinc-950`}>NPM</span><span className={`${chip} bg-black text-zinc-100`}>Node</span></div> },
  { name: "NOI", description: "IntelliJ's optimize import feature for javascript projects", url: "https://www.npmjs.com/package/npm-organize-imports", imageUrl: "/projects/npm.png", githubUrl: "https://github.com/joaogabrielfjob/npm-organize-imports", technologies: <div className="flex items-center gap-x-3"><span className={`${chip} bg-[#00D8FE] text-zinc-950`}>JavaScript</span><span className={`${chip} bg-[#38BDF9] text-zinc-950`}>NPM</span><span className={`${chip} bg-black text-zinc-100`}>Glob</span></div> },
];

function ProjectCard({ name, description, imageUrl, githubUrl, url, technologies }: Project) {
  return <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-600 dark:divide-zinc-500 dark:ring-zinc-500"><div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col"><h2 className="text-xl">{name}</h2>{technologies}</div><p className="p-4">{description}</p><img src={imageUrl} width="1200" height="630" alt={`Preview of ${name}`} className="max-h-[350px] w-full object-contain" /><div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500"><a href={url} target="_blank" rel="noreferrer" className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"><Globe strokeWidth={1.4} className="size-5" /> Visit website</a><a href={githubUrl} target="_blank" rel="noreferrer" className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"><GitBranch strokeWidth={1.4} className="size-5" /> View code</a></div></div>;
}

export function ProjectsPage() {
  return <><h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">Projects</h1><div className="space-y-20">{projects.map((project) => <ProjectCard key={project.url} {...project} />)}</div></>;
}
