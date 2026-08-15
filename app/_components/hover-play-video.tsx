"use client";

import { useEffect, useRef, useState } from "react";

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
  const wantsPlayRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Browsers never treat "hover" as a user gesture, so unmuted autoplay
    // from a hover is blocked until the visitor has clicked *somewhere* on
    // the page. Catch the very first click anywhere and use it to unmute
    // whatever's currently playing silently, instead of requiring the
    // click to land on this specific tile.
    function unlockSound() {
      const video = videoRef.current;
      if (video && !video.paused && video.muted) {
        video.muted = false;
        video.play().catch(() => {});
      }
    }
    document.addEventListener("click", unlockSound, { once: true });
    return () => document.removeEventListener("click", unlockSound);
  }, []);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    wantsPlayRef.current = true;
    video.muted = false;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        if (!wantsPlayRef.current) return;
        // Unmuted autoplay was blocked — fall back to a silent play so it
        // still plays on hover. Sound kicks in once the visitor clicks
        // anywhere on the page (see the effect above).
        video.muted = true;
        video.play().catch(() => {});
      });
    }
    setPlaying(true);
  }

  function stop() {
    wantsPlayRef.current = false;
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }

  function handleClick() {
    const video = videoRef.current;
    if (!video) return;
    if (playing && video.muted) {
      // Already playing silently because the browser blocked unmuted
      // autoplay on hover — a click is a real user gesture, so unmute and
      // keep playing instead of stopping it.
      video.muted = false;
      video.play().catch(() => {});
      return;
    }
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
