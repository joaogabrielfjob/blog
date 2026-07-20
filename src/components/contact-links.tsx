const externalLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/joaogabrielfjob/" },
  { name: "GitHub", url: "https://github.com/joaogabrielfjob" },
];

export function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {externalLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-800 underline decoration-sky-500 underline-offset-4 dark:text-zinc-200 dark:decoration-sky-600"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
