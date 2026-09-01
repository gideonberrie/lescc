import Image from "next/image";
import { ENDORSEMENT_LOGOS as LOGOS } from "@/app/_components/endorsements";

export default function EndorsedBySlider() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <div className="w-full">
      <p className="mb-3 text-center text-sm font-bold text-zinc-500 dark:text-zinc-500">
        Endorsed by...
      </p>
      <div className="w-full overflow-hidden">
        <div className="flex w-max items-center gap-16 motion-safe:animate-[marquee_25s_linear_infinite]">
          {track.map((logo, i) => (
            <div key={`${logo.src}-${i}`} className="relative h-24 w-[260px] shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="260px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
