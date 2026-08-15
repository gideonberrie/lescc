import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import EndorsedBySlider from "@/app/_components/endorsed-by-slider";
import HoverPlayVideo from "@/app/_components/hover-play-video";
import ArcgisEmbeddedMap from "@/app/_components/arcgis-embedded-map";
import NewsletterSignup from "@/app/_components/newsletter-signup";

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

const FIRST_PAIRS = PAIRS.slice(0, 2);
const SECOND_PAIRS = PAIRS.slice(2);

const VIDEOS: { src: string; poster: string; label: string }[] = [
  { src: "/videos/vid2.mp4", poster: "/videos/vid2-poster.jpg", label: "video 1" },
  { src: "/videos/vid4.mp4", poster: "/videos/vid4-poster.jpg", label: "video 2" },
  { src: "/videos/Vid1.mp4", poster: "/videos/Vid1-poster.jpg", label: "video 3" },
  { src: "/videos/vid3.mp4", poster: "/videos/vid3-poster.jpg", label: "video 4" },
];

const EYEBROW_CLASS =
  "text-xs font-black tracking-wide text-[#068e4a] uppercase";

const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-20802";

function BeforeAfterImage({
  item,
  label,
}: {
  item: { src: string; alt: string };
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className={EYEBROW_CLASS}>{label}</p>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 640px) 20vw, 45vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-w-0 flex-1 overflow-y-auto scroll-smooth">
      <Script
        src="https://js.arcgis.com/5.1/embeddable-components/"
        type="module"
        strategy="afterInteractive"
      />

      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-[0.5in] py-4 text-center">
        <Image
          src="/renderings/interior-lobby.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-15"
        />
        <div className="relative flex w-full min-w-0 flex-col items-center gap-3">
          <h1 className="max-w-2xl text-3xl font-black tracking-tight text-[#068e4a] sm:text-4xl">
            A new home for culture, community, and continuity in NYC
          </h1>
          <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-400">
            Our mission is to preserve the Lower East Side&rsquo;s cultural
            heritage through year-round programming that supports local
            artists, families, youth, and community elders, while also
            providing public access to essential services and concessions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#the-building"
              className="rounded-full bg-foreground px-6 py-2.5 text-sm font-bold text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              See the building
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-black/[.08] px-6 py-2.5 text-sm font-bold transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              Get in touch
            </Link>
          </div>
          <div className="mt-2 w-full">
            <EndorsedBySlider />
          </div>
        </div>
      </section>

      <section className="grid min-h-screen w-full grid-cols-2 sm:grid-cols-4">
        {VIDEOS.map((video) => (
          <HoverPlayVideo
            key={video.src}
            src={video.src}
            poster={video.poster}
            label={video.label}
          />
        ))}
      </section>

      <section
        id="the-building"
        className="flex min-h-screen flex-col justify-center gap-6 overflow-x-hidden px-[0.5in] py-10"
      >
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-x-[0.5in]">
          <p className="order-2 text-lg text-zinc-600 sm:order-1 sm:text-xl dark:text-zinc-400">
            Built in the 1930s the comfort station at Allen Street and
            Delancey Street remained open to the public until the 1950s.{" "}
            <strong className="font-bold">
              Since then the building has sat vacant and boarded up. Now
              Parks has opened the door for new development, with the aim of
              making it a concession stand.
            </strong>
          </p>
          <div className="order-1 grid w-full grid-cols-2 gap-2 sm:order-2">
            <BeforeAfterImage item={FIRST_PAIRS[0]} label="Before" />
            <BeforeAfterImage item={FIRST_PAIRS[1]} label="After" />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-x-[0.5in]">
          <div className="grid w-full grid-cols-2 gap-2">
            <BeforeAfterImage item={SECOND_PAIRS[0]} label="Before" />
            <BeforeAfterImage item={SECOND_PAIRS[1]} label="After" />
          </div>
          <p className="text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
            The Lower East Side is experiencing its first sustained decline
            in its artist population in decades and has the highest rate of
            economic inequality in the city.{" "}
            <strong className="font-bold">
              Rising rents and ongoing gentrification have left long-term,
              lower-income, and immigrant residents with fewer places to
              gather, and small arts organizations with fewer places to
              work.
            </strong>
          </p>
        </div>

        <p className="mx-auto w-full text-center text-lg text-zinc-600 sm:px-[1in] sm:text-xl dark:text-zinc-400">
          <strong className="font-bold">
            We propose to renovate the building into a multidisciplinary
            cultural hub
          </strong>{" "}
          — offering low-cost arts education, community storytelling,
          performances, and heritage programming alongside a café and public
          restroom. The project will include artist residencies, a youth
          workforce program with Emma Lazarus High School, and free and
          low-cost programming for the neighborhood it serves.
        </p>

        <a
          href="/documents/full-proposal.pdf"
          download="LESCC-Allen-Street-Proposal.pdf"
          className="mx-auto rounded-full bg-[#068e4a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#057a3f]"
        >
          Read the full proposal here
        </a>
      </section>

      <section className="flex min-h-screen items-center overflow-x-hidden bg-[#068e4a] px-[0.5in] py-6 text-zinc-50">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 sm:flex-row sm:justify-center">
          <ArcgisEmbeddedMap
            height="clamp(220px, 40vh, 380px)"
            width="clamp(220px, 70vw, 420px)"
            className="max-w-full shrink-0 overflow-hidden rounded-lg"
          />
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <p className="max-w-sm text-lg">
              [Placeholder text about the building&rsquo;s location, the
              surrounding neighborhood, and why this corner of the Lower
              East Side matters.]
            </p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#068e4a] transition-colors hover:bg-zinc-100"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      <section
        id="get-involved"
        className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-x-hidden bg-white px-[0.5in] py-6 text-center dark:bg-zinc-950"
      >
        <div className="flex flex-col items-center gap-4">
          <p className={EYEBROW_CLASS}>Get Involved</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#068e4a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#057a3f]"
            >
              Donate
            </a>
            <NewsletterSignup />
          </div>
        </div>

        <dl className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <div className="flex flex-col gap-1">
            <dt className={EYEBROW_CLASS}>Email</dt>
            <dd>
              <a
                href="mailto:thefreestoreproject@gmail.com"
                className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                thefreestoreproject@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={EYEBROW_CLASS}>Instagram</dt>
            <dd>
              <a
                href="https://www.instagram.com/thefreestoreproject/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                @thefreestoreproject
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={EYEBROW_CLASS}>Phone</dt>
            <dd>
              <a
                href="tel:+13477388298"
                className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                347.738.8298
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
