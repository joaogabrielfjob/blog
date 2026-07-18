import { ContactLinks } from "../components/contact-links";

export function AboutPage() {
  return <section className="flex flex-col gap-8"><div className="space-y-4"><h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">About</h1><p>I&apos;m João Job, a software engineer who enjoys building thoughtful, practical software and sharing what I learn along the way.</p><p>I&apos;m currently focused on creating reliable web experiences and exploring the tools that make software development more enjoyable.</p><p>I&apos;m open to connecting about engineering, collaboration, and interesting projects.</p><a href="mailto:joao.gabrielfjob@gmail.com" className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600">joao.gabrielfjob@gmail.com</a></div><ContactLinks /></section>;
}
