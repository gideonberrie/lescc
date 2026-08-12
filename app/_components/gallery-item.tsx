import Image from "next/image";

export default function GalleryItem({
  src,
  alt,
  eyebrow,
  caption,
  reverse,
  fit = "cover",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  caption: string;
  reverse?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div
      className={`flex flex-col items-center gap-8 py-10 ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 sm:w-1/2 dark:bg-zinc-900">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className={fit === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
      <div className="w-full sm:w-1/2">
        <p className="text-xs font-semibold tracking-wide text-[#068e4a] uppercase">
          {eyebrow}
        </p>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          {caption}
        </p>
      </div>
    </div>
  );
}
