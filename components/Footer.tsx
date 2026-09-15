export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-ink/40 sm:flex-row">
        <span className="font-display text-sm text-ink">Maryam Khan</span>
        <span>© {new Date().getFullYear()} · Journalism & digital storytelling</span>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
