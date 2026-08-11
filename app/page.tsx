import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-[1in] py-24 text-center">
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#068e4a] sm:text-5xl">
        [Placeholder headline about LESCC]
      </h1>
      <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        [Placeholder intro paragraph — a couple of sentences introducing who
        we are and what we do.]
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/mission"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Read our mission
        </Link>
        <Link
          href="/press"
          className="rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
        >
          Latest press
        </Link>
      </div>
    </div>
  );
}
