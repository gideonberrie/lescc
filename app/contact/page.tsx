import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch | LESCC",
  description: "Contact the Lower East Side Cultural Center.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-xl px-[0.5in] py-20">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        Get in Touch
      </h1>

      <dl className="mt-10 flex flex-col divide-y divide-black/[.08] dark:divide-white/[.145]">
        <div className="flex flex-col gap-1 py-6">
          <dt className="text-sm font-semibold tracking-wide text-[#068e4a] uppercase">
            Email
          </dt>
          <dd>
            <a
              href="mailto:thefreestoreproject@gmail.com"
              className="text-lg text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              thefreestoreproject@gmail.com
            </a>
          </dd>
        </div>

        <div className="flex flex-col gap-1 py-6">
          <dt className="text-sm font-semibold tracking-wide text-[#068e4a] uppercase">
            Instagram
          </dt>
          <dd>
            <a
              href="https://www.instagram.com/lesculturalcenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              @lesculturalcenter
            </a>
          </dd>
        </div>

        <div className="flex flex-col gap-1 py-6">
          <dt className="text-sm font-semibold tracking-wide text-[#068e4a] uppercase">
            Phone
          </dt>
          <dd>
            <a
              href="tel:+13477388298"
              className="text-lg text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              347.738.8298
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
