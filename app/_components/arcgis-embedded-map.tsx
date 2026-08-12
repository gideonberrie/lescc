"use client";

import { useEffect, useRef } from "react";

const MAP_ATTRIBUTES: Record<string, string> = {
  style: "height:600px;width:700px;",
  "item-id": "22ced428cc1c4b36a22533c4d704285f",
  theme: "light",
  "time-zone-label-enabled": "",
  center: "-73.98587375036995,40.72161126040549",
  scale: "36111.909643",
  "portal-url": "https://hmi-science.maps.arcgis.com",
};

export default function ArcgisEmbeddedMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const map = document.createElement("arcgis-embedded-map");
    for (const [name, value] of Object.entries(MAP_ATTRIBUTES)) {
      map.setAttribute(name, value);
    }
    container.appendChild(map);

    return () => {
      container.removeChild(map);
    };
  }, []);

  return (
    <div ref={containerRef} className="mx-auto max-w-full overflow-x-auto" />
  );
}
