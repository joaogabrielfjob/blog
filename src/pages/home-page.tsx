import { ContactLinks } from "../components/contact-links";

export function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="space-y-4">
        <p>Hi, I&apos;m a backend developer who enjoys turning ideas into reliable, well-structured software.</p>
        <p>My professional background is mainly in Java, where I&apos;ve worked with backend development, APIs, databases, and the challenges involved in building and maintaining real-world applications. More recently, I&apos;ve been expanding my focus into Go and TypeScript, exploring their ecosystems and using them to build modern, efficient web services.</p>
        <p>Outside of work, I enjoy creating personal projects that help me experiment with new technologies, improve my development workflow, and solve problems that interest me. I see these projects as a place to learn, make mistakes, test new approaches, and become a better engineer.</p>
        <p>My goal is to continue growing as a software engineer, with a strong focus on backend architecture, performance, clean code, and scalable systems. I&apos;m always curious about how things work and constantly looking for opportunities to learn, build, and improve.</p>
      </section>
      <ContactLinks />
      <div className="flex justify-center gap-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-4 max-sm:items-center">
          <a
            href="mailto:joao.gabrielfjob@gmail.com"
            className="-m-8 p-8 text-zinc-800 underline decoration-sky-500 underline-offset-4 dark:text-zinc-200 dark:decoration-sky-600"
          >
            joao.gabrielfjob@gmail.com
          </a>
        </div>
        <a
          href="/joao-job-cv.pdf"
          download="joao-job-cv.pdf"
          className="-m-8 p-8 text-zinc-800 underline decoration-sky-500 underline-offset-4 dark:text-zinc-200 dark:decoration-sky-600"
        >
          Download my CV
        </a>
      </div>
    </div>
  );
}
