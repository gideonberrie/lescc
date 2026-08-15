"use client";

import { useEffect, useRef, useState } from "react";
import { useSound } from "@/app/_components/sound-context";

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
  const { enabled: soundEnabled } = useSound();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !playing) return;
    // Clicking the sound toggle is a real user gesture, so a video that's
    // already playing can pick up sound immediately rather than waiting
    // for the next hover.
    video.muted = !soundEnabled;
    if (soundEnabled) video.play().catch(() => {});
  }, [soundEnabled, playing]);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !soundEnabled;
    video.play().catch(() => {});
    setPlaying(true);
  }

  function stop() {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }

  function handleClick() {
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
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
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
