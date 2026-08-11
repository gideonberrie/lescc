import Link from "next/link";
import TranslateButton from "@/app/_components/translate-button";

export default function Header() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.145]">
      <div className="flex flex-wrap items-center justify-between gap-4 px-[1in] py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          LESCC
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
        </nav>

        <div className="flex items-center gap-3">
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
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Donate
          </Link>
          <TranslateButton />
        </div>
      </div>
    </header>
  );
}
