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
    videoRef.current?.play();
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
      className="group relative h-full w-full min-w-0 cursor-pointer overflow-hidden bg-zinc-900"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
      <span
        className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity ${
          playing ? "opacity-0" : "opacity-100 group-hover:opacity-0"
        }`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-10 w-10 text-white drop-shadow"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </div>
  );
}
