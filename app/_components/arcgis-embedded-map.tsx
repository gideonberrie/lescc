export default function ArcgisEmbeddedMap({
  height = "500px",
  className = "mx-auto w-full max-w-3xl overflow-hidden rounded-lg",
}: {
  height?: string;
  className?: string;
}) {
  return (
    <iframe
      src="https://storymaps.arcgis.com/stories/e7c3e7bf866b427ca17d7a455c9f4b8d?cover=false"
      width="100%"
      height={height}
      frameBorder="0"
      allowFullScreen
      allow="geolocation"
      className={`border-0 ${className}`}
    />
  );
}
