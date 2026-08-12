const PLACEHOLDER_PARTNERS = [
  "Partner One",
  "Partner Two",
  "Partner Three",
  "Partner Four",
  "Partner Five",
  "Partner Six",
];

export default function EndorsedBySlider() {
  const track = [...PLACEHOLDER_PARTNERS, ...PLACEHOLDER_PARTNERS];

  return (
    <div>
      <p className="mb-4 text-center text-sm font-medium text-zinc-500 dark:text-zinc-500">
        Endorsed by...
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max gap-10 motion-safe:animate-[marquee_25s_linear_infinite]">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-lg border border-black/[.08] text-sm text-zinc-500 dark:border-white/[.145] dark:text-zinc-500"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
