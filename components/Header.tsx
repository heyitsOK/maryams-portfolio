'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Articles", href: "#articles" },
  { label: "Content", href: "#content" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-ink/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-ink"
        >
          Maryam Khan
        </a>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.15em] text-ink/50 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand px-4 py-2 text-white transition-colors hover:bg-brand/90"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="p-2 text-ink sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 px-6 pb-5 sm:hidden">
          <nav className="flex flex-col gap-4 pt-4 text-sm uppercase tracking-[0.15em] text-ink/70">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit rounded-full bg-brand px-4 py-2 text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
