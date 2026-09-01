import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | LESCC",
  description: "Press releases from LESCC.",
};

export default function PressPage() {
  return (
    <div className="w-full max-w-3xl px-[0.5in] py-20">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        Share our story!
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        Lets start a conversation on who gets to shape public space in New
        York City
      </p>
    </div>
  );
}
