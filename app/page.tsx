import Image from "next/image";
import EndorsedBySlider from "@/app/_components/endorsed-by-slider";
import EndorsedByGrid from "@/app/_components/endorsed-by-grid";
import HoverPlayVideo from "@/app/_components/hover-play-video";
import { SoundProvider } from "@/app/_components/sound-context";
import SoundToggleButton from "@/app/_components/sound-toggle-button";
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

type Person = { name: string; role: string };

const LEAD_GROUPS: { title: string; people: Person[] }[] = [
  {
    title: "Advisory Council",
    people: [
      { name: "Yuh-Line Niou", role: "Former NYS Assemblymember" },
      { name: "Claudia Gold", role: "ClawMoney" },
    ],
  },
  {
    title: "Team",
    people: [
      { name: "Myles Smutney", role: "Artist & Community Organizer" },
      {
        name: "Gideon Berrie",
        role: "Urban Planning and Outreach Coordinator",
      },
    ],
  },
];

const ADVISOR_GROUPS: { category: string; people: Person[] }[] = [
  {
    category: "Civic Life + Development",
    people: [
      {
        name: "David Garza",
        role: "President and CEO of the Henry Street Settlement",
      },
      {
        name: "Illapa Sairitupac",
        role: "Democratic Nominee for NYS Assembly District 65",
      },
      { name: "Kathryn Lloyd", role: "Tenement Museum VP of Programs" },
      { name: "Jenny Dembrow", role: "The Lower Eastside Girls Club" },
      {
        name: "Tom Lagatta",
        role: "Democratic Party County Committee Member, AD 65, ED 009",
      },
    ],
  },
  {
    category: "Arts + Culture",
    people: [{ name: "Erik Foss", role: "Artist" }],
  },
  {
    category: "Design + Public Space",
    people: [
      {
        name: "Paul A Castrucci",
        role: "Founder and Principal, Paul A. Castrucci Architects",
      },
      { name: "Juan Barahona", role: "Principal, SMJ Development" },
      { name: "Isabelle Groenewegen", role: "Urbanist" },
      {
        name: "Lucy Tuchman",
        role: "Senior Policy Analyst, Public Works LLC",
      },
    ],
  },
  {
    category: "Economy + Local Opportunity",
    people: [
      { name: "Coss Marte", role: "Founder of CONBODY" },
      { name: "Michael Bray", role: "Founder of Bar Valentina" },
    ],
  },
];

function PersonItem({ person }: { person: Person }) {
  return (
    <li>
      <p className="font-bold text-zinc-800 dark:text-zinc-200">
        {person.name}
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-500">{person.role}</p>
    </li>
  );
}

const DONATE_URL = "https://givebutter.com/LESculturalcenter";

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
    <div
      id="home-scroll"
      className="min-w-0 flex-1 overflow-y-auto overscroll-y-contain scroll-smooth"
    >
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
            A new home for culture, preservation
            <br />
            and coffee!
          </h1>
          <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-400">
            Our mission is to preserve the Lower East Side&rsquo;s cultural
            heritage through year-round programming that supports local
            artists, families, youth, and community elders, while also
            providing public access to essential services and concessions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/documents/full-proposal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-6 py-2.5 text-sm font-bold text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              See our plan
            </a>
            <a
              href="#get-involved"
              className="rounded-full border border-black/[.08] px-6 py-2.5 text-sm font-bold transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-2 w-full">
            <EndorsedBySlider />
          </div>
        </div>
      </section>

      <SoundProvider>
        <section className="relative grid min-h-screen w-full grid-cols-2 sm:grid-cols-4">
          <SoundToggleButton />
          {VIDEOS.map((video) => (
            <HoverPlayVideo
              key={video.src}
              src={video.src}
              poster={video.poster}
              label={video.label}
            />
          ))}
        </section>
      </SoundProvider>

      <section
        id="the-building"
        className="flex min-h-screen flex-col justify-center gap-6 overflow-x-hidden px-[0.5in] py-10"
      >
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-x-[0.5in]">
          <p className="order-2 text-lg text-zinc-600 sm:order-1 sm:text-xl dark:text-zinc-400">
            Built in the 1930s the public restroom at Allen Street and
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
            We propose reactivating the building into a multidisciplinary
            cultural hub
          </strong>{" "}
          — offering low-cost arts education, community storytelling,
          performances, and heritage programming alongside a café and public
          restroom. The project will include artist residencies, a youth
          workforce program with Emma Lazarus High School, and free and
          low-cost programming for the neighborhood it serves.
        </p>

        <div className="mx-auto flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/documents/full-proposal.pdf"
            download="LESCC-Allen-Street-Proposal.pdf"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Read the full proposal here
          </a>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#068e4a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#057a3f]"
          >
            Support our mission
          </a>
        </div>
      </section>

      <section className="flex min-h-screen flex-col overflow-x-hidden bg-[#068e4a] text-zinc-50 sm:flex-row">
        <ArcgisEmbeddedMap className="h-[50vh] w-full sm:h-auto sm:w-1/2" />
        <div className="flex w-full flex-col items-center justify-center gap-8 px-[0.5in] py-10 sm:w-1/2">
          <EndorsedByGrid />
          <div className="flex gap-4">
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#068e4a] transition-colors hover:bg-zinc-100"
            >
              Donate
            </a>
            <a
              href="#get-involved"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section
        id="who-we-are"
        className="flex min-h-screen flex-col justify-center gap-10 overflow-x-hidden px-[0.5in] py-10 text-center"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <p className={EYEBROW_CLASS}>LESCC &bull; Built by a Community</p>
          <p className="text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
            <strong className="font-bold">
              The Lower East Side Cultural Center is being shaped by artists,
              neighbors, organizers, educators, designers, small-business
              owners, and civic leaders
            </strong>{" "}
            who believe this long-abandoned public space can become something
            extraordinary.
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-500">
            Meet the people helping us imagine what comes next.
          </p>
        </div>

        <dl className="mx-auto grid w-full max-w-xl grid-cols-1 gap-10 sm:grid-cols-2">
          {LEAD_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <dt className={EYEBROW_CLASS}>{group.title}</dt>
              <dd>
                <ul className="flex flex-col gap-3">
                  {group.people.map((person) => (
                    <PersonItem key={person.name} person={person} />
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto w-full max-w-5xl">
          <p className={EYEBROW_CLASS}>Community Advisors</p>
          <dl className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {ADVISOR_GROUPS.map((group) => (
              <div key={group.category} className="flex flex-col gap-4">
                <dt className="text-xs font-black tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                  {group.category}
                </dt>
                <dd>
                  <ul className="flex flex-col gap-3">
                    {group.people.map((person) => (
                      <PersonItem key={person.name} person={person} />
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
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
                href="mailto:lowereastsideculturalcenter@gmail.com"
                className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                lowereastsideculturalcenter@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={EYEBROW_CLASS}>Instagram</dt>
            <dd>
              <a
                href="https://www.instagram.com/lesculturalcenter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                @lesculturalcenter
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
