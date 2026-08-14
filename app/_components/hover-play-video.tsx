"use client";

import { useRef, useState } from "react";

export default function HoverPlayVideo({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play();
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
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
