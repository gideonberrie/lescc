"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV_LINK_CLASS =
  "text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50";

function NavLinks({
  onLogoClick,
}: {
  onLogoClick: (e: React.MouseEvent) => void;
}) {
  return (
    <>
      <Link
        href="/"
        onClick={onLogoClick}
        className="text-lg font-black tracking-tight text-[#068e4a]"
      >
        Lower East Side Cultural Center
      </Link>

      <nav className="flex items-center gap-6 text-sm font-bold">
        <Link href="/#the-building" className={NAV_LINK_CLASS}>
          About
        </Link>
        <Link href="/#who-we-are" className={NAV_LINK_CLASS}>
          Who We Are
        </Link>
        <Link href="/press" className={NAV_LINK_CLASS}>
          Press
        </Link>
      </nav>
    </>
  );
}

function ActionLinks() {
  return (
    <>
      <Link
        href="https://www.instagram.com/lesculturalcenter/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-black/[.04] hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[.06] dark:hover:text-zinc-50"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      </Link>
      <Link
        href="/#get-involved"
        className="rounded-full border border-black/[.08] px-4 py-2 text-sm font-bold transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
      >
        Get in touch
      </Link>
      <a
        href="/documents/full-proposal.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-foreground px-4 py-2 text-sm font-bold text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Read our proposal
      </a>
      <Link
        href="https://givebutter.com/LESculturalcenter"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#068e4a] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#057a3f]"
      >
        Donate
      </Link>
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleLogoClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      document
        .getElementById("home-scroll")
        ?.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  }

  return (
    <header className="border-b border-black/[.08] dark:border-white/[.145]">
      {/* Desktop / tablet: single row */}
      <div className="mx-auto hidden max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-[0.5in] py-4 sm:grid">
        <div className="flex items-center gap-6">
          <NavLinks onLogoClick={handleLogoClick} />
        </div>

        <Link
          href="/"
          onClick={handleLogoClick}
          className="relative h-14 w-36 justify-self-center"
        >
          <Image
            src="/logo.png"
            alt="LESCC logo"
            fill
            sizes="144px"
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center justify-self-end gap-3">
          <ActionLinks />
        </div>
      </div>

      {/* Mobile: compact bar + toggleable menu */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="relative h-10 w-28 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="LESCC logo"
              fill
              sizes="112px"
              className="object-contain"
              priority
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-black/[.04] dark:text-zinc-400 dark:hover:bg-white/[.06]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="flex flex-col items-center gap-4 border-t border-black/[.08] px-4 py-4 dark:border-white/[.145]">
            <NavLinks onLogoClick={handleLogoClick} />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ActionLinks />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
