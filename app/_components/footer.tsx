import Link from "next/link";
import NewsletterSignup from "@/app/_components/newsletter-signup";

export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">Stay in the loop</p>
          <NewsletterSignup />
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/mission" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Mission
          </Link>
          <Link href="/press" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Press
          </Link>
          <Link href="#get-involved" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Get Involved
          </Link>
          <Link href="#donate" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Donate
          </Link>
        </nav>
      </div>

      <div className="border-t border-black/[.08] px-6 py-4 text-xs text-zinc-500 dark:border-white/[.145] dark:text-zinc-500">
        <p className="mx-auto max-w-5xl">
          © {new Date().getFullYear()} LESCC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
