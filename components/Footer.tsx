export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--strip)] px-6 py-10 text-[var(--card-fg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-[var(--card-fg)]/50 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">Madison Armstrong &copy; 2026</p>
        <div className="flex gap-6">
          <a href="mailto:mearmstrong2006@gmail.com" className="label hover:text-red-bright transition-colors">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/madison-armstrongsf"
            target="_blank"
            rel="noopener noreferrer"
            className="label hover:text-red-bright transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
