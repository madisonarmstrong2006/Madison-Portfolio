export default function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-paper">
      <div className="px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-grey sm:flex-row sm:items-center sm:justify-between">
        <p className="label">&copy; 2026 Madison Armstrong</p>
        <div className="flex gap-8">
          <a href="mailto:mearmstrong2006@gmail.com" className="label ulink">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/madison-armstrongsf"
            target="_blank"
            rel="noopener noreferrer"
            className="label ulink"
          >
            LinkedIn
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
