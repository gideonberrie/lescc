import Image from "next/image";
import Link from "next/link";

const PAIRS: { src: string; alt: string }[] = [
  {
    src: "/renderings/before-corner.jpg",
    alt: "The building today, vacant and fenced off at the corner of Allen and Delancey Streets",
  },
  {
    src: "/renderings/exterior-day.jpg",
    alt: "Rendering of the same corner with the completed Lower East Side Cultural Center",
  },
  {
    src: "/renderings/entrance-before.jpg",
    alt: "The building's entrance today, seen through the chain-link fence",
  },
  {
    src: "/renderings/entrance-dusk.jpg",
    alt: "Rendering of the entrance facade at dusk, glowing from inside",
  },
];

const BLUEPRINTS: { src: string; alt: string }[] = [
  {
    src: "/renderings/floor-plans.jpg",
    alt: "Conceptual floor plans for the main floor and basement",
  },
];

const HEADING_CLASS =
  "text-sm font-semibold tracking-wide text-[#068e4a] uppercase";

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

      <div id="the-building" className="flex flex-col gap-8 px-[0.5in] pt-8 pb-24">
        <div className="mx-auto w-full sm:w-1/2">
          <div className="grid grid-cols-1 gap-8 pb-2 sm:grid-cols-2">
            <p className={HEADING_CLASS}>Before</p>
            <p className={HEADING_CLASS}>After</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {PAIRS.map((item) => (
              <div
                key={item.src}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 23vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${HEADING_CLASS} text-center`}>Context</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Built in the 1930s, the comfort station at Allen Street and
            Delancey Street remained open to the public until the 1950s,
            when it was closed.{" "}
            <strong className="font-semibold">
              For more than seventy years the building has sat vacant and
              boarded up. Now Parks has opened the door for new
              development, with the aim of making it a concession stand.
            </strong>{" "}
            The Lower East Side Cultural Center,{" "}
            <strong className="font-semibold">
              in partnership with Porto Rico Importing Co.
            </strong>
            , would bring high-quality concessions while serving the
            neighborhood and enhancing its cultural footprint.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            The Lower East Side is experiencing its first sustained decline
            in its artist population in decades and has the highest rate of
            economic inequality in the city.{" "}
            <strong className="font-semibold">
              Rising rents and ongoing gentrification have left long-term,
              lower-income, and immigrant residents with fewer places to
              gather, and small arts organizations with fewer places to
              work.
            </strong>{" "}
            Residents consistently point to the same needs: affordable
            cultural programming, intergenerational gathering space, free
            or low-cost arts education, and accessible venues for
            neighborhood traditions.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            <strong className="font-semibold">
              We propose to renovate the building into a multidisciplinary
              cultural hub
            </strong>{" "}
            — offering low-cost arts education, community storytelling,
            performances, and heritage programming alongside a café and
            public restroom. The project is backed by community partners
            including Henry Street Settlement, University Settlement, and
            the Tenement Museum, and will include artist residencies, a
            youth workforce program with Emma Lazarus High School, and free
            and low-cost programming for the neighborhood it serves.
          </p>
        </div>

        <Link
          href="/contact"
          className="text-center text-lg font-semibold text-[#068e4a] transition-colors hover:text-[#057a3f]"
        >
          Get in touch!
        </Link>

        <div className="mx-auto w-full sm:w-1/2">
          <h2 className={`${HEADING_CLASS} pb-2 text-center`}>Floor Plans</h2>
          {BLUEPRINTS.map((item) => (
            <div
              key={item.src}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 45vw, 100vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Read more here!
          </p>
          <a
            href="/documents/full-proposal.pdf"
            download="LESCC-Allen-Street-Proposal.pdf"
            className="rounded-full bg-[#068e4a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#057a3f]"
          >
            Download the full proposal
          </a>
        </div>
      </div>
    </>
  );
}
