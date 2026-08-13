import Image from "next/image";

const LOGOS: { src: string; alt: string }[] = [
  { src: "/logos/HSS-Logo_Square_Red.png", alt: "Henry Street Settlement" },
  { src: "/logos/university-settlement.jpg", alt: "University Settlement" },
  { src: "/logos/TM-logo.jpeg", alt: "Tenement Museum" },
  { src: "/logos/Loisaida-Center-Logo.png", alt: "The Loisaida Center" },
  { src: "/logos/les-ecology-center.png", alt: "LES Ecology Center" },
  { src: "/logos/lesgc-logo.png", alt: "The Lower Eastside Girls Club" },
  { src: "/logos/porto-rico.jpeg", alt: "Porto Rico Importing Co." },
];

export default function EndorsedBySlider() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <div>
      <p className="mb-4 text-center text-sm font-medium text-zinc-500 dark:text-zinc-500">
        Endorsed by...
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max items-center gap-10 motion-safe:animate-[marquee_25s_linear_infinite]">
          {track.map((logo, i) => (
            <div key={`${logo.src}-${i}`} className="relative h-16 w-40 shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
