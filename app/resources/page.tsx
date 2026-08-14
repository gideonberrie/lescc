import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ArcgisEmbeddedMap from "@/app/_components/arcgis-embedded-map";
import EndorsedBySlider from "@/app/_components/endorsed-by-slider";

export const metadata: Metadata = {
  title: "Resources | LESCC",
  description: "Resources, partners, and documents from LESCC.",
};

export default function ResourcesPage() {
  return (
    <div className="w-full px-[0.5in] py-20">
      <Script
        src="https://js.arcgis.com/5.1/embeddable-components/"
        type="module"
        strategy="afterInteractive"
      />

      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        Resources
      </h1>

      <div className="mt-10">
        <ArcgisEmbeddedMap />
      </div>

      <div className="mt-10">
        <EndorsedBySlider />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          href="#"
          className="rounded-full border border-black/[.08] px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
        >
          Partner Organizations
        </Link>
        <Link
          href="#"
          className="rounded-full border border-black/[.08] px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
        >
          Full RFP
        </Link>
        <Link
          href="#"
          className="rounded-full border border-black/[.08] px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
        >
          Pictures and Renderings
        </Link>
      </div>
    </div>
  );
}
