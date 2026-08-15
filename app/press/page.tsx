import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | LESCC",
  description: "Press releases from LESCC.",
};

export default function PressPage() {
  return (
    <div className="w-full max-w-3xl px-[0.5in] py-20">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        LESCC in the News
      </h1>
      <p className="mt-10 text-zinc-600 dark:text-zinc-400">
        No press releases yet — check back soon.
      </p>
    </div>
  );
}
