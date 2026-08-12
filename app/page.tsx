import Image from "next/image";
import Link from "next/link";

const GALLERY: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}[] = [
  {
    src: "/renderings/before-corner.jpg",
    alt: "The building today, vacant and fenced off at the corner of Allen and Delancey Streets",
  },
  {
    src: "/renderings/exterior-day.jpg",
    alt: "Rendering of the same corner with the completed Lower East Side Cultural Center",
  },
  {
    src: "/renderings/before-detail.jpg",
    alt: "A closer look through the chain-link fence at the boarded, graffiti-covered storefront",
  },
  {
    src: "/renderings/entrance-day.jpg",
    alt: "Rendering of the restored Allen Street entrance, with new steps and railings",
  },
  {
    src: "/renderings/exterior-dusk.jpg",
    alt: "Rendering of the facade at dusk, with exhibition space glowing behind the arched windows",
  },
  {
    src: "/renderings/interior-lobby.jpg",
    alt: "Rendering of the interior lobby and reading lounge, with Classroom A visible",
  },
  {
    src: "/renderings/floor-plans.jpg",
    alt: "Conceptual floor plans for the main floor and basement",
    fit: "contain",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Image
          src="/renderings/interior-lobby.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-15"
        />
        <div className="relative flex flex-col items-center px-[0.5in] py-24 text-center">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#068e4a] sm:text-5xl">
            A new home for culture, community, and continuity in NYC
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Our mission is to preserve the Lower East Side’s cultural
            heritage through year-round programming that supports local
            artists, families, youth, and community elders, while also
            providing public access to essential services and concessions.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#the-building"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              See the building
            </Link>
            <Link
              href="/press"
              className="rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              Latest press
            </Link>
          </div>
        </div>
      </div>

      <div id="the-building" className="flex flex-col gap-8 px-[0.5in] pb-24">
        {GALLERY.map((item) => (
          <div
            key={item.src}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 640px) 90vw, 100vw"
              className={
                item.fit === "contain" ? "object-contain" : "object-cover"
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}
