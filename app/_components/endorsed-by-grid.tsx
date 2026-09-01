import Image from "next/image";
import { ENDORSEMENT_LOGOS } from "@/app/_components/endorsements";

export default function EndorsedByGrid() {
  return (
    <div className="w-full max-w-md">
      <p className="mb-4 text-center text-xs font-black tracking-wide uppercase">
        Endorsed by
      </p>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ENDORSEMENT_LOGOS.map((logo) => (
          <li
            key={logo.src}
            className="relative aspect-[3/2] rounded-lg bg-white"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="160px"
              className="object-contain p-4"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
