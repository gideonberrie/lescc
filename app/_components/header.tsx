import Image from "next/image";
import Link from "next/link";
import TranslateButton from "@/app/_components/translate-button";

export default function Header() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.145]">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-[0.5in] py-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-[#068e4a]"
          >
            Lower East Side Cultural Center
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/mission"
              className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Mission
            </Link>
            <Link
              href="/press"
              className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Press
            </Link>
            <Link
              href="/resources"
              className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Resources
            </Link>
          </nav>
        </div>

        <Link href="/" className="relative h-14 w-36 justify-self-center">
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
          <Link
            href="https://www.instagram.com/thefreestoreproject/"
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
            href="#get-involved"
            className="rounded-full border border-black/[.08] px-4 py-2 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
          >
            Get Involved
          </Link>
          <Link
            href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-20802"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#068e4a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#057a3f]"
          >
            Donate
          </Link>
          <TranslateButton />
        </div>
      </div>
    </header>
  );
}
