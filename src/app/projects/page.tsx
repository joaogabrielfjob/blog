import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Inter",
    description:
      "Display upcoming and finished games of the Sport Club Internacional",
    url: "https://inter.joaojob.dev",
    imageUrl: "/projects/inter.png",
    githubUrl: "https://github.com/joaogabrielfjob/inter",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
          React
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
          Bun
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
          Elysia
        </span>
      </div>
    ),
  },
  {
    name: "MiniURL",
    description:
      "Minify your URLs the easy way",
    url: "https://miniurl.joaojob.dev",
    imageUrl: "/projects/miniurl.png",
    githubUrl: "https://github.com/joaogabrielfjob/mini-url-web",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#FF5D01] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          TypeScript
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          Tailwind
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
          Railway
        </span>
      </div>
    ),
  },
  {
    name: "NUA",
    description:
      "Easy way to upgrade all dependencies in your package.json to their latest versions",
    url: "https://www.npmjs.com/package/npm-upgrade-all",
    imageUrl: "/projects/npm.png",
    githubUrl: "https://github.com/LukeberryPi/npm-upgrade-all",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          JavaScript
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit ring-1 dark:ring-zinc-500 ring-zinc-600">
          NPM
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
          Node
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-600">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={1200}
        height={630}
        alt="Logo for css2wind website"
        className="w-full max-h-[350px] object-contain"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}