export default function ArcgisEmbeddedMap({
  height,
  className = "mx-auto h-[500px] w-full max-w-3xl overflow-hidden rounded-lg",
}: {
  height?: string;
  className?: string;
}) {
  return (
    <iframe
      src="https://storymaps.arcgis.com/stories/e7c3e7bf866b427ca17d7a455c9f4b8d?cover=false"
      style={height ? { height } : undefined}
      allow="geolocation"
      className={`border-0 ${className}`}
    />
  );
}
