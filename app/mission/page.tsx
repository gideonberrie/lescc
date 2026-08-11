import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | LESCC",
  description: "The mission statement of LESCC.",
};

export default function MissionPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Our Mission
      </h1>
      <div className="mt-8 flex flex-col gap-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        <p>
          [Placeholder — mission statement paragraph 1. What we believe, and
          why we exist.]
        </p>
        <p>
          [Placeholder — mission statement paragraph 2. What we do to act on
          that belief.]
        </p>
        <p>
          [Placeholder — mission statement paragraph 3. Who we serve and the
          outcome we&apos;re working toward.]
        </p>
      </div>
    </div>
  );
}
