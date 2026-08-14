"use client";

import { useRef, useState } from "react";

export default function HoverPlayVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        // Browsers block unmuted autoplay from a hover (no user gesture yet
        // on the page) — fall back to a silent play so it still plays on
        // hover. Sound kicks in once the visitor has clicked anywhere.
        video.muted = true;
        video.play().catch(() => {});
      });
    }
    setPlaying(true);
  }

  function stop() {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }

  function toggle() {
    if (playing) {
      stop();
    } else {
      play();
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      aria-pressed={playing}
      aria-label={`${playing ? "Pause" : "Play"} ${label}`}
      className="relative h-full w-full min-w-0 cursor-pointer overflow-hidden bg-zinc-900"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
