import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | LESCC",
  description: "Press releases from LESCC.",
};

const PLACEHOLDER_RELEASES = [
  {
    date: "[Date]",
    title: "[Placeholder press release title 1]",
    summary: "[Placeholder one-line summary of the release.]",
  },
  {
    date: "[Date]",
    title: "[Placeholder press release title 2]",
    summary: "[Placeholder one-line summary of the release.]",
  },
  {
    date: "[Date]",
    title: "[Placeholder press release title 3]",
    summary: "[Placeholder one-line summary of the release.]",
  },
];

export default function PressPage() {
  return (
    <div className="w-full max-w-3xl px-[0.5in] py-20">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        LESCC in the News
      </h1>
      <ul className="mt-10 flex flex-col divide-y divide-black/[.08] dark:divide-white/[.145]">
        {PLACEHOLDER_RELEASES.map((release) => (
          <li key={release.title} className="flex flex-col gap-1 py-6">
            <span className="text-sm text-zinc-500 dark:text-zinc-500">
              {release.date}
            </span>
            <span className="text-xl font-black">{release.title}</span>
            <span className="text-zinc-600 dark:text-zinc-400">
              {release.summary}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
