import Link from "next/link";
import GalleryItem from "@/app/_components/gallery-item";

const GALLERY: {
  src: string;
  alt: string;
  eyebrow: string;
  caption: string;
  fit?: "cover" | "contain";
}[] = [
  {
    src: "/renderings/before-corner.jpg",
    alt: "The building today, vacant and fenced off at the corner of Allen and Delancey Streets",
    eyebrow: "Before",
    caption:
      "The building today: vacant and fenced off at the corner of Allen and Delancey Streets.",
  },
  {
    src: "/renderings/exterior-day.jpg",
    alt: "Rendering of the same corner with the completed Lower East Side Cultural Center",
    eyebrow: "After",
    caption:
      "The same corner, reimagined — the completed Lower East Side Cultural Center.",
  },
  {
    src: "/renderings/before-detail.jpg",
    alt: "A closer look through the chain-link fence at the boarded, graffiti-covered storefront",
    eyebrow: "Before",
    caption: "A closer look at the boarded storefront awaiting restoration.",
  },
  {
    src: "/renderings/entrance-day.jpg",
    alt: "Rendering of the restored Allen Street entrance, with new steps and railings",
    eyebrow: "After",
    caption:
      "The Allen Street entrance, rendered — new steps, railings, and restored brickwork.",
  },
  {
    src: "/renderings/exterior-dusk.jpg",
    alt: "Rendering of the facade at dusk, with exhibition space glowing behind the arched windows",
    eyebrow: "After",
    caption:
      "The facade at dusk, with exhibition space glowing behind the arched windows.",
  },
  {
    src: "/renderings/interior-lobby.jpg",
    alt: "Rendering of the interior lobby and reading lounge, with Classroom A visible",
    eyebrow: "After",
    caption: "Inside: a welcoming lobby and reading lounge for the community.",
  },
  {
    src: "/renderings/floor-plans.jpg",
    alt: "Conceptual floor plans for the main floor and basement",
    eyebrow: "The Plan",
    caption:
      "Conceptual floor plans for the main floor and basement — classrooms, artist studios, an exhibition hall, and community space.",
    fit: "contain",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center px-[0.5in] py-24 text-center">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#068e4a] sm:text-5xl">
          A new home for culture, community, and continuity in NYC
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Our mission is to preserve the Lower East Side’s cultural heritage
          through year-round programming that supports local artists,
          families, youth, and community elders, while also providing public
          access to essential services and concessions.
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

      <div id="the-building" className="px-[0.5in] pb-24">
        {GALLERY.map((item, i) => (
          <GalleryItem key={item.src} reverse={i % 2 === 1} {...item} />
        ))}
      </div>
    </>
  );
}
