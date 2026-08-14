"use client";

import { useEffect, useRef } from "react";

const BASE_ATTRIBUTES: Record<string, string> = {
  "item-id": "22ced428cc1c4b36a22533c4d704285f",
  theme: "light",
  "time-zone-label-enabled": "",
  center: "-73.98587375036995,40.72161126040549",
  scale: "36111.909643",
  "portal-url": "https://hmi-science.maps.arcgis.com",
};

export default function ArcgisEmbeddedMap({
  height = "600px",
  width = "700px",
  className = "mx-auto max-w-full overflow-x-auto",
}: {
  height?: string;
  width?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const map = document.createElement("arcgis-embedded-map");
    map.setAttribute("style", `height:${height};width:${width};`);
    for (const [name, value] of Object.entries(BASE_ATTRIBUTES)) {
      map.setAttribute(name, value);
    }
    container.appendChild(map);

    return () => {
      container.removeChild(map);
    };
  }, [height, width]);

  return <div ref={containerRef} className={className} />;
}
